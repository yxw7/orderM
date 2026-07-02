<template>
  <div id="sidebar-wrapper" class="relative shrink-0 h-full">
    <aside
      id="sidebar"
      class="h-full bg-slate-800 flex flex-col overflow-y-auto transition-[width] duration-200"
      :class="collapsed ? 'w-0 overflow-hidden' : 'w-52'"
    >
      <nav class="flex-1 py-2">
        <div v-for="group in appStore.config.sidebar" :key="group.id" class="sidebar-group">
          <button
            type="button"
            class="sidebar-toggle w-full flex items-center justify-between px-4 py-3 text-sm text-gray-200 hover:bg-slate-700 transition-colors"
            @click="appStore.toggleGroup(group.id)"
          >
            <span>{{ group.label }}</span>
            <svg
              class="w-4 h-4 transition-transform"
              :class="{ 'rotate-180': appStore.isGroupExpanded(group.id, appStore.activeRoute) }"
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
            </svg>
          </button>
          <div
            class="sidebar-children overflow-hidden transition-all duration-200"
            :class="appStore.isGroupExpanded(group.id, appStore.activeRoute) ? 'max-h-[500px]' : 'max-h-0'"
          >
            <RouterLink
              v-for="child in group.children"
              :key="child.route"
              :to="child.route"
              class="block pl-10 pr-4 py-2 text-sm transition-colors"
              :class="isActive(child.route)
                ? 'bg-sky-600 text-white'
                : 'text-gray-400 hover:text-white hover:bg-slate-700'"
              @click="handleNav(child.route, child.label)"
            >
              {{ child.label }}
            </RouterLink>
          </div>
        </div>
      </nav>
      <button
        type="button"
        class="p-3 border-t border-slate-700 text-gray-400 hover:text-white flex justify-center shrink-0"
        title="收起菜单"
        @click="collapsed = true"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M11 19l-7-7 7-7m8 14l-7-7 7-7"/>
        </svg>
      </button>
    </aside>
    <button
      v-show="collapsed"
      type="button"
      id="sidebar-expand"
      class="absolute bottom-0 left-0 z-10 w-10 p-3 border-t border-slate-700 bg-slate-800 text-gray-400 hover:text-white hover:bg-slate-700 flex justify-center"
      title="展开菜单"
      @click="collapsed = false"
    >
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M13 5l7 7-7 7M5 5l7 7-7 7"/>
      </svg>
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAppStore } from '@/stores/app';
import { getHighlightRoute } from '@/config/app-config';

const router = useRouter();
const appStore = useAppStore();
const collapsed = ref(false);

function isActive(route) {
  return getHighlightRoute(appStore.activeRoute) === route;
}

function handleNav(route, label) {
  appStore.openTab(route, label);
  router.push(route);
}
</script>
