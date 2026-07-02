<template>
  <div class="bg-white rounded border border-gray-200 flex flex-col flex-1 min-h-0">
    <div class="table-area-scroll table-scroll">
      <table class="w-full text-sm">
        <thead class="bg-gray-50 border-b border-gray-200 sticky top-0 z-10">
          <tr>
            <th v-if="selectable" class="px-3 py-2.5 text-left w-10 bg-gray-50">
              <input type="checkbox" class="rounded" :checked="allChecked" @change="toggleAll">
            </th>
            <th
              v-for="col in columns"
              :key="col.key"
              class="px-3 py-2.5 text-left text-gray-600 font-medium whitespace-nowrap bg-gray-50"
              :class="[col.minWidth, col.sticky ? 'sticky right-0 z-20' : '']"
            >
              <slot :name="`header-${col.key}`" :column="col">
                {{ col.label }}
              </slot>
            </th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-100">
          <tr
            v-for="(row, idx) in rows"
            :key="rowKey(row, idx)"
            class="hover:bg-gray-50"
            :class="[
              rowSelectable(row) ? 'cursor-pointer' : 'opacity-50 cursor-not-allowed',
              { 'bg-yellow-100': highlightSelected && isChecked(row) }
            ]"
            @click="onRowClick(row)"
          >
            <td v-if="selectable" class="px-3 py-2" @click.stop>
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
              class="px-3 py-2"
              :class="[
                col.minWidth,
                col.sticky ? 'sticky right-0 whitespace-nowrap' : '',
                highlightSelected && isChecked(row) ? 'bg-yellow-100' : (col.sticky ? 'bg-white' : '')
              ]"
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
            <td :colspan="columns.length + (selectable ? 1 : 0)" class="px-3 py-8 text-center text-gray-400">
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
import { computed } from 'vue';
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
  isRowSelectable: { type: Function, default: null }
});

const emit = defineEmits(['update:selectedKeys', 'update:page', 'update:pageSize', 'row-click']);

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
  if (props.selectable && rowSelectable(row)) {
    toggleRow(row, !isChecked(row));
  }
}
</script>
