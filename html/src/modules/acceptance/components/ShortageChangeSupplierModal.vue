<template>
  <FormModal
    v-if="open"
    title="更换供应商"
    width-class="w-full max-w-lg max-h-[90vh]"
    confirm-text="生成新订单"
    @close="emit('close')"
    @confirm="submit"
  >
    <div class="flex items-center gap-3">
      <label class="text-sm text-gray-600 w-24 text-right shrink-0"><span class="text-red-500">*</span> 供应商</label>
      <select v-model="form.supplier" class="flex-1 border border-gray-300 rounded px-3 py-2 text-sm">
        <option value="">请选择</option>
        <option v-for="opt in SHORTAGE_CHANGE_SUPPLIER_OPTIONS" :key="opt" :value="opt">{{ opt }}</option>
      </select>
    </div>
    <div class="flex items-center gap-3">
      <label class="text-sm text-gray-600 w-24 text-right shrink-0"><span class="text-red-500">*</span> 预算名称</label>
      <select v-model="form.budget" class="flex-1 border border-gray-300 rounded px-3 py-2 text-sm">
        <option value="">请选择</option>
        <option v-for="opt in SHORTAGE_BUDGET_OPTIONS" :key="opt" :value="opt">{{ opt }}</option>
      </select>
    </div>
    <div class="flex items-start gap-3">
      <label class="text-sm text-gray-600 w-24 text-right pt-2 shrink-0">备注</label>
      <textarea v-model="form.remark" rows="4" placeholder="请输入备注" class="flex-1 border border-gray-300 rounded px-3 py-2 text-sm resize-y" />
    </div>
  </FormModal>
</template>

<script setup>
import { reactive, watch } from 'vue';
import FormModal from '@/modules/order/components/FormModal.vue';
import { SHORTAGE_BUDGET_OPTIONS, SHORTAGE_CHANGE_SUPPLIER_OPTIONS } from '@/modules/acceptance/data/shortage-manage';

const props = defineProps({
  open: { type: Boolean, default: false }
});

const emit = defineEmits(['close', 'confirm']);

const form = reactive({ supplier: '', budget: '', remark: '' });

watch(() => props.open, open => {
  if (!open) return;
  form.supplier = '';
  form.budget = '';
  form.remark = '';
});

function submit() {
  if (!form.supplier) return window.alert('请选择供应商');
  if (!form.budget) return window.alert('请选择预算名称');
  emit('confirm', { ...form });
}
</script>
