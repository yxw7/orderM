/** 系统导航与全局配置 */
export const appConfig = {
  appName: '订单管理',
  institution: '北京市公共图书馆',
  /** 当前登录馆员账号（原型演示） */
  currentLibrarianAccount: 'BIBQUERY01',
  currentSubscriber: 'ceshi',
  viewableSubscribers: ['ceshi'],
  z3950Servers: ['北京大学', '华盛顿大学'],

  sidebarHighlightMap: {
    '/bib-query/z3950': '/bib-query',
    '/bib-query/new-bib': '/bib-query',
    '/acceptance/delivery-import': '/acceptance/delivery-import/tasks',
    '/acceptance/detail': '/acceptance',
    '/orders/line': '/orders',
    '/orders/lines': '/orders',
    '/settled/detail': '/settled',
    '/settled/list': '/settled'
  },

  sidebar: [
    {
      id: 'order-mgmt',
      label: '订单管理',
      expanded: true,
      children: [
        { label: '非连续出版物订单', route: '/orders' },
        { label: '书目查询', route: '/bib-query' }
      ]
    },
    {
      id: 'acceptance',
      label: '采访验收',
      expanded: true,
      children: [
        { label: '验收单管理', route: '/acceptance' },
        { label: '导入任务', route: '/acceptance/delivery-import/tasks' },
        { label: '逐条收货', route: '/receive' },
        { label: '批量验收', route: '/batch-acceptance' },
        { label: '换货管理', route: '/exchange' },
        { label: '退货管理', route: '/return' },
        { label: '催缺管理', route: '/shortage' }
      ]
    },
    {
      id: 'settlement',
      label: '采访结算',
      expanded: false,
      children: [
        { label: '待结算', route: '/pending-settlement' },
        { label: '已结算', route: '/settled' },
        { label: '结算失败处理', route: '/settlement-fail' }
      ]
    },
    {
      id: 'subscriber',
      label: '订户管理',
      expanded: false,
      children: [
        { label: '订户列表', route: '/subscribers' },
        { label: '馆员列表', route: '/librarians' }
      ]
    },
    {
      id: 'currency',
      label: '货币管理',
      expanded: false,
      children: [{ label: '货币信息', route: '/currency' }]
    },
    {
      id: 'settings',
      label: '设置',
      expanded: false,
      children: [
        { label: '退换撤订原因参数', route: '/reason-params' },
        { label: '催缺配置', route: '/shortage-config' },
        { label: '条码号供应商代码', route: '/barcode-supplier' },
        { label: '订单与MARC类型映射关系', route: '/marc-mapping' },
        { label: '订单导入模板配置', route: '/import-template' },
        { label: '馆址管理', route: '/locations' }
      ]
    }
  ]
};

/** 路由与页签标题映射 */
export const routeTitleMap = {
  '/orders': '订单管理',
  '/bib-query': '书目查询',
  '/acceptance': '验收单管理',
  '/receive': '逐条收货',
  '/batch-acceptance': '批量验收',
  '/exchange': '换货管理',
  '/return': '退货管理',
  '/shortage': '催缺管理',
  '/pending-settlement': '待结算',
  '/settled': '已结算',
  '/settled/detail': '结算详情',
  '/settled/list': '结算清单',
  '/settlement-fail': '结算失败处理',
  '/subscribers': '订户列表',
  '/librarians': '馆员列表',
  '/currency': '货币信息',
  '/reason-params': '退换撤订原因参数',
  '/shortage-config': '催缺配置',
  '/barcode-supplier': '条码号供应商代码',
  '/marc-mapping': '订单与MARC类型映射关系',
  '/import-template': '订单导入模板配置',
  '/locations': '馆址管理',
  '/bib-query/new-bib': '新建书目',
  '/bib-query/z3950': '查Z3950',
  '/acceptance/delivery-import': '导入任务',
  '/acceptance/delivery-import/tasks': '导入任务',
  '/acceptance/detail': '验收详情',
  '/orders/line': '订单行详情'
};

export function getRouteTitle(path) {
  if (routeTitleMap[path]) return routeTitleMap[path];
  if (path.startsWith('/acceptance/detail/')) return '验收详情';
  if (path.startsWith('/acceptance/delivery-import/tasks/')) return '导入任务详情';
  if (path.startsWith('/orders/line/')) return '订单行详情';
  if (path.startsWith('/settled/detail/')) return '结算详情';
  if (path.startsWith('/settled/list/')) return '结算清单';
  return path;
}

export function getHighlightRoute(path) {
  if (appConfig.sidebarHighlightMap[path]) {
    return appConfig.sidebarHighlightMap[path];
  }
  for (const [prefix, highlight] of Object.entries(appConfig.sidebarHighlightMap)) {
    if (path.startsWith(`${prefix}/`) || (prefix !== path && path.startsWith(prefix))) {
      return highlight;
    }
  }
  return path;
}
