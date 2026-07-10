import { computed, ref, watch } from 'vue';

export const PIN_NONE = 'none';
export const PIN_LEFT = 'left';
export const PIN_RIGHT = 'right';

/**
 * 初始化列配置
 * @param {Array} defaultColumns
 * @returns {Array}
 */
export function createColumnConfig(defaultColumns) {
  return rebuildColumnOrder(defaultColumns.map(col => normalizeColumn(col)));
}

/**
 * @param {object} def
 * @param {object|null} saved
 * @returns {object}
 */
function normalizeColumn(def, saved = null) {
  const defaultPin = def.pin || (def.key === 'actions' ? PIN_RIGHT : PIN_NONE);
  return {
    ...def,
    visible: saved ? saved.visible !== false : def.visible !== false,
    pin: saved?.pin ?? defaultPin
  };
}

/**
 * 按固定位置重排列顺序：左固定 → 不固定 → 右固定
 * @param {Array} columns
 * @returns {Array}
 */
export function rebuildColumnOrder(columns) {
  const left = columns.filter(col => col.pin === PIN_LEFT);
  const none = columns.filter(col => col.pin === PIN_NONE || !col.pin);
  const right = columns.filter(col => col.pin === PIN_RIGHT);
  return [...left, ...none, ...right];
}

/**
 * 合并已保存列配置与默认列定义
 * @param {Array} defaultColumns
 * @param {Array|null} savedItems
 * @returns {Array}
 */
export function mergeColumnConfig(defaultColumns, savedItems) {
  if (!Array.isArray(savedItems) || !savedItems.length) {
    return createColumnConfig(defaultColumns);
  }

  const defMap = new Map(defaultColumns.map(col => [col.key, col]));
  const merged = [];
  const used = new Set();

  savedItems.forEach(item => {
    const def = defMap.get(item.key);
    if (!def) return;
    merged.push(normalizeColumn(def, item));
    used.add(item.key);
  });

  defaultColumns.forEach(def => {
    if (!used.has(def.key)) merged.push(normalizeColumn(def));
  });

  return rebuildColumnOrder(merged);
}

/**
 * @param {Array} columns
 * @returns {Array<{ key: string, visible: boolean, pin: string }>}
 */
function serializeColumnConfig(columns) {
  return columns.map(col => ({
    key: col.key,
    visible: col.visible !== false,
    pin: col.pin || PIN_NONE
  }));
}

/**
 * @param {string} storageKey
 * @param {Array} defaultColumns
 * @returns {Array}
 */
export function loadColumnConfig(storageKey, defaultColumns) {
  try {
    const raw = localStorage.getItem(storageKey);
    if (!raw) return createColumnConfig(defaultColumns);
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed) && parsed.length && parsed[0].pin === undefined && parsed[0].visible !== undefined) {
      return mergeColumnConfig(
        defaultColumns,
        parsed.map(item => ({ ...item, pin: PIN_NONE }))
      );
    }
    return mergeColumnConfig(defaultColumns, parsed);
  } catch {
    return createColumnConfig(defaultColumns);
  }
}

/**
 * 转为表格渲染列（含 sticky 标记）
 * @param {object} col
 * @returns {object}
 */
function toTableColumn(col) {
  return {
    ...col,
    sticky: col.pin === PIN_RIGHT,
    stickyLeft: col.pin === PIN_LEFT
  };
}

/**
 * 列展示配置 composable
 * @param {string} storageKey
 * @param {Array} defaultColumns
 */
export function useColumnDisplay(storageKey, defaultColumns) {
  const columnConfig = ref(loadColumnConfig(storageKey, defaultColumns));

  const leftPinnedColumns = computed(() => columnConfig.value.filter(col => col.pin === PIN_LEFT));
  const unpinnedColumns = computed(() => columnConfig.value.filter(col => col.pin === PIN_NONE || !col.pin));
  const rightPinnedColumns = computed(() => columnConfig.value.filter(col => col.pin === PIN_RIGHT));

  const visibleColumns = computed(() =>
    columnConfig.value.filter(col => col.visible).map(toTableColumn)
  );

  const selectAllChecked = computed(() =>
    columnConfig.value.length > 0 && columnConfig.value.every(col => col.visible)
  );

  const selectAllIndeterminate = computed(() => {
    const visibleCount = columnConfig.value.filter(col => col.visible).length;
    return visibleCount > 0 && visibleCount < columnConfig.value.length;
  });

  watch(
    columnConfig,
    val => {
      localStorage.setItem(storageKey, JSON.stringify(serializeColumnConfig(val)));
    },
    { deep: true }
  );

  function resetColumns() {
    columnConfig.value = createColumnConfig(defaultColumns);
    localStorage.setItem(storageKey, JSON.stringify(serializeColumnConfig(columnConfig.value)));
  }

  function toggleAllColumns(checked) {
    columnConfig.value.forEach(col => {
      col.visible = checked;
    });
  }

  /**
   * @param {'left'|'none'|'right'} section
   * @param {number} fromIndex
   * @param {number} toIndex
   */
  function moveColumn(section, fromIndex, toIndex) {
    if (fromIndex === toIndex || fromIndex < 0 || toIndex < 0) return;

    const sectionMap = {
      left: leftPinnedColumns,
      none: unpinnedColumns,
      right: rightPinnedColumns
    };
    const items = [...sectionMap[section].value];
    if (fromIndex >= items.length || toIndex >= items.length) return;

    const [moved] = items.splice(fromIndex, 1);
    items.splice(toIndex, 0, moved);

    const otherSections = {
      left: section === 'left' ? items : leftPinnedColumns.value,
      none: section === 'none' ? items : unpinnedColumns.value,
      right: section === 'right' ? items : rightPinnedColumns.value
    };
    columnConfig.value = rebuildColumnOrder([
      ...otherSections.left,
      ...otherSections.none,
      ...otherSections.right
    ]);
  }

  /**
   * @param {string} key
   * @param {'none'|'left'|'right'} pin
   */
  function setColumnPin(key, pin) {
    const target = columnConfig.value.find(col => col.key === key);
    if (!target || target.pin === pin) return;

    target.pin = pin;
    const rest = columnConfig.value.filter(col => col.key !== key);
    columnConfig.value = rebuildColumnOrder([...rest, { ...target }]);
  }

  return {
    columnConfig,
    leftPinnedColumns,
    unpinnedColumns,
    rightPinnedColumns,
    visibleColumns,
    selectAllChecked,
    selectAllIndeterminate,
    resetColumns,
    toggleAllColumns,
    moveColumn,
    setColumnPin
  };
}
