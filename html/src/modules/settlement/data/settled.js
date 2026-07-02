export const settledRows = [
  { id: 1, settleId: 'jsPG09120260602001', settleName: '纸质书20260602001', deliveryId: 'fhPG09120260602001', supplier: '北京人天', netPrice: '1280.00', resourceType: '纸质书', budget: '集团2020年度预算', settleTime: '2020-06-02 09:53:18', operator: '系统' },
  { id: 2, settleId: 'jsPG09120260602002', settleName: '纸质书20260602002', deliveryId: 'fhPG09120260602002', supplier: '北京新华', netPrice: '560.00', resourceType: '纸质书', budget: '集团2020年度预算', settleTime: '2020-06-02 10:12:05', operator: '李佳' },
  { id: 3, settleId: 'jsPG09120260602003', settleName: '视听资料20260602003', deliveryId: '', supplier: '中国嘉德', netPrice: '320.00', resourceType: '视听资料', budget: '集团2020年度预算', settleTime: '2020-06-02 11:08:42', operator: '系统' },
  { id: 4, settleId: 'jsPG09120260602004', settleName: '纸质书20260602004', deliveryId: 'fhPG09120260602004', supplier: '北京台湖', netPrice: '890.50', resourceType: '纸质书', budget: '集团2021年度预算', settleTime: '2020-06-02 14:25:33', operator: '黄俊' },
  { id: 5, settleId: 'jsPG09120260602005', settleName: '视听资料20260602005', deliveryId: 'fhPG09120260602005', supplier: '北京人天', netPrice: '156.00', resourceType: '视听资料', budget: '集团2020年度预算', settleTime: '2020-06-02 15:40:17', operator: '系统' },
  { id: 6, settleId: 'jsPG09120260602006', settleName: '纸质书20260602006', deliveryId: '', supplier: '北京新华', netPrice: '2340.00', resourceType: '纸质书', budget: '集团2020年度预算', settleTime: '2020-06-02 16:55:09', operator: '李佳' }
];

export const SETTLED_COLUMNS = [
  { key: 'id', label: '序号' },
  { key: 'settleId', label: '结算单号' },
  { key: 'settleName', label: '结算单名称', minWidth: 'min-w-[140px]' },
  { key: 'deliveryId', label: '发货单号' },
  { key: 'supplier', label: '供应商' },
  { key: 'netPrice', label: '实收总实洋(元)' },
  { key: 'resourceType', label: '资源类型' },
  { key: 'budget', label: '预算名称', minWidth: 'min-w-[120px]' },
  { key: 'settleTime', label: '结算时间' },
  { key: 'operator', label: '结算操作人' },
  { key: 'actions', label: '操作', sticky: true }
];

export const settledSearchFields = [
  { key: 'settleId', label: '结算单号' },
  { key: 'settleName', label: '结算单名称' },
  { key: 'resourceType', label: '资源类型', type: 'select', options: ['全部', '纸质书', '视听资料'] },
  { key: 'supplier', label: '供应商', type: 'select', extra: true, options: ['全部', '北京人天', '北京新华', '中国嘉德', '北京台湖'] },
  { key: 'deliveryId', label: '发货单号', extra: true },
  { key: 'budget', label: '预算名称', extra: true },
  { key: 'settleDate', label: '结算时间', type: 'dateRange', startKey: 'settleStart', endKey: 'settleEnd', extra: true },
  { key: 'operator', label: '结算操作人', type: 'select', extra: true, options: [{ value: '', label: '请输入' }, '系统', '李佳', '黄俊'] }
];

