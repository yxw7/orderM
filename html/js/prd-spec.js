/**
 * 应用壳层 PRD 说明：全局唯一按钮与抽屉，随页签切换同步当前页数据
 */
const PrdSpec = {
  shellReady: false,
  drawerOpen: false,
  drawerTimer: null,
  activeItemId: '',
  /** @type {{ title: string, items: { id: string, title?: string, htmlContent: string }[] } | null} */
  currentPageData: null,

  /** @type {((event: Event) => void) | null} */
  onNavClick: null,
  /** @type {((event: Event) => void) | null} */
  onContentClick: null,

  /**
   * 获取壳层 document（顶层宿主窗口）
   * @returns {Document}
   */
  getShellDoc() {
    let win = window;
    while (win) {
      if (win.document.getElementById('prd-spec-shell-root')) {
        return win.document;
      }
      if (win === win.top) break;
      win = win.parent;
    }
    return document;
  },

  /**
   * 获取已初始化壳层的 PrdSpec 实例
   * @returns {typeof PrdSpec | null}
   */
  getShellInstance() {
    let win = window;
    while (win) {
      if (win.PrdSpec?.shellReady) return win.PrdSpec;
      if (win === win.top) break;
      win = win.parent;
    }
    return null;
  },

  /**
   * 初始化壳层 PRD 按钮与抽屉（仅宿主窗口调用一次）
   */
  initShell() {
    if (this.shellReady) return;
    if (typeof Layout !== 'undefined' && Layout.isEmbedMode()) return;
    if (!document.getElementById('app-root')) return;

    const doc = document;
    if (doc.getElementById('prd-spec-shell-root')) {
      this.shellReady = true;
      return;
    }

    const root = doc.createElement('div');
    root.id = 'prd-spec-shell-root';
    root.innerHTML = `
      <button type="button" id="prd-spec-shell-trigger"
        class="hidden px-3 py-1.5 text-sm text-sky-600 bg-white border border-sky-200 rounded shadow-sm hover:bg-sky-50">
        PRD说明
      </button>
      <div id="prd-spec-shell-drawer" class="prd-spec-drawer hidden" aria-hidden="true">
        <div id="prd-spec-shell-drawer-mask" class="prd-spec-drawer-mask"></div>
        <aside id="prd-spec-shell-drawer-panel" class="prd-spec-drawer-panel" role="dialog"
          aria-modal="true" aria-labelledby="prd-spec-shell-drawer-title">
          <div class="flex items-center justify-between px-5 py-4 border-b border-gray-200 shrink-0">
            <h2 id="prd-spec-shell-drawer-title" class="text-base font-medium text-gray-800">PRD 需求说明</h2>
            <button type="button" id="prd-spec-shell-drawer-close" aria-label="关闭"
              class="text-gray-400 hover:text-gray-600 text-xl leading-none">&times;</button>
          </div>
          <div id="prd-spec-shell-item-nav" class="prd-spec-item-nav shrink-0"></div>
          <div id="prd-spec-shell-content" class="prd-spec-content"></div>
        </aside>
      </div>`;
    doc.body.appendChild(root);
    doc.body.classList.add('prd-shell-active');
    this.shellReady = true;
    this.bindShellEvents();
  },

  /**
   * 绑定壳层交互事件
   */
  bindShellEvents() {
    const doc = this.getShellDoc();
    doc.getElementById('prd-spec-shell-trigger')?.addEventListener('click', () => this.openDrawer());
    doc.getElementById('prd-spec-shell-drawer-close')?.addEventListener('click', () => this.closeDrawer());
    doc.getElementById('prd-spec-shell-drawer-mask')?.addEventListener('click', () => this.closeDrawer());
    doc.getElementById('prd-spec-shell-drawer-panel')?.addEventListener('click', event => {
      event.stopPropagation();
    });
  },

  /**
   * 获取页签对应 window
   * @param {string} pageFile - 页面文件名
   * @returns {Window|null}
   */
  getPageWindow(pageFile) {
    const mgr = typeof TabManager !== 'undefined' ? TabManager.getActiveManager() : null;
    if (!mgr) {
      const active = document.body.dataset.activePage || '';
      return active === pageFile ? window : null;
    }
    if (pageFile === mgr.hostPage) return mgr.ownerWindow;
    const panel = mgr.getPanel(pageFile);
    const iframe = panel?.querySelector('iframe');
    return iframe?.contentWindow || null;
  },

  /**
   * 同步当前激活页签的 PRD 展示状态
   * @param {string} pageFile - 页面文件名
   */
  syncActive(pageFile) {
    const shell = this.getShellInstance();
    if (!shell?.shellReady) return;

    shell.closeDrawer();

    const pageWin = shell.getPageWindow(pageFile);
    const ctx = pageWin?.__prdPageContext;

    if (!ctx || typeof ctx.isVisible !== 'function' || !ctx.isVisible()) {
      shell.hideTrigger();
      shell.currentPageData = null;
      return;
    }

    const data = typeof ctx.getPageData === 'function' ? ctx.getPageData() : null;
    if (!data?.items?.length) {
      shell.hideTrigger();
      shell.currentPageData = null;
      return;
    }

    shell.currentPageData = data;
    shell.activeItemId = data.items[0].id;
    shell.showTrigger();
  },

  /**
   * 显示壳层 PRD 按钮
   */
  showTrigger() {
    const trigger = this.getShellDoc().getElementById('prd-spec-shell-trigger');
    if (trigger) trigger.classList.remove('hidden');
  },

  /**
   * 隐藏壳层 PRD 按钮
   */
  hideTrigger() {
    const trigger = this.getShellDoc().getElementById('prd-spec-shell-trigger');
    if (trigger) trigger.classList.add('hidden');
  },

  /**
   * 渲染当前需求项
   */
  renderActiveItem() {
    const doc = this.getShellDoc();
    const pageData = this.currentPageData;
    const navEl = doc.getElementById('prd-spec-shell-item-nav');
    const contentEl = doc.getElementById('prd-spec-shell-content');
    const titleEl = doc.getElementById('prd-spec-shell-drawer-title');
    if (!pageData || !contentEl || !navEl) return;

    const activeItem = pageData.items.find(item => item.id === this.activeItemId) || pageData.items[0];
    if (!activeItem) return;

    this.activeItemId = activeItem.id;
    if (titleEl) titleEl.textContent = `${pageData.title} · PRD 需求说明`;

    navEl.innerHTML = pageData.items.map(item =>
      `<button type="button" class="prd-spec-item-btn${item.id === this.activeItemId ? ' active' : ''}"
        data-prd-item-id="${item.id}">[${item.id}] ${item.title || ''}</button>`
    ).join('');

    contentEl.innerHTML = activeItem.htmlContent || '';
    this.bindDrawerContentEvents();
  },

  /**
   * 绑定抽屉内容区事件（导航切换、锚点）
   */
  bindDrawerContentEvents() {
    const doc = this.getShellDoc();
    const navEl = doc.getElementById('prd-spec-shell-item-nav');
    const contentEl = doc.getElementById('prd-spec-shell-content');

    if (this.onNavClick && navEl) navEl.removeEventListener('click', this.onNavClick);
    if (this.onContentClick && contentEl) contentEl.removeEventListener('click', this.onContentClick);

    this.onNavClick = event => {
      const btn = event.target.closest('[data-prd-item-id]');
      if (!btn) return;
      this.activeItemId = btn.dataset.prdItemId || this.activeItemId;
      this.renderActiveItem();
    };

    this.onContentClick = event => {
      const anchor = event.target.closest('a[href^="#"]');
      if (!anchor || !contentEl) return;
      const target = contentEl.querySelector(anchor.getAttribute('href'));
      if (target) {
        event.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };

    navEl?.addEventListener('click', this.onNavClick);
    contentEl?.addEventListener('click', this.onContentClick);
  },

  /**
   * 解绑抽屉内容区事件
   */
  unbindDrawerContentEvents() {
    const doc = this.getShellDoc();
    const navEl = doc.getElementById('prd-spec-shell-item-nav');
    const contentEl = doc.getElementById('prd-spec-shell-content');
    if (this.onNavClick && navEl) navEl.removeEventListener('click', this.onNavClick);
    if (this.onContentClick && contentEl) contentEl.removeEventListener('click', this.onContentClick);
    this.onNavClick = null;
    this.onContentClick = null;
  },

  /**
   * 打开 PRD 抽屉
   */
  openDrawer() {
    const doc = this.getShellDoc();
    const drawer = doc.getElementById('prd-spec-shell-drawer');
    if (!drawer || this.drawerOpen || !this.currentPageData) return;

    this.renderActiveItem();
    drawer.classList.remove('hidden');
    drawer.setAttribute('aria-hidden', 'false');
    requestAnimationFrame(() => drawer.classList.add('is-open'));
    this.drawerOpen = true;
  },

  /**
   * 关闭 PRD 抽屉
   */
  closeDrawer() {
    const doc = this.getShellDoc();
    const drawer = doc.getElementById('prd-spec-shell-drawer');
    if (!drawer || !this.drawerOpen) return;

    drawer.classList.remove('is-open');
    drawer.setAttribute('aria-hidden', 'true');
    this.drawerOpen = false;

    if (this.drawerTimer) clearTimeout(this.drawerTimer);
    this.drawerTimer = window.setTimeout(() => {
      drawer.classList.add('hidden');
      const navEl = doc.getElementById('prd-spec-shell-item-nav');
      const contentEl = doc.getElementById('prd-spec-shell-content');
      if (navEl) navEl.innerHTML = '';
      if (contentEl) contentEl.innerHTML = '';
      this.unbindDrawerContentEvents();
      this.drawerTimer = null;
    }, 300);
  },

  /**
   * 页面注册 PRD 上下文并在当前页激活时同步壳层
   * @param {string} pageFile - 页面文件名
   * @param {{ isVisible: () => boolean, getPageData: () => object|null }} context - PRD 上下文
   */
  registerPageContext(pageFile, context) {
    window.__prdPageContext = context;

    const mgr = typeof TabManager !== 'undefined' ? TabManager.getActiveManager() : null;
    const shell = this.getShellInstance();
    const activePage = mgr?.activePage || document.body.dataset.activePage || pageFile;

    if (shell && activePage === pageFile) {
      shell.syncActive(pageFile);
    }
  }
};
