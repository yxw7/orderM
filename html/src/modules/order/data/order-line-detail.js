import {
  acceptanceSpeciesRows,
  acceptanceAvSpeciesRows
} from '@/modules/acceptance/data/acceptance-detail';
import {
  SETTLEMENT_LIST_COLUMNS,
  settlementListMap
} from '@/modules/settlement/data/settled-list';
import { appConfig } from '@/config/app-config';
import { buildMarcDetailFields } from '@/modules/order/data/bib';

export const orderLineDemoContext = {
  row: {
    orderId: 'PG001B202406030001',
    site: '华威桥馆',
    orderLineNo: 'PG001B202406030001-2',
    bibRecordNo: 'bjlib9001202406135002',
    actualBibRecordNos: ['bjlib9001202406135002-001', 'bjlib9001202406135002-002'],
    title: '图书馆学概论',
    resourceId: '9787501345678',
    carrier: 'AP',
    author: '吴慰慈著',
    publisher: '国家图书馆出版社',
    publishTime: '2023-06',
    volumeNo: '—',
    volumeName: '—',
    price: '68.00',
    currency: 'CNY',
    copiesInSet: 1,
    sets: 1,
    lineStatus: '处理中',
    acceptanceStatus: '部分收货',
    settlementStatus: '待申请',
    isShortage: '是',
    flowStats: '1/1/0/0/0',
    issueTime: '2026-05-29 10:54:51',
    textLanguage: '中文',
    subTitle: '',
    series: '',
    classNo: 'G250',
    edition: '第5版',
    binding: '平装',
    size: '23 cm',
    subject: '图书馆学',
    audience: '图书馆学专业师生',
    note: '一般性附注（300字段）',
    summary: '本书系统介绍图书馆学的基本理论与方法。',
    volumeCount: '1',
    publishPlace: '北京',
    remark: '',
    coverUrl: ''
  },
  order: {
    subscriber: 'ceshi',
    method: '现采',
    supplier: '湖南长沙',
    budget: '2024年首都图书馆图书购置费中文普通图书(一)',
    discount: '0.80',
    issuer: '杨现规',
    issueTime: '2024-06-03 10:12:18'
  },
  resourceType: '纸质书'
};

export const orderLineForeignPaperDemoContext = {
  row: {
    orderId: 'PG001B202406030004',
    site: '华威桥馆',
    orderLineNo: 'PG001B202406030004-1',
    bibRecordNo: 'bjlib9001202406135010',
    title: 'The Great Gatsby',
    resourceId: '9780743273565',
    author: 'Fitzgerald, F. Scott',
    publisher: 'Scribner',
    publishTime: '2004-09',
    price: '15.99',
    currency: 'USD',
    textLanguage: 'English',
    subjectCategory: '文学',
    subjectSubdivision: '美国文学',
    classNo: 'I712.45',
    chineseTranslatedTitle: '了不起的盖茨比',
    subTitle: '',
    series: '',
    binding: '平装',
    edition: 'Reissue',
    pageCount: '180',
    size: '21 cm',
    subject: 'American fiction',
    audience: 'General readers',
    summary: 'A portrait of the Jazz Age in all of its decadence and excess.',
    pocketIsbn: '',
    holdingInfo: '首图华威桥馆·外文书库 2 复本',
    reviewLevel: 'A',
    awardInfo: '',
    tocInfo: 'Chapter 1 … Chapter 9',
    volumeNo: '',
    volumeName: '',
    authorBio: 'American novelist and short story writer.',
    review: 'A classic of twentieth-century American literature.',
    remark: '',
    coverUrl: ''
  },
  order: {
    subscriber: 'ceshi',
    method: '现采',
    supplier: '湖北三新',
    budget: '2024年外文图书专项',
    discount: '0.85',
    issuer: '杨现规',
    issueTime: '2024-06-03 11:00:00'
  },
  resourceType: '纸质书'
};

