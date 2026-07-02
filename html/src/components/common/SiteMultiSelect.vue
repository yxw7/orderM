<template>
  <div ref="rootRef" class="relative">
    <div
      ref="triggerRef"
      class="min-h-[38px] border rounded px-2 py-1.5 flex flex-wrap gap-1.5 items-center cursor-text bg-white focus-within:border-sky-500"
      :class="error ? 'border-red-400' : 'border-gray-300'"
      @click="toggleDropdown"
    >
      <div class="flex flex-wrap gap-1.5 flex-1 min-w-0">
        <span
          v-for="item in modelValue"
          :key="item"
          class="inline-flex items-center gap-1 bg-gray-50 border border-gray-200 rounded px-2 py-0.5 text-sm text-gray-700 max-w-full"
        >
          <span class="truncate">{{ item }}</span>
          <button
            type="button"
            class="text-gray-400 hover:text-gray-600 leading-none shrink-0"
            @click.stop="remove(item)"
          >
            &times;
          </button>
        </span>
        <span v-if="!modelValue.length" class="text-sm text-gray-400 px-1">{{ placeholder }}</span>
      </div>
      <span class="text-gray-400 text-xs shrink-0 pr-1">▼</span>
    </div>
    <Teleport to="body">
      <div
        v-if="open"
        ref="dropdownRef"
        class="fixed bg-white border border-gray-200 rounded shadow-lg z-[100] max-h-48 overflow-auto"
        :style="dropdownStyle"
      >
        <ul class="py-1 text-sm">
          <li v-if="!availableOptions.length" class="px-3 py-2 text-gray-400">无可选项</li>
          <li v-for="opt in availableOptions" :key="opt">
            <button
              type="button"
              class="w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-50"
              @click.stop="add(opt)"
            >
              {{ opt }}
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
  error: { type: String, default: '' }
});

const emit = defineEmits(['update:modelValue']);

const open = ref(false);
const rootRef = ref(null);
const triggerRef = ref(null);
const dropdownRef = ref(null);
const dropdownStyle = ref({ top: '0px', left: '0px', width: '0px' });

const availableOptions = computed(() =>
  props.options.filter(opt => !props.modelValue.includes(opt))
);

function updateDropdownPosition() {
  const trigger = triggerRef.value;
  if (!trigger) return;

  const rect = trigger.getBoundingClientRect();
  const gap = 4;
  const maxHeight = 192;
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

async function toggleDropdown() {
  open.value = !open.value;
  if (open.value) {
    await nextTick();
    updateDropdownPosition();
  }
}

function add(value) {
  emit('update:modelValue', [...props.modelValue, value]);
}

function remove(value) {
  emit('update:modelValue', props.modelValue.filter(item => item !== value));
}

function onDocumentClick(event) {
  const target = event.target;
  if (rootRef.value?.contains(target) || dropdownRef.value?.contains(target)) return;
  open.value = false;
}

function onViewportChange() {
  if (open.value) updateDropdownPosition();
}

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
