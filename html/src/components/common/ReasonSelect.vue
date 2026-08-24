<template>
  <div ref="rootRef" class="relative w-full min-w-0">
    <button
      ref="triggerRef"
      type="button"
      class="w-full border rounded text-sm text-left flex items-center gap-2 bg-white focus:outline-none focus:border-sky-500"
      :class="[
        triggerClass || 'px-3 py-2',
        error ? 'border-red-400' : open ? 'border-sky-500' : 'border-gray-300',
        disabled ? 'bg-gray-50 opacity-60 cursor-not-allowed' : 'cursor-pointer',
        modelValue ? 'text-gray-700' : 'text-gray-400'
      ]"
      :disabled="disabled"
      @click="toggleOpen"
    >
      <span class="flex-1 truncate">{{ modelValue || placeholder }}</span>
      <span class="text-gray-400 text-xs shrink-0">▼</span>
    </button>

    <Teleport to="body">
      <div
        v-if="open"
        ref="dropdownRef"
        class="fixed bg-white border border-gray-200 rounded shadow-lg z-[130] overflow-hidden"
        :style="dropdownStyle"
      >
        <ul v-if="!adding" class="py-1 text-sm max-h-56 overflow-auto">
          <li v-if="!options.length" class="px-3 py-2 text-gray-400">
            {{ ALLOW_QUICK_ADD ? '暂无原因，可点击下方添加' : '暂无可用原因' }}
          </li>
          <li v-for="item in options" :key="item.id">
            <button
              type="button"
              class="w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-50"
              :class="item.content === modelValue ? 'bg-sky-50 text-sky-700' : ''"
              @mousedown.prevent
              @click.stop="select(item.content)"
            >
              {{ item.content }}
            </button>
          </li>
          <li v-if="ALLOW_QUICK_ADD" class="border-t border-gray-100">
            <button
              type="button"
              class="w-full text-left px-3 py-2 text-sky-600 font-medium hover:bg-sky-50"
              @mousedown.prevent
              @click.stop="startAdd"
            >
              ＋ 添加原因
            </button>
          </li>
        </ul>

        <div v-else-if="ALLOW_QUICK_ADD" class="p-3 space-y-2">
          <div class="text-sm text-sky-700 font-medium">新增原因</div>
          <input
            ref="addInputRef"
            v-model="draft"
            type="text"
            placeholder="请输入原因内容"
            class="w-full border border-gray-300 rounded px-2 py-1.5 text-sm focus:outline-none focus:border-sky-500"
            @keydown.enter.prevent="saveAdd"
            @keydown.esc.prevent="cancelAdd"
          >
          <div class="flex justify-end gap-2">
            <button
              type="button"
              class="px-3 py-1 text-sm text-gray-600 border border-gray-300 rounded hover:bg-gray-50"
              @mousedown.prevent
              @click.stop="cancelAdd"
            >
              取消
            </button>
            <button
              type="button"
              class="px-3 py-1 text-sm bg-sky-600 text-white rounded hover:bg-sky-700"
              @mousedown.prevent
              @click.stop="saveAdd"
            >
              保存
            </button>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue';
import { useReasonParamsStore } from '@/stores/reason-params';

/** 业务下拉「＋ 添加原因」快捷入口；改回 true 可恢复 */
const ALLOW_QUICK_ADD = false;

const props = defineProps({
  modelValue: { type: String, default: '' },
  reasonType: {
    type: String,
    required: true,
    validator: v => ['exchange', 'return', 'cancel', 'revokeReceive'].includes(v)
  },
  placeholder: { type: String, default: '请选择' },
  disabled: { type: Boolean, default: false },
  error: { type: Boolean, default: false },
  /** 触发器额外 class，便于行内紧凑样式 */
  triggerClass: { type: String, default: '' }
});

const emit = defineEmits(['update:modelValue', 'change']);

const reasonStore = useReasonParamsStore();
const open = ref(false);
const adding = ref(false);
const draft = ref('');
const rootRef = ref(null);
const triggerRef = ref(null);
const dropdownRef = ref(null);
const addInputRef = ref(null);
const dropdownStyle = ref({ top: '0px', left: '0px', width: '0px' });

const options = computed(() => reasonStore.getActiveByType(props.reasonType));

function updateDropdownPosition() {
  const trigger = triggerRef.value;
  if (!trigger) return;

  const rect = trigger.getBoundingClientRect();
  const gap = 4;
  const maxHeight = 280;
  const spaceBelow = window.innerHeight - rect.bottom - gap;
  const spaceAbove = rect.top - gap;
  const openUpward = spaceBelow < 160 && spaceAbove > spaceBelow;

  dropdownStyle.value = {
    left: `${rect.left}px`,
    width: `${Math.max(rect.width, 200)}px`,
    top: openUpward ? `${rect.top - gap}px` : `${rect.bottom + gap}px`,
    transform: openUpward ? 'translateY(-100%)' : 'none',
    maxHeight: `${Math.min(maxHeight, openUpward ? spaceAbove : spaceBelow)}px`
  };
}

async function openDropdown() {
  if (props.disabled) return;
  open.value = true;
  adding.value = false;
  draft.value = '';
  await nextTick();
  updateDropdownPosition();
}

function closeDropdown() {
  open.value = false;
  adding.value = false;
  draft.value = '';
}

function toggleOpen() {
  if (props.disabled) return;
  if (open.value) closeDropdown();
  else openDropdown();
}

function select(content) {
  emit('update:modelValue', content);
  emit('change', content);
  closeDropdown();
}

async function startAdd() {
  if (!ALLOW_QUICK_ADD) return;
  adding.value = true;
  draft.value = '';
  await nextTick();
  updateDropdownPosition();
  addInputRef.value?.focus();
}

function cancelAdd() {
  adding.value = false;
  draft.value = '';
  nextTick(() => updateDropdownPosition());
}

function saveAdd() {
  const content = draft.value.trim();
  if (!content) {
    window.alert('请输入原因内容');
    return;
  }
  if (reasonStore.isDuplicate(props.reasonType, content)) {
    window.alert('该原因已存在');
    return;
  }
  const item = reasonStore.addReason(props.reasonType, { content, remark: '' });
  select(item.content);
}

function onDocumentClick(event) {
  const target = event.target;
  if (rootRef.value?.contains(target) || dropdownRef.value?.contains(target)) return;
  closeDropdown();
}

function onViewportChange() {
  if (open.value) updateDropdownPosition();
}

watch(open, isOpen => {
  if (isOpen) {
    window.addEventListener('scroll', onViewportChange, true);
    window.addEventListener('resize', onViewportChange);
  } else {
    window.removeEventListener('scroll', onViewportChange, true);
    window.removeEventListener('resize', onViewportChange);
  }
});

onMounted(() => document.addEventListener('click', onDocumentClick));
onBeforeUnmount(() => {
  document.removeEventListener('click', onDocumentClick);
  window.removeEventListener('scroll', onViewportChange, true);
  window.removeEventListener('resize', onViewportChange);
});
</script>
