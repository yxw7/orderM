# 条码号供应商代码 · 所属机构 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 为「条码号供应商代码」增加所属机构：列表按用户机构范围过滤并展示机构列；配置粒度改为机构+类型+供应商一行多码；表单首位选机构并落实唯一性校验。

**Architecture:** 在 `current-librarian.js` 增加与隔离规格一致的 `resolveInstitutionScopeIds()`（订户机构合集优先，否则读馆员同步落库的 `institutionId`，**不**运行时 `getInstitutionIdForBranch` 倒推；见 [`2026-09-24-librarian-home-branch-institution-plan.md`](2026-09-24-librarian-home-branch-institution-plan.md) / [`2026-09-24-librarian-home-branch-institution-cache-design.md`](../specs/2026-09-24-librarian-home-branch-institution-cache-design.md) §6.2）；`barcode-supplier-manage.js` 行级存 `institutionId`、合并多码为一行、重写唯一性与范围过滤；FormModal / View 对齐条码规则页的机构下拉与只读规则。数据层用 `html/scripts/accept-barcode-supplier-institution.mjs` 验收。

**Tech Stack:** Vue 3、Vite；纯 JS mock；`node --experimental-loader ./scripts/alias-loader.mjs`

**设计规格：** [`2026-09-23-barcode-supplier-institution-design.md`](../specs/2026-09-23-barcode-supplier-institution-design.md)

---

## 文件映射

| 文件 | 职责 |
|------|------|
| `html/src/modules/subscriber/data/current-librarian.js` | 新增 `resolveInstitutionScopeIds`、`getCurrentLibrarianInstitutionId`（读馆员落库 `institutionId`）；`getCurrentLibrarianBranchId` 仅展示/排障 |
| `html/src/modules/subscriber/data/librarian-manage.js` | mock 馆员补 `branchId` / 同步写入的 `institutionId`（供 S1 无订户范围演示 / 脚本） |
| `html/src/modules/barcode-supplier/data/barcode-supplier-manage.js` | 列/种子/校验/构建/范围过滤；一行多码 |
| `html/src/modules/barcode-supplier/components/BarcodeSupplierFormModal.vue` | 所属机构首位；编辑只读机构/类型/供应商 |
| `html/src/modules/barcode-supplier/views/BarcodeSupplierView.vue` | 机构范围过滤；提交写单行；传机构选项 |
| `html/scripts/accept-barcode-supplier-institution.mjs` | 数据层验收脚本 |
| `html/package.json` | 可选 `test:barcode-supplier` script |
| `docs/prd.md` | 可选：短节或修订记录一句（非阻断） |

---

### Task 1: 机构范围解析 `resolveInstitutionScopeIds`

**说明：** S1 无订户兜底读馆员主数据已落库的 `institutionId`（同步时按四级树写入一次），**禁止**在 `resolveInstitutionScopeIds` 内调用 `getInstitutionIdForBranch` 现场倒推。实现顺序与字段约定见 [`2026-09-24-librarian-home-branch-institution-plan.md`](2026-09-24-librarian-home-branch-institution-plan.md)、[`2026-09-24-librarian-home-branch-institution-cache-design.md`](../specs/2026-09-24-librarian-home-branch-institution-cache-design.md) §6.2–6.4。

**Files:**
- Modify: `html/src/modules/subscriber/data/current-librarian.js`
- Modify: `html/src/modules/subscriber/data/librarian-manage.js`
- Test: `html/scripts/accept-barcode-supplier-institution.mjs`（本 Task 先建骨架并跑范围用例）

- [ ] **Step 1: 馆员 mock 补 `branchId`（至少一个无订户账号便于 S1）**

在 `librarian-manage.js` 的 `extraLibrarians` 增加演示账号，或给 `librarianRowsRaw` 中一项补字段。推荐在 `extraLibrarians` 旁增加可被 `createInitialLibrarianRows` 合入的行——更简单：在 `createInitialLibrarianRows` 后处理不方便，直接改 `librarianRowsRaw` 增加一行：

