export const EXCHANGE_STATUS_MAP = {
  pending: { text: '未到货', cls: 'text-orange-500' },
  cancelled: { text: '已撤销', cls: 'text-gray-500' },
  arrived: { text: '已到货', cls: 'text-green-600' }
};

export const RESOURCE_ID_FIELD_OPTIONS = [
  { value: 'resourceId', label: '资源标识' },
  { value: 'isbn', label: 'ISBN' },
  { value: 'isrc', label: 'ISRC' },
  { value: 'title', label: '题名' }
];

export const EXCHANGE_SUPPLIER_OPTIONS = ['全部', '教图', '北京人天', '湖南长沙', '湖北三新'];

export const exchangeRows = [
  {
    id: 1,
    resourceType: '视听资料',
    site: '华威桥馆',
    resourceId: 'CD-1102;017685110221',
    isbn: '',
    isrc: '',
    title: '红楼梦900',
    author: '曹雪芹',
    publisher: '人民文学出版社',
    orderLineNo: 'PG00120260522001-1',
    listPrice: '39.8',
    currency: 'CNY',
    netPrice: '39.8',
    copiesInSet: 1,
    exchangeSets: 1,
    reason: '残损脏',
    remark: '111',
    exchangeTime: '2026-05-22 08:50:08',
    exchangeBatch: 'ysPG00120260522003',
    supplier: '湖北三新',
    shipNo: '123123',
    status: 'pending',
    arrivedSets: null,
    arrivedBatch: null
  },
  {
    id: 2,
    resourceType: '纸质书',
    site: '华威桥馆',
    resourceId: '9787115547841',
    isbn: '9787115547841',
    isrc: '',
    title: '计算机网络原理与实践',
    author: '谢希仁',
    publisher: '人民邮电出版社',
    orderLineNo: 'PG00120260202012-1',
    listPrice: '59.0',
    currency: 'CNY',
    netPrice: '47.2',
    copiesInSet: 1,
    exchangeSets: 2,
    reason: '破损',
    remark: '封面损坏',
    exchangeTime: '2026-02-02 08:50:08',
    exchangeBatch: 'ysPG00120260202012',
    supplier: '湖北三新',
    shipNo: 'ST001820260202012-1',
    status: 'cancelled',
    arrivedSets: null,
    arrivedBatch: null
  },
  {
    id: 3,
    resourceType: '纸质书',
    site: '华威桥馆',
    resourceId: '9787565855375',
    isbn: '9787565855375',
    isrc: '',
    title: '地质勘查工程与生态修复',
    author: '张昕, 冯红彬, 张海燕主编',
    publisher: '地质出版社',
    orderLineNo: 'st00120250921005-3',
    listPrice: '58.0',
    currency: 'CNY',
    netPrice: '58.0',
    copiesInSet: 3,
    exchangeSets: 2,
    reason: '残缺损',
    remark: '封面污损',
    exchangeTime: '2026-08-01 09:00:00',
    exchangeBatch: 'ysEX20260801001',
    supplier: '湖北三新',
    shipNo: 'SH20260801001',
    status: 'pending',
    arrivedSets: null,
    arrivedBatch: null
  },
  {
    id: 4,
    resourceType: '纸质书',
    site: '华威桥馆',
    resourceId: '9787565855375',
    isbn: '9787565855375',
    isrc: '',
    title: '地质勘查工程与生态修复',
    author: '张昕, 冯红彬, 张海燕主编',
    publisher: '地质出版社',
    orderLineNo: 'st00120250921005-3',
    listPrice: '58.0',
    currency: 'CNY',
    netPrice: '58.0',
    copiesInSet: 3,
    exchangeSets: 1,
    reason: '换货',
    remark: '',
    exchangeTime: '2026-08-10 10:30:00',
    exchangeBatch: 'ysEX20260810002',
    supplier: '湖北三新',
    shipNo: 'SH20260810002',
    status: 'pending',
    arrivedSets: null,
    arrivedBatch: null
  }
];

/**
 * 按换货时间早→晚冲销未到货换货记录
 * @param {string} orderLineNo
 * @param {number} offset
 * @param {string} arrivedBatch 到货批次（当前验收单号）
 * @returns {{ applied: number, shortfall: number }}
 */
