import { markAcceptanceInProgressAfterImport } from '@/modules/acceptance/data/acceptance-list';
import {
  PREVIEW_MATCHING_DURATION_MS,
  MOCK_FILE_COLUMNS,
  MOCK_PARSED_ROWS,
  buildDefaultColumnMapping,
  buildShipFieldValues,
  buildPreviewRows,
  buildChildrenFromPickedLines,
  getMatchableOrderLines,
  getOrderLineMatchFieldValue,
  getActiveStandardFields,
  getPreviewMappedColumns,
  validatePreviewStep,
  validateLiveOrderLines
} from '@/modules/acceptance/data/delivery-import';

const STORAGE_KEY = 'orderm_delivery_import_tasks';
/** 示例任务编号后缀（901-907 预留） */
const SAMPLE_TASK_SEQS = ['901', '902', '903', '904', '905', '906', '907'];
/** 每个匹配状态页签的示例行数 */
const SAMPLE_LINES_PER_STATUS = 10;
/** @type {('success'|'partial'|'fail'|'over')[]} */
const SAMPLE_MATCH_STATUSES = ['success', 'partial', 'fail', 'over'];

/** @typedef {'not_started'|'matching'|'pending_review'|'reviewing'|'completed'|'cancelled'|'match_failed'} TaskStatus */

/** @type {Map<string, ReturnType<typeof setInterval>>} */
const activeMatchJobs = new Map();

/** @type {Record<TaskStatus, { text: string, cls: string }>} */
export const TASK_STATUS_MAP = {
  not_started: { text: '未开始', cls: 'text-gray-500' },
  matching: { text: '匹配中', cls: 'text-sky-600' },
  pending_review: { text: '待核对', cls: 'text-amber-600' },
  reviewing: { text: '核对中', cls: 'text-blue-600' },
  completed: { text: '已完成', cls: 'text-green-600' },
  cancelled: { text: '已取消', cls: 'text-gray-500' },
  match_failed: { text: '匹配失败', cls: 'text-red-500' }
};

export const PREVIEW_TAB_OPTIONS = [
  { key: 'all', label: '全部' },
  { key: 'success', label: '匹配成功' },
  { key: 'partial', label: '部分收货' },
  { key: 'over', label: '超收' },
  { key: 'fail', label: '匹配失败' },
  { key: 'submitted', label: '已提交' }
];

/**
 * @returns {object[]}
 */
function loadAllTasksRaw() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

/**
 * @param {object[]} tasks
 */
function persistTasks(tasks) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

/**
 * @param {number} hoursAgo
 * @returns {string}
 */
function isoHoursAgo(hoursAgo) {
  const d = new Date();
  d.setHours(d.getHours() - hoursAgo);
  return d.toISOString();
}

/**
 * @param {string} status
 * @param {number} seq
 * @returns {string}
 */
function statusDemoTitle(status, seq) {
  const map = {
    success: '匹配成功',
    partial: '部分收货',
    fail: '匹配失败',
    over: '超收'
  };
  return `${map[status] || status}示例书目 ${seq}`;
}

/**
 * 构建任务详情各状态页签示例行（每状态 10 条，共 50 条）
 * @param {string} taskId
 * @param {object} ctx
 * @param {{ submitMode?: 'none'|'mixed'|'all' }} [options]
 * @returns {object[]}
 */
