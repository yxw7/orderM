<template>
  <FormModal
    v-if="open"
    :title="mode === 'add' ? '新增验收单' : '编辑验收单'"
    width-class="w-full max-w-2xl max-h-[90vh]"
    body-class="space-y-4 overflow-y-auto"
    @close="emit('close')"
    @confirm="submit"
  >
    <div class="flex items-start gap-3">
      <label class="text-sm text-gray-600 w-36 text-right pt-2 shrink-0"><span class="text-red-500">*</span> 验收单名称</label>
      <input v-model="form.name" type="text" placeholder="请输入验收单名称" class="flex-1 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-sky-500">
    </div>
    <div class="flex items-start gap-3">
      <label class="text-sm text-gray-600 w-36 text-right pt-2 shrink-0"><span class="text-red-500">*</span> 资源类型</label>
      <select v-model="form.resourceType" :disabled="lockCoreFields" class="flex-1 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-sky-500 disabled:bg-gray-100 disabled:text-gray-500">
        <option value="">请选择资源类型</option>
        <option v-for="opt in ACCEPTANCE_RESOURCE_TYPES" :key="opt" :value="opt">{{ opt }}</option>
      </select>
    </div>
    <div class="flex items-start gap-3">
      <label class="text-sm text-gray-600 w-36 text-right pt-2 shrink-0"><span class="text-red-500">*</span> 语种</label>
      <select v-model="form.language" :disabled="lockCoreFields" class="flex-1 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-sky-500 disabled:bg-gray-100 disabled:text-gray-500">
        <option value="">请选择语种</option>
        <option v-for="opt in ACCEPTANCE_LANGUAGES" :key="opt" :value="opt">{{ opt }}</option>
      </select>
    </div>
    <div class="flex items-start gap-3">
      <label class="text-sm text-gray-600 w-36 text-right pt-2 shrink-0"><span class="text-red-500">*</span> 采选方式</label>
      <select v-model="form.method" :disabled="lockCoreFields" class="flex-1 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-sky-500 disabled:bg-gray-100 disabled:text-gray-500">
        <option value="">请选择采选方式</option>
        <option v-for="opt in ACCEPTANCE_METHODS" :key="opt" :value="opt">{{ opt }}</option>
      </select>
    </div>
    <div class="flex items-start gap-3">
      <label class="text-sm text-gray-600 w-36 text-right pt-2 shrink-0"><span class="text-red-500">*</span> 供应商</label>
      <select v-model="form.supplier" :disabled="lockCoreFields" class="flex-1 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-sky-500 disabled:bg-gray-100 disabled:text-gray-500">
        <option value="">请选择供应商</option>
        <option v-for="opt in ACCEPTANCE_SUPPLIERS" :key="opt" :value="opt">{{ opt }}</option>
      </select>
    </div>
    <div class="flex items-start gap-3">
      <label class="text-sm text-gray-600 w-36 text-right pt-2 shrink-0">发货单号</label>
      <input v-model="form.shipNo" type="text" placeholder="请输入发货单号" class="flex-1 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-sky-500">
    </div>
    <div class="flex items-start gap-3">
      <label class="text-sm text-gray-600 w-36 text-right pt-2 shrink-0" />
      <div class="flex-1 flex items-center gap-6 flex-wrap">
        <label class="inline-flex items-center gap-2 cursor-pointer select-none">
          <input v-model="form.setCurrent" type="checkbox" class="rounded text-sky-600">
          <span class="text-sm text-gray-700">设为当前工作验收单</span>
        </label>
        <label class="inline-flex items-center gap-2 cursor-pointer select-none">
          <input v-model="form.autoBarcode" type="checkbox" :disabled="lockCoreFields" class="rounded text-sky-600 disabled:opacity-50">
          <span class="text-sm text-gray-700">是否支持自动分配条码号</span>
        </label>
      </div>
    </div>
    <div v-if="form.autoBarcode" class="flex items-start gap-3">
      <label class="text-sm text-gray-600 w-36 text-right pt-2 shrink-0"><span class="text-red-500">*</span> 条码号类型</label>
      <div class="flex-1 flex items-center gap-2">
        <select v-model="form.barcodeType" :disabled="lockCoreFields" class="w-40 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-sky-500 disabled:bg-gray-100">
          <option value="">请选择</option>
          <option v-for="opt in barcodeTypeOptions" :key="opt" :value="opt">{{ opt }}</option>
        </select>
        <input v-model="form.initialBarcode" :disabled="lockCoreFields" type="text" placeholder="请输入初始条码号" class="flex-1 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-sky-500 disabled:bg-gray-100">
      </div>
    </div>
    <div class="flex items-start gap-3">
      <label class="text-sm text-gray-600 w-36 text-right pt-2 shrink-0">验收备注</label>
      <textarea v-model="form.remark" rows="4" placeholder="请输入验收备注" class="flex-1 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-sky-500 resize-none" />
    </div>
  </FormModal>
