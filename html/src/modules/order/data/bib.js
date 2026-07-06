import { marcMappingRows, parseMarcTypeLabel, resolveOrderFieldsFromMarcMapping } from '@/modules/marc-mapping/data/marc-mapping-manage';
import { sortOrderLinesByIssueTimeDesc } from '@/modules/order/data/order-line-sort';

const BIB_DATABASE_ROWS = [
  {
    isbn: '9787576724455', title: '流固耦合声学', author: '张志军, 姜献体, 王树声',
    publisher: '哈尔滨工业大学出版社', pubYear: '2025', postalCode: '', edition: '', callNo: '',
    bibStatus: '发订', review: '未审校', bibRecordNo: 'BIB2025001001', marcType: 'CNMARC|中文图书'
  },
  { isbn: '978-7-5505-0344-1', classNo: 'A20', title: '小王子', author: '蓝山主编', publisher: '大连出版社', pubYear: '2012', postalCode: '', edition: '1版', callNo: 'I565.88/1', bibStatus: '详编', review: '审校通过', bibRecordNo: 'BIB2024001001', marcType: 'CNMARC|中文图书', series: '新经典文库' },
  { isbn: '978-7-5325-5199-2', classNo: 'A20', title: '小王子的星际旅行', author: '蓝山主编', publisher: '江苏凤凰文艺出版社', pubYear: '2016', postalCode: '', edition: '1版', callNo: 'I565.88/2', bibStatus: '初编', review: '审校通过', bibRecordNo: 'BIB2024001002', marcType: 'CNMARC|中文图书', series: '新经典文库' },
  { isbn: '978-7-5505-0345-8', classNo: 'A20', title: '小王子', author: '蓝山主编', publisher: '大连出版社', pubYear: '2013', postalCode: '', edition: '2版', callNo: 'I565.88/3', bibStatus: '发订', review: '未审校', bibRecordNo: 'BIB2024001003', marcType: 'CNMARC|中文图书', series: '新经典文库' },
  { isbn: '978-7-5505-0346-5', classNo: 'A20', title: '小王子', author: '蓝山主编', publisher: '大连出版社', pubYear: '2014', postalCode: '', edition: '1版', callNo: 'I565.88/4', bibStatus: '详编', review: '审校通过', bibRecordNo: 'BIB2024001004', marcType: 'CNMARC|中文图书', series: '新经典文库' },
  { isbn: '978-7-5325-5191-4', classNo: 'A20', title: '小王子的星际旅行', author: '蓝山主编', publisher: '江苏凤凰文艺出版社', pubYear: '2017', postalCode: '', edition: '1版', callNo: 'I565.88/5', bibStatus: '初编', review: '审校驳回', bibRecordNo: 'BIB2024001005', marcType: 'CNMARC|中文图书', series: '新经典文库' },
  { isbn: '978-7-5505-0347-2', classNo: 'A20', title: '小王子', author: '蓝山主编', publisher: '大连出版社', pubYear: '2015', postalCode: '', edition: '1版', callNo: 'I565.88/6', bibStatus: '详编', review: '审校通过', bibRecordNo: 'BIB2024001006', marcType: 'CNMARC|中文图书', series: '新经典文库' },
  { isbn: '978-7-5325-5200-5', classNo: 'A20', title: '小王子的星际旅行', author: '蓝山主编', publisher: '江苏凤凰文艺出版社', pubYear: '2018', postalCode: '', edition: '1版', callNo: 'I565.88/7', bibStatus: '发订', review: '未审校', bibRecordNo: 'BIB2024001007', marcType: 'CNMARC|中文图书', series: '新经典文库' },
  { isbn: '978-7-5505-0348-9', classNo: 'A20', title: '小王子', author: '蓝山主编', publisher: '大连出版社', pubYear: '2016', postalCode: '', edition: '1版', callNo: 'I565.88/8', bibStatus: '详编', review: '审校通过', bibRecordNo: 'BIB2024001008', marcType: 'CNMARC|中文图书', series: '新经典文库' },
  { isbn: '978-7-5325-5201-2', classNo: 'A20', title: '小王子的星际旅行', author: '蓝山主编', publisher: '江苏凤凰文艺出版社', pubYear: '2019', postalCode: '', edition: '1版', callNo: 'I565.88/9', bibStatus: '详编', review: '审校通过', bibRecordNo: 'BIB2024001009', marcType: 'CNMARC|中文图书', series: '新经典文库' },
  { isbn: '978-7-5505-0349-6', classNo: 'A20', title: '小王子', author: '蓝山主编', publisher: '大连出版社', pubYear: '2017', postalCode: '', edition: '1版', callNo: 'I565.88/10', bibStatus: '详编', review: '审校通过', bibRecordNo: 'BIB2024001010', marcType: 'CNMARC|中文图书', series: '新经典文库' }
];