function buildSamplePreviewLines(taskId, ctx, options = {}) {
  const { submitMode = 'none' } = options;
  const mappingConfig = buildDefaultColumnMapping(MOCK_FILE_COLUMNS, ctx);
  const mappedKeys = getMappedDisplayFieldKeys(mappingConfig, ctx, MOCK_FILE_COLUMNS);
  const orderLines = getMatchableOrderLines(ctx);
  const submittedAt = isoHoursAgo(2);
  /** @type {object[]} */
  const lines = [];
  let rowIndex = 0;

  /**
   * @param {number} idx
   * @returns {object}
   */
  const pickLine = idx => orderLines[idx % Math.max(orderLines.length, 1)] || {};

  /**
   * @param {'success'|'partial'|'fail'|'over'} status
   * @param {number} seq
   * @param {object} baseOrder
   * @returns {{ fieldValues: Record<string, string|number>, children: object[] }}
   */
  function buildRowPayload(status, seq, baseOrder) {
    /** @type {Record<string, string|number>} */
    const fieldValues = { receiveQty: 1 };
    mappedKeys.forEach(key => {
      if (key === 'receiveQty') return;
      const val = getOrderLineMatchFieldValue(baseOrder, key);
      fieldValues[key] = val ?? (key === 'isbn' ? `978700000${String(seq).padStart(2, '0')}` : '—');
    });
    if (!fieldValues.isbn) fieldValues.isbn = `978700000${String(seq).padStart(2, '0')}`;
    if (!fieldValues.title) fieldValues.title = statusDemoTitle(status, seq);

    let children = [];
    if (status === 'fail') {
      fieldValues.receiveQty = 1;
      return { fieldValues, children };
    }

    const line = pickLine(seq);
    const pending = line.pendingSets ?? 2;

    if (status === 'success') {
      fieldValues.receiveQty = pending;
      children = buildChildrenFromPickedLines([line], pending, mappedKeys);
    } else if (status === 'partial') {
      fieldValues.receiveQty = Math.max(1, pending - 1);
      children = buildChildrenFromPickedLines([line], fieldValues.receiveQty, mappedKeys);
    } else if (status === 'over') {
      fieldValues.receiveQty = pending + 3;
      children = buildChildrenFromPickedLines([line], fieldValues.receiveQty, mappedKeys);
    }

    return { fieldValues, children };
  }

  SAMPLE_MATCH_STATUSES.forEach(status => {
    for (let seq = 1; seq <= SAMPLE_LINES_PER_STATUS; seq += 1) {
      const baseOrder = pickLine(rowIndex);
      const { fieldValues, children } = buildRowPayload(status, seq, baseOrder);
      const line = toTaskLine({ status, fieldValues, children, expanded: false }, rowIndex, taskId);
      lines.push(line);
      rowIndex += 1;
    }
  });

  for (let seq = 1; seq <= SAMPLE_LINES_PER_STATUS; seq += 1) {
    const status = SAMPLE_MATCH_STATUSES[(seq - 1) % SAMPLE_MATCH_STATUSES.length];
    const baseOrder = pickLine(rowIndex);
    const { fieldValues, children } = buildRowPayload(status, seq, baseOrder);
    const line = toTaskLine({ status, fieldValues, children, expanded: false }, rowIndex, taskId);
    line.submitStatus = 'submitted';
    line.submittedAt = submittedAt;
    lines.push(line);
    rowIndex += 1;
  }

  if (submitMode === 'mixed') {
    lines.slice(0, SAMPLE_LINES_PER_STATUS).forEach(line => {
      line.submitStatus = 'submitted';
      line.submittedAt = submittedAt;
    });
  }

  if (submitMode === 'all') {
    lines.forEach(line => {
      line.submitStatus = 'submitted';
      line.submittedAt = submittedAt;
    });
  }

  return lines;
}

/**
 * @param {string} datePart yyyymmdd
 * @param {string} seq 三位序号
 * @returns {string}
 */
function sampleTaskId(datePart, seq) {
  return `T${datePart}${seq}`;
}

/**
 * 构建各状态示例任务（901-906）
 * @returns {object[]}
 */
