<template>
  <div class="bg-white rounded border border-gray-200 p-4 mb-4 shrink-0">
    <form @submit.prevent="$emit('search')">
      <div class="flex items-start gap-4">
        <div class="flex-1 grid gap-4" :class="gridClass">
          <div
            v-for="field in visibleFields"
            :key="field.key"
            class="flex items-center gap-2"
          >
            <label class="text-sm text-gray-600 whitespace-nowrap text-right shrink-0" :style="{ width: labelWidth }">
              {{ field.label }}
            </label>
            <select
              v-if="field.type === 'select'"
              v-model="model[field.key]"
              class="flex-1 border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-sky-500"
            >
              <option v-for="opt in field.options" :key="opt.value ?? opt" :value="opt.value ?? opt">
                {{ opt.label ?? opt }}
              </option>
            </select>
            <input
              v-else-if="field.type === 'date'"
              v-model="model[field.key]"
              type="date"
              class="flex-1 border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-sky-500"
            />
            <div v-else-if="field.type === 'dateRange'" class="flex flex-1 items-center gap-2">
              <input
                v-model="model[field.startKey]"
                type="date"
                :placeholder="field.startPlaceholder || '开始日期'"
                class="flex-1 border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-sky-500"
              >
              <span class="text-gray-400 text-sm">~</span>
              <input
                v-model="model[field.endKey]"
                type="date"
                :placeholder="field.endPlaceholder || '结束日期'"
                class="flex-1 border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-sky-500"
              >
            </div>
            <input
              v-else
              v-model="model[field.key]"
              type="text"
              :placeholder="field.placeholder || '请输入'"
              class="flex-1 border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-sky-500"
            />
          </div>
        </div>
        <div class="flex items-center gap-2 shrink-0">
          <SearchExpandToggle
            v-if="collapsible"
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
          <button type="button" class="px-5 py-1.5 border border-gray-300 text-gray-600 text-sm rounded hover:bg-gray-50" @click="reset">
            重置
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import SearchExpandToggle from '@/components/common/SearchExpandToggle.vue';

const props = defineProps({
  fields: { type: Array, required: true },
  modelValue: { type: Object, required: true },
  cols: { type: Number, default: 3 },
  labelWidth: { type: String, default: '5rem' },
  defaultExpanded: { type: Boolean, default: false }
});

const emit = defineEmits(['update:modelValue', 'search', 'reset']);

const expanded = ref(props.defaultExpanded);

const gridClass = computed(() => ({
  3: 'grid-cols-3',
  4: 'grid-cols-4'
}[props.cols] || 'grid-cols-3'));

const normalizedFields = computed(() => {
  const hasExplicitExtra = props.fields.some(field => field.extra);
  if (hasExplicitExtra || props.fields.length <= props.cols) return props.fields;
  return props.fields.map((field, index) => ({
    ...field,
    extra: index >= props.cols
  }));
});

const basicFields = computed(() => normalizedFields.value.filter(field => !field.extra));
const extraFields = computed(() => normalizedFields.value.filter(field => field.extra));
const collapsible = computed(() => extraFields.value.length > 0);
const visibleFields = computed(() => [...basicFields.value, ...(expanded.value ? extraFields.value : [])]);

const model = computed({
  get: () => props.modelValue,
  set: val => emit('update:modelValue', val)
});

function reset() {
  emit('reset');
}
</script>
