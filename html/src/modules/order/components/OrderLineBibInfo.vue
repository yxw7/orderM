<template>
  <div class="bg-white rounded border border-gray-200">
    <button
      type="button"
      class="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50"
      @click="expanded = !expanded"
    >
      <h3 class="text-sm font-medium text-gray-800">书目信息</h3>
      <span class="text-sm text-sky-600">{{ expanded ? '收起' : '展开' }}</span>
    </button>

    <div v-if="expanded" class="border-t border-gray-200 p-5">
      <div class="flex gap-6">
        <!-- 封面 -->
        <div class="shrink-0 w-[100px]">
          <div class="bib-cover w-[100px] h-[140px] rounded border border-gray-200 overflow-hidden bg-[#f5f0d8]">
            <img
              v-if="row.coverUrl"
              :src="row.coverUrl"
              :alt="row.title"
              class="w-full h-full object-cover"
            >
            <div v-else class="w-full h-full flex items-center justify-center p-2">
              <svg viewBox="0 0 80 100" class="w-14 h-[70px] text-green-700/30" fill="currentColor" aria-hidden="true">
                <path d="M8 4h48a4 4 0 0 1 4 4v88a2 2 0 0 0-2-2H10a2 2 0 0 1-2-2V4z" opacity="0.5" />
                <path d="M12 8h44v80H12V8zm4 8h36v2H16v-2zm0 6h28v2H16v-2zm0 6h32v2H16v-2z" />
              </svg>
            </div>
          </div>
          <p class="mt-2 text-xs text-gray-500 text-center">资源类型：{{ resourceType }}</p>
          <p class="text-xs text-gray-500 text-center">语种：{{ language }}</p>
        </div>

        <!-- 书目字段 -->
        <div class="flex-1 min-w-0">
          <div class="grid grid-cols-3 gap-x-8 gap-y-2 text-sm">
            <div
              v-for="item in bibFields"
              :key="item.key"
              :class="item.span === 3 ? 'col-span-3' : ''"
            >
              <span class="font-medium text-gray-700">{{ item.label }}：</span>
              <span class="text-gray-900">{{ item.value ?? '' }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { buildOrderLineBibFields } from '@/modules/order/data/order-line-detail';

defineOptions({ name: 'OrderLineBibInfo' });

const props = defineProps({
  row: { type: Object, required: true },
  resourceType: { type: String, default: '纸质书' },
  language: { type: String, default: '中文' }
});

const expanded = ref(true);

const bibFields = computed(() =>
  buildOrderLineBibFields(props.row, props.resourceType, props.language)
);
</script>

<style scoped>
.bib-cover {
  background-image:
    linear-gradient(135deg, rgba(34, 120, 50, 0.08) 0%, transparent 50%),
    linear-gradient(-135deg, rgba(34, 120, 50, 0.08) 0%, transparent 50%);
}
</style>
