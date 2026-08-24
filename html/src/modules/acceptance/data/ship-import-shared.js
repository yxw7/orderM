import {
  getOrderLineMatchFieldValue,
  normalizeFieldValue
} from '@/modules/acceptance/data/delivery-import';
import { isChineseAcceptanceLang } from '@/modules/acceptance/data/receive-by-item';

/** @typedef {'precheck'|'receive'} ShipImportValidateMode */

const MONEY_FIELDS = new Set(['listPrice', 'netPrice', 'price']);
const QTY_FIELDS = new Set(['receiveQty', 'volCount']);
const MATCH_KEY_FIELD = 'orderLine';

export const ACCEPTANCE_HEADER_ATTR_LABELS = {
  type: '资源类型',
  lang: '语种',
  method: '采选方式',
  supplier: '供应商'
};

/**
 * @param {string} a
 * @param {string} b
 * @returns {boolean}
 */
function langsCompatible(a, b) {
  if (!a || !b) return false;
  if (a === b) return true;
  // 中文为一档，非中文（英文/西语等）同属外文档
  return isChineseAcceptanceLang(a) === isChineseAcceptanceLang(b);
}

/**
 * @param {object} line
 * @returns {{ type: string, lang: string, method: string, supplier: string }}
 */
export function getOrderLineAcceptanceAttrs(line) {
  return {
    type: String(line?.type || line?.resourceType || line?._matchCtx?.type || '').trim(),
    lang: String(line?.lang || line?._matchCtx?.lang || '').trim(),
    method: String(line?.method || '').trim(),
    supplier: String(line?.supplier || '').trim()
  };
}

/**
 * 比对订单行与验收单头：资源类型、语种、采选方式、供应商
 * @param {object} line
 * @param {{ type?: string, lang?: string, method?: string, supplier?: string }|null|undefined} acceptanceCtx
 * @returns {string[]}
 */
export function diffAcceptanceHeaderAttrs(line, acceptanceCtx) {
  if (!acceptanceCtx) return [];
  const lineAttrs = getOrderLineAcceptanceAttrs(line);
  /** @type {string[]} */
  const diffs = [];
  (['type', 'lang', 'method', 'supplier']).forEach(key => {
    const expected = String(acceptanceCtx[key] ?? '').trim();
    if (!expected) return;
    const actual = lineAttrs[key];
    const same = key === 'lang'
      ? langsCompatible(expected, actual)
      : actual === expected;
    if (!same) {
      diffs.push(
        `${ACCEPTANCE_HEADER_ATTR_LABELS[key]}不一致（验收单 ${expected}/订单行 ${actual || '—'}）`
      );
    }
  });
  return diffs;
}

/**
 * @param {string} orderLineNo
 * @param {object[]} scopedPool
 * @param {object[]} [allPool]
 * @param {{ type?: string, lang?: string, method?: string, supplier?: string }|null} [acceptanceCtx]
 * @returns {{ line: object|null, attrDiffs: string[] }}
 */
export function resolveShipOrderLineMatch(orderLineNo, scopedPool, allPool, acceptanceCtx) {
  const no = String(orderLineNo || '').trim();
  if (!no) return { line: null, attrDiffs: [] };

  const scoped = (scopedPool || []).find(l => l.orderLine === no) || null;
  if (scoped) {
    const attrDiffs = diffAcceptanceHeaderAttrs(scoped, acceptanceCtx);
    if (attrDiffs.length) return { line: scoped, attrDiffs };
    return { line: scoped, attrDiffs: [] };
  }

  const candidates = (allPool || []).filter(l => l.orderLine === no);
  if (!candidates.length) return { line: null, attrDiffs: [] };

  const matchedByAttr = candidates.find(l => !diffAcceptanceHeaderAttrs(l, acceptanceCtx).length);
  if (matchedByAttr) return { line: matchedByAttr, attrDiffs: [] };

  const line = candidates[0];
  const attrDiffs = diffAcceptanceHeaderAttrs(line, acceptanceCtx);
  return {
    line,
    attrDiffs: attrDiffs.length
      ? attrDiffs
      : ['订单行与验收单的资源类型、语种、采选方式或供应商不一致']
  };
}
/**
 * @param {string|number|null|undefined} value
 * @returns {string}
 */
