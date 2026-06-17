/**
 * Axure 原型转标准前端页面生成脚本
 * 用法: node scripts/generate-pages.js
 */
const fs = require('fs');
const path = require('path');

const PROTOTYPE_DIR = path.join(__dirname, '../prototype');
const OUTPUT_DIR = path.join(__dirname, '../html/pages');

/** 跳过的原型文件（流程图、业务规则、废弃页） */
const SKIP_FILES = new Set([
  '名词定义及编号命名规则.html',
  '资源类型和采选方式_部分确认_.html',
  '图书_视听_订单、订单行状态流转图_1201更新_.html',
  '图书_视听_验收流程及验收单状态流转图_0723更新_.html',
  '图书_视听_催缺单状态流转图_1022更新_.html',
  '图书_视听_结算单生成流程.html',
  '连续出版物_订单、订单行状态流转图_1010更新_.html',
  '01_01_03_导入订单_0303更新___废弃_.html',
  '01_01_非连续出版物订单-订单列表_0511更新_.html',
  '01_01_01_订单行列表_0511更新_.html',
  '02_02_逐条收货_纸质书__1201更新_.html',
  '02_04_换货管理_1201更新_.html',
  '02_05_退货管理_1201更新_.html',
  '02_06_催缺管理_0128更新_.html',
  'index.html', 'start.html', 'start_c_1.html', 'start_with_pages.html'
]);

/** 需求备注关键词过滤 */
const NOTE_KEYWORDS = ['数据隔离', '检索区', '同步数据', '鼠标悬浮', '提示词', '精确匹配', '默认为空'];

/**
 * 清理页面名称，去掉括号及更新标记
 * @param {string} raw - 原始名称
 * @returns {string}
 */
function cleanPageName(raw) {
  return raw
    .replace(/[（(][^）)]*[）)]/g, '')
    .replace(/_\d+更新_?/g, '')
    .replace(/_\d{4}$/g, '')
    .replace(/_+/g, '_')
    .replace(/_$/, '')
    .replace(/-$/, '')
    .trim();
}

/**
 * 从原型文件名生成输出文件名
 * @param {string} filename - 原型文件名
 * @returns {string}
 */
function toOutputFilename(filename) {
  const base = filename.replace('.html', '');
  const cleaned = cleanPageName(base);
  return cleaned + '.html';
}

/**
 * 判断是否为弹窗/表单类子页面
 * @param {string} name - 页面名
 * @returns {boolean}
 */
function isModalPage(name) {
  const modalKeywords = ['新建', '新增', '编辑', '删除', '停用', '查看', '导入', '导出配置', '发订', '撤订', '撤销', '复制', '关联', '取消关联', '结算详情', '验收详情', '催缺详情', '生成催缺单', '更换供应商', '退货', '换货', '收货', '添加字段', '编辑字段', '删除字段', '查重规则', '批量导入', '汇率更新', '弹窗', '结束验收单', '申请结算', '重启验收', '撤销操作', '撤销收货', '撤销换货', '撤销退货', '撤销申请结算', '结算清单'];
  return modalKeywords.some(k => name.includes(k));
}

/**
 * 提取 HTML 中的可见文本
 * @param {string} html - 页面 HTML
 * @returns {string[]}
 */
