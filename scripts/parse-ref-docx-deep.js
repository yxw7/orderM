/**
 * 深度解析参考 PRD docx 结构
 */
const fs = require('fs');
const path = require('path');

const xmlPath = path.join(__dirname, '../reference/_docx_tmp/extract/word/document.xml');
const xml = fs.readFileSync(xmlPath, 'utf8');

const paras = [...xml.matchAll(/<w:p[\s\S]*?<\/w:p>/g)].map((p) => {
  const texts = [...p[0].matchAll(/<w:t[^>]*>([^<]*)<\/w:t>/g)].map((m) => m[1]).join('');
  const styleMatch = p[0].match(/<w:pStyle w:val="([^"]+)"/);
  return { style: styleMatch ? styleMatch[1] : '', text: texts.trim() };
}).filter((p) => p.text);

const cells = [...xml.matchAll(/<w:tc[\s\S]*?<\/w:tc>/g)].map((c) => {
  const texts = [...c[0].matchAll(/<w:t[^>]*>([^<]*)<\/w:t>/g)].map((m) => m[1]).join('');
  return texts.trim();
}).filter(Boolean);

console.log('paragraphs:', paras.length, 'cells:', cells.length);

const hits = [];
const keys = ['概述', '功能说明', '业务说明', '界面', '字段', '规则', '流程', '列表', '按钮', '查询', '订单管理', '用例'];
keys.forEach((k) => {
  [...paras, ...cells.map((t) => ({ text: t }))].forEach((item, i) => {
    if (item.text.includes(k) && item.text.length < 80) hits.push(item.text);
  });
});
console.log('keyword hits sample:', [...new Set(hits)].slice(0, 40).join('\n'));

const sliceStart = paras.findIndex((p) => p.text === '概述' && p.style === '20');
const out = paras.slice(sliceStart > 0 ? sliceStart : 250, (sliceStart > 0 ? sliceStart : 250) + 150)
  .map((p) => `[${p.style || 'n'}] ${p.text}`).join('\n');
fs.writeFileSync(path.join(__dirname, '../reference/_ref_feature_sample.md'), out, 'utf8');
console.log('slice from', sliceStart);
