export const SUBSCRIBER_OPTIONS = ['订户一', '订户二', '订户三', '订户四', '订户五', '订户六', '订户七', '订户八'];

export const IMPORT_TEMPLATE_STATUS_MAP = {
  active: { text: '使用中', cls: 'text-green-600' },
  inactive: { text: '已停用', cls: 'text-red-500' }
};

export const IMPORT_TEMPLATE_COLUMNS = [
  { key: 'id', label: '序号' },
  { key: 'resourceType', label: '采访资源类型' },
  { key: 'language', label: '语种' },
  { key: 'templateName', label: '模板名称', minWidth: 'min-w-[200px]' },
  { key: 'subscribers', label: '关联订户' },
  { key: 'status', label: '状态' },
  { key: 'actions', label: '操作', sticky: true, minWidth: 'min-w-[320px]' }
];

export const importTemplateSearchFields = [
  { key: 'subscriber', label: '关联订户', type: 'select', options: [{ value: '', label: '全部' }, ...SUBSCRIBER_OPTIONS] },
  { key: 'resourceType', label: '采访资源类型', type: 'select', options: [{ value: '', label: '全部' }, '纸质图书', '视听资料'] },
  { key: 'language', label: '语种', type: 'select', options: [{ value: '', label: '全部' }, '中文', '外文'] },
  { key: 'status', label: '状态', type: 'select', options: [{ value: '', label: '全部' }, { value: 'active', label: '使用中' }, { value: 'inactive', label: '已停用' }] }
];

const rowsRaw = [
  { subscribers: ['订户一'], resourceType: '图书', resourceTypeFilter: '纸质图书', language: '中文', templateName: '纸质图书中文订单导入模板', status: 'active', remark: '', created: '2024-06-08' },
  { subscribers: ['订户二'], resourceType: '图书', resourceTypeFilter: '纸质图书', language: '外文', templateName: '纸质图书外文订单导入模板', status: 'active', remark: '', created: '2024-06-07' },
  { subscribers: ['订户三'], resourceType: '视听资料', resourceTypeFilter: '视听资料', language: '中文', templateName: '视听资料中文订单导入模板', status: 'active', remark: '', created: '2024-06-06' },
  { subscribers: ['订户四'], resourceType: '视听资料', resourceTypeFilter: '视听资料', language: '外文', templateName: '视听资料外文订单导入模板', status: 'active', remark: '', created: '2024-06-05' },
  { subscribers: ['订户五'], resourceType: '历史文献', resourceTypeFilter: '纸质图书', language: '中文', templateName: '历史文献中文订单导入模板', status: 'active', remark: '', created: '2024-06-04' },
  { subscribers: ['订户六'], resourceType: '图书', resourceTypeFilter: '纸质图书', language: '中文', templateName: '国家图书馆专用纸质图书中文订单导入模板名称超长测试省略号显示效果', status: 'inactive', remark: '测试备注', created: '2024-06-03' },
  { subscribers: ['订户七'], resourceType: '视听资料', resourceTypeFilter: '视听资料', language: '中文', templateName: '定制视听资料订单导入模板', status: 'active', remark: '', created: '2024-06-02' },
  { subscribers: ['订户八'], resourceType: '图书', resourceTypeFilter: '纸质图书', language: '外文', templateName: '外文订单标准导入模板', status: 'inactive', remark: '', created: '2024-06-01' },
  { subscribers: [], resourceType: '图书', resourceTypeFilter: '纸质图书', language: '中文', templateName: '纸质书中中文通用导入模板', status: 'active', remark: '', created: '2024-06-09' },
  { subscribers: [], resourceType: '图书', resourceTypeFilter: '纸质图书', language: '外文', templateName: '纸质书外文书目导入模板', status: 'active', remark: '', created: '2024-06-09' },
  { subscribers: [], resourceType: '视听资料', resourceTypeFilter: '视听资料', language: '中文', templateName: '视听资料中文导入模板', status: 'active', remark: '', created: '2024-06-09' },
  { subscribers: [], resourceType: '视听资料', resourceTypeFilter: '视听资料', language: '外文', templateName: '视听资料外文导入模板', status: 'active', remark: '', created: '2024-06-09' }
];

export const importTemplateRows = rowsRaw.map((row, index) => ({ ...row, id: index + 1 }));

