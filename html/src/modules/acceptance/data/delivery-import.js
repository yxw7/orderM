import { getReceiveOrderRows, isChineseAcceptanceLang, parseReceiveCounts } from '@/modules/acceptance/data/receive-by-item';

/** @typedef {{ value: string, label: string, matchable?: boolean, required?: boolean }} StandardField */

export const DELIVERY_IMPORT_STEPS = [
  { step: 1, title: '上传文件' },
  { step: 2, title: '列名映射' },
  { step: 3, title: '选择匹配字段' },
  { step: 4, title: '匹配预览' },
  { step: 5, title: '确认提交' }
];

/** 创建向导步骤（异步任务架构，①～③ 配置 + ④ 创建任务） */
export const DELIVERY_IMPORT_CREATE_STEPS = [
  ...DELIVERY_IMPORT_STEPS.slice(0, 3),
  { step: 4, title: '创建任务' }
];

export const PREVIEW_MATCHING_DURATION_MS = 8000;

export const EXCHANGE_REASON_OPTIONS = [
  '缺页', '错页', '装订错误', '纸张破损', '装订不牢', '书脊开裂', '被污染或损坏'
];

export const RETURN_REASON_OPTIONS = [...EXCHANGE_REASON_OPTIONS];

const ALLOWED_EXTENSIONS = ['.xls', '.xlsx'];

/**
 * @param {string} fileName
 * @returns {boolean}
 */
export function isAllowedDeliveryFileName(fileName) {
  const lower = (fileName || '').toLowerCase();
  return ALLOWED_EXTENSIONS.some(ext => lower.endsWith(ext));
}

/**
 * @param {{ value?: string, label: string, matchable?: boolean, required?: boolean }} overrides
 * @returns {StandardField}
 */
function stdField(value, label, overrides = {}) {
  return { value, label, matchable: true, ...overrides };
}

/** @type {Record<string, StandardField[]>} */
export const STANDARD_FIELD_POOLS = {
  book_zh: [
    stdField('receiveQty', '发货套数', { required: true, matchable: false }),
    stdField('volCount', '套内册数'),
    stdField('sets', '套数'),
    stdField('title', '正题名'),
    stdField('isbn', 'ISBN'),
    stdField('subTitle', '副题名'),
    stdField('volNo', '分卷号'),
    stdField('volName', '分卷名'),
    stdField('classNo', '分类号'),
    stdField('publisher', '出版社'),
    stdField('author', '作者'),
    stdField('pubYear', '出版年'),
    stdField('price', '定价'),
    stdField('edition', '版本'),
    stdField('series', '丛编'),
    stdField('subject', '主题词'),
    stdField('audience', '读者对象'),
    stdField('binding', '装帧形式'),
    stdField('size', '尺寸'),
    stdField('textLang', '正文语种'),
    stdField('generalNote', '一般性附注'),
    stdField('summary', '图书简介'),
    stdField('remark', '备注'),
    stdField('volumeCount', '卷数'),
    stdField('pubPlace', '出版地')
  ],
  book_foreign: [
    stdField('receiveQty', '发货套数', { required: true, matchable: false }),
    stdField('fullVolCount', '全套册数'),
    stdField('sets', '套数'),
    stdField('isbn', 'ISBN'),
    stdField('subjectMajor', '学科大类'),
    stdField('subjectDetail', '学科细分'),
    stdField('clcNo', '中图分类号'),
    stdField('cnTitle', '中译名'),
    stdField('title', '题名'),
    stdField('subTitle', '副题名'),
    stdField('author', '责任者'),
    stdField('series', '丛编'),
    stdField('publisher', '出版社'),
    stdField('binding', '装帧形式'),
    stdField('pubDate', '出版日期'),
    stdField('edition', '版次'),
    stdField('pages', '页数'),
    stdField('currency', '币种'),
    stdField('price', '价格'),
    stdField('subject', '主题词'),
    stdField('audience', '读者对象'),
    stdField('size', '尺寸'),
    stdField('lang', '语种'),
    stdField('summary', '简介'),
    stdField('isbnConcise', '精简装ISBN对照'),
    stdField('holdingInfo', '馆藏信息'),
    stdField('reviewLevel', '审读级别'),
    stdField('award', '获奖信息'),
    stdField('toc', '目次信息'),
    stdField('volNo', '分卷号'),
    stdField('volName', '分卷名'),
    stdField('authorBio', '作者简介'),
    stdField('bookReview', '书评'),
    stdField('remark', '备注')
  ],
  av_zh: [
    stdField('receiveQty', '发货套数', { required: true, matchable: false }),
    stdField('pieceCount', '套内件数'),
    stdField('sets', '套数'),
    stdField('isbn', 'ISBN'),
    stdField('isrc', 'ISRC'),
    stdField('title', '题名'),
    stdField('carrier', '载体'),
    stdField('publisher', '出版社'),
    stdField('format', '版本/格式'),
    stdField('author', '著者'),
    stdField('currency', '币种'),
    stdField('listPrice', '码洋'),
    stdField('vinylColor', '彩胶颜色'),
    stdField('limitedNo', '限量编号'),
    stdField('label', '厂牌'),
    stdField('seriesName', '系列名称'),
    stdField('isSigned', '是否签名'),
    stdField('isOldRecord', '是否老唱片'),
    stdField('award', '获奖信息'),
    stdField('bjPublisher', '北京出版社'),
    stdField('category', '分类'),
    stdField('discNo', '盘号'),
    stdField('oldRecordBrand', '老唱片品牌'),
    stdField('operaType', '剧种'),
    stdField('era', '年代'),
    stdField('remark', '备注')
  ],
  av_foreign: [
    stdField('receiveQty', '发货套数', { required: true, matchable: false }),
    stdField('pieceCount', '套内件数'),
    stdField('sets', '套数'),
    stdField('isrc', 'ISRC'),
    stdField('title', '题名'),
    stdField('carrier', '载体'),
    stdField('barcode', '商品条码'),
    stdField('catalogNo', '目录号'),
    stdField('origTitle', '外文原文题名'),
    stdField('publisher', '出版方'),
    stdField('listPrice', '码洋'),
    stdField('currency', '币种'),
    stdField('remark', '备注'),
    stdField('label', '厂牌')
  ]
};

