export const acceptanceSpeciesRows = [
  { id: 1, orderLine: 'PG001B20260602003-5', isbn: '9787518359066', title: '现代精细油藏描述', author: '陈欢庆 著', price: '¥120.00', currency: 'CNY', counts: '2 / 2 / 0 / 0', lastTime: '2026-06-02 09:51:57', lastInspector: '杨晓购', reason: '' },
  { id: 2, orderLine: 'PG001B20260602003-6', isbn: '9787565855375', title: '地质勘查工程与生态修复', author: '张昕, 冯红彬, 张海燕主编', price: '¥58.00', currency: 'CNY', counts: '3 / 1 / 1 / 0', lastTime: '2026-06-01 14:20:10', lastInspector: '王二小', reason: '换：残缺损' },
  { id: 3, orderLine: 'PG001B20260602003-7', isbn: '9787559826398', title: 'Python从入门到实践', author: '[美] 埃里克·马瑟斯', price: '¥89.00', currency: 'CNY', counts: '2 / 0 / 0 / 1', lastTime: '2026-05-30 16:05:33', lastInspector: '赵付', reason: '退：损坏退货' },
  { id: 4, orderLine: 'PG001B20260602003-8', isbn: '9787518359067', title: '石油勘探技术', author: '李明', price: '¥66.00', currency: 'CNY', counts: '2 / 0 / 0 / 0', lastTime: '2026-05-29 11:20:00', lastInspector: '杨晓购', reason: '撤：录入错误' },
  { id: 5, orderLine: 'PG001B20260602003-9', isbn: '9787518359068', title: '油气田开发综合示例', author: '示例作者', price: '¥88.00', currency: 'CNY', counts: '4 / 0 / 1 / 1', lastTime: '2026-05-28 10:00:00', lastInspector: '杨晓购', reason: '换：破损换货；退：破损退货' },
  { id: 6, orderLine: 'PG001B20260601003-1', isbn: '9787501345678', title: '图书馆学概论', author: '吴慰慈著', price: '¥68.00', currency: 'CNY', counts: '1 / 1 / 0 / 0', lastTime: '2026-05-28 15:06:37', lastInspector: '赵付', reason: '' },
  { id: 7, orderLine: 'PG001B20260601003-3', isbn: '9787501345678', title: '图书馆学概论', author: '吴慰慈著', price: '¥68.00', currency: 'CNY', counts: '2 / 1 / 0 / 0', lastTime: '2026-05-27 10:20:15', lastInspector: '杨晓购', reason: '' },
  { id: 8, orderLine: 'PG001B20260601003-5', isbn: '9787501345678', title: '图书馆学概论', author: '吴慰慈著', price: '¥68.00', currency: 'CNY', counts: '1 / 0 / 0 / 0', lastTime: '2026-05-26 09:15:42', lastInspector: '王二小', reason: '撤：录入错误' }
];

export const acceptanceSpeciesSearchFields = [
  { key: 'searchField', label: '检索项', type: 'select', options: [{ value: 'isbn', label: 'ISBN' }, { value: 'orderLine', label: '订单行号' }, { value: 'title', label: '正题名' }] },
  { key: 'keyword', label: '关键词' },
  { key: 'inspector', label: '验收人' },
  { key: 'startDate', label: '开始日期', type: 'date', extra: true },
  { key: 'endDate', label: '结束日期', type: 'date', extra: true }
];

export const acceptanceSpeciesColumns = [
  { key: 'id', label: '序号' },
  { key: 'orderLine', label: '订单行号' },
  { key: 'isbn', label: 'ISBN' },
  { key: 'title', label: '正题名', minWidth: 'min-w-[140px]' },
  { key: 'author', label: '作者' },
  { key: 'price', label: '定价' },
  { key: 'currency', label: '币种' },
  { key: 'counts', label: '发/收/换/退数' },
  { key: 'lastTime', label: '最近一次验收时间' },
  { key: 'lastInspector', label: '最近一次验收人' },
  { key: 'reason', label: '换/退/撤销收货原因' },
  { key: 'actions', label: '操作', sticky: true }
];

