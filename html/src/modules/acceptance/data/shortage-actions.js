import { parseFlowStats } from '@/modules/order/data/order-line-detail';
import { buildNewOrderRow } from '@/modules/order/data/order-create';

/**
 * @param {{ issued: number, received: number, exchanged: number, returned: number, cancelled: number }} flow
 * @returns {string}
 */
export function formatFlowStats(flow) {
  return `${flow.issued}/${flow.received}/${flow.exchanged}/${flow.returned}/${flow.cancelled}`;
}

/**
 * 撤订套数 = max(催缺套数 − 到货套数, 0)
 * @param {number|string} shortageSets
 * @param {number|string} arrivedSets
 * @returns {number}
 */
export function calcCancelSets(shortageSets, arrivedSets) {
  return Math.max((Number(shortageSets) || 0) - (Number(arrivedSets) || 0), 0);
}

/**
 * @param {Object} orderLine
 * @returns {number}
 */
export function getIssuedSets(orderLine) {
  if (!orderLine) return 0;
  const flow = parseFlowStats(orderLine.flowStats);
  return flow.issued || Number(orderLine.sets) || 0;
}

/**
 * 册数转套数
 * @param {number|string} volumes
 * @param {number|string} copiesInSet
 * @returns {number}
 */
export function volumesToSets(volumes, copiesInSet = 1) {
  const copies = Math.max(Number(copiesInSet) || 1, 1);
  return Math.floor((Number(volumes) || 0) / copies);
}

/**
 * 从催缺详情行取催缺/到货套数
 * @param {Object} detailRow
 * @returns {{ shortageSets: number, arrivedSets: number }}
 */
export function resolveDetailSets(detailRow) {
  if (detailRow.shortageSets != null || detailRow.arrivedSets != null) {
    return {
      shortageSets: Number(detailRow.shortageSets) || 0,
      arrivedSets: Number(detailRow.arrivedSets) || 0
    };
  }
  const copies = Number(detailRow.copiesInSet) || 1;
  return {
    shortageSets: volumesToSets(detailRow.shortageVolumes, copies),
    arrivedSets: volumesToSets(detailRow.arrivedVolumes, copies)
  };
}

/**
 * 按撤订套数生成订单行补丁；撤订套数≤0 返回 null
 * @param {Object} orderLine
 * @param {number} cancelSets
 * @param {string} reason
 * @returns {Object|null}
 */
export function buildOrderLineCancelPatch(orderLine, cancelSets, reason) {
  if (!orderLine || cancelSets <= 0) return null;

  const flow = parseFlowStats(orderLine.flowStats);
  const issued = flow.issued || Number(orderLine.sets) || 0;
  if (issued <= 0) return null;

  const applyCancel = Math.min(cancelSets, issued);
  flow.cancelled += applyCancel;

  const remarkText = `撤订原因：${reason}`;
  const prevRemark = orderLine.remark || orderLine.remarkText || '';
  const patch = {
    orderLineNo: orderLine.orderLineNo,
    flowStats: formatFlowStats(flow),
    hasRemark: true,
    remark: prevRemark ? `${prevRemark}；${remarkText}` : remarkText,
    cancelReason: reason
  };

  if (applyCancel >= issued) {
    patch.lineStatus = '已撤订';
    patch.acceptanceStatus = '';
    return patch;
  }

  const effectivePending = Math.max(issued - flow.cancelled, 0);
  const received = flow.received;
  if (received <= 0) {
    patch.acceptanceStatus = '待验收';
    patch.lineStatus = '已发订';
  } else if (received < effectivePending) {
    patch.acceptanceStatus = '部分收货';
    patch.lineStatus = '处理中';
  } else {
    patch.acceptanceStatus = '收货完成';
    patch.lineStatus = '已关闭';
  }
  return patch;
}

/**
 * 根据催缺行上下文批量生成订单行撤订补丁
 * @param {{ orderLine: Object, shortageSets: number, arrivedSets: number }[]} contexts
 * @param {string} reason
 * @returns {{ patches: Object[], skipped: string[], applied: { orderLineNo: string, cancelSets: number, orderLine: Object }[] }}
 */
