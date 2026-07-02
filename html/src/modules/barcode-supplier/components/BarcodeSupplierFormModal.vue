<template>
  <div v-if="open" class="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4" @click.self="emit('close')">
    <div class="bg-white rounded-lg shadow-xl w-full max-w-xl flex flex-col max-h-[90vh]" @click.stop>
      <div class="flex items-center justify-between px-6 py-4 border-b border-gray-200 shrink-0">
        <h2 class="text-base font-medium text-gray-800">{{ mode === 'edit' ? '编辑' : '新建' }}</h2>
        <button type="button" class="text-gray-400 hover:text-gray-600 text-xl leading-none" @click="emit('close')">&times;</button>
      </div>
      <form class="px-6 py-5 space-y-4 overflow-y-auto" @submit.prevent="submit">
        <div class="flex items-start gap-3">
          <label class="text-sm text-gray-600 w-28 text-right pt-2 shrink-0"><span class="text-red-500">*</span> 条码号类型</label>
          <div class="flex-1">
            <SearchSelect
              v-model="form.barcodeType"
              :options="BARCODE_TYPE_OPTIONS"
              :readonly="mode === 'edit'"
              :error="errors.barcodeType"
            />
          </div>
        </div>
        <div class="flex items-start gap-3">
          <label class="text-sm text-gray-600 w-28 text-right pt-2 shrink-0"><span class="text-red-500">*</span> 供应商名称</label>
          <div class="flex-1">
            <SearchSelect
              v-model="form.supplierName"
              :options="SUPPLIER_NAME_OPTIONS"
              :readonly="mode === 'edit'"
              :error="errors.supplierName"
              :get-label="item => item.name"
              :get-value="item => item.name"
            />
          </div>
        </div>
        <div class="flex items-start gap-3">
          <label class="text-sm text-gray-600 w-28 text-right pt-2 shrink-0"><span class="text-red-500">*</span> 条码号代码</label>
          <div class="flex-1 flex items-start gap-2">
            <div class="flex-1 min-w-0">
              <input
                v-model="form.barcodeCode"
                type="text"
                placeholder="请输入"
                autocomplete="off"
                class="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:border-sky-500"
                :class="errors.barcodeCode ? 'border-red-500' : 'border-gray-300'"
              >
              <p v-if="errors.barcodeCode" class="text-red-500 text-xs mt-1">{{ errors.barcodeCode }}</p>
            </div>
            <span class="text-orange-500 text-xs pt-2.5 shrink-0 whitespace-nowrap">多个用英文分号;隔开</span>
          </div>
        </div>
        <div class="flex items-start gap-3">
          <label class="text-sm text-gray-600 w-28 text-right pt-2 shrink-0"><span class="text-red-500">*</span> 状态</label>
          <div class="flex-1 pt-1">
            <StatusToggle v-model="form.statusEnabled" />
          </div>
        </div>
        <div class="flex items-start gap-3">
          <label class="text-sm text-gray-600 w-28 text-right pt-2 shrink-0">备注</label>
          <div class="flex-1">
            <textarea
              v-model="form.remark"
              rows="4"
              placeholder="请输入"
              class="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-sky-500 resize-none"
              :class="errors.remark ? 'border-red-500' : ''"
            />
            <p v-if="errors.remark" class="text-red-500 text-xs mt-1">{{ errors.remark }}</p>
          </div>
        </div>
      </form>
      <div class="flex justify-end gap-3 px-6 py-4 border-t border-gray-200 bg-gray-50 rounded-b-lg shrink-0">
        <button type="button" class="px-5 py-1.5 text-sm rounded border border-gray-300 text-gray-600 hover:bg-gray-50" @click="emit('close')">取消</button>
        <button type="button" class="px-5 py-1.5 text-sm rounded bg-sky-600 text-white hover:bg-sky-700" @click="submit">提交</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import SearchSelect from '@/modules/barcode-supplier/components/SearchSelect.vue';
import StatusToggle from '@/modules/import-template/components/StatusToggle.vue';
import {
  BARCODE_TYPE_OPTIONS,
  SUPPLIER_NAME_OPTIONS,
  rowToForm,
  validateBarcodeSupplierForm
} from '@/modules/barcode-supplier/data/barcode-supplier-manage';

const props = defineProps({
  open: { type: Boolean, default: false },
  mode: { type: String, default: 'add' },
  row: { type: Object, default: null },
  rows: { type: Array, default: () => [] }
});

const emit = defineEmits(['close', 'confirm', 'invalid']);

const form = ref(createEmptyForm());
const errors = ref({});

function createEmptyForm() {
  return {
    barcodeType: '',
    supplierName: '',
    barcodeCode: '',
    statusEnabled: true,
    remark: ''
  };
}

watch(() => props.open, open => {
  if (!open) return;
  errors.value = {};
  form.value = props.mode === 'edit' && props.row ? rowToForm(props.row) : createEmptyForm();
});

function submit() {
  const { valid, errors: nextErrors, codes } = validateBarcodeSupplierForm(
    form.value,
    props.rows,
    props.mode === 'edit' ? props.row?.id : null
  );
  errors.value = nextErrors;
  if (!valid) {
    emit('invalid');
    return;
  }
  emit('confirm', { ...form.value, codes });
}
</script>