export const orderLineAvDemoContext = {
  row: {
    orderId: 'PG001B202406030003',
    site: '华威桥馆',
    orderLineNo: 'PG001B202406030003-1',
    bibRecordNo: 'bjlib9001202406135003',
    title: '中国经典民歌',
    isbn: '9787883310679',
    isrc: 'CN-A01-04-1234-567',
    resourceId: '9787883310679',
    carrier: 'CD',
    author: '殷秀梅',
    publisher: '中国唱片',
    publishTime: '2024',
    edition: '标准版',
    price: '300.00',
    currency: 'CNY',
    vinylColor: '',
    limitedNo: '',
    label: '中国唱片',
    seriesName: '中国音乐经典系列',
    isSigned: '否',
    isVintageRecord: '否',
    awardInfo: '',
    beijingPublisher: '',
    category: '音乐',
    discNo: '1',
    vintageLabel: '',
    operaGenre: '',
    era: '2000年代',
    remark: '',
    copiesInSet: 1,
    sets: 1,
    lineStatus: '已发订',
    acceptanceStatus: '待验收',
    settlementStatus: '待申请',
    isShortage: '否',
    flowStats: '1/0/0/0/0',
    issueTime: '2026-05-22 09:08:45',
    textLanguage: '中文'
  },
  order: {
    subscriber: 'ceshi',
    method: '现采',
    supplier: '湖北三新',
    budget: '集团2026年度预算',
    discount: '0.80',
    issuer: '赵付',
    issueTime: '2024-06-03 10:20:37'
  },
  resourceType: '视听资料'
};

export const orderLineAvForeignDemoContext = {
  row: {
    orderId: 'PG001B202406030003',
    site: '华威桥馆',
    orderLineNo: 'PG001B202406030003-1',
    bibRecordNo: 'bjlib9001202406135044',
    title: '布鲁克纳：第二交响曲',
    isrc: 'DE-A01-15-01234-567',
    carrier: 'CD',
    productBarcode: '017685110221',
    catalogNo: 'CD-1102',
    originalTitle: 'Bruckner: Symphony No. 2',
    publisher: '国家大剧院',
    price: '300.00',
    currency: 'CNY',
    label: 'Naxos',
    remark: '',
    copiesInSet: 1,
    sets: 2,
    lineStatus: '处理中',
    acceptanceStatus: '部分收货',
    settlementStatus: '待申请',
    isShortage: '否',
    flowStats: '2/0/0/0/0',
    issueTime: '2026-05-22 09:08:45',
    textLanguage: '外文'
  },
  order: {
    subscriber: 'ceshi',
    method: '现采',
    supplier: '湖北三新',
    budget: '集团2026年度预算',
    discount: '0.80',
    issuer: '赵付',
    issueTime: '2024-06-03 10:20:37'
  },
  resourceType: '视听资料'
};

function selectLineDetailDemoContext(lineFromList) {
  if (!lineFromList) return orderLineDemoContext;
  if (lineFromList.resourceType === '视听资料') {
    return lineFromList.language === '外文' ? orderLineAvForeignDemoContext : orderLineAvDemoContext;
  }
  return lineFromList.language === '外文' ? orderLineForeignPaperDemoContext : orderLineDemoContext;
}

export function buildLineDetailContext(lineFromList) {
  if (!lineFromList) return orderLineDemoContext;
  const base = selectLineDetailDemoContext(lineFromList);
  return {
    ...base,
    row: {
      ...base.row,
      orderLineNo: lineFromList.orderLineNo,
      orderId: lineFromList.orderId,
      title: lineFromList.title,
      resourceId: lineFromList.resourceId,
      author: lineFromList.author,
      publisher: lineFromList.publisher,
      publishTime: lineFromList.publishTime || base.row.publishTime,
      price: lineFromList.price,
      currency: lineFromList.currency || base.row.currency,
      sets: lineFromList.sets,
      copiesInSet: lineFromList.copiesInSet,
      lineStatus: lineFromList.lineStatus,
      acceptanceStatus: lineFromList.acceptanceStatus || '—',
      flowStats: lineFromList.flowStats,
      site: lineFromList.site,
      carrier: lineFromList.carrier || base.row.carrier,
      subTitle: lineFromList.subTitle ?? base.row.subTitle,
      volumeNo: lineFromList.volumeNo ?? base.row.volumeNo,
      volumeName: lineFromList.volumeName ?? base.row.volumeName,
      classNo: lineFromList.classNo ?? base.row.classNo,
      edition: lineFromList.edition ?? base.row.edition,
      series: lineFromList.series ?? base.row.series,
      subject: lineFromList.subject ?? base.row.subject,
      audience: lineFromList.audience ?? base.row.audience,
      binding: lineFromList.binding ?? base.row.binding,
      size: lineFromList.size ?? base.row.size,
      textLanguage: lineFromList.textLanguage ?? base.row.textLanguage,
      note: lineFromList.note ?? base.row.note,
      summary: lineFromList.summary ?? base.row.summary,
      review: lineFromList.review ?? base.row.review,
      material: lineFromList.material ?? base.row.material,
      coverUrl: lineFromList.coverUrl ?? base.row.coverUrl,
      productBarcode: lineFromList.productBarcode ?? base.row.productBarcode,
      catalogNo: lineFromList.catalogNo ?? base.row.catalogNo,
      bibRecordNo: lineFromList.bibRecordNo ?? base.row.bibRecordNo,
      actualBibRecordNos: lineFromList.actualBibRecordNos ?? base.row.actualBibRecordNos ?? []
    },
    resourceType: lineFromList.resourceType || base.resourceType,
    language: lineFromList.language || '中文'
  };
}