/** @type {Record<string, string>} */
export const COLUMN_AUTO_MAP = {
  ISBN: 'isbn',
  书名: 'title',
  作者: 'author',
  出版社: 'publisher',
  每套册数: 'volCount',
  总套数: 'receiveQty',
  RMB单价: 'price',
  RMB码洋: 'listPrice'
};

/** 模拟 Excel 表头与示例行（原型演示） */
export const MOCK_FILE_COLUMNS = [
  'ISBN', '书名', '作者', '出版社', '每套册数', '总套数', 'RMB单价'
];

/** @type {Record<string, string>[]} */
export const MOCK_PARSED_ROWS = [
  { ISBN: '9787565855375', 书名: '地质勘查工程与生态修复', 作者: '张昕等', 出版社: '地质出版社', 每套册数: '1', 总套数: '3', RMB单价: '58.00' },
  { ISBN: '9787559826398', 书名: 'Python从入门到实践', 作者: '埃里克·马瑟斯', 出版社: '人民邮电出版社', 每套册数: '1', 总套数: '2', RMB单价: '89.00' },
  { ISBN: '9789999999999', 书名: '无匹配示例书目', 作者: '测试', 出版社: '测试社', 每套册数: '1', 总套数: '1', RMB单价: '10.00' },
  { ISBN: '9787559826398', 书名: '拆掉思维里的墙', 作者: '古典', 出版社: '北京联合出版公司', 每套册数: '1', 总套数: '5', RMB单价: '45.00' }
];

const TEMPLATE_STORAGE_KEY = 'orderm_delivery_import_templates';

/**
 * @param {string} resourceType
 * @param {string} lang
 * @returns {string}
 */
export function getFieldProfileKey(resourceType, lang) {
  if (resourceType === '纸质书') return isChineseAcceptanceLang(lang) ? 'book_zh' : 'book_foreign';
  if (resourceType === '视听资料') return isChineseAcceptanceLang(lang) ? 'av_zh' : 'av_foreign';
  return 'book_zh';
}

/**
 * @param {{ type?: string, lang?: string, supplier?: string, method?: string }} ctx
 * @returns {StandardField[]}
 */
export function getActiveStandardFields(ctx) {
  const key = getFieldProfileKey(ctx?.type || '', ctx?.lang || '');
  const pool = STANDARD_FIELD_POOLS[key] || STANDARD_FIELD_POOLS.book_zh;
  return [{ value: '', label: '不映射', matchable: false }, ...pool];
}

/**
 * 根据导入向导列映射得到预览展示的标准字段（按文件列顺序，去重）
 * @param {Record<string, string>} columnMapping 文件列 → 标准字段
 * @param {{ type?: string, lang?: string }} ctx
 * @param {string[]} [fileColumns] 上传文件列名顺序
 * @returns {StandardField[]}
 */
export function getPreviewMappedColumns(columnMapping, ctx, fileColumns) {
  const pool = getActiveStandardFields(ctx).filter(f => f.value);
  const byValue = new Map(pool.map(f => [f.value, f]));
  const seen = new Set();
  /** @type {StandardField[]} */
  const cols = [];

  const orderedFileCols = fileColumns?.length
    ? fileColumns
    : Object.keys(columnMapping || {});

  orderedFileCols.forEach(fileCol => {
    const stdKey = columnMapping?.[fileCol];
    if (!stdKey || seen.has(stdKey)) return;
    const field = byValue.get(stdKey);
    if (!field) return;
    seen.add(stdKey);
    cols.push(field);
  });

  Object.values(columnMapping || {}).forEach(stdKey => {
    if (!stdKey || seen.has(stdKey)) return;
    const field = byValue.get(stdKey);
    if (!field) return;
    seen.add(stdKey);
    cols.push(field);
  });

  return cols;
}

/**
 * 预览主表动态列（已映射字段，不含发货套数）
 * @param {Record<string, string>} columnMapping
 * @param {{ type?: string, lang?: string }} ctx
 * @param {string[]} [fileColumns]
 * @returns {StandardField[]}
 */
export function getPreviewDisplayColumns(columnMapping, ctx, fileColumns) {
  return getPreviewMappedColumns(columnMapping, ctx, fileColumns).filter(f => f.value !== 'receiveQty');
}

/**
 * 预览主表是否展示独立「发货套数」列
 * @param {Record<string, string>} columnMapping
 * @param {{ type?: string, lang?: string }} ctx
 * @param {string[]} [fileColumns]
 * @returns {boolean}
 */
export function getPreviewShowReceiveQtyColumn(columnMapping, ctx, fileColumns) {
  return getPreviewMappedColumns(columnMapping, ctx, fileColumns).some(f => f.value === 'receiveQty');
}

/**
 * @param {string[]} fileColumns
 * @param {{ type?: string, lang?: string, supplier?: string, method?: string }} ctx
 * @returns {Record<string, string>}
 */
