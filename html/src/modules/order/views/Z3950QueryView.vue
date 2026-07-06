<template>
  <div class="page-panel">
    <nav class="flex items-center gap-2 mb-4 text-sm shrink-0">
      <RouterLink to="/bib-query" class="flex items-center gap-1 text-gray-500 hover:text-sky-600">
        <span>&lsaquo;</span> 书目查询
      </RouterLink>
      <span class="text-gray-400">/</span>
      <span class="text-gray-800">查Z3950 <span class="text-gray-600">（{{ serverLabel }}）</span></span>
    </nav>

    <div class="bg-white rounded border border-gray-200 flex flex-col flex-1 min-h-0 overflow-hidden">
      <div class="px-6 py-4 border-b border-gray-200 shrink-0">
        <div class="flex items-start justify-between gap-4">
          <div class="grid grid-cols-2 gap-x-8 gap-y-3 flex-1">
            <div v-for="(field, i) in searchFields" :key="i" class="flex items-center gap-2">
              <select v-model="field.type" class="border border-gray-300 rounded-l px-2 py-1.5 text-sm w-36 shrink-0">
                <option v-for="t in z3950FieldTypes" :key="t.value" :value="t.value">{{ t.label }}</option>
              </select>
              <input v-model="field.value" type="text" placeholder="请输入" class="flex-1 border border-gray-300 rounded-r px-3 py-1.5 text-sm -ml-px">
            </div>
          </div>
          <div class="flex items-center gap-2 shrink-0">
            <button type="button" class="px-5 py-1.5 bg-sky-600 text-white text-sm rounded hover:bg-sky-700" @click="filterRows">检索</button>
            <button type="button" class="px-5 py-1.5 border border-gray-300 text-gray-600 text-sm rounded hover:bg-gray-50" @click="resetSearch">重置</button>
          </div>
        </div>
      </div>

      <div class="flex items-center justify-end px-6 py-2 border-b border-gray-200 shrink-0">
        <button type="button" class="text-sm text-gray-500 hover:text-gray-700" @click="alertDemo('列设置')">列设置</button>
      </div>

      <DataTable
        :selectable="false"
        :columns="z3950Columns"
        :rows="pagedRows"
        :total="filteredRows.length"
        row-id-key="id"
        v-model:page="page"
        v-model:page-size="pageSize"
        :page-sizes="[5, 10, 20, 50]"
        unit="条记录"
      >
        <template #cell-title="{ row }">
          <span class="text-gray-900">{{ row.title }}</span>
        </template>
        <template #cell-actions>
          <button type="button" class="text-sky-600 hover:underline mr-2" @click="alertDemo('预览简编')">预览简编</button>
          <button type="button" class="text-sky-600 hover:underline" @click="alertDemo('下载详编')">下载详编</button>
        </template>
      </DataTable>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import DataTable from '@/components/common/DataTable.vue';
import { appConfig } from '@/config/app-config';
import { z3950Rows, z3950Columns, z3950FieldTypes } from '@/modules/order/data/z3950';

defineOptions({ name: 'Z3950QueryView' });

const allRows = ref([...z3950Rows]);
const filteredRows = ref([...z3950Rows]);
const page = ref(1);
const pageSize = ref(5);

const serverLabel = appConfig.z3950Servers.join('、');

const searchFields = ref([
  { type: 'isbn', value: '978-7-5302-2109-9' },
  { type: 'title', value: '' },
  { type: 'publisher', value: '' }
]);

const pagedRows = computed(() => {
  const start = (page.value - 1) * pageSize.value;
  return filteredRows.value.slice(start, start + pageSize.value);
});

function filterRows() {
  const isbn = searchFields.value.find(f => f.type === 'isbn' && f.value)?.value;
  filteredRows.value = allRows.value.filter(row => {
    if (isbn && !row.isbn.includes(isbn.replace(/-/g, '')) && !row.isbn.includes(isbn)) return false;
    const title = searchFields.value.find(f => f.type === 'title')?.value;
    if (title && !row.title.includes(title)) return false;
    return true;
  });
  page.value = 1;
}

function resetSearch() {
  searchFields.value = [{ type: 'isbn', value: '' }, { type: 'title', value: '' }, { type: 'publisher', value: '' }];
  filteredRows.value = [...allRows.value];
}

function alertDemo(action) {
  window.alert(`${action}功能为原型演示`);
}
</script>
