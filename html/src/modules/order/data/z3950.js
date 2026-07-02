export const z3950SampleRows = [
  { isbn: '978-7-5505-0344-1', linkUrl: '上海图书馆', title: '小王子', author: '蓝山主编', publisher: '大连出版社', pubYear: '2012', marcType: 'CNMARC | 中文图书', recordNo: 'Z3950-SHLIB-2012001' },
  { isbn: '978-7-5325-5199-2', linkUrl: '首都图书馆', title: '小王子的星际旅行', author: '蓝山主编', publisher: '江苏凤凰文艺出版社', pubYear: '2016', marcType: 'CNMARC | 中文图书', recordNo: 'Z3950-CLIB-2016002' },
  { isbn: '978-7-5505-0345-8', linkUrl: '北京大学', title: '小王子', author: '蓝山主编', publisher: '大连出版社', pubYear: '2013', marcType: 'CNMARC | 中文图书', recordNo: 'Z3950-PKU-2013003' },
  { isbn: '978-7-5325-5191-4', linkUrl: '华盛顿大学', title: '小王子的星际旅行', author: '蓝山主编', publisher: '江苏凤凰文艺出版社', pubYear: '2017', marcType: 'CNMARC | 中文图书', recordNo: 'Z3950-UW-2017004' },
  { isbn: '978-7-5302-2109-9', linkUrl: '北京大学', title: '查Z3950示例书目', author: '示例作者', publisher: '示例出版社', pubYear: '2020', marcType: 'CNMARC | 中文图书', recordNo: 'Z3950-PKU-2020010' }
];

export const z3950Rows = Array.from({ length: 85 }, (_, i) => ({
  ...z3950SampleRows[i % z3950SampleRows.length],
  id: i + 1
}));

export const z3950Columns = [
  { key: 'id', label: '序号' },
  { key: 'linkUrl', label: '链接网址' },
  { key: 'isbn', label: 'ISBN/ISSN' },
  { key: 'title', label: '题名', minWidth: 'min-w-[120px]' },
  { key: 'author', label: '责任者' },
  { key: 'publisher', label: '出版社', minWidth: 'min-w-[120px]' },
  { key: 'pubYear', label: '出版时间' },
  { key: 'actions', label: '操作', sticky: true }
];

export const z3950FieldTypes = [
  { value: 'isbn', label: 'ISBN/ISSN' },
  { value: 'title', label: '题名' },
  { value: 'author', label: '责任者' },
  { value: 'publisher', label: '出版社' }
];