export const acceptanceHeaderDefaults = {
  acceptanceId: 'ysPG00120200602001',
  name: '20200602ceshi',
  type: '纸质书',
  lang: '中文',
  shipNo: '20200602发货单001',
  supplier: '北京市图书进出口有限公司',
  remark: '—',
  totalSpecies: '5',
  totalVolumes: '12',
  totalListPrice: '¥423.00',
  totalNetPrice: '¥338.40'
};

import { formatSpeciesReason, enrichVolumeRowsWithPricing } from '@/modules/acceptance/data/detail-utils';

function formatReason(row) {
  return formatSpeciesReason(row);
}

export const acceptanceAvSpeciesRows = [
  { id: 1, orderLine: 'PG001B20260529010-1', isbn: '9787883310679', carrier: 'CD', title: '中国经典民歌', productBarcode: '', catalogNo: '', author: '殷秀梅', price: '¥300.00', currency: 'CNY', piecesInSet: 1, counts: '1 / 1 / 0 / 0', lastTime: '2026-05-29 10:30:39', lastInspector: '王二小' },
  { id: 2, orderLine: 'PG001B20260529010-2', isbn: '9787883310678', carrier: 'LP', title: '古典音乐精选', productBarcode: '', catalogNo: '', author: '维也纳爱乐', price: '¥280.00', currency: 'CNY', piecesInSet: 2, counts: '2 / 0 / 1 / 0', exchangeReason: '换货', lastTime: '2026-05-28 11:15:20', lastInspector: '杨晓婉' },
  { id: 3, orderLine: 'PG001B20260529010-3', isbn: '', carrier: 'DVD', title: '国家地理纪录片', productBarcode: '017685110221', catalogNo: 'DVD-1102', author: '国家地理', price: '¥168.00', currency: 'CNY', piecesInSet: 1, counts: '1 / 0 / 0 / 1', returnReason: '退货', lastTime: '2026-05-27 09:40:08', lastInspector: '赵付' },
  { id: 4, orderLine: 'PG001B20260529010-4', isbn: '9787883310677', carrier: 'CD', title: '莫扎特钢琴协奏曲', productBarcode: '', catalogNo: '', author: '莫扎特', price: '¥120.00', currency: 'CNY', piecesInSet: 1, counts: '2 / 0 / 0 / 0', revokeReceiveReasons: ['重复收货'], lastTime: '2026-05-26 15:10:22', lastInspector: '王二小' },
  { id: 5, orderLine: 'PG001B20260529010-5', isbn: '9787883310676', carrier: 'CD', title: '综合场景示例', productBarcode: '', catalogNo: '', author: '示例作者', price: '¥200.00', currency: 'CNY', piecesInSet: 1, counts: '4 / 0 / 1 / 1', exchangeReason: '破损换货', returnReason: '破损退货', revokeReceiveReasons: ['操作失误重新收货'], lastTime: '2026-05-25 14:30:00', lastInspector: '杨晓婉' }
].map(r => ({ ...r, reason: formatReason(r) }));

export const acceptanceAvSpeciesSearchFields = [
  { key: 'searchField', label: '检索项', type: 'select', options: [{ value: 'isbn', label: 'ISBN/ISRC' }, { value: 'title', label: '题名' }, { value: 'orderLine', label: '订单行号' }, { value: 'carrier', label: '载体' }] },
  { key: 'keyword', label: '关键词' },
  { key: 'inspector', label: '验收人' },
  { key: 'startDate', label: '开始日期', type: 'date', extra: true },
  { key: 'endDate', label: '结束日期', type: 'date', extra: true }
];

