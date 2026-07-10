<template>
  <FormModal
    v-if="open"
    title="新建订单"
    width-class="w-full max-w-2xl max-h-[90vh]"
    @close="emit('close')"
    @confirm="submit"
  >
    <div class="flex items-start gap-3">
      <label class="text-sm text-gray-600 w-28 text-right pt-2 shrink-0">
        <span class="text-red-500">*</span> 订户
      </label>
      <select v-model="form.subscriber" class="flex-1 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-sky-500">
        <option value="">请选择</option>
        <option v-for="opt in SUBSCRIBER_OPTIONS" :key="opt" :value="opt">{{ opt }}</option>
      </select>
    </div>
    <div class="flex items-start gap-3">
      <label class="text-sm text-gray-600 w-28 text-right pt-2 shrink-0">
        <span class="text-red-500">*</span> 资源类型
      </label>
      <select v-model="form.resourceType" class="flex-1 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-sky-500">
        <option value="">请选择</option>
        <option v-for="opt in RESOURCE_TYPE_OPTIONS" :key="opt" :value="opt">{{ opt }}</option>
      </select>
    </div>
    <div class="flex items-start gap-3">
      <label class="text-sm text-gray-600 w-28 text-right pt-2 shrink-0">
        <span class="text-red-500">*</span> 采选方式
      </label>
      <select v-model="form.method" class="flex-1 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-sky-500">
        <option value="">请选择</option>
        <option v-for="opt in METHOD_OPTIONS" :key="opt" :value="opt">{{ opt }}</option>
      </select>
    </div>
    <div class="flex items-start gap-3">
      <label class="text-sm text-gray-600 w-28 text-right pt-2 shrink-0">
        <span v-if="!budgetOptional" class="text-red-500">*</span> 预算名称
      </label>
      <select
        v-model="form.budget"
        class="flex-1 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-sky-500 disabled:bg-gray-100 disabled:text-gray-400"
        :disabled="budgetOptional"
      >
        <option value="">请选择</option>
        <option v-for="opt in BIB_CREATE_ORDER_BUDGET_OPTIONS" :key="opt" :value="opt">{{ opt }}</option>
      </select>
    </div>
    <div class="flex items-start gap-3">
      <label class="text-sm text-gray-600 w-28 text-right pt-2 shrink-0">
        <span class="text-red-500">*</span> 语种
      </label>
      <select v-model="form.language" class="flex-1 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-sky-500">
        <option value="">请选择</option>
        <option v-for="opt in LANGUAGE_OPTIONS" :key="opt" :value="opt">{{ opt }}</option>
      </select>
    </div>
    <div class="flex items-start gap-3">
      <label class="text-sm text-gray-600 w-28 text-right pt-2 shrink-0">
        <span class="text-red-500">*</span> 供应商
      </label>
      <select
        v-model="form.supplier"
        class="flex-1 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-sky-500 disabled:bg-gray-100 disabled:text-gray-400"
        :disabled="!form.method"
      >
        <option value="">{{ form.method ? '请选择' : '请先选择采选方式' }}</option>
        <option v-for="opt in supplierOptions" :key="opt" :value="opt">{{ opt }}</option>
      </select>
    </div>
    <div class="flex items-start gap-3">
      <label class="text-sm text-gray-600 w-28 text-right pt-2 shrink-0">折扣</label>
      <input
        v-model="form.discount"
        type="text"
        placeholder="0.01～1.00"
        autocomplete="off"
        class="flex-1 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-sky-500"
        @input="onDiscountInput"
      >
    </div>
    <div class="flex items-start gap-3">
      <label class="text-sm text-gray-600 w-28 text-right pt-2 shrink-0">
        <span class="text-red-500">*</span> 馆址
      </label>
      <div class="flex-1 min-w-0">
        <SiteMultiSelect
          v-model="form.sites"
          :options="activeSiteNames"
          placeholder="请选择馆址"
          :error="siteError"
        />
      </div>
    </div>
  </FormModal>
</template>

<script setup>
import { computed, reactive, ref, watch } from 'vue';
import FormModal from '@/modules/order/components/FormModal.vue';
import SiteMultiSelect from '@/components/common/SiteMultiSelect.vue';
import { useSiteSelectOptions } from '@/composables/use-site-options';
import { resolveOrderFieldsFromMarcMapping } from '@/modules/order/data/bib';
import {
  SUBSCRIBER_OPTIONS,
  RESOURCE_TYPE_OPTIONS,
  METHOD_OPTIONS,
  LANGUAGE_OPTIONS,
  BIB_CREATE_ORDER_BUDGET_OPTIONS,
  BIB_CREATE_ORDER_REQUIRED_FIELDS,
  isBudgetOptionalForMethod
} from '@/modules/order/constants';
import { loadCreateOrderFormCache, saveCreateOrderFormCache } from '@/modules/order/data/bib-order-form-cache';
import { getSupplierOptionsByMethod, getSupplierDiscountByName, isSupplierValidForMethod } from '@/modules/order/data/supplier-sources';
import { sanitizeDecimalInput, validateOrderDiscount } from '@/modules/order/data/order-field-input';

