/**
 * 系统导航与页面路由配置
 * @type {Object}
 */
const AppConfig = {
  appName: '订单管理',
  institution: '北京市公共图书馆',

  /**
   * 当前登录用户所属订户（原型演示）
   * @type {string}
   */
  currentSubscriber: 'ceshi',

  /**
   * 获取当前登录用户所属订户
   * @returns {string}
   */
  getCurrentSubscriber() {
    return this.currentSubscriber || '';
  },

  /**
   * 当前系统已配置的 Z3950 服务器名称列表（为空表示未配置）
   * @type {string[]}
   */
  z3950Servers: ['北京大学', '华盛顿大学'],

  /**
   * 是否已配置 Z3950 地址
   * @returns {boolean}
   */
  hasZ3950Config() {
    return Array.isArray(this.z3950Servers) && this.z3950Servers.length > 0;
  },

  /**
   * 获取面包屑展示的 Z3950 地址文案
   * @returns {string}
   */
  getZ3950ServersLabel() {
    if (!this.hasZ3950Config()) return '';
    return `当前Z3950：${this.z3950Servers.join('、')}`;
  },

  /** 子页面在侧边栏高亮归属的主菜单页 */
  sidebarHighlightMap: {
    '01_01_19_查Z3950.html': '01_01_非连续出版物订单-订单列表.html',
    '02_01_02_验收详情按种_纸质书.html': '02_01_验收单管理.html',
    '02_01_05_验收详情按种_视听资料.html': '02_01_验收单管理.html',
    '02_01_11_验收单详情按册_纸质书.html': '02_01_验收单管理.html',
    '02_01_12_验收单详情按册_视听资料.html': '02_01_验收单管理.html'
  },

  /** 侧边栏菜单 */
  sidebar: [
    {
      id: 'order-mgmt', label: '订单管理', expanded: true,
      children: [
        { label: '非连续出版物订单', page: '01_01_非连续出版物订单-订单列表.html' },
        { label: '书目查询', page: '01_01_18_馆藏查重.html' }
      ]
    },
    {
      id: 'acceptance', label: '采访验收', expanded: true,
      children: [
        { label: '验收单管理', page: '02_01_验收单管理.html' },
        { label: '逐条收货', page: '02_02_逐条收货_纸质书.html' },
        { label: '批量验收', page: '02_03_批量验收.html' },
        { label: '换货管理', page: '02_04_换货管理.html' },
        { label: '退货管理', page: '02_05_退货管理.html' },
        { label: '催缺管理', page: '02_06_催缺管理.html' }
      ]
    },
    {
      id: 'settlement', label: '采访结算', expanded: false,
      children: [
        { label: '待结算', page: '03_01_待结算.html' },
        { label: '已结算', page: '03_02_已结算.html' },
        { label: '结算失败处理', page: '03_03_结算失败处理.html' }
      ]
    },
    {
      id: 'subscriber', label: '订户管理', expanded: false,
      children: [
        { label: '订户列表', page: '04_01订户列表.html' },
        { label: '馆员列表', page: '04_02_馆员列表.html' }
      ]
    },
    {
      id: 'currency', label: '货币管理', expanded: false,
      children: [
        { label: '货币信息', page: '05_01_货币信息.html' }
      ]
    },
    {
      id: 'settings', label: '设置', expanded: false,
      children: [
        { label: '退换撤订原因参数', page: '07_01_退换撤订原因参数.html' },
        { label: '催缺配置', page: '07_02_催缺配置.html' },
        { label: '条码号供应商代码', page: '07_03_条码号供应商代码.html' },
        { label: '订单与MARC类型映射关系', page: '07_04_订单与marc类型映射关系.html' },
        { label: '订单导入模板配置', page: '07_05_订单导入模板配置.html' },
        { label: '馆址管理', page: '07_06_馆址管理.html' }
      ]
    }
  ]
};
