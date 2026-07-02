/** 馆址管理数据与业务逻辑（与原型 07_06_馆址管理 保持一致） */

export const LOCATION_STATUS_MAP = {
  active: { text: '使用中', cls: 'text-green-600' },
  inactive: { text: '已停用', cls: 'text-gray-500' }
};

export const SITE_CODE_MAX = 32;
export const SITE_NAME_MAX = 64;
export const SITE_REMARK_MAX = 200;
export const BRANCH_CODE_MAX = 32;
export const BRANCH_NAME_MAX = 64;
export const BRANCH_REMARK_MAX = 200;
export const COLLECTION_CODE_MAX = 32;
export const COLLECTION_NAME_MAX = 64;
export const COLLECTION_REMARK_MAX = 200;

export const LEVEL4_SITE_CODES = [
  'ST001_C1', 'ST001_C2', 'ST001_C3', 'ST001_C4', 'ST001_C5',
  'ST002_C1', 'ST002_C2', 'ST003_C1'
];

export const LEVEL4_COLLECTION_CODES = [
  'CL001', 'CL002', 'CL003', 'CL004', 'CL005', 'CL006', 'CL007', 'CL008',
  'CL009', 'CL010', 'STD02', 'STE02', 'STG02', 'STK02', 'STB01', 'STC01'
];

export const LEVEL4_BRANCH_CODES = [
  'STD01', 'STE01', 'STG01', 'STK01', 'STB01', 'STC01', 'STD02', 'STE02', 'STF01', 'STH01'
];

export const SITE_BRANCH_PREFIXES = {
  'site-1': ['STD', 'STE'],
  'site-2': ['STG'],
  'site-3': ['STK'],
  'site-4': ['STB', 'STC']
};

export const SITE_IMPORT_HEADERS = ['馆址编码', '馆址名称', '状态', '备注'];
export const BRANCH_IMPORT_HEADERS = ['馆址编码', '馆址名称', '分馆编码', '分馆名称', '状态', '备注'];
export const COLLECTION_IMPORT_HEADERS = [
  '馆址编码', '馆址名称', '分馆编码', '分馆名称', '馆藏地编码', '馆藏地名称', '状态', '备注'
];

export const initialSiteRows = [
  { id: 'site-1', code: 'ST001_C1', name: '首都华威桥馆', status: 'active', remark: '首都图书馆主馆文献借阅区域' },
  { id: 'site-2', code: 'ST001_C2', name: '首都大兴机场分馆', status: 'active', remark: '' },
  { id: 'site-3', code: 'ST001_C3', name: '北京城市图书馆', status: 'active', remark: '' },
  { id: 'site-4', code: 'ST001_C4', name: '其他馆址（首都图书馆）', status: 'active', remark: '' },
  { id: 'site-5', code: '', name: '测试停用馆址', status: 'inactive', remark: '编码为空示例' }
];

export const initialBranchRows = [
  { id: 'branch-1', siteId: 'site-1', code: 'STD01', name: '首图地方文献', status: 'active', remark: '' },
  { id: 'branch-2', siteId: 'site-1', code: 'STE01', name: '市少儿图书馆', status: 'active', remark: '' },
  { id: 'branch-3', siteId: 'site-2', code: 'STG01', name: '首图古籍', status: 'active', remark: '' },
  { id: 'branch-4', siteId: 'site-3', code: 'STK01', name: '首图期刊分馆', status: 'active', remark: '' },
  { id: 'branch-5', siteId: 'site-5', code: '', name: '测试停用分馆', status: 'inactive', remark: '' }
];

export const initialCollectionRows = [
  { id: 'col-1', branchId: 'branch-1', code: 'CL001', name: '北京地方文献阅览室', status: 'active', remark: '' },
  { id: 'col-2', branchId: 'branch-2', code: 'CL002', name: '首少.少儿钢琴厂书库', status: 'active', remark: '' },
  { id: 'col-3', branchId: 'branch-3', code: 'CL003', name: '历史文献阅览室', status: 'active', remark: '' },
  { id: 'col-4', branchId: 'branch-4', code: 'CL004', name: '首图刊.中文报刊阅览室', status: 'active', remark: '' },
  { id: 'col-5', branchId: 'branch-5', code: '', name: '测试停用馆藏地', status: 'inactive', remark: '' }
];

