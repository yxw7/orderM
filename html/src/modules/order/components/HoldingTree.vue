<template>
  <div class="holding-tree-root">
    <HoldingTreeNode :nodes="nodes" />
  </div>
</template>

<script setup>
import { computed, provide, ref, watch } from 'vue';
import HoldingTreeNode from '@/modules/order/components/HoldingTreeNode.vue';

const props = defineProps({
  /** @type {import('vue').PropType<Object[]>} */
  nodes: { type: Array, default: () => [] },
  /** 当前选中的四级叶子 pathKey */
  selectedKey: { type: String, default: '' }
});

const emit = defineEmits(['select-leaf']);

const expandedNodeIds = ref(new Set());
const selectedKeyRef = computed(() => props.selectedKey);

/**
 * 收集所有可展开分支节点路径
 * @param {Object[]} nodes - 树节点
 * @param {number[]} segments - 路径索引
 * @returns {string[]}
 */
function collectBranchPaths(nodes, segments = []) {
  if (!nodes?.length) return [];

  return nodes.flatMap((node, index) => {
    if (!node.children?.length) return [];
    const path = [...segments, index].join('/');
    return [path, ...collectBranchPaths(node.children, [...segments, index])];
  });
}

/**
 * 初始化默认展开全部可展开节点
 * @param {Object[]} nodes - 树节点
 */
function initExpandedNodes(nodes) {
  expandedNodeIds.value = new Set(collectBranchPaths(nodes));
}

/**
 * 切换节点展开状态
 * @param {string} pathKey - 节点路径键
 */
function toggleNode(pathKey) {
  const next = new Set(expandedNodeIds.value);
  if (next.has(pathKey)) next.delete(pathKey);
  else next.add(pathKey);
  expandedNodeIds.value = next;
}

/**
 * 选中叶子（四级馆藏地 / 所属馆下未关联 / 一级根未关联）
 * @param {{ node: Object, pathKey: string }} payload
 */
function selectLeaf(payload) {
  emit('select-leaf', payload);
}

watch(
  () => props.nodes,
  nodes => initExpandedNodes(nodes),
  { immediate: true }
);

provide('holdingTreeExpandedIds', expandedNodeIds);
provide('holdingTreeToggleNode', toggleNode);
provide('holdingTreeSelectLeaf', selectLeaf);
provide('holdingTreeSelectedKey', selectedKeyRef);
</script>

<style scoped>
.holding-tree-root {
  font-size: 0.875rem;
  line-height: 1.75;
  color: #374151;
}
</style>
