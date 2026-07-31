import { sortOrderLinesByIssueTimeDesc } from '@/modules/order/data/order-line-sort';
import { getSupplierOptionsByResourceTypes } from '@/modules/order/data/supplier-sources';
import { getCurrentLibrarianAssociatedSubscribers } from '@/modules/subscriber/data/current-librarian';
import { subscriberRows } from '@/modules/subscriber/data/subscriber-manage';

export const ORDER_LINE_CRITERION_FIELDS = [
  { value: 'resourceId', label: '资源标识' },
  { value: 'title', label: '正题名' },
  { value: 'author', label: '作者' },
  { value: 'publisher', label: '出版社' }
];

export const ORDER_LINE_LOGIC_OPTIONS = [
  { value: 'and', label: '且' },
  { value: 'or', label: '或' }
];

/** 馆藏/订单重复检索选项 */
export const ORDER_LINE_DEDUP_FILTER_OPTIONS = ['全部', '有', '无'];

function isBlankSelect(value) {
  return !value || value === '全部';
}

/**
 * 当前馆员关联且状态为使用中的订户主数据
 * @returns {Array<{ name: string, types?: string[], budgets?: string[] }>}
 */
function getAssociatedActiveSubscriberRecords() {
  const names = getCurrentLibrarianAssociatedSubscribers();
  if (!names.length) return [];
  const nameSet = new Set(names);
  return subscriberRows.filter(row => row.status === 'active' && nameSet.has(row.name));
}

/**
 * 订单行检索：供应商选项（关联订户资源类型 ∩ 供应商 resourceTypes）
 * @returns {string[]}
 */
export function getOrderLineSearchSupplierOptions() {
  const types = [
    ...new Set(getAssociatedActiveSubscriberRecords().flatMap(row => row.types || []))
  ];
  return getSupplierOptionsByResourceTypes(types);
}

/**
 * 订单行检索：预算选项（关联订户预算并集）
 * @returns {string[]}
 */
export function getOrderLineSearchBudgetOptions() {
  const budgets = [
    ...new Set(getAssociatedActiveSubscriberRecords().flatMap(row => row.budgets || []))
  ];
  return budgets.sort((a, b) => a.localeCompare(b, 'zh-CN'));
}

/**
 * 匹配馆藏/订单重复检索条件
 * @param {boolean|null|undefined} duplicateValue 行上的重复标识
 * @param {string} filterValue 检索选值：全部 / 有 / 无
 * @returns {boolean}
 */
function matchDedupFilter(duplicateValue, filterValue) {
  if (isBlankSelect(filterValue)) return true;
  if (filterValue === '有') return duplicateValue === true;
  if (filterValue === '无') return duplicateValue === false;
  return true;
}

/** 默认检索表单（含组合条件行） */
export function createDefaultOrderLineSearch(presetOrderId = '') {
  return {
    orderId: presetOrderId || '',
    orderLineNo: '',
    lineStatus: '全部',
    criteria: [
      { field: 'resourceId', value: '', logicAfter: 'and' },
      { field: 'title', value: '', logicAfter: 'and' },
      { field: 'author', value: '' }
    ],
    carrier: '全部',
    acceptanceStatus: '全部',
    settlementStatus: '全部',
    isShortage: '全部',
    holdingDuplicate: '全部',
    orderDuplicate: '全部',
    bibRecordNo: '',
    site: '全部',
    supplier: '',
    budget: ''
  };
}

function matchCompositeCriteria(row, criteria = []) {
  const active = criteria
    .map((criterion, index) => ({ ...criterion, index, text: criterion.value?.trim() || '' }))
    .filter(criterion => criterion.text);

  if (!active.length) return true;

  let result = String(row[active[0].field] || '').includes(active[0].text);
  for (let i = 1; i < active.length; i += 1) {
    const matches = String(row[active[i].field] || '').includes(active[i].text);
    const logic = criteria[active[i - 1].index].logicAfter || 'and';
    result = logic === 'or' ? result || matches : result && matches;
  }
  return result;
}

/** 按检索条件过滤订单行列表，并按发订时间倒序排序 */
export function filterOrderLineRows(rows, search = {}) {
  const orderId = search.orderId?.trim();
  const orderLineNo = search.orderLineNo?.trim();
  const bibRecordNo = search.bibRecordNo?.trim();

  const filtered = rows.filter(row => {
    if (orderId && !row.orderId.includes(orderId)) return false;
    if (orderLineNo && !row.orderLineNo.includes(orderLineNo)) return false;
    if (!isBlankSelect(search.lineStatus) && row.lineStatus !== search.lineStatus) return false;
    if (!matchCompositeCriteria(row, search.criteria)) return false;
    if (!isBlankSelect(search.carrier) && row.carrier !== search.carrier) return false;
    if (!isBlankSelect(search.acceptanceStatus)) {
      if (search.acceptanceStatus === '待验收') {
        if (row.acceptanceStatus !== '待验收') return false;
      } else if (row.acceptanceStatus !== search.acceptanceStatus) {
        return false;
      }
    }
    if (!isBlankSelect(search.settlementStatus) && row.settlementStatus !== search.settlementStatus) return false;
    if (!isBlankSelect(search.isShortage) && row.isShortage !== search.isShortage) return false;
    if (!matchDedupFilter(row.holdingDuplicate, search.holdingDuplicate)) return false;
    if (!matchDedupFilter(row.orderDuplicate, search.orderDuplicate)) return false;
    if (bibRecordNo && !String(row.bibRecordNo || '').includes(bibRecordNo)) return false;
    if (!isBlankSelect(search.site) && row.site !== search.site) return false;
    if (search.supplier && row.supplier !== search.supplier) return false;
    if (search.budget && row.budget !== search.budget) return false;
    return true;
  });

  return sortOrderLinesByIssueTimeDesc(filtered);
}
