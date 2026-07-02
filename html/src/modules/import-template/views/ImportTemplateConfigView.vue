<template>
  <div class="page-panel">
    <SearchPanel
      v-model="search"
      :fields="importTemplateSearchFields"
      :cols="4"
      label-width="7rem"
      @search="filterRows"
      @reset="resetSearch"
    />
    <div class="flex items-center gap-2 mb-4 shrink-0">
      <button type="button" class="px-4 py-1.5 bg-sky-600 text-white text-sm rounded hover:bg-sky-700" @click="openAdd">
        新增
      </button>
    </div>
    <DataTable
      :selectable="false"
      :columns="IMPORT_TEMPLATE_COLUMNS"
      :rows="pagedRows"
      :total="filteredRows.length"
      row-id-key="id"
      v-model:page="page"
      v-model:page-size="pageSize"
      :page-sizes="[10, 20, 50]"
      unit="条记录"
    >
      <template #cell-templateName="{ row }">
        <span class="block truncate max-w-[240px]" :title="row.templateName">{{ row.templateName }}</span>
      </template>
      <template #cell-subscribers="{ row }">
        <span class="block truncate max-w-[180px]" :title="formatSubscribers(row.subscribers)">
          {{ formatSubscribers(row.subscribers) }}
        </span>
      </template>
      <template #cell-status="{ row }">
        <span :class="IMPORT_TEMPLATE_STATUS_MAP[row.status]?.cls">
          {{ IMPORT_TEMPLATE_STATUS_MAP[row.status]?.text }}
        </span>
      </template>
      <template #cell-actions="{ row }">
        <button type="button" class="text-sky-600 hover:underline mr-2" @click="openEdit(row)">编辑</button>
        <button type="button" class="text-sky-600 hover:underline mr-2" @click="openFieldConfig(row)">字段配置</button>
        <button type="button" class="text-sky-600 hover:underline mr-2" @click="openDedup(row)">查重规则</button>
        <button
          v-if="row.status === 'active'"
          type="button"
          class="text-sky-600 hover:underline mr-2"
          @click="openStatusModal('disable', row)"
        >
          停用
        </button>
        <button
          v-else
          type="button"
          class="text-sky-600 hover:underline mr-2"
          @click="openStatusModal('enable', row)"
        >
          启用
        </button>
        <button type="button" class="text-red-500 hover:underline" @click="openStatusModal('delete', row)">删除</button>
      </template>
    </DataTable>

    <ImportTemplateFormModal
      :open="formOpen"
      :mode="formMode"
      :row="formRow"
      :existing-names="existingNames"
      :exclude-index="formExcludeIndex"
      @close="formOpen = false"
      @confirm="submitForm"
      @invalid="showToast(false)"
    />
    <ImportTemplateStatusModal
      :open="statusOpen"
      :action="statusAction"
      :row="statusRow"
      @close="statusOpen = false"
      @confirm="submitStatus"
    />
    <ImportTemplateFieldConfigModal
      :open="fieldOpen"
      :template="fieldTemplate"
      @close="fieldOpen = false"
      @confirm="submitFieldConfig"
      @toast="showToast"
    />
    <ImportTemplateDedupModal
      :open="dedupOpen"
      :template="dedupTemplate"
      @close="dedupOpen = false"
      @confirm="submitDedup"
    />
    <ImportTemplateToast v-model:show="toastShow" :success="toastSuccess" :message="toastMessage" />
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import SearchPanel from '@/components/common/SearchPanel.vue';
import DataTable from '@/components/common/DataTable.vue';
import ImportTemplateFormModal from '@/modules/import-template/components/ImportTemplateFormModal.vue';
import ImportTemplateStatusModal from '@/modules/import-template/components/ImportTemplateStatusModal.vue';
import ImportTemplateFieldConfigModal from '@/modules/import-template/components/ImportTemplateFieldConfigModal.vue';
import ImportTemplateDedupModal from '@/modules/import-template/components/ImportTemplateDedupModal.vue';
import ImportTemplateToast from '@/modules/import-template/components/ImportTemplateToast.vue';
import {
  IMPORT_TEMPLATE_COLUMNS,
  IMPORT_TEMPLATE_STATUS_MAP,
  filterImportTemplateRows,
  formatSubscribers,
  importTemplateRows,
  importTemplateSearchFields,
  syncTemplateFieldDedupFlags
} from '@/modules/import-template/data/import-template-manage';

defineOptions({ name: 'ImportTemplateConfigView' });

const allRows = ref(importTemplateRows.map(row => ({ ...row })));
const filteredRows = ref([...allRows.value]);
const search = ref({});
const page = ref(1);
const pageSize = ref(50);

const formOpen = ref(false);
const formMode = ref('add');
const formRow = ref(null);
const statusOpen = ref(false);
const statusAction = ref('disable');
const statusRow = ref(null);
const fieldOpen = ref(false);
const fieldTemplate = ref(null);
const dedupOpen = ref(false);
const dedupTemplate = ref(null);

const toastShow = ref(false);
const toastSuccess = ref(true);
const toastMessage = ref('');

const existingNames = computed(() => allRows.value.map(row => row.templateName));

const formExcludeIndex = computed(() => {
  if (formMode.value !== 'edit' || !formRow.value) return -1;
  return allRows.value.findIndex(row => row.id === formRow.value.id);
});

const pagedRows = computed(() => {
  const start = (page.value - 1) * pageSize.value;
  return filteredRows.value.slice(start, start + pageSize.value);
});

function showToast(success, message = '') {
  toastSuccess.value = success;
  toastMessage.value = message;
  toastShow.value = true;
}

function filterRows() {
  filteredRows.value = filterImportTemplateRows(allRows.value, search.value);
  page.value = 1;
}

function resetSearch() {
  search.value = {};
  filteredRows.value = [...allRows.value];
  page.value = 1;
}

function openAdd() {
  formMode.value = 'add';
  formRow.value = null;
  formOpen.value = true;
}

function openEdit(row) {
  formMode.value = 'edit';
  formRow.value = row;
  formOpen.value = true;
}

function openStatusModal(action, row) {
  statusAction.value = action;
  statusRow.value = row;
  statusOpen.value = true;
}

function openFieldConfig(row) {
  fieldTemplate.value = row;
  fieldOpen.value = true;
}

function openDedup(row) {
  dedupTemplate.value = row;
  dedupOpen.value = true;
}

function submitForm(payload) {
  if (!payload) return;
  if (formMode.value === 'add') {
    allRows.value.unshift({
      ...payload,
      id: allRows.value.length ? Math.max(...allRows.value.map(r => r.id)) + 1 : 1,
      created: new Date().toISOString().slice(0, 10)
    });
  } else if (formRow.value) {
    Object.assign(formRow.value, payload);
  }
  filterRows();
  formOpen.value = false;
  showToast(true);
}

function submitStatus() {
  if (!statusRow.value) return;
  if (statusAction.value === 'disable') {
    statusRow.value.status = 'inactive';
  } else if (statusAction.value === 'enable') {
    statusRow.value.status = 'active';
  } else if (statusAction.value === 'delete') {
    allRows.value = allRows.value.filter(row => row.id !== statusRow.value.id);
    filterRows();
  }
  statusOpen.value = false;
  showToast(true);
}

function submitFieldConfig() {
  fieldOpen.value = false;
  showToast(true);
}

function submitDedup(payload) {
  if (!dedupTemplate.value) return;
  dedupTemplate.value.dedupRule = { ...payload };
  syncTemplateFieldDedupFlags(dedupTemplate.value);
  dedupOpen.value = false;
  showToast(true);
}
</script>
