/**
 * 列表勾选与底部分页统计联动
 */
const ListSelectionSummary = {
  _listenerBound: false,

  /**
   * 格式化列表底部分页统计文案
   * @param {number} checkedCount - 已勾选数量
   * @param {number} totalCount - 总数量
   * @param {string} [unit='条'] - 数量单位
   * @returns {string}
   */
  formatText(checkedCount, totalCount, unit = '条') {
    if (checkedCount > 0) {
      return `已选中 ${checkedCount} ${unit} / 共 ${totalCount} ${unit}`;
    }
    return `共 ${totalCount} ${unit}`;
  },

  /**
   * 解析列表统计根容器
   * @param {HTMLElement} totalEl - 统计元素
   * @returns {ParentNode|null}
   */
  resolveRoot(totalEl) {
    const rootKey = totalEl.dataset.listSelectionRoot;
    if (rootKey) {
      return document.querySelector(`[data-list-selection-root="${rootKey}"]`);
    }
    return totalEl.closest('[data-list-selection-root]');
  },

  /**
   * 刷新列表底部分页统计
   * @param {HTMLElement|string|null} totalEl - 统计元素或元素 ID
   * @param {Object} [options] - 刷新配置
   * @param {number} [options.totalCount] - 总数量
   * @param {string} [options.checkboxSelector] - 行复选框选择器
   * @param {string} [options.unit] - 数量单位
   */
  refresh(totalEl, options = {}) {
    const el = typeof totalEl === 'string' ? document.getElementById(totalEl) : totalEl;
    if (!el) return;

    const root = this.resolveRoot(el);
    const checkboxSelector = options.checkboxSelector || el.dataset.listSelectionCheckbox;
    const unit = options.unit || el.dataset.listSelectionUnit || '条';

    let totalCount = options.totalCount;
    if (totalCount == null && el.dataset.listSelectionTotalCount) {
      totalCount = Number(el.dataset.listSelectionTotalCount);
    }

    let checkedCount = 0;
    let rowCount = 0;
    if (checkboxSelector && root) {
      const checkboxes = root.querySelectorAll(checkboxSelector);
      rowCount = checkboxes.length;
      checkedCount = root.querySelectorAll(`${checkboxSelector}:checked`).length;
    }

    if (totalCount == null || Number.isNaN(totalCount)) {
      totalCount = rowCount;
    }

    el.dataset.listSelectionTotalCount = String(totalCount);
    el.textContent = this.formatText(checkedCount, totalCount, unit);
  },

  /**
   * 绑定列表勾选统计
   * @param {HTMLElement|string} totalEl - 统计元素或元素 ID
   * @param {Object} [options] - 绑定配置
   */
  bind(totalEl, options = {}) {
    const el = typeof totalEl === 'string' ? document.getElementById(totalEl) : totalEl;
    if (!el) return;

    el.dataset.listSelectionTotal = 'true';
    if (options.checkboxSelector) el.dataset.listSelectionCheckbox = options.checkboxSelector;
    if (options.unit) el.dataset.listSelectionUnit = options.unit;
    if (options.root) el.dataset.listSelectionRoot = options.root;
    if (options.totalCount != null) {
      el.dataset.listSelectionTotalCount = String(options.totalCount);
    }

    this.ensureListener();
    this.refresh(el, options);
  },

  /**
   * 绑定全局复选框变更监听
   */
  ensureListener() {
    if (this._listenerBound) return;
    this._listenerBound = true;

    document.addEventListener('change', event => {
      if (!(event.target instanceof HTMLInputElement) || event.target.type !== 'checkbox') return;

      document.querySelectorAll('[data-list-selection-total]').forEach(totalEl => {
        const root = this.resolveRoot(totalEl);
        const checkboxSelector = totalEl.dataset.listSelectionCheckbox;
        if (!checkboxSelector || !root || !root.contains(event.target)) return;

        const isRowCheckbox = event.target.matches(checkboxSelector);
        const isHeaderCheckbox = Boolean(event.target.closest('thead'));
        if (isRowCheckbox || isHeaderCheckbox) {
          this.refresh(totalEl);
        }
      });
    });
  },

  /**
   * 初始化页面内已声明的列表统计元素
   */
  init() {
    this.ensureListener();
    document.querySelectorAll('[data-list-selection-total]').forEach(el => this.refresh(el));
  }
};

window.ListSelectionSummary = ListSelectionSummary;

/**
 * 公共交互逻辑
 */
