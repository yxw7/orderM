<template>
  <div :class="bordered ? 'border-t border-gray-100' : ''">
    <div class="px-3 pt-2 pb-1 text-xs text-gray-400">{{ title }}</div>
    <div class="max-h-52 overflow-y-auto px-1 pb-2">
      <div
        v-for="(col, index) in columns"
        :key="col.key"
        class="group flex items-center gap-1.5 px-2 py-1.5 rounded"
        :class="dragState.section === section && dragState.overIndex === index ? 'bg-sky-50' : 'hover:bg-gray-50'"
        @dragover.prevent="emit('drag-over', section, index)"
        @dragleave="emit('drag-leave', section, index)"
        @drop.prevent="emit('drop', section, index)"
      >
        <button
          type="button"
          class="shrink-0 p-0.5 text-gray-300 hover:text-gray-500 cursor-grab active:cursor-grabbing"
          draggable="true"
          aria-label="拖动排序"
          @dragstart="emit('drag-start', section, index, $event)"
          @dragend="emit('drag-end')"
        >
          <svg class="w-3.5 h-3.5" viewBox="0 0 10 16" fill="currentColor" aria-hidden="true">
            <circle cx="2" cy="2" r="1.2" />
            <circle cx="8" cy="2" r="1.2" />
            <circle cx="2" cy="8" r="1.2" />
            <circle cx="8" cy="8" r="1.2" />
            <circle cx="2" cy="14" r="1.2" />
            <circle cx="8" cy="14" r="1.2" />
          </svg>
        </button>

        <label class="inline-flex items-center gap-2 flex-1 min-w-0 cursor-pointer">
          <input v-model="col.visible" type="checkbox" class="rounded text-sky-600 shrink-0">
          <span class="truncate text-gray-700">{{ col.label }}</span>
        </label>

        <div class="hidden group-hover:flex items-center gap-0.5 shrink-0">
          <button
            v-for="action in pinActions(col.pin)"
            :key="action.pin"
            type="button"
            class="p-1 text-sky-500 hover:text-sky-700 hover:bg-sky-50 rounded"
            :title="action.label"
            @click.stop="emit('pin', col.key, action.pin)"
          >
            <component :is="action.icon" />
          </button>
        </div>
      </div>
      <div v-if="!columns.length" class="px-2 py-2 text-xs text-gray-400">暂无字段</div>
    </div>
  </div>
</template>

<script setup>
import { h } from 'vue';
import { PIN_LEFT, PIN_NONE, PIN_RIGHT } from '@/composables/useColumnDisplay';

defineProps({
  title: { type: String, required: true },
  section: { type: String, required: true },
  columns: { type: Array, default: () => [] },
  bordered: { type: Boolean, default: false },
  dragState: { type: Object, required: true }
});

const emit = defineEmits(['move', 'pin', 'drag-start', 'drag-over', 'drag-leave', 'drop', 'drag-end']);

const IconPinLeft = {
  render() {
    return h('svg', { class: 'w-4 h-4', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M5 10h14M5 10l4-4M5 10l4 4' })
    ]);
  }
};

const IconPinRight = {
  render() {
    return h('svg', { class: 'w-4 h-4', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M19 10H5m14 0l-4-4m4 4l-4 4' })
    ]);
  }
};

const IconUnpin = {
  render() {
    return h('svg', { class: 'w-4 h-4', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M8 7h12M8 12h12M8 17h12M4 7v0M4 12v0M4 17v0' })
    ]);
  }
};

/**
 * @param {'none'|'left'|'right'} pin
 * @returns {Array<{ pin: string, label: string, icon: object }>}
 */
function pinActions(pin) {
  if (pin === PIN_LEFT) {
    return [
      { pin: PIN_RIGHT, label: '固定在列尾', icon: IconPinRight },
      { pin: PIN_NONE, label: '不固定', icon: IconUnpin }
    ];
  }
  if (pin === PIN_RIGHT) {
    return [
      { pin: PIN_LEFT, label: '固定在列首', icon: IconPinLeft },
      { pin: PIN_NONE, label: '不固定', icon: IconUnpin }
    ];
  }
  return [
    { pin: PIN_LEFT, label: '固定在列首', icon: IconPinLeft },
    { pin: PIN_RIGHT, label: '固定在列尾', icon: IconPinRight }
  ];
}
</script>
