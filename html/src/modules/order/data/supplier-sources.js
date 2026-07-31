/**
 * 供应商主数据（mock）：对应代理商、出版社管理、个人管理、资源商管理四套应用。
 * 每条含 resourceTypes，供检索等按资源类型收窄选项。
 * @typedef {'代理商' | '出版社管理' | '个人管理' | '资源商管理'} SupplierSourceModule
 * @typedef {'书商' | '拍卖行' | '捐赠' | '团体捐赠' | '交换'} SupplierType
 * @typedef {'使用中' | '已停用'} SupplierStatus
 * @typedef {{ id: string, name: string, sourceModule: SupplierSourceModule, type: SupplierType | '', status: SupplierStatus, discount: string, resourceTypes: string[] }} SupplierRecord
 */

/** @type {SupplierRecord[]} */
export const SUPPLIER_MASTER_RECORDS = [
  // 代理商 — 书商
  { id: 'agent-hncs', name: '湖南长沙', sourceModule: '代理商', type: '书商', status: '使用中', discount: '0.80', resourceTypes: ['纸质书'] },
  { id: 'agent-hbsx', name: '湖北三新', sourceModule: '代理商', type: '书商', status: '使用中', discount: '0.80', resourceTypes: ['纸质书', '视听资料'] },
  { id: 'agent-bjxh', name: '北京新华', sourceModule: '代理商', type: '书商', status: '使用中', discount: '0.80', resourceTypes: ['纸质书'] },
  { id: 'agent-cnpi', name: 'CNPIEC', sourceModule: '代理商', type: '书商', status: '使用中', discount: '0.75', resourceTypes: ['纸质书'] },
  { id: 'agent-bjrt', name: '北京人天', sourceModule: '代理商', type: '书商', status: '使用中', discount: '0.80', resourceTypes: ['纸质书', '视听资料'] },
  { id: 'agent-zgsd', name: '中国书店', sourceModule: '代理商', type: '书商', status: '使用中', discount: '0.82', resourceTypes: ['纸质书'] },
  { id: 'agent-bwz', name: '北京百万庄图书大厦有限公司', sourceModule: '代理商', type: '书商', status: '使用中', discount: '0.80', resourceTypes: ['纸质书'] },
  { id: 'agent-bjtsds', name: '北京图书大厦', sourceModule: '代理商', type: '书商', status: '使用中', discount: '0.80', resourceTypes: ['纸质书'] },
  { id: 'agent-zj', name: '浙江新华', sourceModule: '代理商', type: '书商', status: '已停用', discount: '0.80', resourceTypes: ['纸质书'] },
  // 代理商 — 拍卖行
  { id: 'agent-zgjd', name: '中国嘉德', sourceModule: '代理商', type: '拍卖行', status: '使用中', discount: '1.00', resourceTypes: ['纸质书'] },
  // 出版社管理
  { id: 'pub-nlc', name: '国家图书馆出版社', sourceModule: '出版社管理', type: '', status: '使用中', discount: '1.00', resourceTypes: ['纸质书'] },
  { id: 'pub-hep', name: '高等教育出版社', sourceModule: '出版社管理', type: '', status: '使用中', discount: '1.00', resourceTypes: ['纸质书'] },
  { id: 'pub-ptp', name: '人民邮电出版社', sourceModule: '出版社管理', type: '', status: '使用中', discount: '1.00', resourceTypes: ['纸质书'] },
  { id: 'pub-inactive', name: '示例停用出版社', sourceModule: '出版社管理', type: '', status: '已停用', discount: '1.00', resourceTypes: ['纸质书'] },
  // 个人管理 — 捐赠
  { id: 'person-wang', name: '王明', sourceModule: '个人管理', type: '捐赠', status: '使用中', discount: '', resourceTypes: ['纸质书'] },
  { id: 'person-li', name: '李华', sourceModule: '个人管理', type: '捐赠', status: '使用中', discount: '', resourceTypes: ['纸质书'] },
  { id: 'person-zhang', name: '张伟', sourceModule: '个人管理', type: '捐赠', status: '使用中', discount: '', resourceTypes: ['纸质书', '视听资料'] },
  { id: 'person-inactive', name: '示例停用捐赠人', sourceModule: '个人管理', type: '捐赠', status: '已停用', discount: '', resourceTypes: ['纸质书'] },
  // 资源商管理 — 团体捐赠
  { id: 'res-ttjz', name: '某团体捐赠单位', sourceModule: '资源商管理', type: '团体捐赠', status: '使用中', discount: '', resourceTypes: ['纸质书', '视听资料'] },
  { id: 'res-charity', name: '首都图书馆之友基金会', sourceModule: '资源商管理', type: '团体捐赠', status: '使用中', discount: '', resourceTypes: ['纸质书'] },
  // 资源商管理 — 交换
  { id: 'res-xjy', name: '新纪元资源商', sourceModule: '资源商管理', type: '交换', status: '使用中', discount: '1.00', resourceTypes: ['纸质书', '视听资料'] },
  { id: 'res-exchange', name: '国家图书馆交换中心', sourceModule: '资源商管理', type: '交换', status: '使用中', discount: '1.00', resourceTypes: ['纸质书'] },
  { id: 'res-inactive', name: '示例停用交换单位', sourceModule: '资源商管理', type: '交换', status: '已停用', discount: '1.00', resourceTypes: ['纸质书'] }
];

