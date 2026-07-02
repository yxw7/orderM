<template>
  <div v-if="open" class="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4" @click.self="emit('close')">
    <div class="bg-white rounded-lg shadow-xl w-full max-w-6xl flex flex-col max-h-[92vh]" @click.stop>
      <div class="flex items-center justify-between px-6 py-4 border-b border-gray-200 shrink-0">
        <h2 class="text-base font-medium text-gray-800">字段配置</h2>
        <button type="button" class="text-gray-400 hover:text-gray-600 text-xl leading-none" @click="emit('close')">&times;</button>
      </div>
      <div class="px-6 py-4 flex flex-col flex-1 min-h-0 overflow-hidden">
        <SearchPanel
          v-model="search"
          :fields="FIELD_CONFIG_SEARCH_FIELDS"
          :cols="4"
          label-width="5rem"
          @search="filterFields"
          @reset="resetFieldSearch"
        />
        <div class="mb-3 shrink-0 mt-4">
          <button type="button" class="px-4 py-1.5 bg-sky-600 text-white text-sm rounded hover:bg-sky-700" @click="addOpen = true">
            添加字段
          </button>
        </div>
        <div class="border border-gray-200 rounded flex flex-col flex-1 min-h-0 overflow-hidden">
          <div class="overflow-auto max-h-[380px]">
            <table class="w-full text-sm">
              <thead class="bg-gray-50 border-b border-gray-200 sticky top-0 z-10">
                <tr>
                  <th v-for="col in FIELD_CONFIG_COLUMNS" :key="col.key"
                    class="px-3 py-2.5 text-left text-gray-600 font-medium whitespace-nowrap"
                    :class="col.key === 'id' ? 'w-14' : ''">
                    {{ col.label }}
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-100">
                <tr v-if="!pagedFields.length">
                  <td :colspan="FIELD_CONFIG_COLUMNS.length" class="px-3 py-12 text-center text-sm text-gray-400">未检索到结果</td>
                </tr>
                <tr v-for="(row, index) in pagedFields" :key="row.fieldCode" class="hover:bg-gray-50">
                  <td class="px-3 py-2 text-gray-600">{{ fieldStart + index + 1 }}</td>
                  <td class="px-3 py-2 whitespace-nowrap">{{ row.fieldCode }}</td>
                  <td class="px-3 py-2 whitespace-nowrap">{{ row.fieldName }}</td>
                  <td class="px-3 py-2 whitespace-nowrap">{{ row.displayName }}</td>
                  <td class="px-3 py-2">{{ row.required ? '是' : '否' }}</td>
                  <td class="px-3 py-2 text-gray-500">{{ row.defaultValue || '-' }}</td>
                  <td class="px-3 py-2">{{ row.sortValue }}</td>
                  <td class="px-3 py-2 whitespace-nowrap">
                    <button type="button" class="text-sky-600 hover:underline mr-2" @click="openEdit(row)">编辑</button>
                    <button type="button" class="text-sky-600 hover:underline" @click="openDelete(row)">删除</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="flex items-center justify-between px-4 py-3 border-t border-gray-200 shrink-0 bg-white">
            <span class="text-sm text-gray-500">总共 {{ filteredFields.length }} 个项目</span>
            <div class="flex items-center gap-2">
              <button type="button" class="px-2 py-1 border border-gray-300 rounded text-sm"
                :class="fieldPage <= 1 ? 'text-gray-400' : 'text-gray-600'"
                :disabled="fieldPage <= 1"
                @click="fieldPage -= 1">
                ‹
              </button>
              <span class="text-sm text-gray-500">第 {{ fieldPage }}/{{ totalFieldPages }} 页</span>
              <button type="button" class="px-2 py-1 border border-gray-300 rounded text-sm"
                :class="fieldPage >= totalFieldPages ? 'text-gray-400' : 'text-gray-600'"
                :disabled="fieldPage >= totalFieldPages"
                @click="fieldPage += 1">
                ›
              </button>
              <select v-model.number="fieldPageSize" class="border border-gray-300 rounded px-2 py-1 text-sm text-gray-600">
                <option :value="5">5 条/页</option>
                <option :value="10">10 条/页</option>
                <option :value="20">20 条/页</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-end gap-3 px-6 py-4 border-t border-gray-200 bg-gray-50 rounded-b-lg shrink-0">
        <button type="button" class="px-5 py-1.5 text-sm rounded border border-gray-300 text-gray-600 hover:bg-gray-50" @click="emit('close')">取消</button>
        <button type="button" class="px-5 py-1.5 text-sm rounded bg-sky-600 text-white hover:bg-sky-700" @click="submit">提交</button>
      </div>
    </div>

    <ImportTemplateFieldAddModal
      :open="addOpen"
      :existing-codes="fieldRows.map(f => f.fieldCode)"
      @close="addOpen = false"
      @confirm="confirmAdd"
      @invalid="emit('toast', false, $event)"
    />
    <ImportTemplateFieldEditModal
      :open="editOpen"
      :field="editField"
      @close="editOpen = false"
      @confirm="confirmEdit"
    />
    <ImportTemplateFieldDeleteModal
      :open="deleteOpen"
      :field="deleteField"
      @close="deleteOpen = false"
      @confirm="confirmDelete"
    />
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue';
import SearchPanel from '@/components/common/SearchPanel.vue';
import ImportTemplateFieldAddModal from '@/modules/import-template/components/ImportTemplateFieldAddModal.vue';
import ImportTemplateFieldEditModal from '@/modules/import-template/components/ImportTemplateFieldEditModal.vue';
import ImportTemplateFieldDeleteModal from '@/modules/import-template/components/ImportTemplateFieldDeleteModal.vue';
import {
  FIELD_CONFIG_COLUMNS,
  FIELD_CONFIG_SEARCH_FIELDS,
  cleanupDedupRuleFields,
  filterFieldConfigRows,
  getTemplateFields,
  syncTemplateFieldDedupFlags
} from '@/modules/import-template/data/import-template-manage';

