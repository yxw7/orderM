<template>
  <div class="flex flex-col h-screen overflow-hidden">
    <AppHeader />
    <div class="flex flex-1 overflow-hidden">
      <AppSidebar />
      <main class="flex-1 flex flex-col overflow-hidden bg-gray-100">
        <TabBar />
        <div class="flex-1 min-h-0 overflow-hidden">
          <div class="h-full min-h-0 overflow-hidden p-4 flex flex-col">
            <RouterView v-slot="{ Component, route: viewRoute }">
              <div v-if="Component" class="flex flex-col flex-1 min-h-0 h-full overflow-hidden">
                <KeepAlive :max="20">
                  <component :is="Component" :key="viewRoute.fullPath" />
                </KeepAlive>
              </div>
            </RouterView>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useAppStore } from '@/stores/app';
import { useAcceptanceStore } from '@/modules/acceptance/stores/acceptance';
import { useReasonParamsStore } from '@/stores/reason-params';
import { useLocationStore } from '@/modules/location/stores/location';
import { getRouteTitle } from '@/config/app-config';
import AppHeader from './AppHeader.vue';
import AppSidebar from './AppSidebar.vue';
import TabBar from './TabBar.vue';

const route = useRoute();
const router = useRouter();
const appStore = useAppStore();
const acceptanceStore = useAcceptanceStore();
const reasonParamsStore = useReasonParamsStore();
const locationStore = useLocationStore();

onMounted(() => {
  appStore.initFromStorage();
  acceptanceStore.initFromStorage();
  reasonParamsStore.initFromStorage();
  locationStore.initFromStorage();
  syncRouteToTab();
});

watch(
  () => route.path,
  () => syncRouteToTab()
);

function syncRouteToTab() {
  const path = route.path;
  const title = route.meta.title || getRouteTitle(path);
  appStore.openTab(path, title);
}
</script>

