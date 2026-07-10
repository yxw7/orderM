/**
 * 解析参考 PRD docx，输出结构样例
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

const styles = [...new Set(paras.map((p) => p.style))].sort();
const sample = paras.slice(0, 200).map((p) => `[${p.style || 'normal'}] ${p.text}`).join('\n');

const out = `# 参考文档结构样例\n\n## 段落样式\n${styles.map((s) => `- ${s || 'normal'}`).join('\n')}\n\n## 前200段内容\n\n${sample}\n\n---\n总段落数: ${paras.length}\n`;

fs.writeFileSync(path.join(__dirname, '../reference/_ref_sample.md'), out, 'utf8');

const keywords = ['功能描述', '业务规则', '界面元素', '前置条件', '4.5.2 订单管理'];
keywords.forEach((kw) => {
  const i = paras.findIndex((p) => p.text.includes(kw));
  console.log(kw, '=>', i, i >= 0 ? paras[i].text.slice(0, 60) : 'N/A');
});

const idx = paras.findIndex((p) => p.text === '功能描述');
const featureSlice = paras.slice(Math.max(0, idx - 5), idx + 120).map((p) => `[${p.style || 'normal'}] ${p.text}`).join('\n');
fs.writeFileSync(path.join(__dirname, '../reference/_ref_feature_sample.md'), featureSlice, 'utf8');