export const bibRows = Array.from({ length: 85 }, (_, index) => {
  const base = BIB_DATABASE_ROWS[index % BIB_DATABASE_ROWS.length];
  return { ...base, id: index + 1, no: index + 1 };
});

export const DEFAULT_BIB_COLUMNS = [
  { key: 'no', label: '序号', visible: true },
  { key: 'bibStatus', label: '书目状态', visible: true },
  { key: 'review', label: '审校状态', visible: true },
  { key: 'callNo', label: '索书号', visible: true },
  { key: 'author', label: '责任者', visible: true, minWidth: 'min-w-[100px]' },
  { key: 'title', label: '题名', visible: true, minWidth: 'min-w-[120px]' },
  { key: 'pubYear', label: '出版时间', visible: true },
  { key: 'postalCode', label: '邮发代号', visible: true },
  { key: 'isbn', label: 'ISBN/ISSN/ISRC', visible: true, minWidth: 'min-w-[130px]' },
  { key: 'publisher', label: '出版社', visible: true, minWidth: 'min-w-[120px]' },
  { key: 'edition', label: '版次/版本', visible: true },
  { key: 'classNo', label: '分类号', visible: false },
  { key: 'bibRecordNo', label: '书目记录号', visible: false },
  { key: 'marcType', label: 'MARC类型', visible: false, minWidth: 'min-w-[140px]' },
  { key: 'series', label: '丛书名', visible: false },
  { key: 'actions', label: '操作', visible: false, sticky: true }
];

export const bibSearchFields = [
  { key: 'title', label: '题名' },
  { key: 'isbn', label: 'ISBN/ISSN' },
  { key: 'author', label: '责任者' },
  { key: 'publisher', label: '出版社', extra: true },
  { key: 'bibStatus', label: '书目状态', type: 'select', extra: true, options: ['全部', '初编', '详编', '发订'] },
  { key: 'review', label: '审校状态', type: 'select', extra: true, options: ['全部', '未审校', '审校通过', '审校驳回'] },
  { key: 'bibRecordNo', label: '书目记录号', extra: true }
];

export const bibRelatedOrderLines = [
  {
    bibRecordNo: 'BIB2025001001', orderId: 'PG001B20250617001', site: '首都华威桥馆',
    orderLineNo: 'PG001B20250617001-1', title: '流固耦合声学', resourceId: '9787576724455',
    carrier: 'AP', author: '张志军, 姜献体, 王树声', publisher: '哈尔滨工业大学出版社', publishTime: '2025',
    volumeNo: '—', volumeName: '—', price: '128.00', currency: 'CNY', copiesInSet: 1, sets: 2,
    lineStatus: '已发订', acceptanceStatus: '待验收', settlementStatus: '待申请',
    flowStats: '2/0/0/0/0', issueTime: '2026-06-10 14:25:36'
  },
  {
    bibRecordNo: 'BIB2025001001', orderId: 'PG001B20250512003', site: '北京城市图书馆',
    orderLineNo: 'PG001B20250512003-2', title: '流固耦合声学', resourceId: '9787576724455',
    carrier: 'AP', author: '张志军, 姜献体, 王树声', publisher: '哈尔滨工业大学出版社', publishTime: '2025',
    volumeNo: '—', volumeName: '—', price: '128.00', currency: 'CNY', copiesInSet: 1, sets: 1,
    lineStatus: '已关闭', acceptanceStatus: '收货完成', settlementStatus: '已结算',
    flowStats: '1/1/0/0/0', issueTime: '2025-12-08 09:18:02'
  },
  {
    bibRecordNo: 'BIB2024001001', orderId: 'PG001B202406030005', site: '首都华威桥馆',
    orderLineNo: 'PG001B202406030005-1', title: '小王子', resourceId: '9787550503441',
    carrier: 'AP', author: '蓝山主编', publisher: '大连出版社', publishTime: '2012',
    volumeNo: '—', volumeName: '—', price: '28.00', currency: 'CNY', copiesInSet: 1, sets: 3,
    lineStatus: '已发订', acceptanceStatus: '部分收货', settlementStatus: '待申请',
    flowStats: '3/1/0/0/0', issueTime: '2026-03-15 11:42:08'
  },
  {
    bibRecordNo: 'BIB2024001003', orderId: 'PG001B202406030006', site: '首都大兴机场分馆',
    orderLineNo: 'PG001B202406030006-1', title: '小王子', resourceId: '9787550503458',
    carrier: 'AP', author: '蓝山主编', publisher: '大连出版社', publishTime: '2013',
    volumeNo: '—', volumeName: '—', price: '29.00', currency: 'CNY', copiesInSet: 1, sets: 1,
    lineStatus: '待发订', acceptanceStatus: '', settlementStatus: '待申请',
    flowStats: '1/0/0/0/0', issueTime: ''
  }
];

