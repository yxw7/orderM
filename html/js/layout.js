/**
 * 页面布局渲染模块
 */
const Layout = {
  /**
   * 是否为嵌入模式（iframe 内仅展示页面内容）
   * @returns {boolean}
   */
  isEmbedMode() {
    return new URLSearchParams(location.search).has('embed') || window.self !== window.top;
  },

  /**
   * 初始化页面布局
   * @param {Object} options - 布局配置
   * @param {string} options.pageTitle - 页面标题
   * @param {string} [options.activePage] - 当前激活页面文件名
   * @param {boolean} [options.isModal] - 是否为弹窗类页面
   */
  init(options) {
    if (options.isModal) return;
    if (this.isEmbedMode()) {
      this.initEmbed();
      return;
    }

    const root = document.getElementById('app-root');
    if (!root) return;

    root.innerHTML = `
      ${this.renderHeader()}
      <div class="flex flex-1 overflow-hidden">
        ${this.renderSidebar(options.activePage)}
        <main class="flex-1 flex flex-col overflow-hidden bg-gray-100">
          <div id="page-tab-bar" class="bg-white border-b border-gray-200 px-4 flex items-center gap-2 h-10 shrink-0 overflow-x-auto"></div>
          <div id="tab-panels" class="flex-1 overflow-hidden relative"></div>
        </main>
      </div>
    `;

    this.bindSidebarEvents();
    this.moveContentToMain();

    if (typeof TabManager !== 'undefined') {
      TabManager.initAfterLayout(options);
    }
  },

  /**
   * 嵌入模式：仅展示业务内容，供页签 iframe 加载
   */
  initEmbed() {
    const appRoot = document.getElementById('app-root');
    const content = document.getElementById('main-content');

    if (appRoot) appRoot.remove();
    if (content) {
      content.classList.remove('hidden');
      content.classList.add('h-full', 'overflow-auto');
    }

    document.body.classList.add('embed-mode');
    document.documentElement.classList.add('embed-mode');
  },

  /**
   * 将页面内容移入宿主页签面板
   */
  moveContentToMain() {
    const content = document.getElementById('main-content');
    const target = document.getElementById('tab-panels');
    if (!content || !target) return;

    const panel = document.createElement('div');
    panel.id = 'tab-panel-host';
    panel.dataset.tabPage = document.body.dataset.activePage || '';
    panel.className = 'tab-panel absolute inset-0 overflow-auto p-4';

    while (content.firstChild) {
      panel.appendChild(content.firstChild);
    }
    content.remove();
    target.appendChild(panel);
  },

  /**
   * 渲染顶部导航栏
   * @returns {string}
   */
  renderHeader() {
    return `
      <header class="h-12 bg-slate-900 flex items-center justify-between px-4 shrink-0 z-20">
        <div class="flex items-center gap-2">
          <div class="w-7 h-7 bg-sky-500 rounded flex items-center justify-center">
            <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
            </svg>
          </div>
          <span class="text-white font-medium text-sm">${AppConfig.appName}</span>
        </div>
        <div class="flex items-center gap-3 shrink-0">
          <div class="flex items-center gap-1 text-gray-300 text-xs">
            <span>当前机构</span>
            <span class="text-white">${AppConfig.institution}</span>
            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
            </svg>
          </div>
          <div class="w-8 h-8 rounded-full bg-slate-600 flex items-center justify-center">
            <svg class="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
            </svg>
          </div>
        </div>
      </header>
    `;
  },

  /**
   * 渲染侧边栏
   * @param {string} [activePage] - 当前页面
   * @returns {string}
   */
  renderSidebar(activePage) {
    const currentFile = activePage || location.pathname.split('/').pop();
    const highlightFile = AppConfig.sidebarHighlightMap?.[currentFile] || currentFile;
    const groups = AppConfig.sidebar.map(group => {
      const isExpanded = group.expanded || group.children.some(
        c => c.page === currentFile || c.page === highlightFile
      );
      const children = group.children.map(child => {
        const isActive = child.page === highlightFile;
        const href = child.page ? child.page : '#';
        return `
          <a href="${href}"
             class="block pl-10 pr-4 py-2 text-sm transition-colors
               ${isActive
                 ? 'bg-sky-600 text-white'
                 : 'text-gray-400 hover:text-white hover:bg-slate-700'}">
            ${child.label}
          </a>
        `;
      }).join('');

      return `
        <div class="sidebar-group" data-expanded="${isExpanded}">
          <button type="button"
            class="sidebar-toggle w-full flex items-center justify-between px-4 py-3 text-sm text-gray-200 hover:bg-slate-700 transition-colors">
            <span>${group.label}</span>
            <svg class="w-4 h-4 transition-transform sidebar-arrow ${isExpanded ? 'rotate-180' : ''}"
              fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
            </svg>
          </button>
          <div class="sidebar-children overflow-hidden transition-all ${isExpanded ? '' : 'max-h-0'}">
            ${children}
          </div>
        </div>
      `;
    }).join('');

    return `
      <div id="sidebar-wrapper" class="relative shrink-0 h-full">
        <aside id="sidebar" class="w-56 h-full bg-slate-800 flex flex-col overflow-y-auto transition-[width] duration-200">
          <div class="flex-1 py-2">${groups}</div>
          <button type="button" id="sidebar-collapse"
            class="p-3 border-t border-slate-700 text-gray-400 hover:text-white flex justify-center"
            title="收起菜单">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M11 19l-7-7 7-7m8 14l-7-7 7-7"/>
            </svg>
          </button>
        </aside>
        <button type="button" id="sidebar-expand"
          class="hidden absolute bottom-0 left-0 z-10 w-10 p-3 border-t border-slate-700 bg-slate-800 text-gray-400 hover:text-white hover:bg-slate-700 flex justify-center"
          title="展开菜单">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M13 5l7 7-7 7M5 5l7 7-7 7"/>
          </svg>
        </button>
      </div>
    `;
  },

  /** 绑定侧边栏折叠事件 */
  bindSidebarEvents() {
    document.querySelectorAll('.sidebar-toggle').forEach(btn => {
      btn.addEventListener('click', () => {
        const group = btn.closest('.sidebar-group');
        const children = group.querySelector('.sidebar-children');
        const arrow = group.querySelector('.sidebar-arrow');
        const expanded = group.dataset.expanded === 'true';
        group.dataset.expanded = expanded ? 'false' : 'true';
        children.classList.toggle('max-h-0', expanded);
        arrow.classList.toggle('rotate-180', !expanded);
      });
    });

    const collapseBtn = document.getElementById('sidebar-collapse');
    const expandBtn = document.getElementById('sidebar-expand');
    const sidebar = document.getElementById('sidebar');

    const setSidebarCollapsed = (collapsed) => {
      if (!sidebar) return;
      sidebar.classList.toggle('w-56', !collapsed);
      sidebar.classList.toggle('w-0', collapsed);
      sidebar.classList.toggle('overflow-hidden', collapsed);
      expandBtn?.classList.toggle('hidden', !collapsed);
    };

    collapseBtn?.addEventListener('click', () => setSidebarCollapsed(true));
    expandBtn?.addEventListener('click', () => setSidebarCollapsed(false));
  }
};
