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
      class="fixed max-w-md px-3 py-2 text-sm text-gray-700 bg-white border border-gray-200 rounded shadow-lg whitespace-pre-wrap"
      :style="{ ...style, zIndex: zIndex }"
    >
      {{ text }}
    </div>
  </Teleport>
</template>

<script setup>
import { nextTick, ref, watch } from 'vue';

const props = defineProps({
  text: { type: String, default: '' },
  zIndex: { type: Number, default: 200 }
});

const show = ref(false);
const triggerRef = ref(null);
const style = ref({ top: '0px', left: '0px' });

watch(show, async val => {
  if (!val || !triggerRef.value) return;
  await nextTick();
  const rect = triggerRef.value.getBoundingClientRect();
  const gap = 6;
  const estWidth = 448;
  const estHeight = 280;
  let top = rect.bottom + gap;
  let left = rect.left;
  if (left + estWidth > window.innerWidth - 8) left = Math.max(8, window.innerWidth - estWidth - 8);
  if (top + estHeight > window.innerHeight - 8) top = Math.max(8, rect.top - estHeight - gap);
  style.value = { top: `${top}px`, left: `${left}px` };
});
</script>
