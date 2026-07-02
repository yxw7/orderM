function formatDateTime(date) {
  const pad = value => String(value).padStart(2, '0');
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())} `
    + `${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;
}

export function issueOrder(orderId, issueRemark, orders, lines, issuer = '系统') {
  const order = orders.find(row => row.orderId === orderId);
  if (!order) return { ok: false, message: '订单不存在' };
  if (order.orderStatus !== 'pending') return { ok: false, message: '仅待发订状态的订单可发订' };

  const now = formatDateTime(new Date());
  order.orderStatus = 'ordered';
  order.issueRemark = (issueRemark || '').trim();
  order.issueTime = now;
  order.issuer = issuer;

  lines
    .filter(line => line.orderId === orderId && line.lineStatus === '待发订')
    .forEach(line => {
      line.lineStatus = '已发订';
      line.issueTime = now;
    });

  return { ok: true };
}