export const siteSearchFields = [
  { key: 'code', label: '馆址编码' },
  { key: 'name', label: '馆址名称' },
  { key: 'status', label: '状态', type: 'select', options: [{ value: '', label: '全部' }, { value: 'active', label: '使用中' }, { value: 'inactive', label: '已停用' }] }
];

export const branchSearchFields = [
  { key: 'siteCode', label: '馆址编码' },
  { key: 'siteName', label: '馆址名称' },
  { key: 'code', label: '分馆编码' },
  { key: 'name', label: '分馆名称', extra: true },
  { key: 'status', label: '状态', type: 'select', extra: true, options: [{ value: '', label: '全部' }, { value: 'active', label: '使用中' }, { value: 'inactive', label: '已停用' }] }
];

export const collectionSearchFields = [
  { key: 'siteCode', label: '馆址编码' },
  { key: 'siteName', label: '馆址名称' },
  { key: 'branchCode', label: '分馆编码' },
  { key: 'branchName', label: '分馆名称', extra: true },
  { key: 'code', label: '馆藏地编码', extra: true },
  { key: 'name', label: '馆藏地名称', extra: true },
  { key: 'status', label: '状态', type: 'select', extra: true, options: [{ value: '', label: '全部' }, { value: 'active', label: '使用中' }, { value: 'inactive', label: '已停用' }] }
];

export const SITE_COLUMNS = [
  { key: 'seq', label: '序号', minWidth: 'w-14' },
  { key: 'code', label: '馆址编码' },
  { key: 'name', label: '馆址名称' },
  { key: 'status', label: '状态' },
  { key: 'remark', label: '备注' },
  { key: 'actions', label: '操作', sticky: true, minWidth: 'min-w-[180px]' }
];

export const BRANCH_COLUMNS = [
  { key: 'seq', label: '序号', minWidth: 'w-14' },
  { key: 'siteCode', label: '馆址编码' },
  { key: 'siteName', label: '馆址名称' },
  { key: 'code', label: '分馆编码' },
  { key: 'name', label: '分馆名称' },
  { key: 'status', label: '状态' },
  { key: 'remark', label: '备注' },
  { key: 'actions', label: '操作', sticky: true, minWidth: 'min-w-[180px]' }
];

export const COLLECTION_COLUMNS = [
  { key: 'seq', label: '序号', minWidth: 'w-14' },
  { key: 'siteCode', label: '馆址编码' },
  { key: 'siteName', label: '馆址名称' },
  { key: 'branchCode', label: '分馆编码' },
  { key: 'branchName', label: '分馆名称' },
  { key: 'code', label: '馆藏地编码' },
  { key: 'name', label: '馆藏地名称' },
  { key: 'status', label: '状态' },
  { key: 'remark', label: '备注' },
  { key: 'actions', label: '操作', sticky: true, minWidth: 'min-w-[180px]' }
];

export function fuzzyMatch(source, keyword) {
  if (!keyword) return true;
  return String(source || '').toLowerCase().includes(keyword.toLowerCase());
}

export function getSiteById(siteRows, siteId) {
  return siteRows.find(row => row.id === siteId);
}

export function getSiteByCode(siteRows, siteCode) {
  return siteRows.find(row => row.code === siteCode);
}

export function getBranchById(branchRows, branchId) {
  return branchRows.find(row => row.id === branchId);
}

export function getCollectionById(collectionRows, collectionId) {
  return collectionRows.find(row => row.id === collectionId);
}

export function enrichBranchRow(branch, siteRows) {
  const site = getSiteById(siteRows, branch.siteId);
  return {
    ...branch,
    siteCode: site?.code || '-',
    siteName: site?.name || '-'
  };
}

export function enrichCollectionRow(collection, branchRows, siteRows) {
  const branch = getBranchById(branchRows, collection.branchId);
  const site = branch ? getSiteById(siteRows, branch.siteId) : null;
  return {
    ...collection,
    branchCode: branch?.code || '-',
    branchName: branch?.name || '-',
    siteCode: site?.code || '-',
    siteName: site?.name || '-'
  };
}

export function getActiveSites(siteRows) {
  return [...siteRows]
    .filter(row => row.status === 'active')
    .sort((a, b) => a.name.localeCompare(b.name, 'zh-CN'));
}

export function getActiveSiteNames(siteRows) {
  return getActiveSites(siteRows).map(row => row.name);
}

export function buildSiteFilterOptions(siteRows) {
  return ['全部', ...getActiveSiteNames(siteRows)];
}