export function normalizeMoney(value) {
  const num = Number(String(value ?? '').replace(/,/g, '').trim());
  if (Number.isNaN(num)) return '';
  return num.toFixed(2);
}

/**
 * @param {string|number|null|undefined} value
 * @returns {number|null}
 */
export function normalizeQty(value) {
  const num = Number(String(value ?? '').trim());
  if (Number.isNaN(num) || num < 0) return null;
  return num;
}

/**
 * @param {object} line
 * @param {string} [lang]
 * @returns {string}
 */
export function getLineListPrice(line, lang) {
  if (!isChineseAcceptanceLang(lang) && line.originalPrice != null && line.originalPrice !== '') {
    return normalizeMoney(line.originalPrice);
  }
  return normalizeMoney(line.price);
}

/**
 * @param {object} line
 * @returns {string}
 */
export function getLineNetPrice(line) {
  return normalizeMoney(line.actualPrice ?? line.price);
}

/**
 * @param {string[]} types
 * @param {string[]} reasons
 * @returns {{ result: string, failReason: string }}
 */
export function joinValidationOutcomes(types, reasons) {
  if (!types.length) return { result: '通过', failReason: '' };
  return {
    result: types.join('；'),
    failReason: reasons.join('；')
  };
}

/**
 * @param {object} line
 * @param {string} fieldKey
 * @param {string} [lang]
 * @returns {string}
 */
export function getSystemFieldDisplay(line, fieldKey, lang) {
  if (fieldKey === 'listPrice' || fieldKey === 'price') return getLineListPrice(line, lang);
  if (fieldKey === 'netPrice') return getLineNetPrice(line);
  if (fieldKey === 'receiveQty') return String(Number(line.pendingSets) || 0);
  if (fieldKey === 'volCount') return String(Number(line.copies ?? line.piecesInSet) || 0);
  if (fieldKey === 'orderLine') return String(line.orderLine || '');
  return String(getOrderLineMatchFieldValue(line, fieldKey) ?? '');
}

/**
 * @param {string} fieldKey
 * @param {string} shipRaw
 * @param {object} line
 * @param {string} [lang]
 */
export function compareMappedField(fieldKey, shipRaw, line, lang) {
  const systemDisplay = getSystemFieldDisplay(line, fieldKey, lang);
  const shipText = String(shipRaw ?? '').trim();

  if (MONEY_FIELDS.has(fieldKey)) {
    const shipNorm = normalizeMoney(shipText);
    const systemNorm = normalizeMoney(systemDisplay);
    return {
      equal: Boolean(shipNorm) && shipNorm === systemNorm,
      shipDisplay: shipNorm || shipText || '—',
      systemDisplay: systemNorm || systemDisplay || '—'
    };
  }

  if (QTY_FIELDS.has(fieldKey)) {
    const shipQty = normalizeQty(shipText);
    const systemQty = normalizeQty(systemDisplay);
    return {
      equal: shipQty != null && systemQty != null && shipQty === systemQty,
      shipDisplay: shipQty == null ? (shipText || '—') : String(shipQty),
      systemDisplay: systemQty == null ? (systemDisplay || '—') : String(systemQty)
    };
  }

  const shipNorm = normalizeFieldValue(shipText, fieldKey);
  const systemNorm = normalizeFieldValue(systemDisplay, fieldKey);
  return {
    equal: shipNorm === systemNorm,
    shipDisplay: shipText || '—',
    systemDisplay: systemDisplay || '—'
  };
}

/**
 * @param {Record<string, string>[]} parsedRows
 * @param {Record<string, string>} columnMapping
 * @param {string[]} fileColumns
 * @returns {object[]}
 */