function field(key, label, value, span) {
  return { key, label, value: value ?? '', span };
}

const BIB_WIDE_FIELD_KEYS = new Set([
  'note', 'summary', 'remark', 'review', 'authorBio', 'tocInfo', 'holdingInfo'
]);

function bibValue(row, key) {
  if (key === 'isbn') return row.isbn ?? row.resourceId ?? '';
  if (key === 'isrc') return row.isrc ?? '';
  return row[key];
}

function buildFieldsFromSpec(row, spec) {
  return spec.map(([key, label]) =>
    field(key, label, bibValue(row, key), BIB_WIDE_FIELD_KEYS.has(key) ? 3 : undefined)
  );
}

/** 纸质书 · 中文 */
const PAPER_BOOK_CN_SPEC = [
  ['title', '正题名'],
  ['resourceId', 'ISBN'],
  ['subTitle', '副题名'],
  ['volumeNo', '分卷号'],
  ['volumeName', '分卷名'],
  ['classNo', '分类号'],
  ['publisher', '出版社'],
  ['author', '作者'],
  ['publishTime', '出版年'],
  ['price', '定价'],
  ['edition', '版本'],
  ['series', '丛编'],
  ['subject', '主题词'],
  ['audience', '读者对象'],
  ['binding', '装帧形式'],
  ['size', '尺寸'],
  ['textLanguage', '正文语种'],
  ['volumeCount', '卷数'],
  ['publishPlace', '出版地'],
  ['note', '一般性附注'],
  ['summary', '图书简介'],
  ['remark', '备注']
];

/** 纸质书 · 外文 */
const PAPER_BOOK_FOREIGN_SPEC = [
  ['resourceId', 'ISBN'],
  ['subjectCategory', '学科大类'],
  ['subjectSubdivision', '学科细分'],
  ['classNo', '中图分类号'],
  ['chineseTranslatedTitle', '中译名'],
  ['title', '题名'],
  ['subTitle', '副题名'],
  ['author', '责任者'],
  ['series', '丛编'],
  ['publisher', '出版社'],
  ['binding', '装帧形式'],
  ['publishTime', '出版日期'],
  ['edition', '版次'],
  ['pageCount', '页数'],
  ['currency', '币种'],
  ['price', '价格'],
  ['subject', '主题词'],
  ['audience', '读者对象'],
  ['size', '尺寸'],
  ['textLanguage', '语种'],
  ['summary', '简介'],
  ['pocketIsbn', '精简装ISBN对照'],
  ['holdingInfo', '馆藏信息'],
  ['reviewLevel', '审读级别'],
  ['awardInfo', '获奖信息'],
  ['tocInfo', '目次信息'],
  ['volumeNo', '分卷号'],
  ['volumeName', '分卷名'],
  ['authorBio', '作者简介'],
  ['review', '书评'],
  ['remark', '备注']
];

