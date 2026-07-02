<template>
  <Teleport to="body">
    <div
      class="fixed inset-0 z-[90] transition-opacity"
      :class="open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'"
    >
      <div class="absolute inset-0 bg-black/30" @click="emit('close')" />
      <aside
        class="absolute top-0 right-0 h-full w-[min(960px,92vw)] bg-white shadow-2xl flex flex-col transition-transform duration-300"
        :class="open ? 'translate-x-0' : 'translate-x-full'"
        @click.stop
      >
        <div class="flex items-center justify-between px-6 py-4 border-b shrink-0">
          <h2 class="text-base font-medium text-gray-800">验收详情</h2>
          <button type="button" class="text-gray-400 hover:text-gray-600 text-2xl leading-none" @click="emit('close')">&times;</button>
        </div>
        <div class="flex-1 min-h-0 overflow-auto">
          <AcceptanceDetailView v-if="open && acceptanceId" embedded :acceptance-id="acceptanceId" />
        </div>
      </aside>
    </div>
  </Teleport>
</template>

<script setup>
import AcceptanceDetailView from '@/modules/acceptance/views/AcceptanceDetailView.vue';

defineProps({
  open: { type: Boolean, default: false },
  acceptanceId: { type: String, default: '' }
});

const emit = defineEmits(['close']);
</script>
