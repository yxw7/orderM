import { defineStore } from 'pinia';
import { shortageRows } from '@/modules/acceptance/data/shortage-manage';
import { buildShortageListRows } from '@/modules/order/data/shortage-generate';
import { getShortageDetailRows } from '@/modules/acceptance/data/shortage-detail';
import {
  buildCancelPatchesFromContexts,
  buildChangeSupplierOrder,
  markShortageDone,
  resolveDetailSets
} from '@/modules/acceptance/data/shortage-actions';
import { useOrderStore } from '@/modules/order/stores/order';

export const useShortageStore = defineStore('shortage', {
  state: () => ({
    rows: shortageRows.map(row => ({
      ...row,
      lineRefs: row.lineRefs ? row.lineRefs.map(ref => ({ ...ref })) : undefined,
      detailLines: undefined
    })),
    lastGenerated: []
  }),

  actions: {
    addGeneratedShortages(groups, orders) {
      const nextId = this.rows.length ? Math.max(...this.rows.map(row => row.id)) + 1 : 1;
      const built = buildShortageListRows(groups, orders, nextId);
      this.lastGenerated = built.map(({ lineRows, ...row }) => ({ ...row }));
      built.forEach(row => {
        this.rows.unshift({ ...row });
      });
      return this.lastGenerated;
    },

    findByShortageId(shortageId) {
      return this.rows.find(row => row.shortageId === shortageId);
    },

    /**
     * 确保催缺单有可编辑的详情行快照
     * @param {Object} shortageRow
     * @returns {Object[]}
     */
    ensureDetailLines(shortageRow) {
      if (!shortageRow.detailLines?.length) {
        shortageRow.detailLines = getShortageDetailRows(shortageRow.shortageId, shortageRow)
          .map((row, index) => ({ ...row, id: index + 1 }));
      }
      return shortageRow.detailLines;
    },

    /**
     * 解析催缺行 → 订单行上下文
     * @param {Object} shortageRow
     * @param {string[]} [orderLineNos] - 限定订单行；空则整单
     * @returns {{ orderLine: Object, shortageSets: number, arrivedSets: number, orderLineNo: string, detailRow?: Object }[]}
     */
    resolveLineContexts(shortageRow, orderLineNos = null) {
      const orderStore = useOrderStore();
      const detailLines = this.ensureDetailLines(shortageRow);
      const targets = orderLineNos?.length
        ? detailLines.filter(row => orderLineNos.includes(row.orderLineNo))
        : detailLines.filter(row => row.status === 'pending' && row.actions);

      return targets.map(detailRow => {
        const { shortageSets, arrivedSets } = resolveDetailSets(detailRow);
        const orderLine = orderStore.lines.find(l => l.orderLineNo === detailRow.orderLineNo) || null;
        return {
          orderLineNo: detailRow.orderLineNo,
          orderLine,
          shortageSets,
          arrivedSets,
          detailRow
        };
      });
    },

    /**
     * 整单或按行撤订
     * @param {number[]|string[]} shortageIdsOrId - 列表用催缺单 id；详情可传 shortageId 字符串时用 find
     * @param {string} reason
     * @param {{ orderLineNos?: string[] }} [options]
     * @returns {{ ok: boolean, message: string, updatedLineCount: number, skipped: string[] }}
     */
    cancelShortage(shortageRowIds, reason, options = {}) {
      const orderStore = useOrderStore();
      const ids = Array.isArray(shortageRowIds) ? shortageRowIds : [shortageRowIds];
      let updatedLineCount = 0;
      const allSkipped = [];

      ids.forEach(id => {
        const shortageRow = this.rows.find(row => row.id === id || row.shortageId === id);
        if (!shortageRow || shortageRow.status === 'done') return;

        const contexts = this.resolveLineContexts(shortageRow, options.orderLineNos || null);
        const { patches, skipped, applied } = buildCancelPatchesFromContexts(contexts, reason);
        allSkipped.push(...skipped);

        if (patches.length) {
          orderStore.applyLinePatches(patches);
          updatedLineCount += patches.length;

          const appliedNos = new Set(applied.map(item => item.orderLineNo));
          this.ensureDetailLines(shortageRow).forEach(detailRow => {
            if (!appliedNos.has(detailRow.orderLineNo)) return;
            detailRow.status = 'done';
            detailRow.actions = false;
            detailRow.remark = true;
            detailRow.remarkText = `撤订原因：${reason}`;
          });
        }

        const stillOpen = this.ensureDetailLines(shortageRow)
          .some(row => row.status === 'pending' && row.actions);
        if (options.orderLineNos) {
          if (!stillOpen) markShortageDone(shortageRow, `撤订原因：${reason}`);
        } else if (patches.length) {
          markShortageDone(shortageRow, `撤订原因：${reason}`);
        }
      });

      if (!updatedLineCount) {
        return {
          ok: false,
          message: allSkipped.length
            ? `未更新订单行（跳过：${allSkipped.join('、')}）`
            : '没有可撤订的订单行',
          updatedLineCount: 0,
          skipped: allSkipped
        };
      }

      return {
        ok: true,
        message: allSkipped.length
          ? `撤订成功（${updatedLineCount} 行）；跳过：${allSkipped.join('、')}`
          : '撤订成功',
        updatedLineCount,
        skipped: allSkipped
      };
    },

    /**
     * 更换供应商：撤订原行并生成新订单
     * @param {number[]} shortageRowIds
     * @param {{ supplier: string, budget: string, remark?: string }} form
     * @returns {{ ok: boolean, message: string, newOrderIds: string[] }}
     */
    changeSupplier(shortageRowIds, form) {
      const orderStore = useOrderStore();
      const ids = Array.isArray(shortageRowIds) ? shortageRowIds : [shortageRowIds];
      const newOrderIds = [];
      let updatedLineCount = 0;
      const allSkipped = [];

      ids.forEach(id => {
        const shortageRow = this.rows.find(row => row.id === id || row.shortageId === id);
        if (!shortageRow || shortageRow.status === 'done') return;

        const contexts = this.resolveLineContexts(shortageRow, null);
        const reason = form.remark?.trim()
          ? `更换供应商：${form.supplier}（${form.remark.trim()}）`
          : `更换供应商：${form.supplier}`;
        const { patches, skipped, applied } = buildCancelPatchesFromContexts(contexts, reason);
        allSkipped.push(...skipped);

        if (!applied.length) return;

        const sourceOrder = orderStore.orders.find(o => o.orderId === shortageRow.orderId)
          || orderStore.orders.find(o => applied.some(a => a.orderLine.orderId === o.orderId))
          || {
            orderId: shortageRow.orderId,
            subscriber: 'ceshi',
            site: shortageRow.location,
            resourceType: shortageRow.type,
            language: '中文',
            method: '现采',
            discount: ''
          };

        const { newOrder, newLines } = buildChangeSupplierOrder({
          sourceOrder,
          appliedLines: applied,
          form,
          existingOrders: orderStore.orders
        });

        orderStore.applyLinePatches(patches);
        orderStore.addOrderWithLines(newOrder, newLines);
        updatedLineCount += patches.length;
        newOrderIds.push(newOrder.orderId);

        const appliedNos = new Set(applied.map(item => item.orderLineNo));
        this.ensureDetailLines(shortageRow).forEach(detailRow => {
          if (!appliedNos.has(detailRow.orderLineNo)) return;
          detailRow.status = 'done';
          detailRow.actions = false;
          detailRow.remark = true;
          detailRow.remarkText = reason;
        });
        markShortageDone(
          shortageRow,
          `更换供应商：${form.supplier}，新订单 ${newOrder.orderId}`
        );
      });

      if (!newOrderIds.length) {
        return {
          ok: false,
          message: allSkipped.length
            ? `未生成新订单（跳过：${allSkipped.join('、')}）`
            : '没有可更换供应商的订单行',
          newOrderIds: []
        };
      }

      return {
        ok: true,
        message: `生成新订单成功：${newOrderIds.join('、')}`,
        newOrderIds,
        updatedLineCount,
        skipped: allSkipped
      };
    }
  }
});
