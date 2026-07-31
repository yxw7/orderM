import { SHORTAGE_STATUS_TEXT_TO_KEY } from '@/modules/acceptance/data/shortage-manage';
import { resolveDetailSets } from '@/modules/acceptance/data/shortage-actions';

export const SHORTAGE_DETAIL_RESOURCE_ID_OPTIONS = [
  { value: '', label: '' },
  { value: 'isbn', label: 'ISBN' },
  { value: 'issn', label: 'ISSN' },
  { value: 'other', label: '其他' }
];

export const shortageDetailSearchFields = [
  { key: 'orderLineNo', label: '订单行号' },
  {
    key: 'resourceId',
    label: '资源标识',
    type: 'selectText',
    selectKey: 'resourceIdType',
    options: SHORTAGE_DETAIL_RESOURCE_ID_OPTIONS
  },
  {
    key: 'status',
    label: '催缺状态',
    type: 'select',
    options: ['全部', '待处理', '处理中', '已完成']
  }
];

export const SHORTAGE_DETAIL_COLUMNS = [
  { key: 'id', label: '序号' },
  { key: 'orderLineNo', label: '订单行号', minWidth: 'min-w-[160px]' },
  { key: 'title', label: '正题名', minWidth: 'min-w-[100px]' },
  { key: 'resourceId', label: '资源标识', minWidth: 'min-w-[120px]' },
  { key: 'author', label: '作者', minWidth: 'min-w-[120px]' },
  { key: 'publisher', label: '出版社', minWidth: 'min-w-[100px]' },
  { key: 'price', label: '定价' },
  { key: 'currency', label: '币种' },
  { key: 'copiesInSet', label: '套内册数' },
  { key: 'shortageVolumes', label: '催缺册数' },
  { key: 'arrivedVolumes', label: '到货册数' },
  { key: 'status', label: '催缺状态' },
  { key: 'remark', label: '备注' },
  { key: 'actions', label: '操作', sticky: true }
];

/** 静态催缺单号 → 详情行（与列表 mock / 真实订单行对齐） */
const SHORTAGE_DETAIL_ROWS_BY_ID = {
  cqPG00120200301001: [
    {
      orderLineNo: 'PG001B20260528008-8',
      title: '地质勘查工程与生态修复',
      resourceId: '9787565855375',
      author: '张昕, 冯红彩, 张海燕主编',
      publisher: '汕头大学出版社',
      price: '58.00',
      currency: 'CNY',
      copiesInSet: 1,
      shortageSets: 1,
      arrivedSets: 0,
      shortageVolumes: 1,
      arrivedVolumes: 0,
      status: 'pending',
      remark: false,
      remarkText: '',
      actions: true
    },
    {
      orderLineNo: 'PG001B20260528008-9',
      title: '图书馆学基础',
      resourceId: '9787501345678',
      author: '吴慰慈著',
      publisher: '国家图书馆出版社',
      price: '68.00',
      currency: 'CNY',
      copiesInSet: 1,
      shortageSets: 2,
      arrivedSets: 0,
      shortageVolumes: 2,
      arrivedVolumes: 0,
      status: 'pending',
      remark: false,
      remarkText: '',
      actions: true
    }
  ],
  cqPG00120200301002: [
    {
      orderLineNo: 'PG001B20260528008-8',
      title: '地质勘查工程与生态修复',
      resourceId: '9787565855375',
      author: '张昕, 冯红彩, 张海燕主编',
      publisher: '汕头大学出版社',
      price: '58.00',
      currency: 'CNY',
      copiesInSet: 1,
      shortageSets: 1,
      arrivedSets: 1,
      shortageVolumes: 1,
      arrivedVolumes: 1,
      status: 'done',
      remark: true,
      remarkText: '已到货 1 套',
      actions: false
    }
  ],
  cqPG00120200301004: [
    {
      orderLineNo: 'PG001B202406030001-4',
      title: '数字图书馆理论与实践',
      resourceId: '9787040478912',
      author: '马费成著',
      publisher: '高等教育出版社',
      price: '55.00',
      currency: 'CNY',
      copiesInSet: 1,
      shortageSets: 1,
      arrivedSets: 0,
      shortageVolumes: 1,
      arrivedVolumes: 0,
      status: 'pending',
      remark: false,
      remarkText: '',
      actions: true
    }
  ],
  cqPG00120200301006: [
    {
      orderLineNo: 'PG001B20260528008-9',
      title: '图书馆学基础',
      resourceId: '9787501345678',
      author: '吴慰慈著',
      publisher: '国家图书馆出版社',
      price: '68.00',
      currency: 'CNY',
      copiesInSet: 1,
      shortageSets: 1,
      arrivedSets: 0,
      shortageVolumes: 1,
      arrivedVolumes: 0,
      status: 'pending',
      remark: false,
      remarkText: '',
      actions: true
    }
  ]
};

/**
 * 将订单行转为催缺详情行
 * @param {Object} line
 * @param {string} [status]
 * @param {{ shortageSets?: number, arrivedSets?: number }} [setsOverride]
 * @returns {Object}
 */
