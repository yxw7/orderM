import { parseFlowStats } from '@/modules/order/data/order-line-detail';
import { buildNewOrderRow, ORDER_NAME_MAX_LENGTH } from '@/modules/order/data/order-create';
import { isBudgetOptionalForMethod } from '@/modules/order/constants';
import {
  buildOrderLineCancelPatch,
  formatFlowStats
} from '@/modules/acceptance/data/shortage-actions';

export const CHANGE_SUPPLIER_CANCEL_REASON = '更换供应商';

const ALLOWED_LINE_STATUS = new Set(['已发订', '处理中']);
const ALLOWED_ACCEPTANCE = new Set(['待验收', '部分收货', '换货中']);

/**
 * 未收货套数 = max(0, 发订 − 已收 − 已换 − 已退)
 * @param {Object} line
 * @returns {number}
 */
export function getUnreceivedSets(line) {
  if (!line) return 0;
  const flow = parseFlowStats(line.flowStats);
  const issued = flow.issued || Number(line.sets) || 0;
  return Math.max(issued - flow.received - flow.exchanged - flow.returned, 0);
}

/**
 * 单行是否满足更换供应商启用条件（不含未收货>0）
 * @param {Object} line
 * @returns {{ ok: boolean, reason?: string }}
 */
export function checkChangeSupplierLine(line) {
  if (!line) return { ok: false, reason: '订单行不存在' };
  if (!ALLOWED_LINE_STATUS.has(line.lineStatus)) {
    return { ok: false, reason: '仅支持行状态为已发订或处理中的订单行' };
  }
  if (!ALLOWED_ACCEPTANCE.has(line.acceptanceStatus)) {
    return { ok: false, reason: '仅支持验收状态为待验收、部分收货或换货中的订单行' };
  }
  if (line.isShortage === '是') {
    return { ok: false, reason: '已生成催缺的订单行请在催缺管理中更换供应商' };
  }
  return { ok: true };
}

/**
 * 勾选集合是否可启用「更换供应商」
 * @param {Object[]} lines
 * @returns {{ ok: boolean, reason?: string }}
 */
export function canChangeSupplierSelection(lines) {
  if (!lines?.length) {
    return { ok: false, reason: '请先勾选订单行' };
  }
  const orderId = lines[0].orderId;
  if (lines.some(line => line.orderId !== orderId)) {
    return { ok: false, reason: '请勾选同一订单号下的订单行' };
  }
  for (const line of lines) {
    const check = checkChangeSupplierLine(line);
    if (!check.ok) return check;
  }
  return { ok: true };
}

/**
 * 在原订单名称后追加「-1」作为建议名
 * @param {string} sourceOrderName
 * @returns {string}
 */
export function suggestChangeSupplierOrderName(sourceOrderName) {
  const base = String(sourceOrderName || '新订单').trim() || '新订单';
  const suffix = '-1';
  const maxBase = Math.max(ORDER_NAME_MAX_LENGTH - suffix.length, 1);
  const truncated = base.length > maxBase ? base.slice(0, maxBase) : base;
  return `${truncated}${suffix}`;
}

/**
 * @param {{ orderName: string, supplier: string, budget: string, remark?: string }} form
 * @param {string} method
 * @returns {{ ok: boolean, message?: string }}
 */
export function validateChangeSupplierForm(form, method) {
  const orderName = String(form?.orderName || '').trim();
  if (!orderName) return { ok: false, message: '请输入订单名称' };
  if (orderName.length > ORDER_NAME_MAX_LENGTH) {
    return { ok: false, message: `订单名称不能超过${ORDER_NAME_MAX_LENGTH}个字符` };
  }
  if (!String(form?.supplier || '').trim()) {
    return { ok: false, message: '请选择供应商' };
  }
  if (!isBudgetOptionalForMethod(method) && !String(form?.budget || '').trim()) {
    return { ok: false, message: '请选择预算名称' };
  }
  return { ok: true };
}

/**
 * 组装更换供应商结果（纯数据）
 * @param {Object} params
 * @param {Object} params.sourceOrder
 * @param {Object[]} params.selectedLines
 * @param {{ orderName: string, supplier: string, budget: string, remark?: string }} params.form
 * @param {Object[]} params.existingOrders
 * @returns {{ ok: boolean, message?: string, newOrder?: Object, newLines?: Object[], patches?: Object[] }}
 */
export function buildOrderLineChangeSupplierResult({
  sourceOrder,
  selectedLines,
  form,
  existingOrders
}) {
  const selection = canChangeSupplierSelection(selectedLines);
  if (!selection.ok) return { ok: false, message: selection.reason };

  const formCheck = validateChangeSupplierForm(form, sourceOrder?.method);
  if (!formCheck.ok) return { ok: false, message: formCheck.message };

  const participants = selectedLines
    .map(line => ({ line, unreceived: getUnreceivedSets(line) }))
    .filter(item => item.unreceived > 0);

  if (!participants.length) {
    return { ok: false, message: '所选订单行没有可迁出的未收货套数' };
  }

  const orderName = String(form.orderName || '').trim();
  const newOrder = buildNewOrderRow(
    {
      orderName,
      subscriber: sourceOrder?.subscriber || 'ceshi',
      resourceType: sourceOrder?.resourceType || '纸质书',
      method: sourceOrder?.method || '现采',
      budget: form.budget || '',
      language: sourceOrder?.language || '中文',
      supplier: form.supplier,
      site: sourceOrder?.site || '华威桥馆',
      discount: sourceOrder?.discount && sourceOrder.discount !== '—' ? sourceOrder.discount : ''
    },
    existingOrders
  );
  newOrder.orderStatus = 'pending';
  newOrder.issueRemark = String(form.remark || '').trim();
  newOrder.source = '订单行更换供应商';

  const patches = [];
  const newLines = participants.map((item, index) => {
    const src = item.line;
    const sets = item.unreceived;
    const patch = buildOrderLineCancelPatch(src, sets, CHANGE_SUPPLIER_CANCEL_REASON);
    if (patch) patches.push(patch);

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
      flowStats: formatFlowStats({
        issued: sets,
        received: 0,
        exchanged: 0,
        returned: 0,
        cancelled: 0
      }),
      issueTime: '',
      hasRemark: false,
      textLanguage: src.textLanguage || newOrder.language,
      resourceType: src.resourceType || newOrder.resourceType,
      language: src.language || newOrder.language,
      budget: newOrder.budget,
      supplier: newOrder.supplier,
      orderName: newOrder.orderName,
      sourceOrderLineNo: src.orderLineNo,
      holdingDuplicate: null,
      orderDuplicate: null,
      productBarcode: src.productBarcode,
      catalogNo: src.catalogNo
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

  return { ok: true, newOrder, newLines, patches };
}
