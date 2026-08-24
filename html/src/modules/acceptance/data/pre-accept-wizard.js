import {
  getMatchableOrderLines,
  isAllowedDeliveryFileName
} from '@/modules/acceptance/data/delivery-import';
import {
  getCurrentViewableSubscribers
} from '@/modules/subscriber/data/current-librarian';
import { isChineseAcceptanceLang } from '@/modules/acceptance/data/receive-by-item';
import {
  buildMappedShipRows,
  exportFailedMappedRows,
  getLineListPrice,
  getLineNetPrice,
  normalizeMoney,
  validateMappedShipRow
} from '@/modules/acceptance/data/ship-import-shared';

/** 映射模板 profile（与验收单解耦） */
export const PRE_ACCEPT_TEMPLATE_CTX = { supplier: '', type: '预验收', lang: '' };

export const PRE_ACCEPT_STEPS = [
  { step: 1, title: '上传文件' },
  { step: 2, title: '字段映射' },
  { step: 3, title: '数据解析' },
  { step: 4, title: '数据入库' }
];

/** 默认勾选且不可取消「是否校验」的标准字段（行号用于匹配；套数按待收范围校验） */
export const PRE_ACCEPT_MUST_MATCH_EXCLUDED = new Set(['orderLine', 'receiveQty']);

/**
 * 默认可取消勾选「是否校验」：实洋、套内册数/件数、定价（纸质）/码洋（视听）
 * @type {string[]}
 */
export const PRE_ACCEPT_DEFAULT_MUST_MATCH_FIELDS = ['netPrice', 'volCount', 'price', 'listPrice'];

export const PRE_ACCEPT_HEADER_PREVIEW_LIMIT = 20;

/**
 * @param {string} fieldKey
 * @returns {boolean}
 */
export function canPreAcceptMustMatch(fieldKey) {
  return Boolean(fieldKey) && !PRE_ACCEPT_MUST_MATCH_EXCLUDED.has(fieldKey);
}

/**
 * 映射到订单行号/收货套数时「是否校验」强制勾选
 * @param {string} fieldKey
 * @returns {boolean}
 */
export function isPreAcceptMustMatchLockedOn(fieldKey) {
  return PRE_ACCEPT_MUST_MATCH_EXCLUDED.has(fieldKey);
}

/**
 * @param {string} fieldKey
 * @returns {boolean}
 */
export function isPreAcceptDefaultMustMatch(fieldKey) {
  return canPreAcceptMustMatch(fieldKey)
    && PRE_ACCEPT_DEFAULT_MUST_MATCH_FIELDS.includes(fieldKey);
}

/**
 * 从列映射与列级勾选汇总须一致标准字段 key
 * @param {Record<string, string>} columnMapping
 * @param {Record<string, boolean>} mustMatchByCol
 * @returns {string[]}
 */
export function collectPreAcceptMustMatchFields(columnMapping, mustMatchByCol) {
  const keys = new Set();
  Object.entries(columnMapping || {}).forEach(([col, std]) => {
    if (!canPreAcceptMustMatch(std)) return;
    if (mustMatchByCol?.[col]) keys.add(std);
  });
  return [...keys];
}

/**
 * 将标准字段须一致列表还原为列级勾选（按当前映射）
 * @param {Record<string, string>} columnMapping
 * @param {string[]} mustMatchFields
 * @returns {Record<string, boolean>}
 */
export function buildMustMatchByCol(columnMapping, mustMatchFields) {
  const set = new Set((mustMatchFields || []).filter(canPreAcceptMustMatch));
  /** @type {Record<string, boolean>} */
  const byCol = {};
  Object.entries(columnMapping || {}).forEach(([col, std]) => {
    if (isPreAcceptMustMatchLockedOn(std)) {
      byCol[col] = true;
      return;
    }
    byCol[col] = Boolean(std && set.has(std));
  });
  return byCol;
}

/**
 * Excel 列标：0 → A列，25 → Z列，26 → AA列
 * @param {number} index0
 * @returns {string}
 */
export function excelColumnLabel(index0) {
  let n = Math.max(0, Number(index0) || 0);
  let s = '';
  do {
    s = String.fromCharCode(65 + (n % 26)) + s;
    n = Math.floor(n / 26) - 1;
  } while (n >= 0);
  return `${s}列`;
}