```javascript
{ account: 'S1BRANCH01', name: 'S1无订户机构范围演示', subscribers: '', date: '2026-09-23', branchId: 'branch-1', institutionId: 'institution-1' },
```

`institutionId` 表示同步阶段已按四级树落库的值（与 `branch-1` 对应机构一致即可）；范围解析只读该字段，不在本 Task 倒推。

并给现有 `BIBQUERY01`（若需要）保留原订户；其它行可不强制 `branchId` / `institutionId`。

确保 `createInitialLibrarianRows` 透传 `branchId`、`institutionId`（已有 `...row`，无需改映射逻辑）。

- [ ] **Step 2: 在 `current-librarian.js` 增加分支与范围 API**

在文件末尾（或 `resolveLibrarianInstitutionIds` 之后）追加：

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
 * 设置类模块（馆址/条码规则/条码号供应商）共用机构范围
 * 有关联订户 → 订户机构合集；否则读同步落库 institutionId；皆无 → []
 * 不调用户信息、不按四级树现场倒推（见馆员所属机构缓存规格 §6.2）
 * @returns {string[]}
 */
export function resolveInstitutionScopeIds(subscriberList) {
  if (getCurrentLibrarianAssociatedSubscribers().length) {
    return resolveLibrarianInstitutionIds(subscriberList);
  }
  const institutionId = getCurrentLibrarianInstitutionId();
  return institutionId ? [institutionId] : [];
}
```

注意：无订户时的机构来自馆员同步落库字段，**不要**在此引入 `getInstitutionIdForBranch` / `initialBranchRows`。

- [ ] **Step 3: 创建验收脚本骨架并写范围用例**

Create: `html/scripts/accept-barcode-supplier-institution.mjs`

```javascript
/**
 * 条码号供应商 · 所属机构 — 验收脚本
 * 运行：node --experimental-loader ./scripts/alias-loader.mjs ./scripts/accept-barcode-supplier-institution.mjs
 */
import assert from 'node:assert/strict';
import { appConfig } from '../src/config/app-config.js';
import { librarianRows } from '../src/modules/subscriber/stores/association.js';
import {
  resolveInstitutionScopeIds,
  resolveLibrarianInstitutionIds
} from '../src/modules/subscriber/data/current-librarian.js';

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

const originalAccount = appConfig.currentLibrarianAccount;

check('有关联订户时 resolveInstitutionScopeIds 等于订户机构合集', () => {
  appConfig.currentLibrarianAccount = 'BIBQUERY01';
  const scope = resolveInstitutionScopeIds();
  const expected = resolveLibrarianInstitutionIds();
  assert.ok(expected.length > 0, '演示馆员应有订户机构');
  assert.deepEqual(scope, expected);
});

check('无订户有落库 institutionId 时范围为该机构', () => {
  appConfig.currentLibrarianAccount = 'S1BRANCH01';
  const scope = resolveInstitutionScopeIds();
  assert.deepEqual(scope, ['institution-1']);
});

check('无订户无 institutionId 时范围为空', () => {
  const row = librarianRows.value.find(r => r.account === 'S1BRANCH01');
  const prevSubs = row.subscribers;
  const prevInstitution = row.institutionId;
  row.subscribers = '';
  row.institutionId = '';
  appConfig.currentLibrarianAccount = 'S1BRANCH01';
  assert.deepEqual(resolveInstitutionScopeIds(), []);
  row.subscribers = prevSubs;
  row.institutionId = prevInstitution;
});

appConfig.currentLibrarianAccount = originalAccount;

