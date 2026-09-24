/** 四级馆藏地树（mock）与勾选写入馆址管理 */

import {
  isDuplicateBranchCode,
  isDuplicateCollectionCode,
  isDuplicateSiteCode
} from '@/modules/location/data/location-manage';
import { getInstitutionById } from '@/modules/subscriber/data/org-hierarchy';

const LEVEL4_TYPE_LABEL = {
  site: '馆址',
  branch: '分馆',
  collection: '馆藏地'
};

/**
 * 四级馆藏地接口树：馆址 → 分馆 → 馆藏地（节点带 institutionId）
 * 含部分「尚未加入本地列表」的节点，便于演示跨身份勾选。
 */
export const LEVEL4_LOCATION_TREE = [
  {
    id: 'l4-site-st001c1',
    type: 'site',
    code: 'ST001_C1',
    name: '首都华威桥馆',
    institutionId: 'inst-1',
    children: [
      {
        id: 'l4-branch-st001',
        type: 'branch',
        code: 'ST001',
        name: '首都图书馆',
        institutionId: 'inst-1',
        children: [
          { id: 'l4-col-st01', type: 'collection', code: 'ST01', name: '哲学社会科学图书借阅室 (4204)', institutionId: 'inst-1', children: [] },
          { id: 'l4-col-st02', type: 'collection', code: 'ST02', name: '中文库本书库 (4)', institutionId: 'inst-1', children: [] },
          { id: 'l4-col-st03', type: 'collection', code: 'ST03', name: '文学史地图书借阅室2106', institutionId: 'inst-1', children: [] },
          { id: 'l4-col-st10', type: 'collection', code: 'ST10', name: '综合图书借阅室 (7204)', institutionId: 'inst-1', children: [] },
          { id: 'l4-col-new01', type: 'collection', code: 'ST08', name: '新书展示区（未入库）', institutionId: 'inst-1', children: [] }
        ]
      },
      {
        id: 'l4-branch-std01',
        type: 'branch',
        code: 'STD01',
        name: '首图地方文献',
        institutionId: 'inst-1',
        children: [
          { id: 'l4-col-cl001', type: 'collection', code: 'CL001', name: '北京地方文献阅览室', institutionId: 'inst-1', children: [] }
        ]
      },
      {
        id: 'l4-branch-ste01',
        type: 'branch',
        code: 'STE01',
        name: '市少儿图书馆',
        institutionId: 'inst-1',
        children: [
          { id: 'l4-col-cl002', type: 'collection', code: 'CL002', name: '首少.少儿钢琴厂书库', institutionId: 'inst-1', children: [] }
        ]
      },
      {
        id: 'l4-branch-new-hwq',
        type: 'branch',
        code: 'STF02',
        name: '首图非遗文献分馆（扩展）',
        institutionId: 'inst-1',
        children: []
      }
    ]
  },
  {
    id: 'l4-site-st001c2',
    type: 'site',
    code: 'ST001_C2',
    name: '首都大兴机场分馆',
    institutionId: 'inst-1',
    children: [
      {
        id: 'l4-branch-st029',
        type: 'branch',
        code: 'ST029',
        name: '首图大兴机场分馆',
        institutionId: 'inst-1',
        children: [
          { id: 'l4-col-dx01', type: 'collection', code: 'DX01', name: '机场阅览室', institutionId: 'inst-1', children: [] }
        ]
      }
    ]
  },
  {
    id: 'l4-site-st001c4',
    type: 'site',
    code: 'ST001_C4',
    name: '其他馆址（首都图书馆）',
    institutionId: 'inst-1',
    children: [
      {
        id: 'l4-branch-st002',
        type: 'branch',
        code: 'ST002',
        name: '首都图书馆月坛分馆',
        institutionId: 'inst-1',
        children: [
          { id: 'l4-col-yt01', type: 'collection', code: 'YT01', name: '月坛图书室', institutionId: 'inst-1', children: [] }
        ]
      },
      {
        id: 'l4-branch-st003',
        type: 'branch',
        code: 'ST003',
        name: '首都图书馆北工大分馆',
        institutionId: 'inst-1',
        children: []
      }
    ]
  },
  {
    id: 'l4-site-st001c3',
    type: 'site',
    code: 'ST001_C3',
    name: '北京城市图书馆',
    institutionId: 'inst-2',
    children: [
      {
        id: 'l4-branch-stb01',
        type: 'branch',
        code: 'STB01',
        name: '城市图书馆主分馆',
        institutionId: 'inst-2',
        children: [
          { id: 'l4-col-city01', type: 'collection', code: 'CITY01', name: '城市图书馆综合阅览', institutionId: 'inst-2', children: [] }
        ]
      }
    ]
  },
  {
    id: 'l4-site-extra',
    type: 'site',
    code: 'ST001_C5',
    name: '首都图书馆石景山馆（四级）',
    institutionId: 'inst-1',
    children: [
      {
        id: 'l4-branch-sjs',
        type: 'branch',
        code: 'STS02',
        name: '石景山阅览分馆',
        institutionId: 'inst-1',
        children: [
          { id: 'l4-col-sjs01', type: 'collection', code: 'SJS01', name: '石景山少儿阅览室', institutionId: 'inst-1', children: [] }
        ]
      }
    ]
  }
];

