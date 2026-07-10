<template>
  <FormModal
    v-if="open"
    title="新建订单"
    @close="emit('close')"
    @confirm="submit"
  >
    <div class="flex items-start gap-3">
      <label class="text-sm text-gray-600 w-28 text-right pt-2 shrink-0"><span class="text-red-500">*</span> 订户</label>
      <div class="flex-1">
        <select
          v-model="form.subscriber"
          class="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:border-sky-500"
          :class="errors.subscriber ? 'border-red-500' : 'border-gray-300'"
        >
          <option value="">请选择</option>
          <option v-for="opt in SUBSCRIBER_OPTIONS" :key="opt" :value="opt">{{ opt }}</option>
        </select>
        <p v-if="errors.subscriber" class="text-red-500 text-xs mt-1">{{ errors.subscriber }}</p>
      </div>
    </div>
    <div class="flex items-start gap-3">
      <label class="text-sm text-gray-600 w-28 text-right pt-2 shrink-0"><span class="text-red-500">*</span> 资源类型</label>
      <div class="flex-1">
        <select
          v-model="form.resourceType"
          class="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:border-sky-500"
          :class="errors.resourceType ? 'border-red-500' : 'border-gray-300'"
        >
          <option value="">请选择</option>
          <option v-for="opt in RESOURCE_TYPE_OPTIONS" :key="opt" :value="opt">{{ opt }}</option>
        </select>
        <p v-if="errors.resourceType" class="text-red-500 text-xs mt-1">{{ errors.resourceType }}</p>
      </div>
    </div>
    <div class="flex items-start gap-3">
      <label class="text-sm text-gray-600 w-28 text-right pt-2 shrink-0"><span class="text-red-500">*</span> 采选方式</label>
      <div class="flex-1">
        <select
          v-model="form.method"
          class="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:border-sky-500"
          :class="errors.method ? 'border-red-500' : 'border-gray-300'"
        >
          <option value="">请选择</option>
          <option v-for="opt in METHOD_OPTIONS" :key="opt" :value="opt">{{ opt }}</option>
        </select>
        <p v-if="errors.method" class="text-red-500 text-xs mt-1">{{ errors.method }}</p>
      </div>
    </div>
    <div class="flex items-start gap-3">
      <label class="text-sm text-gray-600 w-28 text-right pt-2 shrink-0">
        <span v-if="!budgetOptional" class="text-red-500">*</span> 预算名称
      </label>
      <div class="flex-1">
        <select
          v-model="form.budget"
          class="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:border-sky-500 disabled:bg-gray-100 disabled:text-gray-400"
          :class="errors.budget ? 'border-red-500' : 'border-gray-300'"
          :disabled="budgetOptional"
        >
          <option value="">请选择</option>
          <option v-for="opt in NEW_ORDER_BUDGET_OPTIONS" :key="opt" :value="opt">{{ opt }}</option>
        </select>
        <p v-if="errors.budget" class="text-red-500 text-xs mt-1">{{ errors.budget }}</p>
      </div>
    </div>
    <div class="flex items-start gap-3">
      <label class="text-sm text-gray-600 w-28 text-right pt-2 shrink-0"><span class="text-red-500">*</span> 语种</label>
      <div class="flex-1">
        <select
          v-model="form.language"
          class="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:border-sky-500"
          :class="errors.language ? 'border-red-500' : 'border-gray-300'"
        >
          <option value="">请选择</option>
          <option v-for="opt in LANGUAGE_OPTIONS" :key="opt" :value="opt">{{ opt }}</option>
        </select>
        <p v-if="errors.language" class="text-red-500 text-xs mt-1">{{ errors.language }}</p>
      </div>
    </div>
    <div class="flex items-start gap-3">
      <label class="text-sm text-gray-600 w-28 text-right pt-2 shrink-0"><span class="text-red-500">*</span> 供应商</label>
      <div class="flex-1">
        <select
          v-model="form.supplier"
          class="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:border-sky-500 disabled:bg-gray-100 disabled:text-gray-400"
          :class="errors.supplier ? 'border-red-500' : 'border-gray-300'"
          :disabled="!form.method"
        >
          <option value="">{{ form.method ? '请选择' : '请先选择采选方式' }}</option>
          <option v-for="opt in supplierOptions" :key="opt" :value="opt">{{ opt }}</option>
        </select>
        <p v-if="errors.supplier" class="text-red-500 text-xs mt-1">{{ errors.supplier }}</p>
      </div>
    </div>
    <div class="flex items-start gap-3">
      <label class="text-sm text-gray-600 w-28 text-right pt-2 shrink-0">折扣</label>
      <div class="flex-1">
        <input
          v-model="form.discount"
          type="text"
          placeholder="0.01～1.00"
          autocomplete="off"
          class="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:border-sky-500"
          :class="errors.discount ? 'border-red-500' : 'border-gray-300'"
          @input="onDiscountInput"
        >
        <p v-if="errors.discount" class="text-red-500 text-xs mt-1">{{ errors.discount }}</p>
      </div>
    </div>
    <div class="flex items-start gap-3">
      <label class="text-sm text-gray-600 w-28 text-right pt-2 shrink-0"><span class="text-red-500">*</span> 馆址</label>
      <div class="flex-1">
        <select
          v-model="form.site"
          class="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:border-sky-500"
          :class="errors.site ? 'border-red-500' : 'border-gray-300'"
        >
          <option value="">请选择</option>
          <option v-for="opt in activeSiteNames" :key="opt" :value="opt">{{ opt }}</option>
        </select>
        <p v-if="errors.site" class="text-red-500 text-xs mt-1">{{ errors.site }}</p>
      </div>
    </div>
  </FormModal>
