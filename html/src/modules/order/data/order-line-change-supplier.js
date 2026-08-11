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
 * 可迁出套数 = max(0, 发订 − 已收 − 已退 − 已换)
 * @param {Object} line
 * @returns {number}
 */
export function getMigratableSets(line) {
  if (!line) return 0;
  const flow = parseFlowStats(line.flowStats);
  const issued = flow.issued || Number(line.sets) || 0;
  return Math.max(issued - flow.received - flow.returned - flow.exchanged, 0);
}

/** @deprecated 使用 getMigratableSets */
export function getUnreceivedSets(line) {
  return getMigratableSets(line);
}

/**
 * 行操作是否显示「更换供应商」
 * @param {Object} line
 * @returns {boolean}
 */
export function canShowChangeSupplierAction(line) {
  if (!line) return false;
  if (!ALLOWED_LINE_STATUS.has(line.lineStatus)) return false;
  if (!ALLOWED_ACCEPTANCE.has(line.acceptanceStatus)) return false;
  return getMigratableSets(line) >= 1;
}

/**
 * 单行是否满足更换供应商业务条件（不含套数≥1）
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
  return { ok: true };
}

/**
 * 更换供应商默认订单名称：扫描已有「原名-数字」，取 max+1
 * 格式：{原订单名称}-{n}；总长不超过 ORDER_NAME_MAX_LENGTH；提交不校验重名
 * @param {string} sourceOrderName
 * @param {Array<{ orderName?: string }>} [existingOrders]
 * @returns {string}
 */
export function suggestChangeSupplierOrderName(sourceOrderName, existingOrders = []) {
  const baseRaw = String(sourceOrderName || '新订单').trim() || '新订单';
  const escaped = baseRaw.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const pattern = new RegExp(`^${escaped}-(\\d+)$`);

  let maxN = 0;
  (existingOrders || []).forEach(order => {
    const name = String(order?.orderName || '').trim();
    const match = name.match(pattern);
    if (!match) return;
    const n = Number(match[1]);
    if (Number.isFinite(n) && n > maxN) maxN = n;
  });

  const next = maxN + 1;
  const suffix = `-${next}`;
  const maxBase = Math.max(ORDER_NAME_MAX_LENGTH - suffix.length, 1);
  const truncated = baseRaw.length > maxBase ? baseRaw.slice(0, maxBase) : baseRaw;
  return `${truncated}${suffix}`;
}

/**
 * @param {unknown} value
 * @param {number} maxSets
 * @returns {{ ok: boolean, message?: string, sets?: number }}
 */
export function validateMigrateSets(value, maxSets) {
  const raw = String(value ?? '').trim();
  if (!raw) return { ok: false, message: '请填写合法套数（1～可迁出）' };
  if (!/^\d+$/.test(raw)) {
    return { ok: false, message: '请填写合法套数（1～可迁出）' };
  }
  const sets = Number(raw);
  if (sets < 1 || sets > maxSets) {
    return { ok: false, message: '请填写合法套数（1～可迁出）' };
  }
  return { ok: true, sets };
}

/**
 * @param {{ orderName: string, supplier: string, budget: string, reason?: string, remark?: string, sets?: string|number }} form
 * @param {string} method
 * @param {number} maxSets
 * @returns {{
 *   ok: boolean,
 *   message?: string,
 *   migrateSets?: number,
 *   errors: { orderName?: string, sets?: string, supplier?: string, budget?: string, reason?: string }
 * }}
 */
export function validateChangeSupplierForm(form, method, maxSets) {
  /** @type {{ orderName?: string, sets?: string, supplier?: string, budget?: string, reason?: string }} */
  const errors = {};

  const orderName = String(form?.orderName || '').trim();
  if (!orderName) {
    errors.orderName = '请输入订单名称';
  } else if (orderName.length > ORDER_NAME_MAX_LENGTH) {
    errors.orderName = `订单名称不能超过${ORDER_NAME_MAX_LENGTH}个字符`;
  }

  const setsCheck = validateMigrateSets(form?.sets, maxSets);
  if (!setsCheck.ok) {
    errors.sets = setsCheck.message;
  }

  if (!String(form?.supplier || '').trim()) {
    errors.supplier = '请选择供应商';
  }

  if (!isBudgetOptionalForMethod(method) && !String(form?.budget || '').trim()) {
    errors.budget = '请选择预算名称';
  }

  if (!String(form?.reason || '').trim()) {
    errors.reason = '请选择原因';
  }

  const ok = !Object.keys(errors).length;
  return {
    ok,
    errors,
    migrateSets: setsCheck.ok ? setsCheck.sets : undefined,
    message: ok
      ? undefined
      : (errors.orderName || errors.sets || errors.supplier || errors.budget || errors.reason)
  };
}

/**
 * 组装单行部分数量更换供应商结果（纯数据）
 * @param {Object} params
 * @param {Object} params.sourceOrder
 * @param {Object} params.sourceLine
 * @param {{ orderName: string, supplier: string, budget: string, reason: string, remark?: string, sets: string|number }} params.form
 * @param {Object[]} params.existingOrders
 * @returns {{ ok: boolean, message?: string, newOrder?: Object, newLines?: Object[], patches?: Object[] }}
 */
export function buildOrderLineChangeSupplierResult({
  sourceOrder,
  sourceLine,
  form,
  existingOrders
}) {
  const lineCheck = checkChangeSupplierLine(sourceLine);
  if (!lineCheck.ok) return { ok: false, message: lineCheck.reason };

  const maxSets = getMigratableSets(sourceLine);
  if (maxSets < 1) {
    return { ok: false, message: '当前订单行没有可迁出的套数' };
  }

  const formCheck = validateChangeSupplierForm(form, sourceOrder?.method, maxSets);
  if (!formCheck.ok) return { ok: false, message: formCheck.message };

  const migrateSets = formCheck.migrateSets;
  if (migrateSets > maxSets) {
    return { ok: false, message: '可迁出套数不足，请重新填写' };
  }

  const cancelReason = String(form.reason || '').trim() || CHANGE_SUPPLIER_CANCEL_REASON;

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

  const src = sourceLine;
  const patch = buildOrderLineCancelPatch(src, migrateSets, cancelReason);
  const patches = patch ? [patch] : [];

  const orderLineNo = `${newOrder.orderId}-1`;
  const newLines = [{
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
    sets: migrateSets,
    lineStatus: '待发订',
    acceptanceStatus: '',
    settlementStatus: '待申请',
    isShortage: '否',
    flowStats: formatFlowStats({
      issued: migrateSets,
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
  }];

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