function buildSampleTasks() {
  const pad = n => String(n).padStart(2, '0');
  const now = new Date();
  const datePart = `${now.getFullYear()}${pad(now.getMonth() + 1)}${pad(now.getDate())}`;

  const ctxBook = {
    id: 'ysPG00120200602006',
    name: '2025年02月20日第一批',
    type: '纸质书',
    lang: '西语',
    supplier: '北京人天',
    shipNo: 'ZGBBTSG21121301-266',
    status: 'inProgress'
  };
  const ctxAv = {
    id: 'ysPG00120200602004',
    name: '测试验收',
    type: '视听资料',
    lang: '英文',
    supplier: '湖北三新',
    shipNo: '20200602发货单004',
    status: 'notStarted'
  };
  const ctxAv2 = {
    id: 'ysPG00120200602009',
    name: '测试验收2',
    type: '视听资料',
    lang: '中文',
    supplier: '湖北三新',
    shipNo: '20200603发货单002',
    status: 'inProgress'
  };

  const mappingConfig = buildDefaultColumnMapping(MOCK_FILE_COLUMNS, ctxBook);
  const basePayload = {
    fileColumns: [...MOCK_FILE_COLUMNS],
    parsedRows: [...MOCK_PARSED_ROWS],
    mappingConfig,
    matchFields: ['isbn', 'title']
  };

  const id901 = sampleTaskId(datePart, SAMPLE_TASK_SEQS[0]);
  const id902 = sampleTaskId(datePart, SAMPLE_TASK_SEQS[1]);
  const id903 = sampleTaskId(datePart, SAMPLE_TASK_SEQS[2]);
  const id904 = sampleTaskId(datePart, SAMPLE_TASK_SEQS[3]);
  const id905 = sampleTaskId(datePart, SAMPLE_TASK_SEQS[4]);
  const id906 = sampleTaskId(datePart, SAMPLE_TASK_SEQS[5]);
  const id907 = sampleTaskId(datePart, SAMPLE_TASK_SEQS[6]);

  return [
    {
      taskId: id907,
      acceptanceId: ctxBook.id,
      acceptanceName: ctxBook.name,
      acceptanceSnapshot: { ...ctxBook },
      fileName: '发货单_未开始示例.xlsx',
      ...basePayload,
      status: 'not_started',
      totalRows: MOCK_PARSED_ROWS.length,
      matchedRows: 0,
      progress: 0,
      failReason: null,
      lines: [],
      isSample: true,
      draftRevision: 0,
      draftSavedAt: null,
      createdBy: '当前用户',
      createdAt: isoHoursAgo(0.2),
      updatedAt: isoHoursAgo(0.2),
      completedAt: null,
      cancelledAt: null
    },
    {
      taskId: id901,
      acceptanceId: ctxBook.id,
      acceptanceName: ctxBook.name,
      acceptanceSnapshot: { ...ctxBook },
      fileName: '发货单_匹配中示例.xlsx',
      ...basePayload,
      status: 'matching',
      totalRows: 500,
      matchedRows: 320,
      progress: 64,
      failReason: null,
      lines: [],
      isSample: true,
      draftRevision: 0,
      draftSavedAt: null,
      createdBy: '当前用户',
      createdAt: isoHoursAgo(1),
      updatedAt: isoHoursAgo(0),
      completedAt: null,
      cancelledAt: null
    },
    {
      taskId: id902,
      acceptanceId: ctxAv.id,
      acceptanceName: ctxAv.name,
      acceptanceSnapshot: { ...ctxAv },
      fileName: '发货单_待核对示例.xlsx',
      ...basePayload,
      mappingConfig: buildDefaultColumnMapping(MOCK_FILE_COLUMNS, ctxAv),
      status: 'pending_review',
      totalRows: SAMPLE_LINES_PER_STATUS * (SAMPLE_MATCH_STATUSES.length + 1),
      matchedRows: SAMPLE_LINES_PER_STATUS * (SAMPLE_MATCH_STATUSES.length + 1),
      progress: 100,
      failReason: null,
      lines: buildSamplePreviewLines(id902, ctxAv, { submitMode: 'none' }),
      isSample: true,
      draftRevision: 0,
      draftSavedAt: null,
      createdBy: '当前用户',
      createdAt: isoHoursAgo(6),
      updatedAt: isoHoursAgo(5),
      completedAt: null,
      cancelledAt: null
    },
    {
      taskId: id903,
      acceptanceId: ctxAv2.id,
      acceptanceName: ctxAv2.name,
      acceptanceSnapshot: { ...ctxAv2 },
      fileName: '发货单_核对中示例.xlsx',
      ...basePayload,
      mappingConfig: buildDefaultColumnMapping(MOCK_FILE_COLUMNS, ctxAv2),
      status: 'reviewing',
      totalRows: SAMPLE_LINES_PER_STATUS * (SAMPLE_MATCH_STATUSES.length + 1),
      matchedRows: SAMPLE_LINES_PER_STATUS * (SAMPLE_MATCH_STATUSES.length + 1),
      progress: 100,
      failReason: null,
      lines: buildSamplePreviewLines(id903, ctxAv2, { submitMode: 'none' }),
      isSample: true,
      draftRevision: 1,
      draftSavedAt: isoHoursAgo(4),
      createdBy: '当前用户',
      createdAt: isoHoursAgo(12),
      updatedAt: isoHoursAgo(3),
      completedAt: null,
      cancelledAt: null
    },
    {
      taskId: id904,
      acceptanceId: ctxBook.id,
      acceptanceName: ctxBook.name,
      acceptanceSnapshot: { ...ctxBook, status: 'inProgress' },
      fileName: '发货单_已完成示例.xlsx',
      ...basePayload,
      status: 'completed',
      totalRows: SAMPLE_LINES_PER_STATUS * (SAMPLE_MATCH_STATUSES.length + 1),
      matchedRows: SAMPLE_LINES_PER_STATUS * (SAMPLE_MATCH_STATUSES.length + 1),
      progress: 100,
      failReason: null,
      lines: buildSamplePreviewLines(id904, ctxBook, { submitMode: 'all' }),
      isSample: true,
      draftRevision: 0,
      draftSavedAt: null,
      createdBy: '当前用户',
      createdAt: isoHoursAgo(48),
      updatedAt: isoHoursAgo(24),
      completedAt: isoHoursAgo(24),
      cancelledAt: null
    },
    {
      taskId: id905,
      acceptanceId: ctxAv.id,
      acceptanceName: ctxAv.name,
      acceptanceSnapshot: { ...ctxAv },
      fileName: '发货单_已取消示例.xlsx',
      ...basePayload,
      mappingConfig: buildDefaultColumnMapping(MOCK_FILE_COLUMNS, ctxAv),
      status: 'cancelled',
      totalRows: SAMPLE_LINES_PER_STATUS * (SAMPLE_MATCH_STATUSES.length + 1),
      matchedRows: SAMPLE_LINES_PER_STATUS * (SAMPLE_MATCH_STATUSES.length + 1),
      progress: 100,
      failReason: null,
      lines: buildSamplePreviewLines(id905, ctxAv, { submitMode: 'none' }),
      isSample: true,
      draftRevision: 0,
      draftSavedAt: null,
      createdBy: '当前用户',
      createdAt: isoHoursAgo(72),
      updatedAt: isoHoursAgo(60),
      completedAt: null,
      cancelledAt: isoHoursAgo(60)
    },
    {
      taskId: id906,
      acceptanceId: ctxAv2.id,
      acceptanceName: ctxAv2.name,
      acceptanceSnapshot: { ...ctxAv2 },
      fileName: '发货单_匹配失败示例.xlsx',
      ...basePayload,
      mappingConfig: buildDefaultColumnMapping(MOCK_FILE_COLUMNS, ctxAv2),
      status: 'match_failed',
      totalRows: MOCK_PARSED_ROWS.length,
      matchedRows: 0,
      progress: 0,
      failReason: '文件解析失败或匹配引擎异常，请检查文件格式后重新导入',
      lines: [],
      isSample: true,
      draftRevision: 0,
      draftSavedAt: null,
      createdBy: '当前用户',
      createdAt: isoHoursAgo(36),
      updatedAt: isoHoursAgo(35),
      completedAt: null,
      cancelledAt: null
    }
  ];
}

