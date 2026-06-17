/**
 * 退换撤订原因参数（与设置-退换撤订原因参数页数据保持一致）
 */
const ReasonParamsStore = {
  STORAGE_KEY: 'orderm_reason_params',

  /** @type {Record<string, Object[]>} */
  defaults: {
    exchange: [
      { content: '换货', status: 'active', sort: 1 },
      { content: '残缺损', status: 'active', sort: 2 }
    ],
    return: [
      { content: '退货', status: 'active', sort: 1 },
      { content: '损坏退货', status: 'active', sort: 2 }
    ],
    cancel: [
      { content: '撤订', status: 'active', sort: 1 },
      { content: '退订', status: 'active', sort: 2 }
    ],
    revokeReceive: [
      { content: '录入错误', status: 'active', sort: 1 },
      { content: '重复收货', status: 'active', sort: 2 },
      { content: '品相差', status: 'active', sort: 3 }
    ]
  },

  /**
   * 获取指定类型的原因列表
   * @param {string} type - 原因类型
   * @returns {Object[]}
   */
  getReasons(type) {
    try {
      const raw = localStorage.getItem(this.STORAGE_KEY);
      const stored = raw ? JSON.parse(raw) : null;
      if (stored?.[type]?.length) return stored[type];
    } catch (error) {
      console.warn('[ReasonParamsStore] 读取失败', error);
    }
    return [...(this.defaults[type] || [])];
  },

  /**
   * 获取使用中的原因选项（按下拉排序）
   * @param {string} type - 原因类型
   * @returns {Object[]}
   */
  getActiveReasons(type) {
    return this.getReasons(type)
      .filter(item => item.status === 'active')
      .sort((a, b) => (a.sort || 0) - (b.sort || 0));
  },

  /**
   * 保存原因参数
   * @param {Record<string, Object[]>} data - 全量原因数据
   */
  saveAll(data) {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data));
  }
};
