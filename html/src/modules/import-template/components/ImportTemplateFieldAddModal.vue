<template>
  <div v-if="open" class="fixed inset-0 z-[60] flex items-center justify-center bg-black/40 p-4" @click.self="emit('close')">
    <div class="bg-white rounded-lg shadow-xl w-full max-w-3xl flex flex-col max-h-[85vh]" @click.stop>
      <div class="flex items-center justify-between px-6 py-4 border-b border-gray-200 shrink-0">
        <h2 class="text-base font-medium text-gray-800">添加字段</h2>
        <button type="button" class="text-gray-400 hover:text-gray-600 text-xl leading-none" @click="emit('close')">&times;</button>
      </div>
      <div class="px-6 py-4 flex flex-col flex-1 min-h-0 overflow-hidden">
        <SearchPanel
          v-model="search"
          :fields="poolSearchFields"
          :cols="2"
          label-width="5rem"
          @search="filterPool"
          @reset="resetPoolSearch"
        />
        <div class="border border-gray-200 rounded flex flex-col flex-1 min-h-0 overflow-hidden mt-4">
          <div class="overflow-auto max-h-[320px]">
            <table class="w-full text-sm">
              <thead class="bg-gray-50 border-b border-gray-200 sticky top-0 z-10">
                <tr>
                  <th class="px-3 py-2.5 text-left w-10">
                    <input
                      type="checkbox"
                      class="rounded border-gray-300 text-sky-600 focus:ring-sky-500"
                      :checked="allVisibleSelected"
                      :indeterminate="someVisibleSelected && !allVisibleSelected"
                      @change="toggleSelectAll"
                    >
                  </th>
                  <th class="px-3 py-2.5 text-left text-gray-600 font-medium whitespace-nowrap w-14">序号</th>
                  <th class="px-3 py-2.5 text-left text-gray-600 font-medium whitespace-nowrap">字段代码</th>
                  <th class="px-3 py-2.5 text-left text-gray-600 font-medium whitespace-nowrap">字段名</th>
                  <th class="px-3 py-2.5 text-left text-gray-600 font-medium whitespace-nowrap">字段说明</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-100">
                <tr v-if="!filteredPool.length">
                  <td colspan="5" class="px-3 py-12 text-center text-sm text-gray-400">未检索到结果</td>
                </tr>
                <tr v-for="(row, index) in filteredPool" :key="row.fieldCode" class="hover:bg-gray-50">
                  <td class="px-3 py-2">
                    <input
                      type="checkbox"
                      class="rounded border-gray-300 text-sky-600 focus:ring-sky-500"
                      :checked="selectedCodes.has(row.fieldCode)"
                      @change="toggleRow(row.fieldCode, $event.target.checked)"
                    >
                  </td>
                  <td class="px-3 py-2 text-gray-600">{{ index + 1 }}</td>
                  <td class="px-3 py-2 whitespace-nowrap">{{ row.fieldCode }}</td>
                  <td class="px-3 py-2 whitespace-nowrap">{{ row.fieldName }}</td>
                  <td class="px-3 py-2 whitespace-nowrap">{{ row.description }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="flex justify-end gap-3 px-6 py-4 border-t border-gray-200 bg-gray-50 rounded-b-lg shrink-0">
        <button type="button" class="px-5 py-1.5 text-sm rounded border border-gray-300 text-gray-600 hover:bg-gray-50" @click="emit('close')">取消</button>
        <button type="button" class="px-5 py-1.5 text-sm rounded bg-sky-600 text-white hover:bg-sky-700" @click="submit">提交</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue';
import SearchPanel from '@/components/common/SearchPanel.vue';
import {
  SYSTEM_PRESET_FIELD_POOL,
  filterPresetFieldPool
} from '@/modules/import-template/data/import-template-manage';

const props = defineProps({
  open: { type: Boolean, default: false },
  existingCodes: { type: Array, default: () => [] }
});

const emit = defineEmits(['close', 'confirm', 'invalid']);

const search = ref({});
const filteredPool = ref([...SYSTEM_PRESET_FIELD_POOL]);
const selectedCodes = ref(new Set());

const poolSearchFields = [
  { key: 'fieldCode', label: '字段代码' },
  { key: 'fieldName', label: '字段名' }
];

const allVisibleSelected = computed(() =>
  filteredPool.value.length > 0 && filteredPool.value.every(row => selectedCodes.value.has(row.fieldCode))
);

const someVisibleSelected = computed(() =>
  filteredPool.value.some(row => selectedCodes.value.has(row.fieldCode))
);

watch(() => props.open, open => {
  if (!open) return;
  search.value = {};
  filteredPool.value = [...SYSTEM_PRESET_FIELD_POOL];
  selectedCodes.value = new Set();
});

function filterPool() {
  filteredPool.value = filterPresetFieldPool(SYSTEM_PRESET_FIELD_POOL, search.value);
}

function resetPoolSearch() {
  search.value = {};
  filteredPool.value = [...SYSTEM_PRESET_FIELD_POOL];
}

function toggleRow(code, checked) {
  const next = new Set(selectedCodes.value);
  if (checked) next.add(code);
  else next.delete(code);
  selectedCodes.value = next;
}

function toggleSelectAll(e) {
  const next = new Set(selectedCodes.value);
  filteredPool.value.forEach(row => {
    if (e.target.checked) next.add(row.fieldCode);
    else next.delete(row.fieldCode);
  });
  selectedCodes.value = next;
}

function submit() {
  if (selectedCodes.value.size === 0) {
    emit('invalid', '请勾选至少一条数据');
    return;
  }
  const existing = new Set(props.existingCodes);
  const presets = SYSTEM_PRESET_FIELD_POOL.filter(row => selectedCodes.value.has(row.fieldCode));
  emit('confirm', presets.filter(row => !existing.has(row.fieldCode)));
}
</script>
