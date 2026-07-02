/** 货币管理模块路由 */
export const currencyRoutes = [
  {
    path: 'currency',
    name: 'currency',
    component: () => import('@/modules/currency/views/CurrencyInfoView.vue'),
    meta: { title: '货币信息', module: 'currency' }
  }
];
