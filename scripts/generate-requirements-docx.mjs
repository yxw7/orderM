/**
 * 从 Axure 原型 HTML 提取需求信息并生成 Word 文档
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import * as cheerio from 'cheerio';
import pkg from 'xlsx';
import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  HeadingLevel,
  Table,
  TableRow,
  TableCell,
  WidthType,
  BorderStyle,
  ImageRun,
  AlignmentType,
  PageBreak,
} from 'docx';

const { readFile: readXlsx, utils: xlsxUtils } = pkg;

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const PROTOTYPE_DIR = path.join(ROOT, 'prototype');
const OUTPUT_PATH = path.join(ROOT, 'docs', '订单管理系统需求规格说明.docx');

/** @typedef {{ name: string, url?: string, type: 'folder'|'page', children?: Node[] }} Node */

/**
 * 解析 document.js 获取站点地图
 * @returns {Node[]}
 */
function parseSitemap() {
  const docJs = fs.readFileSync(path.join(PROTOTYPE_DIR, 'data', 'document.js'), 'utf-8');
  /** @type {Record<string, string>} */
  const vars = {};
  const varLine = docJs.split('\n').find((l) => l.startsWith('var b='));
  if (varLine) {
    const varRe = /(\w+)="([^"]*)"/g;
    let m;
    while ((m = varRe.exec(varLine)) !== null) vars[m[1]] = m[2];
  }

  const creatorLine = docJs.split('\n').find((l) => l.includes('r,['));
  if (!creatorLine) return [];

  const rootStart = creatorLine.indexOf('r,[');
  const rootEnd = creatorLine.indexOf(']),jt,');
  if (rootStart < 0 || rootEnd < 0) return [];
  const rootInner = creatorLine.slice(rootStart + 3, rootEnd + 1);

  /**
   * @param {string} str
   * @param {number} pos
   * @returns {{ node: string, end: number } | null}
   */
  function readNode(str, pos) {
    while (pos < str.length && /[\s,]/.test(str[pos])) pos++;
    if (str.slice(pos, pos + 2) !== '_(') return null;
    let depth = 0;
    const start = pos;
    for (; pos < str.length; pos++) {
      if (str[pos] === '(') depth++;
      if (str[pos] === ')') {
        depth--;
        if (depth === 0) return { node: str.slice(start, pos + 1), end: pos + 1 };
      }
    }
    return null;
  }

  /**
   * @param {string} block
   * @returns {Node|null}
   */
  function parseNodeBlock(block) {
    const nameKeyMatch = block.match(/,\s*u\s*,\s*(\w+)/);
    const typeKeyMatch = block.match(/,\s*w\s*,\s*(\w+)/);
    const urlKeyMatch = block.match(/,\s*y\s*,\s*(\w+)/);
    const childrenMatch = block.match(/,\s*z\s*,\s*\[/);

    const nameKey = nameKeyMatch?.[1];
    const typeKey = typeKeyMatch?.[1];
    const urlKey = urlKeyMatch?.[1];
    const typeVal = typeKey ? vars[typeKey] : '';
    const hasChildren = !!childrenMatch;
    const isFolder = typeVal === 'Folder' || hasChildren;

    const node = {
      name: nameKey ? vars[nameKey] || nameKey : '未命名',
      type: isFolder ? 'folder' : 'page',
      url: urlKey && vars[urlKey] ? vars[urlKey] : undefined,
      children: [],
    };

    if (childrenMatch) {
      const zIdx = block.indexOf(',z,[');
      const arrStart = zIdx + 4;
      let pos = arrStart;
      while (pos < block.length) {
        while (pos < block.length && /[\s,]/.test(block[pos])) pos++;
        if (block[pos] === ']') break;
        const child = readNode(block, pos);
        if (!child) break;
        const parsed = parseNodeBlock(child.node);
        if (parsed) node.children.push(parsed);
        pos = child.end;
      }
    }

    return node;
  }

  /** @type {Node[]} */
  const roots = [];
  let pos = 0;
  while (pos < rootInner.length) {
    const item = readNode(rootInner, pos);
    if (!item) break;
    const parsed = parseNodeBlock(item.node);
    if (parsed) roots.push(parsed);
    pos = item.end;
  }

  return roots;
}

