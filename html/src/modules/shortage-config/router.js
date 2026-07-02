/** 催缺配置模块路由 */
export const shortageConfigRoutes = [
  {
    path: 'shortage-config',
    name: 'shortage-config',
    component: () => import('@/modules/shortage-config/views/ShortageConfigView.vue'),
    meta: { title: '催缺配置', module: 'shortage-config' }
  }
];