/** @param {string} value @param {string} label @param {object} [extra] */
function field(value, label, extra = {}) {
  return { value, label, matchable: false, required: false, ...extra };
}

const REQ = { required: true, matchable: false };

/** 纸质书 · 中文 */
const BOOK_ZH_REQUIRED = [
  field('orderLine', '订单行号', { ...REQ, matchable: true }),
  field('receiveQty', '收货套数', REQ),
  field('volCount', '套内册数', REQ),
  field('netPrice', '实洋', REQ),
  field('price', '定价', REQ)
];
const BOOK_ZH_OPTIONAL = [
  field('title', '正题名'),
  field('isbn', 'ISBN'),
  field('subTitle', '副题名'),
  field('volNo', '分卷号'),
  field('volName', '分卷名'),
  field('classNo', '分类号'),
  field('publisher', '出版社'),
  field('author', '作者'),
  field('pubYear', '出版年'),
  field('edition', '版本'),
  field('series', '丛编'),
  field('subject', '主题词'),
  field('audience', '读者对象'),
  field('binding', '装帧形式'),
  field('size', '尺寸'),
  field('textLang', '正文语种'),
  field('volumeCount', '卷数'),
  field('pubPlace', '出版地'),
  field('generalNote', '一般性附注'),
  field('summary', '图书简介'),
  field('remark', '备注')
];

/** 纸质书 · 外文 */
const BOOK_FOREIGN_REQUIRED = [
  field('orderLine', '订单行号', { ...REQ, matchable: true }),
  field('receiveQty', '收货套数', REQ),
  field('volCount', '套内册数', REQ),
  field('netPrice', '实洋', REQ),
  field('price', '定价', REQ)
];
const BOOK_FOREIGN_OPTIONAL = [
  field('isbn', 'ISBN'),
  field('subjectMajor', '学科大类'),
  field('subjectDetail', '学科细分'),
  field('clcNo', '中图分类号'),
  field('cnTitle', '中译名'),
  field('title', '题名'),
  field('subTitle', '副题名'),
  field('author', '责任者'),
  field('series', '丛编'),
  field('publisher', '出版社'),
  field('binding', '装帧形式'),
  field('pubYear', '出版日期'),
  field('edition', '版次'),
  field('pages', '页数'),
  field('currency', '币种'),
  field('subject', '主题词'),
  field('audience', '读者对象'),
  field('size', '尺寸'),
  field('textLang', '语种'),
  field('summary', '简介'),
  field('isbnConcise', '精简装ISBN对照'),
  field('holdingInfo', '馆藏信息'),
  field('reviewLevel', '审读级别'),
  field('award', '获奖信息'),
  field('toc', '目次信息'),
  field('volNo', '分卷号'),
  field('volName', '分卷名'),
  field('authorBio', '作者简介'),
  field('bookReview', '书评'),
  field('remark', '备注')
];

/** 视听 · 中文 */
const AV_ZH_REQUIRED = [
  field('orderLine', '订单行号', { ...REQ, matchable: true }),
  field('receiveQty', '收货套数', REQ),
  field('volCount', '套内件数', REQ),
  field('netPrice', '实洋', REQ),
  field('listPrice', '码洋', REQ)
];
const AV_ZH_OPTIONAL = [
  field('isbn', 'ISBN'),
  field('isrc', 'ISRC'),
  field('title', '题名'),
  field('carrier', '载体'),
  field('publisher', '出版社'),
  field('format', '版本/格式'),
  field('author', '著者'),
  field('currency', '币种'),
  field('vinylColor', '彩胶颜色'),
  field('limitedNo', '限量编号'),
  field('label', '厂牌'),
  field('seriesName', '系列名称'),
  field('isSigned', '是否签名'),
  field('isOldRecord', '是否老唱片'),
  field('award', '获奖信息'),
  field('bjPublisher', '北京出版社'),
  field('category', '分类'),
  field('discNo', '盘号'),
  field('oldRecordBrand', '老唱片品牌'),
  field('operaType', '剧种'),
  field('era', '年代'),
  field('remark', '备注')
];

