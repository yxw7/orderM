<template>
  <div class="holding-tree-root">
    <HoldingTreeNode :nodes="nodes" />
  </div>
</template>

<script setup>
import { provide, ref, watch } from 'vue';
import HoldingTreeNode from '@/modules/order/components/HoldingTreeNode.vue';

const props = defineProps({
  /** @type {import('vue').PropType<Object[]>} */
  nodes: { type: Array, default: () => [] }
});

const expandedNodeIds = ref(new Set());

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

watch(
  () => props.nodes,
  nodes => initExpandedNodes(nodes),
  { immediate: true }
);

provide('holdingTreeExpandedIds', expandedNodeIds);
provide('holdingTreeToggleNode', toggleNode);
</script>

<style scoped>
.holding-tree-root {
  font-size: 0.875rem;
  line-height: 1.75;
  color: #374151;
}
</style>
