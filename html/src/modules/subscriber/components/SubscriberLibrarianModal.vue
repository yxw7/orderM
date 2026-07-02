<template>
  <div v-if="open" class="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4" @click.self="emit('close')">
    <div class="bg-white rounded-lg shadow-xl w-full max-w-lg flex flex-col max-h-[85vh]" @click.stop>
      <div class="flex items-center justify-between px-6 py-4 border-b border-gray-200 shrink-0">
        <h2 class="text-base font-medium text-gray-800">查看馆员</h2>
        <button type="button" class="text-gray-400 hover:text-gray-600 text-xl leading-none" @click="emit('close')">&times;</button>
      </div>
      <div class="px-6 py-4 border-b border-gray-100 shrink-0">
        <form class="flex items-center gap-3" @submit.prevent="search">
          <label class="text-sm text-gray-600 whitespace-nowrap">馆员姓名</label>
          <input v-model="keyword" type="text" placeholder="请输入" autocomplete="off"
            class="flex-1 border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-sky-500">
          <button type="submit" class="px-5 py-1.5 bg-sky-600 text-white text-sm rounded hover:bg-sky-700 shrink-0">检索</button>
          <button type="button" class="px-5 py-1.5 border border-gray-300 text-gray-600 text-sm rounded hover:bg-gray-50 shrink-0" @click="reset">重置</button>
        </form>
      </div>
      <div class="flex-1 min-h-0 overflow-auto px-6 py-4">
        <table class="w-full text-sm">
          <thead class="bg-gray-50 border-b border-gray-200 sticky top-0 z-10">
            <tr>
              <th class="px-3 py-2.5 text-left text-gray-600 font-medium whitespace-nowrap w-16">序号</th>
              <th class="px-3 py-2.5 text-left text-gray-600 font-medium whitespace-nowrap">姓名</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-100">
            <tr v-for="(name, index) in displayNames" :key="name" class="hover:bg-gray-50">
              <td class="px-3 py-2 text-gray-600">{{ index + 1 }}</td>
              <td class="px-3 py-2">{{ name }}</td>
            </tr>
            <tr v-if="!displayNames.length">
              <td colspan="2" class="px-3 py-8 text-center text-sm text-gray-400">未检索到任何结果</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="flex justify-end px-6 py-4 border-t border-gray-200 bg-gray-50 rounded-b-lg shrink-0">
        <button type="button" class="px-5 py-1.5 text-sm rounded border border-gray-300 text-gray-600 hover:bg-gray-50" @click="emit('close')">关闭</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue';

const props = defineProps({
  open: { type: Boolean, default: false },
  names: { type: Array, default: () => [] }
});

defineEmits(['close']);

const keyword = ref('');
const appliedKeyword = ref('');

watch(() => props.open, open => {
  if (open) {
    keyword.value = '';
    appliedKeyword.value = '';
  }
});

const displayNames = computed(() => {
  const text = appliedKeyword.value.trim();
  if (!text) return [...props.names];
  return props.names.filter(name => name.includes(text));
});

function search() {
  appliedKeyword.value = keyword.value;
}

function reset() {
  keyword.value = '';
  appliedKeyword.value = '';
}
</script>
