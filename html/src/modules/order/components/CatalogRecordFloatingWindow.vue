<template>
  <div
    class="catalog-record-window fixed flex flex-col bg-white border border-gray-200 rounded-lg shadow-xl overflow-hidden"
    :class="{ 'ring-2 ring-sky-400': windowState.highlighted }"
    :style="windowStyle"
    role="dialog"
    aria-modal="false"
    @mousedown="$emit('focus', windowState.recordNo)"
  >
    <div
      class="flex items-start gap-2 px-4 py-3 border-b border-gray-200 bg-gray-50 cursor-move select-none shrink-0"
      @pointerdown="onDragStart"
    >
      <div class="flex-1 min-w-0 pr-2">
        <p class="text-sm font-medium text-gray-800 truncate">
          书目记录号：{{ windowState.recordNo }}
        </p>
        <p class="mt-1 text-xs text-gray-500 truncate" :title="contextTitle">
          订单行号：{{ windowState.orderLineRow?.orderLineNo || '—' }}
          <span class="mx-1">·</span>
          正题名：{{ windowState.orderLineRow?.title || '—' }}
        </p>
      </div>
      <button
        type="button"
        class="text-gray-400 hover:text-gray-600 text-xl leading-none shrink-0"
        aria-label="关闭"
        @click="$emit('close', windowState.recordNo)"
      >
        &times;
      </button>
    </div>

    <div class="flex gap-4 px-4 pt-3 border-b border-gray-200 shrink-0">
      <button
        v-for="tab in tabs"
        :key="tab.key"
        type="button"
        class="px-1 py-2 text-sm border-b-2"
        :class="activeTab === tab.key ? 'text-sky-600 border-sky-600' : 'text-gray-600 border-transparent'"
        @click="activeTab = tab.key"
      >
        {{ tab.label }}
      </button>
    </div>

    <div class="flex-1 min-h-0 overflow-y-auto p-4">
      <template v-if="activeTab === 'marc'">
        <div v-if="!marcFields.length" class="py-12 text-center text-gray-400 text-sm">
          暂无 MARC 信息
        </div>
        <div v-else class="border border-gray-200 rounded overflow-hidden">
          <MarcTable :fields="marcFields" />
        </div>
      </template>

      <template v-else>
        <div class="border border-gray-200 rounded">
          <table class="w-full text-sm">
            <thead class="bg-gray-50 border-b sticky top-0">
              <tr>
                <th
                  v-for="col in itemColumns"
                  :key="col.key"
                  class="px-3 py-2 text-left text-gray-600 font-medium whitespace-nowrap"
                  :class="col.minWidth"
                >
                  {{ col.label }}
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-100">
              <tr v-for="item in itemRows" :key="item.id">
                <td
                  v-for="col in itemColumns"
                  :key="col.key"
                  class="px-3 py-2 align-top break-words"
                  :class="col.minWidth"
                >
                  {{ item[col.key] ?? '' }}
                </td>
              </tr>
              <tr v-if="!itemRows.length">
                <td :colspan="itemColumns.length" class="px-3 py-8 text-center text-gray-400">
                  暂无数据
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </template>
    </div>

    <div
      v-for="handle in resizeHandles"
      :key="handle.direction"
      class="catalog-record-window__resize-handle"
      :class="`catalog-record-window__resize-handle--${handle.direction}`"
      :style="{ cursor: handle.cursor }"
      @pointerdown.stop="onResizeStart(handle.direction, $event)"
    />
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import MarcTable from '@/modules/order/components/MarcTable.vue';
import {
  getCatalogItemsByBibRecordNo,
  getOrderLineItemColumns,
  getOrderLineMarcFields
} from '@/modules/order/data/order-line-detail';
import {
  CATALOG_RECORD_WINDOW_DEFAULT_HEIGHT,
  CATALOG_RECORD_WINDOW_DEFAULT_WIDTH
} from '@/modules/order/composables/useCatalogRecordWindows';

const props = defineProps({
  windowState: { type: Object, required: true }
});

const emit = defineEmits(['close', 'focus', 'update-layout']);

const MIN_WIDTH = 480;
const MIN_HEIGHT = 320;
const VIEWPORT_MARGIN = 16;
const MIN_VISIBLE = 120;

const activeTab = ref('marc');

const resizeHandles = [
  { direction: 'n', cursor: 'ns-resize' },
  { direction: 'e', cursor: 'ew-resize' },
  { direction: 's', cursor: 'ns-resize' },
  { direction: 'w', cursor: 'ew-resize' },
  { direction: 'ne', cursor: 'nesw-resize' },
  { direction: 'se', cursor: 'nwse-resize' },
  { direction: 'sw', cursor: 'nesw-resize' },
  { direction: 'nw', cursor: 'nwse-resize' }
];

const itemColumns = computed(() => getOrderLineItemColumns());
const itemRows = computed(() => getCatalogItemsByBibRecordNo(props.windowState.recordNo));
const itemCount = computed(() => itemRows.value.length);
const marcFields = computed(() =>
  getOrderLineMarcFields(props.windowState.orderLineRow, props.windowState.recordNo)
);

const tabs = computed(() => [
  { key: 'marc', label: 'MARC信息' },
  { key: 'items', label: `单件（${itemCount.value}）` }
]);

const contextTitle = computed(() => {
  const row = props.windowState.orderLineRow;
  if (!row) return '';
  return `订单行号：${row.orderLineNo || '—'} · 正题名：${row.title || '—'}`;
});

