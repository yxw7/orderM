<template>
  <div class="page-panel h-full">
    <div class="flex gap-8 border-b border-gray-200 mb-4 shrink-0 bg-white px-1">
      <button
        v-for="tab in tabs"
        :key="tab.key"
        type="button"
        class="order-tab px-1 py-2.5 text-sm text-gray-600 border-b-2 border-transparent hover:text-sky-600 transition-colors"
        :class="{ active: store.activeTab === tab.key }"
        @click="switchTab(tab.key)"
      >
        {{ tab.label }}
      </button>
    </div>

    <div class="flex flex-col flex-1 min-h-0 overflow-hidden">
      <OrderListPanel v-if="store.activeTab === 'order-list'" @go-lines="goOrderLines" />
      <OrderLineListPanel v-else :preset-order-id="lineFilterOrderId" />
    </div>

    <OrderModals />

    <DedupConfigModal
      v-if="store.dedupModalOpen"
      :resource-type="store.dedupResourceType"
      :language-category="store.dedupLanguageCategory"
      @close="store.closeDedupModal()"
    />
    <DedupResultDrawer
      :open="store.dedupDrawerOpen"
      :entry-type="store.dedupDrawerType"
      :line="store.dedupDrawerLine"
      @close="store.closeDedupDrawer()"
    />

    <PrdSpecDrawer
      page-id="order-manage"
      :active-tab="store.activeTab"
    />
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import OrderListPanel from '@/modules/order/components/OrderListPanel.vue';
import OrderLineListPanel from '@/modules/order/components/OrderLineListPanel.vue';
import OrderModals from '@/modules/order/components/OrderModals.vue';
import DedupConfigModal from '@/modules/order/components/DedupConfigModal.vue';
import DedupResultDrawer from '@/modules/order/components/DedupResultDrawer.vue';
import PrdSpecDrawer from '@/components/common/PrdSpecDrawer.vue';
import { useOrderStore } from '@/modules/order/stores/order';

defineOptions({ name: 'OrderManageView' });

const route = useRoute();
const router = useRouter();
const store = useOrderStore();

const tabs = [
  { key: 'order-list', label: '订单列表' },
  { key: 'order-line', label: '订单行列表' }
];

const lineFilterOrderId = ref('');

onMounted(() => {
  syncTabFromRoute();
  syncOrderIdFromRoute();
});
watch(() => route.query.tab, syncTabFromRoute);
watch(() => route.query.orderId, syncOrderIdFromRoute);

function syncTabFromRoute() {
  if (route.query.tab === 'order-line') store.setActiveTab('order-line');
}

function syncOrderIdFromRoute() {
  if (route.query.orderId) lineFilterOrderId.value = String(route.query.orderId);
}

function switchTab(key) {
  store.setActiveTab(key);
  lineFilterOrderId.value = '';
  router.replace({ path: '/orders', query: key === 'order-line' ? { tab: 'order-line' } : {} });
}

function goOrderLines(orderId) {
  store.setActiveTab('order-line');
  lineFilterOrderId.value = orderId;
  router.replace({ path: '/orders', query: { tab: 'order-line', orderId } });
}
</script>