export const SITE_SELECT_FIELD_KEYS = new Set(['site', 'location']);

export function injectSiteSelectOptions(fields, filterOptions) {
  return fields.map(field => {
    if (!SITE_SELECT_FIELD_KEYS.has(field.key) || field.type !== 'select') return field;
    return { ...field, options: [...filterOptions] };
  });
}

export function getActiveBranchesBySiteId(branchRows, siteId) {
  return branchRows
    .filter(row => row.siteId === siteId && row.status === 'active')
    .sort((a, b) => a.name.localeCompare(b.name, 'zh-CN'));
}

export function isValidLevel4SiteCode(code) {
  return LEVEL4_SITE_CODES.includes(code.trim());
}

export function isValidCollectionCode(code) {
  return LEVEL4_COLLECTION_CODES.includes(code);
}

export function isBranchCodeInSiteRange(code, siteId) {
  if (!LEVEL4_BRANCH_CODES.includes(code)) return false;
  const prefixes = SITE_BRANCH_PREFIXES[siteId];
  if (!prefixes) return true;
  return prefixes.some(prefix => code.startsWith(prefix));
}

export function isDuplicateSiteCode(siteRows, code, excludeId = null) {
  return siteRows.some(row => row.id !== excludeId && row.code === code);
}

export function isDuplicateSiteName(siteRows, name, excludeId = null) {
  return siteRows.some(row => row.id !== excludeId && row.name === name);
}

export function isDuplicateBranchCode(branchRows, code, excludeId = null) {
  return branchRows.some(row => row.id !== excludeId && row.code === code);
}

export function isDuplicateBranchName(branchRows, name, siteId, excludeId = null) {
  return branchRows.some(row => row.id !== excludeId && row.siteId === siteId && row.name === name);
}

export function isDuplicateCollectionCode(collectionRows, code, excludeId = null) {
  return collectionRows.some(row => row.id !== excludeId && row.code === code);
}

export function isDuplicateCollectionName(collectionRows, name, branchId, excludeId = null) {
  return collectionRows.some(row => row.id !== excludeId && row.branchId === branchId && row.name === name);
}

export function validateSiteForm(form, siteRows, isEdit) {
  const errors = {};
  const siteId = form.siteId || null;
  const code = form.code.trim();
  const name = form.name.trim();
  const remark = form.remark || '';

  if (!isEdit) {
    if (!code) errors.code = '请输入馆址编码';
    else if (code.length > SITE_CODE_MAX) errors.code = '馆址编码长度不能超过32个字符';
    else if (!isValidLevel4SiteCode(code)) errors.code = '馆址编码必须属于四级馆藏地现有编码';
    else if (isDuplicateSiteCode(siteRows, code, siteId)) errors.code = '馆址编码已存在，请修改';
  }

  if (!name) errors.name = '请输入馆址名称';
  else if (name.length > SITE_NAME_MAX) errors.name = '馆址名称长度不能超过64个字符';
  else if (isDuplicateSiteName(siteRows, name, siteId)) errors.name = '已存在同名馆址';

  if (remark.length > SITE_REMARK_MAX) errors.remark = '备注长度不能超过200个字符';

  return { valid: Object.keys(errors).length === 0, errors };
}

export function validateBranchForm(form, branchRows, isEdit) {
  const errors = {};
  const branchId = form.branchId || null;
  const siteId = form.siteId;
  const code = form.code.trim();
  const name = form.name.trim();
  const remark = form.remark || '';

  if (!siteId) errors.siteId = '请选择所属馆址';

  if (!isEdit) {
    if (!code) errors.code = '请输入分馆编码';
    else if (code.length > BRANCH_CODE_MAX) errors.code = '分馆编码长度不能超过32个字符';
    else if (siteId && !isBranchCodeInSiteRange(code, siteId)) errors.code = '分馆编码必须属于四级馆址编码范围内';
    else if (isDuplicateBranchCode(branchRows, code, branchId)) errors.code = '分馆编码已存在，请修改';
  }

  if (!name) errors.name = '请输入分馆名称';
  else if (name.length > BRANCH_NAME_MAX) errors.name = '分馆名称长度不能超过64个字符';
  else if (siteId && isDuplicateBranchName(branchRows, name, siteId, branchId)) errors.name = '该馆址下已存在同名分馆';

  if (remark.length > BRANCH_REMARK_MAX) errors.remark = '备注长度不能超过200个字符';

  return { valid: Object.keys(errors).length === 0, errors };
}

