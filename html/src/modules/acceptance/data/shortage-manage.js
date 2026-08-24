export const SHORTAGE_STATUS_MAP = {
  pending: { text: '待处理', cls: 'inline-block px-2 py-0.5 rounded text-xs bg-gray-100 text-gray-600 border border-gray-200' },
  inProgress: { text: '处理中', cls: 'inline-block px-2 py-0.5 rounded text-xs bg-sky-50 text-sky-600 border border-sky-200' },
  done: { text: '已完成', cls: 'inline-block px-2 py-0.5 rounded text-xs bg-gray-200 text-gray-700' }
};

export const SHORTAGE_STATUS_TEXT_TO_KEY = {
  待处理: 'pending',
  处理中: 'inProgress',
  已完成: 'done'
};

export const SHORTAGE_SUPPLIER_OPTIONS = ['全部', '湖南长沙', '湖北三新', '教图'];
export const SHORTAGE_CHANGE_SUPPLIER_OPTIONS = ['湖南长沙', '湖北三新', '教图', '北京市图书进出口有限公司'];
export const SHORTAGE_BUDGET_OPTIONS = ['集团2020年度预算', '集团2021年度预算'];

export const shortageRows = [
  {
    id: 1,
    shortageId: 'cqPG00120200301001',
    orderId: 'PG001B20260528008',
    type: '纸质书',
    supplier: '湖南长沙',
    location: '华威桥馆',
    budget: '集团2026年度预算',
    person: '系统',
    time: '2020-06-01 10:28:20',
    status: 'pending',
    sets: 3,
    arrived: 0,
    remark: false,
    remarkText: '',
    actions: true,
    lineRefs: [
      { orderLineNo: 'PG001B20260528008-8', shortageSets: 1, arrivedSets: 0 },
      { orderLineNo: 'PG001B20260528008-9', shortageSets: 2, arrivedSets: 0 }
    ]
  },
  {
    id: 2,
    shortageId: 'cqPG00120200301002',
    orderId: 'PG001B20260528008',
    type: '纸质书',
    supplier: '湖北三新',
    location: '大兴机场馆',
    budget: '集团2020年度预算',
    person: '李佳',
    time: '2020-06-02 14:15:30',
    status: 'done',
    sets: 1,
    arrived: 1,
    remark: true,
    remarkText: '已到货 1 套',
    actions: false,
    lineRefs: [{ orderLineNo: 'PG001B20260528008-8', shortageSets: 1, arrivedSets: 1 }]
  },
  {
    id: 3,
    shortageId: 'cqPG00120200301003',
    orderId: 'PG001020200328010',
    type: '纸质书',
    supplier: '湖南长沙',
    location: '华威桥馆',
    budget: '集团2020年度预算',
    person: '系统',
    time: '2020-06-03 09:10:05',
    status: 'done',
    sets: 3,
    arrived: 0,
    remark: false,
    remarkText: '',
    actions: false
  },
  {
    id: 4,
    shortageId: 'cqPG00120200301004',
    orderId: 'PG001B202406030001',
    type: '纸质书',
    supplier: '教图',
    location: '城市图书馆',
    budget: '集团2020年度预算',
    person: '黄俊',
    time: '2020-06-04 16:42:18',
    status: 'pending',
    sets: 1,
    arrived: 0,
    remark: false,
    remarkText: '',
    actions: true,
    lineRefs: [{ orderLineNo: 'PG001B202406030001-4', shortageSets: 1, arrivedSets: 0 }]
  },
  {
    id: 5,
    shortageId: 'cqPG00120200301005',
    orderId: 'PG001020200328012',
    type: '纸质书',
    supplier: '湖北三新',
    location: '华威桥馆',
    budget: '集团2021年度预算',
    person: '系统',
    time: '2020-06-05 11:05:55',
    status: 'done',
    sets: 2,
    arrived: 0,
    remark: true,
    remarkText: '供应商已回告',
    actions: false
  },
  {
    id: 6,
    shortageId: 'cqPG00120200301006',
    orderId: 'PG001B20260528008',
    type: '纸质书',
    supplier: '湖南长沙',
    location: '大兴机场馆',
    budget: '集团2020年度预算',
    person: '陆丰',
    time: '2020-06-06 08:30:00',
    status: 'pending',
    sets: 1,
    arrived: 0,
    remark: false,
    remarkText: '',
    actions: true,
    lineRefs: [{ orderLineNo: 'PG001B20260528008-9', shortageSets: 1, arrivedSets: 0 }]
  },
  {
    id: 7,
    shortageId: 'cqPG00120200301007',
    orderId: 'PG001020200328014',
    type: '纸质书',
    supplier: '教图',
    location: '华威桥馆',
    budget: '集团2020年度预算',
    person: '系统',
    time: '2020-06-07 17:20:40',
    status: 'done',
    sets: 1,
    arrived: 0,
    remark: false,
    remarkText: '',
    actions: false
  }
];

export const SHORTAGE_COLUMNS = [
  { key: 'id', label: '序号' },
  { key: 'shortageId', label: '催缺单号' },
  { key: 'orderId', label: '订单号' },
  { key: 'type', label: '资源类型' },
  { key: 'supplier', label: '供应商' },
  { key: 'location', label: '馆址' },
  { key: 'budget', label: '预算名称', minWidth: 'min-w-[120px]' },
  { key: 'person', label: '催缺人' },
  { key: 'time', label: '催缺时间', minWidth: 'min-w-[140px]' },
  { key: 'status', label: '催缺状态' },
  { key: 'sets', label: '催缺套数' },
  { key: 'arrived', label: '到货套数' },
  { key: 'remark', label: '备注' },
  { key: 'actions', label: '操作', sticky: true }
];

export const shortageSearchFields = [
  { key: 'shortageId', label: '催缺单号' },
  { key: 'orderId', label: '订单号' },
  { key: 'supplier', label: '供应商', type: 'select', options: SHORTAGE_SUPPLIER_OPTIONS },
  { key: 'status', label: '催缺状态', type: 'select', extra: true, options: ['全部', '待处理', '处理中', '已完成'] },
  { key: 'person', label: '催缺人', extra: true },
  { key: 'location', label: '馆址', type: 'select', extra: true },
  { key: 'shortageDate', label: '催缺时间', type: 'date', extra: true }
];

export function hasShortageActions(row) {
  return !!row.actions && row.status === 'pending';
}

export function filterShortageRows(rows, search = {}) {
  return rows.filter(row => {
    if (search.shortageId && !row.shortageId.includes(search.shortageId.trim())) return false;
    if (search.orderId && !row.orderId.includes(search.orderId.trim())) return false;
    if (search.supplier && search.supplier !== '全部' && row.supplier !== search.supplier) return false;
    if (search.status && search.status !== '全部') {
      const key = SHORTAGE_STATUS_TEXT_TO_KEY[search.status];
      if (key && row.status !== key) return false;
    }
    if (search.person && !row.person.includes(search.person.trim())) return false;
    if (search.location && search.location !== '全部' && row.location !== search.location) return false;
    if (search.shortageDate && row.time.slice(0, 10) !== search.shortageDate) return false;
    return true;
  });
}
