<template>
  <div
    v-for="(node, index) in nodes"
    :key="`${pathKey(index)}`"
    class="holding-tree-node"
  >
    <div
      class="holding-tree-node__row"
      :class="{
        'holding-tree-node__row--clickable': true,
        'holding-tree-node__row--selected': isLeaf(node) && isSelected(index)
      }"
      :style="rowIndentStyle"
      @click="handleRowClick(node, index)"
    >
      <TreeExpandIcon
        v-if="hasChildren(node)"
        :expanded="isExpanded(index)"
        class="holding-tree-node__toggle"
      />
      <span v-else class="holding-tree-node__toggle-placeholder" aria-hidden="true" />
      <span class="holding-tree-node__label">{{ node.name }}</span>
      <span v-if="node.copyCount != null" class="holding-tree-copy-badge">{{ node.copyCount }}本</span>
    </div>
    <HoldingTreeNode
      v-if="hasChildren(node) && isExpanded(index)"
      :nodes="node.children"
      :path-segments="[...pathSegments, index]"
    />
  </div>
</template>

<script setup>
import { computed, inject } from 'vue';
import TreeExpandIcon from '@/modules/order/components/TreeExpandIcon.vue';

defineOptions({ name: 'HoldingTreeNode' });

const props = defineProps({
  /** @type {import('vue').PropType<Object[]>} */
  nodes: { type: Array, default: () => [] },
  /** @type {import('vue').PropType<number[]>} */
  pathSegments: { type: Array, default: () => [] }
});

/** 按层级缩进，替代引导线 */
const rowIndentStyle = computed(() => {
  const depth = props.pathSegments.length;
  return depth > 0 ? { paddingLeft: `${depth * 1.25}rem` } : undefined;
});

/** @type {import('vue').Ref<Set<string>>|undefined} */
const expandedNodeIds = inject('holdingTreeExpandedIds');
/** @type {((pathKey: string) => void)|undefined} */
const toggleNode = inject('holdingTreeToggleNode');
/** @type {((payload: { node: Object, pathKey: string }) => void)|undefined} */
const selectLeaf = inject('holdingTreeSelectLeaf');
/** @type {import('vue').Ref<string>|undefined} */
const selectedKey = inject('holdingTreeSelectedKey');

/**
 * 节点是否有子级
 * @param {Object} node - 树节点
 * @returns {boolean}
 */
function hasChildren(node) {
  return Boolean(node.children?.length);
}

/**
 * 是否为叶子（四级馆藏地 / 未关联馆藏）
 * @param {Object} node
 * @returns {boolean}
 */
function isLeaf(node) {
  return !hasChildren(node);
}

/**
 * 生成节点路径键
 * @param {number} index - 同级索引
 * @returns {string}
 */
function pathKey(index) {
  return [...props.pathSegments, index].join('/');
}

/**
 * 判断节点是否展开
 * @param {number} index - 同级索引
 * @returns {boolean}
 */
function isExpanded(index) {
  return expandedNodeIds?.value?.has(pathKey(index)) ?? false;
}

/**
 * 叶子是否选中
 * @param {number} index
 * @returns {boolean}
 */
function isSelected(index) {
  return selectedKey?.value === pathKey(index);
}

/**
 * 点击行：分支展开/收起；叶子触发选中筛选
 * @param {Object} node - 树节点
 * @param {number} index - 同级索引
 */
function handleRowClick(node, index) {
  if (hasChildren(node)) {
    toggleNode?.(pathKey(index));
    return;
  }
  selectLeaf?.({ node, pathKey: pathKey(index) });
}
</script>

<style scoped>
.holding-tree-node__row {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.25rem;
  min-height: 1.75rem;
}

.holding-tree-node__row--clickable {
  cursor: pointer;
  border-radius: 0.25rem;
}

.holding-tree-node__row--clickable:hover {
  background: #f9fafb;
}

.holding-tree-node__row--selected {
  background: #e0f2fe;
}

.holding-tree-node__row--selected:hover {
  background: #bae6fd;
}

.holding-tree-node__toggle,
.holding-tree-node__toggle-placeholder {
  width: 1rem;
  height: 1rem;
  flex-shrink: 0;
}

.holding-tree-node__label {
  color: #374151;
}

.holding-tree-copy-badge {
  display: inline-flex;
  align-items: center;
  padding: 0.125rem 0.5rem;
  border-radius: 9999px;
  background: #eff6ff;
  color: #0284c7;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1.25rem;
  margin-left: 0.125rem;
}
</style>
