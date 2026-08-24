import { getBranchLabel } from '@/modules/subscriber/data/locations';

export const RESOURCE_TYPE_OPTIONS = ['纸质书', '视听资料'];

export const BARCODE_TYPE_OPTIONS = [
  '中文成人普通', '中文港台图书', '中文少儿普通图书', '少儿港台图书', '少儿连环画图书',
  '英文成人图书', '小语种成人图书', '外文少儿图书', '地方文献', '成人视听', '少儿视听'
];

export const BUDGET_OPTIONS = [
  '2026首都图书馆图书购置费中文普通图书(一)', '2026首都图书馆图书购置费中文普通图书(二)',
  '2026首都图书馆图书购置费中文普通图书(三)', '2026城市图书馆图书购置费中文普通图书',
  '2026城市图书馆图书购置费工具书', '2026城市图书馆图书购置费经济管理',
  '2026首都图书馆图书购置费', '2026城市图书馆图书购置费',
  '2025北京人天', '2025CNPIEC', '2025北京新华', '2025中国嘉德',
  '2025古籍采购', '2025数字资源采购', '2025北京台湖'
];

export const SUBSCRIBER_STATUS_MAP = {
  active: { text: '使用中', cls: 'text-green-600' },
  disabled: { text: '已停用', cls: 'text-red-500' }
};

export const SUBSCRIBER_COLUMNS = [
  { key: 'id', label: '序号' },
  { key: 'name', label: '订户名称' },
  { key: 'siteName', label: '单件所属馆' },
  { key: 'types', label: '资源类型' },
  { key: 'budgets', label: '预算名称', minWidth: 'min-w-[180px]' },
  { key: 'status', label: '订户状态' },
  { key: 'librarians', label: '馆员列表' },
  { key: 'created', label: '创建日期' },
  { key: 'actions', label: '操作', sticky: true }
];

export const subscriberSearchFields = [
  { key: 'name', label: '订户名称' },
  { key: 'resourceType', label: '资源类型', type: 'select', options: [{ value: '', label: '全部' }, '纸质书', '视听资料'] },
  { key: 'budget', label: '预算名称' },
  { key: 'status', label: '订户状态', type: 'select', extra: true, options: [{ value: '', label: '全部' }, { value: 'active', label: '使用中' }, { value: 'disabled', label: '已停用' }] },
  { key: 'createDate', label: '创建日期', type: 'dateRange', startKey: 'startDate', endKey: 'endDate', extra: true }
];