function extractTexts(html) {
  const texts = [];
  const spanRegex = /<span[^>]*>([^<]+)<\/span>/gi;
  let match;
  while ((match = spanRegex.exec(html)) !== null) {
    let text = match[1]
      .replace(/&nbsp;/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
    if (!text || text.length > 60) continue;
    if (NOTE_KEYWORDS.some(k => text.includes(k))) continue;
    if (/^[\d\-\s:~～]+$/.test(text) && text.length > 15) continue;
    if (!texts.includes(text)) texts.push(text);
  }
  return texts;
}

/**
 * 提取按钮文本
 * @param {string} html
 * @returns {string[]}
 */
function extractButtons(html) {
  const buttons = [];
  const regex = /primary_button[\s\S]*?<span[^>]*>([^<]+)<\/span>/gi;
  let match;
  while ((match = regex.exec(html)) !== null) {
    const text = match[1].trim();
    if (text && !buttons.includes(text) && text.length < 20) buttons.push(text);
  }
  return buttons;
}

/**
 * 提取表单标签（带冒号的文本）
 * @param {string} html
 * @returns {string[]}
 */
function extractLabels(html) {
  const labels = [];
  const regex = /<span[^>]*>([^<：]+)[：:]<\/span>/gi;
  let match;
  while ((match = regex.exec(html)) !== null) {
    const label = match[1].trim();
    if (label && label.length < 15 && !labels.includes(label)) labels.push(label);
  }
  return labels;
}

/**
 * 提取表格列头
 * @param {string} html
 * @returns {string[]}
 */
function extractTableHeaders(html) {
  const headers = [];
  const knownHeaders = ['序号', '订户', '馆址', '订单号', '采选方式', '资源类型', '语种', '供应商', '订单时间', '发订人', '发订时间', '订单状态', '结算状态', '操作', '名称', '编码', '状态', '创建时间', '更新时间', '备注', '验收单号', '结算单号', '金额', '币种', '汇率', '订户名称', '馆员', '电话', '邮箱', '地址', '分馆', '馆藏地', '模板名称', 'MARC类型', '条码号', '原因', '类型', '配置名称', '催缺单号', '退货单号', '换货单号'];
  const texts = extractTexts(html);
  knownHeaders.forEach(h => {
    if (texts.includes(h) && !headers.includes(h)) headers.push(h);
  });
  return headers;
}

/**
 * 提取下拉选项
 * @param {string} html
 * @returns {string[]}
 */
function extractSelectOptions(html) {
  const options = [];
  const regex = /<option[^>]*value="([^"]*)"[^>]*>/gi;
  let match;
  while ((match = regex.exec(html)) !== null) {
    const val = match[1].trim();
    if (val && val.length < 20 && !options.includes(val)) options.push(val);
  }
  return options;
}

/**
 * 获取页面显示标题
 * @param {string} title - document title
 * @returns {string}
 */
function getDisplayTitle(title) {
  const cleaned = title.replace(/^[\d_\-]+ /, '');
  return cleanPageName(cleaned) || '页面';
}

/**
 * 获取侧边栏激活页
 * @param {string} filename
 * @returns {string}
 */
function getActivePage(filename) {
  const prefix = filename.match(/^(\d+_\d+)/);
  if (!prefix) return '';
  const mainMap = {
    '01_01': '01_01_非连续出版物订单-订单列表.html',
    '02_01': '02_01_验收单管理.html',
    '02_02': '02_02_逐条收货_纸质书.html',
    '02_03': '02_03_批量验收.html',
    '02_04': '02_04_换货管理.html',
    '02_05': '02_05_退货管理.html',
    '02_06': '02_06_催缺管理.html',
    '03_01': '03_01_待结算.html',
    '03_02': '03_02_已结算.html',
    '03_03': '03_03_结算失败处理.html',
    '04_01': '04_01订户列表.html',
    '04_02': '04_02_馆员列表.html',
    '05_01': '05_01_货币信息.html',
    '07_01': '07_01_退换撤订原因参数.html',
    '07_02': '07_02_催缺配置.html',
    '07_03': '07_03_条码号供应商代码.html',
    '07_04': '07_04_订单与marc类型映射关系.html',
    '07_05': '07_05_订单导入模板配置.html',
    '07_06': '07_06_馆址管理.html'
  };
  const key = prefix[1];
  if (mainMap[key] && toOutputFilename(filename.replace('.html', '') + '_.html').startsWith(key)) {
    const outName = toOutputFilename(filename);
    if (outName.match(new RegExp(`^${key}[^_]|^${key}$`)) || outName === mainMap[key]) {
      return outName.includes('_') && outName.split('_').length <= 3 ? outName : mainMap[key];
    }
  }
  return mainMap[key] || '';
}

/**
 * 生成检索表单 HTML
 * @param {string[]} labels
 * @returns {string}
 */
function renderSearchForm(labels) {
  const searchLabels = labels.slice(0, 6);
  if (searchLabels.length === 0) return '';
  const fields = searchLabels.map((label, i) => `
          <div class="flex items-center gap-2 ${i >= 3 ? 'search-extra-field hidden' : ''}">
            <label class="text-sm text-gray-600 whitespace-nowrap w-24 text-right">${label}</label>
            <input type="text" placeholder="请输入"
              class="flex-1 border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-sky-500">
          </div>`).join('');

  return `
    <div class="bg-white rounded border border-gray-200 p-4 mb-4">
      <form id="search-form">
        <div class="grid grid-cols-3 gap-4">
          ${fields}
          <div class="flex items-center gap-2 justify-end col-span-3">
            <button type="submit" class="px-5 py-1.5 bg-sky-600 text-white text-sm rounded hover:bg-sky-700">检索</button>
            <button type="button" onclick="Common.resetForm('search-form')"
              class="px-5 py-1.5 border border-gray-300 text-gray-600 text-sm rounded hover:bg-gray-50">重置</button>
          </div>
        </div>
      </form>
    </div>`;
}

