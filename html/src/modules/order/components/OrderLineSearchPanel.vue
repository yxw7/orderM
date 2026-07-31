<template>
  <div class="bg-white rounded border border-gray-200 p-4 mb-4 shrink-0">
    <form @submit.prevent="emit('search')">
      <div class="flex items-start gap-4">
        <div class="flex-1 space-y-4">
          <div class="grid grid-cols-3 gap-4">
            <div class="flex items-center gap-2">
              <label class="text-sm text-gray-600 whitespace-nowrap text-right shrink-0 w-20">订单号</label>
              <input
                v-model="model.orderId"
                type="text"
                placeholder="请输入"
                class="flex-1 border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-sky-500"
              >
            </div>
            <div class="flex items-center gap-2">
              <label class="text-sm text-gray-600 whitespace-nowrap text-right shrink-0 w-20">订单行号</label>
              <input
                v-model="model.orderLineNo"
                type="text"
                placeholder="请输入"
                class="flex-1 border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-sky-500"
              >
            </div>
            <div class="flex items-center gap-2">
              <label class="text-sm text-gray-600 whitespace-nowrap text-right shrink-0 w-20">行状态</label>
              <select
                v-model="model.lineStatus"
                class="flex-1 border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-sky-500"
              >
                <option v-for="opt in lineStatusOptions" :key="opt" :value="opt">{{ opt }}</option>
              </select>
            </div>
          </div>

          <div v-show="expanded" class="flex items-center gap-2 flex-wrap">
            <template v-for="(criterion, index) in model.criteria" :key="index">
              <select
                v-model="criterion.field"
                class="border border-gray-300 rounded px-2 py-1.5 text-sm text-gray-700 focus:outline-none focus:border-sky-500 w-28 shrink-0"
              >
                <option v-for="opt in criterionFields" :key="opt.value" :value="opt.value">{{ opt.label }}</option>
              </select>
              <input
                v-model="criterion.value"
                type="text"
                placeholder="请输入"
                class="w-40 border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-sky-500 shrink-0"
              >
              <select
                v-if="index < model.criteria.length - 1"
                v-model="criterion.logicAfter"
                class="border border-gray-300 rounded px-2 py-1.5 text-sm text-gray-700 focus:outline-none focus:border-sky-500 w-16 shrink-0"
              >
                <option v-for="opt in logicOptions" :key="opt.value" :value="opt.value">{{ opt.label }}</option>
              </select>
            </template>
          </div>

          <div v-show="expanded" class="grid grid-cols-3 gap-4">
            <div class="flex items-center gap-2">
              <label class="text-sm text-gray-600 whitespace-nowrap text-right shrink-0 w-20">载体</label>
              <select
                v-model="model.carrier"
                class="flex-1 border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-sky-500"
              >
                <option v-for="opt in carrierOptions" :key="opt" :value="opt">{{ opt }}</option>
              </select>
            </div>
            <div class="flex items-center gap-2">
              <label class="text-sm text-gray-600 whitespace-nowrap text-right shrink-0 w-20">验收状态</label>
              <select
                v-model="model.acceptanceStatus"
                class="flex-1 border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-sky-500"
              >
                <option v-for="opt in acceptanceStatusOptions" :key="opt" :value="opt">{{ opt }}</option>
              </select>
            </div>
            <div class="flex items-center gap-2">
              <label class="text-sm text-gray-600 whitespace-nowrap text-right shrink-0 w-20">结算状态</label>
              <select
                v-model="model.settlementStatus"
                class="flex-1 border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-sky-500"
              >
                <option v-for="opt in settlementStatusOptions" :key="opt" :value="opt">{{ opt }}</option>
              </select>
            </div>
          </div>

          <div v-show="expanded" class="grid grid-cols-3 gap-4">
            <div class="flex items-center gap-2">
              <label class="text-sm text-gray-600 whitespace-nowrap text-right shrink-0 w-20">是否催缺</label>
              <select
                v-model="model.isShortage"
                class="flex-1 border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-sky-500"
              >
                <option v-for="opt in isShortageOptions" :key="opt" :value="opt">{{ opt }}</option>
              </select>
            </div>
            <div class="flex items-center gap-2">
              <label class="text-sm text-gray-600 whitespace-nowrap text-right shrink-0 w-20">书目记录号</label>
              <input
                v-model="model.bibRecordNo"
                type="text"
                placeholder="请输入"
                class="flex-1 border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-sky-500"
              >
            </div>
            <div class="flex items-center gap-2">
              <label class="text-sm text-gray-600 whitespace-nowrap text-right shrink-0 w-20">馆址</label>
              <select
                v-model="model.site"
                class="flex-1 border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-sky-500"
              >
                <option v-for="opt in siteOptions" :key="opt" :value="opt">{{ opt }}</option>
              </select>
            </div>
          </div>

          <div v-show="expanded" class="grid grid-cols-3 gap-4">
            <div class="flex items-center gap-2">
              <label class="text-sm text-gray-600 whitespace-nowrap text-right shrink-0 w-20">馆藏重复</label>
              <select
                v-model="model.holdingDuplicate"
                class="flex-1 border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-sky-500"
              >
                <option v-for="opt in dedupFilterOptions" :key="opt" :value="opt">{{ opt }}</option>
              </select>
            </div>
            <div class="flex items-center gap-2">
              <label class="text-sm text-gray-600 whitespace-nowrap text-right shrink-0 w-20">供应商</label>
              <SearchableSingleSelect
                v-model="model.supplier"
                class="flex-1 min-w-0"
                :options="supplierSelectOptions"
                placeholder="请选择"
              />
            </div>
            <div class="flex items-center gap-2">
              <label class="text-sm text-gray-600 whitespace-nowrap text-right shrink-0 w-20">预算</label>
              <SearchableSingleSelect
                v-model="model.budget"
                class="flex-1 min-w-0"
                :options="budgetSelectOptions"
                placeholder="请选择"
              />
            </div>
          </div>

          <div v-show="expanded" class="grid grid-cols-3 gap-4">
            <div class="flex items-center gap-2">
              <label class="text-sm text-gray-600 whitespace-nowrap text-right shrink-0 w-20">订单重复</label>
              <select
                v-model="model.orderDuplicate"
                class="flex-1 border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-sky-500"
              >
                <option v-for="opt in dedupFilterOptions" :key="opt" :value="opt">{{ opt }}</option>
              </select>
            </div>
          </div>
        </div>

        <div class="flex items-center gap-2 shrink-0">
          <SearchExpandToggle
            :expanded="expanded"
            class="mr-2"
            @toggle="expanded = !expanded"
          />
          <button type="submit" class="flex items-center gap-1 px-5 py-1.5 bg-sky-600 text-white text-sm rounded hover:bg-sky-700">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
            检索
          </button>
          <button type="button" class="px-5 py-1.5 border border-gray-300 text-gray-600 text-sm rounded hover:bg-gray-50" @click="emit('reset')">
            重置
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import {
  ORDER_LINE_CRITERION_FIELDS,
  ORDER_LINE_DEDUP_FILTER_OPTIONS,
  ORDER_LINE_LOGIC_OPTIONS,
  getOrderLineSearchBudgetOptions,
  getOrderLineSearchSupplierOptions
} from '@/modules/order/data/order-line-filter';
import SearchExpandToggle from '@/components/common/SearchExpandToggle.vue';
import SearchableSingleSelect from '@/components/common/SearchableSingleSelect.vue';
import { useSiteSelectOptions } from '@/composables/use-site-options';