export function applyExchangeOffsetToRecords(orderLineNo, offset, arrivedBatch) {
  let remain = Number(offset) || 0;
  if (!orderLineNo || remain <= 0) return { applied: 0, shortfall: 0 };

  const candidates = exchangeRows
    .filter(r => r.orderLineNo === orderLineNo && r.status === 'pending')
    .sort((a, b) => String(a.exchangeTime || '').localeCompare(String(b.exchangeTime || '')));

  let applied = 0;
  for (const row of candidates) {
    if (remain <= 0) break;
    const exchangeSets = Number(row.exchangeSets) || 0;
    const arrived = Number(row.arrivedSets) || 0;
    const can = Math.max(0, exchangeSets - arrived);
    if (can <= 0) continue;
    const take = Math.min(remain, can);
    row.arrivedSets = arrived + take;
    row.arrivedBatch = arrivedBatch || row.arrivedBatch || '';
    if ((Number(row.arrivedSets) || 0) >= exchangeSets) {
      row.status = 'arrived';
    }
    remain -= take;
    applied += take;
  }
  return { applied, shortfall: remain };
}

export const EXCHANGE_COLUMNS = [
  { key: 'id', label: '序号' },
  { key: 'resourceType', label: '资源类型' },
  { key: 'site', label: '馆址' },
  { key: 'resourceId', label: '资源标识' },
  { key: 'title', label: '题名', minWidth: 'min-w-[140px]' },
  { key: 'author', label: '作者' },
  { key: 'publisher', label: '出版社' },
  { key: 'orderLineNo', label: '订单行号' },
  { key: 'listPrice', label: '定价' },
  { key: 'currency', label: '币种' },
  { key: 'netPrice', label: '实洋' },
  { key: 'copiesInSet', label: '套内册数' },
  { key: 'exchangeSets', label: '换货套数' },
  { key: 'reasonRemark', label: '原因&备注', minWidth: 'min-w-[120px]' },
  { key: 'exchangeTime', label: '换货时间', minWidth: 'min-w-[140px]' },
  { key: 'exchangeBatch', label: '换货批次' },
  { key: 'supplier', label: '供应商' },
  { key: 'shipNo', label: '发货单号' },
  { key: 'status', label: '换货状态' },
  { key: 'arrivedSets', label: '到货套数' },
  { key: 'arrivedBatch', label: '到货批次' },
  { key: 'actions', label: '操作', sticky: true }
];

export const exchangeSearchFields = [
  { key: 'keyword', label: '资源标识' },
  { key: 'supplier', label: '供应商', type: 'select', options: EXCHANGE_SUPPLIER_OPTIONS },
  { key: 'shipNo', label: '发货单号' },
  { key: 'site', label: '馆址', type: 'select', extra: true },
  { key: 'reason', label: '换货原因', extra: true },
  { key: 'batch', label: '换货批次', extra: true },
  { key: 'exchangeDate', label: '换货时间', type: 'date', extra: true }
];

export function canCancelExchange(row) {
  return row.status === 'pending';
}

export function canReturnFromExchange(row) {
  return row.status === 'pending';
}

export function filterExchangeRows(rows, search = {}) {
  const kw = (search.keyword || '').trim().toLowerCase();
  const field = search.idField || 'resourceId';

  return rows.filter(row => {
    if (kw) {
      let val = '';
      if (field === 'title') val = row.title || '';
      else if (field === 'isbn') val = row.isbn || row.resourceId || '';
      else if (field === 'isrc') val = row.isrc || '';
      else val = row.resourceId || '';
      if (!String(val).toLowerCase().includes(kw)) return false;
    }
    if (search.supplier && search.supplier !== '全部' && row.supplier !== search.supplier) return false;
    if (search.shipNo && !row.shipNo.includes(search.shipNo.trim())) return false;
    if (search.site && search.site !== '全部' && row.site !== search.site) return false;
    if (search.reason && !row.reason.includes(search.reason.trim())) return false;
    if (search.batch && !row.exchangeBatch.includes(search.batch.trim())) return false;
    if (search.exchangeDate && row.exchangeTime.slice(0, 10) !== search.exchangeDate) return false;
    return true;
  });
}
