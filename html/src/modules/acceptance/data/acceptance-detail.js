export const acceptanceSpeciesRows = [
  { id: 1, orderLine: 'PG001B20260602003-5', isbn: '9787518359066', title: '现代精细油藏描述', author: '陈欢庆 著', price: '¥120.00', netPrice: '¥96.00', currency: 'CNY', volumesInSet: 3, counts: '2 / 2 / 0 / 0', lastTime: '2026-06-02 09:51:57', lastInspector: '杨晓购', reason: '' },
  { id: 2, orderLine: 'PG001B20260602003-6', isbn: '9787565855375', title: '地质勘查工程与生态修复', author: '张昕, 冯红彬, 张海燕主编', price: '¥58.00', netPrice: '¥46.40', currency: 'CNY', volumesInSet: 1, counts: '3 / 1 / 1 / 0', lastTime: '2026-06-01 14:20:10', lastInspector: '王二小', reason: '换：残缺损' },
  { id: 3, orderLine: 'PG001B20260602003-7', isbn: '9787559826398', title: 'Python从入门到实践', author: '[美] 埃里克·马瑟斯', price: '¥89.00', netPrice: '¥71.20', currency: 'CNY', volumesInSet: 1, counts: '2 / 0 / 0 / 1', lastTime: '2026-05-30 16:05:33', lastInspector: '赵付', reason: '退：损坏退货' },
  { id: 4, orderLine: 'PG001B20260602003-8', isbn: '9787518359067', title: '石油勘探技术', author: '李明', price: '¥66.00', netPrice: '¥52.80', currency: 'CNY', volumesInSet: 1, counts: '2 / 0 / 0 / 0', lastTime: '2026-05-29 11:20:00', lastInspector: '杨晓购', reason: '撤：录入错误' },
  { id: 5, orderLine: 'PG001B20260602003-9', isbn: '9787518359068', title: '油气田开发综合示例', author: '示例作者', price: '¥88.00', netPrice: '¥70.40', currency: 'CNY', volumesInSet: 1, counts: '4 / 0 / 1 / 1', lastTime: '2026-05-28 10:00:00', lastInspector: '杨晓购', reason: '换：破损换货；退：破损退货' },
  { id: 6, orderLine: 'PG001B20260601003-1', isbn: '9787501345678', title: '图书馆学概论', author: '吴慰慈著', price: '¥68.00', netPrice: '¥54.40', currency: 'CNY', volumesInSet: 1, counts: '1 / 1 / 0 / 0', lastTime: '2026-05-28 15:06:37', lastInspector: '赵付', reason: '' },
  { id: 7, orderLine: 'PG001B20260601003-3', isbn: '9787501345678', title: '图书馆学概论', author: '吴慰慈著', price: '¥68.00', netPrice: '¥54.40', currency: 'CNY', volumesInSet: 1, counts: '2 / 1 / 0 / 0', lastTime: '2026-05-27 10:20:15', lastInspector: '杨晓购', reason: '' },
  { id: 8, orderLine: 'PG001B20260601003-5', isbn: '9787501345678', title: '图书馆学概论', author: '吴慰慈著', price: '¥68.00', netPrice: '¥54.40', currency: 'CNY', volumesInSet: 1, counts: '1 / 0 / 0 / 0', lastTime: '2026-05-26 09:15:42', lastInspector: '王二小', reason: '撤：录入错误' }
];

export const acceptanceSpeciesSearchFields = [
  {
    key: 'keyword',
    label: '',
    type: 'selectText',
    selectKey: 'searchField',
    options: [
      { value: 'isbn', label: 'ISBN' },
      { value: 'author', label: '作者' },
      { value: 'title', label: '正题名' },
      { value: 'orderLine', label: '订单行号' }
    ]
  },
  { key: 'inspector', label: '验收人' },
  {
    key: 'acceptTime',
    label: '验收时间',
    type: 'dateRange',
    startKey: 'startDate',
    endKey: 'endDate'
  }
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
  totalSpecies: '8',
  totalVolumes: '9',
  totalListPrice: '¥434.00',
  totalNetPrice: '¥347.20'
};

import { reactive } from 'vue';
import {
  formatSpeciesReason,
  enrichVolumeRowsWithPricing,
  parseSpeciesCounts,
  updateSpeciesCounts,
  sumSpeciesSetStats,
  parseMoneyAmount,
  parseOptionalNumber
} from '@/modules/acceptance/data/detail-utils';

function formatReason(row) {
  return formatSpeciesReason(row);
}

