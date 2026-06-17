/**
 * 馆址数据模块（与馆址管理-馆址列表保持一致）
 */
const LocationData = {
  /** @type {Array<{ id: string, code: string, name: string, status: string, remark: string }>} */
  siteRows: [
    { id: 'site-1', code: 'ST001_C1', name: '首都华威桥馆', status: 'active', remark: '首都图书馆主馆文献借阅区域' },
    { id: 'site-2', code: 'ST001_C2', name: '首都大兴机场分馆', status: 'active', remark: '' },
    { id: 'site-3', code: 'ST001_C3', name: '北京城市图书馆', status: 'active', remark: '' },
    { id: 'site-4', code: 'ST001_C4', name: '其他馆址（首都图书馆）', status: 'active', remark: '' },
    { id: 'site-5', code: '', name: '测试停用馆址', status: 'inactive', remark: '编码为空示例' }
  ],

  /**
   * 获取使用中的馆址列表
   * @returns {Array<{ id: string, code: string, name: string, status: string, remark: string }>}
   */
  getActiveSites() {
    return [...this.siteRows]
      .filter(row => row.status === 'active')
      .sort((a, b) => a.name.localeCompare(b.name, 'zh-CN'));
  },

  /**
   * 根据馆址 ID 获取馆址信息
   * @param {string} siteId - 馆址 ID
   * @returns {{ id: string, code: string, name: string, status: string, remark: string }|undefined}
   */
  getSiteById(siteId) {
    return this.siteRows.find(row => row.id === siteId);
  },

  /**
   * 根据馆址 ID 获取馆址名称
   * @param {string} siteId - 馆址 ID
   * @returns {string}
   */
  getSiteName(siteId) {
    return this.getSiteById(siteId)?.name || '';
  }
};
