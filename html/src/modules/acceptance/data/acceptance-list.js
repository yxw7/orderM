import {
  ACCEPTANCE_STATUS_MAP,
  SETTLEMENT_STATUS_MAP,
  STATUS_TEXT_TO_KEY
} from '@/modules/acceptance/constants';

export { ACCEPTANCE_STATUS_MAP, SETTLEMENT_STATUS_MAP };

const BASE_ROWS = [
  { acceptanceId: 'ysPG00120200602001', name: '20200602ceshi', type: '纸质书', lang: '中文', method: '现采', supplier: '北京市图书进出口有限公司', shipNo: '20200602发货单001', status: 'finished', settlement: 'settled', counts: '2/0/0', remark: false, autoBarcode: true, barcodeType: '全部语种', initialBarcode: '0010001', time: '2020-06-02 09:47:52', creator: '杨晓婉', defaultAccept: false },
  { acceptanceId: 'ysPG00120200602002', name: '测试验收', type: '视听资料', lang: '中文', method: '现采', supplier: '湖北三新', shipNo: '123123', status: 'notStarted', settlement: 'notApplied', counts: '0/0/0', remark: false, autoBarcode: true, barcodeType: '成人视听', initialBarcode: '', time: '2020-06-02 10:07:42', creator: '赵付', defaultAccept: false },
  { acceptanceId: 'ysPG00120200602003', name: '2025年02月20日第一批', type: '视听资料', lang: '西语', method: '现采', supplier: '北京人天', shipNo: 'ZGBBTSG21121301-266', status: 'inProgress', settlement: 'notApplied', counts: '1/0/0', remark: false, autoBarcode: true, barcodeType: '小语种成人图书', initialBarcode: '0020001', time: '2020-06-02 10:20:37', creator: '王二小', defaultAccept: false },
  { acceptanceId: 'ysPG00120200602004', name: '测试验收', type: '视听资料', lang: '英文', method: '现采', supplier: '湖北三新', shipNo: '20200602发货单004', status: 'notStarted', settlement: 'notApplied', counts: '0/0/0', remark: true, remarkText: '测试备注内容', autoBarcode: false, barcodeType: '', initialBarcode: '', time: '2020-06-02 10:20:37', creator: '王二小', defaultAccept: true, setCurrent: true },
  { acceptanceId: 'ysPG00120200602005', name: '测试验收', type: '视听资料', lang: '英文', method: '现采', supplier: '湖北三新', shipNo: '20200602发货单005', status: 'notStarted', settlement: 'notApplied', counts: '0/0/0', remark: false, autoBarcode: true, barcodeType: '成人视听', initialBarcode: '', time: '2020-06-02 11:05:12', creator: '王二小', defaultAccept: false },
  { acceptanceId: 'ysPG00120200602006', name: '2025年02月20日第一批', type: '纸质书', lang: '西语', method: '现采', supplier: '北京人天', shipNo: 'ZGBBTSG21121301-266', status: 'inProgress', settlement: 'pending', counts: '3/1/0', remark: false, autoBarcode: true, barcodeType: '小语种成人图书', initialBarcode: '0030001', time: '2020-06-02 14:30:00', creator: '杨晓婉', defaultAccept: false },
  { acceptanceId: 'ysPG00120200602007', name: '视听验收单', type: '视听资料', lang: '英文', method: '现采', supplier: '湖北三新', shipNo: '20200602发货单007', status: 'finished', settlement: 'settled', counts: '5/0/1', remark: true, remarkText: '本批次为英文视听资料，请注意分类编目。', autoBarcode: true, barcodeType: '成人视听', initialBarcode: '', time: '2020-06-02 16:45:30', creator: '赵付', defaultAccept: false },
  { acceptanceId: 'ysPG00120200602008', name: '纸质书验收', type: '纸质书', lang: '中文', method: '现采', supplier: '北京市图书进出口有限公司', shipNo: '20200603发货单001', status: 'notStarted', settlement: 'notApplied', counts: '0/0/0', remark: false, autoBarcode: false, barcodeType: '', initialBarcode: '', time: '2020-06-03 09:10:00', creator: '杨晓婉', defaultAccept: false },
  { acceptanceId: 'ysPG00120200602009', name: '测试验收2', type: '视听资料', lang: '中文', method: '现采', supplier: '湖北三新', shipNo: '20200603发货单002', status: 'inProgress', settlement: 'pending', counts: '2/0/0', remark: false, autoBarcode: true, barcodeType: '成人视听', initialBarcode: '', time: '2020-06-03 10:22:15', creator: '王二小', defaultAccept: false },
  { acceptanceId: 'ysPG00120200602010', name: '验收单测试', type: '纸质书', lang: '中文', method: '现采', supplier: '北京市图书进出口有限公司', shipNo: '20200603发货单003', status: 'finished', settlement: 'settled', counts: '4/0/0', remark: false, autoBarcode: true, barcodeType: '全部语种', initialBarcode: '', time: '2020-06-03 15:00:00', creator: '赵付', defaultAccept: false }
];