/**
 * 生成操作按钮行
 * @param {string[]} buttons
 * @returns {string}
 */
function renderActionButtons(buttons) {
  const actionBtns = buttons.filter(b => !['检索', '重置', '确定', '取消', '关闭', '保存', '提交'].includes(b));
  if (actionBtns.length === 0) return '';
  const primary = ['新建', '新增', '添加', '创建', '导入', '批量'];
  return `
    <div class="flex items-center gap-2 mb-4 flex-wrap">
      ${actionBtns.slice(0, 6).map(btn => {
        const isPrimary = primary.some(p => btn.includes(p));
        const isWarning = btn.includes('撤') || btn.includes('删') || btn.includes('停');
        const cls = isPrimary
          ? 'bg-sky-600 text-white hover:bg-sky-700'
          : isWarning
            ? 'bg-orange-500 text-white hover:bg-orange-600'
            : 'border border-gray-300 text-gray-600 hover:bg-gray-50';
        return `<button type="button" class="px-4 py-1.5 text-sm rounded ${cls}">${btn}</button>`;
      }).join('\n      ')}
    </div>`;
}

/**
 * 生成数据表格
 * @param {string[]} headers
 * @returns {string}
 */
function renderTable(headers) {
  if (headers.length === 0) return '';
  const cols = headers.map(h => `<th class="px-3 py-2.5 text-left text-gray-600 font-medium whitespace-nowrap">${h}</th>`).join('\n              ');
  const sampleRow = headers.map((h, i) => {
    if (h === '序号') return '<td class="px-3 py-2 text-gray-600">1</td>';
    if (h === '操作') return '<td class="px-3 py-2"><a href="#" class="text-sky-600 hover:underline mr-2">编辑</a><a href="#" class="text-sky-600 hover:underline">查看</a></td>';
    if (h.includes('号') || h.includes('名称')) return `<td class="px-3 py-2"><a href="#" class="text-sky-600 hover:underline">示例${h}</a></td>`;
    if (h === '状态') return '<td class="px-3 py-2"><span class="text-green-600">正常</span></td>';
    return `<td class="px-3 py-2 text-gray-600">—</td>`;
  }).join('\n              ');

  return `
    <div class="bg-white rounded border border-gray-200">
      <div class="overflow-x-auto table-scroll">
        <table class="w-full text-sm">
          <thead class="bg-gray-50 border-b border-gray-200">
            <tr>
              <th class="px-3 py-2.5 text-left w-10"><input type="checkbox" class="rounded"></th>
              ${cols}
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-100">
            <tr class="hover:bg-gray-50">
              <td class="px-3 py-2"><input type="checkbox" class="rounded"></td>
              ${sampleRow}
            </tr>
            <tr class="hover:bg-gray-50">
              <td class="px-3 py-2"><input type="checkbox" class="rounded"></td>
              ${headers.map((h, i) => {
                if (h === '序号') return '<td class="px-3 py-2 text-gray-600">2</td>';
                if (h === '操作') return '<td class="px-3 py-2"><a href="#" class="text-sky-600 hover:underline mr-2">编辑</a><a href="#" class="text-sky-600 hover:underline">查看</a></td>';
                return '<td class="px-3 py-2 text-gray-600">—</td>';
              }).join('\n              ')}
            </tr>
          </tbody>
        </table>
      </div>
      <div class="flex items-center justify-between px-4 py-3 border-t border-gray-200">
        <span class="text-sm text-gray-500">共 0 条记录</span>
        <div class="flex items-center gap-2">
          <button type="button" class="px-3 py-1 border border-gray-300 rounded text-sm text-gray-400" disabled>上一页</button>
          <button type="button" class="px-3 py-1 bg-sky-600 text-white rounded text-sm">1</button>
          <button type="button" class="px-3 py-1 border border-gray-300 rounded text-sm text-gray-600">下一页</button>
          <select class="border border-gray-300 rounded px-2 py-1 text-sm"><option>50 条/页</option></select>
        </div>
      </div>
    </div>`;
}

/**
 * 生成表单弹窗内容
 * @param {string} title
 * @param {string[]} labels
 * @param {string[]} buttons
 * @returns {string}
 */
