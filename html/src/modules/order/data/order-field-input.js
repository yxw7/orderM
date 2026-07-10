/** @constant {number} 订单备注最大字符数 */
export const ORDER_REMARK_MAX_LENGTH = 500;

/**
 * 输入过程中保留最多两位小数的数值文本（允许输入中间态如 "0."）
 * @param {string} raw
 * @param {number} [maxDecimals=2]
 * @returns {string}
 */
export function sanitizeDecimalInput(raw, maxDecimals = 2) {
  let value = String(raw ?? '').replace(/[^\d.]/g, '');
  const dotIndex = value.indexOf('.');
  if (dotIndex === -1) return value;
  const intPart = value.slice(0, dotIndex);
  const decPart = value.slice(dotIndex + 1).replace(/\./g, '').slice(0, maxDecimals);
  return `${intPart}.${decPart}`;
}

/**
 * 输入过程中仅保留非负整数文本（0、1、2…）
 * @param {string} raw
 * @returns {string}
 */
export function sanitizeNonNegativeIntegerInput(raw) {
  return String(raw ?? '').replace(/\D/g, '');
}

/**
 * 输入过程中仅保留正整数文本
 * @param {string} raw
 * @returns {string}
 */
export function sanitizePositiveIntegerInput(raw) {
  return sanitizeNonNegativeIntegerInput(raw);
}

/**
 * 校验订单折扣：选填；若填写则须大于 0 且小于等于 1，最多两位小数
 * @param {string} value
 * @returns {{ valid: boolean, message?: string }}
 */
export function validateOrderDiscount(value) {
  const trimmed = String(value ?? '').trim();
  if (!trimmed) return { valid: true };
  if (!/^\d+(\.\d{1,2})?$/.test(trimmed)) {
    return { valid: false, message: '折扣须为大于0且小于等于1的数值，最多两位小数' };
  }
  const num = Number(trimmed);
  if (num <= 0 || num > 1) {
    return { valid: false, message: '折扣须为大于0且小于等于1的数值，最多两位小数' };
  }
  return { valid: true };
}

/**
 * 校验定价：必填；须为有效数值且最多两位小数
 * @param {string} value
 * @returns {{ valid: boolean, message?: string }}
 */
export function validateOrderPrice(value) {
  const trimmed = String(value ?? '').trim();
  if (!trimmed) {
    return { valid: false, message: '请输入定价' };
  }
  if (!/^\d+(\.\d{1,2})?$/.test(trimmed)) {
    return { valid: false, message: '定价须为有效数值，最多两位小数' };
  }
  if (Number(trimmed) < 0) {
    return { valid: false, message: '定价须为有效数值，最多两位小数' };
  }
  return { valid: true };
}

/**
 * 校验非负整数（≥ 0）
 * @param {string|number} value
 * @returns {boolean}
 */
export function isValidNonNegativeInteger(value) {
  const trimmed = String(value ?? '').trim();
  if (!trimmed) return false;
  if (!/^\d+$/.test(trimmed)) return false;
  return Number(trimmed) >= 0;
}

/**
 * 校验正整数
 * @param {string|number} value
 * @returns {boolean}
 */
export function isValidPositiveInteger(value) {
  const trimmed = String(value ?? '').trim();
  if (!trimmed) return false;
  if (!/^[1-9]\d*$/.test(trimmed)) return false;
  return true;
}