/** 视听 · 外文 */
const AV_FOREIGN_REQUIRED = [
  field('orderLine', '订单行号', { ...REQ, matchable: true }),
  field('receiveQty', '收货套数', REQ),
  field('volCount', '套内件数', REQ),
  field('netPrice', '实洋', REQ),
  field('listPrice', '码洋', REQ)
];
const AV_FOREIGN_OPTIONAL = [
  field('isrc', 'ISRC'),
  field('title', '题名'),
  field('carrier', '载体'),
  field('barcode', '商品条码'),
  field('catalogNo', '目录号'),
  field('origTitle', '外文原文题名'),
  field('publisher', '出版方'),
  field('currency', '币种'),
  field('remark', '备注'),
  field('label', '厂牌')
];

/** @type {Record<string, string>} */
export const PRE_ACCEPT_COLUMN_AUTO_MAP = {
  订单行号: 'orderLine',
  码洋: 'listPrice',
  实洋: 'netPrice',
  收货套数: 'receiveQty',
  套内册数: 'volCount',
  发货套数: 'receiveQty',
  每套册数: 'volCount',
  套内件数: 'volCount',
  ISBN: 'isbn',
  ISRC: 'isrc',
  书名: 'title',
  正题名: 'title',
  题名: 'title',
  作者: 'author',
  责任者: 'author',
  著者: 'author',
  出版社: 'publisher',
  出版方: 'publisher',
  RMB码洋: 'listPrice',
  RMB实洋: 'netPrice',
  出版年: 'pubYear',
  出版日期: 'pubYear',
  定价: 'price',
  价格: 'price',
  载体: 'carrier',
  厂牌: 'label'
};

/** 原型演示表头 */
export const PRE_ACCEPT_MOCK_FILE_COLUMNS = [
  '订单行号',
  '码洋',
  '实洋',
  '收货套数',
  '套内册数',
  'ISBN',
  '书名'
];

const PRE_ACCEPT_POOL_CONTEXTS = [
  { type: '纸质书', lang: '中文' },
  { type: '纸质书', lang: '英文' },
  { type: '视听资料', lang: '中文' },
  { type: '视听资料', lang: '英文' }
];

/**
 * @param {string} [resourceType]
 * @returns {boolean}
 */
export function isAvAcceptanceResourceType(resourceType) {
  return resourceType === '视听资料';
}

/**
 * @param {string} [resourceType]
 * @param {string} [lang]
 * @returns {{ required: object[], optional: object[] }}
 */
export function getPreAcceptFieldPool(resourceType, lang) {
  const isAv = isAvAcceptanceResourceType(resourceType);
  const isZh = isChineseAcceptanceLang(lang || '中文');
  if (isAv) {
    return isZh
      ? { required: AV_ZH_REQUIRED, optional: AV_ZH_OPTIONAL }
      : { required: AV_FOREIGN_REQUIRED, optional: AV_FOREIGN_OPTIONAL };
  }
  return isZh
    ? { required: BOOK_ZH_REQUIRED, optional: BOOK_ZH_OPTIONAL }
    : { required: BOOK_FOREIGN_REQUIRED, optional: BOOK_FOREIGN_OPTIONAL };
}

/**
 * @param {string} [resourceType]
 * @param {string} [lang]
 */
export function getPreAcceptRequiredFields(resourceType, lang) {
  return getPreAcceptFieldPool(resourceType, lang).required;
}

/**
 * @param {string} [resourceType]
 * @param {string} [lang]
 */
export function getPreAcceptStandardFields(resourceType, lang) {
  return getPreAcceptStandardFieldGroups(resourceType, lang).flatMap(g => g.fields);
}

/**
 * 按验收单 资源类型 × 语种（中/外）返回映射字段
 * @param {string} [resourceType]
 * @param {string} [lang]
 */
export function getPreAcceptStandardFieldGroups(resourceType, lang) {
  const { required, optional } = getPreAcceptFieldPool(resourceType, lang);
  return [
    {
      name: '',
      fields: [
        { value: '', label: '不映射', matchable: false, required: false },
        ...required,
        ...optional
      ]
    }
  ];
}

/**
 * @param {string} [resourceType]
 * @param {string} [lang]
 * @returns {Set<string>}
 */
export function getPreAcceptAllowedFieldKeys(resourceType, lang) {
  return new Set(getPreAcceptStandardFields(resourceType, lang).map(f => f.value).filter(Boolean));
}

