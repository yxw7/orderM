import { onUnmounted, ref } from 'vue';

const MAX_WINDOWS = 3;
const BASE_Z_INDEX = 120;

export const CATALOG_RECORD_WINDOW_DEFAULT_WIDTH = 1024;
export const CATALOG_RECORD_WINDOW_DEFAULT_HEIGHT = 520;

export function useCatalogRecordWindows() {
  const windows = ref([]);
  let topZIndex = BASE_Z_INDEX;

  function focusWindow(recordNo) {
    const win = windows.value.find(item => item.recordNo === recordNo);
    if (!win) return;

    topZIndex += 1;
    win.zIndex = topZIndex;
    win.highlighted = true;
    window.setTimeout(() => {
      win.highlighted = false;
    }, 300);
  }

  function openWindow({ recordNo, orderLineRow }) {
    if (!recordNo || !orderLineRow) return;

    const existing = windows.value.find(item => item.recordNo === recordNo);
    if (existing) {
      focusWindow(recordNo);
      return;
    }

    if (windows.value.length >= MAX_WINDOWS) {
      window.alert('最多同时打开 3 个书目详情弹窗，请先关闭部分弹窗');
      return;
    }

    const offsetIndex = windows.value.length;
    topZIndex += 1;
    windows.value.push({
      recordNo,
      orderLineRow,
      x: 80 + offsetIndex * 32,
      y: 100 + offsetIndex * 32,
      width: CATALOG_RECORD_WINDOW_DEFAULT_WIDTH,
      height: CATALOG_RECORD_WINDOW_DEFAULT_HEIGHT,
      zIndex: topZIndex,
      highlighted: false
    });
  }

  function closeWindow(recordNo) {
    windows.value = windows.value.filter(item => item.recordNo !== recordNo);
  }

  function closeAll() {
    windows.value = [];
  }

  function updateLayout(recordNo, layout) {
    const win = windows.value.find(item => item.recordNo === recordNo);
    if (!win) return;
    if (layout.x != null) win.x = layout.x;
    if (layout.y != null) win.y = layout.y;
    if (layout.width != null) win.width = layout.width;
    if (layout.height != null) win.height = layout.height;
  }

  onUnmounted(closeAll);

  return {
    windows,
    openWindow,
    closeWindow,
    closeAll,
    focusWindow,
    updateLayout
  };
}
