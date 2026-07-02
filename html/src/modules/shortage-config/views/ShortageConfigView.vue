<template>
  <div class="page-panel">
    <SearchPanel
      v-model="search"
      :fields="shortageConfigSearchFields"
      :cols="3"
      label-width="4rem"
      @search="filterRows"
      @reset="resetSearch"
    />
    <div class="flex items-center gap-2 mb-4 shrink-0">
      <button type="button" class="px-4 py-1.5 bg-sky-600 text-white text-sm rounded hover:bg-sky-700" @click="openAdd">
        新增配置
      </button>
    </div>
    <DataTable
      :selectable="false"
      :columns="SHORTAGE_CONFIG_COLUMNS"
      :rows="pagedRows"
      :total="filteredRows.length"
      row-id-key="id"
      v-model:page="page"
      v-model:page-size="pageSize"
      :page-sizes="[10, 20, 50]"
      unit="条记录"
    >
      <template #header-created>
        <span class="inline-flex items-center gap-1">
          创建日期
          <svg class="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
          </svg>
        </span>
      </template>
      <template #cell-subscriber="{ row }">
        <button type="button" class="text-sky-600 hover:underline" @click="openView(row)">{{ row.subscriber }}</button>
      </template>
      <template #cell-status="{ row }">
        <span :class="SHORTAGE_CONFIG_STATUS_MAP[row.status]?.cls">
          {{ SHORTAGE_CONFIG_STATUS_MAP[row.status]?.text }}
        </span>
      </template>
      <template #cell-created="{ row }">
        <span class="whitespace-nowrap">{{ row.created }}</span>
      </template>
      <template #cell-actions="{ row }">
        <button type="button" class="text-sky-600 hover:underline" :class="{ 'mr-3': row.status !== 'active' }" @click="openEdit(row)">
          编辑
        </button>
        <button
          v-if="row.status !== 'active'"
          type="button"
          class="text-sky-600 hover:underline"
          @click="openDelete(row)"
        >
          删除
        </button>
      </template>
      <template #cell-sort="{ row }">
        <div class="flex flex-col items-center gap-0.5">
          <button
            type="button"
            class="leading-none"
            :class="canMoveUp(row) ? 'text-gray-400 hover:text-sky-600' : 'text-gray-200 cursor-not-allowed'"
            :disabled="!canMoveUp(row)"
            title="上移"
            @click="moveRow(row, 'up')"
          >
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
            </svg>
          </button>
          <button
            type="button"
            class="leading-none"
            :class="canMoveDown(row) ? 'text-gray-400 hover:text-sky-600' : 'text-gray-200 cursor-not-allowed'"
            :disabled="!canMoveDown(row)"
            title="下移"
            @click="moveRow(row, 'down')"
          >
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </template>
    </DataTable>

    <ShortageConfigFormModal
      :open="formOpen"
      :mode="formMode"
      :row="formRow"
      :rows="allRows"
      :readonly="viewOpen"
      @close="closeForm"
      @confirm="submitForm"
      @invalid="showToast(false)"
    />
    <ShortageConfigDeleteModal
      :open="deleteOpen"
      :row="deleteRow"
      @close="deleteOpen = false"
      @confirm="submitDelete"
    />
    <ShortageConfigToast v-model:show="toastShow" :success="toastSuccess" />
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import SearchPanel from '@/components/common/SearchPanel.vue';
import DataTable from '@/components/common/DataTable.vue';
import ShortageConfigFormModal from '@/modules/shortage-config/components/ShortageConfigFormModal.vue';
import ShortageConfigDeleteModal from '@/modules/shortage-config/components/ShortageConfigDeleteModal.vue';
import ShortageConfigToast from '@/modules/shortage-config/components/ShortageConfigToast.vue';
import {
  SHORTAGE_CONFIG_COLUMNS,
  SHORTAGE_CONFIG_STATUS_MAP,
  filterShortageConfigRows,
  moveShortageConfigRow,
  nowCreatedString,
  shortageConfigRows,
  shortageConfigSearchFields,
  sortShortageConfigRows
} from '@/modules/shortage-config/data/shortage-config-manage';

defineOptions({ name: 'ShortageConfigView' });

const allRows = ref(sortShortageConfigRows(shortageConfigRows.map(row => ({ ...row }))));
const filteredRows = ref([...allRows.value]);
const search = ref({});
const page = ref(1);
const pageSize = ref(50);

const formOpen = ref(false);
const formMode = ref('add');
const formRow = ref(null);
const viewOpen = ref(false);
const deleteOpen = ref(false);
const deleteRow = ref(null);

const toastShow = ref(false);
const toastSuccess = ref(true);

const pagedRows = computed(() => {
  const start = (page.value - 1) * pageSize.value;
  return filteredRows.value.slice(start, start + pageSize.value);
});

function showToast(success) {
  toastSuccess.value = success;
  toastShow.value = true;
}

function filterRows() {
  filteredRows.value = sortShortageConfigRows(filterShortageConfigRows(allRows.value, search.value));
  page.value = 1;
}

function resetSearch() {
  search.value = {};
  filteredRows.value = sortShortageConfigRows([...allRows.value]);
  page.value = 1;
}

function openAdd() {
  formMode.value = 'add';
  formRow.value = null;
  viewOpen.value = false;
  formOpen.value = true;
}

function openEdit(row) {
  formMode.value = 'edit';
  formRow.value = row;
  viewOpen.value = false;
  formOpen.value = true;
}

function openView(row) {
  formMode.value = 'edit';
  formRow.value = row;
  viewOpen.value = true;
  formOpen.value = true;
}

function closeForm() {
  formOpen.value = false;
  viewOpen.value = false;
}

function openDelete(row) {
  deleteRow.value = row;
  deleteOpen.value = true;
}

function submitForm(payload) {
  if (formMode.value === 'add') {
    const nextSort = allRows.value.reduce((max, row) => Math.max(max, row.sortOrder ?? 0), 0) + 1;
    allRows.value.push({
      ...payload,
      id: allRows.value.length ? Math.max(...allRows.value.map(r => r.id)) + 1 : 1,
      created: nowCreatedString(),
      sortOrder: nextSort
    });
  } else if (formRow.value) {
    Object.assign(formRow.value, payload);
  }
  allRows.value = sortShortageConfigRows(allRows.value);
  filterRows();
  closeForm();
  showToast(true);
}

function submitDelete() {
  if (!deleteRow.value) return;
  allRows.value = allRows.value.filter(row => row.id !== deleteRow.value.id);
  deleteOpen.value = false;
  filterRows();
  showToast(true);
}

function canMoveUp(row) {
  const sorted = sortShortageConfigRows(allRows.value);
  return sorted.findIndex(item => item.id === row.id) > 0;
}

function canMoveDown(row) {
  const sorted = sortShortageConfigRows(allRows.value);
  const index = sorted.findIndex(item => item.id === row.id);
  return index >= 0 && index < sorted.length - 1;
}

function moveRow(row, direction) {
  allRows.value = moveShortageConfigRow(allRows.value, row.id, direction);
  filterRows();
}
</script>
