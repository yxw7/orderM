import { applyDedupSampleData } from '@/modules/order/data/dedup';
import { ACQUISITION_METHOD_FILTER_OPTIONS } from '@/constants/acquisition-methods';
import { SUPPLIER_OPTIONS } from '@/modules/order/constants';

export const ORDER_STATUS_MAP = {
  pendingImport: { text: '待导入', cls: 'text-violet-600' },
  pending: { text: '待发订', cls: 'text-amber-600' },
  ordered: { text: '已发订', cls: 'text-green-600' },
  processing: { text: '处理中', cls: 'text-blue-600' },
  cancelled: { text: '已撤订', cls: 'text-gray-500' },
  completed: { text: '已完成', cls: 'text-green-600' },
  importFailed: { text: '导入失败', cls: 'text-red-500' },
  parsed: { text: '解析完成', cls: 'text-teal-600' }
};

export const orderListRows = [
  {
    id: 'PG001B20260528008', no: 6, subscriber: '测试订户0001', site: '华威桥馆', orderId: 'PG001B20260528008',
    method: '现采', resourceType: '纸质书', language: '中文', supplier: '湖南长沙',
    orderTime: '2026-05-28 17:34:43', issuer: '杨晓娴', issueTime: '2026-05-28 17:34:43',
    orderVolumes: 1, orderSpecies: 1,
    budget: '集团2026年度预算', listPrice: '58.00', discount: '1.00',
    netPrice: '58.00', issueRemark: '', orderStatus: 'ordered', settlementStatus: 'unsettled'
  },
  {
    id: 'PG001B202406030001', no: 1, subscriber: 'ceshi', site: '华威桥馆', orderId: 'PG001B202406030001',
    method: '现采', resourceType: '纸质书', language: '中文', supplier: '湖南长沙',
    orderTime: '2024-06-03 09:47:52', issuer: '杨现规', issueTime: '2024-06-03 10:12:18',
    orderVolumes: 0, orderSpecies: 0,
    budget: '2024年首都图书馆图书购置费中文普通图书(一)', listPrice: '300.00', discount: '0.80',
    netPrice: '240.00', issueRemark: '请优先安排发订，如有缺货请及时联系采编部。', orderStatus: 'pending', settlementStatus: 'unsettled'
  },
  {
    id: 'PG001B202406030002', no: 2, subscriber: '捐赠订户', site: '华威桥馆', orderId: 'PG001B202406030002',
    method: '现采', resourceType: '纸质书', language: '中文', supplier: '湖北三新',
    orderTime: '2024-06-03 10:07:42', issuer: '王二小', issueTime: '2026-05-29 10:54:51',
    orderVolumes: 12, orderSpecies: 8,
    budget: '2026年度第二季度预算', listPrice: '560.00', discount: '0.80',
    netPrice: '420.00', issueRemark: '', orderStatus: 'ordered', settlementStatus: 'settled'
  },
  {
    id: 'PG001B202406030003', no: 3, subscriber: 'ceshi', site: '华威桥馆', orderId: 'PG001B202406030003',
    method: '现采', resourceType: '视听资料', language: '外文', supplier: '湖北三新',
    orderTime: '2024-06-03 10:20:37', issuer: '赵付', issueTime: '2026-05-22 09:08:45',
    orderVolumes: 6, orderSpecies: 3,
    budget: '集团2026年度预算', listPrice: '1280.00', discount: '0.80',
    netPrice: '1088.00', issueRemark: '外文音像资料，请核对载体与版本后再发订。', orderStatus: 'processing', settlementStatus: 'unsettled'
  },
  {
    id: 'PG001B202406030004', no: 4, subscriber: '捐赠订户', site: '华威桥馆', orderId: 'PG001B202406030004',
    method: '捐赠', resourceType: '纸质书', language: '中文', supplier: '湖南长沙',
    orderTime: '2024-06-03 11:05:12', issuer: '杨现规', issueTime: '2024-06-03 15:40:17',
    orderVolumes: 20, orderSpecies: 15,
    budget: '2024年首都图书馆图书购置费中文普通图书(三)', listPrice: '890.50', discount: '0.80',
    netPrice: '712.40', issueRemark: '', orderStatus: 'cancelled', settlementStatus: 'unsettled'
  },
  {
    id: 'PG001B202406030005', no: 5, subscriber: 'ceshi', site: '华威桥馆', orderId: 'PG001B202406030005',
    method: '现采', resourceType: '纸质书', language: '中文', supplier: '北京新华',
    orderTime: '2024-06-03 14:30:00', issuer: '李佳', issueTime: '',
    orderVolumes: 0, orderSpecies: 0,
    budget: '2024年首都图书馆图书购置费中文普通图书(四)', listPrice: '450.00', discount: '0.80',
    netPrice: '360.00', issueRemark: '', orderStatus: 'pendingImport', settlementStatus: 'unsettled'
  },
  {
    id: 'PG001B202406030006', no: 7, subscriber: 'ceshi', site: '华威桥馆', orderId: 'PG001B202406030006',
    method: '现采', resourceType: '视听资料', language: '中文', supplier: '湖北三新',
    orderTime: '2024-06-04 09:15:30', issuer: '杨现规', issueTime: '2024-06-04 09:15:30',
    orderVolumes: 5, orderSpecies: 3,
    budget: '2024年首都图书馆视听资料购置费', listPrice: '1120.00', discount: '0.80',
    netPrice: '896.00', issueRemark: '中文音像资料，发订前请核对载体与商品条码。', orderStatus: 'pending', settlementStatus: 'unsettled'
  }
];

