import {
  getMatchableOrderLines,
  isAllowedDeliveryFileName,
  BOOK_MERGED_BIB_FIELDS,
  AV_MERGED_BIB_FIELDS
} from '@/modules/acceptance/data/delivery-import';
import {
  getCurrentViewableSubscribers,
  NO_ASSOCIATED_SUBSCRIBER_MESSAGE
} from '@/modules/subscriber/data/current-librarian';
import {
  buildMappedShipRows,
  exportMappedValidationResult,
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
  { step: 3, title: '数据校验' }
];

/** 预验收必填映射字段 */
export const PRE_ACCEPT_REQUIRED_FIELDS = [
  { value: 'orderLine', label: '订单行号' },
  { value: 'listPrice', label: '码洋' },
  { value: 'netPrice', label: '实洋' },
  { value: 'receiveQty', label: '收货套数' },
  { value: 'volCount', label: '套内册数' }
];

const PRE_ACCEPT_REQUIRED_KEYS = new Set(PRE_ACCEPT_REQUIRED_FIELDS.map(f => f.value));

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
 * @returns {import('@/modules/acceptance/data/delivery-import').StandardField[]}
 */
export function getPreAcceptStandardFields(resourceType) {
  return getPreAcceptStandardFieldGroups(resourceType).flatMap(g => g.fields);
}

/**
 * 按验收单资源类型返回映射字段（扁平列表，无分组标签；仅含对应纸质书或视听可选字段）
 * @param {string} [resourceType] 纸质书 | 视听资料
 * @returns {{ name: string, fields: import('@/modules/acceptance/data/delivery-import').StandardField[] }[]}
 */
export function getPreAcceptStandardFieldGroups(resourceType) {
  const required = PRE_ACCEPT_REQUIRED_FIELDS.map(f => ({
    ...f,
    required: true,
    matchable: f.value === 'orderLine'
  }));
  const optionalSource = isAvAcceptanceResourceType(resourceType)
    ? AV_MERGED_BIB_FIELDS
    : BOOK_MERGED_BIB_FIELDS;
  const optionalFields = optionalSource
    .filter(f => !PRE_ACCEPT_REQUIRED_KEYS.has(f.value))
    .map(f => ({
      ...f,
      required: false,
      matchable: false
    }));

  return [
    {
      name: '',
      fields: [
        { value: '', label: '不映射', matchable: false, required: false },
        ...required,
        ...optionalFields
      ]
    }
  ];
}

/**
 * @param {string} [resourceType]
 * @returns {Set<string>}
 */
export function getPreAcceptAllowedFieldKeys(resourceType) {
  return new Set(getPreAcceptStandardFields(resourceType).map(f => f.value).filter(Boolean));
}

/**
 * 去掉当前资源类型不允许的映射值
 * @param {Record<string, string>} columnMapping
 * @param {string} [resourceType]
 * @returns {Record<string, string>}
 */