export function buildMappedShipRows(parsedRows, columnMapping, fileColumns) {
  /** @type {Record<string, string>} */
  const reverse = {};
  Object.entries(columnMapping || {}).forEach(([fileCol, std]) => {
    if (std) reverse[std] = fileCol;
  });
  const mappedKeys = [...new Set(Object.values(columnMapping || {}).filter(Boolean))];

  return (parsedRows || []).map((row, index) => {
    /** @type {Record<string, string>} */
    const fieldValues = {};
    mappedKeys.forEach(key => {
      fieldValues[key] = String(row[reverse[key]] ?? '').trim();
    });
    /** @type {Record<string, string>} */
    const sourceRow = {};
    (fileColumns || Object.keys(row)).forEach(col => {
      sourceRow[col] = String(row[col] ?? '');
    });

    return {
      rowNo: index + 1,
      orderLineNo: fieldValues.orderLine || '',
      listPrice: fieldValues.listPrice ?? '',
      price: fieldValues.price ?? '',
      netPrice: fieldValues.netPrice ?? '',
      receiveSets: fieldValues.receiveQty ?? '',
      copiesInSet: fieldValues.volCount ?? '',
      fieldValues,
      mappedKeys,
      sourceRow,
      fileColumns: fileColumns || Object.keys(row)
    };
  });
}

/**
 * @param {object} shipRow
 * @param {{
 *   mode: ShipImportValidateMode,
 *   pool: object[],
 *   getFieldLabel: (key: string) => string,
 *   lang?: string,
 *   acceptanceCtx?: { type?: string, lang?: string, method?: string, supplier?: string }|null,
 *   allPool?: object[],
 *   mustMatchFields?: string[]
 * }} options
 * @returns {object}
 */