const props = defineProps({
  open: { type: Boolean, default: false },
  template: { type: Object, default: null }
});

const emit = defineEmits(['close', 'confirm', 'toast']);

const fieldRows = ref([]);
const filteredFields = ref([]);
const search = ref({});
const fieldPage = ref(1);
const fieldPageSize = ref(5);

const addOpen = ref(false);
const editOpen = ref(false);
const editField = ref(null);
const deleteOpen = ref(false);
const deleteField = ref(null);

const sortedFields = computed(() =>
  [...filteredFields.value].sort((a, b) => a.sortValue - b.sortValue)
);

const totalFieldPages = computed(() =>
  Math.max(1, Math.ceil(sortedFields.value.length / fieldPageSize.value))
);

const fieldStart = computed(() => (fieldPage.value - 1) * fieldPageSize.value);

const pagedFields = computed(() =>
  sortedFields.value.slice(fieldStart.value, fieldStart.value + fieldPageSize.value)
);

watch(() => props.open, open => {
  if (!open || !props.template) return;
  syncTemplateFieldDedupFlags(props.template);
  fieldRows.value = getTemplateFields(props.template).map(item => ({ ...item }));
  filteredFields.value = [...fieldRows.value];
  search.value = {};
  fieldPage.value = 1;
  fieldPageSize.value = 5;
});

watch(fieldPageSize, () => {
  fieldPage.value = 1;
});

function filterFields() {
  filteredFields.value = filterFieldConfigRows(fieldRows.value, search.value);
  fieldPage.value = 1;
}

function resetFieldSearch() {
  search.value = {};
  filteredFields.value = [...fieldRows.value];
  fieldPage.value = 1;
}

function confirmAdd(presets) {
  let nextSort = fieldRows.value.reduce((max, row) => Math.max(max, row.sortValue), 0);
  presets.forEach(preset => {
    nextSort += 1;
    fieldRows.value.push({
      fieldCode: preset.fieldCode,
      fieldName: preset.fieldName,
      displayName: preset.fieldName,
      required: preset.required,
      defaultValue: '',
      sortValue: nextSort,
      usedInDedupRule: false
    });
  });
  filteredFields.value = [...fieldRows.value];
  addOpen.value = false;
  emit('toast', true);
}

function openEdit(row) {
  editField.value = row;
  editOpen.value = true;
}

function confirmEdit(payload) {
  if (!editField.value) return;
  Object.assign(editField.value, payload);
  filteredFields.value = [...fieldRows.value];
  editOpen.value = false;
}

function openDelete(row) {
  deleteField.value = row;
  deleteOpen.value = true;
}

function confirmDelete() {
  if (!deleteField.value || deleteField.value.usedInDedupRule) {
    emit('toast', false);
    return;
  }
  fieldRows.value = fieldRows.value.filter(row => row !== deleteField.value);
  filteredFields.value = filteredFields.value.filter(row => fieldRows.value.includes(row));
  deleteField.value = null;
  deleteOpen.value = false;
}

function submit() {
  if (!props.template) return;
  props.template.fields = fieldRows.value.map(item => ({ ...item }));
  cleanupDedupRuleFields(props.template);
  emit('confirm');
}
</script>