/**
 * 按来源模块、类型、状态筛选供应商记录。
 * @param {SupplierSourceModule} sourceModule
 * @param {SupplierType | '' | null} [type] - 为空时不按类型过滤
 * @returns {SupplierRecord[]}
 */
export function filterSuppliers(sourceModule, type = null) {
  return SUPPLIER_MASTER_RECORDS.filter(record => {
    if (record.sourceModule !== sourceModule) return false;
    if (record.status !== '使用中') return false;
    if (type != null && type !== '' && record.type !== type) return false;
    return true;
  });
}

/**
 * 合并多组筛选结果并返回去重排序后的供应商名称列表。
 * @param {SupplierRecord[][]} groups
 * @returns {string[]}
 */
function mergeSupplierNames(groups) {
  const names = new Set();
  groups.flat().forEach(record => names.add(record.name));
  return [...names].sort((a, b) => a.localeCompare(b, 'zh-CN'));
}

/**
 * 按采选方式获取可用供应商名称列表。
 * @param {string} method - 采选方式
 * @returns {string[]}
 */
export function getSupplierOptionsByMethod(method) {
  switch (method) {
    case '现采':
    case '征订目录':
      return mergeSupplierNames([filterSuppliers('代理商', '书商')]);
    case '交存':
      return mergeSupplierNames([filterSuppliers('出版社管理')]);
    case '捐赠':
      return mergeSupplierNames([
        filterSuppliers('个人管理', '捐赠'),
        filterSuppliers('资源商管理', '团体捐赠')
      ]);
    case '交换':
      return mergeSupplierNames([filterSuppliers('资源商管理', '交换')]);
    case '拍卖':
      return mergeSupplierNames([filterSuppliers('代理商', '拍卖行')]);
    default:
      return [];
  }
}

/**
 * 按资源类型并集获取「使用中」供应商名称（供应商属性 resourceTypes 与给定类型有交集）。
 * @param {string[]} resourceTypes
 * @returns {string[]}
 */
export function getSupplierOptionsByResourceTypes(resourceTypes) {
  const typeSet = new Set((resourceTypes || []).filter(Boolean));
  if (!typeSet.size) return [];
  return mergeSupplierNames([
    SUPPLIER_MASTER_RECORDS.filter(record => {
      if (record.status !== '使用中') return false;
      return (record.resourceTypes || []).some(type => typeSet.has(type));
    })
  ]);
}

/**
 * 校验供应商是否适用于指定采选方式。
 * @param {string} method
 * @param {string} supplierName
 * @returns {boolean}
 */
export function isSupplierValidForMethod(method, supplierName) {
  if (!supplierName) return false;
  return getSupplierOptionsByMethod(method).includes(supplierName);
}

/**
 * 获取供应商在主数据中配置的默认折扣。
 * @param {string} supplierName
 * @returns {string}
 */
export function getSupplierDiscountByName(supplierName) {
  if (!supplierName) return '';
  const record = SUPPLIER_MASTER_RECORDS.find(
    item => item.name === supplierName && item.status === '使用中'
  );
  return record?.discount ?? '';
}