/** 视听资料 · 中文 */
const AV_CN_SPEC = [
  ['isbn', 'ISBN'],
  ['isrc', 'ISRC'],
  ['title', '题名'],
  ['carrier', '载体'],
  ['publisher', '出版社'],
  ['edition', '版本/格式'],
  ['author', '著者'],
  ['currency', '币种'],
  ['price', '码洋'],
  ['vinylColor', '彩胶颜色'],
  ['limitedNo', '限量编号'],
  ['label', '厂牌'],
  ['seriesName', '系列名称'],
  ['isSigned', '是否签名'],
  ['isVintageRecord', '是否老唱片'],
  ['awardInfo', '获奖信息'],
  ['beijingPublisher', '北京出版社'],
  ['category', '分类'],
  ['discNo', '盘号'],
  ['vintageLabel', '老唱片品牌'],
  ['operaGenre', '剧种'],
  ['era', '年代'],
  ['remark', '备注']
];

/** 视听资料 · 外文 */
const AV_FOREIGN_SPEC = [
  ['isrc', 'ISRC'],
  ['title', '题名'],
  ['carrier', '载体'],
  ['productBarcode', '商品条码'],
  ['catalogNo', '目录号'],
  ['originalTitle', '外文原文题名'],
  ['publisher', '出版方'],
  ['price', '码洋'],
  ['currency', '币种'],
  ['remark', '备注'],
  ['label', '厂牌']
];

/** 订单行详情页书目信息字段（三列布局，按资源类型与语种区分） */
export function buildOrderLineBibFields(row, resourceType, language) {
  if (!row) return [];

  if (resourceType === '视听资料') {
    return buildFieldsFromSpec(row, language === '外文' ? AV_FOREIGN_SPEC : AV_CN_SPEC);
  }

  return buildFieldsFromSpec(row, language === '外文' ? PAPER_BOOK_FOREIGN_SPEC : PAPER_BOOK_CN_SPEC);
}

export const orderLineTabs = [
  { key: 'related', label: '相关订单行' },
  { key: 'acceptance', label: '验收记录' },
  { key: 'settlement', label: '结算记录' },
  { key: 'items', label: '单件信息' },
  { key: 'marc', label: 'MARC信息' }
];

export function parseFlowStats(flowStats) {
  const parts = (flowStats || '0/0/0/0/0').split('/').map(v => parseInt(v, 10) || 0);
  return { issued: parts[0], received: parts[1], exchanged: parts[2], returned: parts[3], cancelled: parts[4] };
}

export function getPipelineStages(row) {
  const flow = parseFlowStats(row.flowStats);
  const issued = flow.issued || row.sets || 0;
  const expectedReceive = Math.max(issued - flow.cancelled, 0);
  const issueDone = row.lineStatus !== '待发订';
  const receiveDone = row.acceptanceStatus === '收货完成';
  const receivePartial = ['部分收货', '换货中'].includes(row.acceptanceStatus)
    || (flow.received > 0 && flow.received < expectedReceive);
  const itemCount = flow.received * (row.copiesInSet || 1);
  const settleDone = row.settlementStatus === '已结算';

  return [
    { key: 'issue', label: '发订', status: issueDone ? 'done' : 'pending', summary: issueDone ? `${row.lineStatus} · ${issued} 套` : '待发订' },
    { key: 'acceptance', label: '验收', status: receiveDone ? 'done' : (receivePartial ? 'active' : 'pending'), summary: row.acceptanceStatus ? `${row.acceptanceStatus} · 收 ${flow.received}/${expectedReceive || issued} 套` : '未开始' },
    { key: 'items', label: '单件入库', status: itemCount > 0 ? (receiveDone ? 'done' : 'active') : 'pending', summary: itemCount > 0 ? `已生成 ${itemCount} 件` : '待收货后生成' },
    { key: 'settlement', label: '结算', status: settleDone ? 'done' : (row.settlementStatus === '待结算' ? 'active' : 'pending'), summary: row.settlementStatus || '—' }
  ];
}

export const lifecycleEvents = [
  { time: '2024-06-03 10:12:18', stage: '发订', event: '订单发订', operator: '杨现规', quantity: '1 套', remark: '订单号 PG001B202406030001', abnormal: false },
  { time: '2026-06-06 10:12:18', stage: '验收', event: '收货 1 套', operator: '杨晓购', quantity: '+1 套', remark: '验收单 ysPG00120260602001', abnormal: false },
  { time: '2026-06-07 10:12:18', stage: '催缺', event: '提交催缺', operator: '杨现规', quantity: '—', remark: '已提交催缺单', abnormal: true }
];

