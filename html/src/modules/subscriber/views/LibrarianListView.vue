<template>
  <div class="page-panel page-panel--scroll">
    <SearchPanel
      v-model="search"
      :fields="librarianSearchFields"
      :cols="3"
      label-width="5rem"
      @search="filterRows"
      @reset="resetSearch"
    />
    <div class="flex items-center gap-2 mb-4 shrink-0">
      <button type="button" class="px-4 py-1.5 bg-sky-600 text-white text-sm rounded hover:bg-sky-700" @click="associateOpen = true">
        订户关联馆员
      </button>
    </div>
    <DataTable
      :selectable="false"
      :columns="LIBRARIAN_COLUMNS"
      :rows="pagedRows"
      :total="filteredRows.length"
      row-id-key="id"
      v-model:page="page"
      v-model:page-size="pageSize"
      :page-sizes="[10, 20, 50]"
      unit="条记录"
    >
      <template #cell-actions="{ row }">
        <button type="button" class="text-sky-600 hover:underline" @click="openDisassociate(row)">取消关联</button>
      </template>
    </DataTable>

    <LibrarianAssociateModal
      :open="associateOpen"
      :subscriber-options="activeSubscriberOptions"
      :all-pool="allLibrarianPool"
      :assoc="subscriberLibrarianAssoc"
      @close="associateOpen = false"
      @confirm="submitAssociate"
    />
    <LibrarianDisassociateModal
      :open="disassociateOpen"
      :row="disassociateRow"
      @close="disassociateOpen = false"
      @confirm="submitDisassociate"
    />
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import SearchPanel from '@/components/common/SearchPanel.vue';
import DataTable from '@/components/common/DataTable.vue';
import LibrarianAssociateModal from '@/modules/subscriber/components/LibrarianAssociateModal.vue';
import LibrarianDisassociateModal from '@/modules/subscriber/components/LibrarianDisassociateModal.vue';
import {
  LIBRARIAN_COLUMNS,
  filterLibrarianRows,
  librarianSearchFields
} from '@/modules/subscriber/data/librarian-manage';
import { activeSubscriberOptions } from '@/modules/subscriber/data/subscriber-manage';
import {
  allLibrarianPool,
  applySubscriberAssociation,
  librarianRows,
  removeLibrarianAssociation,
  subscriberLibrarianAssoc
} from '@/modules/subscriber/stores/association';

defineOptions({ name: 'LibrarianListView' });

const filteredRows = ref([...librarianRows.value]);
const search = ref({});
const page = ref(1);
const pageSize = ref(50);
const associateOpen = ref(false);
const disassociateOpen = ref(false);
const disassociateRow = ref(null);

const pagedRows = computed(() => {
  const start = (page.value - 1) * pageSize.value;
  return filteredRows.value.slice(start, start + pageSize.value);
});

function filterRows() {
  filteredRows.value = filterLibrarianRows(librarianRows.value, search.value);
  page.value = 1;
}

function resetSearch() {
  search.value = {};
  filteredRows.value = [...librarianRows.value];
  page.value = 1;
}

function submitAssociate({ subscriberName, accounts }) {
  applySubscriberAssociation(subscriberName, accounts);
  filterRows();
  associateOpen.value = false;
}

function openDisassociate(row) {
  disassociateRow.value = row;
  disassociateOpen.value = true;
}

function submitDisassociate() {
  if (disassociateRow.value) {
    removeLibrarianAssociation(disassociateRow.value);
    filterRows();
  }
  disassociateOpen.value = false;
  disassociateRow.value = null;
}
</script>