export const pendingOrdersForBib = [
  {
    orderId: 'PG001B202406030001', subscriber: 'ceshi', site: '首都华威桥馆', method: '现采',
    resourceType: '纸质书', language: '中文', supplier: '湖南长沙',
    budget: '2024年首都图书馆图书购置费中文普通图书(一)', discount: '0.80',
    orderStatus: 'pending', createTime: '2024-06-03 09:47:52'
  },
  {
    orderId: 'PG001B202406030005', subscriber: 'ceshi', site: '首都华威桥馆', method: '现采',
    resourceType: '纸质书', language: '中文', supplier: '北京新华',
    budget: '2024年首都图书馆图书购置费中文普通图书(四)', discount: '0.80',
    orderStatus: 'pendingImport', createTime: '2024-06-03 14:30:00'
  },
  {
    orderId: 'PG001B202406030006', subscriber: 'ceshi', site: '首都大兴机场分馆', method: '现采',
    resourceType: '视听资料', language: '中文', supplier: '湖北三新',
    budget: '2024年首都图书馆视听资料购置费', discount: '0.80',
    orderStatus: 'pending', createTime: '2024-06-04 09:15:30'
  },
  {
    orderId: 'PG001B20250512003', subscriber: 'ceshi', site: '北京城市图书馆', method: '现采',
    resourceType: '纸质书', language: '中文', supplier: '湖南长沙',
    budget: '2024年首都图书馆图书购置费中文普通图书(二)', discount: '0.80',
    orderStatus: 'pending', createTime: '2025-05-12 10:30:00'
  }
];

export const MARC_TYPE_MAPPING_ROWS = marcMappingRows;

export { parseMarcTypeLabel, resolveOrderFieldsFromMarcMapping };

export function buildMarcDetailFields(row) {
  if (!row) return [];
  return [
    { field: '010', indicator: '', content: `▼a${row.isbn || ''}` },
    { field: '200', indicator: '1 ', content: `▼a${row.title || ''}▼f${row.author || ''}` },
    { field: '210', indicator: '  ', content: `▼a${row.publisher || ''}▼d${row.pubYear || ''}` },
    { field: '215', indicator: '  ', content: '▼a1册' },
    { field: '690', indicator: '  ', content: `▼a${row.classNo || ''}` },
    { field: '225', indicator: '  ', content: `▼a${row.series || ''}` }
  ].filter(item => item.content.replace(/▼[a-z]/g, '').trim());
}

export function getRelatedOrderLines(bibRecordNo) {
  const lines = bibRelatedOrderLines.filter(line => line.bibRecordNo === bibRecordNo);
  return sortOrderLinesByIssueTimeDesc(lines);
}

export function summarizeRelatedOrderFlow(lines) {
  const stats = { issued: 0, received: 0, exchanged: 0, returned: 0, cancelled: 0 };
  lines.forEach(line => {
    const parts = String(line.flowStats || '0/0/0/0/0').split('/').map(Number);
    stats.issued += parts[0] || 0;
    stats.received += parts[1] || 0;
    stats.exchanged += parts[2] || 0;
    stats.returned += parts[3] || 0;
    stats.cancelled += parts[4] || 0;
  });
  return stats;
}

