export const CURRENCY_RATES = {
  CNY: 1,
  EUR: 8.3115,
  JPY: 0.0486,
  GBP: 9.0120,
  HKD: 0.9223,
  TWD: 0.2223,
  USD: 7.1,
  AUD: 4.6520
};

export const RECEIVE_CARRIER_OPTIONS = ['', 'CD', 'LP', 'DVD', '蓝光', '磁带'];

export const paperBookOrderRows = [
  { no: 1, location: '首都华威桥馆', orderLine: 'st00120250921005-3', title: '地质勘查工程与生态修复', isbn: '9787565855375', author: '张昕, 冯红彬, 张海燕主编', publisher: '地质出版社', edition: '影印本', price: '58.00', currency: 'CNY', copies: 3, counts: '2/0/0/0/0', orderedSets: 2, receivedSets: 0, pendingSets: 2, actualPrice: '58.00', barcodeStart: '001T269300008', remark: true, remarkText: '发订备注示例', orderer: 'lijia', orderTime: '2025-09-21 08:50', method: '现采', supplier: '湖北三新' },
  { no: 2, location: '首都大兴机场分馆', orderLine: 'st00120250923003-4', title: 'Python从入门到实践', isbn: '9787559826398', author: '[美] 埃里克·马瑟斯', publisher: '人民邮电出版社', edition: '第2版', price: '89.0', currency: 'CNY', copies: 1, counts: '2/0/0/0/0', orderedSets: 2, receivedSets: 0, pendingSets: 2, actualPrice: '89.0', barcodeStart: '001T269300010', remark: false, orderer: 'lijia', orderTime: '2025-09-23 10:15', method: '现采', supplier: '湖北三新' },
  { no: 3, location: '北京城市图书馆', orderLine: 'st00120250815002-4', title: '拆掉思维里的墙', isbn: '9787559826398', author: '古典', publisher: '北京联合出版公司', edition: '精装', price: '45.0', currency: 'CNY', copies: 1, counts: '1/0/0/0/0', orderedSets: 1, receivedSets: 0, pendingSets: 1, actualPrice: '45.0', barcodeStart: '001T269300020', remark: false, orderer: 'wangxx', orderTime: '2025-08-15 14:20', method: '现采', supplier: '北京市图书进出口有限公司' },
  { no: 4, location: '北京城市图书馆', orderLine: 'st00120251104001-2', title: '蛇结', isbn: '9787559826398', author: '[法] 弗朗索瓦·莫里亚克', publisher: '江苏凤凰文艺出版社', edition: '平装', price: '42.0', currency: 'CNY', copies: 1, counts: '1/0/0/0/0', orderedSets: 1, receivedSets: 0, pendingSets: 1, actualPrice: '42.0', barcodeStart: '001T269300030', remark: true, remarkText: '注意版本', orderer: 'zhaofu', orderTime: '2025-11-04 09:30', method: '现采', supplier: '湖北三新' },
  { no: 5, location: '首都华威桥馆', orderLine: 'st00120250904003-4', title: '飘', isbn: '9787559826398', author: '[美] 玛格丽特·米切尔', publisher: '译林出版社', edition: '典藏版', price: '68.0', currency: 'CNY', copies: 1, counts: '2/0/0/0/0', orderedSets: 2, receivedSets: 0, pendingSets: 2, actualPrice: '68.0', barcodeStart: '001T269300040', remark: false, orderer: 'lijia', orderTime: '2025-09-04 16:45', subscriber: '外馆订户', method: '现采', supplier: '湖北三新' }
];

