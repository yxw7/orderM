import { isBudgetOptionalForMethod } from '@/modules/order/constants';

export const NEW_ORDER_REQUIRED_FIELDS = [
  { key: 'subscriber', label: '订户' },
  { key: 'resourceType', label: '资源类型' },
  { key: 'method', label: '采选方式' },
  { key: 'budget', label: '预算名称' },
  { key: 'language', label: '语种' },
  { key: 'supplier', label: '供应商' },
  { key: 'site', label: '馆址' }
];

function formatDateTime(date) {
  const pad = value => String(value).padStart(2, '0');
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())} `
    + `${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;
}

function buildOrderId(existingCount, date = new Date()) {
  const datePart = [
    date.getFullYear(),
    String(date.getMonth() + 1).padStart(2, '0'),
    String(date.getDate()).padStart(2, '0')
  ].join('');
  const seq = String(existingCount + 1).padStart(3, '0');
  return `PG001B${datePart}${seq}`;
}

export function validateNewOrderForm(form) {
  const errors = {};
  NEW_ORDER_REQUIRED_FIELDS.forEach(field => {
    if (field.key === 'budget' && isBudgetOptionalForMethod(form.method)) return;
    if (!form[field.key]?.trim?.() && !form[field.key]) {
      errors[field.key] = `请选择${field.label}`;
    }
  });
  return { valid: Object.keys(errors).length === 0, errors };
}

export function buildNewOrderRow(form, existingOrders) {
  const now = new Date();
  const discount = (form.discount || '').trim();
  const orderId = buildOrderId(existingOrders.length, now);

  return {
    id: orderId,
    no: existingOrders.length + 1,
    subscriber: form.subscriber,
    site: form.site,
    orderId,
    method: form.method,
    resourceType: form.resourceType,
    language: form.language,
    supplier: form.supplier,
    orderTime: formatDateTime(now),
    issuer: '系统',
    issueTime: '',
    orderVolumes: 0,
    orderSpecies: 0,
    budget: form.budget,
    listPrice: '0.00',
    discount: discount || '—',
    netPrice: '0.00',
    issueRemark: '',
    orderStatus: 'pendingImport',
    settlementStatus: 'unsettled'
  };
}

export function renumberOrderRows(orders) {
  orders.forEach((row, index) => {
    row.no = orders.length - index;
  });
}