export function getLevel4TypeLabel(type) {
  return LEVEL4_TYPE_LABEL[type] || type || '';
}

/**
 * 按机构权限裁剪四级树（整枝不可见则剔除）
 * @param {Object[]} tree
 * @param {string[]} institutionIds
 */
export function filterLevel4TreeByInstitutions(tree, institutionIds) {
  const allowed = new Set((institutionIds || []).filter(Boolean));
  if (!allowed.size) return [];

  function walk(nodes) {
    return (nodes || [])
      .map(node => {
        if (!allowed.has(node.institutionId)) return null;
        const children = walk(node.children || []);
        return { ...node, children };
      })
      .filter(Boolean);
  }

  return walk(tree);
}

/**
 * 从四级树提取馆址筛选项（去重，按编码排序）
 * @param {Object[]} tree
 * @returns {{ id: string, code: string, name: string }[]}
 */
export function collectLevel4SiteOptions(tree) {
  const map = new Map();
  function walk(nodes) {
    (nodes || []).forEach(node => {
      if (node.type === 'site' && node.code && !map.has(node.code)) {
        map.set(node.code, { id: node.id, code: node.code, name: node.name || node.code });
      }
      walk(node.children);
    });
  }
  walk(tree);
  return [...map.values()].sort((a, b) => String(a.code).localeCompare(String(b.code), 'zh-CN'));
}

/**
 * 从四级树提取分馆筛选项；可选按馆址编码限定
 * @param {Object[]} tree
 * @param {string} [siteCode]
 * @returns {{ id: string, code: string, name: string, siteCode: string }[]}
 */
export function collectLevel4BranchOptions(tree, siteCode = '') {
  const scopeCode = String(siteCode || '').trim();
  const map = new Map();

  function walk(nodes, ancestorSiteCode = '') {
    (nodes || []).forEach(node => {
      const nextSiteCode = node.type === 'site' ? String(node.code || '').trim() : ancestorSiteCode;
      if (node.type === 'branch' && node.code) {
        if (!scopeCode || nextSiteCode === scopeCode) {
          if (!map.has(node.code)) {
            map.set(node.code, {
              id: node.id,
              code: node.code,
              name: node.name || node.code,
              siteCode: nextSiteCode
            });
          }
        }
      }
      walk(node.children, nextSiteCode);
    });
  }

  walk(tree);
  return [...map.values()].sort((a, b) => String(a.code).localeCompare(String(b.code), 'zh-CN'));
}

/**
 * 按馆址/分馆编码进一步裁剪四级树（仅展示匹配子树）
 * @param {Object[]} tree
 * @param {{ siteCode?: string, branchCode?: string }} scope
 */
