/**
 * 从 Axure 原型与 html 前端页面生成 PRD 需求规格说明文档
 * 用法: node scripts/generate-prd.js
 */
const fs = require('fs');
const path = require('path');
const { summarizeSpec, PRESET_SPECS } = require('./prd-summarizer');
const { buildModuleTree } = require('./prd-toc-tree');

const ROOT = path.join(__dirname, '..');
const PROTOTYPE_DIR = path.join(ROOT, 'prototype');
const HTML_PAGES_DIR = path.join(ROOT, 'html/pages');
const OUTPUT_DIR = path.join(ROOT, 'html_prd');
const INDEX_JSON = path.join(HTML_PAGES_DIR, '_index.json');

/** 流程说明页（复制图片到 html_prd/images） */
const FLOW_PAGES = [
  {
    code: '00_02_01',
    name: '图书/视听 订单、订单行状态流转图',
    prototype: '图书_视听_订单、订单行状态流转图_1201更新_.html',
    imageDir: '图书_视听_订单、订单行状态流转图_1201更新_',
    imageFile: 'u43.png'
  },
  {
    code: '00_02_02',
    name: '图书/视听 验收流程及验收单状态流转图',
    prototype: '图书_视听_验收流程及验收单状态流转图_0723更新_.html',
    imageDir: '图书_视听_验收流程及验收单状态流转图_0723更新_',
    imageFile: 'u43.png'
  },
  {
    code: '00_02_03',
    name: '图书/视听 催缺单状态流转图',
    prototype: '图书_视听_催缺单状态流转图_1022更新_.html',
    imageDir: '图书_视听_催缺单状态流转图_1022更新_',
    imageFile: 'u43.png'
  },
  {
    code: '00_02_04',
    name: '图书/视听 结算单生成流程',
    prototype: '图书_视听_结算单生成流程.html',
    imageDir: '图书_视听_结算单生成流程',
    imageFile: 'u43.png'
  },
  {
    code: '00_02_05',
    name: '连续出版物 订单、订单行状态流转图',
    prototype: '连续出版物_订单、订单行状态流转图_1010更新_.html',
    imageDir: '连续出版物_订单、订单行状态流转图_1010更新_',
    imageFile: 'u43.png'
  }
];

/** 模块名称映射 */
const MODULE_NAMES = {
  '00': '业务规则与流程',
  '01': '订单管理',
  '02': '采访验收',
  '03': '采访结算',
  '04': '订户管理',
  '05': '货币管理',
  '07': '设置',
  '08': '连续出版物',
  '10': '订单配置（待定）'
};

/**
 * HTML 转义
 * @param {string} s
 * @returns {string}
 */
