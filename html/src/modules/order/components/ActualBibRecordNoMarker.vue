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
        <ul class="space-y-1 mb-2 max-h-40 overflow-y-auto">
          <li
            v-for="no in recordNos"
            :key="no"
            class="font-mono text-xs text-gray-800 break-all"
          >
            {{ no }}
          </li>
        </ul>
        <button
          type="button"
          class="text-sky-600 hover:underline text-xs"
          @click="copyAll"
        >
          {{ copied ? '已复制' : '复制全部' }}
        </button>
      </div>
    </Teleport>
  </span>
</template>

<script setup>
import { computed, nextTick, ref } from 'vue';

const props = defineProps({
  recordNos: { type: Array, default: () => [] }
});

const popoverOpen = ref(false);
const popoverStyle = ref({ top: '0px', left: '0px' });
const copied = ref(false);
let closeTimer = null;

const copyText = computed(() => props.recordNos.join('\n'));

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
    copied.value = false;
    closeTimer = null;
  }, 120);
}

function cancelClose() {
  if (closeTimer) {
    clearTimeout(closeTimer);
    closeTimer = null;
  }
}

async function copyAll() {
  const text = copyText.value;
  if (!text) return;
  try {
    await navigator.clipboard.writeText(text);
    copied.value = true;
  } catch {
    window.prompt('复制以下内容', text);
  }
}
</script>
