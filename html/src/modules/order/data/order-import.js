export const IMPORT_ORDER_STEPS = [
  { step: 1, title: '上传文件', subtitle: '校验模板和订单资源类型是否匹配' },
  { step: 2, title: '解析文件', subtitle: '文件自查重，检查必备项，字段规范' },
  { step: 3, title: '数据入库', subtitle: '' }
];

const ALLOWED_EXTENSIONS = ['.xls', '.xlsx'];

export function isAllowedImportFileName(fileName) {
  const lower = (fileName || '').toLowerCase();
  return ALLOWED_EXTENSIONS.some(ext => lower.endsWith(ext));
}

export function validateImportUpload({ templateId, file }) {
  const errors = [];
  if (!templateId) errors.push('请选择模板文件');
  if (!file) {
    errors.push('请上传文件');
  } else if (!isAllowedImportFileName(file.name)) {
    errors.push('文件格式不匹配，请重新上传');
  } else if (!templateId) {
    errors.push('模板不匹配，请重新上传');
  }
  return errors;
}

/** 模拟解析：文件名含「失败」时返回 10 条失败，否则全部成功 */
export function simulateOrderImportParse(file) {
  const total = 100;
  const fail = file?.name?.includes('失败') ? 10 : 0;
  return {
    total,
    success: total - fail,
    fail,
    canProceed: fail === 0
  };
}

export function buildImportResultCsv(parseResult) {
  const lines = [
    '行号,状态,说明',
    ...Array.from({ length: parseResult.success }, (_, i) => `${i + 1},成功,`),
    ...Array.from({ length: parseResult.fail }, (_, i) => `${parseResult.success + i + 1},失败,字段校验未通过`)
  ];
  return lines.join('\n');
}

export function downloadImportResult(parseResult) {
  const blob = new Blob(['\ufeff' + buildImportResultCsv(parseResult)], { type: 'text/csv;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = '订单导入解析结果.csv';
  link.click();
  URL.revokeObjectURL(url);
}

function formatDateTime(date) {
  const pad = value => String(value).padStart(2, '0');
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())} `
    + `${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;
}

export function applyOrderImport(order, lines, parseResult) {
  if (!order || order.orderStatus !== 'pendingImport') {
    return { ok: false, message: '仅待导入状态的订单可导入' };
  }

  const now = formatDateTime(new Date());
  const importedCount = parseResult.success;
  order.orderStatus = 'pending';
  order.orderSpecies = importedCount;
  order.orderVolumes = importedCount;
  order.orderTime = order.orderTime || now;

  const existingLineNos = new Set(lines.filter(line => line.orderId === order.orderId).map(line => line.orderLineNo));
  for (let i = 1; i <= Math.min(importedCount, 3); i += 1) {
    const lineNo = `${order.orderId}-${i}`;
    if (existingLineNos.has(lineNo)) continue;
    lines.unshift({
      id: lineNo,
      orderId: order.orderId,
      site: order.site,
      orderLineNo: lineNo,
      bibRecordNo: '',
      actualBibRecordNos: [],
      title: `导入书目示例 ${i}`,
      resourceId: `978711100000${i}`,
      carrier: order.resourceType === '视听资料' ? 'CD' : 'AP',
      author: '',
      publisher: '',
      publishTime: '',
      volumeNo: '',
      volumeName: '',
      price: '0.00',
      currency: 'CNY',
      copiesInSet: 1,
      sets: 1,
      lineStatus: '待发订',
      acceptanceStatus: '',
      settlementStatus: '待申请',
      isShortage: '否',
      flowStats: '0/0/0/0/0',
      issueTime: '',
      hasRemark: false,
      textLanguage: order.language === '外文' ? '外文' : '中文',
      resourceType: order.resourceType,
      language: order.language
    });
  }

  return { ok: true };
}
