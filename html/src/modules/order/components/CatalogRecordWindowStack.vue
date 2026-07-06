<template>
  <Teleport to="body">
    <CatalogRecordFloatingWindow
      v-for="win in windows"
      :key="win.recordNo"
      :window-state="win"
      @close="$emit('close', $event)"
      @focus="$emit('focus', $event)"
      @update-layout="$emit('update-layout', $event)"
    />
  </Teleport>
</template>

<script setup>
import CatalogRecordFloatingWindow from '@/modules/order/components/CatalogRecordFloatingWindow.vue';

defineProps({
  windows: { type: Array, default: () => [] }
});

defineEmits(['close', 'focus', 'update-layout']);
</script>
