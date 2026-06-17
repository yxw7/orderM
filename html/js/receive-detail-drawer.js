/**
 * 逐条收货页验收详情侧滑面板
 */
const ReceiveDetailDrawer = {
  /** @type {number} */
  TRANSITION_MS: 300,

  /** @type {Record<string, string>} */
  DETAIL_PAGES: {
    '纸质书': '02_01_02_验收详情按种_纸质书.html',
    '视听资料': '02_01_05_验收详情按种_视听资料.html'
  },

  /** @type {boolean} */
  _isOpen: false,

  /** @type {number|null} */
  _closeTimer: null,

  /**
   * 解析验收详情页路径
   * @param {string} [resourceType] - 资源类型
   * @returns {string}
   */
  resolveDetailPage(resourceType) {
    return this.DETAIL_PAGES[resourceType] || this.DETAIL_PAGES['纸质书'];
  },

  /**
   * 构建验收详情上下文
   * @param {Object} acceptance - 当前工作验收单
   * @returns {Object}
   */
  buildDetailContext(acceptance) {
    return {
      acceptance: { ...acceptance },
      viewMode: 'species'
    };
  },

  /**
   * 获取侧滑面板根节点
   * @returns {HTMLElement|null}
   */
  getRoot() {
    return document.getElementById('receive-detail-drawer');
  },

  /**
   * 同步「查看详情」按钮可用状态
   */
  syncViewDetailButton() {
    const btn = document.getElementById('receive-view-detail-btn');
    if (!btn) return;
    const enabled = Boolean(AcceptanceStore.get());
    btn.disabled = !enabled;
    btn.classList.toggle('text-sky-600', enabled);
    btn.classList.toggle('hover:underline', enabled);
    btn.classList.toggle('cursor-pointer', enabled);
    btn.classList.toggle('text-gray-300', !enabled);
    btn.classList.toggle('cursor-default', !enabled);
  },

  /**
   * 打开验收详情侧滑面板
   */
  open() {
    const acceptance = AcceptanceStore.get();
    if (!acceptance) {
      alert('请先在验收单管理中选择当前工作验收单');
      return;
    }

    const root = this.getRoot();
    const frame = document.getElementById('receive-detail-drawer-frame');
    if (!root || !frame) return;

    if (this._closeTimer) {
      clearTimeout(this._closeTimer);
      this._closeTimer = null;
    }

    sessionStorage.setItem('acceptanceDetailContext', JSON.stringify(this.buildDetailContext(acceptance)));

    const detailPage = this.resolveDetailPage(acceptance.type);
    frame.src = `${detailPage}?embed=1`;

    root.classList.remove('hidden');
    root.setAttribute('aria-hidden', 'false');
    document.body.classList.add('receive-detail-drawer-open');

    requestAnimationFrame(() => {
      root.classList.add('is-open');
    });

    this._isOpen = true;
  },

  /**
   * 关闭验收详情侧滑面板
   */
  close() {
    const root = this.getRoot();
    const frame = document.getElementById('receive-detail-drawer-frame');
    if (!root || !this._isOpen) return;

    root.classList.remove('is-open');
    root.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('receive-detail-drawer-open');
    this._isOpen = false;

    this._closeTimer = window.setTimeout(() => {
      root.classList.add('hidden');
      if (frame) frame.src = 'about:blank';
      this._closeTimer = null;
    }, this.TRANSITION_MS);
  },

  /**
   * 绑定侧滑面板交互
   */
  bind() {
    document.getElementById('receive-view-detail-btn')?.addEventListener('click', () => {
      this.open();
    });

    document.getElementById('receive-detail-drawer-close')?.addEventListener('click', () => {
      this.close();
    });

    document.getElementById('receive-detail-drawer-mask')?.addEventListener('click', () => {
      this.close();
    });

    document.getElementById('receive-detail-drawer-panel')?.addEventListener('click', event => {
      event.stopPropagation();
    });
  }
};

window.ReceiveDetailDrawer = ReceiveDetailDrawer;