export function sanitizePreAcceptColumnMapping(columnMapping, resourceType) {
  const allowed = getPreAcceptAllowedFieldKeys(resourceType);
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
 * @returns {Record<string, string>}
 */
export function buildPreAcceptDefaultColumnMapping(fileColumns, resourceType) {
  /** @type {Record<string, string>} */
  const mapping = {};
  const allowed = getPreAcceptAllowedFieldKeys(resourceType);
  (fileColumns || []).forEach(col => {
    const std = PRE_ACCEPT_COLUMN_AUTO_MAP[col];
    if (std && allowed.has(std)) mapping[col] = std;
  });
  return mapping;
}

/**
 * @param {Record<string, string>} columnMapping
 * @returns {string|null}
 */
export function validatePreAcceptMapping(columnMapping) {
  const mapped = new Set(Object.values(columnMapping || {}).filter(Boolean));
  for (const field of PRE_ACCEPT_REQUIRED_FIELDS) {
    if (!mapped.has(field.value)) {
      return `请映射「${field.label}」字段`;
    }
  }
  return null;
}

/**
 * @param {object} ctx 验收单上下文（type/lang/method/supplier）
 * @param {string[]} [viewableSubscribers]
 * @returns {object[]}
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
 * 跨资源类型/语种的可收货订单行（用于判定「存在但与验收单头不一致」）
 * @param {string[]} [viewableSubscribers]
 * @returns {object[]}
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
 * @returns {string}
 */
export function getPreAcceptFieldLabel(fieldKey) {
  const required = PRE_ACCEPT_REQUIRED_FIELDS.find(f => f.value === fieldKey);
  if (required) return required.label;
  const book = BOOK_MERGED_BIB_FIELDS.find(f => f.value === fieldKey);
  if (book) return book.label;
  const av = AV_MERGED_BIB_FIELDS.find(f => f.value === fieldKey);
  if (av) return av.label;
  return fieldKey;
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
  if (!scope.length) {
    return { ok: false, error: NO_ASSOCIATED_SUBSCRIBER_MESSAGE };
  }

  const pool = getPreAcceptMatchableOrderLines(ctx, scope);
  const allPool = getPreAcceptAllMatchableOrderLines(scope);
  if (!pool.length && !allPool.length) {
    return { ok: false, error: '当前关联订户下无可收货订单行，无法演示预验收' };
  }

  const withDiff = (fileName || '').includes('差异');
  const withOver = (fileName || '').includes('超收');
  const withPartial = (fileName || '').includes('部分');
  const withMismatch = (fileName || '').includes('头不一致') || (fileName || '').includes('不匹配');

  /** 演示：优先用与验收单匹配的池；文件名含「头不一致/不匹配」时混入一条其它头属性订单行 */
  const demoPool = withMismatch
    ? [
        ...(pool.slice(0, 2)),
        ...(allPool.filter(l => !pool.some(p => p.orderLine === l.orderLine
          && p.type === l.type && p.lang === l.lang
          && p.method === l.method && p.supplier === l.supplier)).slice(0, 1))
      ]
    : (pool.length ? pool : allPool);

  const parsedRows = demoPool.slice(0, Math.min(3, demoPool.length)).map((line, index) => {
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

    return {
      订单行号: line.orderLine,
      码洋: shipList,
      实洋: shipNetOr(netPrice),
      收货套数: String(receiveSets),
      套内册数: String(copies),
      ISBN: isbn,
      书名: title
    };
  });

  if (!parsedRows.length) {
    return { ok: false, error: '文件无有效数据行' };
  }

  return {
    ok: true,
    fileColumns: [...PRE_ACCEPT_MOCK_FILE_COLUMNS],
    parsedRows
  };
}

/** @param {string} netPrice */
function shipNetOr(netPrice) {
  return netPrice;
}

/**
 * @param {object} shipRow
 * @param {object} ctx
 * @param {string[]} [viewableSubscribers]
 * @param {string[]} [mappedFieldKeys]
 */
export function validatePreAcceptRow(shipRow, ctx, viewableSubscribers, mappedFieldKeys) {
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
    getFieldLabel: getPreAcceptFieldLabel,
    lang: ctx?.lang
  });
}

/**
 * @param {object[]} shipRows
 * @param {object} ctx
 * @param {Record<string, string>} [columnMapping]
 */
export function validatePreAcceptRows(shipRows, ctx, columnMapping) {
  const viewableSubscribers = getCurrentViewableSubscribers();
  const mappedKeys = getPreAcceptMappedFieldKeys(columnMapping || {});
  const rows = (shipRows || []).map(r =>
    validatePreAcceptRow(r, ctx, viewableSubscribers, mappedKeys.length ? mappedKeys : r.mappedKeys)
  );
  const passCount = rows.filter(r => r.result === '通过').length;
  const failCount = rows.length - passCount;
  return {
    rows,
    passCount,
    failCount,
    allPassed: failCount === 0 && rows.length > 0,
    viewableSubscribers
  };
}

/**
 * @param {object[]} validatedRows
 * @param {string} [fileName]
 * @param {string[]} [fileColumns]
 */
export function exportPreAcceptValidationResult(validatedRows, fileName, fileColumns) {
  exportMappedValidationResult(
    validatedRows,
    fileColumns || validatedRows[0]?.fileColumns || [...PRE_ACCEPT_MOCK_FILE_COLUMNS],
    fileName || `预验收校验结果_${Date.now()}.xls`
  );
}