const failed = results.filter(r => !r.ok);
if (failed.length) {
  console.error(`\n${failed.length} failed`);
  process.exit(1);
}
console.log(`\n${results.length} passed`);
```

- [ ] **Step 4: 运行脚本确认范围用例通过**

Run（在 `html/` 目录）:

```bash
node --experimental-loader ./scripts/alias-loader.mjs ./scripts/accept-barcode-supplier-institution.mjs
```

Expected: 上述 3 个 PASS（后续 Task 会追加更多 check）。

- [ ] **Step 5: Commit**

```bash
git add html/src/modules/subscriber/data/current-librarian.js html/src/modules/subscriber/data/librarian-manage.js html/scripts/accept-barcode-supplier-institution.mjs
git commit -m "feat: add resolveInstitutionScopeIds for settings modules"
```

---

### Task 2: 数据层 — 机构字段、一行多码、唯一性

**Files:**
- Modify: `html/src/modules/barcode-supplier/data/barcode-supplier-manage.js`
- Test: `html/scripts/accept-barcode-supplier-institution.mjs`

- [ ] **Step 1: 扩展列、展示名、种子数据**

在 `barcode-supplier-manage.js` 顶部增加机构依赖：

```javascript
import { getInstitutionName } from '@/modules/subscriber/data/org-hierarchy';
```

更新列定义（序号后加所属机构）：

```javascript
export const BARCODE_SUPPLIER_COLUMNS = [
  { key: 'id', label: '序号', minWidth: 'w-14' },
  { key: 'institutionName', label: '所属机构', minWidth: 'min-w-[120px]' },
  { key: 'barcodeType', label: '条码号类型' },
  { key: 'supplierCode', label: '供应商代码' },
  { key: 'supplierName', label: '供应商名称', minWidth: 'min-w-[160px]' },
  { key: 'barcodeCode', label: '条码号代码' },
  { key: 'status', label: '状态' },
  { key: 'remark', label: '备注' },
  { key: 'creator', label: '创建人' },
  { key: 'created', label: '创建日期' },
  { key: 'actions', label: '操作', sticky: true }
];
```

将 `rowsRaw` 改为**一行一配置**（示例：原同供应商同类型多码合并；全部挂 `inst-1`，并至少 1 条 `inst-2` 便于范围过滤用例）：

```javascript
const rowsRaw = [
  {
    institutionId: 'inst-1',
    barcodeType: '中文成人普通',
    supplierCode: 'hncs',
    supplierName: '湖南长沙',
    barcodeCode: '93',
    status: 'active',
    hasRemark: true,
    remark: '湖南长沙图书供应商',
    creator: '杨晓婉',
    created: '2024-05-28'
  },
  {
    institutionId: 'inst-1',
    barcodeType: '中文港台图书',
    supplierCode: 'BWZ',
    supplierName: '北京百万庄图书大厦有限公司',
    barcodeCode: '15',
    status: 'active',
    hasRemark: true,
    remark: '百万庄图书大厦',
    creator: '杨晓婉',
    created: '2024-05-27'
  },
  // …保留若干现网样例，均补 institutionId: 'inst-1'，barcodeCode 已是单码或 '01;02' 形式
  {
    institutionId: 'inst-2',
    barcodeType: '中文成人普通',
    supplierCode: 'hncs',
    supplierName: '湖南长沙',
    barcodeCode: '88',
    status: 'active',
    hasRemark: false,
    remark: '',
    creator: '杨晓婉',
    created: '2024-05-19'
  }
];

export function decorateBarcodeSupplierRow(row, index) {
  return {
    ...row,
    id: row.id ?? index + 1,
    institutionName: getInstitutionName(row.institutionId) || ''
  };
}

export const barcodeSupplierRows = rowsRaw.map((row, index) => decorateBarcodeSupplierRow(row, index));
```

检索字段**不加**所属机构（保持现有 `barcodeSupplierSearchFields`）。

- [ ] **Step 2: 重写唯一性与校验**

替换旧的「仅按类型查代码重复」逻辑：

```javascript
export function hasDuplicateSupplierConfig(rows, institutionId, barcodeType, supplierCode, excludeId = null) {
  return rows.some(
    row =>
      row.id !== excludeId &&
      row.institutionId === institutionId &&
      row.barcodeType === barcodeType &&
      row.supplierCode === supplierCode
  );
}