export function filterLevel4TreeByLocalScope(tree, scope = {}) {
  const siteCode = String(scope.siteCode || '').trim();
  const branchCode = String(scope.branchCode || '').trim();
  if (!siteCode && !branchCode) return tree || [];

  function findByTypeCode(nodes, type, code) {
    for (const node of nodes || []) {
      if (node.type === type && String(node.code || '').trim() === code) return node;
      const hit = findByTypeCode(node.children, type, code);
      if (hit) return hit;
    }
    return null;
  }

  let scoped = tree || [];
  if (siteCode) {
    const siteNode = findByTypeCode(scoped, 'site', siteCode);
    scoped = siteNode ? [{ ...siteNode, children: siteNode.children || [] }] : [];
  }
  if (branchCode) {
    const branchNode = findByTypeCode(scoped, 'branch', branchCode);
    scoped = branchNode ? [{ ...branchNode, children: branchNode.children || [] }] : [];
  }
  return scoped;
}

/**
 * 查找节点路径（含自身）
 * @returns {Object[]}
 */
export function findLevel4NodePath(tree, nodeId) {
  const path = [];
  function walk(nodes) {
    for (const node of nodes || []) {
      path.push(node);
      if (node.id === nodeId) return true;
      if (walk(node.children)) return true;
      path.pop();
    }
    return false;
  }
  return walk(tree) ? [...path] : [];
}

/**
 * 扁平化树节点（保留 depth）；keyword 匹配自身或子孙时保留祖先路径
 */
export function flattenLevel4Tree(tree, keyword = '') {
  const q = String(keyword || '').trim().toLowerCase();

  function nodeMatches(node) {
    if (!q) return true;
    return String(node.code || '').toLowerCase().includes(q)
      || String(node.name || '').toLowerCase().includes(q);
  }

  function hasMatchInSubtree(node) {
    if (nodeMatches(node)) return true;
    return (node.children || []).some(hasMatchInSubtree);
  }

  const rows = [];
  function walk(nodes, depth) {
    (nodes || []).forEach(node => {
      if (q && !hasMatchInSubtree(node)) return;
      rows.push({ ...node, depth, typeLabel: getLevel4TypeLabel(node.type) });
      walk(node.children || [], depth + 1);
    });
  }
  walk(tree, 0);
  return rows;
}

/**
 * 将勾选节点写入当前页签列表
 * 所属馆址/分馆筛选项取自四级接口（编码）；写入本地上级时优先按筛选项编码匹配本地，否则按树路径
 * @returns {{ added: Object[], skippedCodes: string[], message: string }}
 */
