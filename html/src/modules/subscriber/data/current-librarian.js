import { appConfig } from '@/config/app-config';
import { librarianRows } from '@/modules/subscriber/stores/association';

/** 当前登录馆员未关联订户时的提示文案 */
export const NO_ASSOCIATED_SUBSCRIBER_MESSAGE = '您没有关联订户，无法查看数据';

/** 当前登录馆员未关联订户时无法新建订单的提示文案 */
export const NO_ASSOCIATED_SUBSCRIBER_CREATE_ORDER_MESSAGE = '您没有关联订户，无法新建订单';

/** 当前登录馆员未关联订户时无法加入订单的提示文案 */
export const NO_ASSOCIATED_SUBSCRIBER_JOIN_ORDER_MESSAGE = '您没有关联订户，无法加入订单';

/**
 * 解析馆员关联订户名称列表
 * @param {string} [text]
 * @returns {string[]}
 */
export function parseLibrarianSubscriberNames(text) {
  return String(text || '')
    .split(/[,、]/)
    .map(name => name.trim())
    .filter(Boolean);
}

/**
 * 当前登录馆员账号
 * @returns {string}
 */
export function getCurrentLibrarianAccount() {
  return appConfig.currentLibrarianAccount || '';
}

/**
 * 当前登录馆员记录
 * @returns {Record<string, unknown> | null}
 */
export function getCurrentLibrarianRow() {
  const account = getCurrentLibrarianAccount();
  if (!account) return null;
  return librarianRows.value.find(row => row.account === account) || null;
}

/**
 * 当前登录馆员关联的全部订户名称
 * @returns {string[]}
 */
export function getCurrentLibrarianAssociatedSubscribers() {
  const row = getCurrentLibrarianRow();
  if (!row) return [];
  return parseLibrarianSubscriberNames(row.subscribers);
}

/**
 * 当前登录馆员是否有关联订户
 * @returns {boolean}
 */
export function hasCurrentLibrarianAssociatedSubscribers() {
  return getCurrentLibrarianAssociatedSubscribers().length > 0;
}

/**
 * 当前登录馆员可查看的订户范围（关联订户与系统可查看范围的交集）
 * @returns {string[]}
 */
export function getCurrentViewableSubscribers() {
  const associated = getCurrentLibrarianAssociatedSubscribers();
  const configured = appConfig.viewableSubscribers || [];
  if (!associated.length) return [];
  if (!configured.length) return associated;
  return associated.filter(name => configured.includes(name));
}