/** branchId 对应馆址管理-分馆列表 */
const subscriberRowsRaw = [
  { name: '少儿外文', branchId: 'branch-2', types: ['纸质书'], budgets: ['2026首都图书馆图书购置费中文普通图书(二)', '2026首都图书馆图书购置费中文普通图书(三)', '2026首都图书馆图书购置费中文普通图书(一)', '2026城市图书馆图书购置费中文普通图书', '2026城市图书馆图书购置费工具书', '2026城市图书馆图书购置费经济管理'], barcodeTypes: ['外文少儿图书'], status: 'active', created: '2026-05-22', remark: '', hasLibrarian: true },
  { name: '少儿中文', branchId: 'branch-2', types: ['纸质书'], budgets: ['2026首都图书馆图书购置费中文普通图书(二)', '2026首都图书馆图书购置费中文普通图书(三)', '2026首都图书馆图书购置费中文普通图书(一)', '2026城市图书馆图书购置费中文普通图书', '2026城市图书馆图书购置费工具书', '2026城市图书馆图书购置费经济管理'], barcodeTypes: ['中文少儿普通图书'], status: 'active', created: '2026-05-22', remark: '', hasLibrarian: true },
  { name: '成人外文', branchId: 'branch-6', types: ['纸质书'], budgets: ['2026首都图书馆图书购置费中文普通图书(一)', '2026城市图书馆图书购置费中文普通图书'], barcodeTypes: ['英文成人图书', '小语种成人图书'], status: 'active', created: '2026-05-21', remark: '', hasLibrarian: true },
  { name: '成人中文', branchId: 'branch-6', types: ['纸质书'], budgets: ['2026首都图书馆图书购置费中文普通图书(二)', '2026城市图书馆图书购置费工具书'], barcodeTypes: ['中文成人普通'], status: 'active', created: '2026-05-20', remark: '', hasLibrarian: true },
  { name: '古籍民国图书', branchId: 'branch-3', types: ['纸质书'], budgets: ['2026首都图书馆图书购置费', '2026城市图书馆图书购置费'], barcodeTypes: ['地方文献'], status: 'disabled', created: '2026-05-18', remark: '', hasLibrarian: false },
  { name: '采编中心', branchId: 'branch-6', types: ['纸质书'], budgets: ['2025北京人天', '2025CNPIEC'], barcodeTypes: ['中文成人普通'], status: 'active', created: '2025-01-25', remark: '', hasLibrarian: true },
  { name: '视听中心', branchId: 'branch-9', types: ['视听资料'], budgets: ['2025北京新华', '2025北京人天'], barcodeTypes: ['成人视听'], status: 'active', created: '2025-01-22', remark: '', hasLibrarian: true },
  { name: '地方文献', branchId: 'branch-1', types: ['纸质书'], budgets: ['2025中国嘉德'], barcodeTypes: ['地方文献'], status: 'active', created: '2025-01-21', remark: '', hasLibrarian: true },
  { name: '历史文献', branchId: 'branch-12', types: ['纸质书'], budgets: ['2025北京新华'], barcodeTypes: ['地方文献'], status: 'active', created: '2025-01-18', remark: '', hasLibrarian: true },
  { name: '少儿阅读', branchId: 'branch-2', types: ['纸质书'], budgets: ['2025北京人天'], barcodeTypes: ['中文少儿普通图书', '少儿连环画图书'], status: 'active', created: '2025-01-17', remark: '', hasLibrarian: true },
  { name: '外文书刊', branchId: 'branch-6', types: ['纸质书'], budgets: ['2025CNPIEC', '2025北京人天'], barcodeTypes: ['英文成人图书'], status: 'active', created: '2025-01-16', remark: '', hasLibrarian: true },
  { name: '期刊中心', branchId: 'branch-4', types: ['纸质书'], budgets: ['2025北京新华', '2025中国嘉德'], barcodeTypes: ['中文成人普通'], status: 'active', created: '2025-01-15', remark: '', hasLibrarian: true },
  { name: '数字资源', branchId: 'branch-6', types: ['视听资料'], budgets: ['2025数字资源采购'], barcodeTypes: ['成人视听', '少儿视听'], status: 'active', created: '2025-01-14', remark: '', hasLibrarian: true },
  { name: '参考咨询', branchId: 'branch-6', types: ['纸质书'], budgets: ['2025北京人天'], barcodeTypes: ['中文成人普通'], status: 'active', created: '2025-01-13', remark: '', hasLibrarian: false },
  { name: '特藏部', branchId: 'branch-12', types: ['纸质书'], budgets: ['2025古籍采购', '2025中国嘉德'], barcodeTypes: ['地方文献'], status: 'active', created: '2025-01-12', remark: '', hasLibrarian: true },
  { name: '流通部', branchId: 'branch-6', types: ['纸质书'], budgets: ['2025北京新华'], barcodeTypes: ['中文成人普通'], status: 'active', created: '2025-01-11', remark: '', hasLibrarian: true },
  { name: '东馆采编', branchId: 'branch-10', types: ['纸质书'], budgets: ['2025北京人天', '2025北京新华'], barcodeTypes: ['中文成人普通'], status: 'active', created: '2025-01-10', remark: '', hasLibrarian: true },
  { name: '西馆采编', branchId: 'branch-6', types: ['纸质书'], budgets: ['2025CNPIEC'], barcodeTypes: ['中文成人普通'], status: 'active', created: '2025-01-09', remark: '', hasLibrarian: true },
  {
    name: 'ceshi', branchId: 'branch-6', types: ['纸质书', '视听资料'],
    budgets: [
      '2024年首都图书馆图书购置费中文普通图书(一)',
      '2024年首都图书馆图书购置费中文普通图书(二)',
      '2024年首都图书馆图书购置费中文普通图书(三)',
      '2024年首都图书馆视听资料购置费'
    ],
    barcodeTypes: ['中文成人普通'], status: 'active', created: '2026-06-17', remark: '', hasLibrarian: true,
    dedupBranchCodes: ['ST001', 'ST002', 'ST003'],
    dedupCollectionCodes: []
  }
];

export const subscriberRows = subscriberRowsRaw.map((row, index) => ({
  ...row,
  dedupBranchCodes: row.dedupBranchCodes || [],
  dedupCollectionCodes: row.dedupCollectionCodes || [],
  id: index + 1,
  siteName: getBranchLabel(row.branchId)
}));

export const activeSubscriberOptions = subscriberRows
  .filter(row => row.status === 'active')
  .map(row => row.name);

