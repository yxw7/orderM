/** 采访结算模块路由 */
export const settlementRoutes = [
  {
    path: 'pending-settlement',
    name: 'pending-settlement',
    component: () => import('@/modules/settlement/views/PendingSettlementView.vue'),
    meta: { title: '待结算', module: 'settlement' }
  },
  {
    path: 'settled',
    name: 'settled',
    component: () => import('@/modules/settlement/views/SettledView.vue'),
    meta: { title: '已结算', module: 'settlement' }
  },
  {
    path: 'settled/detail/:settleId',
    name: 'settlement-detail',
    component: () => import('@/modules/settlement/views/SettlementDetailView.vue'),
    meta: { title: '结算详情', module: 'settlement' }
  },
  {
    path: 'settled/list/:settleId',
    name: 'settlement-list',
    component: () => import('@/modules/settlement/views/SettlementListView.vue'),
    meta: { title: '结算清单', module: 'settlement' }
  },
  {
    path: 'settlement-fail',
    name: 'settlement-fail',
    component: () => import('@/modules/settlement/views/FailSettlementView.vue'),
    meta: { title: '结算失败处理', module: 'settlement' }
  }
];
