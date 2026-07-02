<template>
  <div class="page-panel">
    <div class="flex gap-8 border-b border-gray-200 mb-4 shrink-0 bg-white px-1">
      <button
        v-for="tab in tabs"
        :key="tab.key"
        type="button"
        class="order-tab px-1 py-2.5 text-sm text-gray-600 border-b-2 border-transparent hover:text-sky-600 transition-colors"
        :class="{ active: activeTab === tab.key }"
        @click="activeTab = tab.key"
      >
        {{ tab.label }}
      </button>
    </div>

    <SearchPanel
      v-model="search"
      :fields="reasonSearchFields"
      :cols="3"
      label-width="4rem"
      @search="filterCurrentTab"
      @reset="resetSearch"
    />

    <div class="flex items-center gap-2 mb-4 shrink-0">
      <button type="button" class="px-4 py-1.5 bg-sky-600 text-white text-sm rounded hover:bg-sky-700" @click="openAddModal">
        新增{{ REASON_TYPE_LABELS[activeTab] }}
      </button>
    </div>

    <DataTable
      :selectable="false"
      :columns="columns"
      :rows="pagedRows"
      :total="filteredRows.length"
      row-id-key="id"
      v-model:page="page"
      v-model:page-size="pageSize"
      :page-sizes="[10, 20, 50]"
      unit="条记录"
    >
      <template #cell-status="{ row }">
        <span :class="REASON_STATUS_MAP[row.status]?.cls">{{ REASON_STATUS_MAP[row.status]?.text }}</span>
      </template>
      <template #cell-actions="{ row }">
        <button type="button" class="text-sky-600 hover:underline mr-2" @click="openEditModal(row)">编辑</button>
        <button type="button" class="text-sky-600 hover:underline" @click="reasonStore.toggleStatus(activeTab, row.id)">
          {{ row.status === 'active' ? '停用' : '启用' }}
        </button>
      </template>
    </DataTable>

    <div v-if="formModalOpen" class="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4" @click.self="formModalOpen = false">
      <div class="bg-white rounded-lg shadow-xl w-full max-w-lg">
        <div class="flex items-center justify-between px-6 py-4 border-b">
          <h2 class="text-base font-medium text-gray-800">{{ formTitle }}</h2>
          <button type="button" class="text-gray-400 text-xl" @click="formModalOpen = false">&times;</button>
        </div>
        <div class="px-6 py-5 space-y-4">
          <div class="flex items-start gap-3">
            <label class="text-sm text-gray-600 w-28 text-right pt-2 shrink-0"><span class="text-red-500">*</span> 原因内容</label>
            <input v-model="form.content" type="text" placeholder="请输入" class="flex-1 border border-gray-300 rounded px-3 py-2 text-sm">
          </div>
          <div class="flex items-center gap-3">
            <label class="text-sm text-gray-600 w-28 text-right shrink-0">下拉列表排序</label>
            <input v-model.number="form.sort" type="number" min="1" class="w-32 border border-gray-300 rounded px-3 py-2 text-sm">
          </div>
          <div class="flex items-start gap-3">
            <label class="text-sm text-gray-600 w-28 text-right pt-2 shrink-0">备注</label>
            <textarea v-model="form.remark" rows="3" class="flex-1 border border-gray-300 rounded px-3 py-2 text-sm resize-y" />
          </div>
        </div>
        <div class="flex justify-end gap-3 px-6 py-4 border-t bg-gray-50 rounded-b-lg">
          <button type="button" class="px-5 py-1.5 text-sm border border-gray-300 rounded" @click="formModalOpen = false">取消</button>
          <button type="button" class="px-5 py-1.5 text-sm bg-sky-600 text-white rounded" @click="submitForm">提交</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref, watch } from 'vue';
import SearchPanel from '@/components/common/SearchPanel.vue';
import DataTable from '@/components/common/DataTable.vue';
import { useReasonParamsStore } from '@/stores/reason-params';
import {
  REASON_TYPE_LABELS,
  reasonSearchFields,
  REASON_STATUS_MAP
} from '@/data/mock-reason-params';

defineOptions({ name: 'ReasonParamsView' });

const reasonStore = useReasonParamsStore();
const activeTab = ref('exchange');
const search = ref({});
const filteredRows = ref([]);
const page = ref(1);
const pageSize = ref(50);
const formModalOpen = ref(false);
const editingId = ref(null);
const form = ref({ content: '', sort: 1, remark: '' });

const tabs = Object.entries(REASON_TYPE_LABELS).map(([key, label]) => ({ key, label }));

const columns = [
  { key: 'displayNo', label: '序号' },
  { key: 'content', label: '原因内容' },
  { key: 'status', label: '状态' },
  { key: 'sort', label: '下拉列表排序' },
  { key: 'creator', label: '创建人' },
  { key: 'created', label: '创建日期' },
  { key: 'actions', label: '操作', sticky: true }
];

const currentRows = computed(() => reasonStore.getByType(activeTab.value));

const pagedRows = computed(() => {
  const start = (page.value - 1) * pageSize.value;
  return filteredRows.value.slice(start, start + pageSize.value).map((row, i) => ({
    ...row,
    displayNo: start + i + 1
  }));
});

const formTitle = computed(() =>
  `${editingId.value ? '编辑' : '新增'}${REASON_TYPE_LABELS[activeTab.value]}`
);

onMounted(() => {
  reasonStore.initFromStorage();
  filterCurrentTab();
});

watch(activeTab, () => {
  search.value = {};
  page.value = 1;
  filterCurrentTab();
});

watch(() => reasonStore.data, filterCurrentTab, { deep: true });

function filterCurrentTab() {
  filteredRows.value = currentRows.value.filter(row => {
    const s = search.value;
    if (s.content && !row.content.includes(s.content)) return false;
    if (s.status === '使用中' && row.status !== 'active') return false;
    if (s.status === '已停用' && row.status !== 'disabled') return false;
    if (s.creator && !row.creator?.includes(s.creator)) return false;
    return true;
  });
}

function resetSearch() {
  search.value = {};
  filterCurrentTab();
}

function openAddModal() {
  editingId.value = null;
  form.value = { content: '', sort: (currentRows.value.length + 1), remark: '' };
  formModalOpen.value = true;
}

function openEditModal(row) {
  editingId.value = row.id;
  form.value = { content: row.content, sort: row.sort, remark: row.remark || '' };
  formModalOpen.value = true;
}

function submitForm() {
  if (!form.value.content.trim()) {
    window.alert('请输入原因内容');
    return;
  }
  if (editingId.value) {
    reasonStore.updateReason(activeTab.value, editingId.value, { ...form.value });
  } else {
    reasonStore.addReason(activeTab.value, { ...form.value });
  }
  formModalOpen.value = false;
}
</script>
