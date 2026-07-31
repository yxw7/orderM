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
  { key: 'no', label: '序号', stickyLeft: true },
  { key: 'acceptanceId', label: '验收单号', stickyLeft: true, minWidth: 'min-w-[160px]' },
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

/** 验收单详情导出：验收单头字段（纸质书 / 视听共用） */
export const ACCEPTANCE_DETAIL_EXPORT_HEADER_FIELDS = [
  '验收单号', '验收单名称', '资源类型', '语种', '供应商', '发货单号',
  '总码洋', '总实洋', '折扣率', '总种数', '总册数', '创建人', '创建时间', '验收备注'
];

/** 验收单详情导出：纸质书明细字段（按种） */
export const ACCEPTANCE_DETAIL_EXPORT_PAPER_DETAIL_FIELDS = [
  '订单行号', 'ISBN', '正题名', '副题名', '作者', '出版社', '出版年', '分类号', '正文语种', '丛编',
  '定价', '币种', '实洋', '装帧', '尺寸', '主题词', '版本', '读者对象', '附注', '图书简介',
  '套内册数', '发订套数', '收货套数', '收货册数', '换货套数', '退货套数'
];

/** 验收单详情导出：视听资料明细字段（按种） */
export const ACCEPTANCE_DETAIL_EXPORT_AV_DETAIL_FIELDS = [
  'ISBN', 'ISRC', '商品条码', '目录号', '载体', '题名', '著者', '码洋', '币种', '实洋',
  '出版社', '版本/格式', '彩胶颜色', '厂牌', '限量编号', '套内件数',
  '发订套数', '收货套数', '收货件数', '换货套数', '退货套数'
];

/** 验收单详情导出：纸质书明细字段（按册） */
export const ACCEPTANCE_VOLUME_EXPORT_PAPER_DETAIL_FIELDS = [
  '条码号', '订单行号', '订单号', 'ISBN', '正题名', '副题名', '作者', '出版社', '出版年', '分类号',
  '正文语种', '丛编', '定价', '币种', '实洋', '套内册数', '单册定价', '装帧', '尺寸', '主题词',
  '版本', '读者对象', '附注', '图书简介', '收货人', '验收时间', '收货备注'
];

/** 验收单详情导出：视听资料明细字段（按册） */
export const ACCEPTANCE_VOLUME_EXPORT_AV_DETAIL_FIELDS = [
  '条码号', '订单行号', '载体', 'ISBN', 'ISRC', '商品条码', '目录号', '题名', '著者', '码洋',
  '币种', '实洋', '套内件数', '单册定价', '收货人', '验收时间', '验收备注'
];

/**
 * 按资源类型 / 视图取验收详情导出字段分组
 * @param {string} resourceType
 * @param {'species'|'volume'} [viewMode='species']
 * @returns {{ header: string[], detail: string[] }}
 */
export function getAcceptanceDetailExportFieldGroups(resourceType, viewMode = 'species') {
  const header = [...ACCEPTANCE_DETAIL_EXPORT_HEADER_FIELDS];
  const isAv = resourceType === '视听资料';
  if (viewMode === 'volume') {
    return {
      header,
      detail: [...(isAv ? ACCEPTANCE_VOLUME_EXPORT_AV_DETAIL_FIELDS : ACCEPTANCE_VOLUME_EXPORT_PAPER_DETAIL_FIELDS)]
    };
  }
  return {
    header,
    detail: [...(isAv ? ACCEPTANCE_DETAIL_EXPORT_AV_DETAIL_FIELDS : ACCEPTANCE_DETAIL_EXPORT_PAPER_DETAIL_FIELDS)]
  };
}

/**
 * 按种导出：收货册数 / 收货件数
 * 纸质书：收货册数 = 收货套数 × 套内册数
 * 视听：收货件数 = 收货套数 × 套内件数
 * 套内册数/件数为空时返回空
 * @param {number|string|null|undefined} receiveSets 收货套数
 * @param {number|string|null|undefined} piecesInSet 套内册数或套内件数
 * @returns {number|''}
 */
export function calcSpeciesReceiveQuantity(receiveSets, piecesInSet) {
  if (piecesInSet == null || String(piecesInSet).trim() === '') return '';
  const pieces = Number(piecesInSet);
  if (!Number.isFinite(pieces)) return '';
  const sets = Number(receiveSets);
  if (!Number.isFinite(sets)) return '';
  return sets * pieces;
}

export const SPECIES_EXPORT_FIELDS = [
  ...ACCEPTANCE_DETAIL_EXPORT_HEADER_FIELDS,
  ...ACCEPTANCE_DETAIL_EXPORT_PAPER_DETAIL_FIELDS
];

export const VOLUME_EXPORT_FIELDS = [
  ...ACCEPTANCE_DETAIL_EXPORT_HEADER_FIELDS,
  ...ACCEPTANCE_VOLUME_EXPORT_PAPER_DETAIL_FIELDS
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
