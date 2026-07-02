<template>
  <div v-if="open" class="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4" @click.self="emit('cancel')">
    <div class="bg-white rounded-lg shadow-xl w-full max-w-lg" @click.stop>
      <div class="px-6 py-6 flex items-start gap-4">
        <div class="shrink-0 w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
          <svg class="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M12 9v2m0 4h.01M12 3a9 9 0 100 18 9 9 0 000-18z" />
          </svg>
        </div>
        <div class="text-sm text-gray-800 space-y-1 pt-1">
          <p>催缺单生成成功，已自动过滤已收货书目</p>
          <p>是否立即查看？</p>
        </div>
      </div>
      <div class="flex justify-end gap-3 px-6 py-4 border-t border-gray-200">
        <button type="button" class="px-5 py-1.5 text-sm rounded border border-gray-300 text-gray-600 hover:bg-gray-50" @click="emit('cancel')">
          取消
        </button>
        <button type="button" class="px-5 py-1.5 text-sm rounded bg-sky-600 text-white hover:bg-sky-700" @click="emit('confirm')">
          确定
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  open: { type: Boolean, default: false }
});

const emit = defineEmits(['cancel', 'confirm']);
</script>