export const foreignPaperBookOrderRows = [
  { no: 1, location: '首都华威桥馆', orderLine: 'st00120250615001-1', title: '阿勒泰的角落', isbn: '978-7-83000-213-8', author: '李娟', publisher: '中外出版社', edition: '精装', originalPrice: '100.00', currency: 'GBP', price: '901.20', copies: 3, counts: '3/1/0/0/0', orderedSets: 3, receivedSets: 1, pendingSets: 2, actualPrice: '225.30', barcodeStart: '001T000001001', remark: false, orderer: 'lijia', orderTime: '2025-06-15 10:00', method: '现采', supplier: '北京人天' },
  { no: 2, location: '北京城市图书馆', orderLine: 'st00120250615002-1', title: 'The Great Gatsby', isbn: '9780743273565', author: 'F. Scott Fitzgerald', publisher: 'Scribner', edition: 'Paperback', originalPrice: '18.00', currency: 'USD', price: '127.80', copies: 1, counts: '2/0/0/0/0', orderedSets: 2, receivedSets: 0, pendingSets: 2, actualPrice: '102.24', barcodeStart: '001T000001010', remark: false, orderer: 'wangxx', orderTime: '2025-06-14 14:30', method: '现采', supplier: '北京人天' },
  { no: 3, location: '首都大兴机场分馆', orderLine: 'st00120250615003-1', title: 'Cien años de soledad', isbn: '9788497592208', author: 'Gabriel García Márquez', publisher: 'Debolsillo', edition: 'Bolsillo', originalPrice: '12.50', currency: 'EUR', price: '103.89', copies: 1, counts: '1/0/0/0/0', orderedSets: 1, receivedSets: 0, pendingSets: 1, actualPrice: '83.11', barcodeStart: '001T000001020', remark: true, remarkText: '西语原版', orderer: 'zhaofu', orderTime: '2025-06-13 09:15', method: '现采', supplier: '北京人天' }
];

export const avOrderRows = [
  { no: 1, location: '首都华威桥馆', orderLine: 'st00120250921005-3', carrier: 'CD', isbn: '9787559826398', isrc: '', barcode: '', catalogNo: '', title: '人间草木人间草木', format: '1:1母盘直刻', author: '汪曾祺', price: '39.8', currency: 'CNY', actualPrice: '39.8', vinylColor: '', label: '', limitedNo: '', copies: 1, counts: '3/0/0/0/0', orderedSets: 3, receivedSets: 0, pendingSets: 3, receiveRemark: '', remark: true, remarkText: '视听备注', orderer: 'lijia', orderTime: '2025-09-21 08:50', method: '现采', supplier: '湖北三新' },
  { no: 2, location: '首都大兴机场分馆', orderLine: 'st00120250923003-4', carrier: 'LP', isbn: '9787559826398', isrc: '', barcode: '', catalogNo: '', title: '古典音乐精选', format: '黑胶唱片', author: '维也纳爱乐', price: '30.00', currency: 'CNY', actualPrice: '30.00', vinylColor: '', label: '', limitedNo: '', copies: 2, counts: '2/0/0/0/0', orderedSets: 2, receivedSets: 0, pendingSets: 2, receiveRemark: '', remark: false, orderer: 'lijia', orderTime: '2025-09-23 10:15', method: '现采', supplier: '湖北三新' },
  { no: 3, location: '北京城市图书馆', orderLine: 'st00120250815002-4', carrier: 'CD', isbn: '', isrc: '', barcode: '017685110221', catalogNo: 'CD-1102', title: '布鲁克纳：第二交响曲', format: '', author: '', price: '300.00', currency: 'CNY', actualPrice: '168.00', vinylColor: '', label: '', limitedNo: '', copies: 1, counts: '1/0/0/0/0', orderedSets: 1, receivedSets: 0, pendingSets: 1, receiveRemark: '发订成功', remark: false, orderer: 'wangxx', orderTime: '2025-08-15 14:20', method: '现采', supplier: '湖北三新' },
  { no: 4, location: '北京城市图书馆', orderLine: 'st00120251104001-2', carrier: 'DVD', isbn: '9787559826398', isrc: '', barcode: '', catalogNo: '', title: '国家地理纪录片', format: '高清版', author: '国家地理', price: '68.0', currency: 'CNY', actualPrice: '68.0', vinylColor: '', label: '', limitedNo: '', copies: 4, counts: '1/0/0/0/0', orderedSets: 1, receivedSets: 0, pendingSets: 1, receiveRemark: '', remark: true, remarkText: '纪录片', orderer: 'zhaofu', orderTime: '2025-11-04 09:30', method: '现采', supplier: '湖北三新' },
  { no: 5, location: '首都华威桥馆', orderLine: 'st00120250904003-4', carrier: 'CD', isbn: '9787559826398', isrc: '', barcode: '', catalogNo: '', title: '莫扎特钢琴协奏曲', format: '珍藏版', author: '莫扎特', price: '45.0', currency: 'CNY', actualPrice: '45.0', vinylColor: '', label: '', limitedNo: '', copies: 1, counts: '2/0/0/0/0', orderedSets: 2, receivedSets: 0, pendingSets: 2, receiveRemark: '', remark: false, orderer: 'lijia', orderTime: '2025-09-04 16:45', method: '现采', supplier: '湖北三新' }
];

