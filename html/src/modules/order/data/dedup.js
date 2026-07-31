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

const PAPER_BOOK_DEDUP_FIELDS = [
  { value: 'title', label: '题名' },
  { value: 'resourceId', label: '资源标识' },
  { value: 'author', label: '作者' },
  { value: 'publisher', label: '出版社' },
  { value: 'publishTime', label: '出版年' }
];

/** 查重可选字段：按资源类型 + 语种分类 */
export const DEDUP_FIELDS_BY_RESOURCE_TYPE = {
  纸质书: {
    中文: PAPER_BOOK_DEDUP_FIELDS,
    外文: PAPER_BOOK_DEDUP_FIELDS
  },
  视听资料: {
    中文: [
      { value: 'title', label: '题名' },
      { value: 'carrier', label: '载体' }
    ],
    外文: [
      { value: 'productBarcode', label: '商品条码' },
      { value: 'catalogNo', label: '目录号' }
    ]
  }
};

export const DEDUP_DEFAULT_FIELDS = {
  纸质书: { 中文: ['resourceId'], 外文: ['resourceId'] },
  视听资料: { 中文: ['title', 'carrier'], 外文: ['productBarcode', 'catalogNo'] }
};

/**
 * 获取查重配置可选字段
 * @param {string} resourceType
 * @param {string} languageCategory
 * @returns {{ value: string, label: string }[]}
 */
export function getDedupFields(resourceType, languageCategory) {
  const byType = DEDUP_FIELDS_BY_RESOURCE_TYPE[resourceType] || DEDUP_FIELDS_BY_RESOURCE_TYPE['纸质书'];
  return byType[languageCategory] || byType['中文'] || [];
}

/**
 * 查重范围预设：分馆编码前缀通配符（产品写死）
 * value 为提交用模式；label 为复选展示文案
 */
export const DEDUP_BRANCH_PATTERNS = [
  { value: 'ST*', label: 'ST* | 首都图书馆' },
  { value: 'CP*', label: 'CP* | 昌平区图书馆' },
  { value: 'CY*', label: 'CY* | 朝阳区图书馆' },
  { value: 'DC*', label: 'DC* | 东城区图书馆' },
  { value: 'CW*', label: 'CW* | 东城区图书馆' },
  { value: 'DX*', label: 'DX* | 大兴区图书馆' },
  { value: 'FS*', label: 'FS* | 房山区图书馆' },
  { value: 'YS*', label: 'YS* | 燕山区图书馆' },
  { value: 'FT*', label: 'FT* | 丰台区图书馆' },
  { value: 'HD*', label: 'HD* | 海淀区图书馆' },
  { value: 'HR*', label: 'HR* | 怀柔区图书馆' },
  { value: 'MT*', label: 'MT* | 门头沟区图书馆' },
  { value: 'MY*', label: 'MY* | 密云区图书馆' },
  { value: 'PG*', label: 'PG* | 平谷区图书馆' },
  { value: 'SJ*', label: 'SJ* | 石景山区图书馆' },
  { value: 'SY*', label: 'SY* | 顺义区图书馆' },
  { value: 'TZ*', label: 'TZ* | 通州区图书馆' },
  { value: 'XC*', label: 'XC* | 西城区图书馆' },
  { value: 'XW*', label: 'XW* | 西城区图书馆' },
  { value: 'YQ*', label: 'YQ* | 延庆区图书馆' }
];

/**
 * 前缀通配符是否匹配分馆编码（忽略大小写）
 * @param {string} pattern - 如 ST*
 * @param {string} branchCode
 * @returns {boolean}
 */
export function matchesBranchPattern(pattern, branchCode) {
  const code = String(branchCode || '').trim().toLowerCase();
  const raw = String(pattern || '').trim();
  if (!code || !raw) return false;
  if (!raw.endsWith('*')) return code === raw.toLowerCase();
  const prefix = raw.slice(0, -1).toLowerCase();
  return code.startsWith(prefix);
}

/**
 * 分馆编码是否命中任一已选通配符（空列表视为不限 / 全部命中）
 * @param {string} branchCode
 * @param {string[]} patterns
 * @returns {boolean}
 */
export function isBranchInDedupScope(branchCode, patterns) {
  if (!Array.isArray(patterns) || !patterns.length) return true;
  return patterns.some(pattern => matchesBranchPattern(pattern, branchCode));
}

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

/**
 * 构造馆藏查重单件示例行
 * @param {Object} patch - 单件字段覆盖
 * @returns {Object}
 */
