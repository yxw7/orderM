import { appConfig } from '@/config/app-config';

export const DEDUP_FIELD_LABELS = {
  title: '题名',
  resourceId: '资源标识',
  author: '作者',
  publisher: '出版社',
  publishTime: '出版年',
  textLanguage: '语种',
  carrier: '载体',
  productBarcode: '商品条码',
  catalogNo: '目录号',
  limitedNo: '限量编号'
};

export const DEDUP_FIELDS_BY_RESOURCE_TYPE = {
  纸质书: [
    { value: 'title', label: '题名' },
    { value: 'resourceId', label: '资源标识' },
    { value: 'author', label: '作者' },
    { value: 'publisher', label: '出版社' },
    { value: 'publishTime', label: '出版年' },
    { value: 'textLanguage', label: '语种' }
  ],
  视听资料: [
    { value: 'title', label: '题名' },
    { value: 'resourceId', label: '资源标识' },
    { value: 'carrier', label: '载体' },
    { value: 'productBarcode', label: '商品条码' },
    { value: 'catalogNo', label: '目录号' },
    { value: 'limitedNo', label: '限量编号' },
    { value: 'publisher', label: '出版社' }
  ]
};

export const DEDUP_DEFAULT_FIELDS = {
  纸质书: { 中文: ['resourceId', 'title'], 外文: ['resourceId', 'title'] },
  视听资料: { 中文: ['title', 'carrier'], 外文: ['productBarcode', 'catalogNo'] }
};

/** 馆藏查重结果书目卡片字段（按资源类型 + 语种） */
export const HOLDING_BIB_CARD_FIELDS = {
  纸质书: {
    中文: [
      { label: '书目记录号', key: 'bibRecordNo' },
      { label: '正题名', key: 'title' },
      { label: 'ISBN', key: 'isbn' },
      { label: '作者', key: 'author' },
      { label: '出版社', key: 'publisher' },
      { label: '出版年', key: 'publishTime' },
      { label: '版本', key: 'edition' }
    ],
    外文: [
      { label: '书目记录号', key: 'bibRecordNo' },
      { label: '题名', key: 'title' },
      { label: 'ISBN', key: 'isbn' },
      { label: '责任者', key: 'author' },
      { label: '出版社', key: 'publisher' },
      { label: '出版日期', key: 'publishTime' },
      { label: '语种', key: 'textLanguage' }
    ]
  },
  视听资料: {
    中文: [
      { label: '书目记录号', key: 'bibRecordNo' },
      { label: '题名', key: 'title' },
      { label: '载体', key: 'carrier' },
      { label: 'ISBN/ISRC', key: 'isbnIsrc' },
      { label: '出版社', key: 'publisher' },
      { label: '版本/格式', key: 'edition' },
      { label: '著者', key: 'author' }
    ],
    外文: [
      { label: '书目记录号', key: 'bibRecordNo' },
      { label: 'ISRC', key: 'isrc' },
      { label: '题名', key: 'title' },
      { label: '载体', key: 'carrier' },
      { label: '商品条码', key: 'productBarcode' },
      { label: '目录号', key: 'catalogNo' },
      { label: '出版方', key: 'publisher' }
    ]
  }
};

/**
 * 获取馆藏查重书目卡片展示字段
 * @param {string} resourceType - 资源类型
 * @param {string} languageCategory - 语种（中文/外文）
 * @returns {Array<{ label: string, key: string }>}
 */
export function getHoldingBibCardFields(resourceType, languageCategory) {
  const typeConfig = HOLDING_BIB_CARD_FIELDS[resourceType] || HOLDING_BIB_CARD_FIELDS['纸质书'];
  return typeConfig[languageCategory] || typeConfig['中文'];
}

/**
 * 规范化书目语种展示值
 * @param {string} rawLanguage - 原始语种
 * @returns {string}
 */
function normalizeBibTextLanguage(rawLanguage) {
  const textLanguageMap = { chi: '中文', eng: '英文', en: '英文', jpn: '日文' };
  const raw = String(rawLanguage || '').trim();
  if (!raw) return '';
  return textLanguageMap[raw.toLowerCase()] || raw;
}

/**
 * 获取馆藏查重书目卡片字段展示值
 * @param {Object} item - 书目记录
 * @param {string} fieldKey - 字段键
 * @returns {string}
 */
