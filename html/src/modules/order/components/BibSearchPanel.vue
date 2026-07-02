<template>
  <div class="px-4 py-4 border-b border-gray-200 shrink-0 bg-white">
    <form class="space-y-3" @submit.prevent="emit('search')">
      <div class="grid grid-cols-2 gap-x-8 gap-y-3">
        <div class="space-y-3">
          <div
            v-for="(criterion, index) in modelValue.criteriaRows"
            :key="index"
            class="flex items-center gap-2"
          >
            <span class="w-24 shrink-0" aria-hidden="true" />
            <select
              v-model="criterion.type"
              class="border border-gray-300 rounded px-2 py-1.5 text-sm text-gray-700 focus:outline-none focus:border-sky-500 w-36 shrink-0"
            >
              <option v-for="opt in fieldTypes" :key="opt.value" :value="opt.value">{{ opt.label }}</option>
            </select>
            <input
              v-model="criterion.value"
              type="text"
              placeholder="请输入"
              class="flex-1 min-w-0 border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-sky-500"
            >
            <select
              v-model="criterion.match"
              class="border border-gray-300 rounded px-2 py-1.5 text-sm text-gray-700 focus:outline-none focus:border-sky-500 w-24 shrink-0"
            >
              <option value="fuzzy">模糊</option>
              <option value="exact">精确</option>
            </select>
            <button
              v-if="index === 0"
              type="button"
              class="w-8 h-8 flex items-center justify-center text-sky-600 border border-sky-200 rounded hover:bg-sky-50 shrink-0"
              title="添加检索条件"
              @click="addRow"
            >
              +
            </button>
            <button
              v-else
              type="button"
              class="w-8 h-8 flex items-center justify-center text-gray-400 border border-gray-200 rounded hover:bg-gray-50 shrink-0"
              title="移除条件"
              @click="removeRow(index)"
            >
              −
            </button>
          </div>
        </div>
        <div aria-hidden="true" />
      </div>

      <div v-show="expanded" class="grid grid-cols-2 gap-x-8 gap-y-3">
        <div class="flex items-center gap-2">
          <label class="text-sm text-gray-600 whitespace-nowrap w-24 text-right shrink-0">
            <span class="text-red-500">*</span> 书目库
          </label>
          <div class="flex flex-wrap gap-1.5 flex-1 border border-gray-300 rounded px-2 py-1 min-h-[34px] items-center">
            <span class="inline-flex items-center gap-1 px-2 py-0.5 text-xs text-sky-700 bg-sky-50 border border-sky-200 rounded">文献库</span>
          </div>
        </div>
        <div class="flex items-center gap-2">
          <label class="text-sm text-gray-600 whitespace-nowrap w-24 text-right shrink-0">
            <span class="text-red-500">*</span> MARC类型
          </label>
          <select
            v-model="modelValue.marcType"
            class="flex-1 border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-sky-500"
          >
            <option v-for="opt in marcTypeOptions" :key="opt" :value="opt">{{ opt }}</option>
          </select>
        </div>

        <div class="flex items-center gap-2">
          <label class="text-sm text-gray-600 whitespace-nowrap w-24 text-right shrink-0">出版时间</label>
          <div class="flex items-center gap-2 flex-1">
            <input v-model="modelValue.pubDateStart" type="date" class="flex-1 border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-sky-500">
            <span class="text-gray-400 text-sm">-</span>
            <input v-model="modelValue.pubDateEnd" type="date" class="flex-1 border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-sky-500">
          </div>
        </div>
        <div class="flex items-center gap-2">
          <label class="text-sm text-gray-600 whitespace-nowrap w-24 text-right shrink-0">创建时间</label>
          <div class="flex items-center gap-2 flex-1">
            <input v-model="modelValue.createDateStart" type="date" class="flex-1 border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-sky-500">
            <span class="text-gray-400 text-sm">-</span>
            <input v-model="modelValue.createDateEnd" type="date" class="flex-1 border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-sky-500">
          </div>
        </div>

        <div class="flex items-center gap-2">
          <label class="text-sm text-gray-600 whitespace-nowrap w-24 text-right shrink-0">所属馆代码</label>
          <select v-model="modelValue.ownerLibrary" class="flex-1 border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-sky-500">
            <option v-for="opt in libraryOptions" :key="opt.value" :value="opt.value">{{ opt.label }}</option>
          </select>
        </div>
        <div class="flex items-center gap-2">
          <label class="text-sm text-gray-600 whitespace-nowrap w-24 text-right shrink-0">所在馆代码</label>
          <select v-model="modelValue.currentLibrary" class="flex-1 border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-sky-500">
            <option v-for="opt in libraryOptions" :key="opt.value" :value="opt.value">{{ opt.label }}</option>
          </select>
        </div>

        <div class="flex items-center gap-2">
          <label class="text-sm text-gray-600 whitespace-nowrap w-24 text-right shrink-0">所属馆藏地代码</label>
          <select v-model="modelValue.ownerLocation" class="flex-1 border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-sky-500">
            <option value="">请选择</option>
          </select>
        </div>
        <div class="flex items-center gap-2">
          <label class="text-sm text-gray-600 whitespace-nowrap w-24 text-right shrink-0">所在馆藏地代码</label>
          <select v-model="modelValue.currentLocation" class="flex-1 border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-sky-500">
            <option value="">请选择</option>
          </select>
        </div>

        <div class="flex items-center gap-2">
          <label class="text-sm text-gray-600 whitespace-nowrap w-24 text-right shrink-0">书目状态</label>
          <select v-model="modelValue.bibStatus" class="flex-1 border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-sky-500">
            <option value="">全部</option>
            <option value="order">发订</option>
            <option value="initial">初编</option>
            <option value="detailed">详编</option>
          </select>
        </div>
        <div class="flex items-center gap-2">
          <label class="text-sm text-gray-600 whitespace-nowrap w-24 text-right shrink-0">审校状态</label>
          <select v-model="modelValue.reviewStatus" class="flex-1 border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-sky-500">
            <option value="">全部</option>
            <option value="unreviewed">未审校</option>
            <option value="approved">审校通过</option>
            <option value="rejected">审校驳回</option>
          </select>
        </div>

        <div class="flex items-center gap-2 col-span-2">
          <label class="text-sm text-gray-600 whitespace-nowrap w-24 text-right shrink-0">关联单件查询</label>
          <label class="inline-flex items-center gap-2 text-sm text-gray-700">
            <input v-model="modelValue.relatedItemQuery" type="checkbox" class="rounded text-sky-600">
            <span>启用</span>
          </label>
          <select
            v-model="modelValue.relatedItemType"
            class="border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-sky-500 w-48"
          >
            <option value="all">不限纸质电子</option>
            <option value="electronic">有电子资源</option>
          </select>
        </div>
      </div>

      <div class="flex items-center justify-center gap-3 pt-1">
        <SearchExpandToggle
          :expanded="expanded"
          class="mr-2"
          @toggle="expanded = !expanded"
        />
        <button type="button" class="px-8 py-1.5 border border-gray-300 text-gray-600 text-sm rounded hover:bg-gray-50" @click="emit('reset')">
          重置
        </button>
        <button type="submit" class="px-8 py-1.5 bg-sky-600 text-white text-sm rounded hover:bg-sky-700">
          检索
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import SearchExpandToggle from '@/components/common/SearchExpandToggle.vue';
import {
  BIB_SEARCH_FIELD_TYPES,
  BIB_MARC_TYPE_OPTIONS,
  BIB_LIBRARY_OPTIONS,
  createDefaultBibSearch
} from '@/modules/order/data/bib-search';

const props = defineProps({
  modelValue: { type: Object, required: true }
});

const emit = defineEmits(['update:modelValue', 'search', 'reset']);

const expanded = ref(true);
const fieldTypes = BIB_SEARCH_FIELD_TYPES;
const marcTypeOptions = BIB_MARC_TYPE_OPTIONS;
const libraryOptions = BIB_LIBRARY_OPTIONS;

function addRow() {
  emit('update:modelValue', {
    ...props.modelValue,
    criteriaRows: [...props.modelValue.criteriaRows, { type: 'title', value: '', match: 'fuzzy' }]
  });
}

function removeRow(index) {
  emit('update:modelValue', {
    ...props.modelValue,
    criteriaRows: props.modelValue.criteriaRows.filter((_, i) => i !== index)
  });
}

defineExpose({ createDefaultBibSearch });
</script>
