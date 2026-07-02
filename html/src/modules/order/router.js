/** 非连续出版物订单模块路由 */
export const orderRoutes = [
  {
    path: 'orders',
    name: 'orders',
    component: () => import('@/modules/order/views/OrderManageView.vue'),
    meta: { title: '订单管理', module: 'order' }
  },
  {
    path: 'orders/lines',
    redirect: { path: '/orders', query: { tab: 'order-line' } }
  },
  {
    path: 'orders/line/:lineNo?',
    name: 'order-line-detail',
    component: () => import('@/modules/order/views/OrderLineDetailView.vue'),
    meta: { title: '订单行详情', module: 'order' }
  },
  {
    path: 'bib-query',
    name: 'bib-query',
    component: () => import('@/modules/order/views/BibQueryView.vue'),
    meta: { title: '书目查询', module: 'order' }
  },
  {
    path: 'bib-query/new-bib',
    name: 'new-bib',
    component: () => import('@/modules/order/views/NewBibView.vue'),
    meta: { title: '新建书目', module: 'order' }
  },
  {
    path: 'bib-query/z3950',
    name: 'z3950',
    component: () => import('@/modules/order/views/Z3950QueryView.vue'),
    meta: { title: '查Z3950', module: 'order' }
  }
];
