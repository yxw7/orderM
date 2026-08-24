import { parseFlowStats } from '@/modules/order/data/order-line-detail';
import { buildNewOrderRow, ORDER_NAME_MAX_LENGTH } from '@/modules/order/data/order-create';
import { isBudgetOptionalForMethod } from '@/modules/order/constants';
import {
  buildOrderLineCancelPatch,
  formatFlowStats
} from '@/modules/acceptance/data/shortage-actions';

export const CHANGE_SUPPLIER_CANCEL_REASON = '更换供应商';

/** @type {'new'} */
export const CHANGE_SUPPLIER_TARGET_NEW = 'new';
/** @type {'join'} */
export const CHANGE_SUPPLIER_TARGET_JOIN = 'join';

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
 * 读取订单行备注文本
 * @param {Object} [line]
 * @returns {string}
 */
export function getOrderLineRemarkText(line) {
  return String(line?.remark || line?.remarkText || '').trim();
}

/**
 * 更换供应商备注：弹窗填写内容追加在源订单行备注之后
 * @param {string} baseRemark
 * @param {string} addedRemark
 * @returns {string}
 */
export function mergeChangeSupplierRemark(baseRemark, addedRemark) {
  const base = String(baseRemark || '').trim();
  const added = String(addedRemark || '').trim();
  if (!added) return base;
  if (!base) return added;
  return `${base}${added}`;
}

/**
 * 构建源订单行备注补丁（单行）
 * @param {Object} [sourceLine]
 * @param {string} [addedRemark]
 * @returns {{ orderLineNo: string, hasRemark: boolean, remark: string, remarkText: string } | null}
 */
export function buildChangeSupplierSourceLineRemarkPatch(sourceLine, addedRemark) {
  const added = String(addedRemark || '').trim();
  if (!added || !sourceLine?.orderLineNo) return null;
  const merged = mergeChangeSupplierRemark(getOrderLineRemarkText(sourceLine), added);
  return {
    orderLineNo: sourceLine.orderLineNo,
    hasRemark: true,
    remark: merged,
    remarkText: merged
  };
}

/**
 * 构建源订单行备注补丁（批量，每行独立追加）
 * @param {Object[]} sourceLines
 * @param {string} [addedRemark]
 * @returns {{ orderLineNo: string, hasRemark: boolean, remark: string, remarkText: string }[]}
 */