export const DEFAULT_TEMPLATE_FIELDS = [
  { fieldCode: 'bookId', fieldName: '书目记录号', displayName: '书目记录号', required: true, defaultValue: '', sortValue: 1, usedInDedupRule: false },
  { fieldCode: 'isbn', fieldName: 'ISBN', displayName: 'ISBN', required: true, defaultValue: '', sortValue: 2, usedInDedupRule: true },
  { fieldCode: 'zTitle', fieldName: '正题名', displayName: '正题名', required: true, defaultValue: '', sortValue: 3, usedInDedupRule: false },
  { fieldCode: 'fTitle', fieldName: '副题名', displayName: '副题名', required: false, defaultValue: '', sortValue: 4, usedInDedupRule: false },
  { fieldCode: 'fenJuan', fieldName: '分卷号', displayName: '分卷号', required: false, defaultValue: '', sortValue: 5, usedInDedupRule: false },
  { fieldCode: 'fenJuanNam', fieldName: '分卷名', displayName: '分卷名', required: false, defaultValue: '', sortValue: 6, usedInDedupRule: false },
  { fieldCode: 'author', fieldName: '作者', displayName: '作者', required: false, defaultValue: '', sortValue: 7, usedInDedupRule: false },
  { fieldCode: 'setnumber', fieldName: '套数', displayName: '套数', required: false, defaultValue: '', sortValue: 8, usedInDedupRule: false }
];

export const SYSTEM_PRESET_FIELD_POOL = [
  { fieldCode: 'bookId', fieldName: '书目记录号', description: '书目记录号', required: true },
  { fieldCode: 'isbn', fieldName: 'ISBN', description: 'ISBN', required: true },
  { fieldCode: 'zTitle', fieldName: '正题名', description: '正题名', required: true },
  { fieldCode: 'fTitle', fieldName: '副题名', description: '副题名', required: false },
  { fieldCode: 'fenJuan', fieldName: '分卷号', description: '分卷号', required: false },
  { fieldCode: 'fenJuanNam', fieldName: '分卷名', description: '分卷名', required: false },
  { fieldCode: 'author', fieldName: '作者', description: '作者', required: false },
  { fieldCode: 'publication', fieldName: '出版社', description: '出版社', required: false },
  { fieldCode: 'setnumber', fieldName: '套数', description: '套数', required: false },
  { fieldCode: 'pubYear', fieldName: '出版年', description: '出版年', required: false },
  { fieldCode: 'price', fieldName: '价格', description: '价格', required: false },
  { fieldCode: 'classNo', fieldName: '分类号', description: '分类号', required: false },
  { fieldCode: 'subject', fieldName: '主题词', description: '主题词', required: false },
  { fieldCode: 'language', fieldName: '语种', description: '语种', required: false },
  { fieldCode: 'edition', fieldName: '版次', description: '版次', required: false }
];

export const FIELD_CONFIG_COLUMNS = [
  { key: 'id', label: '序号' },
  { key: 'fieldCode', label: '字段代码' },
  { key: 'fieldName', label: '字段名' },
  { key: 'displayName', label: '显示名' },
  { key: 'required', label: '是否必填' },
  { key: 'defaultValue', label: '默认值' },
  { key: 'sortValue', label: '排序值' },
  { key: 'actions', label: '操作' }
];

export const FIELD_CONFIG_SEARCH_FIELDS = [
  { key: 'fieldCode', label: '字段代码' },
  { key: 'fieldName', label: '字段名' },
  { key: 'displayName', label: '显示名' },
  { key: 'required', label: '是否必填', type: 'select', options: [{ value: '', label: '全部' }, { value: 'yes', label: '是' }, { value: 'no', label: '否' }] }
];

export const DEDUP_RULE_NAME_MAX = 30;
export const DEDUP_RULE_NAME_PATTERN = /^[\u4e00-\u9fa5a-zA-Z0-9+\-/&*]+$/;

export function formatSubscribers(subscribers) {
  if (!subscribers || subscribers.length === 0) return '—';
  return subscribers.join('、');
}

export function fuzzyMatch(source, keyword) {
  if (!keyword) return true;
  return String(source).toLowerCase().includes(keyword.toLowerCase());
}

export function filterImportTemplateRows(rows, search = {}) {
  return rows.filter(row => {
    if (search.subscriber) {
      const subs = row.subscribers || [];
      if (subs.length === 0 || !subs.includes(search.subscriber)) return false;
    }
    if (search.resourceType && row.resourceTypeFilter !== search.resourceType) return false;
    if (search.language && row.language !== search.language) return false;
    if (search.status && row.status !== search.status) return false;
    return true;
  });
}

