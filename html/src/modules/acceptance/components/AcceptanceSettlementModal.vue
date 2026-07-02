<template>
  <div v-if="open" class="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4" @click.self="emit('close')">
    <div class="bg-white rounded-lg shadow-xl w-full max-w-md" @click.stop>
      <div class="px-6 py-6 flex items-start gap-4">
        <div class="shrink-0 w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
          <svg class="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01M12 3a9 9 0 100 18 9 9 0 000-18z" />
          </svg>
        </div>
        <div>
          <h3 v-if="!message" class="text-base font-medium text-gray-800 mb-2">申请结算</h3>
          <p class="text-sm text-gray-600">{{ message || `确认为所选 ${count} 条验收单申请结算？` }}</p>
        </div>
      </div>
      <div class="flex justify-end gap-3 px-6 py-4 border-t bg-gray-50 rounded-b-lg">
        <button type="button" class="px-5 py-1.5 text-sm border border-gray-300 rounded text-gray-600 hover:bg-gray-50" @click="emit('close')">取消</button>
        <button type="button" class="px-5 py-1.5 text-sm bg-sky-600 text-white rounded hover:bg-sky-700" @click="emit('confirm')">确定</button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  open: { type: Boolean, default: false },
  count: { type: Number, default: 0 },
  message: { type: String, default: '' }
});

const emit = defineEmits(['close', 'confirm']);
</script>
