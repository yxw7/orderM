import { initialBranchRows, initialCollectionRows } from '@/modules/location/data/location-manage';
import { getCurrentLibrarianAssociatedSubscribers } from '@/modules/subscriber/data/current-librarian';
import { mergeSubscriberDedupScope, subscriberRows } from '@/modules/subscriber/data/subscriber-manage';

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
 * 查重范围预设通配符【已废弃】：改为所属分馆 / 所属馆藏地选择
 * @deprecated
 */
export const DEDUP_BRANCH_PATTERNS = [];

/**
 * 前缀通配符是否匹配分馆编码（忽略大小写）【兼容旧逻辑】
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
 * 分馆编码是否命中任一已选通配符（空列表视为不限 / 全部命中）【兼容旧逻辑】
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
      { label: '副题名', key: 'subTitle' },
      { label: '分卷号', key: 'volumeNo' },
      { label: '分卷名', key: 'volumeName' },
      { label: 'ISBN', key: 'isbn' },
      { label: '作者', key: 'author' },
      { label: '出版社', key: 'publisher' },
      { label: '出版年', key: 'publishTime' },
      { label: '版本', key: 'edition' }
    ],
    外文: [
      { label: '书目记录号', key: 'bibRecordNo' },
      { label: '题名', key: 'title' },
      { label: '副题名', key: 'subTitle' },
      { label: '分卷号', key: 'volumeNo' },
      { label: '分卷名', key: 'volumeName' },
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
      { label: '副题名', key: 'subTitle' },
      { label: '分卷号', key: 'volumeNo' },
      { label: '分卷名', key: 'volumeName' },
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
      { label: '副题名', key: 'subTitle' },
      { label: '分卷号', key: 'volumeNo' },
      { label: '分卷名', key: 'volumeName' },
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
    subTitle: item.subTitle,
    volumeNo: item.volumeNo,
    volumeName: item.volumeName,
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

/**
 * 构造馆藏查重单件示例行
 * @param {Object} patch - 单件字段覆盖
 * @returns {Object}
 */
function createHoldingDedupItem(patch = {}) {
  return {
    holdingStatus: '编目中',
    barcode: '',
    callNo: '',
    ownerLibrary: '首都图书馆',
    homeLocation: '',
    currentLibrary: '首都图书馆',
    currentLocation: '',
    circulationType: '001-成人外借',
    volumeDesc: '',
    binding: '',
    shelfIndexClass: '',
    shelfIndex: '',
    itemPrice: '58.00',
    checkInTime: '2024-06-15 10:20:00',
    ...patch
  };
}

