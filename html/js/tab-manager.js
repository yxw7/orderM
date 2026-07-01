/**
 * 主内容区多页签管理：共存切换、数据缓存、单独关闭
 */
const TabManager = {
  STORAGE_KEY: 'orderm_page_tabs',
  DEFAULT_PAGE: '01_01_非连续出版物订单-订单列表.html',
  DEFAULT_TITLE: '订单管理',

  /** @type {{page: string, title: string, isHost?: boolean}[]} */
  tabs: [],

  /** @type {string|null} */
  activePage: null,

  /** @type {string} */
  hostPage: '',

  /** @type {Window|null} */
  ownerWindow: null,

  /**
   * 获取 TabManager 绑定的 document
   * @returns {Document}
   */
  getDoc() {
    return this.ownerWindow?.document || document;
  },

  /**
   * 布局初始化后启动页签管理
   * @param {{pageTitle: string, activePage?: string}} options - 页面配置
   */
  initAfterLayout(options) {
    this.ownerWindow = window;
    this.hostPage = options.activePage || location.pathname.split('/').pop() || '';
    const currentTitle = options.pageTitle || document.title;

    this.loadState();
    this.ensureHostTab(this.hostPage, currentTitle);
    this.markHostPanel(this.hostPage);
    this.restorePanels();
    this.renderTabBar();
    this.switchTab(this.activePage || this.hostPage, false);
    this.bindSidebar();
    this.bindTabBar();
  },

  /**
   * 根据页面文件名获取展示标题
   * @param {string} page - 页面文件名
   * @returns {string}
   */
  getPageTitle(page) {
    const titleMap = {
      '01_01_非连续出版物订单-订单列表.html': '订单管理'
    };
    if (titleMap[page]) return titleMap[page];

    for (const group of AppConfig.sidebar) {
      const child = group.children.find(item => item.page === page);
      if (child?.label) return child.label;
    }
    return page;
  },

  /**
   * 读取本地页签状态
   */
  loadState() {
    try {
      const raw = sessionStorage.getItem(this.STORAGE_KEY);
      if (!raw) return;
      const data = JSON.parse(raw);
      if (data.hostPage && data.hostPage !== this.hostPage) {
        sessionStorage.removeItem(this.STORAGE_KEY);
        return;
      }
      if (Array.isArray(data.tabs) && data.tabs.length) {
        this.tabs = data.tabs;
        this.activePage = data.activePage || this.tabs[0].page;
      }
    } catch (error) {
      this.tabs = [];
      this.activePage = null;
    }
  },

  /**
   * 保存页签状态
   */
  saveState() {
    sessionStorage.setItem(this.STORAGE_KEY, JSON.stringify({
      hostPage: this.hostPage,
      tabs: this.tabs.map(({ page, title, isHost }) => ({ page, title, isHost: !!isHost })),
      activePage: this.activePage
    }));
  },

  /**
   * 确保当前宿主页面在页签列表中
   * @param {string} page - 宿主页面
   * @param {string} title - 页面标题
   */
  ensureHostTab(page, title) {
    const hostTab = this.tabs.find(tab => tab.page === page);
    if (hostTab) {
      hostTab.isHost = true;
      hostTab.title = title;
      return;
    }

    if (!this.tabs.length) {
      this.tabs.push({ page, title, isHost: true });
      this.activePage = page;
      return;
    }

    this.tabs.unshift({ page, title, isHost: true });
    if (!this.activePage) this.activePage = page;
  },

  /**
   * 标记宿主页面板
   * @param {string} page - 页面文件名
   */
  markHostPanel(page) {
    const hostPanel = this.getDoc().getElementById('tab-panel-host');
    if (hostPanel) {
      hostPanel.dataset.tabPage = page;
      hostPanel.classList.add('tab-panel');
    }
  },

  /**
   * 恢复非宿主页签面板
   */
  restorePanels() {
    this.tabs.forEach(tab => {
      if (tab.isHost) return;
      if (!this.getPanel(tab.page)) {
        this.createIframePanel(tab.page);
      }
    });
  },

  /**
   * 获取页面 iframe 地址
   * @param {string} page - 页面文件名
   * @returns {string}
   */
  getPageUrl(page) {
    return `${page}?embed=1`;
  },

  /**
   * 获取页面板容器
   * @param {string} page - 页面文件名
   * @returns {HTMLElement|null}
   */
  getPanel(page) {
    return this.getDoc().querySelector(`#tab-panels [data-tab-page="${page}"]`);
  },

  /**
   * 创建 iframe 页面板
   * @param {string} page - 页面文件名
   */
  createIframePanel(page) {
    const doc = this.getDoc();
    const container = doc.getElementById('tab-panels');
    if (!container || this.getPanel(page)) return;

    const panel = doc.createElement('div');
    panel.dataset.tabPage = page;
    panel.className = 'tab-panel absolute inset-0 hidden';

    const iframe = doc.createElement('iframe');
    iframe.src = this.getPageUrl(page);
    iframe.className = 'w-full h-full border-0 bg-gray-100';
    iframe.title = this.getPageTitle(page);

    panel.appendChild(iframe);
    container.appendChild(panel);

    iframe.addEventListener('load', () => {
      if (this.activePage === page && typeof PrdSpec !== 'undefined') {
        PrdSpec.syncActive(page);
      }
    });
  },

  /**
   * 获取当前可用的 TabManager（iframe 嵌入页返回已初始化的父窗口实例）
   * @returns {typeof TabManager|null}
   */
  getActiveManager() {
    let win = window;
    while (win) {
      const mgr = win.TabManager;
      const doc = win.document;
      if (mgr?.hostPage && doc.getElementById('tab-panels')) {
        return mgr;
      }
      if (win === win.parent) break;
      win = win.parent;
    }
    return null;
  },

  /**
   * 打开或切换页签
   * @param {string} page - 页面文件名
   * @param {string} [title] - 页签标题
   * @param {{ reload?: boolean }} [options] - 打开选项
   */
  openTab(page, title, options = {}) {
    if (!page) return;

    const displayTitle = title || this.getPageTitle(page);
    let tab = this.tabs.find(item => item.page === page);

    if (!tab) {
      tab = { page, title: displayTitle, isHost: page === this.hostPage };
      this.tabs.push(tab);
    } else {
      tab.title = displayTitle;
    }

    const panel = this.getPanel(page);
    if (!panel && page !== this.hostPage) {
      this.createIframePanel(page);
    } else if (options.reload && panel) {
      const iframe = panel.querySelector('iframe');
      if (iframe) iframe.src = this.getPageUrl(page);
    }

    this.switchTab(page);
  },

  /**
   * 切换页签
   * @param {string} page - 页面文件名
   * @param {boolean} [save=true] - 是否保存状态
   */
  switchTab(page, save = true) {
    this.activePage = page;

    this.getDoc().querySelectorAll('#tab-panels .tab-panel').forEach(panel => {
      panel.classList.toggle('hidden', panel.dataset.tabPage !== page);
    });

    this.renderTabBar();
    this.updateSidebarActive(page);
    if (typeof PrdSpec !== 'undefined') {
      PrdSpec.syncActive(page);
    }
    if (save) this.saveState();
  },

  /**
   * 关闭页签
   * @param {string} page - 页面文件名
   */
  closeTab(page) {
    if (this.tabs.length <= 1) return;

    const index = this.tabs.findIndex(tab => tab.page === page);
    if (index === -1) return;

    const tab = this.tabs[index];
    const panel = this.getPanel(page);
    this.tabs.splice(index, 1);

    if (panel) {
      if (tab.isHost) {
        panel.classList.add('hidden');
      } else {
        panel.remove();
      }
    }

    if (this.activePage === page) {
      const nextTab = this.tabs[Math.max(0, index - 1)] || this.tabs[0];
      this.switchTab(nextTab.page);
      return;
    }

    this.renderTabBar();
    this.saveState();
  },

  /**
   * 渲染页签栏
   */
  renderTabBar() {
    const bar = this.getDoc().getElementById('page-tab-bar');
    if (!bar) return;

    bar.innerHTML = this.tabs.map(tab => {
      const active = tab.page === this.activePage;
      const activeCls = active
        ? 'bg-sky-50 border-sky-200 text-sky-700'
        : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50';
      const closeBtn = this.tabs.length > 1
        ? `<button type="button" class="page-tab-close opacity-40 hover:opacity-100 text-xs leading-none"
            data-close-page="${tab.page}">&times;</button>`
        : '';

      return `
        <div class="page-tab-item flex items-center gap-2 border rounded px-3 py-1 text-sm cursor-pointer ${activeCls}"
          data-tab-page="${tab.page}">
          <span class="page-tab-label whitespace-nowrap">${tab.title}</span>
          ${closeBtn}
        </div>
      `;
    }).join('');
  },

  /**
   * 绑定页签栏事件
   */
  bindTabBar() {
    const bar = this.getDoc().getElementById('page-tab-bar');
    if (!bar) return;

    bar.addEventListener('click', event => {
      const closeBtn = event.target.closest('[data-close-page]');
      if (closeBtn) {
        event.stopPropagation();
        this.closeTab(closeBtn.dataset.closePage);
        return;
      }

      const tabItem = event.target.closest('[data-tab-page]');
      if (tabItem) this.switchTab(tabItem.dataset.tabPage);
    });
  },

  /**
   * 绑定侧边栏导航为页签打开
   */
  bindSidebar() {
    this.getDoc().querySelectorAll('#sidebar a[href]').forEach(link => {
      link.addEventListener('click', event => {
        const href = link.getAttribute('href');
        if (!href || href === '#') return;

        const page = href.split('/').pop().split('?')[0];
        if (!page.endsWith('.html')) return;

        event.preventDefault();
        this.openTab(page, link.textContent.trim());
        if (page === this.hostPage) {
          this.getDoc().dispatchEvent(new CustomEvent('order-page-navigate'));
        }
      });
    });
  },

  /**
   * 更新侧边栏激活态
   * @param {string} page - 当前页面
   */
  updateSidebarActive(page) {
    const highlightPage = AppConfig.sidebarHighlightMap?.[page] || page;
    this.getDoc().querySelectorAll('#sidebar a[href]').forEach(link => {
      const href = link.getAttribute('href') || '';
      const linkPage = href.split('/').pop().split('?')[0];
      const isActive = linkPage === highlightPage;

      link.classList.toggle('bg-sky-600', isActive);
      link.classList.toggle('text-white', isActive);
      link.classList.toggle('text-gray-400', !isActive);
      link.classList.toggle('hover:text-white', !isActive);
      link.classList.toggle('hover:bg-slate-700', !isActive);
    });
  }
};
