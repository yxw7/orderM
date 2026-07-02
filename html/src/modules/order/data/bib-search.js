export function createDefaultBibSearch() {
  return {
    criteriaRows: [{ type: 'isbn', value: '9787576724455', match: 'fuzzy' }],
    marcType: 'CNMARC|中文图书',
    pubDateStart: '',
    pubDateEnd: '',
    createDateStart: '',
    createDateEnd: '',
    ownerLibrary: '',
    currentLibrary: '',
    ownerLocation: '',
    currentLocation: '',
    bibStatus: '',
    reviewStatus: '',
    relatedItemQuery: false,
    relatedItemType: 'all'
  };
}

export const BIB_SEARCH_FIELD_TYPES = [
  { value: 'isbn', label: 'isbn' },
  { value: 'title', label: '题名' },
  { value: 'author', label: '责任者' },
  { value: 'publisher', label: '出版社' },
  { value: 'callNo', label: '索书号' }
];

export const BIB_MARC_TYPE_OPTIONS = [
  'CNMARC|中文图书',
  'CNMARC|外文图书',
  'MARC21|外文图书'
];

export const BIB_LIBRARY_OPTIONS = [
  { value: '', label: '请选择' },
  { value: '001', label: '001-总馆' }
];

const BIB_STATUS_MAP = { order: '发订', initial: '初编', detailed: '详编' };
const REVIEW_STATUS_MAP = { unreviewed: '未审校', approved: '审校通过', rejected: '审校驳回' };

function matchBibSearchField(row, type, value, matchType) {
  if (!value) return true;
  const fieldMap = {
    isbn: row.isbn,
    title: row.title,
    author: row.author,
    publisher: row.publisher,
    callNo: row.callNo
  };
  const target = String(fieldMap[type] ?? '');
  if (matchType === 'exact') return target === value;
  return target.includes(value);
}

/** 按检索条件过滤书目库数据 */
export function applyBibSearchFilter(allRows, search) {
  return allRows.filter(row => {
    const rowMatches = (search.criteriaRows || []).every(criterion =>
      matchBibSearchField(row, criterion.type, (criterion.value || '').trim(), criterion.match || 'fuzzy')
    );

    const matchBibStatus = !search.bibStatus || row.bibStatus === BIB_STATUS_MAP[search.bibStatus];
    const matchReview = !search.reviewStatus || row.review === REVIEW_STATUS_MAP[search.reviewStatus];
    const matchMarc = !search.marcType || row.marcType === search.marcType;

    return rowMatches && matchBibStatus && matchReview && matchMarc;
  });
}
