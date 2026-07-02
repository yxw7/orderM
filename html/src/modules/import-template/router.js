/** 订单导入模板配置模块路由 */
export const importTemplateRoutes = [
  {
    path: 'import-template',
    name: 'import-template',
    component: () => import('@/modules/import-template/views/ImportTemplateConfigView.vue'),
    meta: { title: '订单导入模板配置', module: 'import-template' }
  }
];
