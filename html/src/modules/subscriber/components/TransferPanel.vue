<template>
  <div class="flex-1 border border-gray-200 rounded flex flex-col min-w-0 min-h-0 overflow-hidden">
    <div class="flex items-center justify-between px-3 py-2 border-b border-gray-100 bg-gray-50 shrink-0">
      <label class="inline-flex items-center gap-2 text-sm text-gray-700 cursor-pointer select-none">
        <input type="checkbox" class="rounded text-sky-600" :checked="allChecked" :indeterminate="indeterminate" @change="onToggleAll($event.target.checked)">
        <span>{{ title }}</span>
      </label>
      <span class="text-xs text-gray-400">{{ items.length }}</span>
    </div>
    <div class="px-3 py-2 border-b border-gray-100 shrink-0">
      <div class="relative">
        <svg class="w-4 h-4 text-gray-400 absolute left-2 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
        </svg>
        <input
          :value="keyword"
          type="text"
          class="w-full border border-gray-300 rounded pl-8 pr-3 py-1.5 text-sm focus:outline-none focus:border-sky-500"
          :placeholder="searchPlaceholder"
          @input="$emit('update:keyword', $event.target.value)"
        >
      </div>
    </div>
    <div class="flex-1 min-h-0 overflow-y-auto py-1">
      <template v-if="items.length">
        <label
          v-for="item in items"
          :key="item.value"
          class="flex items-center gap-2 px-3 py-2 hover:bg-gray-50 cursor-pointer text-sm text-gray-700"
        >
          <input
            type="checkbox"
            class="rounded text-sky-600 transfer-item-checkbox"
            :checked="checked.has(item.value)"
            @change="$emit('toggle-item', item.value, $event.target.checked)"
          >
          <span class="truncate">{{ item.label }}</span>
        </label>
      </template>
      <div v-else class="px-3 py-10 text-center text-sm text-gray-400">
        <template v-if="side === 'right'">
          <div class="text-3xl text-gray-300 mb-2">📄</div>
        </template>
        暂无数据
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  side: { type: String, default: 'left' },
  title: { type: String, required: true },
  items: { type: Array, default: () => [] },
  checked: { type: Object, required: true },
  keyword: { type: String, default: '' },
  searchPlaceholder: { type: String, default: '请输入搜索内容' }
});

const emit = defineEmits(['update:keyword', 'toggle-all', 'toggle-item']);

const allChecked = computed(() =>
  props.items.length > 0 && props.items.every(item => props.checked.has(item.value))
);

const indeterminate = computed(() => {
  if (!props.items.length) return false;
  const count = props.items.filter(item => props.checked.has(item.value)).length;
  return count > 0 && count < props.items.length;
});

function onToggleAll(checked) {
  emit('toggle-all', checked);
}
</script>