export function validateMappedShipRow(shipRow, options) {
  const { mode, pool, getFieldLabel } = options;
  const mappedKeys = shipRow.mappedKeys || [];
  const fieldValues = shipRow.fieldValues || {};
  const mustMatchSet = Array.isArray(options.mustMatchFields)
    ? new Set(options.mustMatchFields.filter(Boolean))
    : null;

  const base = {
    ...shipRow,
    result: '通过',
    failReason: '',
    resultTypes: /** @type {string[]} */ ([]),
    orderLine: null,
    systemListPrice: '',
    systemNetPrice: '',
    systemPendingSets: '',
    systemCopies: ''
  };

  const receiveSets = normalizeQty(fieldValues.receiveQty ?? shipRow.receiveSets);
  const copiesInSet = normalizeQty(fieldValues.volCount ?? shipRow.copiesInSet);
  const listPrice = normalizeMoney(fieldValues.listPrice ?? shipRow.listPrice);
  const price = normalizeMoney(fieldValues.price ?? shipRow.price);
  const netPrice = normalizeMoney(fieldValues.netPrice ?? shipRow.netPrice);
  const resourceType = String(options.acceptanceCtx?.type || '').trim();
  const isAv = resourceType === '视听资料';
  /** 纸质书必填定价；视听必填码洋 */
  const moneyOk = isAv ? Boolean(listPrice) : Boolean(price || listPrice);

  if (!String(shipRow.orderLineNo || fieldValues.orderLine || '').trim()) {
    return { ...base, result: '数据错误', failReason: '数据解析失败', resultTypes: ['数据错误'] };
  }
  if (!moneyOk || !netPrice) {
    return { ...base, result: '数据错误', failReason: '数据解析失败', resultTypes: ['数据错误'] };
  }
  if (receiveSets == null || copiesInSet == null) {
    return { ...base, result: '数据错误', failReason: '数据解析失败', resultTypes: ['数据错误'] };
  }

  const orderLineNo = String(shipRow.orderLineNo || fieldValues.orderLine || '').trim();
  const { line, attrDiffs } = resolveShipOrderLineMatch(
    orderLineNo,
    pool,
    options.allPool || pool,
    options.acceptanceCtx
  );

  if (!line) {
    return {
      ...base,
      result: '未匹配',
      failReason: '无对应可收货订单行',
      resultTypes: ['未匹配']
    };
  }

  if (attrDiffs.length) {
    return {
      ...base,
      orderLine: { ...line },
      result: '验收单不匹配',
      failReason: attrDiffs.join('；'),
      resultTypes: ['验收单不匹配']
    };
  }

  const lang = options.lang || options.acceptanceCtx?.lang || line._matchCtx?.lang || line.lang || '中文';
  const systemPending = Number(line.pendingSets) || 0;
  const systemCopies = Number(line.copies ?? line.piecesInSet) || 0;
  const systemListPrice = getLineListPrice(line, lang);
  const systemNetPrice = getLineNetPrice(line);

  /** @type {string[]} */
  const types = [];
  /** @type {string[]} */
  const reasons = [];

  let storedReceiveSets = receiveSets;
  let qtyOverPending = false;
  let qtyOverPendingReason = '';
  /** @type {Record<string, string>} */
  let outFieldValues = fieldValues;

  if (receiveSets <= 0) {
    types.push('套数非法');
    reasons.push('套数 ≤ 0');
  } else if (receiveSets > systemPending) {
    if (mode === 'precheck') {
      qtyOverPending = true;
      qtyOverPendingReason = `套数大于待收（发货单 ${receiveSets}/待收 ${systemPending}）`;
      storedReceiveSets = systemPending;
      outFieldValues = { ...fieldValues, receiveQty: String(systemPending) };
    } else {
      types.push('套数非法');
      reasons.push('套数大于待收');
    }
  }

  if (mode === 'precheck') {
    const compareKeys = mappedKeys.filter(key => key && key !== MATCH_KEY_FIELD);
    compareKeys.forEach(key => {
      // 收货套数不走「不一致」：≤0 为套数非法；预验收＞待收按待收存储并导出异常
      if (key === 'receiveQty') return;
      // 若传入须一致列表，则仅校验列表内字段；未传则保持旧行为（全部比对，兼容批验收）
      if (mustMatchSet && !mustMatchSet.has(key)) return;
      const shipRaw = fieldValues[key] ?? '';
      const { equal, shipDisplay, systemDisplay } = compareMappedField(key, shipRaw, line, lang);
      if (!equal) {
        if (!types.includes('不一致')) types.push('不一致');
        reasons.push(`"${getFieldLabel(key)}"订单行 ${systemDisplay}/发货单${shipDisplay}`);
      }
    });
  }

  const joined = joinValidationOutcomes(types, reasons);
  return {
    ...base,
    fieldValues: outFieldValues,
    orderLine: { ...line },
    systemListPrice,
    systemNetPrice,
    systemPendingSets: systemPending,
    systemCopies,
    resultTypes: types,
    result: joined.result,
    failReason: joined.failReason,
    qtyOverPending,
    qtyOverPendingReason,
    // 预验收超收按待收套数存储；其它模式仍用发货单值
    receiveSets: storedReceiveSets,
    copiesInSet,
    listPrice: listPrice || price,
    price: price || listPrice,
    netPrice
  };
}

/**
 * @param {unknown} value
 * @returns {string}
 */
function escapeExcelXml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/**
 * 导出校验结果 Excel：原发货单列（原顺序）+ 校验结果 + 失败原因
 * @param {object[]} validatedRows
 * @param {string[]} fileColumns
 * @param {string} [fileName]
 */
