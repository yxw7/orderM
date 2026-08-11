import { getMatchableOrderLines } from '@/modules/acceptance/data/delivery-import';
import { calcBarcodeAllocation } from '@/modules/acceptance/data/receive-by-item';
import {
  findAcceptanceById,
  isImportableAcceptance,
  markAcceptanceInProgressAfterImport
} from '@/modules/acceptance/data/acceptance-list';
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
  normalizeQty,
  validateMappedShipRow
} from '@/modules/acceptance/data/ship-import-shared';
import {
  PRE_ACCEPT_MOCK_FILE_COLUMNS,
  PRE_ACCEPT_REQUIRED_FIELDS,
  PRE_ACCEPT_COLUMN_AUTO_MAP,
  buildPreAcceptDefaultColumnMapping,
  getPreAcceptFieldLabel,
  getPreAcceptStandardFieldGroups,
  getPreAcceptAllMatchableOrderLines,
  sanitizePreAcceptColumnMapping,
  validatePreAcceptMapping
} from '@/modules/acceptance/data/pre-accept-wizard';

export {
  getLineListPrice,
  getLineNetPrice,
  normalizeMoney,
  normalizeQty
};

export const BATCH_IMPORT_STEPS = [
  { step: 1, title: '上传文件' },
  { step: 2, title: '字段映射' },
  { step: 3, title: '解析文件' },
  { step: 4, title: '确认验收' }
];

const ALLOWED_EXTENSIONS = ['.xls', '.xlsx'];

/**
 * @param {object} ctx
 * @param {string[]} [viewableSubscribers]
 * @returns {object[]}
 */
