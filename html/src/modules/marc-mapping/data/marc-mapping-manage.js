export const MARC_MAPPING_COLUMNS = [
  { key: 'id', label: '序号', minWidth: 'w-14' },
  { key: 'resourceType', label: '采访资源类型' },
  { key: 'language', label: '语种' },
  { key: 'carrier', label: '载体(仅视听)' },
  { key: 'bibCode', label: '书目库代码' },
  { key: 'marcFormat', label: 'MARC格式' },
  { key: 'marcResourceType', label: 'MARC资源类型' },
  { key: 'marcType', label: 'MARC类型' }
];

export const marcMappingSearchFields = [
  { key: 'resourceType', label: '采访资源类型', type: 'select', options: [{ value: '', label: '请选择' }, '图书', '视听资料'] },
  { key: 'language', label: '语种', type: 'select', options: [{ value: '', label: '请选择' }, '中文', '外文'] },
  { key: 'carrier', label: '载体', type: 'select', options: [{ value: '', label: '全部' }, 'TD', 'DVD', 'VCD', 'CD', 'V', 'AH', 'AP'] },
  { key: 'bibCode', label: '书目库代码' },
  { key: 'marcResourceType', label: 'MARC资源类型', type: 'select', options: [{ value: '', label: '请选择' }, '图书', '电子资源', '影像资料', '录音资料'] },
  { key: 'marcFormat', label: 'MARC格式', type: 'select', options: [{ value: '', label: '全部' }, 'CNMARC', 'MARC21'] },
  { key: 'marcType', label: 'MARC类型', type: 'select', options: [{ value: '', label: '全部' }, '中文图书', '外文图书', '中文电子资源', '中文影像资料', '中文录音资料', '外文电子资源', '外文影像资料', '外文录音资料'] }
];

const rowsRaw = [
  { resourceType: '视听资料', language: '中文', carrier: 'TD,DVD,VCD,CD', bibCode: 'STL01', marcFormat: 'CNMARC', marcResourceType: '电子资源', marcType: '中文电子资源' },
  { resourceType: '视听资料', language: '中文', carrier: 'V', bibCode: 'STL01', marcFormat: 'CNMARC', marcResourceType: '影像资料', marcType: '中文影像资料' },
  { resourceType: '视听资料', language: '中文', carrier: 'AH,AP', bibCode: 'STL01', marcFormat: 'CNMARC', marcResourceType: '录音资料', marcType: '中文录音资料' },
  { resourceType: '图书', language: '中文', carrier: '', bibCode: 'STL01', marcFormat: 'CNMARC', marcResourceType: '图书', marcType: '中文图书' },
  { resourceType: '图书', language: '外文', carrier: '', bibCode: 'STL01', marcFormat: 'MARC21', marcResourceType: '图书', marcType: '外文图书' },
  { resourceType: '视听资料', language: '外文', carrier: 'TD', bibCode: 'STL01', marcFormat: 'MARC21', marcResourceType: '电子资源', marcType: '外文电子资源' },
  { resourceType: '视听资料', language: '外文', carrier: 'AH,AP', bibCode: 'STL01', marcFormat: 'MARC21', marcResourceType: '录音资料', marcType: '外文录音资料' },
  { resourceType: '视听资料', language: '外文', carrier: 'V,DVD,VCD,CD', bibCode: 'STL01', marcFormat: 'MARC21', marcResourceType: '影像资料', marcType: '外文影像资料' }
];

export const marcMappingRows = rowsRaw.map((row, index) => ({ ...row, id: index + 1 }));

export function matchCarrier(rowCarrier, filterCarrier) {
  if (!filterCarrier) return true;
  const carriers = String(rowCarrier || '').split(/[,，]/).map(s => s.trim());
  return carriers.includes(filterCarrier);
}

export function filterMarcMappingRows(rows, search = {}) {
  return rows.filter(row => {
    if (search.resourceType && row.resourceType !== search.resourceType) return false;
    if (search.language && row.language !== search.language) return false;
    if (search.carrier && !matchCarrier(row.carrier, search.carrier)) return false;
    const bibCode = search.bibCode?.trim();
    if (bibCode && row.bibCode !== bibCode) return false;
    if (search.marcResourceType && row.marcResourceType !== search.marcResourceType) return false;
    if (search.marcFormat && row.marcFormat !== search.marcFormat) return false;
    if (search.marcType && row.marcType !== search.marcType) return false;
    return true;
  });
}

export function parseMarcTypeLabel(marcTypeLabel) {
  if (!marcTypeLabel) return null;
  const parts = marcTypeLabel.split('|').map(part => part.trim()).filter(Boolean);
  if (parts.length >= 2) {
    return { marcFormat: parts[0], marcType: parts.slice(1).join(' | ') };
  }
  return { marcFormat: '', marcType: marcTypeLabel.trim() };
}

export function resolveOrderFieldsFromMarcMapping(bibRow, rows = marcMappingRows) {
  const parsed = parseMarcTypeLabel(bibRow?.marcType);
  if (!parsed?.marcType) return null;
  const mapping = rows.find(row =>
    row.marcFormat === parsed.marcFormat && row.marcType === parsed.marcType
  );
  if (!mapping) return null;
  return {
    resourceType: mapping.resourceType === '图书' ? '纸质书' : mapping.resourceType,
    language: mapping.language
  };
}
