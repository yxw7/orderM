<template>
  <div v-if="open" class="fixed inset-0 z-[85] flex items-center justify-center bg-black/40 p-4" @click.self="emit('close')">
    <div class="bg-white rounded-lg shadow-xl w-full max-w-lg" @click.stop>
      <div class="flex items-center justify-between px-6 py-4 border-b">
        <h2 class="text-base font-medium text-gray-800">条码预览</h2>
        <button type="button" class="text-gray-400 text-xl" @click="emit('close')">&times;</button>
      </div>
      <div class="px-6 py-5 space-y-4">
        <div>
          <p class="text-sm text-gray-600 mb-2">预分配</p>
          <div class="bg-gray-50 border border-gray-200 rounded px-4 py-3 text-sm text-gray-800 min-h-[44px]">{{ preview.allocated || '—' }}</div>
        </div>
        <div>
          <p class="text-sm text-gray-600 mb-2">未分配</p>
          <div class="bg-gray-50 border border-gray-200 rounded px-4 py-3 text-sm text-gray-800 min-h-[44px]">{{ preview.unallocated || '无' }}</div>
        </div>
      </div>
      <div class="flex justify-end gap-3 px-6 py-4 border-t bg-gray-50 rounded-b-lg">
        <button type="button" class="px-5 py-1.5 text-sm rounded bg-amber-500 text-white hover:bg-amber-600" @click="emit('reject')">不接受</button>
        <button type="button" class="px-5 py-1.5 text-sm rounded bg-sky-600 text-white hover:bg-sky-700" @click="emit('accept')">接受</button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  open: { type: Boolean, default: false },
  preview: { type: Object, default: () => ({ allocated: '', unallocated: '无' }) }
});

const emit = defineEmits(['close', 'accept', 'reject']);
</script>
