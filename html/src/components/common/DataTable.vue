<template>
  <div class="bg-white rounded border border-gray-200 flex flex-col flex-1 min-h-0">
    <div ref="scrollRef" class="table-area-scroll table-scroll">
      <table class="data-table w-full text-sm border-separate border-spacing-0">
        <thead class="data-table-head">
          <tr ref="headerRowRef">
            <th
              v-if="selectable"
              ref="selectHeaderRef"
              class="data-table-select-cell data-table-th sticky-pin-left"
              :class="{ 'sticky-pin-left-edge': !leftStickyColumns.length }"
            >
              <input type="checkbox" class="rounded" :checked="allChecked" @change="toggleAll">
            </th>
            <th
              v-for="col in columns"
              :key="col.key"
              :ref="el => setHeaderRef(col.key, el)"
              class="data-table-th px-3 py-2.5 text-left text-gray-600 font-medium whitespace-nowrap"
              :class="[col.minWidth, stickyHeaderClass(col)]"
              :style="stickyLeftStyle(col) || stickyRightStyle(col)"
            >
              <slot :name="`header-${col.key}`" :column="col">
                {{ col.label }}
              </slot>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(row, idx) in rows"
            :key="rowKey(row, idx)"
            class="group"
            :class="[
              rowSelectable(row)
                ? (selectOnRowClick ? 'cursor-pointer' : '')
                : 'opacity-50 cursor-not-allowed'
            ]"
            @click="onRowClick(row)"
          >
            <td
              v-if="selectable"
              class="data-table-select-cell data-table-td sticky-pin-left"
              :class="[rowCellClass(row), { 'sticky-pin-left-edge': !leftStickyColumns.length }]"
              @click.stop
            >
              <input
                type="checkbox"
                class="rounded"
                :checked="isChecked(row)"
                :disabled="!rowSelectable(row)"
                @change="toggleRow(row, $event.target.checked)"
              >
            </td>
            <td
              v-for="col in columns"
              :key="col.key"
              class="data-table-td px-3 py-2"
              :class="[
                col.minWidth,
                stickyCellClass(col),
                col.stickyLeft || col.sticky ? 'whitespace-nowrap' : (cellNowrap ? 'whitespace-nowrap' : ''),
                rowCellClass(row, col)
              ]"
              :style="stickyLeftStyle(col) || stickyRightStyle(col)"
            >
              <slot :name="`cell-${col.key}`" :row="row" :value="row[col.key]">
                <span v-if="col.type === 'status'" :class="col.statusClass?.(row[col.key])">
                  {{ col.format ? col.format(row[col.key], row) : row[col.key] }}
                </span>
                <span v-else>{{ col.format ? col.format(row[col.key], row) : (row[col.key] ?? '—') }}</span>
              </slot>
            </td>
          </tr>
          <tr v-if="!rows.length">
            <td :colspan="columns.length + (selectable ? 1 : 0)" class="data-table-td px-3 py-8 text-center text-gray-400">
              {{ emptyText }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <PaginationBar
      v-if="showPagination"
      :total="total"
      :checked-count="checkedCount"
      :unit="unit"
      v-model:page="currentPage"
      v-model:page-size="currentPageSize"
      :page-sizes="pageSizes"
    />
  </div>
</template>

<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue';
import PaginationBar from './PaginationBar.vue';

const props = defineProps({
  columns: { type: Array, required: true },
  rows: { type: Array, default: () => [] },
  total: { type: Number, default: 0 },
  selectable: { type: Boolean, default: true },
  selectedKeys: { type: Array, default: () => [] },
  rowIdKey: { type: String, default: 'id' },
  unit: { type: String, default: '条' },
  page: { type: Number, default: 1 },
  pageSize: { type: Number, default: 10 },
  pageSizes: { type: Array, default: () => [10, 20, 50] },
  highlightSelected: { type: Boolean, default: false },
  emptyText: { type: String, default: '暂无数据' },
  showPagination: { type: Boolean, default: true },
  isRowSelectable: { type: Function, default: null },
  cellNowrap: { type: Boolean, default: false },
  selectOnRowClick: { type: Boolean, default: true }
});

const emit = defineEmits(['update:selectedKeys', 'update:page', 'update:pageSize', 'row-click']);

const scrollRef = ref(null);
const headerRowRef = ref(null);
const selectHeaderRef = ref(null);
const headerRefs = ref({});
const leftOffsets = ref({});
const rightOffsets = ref({});

let resizeObserver = null;

const currentPage = computed({
  get: () => props.page,
  set: v => emit('update:page', v)
});

const currentPageSize = computed({
  get: () => props.pageSize,
  set: v => emit('update:pageSize', v)
});

const checkedCount = computed(() => props.selectedKeys.length);

const selectableRows = computed(() =>
  props.isRowSelectable ? props.rows.filter(r => props.isRowSelectable(r)) : props.rows
);

const allChecked = computed(() => {
  const rows = selectableRows.value;
  return rows.length > 0 && rows.every(r => props.selectedKeys.includes(r[props.rowIdKey]));
});

const leftStickyColumns = computed(() => props.columns.filter(col => col.stickyLeft));
const rightStickyColumns = computed(() => props.columns.filter(col => col.sticky));

function setHeaderRef(key, el) {
  if (el) headerRefs.value[key] = el;
  else delete headerRefs.value[key];
}

function isLastLeftSticky(col) {
  const items = leftStickyColumns.value;
  return items.length > 0 && items[items.length - 1].key === col.key;
}

function isFirstRightSticky(col) {
  const items = rightStickyColumns.value;
  return items.length > 0 && items[0].key === col.key;
}

function stickyHeaderClass(col) {
  const classes = [];
  if (col.stickyLeft) {
    classes.push('sticky-pin-left', 'sticky-pin-head');
    if (isLastLeftSticky(col)) classes.push('sticky-pin-left-edge');
  }
  if (col.sticky) {
    classes.push('sticky-pin-right', 'sticky-pin-head');
    if (isFirstRightSticky(col)) classes.push('sticky-pin-right-edge');
  }
  return classes;
}

function stickyCellClass(col) {
  const classes = [];
  if (col.stickyLeft) {
    classes.push('sticky-pin-left', 'sticky-pin-body-cell');
    if (isLastLeftSticky(col)) classes.push('sticky-pin-left-edge');
  }
  if (col.sticky) {
    classes.push('sticky-pin-right', 'sticky-pin-body-cell');
    if (isFirstRightSticky(col)) classes.push('sticky-pin-right-edge');
  }
  return classes;
}

function rowCellClass(row, col = null) {
  const pinned = !col || col.stickyLeft || col.sticky;
  const selected = props.highlightSelected && isChecked(row);

  if (pinned) {
    return selected ? 'sticky-pin-selected' : 'sticky-pin-body';
  }
  if (selected) return 'data-table-cell-selected';
  return 'data-table-cell-normal';
}

function stickyLeftStyle(col) {
  if (!col.stickyLeft) return undefined;
  const left = leftOffsets.value[col.key];
  return left === undefined ? undefined : { left: `${left}px` };
}

function stickyRightStyle(col) {
  if (!col.sticky) return undefined;
  const right = rightOffsets.value[col.key];
  return right === undefined ? undefined : { right: `${right}px` };
}

function measureStickyOffsets() {
  const row = headerRowRef.value;
  if (!row) return;

  const selectWidth = props.selectable ? (selectHeaderRef.value?.offsetWidth ?? 0) : 0;
  let leftCursor = selectWidth;
  const nextLeftOffsets = {};

  for (const col of props.columns) {
    if (col.stickyLeft) {
      nextLeftOffsets[col.key] = leftCursor;
    }
    const headerCell = headerRefs.value[col.key];
    leftCursor += headerCell?.offsetWidth ?? 0;
  }

  let rightCursor = 0;
  const nextRightOffsets = {};
  for (let i = props.columns.length - 1; i >= 0; i--) {
    const col = props.columns[i];
    if (col.sticky) {
      nextRightOffsets[col.key] = rightCursor;
    }
    const headerCell = headerRefs.value[col.key];
    rightCursor += headerCell?.offsetWidth ?? 0;
  }

  leftOffsets.value = nextLeftOffsets;
  rightOffsets.value = nextRightOffsets;
}

async function scheduleMeasure() {
  await nextTick();
  measureStickyOffsets();
}

function rowKey(row, idx) {
  return row[props.rowIdKey] ?? idx;
}

function isChecked(row) {
  return props.selectedKeys.includes(row[props.rowIdKey]);
}

function rowSelectable(row) {
  return !props.isRowSelectable || props.isRowSelectable(row);
}

function toggleRow(row, checked) {
  if (!rowSelectable(row)) return;
  const id = row[props.rowIdKey];
  const keys = new Set(props.selectedKeys);
  if (checked) keys.add(id);
  else keys.delete(id);
  emit('update:selectedKeys', [...keys]);
}

function toggleAll(event) {
  if (event.target.checked) {
    emit('update:selectedKeys', selectableRows.value.map(r => r[props.rowIdKey]));
  } else {
    emit('update:selectedKeys', []);
  }
}

function onRowClick(row) {
  emit('row-click', row);
  if (props.selectable && props.selectOnRowClick && rowSelectable(row)) {
    toggleRow(row, !isChecked(row));
  }
}

watch(
  () => [props.columns, props.selectable, props.rows.length],
  () => scheduleMeasure(),
  { deep: true }
);

onMounted(() => {
  scheduleMeasure();
  if (typeof ResizeObserver !== 'undefined' && scrollRef.value) {
    resizeObserver = new ResizeObserver(() => measureStickyOffsets());
    resizeObserver.observe(scrollRef.value);
  }
  window.addEventListener('resize', measureStickyOffsets);
});

onBeforeUnmount(() => {
  resizeObserver?.disconnect();
  window.removeEventListener('resize', measureStickyOffsets);
});
</script>

<style scoped>
.table-area-scroll {
  isolation: isolate;
}

.data-table-head {
  position: sticky;
  top: 0;
  z-index: 20;
}

.data-table-th {
  background-color: #f9fafb;
  border-bottom: 1px solid #e5e7eb;
}

.data-table-td {
  border-bottom: 1px solid #f3f4f6;
}

.data-table-select-cell {
  position: sticky;
  left: 0;
  z-index: 35;
  box-sizing: border-box;
  padding: 0.5rem 0.75rem;
  text-align: left;
  background-color: #fff;
}

.data-table-head .data-table-select-cell {
  z-index: 45;
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;
  background-color: #f9fafb;
}

.data-table-cell-normal {
  background-color: #fff;
}

.group:hover .data-table-cell-normal {
  background-color: #f9fafb;
}

.data-table-cell-selected {
  background-color: #fef9c3;
}

:deep(.sticky-pin-left),
:deep(.sticky-pin-right) {
  position: sticky;
  box-sizing: border-box;
}

:deep(.sticky-pin-head) {
  z-index: 40;
  background-color: #f9fafb !important;
}

:deep(.sticky-pin-body-cell) {
  z-index: 30;
  background-color: #fff !important;
}

:deep(.sticky-pin-body) {
  background-color: #fff !important;
}

:deep(.group:hover .sticky-pin-body) {
  background-color: #f9fafb !important;
}

:deep(.group:hover .sticky-pin-body-cell) {
  background-color: #f9fafb !important;
}

:deep(.sticky-pin-selected) {
  background-color: #fef9c3 !important;
}

:deep(.sticky-pin-left-edge) {
  border-right: 1px solid #e5e7eb;
  box-shadow: 6px 0 8px -6px rgba(15, 23, 42, 0.12);
}

:deep(.sticky-pin-right-edge) {
  border-left: 1px solid #e5e7eb;
  box-shadow: -6px 0 8px -6px rgba(15, 23, 42, 0.12);
}
</style>
