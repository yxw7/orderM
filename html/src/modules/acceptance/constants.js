import { ACQUISITION_METHOD_OPTIONS } from '@/constants/acquisition-methods';

export const ACCEPTANCE_STATUS_MAP = {
  notStarted: { text: '未开始', cls: 'inline-block px-2 py-0.5 rounded text-xs bg-gray-50 text-gray-500 border border-gray-200' },
  inProgress: { text: '进行中', cls: 'inline-block px-2 py-0.5 rounded text-xs bg-sky-50 text-sky-600 border border-sky-200' },
  finished: { text: '已结束', cls: 'inline-block px-2 py-0.5 rounded text-xs bg-gray-100 text-gray-600 border border-gray-200' }
};

export const SETTLEMENT_STATUS_MAP = {
  notApplied: { text: '未申请', cls: 'inline-block px-2 py-0.5 rounded text-xs bg-gray-50 text-gray-500 border border-gray-200' },
  pending: { text: '待结算', cls: 'inline-block px-2 py-0.5 rounded text-xs bg-amber-50 text-amber-600 border border-amber-200' },
  settled: { text: '已结算', cls: 'inline-block px-2 py-0.5 rounded text-xs bg-emerald-50 text-emerald-600 border border-emerald-200' }
};

export const STATUS_TEXT_TO_KEY = {
  未开始: 'notStarted',
  进行中: 'inProgress',
  已结束: 'finished'
};

export const SETTLEMENT_TEXT_TO_KEY = {
  未申请: 'notApplied',
  待结算: 'pending',
  已结算: 'settled'
};

export const ACCEPTANCE_RESOURCE_TYPES = ['纸质书', '视听资料'];

export const ACCEPTANCE_LANGUAGES = [
  '英文', '日文', '俄文', '法文', '德文', '西文', '意大利文', '韩文', '其他', '中文'
];

export const ACCEPTANCE_METHODS = ACQUISITION_METHOD_OPTIONS;

export const ACCEPTANCE_SUPPLIERS = [
  '北京市图书进出口有限公司', '湖北三新', '湖南长沙', '教图', '北京人天'
];

export const ADD_BARCODE_TYPE_OPTIONS = ['小语种成人图书', '地方文献', '全部语种'];

export const EDIT_BARCODE_TYPE_OPTIONS = ['成人视听', '小语种成人图书', '地方文献', '全部语种'];

export const ACCEPTANCE_LIST_COLUMNS = [
  { key: 'no', label: '序号' },
  { key: 'acceptanceId', label: '验收单号' },
  { key: 'defaultAccept', label: '设为验收单' },
  { key: 'name', label: '验收单名称', minWidth: 'min-w-[120px]' },
  { key: 'type', label: '资源类型' },
  { key: 'lang', label: '语种' },
  { key: 'method', label: '采选方式' },
  { key: 'supplier', label: '供应商', minWidth: 'min-w-[140px]' },
  { key: 'shipNo', label: '发货单号' },
  { key: 'status', label: '验收单状态' },
  { key: 'counts', label: '收/换/退书数' },
  { key: 'remark', label: '验收备注' },
  { key: 'barcode', label: '分配条码' },
  { key: 'time', label: '创建时间', minWidth: 'min-w-[140px]' },
  { key: 'creator', label: '创建人' },
  { key: 'settlement', label: '结算状态' },
  { key: 'actions', label: '操作', sticky: true }
];

export const ACCEPTANCE_LIST_EXPORT_FIELDS = [
  '验收单号', '验收单名称', '资源类型', '语种', '采选方式', '供应商', '发货单号',
  '验收单状态', '收/换/退书数', '验收备注', '分配条码', '创建时间', '创建人', '结算状态'
];

export const SPECIES_EXPORT_FIELDS = [
  '验收单号', '验收单名称', '资源类型', '语种', '供应商', '发货单号',
  '订单行号', 'ISBN', '正题名', '作者', '出版社', '定价', '币种',
  '发订套数', '收货套数', '换货套数', '退货套数', '最近一次验收时间', '最近一次验收人'
];

export const VOLUME_EXPORT_FIELDS = [
  '验收单号', '条码号', 'ISBN', '正题名', '作者', '定价', '实洋', '单册定价',
  '套内册数', '收货人', '收货时间'
];

export const RECEIVE_SEARCH_FIELDS = {
  纸质书: [
    { value: 'isbn', label: 'ISBN' },
    { value: 'orderLine', label: '订单行号' },
    { value: 'title', label: '正题名' }
  ],
  视听资料: [
    { value: 'resourceId', label: '资源标识' },
    { value: 'orderLine', label: '订单行号' },
    { value: 'title', label: '题名' }
  ]
};
