/**
 * 订单导入模板共享数据与筛选逻辑
 */
const ImportTemplateData = {
  /** 订户选项（来自订户列表） */
  subscriberOptions: ['订户一', '订户二', '订户三', '订户四', '订户五', '订户六', '订户七', '订户八'],

  /** 订单导入模板配置示例数据 */
  rows: [
    { subscribers: ['订户一'], resourceType: '图书', resourceTypeFilter: '纸质图书', language: '中文', templateName: '纸质图书中文订单导入模板', status: 'active', remark: '', created: '2024-06-08' },
    { subscribers: ['订户二'], resourceType: '图书', resourceTypeFilter: '纸质图书', language: '外文', templateName: '纸质图书外文订单导入模板', status: 'active', remark: '', created: '2024-06-07' },
    { subscribers: ['订户三'], resourceType: '视听资料', resourceTypeFilter: '视听资料', language: '中文', templateName: '视听资料中文订单导入模板', status: 'active', remark: '', created: '2024-06-06' },
    { subscribers: ['订户四'], resourceType: '视听资料', resourceTypeFilter: '视听资料', language: '外文', templateName: '视听资料外文订单导入模板', status: 'active', remark: '', created: '2024-06-05' },
    { subscribers: ['订户五'], resourceType: '历史文献', resourceTypeFilter: '纸质图书', language: '中文', templateName: '历史文献中文订单导入模板', status: 'active', remark: '', created: '2024-06-04' },
    { subscribers: ['订户六'], resourceType: '图书', resourceTypeFilter: '纸质图书', language: '中文', templateName: '国家图书馆专用纸质图书中文订单导入模板名称超长测试省略号显示效果', status: 'inactive', remark: '测试备注', created: '2024-06-03' },
    { subscribers: ['订户七'], resourceType: '视听资料', resourceTypeFilter: '视听资料', language: '中文', templateName: '定制视听资料订单导入模板', status: 'active', remark: '', created: '2024-06-02' },
    { subscribers: ['订户八'], resourceType: '图书', resourceTypeFilter: '纸质图书', language: '外文', templateName: '外文订单标准导入模板', status: 'inactive', remark: '', created: '2024-06-01' },
    { subscribers: [], resourceType: '图书', resourceTypeFilter: '纸质图书', language: '中文', templateName: '纸质书中中文通用导入模板', status: 'active', remark: '', created: '2024-06-09' },
    { subscribers: [], resourceType: '图书', resourceTypeFilter: '纸质图书', language: '外文', templateName: '纸质书外文书目导入模板', status: 'active', remark: '', created: '2024-06-09' },
    { subscribers: [], resourceType: '视听资料', resourceTypeFilter: '视听资料', language: '中文', templateName: '视听资料中文导入模板', status: 'active', remark: '', created: '2024-06-09' },
    { subscribers: [], resourceType: '视听资料', resourceTypeFilter: '视听资料', language: '外文', templateName: '视听资料外文导入模板', status: 'active', remark: '', created: '2024-06-09' }
  ],

  /**
   * 订单资源类型转为模板采访资源类型
   * @param {string} resourceType - 订单资源类型
   * @returns {string}
   */
  orderResourceTypeToFilter(resourceType) {
    return resourceType === '视听资料' ? '视听资料' : '纸质图书';
  },

  /**
   * 根据订单获取可用导入模板（仅使用中）
   * 未配置关联订户时按资源类型与语种匹配；已配置时需同时匹配订户
   * @param {{ resourceType: string, language: string, subscriber?: string }} order - 订单数据
   * @returns {Array<Object>}
   */
  getAvailableTemplates(order) {
    const filter = this.orderResourceTypeToFilter(order.resourceType);
    return this.rows.filter(row => {
      if (row.status !== 'active') return false;
      if (row.resourceTypeFilter !== filter) return false;
      if (row.language !== order.language) return false;
      const subs = row.subscribers || [];
      if (subs.length === 0) return true;
      return subs.includes(order.subscriber || '');
    });
  },

  /**
   * 格式化关联订户显示
   * @param {string[]} [subscribers] - 关联订户列表
   * @returns {string}
   */
  formatSubscribers(subscribers) {
    if (!subscribers || subscribers.length === 0) return '—';
    return subscribers.join('、');
  }
};
