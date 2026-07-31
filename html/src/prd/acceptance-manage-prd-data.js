import { prdBlock, prdSection, prdDot, prdTable } from '@/prd/prd-html-builder';

const item5751 = prdBlock('5.7.5.1', '筛选查询', `
<div id="overview">
${prdSection('', '功能描述')}
<p>提供多条件检索，帮助用户定位目标验收单。支持展开附加条件。</p>
${prdSection('', '页面要素')}
<ul>
<li><strong>默认显示</strong>：验收单号（acceptanceId）、验收单名称（name）、资源类型（resourceType）</li>
<li><strong>展开后追加</strong>：验收单状态（status）、供应商（supplier）、创建人（creator）、创建时间（createTime）</li>
<li>操作：「检索」过滤列表；「重置」清空条件并恢复全量</li>
</ul>
</div>
<div id="rules">
${prdSection('', '业务规则')}
<ul>
<li>资源类型（resourceType）选项：全部、纸质书、视听资料</li>
<li>验收单状态（status）选项：全部、未开始、进行中、已结束</li>
<li>供应商（supplier）选项：全部 + 列表中出现过的供应商</li>
<li>验收单号、验收单名称、创建人为文本包含匹配；创建时间按日期（yyyy-MM-dd）与创建时间（time）的日期部分精确匹配</li>
<li>各条件之间为 <strong>AND</strong> 关系；检索后分页回到第 1 页</li>
</ul>
</div>
<div id="exception">
${prdSection('', '异常处理')}
<ul>
<li>无匹配时表格为空，分页显示 0 条</li>
</ul>
</div>
`);

const item5752 = prdBlock('5.7.5.2', '列表表格与行操作', `
<div id="overview">
${prdSection('', '功能描述')}
<p>以表格展示验收单列表，支持多选、分页、设为当前工作验收单，并按验收单状态（status）展示行操作。</p>
${prdSection('', '表格列')}
<p>复选框、序号（no）、验收单号（acceptanceId）、设为验收单（defaultAccept）、验收单名称（name）、资源类型（type）、语种（lang）、采选方式（method）、供应商（supplier）、发货单号（shipNo）、验收单状态（status）、收/换/退书数（counts）、验收备注（remark）、分配条码（barcode）、创建时间（time）、创建人（creator）、结算状态（settlement）、操作</p>
</div>
<div id="interaction">
${prdSection('', '交互逻辑')}
<ul>
<li>验收单号：蓝色链接，点击进入验收单详情（见 5.6）</li>
<li>设为验收单：单选；已结束（finished）行不可选。选中后将该单设为当前工作验收单（静默，无提示）</li>
<li>验收单状态色：${prdDot('#6b7280')}未开始、${prdDot('#0284c7')}进行中、${prdDot('#4b5563')}已结束</li>
<li>结算状态色：${prdDot('#6b7280')}未申请、${prdDot('#d97706')}待结算、${prdDot('#059669')}已结算</li>
<li>验收备注：有内容时蓝色「查看」悬停全文；无内容时灰色「查看」不可点</li>
<li>分页：默认 10 条/页；工具栏右侧展示已选条数</li>
</ul>
${prdSection('', '操作列规则')}
${prdTable(['验收单状态', '可用操作'], [
  ['未开始（notStarted）', '编辑、删除'],
  ['进行中（inProgress）', '编辑、结束验收'],
  ['已结束（finished）', '—']
])}
<ul>
<li>删除：确认文案「确定删除验收单「名称」？」；若该单为当前工作验收单则清除当前工作验收单</li>
<li>结束验收：确认后状态改为已结束；若为当前工作验收单则取消设为验收单并清除当前工作验收单</li>
</ul>
</div>
`);

const item5753 = prdBlock('5.7.5.3', '新增 / 编辑验收单弹窗', `
<div id="overview">
${prdSection('', '功能描述')}
<p>工具栏「新增验收单」或行内「编辑」打开表单弹窗，维护验收单头信息。</p>
${prdSection('', '表单字段')}
<ul>
<li><span style="color:#ef4444">*</span> 验收单名称（name）、资源类型（resourceType）、语种（language）、采选方式（method）、供应商（supplier）</li>
<li>发货单号（shipNo）、验收备注（remark）</li>
<li>勾选：设为当前工作验收单（setCurrent）；是否支持自动分配条码号（autoBarcode）</li>
<li>若开启自动分配条码：<span style="color:#ef4444">*</span> 条码号类型（barcodeType）、初始条码号（initialBarcode）</li>
</ul>
</div>
<div id="rules">
${prdSection('', '业务规则')}
<ul>
<li>新增默认勾选「设为当前工作验收单」「是否支持自动分配条码号」</li>
<li>新增条码号类型可选：小语种成人图书、地方文献、全部语种；编辑可选另含「成人视听」</li>
<li>若验收单状态为<strong>进行中</strong>，则资源类型、语种、采选方式、供应商、自动分配条码相关字段只读锁定；验收单名称、发货单号、备注、设为当前工作验收单仍可改</li>
<li>提交前校验必填；缺项提示「请填写{字段}」；开启自动条码但未填类型/初始号时提示「请填写条码号类型和初始条码号」</li>
<li>新增成功：生成验收单号（acceptanceId），状态为未开始，结算状态为未申请，收/换/退为 0/0/0；提示「验收单已创建」</li>
<li>编辑成功提示「验收单已保存」；勾选设为当前则写入当前工作验收单，取消勾选且原为当前则清除</li>
</ul>
</div>
`);