export const SETTLEMENT_DETAIL_MAP = {
  jsPG09120260602001: {
    settleId: 'jsPG09120260602001',
    settleTime: '2020-06-02 09:53:18',
    operator: '系统',
    remark: '纸质书20260602001结算',
    totals: { species: 12, sets: 8, volumes: 20, listPrice: '1580.00', netPrice: '1280.00' },
    items: [
      {
        no: 1, acceptId: 'ysPG09120260602001', supplier: '北京人天', deliveryId: 'fhPG09120260602001',
        species: 12, sets: 8, volumes: 20, listPrice: '1580.00', netPrice: '1280.00', budget: '集团2020年度预算'
      }
    ]
  },
  jsPG09120260602002: {
    settleId: 'jsPG09120260602002',
    settleTime: '2020-06-02 10:12:05',
    operator: '李佳',
    remark: '',
    totals: { species: 5, sets: 3, volumes: 8, listPrice: '680.00', netPrice: '560.00' },
    items: [
      {
        no: 1, acceptId: 'ysPG09120260602002', supplier: '北京新华', deliveryId: 'fhPG09120260602002',
        species: 5, sets: 3, volumes: 8, listPrice: '680.00', netPrice: '560.00', budget: '集团2020年度预算'
      }
    ]
  },
  jsPG09120260602003: {
    settleId: 'jsPG09120260602003',
    settleTime: '2020-06-02 11:08:42',
    operator: '系统',
    remark: '视听资料20260602003结算',
    totals: { species: 2, sets: 1, volumes: 4, listPrice: '400.00', netPrice: '320.00' },
    items: [
      {
        no: 1, acceptId: 'ysPG09120260602003', supplier: '中国嘉德', deliveryId: '',
        species: 2, sets: 1, volumes: 4, listPrice: '400.00', netPrice: '320.00', budget: '集团2020年度预算'
      }
    ]
  }
};

export const SETTLEMENT_DETAIL_ITEM_COLUMNS = [
  { key: 'no', label: '序号' },
  { key: 'acceptId', label: '验收批次号' },
  { key: 'supplier', label: '供应商', minWidth: 'min-w-[160px]' },
  { key: 'deliveryId', label: '发货单号' },
  { key: 'species', label: '实收种数' },
  { key: 'sets', label: '实收套数' },
  { key: 'volumes', label: '实收册数' },
  { key: 'listPrice', label: '实收总码洋(元)' },
  { key: 'netPrice', label: '实收总实洋(元)' },
  { key: 'budget', label: '预算名称', minWidth: 'min-w-[200px]' }
];

function matchDateRange(dateStr, start, end) {
  if (!start && !end) return true;
  const d = (dateStr || '').slice(0, 10);
  if (start && d < start) return false;
  if (end && d > end) return false;
  return true;
}

export function getSettlementDetail(settleId, row) {
  if (SETTLEMENT_DETAIL_MAP[settleId]) return SETTLEMENT_DETAIL_MAP[settleId];
  return {
    settleId,
    settleTime: row?.settleTime || '—',
    operator: row?.operator || '—',
    remark: '',
    totals: { species: 0, sets: 0, volumes: 0, listPrice: row?.netPrice || '0.00', netPrice: row?.netPrice || '0.00' },
    items: [{
      no: 1,
      acceptId: '—',
      supplier: row?.supplier || '—',
      deliveryId: row?.deliveryId || '',
      species: 0,
      sets: 0,
      volumes: 0,
      listPrice: row?.netPrice || '0.00',
      netPrice: row?.netPrice || '0.00',
      budget: row?.budget || '—'
    }]
  };
}

export function filterSettledRows(rows, search = {}) {
  return rows.filter(row => {
    if (search.settleId && !row.settleId.includes(search.settleId.trim())) return false;
    if (search.settleName && !row.settleName.includes(search.settleName.trim())) return false;
    if (search.resourceType && search.resourceType !== '全部' && row.resourceType !== search.resourceType) return false;
    if (search.supplier && search.supplier !== '全部' && row.supplier !== search.supplier) return false;
    if (search.deliveryId && !(row.deliveryId || '').includes(search.deliveryId.trim())) return false;
    if (search.budget && !(row.budget || '').includes(search.budget.trim())) return false;
    if (search.operator && row.operator !== search.operator) return false;
    if (!matchDateRange(row.settleTime, search.settleStart, search.settleEnd)) return false;
    return true;
  });
}
