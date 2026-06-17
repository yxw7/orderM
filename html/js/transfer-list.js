/**
 * 双栏穿梭选择组件
 */
const TransferList = {
  /** @type {Map<string, { allItems: string[], leftItems: string[], rightItems: string[], leftChecked: Set<string>, rightChecked: Set<string>, leftKeyword: string, rightKeyword: string }>} */
  instances: new Map(),

  /**
   * 初始化穿梭框
   * @param {HTMLElement} root - 根节点
   * @param {{ items?: string[], selected?: string[] }} [config] - 初始配置
   * @returns {string} 实例 ID
   */
  init(root, config = {}) {
    const id = root.dataset.transferId || `tf-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
    root.dataset.transferId = id;

    const allItems = [...new Set(config.items || [])];
    const selected = config.selected || [];
    const selectedSet = new Set(selected);
    const leftItems = allItems.filter(item => !selectedSet.has(item));
    const rightItems = selected.filter(item => allItems.includes(item));

    this.instances.set(id, {
      allItems,
      leftItems,
      rightItems,
      leftChecked: new Set(),
      rightChecked: new Set(),
      leftKeyword: '',
      rightKeyword: ''
    });

    root.innerHTML = `
      <div class="transfer-panel flex items-stretch gap-3 h-full min-h-0">
        <div class="flex-1 border border-gray-200 rounded flex flex-col min-w-0 min-h-0 overflow-hidden">
          <div class="flex items-center justify-between px-3 py-2 border-b border-gray-100 bg-gray-50 shrink-0">
            <label class="inline-flex items-center gap-2 text-sm text-gray-700 cursor-pointer select-none">
              <input type="checkbox" class="transfer-left-select-all rounded text-sky-600">
              <span>待选</span>
            </label>
            <span class="transfer-left-count text-xs text-gray-400"></span>
          </div>
          <div class="px-3 py-2 border-b border-gray-100 shrink-0">
            <div class="relative">
              <svg class="w-4 h-4 text-gray-400 absolute left-2 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
              </svg>
              <input type="text" class="transfer-left-search w-full border border-gray-300 rounded pl-8 pr-3 py-1.5 text-sm focus:outline-none focus:border-sky-500"
                placeholder="请输入搜索内容">
            </div>
          </div>
          <div class="transfer-left-list flex-1 min-h-0 overflow-y-auto py-1"></div>
        </div>

        <div class="flex flex-col items-center justify-center gap-2 shrink-0">
          <button type="button" class="transfer-to-right px-3 py-1.5 text-sm rounded border border-gray-300 text-gray-400 bg-gray-50 cursor-not-allowed" disabled>
            &gt; 加入右侧
          </button>
          <button type="button" class="transfer-to-left px-3 py-1.5 text-sm rounded border border-gray-300 text-gray-400 bg-gray-50 cursor-not-allowed" disabled>
            &lt; 加入左侧
          </button>
        </div>

        <div class="flex-1 border border-gray-200 rounded flex flex-col min-w-0 min-h-0 overflow-hidden">
          <div class="flex items-center justify-between px-3 py-2 border-b border-gray-100 bg-gray-50 shrink-0">
            <label class="inline-flex items-center gap-2 text-sm text-gray-700 cursor-pointer select-none">
              <input type="checkbox" class="transfer-right-select-all rounded text-sky-600">
              <span>已选</span>
            </label>
            <span class="transfer-right-count text-xs text-gray-400"></span>
          </div>
          <div class="px-3 py-2 border-b border-gray-100 shrink-0">
            <div class="relative">
              <svg class="w-4 h-4 text-gray-400 absolute left-2 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
              </svg>
              <input type="text" class="transfer-right-search w-full border border-gray-300 rounded pl-8 pr-3 py-1.5 text-sm focus:outline-none focus:border-sky-500"
                placeholder="请输入搜索内容">
            </div>
          </div>
          <div class="transfer-right-list flex-1 min-h-0 overflow-y-auto py-1"></div>
        </div>
      </div>`;

    this.render(id);
    this.bindEvents(root, id);
    return id;
  },

  /**
   * 绑定穿梭框事件
   * @param {HTMLElement} root - 根节点
   * @param {string} id - 实例 ID
   */
  bindEvents(root, id) {
    root.querySelector('.transfer-left-search')?.addEventListener('input', e => {
      const instance = this.instances.get(id);
      if (!instance) return;
      instance.leftKeyword = e.target.value.trim();
      instance.leftChecked.clear();
      this.render(id);
    });

    root.querySelector('.transfer-right-search')?.addEventListener('input', e => {
      const instance = this.instances.get(id);
      if (!instance) return;
      instance.rightKeyword = e.target.value.trim();
      instance.rightChecked.clear();
      this.render(id);
    });

    root.querySelector('.transfer-left-select-all')?.addEventListener('change', e => {
      const instance = this.instances.get(id);
      if (!instance) return;
      const visible = this.getVisibleItems(instance.leftItems, instance.leftKeyword);
      instance.leftChecked = e.target.checked ? new Set(visible) : new Set();
      this.render(id);
    });

    root.querySelector('.transfer-right-select-all')?.addEventListener('change', e => {
      const instance = this.instances.get(id);
      if (!instance) return;
      const visible = this.getVisibleItems(instance.rightItems, instance.rightKeyword);
      instance.rightChecked = e.target.checked ? new Set(visible) : new Set();
      this.render(id);
    });

    root.querySelector('.transfer-left-list')?.addEventListener('change', e => {
      const checkbox = e.target.closest('.transfer-item-checkbox');
      if (!checkbox || checkbox.dataset.side !== 'left') return;
      this.toggleChecked(id, 'left', checkbox.dataset.value, checkbox.checked);
    });

    root.querySelector('.transfer-right-list')?.addEventListener('change', e => {
      const checkbox = e.target.closest('.transfer-item-checkbox');
      if (!checkbox || checkbox.dataset.side !== 'right') return;
      this.toggleChecked(id, 'right', checkbox.dataset.value, checkbox.checked);
    });

    root.querySelector('.transfer-to-right')?.addEventListener('click', () => this.moveToRight(id));
    root.querySelector('.transfer-to-left')?.addEventListener('click', () => this.moveToLeft(id));
  },

  /**
   * 按关键词过滤列表项
   * @param {string[]} items - 列表项
   * @param {string} keyword - 搜索关键词
   * @returns {string[]}
   */
  getVisibleItems(items, keyword) {
    if (!keyword) return [...items];
    return items.filter(item => item.includes(keyword));
  },

  /**
   * 切换勾选状态
   * @param {string} id - 实例 ID
   * @param {'left'|'right'} side - 列表侧
   * @param {string} value - 选项值
   * @param {boolean} checked - 是否勾选
   */
  toggleChecked(id, side, value, checked) {
    const instance = this.instances.get(id);
    if (!instance) return;
    const checkedSet = side === 'left' ? instance.leftChecked : instance.rightChecked;
    if (checked) checkedSet.add(value);
    else checkedSet.delete(value);
    this.render(id);
  },

  /**
   * 将待选项移入已选
   * @param {string} id - 实例 ID
   */
  moveToRight(id) {
    const instance = this.instances.get(id);
    if (!instance || !instance.leftChecked.size) return;
    const moving = [...instance.leftChecked];
    instance.leftItems = instance.leftItems.filter(item => !instance.leftChecked.has(item));
    instance.rightItems = [...instance.rightItems, ...moving].sort((a, b) => a.localeCompare(b, 'zh-CN'));
    instance.leftChecked.clear();
    this.render(id);
  },

  /**
   * 将已选项移回待选
   * @param {string} id - 实例 ID
   */
  moveToLeft(id) {
    const instance = this.instances.get(id);
    if (!instance || !instance.rightChecked.size) return;
    const moving = [...instance.rightChecked];
    instance.rightItems = instance.rightItems.filter(item => !instance.rightChecked.has(item));
    instance.leftItems = [...instance.leftItems, ...moving].sort((a, b) => a.localeCompare(b, 'zh-CN'));
    instance.rightChecked.clear();
    this.render(id);
  },

  /**
   * 渲染穿梭框
   * @param {string} id - 实例 ID
   */
  render(id) {
    const instance = this.instances.get(id);
    const root = document.querySelector(`[data-transfer-id="${id}"]`);
    if (!instance || !root) return;

    const leftVisible = this.getVisibleItems(instance.leftItems, instance.leftKeyword);
    const rightVisible = this.getVisibleItems(instance.rightItems, instance.rightKeyword);

    const leftListEl = root.querySelector('.transfer-left-list');
    const rightListEl = root.querySelector('.transfer-right-list');
    const leftCountEl = root.querySelector('.transfer-left-count');
    const rightCountEl = root.querySelector('.transfer-right-count');
    const leftSelectAllEl = root.querySelector('.transfer-left-select-all');
    const rightSelectAllEl = root.querySelector('.transfer-right-select-all');
    const toRightBtn = root.querySelector('.transfer-to-right');
    const toLeftBtn = root.querySelector('.transfer-to-left');

    if (leftListEl) {
      leftListEl.innerHTML = leftVisible.length
        ? leftVisible.map(item => this.renderItem(item, 'left', instance.leftChecked.has(item))).join('')
        : `<div class="px-3 py-10 text-center text-sm text-gray-400">暂无数据</div>`;
    }

    if (rightListEl) {
      rightListEl.innerHTML = rightVisible.length
        ? rightVisible.map(item => this.renderItem(item, 'right', instance.rightChecked.has(item))).join('')
        : `<div class="px-3 py-10 text-center text-sm text-gray-400">
            <div class="text-3xl text-gray-300 mb-2">📄</div>
            暂无数据
          </div>`;
    }

    if (leftCountEl) leftCountEl.textContent = `${instance.leftChecked.size} / ${instance.leftItems.length} 项`;
    if (rightCountEl) rightCountEl.textContent = `${instance.rightChecked.size} / ${instance.rightItems.length} 项`;

    const leftAllChecked = leftVisible.length > 0 && leftVisible.every(item => instance.leftChecked.has(item));
    const rightAllChecked = rightVisible.length > 0 && rightVisible.every(item => instance.rightChecked.has(item));
    if (leftSelectAllEl) {
      leftSelectAllEl.checked = leftAllChecked;
      leftSelectAllEl.indeterminate = !leftAllChecked && leftVisible.some(item => instance.leftChecked.has(item));
    }
    if (rightSelectAllEl) {
      rightSelectAllEl.checked = rightAllChecked;
      rightSelectAllEl.indeterminate = !rightAllChecked && rightVisible.some(item => instance.rightChecked.has(item));
    }

    this.updateMoveButton(toRightBtn, instance.leftChecked.size > 0);
    this.updateMoveButton(toLeftBtn, instance.rightChecked.size > 0);
  },

  /**
   * 渲染列表项
   * @param {string} value - 选项值
   * @param {'left'|'right'} side - 列表侧
   * @param {boolean} checked - 是否勾选
   * @returns {string}
   */
  renderItem(value, side, checked) {
    return `
      <label class="flex items-center gap-2 px-3 py-1.5 hover:bg-gray-50 cursor-pointer select-none">
        <input type="checkbox" class="transfer-item-checkbox rounded text-sky-600"
          data-side="${side}" data-value="${value}" ${checked ? 'checked' : ''}>
        <span class="text-sm text-gray-700 truncate">${value}</span>
      </label>`;
  },

  /**
   * 更新穿梭按钮状态
   * @param {HTMLButtonElement|null} button - 按钮元素
   * @param {boolean} enabled - 是否可用
   */
  updateMoveButton(button, enabled) {
    if (!button) return;
    button.disabled = !enabled;
    button.classList.toggle('text-gray-400', !enabled);
    button.classList.toggle('bg-gray-50', !enabled);
    button.classList.toggle('cursor-not-allowed', !enabled);
    button.classList.toggle('text-sky-600', enabled);
    button.classList.toggle('bg-white', enabled);
    button.classList.toggle('hover:bg-sky-50', enabled);
  },

  /**
   * 获取已选列表
   * @param {string} id - 实例 ID
   * @returns {string[]}
   */
  getSelected(id) {
    return [...(this.instances.get(id)?.rightItems || [])];
  },

  /**
   * 设置已选列表
   * @param {string} id - 实例 ID
   * @param {string[]} selected - 已选值列表
   */
  setSelected(id, selected) {
    const instance = this.instances.get(id);
    if (!instance) return;
    const selectedSet = new Set(selected);
    instance.rightItems = selected.filter(item => instance.allItems.includes(item));
    instance.leftItems = instance.allItems.filter(item => !selectedSet.has(item));
    instance.leftChecked.clear();
    instance.rightChecked.clear();
    instance.leftKeyword = '';
    instance.rightKeyword = '';
    const root = document.querySelector(`[data-transfer-id="${id}"]`);
    const leftSearch = root?.querySelector('.transfer-left-search');
    const rightSearch = root?.querySelector('.transfer-right-search');
    if (leftSearch) leftSearch.value = '';
    if (rightSearch) rightSearch.value = '';
    this.render(id);
  },

  /**
   * 重置穿梭框
   * @param {string} id - 实例 ID
   */
  reset(id) {
    const instance = this.instances.get(id);
    if (!instance) return;
    this.setSelected(id, []);
  }
};
