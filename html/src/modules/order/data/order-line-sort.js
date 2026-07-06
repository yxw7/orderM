/**
 * 按发订时间倒序排序订单行；无发订时间的排在最上方；发订时间相同则按订单行号升序。
 * @param {Array<{ issueTime?: string, orderLineNo?: string }>} lines
 * @returns {Array<{ issueTime?: string, orderLineNo?: string }>}
 */
export function sortOrderLinesByIssueTimeDesc(lines) {
  return [...lines].sort((a, b) => {
    const timeA = String(a.issueTime ?? '').trim();
    const timeB = String(b.issueTime ?? '').trim();
    const lineNoA = String(a.orderLineNo ?? '');
    const lineNoB = String(b.orderLineNo ?? '');

    if (!timeA && !timeB) return lineNoA.localeCompare(lineNoB, 'zh-CN');
    if (!timeA) return -1;
    if (!timeB) return 1;

    const timeCompare = timeB.localeCompare(timeA);
    if (timeCompare !== 0) return timeCompare;
    return lineNoA.localeCompare(lineNoB, 'zh-CN');
  });
}