const props = defineProps({
  modelValue: { type: Object, required: true },
  lineStatusOptions: {
    type: Array,
    default: () => ['全部', '待发订', '已发订', '处理中', '已关闭']
  },
  carrierOptions: {
    type: Array,
    default: () => ['全部', 'AP', 'AH', 'CD']
  },
  acceptanceStatusOptions: {
    type: Array,
    default: () => ['全部', '待验收', '部分收货', '收货完成']
  },
  settlementStatusOptions: {
    type: Array,
    default: () => ['全部', '待申请', '待结算', '已结算']
  },
  isShortageOptions: {
    type: Array,
    default: () => ['全部', '是', '否']
  },
  dedupFilterOptions: {
    type: Array,
    default: () => ORDER_LINE_DEDUP_FILTER_OPTIONS
  }
});

const emit = defineEmits(['update:modelValue', 'search', 'reset']);

const expanded = ref(false);
const criterionFields = ORDER_LINE_CRITERION_FIELDS;
const logicOptions = ORDER_LINE_LOGIC_OPTIONS;

const { activeSiteFilterOptions } = useSiteSelectOptions();
const siteOptions = activeSiteFilterOptions;

const supplierSelectOptions = computed(() =>
  getOrderLineSearchSupplierOptions().map(name => ({ value: name, label: name }))
);

const budgetSelectOptions = computed(() =>
  getOrderLineSearchBudgetOptions().map(name => ({ value: name, label: name }))
);

const model = computed({
  get: () => props.modelValue,
  set: val => emit('update:modelValue', val)
});
</script>
