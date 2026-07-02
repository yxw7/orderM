<template>
  <div class="page-panel">
    <SearchPanel
      v-model="search"
      :fields="barcodeSupplierSearchFields"
      :cols="3"
      label-width="6rem"
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
      :columns="BARCODE_SUPPLIER_COLUMNS"
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
      <template #cell-status="{ row }">
        <span :class="BARCODE_SUPPLIER_STATUS_MAP[row.status]?.cls">
          {{ BARCODE_SUPPLIER_STATUS_MAP[row.status]?.text }}
        </span>
      </template>
      <template #cell-remark="{ row }">
        <button
          v-if="row.hasRemark"
          type="button"
          class="text-sky-600 hover:underline"
          :title="row.remark"
          @click="openRemark(row)"
        >
          查看
        </button>
        <span v-else class="text-gray-400">查看</span>
      </template>
      <template #cell-created="{ row }">
        <span class="whitespace-nowrap">{{ row.created }}</span>
      </template>
      <template #cell-actions="{ row }">
        <button type="button" class="text-sky-600 hover:underline mr-3" @click="openEdit(row)">编辑</button>
        <template v-if="row.status === 'active'">
          <button type="button" class="text-sky-600 hover:underline mr-3" @click="openStatusModal('disable', row)">停用</button>
          <button type="button" class="text-red-500 hover:underline" @click="openStatusModal('delete', row)">删除</button>
        </template>
        <template v-else>
          <button type="button" class="text-sky-600 hover:underline mr-3" @click="openStatusModal('enable', row)">启用</button>
          <button type="button" class="text-red-500 hover:underline" @click="openStatusModal('delete', row)">删除</button>
        </template>
      </template>
    </DataTable>

    <BarcodeSupplierFormModal
      :open="formOpen"
      :mode="formMode"
      :row="formRow"
      :rows="allRows"
      @close="formOpen = false"
      @confirm="submitForm"
      @invalid="showToast(false)"
    />
    <BarcodeSupplierStatusModal
      :open="statusOpen"
      :action="statusAction"
      :row="statusRow"
      @close="statusOpen = false"
      @confirm="submitStatus"
    />
    <BarcodeSupplierToast v-model:show="toastShow" :success="toastSuccess" :message="toastMessage" />

    <div v-if="remarkOpen" class="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4" @click.self="remarkOpen = false">
      <div class="bg-white rounded-lg shadow-xl w-full max-w-md" @click.stop>
        <div class="flex items-center justify-between px-6 py-4 border-b">
          <h2 class="text-base font-medium text-gray-800">备注</h2>
          <button type="button" class="text-gray-400 text-xl leading-none hover:text-gray-600" @click="remarkOpen = false">&times;</button>
        </div>
        <div class="px-6 py-5 text-sm text-gray-700 whitespace-pre-wrap">{{ remarkText }}</div>
        <div class="flex justify-end px-6 py-4 border-t bg-gray-50 rounded-b-lg">
          <button type="button" class="px-5 py-1.5 text-sm rounded bg-sky-600 text-white hover:bg-sky-700" @click="remarkOpen = false">确定</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import SearchPanel from '@/components/common/SearchPanel.vue';
import DataTable from '@/components/common/DataTable.vue';
import BarcodeSupplierFormModal from '@/modules/barcode-supplier/components/BarcodeSupplierFormModal.vue';
import BarcodeSupplierStatusModal from '@/modules/barcode-supplier/components/BarcodeSupplierStatusModal.vue';
import BarcodeSupplierToast from '@/modules/barcode-supplier/components/BarcodeSupplierToast.vue';
import {
  BARCODE_SUPPLIER_COLUMNS,
  BARCODE_SUPPLIER_STATUS_MAP,
  barcodeSupplierRows,
  barcodeSupplierSearchFields,
  buildBarcodeSupplierRowsFromForm,
  filterBarcodeSupplierRows
} from '@/modules/barcode-supplier/data/barcode-supplier-manage';

defineOptions({ name: 'BarcodeSupplierView' });

const allRows = ref(barcodeSupplierRows.map(row => ({ ...row })));
const filteredRows = ref([...allRows.value]);
const search = ref({});
const page = ref(1);
const pageSize = ref(20);

const formOpen = ref(false);
const formMode = ref('add');
const formRow = ref(null);
const statusOpen = ref(false);
const statusAction = ref('disable');
const statusRow = ref(null);
const remarkOpen = ref(false);
const remarkText = ref('');

const toastShow = ref(false);
const toastSuccess = ref(true);
const toastMessage = ref('');

const pagedRows = computed(() => {
  const start = (page.value - 1) * pageSize.value;
  return filteredRows.value.slice(start, start + pageSize.value);
});

function showToast(success, message = '') {
  toastSuccess.value = success;
  toastMessage.value = message;
  toastShow.value = true;
}

function nextId() {
  return allRows.value.length ? Math.max(...allRows.value.map(r => r.id)) + 1 : 1;
}

function filterRows() {
  filteredRows.value = filterBarcodeSupplierRows(allRows.value, search.value);
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

function openRemark(row) {
  remarkText.value = row.remark || '';
  remarkOpen.value = true;
}

function submitForm(form) {
  if (formMode.value === 'add') {
    const built = buildBarcodeSupplierRowsFromForm(form);
    built.forEach(item => {
      allRows.value.unshift({ ...item, id: nextId() });
    });
  } else if (formRow.value) {
    const built = buildBarcodeSupplierRowsFromForm(form, formRow.value);
    const [first, ...rest] = built;
    Object.assign(formRow.value, first);
    if (rest.length) {
      const index = allRows.value.findIndex(row => row.id === formRow.value.id);
      let id = nextId();
      rest.forEach((item, offset) => {
        allRows.value.splice(index + 1 + offset, 0, { ...item, id: id + offset });
      });
    }
  }
  filterRows();
  formOpen.value = false;
  showToast(true);
}

function submitStatus() {
  if (!statusRow.value) return;
  if (statusAction.value === 'disable') statusRow.value.status = 'inactive';
  else if (statusAction.value === 'enable') statusRow.value.status = 'active';
  else if (statusAction.value === 'delete') {
    allRows.value = allRows.value.filter(row => row.id !== statusRow.value.id);
    filterRows();
  }
  statusOpen.value = false;
  showToast(true);
}
</script>
