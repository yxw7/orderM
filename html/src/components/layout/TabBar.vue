<template>
  <div id="page-tab-bar" class="bg-white border-b border-gray-200 px-4 flex items-center gap-2 h-10 shrink-0 overflow-x-auto">
    <div
      v-for="tab in appStore.tabs"
      :key="tab.route"
      class="flex items-center gap-2 border rounded px-3 py-1 text-sm cursor-pointer whitespace-nowrap"
      :class="tab.route === appStore.activeRoute
        ? 'bg-sky-50 border-sky-200 text-sky-700'
        : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'"
      @click="switchTab(tab.route)"
    >
      <span>{{ tab.title }}</span>
      <button
        v-if="appStore.tabs.length > 1"
        type="button"
        class="opacity-40 hover:opacity-100 text-xs leading-none"
        @click.stop="closeTab(tab.route)"
      >&times;</button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useAppStore } from '@/stores/app';

const router = useRouter();
const appStore = useAppStore();

function switchTab(route) {
  appStore.switchTab(route);
  router.push(route);
}

function closeTab(route) {
  const wasActive = appStore.activeRoute === route;
  appStore.closeTab(route);
  if (wasActive) {
    router.push(appStore.activeRoute);
  }
}
</script>