export function validateCollectionForm(form, collectionRows, isEdit) {
  const errors = {};
  const collectionId = form.collectionId || null;
  const branchId = form.branchId;
  const code = form.code.trim();
  const name = form.name.trim();
  const remark = form.remark || '';

  if (!form.siteId) errors.siteId = '请选择所属馆址';
  if (!branchId) errors.branchId = '请选择所属分馆';

  if (!isEdit) {
    if (!code) errors.code = '请输入馆藏地编码';
    else if (code.length > COLLECTION_CODE_MAX) errors.code = '馆藏地编码长度不能超过32个字符';
    else if (!isValidCollectionCode(code)) errors.code = '馆藏地编码必须属于四级馆藏地现有编码';
    else if (isDuplicateCollectionCode(collectionRows, code, collectionId)) errors.code = '馆藏地编码已存在，请修改';
  }

  if (!name) errors.name = '请输入馆藏地名称';
  else if (name.length > COLLECTION_NAME_MAX) errors.name = '馆藏地名称长度不能超过64个字符';
  else if (branchId && isDuplicateCollectionName(collectionRows, name, branchId, collectionId)) {
    errors.name = '该分馆下已存在同名馆藏地';
  }

  if (remark.length > COLLECTION_REMARK_MAX) errors.remark = '备注长度不能超过200个字符';

  return { valid: Object.keys(errors).length === 0, errors };
}

export function filterSiteRows(siteRows, search) {
  return siteRows.filter(row => {
    if (!fuzzyMatch(row.code, search.code)) return false;
    if (!fuzzyMatch(row.name, search.name)) return false;
    if (search.status && row.status !== search.status) return false;
    return true;
  });
}

export function filterBranchRows(branchRows, siteRows, search) {
  return branchRows
    .map(row => enrichBranchRow(row, siteRows))
    .filter(row => {
      if (!fuzzyMatch(row.siteCode, search.siteCode)) return false;
      if (!fuzzyMatch(row.siteName, search.siteName)) return false;
      if (!fuzzyMatch(row.code, search.code)) return false;
      if (!fuzzyMatch(row.name, search.name)) return false;
      if (search.status && row.status !== search.status) return false;
      return true;
    });
}

export function filterCollectionRows(collectionRows, branchRows, siteRows, search) {
  return collectionRows
    .map(row => enrichCollectionRow(row, branchRows, siteRows))
    .filter(row => {
      if (!fuzzyMatch(row.siteCode, search.siteCode)) return false;
      if (!fuzzyMatch(row.siteName, search.siteName)) return false;
      if (!fuzzyMatch(row.branchCode, search.branchCode)) return false;
      if (!fuzzyMatch(row.branchName, search.branchName)) return false;
      if (!fuzzyMatch(row.code, search.code)) return false;
      if (!fuzzyMatch(row.name, search.name)) return false;
      if (search.status && row.status !== search.status) return false;
      return true;
    });
}

function isValidImportFileName(fileName) {
  return /\.(xls|xlsx)$/i.test(fileName);
}

