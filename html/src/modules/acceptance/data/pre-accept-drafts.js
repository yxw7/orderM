/** 预验收草稿：验收单号 + 订单行号 */

const STORAGE_KEY = 'orderm_pre_accept_drafts';

/**
 * @returns {Record<string, Record<string, object>>}
 */
function loadStore() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

/**
 * @param {Record<string, Record<string, object>>} store
 */
function saveStore(store) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
}

/**
 * @param {string} acceptanceId
 * @returns {string}
 */
function normalizeAcceptanceId(acceptanceId) {
  return String(acceptanceId || '').trim();
}

/**
 * @param {string} orderLine
 * @returns {string}
 */
function normalizeOrderLine(orderLine) {
  return String(orderLine || '').trim();
}

/**
 * @param {object} validatedRow
 * @returns {object}
 */
export function buildDraftFromValidatedRow(validatedRow) {
  const fv = validatedRow?.fieldValues || {};
  return {
    orderLine: String(validatedRow?.orderLineNo || fv.orderLine || '').trim(),
    receiveSets: String(validatedRow?.receiveSets ?? fv.receiveQty ?? ''),
    listPrice: String(validatedRow?.listPrice ?? fv.listPrice ?? ''),
    price: String(validatedRow?.price ?? fv.price ?? validatedRow?.listPrice ?? ''),
    netPrice: String(validatedRow?.netPrice ?? fv.netPrice ?? ''),
    copiesInSet: String(validatedRow?.copiesInSet ?? fv.volCount ?? ''),
    /** 通过行全部已映射发货单值（含未勾选是否校验的差异字段） */
    fieldValues: { ...fv },
    updatedAt: Date.now()
  };
}

/**
 * 写入通过行草稿；同验收单下同订单行已有草稿则覆盖
 * @param {string} acceptanceId
 * @param {object[]} passedRows
 * @returns {number} 写入条数
 */
export function upsertPreAcceptDrafts(acceptanceId, passedRows) {
  const aid = normalizeAcceptanceId(acceptanceId);
  if (!aid) return 0;
  const store = loadStore();
  const bucket = { ...(store[aid] || {}) };
  let count = 0;
  (passedRows || []).forEach(row => {
    const draft = buildDraftFromValidatedRow(row);
    if (!draft.orderLine) return;
    bucket[draft.orderLine] = draft;
    count += 1;
  });
  store[aid] = bucket;
  saveStore(store);
  return count;
}

/**
 * @param {string} acceptanceId
 * @param {string} orderLine
 * @returns {object|null}
 */
export function getPreAcceptDraft(acceptanceId, orderLine) {
  const aid = normalizeAcceptanceId(acceptanceId);
  const ol = normalizeOrderLine(orderLine);
  if (!aid || !ol) return null;
  const store = loadStore();
  return store[aid]?.[ol] || null;
}

/**
 * @param {string} acceptanceId
 * @param {string} orderLine
 */
export function clearPreAcceptDraft(acceptanceId, orderLine) {
  const aid = normalizeAcceptanceId(acceptanceId);
  const ol = normalizeOrderLine(orderLine);
  if (!aid || !ol) return;
  const store = loadStore();
  if (!store[aid]?.[ol]) return;
  delete store[aid][ol];
  if (!Object.keys(store[aid]).length) delete store[aid];
  saveStore(store);
}