function escapeHtml(s) {
  return String(s)
   .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/**
 * 去除 HTML 标签并规范化空白
 * @param {string} html
 * @returns {string}
 */
function stripHtml(html) {
  return html
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/p>/gi, '\n')
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

/**
 * 从原型 HTML 提取需求说明文本（优先粉色标注 #FF3399）
 * @param {string} html
 * @returns {string[]}
 */
function extractRequirementTexts(html) {
  const results = [];

  const pinkSpanRegex = /<span[^>]*#FF3399[^>]*>([\s\S]*?)<\/span>/gi;
  let m;
  while ((m = pinkSpanRegex.exec(html)) !== null) {
    const text = stripHtml(m[1]).trim();
    if (text.length >= 4 && !results.includes(text)) results.push(text);
  }

  if (results.length >= 3) {
    return mergeRequirementLines(results).slice(0, 10);
  }

  const blockRegex = /<div[^>]*class="[^"]*(?:paragraph1|paragraph)[^"]*"[^>]*>[\s\S]*?<\/div>/gi;
  let blockMatch;
  while ((blockMatch = blockRegex.exec(html)) !== null) {
    const block = blockMatch[0];
    const text = stripHtml(block);
    if (!text || text.length < 30) continue;
    if (text === '需求说明') continue;
    if (/^[\d\s\-~～:.]+$/.test(text)) continue;
    if (results.includes(text)) continue;
    if (/需求|规则|说明|缺省|检索|数据隔离|点击|默认|提示词|命名/.test(text)) results.push(text);
  }
  return mergeRequirementLines(results).slice(0, 10);
}

/**
 * 合并过碎的需求行
 * @param {string[]} lines
 * @returns {string[]}
 */
function mergeRequirementLines(lines) {
  const merged = [];
  let buf = '';
  lines.forEach(line => {
    const cleaned = line.replace(/#FF3399[^>]*>?/g, '').trim();
    if (!cleaned) return;
    if (/^\d[\s.、]/.test(cleaned) && buf) {
      merged.push(buf.trim());
      buf = cleaned;
    } else {
      buf = buf ? `${buf}\n${cleaned}` : cleaned;
    }
  });
  if (buf) merged.push(buf.trim());
  return merged.filter(Boolean);
}

/**
 * 解析页面功能编码
 * @param {string} filename
 * @returns {{ code: string, name: string, module: string }}
 */
function parsePageCode(filename) {
  const base = filename.replace('.html', '');
  const parts = base.split('_');
  const module = parts[0] || '99';

  if (/^01-01-\d+/.test(base)) {
    return { code: base.replace(/-/g, '_').replace(/^01_01_19/, '01_01_19'), name: '实际关联书目记录', module: '01' };
  }

  if (base.startsWith('01_01_非连续出版物订单')) {
    return { code: '01_01', name: '非连续出版物订单', module: '01' };
  }
  if (base.startsWith('04_01订户列表')) {
    return { code: '04_01', name: '订户列表', module: '04' };
  }

  const codeMatch = base.match(/^(\d+(?:_\d+)+)/);
  let code = codeMatch ? codeMatch[1] : module;
  const namePart = base.slice(code.length).replace(/^[_\-]+/, '').replace(/[_\-]+$/, '');
  const name = namePart || base;

  /** 同编码多页面时追加序号后缀 */
  if (code === '07_06_05') {
    if (name.includes('馆藏地')) code = '07_06_05_02';
    else if (name.includes('分馆')) code = '07_06_05_01';
    else if (name.includes('馆址')) code = '07_06_04';
  }

  return { code, name, module };
}

/**
 * 从前端 HTML 提取可定位元素
 * @param {string} html
 * @returns {string[]}
 */
function extractFrontendAnchors(html) {
  const anchors = [];

  const idRegex = /\bid="([a-zA-Z][\w-]{2,})"/g;
  let m;
  while ((m = idRegex.exec(html)) !== null) {
    if (!['app-root', 'main-content'].includes(m[1])) anchors.push(`#${m[1]}`);
  }

  const dataRegex = /data-(?:order-tab|order-panel|modal|step|dropdown)="([^"]+)"/g;
  while ((m = dataRegex.exec(html)) !== null) {
    anchors.push(`[data-*="${m[1]}"]`);
  }

  const btnRegex = /<button[^>]*>([\s\S]*?)<\/button>/gi;
  while ((m = btnRegex.exec(html)) !== null) {
    const label = stripHtml(m[1]).trim();
    if (label && label.length <= 12 && !label.includes('\n')) {
      anchors.push(`按钮「${label}」`);
    }
  }

  const thRegex = /<th[^>]*>([\s\S]*?)<\/th>/gi;
  while ((m = thRegex.exec(html)) !== null) {
    const label = stripHtml(m[1]).trim();
    if (label && label.length <= 10 && label !== '操作') anchors.push(`表头「${label}」`);
  }

  return [...new Set(anchors)].slice(0, 12);
}

/**
 * 判断实现状态
 * @param {string} html
 * @param {string} filename
 * @returns {string}
 */
function getImplementationStatus(html, filename) {
  if (html.includes('http-equiv="refresh"') && html.includes('正在跳转')) {
    return '【部分实现】该页为跳转页，功能合并至主页面';
  }
  if (html.includes('页面内容区域') && !html.includes('id="search-form"')) {
    return '【部分实现】页面骨架已生成，业务交互待完善';
  }
  if (filename.includes('暂缓') || filename.includes('0617_暂缓')) {
    return '【待实现】原型标注暂缓';
  }
  if (html.length < 800) {
    return '【部分实现】页面内容较少';
  }
  return '【已实现】';
}

/**
 * 提取业务规则列表
 * @param {string[]} reqTexts
 * @param {string} html
 * @returns {string[]}
 */