/**
 * @param {Record<string, string>} columnMapping
 * @param {string} [resourceType]
 * @param {string} [lang]
 */
export function sanitizePreAcceptColumnMapping(columnMapping, resourceType, lang) {
  const allowed = getPreAcceptAllowedFieldKeys(resourceType, lang);
  /** @type {Record<string, string>} */
  const next = {};
  Object.entries(columnMapping || {}).forEach(([col, std]) => {
    if (!std || allowed.has(std)) next[col] = std || '';
    else next[col] = '';
  });
  return next;
}

/**
 * @param {string[]} fileColumns
 * @param {string} [resourceType]
 * @param {string} [lang]
 */
export function buildPreAcceptDefaultColumnMapping(fileColumns, resourceType, lang) {
  /** @type {Record<string, string>} */
  const mapping = {};
  const allowed = getPreAcceptAllowedFieldKeys(resourceType, lang);
  const isAv = isAvAcceptanceResourceType(resourceType);
  (fileColumns || []).forEach(col => {
    let std = PRE_ACCEPT_COLUMN_AUTO_MAP[col];
    // 演示列「码洋」在纸质书场景映射为定价
    if (!isAv && (col === '码洋' || col === 'RMB码洋') && allowed.has('price')) {
      std = 'price';
    }
    if (std && allowed.has(std)) mapping[col] = std;
  });
  return mapping;
}

/**
 * @param {Record<string, string>} columnMapping
 * @param {string} [resourceType]
 * @param {string} [lang]
 * @returns {string|null}
 */
export function validatePreAcceptMapping(columnMapping, resourceType, lang) {
  const mapped = new Set(Object.values(columnMapping || {}).filter(Boolean));
  for (const f of getPreAcceptRequiredFields(resourceType, lang)) {
    if (!mapped.has(f.value)) {
      return `请映射「${f.label}」字段`;
    }
  }
  return null;
}

/**
 * @param {object} ctx
 * @param {string[]} [viewableSubscribers]
 */
export function getPreAcceptMatchableOrderLines(ctx, viewableSubscribers) {
  const scope = viewableSubscribers ?? getCurrentViewableSubscribers();
  if (!scope.length || !ctx?.type) return [];

  return getMatchableOrderLines(ctx)
    .map(row => ({
      ...row,
      subscriber: row.subscriber || 'ceshi',
      type: row.type || ctx.type,
      lang: row.lang || ctx.lang || '中文',
      _matchCtx: { type: ctx.type, lang: ctx.lang || '中文' }
    }))
    .filter(row => scope.includes(row.subscriber));
}

/**
 * @param {string[]} [viewableSubscribers]
 */
export function getPreAcceptAllMatchableOrderLines(viewableSubscribers) {
  const scope = viewableSubscribers ?? getCurrentViewableSubscribers();
  if (!scope.length) return [];

  const seen = new Set();
  /** @type {object[]} */
  const pool = [];

  PRE_ACCEPT_POOL_CONTEXTS.forEach(ctx => {
    getMatchableOrderLines({ type: ctx.type, lang: ctx.lang })
      .map(row => ({
        ...row,
        subscriber: row.subscriber || 'ceshi',
        type: row.type || ctx.type,
        lang: row.lang || ctx.lang,
        _matchCtx: ctx
      }))
      .filter(row => scope.includes(row.subscriber))
      .forEach(row => {
        const key = `${row.orderLine}|${row.type}|${row.lang}|${row.method}|${row.supplier}`;
        if (!row.orderLine || seen.has(key)) return;
        seen.add(key);
        pool.push(row);
      });
  });

  return pool;
}

/**
 * @param {Record<string, string>} columnMapping
 * @returns {string[]}
 */
export function getPreAcceptMappedFieldKeys(columnMapping) {
  return [...new Set(Object.values(columnMapping || {}).filter(Boolean))];
}

/**
 * @param {string} fieldKey
 * @param {string} [resourceType]
 * @param {string} [lang]
 */
export function getPreAcceptFieldLabel(fieldKey, resourceType, lang) {
  const all = getPreAcceptStandardFields(resourceType, lang);
  const found = all.find(f => f.value === fieldKey);
  if (found) return found.label;
  return fieldKey;
}