const rawOrderLines = [
  {
    id: 'PG001B20260528008-8', orderId: 'PG001B20260528008', site: '华威桥馆', orderLineNo: 'PG001B20260528008-8',
    bibRecordNo: 'bjlib900120260528008', title: '地质勘查工程与生态修复', resourceId: '9787565855375',
    carrier: 'AP', author: '张昕, 冯红彩, 张海燕主编', publisher: '汕头大学出版社', publishTime: '2026',
    volumeNo: '', volumeName: '', price: '58.00', currency: 'CNY', copiesInSet: 1, sets: 1,
    lineStatus: '已发订', acceptanceStatus: '待验收', settlementStatus: '待申请', isShortage: '否',
    flowStats: '1/0/0/0/0', issueTime: '2026-05-28 17:34:43', hasRemark: false,
    textLanguage: '中文', resourceType: '纸质书', language: '中文'
  },
  {
    id: 'PG001B20260528008-9', orderId: 'PG001B20260528008', site: '华威桥馆', orderLineNo: 'PG001B20260528008-9',
    bibRecordNo: 'bjlib900120260528009', title: '图书馆学基础', resourceId: '9787501345678',
    carrier: 'AP', author: '吴慰慈著', publisher: '国家图书馆出版社', publishTime: '2023-06',
    volumeNo: '', volumeName: '', price: '68.00', currency: 'CNY', copiesInSet: 1, sets: 2,
    lineStatus: '已发订', acceptanceStatus: '待验收', settlementStatus: '待申请', isShortage: '否',
    flowStats: '2/0/0/0/0', issueTime: '2026-05-28 17:34:43', hasRemark: false,
    textLanguage: '中文', resourceType: '纸质书', language: '中文'
  },
  {
    id: 'PG001B202406030001-4', orderId: 'PG001B202406030001', site: '华威桥馆', orderLineNo: 'PG001B202406030001-4',
    bibRecordNo: 'bjlib9001202406135010', title: '数字图书馆理论与实践', resourceId: '9787040478912',
    carrier: 'AP', author: '马费成著', publisher: '高等教育出版社', publishTime: '2024',
    volumeNo: '—', volumeName: '—', price: '55.00', currency: 'CNY', copiesInSet: 1, sets: 1,
    lineStatus: '已发订', acceptanceStatus: '待验收', settlementStatus: '待申请', isShortage: '否',
    flowStats: '1/0/0/0/0', issueTime: '2026-05-29 10:54:51', hasRemark: false,
    textLanguage: '中文', resourceType: '纸质书', language: '中文',
    holdingDuplicate: null, orderDuplicate: null
  },
  {
    id: 'PG001B202406030001-1', orderId: 'PG001B202406030001', site: '华威桥馆', orderLineNo: 'PG001B202406030001-1',
    bibRecordNo: 'bjlib9001202406135001', title: '中国现代史纲要', resourceId: '9787040456789',
    carrier: 'AP', author: '王顺生著', publisher: '高等教育出版社', publishTime: '2024',
    volumeNo: '—', volumeName: '—', price: '45.00', currency: 'CNY', copiesInSet: 1, sets: 3,
    lineStatus: '待发订', acceptanceStatus: '', settlementStatus: '待申请', isShortage: '否',
    flowStats: '3/0/0/0/0', issueTime: '2026-05-29 10:54:51', hasRemark: true,
    textLanguage: '中文', resourceType: '纸质书', language: '中文',
    holdingDuplicate: null, orderDuplicate: null
  },
  {
    id: 'PG001B202406030001-2', orderId: 'PG001B202406030001', site: '华威桥馆', orderLineNo: 'PG001B202406030001-2',
    bibRecordNo: 'bjlib9001202406135002',
    actualBibRecordNos: ['bjlib9001202406135002-001', 'bjlib9001202406135002-002'],
    title: '图书馆学概论', resourceId: '9787501345678',
    carrier: 'AP', author: '吴慰慈著', publisher: '国家图书馆出版社', publishTime: '2023-06',
    volumeNo: '—', volumeName: '—', price: '68.00', currency: 'CNY', copiesInSet: 1, sets: 1,
    lineStatus: '待发订', acceptanceStatus: '', settlementStatus: '待申请', isShortage: '否',
    flowStats: '1/0/0/0/0', issueTime: '2026-05-29 10:54:51', hasRemark: false,
    textLanguage: '中文', resourceType: '纸质书', language: '中文',
    holdingDuplicate: null, orderDuplicate: null
  },
  {
    id: 'PG001B202406030001-3', orderId: 'PG001B202406030001', site: '华威桥馆', orderLineNo: 'PG001B202406030001-3',
    bibRecordNo: 'bjlib9001202406135003', title: '信息资源管理', resourceId: '9787040478912',
    carrier: 'AP', author: '马费成著', publisher: '高等教育出版社', publishTime: '2023',
    volumeNo: '—', volumeName: '—', price: '52.00', currency: 'CNY', copiesInSet: 1, sets: 2,
    lineStatus: '待发订', acceptanceStatus: '', settlementStatus: '待申请', isShortage: '否',
    flowStats: '2/0/0/0/0', issueTime: '', hasRemark: false,
    textLanguage: '中文', resourceType: '纸质书', language: '中文',
    holdingDuplicate: null, orderDuplicate: null
  },
  {
    id: 'PG001B202406030001-5', orderId: 'PG001B202406030001', site: '华威桥馆', orderLineNo: 'PG001B202406030001-5',
    bibRecordNo: 'bjlib9001202406135005', title: '中国现代史纲要', resourceId: '9787040456789',
    carrier: 'AP', author: '王顺生著', publisher: '高等教育出版社', publishTime: '2024',
    volumeNo: '—', volumeName: '—', price: '45.00', currency: 'CNY', copiesInSet: 1, sets: 1,
    lineStatus: '待发订', acceptanceStatus: '', settlementStatus: '待申请', isShortage: '否',
    flowStats: '1/0/0/0/0', issueTime: '', hasRemark: false,
    textLanguage: '中文', resourceType: '纸质书', language: '中文',
    holdingDuplicate: null, orderDuplicate: null
  },
  {
    id: 'PG001B202406030002-1', orderId: 'PG001B202406030002', site: '华威桥馆', orderLineNo: 'PG001B202406030002-1',
    bibRecordNo: 'bjlib9001202406135003', title: '捐赠图书书目汇编', resourceId: '9787111234567',
    carrier: 'AH', author: '首都图书馆编', publisher: '北京出版社', publishTime: '2022',
    volumeNo: '—', volumeName: '—', price: '120.00', currency: 'CNY', copiesInSet: 1, sets: 2,
    lineStatus: '已关闭', acceptanceStatus: '收货完成', settlementStatus: '已结算', isShortage: '否',
    flowStats: '2/2/0/0/0', issueTime: '2026-05-28 14:20:33', hasRemark: true,
    textLanguage: '中文', resourceType: '纸质书', language: '中文',
    holdingDuplicate: false, orderDuplicate: false
  },
  {
    id: 'PG001B202406030005-3', orderId: 'PG001B202406030005', site: '华威桥馆', orderLineNo: 'PG001B202406030005-3',
    bibRecordNo: 'bjlib9001202406135012', title: '地质勘查工程与生态修复', resourceId: '9787565855375',
    carrier: 'AP', author: '张昕, 冯红彩, 张海燕主编', publisher: '汕头大学出版社', publishTime: '2026',
    volumeNo: '', volumeName: '', price: '58.00', currency: 'CNY', copiesInSet: 1, sets: 3,
    lineStatus: '待发订', acceptanceStatus: '', settlementStatus: '待申请', isShortage: '否',
    flowStats: '3/0/0/0/0', issueTime: '', hasRemark: false,
    textLanguage: '中文', resourceType: '纸质书', language: '中文',
    holdingDuplicate: null, orderDuplicate: null
  },
  {
    id: 'PG001B202406030006-2', orderId: 'PG001B202406030006', site: '华威桥馆', orderLineNo: 'PG001B202406030006-2',
    bibRecordNo: 'bjlib9001202406135044', title: '布鲁克纳：第二交响曲', resourceId: '',
    carrier: 'CD', author: '', publisher: '国家大剧院', publishTime: '2015-03',
    volumeNo: '—', volumeName: '—', price: '300.00', currency: 'CNY', copiesInSet: 1, sets: 1,
    lineStatus: '待发订', acceptanceStatus: '', settlementStatus: '待申请', isShortage: '否',
    flowStats: '1/0/0/0/0', issueTime: '', hasRemark: false,
    textLanguage: '中文', productBarcode: '017685110221', catalogNo: 'CD-1102',
    resourceType: '视听资料', language: '中文',
    holdingDuplicate: null, orderDuplicate: null
  },
  {
    id: 'PG001B202406030003-1', orderId: 'PG001B202406030003', site: '华威桥馆', orderLineNo: 'PG001B202406030003-1',
    bibRecordNo: 'bjlib9001202406135044', title: '布鲁克纳：第二交响曲', resourceId: '',
    carrier: 'CD', author: '', publisher: '国家大剧院', publishTime: '2015-03',
    volumeNo: '分卷号', volumeName: '分卷名', price: '300.00', currency: 'CNY', copiesInSet: 1, sets: 2,
    lineStatus: '处理中', acceptanceStatus: '部分收货', settlementStatus: '待申请', isShortage: '否',
    flowStats: '2/0/0/0/0', issueTime: '2026-05-22 09:08:45', hasRemark: true,
    textLanguage: '中文', productBarcode: '017685110221', catalogNo: 'CD-1102',
    resourceType: '视听资料', language: '外文'
  }
];

