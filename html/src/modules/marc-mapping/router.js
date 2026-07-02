/** 订单与MARC类型映射关系模块路由 */
export const marcMappingRoutes = [
  {
    path: 'marc-mapping',
    name: 'marc-mapping',
    component: () => import('@/modules/marc-mapping/views/MarcMappingView.vue'),
    meta: { title: '订单与MARC类型映射关系', module: 'marc-mapping' }
  }
];
