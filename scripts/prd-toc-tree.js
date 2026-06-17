/**
 * PRD 目录树层级构建：按功能编码前缀建立父子关系
 */

/** 无独立页面时的虚拟分组名称（来自原型目录命名） */
const VIRTUAL_GROUP_NAMES = {
  '00_01': '名词与规则',
  '00_02': '流程说明',
  '02_02_00': '逐条验收',
  '02_02_01': '单册收/换/退',
  '02_02_02': '整套收/换/退',
  '02_02_02_01': '按整套（纸质书）',
  '02_02_02_02': '按整套（音像资料）',
  '07_05_03': '字段配置'
};

/**
 * 获取编码的直接上级前缀
 * @param {string} code
 * @param {Set<string>} allCodes
 * @returns {string|null}
 */
function findDirectParentCode(code, allCodes) {
  const parts = code.split('_');
  for (let i = parts.length - 1; i >= 2; i -= 1) {
    const prefix = parts.slice(0, i).join('_');
    if (prefix !== code && allCodes.has(prefix)) return prefix;
  }
  return null;
}

/**
 * 推断虚拟分组显示名
 * @param {string} code
 * @returns {string}
 */
function inferVirtualGroupName(code) {
  if (VIRTUAL_GROUP_NAMES[code]) return VIRTUAL_GROUP_NAMES[code];
  const parts = code.split('_');
  return `功能组 ${parts.slice(-2).join('_')}`;
}

/**
 * 为模块内章节建立层级树
 * @param {object[]} items
 * @returns {object[]}
 */
function buildModuleTree(items) {
  const codeSet = new Set(items.map((i) => i.code));
  const nodes = new Map();

  items.forEach((sec) => {
    nodes.set(sec.code, {
      code: sec.code,
      name: sec.name,
      section: sec,
      virtual: false,
      children: []
    });
  });

  /** 补齐缺失的中间层级虚拟节点 */
  items.forEach((sec) => {
    const parts = sec.code.split('_');
    for (let i = parts.length - 1; i >= 2; i -= 1) {
      const prefix = parts.slice(0, i).join('_');
      if (nodes.has(prefix)) continue;
      nodes.set(prefix, {
        code: prefix,
        name: inferVirtualGroupName(prefix),
        section: null,
        virtual: true,
        children: []
      });
    }
  });

  const allCodes = new Set(nodes.keys());
  const roots = [];

  nodes.forEach((node) => {
    const parentCode = findDirectParentCode(node.code, allCodes);
    if (parentCode) {
      nodes.get(parentCode).children.push(node);
    } else if (node.code.split('_').length >= 2) {
      roots.push(node);
    }
  });

  /**
   * 递归排序
   * @param {object[]} list
   */
  function sortTree(list) {
    list.sort((a, b) => a.code.localeCompare(b.code));
    list.forEach((n) => sortTree(n.children));
  }
  sortTree(roots);

  return roots;
}

module.exports = {
  buildModuleTree,
  findDirectParentCode,
  VIRTUAL_GROUP_NAMES
};