export const lifecycleColumns = [
  { key: 'time', label: '时间' },
  { key: 'stage', label: '阶段' },
  { key: 'event', label: '事件' },
  { key: 'operator', label: '操作人' },
  { key: 'quantity', label: '数量' },
  { key: 'remark', label: '备注' }
];

export const relatedOrderLineColumns = [
  { key: 'no', label: '序号', minWidth: 'w-16' },
  { key: 'subscriber', label: '订户' },
  { key: 'orderLineNo', label: '订单行号' },
  { key: 'method', label: '采购方式' },
  { key: 'budget', label: '预算名称', minWidth: 'min-w-[200px]' },
  { key: 'supplier', label: '供应商' },
  { key: 'discount', label: '折扣', minWidth: 'w-20' },
  { key: 'issuer', label: '发订人' },
  { key: 'issueTime', label: '发订时间', minWidth: 'whitespace-nowrap' }
];

/** 相关订单行演示数据（ISBN & 正题名匹配） */
export const relatedOrderLineDemoRows = [
  { orderLineNo: 'PG001B20260601003-1', subscriber: 'ceshi', method: '现采', budget: '集团2026年度预算', supplier: '湖北三新', discount: '0.80', issuer: '赵付', issueTime: '2026-05-28 15:06:37' },
  { orderLineNo: 'PG001B20260601003-2', subscriber: 'ceshi', method: '现采', budget: '2026年首都图书馆书购经费中文普通图书(四)', supplier: '湖南长沙', discount: '0.80', issuer: '', issueTime: '' },
  { orderLineNo: 'PG001B20260601003-3', subscriber: 'ceshi', method: '现采', budget: '集团2026年度预算', supplier: '湖北三新', discount: '0.80', issuer: '赵付', issueTime: '2026-05-28 15:06:37' },
  { orderLineNo: 'PG001B20260601003-4', subscriber: 'ceshi', method: '现采', budget: '2026年首都图书馆书购经费中文普通图书(四)', supplier: '湖南长沙', discount: '0.80', issuer: '', issueTime: '' },
  { orderLineNo: 'PG001B20260601003-5', subscriber: 'ceshi', method: '现采', budget: '集团2026年度预算', supplier: '湖北三新', discount: '1.00', issuer: '赵付', issueTime: '2026-05-28 15:06:37' },
  { orderLineNo: 'PG001B20260601003-6', subscriber: 'ceshi', method: '现采', budget: '2026年首都图书馆书购经费中文普通图书(四)', supplier: '湖南长沙', discount: '0.80', issuer: '', issueTime: '' },
  { orderLineNo: 'PG001B20260601003-7', subscriber: 'ceshi', method: '现采', budget: '集团2026年度预算', supplier: '湖北三新', discount: '0.80', issuer: '', issueTime: '' },
  { orderLineNo: 'PG001B20260601003-8', subscriber: 'ceshi', method: '现采', budget: '2026年首都图书馆书购经费中文普通图书(四)', supplier: '湖南长沙', discount: '0.80', issuer: '赵付', issueTime: '2026-05-28 15:06:37' }
];

function isRelatedLineMatch(line, current, resourceType, language) {
  if (resourceType === '视听资料') {
    if (language === '外文') {
      return line.productBarcode === current.productBarcode && line.catalogNo === current.catalogNo;
    }
    return line.title === current.title && line.carrier === current.carrier;
  }
  return line.resourceId && line.resourceId === current.resourceId && line.title === current.title;
}

function isDemoRelatedLine(row) {
  return row.resourceId === '9787501345678' || row.title === '图书馆学概论';
}

function getViewableSubscribers(viewableSubscribers) {
  return (viewableSubscribers?.length ? viewableSubscribers : appConfig.viewableSubscribers) || [];
}

function isSubscriberInScope(order, viewableSubscribers) {
  const scope = getViewableSubscribers(viewableSubscribers);
  if (!scope.length) return true;
  return Boolean(order?.subscriber && scope.includes(order.subscriber));
}