/**
 * 补齐或升级各状态示例任务（按任务编号去重，示例任务行数不足时刷新）
 */
function ensureSampleTasks() {
  const tasks = loadAllTasksRaw();
  const samples = buildSampleTasks();
  const expectedLineCount = SAMPLE_LINES_PER_STATUS * (SAMPLE_MATCH_STATUSES.length + 1);
  let changed = false;

  samples.forEach(sample => {
    const idx = tasks.findIndex(t => t.taskId === sample.taskId);
    if (idx < 0) {
      tasks.push(sample);
      changed = true;
      return;
    }
    const existing = tasks[idx];
    if (!existing.isSample) return;
    const lineCount = existing.lines?.length || 0;
    if (lineCount < expectedLineCount) {
      tasks[idx] = {
        ...sample,
        createdAt: existing.createdAt,
        updatedAt: new Date().toISOString()
      };
      changed = true;
    }
  });

  if (changed) persistTasks(tasks);
}

/**
 * @param {object[]} tasks
 * @param {string} taskId
 * @returns {number}
 */
function findTaskIndex(tasks, taskId) {
  return tasks.findIndex(t => t.taskId === taskId);
}

/**
 * @param {Record<string, string>} mappingConfig
 * @param {object} ctx
 * @param {string[]} [fileColumns]
 * @returns {string[]}
 */