export function buildDefaultColumnMapping(fileColumns, ctx) {
  /** @type {Record<string, string>} */
  const mapping = {};
  const allowed = new Set(getActiveStandardFields(ctx).map(f => f.value).filter(Boolean));
  fileColumns.forEach(col => {
    const std = COLUMN_AUTO_MAP[col];
    if (std && allowed.has(std)) mapping[col] = std;
  });
  return mapping;
}

/**
 * @param {{ supplier?: string, type?: string, lang?: string }} ctx
 * @returns {string}
 */
export function buildTemplateProfileKey(ctx) {
  return [ctx?.supplier || '', ctx?.type || '', ctx?.lang || ''].join('|');
}

/**
 * @returns {Record<string, { templates: { name: string, mapping: Record<string, string> }[] }>}
 */
function loadTemplateStore() {
  try {
    const raw = localStorage.getItem(TEMPLATE_STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

/**
 * @param {Record<string, { templates: { name: string, mapping: Record<string, string> }[] }>} store
 */
function saveTemplateStore(store) {
  localStorage.setItem(TEMPLATE_STORAGE_KEY, JSON.stringify(store));
}

/**
 * @param {Record<string, unknown>} raw
 * @returns {{ templates: { name: string, mapping: Record<string, string> }[] }}
 */
function normalizeProfileBucket(raw) {
  if (!raw) return { templates: [] };
  if (typeof raw === 'object' && Array.isArray(raw.templates)) {
    return { templates: raw.templates.filter(t => t?.name && t?.mapping) };
  }
  /** 兼容旧版：profileKey 直接存 mapping 对象 */
  if (typeof raw === 'object' && !Array.isArray(raw)) {
    const values = Object.values(raw);
    const looksLikeMapping = values.length > 0 && values.every(v => typeof v === 'string');
    if (looksLikeMapping) {
      return { templates: [{ name: '默认模板', mapping: { ...raw } }] };
    }
  }
  return { templates: [] };
}

/**
 * @param {{ supplier?: string, type?: string, lang?: string }} ctx
 * @returns {{ name: string, mapping: Record<string, string> }[]}
 */
export function listMappingTemplates(ctx) {
  const store = loadTemplateStore();
  const bucket = normalizeProfileBucket(store[buildTemplateProfileKey(ctx)]);
  return bucket.templates.map(t => ({ name: t.name, mapping: { ...t.mapping } }));
}

/**
 * @param {{ supplier?: string, type?: string, lang?: string }} ctx
 * @param {string} name
 * @returns {Record<string, string>|null}
 */
export function getMappingTemplateByName(ctx, name) {
  if (!name) return null;
  const found = listMappingTemplates(ctx).find(t => t.name === name);
  return found?.mapping || null;
}

/**
 * @param {{ supplier?: string, type?: string, lang?: string }} ctx
 * @param {string} name
 * @param {Record<string, string>} mapping
 */
export function saveMappingTemplate(ctx, name, mapping) {
  const trimmed = (name || '').trim();
  if (!trimmed) return;
  const profileKey = buildTemplateProfileKey(ctx);
  const store = loadTemplateStore();
  const bucket = normalizeProfileBucket(store[profileKey]);
  const idx = bucket.templates.findIndex(t => t.name === trimmed);
  const entry = { name: trimmed, mapping: { ...mapping } };
  if (idx >= 0) bucket.templates[idx] = entry;
  else bucket.templates.push(entry);
  store[profileKey] = bucket;
  saveTemplateStore(store);
}

/**
 * @param {{ supplier?: string, type?: string, lang?: string }} ctx
 * @param {string} name
 */
export function deleteMappingTemplate(ctx, name) {
  const trimmed = (name || '').trim();
  if (!trimmed) return;
  const profileKey = buildTemplateProfileKey(ctx);
  const store = loadTemplateStore();
  const bucket = normalizeProfileBucket(store[profileKey]);
  bucket.templates = bucket.templates.filter(t => t.name !== trimmed);
  if (bucket.templates.length) store[profileKey] = bucket;
  else delete store[profileKey];
  saveTemplateStore(store);
}

/** spec §5.1：可参与匹配的订单行状态 */
export const MATCHABLE_LINE_STATUSES = ['已发订', '处理中'];

/** 选择订单行弹窗表格列（与 PRD 关联订单行列表字段对齐） */
export const PICK_ORDER_LINE_COLUMNS = [
  { key: 'systemOrderNo', label: '订单号' },
  { key: 'location', label: '馆址' },
  { key: 'orderLine', label: '订单行号' },
  { key: 'title', label: '正题名' },
  { key: 'resourceId', label: '资源标识' },
  { key: 'carrier', label: '载体' },
  { key: 'author', label: '作者' },
  { key: 'publisher', label: '出版社' },
  { key: 'pubYear', label: '出版时间' },
  { key: 'price', label: '定价' },
  { key: 'currency', label: '币种' },
  { key: 'copiesInSet', label: '套内册数' },
  { key: 'orderedSets', label: '套数' },
  { key: 'lineStatus', label: '行状态' },
  { key: 'acceptanceStatus', label: '验收状态' },
  { key: 'counts', label: '发/收/换/退/撤订' }
];

/**
 * 从订单行号解析系统订单号（如 st00120250921005-3 → st00120250921005）
 * @param {string} orderLine
 * @returns {string}
 */
export function parseSystemOrderNo(orderLine) {
  const text = String(orderLine || '').trim();
  if (!text) return '—';
  const dashIndex = text.lastIndexOf('-');
  return dashIndex > 0 ? text.slice(0, dashIndex) : text;
}

/**
 * 构建订单行资源标识展示值
 * @param {object} row
 * @returns {string}
 */
export function buildOrderLineResourceId(row) {
  const parts = [row.isbn, row.isrc, row.barcode, row.catalogNo]
    .map(value => String(value || '').trim())
    .filter(Boolean);
  return parts.length ? parts.join(';') : '—';
}

/**
 * @param {string|number|null|undefined} value
 * @returns {string|number}
 */
function pickOrderLineDisplayValue(value) {
  if (value === null || value === undefined || value === '') return '—';
  return value;
}

/**
 * 格式化选择订单行弹窗展示行
 * @param {object} row 原始订单行
 * @returns {object}
 */
export function formatPickOrderLineDisplayRow(row) {
  const pendingSets = row.pendingSets ?? 0;
  return {
    ...row,
    systemOrderNo: parseSystemOrderNo(row.orderLine),
    resourceId: buildOrderLineResourceId(row),
    pubYear: pickOrderLineDisplayValue(row.pubYear ?? row.publishYear ?? row.publishTime),
    copiesInSet: pickOrderLineDisplayValue(row.copies ?? row.copiesInSet ?? row.piecesInSet),
    lineStatus: row.lineStatus || '已发订',
    acceptanceStatus: row.acceptanceStatus || (pendingSets > 0 ? '待收货' : '收货完成'),
    carrier: pickOrderLineDisplayValue(row.carrier),
    publisher: pickOrderLineDisplayValue(row.publisher),
    author: pickOrderLineDisplayValue(row.author),
    title: pickOrderLineDisplayValue(row.title),
    price: pickOrderLineDisplayValue(row.price ?? row.actualPrice),
    currency: pickOrderLineDisplayValue(row.currency),
    orderedSets: pickOrderLineDisplayValue(row.orderedSets),
    counts: row.counts || '0/0/0/0/0'
  };
}

/**
 * 检索选择订单行池
 * @param {object[]} rows
 * @param {{ field?: string, keyword?: string }} search
 * @returns {object[]}
 */
export function filterPickOrderLineRows(rows, search) {
  const keyword = (search.keyword || '').trim().toLowerCase();
  if (!keyword) return rows;
  const field = search.field || 'orderLine';
  return rows.filter(row => {
    const display = formatPickOrderLineDisplayRow(row);
    if (field === 'resourceId') {
      return String(display.resourceId).toLowerCase().includes(keyword);
    }
    const value = String(display[field] ?? row[field] ?? '').toLowerCase();
    return value.includes(keyword);
  });
}

/**
 * 全角转半角（spec §5.2 文本规范化）
 * @param {string} str
 * @returns {string}
 */
function toHalfWidth(str) {
  return String(str ?? '')
    .replace(/\u3000/g, ' ')
    .replace(/[\uff01-\uff5e]/g, ch => String.fromCharCode(ch.charCodeAt(0) - 0xfee0));
}

/**
 * 规范化字段值用于精确匹配（spec §5.2：去首尾空格、全半角统一、ISBN 去横线、大小写统一）
 * @param {string|number} value
 * @param {string} fieldKey
 * @returns {string}
 */
export function normalizeFieldValue(value, fieldKey) {
  let v = toHalfWidth(String(value ?? '')).trim();
  if (fieldKey === 'isbn') {
    v = v.replace(/-/g, '').replace(/\s/g, '').toLowerCase();
  } else {
    v = v.toLowerCase();
  }
  return v;
}

/**
 * 从订单行读取标准字段原值（用于匹配与预览展示）
 * @param {object} orderLine
 * @param {string} fieldKey
 * @returns {string|number}
 */
export function getOrderLineMatchFieldValue(orderLine, fieldKey) {
  if (fieldKey === 'receiveQty') return orderLine.pendingSets ?? 0;
  if (fieldKey === 'isbn') return orderLine.isbn || '';
  if (fieldKey === 'title') return orderLine.title || '';
  if (fieldKey === 'author') return orderLine.author || '';
  if (fieldKey === 'publisher') return orderLine.publisher || '';
  if (fieldKey === 'carrier') return orderLine.carrier || '';
  if (fieldKey === 'barcode') return orderLine.barcode || '';
  if (fieldKey === 'catalogNo') return orderLine.catalogNo || '';
  if (fieldKey === 'isrc') return orderLine.isrc || '';
  if (fieldKey === 'edition') return orderLine.edition || '';
  if (fieldKey === 'format') return orderLine.format || '';
  if (fieldKey === 'price') return orderLine.price ?? orderLine.actualPrice ?? '';
  if (fieldKey === 'volCount' || fieldKey === 'pieceCount') return orderLine.copies ?? '';
  return orderLine[fieldKey] ?? '';
}

/**
 * 所选匹配字段精确比对（spec §5.2 / §5.3，仅比对所选字段）
 * @param {Record<string, string|number>} shipValues
 * @param {object} orderLine
 * @param {string[]} matchFields
 * @returns {boolean}
 */
export function fieldsExactMatch(shipValues, orderLine, matchFields) {
  return matchFields.every(field => {
    const shipVal = normalizeFieldValue(shipValues[field], field);
    if (!shipVal) return false;
    const lineVal = getOrderLineMatchFieldValue(orderLine, field);
    return normalizeFieldValue(lineVal, field) === shipVal;
  });
}

/**
 * 获取可参与匹配的订单行池（spec §5.1 检索范围）
 * @param {{ type?: string, lang?: string, supplier?: string, method?: string }} ctx
 * @returns {object[]}
 */
export function getMatchableOrderLines(ctx) {
  return getReceiveOrderRows(ctx).filter(row => {
    if ((row.pendingSets ?? 0) <= 0) return false;
    const lineStatus = row.lineStatus || '已发订';
    if (!MATCHABLE_LINE_STATUSES.includes(lineStatus)) return false;
    if (ctx?.supplier && row.supplier && row.supplier !== ctx.supplier) return false;
    if (ctx?.method && row.method && row.method !== ctx.method) return false;
    return true;
  });
}

/**
 * @param {object} orderLine
 * @param {string[]} mappedFieldKeys
 * @returns {Record<string, string|number>}
 */
export function buildOrderLineFieldValues(orderLine, mappedFieldKeys) {
  /** @type {Record<string, string|number>} */
  const values = {};
  mappedFieldKeys.forEach(key => {
    values[key] = getOrderLineMatchFieldValue(orderLine, key);
  });
  return values;
}

/**
 * @param {number} shipQty
 * @param {number} totalPending
 * @returns {'success'|'partial'|'over'|'fail'}
 */
export function resolvePreviewMatchStatus(shipQty, totalPending) {
  if (totalPending <= 0) return 'fail';
  if (shipQty > totalPending) return 'over';
  if (shipQty < totalPending) return 'partial';
  return 'success';
}

/**
 * 按发订时间由远到近分配发货套数
 * @param {object[]} lines
 * @param {number} shipQty
 * @returns {object[]}
 */
export function allocateShipQtyByOrderTime(lines, shipQty) {
  const sorted = [...lines].sort((a, b) => String(a.orderTime).localeCompare(String(b.orderTime)));
  let remaining = shipQty;
  return sorted
    .map(line => {
      const pending = line.pendingSets ?? 0;
      const allocated = Math.min(pending, Math.max(remaining, 0));
      remaining -= allocated;
      return { line, allocated };
    })
    .filter(item => item.allocated > 0);
}

/**
 * @param {Record<string, string>[]} parsedRows
 * @param {Record<string, string>} columnMapping
 * @returns {Record<string, string|number>[]}
 */
export function buildShipFieldValues(parsedRows, columnMapping) {
  return parsedRows.map(raw => {
    /** @type {Record<string, string|number>} */
    const fieldValues = {};
    Object.entries(columnMapping).forEach(([fileCol, stdFieldKey]) => {
      if (!stdFieldKey) return;
      fieldValues[stdFieldKey] = raw[fileCol] ?? '';
    });
    if (fieldValues.receiveQty !== undefined) {
      fieldValues.receiveQty = Number(fieldValues.receiveQty) || 0;
    }
    return fieldValues;
  });
}

/**
 * 子行处置套数合计（收货 + 换货 + 退货）
 * @param {object} child
 * @returns {number}
 */
export function getChildDispositionTotal(child) {
  return (Number(child.receive) || 0) + (Number(child.exchange) || 0) + (Number(child.ret) || 0);
}

/**
 * 主行已分配套数合计（spec §6.1 馆址拆分分配额度之和）
 * @param {object} row
 * @returns {number}
 */
export function calcRowAllocatedTotal(row) {
  return (row.children || []).reduce((sum, ch) => sum + (Number(ch.allocated) || 0), 0);
}

/**
 * 主行本次收货套数合计
 * @param {object} row
 * @returns {number}
 */
export function calcRowReceiveTotal(row) {
  return (row.children || []).reduce((sum, ch) => sum + (Number(ch.receive) || 0), 0);
}

/**
 * 主行差异摘要（发货单与订单行所选匹配字段比对）
 * @param {Record<string, string|number>} fieldValues
 * @param {object[]} children
 * @param {string[]} matchFields
 * @param {{ type?: string, lang?: string }} ctx
 * @returns {string}
 */
export function buildRowDiffSummary(fieldValues, children, matchFields, ctx) {
  if (!children.length || !matchFields.length) return '—';
  const fields = getActiveStandardFields(ctx);
  const labelByKey = Object.fromEntries(fields.map(f => [f.value, f.label]));
  /** @type {string[]} */
  const diffLabels = [];
  matchFields.forEach(field => {
    const shipVal = normalizeFieldValue(fieldValues[field], field);
    if (!shipVal) return;
    const hasMismatch = children.some(ch => {
      const lineVal = normalizeFieldValue(ch.fieldValues?.[field], field);
      return lineVal && shipVal !== lineVal;
    });
    if (hasMismatch) diffLabels.push(labelByKey[field] || field);
  });
  return diffLabels.length ? diffLabels.join('、') + '不一致' : '无';
}

/**
 * 人工选行后重算主行状态（spec §6.2 / §7.4）
 * @param {number} shipQty
 * @param {object[]} selectedLines
 * @returns {'success'|'partial'|'over'|'fail'}
 */
export function resolveRowStatusAfterPick(shipQty, selectedLines) {
  if (!selectedLines.length) return 'fail';
  const totalPending = selectedLines.reduce((s, l) => s + (l.pendingSets ?? 0), 0);
  return resolvePreviewMatchStatus(shipQty, totalPending);
}

/**
 * @param {Record<string, string|number>} fieldValues
 * @param {string[]} matchFields
 * @param {object[]} orderLines
 * @param {string[]} mappedDisplayFields
 * @returns {{ status: string, children: object[] }}
 */
export function matchShipRow(fieldValues, matchFields, orderLines, mappedDisplayFields) {
  const shipQty = Number(fieldValues.receiveQty) || 0;
  const hits = orderLines.filter(line => fieldsExactMatch(fieldValues, line, matchFields));
  if (!hits.length) {
    return { status: 'fail', children: [] };
  }
  const totalPending = hits.reduce((sum, line) => sum + (line.pendingSets ?? 0), 0);
  const status = resolvePreviewMatchStatus(shipQty, totalPending);
  const allocated = allocateShipQtyByOrderTime(hits, shipQty);
  const children = allocated
    .filter(item => item.allocated > 0)
    .map(({ line, allocated: alloc }) => ({
      lineNo: line.orderLine,
      location: line.location,
      systemOrderNo: (line.orderLine || '').split('-')[0] || '—',
      pending: line.pendingSets ?? 0,
      allocated: alloc,
      fieldValues: buildOrderLineFieldValues(line, mappedDisplayFields),
      receive: alloc,
      exchange: 0,
      exchangeReason: '',
      ret: 0,
      returnReason: ''
    }));
  return { status, children };
}

/**
 * @param {Record<string, string|number>[]} shipRows
 * @param {string[]} matchFields
 * @param {{ type?: string, lang?: string, supplier?: string, method?: string }} ctx
 * @param {string[]} mappedDisplayFields
 * @returns {object[]}
 */
export function buildPreviewRows(shipRows, matchFields, ctx, mappedDisplayFields) {
  const orderLines = getMatchableOrderLines(ctx);
  return shipRows.map((fieldValues, index) => {
    const { status, children } = matchShipRow(fieldValues, matchFields, orderLines, mappedDisplayFields);
    return {
      id: index + 1,
      status,
      expanded: false,
      fieldValues,
      children
    };
  });
}

/**
 * @param {Record<string, string>} columnMapping
 * @param {{ type?: string, lang?: string, supplier?: string, method?: string }} ctx
 * @returns {string|null}
 */
export function validateMappingStep(columnMapping, ctx) {
  const fields = getActiveStandardFields(ctx);
  const hasReceiveQty = Object.values(columnMapping).includes('receiveQty');
  if (!hasReceiveQty) return '请映射「发货套数」字段';
  const matchableMapped = fields.some(
    f => f.matchable !== false && f.value && Object.values(columnMapping).includes(f.value)
  );
  if (!matchableMapped) return '请至少映射一个可用于匹配的字段';
  return null;
}

/**
 * 解析默认匹配字段（spec §5.2：默认勾选 ISBN、正题名/题名，若已映射）
 * @param {Record<string, string>} columnMapping
 * @param {{ type?: string, lang?: string, supplier?: string, method?: string }} ctx
 * @returns {string[]}
 */
export function resolveDefaultMatchFields(columnMapping, ctx) {
  const mapped = new Set(Object.values(columnMapping).filter(Boolean));
  /** @type {string[]} */
  const defaults = [];
  if (mapped.has('isbn')) defaults.push('isbn');
  if (mapped.has('title')) defaults.push('title');
  if (defaults.length) return defaults;
  const fields = getActiveStandardFields(ctx);
  const first = fields.find(f => f.matchable !== false && f.value && mapped.has(f.value));
  return first?.value ? [first.value] : [];
}

/**
 * 第 2 步点击「下一步」时，按 spec §5 校验映射并准备匹配上下文
 * @param {Record<string, string>} columnMapping
 * @param {{ type?: string, lang?: string, supplier?: string, method?: string }} ctx
 * @returns {{ error: string|null, defaultMatchFields: string[] }}
 */
export function prepareStep2ForMatching(columnMapping, ctx) {
  const mappingErr = validateMappingStep(columnMapping, ctx);
  if (mappingErr) return { error: mappingErr, defaultMatchFields: [] };
  if (!ctx?.type || !ctx?.lang) {
    return { error: '验收单缺少资源类型或语种，无法确定匹配检索范围', defaultMatchFields: [] };
  }
  const defaultMatchFields = resolveDefaultMatchFields(columnMapping, ctx);
  if (!defaultMatchFields.length) {
    return { error: '请至少映射一个可用于匹配的字段', defaultMatchFields: [] };
  }
  return { error: null, defaultMatchFields };
}

/**
 * @param {Set<string>|string[]} selectedMatchFields
 * @returns {string|null}
 */
export function validateMatchFieldsStep(selectedMatchFields) {
  const fields = Array.isArray(selectedMatchFields) ? selectedMatchFields : [...selectedMatchFields];
  if (!fields.length) return '请至少选择一个匹配字段';
  return null;
}

/**
 * @param {number} value
 * @returns {{ valid: boolean, value: number }}
 */
export function parseQtyInput(value) {
  const num = Number(value);
  if (Number.isNaN(num) || num < 0) return { valid: false, value: num };
  return { valid: true, value: num };
}

/**
 * 校验步骤④预览数据（spec §9.4）
 * 不阻断：各子行处置套数合计 < 发货套数；各子行处置套数合计 < 待收套数合计（部分收货）
 * @param {object[]} previewRows
 * @returns {string[]}
 */
export function validatePreviewStep(previewRows) {
  const errors = [];
  if (!previewRows.length) {
    errors.push('没有可提交的发货记录');
    return errors;
  }

  previewRows.forEach((row, pi) => {
    const rowNo = pi + 1;
    const shipQty = Number(row.fieldValues?.receiveQty) || 0;

    if (row.status === 'fail' && !row.children.length) {
      errors.push(`第${rowNo}行：请选择订单行或删除该行`);
      return;
    }
    if (!row.children.length) return;

    let dispositionTotal = 0;
    row.children.forEach(ch => {
      const receiveParsed = parseQtyInput(ch.receive);
      const exchangeParsed = parseQtyInput(ch.exchange);
      const returnParsed = parseQtyInput(ch.ret);

      if (!receiveParsed.valid || !exchangeParsed.valid || !returnParsed.valid) {
        errors.push(`第${rowNo}行 ${ch.lineNo}：请输入有效套数`);
        return;
      }

      const total = getChildDispositionTotal(ch);
      dispositionTotal += total;

      if (total > ch.pending) {
        errors.push(`第${rowNo}行 ${ch.lineNo}：不能大于待收套数`);
      }
      if (exchangeParsed.value > 0 && !ch.exchangeReason) {
        errors.push(`第${rowNo}行 ${ch.lineNo}：请选择换货原因`);
      }
      if (returnParsed.value > 0 && !ch.returnReason) {
        errors.push(`第${rowNo}行 ${ch.lineNo}：请选择退货原因`);
      }
    });

    if (dispositionTotal > shipQty) {
      errors.push(`第${rowNo}行：处置套数合计不能超过发货套数`);
    }
  });

  return errors;
}

/**
 * 按验收单上下文查找实时订单行（不限待收，复用 spec §5.1 过滤条件）
 * @param {object} ctx
 * @param {string} orderLineNo
 * @returns {object|null}
 */
function findLiveOrderLine(ctx, orderLineNo) {
  return getReceiveOrderRows(ctx).find(row => {
    if (row.orderLine !== orderLineNo) return false;
    if (ctx?.supplier && row.supplier && row.supplier !== ctx.supplier) return false;
    if (ctx?.method && row.method && row.method !== ctx.method) return false;
    return true;
  }) || null;
}

/**
 * 获取实时订单行待收套数
 * @param {object} liveLine
 * @returns {number}
 */
function getLivePendingSets(liveLine) {
  if (liveLine.pendingSets != null) return Number(liveLine.pendingSets) || 0;
  return parseReceiveCounts(liveLine.counts).pending;
}

/**
 * 将冲突列表格式化为人类可读错误（spec 2026-07-10 order-line-conflict §6.1）
 * @param {object[]} conflicts
 * @returns {string[]}
 */
export function formatLiveConflictMessages(conflicts) {
  if (!conflicts?.length) return [];
  const lines = conflicts.map(c => {
    const loc = c.location && c.location !== '—' ? `（${c.location}）` : '';
    const prefix = `第${c.shipmentRowNo}行 ${c.orderLineNo}${loc}：`;
    switch (c.type) {
      case 'not_found':
        return `${prefix}订单行不存在或已不可收`;
      case 'not_receivable':
        return `${prefix}订单行状态已变更，不可收货`;
      case 'no_pending':
        return `${prefix}已被他人收完`;
      case 'pending_insufficient':
        return `${prefix}待收不足（快照待收 ${c.snapshotPending}，实时待收 ${c.livePending}，本次处置 ${c.disposalTotal}）`;
      default:
        return `${prefix}订单行冲突`;
    }
  });
  return [`以下 ${conflicts.length} 条订单行存在冲突，本次提交已取消：`, ...lines];
}

/**
 * 提交时实时订单行冲突校验（spec 2026-07-10 order-line-conflict §5）
 * @param {object} ctx 验收单快照
 * @param {object[]} shipmentLines 待提交发货主行
 * @param {object[]} taskLines 任务全部发货行（用于序号）
 * @param {{ simulateConflict?: boolean }} [options]
 * @returns {{ conflicts: object[], errors: string[] }}
 */
export function validateLiveOrderLines(ctx, shipmentLines, taskLines, options = {}) {
  const { simulateConflict = false } = options;
  /** @type {object[]} */
  const conflicts = [];
  let conflictSimulated = false;

  shipmentLines.forEach(row => {
    const shipmentRowNo = Math.max((taskLines || []).findIndex(l => l.lineId === row.lineId) + 1, 1);

    (row.children || []).forEach(child => {
      const disposalTotal = getChildDispositionTotal(child);
      if (disposalTotal <= 0) return;

      const liveLine = findLiveOrderLine(ctx, child.lineNo);
      let livePending = liveLine ? getLivePendingSets(liveLine) : null;

      if (simulateConflict && !conflictSimulated) {
        livePending = Math.max(0, disposalTotal - 1);
        conflictSimulated = true;
      }

      if (!liveLine) {
        conflicts.push({
          shipmentLineId: row.lineId,
          shipmentRowNo,
          orderLineNo: child.lineNo,
          location: child.location || '—',
          type: 'not_found',
          snapshotPending: child.pending ?? 0,
          livePending: 0,
          disposalTotal
        });
        return;
      }

      const lineStatus = liveLine.lineStatus || '已发订';
      if (!MATCHABLE_LINE_STATUSES.includes(lineStatus)) {
        conflicts.push({
          shipmentLineId: row.lineId,
          shipmentRowNo,
          orderLineNo: child.lineNo,
          location: child.location || liveLine.location || '—',
          type: 'not_receivable',
          snapshotPending: child.pending ?? 0,
          livePending: livePending ?? getLivePendingSets(liveLine),
          disposalTotal
        });
        return;
      }

      const resolvedLivePending = livePending ?? getLivePendingSets(liveLine);
      if (resolvedLivePending <= 0) {
        conflicts.push({
          shipmentLineId: row.lineId,
          shipmentRowNo,
          orderLineNo: child.lineNo,
          location: child.location || liveLine.location || '—',
          type: 'no_pending',
          snapshotPending: child.pending ?? 0,
          livePending: resolvedLivePending,
          disposalTotal
        });
        return;
      }

      if (disposalTotal > resolvedLivePending) {
        conflicts.push({
          shipmentLineId: row.lineId,
          shipmentRowNo,
          orderLineNo: child.lineNo,
          location: child.location || liveLine.location || '—',
          type: 'pending_insufficient',
          snapshotPending: child.pending ?? 0,
          livePending: resolvedLivePending,
          disposalTotal
        });
      }
    });
  });

  return { conflicts, errors: formatLiveConflictMessages(conflicts) };
}

/**
 * @param {object[]} previewRows
 * @param {'receive'|'exchange'|'return'} action
 * @returns {{ count: number, qty: number }}
 */
export function summarizeAction(previewRows, action) {
  let count = 0;
  let qty = 0;
  previewRows.forEach(row => {
    row.children.forEach(ch => {
      if (action === 'receive' && ch.receive > 0) {
        count += 1;
        qty += ch.receive;
      }
      if (action === 'exchange' && ch.exchange > 0) {
        count += 1;
        qty += ch.exchange;
      }
      if (action === 'return' && ch.ret > 0) {
        count += 1;
        qty += ch.ret;
      }
    });
  });
  return { count, qty };
}

/**
 * @param {string} status
 * @returns {{ text: string, cls: string }}
 */
export function getMatchStatusDisplay(status) {
  const map = {
    success: { text: '匹配成功', cls: 'text-green-600' },
    partial: { text: '部分收货', cls: 'text-amber-600' },
    fail: { text: '匹配失败', cls: 'text-red-500' },
    over: { text: '超收', cls: 'text-red-500' }
  };
  return map[status] || { text: '—', cls: 'text-gray-500' };
}

/**
 * 将发货单已映射字段覆盖到订单行（用于逐条收货弹窗预填）
 * @param {object} baseRow 订单行基准数据
 * @param {Record<string, string|number>} shipmentFieldValues 发货主行 fieldValues
 * @param {{ lang?: string }} ctx 验收单上下文
 * @returns {object}
 */
function applyShipmentFieldsToReceiveRow(baseRow, shipmentFieldValues, ctx) {
  const next = { ...baseRow };
  const ship = shipmentFieldValues || {};
  const isForeign = !isChineseAcceptanceLang(ctx?.lang);

  /** @type {[string, string][]} */
  const textFields = [
    ['isbn', 'isbn'],
    ['title', 'title'],
    ['author', 'author'],
    ['publisher', 'publisher'],
    ['edition', 'edition'],
    ['carrier', 'carrier'],
    ['barcode', 'barcode'],
    ['catalogNo', 'catalogNo'],
    ['isrc', 'isrc'],
    ['format', 'format'],
    ['currency', 'currency']
  ];
  textFields.forEach(([shipKey, rowKey]) => {
    const val = ship[shipKey];
    if (val !== undefined && val !== null && val !== '') next[rowKey] = val;
  });

  if (ship.price !== undefined && ship.price !== null && ship.price !== '') {
    if (isForeign) {
      next.originalPrice = ship.price;
    } else {
      next.price = ship.price;
      if (!next.actualPrice) next.actualPrice = ship.price;
    }
  }

  const volCount = ship.volCount ?? ship.pieceCount;
  if (volCount !== undefined && volCount !== null && volCount !== '') {
    next.copies = volCount;
  }

  return next;
}

/**
 * 构建导入任务子行对应的收货弹窗订单行（发货已映射字段优先）
 * @param {Record<string, string|number>} shipmentFieldValues
 * @param {object} child 馆址子行
 * @param {{ lang?: string, type?: string }} ctx
 * @returns {object}
 */
export function buildReceiveModalRowFromImportChild(shipmentFieldValues, child, ctx) {
  const base = {
    ...(child.orderLineData || {}),
    orderLine: child.orderLineData?.orderLine || child.lineNo,
    location: child.orderLineData?.location || child.location
  };
  const merged = applyShipmentFieldsToReceiveRow(base, shipmentFieldValues, ctx);
  const defaultReceiveSets = Number(child.receive) || Number(child.allocated) || 0;
  return {
    ...merged,
    defaultReceiveSets: defaultReceiveSets > 0 ? defaultReceiveSets : undefined
  };
}

/**
 * 构建导入任务子行对应的换货/退货弹窗订单行
 * @param {object} child
 * @returns {object}
 */
export function buildDispositionModalRowFromImportChild(child) {
  const base = {
    ...(child.orderLineData || {}),
    orderLine: child.orderLineData?.orderLine || child.lineNo,
    location: child.orderLineData?.location || child.location
  };
  return {
    ...base,
    defaultExchangeQty: child.exchange ?? '',
    defaultExchangeReason: child.exchangeReason ?? '',
    defaultReturnQty: child.ret ?? '',
    defaultReturnReason: child.returnReason ?? ''
  };
}

/**
 * @param {object[]} selectedLines
 * @param {number} shipQty
 * @param {string[]} mappedDisplayFields
 * @returns {object[]}
 */
export function buildChildrenFromPickedLines(selectedLines, shipQty, mappedDisplayFields) {
  const totalPending = selectedLines.reduce((s, l) => s + (l.pendingSets ?? 0), 0);
  const allocated = allocateShipQtyByOrderTime(selectedLines, shipQty);
  return allocated
    .filter(item => item.allocated > 0)
    .map(({ line, allocated: alloc }) => ({
      lineNo: line.orderLine,
      location: line.location,
      systemOrderNo: (line.orderLine || '').split('-')[0] || '—',
      pending: line.pendingSets ?? 0,
      allocated: alloc,
      fieldValues: buildOrderLineFieldValues(line, mappedDisplayFields),
      orderLineData: { ...line },
      receive: alloc,
      exchange: 0,
      exchangeReason: '',
      ret: 0,
      returnReason: '',
      deleteSelected: false
    }));
}

/**
 * @param {object} ctx
 * @returns {boolean}
 */
export function isImportableAcceptanceContext(ctx) {
  return ctx && (ctx.status === 'notStarted' || ctx.status === 'inProgress');
}
