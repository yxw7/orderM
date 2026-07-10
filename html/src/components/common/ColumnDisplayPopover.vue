<template>
  <div ref="rootRef" class="relative inline-block">
    <button
      ref="triggerRef"
      type="button"
      class="p-1.5 text-gray-400 hover:text-gray-600 rounded hover:bg-gray-50"
      :title="title"
      @click="toggleOpen"
    >
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    </button>

    <Teleport to="body">
      <div
        v-if="open"
        ref="panelRef"
        class="fixed z-[110] w-80 bg-white border border-gray-200 rounded shadow-lg text-sm"
        :style="panelStyle"
      >
        <div class="flex items-center justify-between px-3 py-2.5 border-b border-gray-100">
          <label class="inline-flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              class="rounded text-sky-600"
              :checked="selectAllChecked"
              :indeterminate.prop="selectAllIndeterminate"
              @change="onToggleAll"
            >
            <span class="font-medium text-gray-800">列展示</span>
          </label>
          <button type="button" class="text-sky-600 hover:text-sky-700" @click="emit('reset')">重置</button>
        </div>

        <ColumnSection
          v-if="leftPinnedColumns.length"
          title="固定在列首"
          section="left"
          :columns="leftPinnedColumns"
          :drag-state="dragState"
          @move="(from, to) => emit('move', 'left', from, to)"
          @pin="(key, pin) => emit('pin', key, pin)"
          @drag-start="onDragStart"
          @drag-over="onDragOver"
          @drag-leave="onDragLeave"
          @drop="onDrop"
          @drag-end="onDragEnd"
        />

        <ColumnSection
          title="不固定"
          section="none"
          :columns="unpinnedColumns"
          :bordered="leftPinnedColumns.length > 0"
          :drag-state="dragState"
          @move="(from, to) => emit('move', 'none', from, to)"
          @pin="(key, pin) => emit('pin', key, pin)"
          @drag-start="onDragStart"
          @drag-over="onDragOver"
          @drag-leave="onDragLeave"
          @drop="onDrop"
          @drag-end="onDragEnd"
        />

        <ColumnSection
          v-if="rightPinnedColumns.length"
          title="固定在列尾"
          section="right"
          :columns="rightPinnedColumns"
          bordered
          :drag-state="dragState"
          @move="(from, to) => emit('move', 'right', from, to)"
          @pin="(key, pin) => emit('pin', key, pin)"
          @drag-start="onDragStart"
          @drag-over="onDragOver"
          @drag-leave="onDragLeave"
          @drop="onDrop"
          @drag-end="onDragEnd"
        />
      </div>
    </Teleport>
  </div>
</template>

<script setup>
import { nextTick, onBeforeUnmount, onMounted, reactive, ref, watch } from 'vue';
import ColumnSection from './ColumnDisplaySection.vue';

const props = defineProps({
  unpinnedColumns: { type: Array, default: () => [] },
  leftPinnedColumns: { type: Array, default: () => [] },
  rightPinnedColumns: { type: Array, default: () => [] },
  selectAllChecked: { type: Boolean, default: true },
  selectAllIndeterminate: { type: Boolean, default: false },
  title: { type: String, default: '列展示' }
});

const emit = defineEmits(['reset', 'toggle-all', 'move', 'pin']);

const open = ref(false);
const rootRef = ref(null);
const triggerRef = ref(null);
const panelRef = ref(null);
const panelStyle = ref({ top: '0px', left: '0px' });
const dragState = reactive({ section: '', fromIndex: -1, overIndex: -1 });

async function toggleOpen() {
  open.value = !open.value;
  if (open.value) {
    await nextTick();
    updatePanelPosition();
  }
}

function updatePanelPosition() {
  const trigger = triggerRef.value;
  if (!trigger) return;

  const rect = trigger.getBoundingClientRect();
  const panelWidth = 320;
  const gap = 8;
  let left = rect.right - panelWidth;
  left = Math.max(8, Math.min(left, window.innerWidth - panelWidth - 8));

  panelStyle.value = {
    top: `${rect.bottom + gap}px`,
    left: `${left}px`
  };
}

function onToggleAll(event) {
  emit('toggle-all', event.target.checked);
}

function onDragStart(section, index, event) {
  dragState.section = section;
  dragState.fromIndex = index;
  dragState.overIndex = index;
  event.dataTransfer.effectAllowed = 'move';
  event.dataTransfer.setData('text/plain', `${section}:${index}`);
}

function onDragOver(section, index) {
  if (dragState.section !== section) return;
  dragState.overIndex = index;
}

function onDragLeave(section, index) {
  if (dragState.section === section && dragState.overIndex === index) {
    dragState.overIndex = -1;
  }
}

function onDrop(section, index) {
  if (dragState.section === section && dragState.fromIndex >= 0 && dragState.fromIndex !== index) {
    emit('move', section, dragState.fromIndex, index);
  }
  onDragEnd();
}

function onDragEnd() {
  dragState.section = '';
  dragState.fromIndex = -1;
  dragState.overIndex = -1;
}

function onDocumentClick(event) {
  const target = event.target;
  if (rootRef.value?.contains(target) || panelRef.value?.contains(target)) return;
  open.value = false;
}

function onViewportChange() {
  if (open.value) updatePanelPosition();
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
