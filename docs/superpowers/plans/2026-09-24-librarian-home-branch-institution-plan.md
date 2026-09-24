# 馆员列表 · 所属馆与所属机构缓存 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 馆员列表增加只读「所属馆」「所属机构」；同步时按四级馆藏地倒推一次机构落库；权限校验有订户用订户机构合集，无订户读落库 `institutionId`，不再调用户信息、不再现场倒推。

**Architecture:** 在 `location-level4.js` 增加按分馆编码查四级节点机构的 API；在 `librarian-manage.js` 用「中台所属馆 → 本地分馆 → 四级树 `institutionId`」做同步写入并充实列表展示字段；在 `current-librarian.js` 实现 `resolveInstitutionScopeIds()`（订户合集优先，否则读落库机构）。用 `html/scripts/accept-librarian-home-branch.mjs` 验收数据层。

**Tech Stack:** Vue 3、Vite；纯 JS mock；`node --experimental-loader ./scripts/alias-loader.mjs`

**设计规格：** [`2026-09-24-librarian-home-branch-institution-cache-design.md`](../specs/2026-09-24-librarian-home-branch-institution-cache-design.md)

**说明：** 若已有条码号供应商计划中的 `resolveInstitutionScopeIds`（运行时 `getInstitutionIdForBranch` 倒推），以**本计划**为准改为读落库 `institutionId`。

---

## 文件映射

| 文件 | 职责 |
|------|------|
| `html/src/modules/location/data/location-level4.js` | `findLevel4BranchByCode` / `getInstitutionIdFromLevel4BranchCode` |
| `html/src/modules/subscriber/data/librarian-manage.js` | mock `branchId`；同步写入；列定义；行展示字段 |
| `html/src/modules/subscriber/data/current-librarian.js` | `getCurrentLibrarianBranchId`；`resolveInstitutionScopeIds`（读缓存） |
| `html/src/modules/subscriber/views/LibrarianListView.vue` | 通常无需改（列走 `LIBRARIAN_COLUMNS` + 行字段）；若空值需 slot 再补 |
| `html/scripts/accept-librarian-home-branch.mjs` | 数据层验收 |
| `html/package.json` | 可选 `test:librarian-home-branch` script |

---

### Task 1: 四级树按分馆编码取机构

**Files:**
- Modify: `html/src/modules/location/data/location-level4.js`
- Test: `html/scripts/accept-librarian-home-branch.mjs`（本 Task 先建骨架）

- [ ] **Step 1: 在 `location-level4.js` 末尾（或 `collectLevel4BranchOptions` 附近）追加**

```javascript
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
```

- [ ] **Step 2: 创建验收脚本骨架并写四级查找用例**

Create: `html/scripts/accept-librarian-home-branch.mjs`

```javascript
/**
 * 馆员 · 所属馆 / 所属机构缓存 — 验收脚本
 * 运行：node --experimental-loader ./scripts/alias-loader.mjs ./scripts/accept-librarian-home-branch.mjs
 */
import assert from 'node:assert/strict';
import { appConfig } from '../src/config/app-config.js';
import {
  getInstitutionIdFromLevel4BranchCode,
  findLevel4BranchByCode
} from '../src/modules/location/data/location-level4.js';

const results = [];

function check(name, fn) {
  try {
    fn();
    results.push({ name, ok: true });
    console.log(`PASS  ${name}`);
  } catch (err) {
    results.push({ name, ok: false, error: err.message });
    console.error(`FAIL  ${name}`);
    console.error(`      ${err.message}`);
  }
}

check('四级树 STD01 → inst-1', () => {
  assert.equal(getInstitutionIdFromLevel4BranchCode('STD01'), 'inst-1');
  assert.ok(findLevel4BranchByCode(undefined, 'STD01'));
});

check('四级树 STB01 → inst-2', () => {
  assert.equal(getInstitutionIdFromLevel4BranchCode('STB01'), 'inst-2');
});

check('未知分馆编码 → 空机构', () => {
  assert.equal(getInstitutionIdFromLevel4BranchCode('NO_SUCH_BRANCH'), '');
});

const failed = results.filter(r => !r.ok);
console.log(`\n${results.length - failed.length}/${results.length} passed`);
if (failed.length) process.exit(1);
```

- [ ] **Step 3: 运行验收（预期 PASS）**

Run（在 `html/` 目录）:

```bash
node --experimental-loader ./scripts/alias-loader.mjs ./scripts/accept-librarian-home-branch.mjs
```

