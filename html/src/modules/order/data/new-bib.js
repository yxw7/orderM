export const bibDbOptions = [
  { value: 'stl01', label: '文献库' },
  { value: 'stl02', label: '视听资料库' },
  { value: 'stl03', label: '电子资源库' }
];

export const marcTypeOptions = [
  { value: 'CNMARC|中文图书', label: 'CNMARC | 中文图书' },
  { value: 'CNMARC|中文录音资料', label: 'CNMARC | 中文录音资料' },
  { value: 'CNMARC|中文影像资料', label: 'CNMARC | 中文影像资料' },
  { value: 'MARC21|外文图书', label: 'MARC21 | 外文图书' }
];

export const newBibRecentItems = [
  { id: 'stl01-NEW7', title: '', isNew: true },
  { id: 'stl01-NEW6', title: '', isNew: true },
  { id: 'stl01-NEW5', title: '', isNew: true },
  { id: 'stl01-bjlib9001202606135036', title: '流固耦合声学', isNew: false },
  { id: 'stl01-bjlib9001202605833181', title: '小王子', isNew: false },
  { id: 'stl01-bjlib9001202605833182', title: '小王子的星际旅行', isNew: false }
];

export const defaultMarcFields = [
  { label: '头标区', tag: 'LDR', ind1: '', ind2: '', content: '-----nam0-22-----450-' },
  { label: '国际标准书号', tag: '010', ind1: '', ind2: '', content: '▼a ▼d' },
  { label: '通用处理数据', tag: '100', ind1: '', ind2: '', content: '▼a --------d--------em-y0chiy50-------ea' },
  { label: '文献语种', tag: '101', ind1: '0', ind2: '', content: '▼a chi' },
  { label: '编码数据字段', tag: '105', ind1: '', ind2: '', content: '▼a y ▼d zzzzzzzzy' },
  { label: '题名与责任说明', tag: '200', ind1: '1', ind2: '', content: '▼a ▼b 专著 ▼f' },
  { label: '版本说明', tag: '205', ind1: '', ind2: '', content: '▼a' },
  { label: '出版发行等', tag: '210', ind1: '', ind2: '', content: '▼a ▼c ▼d' },
  { label: '载体形态项', tag: '215', ind1: '', ind2: '', content: '▼a 页 ▼c 图 ▼d cm' },
  { label: '提要或文摘附注', tag: '330', ind1: '', ind2: '', content: '▼a' },
  { label: '论题名称主题', tag: '606', ind1: '0', ind2: '', content: '▼a' },
  { label: '中国图书馆分类法', tag: '690', ind1: '', ind2: '', content: '▼a ▼v 5' }
];

export function cloneMarcFields() {
  return defaultMarcFields.map(f => ({ ...f }));
}