/**
 * 清理 HTML 文本
 * @param {string} html
 * @returns {string}
 */
function cleanHtmlText(html) {
  return html
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/p>/gi, '\n')
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/\u00A0/g, ' ')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

/**
 * 判断页面是否废弃
 * @param {string} name
 * @param {string} [url]
 */
function isDeprecated(name, url) {
  const s = `${name} ${url || ''}`;
  return /废弃|暂缓|\(废\)|__废_|待定/.test(s);
}

/**
 * 从 HTML 提取文本块
 * @param {string} htmlPath
 */
function extractPageContent(htmlPath) {
  if (!fs.existsSync(htmlPath)) return null;
  const html = fs.readFileSync(htmlPath, 'utf-8');
  const $ = cheerio.load(html);

  /** @type {{ title: string, content: string }[]} */
  const requirements = [];
  /** @type {string[][][]} */
  const tables = [];
  /** @type {string[]} */
  const paragraphs = [];
  /** @type {{ path: string, width?: number, height?: number }[]} */
  const images = [];
  /** @type {string[]} */
  const selectOptions = [];

  // 需求说明区块：与「需求说明」标题同组的 paragraph1 内容
  $('div.ax_default').each((_, group) => {
    const $group = $(group);
    const labels = $group.find('.paragraph .text, .paragraph1 .text').map((__, el) => cleanHtmlText($(el).html() || '')).get();
    if (!labels.includes('需求说明')) return;

    $group.find('.paragraph1 .text').each((__, el) => {
      const sibText = cleanHtmlText($(el).html() || '');
      if (sibText && sibText !== '需求说明' && sibText.length > 5) {
        if (!requirements.some((r) => r.content === sibText)) {
          requirements.push({ title: '需求说明', content: sibText });
        }
      }
    });
  });

  // 独立需求说明（无标题组合）
  $('div.paragraph1 .text, div.paragraph .text, div.box_1 .text').each((_, el) => {
    const text = cleanHtmlText($(el).html() || '');
    if (!text || text.length < 20) return;
    if (text === '需求说明') return;
    // 跳过常见 UI 文案
    if (/^(确定|取消|取 消|提交成功|提交失败|请输入|请选择|关闭|CLOSE)$/.test(text)) return;
    if (/^[\d\s.～~\-:]+$/.test(text)) return;

    const isRequirement =
      /^[\d一二三四五六七八九十]+[\s.、]/.test(text) ||
      /规则|说明|定义|约束|校验|逻辑|条件|默认|必填|可选|取值|状态|流程/.test(text);

    if (isRequirement) {
      const dup = requirements.some((r) => r.content === text) || paragraphs.includes(text);
      if (!dup) paragraphs.push(text);
    }
  });

  // 表格提取：根据 SVG viewBox 坐标重建网格
  $('div.ax_default').each((_, tableEl) => {
    /** @type {{ row: number, col: number, text: string }[]} */
    const cellData = [];
    $(tableEl)
      .find('[id$="_text"].text')
      .each((__, cell) => {
        const cellText = cleanHtmlText($(cell).html() || '');
        if (!cellText) return;
        const svg = $(cell).siblings('svg').first();
        const viewBox = svg.attr('viewbox') || svg.attr('viewBox') || '';
        const parts = viewBox.split(/\s+/).map(Number);
        if (parts.length >= 2 && !Number.isNaN(parts[0]) && !Number.isNaN(parts[1])) {
          cellData.push({ row: parts[1], col: parts[0], text: cellText });
        }
      });

    if (cellData.length < 4) return;

    const rows = [...new Set(cellData.map((c) => c.row))].sort((a, b) => a - b);
    const cols = [...new Set(cellData.map((c) => c.col))].sort((a, b) => a - b);
    if (rows.length < 2 || cols.length < 2) return;

    const grid = rows.map((row) =>
      cols.map((col) => {
        const found = cellData.find((c) => c.row === row && c.col === col);
        return found ? found.text : '';
      })
    );

    const gridKey = JSON.stringify(grid);
    if (!tables.some((t) => JSON.stringify(t) === gridKey)) {
      tables.push(grid);
    }
  });

  // 下拉选项
  $('select option').each((_, opt) => {
    const val = $(opt).attr('value') || $(opt).text();
    if (val && val !== '请选择' && val.trim()) {
      selectOptions.push(val.trim());
    }
  });

  // 流程图/大图
  $('img.img').each((_, img) => {
    const src = $(img).attr('src');
    if (!src || src.includes('transparent.gif')) return;
    const absPath = path.join(PROTOTYPE_DIR, src.replace(/\//g, path.sep));
    if (fs.existsSync(absPath)) {
      const stat = fs.statSync(absPath);
      if (stat.size > 3000) {
        images.push({ path: absPath });
      }
    }
  });

  return { requirements, paragraphs, tables, images, selectOptions };
}

/**
 * 创建 Word 段落
 * @param {string} text
 * @param {object} [opts]
 */
function makeParagraph(text, opts = {}) {
  const lines = text.split('\n').filter((l) => l.trim());
  if (lines.length === 0) return new Paragraph({ children: [new TextRun('')] });
  return new Paragraph({
    spacing: { after: 120 },
    children: lines.flatMap((line, i) => {
      const runs = [new TextRun({ text: line, ...opts })];
      if (i < lines.length - 1) runs.push(new TextRun({ break: 1 }));
      return runs;
    }),
  });
}

/**
 * 创建表格
 * @param {string[][]} grid
 */
function makeTable(grid) {
  return new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    rows: grid.map(
      (row, rowIdx) =>
        new TableRow({
          children: row.map(
            (cell) =>
              new TableCell({
                children: [makeParagraph(cell || '')],
                shading: rowIdx === 0 ? { fill: 'E8F5E9' } : undefined,
              })
          ),
        })
    ),
  });
}