export function buildChangeSupplierSourceLineRemarkPatches(sourceLines, addedRemark) {
  const added = String(addedRemark || '').trim();
  if (!added) return [];
  return (sourceLines || [])
    .map(line => buildChangeSupplierSourceLineRemarkPatch(line, added))
    .filter(Boolean);
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
 * 解析更换供应商加入订单时的维度（资源类型/语种/采选方式）
 * @param {Object} [line]
 * @param {Object} [order]
 */
export function getChangeSupplierScopeFromLine(line, order) {
  return {
    resourceType: String(line?.resourceType || order?.resourceType || '').trim(),
    language: String(line?.language || order?.language || '').trim(),
    method: String(order?.method || line?.method || '').trim()
  };
}

/**
 * 加入订单候选：待发订 + 订户范围 + 资源类型/语种/采选方式 + 供应商/预算
 * @param {object} params
 * @param {object[]} params.orders
 * @param {string[]} params.viewableSubscribers
 * @param {{ resourceType: string, language: string, method: string }} params.scope
 * @param {string} params.supplier
 * @param {string} params.budget
 * @param {boolean} params.budgetOptional
 */
export function getChangeSupplierJoinOrderCandidates({
  orders = [],
  viewableSubscribers = [],
  scope,
  supplier,
  budget,
  budgetOptional
}) {
  const supplierVal = String(supplier || '').trim();
  const budgetVal = String(budget || '').trim();
  if (!supplierVal) return [];
  if (!budgetOptional && !budgetVal) return [];
  if (!scope?.resourceType || !scope?.language || !scope?.method) return [];

  const subscribers = viewableSubscribers?.length ? viewableSubscribers : [];

  return (orders || []).filter(order => {
    if (order.orderStatus !== 'pending') return false;
    if (subscribers.length && !subscribers.includes(order.subscriber)) return false;
    if (String(order.resourceType || '').trim() !== scope.resourceType) return false;
    if (String(order.language || '').trim() !== scope.language) return false;
    if (String(order.method || '').trim() !== scope.method) return false;
    if (String(order.supplier || '').trim() !== supplierVal) return false;
    const orderBudget = String(order.budget || '').trim();
    if (budgetOptional) {
      if (budgetVal) return orderBudget === budgetVal;
      return !orderBudget;
    }
    return orderBudget === budgetVal;
  });
}

/**
 * @param {object} order
 * @returns {string}
 */
export function formatChangeSupplierJoinOrderLabel(order) {
  const name = String(order?.orderName || '').trim() || '—';
  return `${name}（${order.orderId}）`;
}

/**
 * @param {string} orderId
 * @param {object[]} existingLines
 * @returns {number}
 */
export function getNextOrderLineSequence(orderId, existingLines = []) {
  let max = 0;
  (existingLines || []).forEach(line => {
    if (line.orderId !== orderId) return;
    const match = String(line.orderLineNo || '').match(/-(\d+)$/);
    if (!match) return;
    const n = Number(match[1]);
    if (Number.isFinite(n) && n > max) max = n;
  });
  return max + 1;
}

/**
 * @param {string} orderId
 * @param {object[]} lines
 */
export function computeOrderTotalsFromLines(orderId, lines = []) {
  const orderLines = (lines || []).filter(line => line.orderId === orderId);
  return {
    orderSpecies: orderLines.length,
    orderVolumes: orderLines.reduce(
      (sum, line) => sum + (Number(line.sets) || 0) * (Number(line.copiesInSet) || 1),
      0
    ),
    listPrice: orderLines
      .reduce((sum, line) => sum + (parseFloat(line.price) || 0) * (Number(line.sets) || 0), 0)
      .toFixed(2)
  };
}

/**
 * @param {object} src
 * @param {object} targetOrder
 * @param {number} migrateSets
 * @param {string} orderLineNo
 */
export function buildChangeSupplierLineRow(src, targetOrder, migrateSets, orderLineNo) {
  return {
    id: orderLineNo,
    orderId: targetOrder.orderId,
    site: targetOrder.site,
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
    textLanguage: src.textLanguage || targetOrder.language,
    resourceType: src.resourceType || targetOrder.resourceType,
    language: src.language || targetOrder.language,
    budget: targetOrder.budget,
    supplier: targetOrder.supplier,
    orderName: targetOrder.orderName,
    sourceOrderLineNo: src.orderLineNo,
    holdingDuplicate: null,
    orderDuplicate: null,
    productBarcode: src.productBarcode,
    catalogNo: src.catalogNo
  };
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
 * @param {{ orderName?: string, targetOrderId?: string, targetMode?: string, supplier: string, budget: string, reason?: string, remark?: string, sets?: string|number }} form
 * @param {string} method
 * @param {number} maxSets
 * @param {{ joinCandidates?: object[] }} [options]
 * @returns {{
 *   ok: boolean,
 *   message?: string,
 *   migrateSets?: number,
 *   errors: { orderName?: string, sets?: string, supplier?: string, budget?: string, reason?: string }
 * }}
 */
export function validateChangeSupplierForm(form, method, maxSets, options = {}) {
  /** @type {{ orderName?: string, sets?: string, supplier?: string, budget?: string, reason?: string }} */
  const errors = {};
  const targetMode = form?.targetMode || CHANGE_SUPPLIER_TARGET_NEW;

  if (targetMode === CHANGE_SUPPLIER_TARGET_JOIN) {
    const targetOrderId = String(form?.targetOrderId || '').trim();
    if (!targetOrderId) {
      errors.orderName = '请选择待发订订单';
    } else if ((options.joinCandidates || []).every(order => order.orderId !== targetOrderId)) {
      errors.orderName = '目标订单不可用，请重新选择';
    }
  } else {
    const orderName = String(form?.orderName || '').trim();
    if (!orderName) {
      errors.orderName = '请输入订单名称';
    } else if (orderName.length > ORDER_NAME_MAX_LENGTH) {
      errors.orderName = `订单名称不能超过${ORDER_NAME_MAX_LENGTH}个字符`;
    }
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
 * @param {{ orderName: string, targetOrderId?: string, targetMode?: string, supplier: string, budget: string, reason: string, remark?: string, sets: string|number }} params.form
 * @param {Object[]} params.existingOrders
 * @param {Object[]} [params.existingLines]
 * @param {string[]} [params.viewableSubscribers]
 * @returns {{ ok: boolean, message?: string, newOrder?: Object, newLines?: Object[], patches?: Object[], targetOrderId?: string, orderPatch?: Object, summary?: Object }}
 */
export function buildOrderLineChangeSupplierResult({
  sourceOrder,
  sourceLine,
  form,
  existingOrders,
  existingLines = [],
  viewableSubscribers = []
}) {
  const lineCheck = checkChangeSupplierLine(sourceLine);
  if (!lineCheck.ok) return { ok: false, message: lineCheck.reason };

  const maxSets = getMigratableSets(sourceLine);
  if (maxSets < 1) {
    return { ok: false, message: '当前订单行没有可迁出的套数' };
  }

  const scope = getChangeSupplierScopeFromLine(sourceLine, sourceOrder);
  const budgetOptional = isBudgetOptionalForMethod(sourceOrder?.method);
  const joinCandidates = getChangeSupplierJoinOrderCandidates({
    orders: existingOrders,
    viewableSubscribers,
    scope,
    supplier: form.supplier,
    budget: form.budget,
    budgetOptional
  });

  const formCheck = validateChangeSupplierForm(form, sourceOrder?.method, maxSets, { joinCandidates });
  if (!formCheck.ok) return { ok: false, message: formCheck.message };

  const migrateSets = formCheck.migrateSets;
  if (migrateSets > maxSets) {
    return { ok: false, message: '可迁出套数不足，请重新填写' };
  }

  const cancelReason = String(form.reason || '').trim() || CHANGE_SUPPLIER_CANCEL_REASON;
  const patch = buildOrderLineCancelPatch(sourceLine, migrateSets, cancelReason);
  const patches = patch ? [patch] : [];
  const lineRemarkPatch = buildChangeSupplierSourceLineRemarkPatch(sourceLine, form.remark);
  if (lineRemarkPatch) patches.push(lineRemarkPatch);

  const targetMode = form.targetMode || CHANGE_SUPPLIER_TARGET_NEW;

  if (targetMode === CHANGE_SUPPLIER_TARGET_JOIN) {
    const targetOrderId = String(form.targetOrderId || '').trim();
    const targetOrder = (existingOrders || []).find(order => order.orderId === targetOrderId);
    if (!targetOrder || !joinCandidates.some(order => order.orderId === targetOrderId)) {
      return { ok: false, message: '目标订单不可用，请重新选择' };
    }

    const orderLineNo = `${targetOrderId}-${getNextOrderLineSequence(targetOrderId, existingLines)}`;
    const newLine = buildChangeSupplierLineRow(sourceLine, targetOrder, migrateSets, orderLineNo);
    const mergedLines = [...(existingLines || []), newLine];
    const orderPatch = {
      ...computeOrderTotalsFromLines(targetOrderId, mergedLines)
    };

    return {
      ok: true,
      targetOrderId,
      newLines: [newLine],
      patches,
      orderPatch,
      summary: {
        orderId: targetOrderId,
        species: 1,
        sets: migrateSets,
        volumes: (Number(newLine.sets) || 0) * (Number(newLine.copiesInSet) || 1),
        joined: true
      }
    };
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
  newOrder.issueRemark = '';
  newOrder.source = '订单行更换供应商';

  const src = sourceLine;
  const orderLineNo = `${newOrder.orderId}-1`;
  const newLines = [buildChangeSupplierLineRow(src, newOrder, migrateSets, orderLineNo)];

  newOrder.orderSpecies = newLines.length;
  newOrder.orderVolumes = newLines.reduce(
    (sum, line) => sum + (Number(line.sets) || 0) * (Number(line.copiesInSet) || 1),
    0
  );
  newOrder.listPrice = newLines
    .reduce((sum, line) => sum + (parseFloat(line.price) || 0) * (Number(line.sets) || 0), 0)
    .toFixed(2);

  return {
    ok: true,
    newOrder,
    newLines,
    patches,
    summary: {
      orderId: newOrder.orderId,
      species: newLines.length,
      sets: migrateSets,
      volumes: newOrder.orderVolumes,
      joined: false
    }
  };
}
