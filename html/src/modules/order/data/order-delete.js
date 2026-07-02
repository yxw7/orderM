import { renumberOrderRows } from '@/modules/order/data/order-create';

export function deletePendingOrder(orderId, orders, lines) {
  const order = orders.find(row => row.orderId === orderId);
  if (!order) return { ok: false, message: '订单不存在' };
  if (!['pending', 'cancelled'].includes(order.orderStatus)) {
    return { ok: false, message: '当前状态的订单不可删除' };
  }

  const nextOrders = orders.filter(row => row.orderId !== orderId);
  renumberOrderRows(nextOrders);

  return {
    ok: true,
    orders: nextOrders,
    lines: lines.filter(row => row.orderId !== orderId)
  };
}