/**
 * 添加图片段落
 * @param {string} imgPath
 */
async function makeImageParagraph(imgPath) {
  const ext = path.extname(imgPath).toLowerCase();
  if (!['.png', '.jpg', '.jpeg', '.gif'].includes(ext)) return null;
  const data = fs.readFileSync(imgPath);
  const type = ext === '.png' ? 'png' : ext === '.gif' ? 'gif' : 'jpg';
  return new Paragraph({
    alignment: AlignmentType.CENTER,
    children: [
      new ImageRun({
        data,
        transformation: { width: 550, height: 350 },
        type,
      }),
    ],
  });
}

/**
 * 清理模块/页面显示名称
 * @param {string} name
 * @returns {string}
 */
function cleanDisplayName(name) {
  return name
    .replace(/^(\d{2}[_\s-]*)+/g, '')
    .replace(/^\d{2}(?=[^\d\s_])/g, '')
    .replace(/\(\d{4,}[^)]*\)/g, '')
    .replace(/（\d{4,}[^）]*）/g, '')
    .replace(/[）)]/g, '')
    .replace(/_+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * 子模块标题（去掉页级后缀，如「订单列表」）
 * @param {string} name
 */
function getSubmoduleTitle(name) {
  const cleaned = cleanDisplayName(name);
  const dash = cleaned.indexOf('-');
  return dash > 0 ? cleaned.slice(0, dash).trim() : cleaned;
}

/**
 * 从 HTML 页面文件名提取编码（如 01_01_09_撤订_删除.html → 01_01_09）
 * @param {string} filename
 * @returns {string}
 */
function extractHtmlPageCode(filename) {
  const base = filename.replace(/\.html$/i, '');
  const m = base.match(/^(\d{2}(?:_\d{2})*)/);
  return m ? m[1] : '';
}

/**
 * 由原型文件名推导页面编码文件名
 * @param {string} filename
 * @returns {string}
 */
function toHtmlOutputFilename(filename) {
  const base = filename.replace(/\.html$/i, '');
  const cleaned = base
    .replace(/[（(][^）)]*[）)]/g, '')
    .replace(/_\d+更新_?/g, '')
    .replace(/_\d{4}$/g, '')
    .replace(/_+/g, '_')
    .replace(/_$/, '')
    .replace(/-$/, '')
    .trim();
  return `${cleaned}.html`;
}

/**
 * 根据原型节点推导页面编码
 * @param {Node} node
 * @returns {string}
 */
function getHtmlPageCode(node) {
  if (!node?.url) return '';
  return extractHtmlPageCode(toHtmlOutputFilename(node.url));
}

/**
 * 为功能页章节标题加上 HTML 页面编码前缀
 * @param {string} title
 * @param {string} code
 * @returns {string}
 */