export function createAcceptanceRows() {
  return BASE_ROWS.map((row, index) => ({
    ...row,
    no: index + 1,
    id: index + 1,
    barcode: row.autoBarcode ? '是' : '否',
    setCurrent: row.setCurrent ?? row.defaultAccept ?? false
  }));
}

export const acceptanceSearchFields = [
  { key: 'acceptanceId', label: '验收单号' },
  { key: 'name', label: '验收单名称' },
  { key: 'resourceType', label: '资源类型', type: 'select', options: ['全部', '纸质书', '视听资料'] },
  { key: 'status', label: '验收单状态', type: 'select', extra: true, options: ['全部', '未开始', '进行中', '已结束'] },
  { key: 'supplier', label: '供应商', type: 'select', extra: true, options: ['全部', ...new Set(BASE_ROWS.map(r => r.supplier))] },
  { key: 'creator', label: '创建人', extra: true },
  { key: 'createTime', label: '创建时间', type: 'date', extra: true }
];


export { batchAcceptanceRows, batchAcceptanceSearchFields } from '@/modules/acceptance/data/batch-acceptance';

export const receiveOrderLineRows = [
  { id: 'PG001B202406030001-1', orderLineNo: 'PG001B202406030001-1', title: '中国现代史纲要', resourceId: '9787040456789', author: '王顺生著', publisher: '高等教育出版社', copiesInSet: 1, sets: 3, lineStatus: '已发订', acceptanceStatus: '待验收', flowStats: '3/0/0/0/0' },
  { id: 'PG001B202406030002-3', orderLineNo: 'PG001B202406030002-3', title: '中国现代史纲要', resourceId: '9787040456789', author: '王顺生著', publisher: '高等教育出版社', copiesInSet: 1, sets: 2, lineStatus: '已发订', acceptanceStatus: '待验收', flowStats: '2/0/0/0/0' },
  { id: 'PG001B20260528008-8', orderLineNo: 'PG001B20260528008-8', title: '地质勘查工程与生态修复', resourceId: '9787565855375', author: '张昕, 冯红彩, 张海燕主编', publisher: '汕头大学出版社', copiesInSet: 1, sets: 1, lineStatus: '已发订', acceptanceStatus: '待验收', flowStats: '1/0/0/0/0' }
];

export function filterAcceptanceRows(rows, search = {}) {
  return rows.filter(row => {
    if (search.acceptanceId && !row.acceptanceId.includes(search.acceptanceId.trim())) return false;
    if (search.name && !row.name.includes(search.name.trim())) return false;
    if (search.resourceType && search.resourceType !== '全部' && row.type !== search.resourceType) return false;
    if (search.status && search.status !== '全部') {
      const key = STATUS_TEXT_TO_KEY[search.status];
      if (key && row.status !== key) return false;
    }
    if (search.supplier && search.supplier !== '全部' && row.supplier !== search.supplier) return false;
    if (search.creator && !row.creator.includes(search.creator.trim())) return false;
    if (search.createTime) {
      const day = row.time.slice(0, 10);
      if (day !== search.createTime) return false;
    }
    return true;
  });
}

export function buildNewAcceptanceId() {
  const now = new Date();
  const datePart = [
    now.getFullYear(),
    String(now.getMonth() + 1).padStart(2, '0'),
    String(now.getDate()).padStart(2, '0')
  ].join('');
  return `ysPG001${datePart}${String(now.getTime()).slice(-3)}`;
}

export function formatAcceptanceDateTime(date = new Date()) {
  const pad = n => String(n).padStart(2, '0');
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())} ${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;
}

export function isImportableAcceptance(row) {
  return row && (row.status === 'notStarted' || row.status === 'inProgress');
}

/**
 * 导入发货单成功后，将未开始验收单标记为进行中
 * @param {string} acceptanceId
 * @returns {boolean} 是否发生状态变更
 */
export function markAcceptanceInProgressAfterImport(acceptanceId) {
  const row = BASE_ROWS.find(r => r.acceptanceId === acceptanceId);
  if (!row || row.status !== 'notStarted') return false;
  row.status = 'inProgress';
  return true;
}