export function getHoldingBibFieldDisplayValue(item, fieldKey) {
  if (!item) return '—';

  const valueMap = {
    bibRecordNo: item.bibRecordNo,
    title: item.title,
    author: item.author,
    publisher: item.publisher,
    publishTime: item.publishTime,
    carrier: item.carrier,
    edition: item.edition,
    productBarcode: item.productBarcode,
    catalogNo: item.catalogNo,
    textLanguage: normalizeBibTextLanguage(item.textLanguage),
    isbn: item.isbn || item.standardNo || item.resourceId,
    isbnIsrc: item.isbn || item.isrc || item.standardNo || item.resourceId,
    isrc: item.isrc || item.standardNo
  };

  const rawValue = valueMap[fieldKey];
  if (rawValue == null || String(rawValue).trim() === '') return '—';
  return String(rawValue);
}

/** 馆藏查重 MARC 页签展示字段规则（按语种） */
export const HOLDING_DEDUP_MARC_FIELD_PATTERNS = {
  中文: ['010', '2XX', '3XX', '6XX', '7XX'],
  外文: ['020', '1XX', '2XX', '3XX', '093']
};

/**
 * 判断 MARC 字段 tag 是否匹配展示规则
 * @param {string} fieldTag - MARC 字段 tag，如 010、200
 * @param {string} pattern - 规则，如 010、2XX、093
 * @returns {boolean}
 */
function matchesMarcFieldPattern(fieldTag, pattern) {
  const tag = String(fieldTag || '').trim();
  if (!tag || !pattern) return false;

  if (pattern.endsWith('XX') && pattern.length === 3) {
    return tag.length === 3 && tag[0] === pattern[0] && /^\d{3}$/.test(tag);
  }

  return tag === pattern;
}

/**
 * 按语种过滤馆藏查重 MARC 展示字段
 * @param {Object[]} marcFields - MARC 字段列表
 * @param {string} languageCategory - 语种（中文/外文）
 * @returns {Object[]}
 */
export function filterHoldingDedupMarcFields(marcFields, languageCategory) {
  if (!marcFields?.length) return [];

  const patterns = HOLDING_DEDUP_MARC_FIELD_PATTERNS[languageCategory]
    || HOLDING_DEDUP_MARC_FIELD_PATTERNS['中文'];

  return marcFields.filter(item =>
    patterns.some(pattern => matchesMarcFieldPattern(item.field, pattern))
  );
}

