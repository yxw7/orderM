/**
 * 馆员 · 所属馆 / 所属机构缓存 — 验收脚本
 * 运行：node --experimental-loader ./scripts/alias-loader.mjs ./scripts/accept-librarian-home-branch.mjs
 */
import assert from 'node:assert/strict';

if (typeof globalThis.localStorage === 'undefined') {
  const map = new Map();
  globalThis.localStorage = {
    getItem: (key) => (map.has(key) ? map.get(key) : null),
    setItem: (key, value) => {
      map.set(key, String(value));
    },
    removeItem: (key) => {
      map.delete(key);
    },
    clear: () => {
      map.clear();
    }
  };
}

const { createPinia, setActivePinia } = await import('pinia');
setActivePinia(createPinia());

const {
  getInstitutionIdFromLevel4BranchCode,
  findLevel4BranchByCode
} = await import('../src/modules/location/data/location-level4.js');
const {
  createInitialLibrarianRows,
  syncLibrarianHomeBranch
} = await import('../src/modules/subscriber/data/librarian-manage.js');

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

const failed = results.filter(r => !r.ok);
console.log(`\n${results.length - failed.length}/${results.length} passed`);
if (failed.length) process.exit(1);
