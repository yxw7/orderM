export function formatSpeciesReason(row) {
  const parts = [];
  if (row.exchangeReason) parts.push(`换：${row.exchangeReason}`);
  if (row.returnReason) parts.push(`退：${row.returnReason}`);
  if (row.revokeReceiveReasons?.length) parts.push(`撤：${row.revokeReceiveReasons.join('、')}`);
  return parts.join('；') || row.reason || '';
}

export function parseSpeciesCounts(row) {
  if (row.received != null || row.exchange != null || row.returned != null) {
    return {
      ordered: Number(row.ordered) || 0,
      received: Number(row.received) || 0,
      exchange: Number(row.exchange) || 0,
      returned: Number(row.returned) || 0
    };
  }
  const parts = String(row.counts || '0 / 0 / 0 / 0').split('/').map(part => Number(part.trim()) || 0);
  return { ordered: parts[0] || 0, received: parts[1] || 0, exchange: parts[2] || 0, returned: parts[3] || 0 };
}

export function formatSpeciesCounts(counts) {
  return `${counts.ordered} / ${counts.received} / ${counts.exchange} / ${counts.returned}`;
}

export function updateSpeciesCounts(row, patch) {
  const counts = { ...parseSpeciesCounts(row), ...patch };
  row.counts = formatSpeciesCounts(counts);
  row.ordered = counts.ordered;
  row.received = counts.received;
  row.exchange = counts.exchange;
  row.returned = counts.returned;
  if (counts.received > 0) row.revokeReceiveReasons = [];
  row.reason = formatSpeciesReason(row);
}

/** 按种明细「收 / 换 / 退」套数全量累计 */
export function sumSpeciesSetStats(rows) {
  return (rows || []).reduce(
    (acc, row) => {
      const c = parseSpeciesCounts(row);
      acc.received += c.received;
      acc.exchanged += c.exchange;
      acc.returned += c.returned;
      return acc;
    },
    { received: 0, exchanged: 0, returned: 0 }
  );
}

export function isSpeciesReasonDisabled(row) {
  const counts = parseSpeciesCounts(row);
  return counts.ordered === counts.received;
}

export function splitAmountByVolumeCount(total, count) {
  if (!count) return [];
  const cents = Math.round(Number(String(total).replace(/[^\d.]/g, '')) * 100) || 0;
  const base = Math.floor(cents / count);
  const remainder = cents - base * count;
  return Array.from({ length: count }, (_, i) => ((base + (i < remainder ? 1 : 0)) / 100).toFixed(2));
}

export function enrichVolumeRowsWithPricing(rows, discount = 0.8) {
  return rows.map(row => {
    if (row.netPrice && row.unitPrice) return { ...row };
    const priceNum = Number(String(row.price).replace(/[^\d.]/g, '')) || 0;
    const volumes = row.volumesInSet || row.piecesInSet || 1;
    const net = (priceNum * discount).toFixed(2);
    return {
      ...row,
      netPrice: `¥${net}`,
      unitPrice: `¥${(priceNum / volumes).toFixed(2)}`
    };
  });
}

export function filterDetailRows(rows, search, viewMode) {
  const personKey = viewMode === 'volume' ? 'receiver' : 'lastInspector';
  return rows.filter(row => {
    if (search.keyword && search.searchField) {
      const val = row[search.searchField];
      if (val == null || !String(val).includes(search.keyword.trim())) return false;
    }
    const person = search.inspector || search.receiver || search[personKey];
    if (person) {
      const target = row[personKey];
      if (!target || !String(target).includes(person.trim())) return false;
    }
    const timeKey = viewMode === 'volume' ? 'receiveTime' : 'lastTime';
    const timeVal = row[timeKey];
    if (search.startDate && timeVal && timeVal.slice(0, 10) < search.startDate) return false;
    if (search.endDate && timeVal && timeVal.slice(0, 10) > search.endDate) return false;
    return true;
  });
}