function renderFormContent(title, labels, buttons) {
  const formLabels = labels.length > 0 ? labels : ['名称', '编码', '备注'];
  const fields = formLabels.map(label => `
        <div class="flex items-start gap-3">
          <label class="text-sm text-gray-600 w-28 text-right pt-2 shrink-0">${label}</label>
          <input type="text" placeholder="请输入"
            class="flex-1 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-sky-500">
        </div>`).join('');

  const footerBtns = buttons.filter(b => ['确定', '取消', '保存', '提交', '关闭'].includes(b));
  const btns = footerBtns.length > 0 ? footerBtns : ['确定', '取消'];

  return `
    <div class="max-w-2xl mx-auto mt-8">
      <div class="bg-white rounded-lg border border-gray-200 shadow-lg">
        <div class="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <h2 class="text-base font-medium text-gray-800">${title}</h2>
          <button type="button" data-modal-close class="text-gray-400 hover:text-gray-600 text-xl leading-none">&times;</button>
        </div>
        <div class="px-6 py-5 space-y-4">
          ${fields}
        </div>
        <div class="flex justify-end gap-3 px-6 py-4 border-t border-gray-200 bg-gray-50 rounded-b-lg">
          ${btns.map((btn, i) => {
            const isPrimary = ['确定', '保存', '提交'].includes(btn);
            return `<button type="button" class="px-5 py-1.5 text-sm rounded ${isPrimary ? 'bg-sky-600 text-white hover:bg-sky-700' : 'border border-gray-300 text-gray-600 hover:bg-gray-50'}">${btn}</button>`;
          }).join('\n          ')}
        </div>
      </div>
    </div>`;
}

/**
 * 生成完整 HTML 页面
 * @param {Object} pageData
 * @returns {string}
 */
function generatePageHTML(pageData) {
  const { title, displayTitle, outputFile, isModal, labels, buttons, headers } = pageData;
  const activePage = getActivePage(outputFile) || outputFile;

  let content;
  if (isModal) {
    content = renderFormContent(displayTitle, labels, buttons);
  } else if (headers.length >= 3) {
    content = renderSearchForm(labels) + renderActionButtons(buttons) + renderTable(headers);
  } else if (labels.length >= 2) {
    content = renderFormContent(displayTitle, labels, buttons);
  } else {
    content = `
    <div class="bg-white rounded border border-gray-200 p-6">
      <h2 class="text-lg font-medium text-gray-800 mb-4">${displayTitle}</h2>
      ${renderActionButtons(buttons)}
      <p class="text-sm text-gray-500">页面内容区域</p>
    </div>`;
  }

  if (isModal) {
    return `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${displayTitle}</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="stylesheet" href="../css/global.css">
</head>
<body class="min-h-screen bg-gray-100" data-is-modal="true">
  ${content}
  <script src="../js/common.js"></script>
</body>
</html>`;
  }

  return `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${displayTitle}</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="stylesheet" href="../css/global.css">
</head>
<body class="h-screen flex flex-col overflow-hidden"
  data-page-title="${displayTitle}"
  data-active-page="${activePage}">

  <div id="app-root" class="flex flex-col h-full"></div>
  <div id="main-content" class="hidden">${content}</div>

  <script src="../js/config.js"></script>
  <script src="../js/layout.js"></script>
  <script src="../js/common.js"></script>
</body>
</html>`;
}

/**
 * 处理单个原型文件
 * @param {string} filename
 */
function processFile(filename) {
  if (SKIP_FILES.has(filename)) return null;

  const inputPath = path.join(PROTOTYPE_DIR, filename);
  const html = fs.readFileSync(inputPath, 'utf-8');

  const titleMatch = html.match(/<title>([^<]+)<\/title>/);
  const title = titleMatch ? titleMatch[1] : filename;
  const displayTitle = getDisplayTitle(title);
  const outputFile = toOutputFilename(filename);
  const isModal = isModalPage(displayTitle);

  const labels = extractLabels(html);
  const buttons = extractButtons(html);
  const headers = extractTableHeaders(html);

  return {
    title,
    displayTitle,
    outputFile,
    isModal,
    labels,
    buttons,
    headers,
    html: generatePageHTML({ title, displayTitle, outputFile, isModal, labels, buttons, headers })
  };
}

/** 主流程 */
function main() {
  if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  const files = fs.readdirSync(PROTOTYPE_DIR).filter(f => f.endsWith('.html'));
  let generated = 0;
  const index = [];

  files.forEach(filename => {
    const result = processFile(filename);
    if (!result) return;

    const outPath = path.join(OUTPUT_DIR, result.outputFile);
    fs.writeFileSync(outPath, result.html, 'utf-8');
    generated++;
    index.push({ prototype: filename, output: result.outputFile, title: result.displayTitle });
    console.log(`✓ ${result.outputFile}`);
  });

  fs.writeFileSync(
    path.join(__dirname, '../html/pages/_index.json'),
    JSON.stringify(index, null, 2),
    'utf-8'
  );

  console.log(`\n共生成 ${generated} 个页面`);
}

main();
