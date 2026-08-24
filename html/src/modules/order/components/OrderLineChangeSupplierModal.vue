<template>
  <FormModal
    v-if="open"
    title="更换供应商"
    width-class="w-full max-w-lg max-h-[90vh]"
    :confirm-text="confirmText"
    @close="emit('close')"
    @confirm="submit"
  >
    <p class="text-sm text-gray-600 leading-6 mb-3">
      发订套数：{{ flowSummary.issued }} 已收货套数：{{ flowSummary.received }} 已换货套数：{{ flowSummary.exchanged }} 已退货套数：{{ flowSummary.returned }}
    </p>
    <div class="flex items-center justify-center gap-6 mb-4">
      <label class="inline-flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
        <input v-model="form.targetMode" type="radio" :value="CHANGE_SUPPLIER_TARGET_NEW" class="text-sky-600">
        新建订单
      </label>
      <label class="inline-flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
        <input v-model="form.targetMode" type="radio" :value="CHANGE_SUPPLIER_TARGET_JOIN" class="text-sky-600">
        加入订单
      </label>
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
          @change="onSupplierBudgetChange"
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
          @change="onSupplierBudgetChange"
        >
          <option value="">请选择</option>
          <option v-for="opt in budgetOptions" :key="opt" :value="opt">{{ opt }}</option>
        </select>
        <p v-if="fieldErrors.budget" class="text-red-500 text-xs mt-1">{{ fieldErrors.budget }}</p>
      </div>
    </div>
    <div class="flex items-start gap-3">
      <label class="text-sm text-gray-600 w-24 text-right shrink-0 pt-2">
        <span class="text-red-500">*</span> 订单名称
      </label>
      <div class="flex-1 min-w-0">
        <template v-if="isNewTarget">
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
        </template>
        <template v-else>
          <SearchSelect
            v-model="form.targetOrderId"
            value-mode
            :options="joinCandidates"
            placeholder="请选择或输入检索待发订订单"
            :error="fieldErrors.orderName"
            :get-label="formatJoinOrderLabel"
            :get-value="order => order.orderId"
            @change="clearFieldError('orderName')"
          />
          <p v-if="!joinCandidates.length" class="text-amber-600 text-xs mt-1">
            暂无符合条件的待发订订单，请调整供应商或预算
          </p>
        </template>
      </div>
    </div>
    <div class="flex items-start gap-3">
      <label class="text-sm text-gray-600 w-24 text-right shrink-0 pt-2">
        <span class="text-red-500">*</span> 套数
      </label>
      <div class="flex-1 min-w-0">
        <input
          v-model="form.sets"
          type="text"
          inputmode="numeric"
          class="w-full border rounded px-3 py-2 text-sm"
          :class="fieldErrors.sets ? 'border-red-400' : 'border-gray-300'"
          placeholder="请输入套数"
          @input="clearFieldError('sets')"
        >
        <p v-if="fieldErrors.sets" class="text-red-500 text-xs mt-1">{{ fieldErrors.sets }}</p>
      </div>
    </div>
    <div class="flex items-start gap-3">
      <label class="text-sm text-gray-600 w-24 text-right shrink-0 pt-2">
        <span class="text-red-500">*</span> 原因
      </label>
      <div class="flex-1 min-w-0">
        <ReasonSelect
          v-model="form.reason"
          reason-type="cancel"
          :error="!!fieldErrors.reason"
          @change="clearFieldError('reason')"
        />
        <p v-if="fieldErrors.reason" class="text-red-500 text-xs mt-1">{{ fieldErrors.reason }}</p>
      </div>
    </div>
    <div class="flex items-start gap-3">
      <label class="text-sm text-gray-600 w-24 text-right pt-2 shrink-0">备注</label>
      <textarea
        v-model="form.remark"
        rows="4"
        placeholder="填写后将追加至源订单行备注后"
        class="flex-1 border border-gray-300 rounded px-3 py-2 text-sm resize-y"
      />
    </div>
  </FormModal>
</template>

<script setup>
import { computed, reactive, watch } from 'vue';
import FormModal from '@/modules/order/components/FormModal.vue';
import ReasonSelect from '@/components/common/ReasonSelect.vue';
import SearchSelect from '@/modules/barcode-supplier/components/SearchSelect.vue';
import { NEW_ORDER_BUDGET_OPTIONS, isBudgetOptionalForMethod } from '@/modules/order/constants';
import { getSupplierOptionsByMethod } from '@/modules/order/data/supplier-sources';
import { parseFlowStats } from '@/modules/order/data/order-line-detail';
import {
  CHANGE_SUPPLIER_TARGET_JOIN,
  CHANGE_SUPPLIER_TARGET_NEW,
  formatChangeSupplierJoinOrderLabel,
  getChangeSupplierJoinOrderCandidates,
  getChangeSupplierScopeFromLine,
  getMigratableSets,
  suggestChangeSupplierOrderName,
  validateChangeSupplierForm
} from '@/modules/order/data/order-line-change-supplier';
import { getCurrentViewableSubscribers } from '@/modules/subscriber/data/current-librarian';
import { useOrderStore } from '@/modules/order/stores/order';

