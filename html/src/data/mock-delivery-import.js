export const deliverySteps = [
  { step: 1, title: '上传文件' },
  { step: 2, title: '列名映射' },
  { step: 3, title: '选择匹配字段' },
  { step: 4, title: '匹配预览' },
  { step: 5, title: '确认提交' }
];

export const mockFileColumns = [
  'ISBN', '书名', '作者', '出版社', '图书类型', '每套册数', '订单号',
  'RMB单价', '总套数', '总册数', 'RMB码洋', '折扣', 'RMB实洋', '包号'
];

export const standardFieldMappings = [
  { fileCol: 'ISBN', stdField: 'isbn', label: 'ISBN' },
  { fileCol: '书名', stdField: 'title', label: '正题名' },
  { fileCol: '作者', stdField: 'author', label: '作者' },
  { fileCol: '出版社', stdField: 'publisher', label: '出版社' },
  { fileCol: '总套数', stdField: 'receiveQty', label: '待收套数', required: true },
  { fileCol: '每套册数', stdField: 'volCount', label: '套内册数' },
  { fileCol: 'RMB单价', stdField: 'price', label: '定价' }
];

export const matchFieldOptions = [
  { value: 'isbn', label: 'ISBN', checked: true },
  { value: 'title', label: '正题名', checked: true },
  { value: 'author', label: '作者', checked: false },
  { value: 'publisher', label: '出版社', checked: false }
];

export const deliveryPreviewRows = [
  { id: 1, isbn: '9787518359066', title: '现代精细油藏描述', author: '陈欢庆 著', receiveQty: 2, matchStatus: 'matched', orderLine: 'PG001B20260602003-5' },
  { id: 2, isbn: '9787565855375', title: '地质勘查工程与生态修复', author: '张昕等', receiveQty: 3, matchStatus: 'matched', orderLine: 'PG001B20260602003-6' },
  { id: 3, isbn: '9787559826398', title: 'Python从入门到实践', author: '埃里克·马瑟斯', receiveQty: 2, matchStatus: 'unmatched', orderLine: '' },
  { id: 4, isbn: '9787518359067', title: '石油勘探技术', author: '李明', receiveQty: 2, matchStatus: 'matched', orderLine: 'PG001B20260602003-8' }
];

export const deliveryPreviewColumns = [
  { key: 'id', label: '序号' },
  { key: 'isbn', label: 'ISBN' },
  { key: 'title', label: '正题名' },
  { key: 'author', label: '作者' },
  { key: 'receiveQty', label: '待收套数' },
  { key: 'matchStatus', label: '匹配状态' },
  { key: 'orderLine', label: '匹配订单行号' }
];