function getMappedDisplayFieldKeys(mappingConfig, ctx, fileColumns) {
  return getPreviewMappedColumns(mappingConfig, ctx, fileColumns).map(f => f.value);
}

/**
 * @param {object} previewRow
 * @param {number} rowIndex
 * @param {string} taskId
 * @returns {object}
 */
function toTaskLine(previewRow, rowIndex, taskId) {
  return {
    lineId: `${taskId}-L${rowIndex + 1}`,
    taskId,
    rowIndex,
    id: `${taskId}-L${rowIndex + 1}`,
    status: previewRow.status,
    fieldValues: { ...previewRow.fieldValues },
    children: (previewRow.children || []).map(ch => ({ ...ch })),
    expanded: false,
    submitStatus: 'pending',
    submittedAt: null,
    selected: false
  };
}

/**
 * @param {object} task
 */
function refreshTaskStatus(task) {
  if (['cancelled', 'match_failed', 'matching', 'completed'].includes(task.status)) return;

  const lines = task.lines || [];
  const pendingCount = lines.filter(l => l.submitStatus === 'pending').length;
  const submittedCount = lines.filter(l => l.submitStatus === 'submitted').length;

  if (lines.length > 0 && pendingCount === 0) {
    task.status = 'completed';
    task.completedAt = task.completedAt || new Date().toISOString();
    return;
  }

  if (submittedCount > 0 && pendingCount > 0) {
    task.status = 'reviewing';
    return;
  }

  if (task.status !== 'matching' && task.status !== 'match_failed') {
    task.status = 'pending_review';
  }
}

/**
 * @param {string} taskId
 */
function completeMatching(taskId) {
  const tasks = loadAllTasksRaw();
  const idx = findTaskIndex(tasks, taskId);
  if (idx < 0) return;

  const task = tasks[idx];
  if (task.status !== 'matching') return;

  if ((task.fileName || '').includes('失败')) {
    task.status = 'match_failed';
    task.failReason = '文件解析失败或匹配引擎异常，请检查文件格式后重新导入';
    task.matchedRows = 0;
    task.progress = 0;
    task.updatedAt = new Date().toISOString();
    persistTasks(tasks);
    return;
  }

  const ctx = task.acceptanceSnapshot || {};
  const shipRows = buildShipFieldValues(task.parsedRows || [], task.mappingConfig || {});
  const mappedKeys = getMappedDisplayFieldKeys(task.mappingConfig || {}, ctx, task.fileColumns);
  const previewRows = buildPreviewRows(
    shipRows,
    [...(task.matchFields || [])],
    ctx,
    mappedKeys
  );

  task.lines = previewRows.map((row, i) => toTaskLine(row, i, taskId));
  task.status = 'pending_review';
  task.matchedRows = task.totalRows;
  task.progress = 100;
  task.draftRevision = 0;
  task.draftSavedAt = null;
  task.updatedAt = new Date().toISOString();
  persistTasks(tasks);
}

/**
 * @param {string} taskId
 */