const windowWidth = computed(() => props.windowState.width || CATALOG_RECORD_WINDOW_DEFAULT_WIDTH);
const windowHeight = computed(() => props.windowState.height || CATALOG_RECORD_WINDOW_DEFAULT_HEIGHT);

const windowStyle = computed(() => ({
  top: `${props.windowState.y}px`,
  left: `${props.windowState.x}px`,
  width: `${windowWidth.value}px`,
  height: `${windowHeight.value}px`,
  zIndex: props.windowState.zIndex
}));

function clampLayout({ x, y, width, height }) {
  const maxWidth = Math.max(MIN_WIDTH, window.innerWidth - VIEWPORT_MARGIN * 2);
  const maxHeight = Math.max(MIN_HEIGHT, window.innerHeight - VIEWPORT_MARGIN * 2);

  let nextWidth = Math.min(Math.max(width, MIN_WIDTH), maxWidth);
  let nextHeight = Math.min(Math.max(height, MIN_HEIGHT), maxHeight);
  let nextX = x;
  let nextY = y;

  if (nextX + nextWidth > window.innerWidth - VIEWPORT_MARGIN) {
    nextX = Math.max(VIEWPORT_MARGIN, window.innerWidth - VIEWPORT_MARGIN - nextWidth);
  }
  if (nextY + nextHeight > window.innerHeight - VIEWPORT_MARGIN) {
    nextY = Math.max(VIEWPORT_MARGIN, window.innerHeight - VIEWPORT_MARGIN - nextHeight);
  }

  nextX = Math.min(Math.max(VIEWPORT_MARGIN, nextX), Math.max(VIEWPORT_MARGIN, window.innerWidth - MIN_VISIBLE));
  nextY = Math.min(Math.max(VIEWPORT_MARGIN, nextY), Math.max(VIEWPORT_MARGIN, window.innerHeight - MIN_VISIBLE));

  return {
    x: nextX,
    y: nextY,
    width: nextWidth,
    height: nextHeight
  };
}

function emitUpdateLayout(layout) {
  emit('update-layout', {
    recordNo: props.windowState.recordNo,
    ...clampLayout({
      x: layout.x ?? props.windowState.x,
      y: layout.y ?? props.windowState.y,
      width: layout.width ?? windowWidth.value,
      height: layout.height ?? windowHeight.value
    })
  });
}

function onDragStart(event) {
  if (event.button !== 0) return;
  if (event.target.closest('button')) return;

  event.preventDefault();
  emit('focus', props.windowState.recordNo);

  const startX = event.clientX;
  const startY = event.clientY;
  const originX = props.windowState.x;
  const originY = props.windowState.y;

  function onMove(ev) {
    emitUpdateLayout({
      x: originX + ev.clientX - startX,
      y: originY + ev.clientY - startY
    });
  }

  function onUp() {
    document.removeEventListener('pointermove', onMove);
    document.removeEventListener('pointerup', onUp);
  }

  document.addEventListener('pointermove', onMove);
  document.addEventListener('pointerup', onUp);
}

function onResizeStart(direction, event) {
  if (event.button !== 0) return;

  event.preventDefault();
  emit('focus', props.windowState.recordNo);

  const startX = event.clientX;
  const startY = event.clientY;
  const origin = {
    x: props.windowState.x,
    y: props.windowState.y,
    width: windowWidth.value,
    height: windowHeight.value
  };

  function onMove(ev) {
    const dx = ev.clientX - startX;
    const dy = ev.clientY - startY;
    let { x, y, width, height } = origin;

    if (direction.includes('e')) width = origin.width + dx;
    if (direction.includes('w')) {
      width = origin.width - dx;
      x = origin.x + dx;
    }
    if (direction.includes('s')) height = origin.height + dy;
    if (direction.includes('n')) {
      height = origin.height - dy;
      y = origin.y + dy;
    }

    emitUpdateLayout({ x, y, width, height });
  }

  function onUp() {
    document.removeEventListener('pointermove', onMove);
    document.removeEventListener('pointerup', onUp);
  }

  document.addEventListener('pointermove', onMove);
  document.addEventListener('pointerup', onUp);
}
</script>

<style scoped>
.catalog-record-window__resize-handle {
  position: absolute;
  z-index: 2;
}

.catalog-record-window__resize-handle--n {
  top: 0;
  left: 8px;
  right: 8px;
  height: 6px;
}

.catalog-record-window__resize-handle--s {
  bottom: 0;
  left: 8px;
  right: 8px;
  height: 6px;
}

.catalog-record-window__resize-handle--e {
  top: 8px;
  right: 0;
  bottom: 8px;
  width: 6px;
}

.catalog-record-window__resize-handle--w {
  top: 8px;
  left: 0;
  bottom: 8px;
  width: 6px;
}

.catalog-record-window__resize-handle--ne,
.catalog-record-window__resize-handle--se,
.catalog-record-window__resize-handle--sw,
.catalog-record-window__resize-handle--nw {
  width: 12px;
  height: 12px;
}

.catalog-record-window__resize-handle--ne {
  top: 0;
  right: 0;
}

.catalog-record-window__resize-handle--se {
  right: 0;
  bottom: 0;
}

.catalog-record-window__resize-handle--sw {
  left: 0;
  bottom: 0;
}

.catalog-record-window__resize-handle--nw {
  top: 0;
  left: 0;
}
</style>