</template>

<script setup>
import { ref, watch, computed } from 'vue';
import FormModal from '@/modules/order/components/FormModal.vue';
import { useSiteSelectOptions } from '@/composables/use-site-options';
import {
  LANGUAGE_OPTIONS,
  METHOD_OPTIONS,
  NEW_ORDER_BUDGET_OPTIONS,
  RESOURCE_TYPE_OPTIONS,
  SUBSCRIBER_OPTIONS,
  isBudgetOptionalForMethod
} from '@/modules/order/constants';
import { defaultNewOrderForm } from '@/modules/order/data/orders';
import { validateNewOrderForm } from '@/modules/order/data/order-create';
import { getSupplierOptionsByMethod, getSupplierDiscountByName, isSupplierValidForMethod } from '@/modules/order/data/supplier-sources';
import { sanitizeDecimalInput } from '@/modules/order/data/order-field-input';

const props = defineProps({
  open: { type: Boolean, default: false }
});

const emit = defineEmits(['close', 'confirm']);

const { activeSiteNames } = useSiteSelectOptions();

const form = ref({ ...defaultNewOrderForm });
const errors = ref({});

/** @type {import('vue').ComputedRef<string[]>} */
const supplierOptions = computed(() => getSupplierOptionsByMethod(form.value.method));

/** @type {import('vue').ComputedRef<boolean>} */
const budgetOptional = computed(() => isBudgetOptionalForMethod(form.value.method));

watch(() => props.open, open => {
  if (!open) return;
  form.value = { ...defaultNewOrderForm };
  errors.value = {};
});

watch(() => form.value.method, method => {
  if (isBudgetOptionalForMethod(method)) {
    form.value.budget = '';
    delete errors.value.budget;
  }
  if (form.value.supplier && !isSupplierValidForMethod(method, form.value.supplier)) {
    form.value.supplier = '';
    form.value.discount = '';
  }
});

watch(() => form.value.supplier, supplier => {
  form.value.discount = getSupplierDiscountByName(supplier);
});

/**
 * 折扣输入：限制为最多两位小数的数值文本
 * @param {Event} event
 */
function onDiscountInput(event) {
  form.value.discount = sanitizeDecimalInput(event.target.value);
}

function submit() {
  const result = validateNewOrderForm(form.value);
  if (!result.valid) {
    errors.value = result.errors;
    const first = Object.values(result.errors)[0];
    if (first) window.alert(first);
    return;
  }
  emit('confirm', { ...form.value });
}
</script>
