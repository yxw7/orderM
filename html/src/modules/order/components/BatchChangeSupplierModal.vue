<template>
  <FormModal
    v-if="open"
    title="更换供应商"
    width-class="w-full max-w-lg max-h-[90vh]"
    confirm-text="生成新订单"
    @close="emit('close')"
    @confirm="submit"
  >
    <div class="flex items-start gap-3">
      <label class="text-sm text-gray-600 w-24 text-right shrink-0 pt-2">
        <span class="text-red-500">*</span> 订单名称
      </label>
      <div class="flex-1 min-w-0">
        <input
          v-model="form.orderName"
          type="text"
          maxlength="50"
          class="w-full border rounded px-3 py-2 text-sm"
          :class="fieldErrors.orderName ? 'border-red-400' : 'border-gray-300'"
          placeholder="请输入订单名称"
          @input="clearFieldError('orderName')"
        >
        <p v-if="fieldErrors.orderName" class="text-red-500 text-xs mt-1">{{ fieldErrors.orderName }}</p>
      </div>
    </div>
    <div class="flex items-start gap-3">
      <label class="text-sm text-gray-600 w-24 text-right shrink-0 pt-2">
        <span class="text-red-500">*</span> 供应商
      </label>
      <div class="flex-1 min-w-0">
        <select
          v-model="form.supplier"
          class="w-full border rounded px-3 py-2 text-sm"
          :class="fieldErrors.supplier ? 'border-red-400' : 'border-gray-300'"
          @change="clearFieldError('supplier')"
        >
          <option value="">请选择</option>
          <option v-for="opt in supplierOptions" :key="opt" :value="opt">{{ opt }}</option>
        </select>
        <p v-if="fieldErrors.supplier" class="text-red-500 text-xs mt-1">{{ fieldErrors.supplier }}</p>
      </div>
    </div>
    <div class="flex items-start gap-3">
      <label class="text-sm text-gray-600 w-24 text-right shrink-0 pt-2">
        <span v-if="!budgetOptional" class="text-red-500">*</span> 预算名称
      </label>
      <div class="flex-1 min-w-0">
        <select
          v-model="form.budget"
          class="w-full border rounded px-3 py-2 text-sm"
          :class="fieldErrors.budget ? 'border-red-400' : 'border-gray-300'"
          :disabled="budgetOptional"
          @change="clearFieldError('budget')"
        >
          <option value="">请选择</option>
          <option v-for="opt in budgetOptions" :key="opt" :value="opt">{{ opt }}</option>
        </select>
        <p v-if="fieldErrors.budget" class="text-red-500 text-xs mt-1">{{ fieldErrors.budget }}</p>
      </div>
    </div>
    <div class="flex items-start gap-3">
      <label class="text-sm text-gray-600 w-24 text-right shrink-0 pt-2">
        <span class="text-red-500">*</span> 原因
      </label>
      <div class="flex-1 min-w-0">
        <select
          v-model="form.reason"
          class="w-full border rounded px-3 py-2 text-sm"
          :class="fieldErrors.reason ? 'border-red-400' : 'border-gray-300'"
          :disabled="!cancelReasons.length"
          @change="clearFieldError('reason')"
        >
          <option value="">请选择</option>
          <option v-for="item in cancelReasons" :key="item.id" :value="item.content">
            {{ item.content }}
          </option>
        </select>
        <p v-if="fieldErrors.reason" class="text-red-500 text-xs mt-1">{{ fieldErrors.reason }}</p>
        <p v-else-if="!cancelReasons.length" class="text-amber-600 text-xs mt-1">
          暂无可用撤订原因，请先在「设置 - 退换撤订原因参数」中配置。
        </p>
      </div>
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
import { suggestChangeSupplierOrderName } from '@/modules/order/data/order-line-change-supplier';
import { validateBatchChangeSupplierForm } from '@/modules/order/data/batch-change-supplier';
import { useReasonParamsStore } from '@/stores/reason-params';
import { useOrderStore } from '@/modules/order/stores/order';

const props = defineProps({
  open: { type: Boolean, default: false },
  /** 勾选订单行 */
  sourceLines: { type: Array, default: () => [] },
  /** 首行关联订单，用于默认值与采选方式 */
  sourceOrder: { type: Object, default: null }
});

const emit = defineEmits(['close', 'confirm']);

const reasonParamsStore = useReasonParamsStore();
const orderStore = useOrderStore();

const form = reactive({
  orderName: '',
  supplier: '',
  budget: '',
  reason: '',
  remark: ''
});

const fieldErrors = reactive({
  orderName: '',
  supplier: '',
  budget: '',
  reason: ''
});

const method = computed(() => props.sourceOrder?.method || '现采');
const supplierOptions = computed(() => {
  const options = getSupplierOptionsByMethod(method.value);
  const current = String(props.sourceOrder?.supplier || '').trim();
  if (current && !options.includes(current)) {
    return [current, ...options];
  }
  return options;
});
const budgetOptional = computed(() => isBudgetOptionalForMethod(method.value));
const budgetOptions = computed(() => {
  const options = [...NEW_ORDER_BUDGET_OPTIONS];
  const current = String(props.sourceOrder?.budget || '').trim();
  if (current && !options.includes(current)) {
    options.unshift(current);
  }
  return options;
});
const cancelReasons = computed(() => reasonParamsStore.getActiveByType('cancel'));

watch(
  () => props.open,
  open => {
    if (!open) return;
    form.orderName = suggestChangeSupplierOrderName(
      props.sourceOrder?.orderName,
      orderStore.orders
    );
    form.supplier = String(props.sourceOrder?.supplier || '').trim();
    form.budget = String(props.sourceOrder?.budget || '').trim();
    form.reason = '';
    form.remark = '';
    clearAllFieldErrors();
  }
);

function clearFieldError(field) {
  if (field && fieldErrors[field]) fieldErrors[field] = '';
}

function clearAllFieldErrors() {
  fieldErrors.orderName = '';
  fieldErrors.supplier = '';
  fieldErrors.budget = '';
  fieldErrors.reason = '';
}

function submit() {
  const check = validateBatchChangeSupplierForm(form, method.value);
  fieldErrors.orderName = check.errors.orderName || '';
  fieldErrors.supplier = check.errors.supplier || '';
  fieldErrors.budget = check.errors.budget || '';
  fieldErrors.reason = check.errors.reason || '';
  if (!check.ok) return;
  emit('confirm', {
    orderName: form.orderName.trim(),
    supplier: form.supplier,
    budget: form.budget,
    reason: form.reason,
    remark: form.remark
  });
}
</script>
