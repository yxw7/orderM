<template>
  <div class="flex flex-col items-center justify-center h-full text-gray-500">
    <p class="text-lg mb-2">页面待迁移</p>
    <p class="text-sm">该功能将在后续批次重构中完成</p>
    <p class="text-xs mt-4 text-gray-400">{{ route.path }}</p>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
const route = useRoute();
</script>
