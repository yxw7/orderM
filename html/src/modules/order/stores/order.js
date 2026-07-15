import { defineStore } from 'pinia';
import {
  orderListRows,
  orderLineRows,
  defaultNewOrderForm,
  defaultImportOrderForm,
  defaultEditOrderForm,
  defaultIssueOrderForm,
  defaultCancelForm
} from '@/modules/order/data/orders';
import {
  canDedupOrderLine,
  getOrderLineLanguageCategory,
  getOrderLineResourceType,
  performOrderLineDedupAsync
} from '@/modules/order/data/dedup';
import { buildNewOrderRow, buildBibCreateOrderRow, renumberOrderRows } from '@/modules/order/data/order-create';
import { issueOrder as performIssueOrder } from '@/modules/order/data/order-issue';
import { applyOrderImport } from '@/modules/order/data/order-import';
import { deletePendingOrder } from '@/modules/order/data/order-delete';
import { BATCH_DEDUP_MAX_COUNT } from '@/modules/order/constants';

export const useOrderStore = defineStore('order', {
  state: () => ({
    orders: orderListRows.map(r => ({ ...r })),
    lines: orderLineRows.map(r => ({ ...r })),
    activeTab: 'order-list',
    modal: null,
    modalContext: {},
    dedupModalOpen: false,
    dedupTargetLineNos: [],
    dedupResourceType: '纸质书',
    dedupLanguageCategory: '中文',
    dedupDrawerOpen: false,
    dedupDrawerType: 'holding',
    dedupDrawerLine: null,
    forms: {
      newOrder: { ...defaultNewOrderForm },
      importOrder: { ...defaultImportOrderForm },
      editOrder: { ...defaultEditOrderForm },
      issueOrder: { ...defaultIssueOrderForm },
      cancel: { ...defaultCancelForm },
      editLine: {},
      exportScope: 'order'
    },
    exportFields: []
  }),

  actions: {
    setActiveTab(tab) {
      this.activeTab = tab;
    },

    openModal(name, context = {}) {
      this.modal = name;
      this.modalContext = context;
      if (name === 'editOrder' && context.order) {
        this.forms.editOrder = {
          budget: context.order.budget || '',
          supplier: context.order.supplier || '',
          issueRemark: context.order.issueRemark || ''
        };
      }
      if (name === 'editLine' && context.line) {
        this.forms.editLine = { ...context.line };
      }
      if (name === 'exportConfig') {
        this.forms.exportScope = context.scope || 'order';
      }
      if (name === 'newOrder') {
        this.forms.newOrder = { ...defaultNewOrderForm };
      }
      if (name === 'issueOrder') {
        this.forms.issueOrder = { ...defaultIssueOrderForm };
      }
    },

    closeModal() {
      this.modal = null;
      this.modalContext = {};
    },

    updateOrder(orderId, patch) {
      const target = this.orders.find(o => o.orderId === orderId);
      if (target) Object.assign(target, patch);
    },

    updateLine(lineNo, patch) {
      const target = this.lines.find(l => l.orderLineNo === lineNo);
      if (target) Object.assign(target, patch);
    },

    openDedupModal(lineNos) {
      const rows = lineNos
        .map(no => this.lines.find(l => l.orderLineNo === no))
        .filter(Boolean);

      if (!rows.length) return;
      if (rows.some(row => !canDedupOrderLine(row, this.orders))) {
        window.alert('仅支持行状态为待发订的订单行进行查重');
        return;
      }

      this.dedupTargetLineNos = lineNos;
      this.dedupResourceType = getOrderLineResourceType(rows[0], this.orders);
      this.dedupLanguageCategory = getOrderLineLanguageCategory(rows[0], this.orders);
      this.dedupModalOpen = true;
    },

    openBatchDedupModal(selectedIds) {
      const selected = this.lines.filter(r => selectedIds.includes(r.id));
      if (!selected.length) return;

      if (selected.length > BATCH_DEDUP_MAX_COUNT) {
        window.alert(`批量查重最多支持 ${BATCH_DEDUP_MAX_COUNT} 条订单行`);
        return;
      }

      const eligible = selected.filter(r => canDedupOrderLine(r, this.orders));
      if (eligible.length !== selected.length) {
        window.alert('仅支持行状态为待发订的订单行进行查重');
        return;
      }

      const first = eligible[0];
      const sameGroup = eligible.every(r =>
        getOrderLineResourceType(r, this.orders) === getOrderLineResourceType(first, this.orders)
        && getOrderLineLanguageCategory(r, this.orders) === getOrderLineLanguageCategory(first, this.orders)
      );

      if (!sameGroup) {
        window.alert('请勾选相同资源类型和语种（中文/外文）的待发订订单行进行查重');
        return;
      }

      this.openDedupModal(eligible.map(r => r.orderLineNo));
    },

    closeDedupModal() {
      this.dedupModalOpen = false;
      this.dedupTargetLineNos = [];
    },

    /**
     * 提交查重配置并等待查重结果
     * @param {Object} config - 查重配置
     * @returns {Promise<void>}
     */
    async submitDedup(config) {
      await performOrderLineDedupAsync(
        this.lines,
        this.orders,
        this.dedupTargetLineNos,
        config
      );
      this.closeDedupModal();
    },

    openDedupDrawer(line, duplicateType) {
      if (line[duplicateType === 'holding' ? 'holdingDuplicate' : 'orderDuplicate'] !== true) return;
      this.dedupDrawerLine = line;
      this.dedupDrawerType = duplicateType;
      this.dedupDrawerOpen = true;
    },

    closeDedupDrawer() {
      this.dedupDrawerOpen = false;
      this.dedupDrawerLine = null;
    },

    addOrder(form) {
      const row = buildNewOrderRow(form, this.orders);
      this.orders.unshift(row);
      renumberOrderRows(this.orders);
    },

    /**
     * 书目查询新建订单：按馆址批量创建，来源为元数据，状态待发订。
     * @param {{ sites: string[], orderIds: string[] } & Record<string, string>} payload
     */
    addBibCreateOrders(payload) {
      const { sites, orderIds, ...form } = payload;
      sites.forEach((site, index) => {
        const row = buildBibCreateOrderRow(form, site, orderIds[index], this.orders.length);
        this.orders.unshift(row);
      });
      renumberOrderRows(this.orders);
    },

    issueOrder(issueRemark) {
      const result = performIssueOrder(
        this.modalContext.orderId,
        issueRemark,
        this.orders,
        this.lines
      );
      if (!result.ok) {
        window.alert(result.message);
        return false;
      }
      return true;
    },

    completeOrderImport(parseResult) {
      const order = this.orders.find(row => row.orderId === this.modalContext.orderId);
      const result = applyOrderImport(order, this.lines, parseResult);
      if (!result.ok) {
        window.alert(result.message);
        return false;
      }
      return true;
    },

    deleteOrder() {
      const result = deletePendingOrder(this.modalContext.orderId, this.orders, this.lines);
      if (!result.ok) {
        window.alert(result.message);
        return false;
      }
      this.orders = result.orders;
      this.lines = result.lines;
      return true;
    },

    /**
     * 撤订订单或订单行
     * @param {string} reason - 撤订原因
     * @returns {{ ok: boolean, message?: string }}
     */
    cancelOrders(reason) {
      const { orderId, orderIds, lineNo, lineNos } = this.modalContext;
      const targetLineNos = lineNo ? [lineNo] : (lineNos || []);
      const targetOrderIds = orderId ? [orderId] : (orderIds || []);

      if (targetLineNos.length) {
        targetLineNos.forEach(no => {
          const line = this.lines.find(item => item.orderLineNo === no);
          if (line) {
            Object.assign(line, {
              lineStatus: '已撤订',
              cancelReason: reason,
              hasRemark: true,
              remark: `撤订原因：${reason}`
            });
          }
        });
        return { ok: true };
      }

      if (!targetOrderIds.length) {
        return { ok: false, message: '请先勾选要撤订的订单' };
      }

      targetOrderIds.forEach(id => {
        const order = this.orders.find(item => item.orderId === id);
        if (order) {
          Object.assign(order, {
            orderStatus: 'cancelled',
            cancelReason: reason
          });
        }
        this.lines
          .filter(line => line.orderId === id)
          .forEach(line => {
            Object.assign(line, {
              lineStatus: '已撤订',
              cancelReason: reason,
              hasRemark: true,
              remark: `撤订原因：${reason}`
            });
          });
      });

      return { ok: true };
    }
  }
});
