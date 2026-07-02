<template>
  <Teleport to="body">
    <button
      v-if="visible"
      type="button"
      class="prd-spec-trigger"
      @click="openDrawer"
    >
      PRD说明
    </button>

    <div
      v-if="drawerMounted"
      class="prd-spec-drawer"
      :class="{ 'is-open': drawerOpen, hidden: !drawerMounted }"
      aria-hidden="false"
    >
      <div class="prd-spec-drawer-mask" @click="closeDrawer" />
      <aside
        class="prd-spec-drawer-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="prd-spec-drawer-title"
        @click.stop
      >
        <div class="flex items-center justify-between px-5 py-4 border-b shrink-0">
          <h2 id="prd-spec-drawer-title" class="text-base font-medium text-gray-800">
            {{ drawerTitle }}
          </h2>
          <button
            type="button"
            class="text-gray-400 hover:text-gray-600 text-xl leading-none"
            aria-label="关闭"
            @click="closeDrawer"
          >
            &times;
          </button>
        </div>
        <div class="prd-spec-item-nav shrink-0">
          <button
            v-for="item in tabItems"
            :key="item.id"
            type="button"
            class="prd-spec-item-btn"
            :class="{ active: item.id === activeItemId }"
            @click="selectItem(item.id)"
          >
            [{{ item.id }}] {{ item.title }}
          </button>
        </div>
        <div
          ref="contentEl"
          class="prd-spec-content"
          v-html="activeHtmlContent"
        />
      </aside>
    </div>
  </Teleport>
</template>

<script setup>
import { computed, onBeforeUnmount, ref, watch } from 'vue';

const props = defineProps({
  pageId: { type: String, required: true },
  activeTab: { type: String, default: '' },
  visible: { type: Boolean, default: true }
});

const drawerMounted = ref(false);
const drawerOpen = ref(false);
const activeItemId = ref('');
const contentEl = ref(null);
let closeTimer = null;

const pageData = computed(() => window.PRD_DATA_MAP?.[props.pageId] || null);

const tabItems = computed(() => {
  const data = pageData.value;
  if (!data?.items?.length) return [];
  if (!props.activeTab) return data.items;
  return data.items.filter(item => item.tab === props.activeTab);
});

const activeItem = computed(() =>
  tabItems.value.find(item => item.id === activeItemId.value) || tabItems.value[0] || null
);

const activeHtmlContent = computed(() => activeItem.value?.htmlContent || '');

const drawerTitle = computed(() => {
  const data = pageData.value;
  if (!data) return 'PRD 需求说明';
  const tabLabel = data.tabs?.[props.activeTab]?.label;
  return tabLabel ? `${data.title} · ${tabLabel}` : `${data.title} · PRD 需求说明`;
});

watch(tabItems, items => {
  if (!items.length) {
    activeItemId.value = '';
    return;
  }
  if (!items.some(item => item.id === activeItemId.value)) {
    activeItemId.value = items[0].id;
  }
}, { immediate: true });

watch(() => props.activeTab, () => {
  if (drawerOpen.value) {
    const first = tabItems.value[0];
    if (first) activeItemId.value = first.id;
  }
});

function openDrawer() {
  if (!pageData.value || !tabItems.value.length) return;
  if (!activeItemId.value && tabItems.value[0]) {
    activeItemId.value = tabItems.value[0].id;
  }
  drawerMounted.value = true;
  requestAnimationFrame(() => {
    drawerOpen.value = true;
    document.body.classList.add('prd-spec-drawer-open');
  });
}

function closeDrawer() {
  drawerOpen.value = false;
  document.body.classList.remove('prd-spec-drawer-open');
  if (closeTimer) clearTimeout(closeTimer);
  closeTimer = window.setTimeout(() => {
    drawerMounted.value = false;
    if (contentEl.value) contentEl.value.innerHTML = '';
    closeTimer = null;
  }, 300);
}