export const foreignAvOrderRows = [
  { no: 1, location: '首都华威桥馆', orderLine: 'st00120250615001-1', carrier: 'CD', isbn: '978-7-83000-213-8', isrc: '', barcode: '', catalogNo: '', title: '阿勒泰的角落', format: '', author: '李娟', originalPrice: '39.00', currency: 'CNY', price: '39.00', actualPrice: '25.00', vinylColor: '', label: '', limitedNo: '', copies: 1, counts: '3/1/0/0/0', orderedSets: 3, receivedSets: 1, pendingSets: 2, receiveRemark: '', remark: false, orderer: 'lijia', orderTime: '2025-06-15 10:00', method: '现采', supplier: '北京人天' },
  { no: 2, location: '北京城市图书馆', orderLine: 'st00120250615002-1', carrier: 'LP', isbn: '9780199535879', isrc: '', barcode: '', catalogNo: '', title: 'The Beatles Collection', format: 'Remastered', author: 'The Beatles', originalPrice: '28.00', currency: 'USD', price: '198.80', actualPrice: '159.04', vinylColor: 'Black', label: 'Apple Records', limitedNo: '', copies: 2, counts: '2/0/0/0/0', orderedSets: 2, receivedSets: 0, pendingSets: 2, receiveRemark: '', remark: true, remarkText: 'LP套装', orderer: 'wangxx', orderTime: '2025-06-14 14:30', method: '现采', supplier: '北京人天' },
  { no: 3, location: '首都大兴机场分馆', orderLine: 'st00120250615003-1', carrier: 'DVD', isbn: '', isrc: 'DE-A12-99-00001-0', barcode: '', catalogNo: 'DVD-8801', title: 'Deutsche Oper Berlin', format: 'NTSC', author: '', originalPrice: '24.99', currency: 'EUR', price: '207.70', actualPrice: '166.16', vinylColor: '', label: '', limitedNo: '', copies: 1, counts: '1/0/0/0/0', orderedSets: 1, receivedSets: 0, pendingSets: 1, receiveRemark: '', remark: false, orderer: 'zhaofu', orderTime: '2025-06-13 09:15', method: '现采', supplier: '北京人天' }
];

export const PAPER_BOOK_COLUMNS = [
  { key: 'select', label: '', width: 'w-10' },
  { key: 'location', label: '馆址' },
  { key: 'orderLine', label: '订单行号' },
  { key: 'title', label: '正题名', minWidth: 'min-w-[140px]' },
  { key: 'isbn', label: 'ISBN' },
  { key: 'author', label: '作者' },
  { key: 'publisher', label: '出版社' },
  { key: 'edition', label: '版本' },
  { key: 'price', label: '定价' },
  { key: 'currency', label: '币种' },
  { key: 'copies', label: '套内册数' },
  { key: 'counts', label: '发/收/换/退/撤订' },
  { key: 'remark', label: '备注' },
  { key: 'orderer', label: '发订人' },
  { key: 'orderTime', label: '发订时间', minWidth: 'min-w-[140px]' }
];

export const AV_COLUMNS = [
  { key: 'select', label: '', width: 'w-10' },
  { key: 'location', label: '馆址' },
  { key: 'orderLine', label: '订单行号' },
  { key: 'carrier', label: '载体' },
  { key: 'isbn', label: 'ISBN' },
  { key: 'barcode', label: '商品条码' },
  { key: 'catalogNo', label: '目录号' },
  { key: 'title', label: '题名', minWidth: 'min-w-[120px]' },
  { key: 'format', label: '版本/格式' },
  { key: 'author', label: '著者' },
  { key: 'price', label: '码洋' },
  { key: 'currency', label: '币种' },
  { key: 'copies', label: '套内件数' },
  { key: 'counts', label: '发/收/换/退/撤订' },
  { key: 'remark', label: '备注' },
  { key: 'orderer', label: '发订人' },
  { key: 'orderTime', label: '发订时间', minWidth: 'min-w-[140px]' }
];

export function isChineseAcceptanceLang(lang) {
  return (lang || '中文').trim() === '中文';
}

export function getReceiveOrderRows(current) {
  if (!current?.type) return [];
  const isForeign = !isChineseAcceptanceLang(current.lang);
  if (current.type === '纸质书') return isForeign ? [...foreignPaperBookOrderRows] : [...paperBookOrderRows];
  if (current.type === '视听资料') return isForeign ? [...foreignAvOrderRows] : [...avOrderRows];
  return [];
}

