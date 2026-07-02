/** 馆址管理模块路由 */
export const locationRoutes = [
  {
    path: 'locations',
    name: 'locations',
    component: () => import('@/modules/location/views/LocationManageView.vue'),
    meta: { title: '馆址管理', module: 'location' }
  }
];