const Common = {
  /**
   * 初始化页面公共交互
   */
  init() {
    this.initTabs();
    this.initModals();
    this.initDropdowns();
    this.initSearchToggle();
    this.initPagination();
    ListSelectionSummary.init();
  },

  /**
   * 切换指定页签
   * @param {HTMLElement} group - 页签组容器
   * @param {string} target - 页签标识
   */
  switchTab(group, target) {
    const tabs = group.querySelectorAll('[data-tab]');
    const panels = group.querySelectorAll('[data-tab-panel]');
    tabs.forEach(t => {
      const active = t.dataset.tab === target;
      t.classList.toggle('bg-sky-600', active);
      t.classList.toggle('text-white', active);
      t.classList.toggle('bg-white', !active);
      t.classList.toggle('text-gray-600', !active);
    });
    panels.forEach(p => {
      p.classList.toggle('hidden', p.dataset.tabPanel !== target);
    });
    if (group.dataset.tabHash !== 'false') {
      history.replaceState(null, '', `#${target}`);
    }
  },

  /**
   * 分段标签切换
   */
  initTabs() {
    document.querySelectorAll('[data-tab-group]').forEach(group => {
      const tabs = group.querySelectorAll('[data-tab]');
      tabs.forEach(tab => {
        tab.addEventListener('click', () => {
          this.switchTab(group, tab.dataset.tab);
        });
      });
      const hash = location.hash.replace('#', '');
      const defaultTab = group.dataset.defaultTab;
      const validTab = Array.from(tabs).some(t => t.dataset.tab === hash) ? hash : defaultTab;
      if (validTab) this.switchTab(group, validTab);
    });
  },

  /**
   * 弹窗开关
   */
  initModals() {
    document.querySelectorAll('[data-modal-open]').forEach(btn => {
      btn.addEventListener('click', () => {
        const modal = document.getElementById(btn.dataset.modalOpen);
        if (modal) modal.classList.remove('hidden');
      });
    });
    document.querySelectorAll('[data-modal-close]').forEach(btn => {
      btn.addEventListener('click', () => {
        const modal = btn.closest('[data-modal]');
        if (modal) modal.classList.add('hidden');
      });
    });
    document.querySelectorAll('[data-modal]').forEach(modal => {
      modal.addEventListener('click', e => {
        if (e.target === modal) modal.classList.add('hidden');
      });
    });
  },

  /**
   * 下拉菜单
   */
  initDropdowns() {
    document.querySelectorAll('[data-dropdown]').forEach(trigger => {
      trigger.addEventListener('click', e => {
        e.stopPropagation();
        const menu = trigger.nextElementSibling;
        if (menu) menu.classList.toggle('hidden');
      });
    });
    document.addEventListener('click', () => {
      document.querySelectorAll('[data-dropdown-menu]').forEach(m => m.classList.add('hidden'));
    });
  },

  /**
   * 检索区展开/收起
   */
  initSearchToggle() {
    const toggle = document.getElementById('search-expand-btn');
    const extra = document.getElementById('search-extra');
    if (!toggle || !extra) return;
    let expanded = false;
    toggle.addEventListener('click', () => {
      expanded = !expanded;
      extra.classList.toggle('hidden', !expanded);
      toggle.querySelector('svg').classList.toggle('rotate-180', expanded);
    });
  },

  /**
   * 分页控件
   */
  initPagination() {
    document.querySelectorAll('[data-page-btn]').forEach(btn => {
      btn.addEventListener('click', () => {
        const page = btn.dataset.pageBtn;
        const container = btn.closest('[data-pagination]');
        if (!container) return;
        container.querySelectorAll('[data-page-btn]').forEach(b => {
          b.classList.toggle('bg-sky-600', b.dataset.pageBtn === page);
          b.classList.toggle('text-white', b.dataset.pageBtn === page);
          b.classList.toggle('border-gray-300', b.dataset.pageBtn !== page);
        });
      });
    });
  },

  /**
   * 重置检索表单
   * @param {string} formId - 表单 ID
   */
  resetForm(formId) {
    const form = document.getElementById(formId);
    if (form) form.reset();
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const pageTitle = document.body.dataset.pageTitle || document.title;
  const isModal = document.body.dataset.isModal === 'true';
  const activePage = document.body.dataset.activePage || location.pathname.split('/').pop();

  if (Layout.isEmbedMode()) {
    Layout.initEmbed();
    Common.init();
    return;
  }

  Layout.init({ pageTitle, activePage, isModal });
  Common.init();
});