function mapLineToRelatedRecord(line, orderMap) {
  const order = orderMap[line.orderId] || {};
  return {
    id: line.orderLineNo,
    orderLineNo: line.orderLineNo,
    subscriber: order.subscriber || '',
    method: order.method || '',
    budget: order.budget || '',
    supplier: order.supplier || '',
    discount: order.discount || '',
    issuer: order.issuer || '',
    issueTime: line.issueTime || order.issueTime || ''
  };
}

function sortRelatedRecords(records) {
  return records
    .sort((a, b) => (b.issueTime || '').localeCompare(a.issueTime || ''))
    .map((item, index) => ({ ...item, no: index + 1 }));
}

/** 获取相关订单行（含当前行，限定当前用户关联订户可查看范围，按发订时间倒序） */
export function getRelatedOrderLines(row, resourceType, language, allLines, allOrders, viewableSubscribers) {
  if (!row) return [];

  const orderMap = Object.fromEntries((allOrders || []).map(o => [o.orderId, o]));
  const scope = getViewableSubscribers(viewableSubscribers);

  const matched = (allLines || [])
    .filter(line => isRelatedLineMatch(line, row, resourceType, language))
    .filter(line => isSubscriberInScope(orderMap[line.orderId], scope))
    .map(line => mapLineToRelatedRecord(line, orderMap));

  if (matched.length) {
    if (isDemoRelatedLine(row)) {
      const existingNos = new Set(matched.map(item => item.orderLineNo));
      const demoExtra = relatedOrderLineDemoRows
        .filter(item => isSubscriberInScope({ subscriber: item.subscriber }, scope))
        .filter(item => !existingNos.has(item.orderLineNo))
        .map(item => ({ id: item.orderLineNo, ...item }));
      return sortRelatedRecords([...matched, ...demoExtra]);
    }
    return sortRelatedRecords(matched);
  }

  if (isDemoRelatedLine(row)) {
    const currentOrder = orderMap[row.orderId] || {};
    const currentRecord = mapLineToRelatedRecord(row, {
      ...orderMap,
      [row.orderId]: {
        ...currentOrder,
        subscriber: currentOrder.subscriber || appConfig.currentSubscriber
      }
    });
    const demoRecords = relatedOrderLineDemoRows
      .filter(item => isSubscriberInScope({ subscriber: item.subscriber }, scope))
      .filter(item => item.orderLineNo !== row.orderLineNo)
      .map(item => ({ id: item.orderLineNo, ...item }));
    return sortRelatedRecords([currentRecord, ...demoRecords]);
  }

  if (isSubscriberInScope(orderMap[row.orderId], scope)) {
    return sortRelatedRecords([mapLineToRelatedRecord(row, orderMap)]);
  }

  return [];
}

export function getOrderLineAcceptanceColumns(resourceType) {
  const isAv = resourceType === '视听资料';
  return [
    { key: 'no', label: '序号', minWidth: 'w-16' },
    { key: 'orderLineNo', label: '订单行号' },
    { key: 'isbn', label: isAv ? 'ISBN/ISRC' : 'ISBN' },
    { key: 'title', label: '正题名', minWidth: 'min-w-[140px]' },
    { key: 'author', label: '作者' },
    { key: 'price', label: '定价' },
    { key: 'currency', label: '币种' },
    { key: 'counts', label: '发/收/换/退套数' },
    { key: 'lastTime', label: '最近一次验收时间', minWidth: 'whitespace-nowrap' },
    { key: 'lastInspector', label: '最近一次验收人' }
  ];
}

export function formatAcceptanceFlowCounts(flowStats) {
  const flow = parseFlowStats(flowStats);
  return `${flow.issued} / ${flow.received} / ${flow.exchanged} / ${flow.returned}`;
}

export function formatAcceptancePrice(price) {
  if (price == null || price === '') return '';
  const num = String(price).replace(/^[¥￥]/, '');
  return `¥${num}`;
}

function findAcceptanceSpeciesRecord(orderLineNo, resourceType) {
  if (!orderLineNo) return null;
  const rows = resourceType === '视听资料' ? acceptanceAvSpeciesRows : acceptanceSpeciesRows;
  return rows.find(r => r.orderLine === orderLineNo) || null;
}

