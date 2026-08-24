export const REASON_TYPE_LABELS = {
  exchange: '换货原因',
  return: '退货原因',
  cancel: '撤订原因',
  revokeReceive: '撤销收货原因'
};

export const defaultReasonData = {
  exchange: [
    { id: 'ex-1', content: '换货', status: 'active', sort: 1, creator: '赵付', created: '2026-05-22 08:55:41', remark: '' },
    { id: 'ex-2', content: '残缺损', status: 'active', sort: 2, creator: '李会申测试账号', created: '2026-05-21 09:45:18', remark: '' },
    { id: 'ex-3', content: '缺页', status: 'active', sort: 3, creator: '赵付', created: '2026-05-22 08:56:00', remark: '' },
    { id: 'ex-4', content: '错页', status: 'active', sort: 4, creator: '赵付', created: '2026-05-22 08:56:01', remark: '' },
    { id: 'ex-5', content: '装订错误', status: 'active', sort: 5, creator: '赵付', created: '2026-05-22 08:56:02', remark: '' },
    { id: 'ex-6', content: '纸张破损', status: 'active', sort: 6, creator: '赵付', created: '2026-05-22 08:56:03', remark: '' },
    { id: 'ex-7', content: '装订不牢', status: 'active', sort: 7, creator: '赵付', created: '2026-05-22 08:56:04', remark: '' },
    { id: 'ex-8', content: '书脊开裂', status: 'active', sort: 8, creator: '赵付', created: '2026-05-22 08:56:05', remark: '' },
    { id: 'ex-9', content: '被污染或损坏', status: 'active', sort: 9, creator: '赵付', created: '2026-05-22 08:56:06', remark: '' }
  ],
  return: [
    { id: 'rt-1', content: '退货', status: 'active', sort: 1, creator: '赵付', created: '2026-05-22 08:55:48', remark: '' },
    { id: 'rt-2', content: '损坏退货', status: 'active', sort: 2, creator: '李会申测试账号', created: '2026-05-21 09:46:09', remark: '' },
    { id: 'rt-3', content: '缺页', status: 'active', sort: 3, creator: '赵付', created: '2026-05-22 08:56:10', remark: '' },
    { id: 'rt-4', content: '错页', status: 'active', sort: 4, creator: '赵付', created: '2026-05-22 08:56:11', remark: '' },
    { id: 'rt-5', content: '装订错误', status: 'active', sort: 5, creator: '赵付', created: '2026-05-22 08:56:12', remark: '' },
    { id: 'rt-6', content: '纸张破损', status: 'active', sort: 6, creator: '赵付', created: '2026-05-22 08:56:13', remark: '' },
    { id: 'rt-7', content: '装订不牢', status: 'active', sort: 7, creator: '赵付', created: '2026-05-22 08:56:14', remark: '' },
    { id: 'rt-8', content: '书脊开裂', status: 'active', sort: 8, creator: '赵付', created: '2026-05-22 08:56:15', remark: '' },
    { id: 'rt-9', content: '被污染或损坏', status: 'active', sort: 9, creator: '赵付', created: '2026-05-22 08:56:16', remark: '' }
  ],
  cancel: [
    { id: 'ca-1', content: '撤订', status: 'active', sort: 1, creator: '赵付', created: '2026-05-22 08:55:56', remark: '' },
    { id: 'ca-2', content: '退订', status: 'active', sort: 2, creator: '李会申测试账号', created: '2026-05-21 09:46:27', remark: '' }
  ],
  revokeReceive: [
    { id: 'rv-1', content: '录入错误', status: 'active', sort: 1, creator: '赵付', created: '2026-05-22 09:10:12', remark: '' },
    { id: 'rv-2', content: '重复收货', status: 'active', sort: 2, creator: '杨晓婉', created: '2026-05-22 09:11:05', remark: '' },
    { id: 'rv-3', content: '品相差', status: 'active', sort: 3, creator: '王二小', created: '2026-05-22 09:12:18', remark: '' }
  ]
};

export const reasonSearchFields = [
  { key: 'content', label: '原因' },
  { key: 'status', label: '状态', type: 'select', options: ['全部', '使用中', '已停用'] },
  { key: 'createDate', label: '创建日期', type: 'dateRange', startKey: 'startDate', endKey: 'endDate' },
  { key: 'creator', label: '创建人', extra: true }
];

export const REASON_STATUS_MAP = {
  active: { text: '使用中', cls: 'text-green-600' },
  disabled: { text: '已停用', cls: 'text-red-500' }
};
