<template>
  <header class="h-12 bg-slate-900 flex items-center justify-between px-4 shrink-0 z-20">
    <div class="flex items-center gap-2">
      <div class="w-7 h-7 bg-sky-500 rounded flex items-center justify-center">
        <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
        </svg>
      </div>
      <span class="text-white font-medium text-sm">{{ appStore.config.appName }}</span>
    </div>
    <div class="flex items-center gap-3 shrink-0">
      <div class="flex items-center gap-1 text-gray-300 text-xs">
        <span>当前机构</span>
        <span class="text-white">{{ appStore.config.institution }}</span>
        <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
        </svg>
      </div>
      <div class="w-8 h-8 rounded-full bg-slate-600 flex items-center justify-center">
        <svg class="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
        </svg>
      </div>
    </div>
  </header>
</template>

<script setup>
import { useAppStore } from '@/stores/app';
const appStore = useAppStore();
</script>
