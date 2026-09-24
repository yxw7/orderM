/**
 * 馆员 · 所属馆 / 所属机构缓存 — 验收脚本
 * 运行：node --experimental-loader ./scripts/alias-loader.mjs ./scripts/accept-librarian-home-branch.mjs
 */
import assert from 'node:assert/strict';
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