export function getBatchImportMatchableOrderLines(ctx, viewableSubscribers) {
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
 * @param {string} fileName
 * @returns {boolean}
 */
export function isAllowedBatchImportFileName(fileName) {
  const lower = (fileName || '').toLowerCase();
  return ALLOWED_EXTENSIONS.some(ext => lower.endsWith(ext));
}

export {
  buildPreAcceptDefaultColumnMapping as buildBatchDefaultColumnMapping,
  getPreAcceptStandardFieldGroups as getBatchStandardFieldGroups,
  sanitizePreAcceptColumnMapping as sanitizeBatchColumnMapping,
  validatePreAcceptMapping as validateBatchMapping,
  PRE_ACCEPT_REQUIRED_FIELDS as BATCH_REQUIRED_FIELDS,
  PRE_ACCEPT_MOCK_FILE_COLUMNS as BATCH_MOCK_FILE_COLUMNS,
  PRE_ACCEPT_COLUMN_AUTO_MAP as BATCH_COLUMN_AUTO_MAP
};

/**
 * @param {string} fileName
 * @param {object} ctx
 * @returns {{ ok: true, fileColumns: string[], parsedRows: Record<string, string>[] } | { ok: false, error: string }}
 */
export function parseBatchImportFileMock(fileName, ctx) {
  if (!isAllowedBatchImportFileName(fileName)) {
    return { ok: false, error: '请上传 xls/xlsx 格式文件' };
  }

  const scope = getCurrentViewableSubscribers();
  if (!scope.length) {
    return { ok: false, error: NO_ASSOCIATED_SUBSCRIBER_MESSAGE };
  }

  const pool = getBatchImportMatchableOrderLines(ctx, scope);
  if (!pool.length) {
    return { ok: false, error: '当前关联订户下无可收货订单行，无法演示批验收' };
  }

  const withDiff = (fileName || '').includes('差异');
  const withOver = (fileName || '').includes('超收');
  const withMismatch = (fileName || '').includes('头不一致') || (fileName || '').includes('不匹配');
  const allPool = getPreAcceptAllMatchableOrderLines(scope);
  const demoPool = withMismatch
    ? [
        ...(pool.slice(0, 2)),
        ...(allPool.filter(l => !pool.some(p => p.orderLine === l.orderLine
          && p.type === l.type && p.lang === l.lang
          && p.method === l.method && p.supplier === l.supplier)).slice(0, 1))
      ]
    : pool;
  const parsedRows = demoPool.slice(0, Math.min(3, demoPool.length)).map((line, index) => {
    const listPrice = getLineListPrice(line, ctx.lang);
    const netPrice = getLineNetPrice(line);
    const copies = Number(line.copies ?? line.piecesInSet) || 0;
    let receiveSets = Number(line.pendingSets) || 0;
    let shipList = listPrice;

    if (withDiff && index === 0) {
      shipList = normalizeMoney(Number(listPrice) + 1);
      receiveSets = Math.max(1, Math.min(receiveSets, Math.max(receiveSets - 1, 1)));
    }
    if (withOver && index === 0) {
      receiveSets = (Number(line.pendingSets) || 0) + 1;
    }

    return {
      订单行号: line.orderLine,
      码洋: shipList,
      实洋: netPrice,
      收货套数: String(receiveSets),
      套内册数: String(copies),
      ISBN: line.isbn || '',
      书名: line.title || ''
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

/**
 * @param {Record<string, string>[]} parsedRows
 * @param {Record<string, string>} columnMapping
 * @param {string[]} fileColumns
 */
export function buildBatchShipRows(parsedRows, columnMapping, fileColumns) {
  return buildMappedShipRows(parsedRows, columnMapping, fileColumns);
}

/**
 * @param {object} shipRow
 * @param {object} ctx
 * @param {string[]} [viewableSubscribers]
 */
export function validateBatchImportRow(shipRow, ctx, viewableSubscribers) {
  const scope = viewableSubscribers ?? getCurrentViewableSubscribers();
  const pool = getBatchImportMatchableOrderLines(ctx, scope);
  const allPool = getPreAcceptAllMatchableOrderLines(scope);
  return validateMappedShipRow(shipRow, {
    mode: 'receive',
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
 */
export function validateBatchImportRows(shipRows, ctx) {
  const viewableSubscribers = getCurrentViewableSubscribers();
  const rows = (shipRows || []).map(r => validateBatchImportRow(r, ctx, viewableSubscribers));
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
 * @param {string[]} [fileColumns]
 * @param {string} [fileName]
 */
export function exportBatchImportValidationResult(validatedRows, fileColumns, fileName) {
  exportMappedValidationResult(
    validatedRows,
    fileColumns || validatedRows[0]?.fileColumns || [],
    fileName || `批验收校验结果_${Date.now()}.xls`
  );
}

/**
 * @param {object[]} passedRows
 */
export function summarizeBatchImportReceive(passedRows) {
  let sets = 0;
  let volumes = 0;
  let listAmount = 0;
  let netAmount = 0;
  (passedRows || []).forEach(r => {
    const receiveSets = Number(r.receiveSets) || 0;
    const copies = Number(r.copiesInSet) || Number(r.orderLine?.copies) || 0;
    const listPrice = Number(r.listPrice) || Number(normalizeMoney(r.orderLine?.price)) || 0;
    const netPrice = Number(r.netPrice) || Number(normalizeMoney(r.orderLine?.actualPrice ?? r.orderLine?.price)) || 0;
    const rowVolumes = receiveSets * copies;
    sets += receiveSets;
    volumes += rowVolumes;
    listAmount += listPrice * rowVolumes;
    netAmount += netPrice * rowVolumes;
  });
  return {
    species: (passedRows || []).length,
    sets,
    volumes,
    listAmount: listAmount.toFixed(2),
    netAmount: netAmount.toFixed(2)
  };
}

export function buildBatchImportBarcodeResult(ctx, passedRows) {
  const needsBarcode = Boolean(ctx?.autoBarcode || ctx?.barcode === '是');
  if (!needsBarcode || !passedRows?.length) return null;

  const summary = summarizeBatchImportReceive(passedRows);
  if (summary.volumes <= 0) return null;

  const barcodeStart =
    passedRows.find(r => r.orderLine?.barcodeStart)?.orderLine.barcodeStart
    || '001T269300001';

  return calcBarcodeAllocation(barcodeStart, summary.volumes, 1, { simulateGaps: false });
}

export const BATCH_IMPORT_RECEIVE_FAIL_MESSAGE = '验收失败，请重新验收或联系管理员';

export function exportBatchImportReceiveFailures(failedRows, fileName) {
  const headers = ['订单行号', '失败原因'];
  const lines = (failedRows || []).map(r =>
    [r.orderLineNo, r.failReason]
      .map(v => `"${String(v ?? '').replace(/"/g, '""')}"`)
      .join(',')
  );
  const content = `\uFEFF${headers.join(',')}\n${lines.join('\n')}\n`;
  const blob = new Blob([content], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = fileName || `批验收收货异常_${Date.now()}.csv`;
  a.click();
  URL.revokeObjectURL(url);
}

/**
 * 确认验收：发货套数 ≤ 实时待收即可写入（允许部分成功）
 */
export function confirmBatchImportReceive(ctx, passedRows, options = {}) {
  const hardFail = (failType) => ({
    ok: false,
    partial: false,
    message: BATCH_IMPORT_RECEIVE_FAIL_MESSAGE,
    failType,
    successCount: 0,
    failCount: 0,
    failedOrderLineNos: [],
    failedRows: [],
    receiveCount: 0,
    receiveSets: 0,
    summary: null,
    barcodeResult: null
  });

  if (!passedRows?.length) return hardFail('empty');
  if (options.forceFail) return hardFail('acceptance_status');

  const acceptanceId = ctx?.id || ctx?.acceptanceId;
  const liveAcceptance = findAcceptanceById(acceptanceId);
  const statusSource = liveAcceptance || ctx;
  if (!isImportableAcceptance(statusSource)) {
    return hardFail('acceptance_status');
  }

  const scope = getCurrentViewableSubscribers();
  const livePool = getBatchImportMatchableOrderLines(ctx, scope);
  /** @type {object[]} */
  const successRows = [];
  /** @type {{ orderLineNo: string, failReason: string }[]} */
  const failedRows = [];

  passedRows.forEach((row, index) => {
    const orderLineNo = String(row.orderLineNo || '').trim();
    const shipSets = Number(row.receiveSets) || 0;
    const liveLine = livePool.find(l => l.orderLine === orderLineNo);
    const pending = Number(liveLine?.pendingSets) || 0;
    const forced = Boolean(options.forcePendingMismatch && index === 0);

    if (!liveLine) {
      failedRows.push({ orderLineNo: orderLineNo || `行${row.rowNo}`, failReason: '无对应可收货订单行' });
      return;
    }
    if (forced || shipSets > pending || shipSets <= 0) {
      failedRows.push({
        orderLineNo,
        failReason: `待收不足或套数非法（待收 ${pending}/发货单 ${shipSets}）`
      });
      return;
    }
    successRows.push(row);
  });

  const successCount = successRows.length;
  const failCount = failedRows.length;
  const failedOrderLineNos = failedRows.map(r => r.orderLineNo);

  if (successCount > 0 && acceptanceId) {
    markAcceptanceInProgressAfterImport(acceptanceId);
  }

  const summary = summarizeBatchImportReceive(successRows);
  const barcodeResult = successCount ? buildBatchImportBarcodeResult(ctx, successRows) : null;

  return {
    ok: successCount > 0,
    partial: successCount > 0 && failCount > 0,
    message: `已成功验收 ${successCount} 条数据，失败 ${failCount} 条数据。`,
    failType: '',
    successCount,
    failCount,
    failedOrderLineNos,
    failedRows,
    receiveCount: successCount,
    receiveSets: summary.sets,
    summary,
    barcodeResult
  };
}
