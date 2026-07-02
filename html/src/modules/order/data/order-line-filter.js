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

function isBlankSelect(value) {
  return !value || value === '全部';
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
    bibRecordNo: ''
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

/** 按检索条件过滤订单行列表 */
export function filterOrderLineRows(rows, search = {}) {
  const orderId = search.orderId?.trim();
  const orderLineNo = search.orderLineNo?.trim();
  const bibRecordNo = search.bibRecordNo?.trim();

  return rows.filter(row => {
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
    if (bibRecordNo && !String(row.bibRecordNo || '').includes(bibRecordNo)) return false;
    return true;
  });
}
