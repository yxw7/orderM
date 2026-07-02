import { ORDER_STATUS_MAP } from '@/modules/order/data/orders';

const ORDER_STATUS_TEXT_TO_KEY = Object.fromEntries(
  Object.entries(ORDER_STATUS_MAP).map(([key, value]) => [value.text, key])
);

const SETTLEMENT_TEXT_TO_KEY = {
  未结算: 'unsettled',
  已结算: 'settled'
};

function isBlankSelect(value) {
  return !value || value === '全部' || value === '请选择';
}

function matchDateRange(dateTime, start, end) {
  if (!start && !end) return true;
  if (!dateTime?.trim()) return false;
  const day = dateTime.slice(0, 10);
  if (start && day < start) return false;
  if (end && day > end) return false;
  return true;
}

/** 按检索条件过滤订单列表 */
export function filterOrderRows(rows, search = {}) {
  const orderId = search.orderId?.trim();
  const subscriber = search.subscriber?.trim();
  const budget = search.budget?.trim();

  return rows.filter(row => {
    if (orderId && !row.orderId.includes(orderId)) return false;
    if (!isBlankSelect(search.method) && row.method !== search.method) return false;
    if (!isBlankSelect(search.supplier) && row.supplier !== search.supplier) return false;
    if (!isBlankSelect(search.issuer) && row.issuer !== search.issuer) return false;
    if (!isBlankSelect(search.orderStatus)) {
      const key = ORDER_STATUS_TEXT_TO_KEY[search.orderStatus];
      if (key && row.orderStatus !== key) return false;
    }
    if (!isBlankSelect(search.settlementStatus)) {
      const key = SETTLEMENT_TEXT_TO_KEY[search.settlementStatus];
      if (key && row.settlementStatus !== key) return false;
    }
    if (subscriber && !row.subscriber.includes(subscriber)) return false;
    if (!isBlankSelect(search.language) && row.language !== search.language) return false;
    if (!matchDateRange(row.issueTime, search.issueStart, search.issueEnd)) return false;
    if (budget && !row.budget.includes(budget)) return false;
    if (!isBlankSelect(search.resourceType) && row.resourceType !== search.resourceType) return false;
    if (!isBlankSelect(search.site) && row.site !== search.site) return false;
    return true;
  });
}