const item5754 = prdBlock('5.7.5.4', '预验收向导', `
<div id="overview">
${prdSection('', '功能描述')}
<p>工具栏「预验收」打开三步向导：上传文件 → 字段映射 → 数据校验。仅核对发货单与可收货订单行差异，<strong>不执行收货</strong>。</p>
${prdSection('', '入口前置')}
<ul>
<li>须当前登录馆员已关联订户；否则提示「您没有关联订户，无操作权限」，不打开向导</li>
<li>须勾选<strong>恰好 1 条</strong>验收单状态为未开始或进行中的验收单；否则按钮禁用或提示「请先在列表中勾选一条未开始或进行中的验收单」</li>
<li>打开前将该验收单设为当前工作验收单</li>
</ul>
${prdSection('', '步骤')}
<ol>
<li>上传文件（xls / xlsx）</li>
<li>字段映射（必填五字段 + 可选书目字段；支持映射模板）</li>
<li>数据校验（展示成功/失败条数；失败可下载校验结果）</li>
</ol>
</div>
<div id="mapping">
${prdSection('', '字段映射')}
<ul>
<li>提示文案：「将文件列映射到系统标准字段（标*字段为必填）」</li>
<li><strong>必填</strong>：订单行号（orderLine）、码洋（listPrice）、实洋（netPrice）、收货套数（receiveQty）、套内册数（volCount）</li>
<li>下拉选项扁平展示：不映射 + 必填字段 + 当前资源类型可选字段（无「通用（必填）」「纸质书」「视听资料」分组标签）</li>
<li><strong>纸质书可选</strong>（示例）：正题名/题名（title）、ISBN（isbn）、副题名、作者/责任者、出版社、出版年、定价/价格、币种、主题词、备注等（完整以页面字段池为准）</li>
<li><strong>视听资料可选</strong>（示例）：ISBN、ISRC、题名、载体、著者、厂牌、商品条码、目录号、备注等（完整以页面字段池为准）</li>
<li>映射模板与<strong>批验收共用</strong>同一套已保存模板；应用模板时自动清除当前资源类型不允许的映射值</li>
<li>未映射齐五字段不可进入下一步，提示「请映射「{字段}」字段」</li>
</ul>
</div>
<div id="validate">
${prdSection('', '校验规则（预验收）')}
<ul>
<li>可收货订单行范围：当前馆员关联订户下，且与所选验收单资源类型、语种、采选方式、供应商一致的可匹配订单行</li>
<li>每一行尽量收集全部适用失败类型（同行多种类型用「；」拼接）</li>
<li><strong>数据错误</strong>：订单行号为空，或码洋/实洋/收货套数/套内册数无法解析 → 失败原因「数据解析失败」</li>
<li><strong>验收单不匹配</strong>：订单行存在，但与所选验收单的资源类型（type）、语种（lang）、采选方式（method）、供应商（supplier）不完全一致 → 失败原因分别列出不一致项（如「资源类型不一致（验收单 纸质书/订单行 视听资料）」）。语种按中文/外文分档比对（西语与英文同属外文）</li>
<li><strong>未匹配</strong>：无对应可收货订单行 → 「无对应可收货订单行」</li>
<li><strong>套数非法</strong>：收货套数 ≤ 0 → 「套数 ≤ 0」；收货套数 ＞ 待收套数 → 「套数大于待收」</li>
<li><strong>不一致</strong>：已映射字段（除订单行号）与订单行比对不等则记入；含 0＜收货套数＜待收。若该行已因收货套数记「套数非法」，则收货套数不再重复记不一致</li>
<li>金额类按两位小数规范化后比对；数量类按数值比对</li>
<li>页面汇总：有任一失败类型计失败，无失败类型计成功（不拆分失败类型汇总）</li>
</ul>
${prdSection('', '下载校验结果')}
<p>导出 Excel（.xls）= <strong>原发货单全部列（原顺序）</strong> + 校验结果 + 失败原因。多种失败类型与原因均以「；」连接。</p>
</div>
<div id="exception">
${prdSection('', '异常处理')}
<ul>
<li>非 xls/xlsx：提示「请上传 xls/xlsx 格式文件」</li>
<li>无关联订户（解析阶段）：「您没有关联订户，无法查看数据」</li>
<li>关联订户下无可收货订单行：提示无法演示预验收</li>
</ul>
</div>
`);

