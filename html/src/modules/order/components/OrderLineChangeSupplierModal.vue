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
      <label class="text-sm text-gray-600 w-24 text-right shrink-0"><span class="text-red-500">*</span> 订单名称</label>
      <input
        v-model="form.orderName"
        type="text"
        maxlength="50"
        class="flex-1 border border-gray-300 rounded px-3 py-2 text-sm"
        placeholder="请输入订单名称"
      />
    </div>
    <div class="flex items-center gap-3">
      <label class="text-sm text-gray-600 w-24 text-right shrink-0"><span class="text-red-500">*</span> 供应商</label>
      <select v-model="form.supplier" class="flex-1 border border-gray-300 rounded px-3 py-2 text-sm">
        <option value="">请选择</option>
        <option v-for="opt in supplierOptions" :key="opt" :value="opt">{{ opt }}</option>
      </select>
    </div>
    <div class="flex items-center gap-3">
      <label class="text-sm text-gray-600 w-24 text-right shrink-0">
        <span v-if="!budgetOptional" class="text-red-500">*</span> 预算名称
      </label>
      <select
        v-model="form.budget"
        class="flex-1 border border-gray-300 rounded px-3 py-2 text-sm"
        :disabled="budgetOptional"
      >
        <option value="">请选择</option>
        <option v-for="opt in NEW_ORDER_BUDGET_OPTIONS" :key="opt" :value="opt">{{ opt }}</option>
      </select>
    </div>
    <div class="flex items-start gap-3">
      <label class="text-sm text-gray-600 w-24 text-right pt-2 shrink-0">备注</label>
      <textarea
        v-model="form.remark"
        rows="4"
        placeholder="请输入备注"
        class="flex-1 border border-gray-300 rounded px-3 py-2 text-sm resize-y"
      />
    </div>
  </FormModal>
</template>

<script setup>
import { computed, reactive, watch } from 'vue';
import FormModal from '@/modules/order/components/FormModal.vue';
import { NEW_ORDER_BUDGET_OPTIONS, isBudgetOptionalForMethod } from '@/modules/order/constants';
import { getSupplierOptionsByMethod } from '@/modules/order/data/supplier-sources';
import {
  suggestChangeSupplierOrderName,
  validateChangeSupplierForm
} from '@/modules/order/data/order-line-change-supplier';

const props = defineProps({
  open: { type: Boolean, default: false },
  sourceOrder: { type: Object, default: null }
});

const emit = defineEmits(['close', 'confirm']);

const form = reactive({
  orderName: '',
  supplier: '',
  budget: '',
  remark: ''
});

const method = computed(() => props.sourceOrder?.method || '现采');
const supplierOptions = computed(() => getSupplierOptionsByMethod(method.value));
const budgetOptional = computed(() => isBudgetOptionalForMethod(method.value));

watch(
  () => props.open,
  open => {
    if (!open) return;
    form.orderName = suggestChangeSupplierOrderName(props.sourceOrder?.orderName);
    form.supplier = '';
    form.budget = '';
    form.remark = '';
  }
);

watch(budgetOptional, optional => {
  if (optional) form.budget = '';
});

function submit() {
  const check = validateChangeSupplierForm(form, method.value);
  if (!check.ok) {
    window.alert(check.message);
    return;
  }
  emit('confirm', {
    orderName: form.orderName.trim(),
    supplier: form.supplier,
    budget: form.budget,
    remark: form.remark
  });
}
</script>