export function toFormResourceType(row) {
  return row.resourceTypeFilter || (row.resourceType === '视听资料' ? '视听资料' : '纸质图书');
}

export function fromFormResourceType(value) {
  if (value === '视听资料') return { resourceType: '视听资料', resourceTypeFilter: '视听资料' };
  return { resourceType: '图书', resourceTypeFilter: '纸质图书' };
}

export function getTemplateFields(template) {
  if (!template.fields) {
    template.fields = DEFAULT_TEMPLATE_FIELDS.map(item => ({ ...item }));
  }
  return template.fields;
}

export function getTemplateDedupRule(template) {
  getTemplateFields(template);
  if (!template.dedupRule) {
    template.dedupRule = { ruleName: 'ISBN&正题名', fieldCodes: ['isbn', 'zTitle'] };
  }
  return template.dedupRule;
}

export function syncTemplateFieldDedupFlags(template) {
  const dedupCodes = new Set(getTemplateDedupRule(template).fieldCodes);
  getTemplateFields(template).forEach(field => {
    field.usedInDedupRule = dedupCodes.has(field.fieldCode);
  });
}

export function cleanupDedupRuleFields(template) {
  const validCodes = new Set(getTemplateFields(template).map(field => field.fieldCode));
  const dedupRule = getTemplateDedupRule(template);
  dedupRule.fieldCodes = dedupRule.fieldCodes.filter(code => validCodes.has(code));
  syncTemplateFieldDedupFlags(template);
}

export function cloneTemplateConfig(template) {
  return {
    fields: getTemplateFields(template).map(field => ({ ...field })),
    dedupRule: {
      ruleName: getTemplateDedupRule(template).ruleName,
      fieldCodes: [...getTemplateDedupRule(template).fieldCodes]
    }
  };
}

export function filterFieldConfigRows(rows, search = {}) {
  return rows.filter(row => {
    if (!fuzzyMatch(row.fieldCode, search.fieldCode?.trim())) return false;
    if (!fuzzyMatch(row.fieldName, search.fieldName?.trim())) return false;
    if (!fuzzyMatch(row.displayName, search.displayName?.trim())) return false;
    if (search.required === 'yes' && !row.required) return false;
    if (search.required === 'no' && row.required) return false;
    return true;
  });
}

export function filterPresetFieldPool(rows, search = {}) {
  return rows.filter(row => {
    if (!fuzzyMatch(row.fieldCode, search.fieldCode?.trim())) return false;
    if (!fuzzyMatch(row.fieldName, search.fieldName?.trim())) return false;
    return true;
  });
}

export function validateTemplateForm(form, existingNames, excludeIndex = -1) {
  const errors = {};
  if (!form.resourceType) errors.resourceType = '请选择';
  if (!form.language) errors.language = '请选择';
  const name = (form.templateName || '').trim();
  if (!name) errors.templateName = '请输入';
  else if (name.length > 64) errors.templateName = '已超字符限制';
  else if (existingNames.some((n, i) => i !== excludeIndex && n === name)) errors.templateName = '模板名称已存在';
  if ((form.remark || '').length > 500) errors.remark = '已超字符限制';
  return { valid: Object.keys(errors).length === 0, errors };
}

export function validateDedupForm(ruleName, fieldCodes) {
  const errors = {};
  const name = (ruleName || '').trim();
  if (!name) errors.ruleName = '请输入';
  else if (name.length > DEDUP_RULE_NAME_MAX) errors.ruleName = '已超字符限制';
  else if (!DEDUP_RULE_NAME_PATTERN.test(name)) errors.ruleName = '格式不正确';
  if (!fieldCodes.length) errors.fieldCombo = '请选择';
  return { valid: Object.keys(errors).length === 0, errors };
}

export function orderResourceTypeToFilter(resourceType) {
  return resourceType === '视听资料' ? '视听资料' : '纸质图书';
}

export function getAvailableTemplates(rows, order) {
  const filter = orderResourceTypeToFilter(order.resourceType);
  return rows.filter(row => {
    if (row.status !== 'active') return false;
    if (row.resourceTypeFilter !== filter) return false;
    if (row.language !== order.language) return false;
    const subs = row.subscribers || [];
    if (subs.length === 0) return true;
    return subs.includes(order.subscriber || '');
  });
}