const props = defineProps({
  open: { type: Boolean, default: false },
  bibRow: { type: Object, default: null }
});

const emit = defineEmits(['close', 'confirm']);

const { activeSiteNames } = useSiteSelectOptions();

const siteError = ref('');
/** 缓存恢复期间跳过供应商→折扣联动，保留用户已修改的折扣 */
const isRestoring = ref(false);

const form = reactive({
  subscriber: '',
  resourceType: '',
  method: '',
  budget: '',
  language: '',
  supplier: '',
  discount: '',
  sites: []
});

/** @type {import('vue').ComputedRef<string[]>} */
const supplierOptions = computed(() => getSupplierOptionsByMethod(form.method));

/** @type {import('vue').ComputedRef<boolean>} */
const budgetOptional = computed(() => isBudgetOptionalForMethod(form.method));

function resetForm() {
  form.subscriber = '';
  form.resourceType = '';
  form.method = '';
  form.budget = '';
  form.language = '';
  form.supplier = '';
  form.discount = '';
  form.sites = [];
  siteError.value = '';
}

function restoreFromCache() {
  isRestoring.value = true;
  const cached = loadCreateOrderFormCache();
  resetForm();
  if (!cached) {
    isRestoring.value = false;
    return;
  }

  form.subscriber = cached.subscriber ?? '';
  form.resourceType = cached.resourceType ?? '';
  form.method = cached.method ?? '';
  form.budget = cached.budget ?? '';
  form.language = cached.language ?? '';
  form.supplier = cached.supplier ?? '';
  form.discount = cached.discount ?? '';
  form.sites = Array.isArray(cached.sites) ? [...cached.sites] : [];
  if (form.supplier && !isSupplierValidForMethod(form.method, form.supplier)) {
    form.supplier = '';
    form.discount = '';
  }
  if (isBudgetOptionalForMethod(form.method)) {
    form.budget = '';
  }
  isRestoring.value = false;
}

/**
 * 采选方式变更时，清空不再适用的供应商。
 * @param {string} method
 */
function syncSupplierWithMethod(method) {
  if (isBudgetOptionalForMethod(method)) {
    form.budget = '';
  }
  if (form.supplier && !isSupplierValidForMethod(method, form.supplier)) {
    form.supplier = '';
    form.discount = '';
  }
}

/**
 * 选择供应商时带出主数据默认折扣，用户仍可手动修改。
 * @param {string} supplier
 */
function syncDiscountWithSupplier(supplier) {
  if (isRestoring.value) return;
  form.discount = getSupplierDiscountByName(supplier);
}

/**
 * 折扣输入：限制为最多两位小数的数值文本
 * @param {Event} event
 */
function onDiscountInput(event) {
  form.discount = sanitizeDecimalInput(event.target.value);
}

function persistCache() {
  saveCreateOrderFormCache({
    subscriber: form.subscriber,
    resourceType: form.resourceType,
    method: form.method,
    budget: form.budget,
    language: form.language,
    supplier: form.supplier,
    discount: form.discount,
    sites: [...form.sites]
  });
}

function applyMarcMapping(bibRow) {
  const mapped = resolveOrderFieldsFromMarcMapping(bibRow);
  if (!mapped) return false;
  form.resourceType = mapped.resourceType;
  form.language = mapped.language;
  return true;
}

watch(() => form.method, syncSupplierWithMethod);
watch(() => form.supplier, syncDiscountWithSupplier);

watch(
  () => [props.open, props.bibRow],
  ([isOpen, bibRow], oldValue) => {
    const wasOpen = oldValue?.[0];
    if (!isOpen) {
      if (wasOpen) persistCache();
      return;
    }
    restoreFromCache();
    if (bibRow) applyMarcMapping(bibRow);
    siteError.value = '';
  }
);

function buildOrderId(now, index) {
  const datePart = [
    now.getFullYear(),
    String(now.getMonth() + 1).padStart(2, '0'),
    String(now.getDate()).padStart(2, '0')
  ].join('');
  const seq = String(now.getTime() + index).slice(-3);
  return `PG001B${datePart}${seq}`;
}

function submit() {
  const requiredFields = BIB_CREATE_ORDER_REQUIRED_FIELDS.filter(
    field => field.key !== 'budget' || !budgetOptional.value
  );
  const missing = requiredFields.find(field => !String(form[field.key] ?? '').trim());
  if (missing) {
    window.alert(`请选择${missing.label}`);
    return;
  }
  if (!form.sites.length) {
    siteError.value = '请选择馆址';
    window.alert('请选择馆址');
    return;
  }
  const discountResult = validateOrderDiscount(form.discount);
  if (!discountResult.valid) {
    window.alert(discountResult.message);
    return;
  }
  siteError.value = '';

  const now = new Date();
  const orderIds = form.sites.map((_, index) => buildOrderId(now, index));
  persistCache();
  emit('confirm', {
    ...form,
    orderIds,
    bibRow: props.bibRow
  });
  window.alert(`订单创建成功，订单号：${orderIds.join('，')}`);
  emit('close');
}
</script>