Expected: 3 PASS

- [ ] **Step 4: Commit**

```bash
git add html/src/modules/location/data/location-level4.js html/scripts/accept-librarian-home-branch.mjs
git commit -m "feat: resolve institution from level4 branch code"
```

---

### Task 2: 馆员同步写入 + 列表列

**Files:**
- Modify: `html/src/modules/subscriber/data/librarian-manage.js`
- Modify: `html/scripts/accept-librarian-home-branch.mjs`

- [ ] **Step 1: 在 `librarian-manage.js` 顶部增加 import，并追加同步 / 展示辅助函数**

```javascript
import { getTodayString } from '@/modules/subscriber/data/subscriber-manage';
import {
  formatBranchLabel,
  getBranchById,
  initialBranchRows
} from '@/modules/location/data/location-manage';
import { getInstitutionIdFromLevel4BranchCode } from '@/modules/location/data/location-level4';
import { getInstitutionName } from '@/modules/subscriber/data/org-hierarchy';

/**
 * 同步所属馆：写入 branchId，并按四级树倒推 institutionId（仅同步时调用）
 * @param {{ branchId?: string }} row
 * @param {string} [branchId]
 * @returns {{ branchId: string, institutionId: string, branchName: string, institutionName: string }}
 */
export function syncLibrarianHomeBranch(row, branchId = row?.branchId) {
  const id = String(branchId || '').trim();
  if (!id) {
    return {
      branchId: '',
      institutionId: '',
      branchName: '',
      institutionName: ''
    };
  }
  const branch = getBranchById(initialBranchRows, id);
  const code = String(branch?.code || '').trim();
  const institutionId = code ? getInstitutionIdFromLevel4BranchCode(code) : '';
  return {
    branchId: id,
    institutionId,
    branchName: formatBranchLabel(branch) || '',
    institutionName: getInstitutionName(institutionId) || ''
  };
}

/** 仅刷新展示名（已有 branchId / institutionId 时） */
export function enrichLibrarianOrgDisplay(row) {
  const branch = getBranchById(initialBranchRows, row?.branchId);
  return {
    ...row,
    branchName: formatBranchLabel(branch) || '',
    institutionName: getInstitutionName(row?.institutionId) || ''
  };
}
```

注意：若文件顶部已有 `getTodayString` import，合并 import，勿重复。

- [ ] **Step 2: 改 `LIBRARIAN_COLUMNS`（订户名称前加两列）**

```javascript
export const LIBRARIAN_COLUMNS = [
  { key: 'id', label: '序号' },
  { key: 'account', label: '馆员账号' },
  { key: 'name', label: '馆员姓名' },
  { key: 'branchName', label: '所属馆', minWidth: 'min-w-[160px]' },
  { key: 'institutionName', label: '所属机构' },
  { key: 'subscribers', label: '订户名称', minWidth: 'min-w-[200px]' },
  { key: 'date', label: '关联日期' },
  { key: 'actions', label: '操作', sticky: true }
];
```

- [ ] **Step 3: mock 补 `branchId`，并在 `createInitialLibrarianRows` 同步落库**

在 `librarianRowsRaw` 至少保证：

1. 多数演示行可统一默认，或给若干行显式 `branchId`（例如地方文献相关 `branch-1`，少儿相关 `branch-2`，采编相关 `branch-6`）。
2. 增加无订户演示行（权限验收用，不必强调出现在业务筛选后的列表）：

```javascript
{ account: 'S1BRANCH01', name: 'S1所属馆演示', subscribers: '', date: '2026-09-24', branchId: 'branch-1' },
```

对「未写 `branchId`」的既有行，在 `createInitialLibrarianRows` 中默认 `branchId: 'branch-6'`（首都图书馆），避免列表大面积空列。

替换 `createInitialLibrarianRows`：

```javascript
export function createInitialLibrarianRows() {
  return librarianRowsRaw.map((row, index) => {
    const branchId = String(row.branchId || 'branch-6').trim();
    const synced = syncLibrarianHomeBranch(row, branchId);
    return {
      ...row,
      id: index + 1,
      ...synced
    };
  });
}
```

- [ ] **Step 4: `syncLibrarianRowsFromAssoc` 新增行时保留/空组织字段**

在 `rows.push({...})` 处补上：

