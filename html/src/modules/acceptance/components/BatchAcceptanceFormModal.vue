<template>
  <FormModal
    v-if="open"
    title="新增验收单"
    width-class="w-full max-w-2xl max-h-[90vh]"
    body-class="space-y-4 overflow-y-auto"
    @close="emit('close')"
    @confirm="submit"
  >
    <div class="flex items-start gap-3">
      <label class="text-sm text-gray-600 w-36 text-right pt-2 shrink-0"><span class="text-red-500">*</span> 验收单名称</label>
      <input v-model="form.name" type="text" placeholder="请输入验收单名称" autocomplete="off" class="flex-1 border border-gray-300 rounded px-3 py-2 text-sm">
    </div>
    <div class="flex items-start gap-3">
      <label class="text-sm text-gray-600 w-36 text-right pt-2 shrink-0"><span class="text-red-500">*</span> 资源类型</label>
      <select v-model="form.resourceType" class="flex-1 border border-gray-300 rounded px-3 py-2 text-sm">
        <option value="">请选择资源类型</option>
        <option v-for="opt in ACCEPTANCE_RESOURCE_TYPES" :key="opt" :value="opt">{{ opt }}</option>
      </select>
    </div>
    <div class="flex items-start gap-3">
      <label class="text-sm text-gray-600 w-36 text-right pt-2 shrink-0"><span class="text-red-500">*</span> 采选方式</label>
      <select v-model="form.method" class="flex-1 border border-gray-300 rounded px-3 py-2 text-sm">
        <option value="">请选择采选方式</option>
        <option v-for="opt in ACCEPTANCE_METHODS" :key="opt" :value="opt">{{ opt }}</option>
      </select>
    </div>
    <div class="flex items-start gap-3">
      <label class="text-sm text-gray-600 w-36 text-right pt-2 shrink-0"><span class="text-red-500">*</span> 供应商</label>
      <select v-model="form.supplier" class="flex-1 border border-gray-300 rounded px-3 py-2 text-sm">
        <option value="">请选择供应商</option>
        <option v-for="opt in BATCH_SUPPLIER_OPTIONS" :key="opt" :value="opt">{{ opt }}</option>
      </select>
    </div>
    <div class="flex items-start gap-3">
      <label class="text-sm text-gray-600 w-36 text-right pt-2 shrink-0">发货单号</label>
      <input v-model="form.shipNo" type="text" placeholder="请输入发货单号" autocomplete="off" class="flex-1 border border-gray-300 rounded px-3 py-2 text-sm">
    </div>
    <div class="flex items-start gap-3">
      <label class="text-sm text-gray-600 w-36 text-right pt-2 shrink-0"><span class="text-red-500">*</span> 订单号</label>
      <input v-model="form.orderNo" type="text" placeholder="请输入订单号" autocomplete="off" class="flex-1 border border-gray-300 rounded px-3 py-2 text-sm">
    </div>
    <div class="flex items-start gap-3">
      <label class="text-sm text-gray-600 w-36 text-right pt-2 shrink-0">验收备注</label>
      <div class="flex-1 relative">
        <textarea v-model="form.remark" rows="4" placeholder="请输入验收备注" class="w-full border border-gray-300 rounded px-3 py-2 text-sm resize-none" />
        <span class="absolute bottom-2 right-3 text-xs text-gray-400">{{ form.remark.length }}</span>
      </div>
    </div>
  </FormModal>
</template>

<script setup>
import { reactive, watch } from 'vue';
import FormModal from '@/modules/order/components/FormModal.vue';
import { ACCEPTANCE_METHODS, ACCEPTANCE_RESOURCE_TYPES } from '@/modules/acceptance/constants';
import { BATCH_SUPPLIER_OPTIONS } from '@/modules/acceptance/data/batch-acceptance';

const props = defineProps({
  open: { type: Boolean, default: false }
});

const emit = defineEmits(['close', 'submit']);

const emptyForm = () => ({
  name: '',
  resourceType: '',
  method: '',
  supplier: '',
  shipNo: '',
  orderNo: '',
  remark: ''
});

const form = reactive(emptyForm());

watch(() => props.open, open => {
  if (open) Object.assign(form, emptyForm());
});

function submit() {
  if (!form.name.trim()) return window.alert('请输入验收单名称');
  if (!form.resourceType) return window.alert('请选择资源类型');
  if (!form.method) return window.alert('请选择采选方式');
  if (!form.supplier) return window.alert('请选择供应商');
  if (!form.orderNo.trim()) return window.alert('请输入订单号');
  emit('submit', { ...form });
}
</script>