export const acceptanceAvSpeciesRows = [
  { id: 1, orderLine: 'PG001B20260529010-1', isbn: '9787883310679', carrier: 'CD', title: '中国经典民歌', productBarcode: '', catalogNo: '', author: '殷秀梅', price: '¥300.00', netPrice: '¥240.00', currency: 'CNY', piecesInSet: 1, counts: '1 / 1 / 0 / 0', lastTime: '2026-05-29 10:30:39', lastInspector: '王二小' },
  { id: 2, orderLine: 'PG001B20260529010-2', isbn: '9787883310678', carrier: 'LP', title: '古典音乐精选', productBarcode: '', catalogNo: '', author: '维也纳爱乐', price: '¥280.00', netPrice: '¥224.00', currency: 'CNY', piecesInSet: 2, counts: '2 / 0 / 1 / 0', exchangeReason: '换货', lastTime: '2026-05-28 11:15:20', lastInspector: '杨晓婉' },
  { id: 3, orderLine: 'PG001B20260529010-3', isbn: '', carrier: 'DVD', title: '国家地理纪录片', productBarcode: '017685110221', catalogNo: 'DVD-1102', author: '国家地理', price: '¥168.00', netPrice: '¥134.40', currency: 'CNY', piecesInSet: 1, counts: '1 / 0 / 0 / 1', returnReason: '退货', lastTime: '2026-05-27 09:40:08', lastInspector: '赵付' },
  { id: 4, orderLine: 'PG001B20260529010-4', isbn: '9787883310677', carrier: 'CD', title: '莫扎特钢琴协奏曲', productBarcode: '', catalogNo: '', author: '莫扎特', price: '¥120.00', netPrice: '¥96.00', currency: 'CNY', piecesInSet: 1, counts: '2 / 0 / 0 / 0', revokeReceiveReasons: ['重复收货'], lastTime: '2026-05-26 15:10:22', lastInspector: '王二小' },
  { id: 5, orderLine: 'PG001B20260529010-5', isbn: '9787883310676', carrier: 'CD', title: '综合场景示例', productBarcode: '', catalogNo: '', author: '示例作者', price: '¥200.00', netPrice: '¥160.00', currency: 'CNY', piecesInSet: 1, counts: '4 / 0 / 1 / 1', exchangeReason: '破损换货', returnReason: '破损退货', revokeReceiveReasons: ['操作失误重新收货'], lastTime: '2026-05-25 14:30:00', lastInspector: '杨晓婉' }
].map(r => ({ ...r, reason: formatReason(r) }));

