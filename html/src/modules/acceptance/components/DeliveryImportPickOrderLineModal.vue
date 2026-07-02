<template>
  <div v-if="open" class="fixed inset-0 z-[120] flex items-center justify-center p-4">
    <div class="absolute inset-0 bg-black/40" @click="emit('close')" />
    <div class="relative bg-white rounded border border-gray-200 shadow-xl w-full max-w-4xl max-h-[85vh] flex flex-col">
      <div class="flex items-center justify-between px-5 py-4 border-b border-gray-200 shrink-0">
        <h3 class="text-base font-medium text-gray-800">选择订单行</h3>
        <button type="button" class="text-gray-400 hover:text-gray-600 text-xl leading-none" @click="emit('close')">&times;</button>
      </div>

      <div class="px-5 py-3 border-b border-gray-100 shrink-0">
        <form class="flex items-center gap-2 flex-wrap" @submit.prevent="applySearch">
          <select v-model="searchField" class="border border-gray-300 rounded px-3 py-1.5 text-sm min-w-[120px]">
            <option v-for="opt in searchFieldOptions" :key="opt.value" :value="opt.value">{{ opt.label }}</option>
          </select>
          <input
            v-model="keyword"
            type="text"
            placeholder="请输入关键词"
            class="flex-1 min-w-[160px] border border-gray-300 rounded px-3 py-1.5 text-sm"
          >
          <button type="submit" class="px-4 py-1.5 text-sm bg-sky-600 text-white rounded hover:bg-sky-700">检索</button>
        </form>
      </div>

      <div class="flex-1 overflow-auto px-5 py-3">
        <table class="w-full text-sm">
          <thead class="bg-gray-50 sticky top-0">
            <tr>
              <th class="px-2 py-2 w-10" />
              <th v-for="col in tableColumns" :key="col.key" class="px-2 py-2 text-left text-gray-600 font-medium whitespace-nowrap">
                {{ col.label }}
              </th>
            </tr>
          </thead>
          <tbody class="divide-y">
            <tr v-for="row in filteredRows" :key="row.orderLine" class="hover:bg-sky-50/50">
              <td class="px-2 py-2">
                <input
                  type="checkbox"
                  class="rounded"
                  :checked="selectedKeys.has(row.orderLine)"
                  @change="toggleRow(row)"
                >
              </td>
              <td v-for="col in tableColumns" :key="col.key" class="px-2 py-2 text-gray-700 whitespace-nowrap">
                {{ row[col.key] ?? '—' }}
              </td>
            </tr>
            <tr v-if="!filteredRows.length">
              <td :colspan="tableColumns.length + 1" class="px-2 py-8 text-center text-gray-400">暂无订单行</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="flex justify-end gap-2 px-5 py-4 border-t border-gray-200 shrink-0">
        <button type="button" class="px-5 py-1.5 text-sm border border-gray-300 rounded hover:bg-gray-50" @click="emit('close')">取消</button>
        <button type="button" class="px-5 py-1.5 text-sm bg-sky-600 text-white rounded hover:bg-sky-700" @click="confirm">确定</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue';

const props = defineProps({
  open: { type: Boolean, default: false },
  rows: { type: Array, default: () => [] },
  resourceType: { type: String, default: '纸质书' }
});

const emit = defineEmits(['close', 'confirm']);

const searchField = ref('orderLine');
const keyword = ref('');
const appliedKeyword = ref('');
const appliedField = ref('orderLine');
/** @type {import('vue').Ref<Set<string>>} */
const selectedKeys = ref(new Set());
/** @type {import('vue').Ref<object[]>} */
const selectedRows = ref([]);

const searchFieldOptions = [
  { value: 'orderLine', label: '订单行号' },
  { value: 'title', label: '正题名' },
  { value: 'isbn', label: 'ISBN' },
  { value: 'location', label: '馆址' }
];

const tableColumns = computed(() => {
  if (props.resourceType === '视听资料') {
    return [
      { key: 'orderLine', label: '订单行号' },
      { key: 'location', label: '馆址' },
      { key: 'title', label: '题名' },
      { key: 'isbn', label: 'ISBN' },
      { key: 'carrier', label: '载体' },
      { key: 'pendingSets', label: '待收套数' },
      { key: 'orderTime', label: '发订时间' }
    ];
  }
  return [
    { key: 'orderLine', label: '订单行号' },
    { key: 'location', label: '馆址' },
    { key: 'title', label: '正题名' },
    { key: 'isbn', label: 'ISBN' },
    { key: 'author', label: '作者' },
    { key: 'pendingSets', label: '待收套数' },
    { key: 'orderTime', label: '发订时间' }
  ];
});

const filteredRows = computed(() => {
  const kw = appliedKeyword.value.trim().toLowerCase();
  if (!kw) return props.rows;
  const field = appliedField.value;
  return props.rows.filter(row => {
    const val = String(row[field] ?? '').toLowerCase();
    if (field === 'isbn') {
      return val.includes(kw) || String(row.isrc || '').toLowerCase().includes(kw);
    }
    return val.includes(kw);
  });
});

watch(() => props.open, val => {
  if (!val) return;
  searchField.value = 'orderLine';
  keyword.value = '';
  appliedKeyword.value = '';
  appliedField.value = 'orderLine';
  selectedKeys.value = new Set();
  selectedRows.value = [];
});

function applySearch() {
  appliedKeyword.value = keyword.value;
  appliedField.value = searchField.value;
}

/**
 * @param {object} row
 */
function toggleRow(row) {
  const next = new Set(selectedKeys.value);
  if (next.has(row.orderLine)) {
    next.delete(row.orderLine);
    selectedRows.value = selectedRows.value.filter(r => r.orderLine !== row.orderLine);
  } else {
    next.add(row.orderLine);
    selectedRows.value.push(row);
  }
  selectedKeys.value = next;
}

function confirm() {
  if (!selectedRows.value.length) {
    window.alert('请至少选择一条订单行');
    return;
  }
  emit('confirm', [...selectedRows.value]);
  emit('close');
}
</script>