export function startMatchJob(taskId) {
  if (activeMatchJobs.has(taskId)) return;

  const tasks = loadAllTasksRaw();
  const idx = findTaskIndex(tasks, taskId);
  if (idx < 0) return;

  const task = tasks[idx];
  if (task.isSample) return;
  if (!['not_started', 'matching'].includes(task.status)) return;

  if (task.status === 'not_started') {
    task.status = 'matching';
    task.matchedRows = 0;
    task.progress = 0;
    task.updatedAt = new Date().toISOString();
    persistTasks(tasks);
  }

  const total = task.totalRows || 1;
  const duration = PREVIEW_MATCHING_DURATION_MS;
  const startMatched = task.matchedRows || 0;
  const startTime = Date.now() - Math.floor((startMatched / total) * duration);

  const timer = setInterval(() => {
    const tasks = loadAllTasksRaw();
    const idx = findTaskIndex(tasks, taskId);
    if (idx < 0) {
      clearInterval(timer);
      activeMatchJobs.delete(taskId);
      return;
    }

    const current = tasks[idx];
    if (current.status !== 'matching') {
      clearInterval(timer);
      activeMatchJobs.delete(taskId);
      return;
    }

    const elapsed = Date.now() - startTime;
    const ratio = Math.min(1, elapsed / duration);
    current.matchedRows = Math.max(startMatched, Math.floor(total * ratio));
    current.progress = Math.floor(ratio * 100);
    current.updatedAt = new Date().toISOString();
    persistTasks(tasks);

    if (ratio >= 1) {
      clearInterval(timer);
      activeMatchJobs.delete(taskId);
      completeMatching(taskId);
    }
  }, 400);

  activeMatchJobs.set(taskId, timer);
}

/**
 * 恢复 localStorage 中仍为「匹配中」的任务进度模拟
 */
function resumePendingMatchJobs() {
  loadAllTasksRaw().forEach(task => {
    if (['not_started', 'matching'].includes(task.status) && !task.isSample) {
      startMatchJob(task.taskId);
    }
  });
}

/**
 * 生成任务编号：T + yyyymmdd + 三位序列号（001-999）
 * @param {object[]} tasks 已有任务列表
 * @param {Date} [date] 基准日期，默认当天
 * @returns {string}
 */
function generateTaskId(tasks, date = new Date()) {
  const pad = n => String(n).padStart(2, '0');
  const datePart = `${date.getFullYear()}${pad(date.getMonth() + 1)}${pad(date.getDate())}`;
  const prefix = `T${datePart}`;

  let maxSeq = 0;
  tasks.forEach(t => {
    const id = t.taskId || '';
    if (!id.startsWith(prefix) || id.length !== prefix.length + 3) return;
    const seq = Number(id.slice(prefix.length));
    if (!Number.isNaN(seq) && seq > maxSeq) maxSeq = seq;
  });

  const nextSeq = maxSeq + 1;
  if (nextSeq > 999) {
    throw new Error('当日导入任务编号已达上限（999）');
  }
  return `${prefix}${String(nextSeq).padStart(3, '0')}`;
}

/**
 * @param {object} ctx 验收单上下文
 * @param {object} payload
 * @param {string} payload.fileName
 * @param {Record<string, string>} payload.columnMapping
 * @param {string[]} payload.matchFields
 * @param {string[]} payload.fileColumns
 * @param {Record<string, string>[]} payload.parsedRows
 * @returns {object}
 */
export function createDeliveryImportTask(ctx, payload) {
  const tasks = loadAllTasksRaw();
  const now = new Date().toISOString();
  const taskId = generateTaskId(tasks);

  const task = {
    taskId,
    acceptanceId: ctx.id || ctx.acceptanceId || '',
    acceptanceName: ctx.name || '',
    acceptanceSnapshot: { ...ctx },
    fileName: payload.fileName,
    fileColumns: [...(payload.fileColumns || [])],
    parsedRows: [...(payload.parsedRows || [])],
    mappingConfig: { ...(payload.columnMapping || {}) },
    matchFields: [...(payload.matchFields || [])],
    status: 'not_started',
    totalRows: (payload.parsedRows || []).length,
    matchedRows: 0,
    progress: 0,
    failReason: null,
    lines: [],
    draftRevision: 0,
    draftSavedAt: null,
    createdBy: '当前用户',
    createdAt: now,
    updatedAt: now,
    completedAt: null,
    cancelledAt: null
  };

  tasks.unshift(task);
  persistTasks(tasks);
  startMatchJob(taskId);
  return { ...task };
}

/**
 * @param {object} [filters]
 * @returns {object[]}
 */
