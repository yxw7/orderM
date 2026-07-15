export const CURRENCY_STATUS_MAP = {
  active: { text: '使用中', cls: 'text-green-600' },
  disabled: { text: '已停用', cls: 'text-red-500' }
};

export const CURRENCY_STATUS_TEXT_TO_KEY = {
  使用中: 'active',
  已停用: 'disabled'
};

export const CURRENCY_COLUMNS = [
  { key: 'id', label: '序号' },
  { key: 'name', label: '货币名称' },
  { key: 'code', label: '货币代码' },
  { key: 'status', label: '货币状态' },
  { key: 'rate', label: '货币汇率' },
  { key: 'actions', label: '操作', sticky: true }
];

export const currencySearchFields = [
  { key: 'name', label: '货币名称' },
  { key: 'code', label: '货币代码' },
  { key: 'status', label: '货币状态', type: 'select', options: ['全部', '使用中', '已停用'] }
];

export const currencyRows = [
  { id: 1, name: '人民币', code: 'CNY', status: 'active', rate: '1.0000' },
  { id: 2, name: '欧元', code: 'EUR', status: 'active', rate: '8.3115' },
  { id: 3, name: '日元', code: 'JPY', status: 'active', rate: '0.0486' },
  { id: 4, name: '英镑', code: 'GBP', status: 'active', rate: '9.0120' },
  { id: 5, name: '港币', code: 'HKD', status: 'active', rate: '0.9223' },
  { id: 6, name: '新台币', code: 'TWD', status: 'active', rate: '0.2223' },
  { id: 7, name: '美元', code: 'USD', status: 'active', rate: '7.1000' },
  { id: 8, name: '澳元', code: 'AUD', status: 'active', rate: '4.6520' }
];

export const currencyRateHistoryMap = {
  CNY: [
    { id: 1, updateTime: '2026-01-01 00:00:00', rate: '1.0000', operator: '系统' }
  ],
  EUR: [
    { id: 1, updateTime: '2026-05-20 09:30:00', rate: '8.3115', operator: '系统' },
    { id: 2, updateTime: '2026-03-15 14:20:00', rate: '8.2800', operator: '李佳' }
  ],
  USD: [
    { id: 1, updateTime: '2026-05-18 10:00:00', rate: '7.1000', operator: '系统' },
    { id: 2, updateTime: '2026-04-01 09:00:00', rate: '7.0500', operator: '系统' },
    { id: 3, updateTime: '2026-02-10 16:45:00', rate: '7.1200', operator: '黄俊' }
  ],
  GBP: [
    { id: 1, updateTime: '2026-05-10 11:20:00', rate: '9.0120', operator: '系统' }
  ],
  JPY: [
    { id: 1, updateTime: '2026-05-05 08:15:00', rate: '0.0486', operator: '系统' }
  ],
  HKD: [
    { id: 1, updateTime: '2026-04-28 13:40:00', rate: '0.9223', operator: '系统' }
  ],
  TWD: [
    { id: 1, updateTime: '2026-04-20 10:10:00', rate: '0.2223', operator: '系统' }
  ],
  AUD: [
    { id: 1, updateTime: '2026-04-15 15:30:00', rate: '4.6520', operator: '系统' }
  ]
};

export const RATE_HISTORY_COLUMNS = [
  { key: 'id', label: '序号' },
  { key: 'updateTime', label: '更新时间' },
  { key: 'rate', label: '货币汇率' },
  { key: 'operator', label: '操作人' }
];

export function filterCurrencyRows(rows, search = {}) {
  return rows.filter(row => {
    if (search.name && !row.name.includes(search.name.trim())) return false;
    if (search.code && !row.code.toLowerCase().includes(search.code.trim().toLowerCase())) return false;
    if (search.status && search.status !== '全部') {
      const key = CURRENCY_STATUS_TEXT_TO_KEY[search.status];
      if (key && row.status !== key) return false;
    }
    return true;
  });
}

/**
 * 获取使用中的货币选项（供业务下拉选用货币代码）
 * @param {Array<{ code?: string, name?: string, status?: string }>} [rows]
 * @returns {Array<{ code: string, name: string }>}
 */
export function getActiveCurrencyOptions(rows = currencyRows) {
  return rows
    .filter(row => row.status === 'active' && row.code)
    .map(row => ({ code: row.code, name: row.name || row.code }));
}

export function getCurrencyRateHistory(code) {
  return currencyRateHistoryMap[code] || [
    { id: 1, updateTime: '—', rate: '—', operator: '—' }
  ];
}

export function validateCurrencyForm(form, existingCodes, excludeCode = '') {
  const errors = {};
  const name = form.name.trim();
  const code = form.code.trim().toUpperCase();
  const rate = form.rate.trim();

  if (!name) errors.name = '请输入货币名称';
  if (!code) errors.code = '请输入货币代码';
  else if (existingCodes.includes(code) && code !== excludeCode) errors.code = '货币代码已存在';
  if (!rate) errors.rate = '请输入货币汇率';
  else if (!/^\d+(\.\d{1,4})?$/.test(rate)) errors.rate = '请输入有效汇率（最多4位小数）';

  return { valid: Object.keys(errors).length === 0, errors, normalized: { name, code, rate, status: form.status } };
}

export function appendRateHistory(code, rate, operator = '系统') {
  const now = new Date();
  const pad = n => String(n).padStart(2, '0');
  const updateTime = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())} ${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;
  const record = { id: (currencyRateHistoryMap[code]?.length || 0) + 1, updateTime, rate, operator };
  if (!currencyRateHistoryMap[code]) currencyRateHistoryMap[code] = [];
  currencyRateHistoryMap[code].unshift(record);
}