export const acceptanceAvSpeciesSearchFields = [
  {
    key: 'keyword',
    label: '',
    type: 'selectText',
    selectKey: 'searchField',
    selectClass: 'min-w-[7.5rem]',
    options: [
      { value: 'isbn', label: 'ISBN/ISRC' },
      { value: 'title', label: '题名' },
      { value: 'author', label: '作者' },
      { value: 'productBarcode', label: '商品条码' },
      { value: 'catalogNo', label: '目录号' },
      { value: 'carrier', label: '载体' },
      { value: 'orderLine', label: '订单行号' }
    ]
  },
  { key: 'inspector', label: '验收人' },
  {
    key: 'acceptTime',
    label: '验收时间',
    type: 'dateRange',
    startKey: 'startDate',
    endKey: 'endDate'
  }
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

/** 验收详情按种明细运行时（可写，供逐条收货累计与写回） */
const speciesRuntime = reactive({
  纸质书: acceptanceSpeciesRows.map(r => ({ ...r })),
  视听资料: acceptanceAvSpeciesRows.map(r => ({ ...r }))
});

function nowAcceptanceTime() {
  const d = new Date();
  const p = n => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())} ${p(d.getHours())}:${p(d.getMinutes())}:${p(d.getSeconds())}`;
}

function formatPriceLabel(price) {
  if (price == null || price === '') return '—';
  const s = String(price).trim();
  if (s.startsWith('¥')) return s;
  const amount = parseMoneyAmount(s);
  if (amount == null) return s;
  return `¥${amount.toFixed(2)}`;
}

/** 收货 meta 写回定价 / 实洋 / 套内册数（件数） */
function applySpeciesPricingMeta(row, meta, isAv) {
  if (!meta || typeof meta !== 'object') return;
  if (meta.price != null && String(meta.price).trim() !== '') {
    row.price = formatPriceLabel(meta.price);
  }
  const netSrc = meta.actualPrice ?? meta.netPrice;
  if (netSrc != null && String(netSrc).trim() !== '') {
    row.netPrice = formatPriceLabel(netSrc);
  }
  const copiesSrc = meta.volumesInSet ?? meta.copies ?? meta.piecesInSet;
  const copies = parseOptionalNumber(copiesSrc);
  if (copies != null) {
    if (isAv) row.piecesInSet = copies;
    else row.volumesInSet = copies;
  }
}

export function getSpeciesRuntimeRows(resourceType) {
  return resourceType === '视听资料' ? speciesRuntime['视听资料'] : speciesRuntime['纸质书'];
}

export function sumAcceptanceSpeciesSetStats(resourceType) {
  return sumSpeciesSetStats(getSpeciesRuntimeRows(resourceType));
}

/**
 * 将逐条收货的收/换/退写入验收详情按种明细（按订单行号 upsert）
 * @param {{ resourceType: string, orderLine: string, flow: 'receive'|'exchange'|'return', sets: number, meta?: object }} payload
 */
export function applyAcceptanceSpeciesFlow(payload) {
  const {
    resourceType,
    orderLine,
    flow,
    sets,
    meta = {}
  } = payload || {};
  const qty = Number(sets) || 0;
  if (!orderLine || qty <= 0) return null;

  const rows = getSpeciesRuntimeRows(resourceType);
  const isAv = resourceType === '视听资料';
  let row = rows.find(r => r.orderLine === orderLine);
  if (!row) {
    row = {
      id: rows.reduce((max, r) => Math.max(max, Number(r.id) || 0), 0) + 1,
      orderLine,
      isbn: meta.isbn || meta.isrc || '',
      title: meta.title || '',
      author: meta.author || '',
      price: formatPriceLabel(meta.price),
      currency: meta.currency || 'CNY',
      counts: '0 / 0 / 0 / 0',
      lastTime: nowAcceptanceTime(),
      lastInspector: meta.inspector || '当前馆员',
      reason: ''
    };
    if (isAv) {
      row.carrier = meta.carrier || '';
      row.productBarcode = meta.barcode || meta.productBarcode || '';
      row.catalogNo = meta.catalogNo || '';
    }
    rows.push(row);
  }

  const current = parseSpeciesCounts(row);
  const patch = {};
  if (!current.ordered && meta.orderedSets != null) {
    patch.ordered = Number(meta.orderedSets) || 0;
  }
  if (flow === 'receive') {
    patch.received = current.received + qty;
    const deductExchange = Number(meta.deductExchange) || 0;
    if (deductExchange > 0) {
      patch.exchange = Math.max(0, current.exchange - deductExchange);
    }
    applySpeciesPricingMeta(row, meta, isAv);
  } else if (flow === 'exchange') {
    patch.exchange = current.exchange + qty;
    if (meta.reason) row.exchangeReason = meta.reason;
    applySpeciesPricingMeta(row, meta, isAv);
  } else if (flow === 'return') {
    patch.returned = current.returned + qty;
    if (meta.reason) row.returnReason = meta.reason;
    applySpeciesPricingMeta(row, meta, isAv);
  } else {
    return null;
  }

  updateSpeciesCounts(row, patch);
  row.lastTime = nowAcceptanceTime();
  if (meta.inspector) row.lastInspector = meta.inspector;
  row.reason = formatSpeciesReason(row);
  return row;
}

export const acceptanceBookVolumeRows = [
  { id: 1, barcode: '001T268700006', isbn: '9787518359066', title: '现代精细油藏描述', author: '陈欢庆 著', price: '¥110.00', netPrice: '¥66.00', unitPrice: '¥36.67', currency: 'CNY', volumesInSet: 3, receiver: '杨晓娴', receiveTime: '2026-06-02 09:51:57' },
  { id: 2, barcode: '001T268700005', isbn: '9787518359066', title: '现代精细油藏描述', author: '陈欢庆 著', price: '¥110.00', netPrice: '¥66.00', unitPrice: '¥36.67', currency: 'CNY', volumesInSet: 3, receiver: '杨晓娴', receiveTime: '2026-06-02 09:51:57' },
  { id: 3, barcode: '001T268700004', isbn: '9787518359066', title: '现代精细油藏描述', author: '陈欢庆 著', price: '¥110.00', netPrice: '¥66.00', unitPrice: '¥36.67', currency: 'CNY', volumesInSet: 3, receiver: '杨晓娴', receiveTime: '2026-06-02 09:51:57' },
  { id: 4, barcode: '001T268700003', isbn: '9787518359066', title: '现代精细油藏描述', author: '陈欢庆 著', price: '¥100.00', netPrice: '¥60.00', unitPrice: '¥33.33', currency: 'CNY', volumesInSet: 3, receiver: '杨晓娴', receiveTime: '2026-06-02 09:51:57' },
  { id: 5, barcode: '001T268700002', isbn: '9787518359066', title: '现代精细油藏描述', author: '陈欢庆 著', price: '¥100.00', netPrice: '¥60.00', unitPrice: '¥33.33', currency: 'CNY', volumesInSet: 3, receiver: '杨晓娴', receiveTime: '2026-06-02 09:51:57' },
  { id: 6, barcode: '001T268700001', isbn: '9787518359066', title: '现代精细油藏描述', author: '陈欢庆 著', price: '¥100.00', netPrice: '¥60.00', unitPrice: '¥33.33', currency: 'CNY', volumesInSet: 3, receiver: '杨晓娴', receiveTime: '2026-06-02 09:51:57' }
];

export const acceptanceBookVolumeSearchFields = [
  {
    key: 'keyword',
    label: '',
    type: 'selectText',
    selectKey: 'searchField',
    options: [
      { value: 'barcode', label: '条码号' },
      { value: 'isbn', label: 'ISBN' },
      { value: 'author', label: '作者' },
      { value: 'title', label: '正题名' }
    ]
  },
  { key: 'receiver', label: '收货人' },
  {
    key: 'receiveTimeRange',
    label: '收货时间',
    type: 'dateRange',
    startKey: 'startDate',
    endKey: 'endDate'
  }
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
  {
    key: 'keyword',
    label: '',
    type: 'selectText',
    selectKey: 'searchField',
    selectClass: 'min-w-[7.5rem]',
    options: [
      { value: 'barcode', label: '条码号' },
      { value: 'isbn', label: 'ISBN/ISRC' },
      { value: 'title', label: '题名' },
      { value: 'author', label: '作者' },
      { value: 'productBarcode', label: '商品条码' },
      { value: 'catalogNo', label: '目录号' },
      { value: 'carrier', label: '载体' }
    ]
  },
  { key: 'receiver', label: '收货人' },
  {
    key: 'receiveTimeRange',
    label: '收货时间',
    type: 'dateRange',
    startKey: 'startDate',
    endKey: 'endDate'
  }
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
  const source = detailRows ?? getSpeciesRuntimeRows(isAv ? '视听资料' : '纸质书');
  const rows = source.map(r => ({ ...r, reason: formatReason(r) }));
  return isAv
    ? { rows, fields: acceptanceAvSpeciesSearchFields, columns: acceptanceAvSpeciesColumns, exportLabel: '导出验收明细' }
    : { rows, fields: acceptanceSpeciesSearchFields, columns: acceptanceSpeciesColumns, exportLabel: '导出验收明细' };
}

/**
 * 验收单头部汇总（与验收详情页同逻辑）
 * 总册数 = Σ(收货套数 × 套内册数/件数)
 * 总码洋 = Σ(收货套数 × 定价/码洋)
 * 总实洋 = Σ(收货套数 × 实洋)
 * 套内册数/件数缺失时默认按 1；实洋/定价缺失时该行对应贡献为 0
 * @param {string} resourceType
 * @param {object[]} [speciesRows] 按种明细行；缺省时取该类型运行时明细
 * @returns {{ totalSpecies: string, totalVolumes: string, totalListPrice: string, totalNetPrice: string }}
 */
export function calcAcceptanceHeaderTotals(resourceType, speciesRows) {
  const type = resourceType || '纸质书';
  const isAv = type === '视听资料';
  const rows = speciesRows ?? getSpeciesRuntimeRows(type);
  let volumes = 0;
  let listAmount = 0;
  let netAmount = 0;

  for (const row of rows) {
    const received = parseSpeciesCounts(row).received || 0;
    const copies = parseOptionalNumber(isAv ? row.piecesInSet : row.volumesInSet) ?? 1;
    const listPrice = parseMoneyAmount(row.price);
    const netPrice = parseMoneyAmount(row.netPrice);
    volumes += received * copies;
    if (listPrice != null) listAmount += received * listPrice;
    if (netPrice != null) netAmount += received * netPrice;
  }

  return {
    totalSpecies: String(rows.length),
    totalVolumes: String(volumes),
    totalListPrice: `¥${listAmount.toFixed(2)}`,
    totalNetPrice: `¥${netAmount.toFixed(2)}`
  };
}

export function getDefaultDetailRows(type, counts) {
  if (type === '视听资料' && counts === '0/0/0') return [];
  return undefined;
}