export function listDeliveryImportTasks(filters = {}) {
  let rows = loadAllTasksRaw();

  if (filters.acceptanceId?.trim()) {
    const kw = filters.acceptanceId.trim().toLowerCase();
    rows = rows.filter(r => (r.acceptanceId || '').toLowerCase().includes(kw));
  }
  if (filters.status) {
    rows = rows.filter(r => r.status === filters.status);
  }
  if (filters.fileName?.trim()) {
    const kw = filters.fileName.trim().toLowerCase();
    rows = rows.filter(r => (r.fileName || '').toLowerCase().includes(kw));
  }

  return rows.sort((a, b) => (b.createdAt || '').localeCompare(a.createdAt || ''));
}

/**
 * @param {string} taskId
 * @returns {object|null}
 */
export function getDeliveryImportTask(taskId) {
  const task = loadAllTasksRaw().find(t => t.taskId === taskId);
  return task ? JSON.parse(JSON.stringify(task)) : null;
}

/**
 * @param {string} taskId
 * @returns {object[]}
 */
export function getTaskPreviewLines(taskId) {
  const task = getDeliveryImportTask(taskId);
  return task?.lines ? [...task.lines] : [];
}

/**
 * @param {object} line
 * @param {string} tab
 * @returns {boolean}
 */
function lineMatchesTab(line, tab) {
  if (tab === 'all') return true;
  if (tab === 'submitted') return line.submitStatus === 'submitted';
  if (line.submitStatus === 'submitted') return false;
  return line.status === tab;
}

/**
 * @param {string} taskId
 * @param {{ tab?: string, page?: number, pageSize?: number }} options
 * @returns {{ rows: object[], total: number, page: number, pageSize: number }}
 */
export function getTaskLinesPage(taskId, options = {}) {
  const tab = options.tab || 'all';
  const page = Math.max(1, options.page || 1);
  const pageSize = Math.max(1, options.pageSize || 50);

  const task = getDeliveryImportTask(taskId);
  if (!task) return { rows: [], total: 0, page, pageSize };

  const filtered = (task.lines || []).filter(line => lineMatchesTab(line, tab));
  const start = (page - 1) * pageSize;

  return {
    rows: filtered.slice(start, start + pageSize).map(l => ({ ...l })),
    total: filtered.length,
    page,
    pageSize
  };
}

/**
 * @param {string} taskId
 * @param {string} lineId
 * @returns {object[]}
 */
export function getTaskLineChildren(taskId, lineId) {
  const task = getDeliveryImportTask(taskId);
  const line = task?.lines?.find(l => l.lineId === lineId);
  return line?.children ? line.children.map(c => ({ ...c })) : [];
}

/**
 * @param {string} taskId
 * @param {object[]} lines
 * @returns {object|null}
 */
export function saveTaskDraft(taskId, lines) {
  const tasks = loadAllTasksRaw();
  const idx = findTaskIndex(tasks, taskId);
  if (idx < 0) return null;

  const task = tasks[idx];
  if (!['pending_review', 'reviewing'].includes(task.status)) return null;

  task.lines = lines.map(l => ({
    ...l,
    children: (l.children || []).map(c => ({ ...c }))
  }));
  task.draftRevision = (task.draftRevision || 0) + 1;
  task.draftSavedAt = new Date().toISOString();
  task.updatedAt = task.draftSavedAt;
  persistTasks(tasks);
  return { ...task };
}

/**
 * @param {string} taskId
 * @returns {object|null}
 */
export function cancelDeliveryImportTask(taskId) {
  const tasks = loadAllTasksRaw();
  const idx = findTaskIndex(tasks, taskId);
  if (idx < 0) return null;

  const task = tasks[idx];
  if (!['not_started', 'matching', 'pending_review', 'reviewing', 'match_failed'].includes(task.status)) {
    return null;
  }

  const timer = activeMatchJobs.get(taskId);
  if (timer) {
    clearInterval(timer);
    activeMatchJobs.delete(taskId);
  }

  task.status = 'cancelled';
  task.cancelledAt = new Date().toISOString();
  task.updatedAt = task.cancelledAt;
  persistTasks(tasks);
  return { ...task };
}

