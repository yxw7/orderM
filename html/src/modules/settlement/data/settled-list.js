export const SETTLEMENT_LIST_COLUMNS = [
  { key: 'no', label: '序号' },
  { key: 'orderLineNo', label: '订单行号' },
  { key: 'title', label: '正题名', minWidth: 'min-w-[160px]' },
  { key: 'resourceId', label: '资源标识' },
  { key: 'author', label: '作者' },
  { key: 'publisher', label: '出版社', minWidth: 'min-w-[120px]' },
  { key: 'price', label: '定价' },
  { key: 'currency', label: '币种' },
  { key: 'actualPrice', label: '实洋' },
  { key: 'volumesInSet', label: '套内册数' },
  { key: 'settledSets', label: '结算套数' },
  { key: 'settledVolumes', label: '结算册数' },
  { key: 'settlementAmount', label: '结算金额' }
];

export const settlementListMap = {
  jsPG09120260602001: [
    {
      no: 1, orderLineNo: 'PG00120260602001-1', title: '中国图书馆分类法', resourceId: '9787501341234',
      author: '国家图书馆编', publisher: '国家图书馆出版社', price: '98.00', currency: 'CNY', actualPrice: '78.40',
      volumesInSet: 1, settledSets: 5, settledVolumes: 5, settlementAmount: '392.00'
    },
    {
      no: 2, orderLineNo: 'PG00120260602001-2', title: '信息组织原理', resourceId: '9787302567890',
      author: '周宁编著', publisher: '清华大学出版社', price: '68.00', currency: 'CNY', actualPrice: '54.40',
      volumesInSet: 1, settledSets: 3, settledVolumes: 3, settlementAmount: '163.20'
    }
  ],
  jsPG09120260602002: [
    {
      no: 1, orderLineNo: 'PG00120260602002-1', title: '图书馆学概论', resourceId: '9787115123456',
      author: '吴慰慈', publisher: '国家图书馆出版社', price: '56.00', currency: 'CNY', actualPrice: '44.80',
      volumesInSet: 1, settledSets: 3, settledVolumes: 3, settlementAmount: '134.40'
    }
  ],
  jsPG09120260602003: [
    {
      no: 1, orderLineNo: 'PG00120260602003-1', title: '贝多芬第九交响曲', resourceId: '9787801234567',
      author: '贝多芬', publisher: '人民音乐出版社', price: '80.00', currency: 'CNY', actualPrice: '64.00',
      volumesInSet: 1, settledSets: 4, settledVolumes: 4, settlementAmount: '256.00'
    }
  ]
};

export function getSettlementListRows(settleId) {
  return settlementListMap[settleId] || [
    {
      no: 1, orderLineNo: `${settleId}-1`, title: '示例书目', resourceId: '9780000000000',
      author: '示例作者', publisher: '示例出版社', price: '50.00', currency: 'CNY', actualPrice: '40.00',
      volumesInSet: 1, settledSets: 1, settledVolumes: 1, settlementAmount: '40.00'
    }
  ];
}

export function filterSettlementListRows(rows, search = {}) {
  return rows.filter(row => {
    if (search.orderLineNo && !row.orderLineNo.includes(search.orderLineNo.trim())) return false;
    if (search.resourceId && !row.resourceId.includes(search.resourceId.trim())) return false;
    if (search.title && !row.title.includes(search.title.trim())) return false;
    return true;
  });
}