function downloadCsv(filename, headers, rows) {
  const lines = rows.map(row =>
    row.map(value => `"${String(value || '').replace(/"/g, '""')}"`).join(',')
  );
  const content = `\uFEFF${headers.join(',')}\n${lines.join('\n')}\n`;
  const blob = new Blob([content], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  link.click();
  URL.revokeObjectURL(link.href);
}

export function downloadImportTemplate(type) {
  if (type === 'site') {
    downloadCsv('馆址导入模板.csv', SITE_IMPORT_HEADERS, [['ST001_C5', '示例馆址名称', '使用中', '示例备注']]);
  } else if (type === 'branch') {
    downloadCsv('分馆导入模板.csv', BRANCH_IMPORT_HEADERS, [['ST001_C1', '首都华威桥馆', 'STF01', '示例分馆名称', '使用中', '示例备注']]);
  } else {
    downloadCsv('馆藏地导入模板.csv', COLLECTION_IMPORT_HEADERS, [
      ['ST001_C1', '首都华威桥馆', 'STD01', '首图地方文献', 'CL005', '示例馆藏地名称', '使用中', '示例备注']
    ]);
  }
}

export function downloadImportErrorFile(type, errorRows) {
  if (!errorRows?.length) return;
  const timestamp = new Date().toISOString().replace(/[-:T]/g, '').slice(0, 14);
  if (type === 'site') {
    downloadCsv(
      `馆址导入解析错误文件_${timestamp}.csv`,
      [...SITE_IMPORT_HEADERS, '错误原因'],
      errorRows.map(row => [row.code, row.name, row.statusText, row.remark, row.errorReason])
    );
  } else if (type === 'branch') {
    downloadCsv(
      `分馆导入解析错误文件_${timestamp}.csv`,
      [...BRANCH_IMPORT_HEADERS, '错误原因'],
      errorRows.map(row => [row.siteCode, row.siteName, row.branchCode, row.branchName, row.statusText, row.remark, row.errorReason])
    );
  } else {
    downloadCsv(
      `馆藏地导入解析错误文件_${timestamp}.csv`,
      [...COLLECTION_IMPORT_HEADERS, '错误原因'],
      errorRows.map(row => [
        row.siteCode, row.siteName, row.branchCode, row.branchName,
        row.collectionCode, row.collectionName, row.statusText, row.remark, row.errorReason
      ])
    );
  }
}

function validateBranchImportRow(row, branchRows, siteRows, fileBranchCodes) {
  const siteCode = String(row.siteCode || '').trim();
  const branchCode = String(row.branchCode || '').trim();
  const branchName = String(row.branchName || '').trim();
  const remark = String(row.remark || '');

  if (!siteCode) return '馆址编码不能为空';
  if (!branchCode) return '分馆编码不能为空';
  if (!branchName) return '分馆名称不能为空';
  if (branchCode.length > BRANCH_CODE_MAX) return '分馆编码长度不能超过32个字符';
  if (branchName.length > BRANCH_NAME_MAX) return '分馆名称长度不能超过64个字符';
  if (remark.length > BRANCH_REMARK_MAX) return '备注长度不能超过200个字符';

  const site = getSiteByCode(siteRows, siteCode);
  if (!site) return '馆址编码不存在';
  if (fileBranchCodes.has(branchCode)) return '分馆编码重复';
  if (isDuplicateBranchCode(branchRows, branchCode)) return '分馆编码重复';
  if (!isBranchCodeInSiteRange(branchCode, site.id)) return '分馆编码不属于当前馆址编码';
  if (isDuplicateBranchName(branchRows, branchName, site.id)) return '同馆址下已存在同名分馆';

  fileBranchCodes.add(branchCode);
  return null;
}

function validateCollectionImportRow(row, collectionRows, branchRows, siteRows, fileCollectionCodes) {
  const siteCode = String(row.siteCode || '').trim();
  const branchCode = String(row.branchCode || '').trim();
  const collectionCode = String(row.collectionCode || '').trim();
  const collectionName = String(row.collectionName || '').trim();
  const remark = String(row.remark || '');

  if (!siteCode) return '馆址编码不能为空';
  if (!branchCode) return '分馆编码不能为空';
  if (!collectionCode) return '馆藏地编码不能为空';
  if (!collectionName) return '馆藏地名称不能为空';
  if (collectionCode.length > COLLECTION_CODE_MAX) return '馆藏地编码长度不能超过32个字符';
  if (collectionName.length > COLLECTION_NAME_MAX) return '馆藏地名称长度不能超过64个字符';
  if (remark.length > COLLECTION_REMARK_MAX) return '备注长度不能超过200个字符';

  const site = getSiteByCode(siteRows, siteCode);
  if (!site) return '馆址编码不存在';
  const branch = branchRows.find(item => item.siteId === site.id && item.code === branchCode);
  if (!branch) return '分馆编码不存在';
  if (fileCollectionCodes.has(collectionCode)) return '馆藏地编码重复';
  if (isDuplicateCollectionCode(collectionRows, collectionCode)) return '馆藏地编码重复';
  if (!isValidCollectionCode(collectionCode)) return '馆藏地编码不属于四级馆藏地现有编码';
  if (isDuplicateCollectionName(collectionRows, collectionName, branch.id)) return '同分馆下已存在同名馆藏地';

  fileCollectionCodes.add(collectionCode);
  return null;
}

export function simulateImportParse(type, file, { siteRows, branchRows, collectionRows }) {
  const name = file.name.toLowerCase();

  if (!isValidImportFileName(file.name)) {
    return { ok: false, message: '导入文件格式不符' };
  }
  if (name.includes('header') || name.includes('表头')) {
    return { ok: false, message: '模板的表头更改了' };
  }
  if (name.includes('2000') || name.includes('超限')) {
    return { ok: false, message: '数据记录超过2000条' };
  }

  if (type === 'site') {
    const existingCodes = new Set(siteRows.map(row => row.code).filter(Boolean));
    const existingNames = new Set(siteRows.map(row => row.name));

    if (name.includes('success') || name.includes('全部成功')) {
      const importCodes = ['ST002_C1', 'ST002_C2', 'ST003_C1'].filter(code => !existingCodes.has(code));
      const successRows = importCodes.map((code, index) => ({
        code,
        name: `批量导入馆址${index + 1}`,
        status: 'active',
        remark: ''
      }));
      return { ok: true, result: { total: successRows.length, success: successRows.length, fail: 0, successRows, errorRows: [] } };
    }

    const total = 100;
    const fail = 10;
    const errorReasons = ['馆址编码重复', '馆址编码不属于四级馆藏地现有编码', '馆址名称长度不能超过64个字符', '已存在同名馆址'];
    const errorRows = Array.from({ length: fail }, (_, index) => ({
      code: index === 0 ? 'ST001_C1' : `INVALID_${index}`,
      name: index === 3 ? '首都华威桥馆' : `失败馆址${index + 1}`,
      statusText: '使用中',
      remark: '',
      errorReason: errorReasons[index % errorReasons.length]
    }));
    const successRows = Array.from({ length: total - fail }, (_, index) => ({
      code: `ST002_C${String(index + 10).padStart(2, '0')}`,
      name: `导入馆址${index + 1}`,
      status: 'active',
      remark: index % 4 === 0 ? '批量导入' : ''
    })).filter(row => !existingCodes.has(row.code) && !existingNames.has(row.name));

    return { ok: true, result: { total, success: total - fail, fail, successRows, errorRows } };
  }

  if (type === 'branch') {
    const existingBranchCodes = new Set(branchRows.map(row => row.code).filter(Boolean));

    if (name.includes('success') || name.includes('全部成功')) {
      const site = getSiteByCode(siteRows, 'ST001_C1') || siteRows.find(row => row.code);
      const importCodes = ['STF01', 'STH01', 'STD02'].filter(code =>
        !existingBranchCodes.has(code) && site && isBranchCodeInSiteRange(code, site.id)
      );
      const successRows = importCodes.map((code, index) => ({
        siteCode: site?.code || 'ST001_C1',
        siteName: site?.name || '首都华威桥馆',
        siteId: site?.id || 'site-1',
        branchCode: code,
        branchName: `批量导入分馆${index + 1}`,
        status: 'active',
        remark: ''
      }));
      return { ok: true, result: { total: successRows.length, success: successRows.length, fail: 0, successRows, errorRows: [] } };
    }

    const total = 100;
    const fail = 10;
    const errorReasons = ['分馆编码重复', '分馆编码不属于当前馆址编码', '分馆名称长度不能超过64个字符', '馆址编码不存在', '同馆址下已存在同名分馆'];
    const errorRows = Array.from({ length: fail }, (_, index) => ({
      siteCode: index === 3 ? 'INVALID_SITE' : 'ST001_C1',
      siteName: index === 3 ? '不存在馆址' : '首都华威桥馆',
      branchCode: index === 0 ? 'STD01' : `INVALID_${index}`,
      branchName: index === 2 ? 'A'.repeat(BRANCH_NAME_MAX + 1) : index === 4 ? '首图地方文献' : `失败分馆${index + 1}`,
      statusText: '使用中',
      remark: '',
      errorReason: errorReasons[index % errorReasons.length]
    }));
    const successRows = Array.from({ length: total - fail }, (_, index) => {
      const site = getSiteByCode(siteRows, 'ST001_C1') || siteRows[0];
      const branchCode = `STF${String(index + 10).padStart(2, '0')}`;
      return {
        siteCode: site?.code || 'ST001_C1',
        siteName: site?.name || '首都华威桥馆',
        siteId: site?.id || 'site-1',
        branchCode,
        branchName: `导入分馆${index + 1}`,
        status: 'active',
        remark: index % 4 === 0 ? '批量导入' : ''
      };
    }).filter(row => !existingBranchCodes.has(row.branchCode) && validateBranchImportRow(row, branchRows, siteRows, new Set()) === null);

    return { ok: true, result: { total, success: total - fail, fail, successRows, errorRows } };
  }

  const existingCollectionCodes = new Set(collectionRows.map(row => row.code).filter(Boolean));

  if (name.includes('success') || name.includes('全部成功')) {
    const site = getSiteByCode(siteRows, 'ST001_C1') || siteRows[0];
    const branch = branchRows.find(row => row.siteId === site?.id && row.code === 'STD01') || branchRows[0];
    const importCodes = ['CL005', 'CL006', 'CL007'].filter(code => !existingCollectionCodes.has(code));
    const successRows = importCodes.map((code, index) => ({
      siteCode: site?.code || 'ST001_C1',
      siteName: site?.name || '首都华威桥馆',
      branchCode: branch?.code || 'STD01',
      branchName: branch?.name || '首图地方文献',
      branchId: branch?.id || 'branch-1',
      collectionCode: code,
      collectionName: `批量导入馆藏地${index + 1}`,
      status: 'active',
      remark: ''
    }));
    return { ok: true, result: { total: successRows.length, success: successRows.length, fail: 0, successRows, errorRows: [] } };
  }

  const total = 100;
  const fail = 10;
  const errorReasons = ['馆藏地编码重复', '馆藏地编码不属于四级馆藏地现有编码', '馆藏地名称长度不能超过64个字符', '馆址编码不存在', '分馆编码不存在', '同分馆下已存在同名馆藏地'];
  const errorRows = Array.from({ length: fail }, (_, index) => ({
    siteCode: index === 3 ? 'INVALID_SITE' : 'ST001_C1',
    siteName: index === 3 ? '不存在馆址' : '首都华威桥馆',
    branchCode: index === 4 ? 'INVALID_BRANCH' : 'STD01',
    branchName: index === 4 ? '不存在分馆' : '首图地方文献',
    collectionCode: index === 0 ? 'CL001' : `INVALID_${index}`,
    collectionName: index === 2 ? 'A'.repeat(COLLECTION_NAME_MAX + 1) : index === 5 ? '北京地方文献阅览室' : `失败馆藏地${index + 1}`,
    statusText: '使用中',
    remark: '',
    errorReason: errorReasons[index % errorReasons.length]
  }));
  const successRows = Array.from({ length: total - fail }, (_, index) => {
    const site = getSiteByCode(siteRows, 'ST001_C1') || siteRows[0];
    const branch = branchRows.find(row => row.siteId === site?.id && row.code === 'STD01') || branchRows[0];
    const collectionCode = `CL${String(index + 20).padStart(3, '0')}`;
    return {
      siteCode: site?.code || 'ST001_C1',
      siteName: site?.name || '首都华威桥馆',
      branchCode: branch?.code || 'STD01',
      branchName: branch?.name || '首图地方文献',
      branchId: branch?.id || 'branch-1',
      collectionCode,
      collectionName: `导入馆藏地${index + 1}`,
      status: 'active',
      remark: index % 4 === 0 ? '批量导入' : ''
    };
  }).filter(row => !existingCollectionCodes.has(row.collectionCode) && validateCollectionImportRow(row, collectionRows, branchRows, siteRows, new Set()) === null);

  return { ok: true, result: { total, success: total - fail, fail, successRows, errorRows } };
}

export function applySiteImport(siteRows, successRows) {
  successRows.forEach(row => {
    if (siteRows.some(item => item.code === row.code)) return;
    siteRows.unshift({
      id: `site-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
      code: row.code,
      name: row.name,
      status: row.status,
      remark: row.remark || ''
    });
  });
}

export function applyBranchImport(branchRows, successRows) {
  successRows.forEach(row => {
    if (branchRows.some(item => item.code === row.branchCode)) return;
    branchRows.unshift({
      id: `branch-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
      siteId: row.siteId,
      code: row.branchCode,
      name: row.branchName,
      status: row.status,
      remark: row.remark || ''
    });
  });
}

export function applyCollectionImport(collectionRows, successRows) {
  successRows.forEach(row => {
    if (collectionRows.some(item => item.code === row.collectionCode)) return;
    collectionRows.unshift({
      id: `col-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
      branchId: row.branchId,
      code: row.collectionCode,
      name: row.collectionName,
      status: row.status,
      remark: row.remark || ''
    });
  });
}
