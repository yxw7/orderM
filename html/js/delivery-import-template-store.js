/**
 * 发货单导入列映射模板（按订户隔离，localStorage 原型存储）
 */
const DeliveryImportTemplateStore = {
  STORAGE_KEY: 'orderm_delivery_import_templates',

  /**
   * 获取当前订户标识
   * @returns {string}
   */
  getSubscriber() {
    return typeof AppConfig !== 'undefined' ? AppConfig.getCurrentSubscriber() : '';
  },

  /**
   * 读取全部模板
   * @returns {Object[]}
   */
  readAll() {
    try {
      const raw = localStorage.getItem(this.STORAGE_KEY);
      if (!raw) return this.seedDefaults();
      const list = JSON.parse(raw);
      return Array.isArray(list) ? list : [];
    } catch {
      return [];
    }
  },

  /**
   * 写入全部模板
   * @param {Object[]} list
   */
  writeAll(list) {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(list));
  },

  /**
   * 首次无数据时写入演示模板
   * @returns {Object[]}
   */
  seedDefaults() {
    const subscriber = this.getSubscriber();
    if (!subscriber) return [];

    const defaults = [{
      id: 'tpl_demo_zju',
      name: '浙大出版社发货单',
      subscriber,
      supplier: '北京市图书进出口有限公司',
      resourceType: '纸质书',
      lang: '中文',
      mapping: {
        ISBN: 'isbn',
        书名: 'title',
        作者: 'author',
        出版社: 'publisher',
        每套册数: 'volCount',
        RMB单价: 'price',
        总套数: 'receiveQty',
        RMB实洋: 'price'
      },
      updatedAt: '2026-06-23 10:00:00'
    }];
    this.writeAll(defaults);
    return defaults;
  },

  /**
   * 获取当前订户可见模板列表
   * @returns {Object[]}
   */
  getTemplatesForCurrentSubscriber() {
    const subscriber = this.getSubscriber();
    return this.readAll()
      .filter(t => t.subscriber === subscriber)
      .sort((a, b) => a.name.localeCompare(b.name, 'zh-CN'));
  },

  /**
   * 按 ID 获取模板
   * @param {string} id
   * @returns {Object|null}
   */
  getById(id) {
    if (!id) return null;
    return this.readAll().find(t => t.id === id) || null;
  },

  /**
   * 校验模板名称在当前订户下是否唯一
   * @param {string} name
   * @param {string} [excludeId] - 更新时排除自身
   * @returns {boolean}
   */
  isNameUnique(name, excludeId) {
    const trimmed = (name || '').trim();
    if (!trimmed) return false;
    const subscriber = this.getSubscriber();
    return !this.readAll().some(t =>
      t.subscriber === subscriber
      && t.name === trimmed
      && t.id !== excludeId
    );
  },

  /**
   * 保存或更新模板
   * @param {Object} payload
   * @param {string} payload.name
   * @param {Object<string, string>} payload.mapping
   * @param {string} [payload.id] - 有则更新，无则新建
   * @param {string} payload.supplier
   * @param {string} payload.resourceType
   * @param {string} payload.lang
   * @returns {{ ok: boolean, id?: string, error?: string }}
   */
  save(payload) {
    const name = (payload.name || '').trim();
    if (!name) return { ok: false, error: '请输入模板名称' };
    if (name.length > 50) return { ok: false, error: '模板名称不能超过50个字符' };

    const subscriber = this.getSubscriber();
    if (!subscriber) return { ok: false, error: '无法获取当前订户' };

    const excludeId = payload.id || '';
    if (!this.isNameUnique(name, excludeId)) {
      return { ok: false, error: '模板名称已存在' };
    }

    const all = this.readAll();
    const now = new Date().toISOString().slice(0, 19).replace('T', ' ');
    const record = {
      id: excludeId || `tpl_${Date.now()}`,
      name,
      subscriber,
      supplier: payload.supplier || '',
      resourceType: payload.resourceType || '',
      lang: payload.lang || '',
      mapping: { ...payload.mapping },
      updatedAt: now
    };

    const idx = all.findIndex(t => t.id === record.id);
    if (idx >= 0) all[idx] = record;
    else all.push(record);

    this.writeAll(all);
    return { ok: true, id: record.id };
  }
};
