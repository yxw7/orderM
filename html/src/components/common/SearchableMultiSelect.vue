<template>
  <div ref="rootRef" class="relative">
    <div
      ref="triggerRef"
      class="min-h-[38px] border rounded px-2 py-1.5 flex items-start gap-1.5 cursor-text bg-white focus-within:border-sky-500"
      :class="[
        error ? 'border-red-400' : open ? 'border-sky-500' : 'border-gray-300',
        disabled ? 'bg-gray-50 opacity-60 cursor-not-allowed' : ''
      ]"
      @click="openDropdown"
    >
      <div class="flex-1 min-w-0 max-h-24 overflow-y-auto">
        <div class="flex flex-wrap gap-1.5 items-center">
          <span
            v-for="item in selectedItems"
            :key="item.value"
            class="inline-flex items-center gap-1 bg-gray-50 border border-gray-200 rounded px-2 py-0.5 text-sm text-gray-700 max-w-full"
          >
            <span class="truncate">{{ item.label }}</span>
            <button
              type="button"
              class="text-gray-400 hover:text-gray-600 leading-none shrink-0"
              :disabled="disabled"
              @click.stop="remove(item.value)"
            >
              &times;
            </button>
          </span>
          <input
            ref="inputRef"
            v-model="keyword"
            type="text"
            class="flex-1 min-w-[4rem] border-0 outline-none text-sm text-gray-700 bg-transparent py-0.5"
            :placeholder="modelValue.length ? '' : placeholder"
            :disabled="disabled"
            @focus="openDropdown"
            @keydown.down.prevent="moveHighlight(1)"
            @keydown.up.prevent="moveHighlight(-1)"
            @keydown.enter.prevent="confirmHighlight"
            @keydown.esc.prevent="closeDropdown"
            @click.stop="openDropdown"
          >
        </div>
      </div>
      <span class="text-gray-400 text-xs shrink-0 pr-1 pt-1.5">▼</span>
    </div>
    <Teleport to="body">
      <div
        v-if="open"
        ref="dropdownRef"
        class="fixed bg-white border border-gray-200 rounded shadow-lg z-[130] overflow-auto"
        :style="dropdownStyle"
      >
        <div
          v-if="options.length"
          class="sticky top-0 z-10 flex items-center justify-between gap-4 px-3 py-2 text-sm text-gray-700 bg-white border-b border-gray-100"
          @mousedown.prevent
          @click.stop
        >
          <label class="inline-flex items-center gap-1.5 cursor-pointer select-none">
            <input
              type="checkbox"
              class="rounded border-gray-300 text-sky-600 focus:ring-sky-500"
              :checked="allFilteredSelected"
              :disabled="!filteredOptions.length"
              @change="toggleSelectAll"
            >
            <span>全选</span>
          </label>
          <label class="inline-flex items-center gap-1.5 cursor-pointer select-none">
            <input
              type="checkbox"
              class="rounded border-gray-300 text-sky-600 focus:ring-sky-500"
              :checked="false"
              :disabled="!filteredOptions.length"
              @click.prevent="invertSelection"
            >
            <span>反选</span>
          </label>
        </div>
        <ul class="py-1 text-sm">
          <li v-if="!filteredOptions.length" class="px-3 py-2 text-gray-400">无匹配结果</li>
          <li v-for="(opt, index) in filteredOptions" :key="opt.value">
            <button
              type="button"
              class="w-full text-left px-3 py-2 text-gray-700 flex items-center gap-2"
              :class="index === highlightIndex ? 'bg-gray-100' : 'hover:bg-gray-50'"
              @mousedown.prevent
              @click.stop="toggle(opt)"
              @mouseenter="highlightIndex = index"
            >
              <span
                class="inline-flex w-4 h-4 shrink-0 items-center justify-center rounded border text-[10px]"
                :class="isSelected(opt.value)
                  ? 'border-sky-500 bg-sky-500 text-white'
                  : 'border-gray-300 text-transparent'"
              >✓</span>
              <span class="truncate">{{ opt.label }}</span>
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
  modelValue: { type: Array, default: () => [] },
  options: { type: Array, default: () => [] },
  placeholder: { type: String, default: '请选择' },
  error: { type: String, default: '' },
  disabled: { type: Boolean, default: false }
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

const selectedSet = computed(() => new Set(props.modelValue));

const selectedItems = computed(() =>
  props.modelValue.map(value => {
    const hit = props.options.find(opt => opt.value === value);
    return { value, label: hit?.label || value };
  })
);

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

const allFilteredSelected = computed(() =>
  filteredOptions.value.length > 0
  && filteredOptions.value.every(opt => selectedSet.value.has(opt.value))
);

function isSelected(value) {
  return selectedSet.value.has(value);
}

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
  if (props.disabled) return;
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

function emitValues(next) {
  emit('update:modelValue', next);
  nextTick(() => updateDropdownPosition());
}

function toggle(opt) {
  if (isSelected(opt.value)) {
    emitValues(props.modelValue.filter(item => item !== opt.value));
  } else {
    emitValues([...props.modelValue, opt.value]);
  }
}

function remove(value) {
  if (props.disabled) return;
  emitValues(props.modelValue.filter(item => item !== value));
}

function toggleSelectAll(event) {
  const filteredValues = filteredOptions.value.map(opt => opt.value);
  if (event.target.checked) {
    const next = new Set(props.modelValue);
    filteredValues.forEach(value => next.add(value));
    emitValues([...next]);
  } else {
    const removeSet = new Set(filteredValues);
    emitValues(props.modelValue.filter(value => !removeSet.has(value)));
  }
}

function invertSelection() {
  const selected = new Set(props.modelValue);
  const filteredValues = filteredOptions.value.map(opt => opt.value);
  filteredValues.forEach(value => {
    if (selected.has(value)) selected.delete(value);
    else selected.add(value);
  });
  // Keep options order for stable tags
  const ordered = props.options
    .map(opt => opt.value)
    .filter(value => selected.has(value));
  const extras = [...selected].filter(value => !ordered.includes(value));
  emitValues([...ordered, ...extras]);
}

function moveHighlight(step) {
  if (!filteredOptions.value.length) return;
  const len = filteredOptions.value.length;
  highlightIndex.value = (highlightIndex.value + step + len) % len;
}

function confirmHighlight() {
  const opt = filteredOptions.value[highlightIndex.value];
  if (opt) toggle(opt);
}

function onOutsidePointerDown(event) {
  if (!open.value) return;
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

onMounted(() => {
  // 捕获阶段：弹窗等父级 @click.stop 时仍能感知外部点击
  document.addEventListener('mousedown', onOutsidePointerDown, true);
});
onBeforeUnmount(() => {
  document.removeEventListener('mousedown', onOutsidePointerDown, true);
  window.removeEventListener('scroll', onViewportChange, true);
  window.removeEventListener('resize', onViewportChange);
});
</script>
