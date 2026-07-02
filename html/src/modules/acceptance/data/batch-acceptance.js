import { buildNewAcceptanceId, formatAcceptanceDateTime } from '@/modules/acceptance/data/acceptance-list';

export const batchAcceptanceRows = [
  { no: 1, acceptanceId: 'ysPG00120260529005', name: '20260529测试2', type: '视听资料', orderNo: 'PG001820260529004', method: '捐赠', supplier: '新纪元资源商', shipNo: '997765468', status: 'finished', receivedCount: 1, remark: true, remarkText: '捐赠入库，无需结算。', time: '2026-05-29 13:55:16', creator: '杨晓婉', settlement: 'notApplied' },
  { no: 2, acceptanceId: 'ysPG00120260528003', name: '批量验收单', type: '视听资料', orderNo: 'PG001820260528003', method: '现采', supplier: '湖北三新', shipNo: 'SF9001', status: 'finished', receivedCount: 1, remark: true, remarkText: '批量导入完成，请核对收货数量。', time: '2026-05-28 10:20:30', creator: '王二小', settlement: 'settled' },
  { no: 3, acceptanceId: 'ysPG00120260522008', name: 'PG001B20240522008', type: '纸质书', orderNo: 'PG001B20240522008', method: '现采', supplier: '湖北三新', shipNo: 'SF9002', status: 'finished', receivedCount: 3, remark: false, remarkText: '', time: '2026-05-22 09:15:42', creator: '赵付', settlement: 'settled' }
];

export const batchAcceptanceSearchFields = [
  { key: 'acceptanceId', label: '验收单号' },
  { key: 'name', label: '验收单名称' },
  {
    key: 'resourceType',
    label: '资源类型',
    type: 'select',
    options: [{ value: '', label: '全部' }, { value: '纸质书', label: '纸质书' }, { value: '视听资料', label: '视听资料' }]
  },
  {
    key: 'acceptanceStatus',
    label: '验收状态',
    type: 'select',
    extra: true,
    options: [
      { value: '', label: '全部' },
      { value: 'notStarted', label: '未开始' },
      { value: 'inProgress', label: '进行中' },
      { value: 'finished', label: '已结束' }
    ]
  },
  {
    key: 'supplier',
    label: '供应商',
    type: 'select',
    extra: true,
    options: [
      { value: '', label: '全部' },
      { value: '新纪元资源商', label: '新纪元资源商' },
      { value: '湖北三新', label: '湖北三新' }
    ]
  },
  { key: 'creator', label: '创建人', extra: true }
];

export const BATCH_ACCEPTANCE_COLUMNS = [
  { key: 'no', label: '序号' },
  { key: 'acceptanceId', label: '验收单号' },
  { key: 'name', label: '验收单名称', minWidth: 'min-w-[120px]' },
  { key: 'type', label: '资源类型' },
  { key: 'orderNo', label: '订单号', minWidth: 'min-w-[140px]' },
  { key: 'method', label: '采选方式' },
  { key: 'supplier', label: '供应商', minWidth: 'min-w-[120px]' },
  { key: 'shipNo', label: '发货单号' },
  { key: 'status', label: '验收状态' },
  { key: 'receivedCount', label: '收货册数' },
  { key: 'remark', label: '验收备注' },
  { key: 'time', label: '创建时间', minWidth: 'min-w-[140px]' },
  { key: 'creator', label: '创建人' },
  { key: 'settlement', label: '结算状态' },
  { key: 'actions', label: '操作', sticky: true }
];

export const BATCH_SUPPLIER_OPTIONS = [
  '北京市图书进出口有限公司',
  '湖北三新',
  '新纪元资源商',
  '湖南长沙',
  '教图'
];

export function filterBatchAcceptanceRows(rows, search = {}) {
  return rows.filter(row => {
    if (search.acceptanceId && !row.acceptanceId.includes(search.acceptanceId.trim())) return false;
    if (search.name && !row.name.includes(search.name.trim())) return false;
    if (search.resourceType && row.type !== search.resourceType) return false;
    if (search.acceptanceStatus && row.status !== search.acceptanceStatus) return false;
    if (search.supplier && row.supplier !== search.supplier) return false;
    if (search.creator && !row.creator.includes(search.creator.trim())) return false;
    return true;
  });
}

export function createBatchAcceptanceRow(form, creator = '杨晓婉') {
  const now = new Date();
  return {
    no: 0,
    acceptanceId: buildNewAcceptanceId(),
    name: form.name.trim(),
    type: form.resourceType,
    orderNo: form.orderNo.trim(),
    method: form.method,
    supplier: form.supplier,
    shipNo: form.shipNo?.trim() || '',
    status: 'notStarted',
    receivedCount: 0,
    remark: !!form.remark?.trim(),
    remarkText: form.remark?.trim() || '',
    time: formatAcceptanceDateTime(now),
    creator,
    settlement: 'notApplied'
  };
}

export function canRestartBatchAcceptance(row) {
  return row.settlement === 'notApplied' && row.status === 'finished';
}

export function canApplyBatchSettlement(row) {
  return row.settlement === 'notApplied' && row.status === 'finished';
}