export function hasDuplicateBarcodeCodeInScope(rows, institutionId, barcodeType, codes, excludeId = null) {
  const existing = [];
  rows.forEach(row => {
    if (row.id === excludeId) return;
    if (row.institutionId !== institutionId || row.barcodeType !== barcodeType) return;
    existing.push(...parseBarcodeCodes(row.barcodeCode));
  });
  return codes.some(code => existing.includes(code));
}

export function filterBarcodeSupplierRowsByScope(rows, institutionIds) {
  const set = new Set(institutionIds || []);
  if (!set.size) return [];
  return rows.filter(row => set.has(row.institutionId));
}

export function validateBarcodeSupplierForm(form, rows = [], excludeId = null, allowedInstitutionIds = null) {
  const errors = {};
  const institutionId = form.institutionId?.trim();
  const barcodeType = form.barcodeType?.trim();
  const supplierName = form.supplierName?.trim();
  const supplier = getSupplierByName(supplierName);

  if (!institutionId) errors.institutionId = '请选择';
  else if (Array.isArray(allowedInstitutionIds) && !allowedInstitutionIds.includes(institutionId)) {
    errors.institutionId = '请选择';
  }

  if (!barcodeType) errors.barcodeType = '请选择';
  else if (!BARCODE_TYPE_OPTIONS.includes(barcodeType)) errors.barcodeType = '请选择';

  if (!supplierName) errors.supplierName = '请选择';
  else if (!SUPPLIER_NAME_OPTIONS.some(item => item.name === supplierName)) errors.supplierName = '请选择';

  const codes = parseBarcodeCodes(form.barcodeCode);
  if (!form.barcodeCode?.trim()) errors.barcodeCode = '请输入';
  else if (!isValidBarcodeCodeFormat(codes)) errors.barcodeCode = '每个代码须为2位数字，多个用英文分号;隔开';
  else if (hasDuplicateInCodes(codes)) errors.barcodeCode = '已存在（相同条码号类型的代码不能重复）';
  else if (
    institutionId &&
    barcodeType &&
    hasDuplicateBarcodeCodeInScope(rows, institutionId, barcodeType, codes, excludeId)
  ) {
    errors.barcodeCode = '已存在（相同条码号类型的代码不能重复）';
  }

  if (
    institutionId &&
    barcodeType &&
    supplier?.code &&
    hasDuplicateSupplierConfig(rows, institutionId, barcodeType, supplier.code, excludeId)
  ) {
    errors.supplierName = '已存在（相同机构、条码号类型与供应商不可重复）';
  }

  if ((form.remark || '').length > 500) errors.remark = '已超字符限制';
  return { valid: Object.keys(errors).length === 0, errors, codes };
}
```

- [ ] **Step 3: 构建与回显改为单行**

```javascript
export function buildBarcodeSupplierRowFromForm(form, baseRow = {}) {
  const supplier = getSupplierByName(form.supplierName);
  const codes = parseBarcodeCodes(form.barcodeCode);
  const remark = (form.remark || '').trim();
  return decorateBarcodeSupplierRow({
    ...baseRow,
    institutionId: form.institutionId || baseRow.institutionId,
    barcodeType: form.barcodeType,
    supplierCode: supplier?.code || baseRow.supplierCode || '',
    supplierName: form.supplierName,
    barcodeCode: codes.join(';'),
    status: form.statusEnabled ? 'active' : 'inactive',
    hasRemark: !!remark,
    remark,
    creator: baseRow.creator || '杨晓婉',
    created: baseRow.created || new Date().toISOString().slice(0, 10)
  }, 0);
}