/**
 * @param {string} taskId
 * @param {string} tab
 * @param {string[]} lineIds
 * @returns {{ ok: boolean, errors?: string[], conflicts?: object[], task?: object }}
 */
export function submitTaskTab(taskId, tab, lineIds) {
  const tasks = loadAllTasksRaw();
  const idx = findTaskIndex(tasks, taskId);
  if (idx < 0) return { ok: false, errors: ['任务不存在'] };

  const task = tasks[idx];
  if (!['pending_review', 'reviewing'].includes(task.status)) {
    return { ok: false, errors: ['当前任务状态不可提交'] };
  }

  const idSet = new Set(lineIds);
  const toSubmit = (task.lines || []).filter(
    l => idSet.has(l.lineId) && l.submitStatus === 'pending' && lineMatchesTab(l, tab)
  );

  if (!toSubmit.length) {
    return { ok: false, errors: ['请勾选需要提交的发货行'] };
  }

  const errors = validatePreviewStep(toSubmit);
  if (errors.length) return { ok: false, errors };

  const simulateConflict = (task.fileName || '').includes('提交冲突');
  const { conflicts, errors: liveErrors } = validateLiveOrderLines(
    task.acceptanceSnapshot || {},
    toSubmit,
    task.lines || [],
    { simulateConflict }
  );
  if (conflicts.length) {
    return { ok: false, errors: liveErrors, conflicts };
  }

  if ((task.fileName || '').includes('提交失败')) {
    return { ok: false, errors: ['提交失败，请稍后重试或联系管理员'] };
  }

  const now = new Date().toISOString();
  toSubmit.forEach(line => {
    line.submitStatus = 'submitted';
    line.submittedAt = now;
    line.selected = false;
  });

  const ctx = task.acceptanceSnapshot || {};
  if (ctx.status === 'notStarted' && task.acceptanceId) {
    markAcceptanceInProgressAfterImport(task.acceptanceId);
    task.acceptanceSnapshot = { ...ctx, status: 'inProgress' };
  }

  refreshTaskStatus(task);
  task.updatedAt = now;
  persistTasks(tasks);
  return { ok: true, task: { ...task } };
}

/**
 * @param {object} task
 * @returns {string}
 */
export function formatTaskProgressText(task) {
  if (task.status !== 'matching') return '—';
  const matched = task.matchedRows ?? 0;
  const total = task.totalRows ?? 0;
  if (!total) return '—';
  return `已匹配 ${matched}/${total}`;
}

/**
 * 任务最近一次修改或提交时间（取 updatedAt、行提交时间等的最晚值）
 * @param {object|null|undefined} task
 * @returns {string|null}
 */
export function getTaskLastUpdatedAt(task) {
  if (!task) return null;
  /** @type {string[]} */
  const candidates = [task.updatedAt, task.draftSavedAt, task.completedAt, task.cancelledAt].filter(Boolean);
  (task.lines || []).forEach(line => {
    if (line.submittedAt) candidates.push(line.submittedAt);
  });

  let latest = null;
  let latestTs = -Infinity;
  candidates.forEach(iso => {
    const ts = new Date(iso).getTime();
    if (!Number.isNaN(ts) && ts > latestTs) {
      latestTs = ts;
      latest = iso;
    }
  });
  return latest;
}

/**
 * @param {string} iso
 * @returns {string}
 */
export function formatTaskDateTime(iso) {
  if (!iso) return '—';
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  const pad = n => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
}

/**
 * @param {object} task
 * @returns {boolean}
 */
export function isTaskReadOnly(task) {
  return ['completed', 'cancelled'].includes(task?.status);
}

/**
 * @param {object} task
 * @returns {boolean}
 */
export function canCancelTask(task) {
  return ['not_started', 'matching', 'pending_review', 'reviewing', 'match_failed'].includes(task?.status);
}

/**
 * @param {object} task
 * @returns {boolean}
 */
export function canEditTaskPreview(task) {
  return ['pending_review', 'reviewing'].includes(task?.status);
}

ensureSampleTasks();
resumePendingMatchJobs();