function createHoldingDedupItem(patch = {}) {
  return {
    barcode: '',
    callNo: '',
    ownerLibrary: '首都图书馆',
    homeLocation: '',
    currentLibrary: '首都图书馆',
    currentLocation: '',
    circulationType: '001-成人外借',
    volumeDesc: '',
    checkInTime: '2024-06-15 10:20:00',
    ...patch
  };
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
    unassignedCopyCount: 2,
    physicalItems: [
      createHoldingDedupItem({
        barcode: 'ST2024002001',
        callNo: 'K25/1',
        homeLocation: '首少.少儿中文库本库',
        currentLocation: '首少.少儿中文库本库',
        circulationType: '002-少儿外借'
      }),
      createHoldingDedupItem({
        barcode: 'ST2024002002',
        callNo: 'K25/1',
        homeLocation: '生态书库',
        currentLocation: '生态书库'
      }),
      createHoldingDedupItem({
        barcode: 'ST2024002003',
        callNo: 'K25/1',
        homeLocation: '集体外借部',
        currentLocation: '集体外借部'
      }),
      createHoldingDedupItem({
        barcode: 'ST2024002004',
        callNo: 'K25/1',
        homeLocation: '少儿外借部（新库）',
        currentLocation: '少儿外借部（新库）',
        circulationType: '002-少儿外借'
      }),
      createHoldingDedupItem({
        barcode: 'ST2024002005',
        callNo: 'K25/1',
        homeLocation: '少儿外借部（新库）',
        currentLocation: '少儿外借部（新库）',
        circulationType: '002-少儿外借'
      }),
      createHoldingDedupItem({
        barcode: 'ST2024002006',
        callNo: 'K25/1',
        homeLocation: '',
        currentLibrary: '',
        currentLocation: '',
        checkInTime: '2024-06-18 09:00:00'
      }),
      createHoldingDedupItem({
        barcode: 'ST2024002007',
        callNo: 'K25/1',
        homeLocation: '',
        currentLibrary: '',
        currentLocation: '',
        checkInTime: '2024-06-18 09:05:00'
      })
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
    ],
    unassignedCopyCount: 1,
    physicalItems: [
      createHoldingDedupItem({
        barcode: 'ST2024002101',
        callNo: 'P5/88',
        homeLocation: '自然科学借阅室',
        currentLocation: '自然科学借阅室'
      }),
      createHoldingDedupItem({
        barcode: 'ST2024002102',
        callNo: 'P5/88',
        homeLocation: '自然科学借阅室',
        currentLocation: '自然科学借阅室'
      }),
      createHoldingDedupItem({
        barcode: 'ST2024002103',
        callNo: 'P5/88',
        homeLocation: '',
        currentLibrary: '',
        currentLocation: '',
        checkInTime: '2026-03-01 14:30:00'
      })
    ],
    marcFields: [
      { field: '010', indicator: '', content: '▼a978-7-5658-5537-5' },
      { field: '200', indicator: '1 ', content: '▼a地质勘查工程与生态修复▼f张昕, 冯红彩, 张海燕主编' },
      { field: '210', indicator: '  ', content: '▼a汕头▼c汕头大学出版社▼d2026' },
      { field: '300', indicator: '  ', content: '▼a含图' },
      { field: '690', indicator: '  ', content: '▼aP5' },
      { field: '701', indicator: '0 ', content: '▼a张昕▼4主编' },
      { field: '702', indicator: '0 ', content: '▼a冯红彩▼4主编' },
      { field: '702', indicator: '0 ', content: '▼a张海燕▼4主编' },
      { field: '905', indicator: '  ', content: '▼a首图.华威桥馆' }
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
    ],
    physicalItems: [
      createHoldingDedupItem({
        barcode: 'ST2024002201',
        callNo: 'G25/3',
        homeLocation: '社会科学借阅室',
        currentLocation: '社会科学借阅室',
        checkInTime: '2023-07-10 11:00:00'
      }),
      createHoldingDedupItem({
        barcode: 'ST2024002202',
        callNo: 'G25/3',
        homeLocation: '工具书阅览室',
        currentLocation: '工具书阅览室',
        checkInTime: '2023-07-10 11:05:00'
      })
    ],
    marcFields: [
      { field: '010', indicator: '', content: '▼a978-7-5013-4567-8' },
      { field: '200', indicator: '1 ', content: '▼a图书馆学概论▼f吴慰慈著' },
      { field: '210', indicator: '  ', content: '▼a北京▼c国家图书馆出版社▼d2023' },
      { field: '215', indicator: '  ', content: '▼a286页▼c23cm' },
      { field: '300', indicator: '  ', content: '▼a有参考文献' },
      { field: '690', indicator: '  ', content: '▼aG250' },
      { field: '701', indicator: '0 ', content: '▼a吴慰慈▼4著' },
      { field: '905', indicator: '  ', content: '▼a首图.华威桥馆' }
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
    ],
    unassignedCopyCount: 1,
    physicalItems: [
      createHoldingDedupItem({
        barcode: 'AV2024003001',
        callNo: 'J647.1/12',
        homeLocation: '音像资料外借部',
        currentLocation: '音像资料外借部',
        circulationType: '003-音像外借',
        checkInTime: '2015-04-02 16:20:00'
      }),
      createHoldingDedupItem({
        barcode: 'AV2024003002',
        callNo: 'J647.1/12',
        homeLocation: '',
        currentLibrary: '',
        currentLocation: '',
        circulationType: '003-音像外借',
        checkInTime: '2015-04-02 16:25:00'
      })
    ],
    marcFields: [
      { field: '010', indicator: '', content: '▼aCN-A1234567890' },
      { field: '200', indicator: '1 ', content: '▼a布鲁克纳：第二交响曲▼f安东·布鲁克纳' },
      { field: '210', indicator: '  ', content: '▼a北京▼c国家大剧院▼d2015' },
      { field: '215', indicator: '  ', content: '▼a1光盘▼cCD' },
      { field: '300', indicator: '  ', content: '▼a商品条码017685110221▼a目录号CD-1102' },
      { field: '690', indicator: '  ', content: '▼aJ647.1' },
      { field: '701', indicator: '0 ', content: '▼a布鲁克纳▼b安东▼4作曲' },
      { field: '905', indicator: '  ', content: '▼a首图.华威桥馆' }
    ]
  },
  {
    bibRecordNo: 'BIB2024002004', standardNo: '9787040478912', isbn: '978-7-04-0478912', title: '信息资源管理',
    author: '马费成著', textLanguage: '中文', publisher: '高等教育出版社', publishTime: '2023',
    holdingTree: [],
    unassignedCopyCount: 0,
    physicalItems: [],
    marcFields: [
      { field: '010', indicator: '', content: '▼a978-7-04-0478912' },
      { field: '200', indicator: '1 ', content: '▼a信息资源管理▼f马费成著' },
      { field: '210', indicator: '  ', content: '▼a北京▼c高等教育出版社▼d2023' },
      { field: '215', indicator: '  ', content: '▼a320页▼c24cm' },
      { field: '300', indicator: '  ', content: '▼a有参考文献和索引' },
      { field: '690', indicator: '  ', content: '▼aG203' },
      { field: '701', indicator: '0 ', content: '▼a马费成▼4著' },
      { field: '905', indicator: '  ', content: '▼a首图.华威桥馆' }
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

/**
 * 检查待查重订单行上已选字段是否存在空值
 * @param {Object[]} lines
 * @param {string[]} orderLineNos
 * @param {string[]} fieldKeys
 * @returns {{ orderLineNo: string, emptyLabels: string[] }[]}
 */
export function findEmptyDedupFieldsOnLines(lines, orderLineNos, fieldKeys) {
  if (!fieldKeys?.length || !orderLineNos?.length) return [];

  const issues = [];
  orderLineNos.forEach(orderLineNo => {
    const row = lines.find(item => item.orderLineNo === orderLineNo);
    if (!row) return;

    const emptyLabels = fieldKeys
      .filter(fieldKey => !getDedupFieldValue(row, fieldKey))
      .map(fieldKey => DEDUP_FIELD_LABELS[fieldKey] || fieldKey);

    if (emptyLabels.length) {
      issues.push({ orderLineNo, emptyLabels });
    }
  });
  return issues;
}

/**
 * 生成查重字段为空的提示文案
 * @param {{ orderLineNo: string, emptyLabels: string[] }[]} issues
 * @returns {string}
 */
export function formatEmptyDedupFieldsMessage(issues) {
  if (!issues?.length) return '';

  const preview = issues.slice(0, 5).map(item =>
    `订单行号 ${item.orderLineNo}（${item.emptyLabels.join('、')}）`
  );
  const more = issues.length > 5 ? `等共 ${issues.length} 条` : '';
  return `存在查重字段为空的订单行，无法继续查重：\n${preview.join('；')}${more ? `；${more}` : ''}。请取消勾选空字段或补全数据后再查重`;
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
  const { duplicateType, fieldKeys, branchPatterns = [] } = config;
  const checkOrder = duplicateType === 'all' || duplicateType === 'order';
  const checkHolding = duplicateType === 'all' || duplicateType === 'holding';
  const patterns = Array.isArray(branchPatterns) ? [...branchPatterns] : [];

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
      autoAssociateFirstHoldingBib(target);
    }
    target.lastDedupFieldKeys = fieldKeys;
    // 查重范围存档；未选通配符视为不限。Mock 馆藏树缺分馆编码时暂不裁剪结果
    target.lastDedupBranchPatterns = patterns;
  });
}