export function rowToForm(row) {
  return {
    institutionId: row.institutionId || '',
    barcodeType: row.barcodeType,
    supplierName: row.supplierName,
    barcodeCode: row.barcodeCode,
    statusEnabled: row.status === 'active',
    remark: row.remark || ''
  };
}
```

删除或废弃 `buildBarcodeSupplierRowsFromForm`（若 View 仍引用，本 Task 改名后 Task 3/4 同步改 import）。保留旧名作别名易混淆——直接删除并用新名。

`filterBarcodeSupplierRows` 保持检索逻辑不变（不按机构筛选项）。

- [ ] **Step 4: 在验收脚本追加数据层用例**

```javascript
import {
  BARCODE_SUPPLIER_COLUMNS,
  barcodeSupplierRows,
  buildBarcodeSupplierRowFromForm,
  filterBarcodeSupplierRowsByScope,
  hasDuplicateBarcodeCodeInScope,
  hasDuplicateSupplierConfig,
  validateBarcodeSupplierForm
} from '../src/modules/barcode-supplier/data/barcode-supplier-manage.js';

check('列表列含所属机构且在序号后', () => {
  const keys = BARCODE_SUPPLIER_COLUMNS.map(c => c.key);
  assert.ok(keys.includes('institutionName'));
  assert.ok(keys.indexOf('id') < keys.indexOf('institutionName'));
});

check('种子行带 institutionId 且代码可含分号', () => {
  assert.ok(barcodeSupplierRows.every(r => r.institutionId));
  assert.ok(barcodeSupplierRows.every(r => r.institutionName));
});

check('范围过滤只返回合集内机构', () => {
  const scoped = filterBarcodeSupplierRowsByScope(barcodeSupplierRows, ['inst-1']);
  assert.ok(scoped.length > 0);
  assert.ok(scoped.every(r => r.institutionId === 'inst-1'));
  assert.equal(filterBarcodeSupplierRowsByScope(barcodeSupplierRows, []).length, 0);
});

check('机构+类型+供应商唯一', () => {
  const hit = barcodeSupplierRows.find(r => r.institutionId === 'inst-1' && r.supplierCode === 'hncs');
  assert.ok(hit);
  assert.equal(
    hasDuplicateSupplierConfig(
      barcodeSupplierRows,
      hit.institutionId,
      hit.barcodeType,
      hit.supplierCode,
      null
    ),
    true
  );
  assert.equal(
    hasDuplicateSupplierConfig(
      barcodeSupplierRows,
      hit.institutionId,
      hit.barcodeType,
      hit.supplierCode,
      hit.id
    ),
    false
  );
});

check('同机构同类型下代码跨供应商不可重复', () => {
  const row = barcodeSupplierRows.find(r => r.institutionId === 'inst-1');
  const codes = String(row.barcodeCode).split(';');
  assert.equal(
    hasDuplicateBarcodeCodeInScope(
      barcodeSupplierRows,
      row.institutionId,
      row.barcodeType,
      codes,
      null
    ),
    true
  );
});

check('build 单行多码不拆行', () => {
  const built = buildBarcodeSupplierRowFromForm({
    institutionId: 'inst-1',
    barcodeType: '成人视听',
    supplierName: '中国书店',
    barcodeCode: '18;19',
    statusEnabled: true,
    remark: ''
  });
  assert.equal(built.barcodeCode, '18;19');
  assert.equal(built.institutionId, 'inst-1');
});

check('校验拒绝超出范围的机构', () => {
  const { valid, errors } = validateBarcodeSupplierForm(
    {
      institutionId: 'inst-2',
      barcodeType: '成人视听',
      supplierName: '中国书店',
      barcodeCode: '77',
      statusEnabled: true,
      remark: ''
    },
    barcodeSupplierRows,
    null,
    ['inst-1']
  );
  assert.equal(valid, false);
  assert.ok(errors.institutionId);
});
```

- [ ] **Step 5: 运行验收脚本**

```bash
node --experimental-loader ./scripts/alias-loader.mjs ./scripts/accept-barcode-supplier-institution.mjs
```

Expected: 全部 PASS。

- [ ] **Step 6: Commit**

```bash
git add html/src/modules/barcode-supplier/data/barcode-supplier-manage.js html/scripts/accept-barcode-supplier-institution.mjs
git commit -m "feat: barcode supplier rows scoped by institution with multi-code"
```

---

### Task 3: 表单弹窗 — 所属机构首位与只读

**Files:**
- Modify: `html/src/modules/barcode-supplier/components/BarcodeSupplierFormModal.vue`

- [ ] **Step 1: Props 增加机构选项**

```javascript
institutionOptions: { type: Array, default: () => [] },
allowedInstitutionIds: { type: Array, default: () => null }
```

- [ ] **Step 2: 模板首位插入所属机构**

在「条码号类型」之前：

```vue
<div class="flex items-start gap-3">
  <label class="text-sm text-gray-600 w-28 text-right pt-2 shrink-0"><span class="text-red-500">*</span> 所属机构</label>
  <div class="flex-1">
    <SearchSelect
      v-model="form.institutionId"
      :options="institutionOptions"
      :readonly="mode === 'edit'"
      :error="errors.institutionId"
      value-mode
      :get-label="item => item.name"
      :get-value="item => item.id"
    />
  </div>