```javascript
rows.push({
  id: rows.length + 1,
  account,
  name: nameByAccount[account] || account,
  subscribers: librarianSubscriberMap[account].join(', '),
  date: getTodayString(),
  branchId: '',
  institutionId: '',
  branchName: '',
  institutionName: ''
});
```

（关联流程不伪造所属馆；等下次同步再写。）

- [ ] **Step 5: 验收脚本追加同步用例**

在 `accept-librarian-home-branch.mjs` 增加：

```javascript
import {
  createInitialLibrarianRows,
  syncLibrarianHomeBranch
} from '../src/modules/subscriber/data/librarian-manage.js';

check('syncLibrarianHomeBranch(branch-1) 写入 inst-1 与展示名', () => {
  const synced = syncLibrarianHomeBranch({}, 'branch-1');
  assert.equal(synced.branchId, 'branch-1');
  assert.equal(synced.institutionId, 'inst-1');
  assert.ok(synced.branchName.includes('STD01') || synced.branchName.includes('地方文献'));
  assert.equal(synced.institutionName, '首都图书馆');
});

check('未知本地分馆 id → 只落 branchId，机构空', () => {
  const synced = syncLibrarianHomeBranch({}, 'branch-not-exist');
  assert.equal(synced.branchId, 'branch-not-exist');
  assert.equal(synced.institutionId, '');
});

check('createInitialLibrarianRows 含所属馆/机构展示字段', () => {
  const rows = createInitialLibrarianRows();
  const s1 = rows.find(r => r.account === 'S1BRANCH01');
  assert.ok(s1);
  assert.equal(s1.branchId, 'branch-1');
  assert.equal(s1.institutionId, 'inst-1');
  assert.ok(s1.branchName);
  assert.ok(s1.institutionName);
  const withSubs = rows.find(r => r.account === 'BIBQUERY01');
  assert.ok(withSubs.branchName || withSubs.branchId);
});
```

- [ ] **Step 6: 运行验收**

```bash
node --experimental-loader ./scripts/alias-loader.mjs ./scripts/accept-librarian-home-branch.mjs
```

Expected: 全部 PASS

- [ ] **Step 7: Commit**

```bash
git add html/src/modules/subscriber/data/librarian-manage.js html/scripts/accept-librarian-home-branch.mjs
git commit -m "feat: sync librarian home branch and show org columns"
```

---

### Task 3: 权限读取 `resolveInstitutionScopeIds`

**Files:**
- Modify: `html/src/modules/subscriber/data/current-librarian.js`
- Modify: `html/scripts/accept-librarian-home-branch.mjs`

- [ ] **Step 1: 在 `current-librarian.js` 追加（`resolveLibrarianInstitutionIds` 之后）**

```javascript
export function getCurrentLibrarianBranchId() {
  const row = getCurrentLibrarianRow();
  return String(row?.branchId || '').trim();
}

export function getCurrentLibrarianInstitutionId() {
  const row = getCurrentLibrarianRow();
  return String(row?.institutionId || '').trim();
}

/**
 * 设置类模块共用机构范围
 * 有关联订户 → 订户机构合集；否则读同步落库的 institutionId；皆无 → []
 * 不调用户信息、不按四级树现场倒推
 * @param {Object[]} [subscriberList]
 * @returns {string[]}
 */
export function resolveInstitutionScopeIds(subscriberList) {
  const fromSubs = resolveLibrarianInstitutionIds(subscriberList);
  if (fromSubs.length) return fromSubs;
  const institutionId = getCurrentLibrarianInstitutionId();
  return institutionId ? [institutionId] : [];
}
```

**禁止**在本函数内调用 `getInstitutionIdForBranch` 或 `getInstitutionIdFromLevel4BranchCode`。

- [ ] **Step 2: 验收脚本追加权限用例**