/** 获取当前订单行验收记录（仅验收模块有匹配时返回，无匹配为空） */
export function getOrderLineAcceptanceRecords(row, resourceType) {
  if (!row) return [];

  const matched = findAcceptanceSpeciesRecord(row.orderLineNo, resourceType);
  if (!matched) return [];

  return [{
    id: row.orderLineNo,
    no: 1,
    orderLineNo: matched.orderLine,
    isbn: matched.isbn || '',
    title: matched.title || '',
    author: matched.author || '',
    price: matched.price || '',
    currency: matched.currency || '',
    counts: matched.counts || '',
    lastTime: matched.lastTime || '',
    lastInspector: matched.lastInspector || ''
  }];
}

export function getOrderLineItemColumns() {
  return [
    { key: 'no', label: '序号', minWidth: 'w-16' },
    { key: 'barcode', label: '条码号' },
    { key: 'callNo', label: '索书号' },
    { key: 'ownerLibrary', label: '所属馆', minWidth: 'min-w-[140px]' },
    { key: 'homeLocation', label: '所属馆藏地', minWidth: 'min-w-[160px]' },
    { key: 'currentLocation', label: '所在馆藏地', minWidth: 'min-w-[160px]' },
    { key: 'circulationType', label: '借阅类型' },
    { key: 'volumeDesc', label: '卷册描述' },
    { key: 'checkInDate', label: '登到日期', minWidth: 'whitespace-nowrap' }
  ];
}

/** 编目系统单件数据（按实际关联书目记录号索引） */
const catalogItemsByActualBibRecordNo = {
  'bjlib9001202406135002-001': Array.from({ length: 4 }, (_, index) => {
    const seq = index + 1;
    return {
      barcode: `ST987654${7 + index}`,
      callNo: 'TS976.15',
      ownerLibrary: 'ST001 | 首都图书馆',
      homeLocation: 'ST06-中文报刊外借室',
      currentLocation: 'ST06-中文报刊外借室',
      circulationType: '001-成人外借',
      volumeDesc: '',
      checkInDate: '2016-09-21'
    };
  }),
  'bjlib9001202406135002-002': Array.from({ length: 6 }, (_, index) => {
    const seq = index + 5;
    const circulationType = seq >= 8 ? '001-成人外借' : '002-少儿外借';
    return {
      barcode: `ST987654${7 + index + 4}`,
      callNo: 'TS976.15',
      ownerLibrary: 'ST001 | 首都图书馆',
      homeLocation: 'ST06-中文报刊外借室',
      currentLocation: seq === 5 ? '' : 'ST06-中文报刊外借室',
      circulationType,
      volumeDesc: `第${seq - 4}辑`,
      checkInDate: '2016-09-21'
    };
  }),
  bjlib9001202406135003: [
    {
      barcode: 'ST9876601',
      callNo: 'Z228/12',
      ownerLibrary: 'ST001 | 首都图书馆',
      homeLocation: 'ST06-中文报刊外借室',
      currentLocation: 'ST06-中文报刊外借室',
      circulationType: '001-成人外借',
      volumeDesc: '',
      checkInDate: '2026-05-28'
    },
    {
      barcode: 'ST9876602',
      callNo: 'Z228/12',
      ownerLibrary: 'ST001 | 首都图书馆',
      homeLocation: 'ST06-中文报刊外借室',
      currentLocation: 'ST06-中文报刊外借室',
      circulationType: '001-成人外借',
      volumeDesc: '',
      checkInDate: '2026-05-28'
    }
  ]
};

/** 实际关联书目记录号：编目拆分/合并后回传，可多值；无则回退书目记录号 */
export function resolveActualBibRecordNos(row) {
  if (!row) return [];
  const actual = Array.isArray(row.actualBibRecordNos)
    ? row.actualBibRecordNos.filter(Boolean)
    : [];
  if (actual.length) return actual;
  return row.bibRecordNo ? [row.bibRecordNo] : [];
}

function getCatalogItemsByActualBibRecordNo(recordNo) {
  if (!recordNo) return [];
  return catalogItemsByActualBibRecordNo[recordNo] || [];
}

function getCatalogItemsForOrderLine(row) {
  return resolveActualBibRecordNos(row).flatMap(getCatalogItemsByActualBibRecordNo);
}

