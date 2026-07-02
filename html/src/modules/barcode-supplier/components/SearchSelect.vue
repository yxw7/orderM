<template>
  <div ref="rootRef" class="relative">
    <input
      :value="displayValue"
      type="text"
      autocomplete="off"
      :placeholder="placeholder"
      :readonly="readonly"
      class="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:border-sky-500"
      :class="[
        error ? 'border-red-500' : 'border-gray-300',
        readonly ? 'bg-gray-50 text-gray-600 cursor-not-allowed' : ''
      ]"
      @focus="openDropdown"
      @input="onInput"
    >
    <div
      v-if="dropdownOpen && !readonly"
      class="absolute left-0 right-0 top-full mt-1 bg-white border border-gray-200 rounded shadow-lg z-20 py-1 max-h-[200px] overflow-y-auto"
    >
      <button
        v-for="option in filteredOptions"
        :key="getValue(option)"
        type="button"
        class="search-select-option w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-sky-50"
        @mousedown.prevent="selectOption(option)"
      >
        {{ getLabel(option) }}
      </button>
      <p v-if="!filteredOptions.length" class="px-3 py-2 text-sm text-gray-400">无匹配项</p>
    </div>
    <p v-if="error" class="text-red-500 text-xs mt-1">{{ error }}</p>
  </div>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue';

const props = defineProps({
  modelValue: { type: String, default: '' },
  options: { type: Array, default: () => [] },
  placeholder: { type: String, default: '请选择' },
  readonly: { type: Boolean, default: false },
  error: { type: String, default: '' },
  getLabel: { type: Function, default: item => item },
  getValue: { type: Function, default: item => item }
});

const emit = defineEmits(['update:modelValue']);

const rootRef = ref(null);
const dropdownOpen = ref(false);
const keyword = ref('');

const displayValue = computed({
  get: () => props.modelValue,
  set: val => emit('update:modelValue', val)
});

const filteredOptions = computed(() => {
  const kw = keyword.value.trim().toLowerCase();
  if (!kw) return props.options;
  return props.options.filter(option => props.getLabel(option).toLowerCase().includes(kw));
});

watch(() => props.modelValue, val => {
  keyword.value = val || '';
});

function openDropdown() {
  if (props.readonly) return;
  keyword.value = props.modelValue || '';
  dropdownOpen.value = true;
}

function onInput(e) {
  const val = e.target.value;
  keyword.value = val;
  emit('update:modelValue', val);
  dropdownOpen.value = true;
}

function selectOption(option) {
  const label = props.getLabel(option);
  emit('update:modelValue', label);
  keyword.value = label;
  dropdownOpen.value = false;
}

function onDocClick(e) {
  if (!rootRef.value?.contains(e.target)) dropdownOpen.value = false;
}

onMounted(() => document.addEventListener('click', onDocClick));
onBeforeUnmount(() => document.removeEventListener('click', onDocClick));
</script>
