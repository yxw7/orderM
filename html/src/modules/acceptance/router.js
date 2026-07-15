/** 采访验收模块路由 */
export const acceptanceRoutes = [
  {
    path: 'acceptance',
    name: 'acceptance',
    component: () => import('@/modules/acceptance/views/AcceptanceManageView.vue'),
    meta: { title: '验收单管理', module: 'acceptance' }
  },
  {
    path: 'acceptance/detail/:acceptanceId',
    name: 'acceptance-detail',
    component: () => import('@/modules/acceptance/views/AcceptanceDetailView.vue'),
    meta: { title: '验收详情', module: 'acceptance' }
  },
  {
    path: 'acceptance/delivery-import',
    redirect: '/acceptance/delivery-import/tasks'
  },
  {
    path: 'acceptance/delivery-import/tasks',
    name: 'delivery-import-tasks',
    component: () => import('@/modules/acceptance/views/DeliveryImportTaskListView.vue'),
    meta: { title: '导入任务', module: 'acceptance' }
  },
  {
    path: 'acceptance/delivery-import/tasks/:id',
    name: 'delivery-import-task-detail',
    component: () => import('@/modules/acceptance/views/DeliveryImportTaskDetailView.vue'),
    meta: { title: '导入任务详情', module: 'acceptance' }
  },
  {
    path: 'receive',
    name: 'receive',
    component: () => import('@/modules/acceptance/views/ReceiveByItemView.vue'),
    meta: { title: '逐条收货', module: 'acceptance' }
  },
  {
    path: 'batch-acceptance',
    name: 'batch-acceptance',
    component: () => import('@/modules/acceptance/views/BatchAcceptanceView.vue'),
    meta: { title: '批量验收', module: 'acceptance' }
  },
  {
    path: 'exchange',
    name: 'exchange',
    component: () => import('@/modules/acceptance/views/ExchangeManageView.vue'),
    meta: { title: '换货管理', module: 'acceptance' }
  },
  {
    path: 'return',
    name: 'return',
    component: () => import('@/modules/acceptance/views/ReturnManageView.vue'),
    meta: { title: '退货管理', module: 'acceptance' }
  },
  {
    path: 'shortage',
    name: 'shortage',
    component: () => import('@/modules/acceptance/views/ShortageManageView.vue'),
    meta: { title: '催缺管理', module: 'acceptance' }
  }
];
