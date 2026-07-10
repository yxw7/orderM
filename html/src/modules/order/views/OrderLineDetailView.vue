<template>
  <div class="page-panel page-panel--scroll space-y-4">
    <OrderLineBibInfo :row="row" :resource-type="resourceType" :language="language" />

    <!-- 业务 Tab -->
    <div class="bg-white rounded border border-gray-200">
      <div class="flex flex-wrap gap-1 px-4 pt-3 border-b border-gray-200">
        <button
          v-for="tab in detailTabs"
          :key="tab.key"
          type="button"
          class="order-tab px-3 py-2 text-sm border-b-2 border-transparent"
          :class="{ active: activeTab === tab.key }"
          @click="activeTab = tab.key"
        >
          {{ tab.label }}
        </button>
      </div>
      <div class="p-4">
        <template v-if="activeTab === 'related'">
          <DataTable
            :selectable="false"
            :columns="relatedOrderLineColumns"
            :rows="pagedRelatedLines"
            :total="relatedLines.length"
            row-id-key="id"
            unit="条记录"
            v-model:page="relatedPage"
            v-model:page-size="relatedPageSize"
            :page-sizes="[10, 20, 50]"
          >
            <template #cell-issuer="{ value }">{{ value || '' }}</template>
            <template #cell-issueTime="{ value }">{{ value || '' }}</template>
          </DataTable>
        </template>

        <template v-else-if="activeTab === 'acceptance'">
          <DataTable
            :selectable="false"
            :columns="acceptanceColumns"
            :rows="acceptanceRecords"
            :total="acceptanceRecords.length"
            row-id-key="id"
            unit="条记录"
            :page-size="50"
            :show-pagination="acceptanceRecords.length > 0"
          />
        </template>

        <template v-else-if="activeTab === 'settlement'">
          <DataTable
            :selectable="false"
            :columns="settlementColumns"
            :rows="settlementRecords"
            :total="settlementRecords.length"
            row-id-key="id"
            unit="条"
            :page-size="10"
            :show-pagination="settlementRecords.length > 0"
          />
        </template>

        <template v-else-if="activeTab === 'items'">
          <DataTable
            :selectable="false"
            :columns="itemColumns"
            :rows="pagedItemRows"
            :total="itemRows.length"
            row-id-key="id"
            unit="条"
            v-model:page="itemPage"
            v-model:page-size="itemPageSize"
            :page-sizes="[10, 20, 50]"
          >
            <template #cell-currentLocation="{ value }">{{ value || '' }}</template>
            <template #cell-volumeDesc="{ value }">{{ value || '' }}</template>
          </DataTable>
        </template>

        <template v-else-if="activeTab === 'marc'">
          <div v-if="!marcRecordNos.length" class="py-12 text-center text-gray-400 text-sm">暂无 MARC 信息</div>
          <template v-else>
            <div class="mb-3 flex items-center gap-2">
              <label for="marc-record-no" class="text-sm text-gray-600 shrink-0">书目记录号</label>
              <select
                id="marc-record-no"
                v-model="selectedMarcRecordNo"
                class="border border-gray-300 rounded px-3 py-1.5 text-sm min-w-[240px]"
              >
                <option v-for="recordNo in marcRecordNos" :key="recordNo" :value="recordNo">
                  {{ recordNo }}
                </option>
              </select>
            </div>
            <div v-if="!marcFields.length" class="py-12 text-center text-gray-400 text-sm">暂无 MARC 信息</div>
            <div v-else class="max-h-[480px] overflow-y-auto border border-gray-200 rounded">
              <MarcTable :fields="marcFields" />
            </div>
          </template>
        </template>
      </div>
    </div>

    <PrdSpecDrawer page-id="order-line-detail" :active-tab="activeTab" />
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import DataTable from '@/components/common/DataTable.vue';
import OrderLineBibInfo from '@/modules/order/components/OrderLineBibInfo.vue';
import MarcTable from '@/modules/order/components/MarcTable.vue';
import PrdSpecDrawer from '@/components/common/PrdSpecDrawer.vue';
import { orderLineRows, orderListRows } from '@/modules/order/data/orders';
import { appConfig } from '@/config/app-config';
import {
  buildLineDetailContext,
  getOrderLineTabs,
  relatedOrderLineColumns,
  getRelatedOrderLines,
  getOrderLineAcceptanceColumns,
  getOrderLineAcceptanceRecords,
  getOrderLineItemColumns,
  getOrderLineItems,
  getOrderLineSettlementColumns,
  getOrderLineSettlementRecords,
  getOrderLineMarcFields,
  getOrderLineMarcRecordNos
} from '@/modules/order/data/order-line-detail';

defineOptions({ name: 'OrderLineDetailView' });

const route = useRoute();
const activeTab = ref('related');
const relatedPage = ref(1);
const relatedPageSize = ref(50);
const itemPage = ref(1);
const itemPageSize = ref(10);

const lineFromList = computed(() => {
  const lineNo = route.params.lineNo;
  if (!lineNo) return null;
  return orderLineRows.find(r => r.orderLineNo === lineNo);
});

const detailContext = computed(() => buildLineDetailContext(lineFromList.value));
const row = computed(() => detailContext.value.row);
const resourceType = computed(() => detailContext.value.resourceType);
const language = computed(() => detailContext.value.language);

const relatedLines = computed(() =>
  getRelatedOrderLines(
    row.value,
    resourceType.value,
    language.value,
    orderLineRows,
    orderListRows,
    appConfig.viewableSubscribers
  )
);

const acceptanceColumns = computed(() => getOrderLineAcceptanceColumns(resourceType.value));
const acceptanceRecords = computed(() =>
  getOrderLineAcceptanceRecords(row.value, resourceType.value, relatedLines.value)
);

const itemColumns = computed(() => getOrderLineItemColumns());
const itemRows = computed(() => getOrderLineItems(row.value));
const detailTabs = computed(() => getOrderLineTabs(itemRows.value.length));
const pagedItemRows = computed(() => {
  const start = (itemPage.value - 1) * itemPageSize.value;
  return itemRows.value.slice(start, start + itemPageSize.value);
});

const settlementColumns = computed(() => getOrderLineSettlementColumns());
const settlementRecords = computed(() =>
  getOrderLineSettlementRecords(row.value, relatedLines.value)
);

const marcRecordNos = computed(() => getOrderLineMarcRecordNos(row.value));
const selectedMarcRecordNo = ref('');
watch(
  marcRecordNos,
  (recordNos) => {
    selectedMarcRecordNo.value = recordNos[0] || '';
  },
  { immediate: true }
);
const marcFields = computed(() => getOrderLineMarcFields(row.value, selectedMarcRecordNo.value));

const pagedRelatedLines = computed(() => {
  const start = (relatedPage.value - 1) * relatedPageSize.value;
  return relatedLines.value.slice(start, start + relatedPageSize.value);
});
</script>