export function buildCancelPatchesFromContexts(contexts, reason) {
  const patches = [];
  const skipped = [];
  const applied = [];

  contexts.forEach(ctx => {
    if (!ctx?.orderLine) {
      skipped.push(ctx?.orderLineNo || '未知订单行');
      return;
    }
    const cancelSets = calcCancelSets(ctx.shortageSets, ctx.arrivedSets);
    if (cancelSets <= 0) {
      skipped.push(ctx.orderLine.orderLineNo);
      return;
    }
    const patch = buildOrderLineCancelPatch(ctx.orderLine, cancelSets, reason);
    if (!patch) {
      skipped.push(ctx.orderLine.orderLineNo);
      return;
    }
    patches.push(patch);
    applied.push({
      orderLineNo: ctx.orderLine.orderLineNo,
      cancelSets,
      orderLine: ctx.orderLine
    });
  });

  return { patches, skipped, applied };
}

/**
 * 更换供应商：生成新订单与新订单行（纯数据，不写 store）
 * @param {Object} params
 * @param {Object} params.sourceOrder
 * @param {{ orderLine: Object, cancelSets: number }[]} params.appliedLines
 * @param {{ supplier: string, budget: string, remark?: string }} params.form
 * @param {Object[]} params.existingOrders
 * @returns {{ newOrder: Object, newLines: Object[] }}
 */
export function buildChangeSupplierOrder({ sourceOrder, appliedLines, form, existingOrders }) {
  const now = new Date();
  const orderName = `催缺更换供应商-${sourceOrder?.orderId || '新订单'}`;
  const newOrder = buildNewOrderRow(
    {
      orderName,
      subscriber: sourceOrder?.subscriber || 'ceshi',
      resourceType: sourceOrder?.resourceType || '纸质书',
      method: sourceOrder?.method || '现采',
      budget: form.budget,
      language: sourceOrder?.language || '中文',
      supplier: form.supplier,
      site: sourceOrder?.site || '华威桥馆',
      discount: sourceOrder?.discount && sourceOrder.discount !== '—' ? sourceOrder.discount : ''
    },
    existingOrders
  );

  newOrder.orderStatus = 'pending';
  newOrder.issueRemark = form.remark || '';
  newOrder.source = '催缺更换供应商';

  const eligible = (appliedLines || []).filter(item => item.cancelSets > 0 && item.orderLine);
  const newLines = eligible.map((item, index) => {
    const src = item.orderLine;
    const sets = item.cancelSets;
    const seq = index + 1;
    const orderLineNo = `${newOrder.orderId}-${seq}`;
    return {
      id: orderLineNo,
      orderId: newOrder.orderId,
      site: newOrder.site,
      orderLineNo,
      bibRecordNo: src.bibRecordNo || '',
      actualBibRecordNos: src.actualBibRecordNos ? [...src.actualBibRecordNos] : undefined,
      title: src.title || '',
      resourceId: src.resourceId || '',
      carrier: src.carrier || '',
      author: src.author || '',
      publisher: src.publisher || '',
      publishTime: src.publishTime || '',
      volumeNo: src.volumeNo || '',
      volumeName: src.volumeName || '',
      price: src.price || '0.00',
      currency: src.currency || 'CNY',
      copiesInSet: Number(src.copiesInSet) || 1,
      sets,
      lineStatus: '待发订',
      acceptanceStatus: '',
      settlementStatus: '待申请',
      isShortage: '否',
      flowStats: `${sets}/0/0/0/0`,
      issueTime: '',
      hasRemark: false,
      textLanguage: src.textLanguage || newOrder.language,
      resourceType: src.resourceType || newOrder.resourceType,
      language: src.language || newOrder.language,
      holdingDuplicate: null,
      orderDuplicate: null
    };
  });

  newOrder.orderSpecies = newLines.length;
  newOrder.orderVolumes = newLines.reduce(
    (sum, line) => sum + (Number(line.sets) || 0) * (Number(line.copiesInSet) || 1),
    0
  );
  newOrder.listPrice = newLines
    .reduce((sum, line) => sum + (parseFloat(line.price) || 0) * (Number(line.sets) || 0), 0)
    .toFixed(2);
  newOrder.orderTime = newOrder.orderTime || formatNow(now);

  return { newOrder, newLines };
}

function formatNow(date) {
  const pad = n => String(n).padStart(2, '0');
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())} `
    + `${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;
}

/**
 * 标记催缺单已完成
 * @param {Object} shortageRow
 * @param {string} remarkText
 */
export function markShortageDone(shortageRow, remarkText) {
  if (!shortageRow) return;
  shortageRow.status = 'done';
  shortageRow.actions = false;
  shortageRow.remark = true;
  shortageRow.remarkText = remarkText;
}
