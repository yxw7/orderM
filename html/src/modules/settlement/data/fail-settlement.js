export const failSettlementRows = [
  {
    id: 1, acceptId: 'ys00120250223001', supplier: '北京万经', deliveryId: 'fhPG09120250223001',
    acceptName: '纸质书20250223001', resourceType: '纸质书', species: 3, sets: 2, volumes: 15,
    listPrice: '1280.00', netPrice: '960.00', applyTime: '2025-02-23 09:00:00', applicant: '李佳'
  },
  {
    id: 2, acceptId: 'ys00120250121012', supplier: '北京人艺', deliveryId: '',
    acceptName: '视听资料20250121012', resourceType: '视听资料', species: 2, sets: 1, volumes: 8,
    listPrice: '560.00', netPrice: '420.00', applyTime: '2025-01-21 11:00:00', applicant: '张苏白鸥'
  },
  {
    id: 3, acceptId: 'ys00120250108045', supplier: '教图', deliveryId: 'fhPG09120250108045',
    acceptName: '纸质书20250108045', resourceType: '纸质书', species: 5, sets: 3, volumes: 22,
    listPrice: '3450.00', netPrice: '2890.50', applyTime: '2025-01-08 13:00:00', applicant: '李想'
  },
  {
    id: 4, acceptId: 'ys00120250104008', supplier: '北京新华', deliveryId: 'fhPG09120250104008',
    acceptName: '纸质书20250104008', resourceType: '纸质书', species: 1, sets: 0, volumes: 6,
    listPrice: '320.00', netPrice: '256.00', applyTime: '2025-01-04 14:00:00', applicant: '张曼'
  }
];

export const FAIL_SETTLEMENT_COLUMNS = [
  { key: 'id', label: '序号' },
  { key: 'acceptId', label: '验收单号' },
  { key: 'supplier', label: '供应商' },
  { key: 'deliveryId', label: '发货单号' },
  { key: 'acceptName', label: '验收单名称', minWidth: 'min-w-[140px]' },
  { key: 'resourceType', label: '资源类型' },
  { key: 'species', label: '实收种数' },
  { key: 'sets', label: '实收套数' },
  { key: 'volumes', label: '实收册数' },
  { key: 'listPrice', label: '实收总码洋(元)' },
  { key: 'netPrice', label: '实收总实洋(元)' },
  { key: 'applyTime', label: '申请结算时间' },
  { key: 'applicant', label: '申请结算人' }
];

export const failSettlementSearchFields = [
  { key: 'acceptId', label: '验收单号' },
  { key: 'acceptName', label: '验收单名称' },
  { key: 'resourceType', label: '资源类型', type: 'select', options: ['全部', '纸质书', '视听资料'] },
  { key: 'supplier', label: '供应商', type: 'select', extra: true, options: ['全部', '北京万经', '北京人艺', '教图', '北京新华'] },
  { key: 'deliveryId', label: '发货单号', extra: true },
  { key: 'applicant', label: '申请结算人', extra: true },
  { key: 'applyDate', label: '申请结算时间', type: 'dateRange', startKey: 'applyStart', endKey: 'applyEnd', extra: true }
];

function matchDateRange(dateStr, start, end) {
  if (!start && !end) return true;
  const d = (dateStr || '').slice(0, 10);
  if (start && d < start) return false;
  if (end && d > end) return false;
  return true;
}

export function filterFailSettlementRows(rows, search = {}) {
  return rows.filter(row => {
    if (search.acceptId && !row.acceptId.includes(search.acceptId.trim())) return false;
    if (search.acceptName && !row.acceptName.includes(search.acceptName.trim())) return false;
    if (search.resourceType && search.resourceType !== '全部' && row.resourceType !== search.resourceType) return false;
    if (search.supplier && search.supplier !== '全部' && row.supplier !== search.supplier) return false;
    if (search.deliveryId && !(row.deliveryId || '').includes(search.deliveryId.trim())) return false;
    if (search.applicant && !(row.applicant || '').includes(search.applicant.trim())) return false;
    if (!matchDateRange(row.applyTime, search.applyStart, search.applyEnd)) return false;
    return true;
  });
}