export const acceptanceAvSpeciesColumns = [
  { key: 'id', label: '序号' },
  { key: 'orderLine', label: '订单行号' },
  { key: 'isbn', label: 'ISBN/ISRC' },
  { key: 'carrier', label: '载体' },
  { key: 'title', label: '题名', minWidth: 'min-w-[120px]' },
  { key: 'productBarcode', label: '商品条码', format: v => v || '—' },
  { key: 'catalogNo', label: '目录号', format: v => v || '—' },
  { key: 'author', label: '作者' },
  { key: 'price', label: '定价' },
  { key: 'currency', label: '币种' },
  { key: 'piecesInSet', label: '套内件数' },
  { key: 'counts', label: '发/收/换/退套数' },
  { key: 'lastTime', label: '最近一次验收时间' },
  { key: 'lastInspector', label: '最近一次验收人' },
  { key: 'reason', label: '换/退/撤销收货原因' },
  { key: 'actions', label: '操作', sticky: true }
];

export const acceptanceBookVolumeRows = [
  { id: 1, barcode: '001T268700006', isbn: '9787518359066', title: '现代精细油藏描述', author: '陈欢庆 著', price: '¥110.00', netPrice: '¥66.00', unitPrice: '¥36.67', currency: 'CNY', volumesInSet: 3, receiver: '杨晓娴', receiveTime: '2026-06-02 09:51:57' },
  { id: 2, barcode: '001T268700005', isbn: '9787518359066', title: '现代精细油藏描述', author: '陈欢庆 著', price: '¥110.00', netPrice: '¥66.00', unitPrice: '¥36.67', currency: 'CNY', volumesInSet: 3, receiver: '杨晓娴', receiveTime: '2026-06-02 09:51:57' },
  { id: 3, barcode: '001T268700004', isbn: '9787518359066', title: '现代精细油藏描述', author: '陈欢庆 著', price: '¥110.00', netPrice: '¥66.00', unitPrice: '¥36.67', currency: 'CNY', volumesInSet: 3, receiver: '杨晓娴', receiveTime: '2026-06-02 09:51:57' },
  { id: 4, barcode: '001T268700003', isbn: '9787518359066', title: '现代精细油藏描述', author: '陈欢庆 著', price: '¥100.00', netPrice: '¥60.00', unitPrice: '¥33.33', currency: 'CNY', volumesInSet: 3, receiver: '杨晓娴', receiveTime: '2026-06-02 09:51:57' },
  { id: 5, barcode: '001T268700002', isbn: '9787518359066', title: '现代精细油藏描述', author: '陈欢庆 著', price: '¥100.00', netPrice: '¥60.00', unitPrice: '¥33.33', currency: 'CNY', volumesInSet: 3, receiver: '杨晓娴', receiveTime: '2026-06-02 09:51:57' },
  { id: 6, barcode: '001T268700001', isbn: '9787518359066', title: '现代精细油藏描述', author: '陈欢庆 著', price: '¥100.00', netPrice: '¥60.00', unitPrice: '¥33.33', currency: 'CNY', volumesInSet: 3, receiver: '杨晓娴', receiveTime: '2026-06-02 09:51:57' }
];

export const acceptanceBookVolumeSearchFields = [
  { key: 'searchField', label: '检索项', type: 'select', options: [{ value: 'barcode', label: '条码号' }, { value: 'isbn', label: 'ISBN' }, { value: 'title', label: '正题名' }] },
  { key: 'keyword', label: '关键词' },
  { key: 'receiver', label: '收货人' },
  { key: 'startDate', label: '开始日期', type: 'date', extra: true },
  { key: 'endDate', label: '结束日期', type: 'date', extra: true }
];

export const acceptanceBookVolumeColumns = [
  { key: 'id', label: '序号' },
  { key: 'barcode', label: '条码号' },
  { key: 'isbn', label: 'ISBN' },
  { key: 'title', label: '正题名', minWidth: 'min-w-[140px]' },
  { key: 'author', label: '作者' },
  { key: 'price', label: '定价' },
  { key: 'currency', label: '币种' },
  { key: 'netPrice', label: '实洋' },
  { key: 'unitPrice', label: '单册定价' },
  { key: 'volumesInSet', label: '套内册数' },
  { key: 'receiver', label: '收货人' },
  { key: 'receiveTime', label: '收货时间' }
];

