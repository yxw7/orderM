/**
 * 当前工作验收单跨页面状态管理
 */
const AcceptanceStore = {
  STORAGE_KEY: 'orderm_current_acceptance',

  /** 各资源类型对应的检索字段 */
  SEARCH_FIELDS: {
    '纸质书': [
      { value: 'isbn', label: 'ISBN' },
      { value: 'orderLine', label: '订单行号' },
      { value: 'title', label: '正题名' }
    ],
    '视听资料': [
      { value: 'resourceId', label: '资源标识' },
      { value: 'orderLine', label: '订单行号' },
      { value: 'title', label: '题名' }
    ]
  },

  /** 各资源类型对应的收货操作链接 */
  RECEIVE_OP_LINKS: {
    '纸质书': {
      receive: '02_02_02_01_01_新增收货.html',
      exchange: '02_02_02_01_02_新增换货.html',
      return: '02_02_02_01_03_新增退货.html'
    },
    '视听资料': {
      receive: '02_02_02_02_01_新增收货.html',
      exchange: '02_02_02_02_02_新增换货.html',
      return: '02_02_02_02_03_新增退货.html'
    }
  },

  /**
   * 将列表行数据转为当前验收单对象
   * @param {Object} row - 验收单列表行
   * @returns {Object}
   */
  fromRow(row) {
    return {
      no: row.no,
      id: row.id,
      name: row.name,
      type: row.type,
      lang: row.lang,
      method: row.method,
      supplier: row.supplier,
      shipNo: row.shipNo,
      status: row.status,
      remarkText: row.remarkText || ''
    };
  },

  /**
   * 将表单数据转为当前验收单对象
   * @param {HTMLFormElement} form - 表单元素
   * @param {Object} [extra] - 额外字段
   * @returns {Object}
   */
  fromForm(form, extra = {}) {
    return {
      no: extra.no,
      id: extra.id || `ysNEW${Date.now()}`,
      name: form.elements.name?.value?.trim() || '',
      type: form.elements.resourceType?.value || '',
      lang: form.elements.language?.value || '',
      method: form.elements.method?.value || '',
      supplier: form.elements.supplier?.value || '',
      shipNo: form.elements.shipNo?.value?.trim() || '',
      status: extra.status || 'notStarted',
      remarkText: form.elements.remark?.value?.trim() || ''
    };
  },

  /**
   * 获取当前工作验收单
   * @returns {Object|null}
   */
  get() {
    try {
      const raw = localStorage.getItem(this.STORAGE_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      console.warn('[AcceptanceStore] 读取失败', e);
      return null;
    }
  },

  /**
   * 保存当前工作验收单
   * @param {Object} acceptance - 验收单信息
   */
  set(acceptance) {
    if (!acceptance) return;
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(acceptance));
    console.log('[AcceptanceStore] 已设置当前工作验收单', acceptance.id);
  },

  /**
   * 清除当前工作验收单
   */
  clear() {
    localStorage.removeItem(this.STORAGE_KEY);
  },

  /**
   * 渲染逐条收货页验收单摘要信息
   */
  renderReceiveSummary() {
    const current = this.get();
    const fields = {
      'receive-acceptance-name': current?.name,
      'receive-acceptance-supplier': current?.supplier,
      'receive-acceptance-lang': current?.lang,
      'receive-acceptance-shipno': current?.shipNo
    };
    Object.entries(fields).forEach(([id, value]) => {
      const el = document.getElementById(id);
      if (el) el.textContent = value || '—';
    });

    const langEl = document.getElementById('receive-acceptance-lang');
    if (langEl) {
      langEl.classList.toggle('text-red-500', !!current?.lang);
      langEl.classList.toggle('font-medium', !!current?.lang);
      langEl.classList.toggle('text-gray-900', !current?.lang);
    }

    const hint = document.getElementById('receive-acceptance-hint');
    if (hint) hint.classList.toggle('hidden', !!current);

    const ops = document.querySelectorAll('[data-receive-op]');
    const links = current?.type ? this.RECEIVE_OP_LINKS[current.type] : null;
    ops.forEach(btn => {
      const enabled = !!current;
      if (btn.tagName === 'BUTTON') {
        btn.disabled = !enabled;
        btn.classList.toggle('opacity-50', !enabled);
      } else {
        btn.classList.toggle('opacity-50', !enabled);
        btn.classList.toggle('pointer-events-none', !enabled);
        if (links && btn.dataset.receiveOpType) {
          btn.href = links[btn.dataset.receiveOpType] || '#';
        }
      }
    });

    this.renderReceiveSearchFields(current?.type);
    if (typeof window.renderReceivePageContent === 'function') {
      window.renderReceivePageContent(current?.type);
    }
    if (typeof ReceiveDetailDrawer !== 'undefined') {
      ReceiveDetailDrawer.syncViewDetailButton();
    }
  },

  /**
   * 根据资源类型渲染检索字段下拉列表
   * @param {string} [resourceType] - 资源类型
   */
  renderReceiveSearchFields(resourceType) {
    const select = document.getElementById('receive-search-field');
    if (!select) return;
    const fields = this.SEARCH_FIELDS[resourceType];
    if (!fields) {
      select.innerHTML = '<option value="">请先选择验收单</option>';
      select.disabled = true;
      return;
    }
    select.disabled = false;
    select.innerHTML = fields.map((f, i) =>
      `<option value="${f.value}"${i === 0 ? ' selected' : ''}>${f.label}</option>`
    ).join('');
  },

  /**
   * 绑定逐条收货操作按钮校验
   */
  bindReceiveOperations() {
    document.querySelectorAll('[data-receive-op]').forEach(btn => {
      if (btn.tagName === 'BUTTON') return;
      btn.addEventListener('click', e => {
        if (!this.get()) {
          e.preventDefault();
          alert('请先在验收单管理中选择当前工作验收单');
        }
      });
    });
  }
};