export function getJoinOrderCandidates(bibRow) {
  const mapped = resolveOrderFieldsFromMarcMapping(bibRow);
  if (!mapped) return null;
  return pendingOrdersForBib.filter(order =>
    order.resourceType === mapped.resourceType && order.language === mapped.language
  );
}

export const ORDER_STATUS_LABELS = {
  pending: '待发订',
  pendingImport: '待导入'
};

/** 书目关联馆藏记录（实体单件侧栏） */
export const bibHoldingRecords = [
  { id: 'hr-1001-1', bibRecordNo: 'BIB2025001001', label: '首图华威桥馆·自然科学借阅室' },
  { id: 'hr-1001-2', bibRecordNo: 'BIB2025001001', label: '北京城市图书馆·综合借阅室' },
  { id: 'hr-4001001-1', bibRecordNo: 'BIB2024001001', label: '首图华威桥馆·少儿中文库' },
  { id: 'hr-1003-1', bibRecordNo: 'BIB2024001003', label: '首都大兴机场分馆·流通书库' }
];

/** 书目实体单件示例数据 */
export const bibPhysicalItems = [
  {
    id: 'pi-1001-1', bibRecordNo: 'BIB2025001001', holdingRecordId: 'hr-1001-1', no: 1,
    ownerLibrary: '首都图书馆', assetLibrary: '首都图书馆',
    homeLocation: '首图华威桥馆·自然科学借阅室', currentLocation: '首图华威桥馆·自然科学借阅室',
    holdingStatus: '在馆', barcode: '0112345678901'
  },
  {
    id: 'pi-1001-2', bibRecordNo: 'BIB2025001001', holdingRecordId: 'hr-1001-1', no: 2,
    ownerLibrary: '首都图书馆', assetLibrary: '首都图书馆',
    homeLocation: '首图华威桥馆·自然科学借阅室', currentLocation: '首图华威桥馆·自然科学借阅室',
    holdingStatus: '借出', barcode: '0112345678902'
  },
  {
    id: 'pi-1001-3', bibRecordNo: 'BIB2025001001', holdingRecordId: 'hr-1001-2', no: 3,
    ownerLibrary: '首都图书馆', assetLibrary: '北京城市图书馆',
    homeLocation: '北京城市图书馆·综合借阅室', currentLocation: '北京城市图书馆·综合借阅室',
    holdingStatus: '在馆', barcode: '0112345678903'
  },
  {
    id: 'pi-1001-4', bibRecordNo: 'BIB2024001001', holdingRecordId: 'hr-4001001-1', no: 1,
    ownerLibrary: '首都图书馆', assetLibrary: '首都图书馆',
    homeLocation: '首图华威桥馆·少儿中文库', currentLocation: '首图华威桥馆·少儿中文库',
    holdingStatus: '在馆', barcode: '0112345678911'
  },
  {
    id: 'pi-1001-5', bibRecordNo: 'BIB2024001001', holdingRecordId: 'hr-4001001-1', no: 2,
    ownerLibrary: '首都图书馆', assetLibrary: '首都图书馆',
    homeLocation: '首图华威桥馆·少儿中文库', currentLocation: '首图华威桥馆·少儿中文库',
    holdingStatus: '加工中', barcode: '0112345678912'
  },
  {
    id: 'pi-1003-1', bibRecordNo: 'BIB2024001003', holdingRecordId: 'hr-1003-1', no: 1,
    ownerLibrary: '首都图书馆', assetLibrary: '首都图书馆',
    homeLocation: '首都大兴机场分馆·流通书库', currentLocation: '首都大兴机场分馆·流通书库',
    holdingStatus: '在馆', barcode: '0112345678921'
  }
];

export function getHoldingRecordsForBib(bibRecordNo) {
  if (!bibRecordNo) return [];
  return bibHoldingRecords.filter(record => record.bibRecordNo === bibRecordNo);
}

export function getPhysicalItemsForBib(bibRecordNo, holdingRecordId = '') {
  if (!bibRecordNo) return [];
  return bibPhysicalItems.filter(item => {
    if (item.bibRecordNo !== bibRecordNo) return false;
    if (holdingRecordId && item.holdingRecordId !== holdingRecordId) return false;
    return true;
  });
}
