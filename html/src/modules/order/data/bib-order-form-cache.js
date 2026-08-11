const CREATE_ORDER_CACHE_KEY = 'orderm.create-order-form';
const CREATE_ORDER_CACHE_KEY_LEGACY = 'orderm.bib-create-order-form';
const ACCEPTANCE_FORM_CACHE_KEY = 'orderm.acceptance-form';
const JOIN_ORDER_CACHE_KEY = 'orderm.bib-join-order-form';

/** 新建订单（列表 + 书目）可缓存字段 */
export const CREATE_ORDER_CACHE_FIELDS = [
  'resourceType',
  'language',
  'method',
  'budget',
  'supplier'
];

/** 新增验收单可缓存字段（无预算） */
export const ACCEPTANCE_FORM_CACHE_FIELDS = [
  'resourceType',
  'language',
  'method',
  'supplier'
];

function readCache(key) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function writeCache(key, data) {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch {
    // ignore quota / privacy errors
  }
}

/**
 * @param {Record<string, unknown> | null | undefined} source
 * @param {string[]} fields
 */
export function pickFormCacheFields(source, fields) {
  /** @type {Record<string, string>} */
  const picked = {};
  if (!source || typeof source !== 'object') return picked;
  for (const key of fields) {
    const value = source[key];
    picked[key] = value == null ? '' : String(value);
  }
  return picked;
}

export function loadJoinOrderFormCache() {
  return readCache(JOIN_ORDER_CACHE_KEY);
}

/** @param {Record<string, unknown>} data */
export function saveJoinOrderFormCache(data) {
  writeCache(JOIN_ORDER_CACHE_KEY, data);
}

/** 订单列表 / 书目新建订单共用 */
export function loadCreateOrderFormCache() {
  const current = readCache(CREATE_ORDER_CACHE_KEY);
  if (current) return pickFormCacheFields(current, CREATE_ORDER_CACHE_FIELDS);
  return pickFormCacheFields(readCache(CREATE_ORDER_CACHE_KEY_LEGACY), CREATE_ORDER_CACHE_FIELDS);
}

/** @param {Record<string, unknown>} data */
export function saveCreateOrderFormCache(data) {
  writeCache(CREATE_ORDER_CACHE_KEY, pickFormCacheFields(data, CREATE_ORDER_CACHE_FIELDS));
}

export function loadAcceptanceFormCache() {
  return pickFormCacheFields(readCache(ACCEPTANCE_FORM_CACHE_KEY), ACCEPTANCE_FORM_CACHE_FIELDS);
}

/** @param {Record<string, unknown>} data */
export function saveAcceptanceFormCache(data) {
  writeCache(ACCEPTANCE_FORM_CACHE_KEY, pickFormCacheFields(data, ACCEPTANCE_FORM_CACHE_FIELDS));
}
