<template>
  <div ref="rootRef" class="relative inline-block">
    <button
      ref="triggerRef"
      type="button"
      class="flex items-center gap-1 px-4 py-1.5 text-sm rounded"
      :class="variantClass"
      @click="toggle"
    >
      {{ label }}
      <svg v-if="items.length" class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
      </svg>
    </button>
    <Teleport to="body">
      <div
        v-if="open && items.length"
        ref="dropdownRef"
        class="fixed bg-white border border-gray-200 rounded shadow-lg z-[110] min-w-[120px]"
        :style="dropdownStyle"
      >
        <button
          v-for="item in items"
          :key="item.label"
          type="button"
          class="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
          @click="select(item)"
        >
          {{ item.label }}
        </button>
      </div>
    </Teleport>
  </div>
</template>

<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue';

const props = defineProps({
  label: { type: String, required: true },
  items: { type: Array, default: () => [] },
  variant: { type: String, default: 'emerald' }
});

const emit = defineEmits(['select']);

const open = ref(false);
const rootRef = ref(null);
const triggerRef = ref(null);
const dropdownRef = ref(null);
const dropdownStyle = ref({ top: '0px', left: '0px' });

const variantClasses = {
  emerald: 'bg-emerald-500 text-white hover:bg-emerald-600',
  sky: 'bg-sky-600 text-white hover:bg-sky-700',
  amber: 'bg-amber-500 text-white hover:bg-amber-600',
  teal: 'bg-teal-500 text-white hover:bg-teal-600',
  orange: 'bg-orange-500 text-white hover:bg-orange-600',
  outline: 'border border-sky-600 text-sky-600 bg-white hover:bg-sky-50'
};

const variantClass = computed(() => variantClasses[props.variant] || variantClasses.emerald);

function updateDropdownPosition() {
  const trigger = triggerRef.value;
  if (!trigger) return;

  const rect = trigger.getBoundingClientRect();
  const gap = 4;
  dropdownStyle.value = {
    top: `${rect.bottom + gap}px`,
    left: `${rect.left}px`
  };
}

async function toggle() {
  open.value = !open.value;
  if (open.value) {
    await nextTick();
    updateDropdownPosition();
  }
}

function select(item) {
  open.value = false;
  emit('select', item);
}

function onDocClick(event) {
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

onMounted(() => document.addEventListener('click', onDocClick));
onBeforeUnmount(() => {
  document.removeEventListener('click', onDocClick);
  window.removeEventListener('scroll', onViewportChange, true);
  window.removeEventListener('resize', onViewportChange);
});
</script>
