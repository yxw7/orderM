import { canGenerateShortage } from '@/modules/order/constants';
import { parseFlowStats } from '@/modules/order/data/order-line-detail';

/**
 * 催缺套数 = max(0, 发订 − 收货 − 退货)
 * @param {Object} line - 订单行
 * @returns {number}
 */
export function getOrderLineShortageSets(line) {
  if (!line) return 0;
  const flow = parseFlowStats(line.flowStats);
  const issued = flow.issued || Number(line.sets) || 0;
  return Math.max(issued - flow.received - flow.returned, 0);
}

/**
 * 已发订或处理中的订单行可尝试生成催缺单
 * @param {Object} row - 订单行
 * @returns {boolean}
 */
export function canOrderLineGenerateShortage(row) {
  if (!row) return false;
  const issued = row.lineStatus === '已发订' || row.lineStatus === '处理中';
  return issued && canGenerateShortage(row.acceptanceStatus);
}

/**
 * 生成催缺单号
 * @param {string} orderId - 订单号
 * @param {number} index - 分组序号
 * @returns {string}
 */
export function buildShortageId(orderId, index) {
  const suffix = String(Date.now() + index).slice(-5);
  const normalizedOrderId = orderId.replace(/^PG001B/, 'PG001');
  return `cq${normalizedOrderId}${suffix}`;
}

/**
 * 按订单号分组生成催缺单；过滤不可催缺验收状态，以及催缺套数为 0 的行
 * @param {Object[]} rows - 勾选的订单行
 * @returns {Object[]}
 */
export function generateShortageOrdersByOrderId(rows) {
  const eligibleRows = rows.filter(
    row => canGenerateShortage(row.acceptanceStatus) && getOrderLineShortageSets(row) > 0
  );
  const groups = {};

  eligibleRows.forEach(row => {
    if (!groups[row.orderId]) groups[row.orderId] = [];
    groups[row.orderId].push(row);
  });

  return Object.entries(groups).map(([orderId, lineRows], index) => ({
    shortageId: buildShortageId(orderId, index),
    orderId,
    lineRows,
    lineCount: lineRows.length
  }));
}

function formatShortageTime(date = new Date()) {
  const pad = n => String(n).padStart(2, '0');
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())} ${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;
}

/**
 * 将分组结果转为催缺管理列表行
 * @param {Object[]} groups - generateShortageOrdersByOrderId 结果
 * @param {Object[]} orders - 订单列表
 * @param {number} startId - 起始 id
 * @returns {Object[]}
 */
export function buildShortageListRows(groups, orders, startId = 1) {
  const now = formatShortageTime();
  return groups.map((group, index) => {
    const firstLine = group.lineRows[0] || {};
    const order = orders.find(item => item.orderId === group.orderId);
    const lineRows = group.lineRows.map(row => {
      const shortageSets = getOrderLineShortageSets(row);
      return {
        ...row,
        shortageSets,
        arrivedSets: 0
      };
    });
    const sets = lineRows.reduce((sum, row) => sum + (Number(row.shortageSets) || 0), 0);
    const lineRefs = lineRows.map(row => ({
      orderLineNo: row.orderLineNo,
      shortageSets: row.shortageSets,
      arrivedSets: 0
    }));
    return {
      id: startId + index,
      shortageId: group.shortageId,
      orderId: group.orderId,
      type: firstLine.resourceType || order?.resourceType || '纸质书',
      supplier: order?.supplier || '—',
      location: firstLine.site || order?.site || '—',
      budget: order?.budget || '—',
      person: '系统',
      time: now,
      status: 'pending',
      sets,
      arrived: 0,
      remark: false,
      remarkText: '',
      actions: true,
      lineRows,
      lineRefs
    };
  });
}