function mapOrderLineToDetailRow(line, status = 'pending', setsOverride = {}) {
  const copiesInSet = Number(line.copiesInSet) || 1;
  const shortageSets = setsOverride.shortageSets != null
    ? Number(setsOverride.shortageSets)
    : (line.shortageSets != null ? Number(line.shortageSets) : (Number(line.sets) || 1));
  const arrivedSets = setsOverride.arrivedSets != null
    ? Number(setsOverride.arrivedSets)
    : (line.arrivedSets != null ? Number(line.arrivedSets) : 0);
  return {
    orderLineNo: line.orderLineNo || line.orderLine || '',
    title: line.title || '—',
    resourceId: line.resourceId || line.isbn || line.standardNo || '',
    author: line.author || '—',
    publisher: line.publisher || '—',
    price: line.price != null ? String(line.price).replace(/^¥/, '') : '—',
    currency: line.currency || 'CNY',
    copiesInSet,
    shortageSets,
    arrivedSets,
    shortageVolumes: shortageSets * copiesInSet,
    arrivedVolumes: arrivedSets * copiesInSet,
    status,
    remark: false,
    remarkText: '',
    actions: status === 'pending'
  };
}

/**
 * 获取催缺单详情行
 * @param {string} shortageId
 * @param {Object} [listRow] - 催缺列表行（可含 lineRows / lineRefs / detailLines）
 * @returns {Object[]}
 */
export function getShortageDetailRows(shortageId, listRow = null) {
  if (listRow?.detailLines?.length) {
    return listRow.detailLines.map(row => ({ ...row }));
  }
  if (listRow?.lineRefs?.length) {
    return listRow.lineRefs.map(ref => {
      const fromLine = listRow.lineRows?.find(l => l.orderLineNo === ref.orderLineNo);
      if (fromLine) {
        return mapOrderLineToDetailRow(fromLine, listRow.status || 'pending', ref);
      }
      const preset = (SHORTAGE_DETAIL_ROWS_BY_ID[shortageId] || [])
        .find(r => r.orderLineNo === ref.orderLineNo);
      if (preset) return { ...preset };
      return {
        orderLineNo: ref.orderLineNo,
        title: '—',
        resourceId: '',
        author: '—',
        publisher: '—',
        price: '—',
        currency: 'CNY',
        copiesInSet: 1,
        shortageSets: Number(ref.shortageSets) || 0,
        arrivedSets: Number(ref.arrivedSets) || 0,
        shortageVolumes: Number(ref.shortageSets) || 0,
        arrivedVolumes: Number(ref.arrivedSets) || 0,
        status: listRow.status || 'pending',
        remark: false,
        remarkText: '',
        actions: listRow.status === 'pending'
      };
    });
  }
  if (listRow?.lineRows?.length) {
    return listRow.lineRows.map(line => mapOrderLineToDetailRow(line, listRow.status || 'pending'));
  }
  const preset = SHORTAGE_DETAIL_ROWS_BY_ID[shortageId];
  if (preset?.length) return preset.map(row => ({ ...row }));
  if (!listRow) return [];
  return [
    {
      orderLineNo: `${listRow.orderId}-1`,
      title: '示例书目',
      resourceId: '9787000000000',
      author: '—',
      publisher: '—',
      price: '0.00',
      currency: 'CNY',
      copiesInSet: 1,
      shortageSets: Number(listRow.sets) || 1,
      arrivedSets: Number(listRow.arrived) || 0,
      shortageVolumes: Number(listRow.sets) || 1,
      arrivedVolumes: Number(listRow.arrived) || 0,
      status: listRow.status || 'pending',
      remark: !!listRow.remark,
      remarkText: listRow.remarkText || '',
      actions: listRow.status === 'pending'
    }
  ];
}

/**
 * @param {Object[]} rows
 * @param {Object} search
 * @returns {Object[]}
 */
export function filterShortageDetailRows(rows, search = {}) {
  return rows.filter(row => {
    if (search.orderLineNo && !String(row.orderLineNo).includes(String(search.orderLineNo).trim())) {
      return false;
    }
    if (search.resourceId && !String(row.resourceId).includes(String(search.resourceId).trim())) {
      return false;
    }
    if (search.status && search.status !== '全部') {
      const key = SHORTAGE_STATUS_TEXT_TO_KEY[search.status];
      if (key && row.status !== key) return false;
    }
    return true;
  });
}

/**
 * @param {Object} row
 * @returns {boolean}
 */
export function canCancelShortageLine(row) {
  if (!row?.actions || row.status !== 'pending') return false;
  const { shortageSets, arrivedSets } = resolveDetailSets(row);
  return calcCancelSetsSafe(shortageSets, arrivedSets) > 0;
}

function calcCancelSetsSafe(shortageSets, arrivedSets) {
  return Math.max((Number(shortageSets) || 0) - (Number(arrivedSets) || 0), 0);
}
