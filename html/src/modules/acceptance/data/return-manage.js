export const RESOURCE_ID_FIELD_OPTIONS = [
  { value: 'resourceId', label: '资源标识' },
  { value: 'isbn', label: 'ISBN' },
  { value: 'isrc', label: 'ISRC' },
  { value: 'title', label: '题名' }
];

export const RETURN_SUPPLIER_OPTIONS = ['全部', '教图', '湖北三新', '北京人天'];

export const returnRows = [
  {
    id: 1,
    resourceType: '视听资料',
    site: '华威桥馆',
    resourceId: 'CD-1102;017685110221',
    isbn: '',
    isrc: '',
    title: '国家大剧院经典剧目',
    author: '—',
    publisher: '国家大剧院',
    orderLineNo: 'PG00120260522005-1',
    listPrice: '128.0',
    currency: 'CNY',
    netPrice: '102.4',
    copiesInSet: 1,
    returnSets: 1,
    reason: '断品',
    remark: '',
    returnTime: '2026-05-22 10:30:15',
    returnBatch: 'thPG00120260522005',
    supplier: '湖北三新',
    shipNo: 'ST001820260522005-1',
    status: 'active'
  }
];

export const RETURN_COLUMNS = [
  { key: 'id', label: '序号' },
  { key: 'resourceType', label: '资源类型' },
  { key: 'site', label: '馆址' },
  { key: 'resourceId', label: '资源标识' },
  { key: 'title', label: '题名', minWidth: 'min-w-[120px]' },
  { key: 'author', label: '作者' },
  { key: 'publisher', label: '出版社' },
  { key: 'orderLineNo', label: '订单行号' },
  { key: 'listPrice', label: '定价' },
  { key: 'currency', label: '币种' },
  { key: 'netPrice', label: '实洋' },
  { key: 'copiesInSet', label: '套内册数' },
  { key: 'returnSets', label: '退货套数' },
  { key: 'reasonRemark', label: '原因&备注', minWidth: 'min-w-[100px]' },
  { key: 'returnTime', label: '退货时间', minWidth: 'min-w-[140px]' },
  { key: 'returnBatch', label: '退货批次' },
  { key: 'supplier', label: '供应商' },
  { key: 'shipNo', label: '发货单号' },
  { key: 'actions', label: '操作', sticky: true }
];

export const returnSearchFields = [
  { key: 'keyword', label: '资源标识' },
  { key: 'supplier', label: '供应商', type: 'select', options: RETURN_SUPPLIER_OPTIONS },
  { key: 'shipNo', label: '发货单号' },
  { key: 'site', label: '馆址', type: 'select', extra: true },
  { key: 'reason', label: '退货原因', extra: true },
  { key: 'batch', label: '退货批次', extra: true },
  { key: 'returnDate', label: '退货时间', type: 'date', extra: true }
];

export function canCancelReturn(row) {
  return row.status === 'active';
}

export function filterReturnRows(rows, search = {}) {
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
    if (search.batch && !row.returnBatch.includes(search.batch.trim())) return false;
    if (search.returnDate && row.returnTime.slice(0, 10) !== search.returnDate) return false;
    return true;
  });
}
