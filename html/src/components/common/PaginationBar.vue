<template>
  <div class="flex items-center justify-between px-4 py-3 border-t border-gray-200 shrink-0 bg-white">
    <span class="text-sm text-gray-500">
      <template v-if="checkedCount > 0">
        已选中 {{ checkedCount }} {{ unit }} / 共 {{ total }} {{ unit }}
      </template>
      <template v-else>
        共 {{ total }} {{ unit }}
      </template>
    </span>
    <div class="flex items-center gap-2">
      <button
        type="button"
        class="px-2 py-1 border border-gray-300 rounded text-sm"
        :class="page <= 1 ? 'text-gray-400' : 'text-gray-600 hover:bg-gray-50'"
        :disabled="page <= 1"
        @click="goPage(page - 1)"
      >
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
        </svg>
      </button>
      <button type="button" class="px-3 py-1 bg-sky-600 text-white rounded text-sm">{{ page }}</button>
      <button
        v-if="totalPages > 1"
        type="button"
        class="px-3 py-1 border border-gray-300 rounded text-sm text-gray-600 hover:bg-gray-50"
        @click="goPage(2)"
      >2</button>
      <button
        type="button"
        class="px-2 py-1 border border-gray-300 rounded text-sm"
        :class="page >= totalPages ? 'text-gray-400' : 'text-gray-600 hover:bg-gray-50'"
        :disabled="page >= totalPages"
        @click="goPage(page + 1)"
      >
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
        </svg>
      </button>
      <select
        class="border border-gray-300 rounded px-2 py-1 text-sm text-gray-600"
        :value="pageSize"
        @change="onPageSizeChange"
      >
        <option v-for="size in pageSizes" :key="size" :value="size">{{ size }} 条/页</option>
      </select>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  total: { type: Number, default: 0 },
  checkedCount: { type: Number, default: 0 },
  unit: { type: String, default: '条' },
  page: { type: Number, default: 1 },
  pageSize: { type: Number, default: 10 },
  pageSizes: { type: Array, default: () => [10, 20, 50] }
});

const emit = defineEmits(['update:page', 'update:pageSize']);

const totalPages = computed(() => Math.max(1, Math.ceil(props.total / props.pageSize)));

function goPage(p) {
  if (p < 1 || p > totalPages.value) return;
  emit('update:page', p);
}

function onPageSizeChange(e) {
  emit('update:pageSize', Number(e.target.value));
  emit('update:page', 1);
}
</script>
