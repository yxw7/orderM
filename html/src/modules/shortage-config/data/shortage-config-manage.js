import { activeSubscriberOptions } from '@/modules/subscriber/data/subscriber-manage';

export const SHORTAGE_CONFIG_STATUS_MAP = {
  active: { text: '使用中', cls: 'text-green-600' },
  inactive: { text: '已停用', cls: 'text-red-500' }
};

export const SHORTAGE_CONFIG_COLUMNS = [
  { key: 'id', label: '序号', minWidth: 'w-14' },
  { key: 'subscriber', label: '订户' },
  { key: 'status', label: '催缺状态' },
  { key: 'trigger', label: '触发条件' },
  { key: 'created', label: '创建日期' },
  { key: 'actions', label: '操作', minWidth: 'min-w-[120px]' },
  { key: 'sort', label: '', minWidth: 'w-16' }
];

export const shortageConfigSearchFields = [
  { key: 'subscriber', label: '订户', placeholder: '请输入，模糊匹配' },
  {
    key: 'status',
    label: '催缺状态',
    type: 'select',
    options: ['全部', '使用中', '已停用']
  },
  {
    key: 'createDate',
    label: '创建日期',
    type: 'dateRange',
    startKey: 'startDate',
    endKey: 'endDate'
  }
];

export const SHORTAGE_SUBSCRIBER_OPTIONS = activeSubscriberOptions;

const rowsRaw = [
  {
    subscriber: '采编中心',
    status: 'active',
    triggerType: 'days',
    triggerDays: '1',
    triggerStartDate: '',
    triggerEndDate: '',
    autoEnabled: true,
    remark: '',
    created: '2026-05-22 08:56:09',
    sortOrder: 1
  },
  {
    subscriber: '少儿中文',
    status: 'inactive',
    triggerType: 'dateRange',
    triggerDays: '',
    triggerStartDate: '2026-01-01',
    triggerEndDate: '2026-03-31',
    autoEnabled: false,
    remark: '测试停用配置',
    created: '2026-05-20 10:00:00',
    sortOrder: 2
  }
];

export const shortageConfigRows = rowsRaw.map((row, index) => ({
  ...row,
  id: index + 1,
  trigger: formatTriggerDisplay(row)
}));

export function formatTriggerDisplay(row) {
  if (row.triggerType === 'dateRange') {
    const start = row.triggerStartDate || '';
    const end = row.triggerEndDate || '';
    if (!start && !end) return '—';
    return `${start} ~ ${end}`;
  }
  const days = row.triggerDays;
  if (!days && days !== 0) return '—';
  return `${days}，${days}天`;
}

export function filterShortageConfigRows(rows, search = {}) {
  return rows.filter(row => {
    const keyword = search.subscriber?.trim();
    if (keyword && !row.subscriber.toLowerCase().includes(keyword.toLowerCase())) return false;
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

export function sortShortageConfigRows(rows) {
  return [...rows].sort((a, b) => (a.sortOrder ?? 0) - (b.sortOrder ?? 0));
}

export function moveShortageConfigRow(rows, rowId, direction) {
  const sorted = sortShortageConfigRows(rows);
  const index = sorted.findIndex(row => row.id === rowId);
  if (index < 0) return rows;
  const targetIndex = direction === 'up' ? index - 1 : index + 1;
  if (targetIndex < 0 || targetIndex >= sorted.length) return rows;

  const currentOrder = sorted[index].sortOrder;
  sorted[index].sortOrder = sorted[targetIndex].sortOrder;
  sorted[targetIndex].sortOrder = currentOrder;
  return sorted;
}

export function rowToForm(row) {
  return {
    subscriber: row.subscriber || '',
    remark: row.remark || '',
    autoEnabled: row.autoEnabled ?? row.status === 'active',
    triggerType: row.triggerType || 'days',
    triggerDays: row.triggerDays != null ? String(row.triggerDays) : '',
    triggerStartDate: row.triggerStartDate || '',
    triggerEndDate: row.triggerEndDate || ''
  };
}

export function validateShortageConfigForm(form, rows = [], excludeId = null) {
  const errors = {};
  const subscriber = (form.subscriber || '').trim();
  if (!subscriber) errors.subscriber = '请选择';
  else if (rows.some(row => row.id !== excludeId && row.subscriber === subscriber)) {
    errors.subscriber = '订户配置已存在';
  }

  if (form.triggerType === 'days') {
    const days = String(form.triggerDays ?? '').trim();
    if (!days) errors.triggerDays = '请输入';
    else if (!/^\d+$/.test(days) || Number(days) < 1) errors.triggerDays = '请输入有效天数';
  } else if (form.triggerType === 'dateRange') {
    if (!form.triggerStartDate) errors.triggerStartDate = '请选择';
    if (!form.triggerEndDate) errors.triggerEndDate = '请选择';
    if (form.triggerStartDate && form.triggerEndDate && form.triggerStartDate > form.triggerEndDate) {
      errors.triggerEndDate = '结束日期不能早于开始日期';
    }
  }

  return { valid: Object.keys(errors).length === 0, errors };
}

export function buildShortageConfigPayload(form) {
  const payload = {
    subscriber: form.subscriber.trim(),
    remark: form.remark.trim(),
    autoEnabled: form.autoEnabled,
    status: form.autoEnabled ? 'active' : 'inactive',
    triggerType: form.triggerType,
    triggerDays: form.triggerType === 'days' ? String(form.triggerDays).trim() : '',
    triggerStartDate: form.triggerType === 'dateRange' ? form.triggerStartDate : '',
    triggerEndDate: form.triggerType === 'dateRange' ? form.triggerEndDate : ''
  };
  payload.trigger = formatTriggerDisplay(payload);
  return payload;
}

export function nowCreatedString() {
  const d = new Date();
  const pad = n => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
}