export function exportMappedValidationResult(validatedRows, fileColumns, fileName) {
  const cols = fileColumns?.length
    ? fileColumns
    : (validatedRows[0]?.fileColumns || Object.keys(validatedRows[0]?.sourceRow || {}));
  const headers = [...cols, '校验结果', '失败原因'];
  const dataRows = (validatedRows || []).map(r => {
    const source = r.sourceRow || {};
    return [...cols.map(c => source[c] ?? ''), r.result ?? '', r.failReason ?? ''];
  });

  const xmlRows = [headers, ...dataRows]
    .map(row => {
      const cells = row
        .map(cell => `<Cell><Data ss:Type="String">${escapeExcelXml(cell)}</Data></Cell>`)
        .join('');
      return `<Row>${cells}</Row>`;
    })
    .join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<?mso-application progid="Excel.Sheet"?>
<Workbook xmlns="urn:schemas-microsoft-com:office:spreadsheet"
 xmlns:o="urn:schemas-microsoft-com:office:office"
 xmlns:x="urn:schemas-microsoft-com:office:excel"
 xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet">
 <Worksheet ss:Name="校验结果">
  <Table>${xmlRows}</Table>
 </Worksheet>
</Workbook>`;

  const downloadName = String(fileName || `校验结果_${Date.now()}.xls`)
    .replace(/\.csv$/i, '.xls')
    .replace(/\.xlsx$/i, '.xls');
  const blob = new Blob([`\uFEFF${xml}`], { type: 'application/vnd.ms-excel;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = downloadName.endsWith('.xls') ? downloadName : `${downloadName}.xls`;
  a.click();
  URL.revokeObjectURL(url);
}

/**
 * 失败数据导出：校验失败行，以及预验收「套数大于待收」虽通过仍需导出的行
 * @param {object} row
 * @returns {boolean}
 */
export function rowHasFailExport(row) {
  if (!row) return false;
  if (row.qtyOverPending) return true;
  return Boolean(row.result && row.result !== '通过');
}

/**
 * @param {object} row
 * @returns {string}
 */
export function getFailExportReason(row) {
  const parts = [];
  if (row?.qtyOverPending) {
    parts.push(row.qtyOverPendingReason || '套数大于待收');
  }
  if (row?.result && row.result !== '通过' && row.failReason) {
    parts.push(row.failReason);
  }
  return parts.join('；');
}

/**
 * 原发货单列（原顺序）+ 失败原因（不含校验结果列）
 * @param {object[]} validatedRows
 * @param {string[]} fileColumns
 * @param {string} [fileName]
 */
export function exportFailedMappedRows(validatedRows, fileColumns, fileName) {
  const failed = (validatedRows || []).filter(rowHasFailExport);
  const cols = fileColumns?.length
    ? fileColumns
    : (failed[0]?.fileColumns || Object.keys(failed[0]?.sourceRow || {}));
  const headers = [...cols, '失败原因'];
  const dataRows = failed.map(r => {
    const source = r.sourceRow || {};
    return [...cols.map(c => source[c] ?? ''), getFailExportReason(r)];
  });

  const xmlRows = [headers, ...dataRows]
    .map(row => {
      const cells = row
        .map(cell => `<Cell><Data ss:Type="String">${escapeExcelXml(cell)}</Data></Cell>`)
        .join('');
      return `<Row>${cells}</Row>`;
    })
    .join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<?mso-application progid="Excel.Sheet"?>
<Workbook xmlns="urn:schemas-microsoft-com:office:spreadsheet"
 xmlns:o="urn:schemas-microsoft-com:office:office"
 xmlns:x="urn:schemas-microsoft-com:office:excel"
 xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet">
 <Worksheet ss:Name="失败数据">
  <Table>${xmlRows}</Table>
 </Worksheet>
</Workbook>`;

  const downloadName = String(fileName || `失败数据_${Date.now()}.xls`)
    .replace(/\.csv$/i, '.xls')
    .replace(/\.xlsx$/i, '.xls');
  const blob = new Blob([`\uFEFF${xml}`], { type: 'application/vnd.ms-excel;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = downloadName.endsWith('.xls') ? downloadName : `${downloadName}.xls`;
  a.click();
  URL.revokeObjectURL(url);
}
