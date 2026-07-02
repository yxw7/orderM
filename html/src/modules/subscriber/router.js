/** 订户管理模块路由 */
export const subscriberRoutes = [
  {
    path: 'subscribers',
    name: 'subscribers',
    component: () => import('@/modules/subscriber/views/SubscriberListView.vue'),
    meta: { title: '订户列表', module: 'subscriber' }
  },
  {
    path: 'librarians',
    name: 'librarians',
    component: () => import('@/modules/subscriber/views/LibrarianListView.vue'),
    meta: { title: '馆员列表', module: 'subscriber' }
  }
];
