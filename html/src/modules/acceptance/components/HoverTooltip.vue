<template>
  <span
    ref="triggerRef"
    class="inline-block"
    @mouseenter="show = true"
    @mouseleave="show = false"
  >
    <slot />
  </span>
  <Teleport to="body">
    <div
      v-if="show && text"
      class="fixed z-[110] max-w-sm px-3 py-2 text-sm text-gray-700 bg-white border border-gray-200 rounded shadow-lg whitespace-pre-wrap"
      :style="style"
    >
      {{ text }}
    </div>
  </Teleport>
</template>

<script setup>
import { nextTick, ref, watch } from 'vue';

const props = defineProps({
  text: { type: String, default: '' }
});

const show = ref(false);
const triggerRef = ref(null);
const style = ref({ top: '0px', left: '0px' });

watch(show, async val => {
  if (!val || !triggerRef.value) return;
  await nextTick();
  const rect = triggerRef.value.getBoundingClientRect();
  const gap = 6;
  let top = rect.bottom + gap;
  let left = rect.left;
  if (left + 320 > window.innerWidth - 8) left = Math.max(8, window.innerWidth - 328);
  if (top + 120 > window.innerHeight - 8) top = Math.max(8, rect.top - 120 - gap);
  style.value = { top: `${top}px`, left: `${left}px` };
});
</script>
