import { ACQUISITION_METHOD_OPTIONS } from '@/constants/acquisition-methods';

export { ORDER_STATUS_MAP } from '@/modules/order/data/orders';

export const ORDER_LIST_COLUMNS = [
  { key: 'no', label: '序号' },
  { key: 'subscriber', label: '订户' },
  { key: 'site', label: '馆址' },
  { key: 'orderId', label: '订单号' },
  { key: 'method', label: '采选方式' },
  { key: 'resourceType', label: '资源类型' },
  { key: 'language', label: '语种' },
  { key: 'supplier', label: '供应商' },
  { key: 'orderTime', label: '订单时间' },
  { key: 'issuer', label: '发订人' },
  { key: 'issueTime', label: '发订时间', format: v => v || '—' },
  { key: 'orderVolumes', label: '发订册数' },
  { key: 'orderSpecies', label: '发订种数' },
  { key: 'budget', label: '预算名称', minWidth: 'min-w-[180px]' },
  { key: 'listPrice', label: '码洋' },
  { key: 'discount', label: '折扣' },
  { key: 'netPrice', label: '实洋' },
  { key: 'issueRemark', label: '发订备注' },
  { key: 'orderStatus', label: '订单状态' },
  { key: 'settlementStatus', label: '结算状态' },
  { key: 'actions', label: '操作', sticky: true }
];

export const ORDER_LINE_COLUMNS = [
  { key: 'orderId', label: '订单号' },
  { key: 'site', label: '馆址' },
  { key: 'orderLineNo', label: '订单行号' },
  { key: 'bibRecordNo', label: '书目记录号' },
  { key: 'title', label: '正题名', minWidth: 'min-w-[140px]' },
  { key: 'resourceId', label: '资源标识' },
  { key: 'carrier', label: '载体' },
  { key: 'author', label: '作者' },
  { key: 'publisher', label: '出版社', minWidth: 'min-w-[120px]' },
  { key: 'publishTime', label: '出版时间' },
  { key: 'volumeNo', label: '分卷号' },
  { key: 'volumeName', label: '分卷名' },
  { key: 'price', label: '定价' },
  { key: 'currency', label: '币种' },
  { key: 'copiesInSet', label: '套内册数' },
  { key: 'sets', label: '套数' },
  { key: 'lineStatus', label: '行状态' },
  { key: 'acceptanceStatus', label: '验收状态', format: v => v || '—' },
  { key: 'settlementStatus', label: '结算状态' },
  { key: 'isShortage', label: '是否催缺' },
  { key: 'flowStats', label: '发/收/换/退/撤订' },
  { key: 'issueTime', label: '发订时间', format: v => v || '—' },
  { key: 'holdingDuplicate', label: '馆藏重复' },
  { key: 'orderDuplicate', label: '订单重复' },
  { key: 'remark', label: '备注' },
  { key: 'actions', label: '操作', sticky: true }
];

export const BUDGET_OPTIONS = [
  '2026年首都图书馆图书购置费中文普通图书(四)',
  '2024年首都图书馆图书购置费中文普通图书(一)',
  '2024年首都图书馆图书购置费中文普通图书(二)',
  '2024年首都图书馆图书购置费中文普通图书(三)',
  '2024年首都图书馆图书购置费中文普通图书(四)',
  '2024年首都图书馆视听资料购置费',
  '集团2026年度预算',
  '2026年度第二季度预算'
];

export const SUPPLIER_OPTIONS = [
  '中国国际图书贸易集团有限公司',
  '湖南长沙',
  '湖北三新',
  '北京新华',
  'CNPIEC',
  '浙江新华',
  '北京人天'
];

export const SUBSCRIBER_OPTIONS = ['ceshi', '捐赠订户'];

export const RESOURCE_TYPE_OPTIONS = ['纸质书', '视听资料'];

export const METHOD_OPTIONS = ACQUISITION_METHOD_OPTIONS;

export const LANGUAGE_OPTIONS = ['中文', '外文'];

export const BIB_CREATE_ORDER_BUDGET_OPTIONS = [
  '2024年首都图书馆图书购置费中文普通图书(一)',
  '2024年首都图书馆图书购置费中文普通图书(二)',
  '2024年首都图书馆图书购置费中文普通图书(三)',
  '2024年首都图书馆视听资料购置费'
];

export const BIB_CREATE_ORDER_SUPPLIER_OPTIONS = [
  '湖南长沙',
  '湖北三新',
  '北京新华',
  'CNPIEC'
];

export const BIB_CREATE_ORDER_REQUIRED_FIELDS = [
  { key: 'subscriber', label: '订户' },
  { key: 'resourceType', label: '资源类型' },
  { key: 'method', label: '采选方式' },
  { key: 'budget', label: '预算名称' },
  { key: 'language', label: '语种' },
  { key: 'supplier', label: '供应商' }
];