</div>
```

条码号类型、供应商名称：保持 `readonly="mode === 'edit'"`。

- [ ] **Step 3: createEmptyForm / submit 接入机构**

```javascript
function createEmptyForm() {
  const ids = props.allowedInstitutionIds || props.institutionOptions.map(i => i.id);
  const only = ids.length === 1 ? ids[0] : '';
  return {
    institutionId: only,
    barcodeType: '',
    supplierName: '',
    barcodeCode: '',
    statusEnabled: true,
    remark: ''
  };
}

function submit() {
  const { valid, errors: nextErrors, codes } = validateBarcodeSupplierForm(
    form.value,
    props.rows,
    props.mode === 'edit' ? props.row?.id : null,
    props.allowedInstitutionIds
  );
  errors.value = nextErrors;
  if (!valid) {
    emit('invalid');
    return;
  }
  emit('confirm', { ...form.value, codes });
}
```

`watch(open)` 逻辑不变（edit 用 `rowToForm`）。

- [ ] **Step 4: 手动冒烟（可选）** — 打开 `/barcode-supplier` 新增弹窗确认字段顺序；编辑时前三项只读。

- [ ] **Step 5: Commit**

```bash
git add html/src/modules/barcode-supplier/components/BarcodeSupplierFormModal.vue
git commit -m "feat: barcode supplier form adds institution field first"
```

---

### Task 4: 列表页接线 — 范围过滤与单行保存

**Files:**
- Modify: `html/src/modules/barcode-supplier/views/BarcodeSupplierView.vue`

- [ ] **Step 1: 引入范围与机构选项**

```javascript
import { computed, ref } from 'vue';
import { INSTITUTION_OPTIONS } from '@/modules/subscriber/data/org-hierarchy';
import { resolveInstitutionScopeIds } from '@/modules/subscriber/data/current-librarian';
import {
  BARCODE_SUPPLIER_COLUMNS,
  BARCODE_SUPPLIER_STATUS_MAP,
  barcodeSupplierRows,
  barcodeSupplierSearchFields,
  buildBarcodeSupplierRowFromForm,
  filterBarcodeSupplierRows,
  filterBarcodeSupplierRowsByScope
} from '@/modules/barcode-supplier/data/barcode-supplier-manage';

const scopeIds = computed(() => resolveInstitutionScopeIds());
const institutionOptions = computed(() =>
  INSTITUTION_OPTIONS.filter(item => scopeIds.value.includes(item.id) && item.status === 'active')
);

const allRows = ref(barcodeSupplierRows.map(row => ({ ...row })));

function scopedAllRows() {
  return filterBarcodeSupplierRowsByScope(allRows.value, scopeIds.value);
}

const filteredRows = ref(scopedAllRows());
```

- [ ] **Step 2: 检索与重置套范围**

```javascript
function filterRows() {
  filteredRows.value = filterBarcodeSupplierRows(scopedAllRows(), search.value);
  page.value = 1;
}

