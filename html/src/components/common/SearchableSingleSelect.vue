<template>
  <div ref="rootRef" class="relative">
    <div
      ref="triggerRef"
      class="min-h-[38px] border rounded px-2 py-1.5 flex flex-wrap gap-1.5 items-center cursor-text bg-white focus-within:border-sky-500"
      :class="error ? 'border-red-400' : open ? 'border-sky-500' : 'border-gray-300'"
      @click="openDropdown"
    >
      <span
        v-if="selectedLabel"
        class="inline-flex items-center gap-1 bg-gray-50 border border-gray-200 rounded px-2 py-0.5 text-sm text-gray-700 max-w-[calc(100%-1.5rem)]"
      >
        <span class="truncate">{{ selectedLabel }}</span>
        <button
          type="button"
          class="text-gray-400 hover:text-gray-600 leading-none shrink-0"
          @click.stop="clear"
        >
          &times;
        </button>
      </span>
      <input
        ref="inputRef"
        v-model="keyword"
        type="text"
        class="flex-1 min-w-[4rem] border-0 outline-none text-sm text-gray-700 bg-transparent py-0.5"
        :placeholder="selectedLabel ? '' : placeholder"
        @focus="openDropdown"
        @keydown.down.prevent="moveHighlight(1)"
        @keydown.up.prevent="moveHighlight(-1)"
        @keydown.enter.prevent="confirmHighlight"
        @keydown.esc.prevent="closeDropdown"
      >
      <span class="text-gray-400 text-xs shrink-0 pr-1">▼</span>
    </div>
    <Teleport to="body">
      <div
        v-if="open"
        ref="dropdownRef"
        class="fixed bg-white border border-gray-200 rounded shadow-lg z-[130] overflow-auto"
        :style="dropdownStyle"
      >
        <ul class="py-1 text-sm">
          <li v-if="!filteredOptions.length" class="px-3 py-2 text-gray-400">无匹配结果</li>
          <li v-for="(opt, index) in filteredOptions" :key="opt.value">
            <button
              type="button"
              class="w-full text-left px-3 py-2 text-gray-700"
              :class="index === highlightIndex ? 'bg-gray-100' : 'hover:bg-gray-50'"
              @click.stop="select(opt)"
              @mouseenter="highlightIndex = index"
            >
              {{ opt.label }}
            </button>
          </li>
        </ul>
      </div>
    </Teleport>
    <p v-if="error" class="text-red-500 text-xs mt-1">{{ error }}</p>
  </div>
</template>

<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue';

const props = defineProps({
  modelValue: { type: String, default: '' },
  options: { type: Array, default: () => [] },
  placeholder: { type: String, default: '请选择' },
  error: { type: String, default: '' }
});

const emit = defineEmits(['update:modelValue']);

const open = ref(false);
const keyword = ref('');
const highlightIndex = ref(0);
const rootRef = ref(null);
const triggerRef = ref(null);
const inputRef = ref(null);
const dropdownRef = ref(null);
const dropdownStyle = ref({ top: '0px', left: '0px', width: '0px' });

const selectedLabel = computed(() => {
  const hit = props.options.find(opt => opt.value === props.modelValue);
  return hit?.label || '';
});

const filteredOptions = computed(() => {
  const key = keyword.value.trim().toLowerCase();
  if (!key) return props.options;
  return props.options.filter(opt => {
    const label = String(opt.label || '').toLowerCase();
    const value = String(opt.value || '').toLowerCase();
    const code = String(opt.code || '').toLowerCase();
    const name = String(opt.name || '').toLowerCase();
    return label.includes(key) || value.includes(key) || code.includes(key) || name.includes(key);
  });
});

function updateDropdownPosition() {
  const trigger = triggerRef.value;
  if (!trigger) return;

  const rect = trigger.getBoundingClientRect();
  const gap = 4;
  const maxHeight = 240;
  const spaceBelow = window.innerHeight - rect.bottom - gap;
  const spaceAbove = rect.top - gap;
  const openUpward = spaceBelow < maxHeight && spaceAbove > spaceBelow;

  dropdownStyle.value = {
    left: `${rect.left}px`,
    width: `${rect.width}px`,
    top: openUpward ? `${rect.top - gap}px` : `${rect.bottom + gap}px`,
    transform: openUpward ? 'translateY(-100%)' : 'none',
    maxHeight: `${Math.min(maxHeight, openUpward ? spaceAbove : spaceBelow)}px`
  };
}

async function openDropdown() {
  open.value = true;
  highlightIndex.value = 0;
  await nextTick();
  updateDropdownPosition();
  inputRef.value?.focus();
}

function closeDropdown() {
  open.value = false;
  keyword.value = '';
  highlightIndex.value = 0;
}

function select(opt) {
  emit('update:modelValue', opt.value);
  closeDropdown();
}

function clear() {
  emit('update:modelValue', '');
  keyword.value = '';
  nextTick(() => inputRef.value?.focus());
}

function moveHighlight(step) {
  if (!filteredOptions.value.length) return;
  const len = filteredOptions.value.length;
  highlightIndex.value = (highlightIndex.value + step + len) % len;
}

function confirmHighlight() {
  const opt = filteredOptions.value[highlightIndex.value];
  if (opt) select(opt);
}

function onDocumentClick(event) {
  const target = event.target;
  if (rootRef.value?.contains(target) || dropdownRef.value?.contains(target)) return;
  closeDropdown();
}

function onViewportChange() {
  if (open.value) updateDropdownPosition();
}

watch(filteredOptions, () => {
  highlightIndex.value = 0;
});

watch(open, isOpen => {
  if (isOpen) {
    window.addEventListener('scroll', onViewportChange, true);
    window.addEventListener('resize', onViewportChange);
  } else {
    window.removeEventListener('scroll', onViewportChange, true);
    window.removeEventListener('resize', onViewportChange);
  }
});

onMounted(() => document.addEventListener('click', onDocumentClick));
onBeforeUnmount(() => {
  document.removeEventListener('click', onDocumentClick);
  window.removeEventListener('scroll', onViewportChange, true);
  window.removeEventListener('resize', onViewportChange);
});
</script>