function formatTitleWithHtmlCode(title, code) {
  return `【${code || ''}】${title}`;
}

/**
 * 规范化匹配键（去空格、符号并小写）
 * @param {string} s
 * @returns {string}
 */
function normalizeMatchKey(s) {
  return cleanDisplayName(s).replace(/[\/\\\-_\s]/g, '').toLowerCase();
}

/** @typedef {{ mod: string, l2: string, l3: string, l4: string, desc: string }} FeatureRow */

/**
 * 从功能清单 Excel 加载行数据（合并单元格向下填充）
 * @returns {FeatureRow[]}
 */
function loadFeatureRows() {
  const docsDir = path.join(ROOT, 'docs');
  const xlsxFile = fs.readdirSync(docsDir).find((n) => n.endsWith('.xlsx') && n.includes('功能清单'));
  if (!xlsxFile) {
    console.warn('未找到功能清单 xlsx，需求描述将全部为「无」');
    return [];
  }
  const wb = readXlsx(path.join(docsDir, xlsxFile));
  const data = xlsxUtils.sheet_to_json(wb.Sheets[wb.SheetNames[0]], { header: 1, defval: '' });
  let mod = '';
  let l2 = '';
  let l3 = '';
  let l4 = '';
  /** @type {FeatureRow[]} */
  const rows = [];
  for (let i = 1; i < data.length; i++) {
    const r = data[i];
    if (r[1]) mod = r[1];
    else r[1] = mod;
    if (r[2]) l2 = r[2];
    else r[2] = l2;
    if (r[3]) l3 = r[3];
    else r[3] = l3;
    if (r[4]) l4 = r[4];
    else r[4] = l4;
    rows.push({ mod: r[1], l2: r[2], l3: r[3], l4: r[4], desc: String(r[5] || '').trim() });
  }
  return rows;
}

/**
 * 根据页面与模块信息在功能清单中查找「功能说明」
 * @param {FeatureRow[]} rows
 * @param {string} pageName 页面名称（含编号前缀亦可）
 * @param {string} [subModuleName] 二级功能/子模块名
 * @param {string} [moduleName] 功能模块名
 * @returns {string|null}
 */
function findFeatureDescription(rows, pageName, subModuleName = '', moduleName = '') {
  if (!rows.length) return null;

  const page = cleanDisplayName(pageName);
  const sub = cleanDisplayName(subModuleName);
  const mod = cleanDisplayName(moduleName);

  const scoped = rows.filter((r) => {
    if (mod && normalizeMatchKey(r.mod) !== normalizeMatchKey(mod)) return false;
    if (sub && normalizeMatchKey(r.l2) !== normalizeMatchKey(sub)) return false;
    return true;
  });
  if (!scoped.length) return null;

  const pageNorm = normalizeMatchKey(page);
  const pageParts = page.split(/[-/\\]/).map((p) => p.trim()).filter(Boolean);

  for (const r of scoped) {
    const l4n = normalizeMatchKey(r.l4);
    if (!l4n) continue;
    if (pageNorm === l4n || pageNorm.includes(l4n) || l4n.includes(pageNorm)) return r.desc;
    if (pageParts.some((p) => normalizeMatchKey(p) === l4n || normalizeMatchKey(p).includes(l4n)))
      return r.desc;
  }

  let l3Hint = page;
  if (page.includes('-')) l3Hint = page.split('-').pop().trim();
  else if (page.includes('/')) l3Hint = pageParts[0];

  const l3Rows = scoped.filter((r) => normalizeMatchKey(r.l3) === normalizeMatchKey(l3Hint));
  if (l3Rows.length === 1) return l3Rows[0].desc;
  const listInL3 = l3Rows.find((r) => r.l4 === '列表展示');
  if (listInL3) return listInL3.desc;
  if (l3Rows.length > 1) return l3Rows.map((r) => r.desc).filter(Boolean).join('\n');

  for (const r of scoped) {
    if (pageNorm.includes(normalizeMatchKey(r.l3))) {
      const sameL3 = scoped.filter((x) => x.l3 === r.l3);
      const list = sameL3.find((x) => x.l4 === '列表展示');
      if (list) return list.desc;
      if (sameL3.length === 1) return sameL3[0].desc;
    }
  }

  if (sub && pageNorm === normalizeMatchKey(sub)) {
    const listRow = scoped.find((r) => r.l4 === '列表展示');
    if (listRow) return listRow.desc;
  }

  return null;
}