function extractBusinessRules(reqTexts, html) {
  const rules = [];
  reqTexts.forEach(t => {
    t.split(/\n+/).forEach(line => {
      const l = line.trim().replace(/#FF3399[^>]*>?/g, '');
      if (l.length >= 8 && /^\d|[\-•]|检索|点击|默认|只能|必须|不可|支持|显示|精确|提示词/.test(l)) {
        if (!rules.includes(l)) rules.push(l);
      }
    });
  });

  if (html.includes('search-form')) rules.push('检索区支持展开/收起，默认显示首行检索项');
  if (html.includes('search-expand-btn')) rules.push('点击「展开」显示全部检索项，点击「收起」恢复默认');
  if (html.includes('data-modal')) rules.push('弹窗类操作通过 data-modal 容器承载，关闭按钮 data-modal-close');
  if (html.includes('Common.resetForm')) rules.push('重置按钮清空当前检索表单');

  return rules.slice(0, 15);
}

/**
 * 提取字段/枚举表格数据
 * @param {string} html
 * @returns {Array<{field:string, type:string, constraint:string}>}
 */
function extractFieldTable(html) {
  const fields = [];
  const labelRegex = /<label[^>]*>([^<：]+)[：:]?<\/label>/gi;
  let m;
  while ((m = labelRegex.exec(html)) !== null) {
    const field = m[1].trim().replace(/&nbsp;/g, '').replace(/^\d+\s*/, '');
    if (field && field.length >= 2 && field.length <= 12 && !/^[，,]/.test(field) && !fields.find(f => f.field === field)) {
      fields.push({ field, type: '文本/下拉', constraint: '见原型说明' });
    }
  }

  const optRegex = /<select[^>]*>[\s\S]*?<\/select>/gi;
  while ((m = optRegex.exec(html)) !== null) {
    const opts = [];
    const optInner = /<option[^>]*>([^<]+)<\/option>/gi;
    let om;
    while ((om = optInner.exec(m[0])) !== null) opts.push(om[1].trim());
    if (opts.length > 1) {
      const prevLabel = fields[fields.length - 1];
      if (prevLabel) prevLabel.constraint = `枚举：${opts.join('、')}`;
    }
  }

  return fields.slice(0, 12);
}

/**
 * 查找对应原型文件
 * @param {string} outputFilename
 * @param {Array} indexList
 * @returns {string|null}
 */
function findPrototypeFile(outputFilename, indexList) {
  const entry = indexList.find(i => i.output === outputFilename);
  if (entry) return entry.prototype;
  const base = outputFilename.replace('.html', '');
  const candidates = fs.readdirSync(PROTOTYPE_DIR).filter(f => f.endsWith('.html'));
  return candidates.find(f => f.includes(base.split('_').slice(0, 3).join('_'))) || null;
}

/**
 * 构建功能章节
 * @param {string} filename
 * @param {Array} indexList
 * @returns {object}
 */
function buildSection(filename, indexList) {
  const htmlPath = path.join(HTML_PAGES_DIR, filename);
  const html = fs.readFileSync(htmlPath, 'utf8');
  const { code, name, module } = parsePageCode(filename);
  const protoFile = findPrototypeFile(filename, indexList);
  let reqTexts = [];
  if (protoFile && fs.existsSync(path.join(PROTOTYPE_DIR, protoFile))) {
    const protoHtml = fs.readFileSync(path.join(PROTOTYPE_DIR, protoFile), 'utf8');
    reqTexts = extractRequirementTexts(protoHtml);
  }

  const anchors = extractFrontendAnchors(html);
  const status = getImplementationStatus(html, filename);
  const rules = extractBusinessRules(reqTexts, html);
  const fields = extractFieldTable(html);

  const frontendRef = anchors.length
    ? `html/pages/${filename} → ${anchors.join('；')}`
    : `html/pages/${filename}`;

  /** 跳转页映射到主页面区域 */
  const redirectMap = {
    '01_01_01_订单行列表.html': {
      mainPage: '01_01_非连续出版物订单-订单列表.html',
      anchors: ['[data-order-tab="order-line"]', '[data-order-panel="order-line"]', '#line-search-form', '#order-line-table-body', '#generate-shortage-btn'],
      statusNote: '【已实现】功能合并至主页面「订单行列表」页签'
    }
  };

  let finalStatus = status;
  let finalFrontendRef = frontendRef;
  if (redirectMap[filename]) {
    const rm = redirectMap[filename];
    finalStatus = rm.statusNote;
    finalFrontendRef = `html/pages/${rm.mainPage} → ${rm.anchors.join('；')}`;
  }

  const spec = summarizeSpec({
    code,
    name,
    module,
    moduleName: MODULE_NAMES[module],
    rawBlocks: reqTexts,
    html,
    filename
  });

  return {
    code,
    name,
    module,
    filename,
    status: finalStatus,
    spec,
    frontendRef: finalFrontendRef,
    flowImage: null,
    flowSteps: []
  };
}

/**
 * 构建业务规则章节
 * @returns {object[]}
 */
function buildBusinessRuleSections() {
  const sections = [];

  const namingFile = path.join(PROTOTYPE_DIR, '名词定义及编号命名规则.html');
  if (fs.existsSync(namingFile)) {
    sections.push({
      code: '00_01_01',
      name: '名词定义及编号命名规则',
      module: '00',
      filename: null,
      status: '【参考规则】',
      spec: PRESET_SPECS['00_01_01'],
      frontendRef: '全局业务规则，无单一页面元素',
      flowImage: null,
      flowSteps: []
    });
  }

  const resourceFile = path.join(PROTOTYPE_DIR, '资源类型和采选方式_部分确认_.html');
  if (fs.existsSync(resourceFile)) {
    sections.push({
      code: '00_01_02',
      name: '资源类型和采选方式',
      module: '00',
      filename: null,
      status: '【部分确认】',
      spec: PRESET_SPECS['00_01_02'],
      frontendRef: '订单/订单行表单中的「资源类型」「采选方式」下拉字段',
      flowImage: null,
      flowSteps: []
    });
  }

  return sections;
}

/**
 * 构建流程说明章节并复制图片
 * @returns {object[]}
 */
function buildFlowSections() {
  const imagesDir = path.join(OUTPUT_DIR, 'images');
  fs.mkdirSync(imagesDir, { recursive: true });

  return FLOW_PAGES.map(flow => {
    const srcDir = path.join(PROTOTYPE_DIR, 'images', flow.imageDir);
    const imageRefs = [];
    if (fs.existsSync(srcDir)) {
      const files = fs.readdirSync(srcDir).filter(f => /\.(png|svg|jpg)$/i.test(f));
      files.slice(0, 6).forEach((f, idx) => {
        const destName = `${flow.code}_${idx}_${f}`;
        fs.copyFileSync(path.join(srcDir, f), path.join(imagesDir, destName));
        imageRefs.push(`images/${destName}`);
      });
    }
    const imageRef = imageRefs[0] || null;

    return {
      code: flow.code,
      name: flow.name,
      module: '00',
      filename: null,
      status: '【流程参考】',
      spec: {
        overview: `${flow.name}，用于研发理解业务状态机与操作约束。`,
        requirementDesc: '明确各状态下允许的业务操作及目标状态，实现订单/验收/催缺/结算等模块的状态字段与按钮控制。',
        businessFlow: '见下方流程图及阅读步骤。',
        functionDesc: [
          '以流程图呈现状态节点与转换路径。',
          '标注各转换触发条件及前置校验要求。',
          '与列表/详情页中的状态展示及操作按钮联动。'
        ],
        operationSteps: [
          '阅读流程图，识别起始状态与终态节点。',
          '沿箭头梳理允许的操作及目标状态。',
          '对照各业务模块中的状态字段与操作按钮实现。'
        ],
        logicRules: [
          { type: '原则', text: '状态变更须满足前置条件，不允许跳过中间态。' },
          { type: '原则', text: '业务规则冲突时以原型流程图标注为准。' }
        ],
        fields: []
      },
      frontendRef: '无直接页面对应，影响各模块状态展示与操作按钮可用性',
      flowImage: imageRef,
      flowImages: imageRefs,
      flowSteps: [
        '识别流程起始状态节点',
        '沿箭头阅读允许的操作与目标状态',
        '对照业务模块中的状态字段与操作按钮'
      ]
    };
  });
}

/**
 * 渲染单个章节 HTML
 * @param {object} sec
 * @returns {string}
 */
function renderSection(sec) {
  const s = sec.spec || {
    overview: sec.name,
    requirementDesc: '',
    businessFlow: '无。',
    functionDesc: [],
    operationSteps: [],
    logicRules: (sec.rules || []).map((r) => ({ type: '业务', text: r })),
    fields: sec.fields || []
  };

  const functionHtml = s.functionDesc.length
    ? `<ul class="spec-list">${s.functionDesc.map((i) => `<li>${escapeHtml(i)}</li>`).join('')}</ul>`
    : '<p class="muted">—</p>';

  const operationHtml = s.operationSteps.length
    ? `<ol class="spec-list">${s.operationSteps.map((i) => `<li>${escapeHtml(i)}</li>`).join('')}</ol>`
    : '<p class="muted">—</p>';

  const logicHtml = s.logicRules.length
    ? `<table class="data-table"><thead><tr><th>类型</th><th>逻辑说明</th></tr></thead><tbody>${
      s.logicRules.map((r) =>
        `<tr><td>${escapeHtml(r.type || '业务')}</td><td>${escapeHtml(r.text)}</td></tr>`
      ).join('')
    }</tbody></table>`
    : '<p class="muted">暂无额外逻辑说明</p>';

  const fieldsHtml = s.fields.length
    ? `<table class="data-table"><thead><tr><th>字段/元素</th><th>类型</th><th>约束说明</th></tr></thead><tbody>${
      s.fields.map((f) =>
        `<tr><td>${escapeHtml(f.field)}</td><td>${escapeHtml(f.type)}</td><td>${escapeHtml(f.constraint)}</td></tr>`
      ).join('')
    }</tbody></table>`
    : '';

  const imgs = sec.flowImages && sec.flowImages.length ? sec.flowImages : (sec.flowImage ? [sec.flowImage] : []);
  const flowHtml = imgs.length || sec.flowSteps.length
    ? `<div class="flow-box">${imgs.map((src) => `<img src="${src}" alt="${escapeHtml(sec.name)}" class="flow-img">`).join('')}<ol class="flow-steps">${sec.flowSteps.map((st) => `<li>${escapeHtml(st)}</li>`).join('')}</ol></div>`
    : '';

  return `
<section class="prd-section" id="sec-${sec.code}" data-code="${sec.code}">
  <header class="section-header">
    <span class="feature-code">${sec.code}</span>
    <h2>${escapeHtml(sec.name)}</h2>
    <span class="impl-status">${escapeHtml(sec.status)}</span>
  </header>
  <div class="section-body">
    <h3>功能概述</h3>
    <p class="spec-overview">${escapeHtml(s.overview)}</p>
    <h3>需求描述</h3>
    <p class="spec-text">${escapeHtml(s.requirementDesc)}</p>
    <h3>业务流程</h3>
    <p class="spec-text">${escapeHtml(s.businessFlow)}</p>
    <h3>功能说明</h3>
    ${functionHtml}
    <h3>操作说明</h3>
    ${operationHtml}
    <h3>逻辑说明</h3>
    ${logicHtml}
    ${fieldsHtml ? `<h3>界面元素 / 字段定义</h3>${fieldsHtml}` : ''}
    <h3>对应前端位置</h3>
    <p class="frontend-ref"><code>${escapeHtml(sec.frontendRef)}</code></p>
    ${flowHtml ? `<h3>流程图</h3>${flowHtml}` : ''}
  </div>
</section>`;
}

/**
 * 渲染目录叶子节点
 * @param {object} sec
 * @returns {string}
 */
function renderTocLeaf(sec) {
  return `<li><a href="#sec-${sec.code}" data-target="sec-${sec.code}"><span class="toc-code">${sec.code}</span>${escapeHtml(sec.name)}</a></li>`;
}

/**
 * 递归渲染层级目录节点
 * @param {object} node
 * @param {number} depth
 * @returns {string}
 */
function renderTocNode(node, depth = 0) {
  if (!node.children.length) {
    return node.section ? renderTocLeaf(node.section) : '';
  }

  const headerContent = node.section
    ? `<a href="#sec-${node.code}" data-target="sec-${node.code}" class="toc-group-link"><span class="toc-code">${node.code}</span>${escapeHtml(node.name)}</a>`
    : `<span class="toc-group-label"><span class="toc-code">${node.code}</span>${escapeHtml(node.name)}</span>`;

  const childHtml = node.children.map((c) => renderTocNode(c, depth + 1)).join('');

  return `<li class="toc-group" data-depth="${depth}">
    <div class="toc-group-header">
      <button type="button" class="toc-group-toggle" aria-expanded="true"><span class="toc-chevron" aria-hidden="true"></span></button>
      ${headerContent}
    </div>
    <ul>${childHtml}</ul>
  </li>`;
}

/**
 * 构建目录树节点
 * @param {object[]} sections
 * @returns {string}
 */
function renderToc(sections) {
  const tree = {};

  sections.forEach((sec) => {
    const mod = sec.module;
    if (!tree[mod]) tree[mod] = { name: MODULE_NAMES[mod] || `模块${mod}`, items: [] };
    tree[mod].items.push(sec);
  });

  let html = '<ul class="toc-root">';
  Object.keys(tree).sort().forEach((mod) => {
    const group = tree[mod];
    const moduleTree = buildModuleTree(group.items);
    html += `<li class="toc-module"><span class="toc-module-label">${mod} ${escapeHtml(group.name)}</span><ul>`;
    moduleTree.forEach((node) => {
      html += renderTocNode(node, 0);
    });
    html += '</ul></li>';
  });
  html += '</ul>';
  return html;
}

/**
 * 主函数
 */
function main() {
  const indexList = JSON.parse(fs.readFileSync(INDEX_JSON, 'utf8'));
  const pageFiles = fs.readdirSync(HTML_PAGES_DIR).filter(f => f.endsWith('.html'));

  const sections = [
    ...buildBusinessRuleSections(),
    ...buildFlowSections()
  ];

  pageFiles.forEach(filename => {
    if (filename.startsWith('_')) return;
    try {
      sections.push(buildSection(filename, indexList));
    } catch (err) {
      console.warn(`跳过 ${filename}: ${err.message}`);
    }
  });

  sections.sort((a, b) => a.code.localeCompare(b.code));

  fs.mkdirSync(path.join(OUTPUT_DIR, 'css'), { recursive: true });
  fs.mkdirSync(path.join(OUTPUT_DIR, 'js'), { recursive: true });

  const tocHtml = renderToc(sections);
  const contentHtml = sections.map(renderSection).join('\n');
  const generatedAt = new Date().toISOString().slice(0, 10);

  const prdHtml = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>图书馆采选系统 - 需求规格说明</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <div class="layout">
    <aside class="sidebar" id="sidebar">
      <div class="sidebar-header">
        <h1>需求规格说明</h1>
        <p class="meta">图书馆采选订单管理系统<br>生成日期：${generatedAt}<br>共 ${sections.length} 个功能点</p>
      </div>
      <nav class="toc" id="toc">${tocHtml}</nav>
    </aside>
    <main class="content" id="content">
      <article class="doc-intro">
        <h2>文档说明</h2>
        <p>本文档为<strong>图书馆采选订单管理系统</strong>产品需求规格说明书，基于 Axure 原型与已实现前端整理，写法参考《VSTECS 零售管理系统需求规格说明书》。</p>
        <ul>
          <li>内容经<strong>总结优化</strong>，非原型原文照搬；细节冲突时以原型为准。</li>
          <li>每章结构：功能概述 → 需求描述 → 业务流程 → 功能说明 → 操作说明 → 逻辑说明 → 界面元素 → 对应前端位置。</li>
          <li>功能编码与原型页面命名一致，如 <code>01_01_01</code>、<code>02_02_02_01_01</code>。</li>
          <li>标注 <code>【待实现】</code> / <code>【部分实现】</code> 表示前端尚未完整实现。</li>
        </ul>
      </article>
      ${contentHtml}
    </main>
  </div>
  <script src="js/main.js"></script>
</body>
</html>`;

  const css = `/* 图书馆采选系统 PRD 样式 */
:root {
  --bg: #f5f6f8;
  --sidebar-bg: #fff;
  --border: #e2e8f0;
  --text: #1e293b;
  --muted: #64748b;
  --accent: #0ea5e9;
  --code-bg: #f1f5f9;
  --shadow: 0 1px 3px rgba(15, 23, 42, 0.08);
}

* { box-sizing: border-box; margin: 0; padding: 0; }

body {
  font-family: "Segoe UI", "PingFang SC", "Microsoft YaHei", sans-serif;
  background: var(--bg);
  color: var(--text);
  line-height: 1.6;
  font-size: 14px;
}

.layout {
  display: flex;
  min-height: 100vh;
}

.sidebar {
  width: 280px;
  min-width: 280px;
  background: var(--sidebar-bg);
  border-right: 1px solid var(--border);
  box-shadow: var(--shadow);
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  overflow-y: auto;
  z-index: 100;
}

.sidebar-header {
  padding: 20px 16px 12px;
  border-bottom: 1px solid var(--border);
  position: sticky;
  top: 0;
  background: var(--sidebar-bg);
  z-index: 1;
}

.sidebar-header h1 {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 8px;
}

.meta {
  font-size: 12px;
  color: var(--muted);
  line-height: 1.5;
}

.toc {
  padding: 12px 0 24px;
}

.toc-root, .toc-root ul {
  list-style: none;
}

.toc-module-label {
  display: block;
  padding: 8px 16px 4px;
  font-size: 12px;
  font-weight: 600;
  color: var(--muted);
  text-transform: none;
}

.toc-module-toggle {
  display: flex;
  align-items: center;
  gap: 6px;
  width: 100%;
  padding: 8px 16px 4px;
  border: none;
  background: transparent;
  cursor: pointer;
  text-align: left;
  font-size: 12px;
  font-weight: 600;
  color: var(--muted);
  transition: background 0.15s, color 0.15s;
}

.toc-module-toggle:hover {
  background: var(--code-bg);
  color: var(--text);
}

.toc-chevron {
  display: inline-block;
  width: 0;
  height: 0;
  border-top: 4px solid transparent;
  border-bottom: 4px solid transparent;
  border-left: 5px solid currentColor;
  transition: transform 0.2s ease;
  flex-shrink: 0;
}

.toc-module.collapsed .toc-chevron {
  transform: rotate(-90deg);
}

.toc-module > ul {
  overflow: hidden;
  transition: max-height 0.25s ease;
}

.toc-module.collapsed > ul {
  display: none;
}

.toc-group {
  list-style: none;
}

.toc-group-header {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 16px 4px 0;
  min-height: 28px;
}

.toc-group[data-depth="0"] > .toc-group-header { padding-left: 16px; }
.toc-group[data-depth="1"] > .toc-group-header { padding-left: 28px; }
.toc-group[data-depth="2"] > .toc-group-header { padding-left: 40px; }
.toc-group[data-depth="3"] > .toc-group-header { padding-left: 52px; }

.toc-group[data-depth="0"] > ul > li > a { padding-left: 36px; }
.toc-group[data-depth="1"] > ul > li > a { padding-left: 48px; }
.toc-group[data-depth="2"] > ul > li > a { padding-left: 60px; }
.toc-group[data-depth="3"] > ul > li > a { padding-left: 72px; }

.toc-group-toggle {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border: none;
  background: transparent;
  cursor: pointer;
  flex-shrink: 0;
  color: var(--muted);
}

.toc-group-toggle:hover { color: var(--text); }

.toc-group-label,
.toc-group-link {
  flex: 1;
  font-size: 12px;
  font-weight: 600;
  color: var(--text);
  text-decoration: none;
  line-height: 1.4;
}

.toc-group-link:hover { color: var(--accent); }

.toc-group.collapsed .toc-chevron {
  transform: rotate(-90deg);
}

.toc-group.collapsed > ul {
  display: none;
}

.toc a {
  display: block;
  padding: 5px 16px 5px 24px;
  color: var(--text);
  text-decoration: none;
  font-size: 13px;
  border-left: 3px solid transparent;
  transition: background 0.15s, border-color 0.15s;
}

.toc a:hover {
  background: var(--code-bg);
}

.toc a.active {
  background: #e0f2fe;
  border-left-color: var(--accent);
  color: #0369a1;
}

.toc-code {
  display: inline-block;
  min-width: 72px;
  font-family: Consolas, monospace;
  font-size: 11px;
  color: var(--muted);
  margin-right: 4px;
}

.content {
  margin-left: 280px;
  flex: 1;
  padding: 24px 32px 48px;
  max-width: 960px;
}

.doc-intro {
  background: #fff;
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 20px 24px;
  margin-bottom: 24px;
  box-shadow: var(--shadow);
}

.doc-intro h2 { font-size: 18px; margin-bottom: 12px; }
.doc-intro ul { margin: 12px 0 0 20px; }
.doc-intro li { margin-bottom: 6px; }

.prd-section {
  background: #fff;
  border: 1px solid var(--border);
  border-radius: 8px;
  margin-bottom: 20px;
  box-shadow: var(--shadow);
  scroll-margin-top: 16px;
}

.section-header {
  padding: 16px 20px;
  border-bottom: 1px solid var(--border);
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}

.feature-code {
  font-family: Consolas, monospace;
  font-size: 13px;
  font-weight: 700;
  color: #fff;
  background: linear-gradient(135deg, #0ea5e9, #0284c7);
  padding: 4px 10px;
  border-radius: 4px;
}

.section-header h2 {
  font-size: 17px;
  font-weight: 600;
  flex: 1;
}

.impl-status {
  font-size: 12px;
  color: var(--muted);
  background: var(--code-bg);
  padding: 2px 8px;
  border-radius: 4px;
}

.section-body {
  padding: 16px 20px 20px;
}

.section-body h3 {
  font-size: 14px;
  font-weight: 600;
  color: var(--muted);
  margin: 16px 0 8px;
  padding-bottom: 4px;
  border-bottom: 1px dashed var(--border);
}

.section-body h3:first-child { margin-top: 0; }

.spec-overview {
  background: #f0f9ff;
  border-left: 3px solid var(--accent);
  padding: 10px 14px;
  font-size: 13px;
  line-height: 1.7;
  border-radius: 0 4px 4px 0;
}

.spec-text {
  font-size: 13px;
  line-height: 1.7;
  color: var(--text);
}

.spec-list {
  margin: 4px 0 0 20px;
  font-size: 13px;
  line-height: 1.7;
}

.spec-list li { margin-bottom: 4px; }

.req-block {
  background: #fafafa;
  border-left: 3px solid #f472b6;
  padding: 10px 14px;
  margin-bottom: 10px;
  font-size: 13px;
  line-height: 1.7;
  white-space: pre-wrap;
}

.data-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 13px;
  margin-top: 4px;
}

.data-table th,
.data-table td {
  border: 1px solid var(--border);
  padding: 8px 10px;
  text-align: left;
}

.data-table th {
  background: var(--code-bg);
  font-weight: 600;
}

.frontend-ref code {
  display: block;
  background: var(--code-bg);
  padding: 10px 12px;
  border-radius: 4px;
  font-size: 12px;
  word-break: break-all;
}

.flow-box { margin-top: 8px; }
.flow-img {
  max-width: 100%;
  border: 1px solid var(--border);
  border-radius: 4px;
  margin-bottom: 12px;
}

.flow-steps {
  margin-left: 20px;
  color: var(--muted);
}

.muted { color: var(--muted); font-size: 13px; }

@media (max-width: 1024px) {
  .sidebar { width: 240px; min-width: 240px; }
  .content { margin-left: 240px; padding: 16px; }
}

@media print {
  .sidebar { display: none; }
  .content { margin-left: 0; max-width: none; }
  .prd-section { break-inside: avoid; }
}`;

  const js = `/**
 * PRD 目录树交互：多级折叠/展开、点击滚动定位、滚动高亮
 */
(function () {
  'use strict';

  const tocLinks = document.querySelectorAll('.toc a[data-target]');
  const sections = document.querySelectorAll('.prd-section');

  /**
   * 初始化一级模块折叠
   */
  function initModuleCollapse() {
    document.querySelectorAll('.toc-module').forEach(function (module) {
      const label = module.querySelector('.toc-module-label');
      const subList = module.querySelector(':scope > ul');
      if (!label || !subList) return;

      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'toc-module-toggle';
      btn.setAttribute('aria-expanded', 'true');

      const chevron = document.createElement('span');
      chevron.className = 'toc-chevron';
      chevron.setAttribute('aria-hidden', 'true');

      const text = document.createElement('span');
      text.className = 'toc-module-text';
      text.textContent = label.textContent;

      btn.appendChild(chevron);
      btn.appendChild(text);
      label.replaceWith(btn);

      btn.addEventListener('click', function () {
        const collapsed = module.classList.toggle('collapsed');
        btn.setAttribute('aria-expanded', collapsed ? 'false' : 'true');
      });
    });
  }

  /**
   * 初始化功能组折叠（02_01 > 02_01_01 等）
   */
  function initGroupCollapse() {
    document.querySelectorAll('.toc-group-toggle').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.stopPropagation();
        const group = btn.closest('.toc-group');
        if (!group) return;
        const collapsed = group.classList.toggle('collapsed');
        btn.setAttribute('aria-expanded', collapsed ? 'false' : 'true');
      });
    });
  }

  /**
   * 展开链接的所有上级目录
   * @param {HTMLElement|null} link
   */
  function expandAncestorsForLink(link) {
    if (!link) return;
    var el = link.closest('.toc-group, .toc-module');
    while (el) {
      if (el.classList.contains('collapsed')) {
        el.classList.remove('collapsed');
        var toggle = el.querySelector(':scope > .toc-group-header .toc-group-toggle')
          || el.querySelector(':scope > .toc-module-toggle');
        if (toggle) toggle.setAttribute('aria-expanded', 'true');
      }
      el = el.parentElement ? el.parentElement.closest('.toc-group, .toc-module') : null;
    }
  }

  function scrollToSection(targetId) {
    var el = document.getElementById(targetId);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function setActiveLink(activeLink) {
    tocLinks.forEach(function (l) { l.classList.remove('active'); });
    if (activeLink) {
      activeLink.classList.add('active');
      expandAncestorsForLink(activeLink);
    }
  }

  initModuleCollapse();
  initGroupCollapse();

  tocLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      var target = this.getAttribute('data-target');
      expandAncestorsForLink(this);
      scrollToSection(target);
      history.replaceState(null, '', '#' + target);
      setActiveLink(this);
    });
  });

  function updateActiveOnScroll() {
    var current = null;
    var scrollY = window.scrollY + 100;
    sections.forEach(function (sec) {
      if (sec.offsetTop <= scrollY) current = sec.id;
    });
    if (current) {
      var link = document.querySelector('.toc a[data-target="' + current + '"]');
      setActiveLink(link);
    }
  }

  window.addEventListener('scroll', updateActiveOnScroll, { passive: true });

  if (location.hash) {
    var id = location.hash.slice(1);
    setTimeout(function () {
      var link = document.querySelector('.toc a[data-target="' + id + '"]');
      expandAncestorsForLink(link);
      scrollToSection(id);
      setActiveLink(link);
    }, 100);
  }
})();`;

  fs.writeFileSync(path.join(OUTPUT_DIR, 'prd.html'), prdHtml, 'utf8');
  fs.writeFileSync(path.join(OUTPUT_DIR, 'css', 'style.css'), css, 'utf8');
  fs.writeFileSync(path.join(OUTPUT_DIR, 'js', 'main.js'), js, 'utf8');

  console.log(`PRD 已生成：${OUTPUT_DIR}`);
  console.log(`功能点数量：${sections.length}`);
}

main();
