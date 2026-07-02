<template>
  <div class="relative inline-block">
    <button
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
    <div
      v-if="open && items.length"
      class="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded shadow-lg z-10 min-w-[120px]"
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
  </div>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue';

const props = defineProps({
  label: { type: String, required: true },
  items: { type: Array, default: () => [] },
  variant: { type: String, default: 'emerald' }
});

const emit = defineEmits(['select']);

const open = ref(false);

const variantClasses = {
  emerald: 'bg-emerald-500 text-white hover:bg-emerald-600',
  sky: 'bg-sky-600 text-white hover:bg-sky-700',
  amber: 'bg-amber-500 text-white hover:bg-amber-600',
  teal: 'bg-teal-500 text-white hover:bg-teal-600',
  orange: 'bg-orange-500 text-white hover:bg-orange-600',
  outline: 'border border-sky-600 text-sky-600 bg-white hover:bg-sky-50'
};

const variantClass = computed(() => variantClasses[props.variant] || variantClasses.emerald);

function toggle() {
  open.value = !open.value;
}

function select(item) {
  open.value = false;
  emit('select', item);
}

function onDocClick(e) {
  if (!e.target.closest('.relative')) open.value = false;
}

onMounted(() => document.addEventListener('click', onDocClick));
onUnmounted(() => document.removeEventListener('click', onDocClick));
</script>