const props = defineProps({
  open: { type: Boolean, default: false },
  sourceOrder: { type: Object, default: null },
  sourceLine: { type: Object, default: null }
});

const emit = defineEmits(['close', 'confirm']);

const orderStore = useOrderStore();

const form = reactive({
  targetMode: CHANGE_SUPPLIER_TARGET_NEW,
  orderName: '',
  targetOrderId: '',
  sets: '',
  supplier: '',
  budget: '',
  reason: '',
  remark: ''
});

const fieldErrors = reactive({
  orderName: '',
  sets: '',
  supplier: '',
  budget: '',
  reason: ''
});

const method = computed(() => props.sourceOrder?.method || '现采');
const isNewTarget = computed(() => form.targetMode === CHANGE_SUPPLIER_TARGET_NEW);
const confirmText = computed(() => (isNewTarget.value ? '生成新订单' : '加入订单'));
const supplierOptions = computed(() => {
  const options = getSupplierOptionsByMethod(method.value);
  const current = String(
    props.sourceOrder?.supplier || props.sourceLine?.supplier || ''
  ).trim();
  if (current && !options.includes(current)) {
    return [current, ...options];
  }
  return options;
});
const budgetOptional = computed(() => isBudgetOptionalForMethod(method.value));
const budgetOptions = computed(() => {
  const options = [...NEW_ORDER_BUDGET_OPTIONS];
  const current = String(
    props.sourceOrder?.budget || props.sourceLine?.budget || ''
  ).trim();
  if (current && !options.includes(current)) {
    options.unshift(current);
  }
  return options;
});
const maxSets = computed(() => getMigratableSets(props.sourceLine));
const scope = computed(() => getChangeSupplierScopeFromLine(props.sourceLine, props.sourceOrder));
const joinCandidates = computed(() => {
  if (isNewTarget.value) return [];
  return getChangeSupplierJoinOrderCandidates({
    orders: orderStore.orders,
    viewableSubscribers: getCurrentViewableSubscribers(),
    scope: scope.value,
    supplier: form.supplier,
    budget: form.budget,
    budgetOptional: budgetOptional.value
  });
});
const flowSummary = computed(() => {
  const flow = parseFlowStats(props.sourceLine?.flowStats);
  return {
    issued: flow.issued || Number(props.sourceLine?.sets) || 0,
    received: flow.received || 0,
    exchanged: flow.exchanged || 0,
    returned: flow.returned || 0
  };
});

function formatJoinOrderLabel(order) {
  return formatChangeSupplierJoinOrderLabel(order);
}

watch(
  () => props.open,
  open => {
    if (!open) return;
    form.targetMode = CHANGE_SUPPLIER_TARGET_NEW;
    form.orderName = suggestChangeSupplierOrderName(
      props.sourceOrder?.orderName,
      orderStore.orders
    );
    form.targetOrderId = '';
    form.sets = String(maxSets.value || '');
    form.supplier = String(
      props.sourceOrder?.supplier || props.sourceLine?.supplier || ''
    ).trim();
    form.budget = budgetOptional.value
      ? ''
      : String(props.sourceOrder?.budget || props.sourceLine?.budget || '').trim();
    form.reason = '';
    form.remark = '';
    clearAllFieldErrors();
  }
);

watch(
  () => form.targetMode,
  mode => {
    if (mode === CHANGE_SUPPLIER_TARGET_NEW) {
      form.targetOrderId = '';
      form.orderName = suggestChangeSupplierOrderName(
        props.sourceOrder?.orderName,
        orderStore.orders
      );
    } else {
      form.orderName = '';
      form.targetOrderId = '';
    }
    fieldErrors.orderName = '';
  }
);

watch(budgetOptional, optional => {
  if (optional) {
    form.budget = '';
    fieldErrors.budget = '';
  }
});

function onSupplierBudgetChange() {
  clearFieldError('supplier');
  clearFieldError('budget');
  if (!isNewTarget.value) {
    form.targetOrderId = '';
    fieldErrors.orderName = '';
  }
}

function clearFieldError(field) {
  if (field && fieldErrors[field]) fieldErrors[field] = '';
}

function clearAllFieldErrors() {
  fieldErrors.orderName = '';
  fieldErrors.sets = '';
  fieldErrors.supplier = '';
  fieldErrors.budget = '';
  fieldErrors.reason = '';
}

function submit() {
  const check = validateChangeSupplierForm(form, method.value, maxSets.value, {
    joinCandidates: joinCandidates.value
  });
  fieldErrors.orderName = check.errors.orderName || '';
  fieldErrors.sets = check.errors.sets || '';
  fieldErrors.supplier = check.errors.supplier || '';
  fieldErrors.budget = check.errors.budget || '';
  fieldErrors.reason = check.errors.reason || '';
  if (!check.ok) return;
  emit('confirm', {
    targetMode: form.targetMode,
    orderName: form.orderName.trim(),
    targetOrderId: form.targetOrderId,
    sets: form.sets.trim(),
    supplier: form.supplier,
    budget: form.budget,
    reason: form.reason,
    remark: form.remark
  });
}
</script>
