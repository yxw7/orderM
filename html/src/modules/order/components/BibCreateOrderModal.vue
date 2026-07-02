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
        <span class="text-red-500">*</span> 预算名称
      </label>
      <select v-model="form.budget" class="flex-1 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-sky-500">
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
      <select v-model="form.supplier" class="flex-1 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-sky-500">
        <option value="">请选择</option>
        <option v-for="opt in BIB_CREATE_ORDER_SUPPLIER_OPTIONS" :key="opt" :value="opt">{{ opt }}</option>
      </select>
    </div>
    <div class="flex items-start gap-3">
      <label class="text-sm text-gray-600 w-28 text-right pt-2 shrink-0">折扣</label>
      <input
        v-model="form.discount"
        type="text"
        placeholder="请输入"
        autocomplete="off"
        class="flex-1 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-sky-500"
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
import { reactive, ref, watch } from 'vue';
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
  BIB_CREATE_ORDER_SUPPLIER_OPTIONS,
  BIB_CREATE_ORDER_REQUIRED_FIELDS
} from '@/modules/order/constants';

const props = defineProps({
  open: { type: Boolean, default: false },
  bibRow: { type: Object, default: null }
});

const emit = defineEmits(['close', 'confirm']);

const { activeSiteNames } = useSiteSelectOptions();

const siteError = ref('');

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

function applyMarcMapping(bibRow) {
  const mapped = resolveOrderFieldsFromMarcMapping(bibRow);
  if (!mapped) return false;
  form.resourceType = mapped.resourceType;
  form.language = mapped.language;
  return true;
}

watch(
  () => [props.open, props.bibRow],
  ([isOpen, bibRow]) => {
    if (!isOpen) return;
    resetForm();
    if (bibRow) applyMarcMapping(bibRow);
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
  const missing = BIB_CREATE_ORDER_REQUIRED_FIELDS.find(field => !String(form[field.key] ?? '').trim());
  if (missing) {
    window.alert(`请选择${missing.label}`);
    return;
  }
  if (!form.sites.length) {
    siteError.value = '请选择馆址';
    window.alert('请选择馆址');
    return;
  }
  siteError.value = '';

  const now = new Date();
  const orderIds = form.sites.map((_, index) => buildOrderId(now, index));
  emit('confirm', {
    ...form,
    orderIds,
    bibRow: props.bibRow
  });
  window.alert(`订单创建成功，订单号：${orderIds.join('，')}`);
  emit('close');
}
</script>