/**
 * 是否为功能模块（01~08、10 开头）
 * @param {string} name
 */
function isFunctionalModuleName(name) {
  return /^(0[1-8]|10)\s/.test(name);
}

/**
 * 是否为非功能章节（业务规则、流程说明）
 * @param {string} name
 */
function isAnalysisSection(name) {
  return name === '业务规则' || name === '流程说明';
}

/**
 * @typedef {{ num: string, title: string, level: number, node?: Node }} TocEntry
 */

/**
 * 收集子模块下全部功能页面（扁平化为 4.X.Y.Z）
 * @param {Node} subModule
 * @param {string} subNum
 * @returns {TocEntry[]}
 */
function collectFeaturePages(subModule, subNum) {
  /** @type {TocEntry[]} */
  const entries = [];
  let idx = 1;

  /**
   * @param {Node} node
   * @param {string} rawTitle
   */
  function pushPage(node, rawTitle) {
    const code = getHtmlPageCode(node);
    entries.push({
      num: `${subNum}.${idx++}`,
      title: formatTitleWithHtmlCode(rawTitle, code),
      rawTitle,
      htmlCode: code,
      level: 4,
      node,
    });
  }

  if (subModule.url) {
    const rawTitle = cleanDisplayName(subModule.name);
    pushPage({ ...subModule, type: 'page' }, rawTitle);
  }

  /**
   * @param {Node} node
   * @param {string[]} prefixParts
   */
  function walk(node, prefixParts) {
    if (isDeprecated(node.name, node.url)) return;
    if (node.type === 'page') {
      const rawTitle = prefixParts.length
        ? [...prefixParts, cleanDisplayName(node.name)].join('-')
        : cleanDisplayName(node.name);
      pushPage(node, rawTitle);
      return;
    }
    for (const child of node.children || []) {
      if (isDeprecated(child.name, child.url)) continue;
      if (node === subModule) {
        walk(child, prefixParts);
      } else {
        walk(child, [...prefixParts, cleanDisplayName(node.name)]);
      }
    }
  }

  walk(subModule, []);
  return entries;
}

/**
 * 构建功能需求章节目录
 * @param {Node[]} sitemap
 * @returns {{ analysis: Node[], functional: Node[], toc: TocEntry[], featureList: { module: string, feature: string, page: string }[] }}
 */
function buildChapterOutline(sitemap) {
  /** @type {Node[]} */
  const analysis = [];
  /** @type {Node[]} */
  const functional = [];
  /** @type {TocEntry[]} */
  const toc = [];
  /** @type {{ module: string, feature: string, page: string }[]} */
  const featureList = [];

  for (const node of sitemap) {
    if (isDeprecated(node.name, node.url)) continue;
    if (isAnalysisSection(node.name)) analysis.push(node);
    else if (isFunctionalModuleName(node.name)) functional.push(node);
  }

  toc.push({ num: '3.', title: '总体分析', level: 1 });
  analysis.forEach((sec, i) => {
    toc.push({ num: `3.${i + 1}`, title: sec.name, level: 2 });
  });

  toc.push({ num: '4.', title: '功能需求', level: 1 });
  toc.push({ num: '4.1', title: '功能需求列表', level: 2 });

  functional.forEach((mod, mi) => {
    const modNum = `4.${mi + 2}`;
    const modTitle = cleanDisplayName(mod.name);
    toc.push({ num: modNum, title: modTitle, level: 2 });
    toc.push({ num: `${modNum}.1`, title: '概述', level: 3 });

    const subModules = (mod.children || []).filter((c) => !isDeprecated(c.name, c.url));
    subModules.forEach((sub, si) => {
      const subNum = `${modNum}.${si + 2}`;
      const subTitle = getSubmoduleTitle(sub.name);
      toc.push({ num: subNum, title: subTitle, level: 3 });

      if (sub.type === 'page') {
        const rawTitle = cleanDisplayName(sub.name);
        const code = getHtmlPageCode(sub);
        toc.push({
          num: `${subNum}.1`,
          title: formatTitleWithHtmlCode(rawTitle, code),
          level: 4,
          node: sub,
        });
        featureList.push({
          module: modTitle,
          feature: subTitle,
          page: formatTitleWithHtmlCode(rawTitle, code),
        });
        return;
      }

      const pageEntries = collectFeaturePages(sub, subNum);
      for (const pe of pageEntries) {
        if (pe.node?.type === 'page') {
          toc.push(pe);
          featureList.push({ module: modTitle, feature: subTitle, page: pe.title });
        }
      }
    });
  });

  return { analysis, functional, toc, featureList };
}