export const orderLineRows = applyDedupSampleData(rawOrderLines.map(r => ({ ...r })));

const ORDER_ISSUER_OPTIONS = ['杨现规', '李佳', '黄俊', '杨晓娴', '王二小', '赵付'];

export const orderSearchFields = [
  { key: 'orderId', label: '订单号', placeholder: '请输入' },
  { key: 'method', label: '采选方式', type: 'select', options: ACQUISITION_METHOD_FILTER_OPTIONS },
  { key: 'supplier', label: '供应商', type: 'select', options: [{ value: '', label: '请选择' }, ...SUPPLIER_OPTIONS] },
  { key: 'issuer', label: '发订人', type: 'select', extra: true, options: [{ value: '', label: '请选择' }, ...ORDER_ISSUER_OPTIONS] },
  { key: 'orderStatus', label: '订单状态', type: 'select', extra: true, options: ['全部', '待导入', '待发订', '已发订', '处理中', '已撤订', '已完成'] },
  { key: 'settlementStatus', label: '结算状态', type: 'select', extra: true, options: ['全部', '未结算', '已结算'] },
  { key: 'subscriber', label: '订户', extra: true, placeholder: '请输入' },
  { key: 'language', label: '语种', type: 'select', extra: true, options: ['全部', '中文', '外文'] },
  {
    key: 'issueDate',
    label: '发订时间',
    type: 'dateRange',
    startKey: 'issueStart',
    endKey: 'issueEnd',
    extra: true,
    startPlaceholder: '开始日期',
    endPlaceholder: '结束日期'
  },
  { key: 'budget', label: '预算名称', extra: true, placeholder: '请输入' },
  { key: 'resourceType', label: '资源类型', type: 'select', extra: true, options: ['全部', '纸质书', '视听资料'] },
  { key: 'site', label: '馆址', type: 'select', extra: true, options: ['全部'] }
];

export const defaultNewOrderForm = {
  subscriber: '',
  resourceType: '',
  method: '',
  budget: '',
  language: '',
  supplier: '',
  discount: '',
  site: ''
};

export const defaultImportOrderForm = {
  name: '',
  code: '',
  remark: ''
};

export const defaultEditOrderForm = {
  budget: '',
  supplier: '',
  issueRemark: ''
};

export const defaultIssueOrderForm = {
  issueRemark: ''
};

export const defaultCancelForm = {
  reason: '',
  code: '',
  remark: ''
};
