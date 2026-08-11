import { ORDER_NAME_MAX_LENGTH, buildNewOrderRow } from '@/modules/order/data/order-create';
import { isBudgetOptionalForMethod } from '@/modules/order/constants';
import { isSupplierValidForMethod } from '@/modules/order/data/supplier-sources';
import {
  CHANGE_SUPPLIER_CANCEL_REASON,
  getMigratableSets,
  suggestChangeSupplierOrderName
} from '@/modules/order/data/order-line-change-supplier';
import {
  buildOrderLineCancelPatch,
  formatFlowStats
} from '@/modules/acceptance/data/shortage-actions';

const BATCH_ALLOWED_LINE_STATUS = new Set(['已发订', '处理中']);

/**
 * 解析订单行用于批量入口一致性校验的属性（订户/采选方式取自关联订单）
 * @param {object} line
 * @param {object[]} orders
 * @returns {{ subscriber: string, resourceType: string, language: string, method: string }}
 */
export function getBatchChangeSupplierScopeAttrs(line, orders = []) {
  const order = (orders || []).find(item => item.orderId === line?.orderId);
  return {
    subscriber: String(order?.subscriber || line?.subscriber || '').trim(),
    resourceType: String(line?.resourceType || order?.resourceType || '').trim(),
    language: String(line?.language || order?.language || '').trim(),
    method: String(order?.method || line?.method || '').trim()
  };
}

/**
 * 工具栏「更换供应商」是否可用：
 * 至少勾选 1 行；行状态均为已发订或处理中；且订户/资源类型/语种/采选方式一致
 * @param {object[]} lines
 * @param {string[]} selectedIds
 * @param {object[]} orders
 * @returns {boolean}
 */
export function canBatchChangeSupplier(lines, selectedIds, orders = []) {
  if (!selectedIds?.length) return false;
  const selected = (lines || []).filter(row => selectedIds.includes(row.id));
  if (!selected.length || selected.length !== selectedIds.length) return false;

  if (!selected.every(line => BATCH_ALLOWED_LINE_STATUS.has(line.lineStatus))) {
    return false;
  }

  const first = getBatchChangeSupplierScopeAttrs(selected[0], orders);
  if (!first.subscriber || !first.resourceType || !first.language || !first.method) {
    return false;
  }

  return selected.every(line => {
    const attrs = getBatchChangeSupplierScopeAttrs(line, orders);
    return (
      attrs.subscriber === first.subscriber
      && attrs.resourceType === first.resourceType
      && attrs.language === first.language
      && attrs.method === first.method
    );
  });
}

/**
 * 批量弹窗表单校验（无套数；按行全量可迁出）
 * @param {{ orderName?: string, supplier?: string, budget?: string, reason?: string }} form
 * @param {string} method
 * @returns {{ ok: boolean, message?: string, errors: object }}
 */
export function validateBatchChangeSupplierForm(form, method) {
  /** @type {{ orderName?: string, supplier?: string, budget?: string, reason?: string }} */
  const errors = {};

  const orderName = String(form?.orderName || '').trim();
  if (!orderName) {
    errors.orderName = '请输入订单名称';
  } else if (orderName.length > ORDER_NAME_MAX_LENGTH) {
    errors.orderName = `订单名称不能超过${ORDER_NAME_MAX_LENGTH}个字符`;
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
    message: ok
      ? undefined
      : (errors.orderName || errors.supplier || errors.budget || errors.reason)
  };
}

/**
 * 按勾选订单行可迁出套数组装批量更换供应商结果
 * @param {object} params
 * @param {object[]} params.sourceLines
 * @param {object[]} params.orders
 * @param {object[]} params.existingOrders
 * @param {{ orderName: string, supplier: string, budget: string, reason: string, remark?: string }} params.form
 */
export function buildSelectedLinesChangeSupplierResult({
  sourceLines,
  orders,
  existingOrders,
  form
}) {
  const lines = (sourceLines || []).filter(Boolean);
  if (!lines.length) {
    return { ok: false, message: '请先勾选订单行' };
  }

  if (!canBatchChangeSupplier(lines, lines.map(line => line.id), orders)) {
    return { ok: false, message: '勾选行的订户、资源类型、语种、采选方式须一致' };
  }

  const firstOrder = (orders || []).find(order => order.orderId === lines[0].orderId);
  if (!firstOrder) {
    return { ok: false, message: '未找到原订单' };
  }

  const formCheck = validateBatchChangeSupplierForm(form, firstOrder.method);
  if (!formCheck.ok) return { ok: false, message: formCheck.message };

  const supplier = String(form.supplier || '').trim();
  if (!isSupplierValidForMethod(firstOrder.method, supplier)) {
    return { ok: false, message: '所选供应商不适用于原订单采选方式' };
  }

  const migratableLines = [];
  for (const line of lines) {
    if (!BATCH_ALLOWED_LINE_STATUS.has(line.lineStatus)) {
      return { ok: false, message: `${line.orderLineNo}：仅支持行状态为已发订或处理中的订单行` };
    }
    const migrateSets = getMigratableSets(line);
    if (migrateSets < 1) {
      return { ok: false, message: `${line.orderLineNo}：当前没有可迁出的套数` };
    }
    migratableLines.push({ line, migrateSets });
  }

  const cancelReason = String(form.reason || '').trim() || CHANGE_SUPPLIER_CANCEL_REASON;
  const orderName = String(form.orderName || '').trim()
    || suggestChangeSupplierOrderName(firstOrder.orderName, existingOrders);

  const newOrder = buildNewOrderRow(
    {
      orderName,
      subscriber: firstOrder.subscriber || 'ceshi',
      resourceType: firstOrder.resourceType || '纸质书',
      method: firstOrder.method || '现采',
      budget: form.budget || '',
      language: firstOrder.language || '中文',
      supplier,
      site: firstOrder.site || '华威桥馆',
      discount: firstOrder.discount && firstOrder.discount !== '—' ? firstOrder.discount : ''
    },
    existingOrders
  );
  newOrder.orderStatus = 'pending';
  newOrder.issueRemark = String(form.remark || '').trim();
  newOrder.source = '订单行批量更换供应商';

  const patches = [];
  const newLines = migratableLines.map(({ line: src, migrateSets }, index) => {
    const patch = buildOrderLineCancelPatch(src, migrateSets, cancelReason);
    if (patch) patches.push(patch);

    const orderLineNo = `${newOrder.orderId}-${index + 1}`;
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

  const totalSets = newLines.reduce((sum, line) => sum + (Number(line.sets) || 0), 0);

  return {
    ok: true,
    newOrder,
    newLines,
    patches,
    summary: {
      orderId: newOrder.orderId,
      species: newLines.length,
      sets: totalSets,
      volumes: newOrder.orderVolumes
    }
  };
}