/**
 * 创建带编号的标题段落
 * @param {string} num
 * @param {string} title
 * @param {typeof HeadingLevel[keyof typeof HeadingLevel]} heading
 */
function makeNumberedHeading(num, title, heading) {
  return new Paragraph({
    heading,
    spacing: { before: heading === HeadingLevel.HEADING_1 ? 400 : 200 },
    children: [new TextRun({ text: `${num} ${title}`, bold: heading !== HeadingLevel.HEADING_4 })],
  });
}

/**
 * 追加页面正文（按模板 4.X.Y.1~4 小节）
 * @param {import('docx').FileChild[]} children
 * @param {Node} node
 * @param {string} sectionNum 如 4.2.2.1
 * @param {{ featureRows?: FeatureRow[], pageTitle?: string, subModuleName?: string, moduleName?: string }} [ctx]
 */
async function appendPageContent(children, node, sectionNum, ctx = {}) {
  if (!node.url) return;
  const htmlPath = path.join(PROTOTYPE_DIR, node.url);
  const content = extractPageContent(htmlPath);
  if (!content) {
    children.push(makeParagraph('（原型页面文件未找到）'));
    return;
  }

  const isFlowPage = /流转|流程/.test(node.name);
  const isFlowContent =
    isFlowPage || (content.paragraphs.length && /流转|流程|状态/.test(node.name));

  const pageTitle = ctx.pageTitle || node.name;
  const desc =
    ctx.featureRows?.length
      ? findFeatureDescription(ctx.featureRows, pageTitle, ctx.subModuleName, ctx.moduleName)
      : null;

  children.push(
    new Paragraph({
      spacing: { before: 120 },
      children: [new TextRun({ text: `${sectionNum}.1 需求描述`, bold: true, size: 24 })],
    })
  );
  children.push(makeParagraph(desc || '无'));

  if (content.requirements.length) {
    children.push(
      new Paragraph({
        spacing: { before: 120 },
        children: [new TextRun({ text: `${sectionNum}.2 业务规则`, bold: true, size: 24 })],
      })
    );
    for (const req of content.requirements) {
      children.push(makeParagraph(req.content));
    }
  }

  if (isFlowContent && content.paragraphs.length) {
    children.push(
      new Paragraph({
        spacing: { before: 120 },
        children: [new TextRun({ text: `${sectionNum}.3 业务流程`, bold: true, size: 24 })],
      })
    );
    for (const p of content.paragraphs) {
      children.push(makeParagraph(p));
    }
    if (content.images.length) {
      for (const img of content.images.slice(0, 5)) {
        const imgPara = await makeImageParagraph(img.path);
        if (imgPara) children.push(imgPara);
      }
    }
  } else if (isFlowContent && content.images.length) {
    children.push(
      new Paragraph({
        spacing: { before: 120 },
        children: [new TextRun({ text: `${sectionNum}.3 业务流程`, bold: true, size: 24 })],
      })
    );
    for (const img of content.images.slice(0, 5)) {
      const imgPara = await makeImageParagraph(img.path);
      if (imgPara) children.push(imgPara);
    }
  } else if (content.paragraphs.length) {
    for (const p of content.paragraphs) {
      children.push(makeParagraph(p));
    }
  }

  if (content.selectOptions.length) {
    children.push(
      new Paragraph({
        spacing: { before: 120 },
        children: [new TextRun({ text: '字段枚举值', bold: true, size: 22 })],
      })
    );
    children.push(makeParagraph(content.selectOptions.join('、')));
  }

  if (content.tables.length) {
    children.push(
      new Paragraph({
        spacing: { before: 120 },
        children: [new TextRun({ text: '数据表格', bold: true, size: 22 })],
      })
    );
    for (const grid of content.tables) {
      children.push(makeTable(grid));
      children.push(new Paragraph({ spacing: { after: 120 }, children: [] }));
    }
  }

  if (
    !content.requirements.length &&
    !content.paragraphs.length &&
    !content.tables.length &&
    !content.selectOptions.length &&
    (isFlowPage ? !content.images.length : true)
  ) {
    children.push(
      makeParagraph('（本页为界面原型，详细交互请参见原型 HTML 文件：' + node.url + '）')
    );
  }
}