/** 获取当前订单行单件信息（按实际关联书目记录号查编目系统，返回编目侧全部单件） */
export function getOrderLineItems(row) {
  if (!row) return [];

  const catalogItems = getCatalogItemsForOrderLine(row);
  if (!catalogItems.length) return [];

  return catalogItems.map((item, index) => ({
    id: `${row.orderLineNo}-item-${index + 1}`,
    no: String(index + 1).padStart(2, '0'),
    ...item
  }));
}

export function getOrderLineSettlementColumns() {
  return SETTLEMENT_LIST_COLUMNS.map(col => ({
    ...col,
    minWidth: col.minWidth || (col.key === 'no' ? 'w-16' : undefined)
  }));
}

function findSettlementRecordByOrderLineNo(orderLineNo) {
  if (!orderLineNo) return null;
  for (const rows of Object.values(settlementListMap)) {
    const found = rows.find(item => item.orderLineNo === orderLineNo);
    if (found) return { ...found };
  }
  return null;
}

/** 获取当前订单行结算明细（仅结算模块有匹配时返回，无匹配为空） */
export function getOrderLineSettlementRecords(row) {
  if (!row) return [];

  const fromMap = findSettlementRecordByOrderLineNo(row.orderLineNo);
  if (!fromMap) return [];

  return [{ ...fromMap, id: row.orderLineNo }];
}

/** 编目系统 MARC 书目元数据（按书目记录号 / 实际关联书目记录号索引） */
const marcBibMetaByRecordNo = {
  'bjlib9001202406135002-001': {
    isbn: '9787501345678',
    title: '图书馆学概论',
    author: '吴慰慈著',
    publisher: '国家图书馆出版社',
    pubYear: '2023',
    classNo: 'G250',
    series: '',
    volumeNote: '第1册 总论'
  },
  'bjlib9001202406135002-002': {
    isbn: '9787501345678',
    title: '图书馆学概论',
    author: '吴慰慈著',
    publisher: '国家图书馆出版社',
    pubYear: '2023',
    classNo: 'G250',
    series: '',
    volumeNote: '第2册 分论'
  },
  bjlib9001202406135003: {
    isbn: '9787040478912',
    title: '信息资源管理',
    author: '马费成著',
    publisher: '高等教育出版社',
    pubYear: '2023',
    classNo: 'G203',
    series: ''
  }
};

function buildMarcFieldsFromRow(row) {
  return buildMarcDetailFields({
    isbn: row.resourceId || '',
    title: row.title || '',
    author: row.author || '',
    publisher: row.publisher || '',
    pubYear: row.publishTime || '',
    classNo: row.classNo || '',
    series: row.series || ''
  });
}

/** 订单行 MARC 可查询的书目记录号列表（实际关联优先，否则书目记录号） */
export function getOrderLineMarcRecordNos(row) {
  return resolveActualBibRecordNos(row);
}

/** 按书目记录号从编目系统获取 MARC 字段 */
export function getOrderLineMarcFields(row, recordNo) {
  if (!row || !recordNo) return [];

  const meta = marcBibMetaByRecordNo[recordNo];
  if (meta) {
    const titlePart = meta.volumeNote
      ? `▼a${meta.title}▼h${meta.volumeNote}`
      : `▼a${meta.title}`;
    return [
      { field: '010', indicator: '', content: `▼a${meta.isbn || ''}` },
      { field: '200', indicator: '1 ', content: `${titlePart}▼f${meta.author || ''}` },
      { field: '210', indicator: '  ', content: `▼a${meta.publisher || ''}▼d${meta.pubYear || ''}` },
      { field: '215', indicator: '  ', content: '▼a1册' },
      { field: '690', indicator: '  ', content: `▼a${meta.classNo || ''}` },
      { field: '225', indicator: '  ', content: `▼a${meta.series || ''}` }
    ].filter(item => item.content.replace(/▼[a-z]/g, '').trim());
  }

  if (recordNo === row.bibRecordNo) {
    return buildMarcFieldsFromRow(row);
  }

  return [];
}

export function getOrderLineAlerts(row) {
  const alerts = [];
  if (row.isShortage === '是') {
    alerts.push({ type: 'shortage', message: '已提交催缺，请关注供应商回告' });
  }
  if (row.acceptanceStatus === '部分收货') {
    alerts.push({ type: 'partial', message: '部分收货，请跟进剩余套数验收' });
  }
  return alerts;
}
