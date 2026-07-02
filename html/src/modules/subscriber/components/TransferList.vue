<template>
  <div class="transfer-panel flex items-stretch gap-3 h-full min-h-[320px]">
    <TransferPanel
      side="left"
      title="待选"
      :items="leftVisible"
      :checked="leftChecked"
      v-model:keyword="leftKeyword"
      :search-placeholder="leftSearchPlaceholder"
      @toggle-all="toggleAllLeft"
      @toggle-item="toggleLeft"
    />
    <div class="flex flex-col items-center justify-center gap-2 shrink-0">
      <button
        type="button"
        class="px-3 py-1.5 text-sm rounded border"
        :class="leftChecked.size ? 'border-gray-300 text-gray-600 hover:bg-gray-50' : 'border-gray-200 text-gray-400 bg-gray-50 cursor-not-allowed'"
        :disabled="!leftChecked.size"
        @click="moveToRight"
      >&gt; 加入右侧</button>
      <button
        type="button"
        class="px-3 py-1.5 text-sm rounded border"
        :class="rightChecked.size ? 'border-gray-300 text-gray-600 hover:bg-gray-50' : 'border-gray-200 text-gray-400 bg-gray-50 cursor-not-allowed'"
        :disabled="!rightChecked.size"
        @click="moveToLeft"
      >&lt; 加入左侧</button>
    </div>
    <TransferPanel
      side="right"
      title="已选"
      :items="rightVisible"
      :checked="rightChecked"
      v-model:keyword="rightKeyword"
      search-placeholder="请输入搜索内容"
      @toggle-all="toggleAllRight"
      @toggle-item="toggleRight"
    />
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue';
import TransferPanel from './TransferPanel.vue';

const props = defineProps({
  modelValue: { type: Array, default: () => [] },
  items: { type: Array, default: () => [] },
  leftSearchPlaceholder: { type: String, default: '请输入搜索内容' },
  filterFn: { type: Function, default: item => item },
  labelFn: { type: Function, default: item => item }
});

const emit = defineEmits(['update:modelValue']);

const leftKeyword = ref('');
const rightKeyword = ref('');
const leftChecked = ref(new Set());
const rightChecked = ref(new Set());

const leftItems = computed(() => {
  const selected = new Set(props.modelValue);
  return props.items.filter(item => !selected.has(item));
});

const rightItems = computed(() => {
  const itemSet = new Set(props.items);
  return props.modelValue.filter(item => itemSet.has(item));
});

function filterItems(items, keyword) {
  const text = keyword.trim();
  if (!text) return items;
  return items.filter(item => props.filterFn(item).includes(text));
}

const leftVisible = computed(() =>
  filterItems(leftItems.value, leftKeyword.value).map(item => ({
    value: item,
    label: props.labelFn(item)
  }))
);

const rightVisible = computed(() =>
  filterItems(rightItems.value, rightKeyword.value).map(item => ({
    value: item,
    label: props.labelFn(item)
  }))
);

watch(() => props.modelValue, () => {
  leftChecked.value = new Set();
  rightChecked.value = new Set();
});

function toggleAllLeft(checked) {
  leftChecked.value = checked ? new Set(leftVisible.value.map(item => item.value)) : new Set();
}

function toggleAllRight(checked) {
  rightChecked.value = checked ? new Set(rightVisible.value.map(item => item.value)) : new Set();
}

function toggleLeft(value, checked) {
  const next = new Set(leftChecked.value);
  if (checked) next.add(value);
  else next.delete(value);
  leftChecked.value = next;
}

function toggleRight(value, checked) {
  const next = new Set(rightChecked.value);
  if (checked) next.add(value);
  else next.delete(value);
  rightChecked.value = next;
}

function moveToRight() {
  if (!leftChecked.value.size) return;
  const next = [...props.modelValue, ...leftChecked.value].sort((a, b) => a.localeCompare(b, 'zh-CN'));
  emit('update:modelValue', next);
  leftChecked.value = new Set();
}

function moveToLeft() {
  if (!rightChecked.value.size) return;
  const remove = rightChecked.value;
  emit('update:modelValue', props.modelValue.filter(item => !remove.has(item)));
  rightChecked.value = new Set();
}
</script>