/**
 * 生成功能需求列表表格
 * @param {{ module: string, feature: string, page: string }[]} featureList
 */
function makeFeatureListTable(featureList) {
  const rows = [
    ['序号', '功能模块', '功能子项', '功能点', '优先级'],
    ...featureList.map((f, i) => [String(i + 1), f.module, f.feature, f.page, 'P1']),
  ];
  return makeTable(rows);
}

/**
 * 扁平化站点地图（统计用）
 * @param {Node[]} nodes
 * @param {number} level
 */
function flattenSitemap(nodes, level = 1) {
  /** @type {{ level: number, name: string, url?: string, type: string }[]} */
  const result = [];
  for (const node of nodes) {
    if (isDeprecated(node.name, node.url)) continue;
    result.push({ level, name: node.name, url: node.url, type: node.type });
    if (node.children?.length) {
      result.push(...flattenSitemap(node.children, level + 1));
    }
  }
  return result;
}

/**
 * 生成文档主体
 * @param {Node[]} sitemap
 */
async function buildDocument(sitemap) {
  /** @type {import('docx').FileChild[]} */
  const children = [];
  const featureRows = loadFeatureRows();
  console.log(`功能清单条目: ${featureRows.length}`);
  const { analysis, functional, toc, featureList } = buildChapterOutline(sitemap);

  // 封面
  children.push(
    new Paragraph({
      spacing: { before: 2000, after: 400 },
      alignment: AlignmentType.CENTER,
      children: [new TextRun({ text: '订单管理系统', bold: true, size: 56 })],
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { after: 800 },
      children: [new TextRun({ text: '需求规格说明书', bold: true, size: 44 })],
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      children: [
        new TextRun({
          text: `文档版本：V1.0    生成日期：${new Date().toISOString().slice(0, 10)}`,
          size: 22,
        }),
      ],
    }),
    new Paragraph({ children: [new PageBreak()] })
  );

  // 目录（按模板编号）
  children.push(new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun('目录')] }));
  for (const item of toc) {
    const indent = item.level <= 1 ? 0 : item.level === 2 ? 0 : item.level === 3 ? 2 : 4;
    children.push(
      new Paragraph({
        spacing: { before: item.level <= 2 ? 120 : 60 },
        children: [
          new TextRun({
            text: `${' '.repeat(indent)}${item.num} ${item.title}`,
            bold: item.level <= 2,
            size: item.level <= 2 ? 26 : 22,
          }),
        ],
      })
    );
  }
  children.push(new Paragraph({ children: [new PageBreak()] }));

  // 第3章 总体分析
  children.push(makeNumberedHeading('3.', '总体分析', HeadingLevel.HEADING_1));
  for (let i = 0; i < analysis.length; i++) {
    const sec = analysis[i];
    children.push(makeNumberedHeading(`3.${i + 1}`, sec.name, HeadingLevel.HEADING_2));
    await processAnalysisSection(children, sec, `3.${i + 1}`);
  }

  // 第4章 功能需求
  children.push(makeNumberedHeading('4.', '功能需求', HeadingLevel.HEADING_1));
  children.push(makeNumberedHeading('4.1', '功能需求列表', HeadingLevel.HEADING_2));
  children.push(
    makeParagraph(
      '下表汇总本系统各功能模块的需求范围，详细说明见后续各小节。优先级 P1 表示本期必须实现。'
    )
  );
  children.push(makeFeatureListTable(featureList));
  children.push(new Paragraph({ spacing: { after: 200 }, children: [] }));

  for (let mi = 0; mi < functional.length; mi++) {
    const mod = functional[mi];
    const modNum = `4.${mi + 2}`;
    const modTitle = cleanDisplayName(mod.name);
    children.push(makeNumberedHeading(modNum, modTitle, HeadingLevel.HEADING_2));

    // 4.X.1 概述
    children.push(makeNumberedHeading(`${modNum}.1`, '概述', HeadingLevel.HEADING_3));
    children.push(
      makeParagraph(
        `${modTitle}模块涵盖${(mod.children || [])
          .filter((c) => !isDeprecated(c.name, c.url))
          .map((c) => cleanDisplayName(c.name))
          .join('、')}等功能，具体需求见以下各小节。`
      )
    );

    const subModules = (mod.children || []).filter((c) => !isDeprecated(c.name, c.url));
    for (let si = 0; si < subModules.length; si++) {
      const sub = subModules[si];
      const subNum = `${modNum}.${si + 2}`;
      children.push(makeNumberedHeading(subNum, getSubmoduleTitle(sub.name), HeadingLevel.HEADING_3));

      const subTitle = getSubmoduleTitle(sub.name);
      const pageCtx = { featureRows, subModuleName: subTitle, moduleName: modTitle };

      if (sub.type === 'page') {
        const rawTitle = cleanDisplayName(sub.name);
        const code = getHtmlPageCode(sub);
        const pageNum = `${subNum}.1`;
        children.push(
          makeNumberedHeading(pageNum, formatTitleWithHtmlCode(rawTitle, code), HeadingLevel.HEADING_4)
        );
        await appendPageContent(children, sub, pageNum, {
          ...pageCtx,
          pageTitle: rawTitle,
        });
        continue;
      }

      const pages = collectFeaturePages(sub, subNum, htmlPageCodeMap);
      if (pages.length === 0) {
        children.push(makeParagraph('（详见原型页面）'));
        continue;
      }
      for (const pe of pages) {
        children.push(makeNumberedHeading(pe.num, pe.title, HeadingLevel.HEADING_4));
        await appendPageContent(children, pe.node, pe.num, { ...pageCtx, pageTitle: pe.rawTitle || pe.title });
      }
    }
  }

  return new Document({
    creator: 'OrderM PRD Generator',
    title: '订单管理系统需求规格说明',
    sections: [{ children }],
  });
}

