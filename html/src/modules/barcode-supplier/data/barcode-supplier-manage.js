export const BARCODE_SUPPLIER_STATUS_MAP = {
  active: { text: '使用中', cls: 'text-green-600' },
  inactive: { text: '已停用', cls: 'text-red-500' }
};

export const BARCODE_TYPE_OPTIONS = [
  '中文成人普通',
  '中文港台图书',
  '成人视听',
  '少儿视听',
  '小语种成人图书',
  '成人外文图书'
];

export const SUPPLIER_NAME_OPTIONS = [
  { name: '湖南长沙', code: 'hncs', source: '书商' },
  { name: '北京百万庄图书大厦有限公司', code: 'BWZ', source: '书商' },
  { name: '中国书店', code: 'ZGSD', source: '书商' },
  { name: '湖北三新', code: 'hbsx', source: '书商' },
  { name: '北京人天', code: 'bjrt', source: '书商' },
  { name: '教图', code: 'CNPIEC', source: '书商' },
  { name: '北京新华', code: 'bjxh', source: '书商' },
  { name: '中国嘉德', code: 'zgjd', source: '拍卖行' },
  { name: '北京图书大厦', code: 'bjtsds', source: '书商' },
  { name: '国家图书馆出版社', code: 'nlcpress', source: '出版社' },
  { name: '某团体捐赠单位', code: 'ttjz001', source: '团体捐赠' }
];

export const BARCODE_SUPPLIER_COLUMNS = [
  { key: 'id', label: '序号', minWidth: 'w-14' },
  { key: 'barcodeType', label: '条码号类型' },
  { key: 'supplierCode', label: '供应商代码' },
  { key: 'supplierName', label: '供应商名称', minWidth: 'min-w-[160px]' },
  { key: 'barcodeCode', label: '条码号代码' },
  { key: 'status', label: '状态' },
  { key: 'remark', label: '备注' },
  { key: 'creator', label: '创建人' },
  { key: 'created', label: '创建日期' },
  { key: 'actions', label: '操作', sticky: true }
];

export const barcodeSupplierSearchFields = [
  { key: 'supplierCode', label: '供应商代码' },
  { key: 'supplierName', label: '供应商名称' },
  { key: 'createDate', label: '创建日期', type: 'dateRange', startKey: 'startDate', endKey: 'endDate' },
  { key: 'barcodeCode', label: '条码号代码', extra: true },
  { key: 'status', label: '状态', type: 'select', extra: true, options: ['全部', '使用中', '已停用'] },
  { key: 'creator', label: '创建人', extra: true }
];

const rowsRaw = [
  { barcodeType: '中文成人普通', supplierCode: 'hncs', supplierName: '湖南长沙', barcodeCode: '93', status: 'active', hasRemark: true, remark: '湖南长沙图书供应商', creator: '杨晓婉', created: '2024-05-28' },
  { barcodeType: '中文港台图书', supplierCode: 'BWZ', supplierName: '北京百万庄图书大厦有限公司', barcodeCode: '15', status: 'active', hasRemark: true, remark: '百万庄图书大厦', creator: '杨晓婉', created: '2024-05-27' },
  { barcodeType: '成人视听', supplierCode: 'ZGSD', supplierName: '中国书店', barcodeCode: '18', status: 'active', hasRemark: true, remark: '中国书店有限公司', creator: '杨晓婉', created: '2024-05-26' },
  { barcodeType: '少儿视听', supplierCode: 'hbsx', supplierName: '湖北三新', barcodeCode: '06', status: 'active', hasRemark: true, remark: '湖北三新传媒', creator: '杨晓婉', created: '2024-05-25' },
  { barcodeType: '中文成人普通', supplierCode: 'bjrt', supplierName: '北京人天', barcodeCode: '01', status: 'active', hasRemark: true, remark: '北京人天书店有限公司', creator: '杨晓婉', created: '2024-05-24' },
  { barcodeType: '中文港台图书', supplierCode: 'CNPIEC', supplierName: '教图', barcodeCode: '02', status: 'active', hasRemark: false, remark: '', creator: '杨晓婉', created: '2024-05-23' },
  { barcodeType: '成人视听', supplierCode: 'bjxh', supplierName: '北京新华', barcodeCode: '03', status: 'active', hasRemark: true, remark: '北京新华图书', creator: '杨晓婉', created: '2024-05-22' },
  { barcodeType: '少儿视听', supplierCode: 'zgjd', supplierName: '中国嘉德', barcodeCode: '05', status: 'active', hasRemark: true, remark: '中国嘉德国际拍卖', creator: '杨晓婉', created: '2024-05-21' },
  { barcodeType: '中文成人普通', supplierCode: 'bjtsds', supplierName: '北京图书大厦', barcodeCode: '07', status: 'active', hasRemark: false, remark: '', creator: '杨晓婉', created: '2024-05-20' }
];