</template>

<script setup>
import { computed, reactive, watch } from 'vue';
import FormModal from '@/modules/order/components/FormModal.vue';
import {
  ACCEPTANCE_RESOURCE_TYPES,
  ACCEPTANCE_LANGUAGES,
  ACCEPTANCE_METHODS,
  ACCEPTANCE_SUPPLIERS,
  ADD_BARCODE_TYPE_OPTIONS,
  EDIT_BARCODE_TYPE_OPTIONS
} from '@/modules/acceptance/constants';

const props = defineProps({
  open: { type: Boolean, default: false },
  mode: { type: String, default: 'add' },
  row: { type: Object, default: null }
});

const emit = defineEmits(['close', 'submit']);

const form = reactive({
  name: '',
  resourceType: '',
  language: '',
  method: '',
  supplier: '',
  shipNo: '',
  setCurrent: true,
  autoBarcode: true,
  barcodeType: '',
  initialBarcode: '',
  remark: ''
});

const lockCoreFields = computed(() => props.mode === 'edit' && props.row?.status === 'inProgress');
const barcodeTypeOptions = computed(() =>
  props.mode === 'edit' ? EDIT_BARCODE_TYPE_OPTIONS : ADD_BARCODE_TYPE_OPTIONS
);

function resetForm() {
  form.name = '';
  form.resourceType = '';
  form.language = '';
  form.method = '';
  form.supplier = '';
  form.shipNo = '';
  form.setCurrent = props.mode === 'add';
  form.autoBarcode = true;
  form.barcodeType = '';
  form.initialBarcode = '';
  form.remark = '';
}

function fillFromRow(row) {
  form.name = row.name;
  form.resourceType = row.type;
  form.language = row.lang;
  form.method = row.method;
  form.supplier = row.supplier;
  form.shipNo = row.shipNo;
  form.setCurrent = row.defaultAccept;
  form.autoBarcode = row.autoBarcode;
  form.barcodeType = row.barcodeType || '';
  form.initialBarcode = row.initialBarcode || '';
  form.remark = row.remarkText || '';
}

watch(
  () => [props.open, props.mode, props.row],
  ([isOpen, mode, row]) => {
    if (!isOpen) return;
    resetForm();
    if (mode === 'edit' && row) fillFromRow(row);
  }
);

function submit() {
  const required = [
    { key: 'name', label: '验收单名称' },
    { key: 'resourceType', label: '资源类型' },
    { key: 'language', label: '语种' },
    { key: 'method', label: '采选方式' },
    { key: 'supplier', label: '供应商' }
  ];
  const missing = required.find(f => !String(form[f.key] ?? '').trim());
  if (missing) {
    window.alert(`请填写${missing.label}`);
    return;
  }
  if (form.autoBarcode && (!form.barcodeType.trim() || !form.initialBarcode.trim())) {
    window.alert('请填写条码号类型和初始条码号');
    return;
  }
  emit('submit', { ...form });
}
</script>