export const HOLDING_DEDUP_CATALOG = [
  {
    bibRecordNo: 'BIB2024002001', standardNo: '9787040456789', isbn: '978-7-04-045678-9', title: '中国现代史纲要',
    subTitle: '高等学校思想政治理论课教材', volumeNo: '上', volumeName: '理论篇',
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
    ],
    unassignedCopyCount: 4,
    physicalItems: [
      createHoldingDedupItem({
        barcode: 'ST2024002001',
        callNo: 'K25/1',
        homeLocation: '首少.少儿中文库本库',
        currentLocation: '首少.少儿中文库本库',
        circulationType: '002-少儿外借',
        holdingStatus: '在架',
        shelfIndexClass: '中图法',
        shelfIndex: 'K25',
        binding: '平装'
      }),
      createHoldingDedupItem({
        barcode: 'ST2024002002',
        callNo: 'K25/1',
        ownerLibrary: '平谷区图书馆',
        homeLocation: '生态书库',
        currentLibrary: '平谷区图书馆',
        currentLocation: '生态书库',
        holdingStatus: '已外借',
        shelfIndexClass: '中图法',
        shelfIndex: 'K25',
        binding: '精装'
      }),
      createHoldingDedupItem({
        barcode: 'ST2024002003',
        callNo: 'K25/1',
        ownerLibrary: '平谷区图书馆',
        homeLocation: '集体外借部',
        currentLibrary: '平谷区图书馆',
        currentLocation: '集体外借部',
        holdingStatus: '编目中',
        shelfIndexClass: '中图法',
        shelfIndex: 'K25',
        binding: '平装'
      }),
      createHoldingDedupItem({
        barcode: 'ST2024002004',
        callNo: 'K25/1',
        ownerLibrary: '平谷区图书馆',
        homeLocation: '少儿外借部（新库）',
        currentLibrary: '平谷区图书馆',
        currentLocation: '少儿外借部（新库）',
        circulationType: '002-少儿外借',
        holdingStatus: '订购中',
        shelfIndexClass: '中图法',
        shelfIndex: 'K25',
        binding: '平装'
      }),
      createHoldingDedupItem({
        barcode: 'ST2024002005',
        callNo: 'K25/1',
        ownerLibrary: '平谷区图书馆',
        homeLocation: '少儿外借部（新库）',
        currentLibrary: '平谷区图书馆',
        currentLocation: '少儿外借部（新库）',
        circulationType: '002-少儿外借',
        holdingStatus: '损坏',
        volumeDesc: '上册',
        shelfIndexClass: '中图法',
        shelfIndex: 'K25',
        binding: '精装'
      }),
      createHoldingDedupItem({
        barcode: 'ST2024002006',
        callNo: 'K25/1',
        ownerLibrary: '',
        homeLocation: '',
        currentLibrary: '',
        currentLocation: '',
        holdingStatus: '编目中',
        checkInTime: '2024-06-18 09:00:00'
      }),
      createHoldingDedupItem({
        barcode: 'ST2024002007',
        callNo: 'K25/1',
        ownerLibrary: '',
        homeLocation: '',
        currentLibrary: '',
        currentLocation: '',
        holdingStatus: '剔除',
        checkInTime: '2024-06-18 09:05:00'
      }),
      createHoldingDedupItem({
        barcode: 'ST2024002008',
        callNo: 'K25/1',
        ownerLibrary: '平谷区图书馆',
        homeLocation: '',
        currentLibrary: '平谷区图书馆',
        currentLocation: '',
        holdingStatus: '编目中',
        checkInTime: '2024-06-18 09:10:00'
      }),
      createHoldingDedupItem({
        barcode: 'ST2024002009',
        callNo: 'K25/1',
        ownerLibrary: '市少儿图书馆',
        homeLocation: '',
        currentLibrary: '首都图书馆',
        currentLocation: '',
        holdingStatus: '订购中',
        circulationType: '002-少儿外借',
        checkInTime: '2024-06-18 09:15:00'
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
    subTitle: '理论与实践', volumeNo: '', volumeName: '',
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
        ownerLibrary: '',
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
    title: '布鲁克纳：第二交响曲', subTitle: '维也纳爱乐现场录音', volumeNo: '2', volumeName: '第二交响曲',
    author: '安东·布鲁克纳', edition: 'CD',
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
        ownerLibrary: '华威桥馆',
        homeLocation: '',
        currentLibrary: '首都图书馆',
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
  void orders;
  return row?.lineStatus === '待发订';
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
  const subscribers = new Set(getCurrentLibrarianAssociatedSubscribers());
  if (!subscribers.size) return [];
  return allLines.filter(other =>
    other.orderLineNo !== row.orderLineNo
    && subscribers.has(orders.find(o => o.orderId === other.orderId)?.subscriber)
    && matchesDedupFields(row, other, row.lastDedupFieldKeys || ['resourceId', 'title'])
  );
}

export function findHoldingDuplicateResults(row, fieldKeys, scope = {}) {
  const branchCodes = normalizeCodeList(scope.branchCodes, scope.branchCode);
  const collectionCodes = normalizeCodeList(scope.collectionCodes, scope.collectionCode);
  return HOLDING_DEDUP_CATALOG
    .filter(catalogRow => matchesDedupFields(row, catalogRow, fieldKeys))
    .map(catalogRow => applyHoldingScopeToCatalogHit(catalogRow, branchCodes, collectionCodes));
}

export function findOrderDuplicatesForCheck(row, allLines, orders, fieldKeys) {
  const subscribers = new Set(getCurrentLibrarianAssociatedSubscribers());
  if (!subscribers.size) return [];
  return allLines.filter(other =>
    other.orderLineNo !== row.orderLineNo
    && subscribers.has(orders.find(o => o.orderId === other.orderId)?.subscriber)
    && matchesDedupFields(row, other, fieldKeys)
  );
}

export function performOrderLineDedup(lines, orders, orderLineNos, config) {
  const {
    duplicateType,
    fieldKeys,
    branchCodes = [],
    collectionCodes = [],
    // 兼容旧单选字段
    branchCode = '',
    collectionCode = ''
  } = config;
  const checkOrder = duplicateType === 'all' || duplicateType === 'order';
  const checkHolding = duplicateType === 'all' || duplicateType === 'holding';
  const scopeBranchCodes = normalizeCodeList(branchCodes, branchCode);
  const scopeCollectionCodes = normalizeCodeList(collectionCodes, collectionCode);

  orderLineNos.forEach(orderLineNo => {
    const target = lines.find(item => item.orderLineNo === orderLineNo);
    if (!target) return;

    if (checkOrder) {
      target.orderDedupResults = findOrderDuplicatesForCheck(target, lines, orders, fieldKeys);
      target.orderDuplicate = target.orderDedupResults.length > 0;
    }
    if (checkHolding) {
      target.holdingDedupResults = findHoldingDuplicateResults(target, fieldKeys, {
        branchCodes: scopeBranchCodes,
        collectionCodes: scopeCollectionCodes
      });
      target.holdingDuplicate = target.holdingDedupResults.length > 0;
      autoAssociateFirstHoldingBib(target);
    }
    target.lastDedupFieldKeys = fieldKeys;
    // 馆藏查重范围存档（仅馆藏查重使用）；有序分馆供单件列表优先排序
    target.lastDedupBranchCodes = checkHolding ? scopeBranchCodes : (target.lastDedupBranchCodes || []);
    target.lastDedupCollectionCodes = checkHolding ? scopeCollectionCodes : (target.lastDedupCollectionCodes || []);
  });
}

/**
 * @param {string[]|string} list
 * @param {string} legacySingle
 * @returns {string[]}
 */
function normalizeCodeList(list, legacySingle) {
  const fromList = (Array.isArray(list) ? list : [list])
    .map(code => String(code || '').trim())
    .filter(Boolean);
  if (fromList.length) return [...new Set(fromList)];
  const single = String(legacySingle || '').trim();
  return single ? [single] : [];
}

/**
 * 馆藏查重：按所属分馆/馆藏地范围裁剪单件（皆空=不限）
 * @param {Object} catalogRow
 * @param {string[]} branchCodes
 * @param {string[]} collectionCodes
 * @returns {Object}
 */
function applyHoldingScopeToCatalogHit(catalogRow, branchCodes, collectionCodes) {
  const items = Array.isArray(catalogRow.physicalItems) ? catalogRow.physicalItems : [];
  if (!branchCodes.length && !collectionCodes.length) {
    return {
      ...catalogRow,
      physicalItems: items.map(item => ({ ...item }))
    };
  }
  const allowedBranchNames = new Set(
    initialBranchRows
      .filter(row => branchCodes.includes(String(row.code || '').trim()))
      .map(row => String(row.name || '').trim())
      .filter(Boolean)
  );
  const allowedCollectionKeys = new Set();
  initialCollectionRows.forEach(row => {
    if (!collectionCodes.includes(String(row.code || '').trim())) return;
    const code = String(row.code || '').trim();
    const name = String(row.name || '').trim();
    if (code) allowedCollectionKeys.add(code);
    if (name) allowedCollectionKeys.add(name);
  });
  collectionCodes.forEach(code => allowedCollectionKeys.add(code));

  const scopedItems = items.filter(item => {
    const owner = String(item.ownerLibrary || '').trim();
    const home = String(item.homeLocation || '').trim();
    if (branchCodes.length) {
      if (!owner || !allowedBranchNames.has(owner)) return false;
    }
    if (collectionCodes.length) {
      if (!home || !allowedCollectionKeys.has(home)) return false;
    }
    return true;
  }).map(item => ({ ...item }));

  return {
    ...catalogRow,
    physicalItems: scopedItems,
    unassignedCopyCount: scopedItems.filter(item => !String(item.homeLocation || '').trim()).length
  };
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
 * 统计馆藏树复本总数（含未关联馆藏地）
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
 * 统计书目全部馆藏复本数（优先单件明细条数，否则已分配馆藏地 + 未关联馆藏地）
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
  { key: 'holdingStatus', label: '馆藏状态' },
  { key: 'barcode', label: '条码号' },
  { key: 'callNo', label: '索书号' },
  { key: 'ownerLibrary', label: '所属馆', minWidth: 'min-w-[140px]' },
  { key: 'homeLocation', label: '所属馆藏地', minWidth: 'min-w-[160px]' },
  { key: 'currentLibrary', label: '所在馆', minWidth: 'min-w-[140px]' },
  { key: 'currentLocation', label: '所在馆藏地', minWidth: 'min-w-[160px]' },
  { key: 'circulationType', label: '借阅类型' },
  { key: 'volumeDesc', label: '卷册描述' },
  { key: 'binding', label: '装帧' },
  { key: 'shelfIndexClass', label: '排架标引分类', minWidth: 'min-w-[120px]' },
  { key: 'shelfIndex', label: '排架标引', minWidth: 'min-w-[120px]' },
  { key: 'itemPrice', label: '单件价格' },
  { key: 'checkInTime', label: '登到时间', minWidth: 'whitespace-nowrap' }
];

/** 馆藏状态枚举示例（原型展示用） */
export const HOLDING_DEDUP_ITEM_STATUS_OPTIONS = [
  '编目中',
  '已外借',
  '订购中',
  '剔除',
  '损坏',
  '在架',
  '阅览'
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
 * 按四级叶子筛选单件（馆藏地名称或未关联馆藏地）
 * @param {Object[]} items - 单件列表
 * @param {{ unassigned?: boolean, unassignedRoot?: boolean, ownerLibrary?: string, includeOwners?: string[], name?: string }|null} leafFilter
 * @returns {Object[]}
 */
export function filterHoldingDedupItemsByLeaf(items, leafFilter) {
  if (!leafFilter) return items || [];
  if (leafFilter.unassigned) {
    const list = items || [];
    if (leafFilter.unassignedRoot) {
      const includeOwners = new Set(
        (leafFilter.includeOwners || []).map(name => String(name || '').trim()).filter(Boolean)
      );
      return list.filter(row => {
        if (String(row.homeLocation || '').trim()) return false;
        const owner = String(row.ownerLibrary || '').trim();
        if (!owner) return true;
        return includeOwners.has(owner);
      });
    }
    const owner = String(leafFilter.ownerLibrary || '').trim();
    if (!owner) {
      return list.filter(row => !String(row.homeLocation || '').trim());
    }
    return list.filter(row => (
      !String(row.homeLocation || '').trim()
      && String(row.ownerLibrary || '').trim() === owner
    ));
  }
  const name = String(leafFilter.name || '').trim();
  if (!name) return items || [];
  return (items || []).filter(row => String(row.homeLocation || '').trim() === name);
}

/**
 * 深拷贝馆藏树节点（避免展示层改动污染示例源数据）
 * @param {Object[]} nodes
 * @returns {Object[]}
 */
function cloneHoldingTreeNodes(nodes = []) {
  return (nodes || []).map(node => ({
    ...node,
    ...(node.children ? { children: cloneHoldingTreeNodes(node.children) } : {})
  }));
}

/**
 * 节点是否可作为馆藏地叶子的父级（空子级，或已有叶子子节点）
 * @param {Object} node
 * @returns {boolean}
 */
function isCollectionParentNode(node) {
  if (!node) return false;
  const kids = node.children || [];
  if (!kids.length) return true;
  return kids.some(child => !child.children?.length);
}

/**
 * 收集名称匹配的节点及其深度
 * @param {Object[]} nodes
 * @param {string} name
 * @param {number} [depth=1]
 * @param {{ node: Object, depth: number }[]} [acc=[]]
 * @returns {{ node: Object, depth: number }[]}
 */
function collectNamedTreeNodes(nodes, name, depth = 1, acc = []) {
  const target = String(name || '').trim();
  (nodes || []).forEach(node => {
    if (String(node.name || '').trim() === target) {
      acc.push({ node, depth });
    }
    if (node.children?.length) {
      collectNamedTreeNodes(node.children, target, depth + 1, acc);
    }
  });
  return acc;
}

/**
 * 按所属馆名称匹配可挂四级馆藏地的父节点：优先深度 3，否则取最深的馆藏地父节点
 * @param {Object[]} nodes
 * @param {string} ownerName
 * @returns {Object|null}
 */
export function findOwnerCollectionParent(nodes, ownerName) {
  const matches = collectNamedTreeNodes(nodes, ownerName);
  if (!matches.length) return null;
  const atDepth3 = matches.find(entry => entry.depth === 3 && isCollectionParentNode(entry.node));
  if (atDepth3) return atDepth3.node;
  const parents = matches
    .filter(entry => isCollectionParentNode(entry.node))
    .sort((a, b) => b.depth - a.depth);
  return parents[0]?.node || null;
}

/**
 * 构建含「未关联馆藏地」节点的展示用馆藏树
 * - 所属馆与所属馆藏地皆空（及所属馆无法匹配树节点）：一级根「未关联馆藏地」
 * - 所属馆有值、所属馆藏地为空：挂在匹配所属馆节点下的四级叶子「未关联馆藏地」
 * - 一级机构仍将「首都图书馆」置顶；根级未关联固定排在末尾
 * @param {Object[]} [holdingTree=[]] - 已分配馆藏地的树
 * @param {Object[]|number} [physicalItemsOrCount=[]] - 单件明细；兼容旧调用传未关联件数（仅计入根级）
 * @returns {Object[]}
 */
export function buildDisplayHoldingTree(holdingTree = [], physicalItemsOrCount = []) {
  const nodes = cloneHoldingTreeNodes(holdingTree);
  const items = Array.isArray(physicalItemsOrCount)
    ? physicalItemsOrCount
    : [];

  // 兼容旧签名：第二参为未关联件数时，全部记入一级根节点
  if (!Array.isArray(physicalItemsOrCount)) {
    const count = Number(physicalItemsOrCount) || 0;
    const pinned = pinCapitalLibraryFirst(nodes);
    if (count <= 0) return pinned;
    return [
      ...pinned,
      {
        name: '未关联馆藏地',
        unassigned: true,
        unassignedRoot: true,
        includeOwners: [],
        copyCount: count
      }
    ];
  }

  const rootItems = [];
  const unmatchedOwners = new Set();
  /** @type {Map<string, Object[]>} */
  const ownerGroups = new Map();

  items.forEach(item => {
    if (String(item?.homeLocation || '').trim()) return;
    const owner = String(item?.ownerLibrary || '').trim();
    if (!owner) {
      rootItems.push(item);
      return;
    }
    if (!ownerGroups.has(owner)) ownerGroups.set(owner, []);
    ownerGroups.get(owner).push(item);
  });

  ownerGroups.forEach((ownerItems, owner) => {
    const parent = findOwnerCollectionParent(nodes, owner);
    if (!parent) {
      rootItems.push(...ownerItems);
      unmatchedOwners.add(owner);
      return;
    }
    parent.children = [
      ...(parent.children || []),
      {
        name: '未关联馆藏地',
        unassigned: true,
        ownerLibrary: owner,
        copyCount: ownerItems.length
      }
    ];
  });

  const pinned = pinCapitalLibraryFirst(nodes);
  if (!rootItems.length) return pinned;

  return [
    ...pinned,
    {
      name: '未关联馆藏地',
      unassigned: true,
      unassignedRoot: true,
      includeOwners: [...unmatchedOwners],
      copyCount: rootItems.length
    }
  ];
}

/**
 * 馆藏树一级：有「首都图书馆」时置顶，其余保持原相对序；二/三/四级不改。
 * @param {Object[]} [nodes=[]]
 * @returns {Object[]}
 */
export function pinCapitalLibraryFirst(nodes = []) {
  if (!nodes?.length) return nodes || [];
  const idx = nodes.findIndex(node => String(node.name || '').trim() === '首都图书馆');
  if (idx <= 0) return nodes;
  const next = [...nodes];
  const [capital] = next.splice(idx, 1);
  next.unshift(capital);
  return next;
}

/**
 * 分馆优先序 → 编码/名称均可查的排序权重
 * @param {string[]} branchCodes
 * @param {Object[]} [branchRows=[]]
 * @returns {Map<string, number>}
 */
export function buildBranchPriorityRankMap(branchCodes = [], branchRows = []) {
  const codeToName = new Map(
    (branchRows || []).map(row => [String(row.code || '').trim(), String(row.name || '').trim()])
  );
  const rank = new Map();
  (branchCodes || []).forEach((code, index) => {
    const normalized = String(code || '').trim();
    if (!normalized) return;
    if (!rank.has(normalized)) rank.set(normalized, index);
    const name = codeToName.get(normalized);
    if (name && !rank.has(name)) rank.set(name, index);
  });
  return rank;
}

/**
 * 馆藏树按优先所属馆排序（所属馆在三级）
 * - 四级：同父下按优先序排；未命中排后、稳定
 * - 二级 / 一级：取子孙三级中最优（最小）优先序作为排序键，同级比较；不跨父节点搬迁子树
 * - 四级叶子（馆藏地）保持原相对顺序
 * @param {Object[]} nodes
 * @param {string[]} branchCodes
 * @param {Object[]} [branchRows=[]]
 * @returns {Object[]}
 */
export function sortHoldingTreeByBranchPriority(nodes, branchCodes, branchRows = []) {
  if (!nodes?.length || !branchCodes?.length) return nodes || [];
  const rank = buildBranchPriorityRankMap(branchCodes, branchRows);
  const fallback = branchCodes.length;
  return sortHoldingTreeLevelByOwnerPriority(nodes, rank, fallback, 1);
}

/**
 * @param {Object[]} nodes
 * @param {Map<string, number>} rank
 * @param {number} fallback
 * @param {number} depth - 1 一级 / 2 二级 / 3 三级 / ≥4 叶子层
 * @returns {Object[]}
 */
function sortHoldingTreeLevelByOwnerPriority(nodes, rank, fallback, depth) {
  if (!nodes?.length) return nodes || [];

  const decorated = nodes.map((node, index) => {
    const children = node.children?.length
      ? sortHoldingTreeLevelByOwnerPriority(node.children, rank, fallback, depth + 1)
      : node.children;
    const nextNode = children === node.children ? node : { ...node, children };
    return {
      node: nextNode,
      index,
      sortKey: depth >= 4
        ? fallback
        : depth === 3
          ? getOwnerNodeRank(nextNode.name, rank, fallback)
          : getBestDescendantOwnerRank(nextNode, rank, fallback)
    };
  });

  // 四级叶子层不重排；一～三级同级按 sortKey 排
  if (depth >= 4) return decorated.map(entry => entry.node);

  return decorated
    .sort((a, b) => {
      if (a.sortKey !== b.sortKey) return a.sortKey - b.sortKey;
      return a.index - b.index;
    })
    .map(entry => entry.node);
}

/**
 * @param {string} name
 * @param {Map<string, number>} rank
 * @param {number} fallback
 * @returns {number}
 */
function getOwnerNodeRank(name, rank, fallback) {
  const key = String(name || '').trim();
  return key && rank.has(key) ? rank.get(key) : fallback;
}

/**
 * 祖先节点排序键 = 子孙三级所属馆中的最优优先序
 * @param {Object} node
 * @param {Map<string, number>} rank
 * @param {number} fallback
 * @param {number} [depth=1]
 * @returns {number}
 */
function getBestDescendantOwnerRank(node, rank, fallback, depth = 1) {
  if (!node) return fallback;
  if (depth === 3) return getOwnerNodeRank(node.name, rank, fallback);
  if (depth > 3 || !node.children?.length) return fallback;
  let best = fallback;
  node.children.forEach(child => {
    const childRank = getBestDescendantOwnerRank(child, rank, fallback, depth + 1);
    if (childRank < best) best = childRank;
  });
  return best;
}

/**
 * 单件列表按所属馆优先序排序（未命中排后，稳定）
 * @param {Object[]} items
 * @param {string[]} branchCodes
 * @param {Object[]} [branchRows=[]]
 * @returns {Object[]}
 */
export function sortPhysicalItemsByBranchPriority(items, branchCodes, branchRows = []) {
  if (!items?.length || !branchCodes?.length) return items || [];
  const rank = buildBranchPriorityRankMap(branchCodes, branchRows);
  const fallback = branchCodes.length;
  return [...items]
    .map((item, index) => ({ item, index }))
    .sort((a, b) => {
      const owner = String(a.item.ownerLibrary || '').trim();
      const other = String(b.item.ownerLibrary || '').trim();
      const ra = rank.has(owner) ? rank.get(owner) : fallback;
      const rb = rank.has(other) ? rank.get(other) : fallback;
      if (ra !== rb) return ra - rb;
      return a.index - b.index;
    })
    .map(entry => entry.item);
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
  const sampleScope = mergeSubscriberDedupScope(subscriberRows, ['ceshi']);
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

  samples.forEach(({ orderLineNo, sample }) => {
    const target = lines.find(item => item.orderLineNo === orderLineNo);
    if (!target) return;
    Object.assign(target, {
      ...sample,
      lastDedupBranchCodes: [...sampleScope.branchCodes],
      lastDedupCollectionCodes: [...sampleScope.collectionCodes]
    });
    // 示例模拟「查重前书目记录号为空」：馆藏命中后自动关联第一条，书目页签操作显示「取消关联」
    if (sample.holdingDedupResults?.length) {
      target.bibRecordNo = '';
      autoAssociateFirstHoldingBib(target);
    }
  });

  const line1 = lines.find(item => item.orderLineNo === 'PG001B202406030001-1');
  const line5 = lines.find(item => item.orderLineNo === 'PG001B202406030001-5');
  if (line1 && line5) {
    line1.orderDedupResults = [line5];
    line5.orderDedupResults = [line1];
  }

  return lines;
}
