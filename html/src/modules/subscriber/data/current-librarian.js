import { appConfig } from '@/config/app-config';
import { librarianRows } from '@/modules/subscriber/stores/association';
import { mergeSubscriberDedupScope, subscriberRows } from '@/modules/subscriber/data/subscriber-manage';

/** 当前登录馆员未关联订户时的提示文案 */
export const NO_ASSOCIATED_SUBSCRIBER_MESSAGE = '您没有关联订户，无法查看数据';

/** 当前登录馆员未关联订户时无法新建订单的提示文案 */
export const NO_ASSOCIATED_SUBSCRIBER_CREATE_ORDER_MESSAGE = '您没有关联订户，无法新建订单';

/** 当前登录馆员未关联订户时无法加入订单的提示文案 */
export const NO_ASSOCIATED_SUBSCRIBER_JOIN_ORDER_MESSAGE = '您没有关联订户，无法加入订单';

/** 当前登录馆员未关联订户时无法导入发货单的提示文案 */
export const NO_ASSOCIATED_SUBSCRIBER_IMPORT_PERMISSION_MESSAGE = '您没有关联订户，无操作权限';

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
 * 当前馆员关联订户的所属机构 ID 合集（去重保序）
 * @param {Object[]} [subscriberList]
 * @returns {string[]}
 */
export function resolveLibrarianInstitutionIds(subscriberList) {
  const names = new Set(getCurrentLibrarianAssociatedSubscribers());
  if (!names.size) return [];
  const list = subscriberList || subscriberRows;
  const ids = [];
  const seen = new Set();
  list.forEach(row => {
    if (!names.has(row.name)) return;
    const institutionId = String(row.institutionId || '').trim();
    if (!institutionId || seen.has(institutionId)) return;
    seen.add(institutionId);
    ids.push(institutionId);
  });
  return ids;
}

export function getCurrentLibrarianBranchId() {
  const row = getCurrentLibrarianRow();
  return String(row?.branchId || '').trim();
}

export function getCurrentLibrarianInstitutionId() {
  const row = getCurrentLibrarianRow();
  return String(row?.institutionId || '').trim();
}

/**
 * 设置类模块共用机构范围
 * 有关联订户 → 订户机构合集；否则读同步落库的 institutionId；皆无 → []
 * 不调用户信息、不按四级树现场倒推
 * @param {Object[]} [subscriberList]
 * @returns {string[]}
 */
export function resolveInstitutionScopeIds(subscriberList) {
  if (getCurrentLibrarianAssociatedSubscribers().length) {
    return resolveLibrarianInstitutionIds(subscriberList);
  }
  const institutionId = getCurrentLibrarianInstitutionId();
  return institutionId ? [institutionId] : [];
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

/**
 * 当前馆员关联订户的查重范围合并结果（机构组织 → 分馆编码有序；馆藏地本版为空）
 * @param {Object[]} [subscriberList] - 订户主数据；缺省使用 subscriberRows
 * @returns {{ branchCodes: string[], collectionCodes: string[], institutionIds: string[], campusIds: string[] }}
 */
export function resolveLibrarianDedupScope(subscriberList) {
  return mergeSubscriberDedupScope(
    subscriberList || subscriberRows,
    getCurrentLibrarianAssociatedSubscribers()
  );
}