function selectItem(id) {
  activeItemId.value = id;
}

onBeforeUnmount(() => {
  if (closeTimer) clearTimeout(closeTimer);
  document.body.classList.remove('prd-spec-drawer-open');
});
</script>

<style scoped>
.prd-spec-trigger {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 9999;
  padding: 6px 12px;
  font-size: 14px;
  color: #0284c7;
  background: #fff;
  border: 1px solid #bae6fd;
  border-radius: 4px;
  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.08);
  cursor: pointer;
}

.prd-spec-trigger:hover {
  background: #f0f9ff;
}

.prd-spec-drawer {
  position: fixed;
  inset: 0;
  z-index: 10000;
}

.prd-spec-drawer.hidden {
  pointer-events: none;
}

.prd-spec-drawer-mask {
  position: absolute;
  inset: 0;
  background: rgba(15, 23, 42, 0.4);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.prd-spec-drawer.is-open .prd-spec-drawer-mask {
  opacity: 1;
}

.prd-spec-drawer-panel {
  position: absolute;
  top: 0;
  right: 0;
  width: 600px;
  max-width: 100%;
  height: 100%;
  background: #fff;
  box-shadow: -8px 0 24px rgba(15, 23, 42, 0.12);
  transform: translateX(100%);
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
}

.prd-spec-drawer.is-open .prd-spec-drawer-panel {
  transform: translateX(0);
}

.prd-spec-drawer.is-open {
  pointer-events: auto;
}

.prd-spec-item-nav {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 12px 16px;
  border-bottom: 1px solid #e5e7eb;
  background: #f9fafb;
}

.prd-spec-item-btn {
  padding: 4px 10px;
  font-size: 12px;
  color: #374151;
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 4px;
  cursor: pointer;
}

.prd-spec-item-btn.active {
  color: #0284c7;
  border-color: #7dd3fc;
  background: #f0f9ff;
}

.prd-spec-content {
  flex: 1;
  overflow-y: auto;
  padding: 16px 20px 24px;
  line-height: 1.6;
  font-size: 14px;
  color: #374151;
}

.prd-spec-content :deep(p) {
  margin-bottom: 12px;
}

.prd-spec-content :deep(ul),
.prd-spec-content :deep(ol) {
  margin: 0 0 12px 20px;
}

.prd-spec-content :deep(li) {
  margin-bottom: 6px;
}

.prd-spec-content :deep(blockquote) {
  margin: 12px 0;
  padding: 8px 12px;
  border-left: 3px solid #d1d5db;
  background: #f9fafb;
  color: #6b7280;
}

.prd-spec-content :deep(.prd-spec-header) {
  margin-bottom: 16px;
  padding-bottom: 12px;
  border-bottom: 1px solid #e5e7eb;
}

.prd-spec-content :deep(.prd-spec-header-title) {
  font-size: 16px;
  font-weight: 600;
  color: #111827;
}

.prd-spec-content :deep(.prd-spec-section-title) {
  font-weight: 600;
  color: #111827;
  margin: 16px 0 8px;
}

.prd-spec-content :deep(.prd-spec-section-title:first-child) {
  margin-top: 0;
}

.prd-spec-content :deep(.prd-spec-table) {
  width: 100%;
  border-collapse: collapse;
  font-size: 13px;
  margin-bottom: 12px;
}

.prd-spec-content :deep(.prd-spec-table th),
.prd-spec-content :deep(.prd-spec-table td) {
  border: 1px solid #e5e7eb;
  padding: 8px 10px;
  text-align: left;
  vertical-align: top;
}

.prd-spec-content :deep(.prd-spec-table th) {
  background: #f9fafb;
  font-weight: 600;
  color: #374151;
}

.prd-spec-content :deep(mark) {
  background: #fef3c7;
  padding: 0 2px;
}
</style>

<style>
body.prd-spec-drawer-open {
  overflow: hidden;
}
</style>