export function applyLevel4Pick({
  tab,
  selectedNodes,
  filterSiteCode = '',
  filterBranchCode = '',
  siteRows,
  branchRows,
  collectionRows,
  allowedInstitutionIds = []
}) {
  const allowed = new Set((allowedInstitutionIds || []).filter(Boolean));
  const seenBatch = new Set();
  const added = [];
  const skippedCodes = [];
  const nodes = selectedNodes || [];
  const preferredSiteCode = String(filterSiteCode || '').trim();
  const preferredBranchCode = String(filterBranchCode || '').trim();

  function resolveSiteId(node) {
    const codes = [preferredSiteCode, String(node.ancestorSiteCode || '').trim()].filter(Boolean);
    for (const code of codes) {
      const site = (siteRows || []).find(row => row.code === code);
      if (site) return site.id;
    }
    return '';
  }

  function resolveBranchId(node) {
    const codes = [preferredBranchCode, String(node.ancestorBranchCode || '').trim()].filter(Boolean);
    for (const code of codes) {
      const branch = (branchRows || []).find(row => row.code === code);
      if (branch) return branch.id;
    }
    return '';
  }

  nodes.forEach(node => {
    const code = String(node.code || '').trim();
    if (!code) {
      skippedCodes.push('(空编码)');
      return;
    }
    if (seenBatch.has(code)) return;
    seenBatch.add(code);

    if (allowed.size && node.institutionId && !allowed.has(node.institutionId)) {
      skippedCodes.push(code);
      return;
    }

    if (tab === 'site') {
      if (isDuplicateSiteCode(siteRows, code)) {
        skippedCodes.push(code);
        return;
      }
      const institutionId = node.institutionId || '';
      if (allowed.size && institutionId && !allowed.has(institutionId)) {
        skippedCodes.push(code);
        return;
      }
      const inst = getInstitutionById(institutionId);
      added.push({
        id: `site-${Date.now()}-${added.length}`,
        code,
        name: node.name || code,
        institutionId,
        institutionCode: inst?.code || '',
        institutionName: inst?.name || '',
        status: 'active',
        remark: ''
      });
      return;
    }

    if (tab === 'branch') {
      const resolvedSiteId = resolveSiteId(node);
      if (!resolvedSiteId) {
        skippedCodes.push(`${code}(无所属馆址)`);
        return;
      }
      if (isDuplicateBranchCode(branchRows, code)) {
        skippedCodes.push(code);
        return;
      }
      added.push({
        id: `branch-${Date.now()}-${added.length}`,
        siteId: resolvedSiteId,
        code,
        name: node.name || code,
        status: 'active',
        remark: ''
      });
      return;
    }

    if (tab === 'collection') {
      const resolvedBranchId = resolveBranchId(node);
      if (!resolvedBranchId) {
        skippedCodes.push(`${code}(无所属分馆)`);
        return;
      }
      if (isDuplicateCollectionCode(collectionRows, code)) {
        skippedCodes.push(code);
        return;
      }
      added.push({
        id: `col-${Date.now()}-${added.length}`,
        branchId: resolvedBranchId,
        code,
        name: node.name || code,
        status: 'active',
        remark: ''
      });
    }
  });

  const tabLabel = tab === 'site' ? '馆址' : tab === 'branch' ? '分馆' : '馆藏地';
  let message = '';
  if (added.length && skippedCodes.length) {
    message = `成功加入 ${added.length} 条${tabLabel}；跳过 ${skippedCodes.length} 条（${skippedCodes.join('、')}）`;
  } else if (added.length) {
    message = `成功加入 ${added.length} 条${tabLabel}`;
  } else if (skippedCodes.length) {
    message = `全部跳过（${skippedCodes.join('、')}）`;
  } else {
    message = '未加入任何数据';
  }

  return { added, skippedCodes, message };
}

export function enrichSiteRowWithInstitution(site) {
  const inst = getInstitutionById(site?.institutionId);
  return {
    ...site,
    institutionCode: inst?.code || site?.institutionCode || '-',
    institutionName: inst?.name || site?.institutionName || '-'
  };
}

export function filterSitesByVisibleIds(siteRows, visibleSiteIds) {
  const allowed = new Set(visibleSiteIds || []);
  if (!allowed.size) return [];
  return (siteRows || []).filter(row => allowed.has(row.id));
}

export function filterBranchesByVisibleSites(branchRows, visibleSiteIds) {
  const allowed = new Set(visibleSiteIds || []);
  if (!allowed.size) return [];
  return (branchRows || []).filter(row => allowed.has(row.siteId));
}

export function filterCollectionsByVisibleSites(collectionRows, branchRows, visibleSiteIds) {
  const allowedSites = new Set(visibleSiteIds || []);
  if (!allowedSites.size) return [];
  const allowedBranches = new Set(
    (branchRows || []).filter(row => allowedSites.has(row.siteId)).map(row => row.id)
  );
  return (collectionRows || []).filter(row => allowedBranches.has(row.branchId));
}

/**
 * 在四级树中按分馆编码查找分馆节点（深度优先，首次命中）
 * @param {Object[]} [tree]
 * @param {string} branchCode
 * @returns {Object|null}
 */
export function findLevel4BranchByCode(tree = LEVEL4_LOCATION_TREE, branchCode) {
  const code = String(branchCode || '').trim();
  if (!code) return null;
  function walk(nodes) {
    for (const node of nodes || []) {
      if (node.type === 'branch' && String(node.code || '').trim() === code) return node;
      const hit = walk(node.children);
      if (hit) return hit;
    }
    return null;
  }
  return walk(tree);
}

/**
 * 按分馆编码从四级馆藏地取 institutionId（同步倒推权威来源）
 * @param {string} branchCode
 * @param {Object[]} [tree]
 * @returns {string}
 */
export function getInstitutionIdFromLevel4BranchCode(branchCode, tree = LEVEL4_LOCATION_TREE) {
  const node = findLevel4BranchByCode(tree, branchCode);
  return String(node?.institutionId || '').trim();
}