/**
 * @param {string[][]} rawMatrix
 * @param {number} headerRow1Based
 */
export function applyPreAcceptHeaderRow(rawMatrix, headerRow1Based) {
  const rows = Array.isArray(rawMatrix) ? rawMatrix : [];
  const headerRow = Math.max(1, Math.floor(Number(headerRow1Based) || 1));
  if (!rows.length) return { ok: false, error: '文件无有效数据行' };
  if (headerRow > rows.length) return { ok: false, error: '表头行无效' };

  const headerCells = (rows[headerRow - 1] || []).map((c, i) => {
    const text = String(c ?? '').trim();
    return text || `列${i + 1}`;
  });
  const seen = new Map();
  const fileColumns = headerCells.map(name => {
    const count = (seen.get(name) || 0) + 1;
    seen.set(name, count);
    return count === 1 ? name : `${name}_${count}`;
  });

  const parsedRows = rows
    .slice(headerRow)
    .filter(row => (row || []).some(c => String(c ?? '').trim()))
    .map(row => {
      /** @type {Record<string, string>} */
      const obj = {};
      fileColumns.forEach((col, i) => {
        obj[col] = String(row?.[i] ?? '');
      });
      return obj;
    });

  if (!parsedRows.length) return { ok: false, error: '表头行下方无数据行' };
  return { ok: true, fileColumns, parsedRows, headerRow };
}

/**
 * @param {Record<string, string>[]} parsedRows
 * @param {Record<string, string>} columnMapping
 * @param {string[]} [fileColumns]
 */
export function buildPreAcceptShipRows(parsedRows, columnMapping, fileColumns) {
  const cols = fileColumns?.length
    ? fileColumns
    : (parsedRows[0] ? Object.keys(parsedRows[0]) : [...PRE_ACCEPT_MOCK_FILE_COLUMNS]);
  return buildMappedShipRows(parsedRows, columnMapping, cols);
}

/**
 * @param {string} fileName
 * @param {object} ctx
 */
export function parsePreAcceptFileMock(fileName, ctx) {
  if (!isAllowedDeliveryFileName(fileName)) {
    return { ok: false, error: '请上传 xls/xlsx 格式文件' };
  }

  const scope = getCurrentViewableSubscribers();
  const pool = getPreAcceptMatchableOrderLines(ctx, scope);
  const allPool = getPreAcceptAllMatchableOrderLines(scope);
  // 无关联订户或无可匹配订单行时仍生成文件数据；第 3 步按行记「未匹配」

  const withDiff = (fileName || '').includes('差异');
  const withOver = (fileName || '').includes('超收');
  const withPartial = (fileName || '').includes('部分');
  const withHeaderOffset = (fileName || '').includes('表头');
  const withMismatch = (fileName || '').includes('头不一致') || (fileName || '').includes('不匹配');

  const demoPool = withMismatch
    ? [
        ...(pool.slice(0, 2)),
        ...(allPool.filter(l => !pool.some(p => p.orderLine === l.orderLine
          && p.type === l.type && p.lang === l.lang
          && p.method === l.method && p.supplier === l.supplier)).slice(0, 1))
      ]
    : (pool.length ? pool : allPool);

  let dataRows = demoPool.slice(0, Math.min(3, Math.max(demoPool.length, 0))).map((line, index) => {
    const lineLang = line._matchCtx?.lang || line.lang || ctx?.lang || '中文';
    const listPrice = getLineListPrice(line, lineLang);
    const netPrice = getLineNetPrice(line);
    const copies = Number(line.copies ?? line.piecesInSet) || 0;
    let receiveSets = Number(line.pendingSets) || 0;
    let shipList = listPrice;
    let isbn = line.isbn || '';
    let title = line.title || '';

    if (withDiff && index === 0) {
      shipList = normalizeMoney(Number(listPrice) + 1);
      isbn = isbn ? `${isbn}X` : 'DIFF-ISBN';
      title = title ? `${title}（差异）` : '差异题名';
    }
    if (withOver && index === 0) {
      receiveSets = (Number(line.pendingSets) || 0) + 1;
    } else if (withPartial && index === 0 && receiveSets > 1) {
      receiveSets = receiveSets - 1;
    }

    return [
      line.orderLine,
      shipList,
      netPrice,
      String(receiveSets),
      String(copies),
      isbn,
      title
    ];
  });

  if (!dataRows.length) {
    // 无可匹配订单行：仍生成样例行，校验阶段记为「未匹配」
    dataRows = [
      ['OL-UNMATCHED-001', '36.00', '28.80', '1', '1', '9780000000001', '无匹配订单行示例'],
      ['OL-UNMATCHED-002', '48.00', '38.40', '2', '1', '9780000000002', '无匹配订单行示例2']
    ];
  }

  /** @type {string[][]} */
  const rawMatrix = withHeaderOffset
    ? [
        ['北京XX图书文化有限公司', '', '发货单', '', '', '', ''],
        ['单号：FH-2026080501', '日期：2026-08-05', '', '', '', '', ''],
        ['', '', '', '', '', '', ''],
        [...PRE_ACCEPT_MOCK_FILE_COLUMNS],
        ...dataRows
      ]
    : [[...PRE_ACCEPT_MOCK_FILE_COLUMNS], ...dataRows];

  const defaultHeaderRow = withHeaderOffset ? 4 : 1;

  return {
    ok: true,
    rawMatrix,
    previewRows: rawMatrix.slice(0, PRE_ACCEPT_HEADER_PREVIEW_LIMIT),
    defaultHeaderRow
  };
}

