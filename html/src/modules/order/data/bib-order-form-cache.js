const JOIN_ORDER_CACHE_KEY = 'orderm.bib-join-order-form';
const CREATE_ORDER_CACHE_KEY = 'orderm.bib-create-order-form';

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

export function loadJoinOrderFormCache() {
  return readCache(JOIN_ORDER_CACHE_KEY);
}

/** @param {Record<string, unknown>} data */
export function saveJoinOrderFormCache(data) {
  writeCache(JOIN_ORDER_CACHE_KEY, data);
}

export function loadCreateOrderFormCache() {
  return readCache(CREATE_ORDER_CACHE_KEY);
}

/** @param {Record<string, unknown>} data */
export function saveCreateOrderFormCache(data) {
  writeCache(CREATE_ORDER_CACHE_KEY, data);
}
