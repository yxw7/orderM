/**
 * 多选标签下拉组件
 */
const MultiSelect = {
  /** @type {Map<string, { options: string[], selected: string[], placeholder: string }>} */
  instances: new Map(),

  /** @type {boolean} */
  globalClickBound: false,

  /**
   * 初始化多选组件
   * @param {HTMLElement} root - 带 data-multi-select 的根节点
   * @param {{ options?: string[], placeholder?: string, value?: string[] }} [config] - 初始配置
   * @returns {string} 实例 ID
   */
  init(root, config = {}) {
    const id = root.dataset.multiSelectId || `ms-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
    root.dataset.multiSelectId = id;

    const options = config.options || JSON.parse(root.dataset.options || '[]');
    const placeholder = config.placeholder || root.dataset.placeholder || '请选择';
    const selected = config.value || [];

    root.innerHTML = `
      <div class="multi-select-trigger min-h-[38px] border border-gray-300 rounded px-2 py-1.5 flex flex-wrap gap-1.5 items-center cursor-text focus-within:border-sky-500 bg-white">
        <div class="multi-select-tags flex flex-wrap gap-1.5"></div>
        <span class="multi-select-placeholder text-sm text-gray-400 px-1">${placeholder}</span>
        <span class="multi-select-arrow ml-auto text-gray-400 text-xs shrink-0 pr-1">▼</span>
      </div>
      <div class="multi-select-dropdown hidden absolute left-0 right-0 top-full mt-1 bg-white border border-gray-200 rounded shadow-lg z-20 max-h-48 overflow-auto">
        <ul class="multi-select-options py-1 text-sm"></ul>
      </div>`;

    this.instances.set(id, { options, selected: [...selected], placeholder });
    this.render(id);
    this.bindEvents(root, id);
    return id;
  },

  /**
   * 绑定组件事件
   * @param {HTMLElement} root - 根节点
   * @param {string} id - 实例 ID
   */
  bindEvents(root, id) {
    const trigger = root.querySelector('.multi-select-trigger');
    const dropdown = root.querySelector('.multi-select-dropdown');

    trigger?.addEventListener('click', e => {
      if (e.target.closest('.multi-select-tag-remove')) return;
      e.stopPropagation();
      const isOpen = !dropdown?.classList.contains('hidden');
      this.closeAll();
      if (!isOpen) dropdown?.classList.remove('hidden');
    });

    root.querySelector('.multi-select-tags')?.addEventListener('click', e => {
      const removeBtn = e.target.closest('.multi-select-tag-remove');
      if (!removeBtn) return;
      e.stopPropagation();
      const value = removeBtn.dataset.value;
      if (value) this.removeValue(id, value);
    });

    root.querySelector('.multi-select-options')?.addEventListener('click', e => {
      const optionBtn = e.target.closest('.multi-select-option');
      if (!optionBtn) return;
      e.stopPropagation();
      const value = optionBtn.dataset.value;
      if (value) this.addValue(id, value);
    });

    if (!this.globalClickBound) {
      document.addEventListener('click', () => this.closeAll());
      this.globalClickBound = true;
    }
  },

  /**
   * 关闭所有下拉
   */
  closeAll() {
    document.querySelectorAll('.multi-select-dropdown').forEach(el => el.classList.add('hidden'));
  },

  /**
   * 渲染标签与选项
   * @param {string} id - 实例 ID
   */
  render(id) {
    const instance = this.instances.get(id);
    const root = document.querySelector(`[data-multi-select-id="${id}"]`);
    if (!instance || !root) return;

    const tagsEl = root.querySelector('.multi-select-tags');
    const placeholderEl = root.querySelector('.multi-select-placeholder');
    const optionsEl = root.querySelector('.multi-select-options');
    const selectedSet = new Set(instance.selected);

    if (tagsEl) {
      tagsEl.innerHTML = instance.selected.map(value => `
        <span class="inline-flex items-center gap-1 bg-gray-50 border border-gray-200 rounded px-2 py-0.5 text-sm text-gray-700 max-w-full">
          <span class="truncate">${value}</span>
          <button type="button" class="multi-select-tag-remove text-gray-400 hover:text-gray-600 leading-none shrink-0"
            data-value="${value}">&times;</button>
        </span>`).join('');
    }

    placeholderEl?.classList.toggle('hidden', instance.selected.length > 0);

    if (optionsEl) {
      const available = instance.options.filter(opt => !selectedSet.has(opt));
      optionsEl.innerHTML = available.length
        ? available.map(opt => `
            <li>
              <button type="button" class="multi-select-option w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-50"
                data-value="${opt}">${opt}</button>
            </li>`).join('')
        : '<li class="px-3 py-2 text-gray-400">无可选项</li>';
    }
  },

  /**
   * 添加选中项
   * @param {string} id - 实例 ID
   * @param {string} value - 选项值
   */
  addValue(id, value) {
    const instance = this.instances.get(id);
    if (!instance || instance.selected.includes(value)) return;
    instance.selected.push(value);
    this.render(id);
    this.clearError(id);
  },

  /**
   * 移除选中项
   * @param {string} id - 实例 ID
   * @param {string} value - 选项值
   */
  removeValue(id, value) {
    const instance = this.instances.get(id);
    if (!instance) return;
    instance.selected = instance.selected.filter(item => item !== value);
    this.render(id);
  },

  /**
   * 获取选中值
   * @param {string} id - 实例 ID
   * @returns {string[]}
   */
  getValue(id) {
    return [...(this.instances.get(id)?.selected || [])];
  },

  /**
   * 设置选中值
   * @param {string} id - 实例 ID
   * @param {string[]} values - 选中值列表
   */
  setValue(id, values) {
    const instance = this.instances.get(id);
    if (!instance) return;
    instance.selected = values.filter(v => instance.options.includes(v));
    this.render(id);
  },

  /**
   * 重置组件
   * @param {string} id - 实例 ID
   */
  reset(id) {
    const instance = this.instances.get(id);
    if (!instance) return;
    instance.selected = [];
    this.render(id);
    this.clearError(id);
  },

  /**
   * 显示校验错误
   * @param {string} id - 实例 ID
   * @param {string} message - 错误提示
   */
  showError(id, message) {
    const root = document.querySelector(`[data-multi-select-id="${id}"]`);
    const errorEl = root?.parentElement?.querySelector('[data-multi-select-error]');
    if (!errorEl) return;
    errorEl.textContent = message;
    errorEl.classList.remove('hidden');
    root.querySelector('.multi-select-trigger')?.classList.add('border-red-500');
  },

  /**
   * 清除校验错误
   * @param {string} id - 实例 ID
   */
  clearError(id) {
    const root = document.querySelector(`[data-multi-select-id="${id}"]`);
    const errorEl = root?.parentElement?.querySelector('[data-multi-select-error]');
    if (!errorEl) return;
    errorEl.classList.add('hidden');
    root.querySelector('.multi-select-trigger')?.classList.remove('border-red-500');
  }
};
