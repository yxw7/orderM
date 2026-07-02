/** PRD 面板 HTML 片段构建辅助 */

export function prdHeader(id, title) {
  return `<div class="prd-spec-header"><div class="prd-spec-header-title">[${id}] ${title}</div></div>`;
}

export function prdSection(id, title) {
  return `<p class="prd-spec-section-title">${title}</p>`;
}

export function prdDot(color) {
  return `<span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:${color};margin-right:6px;"></span>`;
}

export function prdTable(headers, rows) {
  const th = headers.map(h => `<th>${h}</th>`).join('');
  const body = rows.map(row => `<tr>${row.map(c => `<td>${c}</td>`).join('')}</tr>`).join('');
  return `<table class="prd-spec-table"><thead><tr>${th}</tr></thead><tbody>${body}</tbody></table>`;
}

export function prdBlock(id, title, sections) {
  return `${prdHeader(id, title)}${sections}`;
}
