<template>
  <span
    v-if="recordNos.length"
    class="actual-bib-marker inline-flex"
    @mouseenter="openPopover"
    @mouseleave="scheduleClose"
  >
    <span
      class="inline-flex items-center justify-center w-4 h-4 text-[10px] font-medium text-sky-600 bg-sky-50 border border-sky-200 rounded cursor-help leading-none"
      title="存在实际关联书目记录号"
      aria-label="存在实际关联书目记录号"
    >
      实
    </span>
    <Teleport to="body">
      <div
        v-if="popoverOpen"
        class="fixed z-[110] w-72 px-3 py-2.5 text-sm text-gray-700 bg-white border border-gray-200 rounded shadow-lg"
        :style="popoverStyle"
        @mouseenter="cancelClose"
        @mouseleave="scheduleClose"
      >
        <p class="text-xs font-medium text-gray-500 mb-2">实际关联书目记录号</p>
        <ul class="space-y-1 max-h-40 overflow-y-auto">
          <li v-for="no in recordNos" :key="no">
            <button
              type="button"
              class="font-mono text-xs text-sky-600 hover:underline break-all text-left"
              @click.stop="onOpenRecord(no)"
            >
              {{ no }}
            </button>
          </li>
        </ul>
      </div>
    </Teleport>
  </span>
</template>

<script setup>
import { nextTick, ref } from 'vue';

defineProps({
  recordNos: { type: Array, default: () => [] }
});

const emit = defineEmits(['open-record']);

const popoverOpen = ref(false);
const popoverStyle = ref({ top: '0px', left: '0px' });
let closeTimer = null;

function openPopover(event) {
  if (closeTimer) {
    clearTimeout(closeTimer);
    closeTimer = null;
  }
  popoverOpen.value = true;
  nextTick(() => {
    const rect = event.currentTarget.getBoundingClientRect();
    const gap = 6;
    let top = rect.bottom + gap;
    let left = rect.left;
    const panelWidth = 288;
    if (left + panelWidth > window.innerWidth - 8) {
      left = Math.max(8, window.innerWidth - panelWidth - 8);
    }
    if (top + 160 > window.innerHeight - 8) {
      top = Math.max(8, rect.top - 160 - gap);
    }
    popoverStyle.value = { top: `${top}px`, left: `${left}px` };
  });
}

function scheduleClose() {
  if (closeTimer) clearTimeout(closeTimer);
  closeTimer = window.setTimeout(() => {
    popoverOpen.value = false;
    closeTimer = null;
  }, 120);
}

function cancelClose() {
  if (closeTimer) {
    clearTimeout(closeTimer);
    closeTimer = null;
  }
}

function onOpenRecord(recordNo) {
  emit('open-record', recordNo);
  if (closeTimer) {
    clearTimeout(closeTimer);
    closeTimer = null;
  }
}
</script>