```javascript
import { librarianRows } from '../src/modules/subscriber/stores/association.js';
import {
  resolveInstitutionScopeIds,
  resolveLibrarianInstitutionIds
} from '../src/modules/subscriber/data/current-librarian.js';

const originalAccount = appConfig.currentLibrarianAccount;

check('有关联订户时范围等于订户机构合集', () => {
  appConfig.currentLibrarianAccount = 'BIBQUERY01';
  const scope = resolveInstitutionScopeIds();
  const expected = resolveLibrarianInstitutionIds();
  assert.ok(expected.length > 0);
  assert.deepEqual(scope, expected);
});

check('无订户有落库 institutionId 时读缓存', () => {
  appConfig.currentLibrarianAccount = 'S1BRANCH01';
  const row = librarianRows.value.find(r => r.account === 'S1BRANCH01');
  assert.equal(row?.institutionId, 'inst-1');
  assert.deepEqual(resolveInstitutionScopeIds(), ['inst-1']);
});

check('无订户无机构时范围为 []', () => {
  const account = 'S0EMPTY01';
  librarianRows.value.push({
    id: 9999,
    account,
    name: '空组织',
    subscribers: '',
    date: '2026-09-24',
    branchId: '',
    institutionId: '',
    branchName: '',
    institutionName: ''
  });
  appConfig.currentLibrarianAccount = account;
  assert.deepEqual(resolveInstitutionScopeIds(), []);
});

// 脚本末尾恢复
appConfig.currentLibrarianAccount = originalAccount;
```

- [ ] **Step 3: 运行验收**

```bash
node --experimental-loader ./scripts/alias-loader.mjs ./scripts/accept-librarian-home-branch.mjs
```

Expected: 全部 PASS

- [ ] **Step 4: Commit**

```bash
git add html/src/modules/subscriber/data/current-librarian.js html/scripts/accept-librarian-home-branch.mjs
git commit -m "feat: resolve institution scope from cached librarian institutionId"
```

---

### Task 4: 列表 UI 确认 + 可选 npm script

**Files:**
- Modify: `html/src/modules/subscriber/views/LibrarianListView.vue`（仅当 DataTable 未自动展示新列字段时）
- Modify: `html/package.json`（可选）

- [ ] **Step 1: 确认列表**

`LibrarianListView.vue` 已绑定 `:columns="LIBRARIAN_COLUMNS"` 与 `pagedRows`。列与行字段就绪后应自动出现「所属馆」「所属机构」。

手动打开 `/librarians`：列序为账号/姓名 → **所属馆** → **所属机构** → 订户名称；无编辑控件。

若某行展示为空串而非「—」，在 View 中为两列加 slot 即可：

```vue
<template #cell-branchName="{ value }">{{ value || '—' }}</template>
<template #cell-institutionName="{ value }">{{ value || '—' }}</template>
```

（DataTable 对 `undefined`/`null` 已有 `?? '—'`；空串不会。同步函数已返回 `''` 时建议用 slot，或展示字段缺省时不写空串改 `undefined`。优先：**enrich 时无值不写 key，或 slot 兜底**。）

推荐在 View 加上述两个 slot，行为明确。

- [ ] **Step 2（可选）: `package.json` scripts**

```json
"test:librarian-home-branch": "node --experimental-loader ./scripts/alias-loader.mjs ./scripts/accept-librarian-home-branch.mjs"
```

- [ ] **Step 3: Commit**

```bash
git add html/src/modules/subscriber/views/LibrarianListView.vue html/package.json
git commit -m "feat: show librarian home branch and institution columns"
```

---

### Task 5: 规格状态与交叉引用（可选）

**Files:**
- Modify: `docs/superpowers/specs/2026-09-24-librarian-home-branch-institution-cache-design.md`（状态已评审即可）
- Modify: `docs/superpowers/plans/2026-09-23-barcode-supplier-institution-plan.md`（若尚未实现）：将 Task1 中 `resolveInstitutionScopeIds` 的「所在馆倒推」改为「读落库 `institutionId`」，并指向本计划 / 本规格。

- [ ] **Step 1: 按需改条码供应商计划中的范围解析描述，避免两套实现冲突**
- [ ] **Step 2: Commit**

```bash
git add docs/superpowers/specs/2026-09-24-librarian-home-branch-institution-cache-design.md docs/superpowers/plans/2026-09-23-barcode-supplier-institution-plan.md
git commit -m "docs: align institution scope with librarian org cache"
```

---

## Spec 覆盖自检

| 规格要求 | Task |
|----------|------|
| 列表只读所属馆、所属机构（订户名称前） | Task 2、4 |
| 同步写所属馆；四级树倒推机构落库 | Task 1、2 |
| 权限：订户合集优先，否则读落库机构 | Task 3 |
| 不调用户信息、不现场倒推 | Task 3（禁止调用） |
| OMS 不可编 | Task 4（无表单字段） |
| 验收：同步 / 有订户 / 无订户缓存 | Task 1–3 脚本 |

---

## 验收命令速查

```bash
cd html
node --experimental-loader ./scripts/alias-loader.mjs ./scripts/accept-librarian-home-branch.mjs
```
