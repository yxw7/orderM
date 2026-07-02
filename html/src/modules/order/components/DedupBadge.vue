<template>
  <span v-if="value === null || value === undefined" />
  <span v-else-if="value === false" class="text-gray-600">无</span>
  <button v-else type="button" class="text-sky-600 hover:underline" @click="$emit('view')">有</button>
</template>

<script setup>
defineProps({
  value: { type: [Boolean, null], default: null }
});

defineEmits(['view']);
</script>