/**
 * @param {object} shipRow
 * @param {object} ctx
 * @param {string[]} [viewableSubscribers]
 * @param {string[]} [mappedFieldKeys]
 * @param {string[]} [mustMatchFields]
 */
export function validatePreAcceptRow(
  shipRow,
  ctx,
  viewableSubscribers,
  mappedFieldKeys,
  mustMatchFields
) {
  const scope = viewableSubscribers ?? getCurrentViewableSubscribers();
  const pool = getPreAcceptMatchableOrderLines(ctx, scope);
  const allPool = getPreAcceptAllMatchableOrderLines(scope);
  const row = mappedFieldKeys?.length
    ? { ...shipRow, mappedKeys: mappedFieldKeys }
    : shipRow;
  return validateMappedShipRow(row, {
    mode: 'precheck',
    pool,
    allPool,
    acceptanceCtx: ctx,
    getFieldLabel: key => getPreAcceptFieldLabel(key, ctx?.type, ctx?.lang),
    lang: ctx?.lang,
    mustMatchFields: mustMatchFields || []
  });
}

/**
 * @param {object[]} shipRows
 * @param {object} ctx
 * @param {Record<string, string>} [columnMapping]
 * @param {string[]} [mustMatchFields]
 */
export function validatePreAcceptRows(shipRows, ctx, columnMapping, mustMatchFields) {
  const viewableSubscribers = getCurrentViewableSubscribers();
  const mappedKeys = getPreAcceptMappedFieldKeys(columnMapping || {});
  const rows = (shipRows || []).map(r =>
    validatePreAcceptRow(
      r,
      ctx,
      viewableSubscribers,
      mappedKeys.length ? mappedKeys : r.mappedKeys,
      mustMatchFields
    )
  );
  const passCount = rows.filter(r => r.result === '通过').length;
  const failCount = rows.length - passCount;
  const overCount = rows.filter(r => r.result === '通过' && r.qtyOverPending).length;
  const exportFailCount = rows.filter(r => r.result !== '通过' || r.qtyOverPending).length;
  return {
    rows,
    passCount,
    failCount,
    overCount,
    exportFailCount,
    allPassed: failCount === 0 && rows.length > 0,
    viewableSubscribers
  };
}

/**
 * 下载解析结果：失败行 + 套数大于待收（仍通过）的行；原列 + 失败原因
 * @param {object[]} validatedRows
 * @param {string} [fileName]
 * @param {string[]} [fileColumns]
 */
export function exportPreAcceptValidationResult(validatedRows, fileName, fileColumns) {
  exportFailedMappedRows(
    validatedRows,
    fileColumns || validatedRows[0]?.fileColumns || [...PRE_ACCEPT_MOCK_FILE_COLUMNS],
    fileName || `预验收解析结果_${Date.now()}.xls`
  );
}

/** @deprecated 兼容旧名 */
export const PRE_ACCEPT_REQUIRED_FIELDS = BOOK_ZH_REQUIRED;