/** 采选方式为交换或捐赠时，预算名称非必填 */
export const BUDGET_OPTIONAL_METHODS = ['交换', '捐赠'];

/**
 * 判断采选方式下预算名称是否非必填。
 * @param {string} method
 * @returns {boolean}
 */
export function isBudgetOptionalForMethod(method) {
  return BUDGET_OPTIONAL_METHODS.includes(method);
}

export const NEW_ORDER_BUDGET_OPTIONS = [
  '2024年首都图书馆图书购置费中文普通图书(一)',
  '2024年首都图书馆图书购置费中文普通图书(二)',
  '2024年首都图书馆图书购置费中文普通图书(三)',
  '2024年首都图书馆视听资料购置费'
];

export const NEW_ORDER_SUPPLIER_OPTIONS = ['湖南长沙', '湖北三新', '北京新华', 'CNPIEC'];

export const NEW_ORDER_FIELDS = [
  { key: 'resourceType', label: '类型' },
  { key: 'subscriber', label: '订户' },
  { key: 'method', label: '采选方式' },
  { key: 'language', label: '语种' },
  { key: 'supplier', label: '供应商' },
  { key: 'discount', label: '折扣' },
  { key: 'site', label: '馆址' }
];

/** 编辑订单行-正文语种选项 */
export const TEXT_LANGUAGE_OPTIONS = [
  '日文',
  '德文',
  '西文',
  '法文',
  '俄文',
  '英文',
  '港台（中文繁体）',
  '中文'
];

/** 编辑订单行-币种选项 */
export const EDIT_LINE_CURRENCY_OPTIONS = [
  { value: 'CNY', label: '人民币' },
  { value: 'USD', label: '美元' },
  { value: 'EUR', label: '欧元' }
];

/**
 * 编辑订单行表单字段（按行分组）
 * @type {{ key: string, label: string, type?: 'select', options?: string }[][]}
 */
export const EDIT_ORDER_LINE_FORM_ROWS = [
  [
    { key: 'resourceId', label: 'ISBN' },
    { key: 'title', label: '正题名' },
    { key: 'publisher', label: '出版社' }
  ],
  [
    { key: 'price', label: '定价' },
    { key: 'currency', label: '币种', type: 'select', options: 'currency' },
    { key: 'textLanguage', label: '正文语种', type: 'select', options: 'textLanguage' }
  ],
  [
    { key: 'carrier', label: '载体' },
    { key: 'productBarcode', label: '商品条码' },
    { key: 'catalogNo', label: '目录号' }
  ],
  [
    { key: 'sets', label: '套数' },
    { key: 'copiesInSet', label: '套内册数' },
    { key: 'bibRecordNo', label: '书目记录号' }
  ],
  [
    { key: 'volumeCount', label: '卷数' },
    { key: 'series', label: '丛编' },
    { key: 'publishPlace', label: '出版地' }
  ],
  [
    { key: 'publishTime', label: '出版年' }
  ]
];

export const EXPORT_ORDER_FIELDS = [
  '订户', '馆址', '订单号', '采选方式', '资源类型', '语种', '供应商', '发订人', '发订时间',
  '发订册数', '发订种数', '预算名称', '码洋', '折扣', '实洋', '发订备注', '订单状态', '结算状态'
];

export const EXPORT_LINE_FIELDS = [
  '订单号', '馆址', '订单行号', '正题名', 'ISBN', '作者', '出版社', '出版时间', '价格',
  '套内册数', '套数', '行状态', '验收状态', '发/收/换/退/缺/催', '馆藏重复', '订单重复'
];

export const SHORTAGE_BLOCKED_STATUSES = ['收货完成', '已退货'];

export function getOrderActions(row) {
  const map = {
    ordered: [{ key: 'edit', text: '编辑' }, { key: 'export', text: '导出订单' }, { key: 'cancel', text: '撤订' }],
    processing: [{ key: 'export', text: '导出订单' }],
    cancelled: [{ key: 'export', text: '导出订单' }, { key: 'delete', text: '删除' }],
    pendingImport: [{ key: 'import', text: '导入订单' }],
    pending: [{ key: 'issue', text: '发订' }, { key: 'delete', text: '删除' }]
  };
  return map[row.orderStatus] || [{ key: 'export', text: '导出订单' }];
}

export function canGenerateShortage(acceptanceStatus) {
  return acceptanceStatus && !SHORTAGE_BLOCKED_STATUSES.includes(acceptanceStatus);
}

export function canBatchDedup(lines, selectedIds, orders = []) {
  if (!selectedIds.length) return false;
  const selected = lines.filter(r => selectedIds.includes(r.id));
  const canDedup = row => {
    if (row.lineStatus === '待发订') return true;
    return orders.find(o => o.orderId === row.orderId)?.orderStatus === 'pending';
  };
  if (!selected.every(canDedup)) return false;
  const first = selected[0];
  return selected.every(r =>
    r.resourceType === first.resourceType && r.language === first.language
  );
}