/**
 * 处理总体分析章节（业务规则、流程说明）
 * @param {import('docx').FileChild[]} children
 * @param {Node} section
 * @param {string} chapterNum
 */
async function processAnalysisSection(children, section, chapterNum) {
  const subNodes = (section.children || []).filter((c) => !isDeprecated(c.name, c.url));
  for (let i = 0; i < subNodes.length; i++) {
    const node = subNodes[i];
    const secNum = `${chapterNum}.${i + 1}`;
    children.push(makeNumberedHeading(secNum, cleanDisplayName(node.name), HeadingLevel.HEADING_3));

    if (node.type === 'page') {
      await appendPageContent(children, node, secNum);
      continue;
    }

    const pages = (node.children || []).filter(
      (c) => !isDeprecated(c.name, c.url) && c.type === 'page'
    );
    if (pages.length === 0 && node.children?.length) {
      for (let j = 0; j < node.children.length; j++) {
        const child = node.children[j];
        if (isDeprecated(child.name, child.url)) continue;
        const childNum = `${secNum}.${j + 1}`;
        children.push(
          makeNumberedHeading(childNum, cleanDisplayName(child.name), HeadingLevel.HEADING_4)
        );
        if (child.type === 'page') {
          await appendPageContent(children, child, childNum);
        }
      }
    } else {
      for (let j = 0; j < pages.length; j++) {
        const page = pages[j];
        const pageNum = `${secNum}.${j + 1}`;
        children.push(
          makeNumberedHeading(pageNum, cleanDisplayName(page.name), HeadingLevel.HEADING_4)
        );
        await appendPageContent(children, page, pageNum);
      }
    }
  }
}

async function main() {
  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  console.log('解析站点地图...');
  const sitemap = parseSitemap();
  console.log(`站点地图节点: ${flattenSitemap(sitemap).length}`);

  console.log('生成 Word 文档...');
  const doc = await buildDocument(sitemap);
  const buffer = await Packer.toBuffer(doc);
  fs.writeFileSync(OUTPUT_PATH, buffer);
  console.log(`已生成: ${OUTPUT_PATH}`);
  console.log(`文件大小: ${(buffer.length / 1024).toFixed(1)} KB`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
