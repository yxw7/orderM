<template>
  <FormModal
    v-if="open"
    title="删除字段"
    width-class="w-full max-w-lg"
    confirm-text="确定"
    @close="emit('close')"
    @confirm="onConfirm"
  >
    <p class="text-sm text-gray-700">{{ message }}</p>
    <p v-if="blocked" class="text-red-500 text-sm mt-2">该字段已被查重规则引用，无法删除</p>
  </FormModal>
</template>

<script setup>
import { computed } from 'vue';
import FormModal from '@/modules/order/components/FormModal.vue';

const props = defineProps({
  open: { type: Boolean, default: false },
  field: { type: Object, default: null }
});

const emit = defineEmits(['close', 'confirm']);

const blocked = computed(() => Boolean(props.field?.usedInDedupRule));

const message = computed(() =>
  props.field ? `确定删除字段「${props.field.displayName}」吗？` : '确定删除该字段吗？'
);

function onConfirm() {
  if (blocked.value) return;
  emit('confirm');
}
</script>
