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
        <span class="text-red-500">*</span> 订单名称
      </label>
      <input
        v-model="form.orderName"
        type="text"
        :maxlength="ORDER_NAME_MAX_LENGTH"
        placeholder="请输入，50字符以内"
        autocomplete="off"
        class="flex-1 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-sky-500"
      >
    </div>
    <div class="flex items-start gap-3">
      <label class="text-sm text-gray-600 w-28 text-right pt-2 shrink-0">
        <span class="text-red-500">*</span> 订户
      </label>
      <select v-model="form.subscriber" class="flex-1 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-sky-500">
        <option value="">请选择</option>
        <option v-for="opt in subscriberOptions" :key="opt" :value="opt">{{ opt }}</option>
      </select>
    </div>
    <div class="flex items-start gap-3">
      <label class="text-sm text-gray-600 w-28 text-right pt-2 shrink-0">
        <span class="text-red-500">*</span> 资源类型
      </label>
      <select
        v-model="form.resourceType"
        class="flex-1 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-sky-500 disabled:bg-gray-100 disabled:text-gray-400"
        :disabled="!form.subscriber"
      >
        <option value="">{{ form.subscriber ? '请选择' : '请先选择订户' }}</option>
        <option v-for="opt in resourceTypeOptions" :key="opt" :value="opt">{{ opt }}</option>
      </select>
    </div>
    <div class="flex items-start gap-3">
      <label class="text-sm text-gray-600 w-28 text-right pt-2 shrink-0">
        <span class="text-red-500">*</span> 采选方式
      </label>
      <select v-model="form.method" class="flex-1 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-sky-500">
        <option value="">请选择</option>
        <option v-for="opt in BIB_CREATE_ORDER_METHOD_OPTIONS" :key="opt" :value="opt">{{ opt }}</option>
      </select>
    </div>
    <div class="flex items-start gap-3">
      <label class="text-sm text-gray-600 w-28 text-right pt-2 shrink-0">
        <span v-if="!budgetOptional" class="text-red-500">*</span> 预算名称
      </label>
      <select
        v-model="form.budget"
        class="flex-1 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-sky-500 disabled:bg-gray-100 disabled:text-gray-400"
        :disabled="budgetOptional || !form.subscriber"
      >
        <option value="">{{ budgetOptional ? '请选择' : (form.subscriber ? '请选择' : '请先选择订户') }}</option>
        <option v-for="opt in budgetOptions" :key="opt" :value="opt">{{ opt }}</option>
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
import { resolveLanguageFromMarcFormat } from '@/modules/marc-mapping/data/marc-mapping-manage';
import {
  LANGUAGE_OPTIONS,
  BIB_CREATE_ORDER_REQUIRED_FIELDS,
  isBudgetOptionalForMethod
} from '@/modules/order/constants';
import { ORDER_NAME_MAX_LENGTH } from '@/modules/order/data/order-create';
import {
  BIB_CREATE_ORDER_METHOD_OPTIONS,
  getBibCreateOrderSubscriberOptions,
  getBibCreateOrderResourceTypeOptions,
  getBibCreateOrderBudgetOptions,
  validateBibCreateOrderScopedFields
} from '@/modules/order/data/bib-create-order-options';
import { NO_ASSOCIATED_SUBSCRIBER_CREATE_ORDER_MESSAGE } from '@/modules/subscriber/data/current-librarian';
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
  orderName: '',
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
const subscriberOptions = computed(() => getBibCreateOrderSubscriberOptions());

/** @type {import('vue').ComputedRef<string[]>} */
const resourceTypeOptions = computed(() => getBibCreateOrderResourceTypeOptions(form.subscriber));

/** @type {import('vue').ComputedRef<string[]>} */
const budgetOptions = computed(() => getBibCreateOrderBudgetOptions(form.subscriber));

/** @type {import('vue').ComputedRef<string[]>} */
const supplierOptions = computed(() => getSupplierOptionsByMethod(form.method));

/** @type {import('vue').ComputedRef<boolean>} */
const budgetOptional = computed(() => isBudgetOptionalForMethod(form.method));

function resetForm() {
  form.orderName = '';
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

  form.orderName = cached.orderName ?? '';
  form.subscriber = cached.subscriber ?? '';
  form.resourceType = cached.resourceType ?? '';
  form.method = cached.method ?? '';
  if (form.method && !BIB_CREATE_ORDER_METHOD_OPTIONS.includes(form.method)) {
    form.method = '';
  }
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
  syncFieldsWithSubscriber();
  isRestoring.value = false;
}

/**
 * 订户变更时，清空不再适用的资源类型与预算名称
 */
function syncFieldsWithSubscriber() {
  if (form.subscriber && !subscriberOptions.value.includes(form.subscriber)) {
    form.subscriber = '';
  }
  if (form.resourceType && !resourceTypeOptions.value.includes(form.resourceType)) {
    form.resourceType = '';
  }
  if (form.budget && !budgetOptions.value.includes(form.budget)) {
    form.budget = '';
  }
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
    orderName: form.orderName,
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

/**
 * 按书目 MARC 格式预填语种（CNMARC→中文，否则→外文）
 * @param {Record<string, unknown> | null} bibRow
 */
function applyMarcLanguageDefault(bibRow) {
  const language = resolveLanguageFromMarcFormat(bibRow);
  if (language && LANGUAGE_OPTIONS.includes(language)) {
    form.language = language;
  }
}

watch(() => form.subscriber, syncFieldsWithSubscriber);
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
    if (!subscriberOptions.value.length) {
      window.alert(NO_ASSOCIATED_SUBSCRIBER_CREATE_ORDER_MESSAGE);
      emit('close');
      return;
    }
    restoreFromCache();
    if (bibRow) applyMarcLanguageDefault(bibRow);
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
  const orderName = String(form.orderName || '').trim();
  if (!orderName) {
    window.alert('请输入订单名称');
    return;
  }
  if (orderName.length > ORDER_NAME_MAX_LENGTH) {
    window.alert(`订单名称不能超过${ORDER_NAME_MAX_LENGTH}个字符`);
    return;
  }

  const scopedResult = validateBibCreateOrderScopedFields(form);
  if (!scopedResult.valid) {
    window.alert(scopedResult.message);
    return;
  }

  const requiredFields = BIB_CREATE_ORDER_REQUIRED_FIELDS.filter(
    field => field.key !== 'orderName' && (field.key !== 'budget' || !budgetOptional.value)
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
    orderName,
    orderIds,
    bibRow: props.bibRow
  });
  window.alert(`订单创建成功，订单号：${orderIds.join('，')}`);
  emit('close');
}
</script>