/** 馆员与订户关联源数据（用于构建订户→馆员姓名映射） */
export const librarianSourceRows = [
  { name: '常辉', subscribers: '少儿外文' },
  { name: '新华连锁3', subscribers: '少儿外文' },
  { name: '新华连锁4', subscribers: '少儿外文' },
  { name: '首图非遗采编人天2', subscribers: '少儿外文' },
  { name: '首图少儿03', subscribers: '少儿外文' },
  { name: '首图少儿04', subscribers: '少儿外文' },
  { name: '首图少儿05', subscribers: '少儿外文' },
  { name: '首图少儿06', subscribers: '少儿外文' },
  { name: '首图少儿07', subscribers: '少儿外文' },
  { name: '首图少儿08', subscribers: '少儿外文' },
  { name: '首图少儿01', subscribers: '少儿中文, 成人中文' },
  { name: '首图少儿02', subscribers: '少儿外文, 成人外文' },
  { name: '首图采编采编02', subscribers: '成人中文, 成人外文, 少儿中文' },
  { name: '李嘉', subscribers: '采编中心、视听中心' },
  { name: '王晓宇', subscribers: '视听中心' },
  { name: '李竹', subscribers: '地方文献' },
  { name: '杨琳', subscribers: '历史文献' },
  { name: '黄俊', subscribers: '少儿阅读' },
  { name: '陆丰', subscribers: '外文书刊' },
  { name: '范冬', subscribers: '期刊中心' },
  { name: '张苏白鸥', subscribers: '数字资源' },
  { name: '张曼', subscribers: '特藏部' },
  { name: '首图采编采编01', subscribers: '流通部' },
  { name: '首图采编采编03', subscribers: '东馆采编' },
  { name: '首图采编采编04', subscribers: '西馆采编' }
];

export function buildSubscriberLibrarianMap(sourceRows = librarianSourceRows) {
  const map = {};
  sourceRows.forEach(item => {
    item.subscribers.split(/[,、]/).map(text => text.trim()).filter(Boolean).forEach(subscriber => {
      if (!map[subscriber]) map[subscriber] = [];
      if (!map[subscriber].includes(item.name)) map[subscriber].push(item.name);
    });
  });
  return map;
}

export function formatMultiValueText(values, separator = ';') {
  return (values || []).join(separator);
}

export function filterSubscriberRows(rows, search = {}) {
  return rows.filter(row => {
    if (search.name && !row.name.includes(search.name.trim())) return false;
    if (search.resourceType && !(row.types || []).includes(search.resourceType)) return false;
    if (search.budget && !(row.budgets || []).some(item => item.includes(search.budget.trim()))) return false;
    if (search.status && row.status !== search.status) return false;
    const startDate = search.startDate;
    const endDate = search.endDate || startDate;
    if (startDate && (row.created < startDate || row.created > endDate)) return false;
    return true;
  });
}

export function sortSubscriberRows(rows, direction = 'desc') {
  return [...rows].sort((a, b) => {
    const diff = a.created.localeCompare(b.created);
    return direction === 'desc' ? -diff : diff;
  });
}

export function canViewLibrarians(row) {
  return row.status === 'active' && row.hasLibrarian !== false;
}

export function getTodayString() {
  const now = new Date();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${now.getFullYear()}-${month}-${day}`;
}

export function enrichSubscriberRow(row) {
  return {
    ...row,
    dedupBranchCodes: [...(row.dedupBranchCodes || [])],
    dedupCollectionCodes: [...(row.dedupCollectionCodes || [])],
    siteName: getBranchLabel(row.branchId)
  };
}

/**
 * 按馆员关联订户顺序合并查重范围
 * @param {Object[]} [subscriberList=subscriberRows] - 订户列表
 * @param {string[]} [subscriberNames] - 关联订户名称（有序）；缺省时由调用方传入
 * @returns {{ branchCodes: string[], collectionCodes: string[] }}
 */
export function mergeSubscriberDedupScope(subscriberList = subscriberRows, subscriberNames = []) {
  const nameOrder = (subscriberNames || []).map(name => String(name || '').trim()).filter(Boolean);
  const byName = new Map((subscriberList || []).map(row => [row.name, row]));
  const branchCodes = [];
  const seenBranch = new Set();
  const collectionSet = new Set();

  nameOrder.forEach(name => {
    const row = byName.get(name);
    if (!row) return;
    (row.dedupBranchCodes || []).forEach(code => {
      const normalized = String(code || '').trim();
      if (!normalized || seenBranch.has(normalized)) return;
      seenBranch.add(normalized);
      branchCodes.push(normalized);
    });
    (row.dedupCollectionCodes || []).forEach(code => {
      const normalized = String(code || '').trim();
      if (normalized) collectionSet.add(normalized);
    });
  });

  return {
    branchCodes,
    collectionCodes: [...collectionSet]
  };
}
