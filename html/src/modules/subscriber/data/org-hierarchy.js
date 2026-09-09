/** 订户归属机构组织：机构 → 馆区 → 分馆（mock） */

import {
  formatBranchLabel,
  getBranchById,
  initialBranchRows
} from '@/modules/location/data/location-manage';

export const INSTITUTION_OPTIONS = [
  { id: 'inst-1', code: 'STLIB', name: '首都图书馆', status: 'active' },
  { id: 'inst-2', code: 'BJCL', name: '北京城市图书馆', status: 'active' }
];

export const CAMPUS_OPTIONS = [
  { id: 'campus-1', institutionId: 'inst-1', code: 'HWQ', name: '华威桥馆区', status: 'active', siteId: 'site-1' },
  { id: 'campus-2', institutionId: 'inst-1', code: 'DXJC', name: '大兴机场馆区', status: 'active', siteId: 'site-2' },
  { id: 'campus-3', institutionId: 'inst-1', code: 'OTHER', name: '其他馆区', status: 'active', siteId: 'site-4' },
  { id: 'campus-4', institutionId: 'inst-2', code: 'CITY', name: '城市图书馆馆区', status: 'active', siteId: 'site-3' }
];

/** 分馆 → 馆区（由原 siteId 映射） */
const SITE_TO_CAMPUS = Object.fromEntries(
  CAMPUS_OPTIONS.filter(c => c.siteId).map(c => [c.siteId, c.id])
);

export function getInstitutionById(institutionId) {
  return INSTITUTION_OPTIONS.find(row => row.id === institutionId) || null;
}

export function getCampusById(campusId) {
  return CAMPUS_OPTIONS.find(row => row.id === campusId) || null;
}

export function getInstitutionName(institutionId) {
  return getInstitutionById(institutionId)?.name || '';
}

export function getCampusName(campusId) {
  return getCampusById(campusId)?.name || '';
}

export function getCampusIdForBranch(branchId, branchRows = initialBranchRows) {
  const branch = getBranchById(branchRows, branchId);
  if (!branch) return '';
  return SITE_TO_CAMPUS[branch.siteId] || '';
}

export function getInstitutionIdForBranch(branchId, branchRows = initialBranchRows) {
  const campusId = getCampusIdForBranch(branchId, branchRows);
  return getCampusById(campusId)?.institutionId || '';
}

export function formatOrgLabel(row) {
  if (!row) return '';
  if (!row.code) return row.name || '';
  return `${row.code} | ${row.name}`;
}

export function buildInstitutionSelectOptions(includeIds = []) {
  const include = new Set((includeIds || []).filter(Boolean));
  return INSTITUTION_OPTIONS
    .filter(row => row.status === 'active' || include.has(row.id))
    .map(row => ({ value: row.id, label: formatOrgLabel(row), code: row.code, name: row.name }));
}

export function buildCampusSelectOptions(institutionId, includeIds = []) {
  if (!institutionId) return [];
  const include = new Set((includeIds || []).filter(Boolean));
  return CAMPUS_OPTIONS
    .filter(row => row.institutionId === institutionId && (row.status === 'active' || include.has(row.id)))
    .map(row => ({ value: row.id, label: formatOrgLabel(row), code: row.code, name: row.name }));
}

export function buildBranchSelectOptionsByCampus(campusId, branchRows = initialBranchRows, includeIds = []) {
  if (!campusId) return [];
  const campus = getCampusById(campusId);
  if (!campus?.siteId) return [];
  const include = new Set((includeIds || []).filter(Boolean));
  return (branchRows || [])
    .filter(row => row.siteId === campus.siteId && (row.status === 'active' || include.has(row.id)))
    .map(row => ({
      value: row.id,
      label: formatBranchLabel(row),
      code: row.code,
      name: row.name
    }));
}

/** 某机构下全部分馆（跨馆区），作「所属馆」选项 */
export function buildBranchSelectOptionsByInstitution(institutionId, branchRows = initialBranchRows, includeIds = []) {
  if (!institutionId) return [];
  const siteIds = new Set(
    CAMPUS_OPTIONS.filter(c => c.institutionId === institutionId).map(c => c.siteId).filter(Boolean)
  );
  if (!siteIds.size) return [];
  const include = new Set((includeIds || []).filter(Boolean));
  return (branchRows || [])
    .filter(row => siteIds.has(row.siteId) && (row.status === 'active' || include.has(row.id)))
    .map(row => ({
      value: row.id,
      label: formatBranchLabel(row),
      code: row.code,
      name: row.name
    }));
}

/** 某分馆下馆藏地，作「所属馆藏地」单选 */
export function buildCollectionSelectOptionsByBranch(branchId, collectionRows = [], includeIds = []) {
  if (!branchId) return [];
  const include = new Set((includeIds || []).filter(Boolean));
  return (collectionRows || [])
    .filter(row => row.branchId === branchId && (row.status === 'active' || include.has(row.id)) && row.code)
    .sort((a, b) => String(a.code).localeCompare(String(b.code), 'zh-CN'))
    .map(row => ({
      value: row.id,
      label: row.code ? `${row.code} | ${row.name}` : (row.name || ''),
      code: row.code,
      name: row.name
    }));
}

/**
 * 解析订户机构组织对应的分馆编码列表（供馆藏查重合并）
 * @param {Object} row
 * @param {Object[]} [branchRows]
 * @returns {string[]}
 */
export function resolveOrgBranchCodes(row, branchRows = initialBranchRows) {
  if (!row) return [];
  if (row.branchId) {
    const branch = getBranchById(branchRows, row.branchId);
    const code = String(branch?.code || '').trim();
    return code ? [code] : [];
  }
  if (row.campusId) {
    const campus = getCampusById(row.campusId);
    if (!campus?.siteId) return [];
    return (branchRows || [])
      .filter(b => b.siteId === campus.siteId && b.status === 'active' && b.code)
      .map(b => String(b.code).trim())
      .filter(Boolean);
  }
  if (row.institutionId) {
    const campusIds = new Set(
      CAMPUS_OPTIONS.filter(c => c.institutionId === row.institutionId).map(c => c.siteId)
    );
    return (branchRows || [])
      .filter(b => campusIds.has(b.siteId) && b.status === 'active' && b.code)
      .map(b => String(b.code).trim())
      .filter(Boolean);
  }
  return [];
}