/**
 * 馆藏查重返回后：订单行书目记录号为空时，静默关联结果第一条书目
 * @param {Object} target - 订单行
 */
function autoAssociateFirstHoldingBib(target) {
  if (!target || String(target.bibRecordNo || '').trim()) return;

  const firstBibRecordNo = String(target.holdingDedupResults?.[0]?.bibRecordNo || '').trim();
  if (!firstBibRecordNo) return;

  target.bibRecordNo = firstBibRecordNo;
}

/**
 * 异步执行订单行查重（模拟接口请求，便于展示加载态）
 * @param {Object[]} lines - 订单行列表
 * @param {Object[]} orders - 订单列表
 * @param {string[]} orderLineNos - 待查重订单行号
 * @param {Object} config - 查重配置
 * @returns {Promise<void>}
 */
export function performOrderLineDedupAsync(lines, orders, orderLineNos, config) {
  return new Promise(resolve => {
    window.setTimeout(() => {
      performOrderLineDedup(lines, orders, orderLineNos, config);
      resolve();
    }, 400);
  });
}

/**
 * 统计馆藏树复本总数（含未关联馆藏）
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

/**
 * 统计书目全部馆藏复本数（优先单件明细条数，否则已分配馆藏地 + 未关联馆藏）
 * @param {Object} item - 馆藏查重书目
 * @returns {number}
 */