export function parseReceiveCounts(counts) {
  const parts = String(counts || '0/0/0/0/0').split('/').map(n => Number(n.trim()) || 0);
  const ordered = parts[0] || 0;
  const received = parts[1] || 0;
  const exchange = parts[2] || 0;
  const returned = parts[3] || 0;
  return {
    ordered,
    received,
    exchange,
    returned,
    // 待收不含换货：换货后仍可继续收货
    pending: Math.max(ordered - received - returned, 0)
  };
}

/**
 * 收货弹窗顶部套数汇总：发订 / 已收 / 已换 / 已退 / 待收
 * 待收货套数 = 发订套数 − 已收货套数 − 已退货套数（不含已换货套数）
 */
export function resolveReceiveSetSummary(row) {
  const counts = parseReceiveCounts(row?.counts);
  const ordered = Number(row?.orderedSets ?? counts.ordered) || 0;
  const received = Number(row?.receivedSets ?? counts.received) || 0;
  const exchange = Number(row?.exchangedSets ?? counts.exchange) || 0;
  const returned = Number(row?.returnedSets ?? counts.returned) || 0;
  const pending = Math.max(ordered - received - returned, 0);
  return { ordered, received, exchange, returned, pending };
}

/**
 * 更新逐条收货待收货行上的收/换/退套数（与按种明细写回分离）
 * @param {object} row
 * @param {'receive'|'exchange'|'return'} flow
 * @param {number} sets
 */
export function applyReceiveFlowToPendingRow(row, flow, sets) {
  if (!row) return;
  const qty = Number(sets) || 0;
  if (qty <= 0) return;
  const s = resolveReceiveSetSummary(row);
  if (flow === 'receive') s.received += qty;
  else if (flow === 'exchange') s.exchange += qty;
  else if (flow === 'return') s.returned += qty;
  else return;
  s.pending = Math.max(s.ordered - s.received - s.returned, 0);
  const parts = String(row.counts || '0/0/0/0/0').split('/');
  const cancel = parts[4] != null ? (Number(parts[4].trim()) || 0) : 0;
  row.orderedSets = s.ordered;
  row.receivedSets = s.received;
  row.exchangedSets = s.exchange;
  row.returnedSets = s.returned;
  row.pendingSets = s.pending;
  row.counts = `${s.ordered}/${s.received}/${s.exchange}/${s.returned}/${cancel}`;
}

export function convertToRmbPrice(originalPrice, currency) {
  const amount = Number(originalPrice) || 0;
  const rate = CURRENCY_RATES[currency] || CURRENCY_RATES.CNY;
  return (amount * rate).toFixed(2);
}

export function filterReceiveRows(rows, search, resourceType) {
  const hasLocation = search.location && search.location !== '全部';
  if (!search.keyword?.trim() && !search.carrier && !hasLocation) return [...rows];
  const kw = (search.keyword || '').trim().toLowerCase();
  const field = search.searchField || 'isbn';
  return rows.filter(row => {
    if (hasLocation && row.location !== search.location) return false;
    if (resourceType === '视听资料' && search.carrier && row.carrier !== search.carrier) return false;
    if (!kw) return true;
    const val = String(row[field === 'orderLine' ? 'orderLine' : field === 'title' ? 'title' : field === 'resourceId' ? (row.isbn || row.isrc || '') : row.isbn] || '').toLowerCase();
    if (field === 'isbn') {
      return String(row.isbn || '').toLowerCase().includes(kw) || String(row.isrc || '').toLowerCase().includes(kw);
    }
    return val.includes(kw);
  });
}

export function calcBarcodePreview(barcodeStart, receiveSets, volumesPerSet) {
  const result = calcBarcodeAllocation(barcodeStart, receiveSets, volumesPerSet);
  return {
    allocated: result.allocatedRanges.join('\n') || '',
    unallocated: result.unallocatedText || '无'
  };
}

/**
 * 解析条码数字后缀
 * @param {string} code
 * @returns {{ prefix: string, num: number, padLength: number, raw: string }|null}
 */
function parseBarcodeNumber(code) {
  const match = String(code ?? '').trim().match(/^(.+?)(\d+)$/);
  if (!match) return null;
  return {
    prefix: match[1],
    num: Number(match[2]),
    padLength: match[2].length,
    raw: String(code).trim()
  };
}

/**
 * 格式化条码数字
 * @param {{ prefix: string, num: number, padLength: number }} item
 * @returns {string}
 */