export const acceptanceAvVolumeRows = [
  { id: 1, barcode: 'AV001001', isbn: '9787883310679', carrier: 'CD', title: '中国经典民歌', productBarcode: '', catalogNo: '', author: '殷秀梅', price: '¥110.00', netPrice: '¥66.00', currency: 'CNY', piecesInSet: 3, receiver: '王二小', receiveTime: '2026-05-29 10:30:39' },
  { id: 2, barcode: 'AV001002', isbn: '9787883310679', carrier: 'CD', title: '中国经典民歌', productBarcode: '', catalogNo: '', author: '殷秀梅', price: '¥110.00', netPrice: '¥66.00', currency: 'CNY', piecesInSet: 3, receiver: '王二小', receiveTime: '2026-05-29 10:30:39' },
  { id: 3, barcode: 'AV001003', isbn: '9787883310679', carrier: 'CD', title: '中国经典民歌', productBarcode: '', catalogNo: '', author: '殷秀梅', price: '¥110.00', netPrice: '¥66.00', currency: 'CNY', piecesInSet: 3, receiver: '王二小', receiveTime: '2026-05-29 10:30:39' }
];

export const acceptanceAvVolumeSearchFields = [
  { key: 'searchField', label: '检索项', type: 'select', options: [{ value: 'barcode', label: '条码号' }, { value: 'isbn', label: 'ISBN/ISRC' }, { value: 'title', label: '题名' }, { value: 'carrier', label: '载体' }] },
  { key: 'keyword', label: '关键词' },
  { key: 'receiver', label: '收货人' },
  { key: 'startDate', label: '开始日期', type: 'date', extra: true },
  { key: 'endDate', label: '结束日期', type: 'date', extra: true }
];

export const acceptanceAvVolumeColumns = [
  { key: 'id', label: '序号' },
  { key: 'barcode', label: '条码号' },
  { key: 'isbn', label: 'ISBN/ISRC' },
  { key: 'carrier', label: '载体' },
  { key: 'title', label: '题名', minWidth: 'min-w-[120px]' },
  { key: 'productBarcode', label: '商品条码', format: v => v || '—' },
  { key: 'catalogNo', label: '目录号', format: v => v || '—' },
  { key: 'author', label: '作者' },
  { key: 'price', label: '定价' },
  { key: 'netPrice', label: '实洋' },
  { key: 'currency', label: '币种' },
  { key: 'piecesInSet', label: '套内件数' },
  { key: 'receiver', label: '收货人' },
  { key: 'receiveTime', label: '收货时间' }
];

export function getAcceptanceDetailConfig(type, viewMode, detailRows, volumeRows) {
  const isAv = type === '视听资料';
  if (viewMode === 'volume') {
    const baseRows = volumeRows ?? (isAv ? acceptanceAvVolumeRows : acceptanceBookVolumeRows);
    const rows = enrichVolumeRowsWithPricing(baseRows.map(r => ({ ...r })));
    return isAv
      ? { rows, fields: acceptanceAvVolumeSearchFields, columns: acceptanceAvVolumeColumns, exportLabel: '导出收货明细' }
      : { rows, fields: acceptanceBookVolumeSearchFields, columns: acceptanceBookVolumeColumns, exportLabel: '导出收货明细' };
  }
  const rows = (detailRows ?? (isAv ? acceptanceAvSpeciesRows : acceptanceSpeciesRows)).map(r => ({ ...r, reason: formatReason(r) }));
  return isAv
    ? { rows, fields: acceptanceAvSpeciesSearchFields, columns: acceptanceAvSpeciesColumns, exportLabel: '导出验收明细' }
    : { rows, fields: acceptanceSpeciesSearchFields, columns: acceptanceSpeciesColumns, exportLabel: '导出验收明细' };
}

export function getDefaultDetailRows(type, counts) {
  if (type === '视听资料' && counts === '0/0/0') return [];
  return undefined;
}
