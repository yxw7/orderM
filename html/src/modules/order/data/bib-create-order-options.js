import {
  BIB_CREATE_ORDER_BUDGET_OPTIONS,
  METHOD_OPTIONS,
  RESOURCE_TYPE_OPTIONS
} from '@/modules/order/constants';
import { getCurrentViewableSubscribers, NO_ASSOCIATED_SUBSCRIBER_CREATE_ORDER_MESSAGE } from '@/modules/subscriber/data/current-librarian';
import { subscriberRows } from '@/modules/subscriber/data/subscriber-manage';

/** 书目查询新建订单弹窗可选采选方式（不含征订目录） */
export const BIB_CREATE_ORDER_METHOD_OPTIONS = METHOD_OPTIONS.filter(method => method !== '征订目录');

/** 书目查询加入订单检索区采选方式（全部 + 不含征订目录） */
export const BIB_JOIN_ORDER_METHOD_FILTER_OPTIONS = ['全部', ...BIB_CREATE_ORDER_METHOD_OPTIONS];

/**
 * 获取当前馆员可关联的订户主数据（使用中）
 * @param {string[]} subscriberNames
 * @returns {Array<{ name: string, types: string[], budgets: string[] }>}
 */
function getActiveSubscriberRecords(subscriberNames) {
  const nameSet = new Set(subscriberNames);
  const matched = subscriberRows.filter(row => row.status === 'active' && nameSet.has(row.name));
  const matchedNames = new Set(matched.map(row => row.name));

  subscriberNames
    .filter(name => !matchedNames.has(name))
    .forEach(name => {
      matched.push({
        name,
        types: [...RESOURCE_TYPE_OPTIONS],
        budgets: [...BIB_CREATE_ORDER_BUDGET_OPTIONS],
        status: 'active'
      });
    });

  return matched;
}

/**
 * 新建订单弹窗：当前馆员可选订户列表
 * @returns {string[]}
 */
export function getBibCreateOrderSubscriberOptions() {
  return getActiveSubscriberRecords(getCurrentViewableSubscribers()).map(row => row.name);
}

/**
 * 新建订单弹窗：指定订户下可选资源类型
 * @param {string} subscriberName
 * @returns {string[]}
 */
export function getBibCreateOrderResourceTypeOptions(subscriberName) {
  const record = getActiveSubscriberRecords(getCurrentViewableSubscribers())
    .find(row => row.name === subscriberName);
  if (!record) return [];
  return (record.types || []).filter(type => RESOURCE_TYPE_OPTIONS.includes(type));
}

/**
 * 新建订单弹窗：指定订户下可选预算名称
 * @param {string} subscriberName
 * @returns {string[]}
 */
export function getBibCreateOrderBudgetOptions(subscriberName) {
  const record = getActiveSubscriberRecords(getCurrentViewableSubscribers())
    .find(row => row.name === subscriberName);
  if (!record) return [];
  return record.budgets || [];
}

/**
 * 校验新建订单表单字段是否落在馆员关联订户范围内
 * @param {{ subscriber?: string, resourceType?: string, budget?: string }} form
 * @returns {{ valid: boolean, message?: string }}
 */
export function validateBibCreateOrderScopedFields(form) {
  const subscriberOptions = getBibCreateOrderSubscriberOptions();
  if (!subscriberOptions.length) {
    return { valid: false, message: NO_ASSOCIATED_SUBSCRIBER_CREATE_ORDER_MESSAGE };
  }
  if (!form.subscriber || !subscriberOptions.includes(form.subscriber)) {
    return { valid: false, message: '请选择订户' };
  }

  const resourceTypeOptions = getBibCreateOrderResourceTypeOptions(form.subscriber);
  if (!form.resourceType || !resourceTypeOptions.includes(form.resourceType)) {
    return { valid: false, message: '请选择资源类型' };
  }

  if (form.budget) {
    const budgetOptions = getBibCreateOrderBudgetOptions(form.subscriber);
    if (!budgetOptions.includes(form.budget)) {
      return { valid: false, message: '请选择预算名称' };
    }
  }

  return { valid: true };
}