function resetSearch() {
  search.value = {};
  filteredRows.value = scopedAllRows();
  page.value = 1;
}
```

- [ ] **Step 3: FormModal 传参；提交写单行**

```vue
<BarcodeSupplierFormModal
  :open="formOpen"
  :mode="formMode"
  :row="formRow"
  :rows="scopedAllRows()"
  :institution-options="institutionOptions"
  :allowed-institution-ids="scopeIds"
  @close="formOpen = false"
  @confirm="submitForm"
  @invalid="showToast(false)"
/>
```

```javascript
function submitForm(form) {
  if (formMode.value === 'add') {
    const built = buildBarcodeSupplierRowFromForm(form);
    allRows.value.unshift({ ...built, id: nextId() });
  } else if (formRow.value) {
    const built = buildBarcodeSupplierRowFromForm(form, formRow.value);
    Object.assign(formRow.value, built);
  }
  filterRows();
  formOpen.value = false;
  showToast(true);
}
```

无范围时：列表空；「新增」可禁用或提交时校验失败（`allowedInstitutionIds` 为空数组）。推荐按钮在 `scopeIds.length === 0` 时 `disabled`：

```vue
<button
  type="button"
  class="px-4 py-1.5 bg-sky-600 text-white text-sm rounded hover:bg-sky-700 disabled:opacity-50 disabled:cursor-not-allowed"
  :disabled="!scopeIds.length"
  @click="openAdd"
>
  新增
</button>
```

- [ ] **Step 4: 浏览器冒烟** — 当前账号下只见范围内机构；跨机构种子行不可见；新增保存仍一行。

- [ ] **Step 5: Commit**

```bash
git add html/src/modules/barcode-supplier/views/BarcodeSupplierView.vue
git commit -m "feat: wire barcode supplier list to institution scope"
```

---

### Task 5: 脚本注册与规格对齐收尾

**Files:**
- Modify: `html/package.json`
- Optional: `docs/prd.md`（修订记录一句即可）
- Optional: `docs/superpowers/specs/2026-09-21-institution-data-isolation-design.md` §8.6.7 补「一行多码」一句

- [ ] **Step 1: package.json script**

```json
"test:barcode-supplier": "node --experimental-loader ./scripts/alias-loader.mjs ./scripts/accept-barcode-supplier-institution.mjs"
```

- [ ] **Step 2: 全量跑脚本**

```bash
npm run test:barcode-supplier
```

Expected: all PASS。

- [ ] **Step 3: （可选）PRD / 隔离设计一句同步** — 不写完整 5.x 新章也可；至少在隔离设计 §8.6.7 增加：

> 配置粒度：一行 = 机构 + 条码号类型 + 供应商；`barcodeCode` 支持 `;` 多码；列表不按代码拆行。

- [ ] **Step 4: Commit**

```bash
git add html/package.json docs/superpowers/specs/2026-09-21-institution-data-isolation-design.md docs/prd.md
git commit -m "chore: add barcode-supplier institution acceptance script"
```

---

## Spec 覆盖自检

| 规格要点 | Task |
|----------|------|
| `institutionId` + 列表所属机构列 | Task 2、4 |
| 一行 = 机构+类型+供应商，多码不拆行 | Task 2、4 |
| 范围：订户合集 / 所在馆倒推 / 空 | Task 1、4 |
| 表单首位所属机构；编辑三者只读 | Task 3 |
| 唯一：配置键 + 同机构同类型代码 | Task 2 |
| 检索不加机构筛选项 | Task 2（不改 searchFields） |
| 馆配商段同机构约定（本期不接业务生成） | 规格非目标；数据模型已满足 |
| 验收脚本 | Task 1–2、5 |

---

## Execution Handoff

Plan complete and saved to `docs/superpowers/plans/2026-09-23-barcode-supplier-institution-plan.md`. Two execution options:

**1. Subagent-Driven (recommended)** — 每个 Task 派一个新子代理，Task 间复查，迭代快  

**2. Inline Execution** — 本会话按 executing-plans 批量执行并设检查点  

Which approach?
