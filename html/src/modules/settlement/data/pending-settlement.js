export const SETTLEMENT_GROUP_MSG = '只能勾选相同供应商且相同资源类型的结算单';

export const pendingSettlementRows = [
  {
    id: 1, acceptId: 'ys00120260131004', supplier: '北京万经', deliveryId: '',
    acceptName: '视听资料20260131004', resourceType: '视听资料',
    species: 1, sets: 0, volumes: 12, listPrice: '0.00', netPrice: '0.00',
    applyTime: '2026-03-04 10:49:31', applicant: '系统'
  },
  {
    id: 2, acceptId: 'ys00120260131003', supplier: '北京人艺', deliveryId: '',
    acceptName: '纸质书20260131003', resourceType: '纸质书',
    species: 1, sets: 0, volumes: 0, listPrice: '0.00', netPrice: '0.00',
    applyTime: '2026-03-04 10:44:09', applicant: '系统'
  },
  {
    id: 3, acceptId: 'ysPG00120260522003', supplier: '湖北三新', deliveryId: '123123',
    acceptName: '20260522验收单', resourceType: '纸质书',
    species: 1, sets: 2, volumes: 4, listPrice: '600.00', netPrice: '480.00',
    applyTime: '2026-05-22 14:30:00', applicant: '李佳'
  },
  {
    id: 4, acceptId: 'ysPG00120260522004', supplier: '湖北三新', deliveryId: '123124',
    acceptName: '20260522验收单02', resourceType: '纸质书',
    species: 2, sets: 1, volumes: 2, listPrice: '300.00', netPrice: '240.00',
    applyTime: '2026-05-22 15:10:00', applicant: '李佳'
  }
];

export const PENDING_SETTLEMENT_COLUMNS = [
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
  { key: 'applicant', label: '申请结算人' },
  { key: 'actions', label: '操作', sticky: true }
];

export const pendingSettlementSearchFields = [
  { key: 'acceptId', label: '验收单号' },
  { key: 'acceptName', label: '验收单名称' },
  { key: 'resourceType', label: '资源类型', type: 'select', options: ['全部', '纸质书', '视听资料'] },
  { key: 'supplier', label: '供应商', type: 'select', extra: true, options: ['全部', '北京万经', '北京人艺', '教图', '湖北三新'] },
  { key: 'deliveryId', label: '发货单号', extra: true },
  { key: 'applicant', label: '申请结算人', type: 'select', extra: true, options: [{ value: '', label: '请输入' }, '系统', '李佳'] },
  { key: 'applyDate', label: '申请结算时间', type: 'dateRange', startKey: 'applyStart', endKey: 'applyEnd', extra: true }
];

function matchDateRange(dateStr, start, end) {
  if (!start && !end) return true;
  const d = (dateStr || '').slice(0, 10);
  if (start && d < start) return false;
  if (end && d > end) return false;
  return true;
}

export function calcSettlementTotals(rows) {
  const totals = rows.reduce((acc, row) => {
    acc.species += row.species || 0;
    acc.sets += row.sets || 0;
    acc.volumes += row.volumes || 0;
    acc.listPrice += Number(row.listPrice) || 0;
    acc.netPrice += Number(row.netPrice) || 0;
    return acc;
  }, { species: 0, sets: 0, volumes: 0, listPrice: 0, netPrice: 0 });
  return {
    species: totals.species,
    sets: totals.sets,
    volumes: totals.volumes,
    listPrice: totals.listPrice.toFixed(2),
    netPrice: totals.netPrice.toFixed(2)
  };
}

export function getSettlementGroup(rows) {
  if (!rows.length) return null;
  const first = rows[0];
  return { supplier: first.supplier, resourceType: first.resourceType };
}

export function isSameSettlementGroup(row, group) {
  if (!group) return true;
  return row.supplier === group.supplier && row.resourceType === group.resourceType;
}

export function filterPendingSettlementRows(rows, search = {}) {
  return rows.filter(row => {
    if (search.acceptId && !row.acceptId.includes(search.acceptId.trim())) return false;
    if (search.acceptName && !row.acceptName.includes(search.acceptName.trim())) return false;
    if (search.resourceType && search.resourceType !== '全部' && row.resourceType !== search.resourceType) return false;
    if (search.supplier && search.supplier !== '全部' && row.supplier !== search.supplier) return false;
    if (search.deliveryId && !(row.deliveryId || '').includes(search.deliveryId.trim())) return false;
    if (search.applicant && row.applicant !== search.applicant) return false;
    if (!matchDateRange(row.applyTime, search.applyStart, search.applyEnd)) return false;
    return true;
  });
}