export const barcodeSupplierRows = rowsRaw.map((row, index) => ({ ...row, id: index + 1 }));

export function parseBarcodeCodes(raw) {
  return String(raw || '').split(';').map(s => s.trim()).filter(Boolean);
}

export function isValidBarcodeCodeFormat(codes) {
  return codes.length > 0 && codes.every(code => /^\d{2}$/.test(code));
}

export function hasDuplicateInCodes(codes) {
  return new Set(codes).size !== codes.length;
}

export function hasDuplicateBarcodeCode(rows, barcodeType, codes, excludeId = null) {
  const existing = rows
    .filter(row => row.id !== excludeId && row.barcodeType === barcodeType)
    .map(row => row.barcodeCode);
  return codes.some(code => existing.includes(code));
}

export function getSupplierByName(name) {
  return SUPPLIER_NAME_OPTIONS.find(item => item.name === name);
}

export function filterBarcodeSupplierRows(rows, search = {}) {
  return rows.filter(row => {
    const code = search.supplierCode?.trim();
    if (code && !row.supplierCode.toLowerCase().includes(code.toLowerCase())) return false;
    const name = search.supplierName?.trim();
    if (name && !row.supplierName.includes(name)) return false;
    const barcodeCode = search.barcodeCode?.trim();
    if (barcodeCode && !row.barcodeCode.includes(barcodeCode)) return false;
    const creator = search.creator?.trim();
    if (creator && !row.creator.includes(creator)) return false;
    if (search.status === '使用中' && row.status !== 'active') return false;
    if (search.status === '已停用' && row.status !== 'inactive') return false;
    if (search.startDate || search.endDate) {
      const datePart = row.created.slice(0, 10);
      if (search.startDate && datePart < search.startDate) return false;
      if (search.endDate && datePart > search.endDate) return false;
    }
    return true;
  });
}

export function validateBarcodeSupplierForm(form, rows = [], excludeId = null) {
  const errors = {};
  const barcodeType = form.barcodeType?.trim();
  const supplierName = form.supplierName?.trim();

  if (!barcodeType) errors.barcodeType = '请选择';
  else if (!BARCODE_TYPE_OPTIONS.includes(barcodeType)) errors.barcodeType = '请选择';

  if (!supplierName) errors.supplierName = '请选择';
  else if (!SUPPLIER_NAME_OPTIONS.some(item => item.name === supplierName)) errors.supplierName = '请选择';

  const codes = parseBarcodeCodes(form.barcodeCode);
  if (!form.barcodeCode?.trim()) errors.barcodeCode = '请输入';
  else if (!isValidBarcodeCodeFormat(codes)) errors.barcodeCode = '每个代码须为2位数字，多个用英文分号;隔开';
  else if (hasDuplicateInCodes(codes)) errors.barcodeCode = '已存在（相同条码号类型的代码不能重复）';
  else if (form.barcodeType && hasDuplicateBarcodeCode(rows, form.barcodeType, codes, excludeId)) {
    errors.barcodeCode = '已存在（相同条码号类型的代码不能重复）';
  }

  if ((form.remark || '').length > 500) errors.remark = '已超字符限制';
  return { valid: Object.keys(errors).length === 0, errors, codes };
}

export function buildBarcodeSupplierRowsFromForm(form, baseRow = {}) {
  const supplier = getSupplierByName(form.supplierName);
  const codes = parseBarcodeCodes(form.barcodeCode);
  const status = form.statusEnabled ? 'active' : 'inactive';
  const remark = (form.remark || '').trim();
  const shared = {
    barcodeType: form.barcodeType,
    supplierCode: supplier?.code || baseRow.supplierCode || '',
    supplierName: form.supplierName,
    status,
    hasRemark: !!remark,
    remark,
    creator: baseRow.creator || '杨晓婉',
    created: baseRow.created || new Date().toISOString().slice(0, 10)
  };
  return codes.map(code => ({ ...shared, barcodeCode: code }));
}

export function rowToForm(row) {
  return {
    barcodeType: row.barcodeType,
    supplierName: row.supplierName,
    barcodeCode: row.barcodeCode,
    statusEnabled: row.status === 'active',
    remark: row.remark || ''
  };
}