function formatBarcodeNumber(item) {
  return `${item.prefix}${String(item.num).padStart(item.padLength, '0')}`;
}

/**
 * 将连续条码合并为区间展示
 * @param {string[]} barcodes
 * @returns {string[]}
 */
function groupConsecutiveBarcodes(barcodes) {
  if (!barcodes.length) return [];
  const parsed = barcodes.map(parseBarcodeNumber);
  if (parsed.some(item => !item)) return [...barcodes];

  /** @type {string[]} */
  const ranges = [];
  /** @type {typeof parsed[0]} */
  let rangeStart = parsed[0];
  /** @type {typeof parsed[0]} */
  let rangeEnd = parsed[0];

  for (let i = 1; i < parsed.length; i += 1) {
    const cur = parsed[i];
    if (
      cur.prefix === rangeEnd.prefix
      && cur.padLength === rangeEnd.padLength
      && cur.num === rangeEnd.num + 1
    ) {
      rangeEnd = cur;
    } else {
      ranges.push(
        rangeStart.num === rangeEnd.num
          ? rangeStart.raw
          : `${formatBarcodeNumber(rangeStart)} - ${formatBarcodeNumber(rangeEnd)}`
      );
      rangeStart = cur;
      rangeEnd = cur;
    }
  }

  ranges.push(
    rangeStart.num === rangeEnd.num
      ? rangeStart.raw
      : `${formatBarcodeNumber(rangeStart)} - ${formatBarcodeNumber(rangeEnd)}`
  );
  return ranges;
}

/**
 * 计算收货条码分配结果
 * @param {string} barcodeStart 条码初始号
 * @param {number} receiveSets 收货套数
 * @param {number} volumesPerSet 套内册数
 * @param {{ simulateGaps?: boolean }} [options]
 * @returns {{
 *   displayType: 'single'|'continuous'|'discontinuous',
 *   allocatedRanges: string[],
 *   unallocated: string[],
 *   unallocatedText: string,
 *   hasEmpty: boolean
 * }}
 */
export function calcBarcodeAllocation(barcodeStart, receiveSets, volumesPerSet, options = {}) {
  const emptyResult = {
    displayType: 'single',
    allocatedRanges: [],
    unallocated: [],
    unallocatedText: '',
    hasEmpty: false
  };

  const total = Number(receiveSets) * Number(volumesPerSet);
  if (!barcodeStart || total <= 0) return emptyResult;

  const startParsed = parseBarcodeNumber(barcodeStart);
  if (!startParsed) {
    return {
      displayType: 'single',
      allocatedRanges: [String(barcodeStart).trim()],
      unallocated: [],
      unallocatedText: '',
      hasEmpty: false
    };
  }

  /** @type {boolean[]} */
  const allocatedFlags = Array.from({ length: total }, () => true);
  const simulateGaps = options.simulateGaps ?? total >= 18;
  if (simulateGaps && total >= 18) {
    allocatedFlags[15] = false;
    allocatedFlags[17] = false;
  }

  /** @type {string[]} */
  const allBarcodes = allocatedFlags.map((_, index) =>
    formatBarcodeNumber({
      prefix: startParsed.prefix,
      num: startParsed.num + index,
      padLength: startParsed.padLength
    })
  );

  const allocated = allBarcodes.filter((_, index) => allocatedFlags[index]);
  const unallocated = allBarcodes.filter((_, index) => !allocatedFlags[index]);
  const allocatedRanges = groupConsecutiveBarcodes(allocated);
  const hasEmpty = unallocated.length > 0;

  let displayType = /** @type {'single'|'continuous'|'discontinuous'} */ ('single');
  if (allocated.length > 1) {
    displayType = !hasEmpty && allocatedRanges.length === 1 ? 'continuous' : 'discontinuous';
  }

  return {
    displayType,
    allocatedRanges,
    unallocated,
    unallocatedText: unallocated.join('、'),
    hasEmpty
  };
}

/**
 * 当前验收批次是否需要分配条码号
 * @param {{ id?: string, autoBarcode?: boolean, barcode?: string }|null|undefined} acceptance
 * @returns {boolean}
 */
export function needsBarcodeAllocation(acceptance) {
  if (!acceptance) return false;
  if (acceptance.autoBarcode != null) return !!acceptance.autoBarcode;
  if (acceptance.barcode === '是') return true;
  return false;
}

export const EXCHANGE_REASON_OPTIONS = ['换货', '残缺损'];
export const RETURN_REASON_OPTIONS = ['退货', '损坏退货'];