const item5755 = prdBlock('5.7.5.5', '批验收向导', `
<div id="overview">
${prdSection('', '功能描述')}
<p>工具栏「批验收」打开四步向导：上传 → 字段映射 → 数据校验 → 确认验收。校验通过后按<strong>发货单已映射值</strong>写入收货；不因书目/金额不一致阻断校验。</p>
${prdSection('', '入口前置')}
<ul>
<li>须已关联订户；否则「您没有关联订户，无操作权限」</li>
<li>须勾选<strong>恰好 1 条</strong>验收单状态为未开始或进行中的验收单；否则按钮禁用或提示「请先在列表中勾选一条未开始或进行中的验收单」</li>
<li>打开前将该验收单设为当前工作验收单</li>
</ul>
${prdSection('', '步骤')}
<ol>
<li>上传文件（xls / xlsx）；本步<strong>无</strong>导入模板 / 下载模板</li>
<li>字段映射（规则与预验收相同，映射模板共用）</li>
<li>数据校验：须<strong>全部行通过</strong>才可进入确认；提示「全部校验成功，才可收货」</li>
<li>确认验收：展示总种数 / 总套数 / 总册数 / 总码洋 / 总实洋后确认写入</li>
</ol>
</div>
<div id="validate">
${prdSection('', '校验规则（批验收）')}
<ul>
<li>数据错误、未匹配、验收单不匹配、套数非法规则同预验收（≤0 或 ＞待收 → 套数非法）</li>
<li><strong>不做</strong>已映射字段与订单行的一致性比对</li>
<li>若 0＜收货套数≤待收且已匹配，则该行通过（允许部分收货）</li>
<li>下载校验结果格式同预验收（原列 + 校验结果 + 失败原因）</li>
</ul>
</div>
<div id="confirm">
${prdSection('', '确认验收')}
<ul>
<li>汇总按校验通过行、发货单映射值计算总种数、总套数、总册数、总码洋、总实洋</li>
<li>确认时验收单须仍为未开始/进行中；否则整单失败，提示「验收失败，请重新验收或联系管理员」</li>
<li>逐行：发货套数 ≤ <strong>实时</strong>待收套数则可写入成功；超出或套数非法则该行失败。允许部分成功</li>
<li>成功行：若验收单开启自动分配条码，展示已分配条码区间；有空条码时提示「注意：本次收货有空条码」</li>
<li>结果文案：「已成功验收 X 条数据，失败 X 条数据。」；失败行可「下载异常数据」（订单行号、失败原因）</li>
<li>若有成功写入且原状态为未开始，则验收单状态变为进行中</li>
</ul>
</div>
`);

const item5756 = prdBlock('5.7.5.6', '申请结算', `
<div id="overview">
${prdSection('', '功能描述')}
<p>工具栏「申请结算」对勾选验收单提交结算申请。</p>
</div>
<div id="interaction">
${prdSection('', '交互逻辑')}
<ul>
<li>未勾选时提示「请先勾选验收单」</li>
<li>打开确认弹窗：「确认为所选 N 条验收单申请结算？」</li>
<li>确定后：所选行中结算状态为未申请（notApplied）的改为待结算（pending）；提示「已为 N 条验收单提交结算申请」</li>
</ul>
</div>
`);

const item5757 = prdBlock('5.7.5.7', '导出列表与导出配置', `
<div id="overview">
${prdSection('', '功能描述')}
<p>工具栏「导出列表」下拉提供「导出配置」「导出清单」。</p>
</div>
<div id="rules">
${prdSection('', '业务规则')}
<ul>
<li>导出配置：弹窗勾选列表导出字段；打开时基于配置字段集；确定后提示「导出配置已保存（N 个字段）」</li>
<li>可配置字段：验收单号、验收单名称、资源类型、语种、采选方式、供应商、发货单号、验收单状态、收/换/退书数、验收备注、分配条码、创建时间、创建人、结算状态</li>
<li>导出清单：原型阶段提示演示文案</li>
</ul>
</div>
`);

export const acceptanceManagePrdData = {
  title: '验收单管理',
  items: [
    { id: '5.7.5.1', title: '筛选查询', htmlContent: item5751 },
    { id: '5.7.5.2', title: '列表表格与行操作', htmlContent: item5752 },
    { id: '5.7.5.3', title: '新增 / 编辑验收单弹窗', htmlContent: item5753 },
    { id: '5.7.5.4', title: '预验收向导', htmlContent: item5754 },
    { id: '5.7.5.5', title: '批验收向导', htmlContent: item5755 },
    { id: '5.7.5.6', title: '申请结算', htmlContent: item5756 },
    { id: '5.7.5.7', title: '导出列表与导出配置', htmlContent: item5757 }
  ]
};

export function registerAcceptanceManagePrdData() {
  window.PRD_DATA_MAP = window.PRD_DATA_MAP || {};
  window.PRD_DATA_MAP['acceptance-manage'] = acceptanceManagePrdData;
}