export function countBibHoldingCopies(item) {
  if (!item) return 0;
  if (Array.isArray(item.physicalItems)) return item.physicalItems.length;
  const assigned = countHoldingTreeCopies(item.holdingTree);
  const unassigned = Number(item.unassignedCopyCount) || 0;
  return assigned + unassigned;
}

/** 馆藏查重「单件」页签列定义 */
export const HOLDING_DEDUP_ITEM_COLUMNS = [
  { key: 'barcode', label: '条码号' },
  { key: 'callNo', label: '索书号' },
  { key: 'ownerLibrary', label: '所属馆', minWidth: 'min-w-[140px]' },
  { key: 'homeLocation', label: '所属馆藏地', minWidth: 'min-w-[160px]' },
  { key: 'currentLibrary', label: '所在馆', minWidth: 'min-w-[140px]' },
  { key: 'currentLocation', label: '所在馆藏地', minWidth: 'min-w-[160px]' },
  { key: 'circulationType', label: '借阅类型' },
  { key: 'volumeDesc', label: '卷册描述' },
  { key: 'checkInTime', label: '登到时间', minWidth: 'whitespace-nowrap' }
];

/**
 * 获取馆藏查重书目关联的单件列表
 * @param {Object} [item] - 馆藏查重书目
 * @returns {Object[]}
 */
export function getHoldingDedupPhysicalItems(item) {
  if (!item || !Array.isArray(item.physicalItems)) return [];
  return item.physicalItems.map((row, index) => ({
    id: `${item.bibRecordNo || 'item'}-${index + 1}`,
    ...row
  }));
}

/**
 * 构建含「未关联馆藏」节点的展示用馆藏树
 * @param {Object[]} [holdingTree=[]] - 已分配馆藏地的树
 * @param {number} [unassignedCopyCount=0] - 未分配馆藏地的单件数
 * @returns {Object[]}
 */
export function buildDisplayHoldingTree(holdingTree = [], unassignedCopyCount = 0) {
  const count = Number(unassignedCopyCount) || 0;
  const nodes = [...(holdingTree || [])];
  if (count > 0) {
    nodes.push({
      name: '未关联馆藏',
      unassigned: true,
      copyCount: count
    });
  }
  return nodes;
}

/**
 * 书目是否有馆藏分布（总复本数大于 0）
 * @param {Object} [item] - 馆藏查重书目
 * @returns {boolean}
 */
export function hasHoldingDistribution(item) {
  return countBibHoldingCopies(item) > 0;
}

export function getHoldingDedupTotalCopies(results) {
  return results.reduce((total, item) => total + countBibHoldingCopies(item), 0);
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
  const holdingZeroCopy = HOLDING_DEDUP_CATALOG.find(item => item.bibRecordNo === 'BIB2024002004');

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
        holdingDuplicate: true,
        orderDuplicate: false,
        lastDedupFieldKeys: ['resourceId', 'title'],
        holdingDedupResults: holdingZeroCopy ? [holdingZeroCopy] : [],
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