export const HOLDING_DEDUP_CATALOG = [
  {
    bibRecordNo: 'BIB2024002001', standardNo: '9787040456789', isbn: '978-7-04-045678-9', title: '中国现代史纲要',
    author: '王顺生著', edition: '第2版', textLanguage: '中文', publisher: '高等教育出版社', publishTime: '2024',
    holdingTree: [
      {
        name: '首都图书馆',
        children: [
          {
            name: '首图华威桥馆',
            children: [
              {
                name: '市少儿图书馆',
                children: [{ name: '首少.少儿中文库本库', copyCount: 1 }]
              }
            ]
          },
          {
            name: '平谷区图书馆',
            children: [
              {
                name: '平谷区图书馆',
                children: [
                  { name: '生态书库', copyCount: 1 },
                  { name: '集体外借部', copyCount: 1 },
                  { name: '少儿外借部（新库）', copyCount: 2 }
                ]
              }
            ]
          }
        ]
      }
    ],
    marcFields: [
      { field: '010', indicator: '', content: '▼a978-7-04-045678-9' },
      { field: '200', indicator: '1 ', content: '▼a中国现代史纲要▼f王顺生著' },
      { field: '210', indicator: '  ', content: '▼a北京▼c高等教育出版社▼d2024' },
      { field: '300', indicator: '  ', content: '▼a含教学参考资料' },
      { field: '690', indicator: '  ', content: '▼aK25' },
      { field: '701', indicator: '0 ', content: '▼a王顺生▼4著' },
      { field: '905', indicator: '  ', content: '▼a首图.华威桥馆' }
    ]
  },
  {
    bibRecordNo: 'BIB2024002002', standardNo: '9787565855375', isbn: '978-7-5658-5537-5', title: '地质勘查工程与生态修复',
    author: '张昕, 冯红彩, 张海燕主编', textLanguage: '中文', publisher: '汕头大学出版社', publishTime: '2026',
    holdingTree: [
      {
        name: '首都图书馆',
        children: [
          {
            name: '首图华威桥馆',
            children: [{ name: '华威桥馆', children: [{ name: '自然科学借阅室', copyCount: 2 }] }]
          }
        ]
      }
    ]
  },
  {
    bibRecordNo: 'BIB2024002003', standardNo: '9787501345678', isbn: '978-7-5013-4567-8', title: '图书馆学概论',
    author: '吴慰慈著', textLanguage: '中文', publisher: '国家图书馆出版社', publishTime: '2023-06',
    holdingTree: [
      {
        name: '首都图书馆',
        children: [
          {
            name: '首图华威桥馆',
            children: [
              {
                name: '华威桥馆',
                children: [
                  { name: '社会科学借阅室', copyCount: 1 },
                  { name: '工具书阅览室', copyCount: 1 }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    bibRecordNo: 'BIB2024003001', standardNo: 'CN-A1234567890', isrc: 'CN-A1234567890', isbn: '',
    title: '布鲁克纳：第二交响曲', author: '安东·布鲁克纳', edition: 'CD',
    textLanguage: '中文', publisher: '国家大剧院', publishTime: '2015-03', carrier: 'CD',
    productBarcode: '017685110221', catalogNo: 'CD-1102',
    holdingTree: [
      {
        name: '首都图书馆',
        children: [
          {
            name: '首图华威桥馆',
            children: [{ name: '华威桥馆', children: [{ name: '音像资料外借部', copyCount: 1 }] }]
          }
        ]
      }
    ]
  }
];

export function getDedupDefaultFieldKeys(resourceType, languageCategory) {
  const typeConfig = DEDUP_DEFAULT_FIELDS[resourceType] || DEDUP_DEFAULT_FIELDS['纸质书'];
  return typeConfig[languageCategory] || typeConfig['中文'];
}

export function getDedupFieldValue(row, fieldKey) {
  const textLanguageMap = { chi: '中文', eng: '英文', en: '英文', jpn: '日文' };
  const rawLanguage = String(row.textLanguage || '').trim();
  const normalizedLanguage = textLanguageMap[rawLanguage.toLowerCase()] || rawLanguage;
  const valueMap = {
    title: row.title,
    resourceId: row.resourceId || row.standardNo,
    author: row.author,
    publisher: row.publisher,
    publishTime: row.publishTime,
    textLanguage: normalizedLanguage,
    carrier: row.carrier,
    productBarcode: row.productBarcode,
    catalogNo: row.catalogNo,
    limitedNo: row.limitedNo
  };
  const rawValue = String(valueMap[fieldKey] || '').trim();
  return fieldKey === 'resourceId' ? rawValue.toLowerCase().replace(/-/g, '') : rawValue.toLowerCase();
}

export function matchesDedupFields(sourceRow, targetRow, fieldKeys) {
  return fieldKeys.every(fieldKey => {
    const sourceValue = getDedupFieldValue(sourceRow, fieldKey);
    const targetValue = getDedupFieldValue(targetRow, fieldKey);
    return sourceValue && targetValue && sourceValue === targetValue;
  });
}

export function canDedupOrderLine(row, orders) {
  const order = orders.find(o => o.orderId === row.orderId);
  if (order?.orderStatus === 'pending') return true;
  return row.lineStatus === '待发订';
}

export function getOrderLineResourceType(row, orders) {
  if (row.resourceType) return row.resourceType;
  return orders.find(o => o.orderId === row.orderId)?.resourceType || '纸质书';
}

export function getOrderLineLanguageCategory(row, orders) {
  if (row.language) return row.language;
  return orders.find(o => o.orderId === row.orderId)?.language || '中文';
}

export function findOrderDuplicateResults(row, allLines, orders) {
  const subscriber = appConfig.currentSubscriber;
  if (!subscriber) return [];
  return allLines.filter(other =>
    other.orderLineNo !== row.orderLineNo
    && orders.find(o => o.orderId === other.orderId)?.subscriber === subscriber
    && matchesDedupFields(row, other, row.lastDedupFieldKeys || ['resourceId', 'title'])
  );
}

export function findHoldingDuplicateResults(row, fieldKeys) {
  return HOLDING_DEDUP_CATALOG.filter(catalogRow => matchesDedupFields(row, catalogRow, fieldKeys));
}

export function findOrderDuplicatesForCheck(row, allLines, orders, fieldKeys) {
  const subscriber = appConfig.currentSubscriber;
  if (!subscriber) return [];
  return allLines.filter(other =>
    other.orderLineNo !== row.orderLineNo
    && orders.find(o => o.orderId === other.orderId)?.subscriber === subscriber
    && matchesDedupFields(row, other, fieldKeys)
  );
}

export function performOrderLineDedup(lines, orders, orderLineNos, config) {
  const { duplicateType, fieldKeys } = config;
  const checkOrder = duplicateType === 'all' || duplicateType === 'order';
  const checkHolding = duplicateType === 'all' || duplicateType === 'holding';

  orderLineNos.forEach(orderLineNo => {
    const target = lines.find(item => item.orderLineNo === orderLineNo);
    if (!target) return;

    if (checkOrder) {
      target.orderDedupResults = findOrderDuplicatesForCheck(target, lines, orders, fieldKeys);
      target.orderDuplicate = target.orderDedupResults.length > 0;
    }
    if (checkHolding) {
      target.holdingDedupResults = findHoldingDuplicateResults(target, fieldKeys);
      target.holdingDuplicate = target.holdingDedupResults.length > 0;
    }
    target.lastDedupFieldKeys = fieldKeys;
  });
}

/**
 * 统计馆藏树复本总数
 * @param {Object[]} nodes - 馆藏树节点
 * @returns {number}
 */
export function countHoldingTreeCopies(nodes) {
  if (!nodes?.length) return 0;
  return nodes.reduce((sum, node) => {
    if (node.copyCount != null) return sum + Number(node.copyCount);
    return sum + countHoldingTreeCopies(node.children);
  }, 0);
}

export function getHoldingDedupTotalCopies(results) {
  return results.reduce((total, item) => total + countHoldingTreeCopies(item.holdingTree), 0);
}

export function getOrderDedupTotalSets(results) {
  return results.reduce((total, item) => total + Number(item.sets || 0), 0);
}

export function formatDedupFieldLabels(fieldKeys) {
  return (fieldKeys || []).map(key => DEDUP_FIELD_LABELS[key] || key).join('、');
}

/** 初始化部分订单行的查重示例数据 */
export function applyDedupSampleData(lines) {
  const holdingModernHistory = HOLDING_DEDUP_CATALOG.find(item => item.standardNo === '9787040456789');
  const holdingLibraryScience = HOLDING_DEDUP_CATALOG.find(item => item.standardNo === '9787501345678');
  const holdingGeology = HOLDING_DEDUP_CATALOG.find(item => item.standardNo === '9787565855375');
  const holdingBruckner = HOLDING_DEDUP_CATALOG.find(item => item.bibRecordNo === 'BIB2024003001');

  const samples = [
    {
      orderLineNo: 'PG001B202406030001-1',
      sample: {
        holdingDuplicate: true,
        orderDuplicate: true,
        lastDedupFieldKeys: ['resourceId', 'title'],
        holdingDedupResults: holdingModernHistory ? [holdingModernHistory] : [],
        orderDedupResults: []
      },
      linkOrder: 'PG001B202406030001-5'
    },
    {
      orderLineNo: 'PG001B202406030001-2',
      sample: {
        holdingDuplicate: true,
        orderDuplicate: false,
        lastDedupFieldKeys: ['resourceId', 'title'],
        holdingDedupResults: holdingLibraryScience ? [holdingLibraryScience] : [],
        orderDedupResults: []
      }
    },
    {
      orderLineNo: 'PG001B202406030001-5',
      sample: {
        holdingDuplicate: false,
        orderDuplicate: true,
        lastDedupFieldKeys: ['resourceId', 'title'],
        holdingDedupResults: [],
        orderDedupResults: []
      },
      linkOrder: 'PG001B202406030001-1'
    },
    {
      orderLineNo: 'PG001B202406030001-3',
      sample: {
        holdingDuplicate: false,
        orderDuplicate: false,
        lastDedupFieldKeys: ['resourceId', 'title'],
        holdingDedupResults: [],
        orderDedupResults: []
      }
    },
    {
      orderLineNo: 'PG001B202406030005-3',
      sample: {
        holdingDuplicate: true,
        orderDuplicate: false,
        lastDedupFieldKeys: ['resourceId', 'title'],
        holdingDedupResults: holdingGeology ? [holdingGeology] : [],
        orderDedupResults: []
      }
    },
    {
      orderLineNo: 'PG001B202406030006-2',
      sample: {
        holdingDuplicate: true,
        orderDuplicate: false,
        lastDedupFieldKeys: ['title', 'carrier'],
        holdingDedupResults: holdingBruckner ? [holdingBruckner] : [],
        orderDedupResults: []
      }
    }
  ];

  samples.forEach(({ orderLineNo, sample, linkOrder }) => {
    const target = lines.find(item => item.orderLineNo === orderLineNo);
    if (!target) return;
    Object.assign(target, { ...sample });
  });

  const line1 = lines.find(item => item.orderLineNo === 'PG001B202406030001-1');
  const line5 = lines.find(item => item.orderLineNo === 'PG001B202406030001-5');
  if (line1 && line5) {
    line1.orderDedupResults = [line5];
    line5.orderDedupResults = [line1];
  }

  return lines;
}
