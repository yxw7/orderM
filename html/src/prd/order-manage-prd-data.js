import { prdBlock, prdSection, prdDot, prdTable } from '@/prd/prd-html-builder';

const item5251 = prdBlock('5.2.5.1', '筛选查询', `
<div id="overview">
${prdSection('', '功能描述')}
<p>提供多维度组合检索条件，帮助用户快速定位目标订单。支持展开/收起：默认显示首行 3 列检索项，展开后显示全部条件。</p>
${prdSection('', '页面要素')}
<ul>
<li><strong>默认显示</strong>：订单号（文本）、采选方式（下拉）、供应商（下拉）</li>
<li><strong>展开后追加</strong>：发订人、订单状态、结算状态、订户、语种、发订时间（日期范围）、预算名称、资源类型、馆址</li>
<li><strong>操作按钮</strong>：「检索」触发过滤；「重置」清空条件并恢复全量列表</li>
</ul>
</div>
<div id="rules">
${prdSection('', '业务规则')}
<ul>
<li>订单状态下拉选项：全部、待导入、待发订、已发订、处理中、已撤订、已完成</li>
<li>结算状态下拉：全部、未结算、已结算</li>
<li>语种下拉：全部、中文、外文；资源类型：全部、纸质书、视听资料</li>
<li>发订时间范围：左闭右闭，按日期（yyyy-MM-dd）比对订单 issueTime 字段</li>
<li>不同字段之间为 <strong>AND</strong> 关系；文本字段支持模糊包含匹配</li>
<li>检索后分页重置为第 1 页</li>
</ul>
</div>
<div id="exception">
${prdSection('', '异常处理')}
<ul>
<li>无匹配数据时表格展示空列表，分页显示 0 条</li>
</ul>
</div>`);

const item5252 = prdBlock('5.2.5.2', '数据表格与行操作', `
<div id="overview">
${prdSection('', '功能描述')}
<p>以表格形式展示订单列表，支持分页、行勾选及按订单状态动态显示操作按钮。</p>
${prdSection('', '表格列')}
<p>序号、订户、馆址、订单号、采选方式、资源类型、语种、供应商、订单时间、发订人、发订时间、发订册数、发订种数、预算名称、码洋、折扣、实洋、发订备注、订单状态、结算状态、操作（固定列）</p>
${prdSection('', '交互逻辑')}
<ul>
<li>订单号列：蓝色文字链，点击切换至「订单行列表」页签并带入订单号筛选</li>
<li>发订备注：有内容时显示蓝色「查看」（悬浮 title 展示全文）；无内容时灰色「查看」</li>
<li>订单状态带颜色标识：${prdDot('#7c3aed')}待导入、${prdDot('#d97706')}待发订、${prdDot('#16a34a')}已发订、${prdDot('#2563eb')}处理中、${prdDot('#6b7280')}已撤订</li>
<li>分页：默认 10 条/页，底部显示总条数与页码切换</li>
</ul>
</div>
<div id="rules">
${prdSection('', '操作按钮规则（按订单状态）')}
${prdTable(['订单状态', '可用操作'], [
  ['待发订 pending', '发订、删除'],
  ['待导入 pendingImport', '导入订单'],
  ['已发订 ordered', '编辑、导出订单、撤订'],
  ['处理中 processing', '导出订单'],
  ['已撤订 cancelled', '导出订单、删除']
])}
</div>
<div id="exception">
${prdSection('', '异常处理')}
<ul>
<li>导出订单（单行）：原型阶段 alert 提示演示</li>
</ul>
</div>`);

const item5253 = prdBlock('5.2.5.3', '新建订单弹窗', `
<div id="overview">
${prdSection('', '功能描述')}
<p>通过工具栏「新建订单」按钮打开模态弹窗，填写订单头信息后创建新订单，初始状态为<strong>待导入</strong>。</p>
${prdSection('', '表单字段')}
<ul>
<li><span style="color:#ef4444">*</span> 订户、资源类型、采选方式、预算名称、语种、供应商、馆址（均为下拉，必填）</li>
<li>折扣（文本，非必填）</li>
</ul>
</div>
<div id="rules">
${prdSection('', '业务规则')}
<ul>
<li>提交前校验全部必填项，未填时在字段下方显示红色提示并 alert 首条错误</li>
<li>新建成功后订单号自动生成，格式 PG001B{yyyyMMdd}{3位流水}</li>
<li>新建订单默认：发订册数/种数 0，码洋/实洋 0.00，结算状态「未结算」，发订时间为空</li>
<li>馆址选项来源于系统馆址配置（仅启用状态）</li>
</ul>
</div>
<div id="exception">
${prdSection('', '异常处理')}
<ul>
<li>必填项未填：阻止提交，提示「请选择{字段名}」</li>
</ul>
</div>`);

const item5254 = prdBlock('5.2.5.4', '编辑订单弹窗', `
<div id="overview">
${prdSection('', '功能描述')}
<p>已发订订单可通过操作列「编辑」打开弹窗，修改预算名称、供应商、发订备注。</p>
</div>
<div id="rules">
${prdSection('', '业务规则')}
<ul>
<li>预算名称、供应商为必填下拉</li>
<li>发订备注为多行文本，非必填</li>
<li>保存后更新列表对应行（原型 alert「订单已保存」）</li>
</ul>
</div>
<div id="exception">
${prdSection('', '异常处理')}
<ul>
<li>预算或供应商未选：alert 提示对应字段</li>
</ul>
</div>`);

const item5255 = prdBlock('5.2.5.5', '发订', `
<div id="overview">
${prdSection('', '功能描述')}
<p>待发订订单通过操作列「发订」打开发订备注弹窗，确认后将订单及下属待发订订单行置为已发订。</p>
</div>
<div id="rules">
${prdSection('', '业务规则')}
<ul>
<li>仅 <strong>待发订（pending）</strong> 状态订单可发订</li>
<li>发订后：订单状态 → 已发订；记录发订时间、发订人、发订备注</li>
<li>该订单下所有「待发订」订单行同步变为「已发订」，写入发订时间</li>
<li>发订备注弹窗：多行文本，可为空；标题「请填写发订备注：」</li>
</ul>
</div>
<div id="exception">
${prdSection('', '异常处理')}
<ul>
<li>非待发订订单发订：alert「仅待发订状态的订单可发订」</li>
</ul>
</div>`);

const item5256 = prdBlock('5.2.5.6', '导入订单', `
<div id="overview">
${prdSection('', '功能描述')}
<p>待导入订单通过「导入订单」打开三步向导弹窗：选择模板并上传 → 查看解析结果 → 入库。</p>
${prdSection('', '步骤说明')}
<ol>
<li><strong>选择模板并上传</strong>：按订单资源类型/语种/供应商匹配可用导入模板；支持 xls/xlsx；可下载模板</li>
<li><strong>解析结果</strong>：展示总条数、成功/失败数；可下载解析结果；解析全部成功才可入库</li>
<li><strong>入库</strong>：点击入库显示 loading，成功后展示「入库成功」，订单状态变为待发订并写入订单行</li>
</ol>
</div>
<div id="rules">
${prdSection('', '业务规则')}
<ul>
<li>模板列表按当前订单属性从「导入模板管理」模块过滤</li>
<li>仅 1 个可用模板时自动选中</li>
<li>上传前校验：必须选择模板且已选文件</li>
<li>解析存在失败行时「下一步」按钮置灰</li>
</ul>
</div>
<div id="exception">
${prdSection('', '异常处理')}
<ul>
<li>无匹配模板：提示「暂无与当前订单匹配的导入模板」</li>
<li>未选模板或文件：上传区显示红色校验信息</li>
<li>入库失败：展示「入库失败，请联系管理员」</li>
</ul>
</div>`);

const item5257 = prdBlock('5.2.5.7', '撤订与删除', `
<div id="overview">
${prdSection('', '功能描述')}
<p>支持单行撤订、批量撤订（勾选后点工具栏「撤订」）、待发订/已撤订订单删除。</p>
</div>
<div id="rules">
${prdSection('', '撤订规则')}
<ul>
<li>撤订前弹出「请选择撤订原因」弹窗，原因来源于「设置 - 退换撤订原因参数」</li>
<li>订单撤订：订单状态 → 已撤订；其下所有订单行状态 → 已撤订，写入撤订原因至备注</li>
<li>批量撤订需先勾选订单，未勾选 alert「请先勾选要撤订的订单」</li>
</ul>
${prdSection('', '删除规则')}
<ul>
<li>仅<strong>待发订</strong>或<strong>已撤订</strong>订单可删除</li>
<li>删除前二次确认弹窗展示订单号</li>
<li>删除后移除订单及其全部订单行</li>
</ul>
</div>
<div id="exception">
${prdSection('', '异常处理')}
<ul>
<li>未选择撤订原因：alert「请选择撤订原因」</li>
<li>无可用撤订原因：下拉为空并提示前往设置配置</li>
</ul>
</div>`);

const item5258 = prdBlock('5.2.5.8', '批量导出', `
<div id="overview">
${prdSection('', '功能描述')}
<p>工具栏「批量导出」下拉提供「导出配置」「导出订单」。导出配置弹窗支持全选/取消及字段勾选。</p>
</div>
<div id="rules">
${prdSection('', '可导出字段')}
<p>订户、馆址、订单号、采选方式、资源类型、语种、供应商、发订人、发订时间、发订册数、发订种数、预算名称、码洋、折扣、实洋、发订备注、订单状态、结算状态</p>
</div>
<div id="exception">
${prdSection('', '异常处理')}
<ul>
<li>「导出订单」：原型阶段 alert 演示</li>
</ul>
</div>`);

const item5351 = prdBlock('5.3.5.1', '筛选查询', `
<div id="overview">
${prdSection('', '功能描述')}
<p>支持基础条件 + 组合条件检索订单行，默认显示订单号、订单行号、行状态。</p>
${prdSection('', '页面要素')}
<ul>
<li><strong>默认行</strong>：订单号、订单行号、行状态（全部/待发订/已发订/处理中/已关闭）</li>
<li><strong>展开后</strong>：组合条件（资源标识/正题名/作者/出版社 + 且/或逻辑链）、载体、验收状态、结算状态、是否催缺、书目记录号</li>
<li>从订单列表点击订单号跳转时，自动带入订单号筛选</li>
</ul>
</div>
<div id="rules">
${prdSection('', '业务规则')}
<ul>
<li>组合条件：同一链条内按 logicAfter（且/或）串联；字段值为空则跳过该条件</li>
<li>文本匹配为包含关系（includes）</li>
<li>验收状态「待验收」匹配行 acceptanceStatus 为「待验收」</li>
</ul>
</div>
<div id="exception">
${prdSection('', '异常处理')}
<p>无匹配数据时展示空表格。</p>
</div>`);

const item5352 = prdBlock('5.3.5.2', '数据表格与行操作', `
<div id="overview">
${prdSection('', '功能描述')}
<p>展示订单行明细，含馆藏/订单查重标识列及行级操作入口。</p>
${prdSection('', '主要列')}
<p>订单号、馆址、订单行号、书目记录号、正题名、资源标识、载体、作者、出版社、出版时间、定价、套内册数、套数、行状态、验收状态、结算状态、是否催缺、发/收/换/退/撤订、发订时间、馆藏重复、订单重复、备注、操作</p>
${prdSection('', '交互')}
<ul>
<li>订单行号：链接跳转订单行详情页 #/orders/line/{orderLineNo}</li>
<li>备注：有备注显示蓝色「查看」，否则「—」</li>
<li>操作列：查重（条件显示）、编辑、撤订（<strong>不含详情按钮</strong>；详情通过订单行号列跳转）</li>
</ul>
</div>
<div id="rules">
${prdSection('', '分页')}
<p>默认 10 条/页，底部显示总条数与页码。</p>
</div>`);

const item5353 = prdBlock('5.3.5.3', '生成催缺单', `
<div id="overview">
${prdSection('', '功能描述')}
<p>对已发订或处理中、且验收未完成/未退货的订单行批量生成催缺单。</p>
</div>
<div id="rules">
${prdSection('', '启用条件')}
<ul>
<li>至少勾选一条订单行</li>
<li>所勾选行均为「已发订」或「处理中」</li>
<li>验收状态不为「收货完成」「已退货」</li>
</ul>
${prdSection('', '生成逻辑')}
<ul>
<li>按订单号分组，过滤不符合条件的行</li>
<li>生成成功后更新订单行「是否催缺」为「是」</li>
<li>弹出成功弹窗，可跳转催缺单管理（单条直达详情，多条进列表）</li>
</ul>
</div>
<div id="exception">
${prdSection('', '异常处理')}
<ul>
<li>所选行均已收货或已退货：alert 提示无法生成</li>
<li>未勾选：按钮置灰不可用</li>
</ul>
</div>`);

const item5354 = prdBlock('5.3.5.4', '查重操作入口', `
<div id="overview">
${prdSection('', '功能描述')}
<p>提供批量查重与单行查重两种操作入口，触发后弹出查重配置弹窗（见 5.3.5.5）。</p>
${prdSection('', '批量查重按钮')}
<ul>
<li>位置：订单行列表工具栏（与「生成催缺单」「撤订」「导出订单行」相邻）</li>
<li>默认状态：置灰不可用（<code>disabled</code>）</li>
<li>启用条件：同时满足以下条件时按钮高亮可点击：
<ol>
<li>至少勾选一条订单行</li>
<li>所勾选订单行均为<strong>待发订</strong>状态（所属订单状态为待发订时，其下所有订单行视为待发订）</li>
<li>所勾选订单行属于<strong>相同资源类型</strong>（从所属订单获取：纸质书 / 视听资料）</li>
<li>所勾选订单行属于<strong>相同语种分类</strong>（从所属订单获取：中文 / 外文）</li>
</ol></li>
<li>点击后：弹出查重配置弹窗</li>
</ul>
${prdSection('', '单个查重文字链')}
<ul>
<li>位置：订单行列表操作列</li>
<li>显示条件：仅当该行可进行查重时显示（行状态为待发订，或所属订单状态为待发订）</li>
<li>非待发订行：不显示查重文字链</li>
<li>点击后：以当前行为查重对象，弹出查重配置弹窗</li>
</ul>
</div>
<div id="rules">
${prdSection('', '订单行状态（是否可查重）')}
${prdTable(['状态', '说明', '是否可查重'], [
  [`${prdDot('#d97706')}待发订`, '订单/行尚未发订', '是'],
  [`${prdDot('#16a34a')}已发订`, '已发订', '否'],
  [`${prdDot('#2563eb')}处理中`, '处理中', '否'],
  [`${prdDot('#6b7280')}已关闭`, '已关闭', '否'],
  [`${prdDot('#6b7280')}已撤订`, '已撤订', '否']
])}
${prdSection('', '批量查重按钮状态')}
${prdTable(['状态', '说明'], [
  ['不可用（置灰）', '未勾选行，或勾选行不满足待发订 / 同资源类型 / 同语种条件'],
  ['可用（高亮）', '勾选行均满足批量查重全部启用条件']
])}
${prdSection('', '业务规则')}
<ul>
<li>仅<strong>待发订</strong>订单行允许查重；所属订单状态为待发订时，其下所有订单行视为待发订</li>
<li>批量查重要求勾选行资源类型一致、语种分类（中文/外文）一致，语种从所属订单获取</li>
<li>单行查重不受批量勾选限制，但目标行须满足待发订条件</li>
</ul>
${prdSection('', '前置/后置条件')}
<ul>
<li><strong>前置</strong>：用户已登录，且有订单行列表查看权限</li>
<li><strong>后置</strong>：查重配置弹窗打开</li>
</ul>
</div>
<div id="exception">
${prdSection('', '异常处理')}
<ul>
<li>勾选非待发订行进行批量查重：按钮保持置灰；若通过其他方式触发，提示「仅支持行状态为待发订的订单行进行查重」</li>
<li>勾选不同资源类型或不同语种（中文/外文）混合：批量查重按钮置灰；若触发，提示「请勾选相同资源类型和语种（中文/外文）的待发订订单行进行查重」</li>
</ul>
</div>`);

const item5355 = prdBlock('5.3.5.5', '查重配置弹窗', `
<div id="overview">
${prdSection('', '功能描述')}
<p>点击查重入口后弹出查重配置弹窗，用户选择重复类型与查重字段后执行查重。</p>
${prdSection('', '页面要素')}
<ul>
<li><strong>显示样式</strong>：居中模态弹窗，标题「查重」；底部按钮：「取消」「确定」；点击遮罩或右上角 × 关闭弹窗</li>
<li><strong>重复类型</strong>：单选，默认选中「<strong>不限</strong>」，可选值：
<ul>
<li><strong>不限</strong>：同时执行馆藏查重和订单查重</li>
<li><strong>订单查重</strong>：仅检查与其他订单行的重复</li>
<li><strong>馆藏查重</strong>：仅检查与馆藏书目的重复</li>
</ul></li>
<li><strong>查重字段</strong>：根据待查重订单行所属订单的<strong>资源类型</strong>和<strong>语种</strong>动态展示可选字段。顶部提供「<strong>全部</strong>」复选框，勾选/取消时联动全选/全不选所有字段项；各字段项变更时同步更新「全部」勾选状态。</li>
</ul>
${prdTable(['资源类型', '语种', '可选查重字段', '默认选中'], [
  ['纸质书', '中文', '全部、资源标识、题名、作者、出版社、出版年、语种', '资源标识、题名'],
  ['纸质书', '外文', '全部、资源标识、题名、作者、出版社、出版年、语种', '资源标识、题名'],
  ['视听资料', '中文', '全部、题名、载体、限量编号、出版社', '题名、载体'],
  ['视听资料', '外文', '全部、商品条码、目录号', '商品条码、目录号']
])}
</div>
<div id="rules">
${prdSection('', '交互逻辑')}
<ul>
<li>选择重复类型后立即更新，无额外动作</li>
<li>查重字段「全部」勾选时，所有字段复选框被选中；取消时全部取消；任一字段复选框状态变化时同步更新「全部」状态</li>
<li>至少选择一个查重字段；未选时点击「确定」阻止提交，并提示「请至少选择一个查重字段」</li>
<li>点击「确定」：按配置执行查重，关闭弹窗，刷新列表「馆藏重复」「订单重复」标识列</li>
<li>点击「取消」或关闭：不执行查重</li>
</ul>
${prdSection('', '业务规则')}
<ul>
<li>所选字段采用 <strong>AND（且）</strong> 逻辑：所有已选字段的值均非空且相等时，判定为重复</li>
<li><strong>资源标识</strong>比对时忽略大小写及连字符（<code>-</code>）</li>
<li>其他字段比对时忽略大小写</li>
</ul>
${prdSection('', '前置/后置条件')}
<ul>
<li><strong>前置</strong>：用户已通过操作入口进入弹窗</li>
<li><strong>后置</strong>：执行查重并更新列表，或取消关闭弹窗</li>
</ul>
</div>
<div id="exception">
${prdSection('', '异常处理')}
<ul>
<li>未选择任何查重字段：阻止提交，提示「请至少选择一个查重字段」</li>
</ul>
</div>`);

const item5356 = prdBlock('5.3.5.6', '查重结果展示', `
<div id="overview">
${prdSection('', '功能描述')}
<p>查重完成后，在订单行列表展示重复标识；用户可点击「有」查看详细查重结果。</p>
${prdSection('', '列表重复标识列')}
<p>列表包含两列：<strong>馆藏重复</strong>、<strong>订单重复</strong>。</p>
${prdTable(['状态', '显示'], [
  ['未查重', '空白'],
  ['无重复', '「无」'],
  ['有重复', '蓝色文字链「有」，点击打开查重结果侧滑面板']
])}
${prdSection('', '查重结果侧滑面板')}
<ul>
<li>从页面右侧滑出，宽度约页面 75%（最小 520px，最大 960px）</li>
<li>标题：「馆藏重复查重结果」或「订单重复查重结果」</li>
<li>摘要区显示：当前订单行号、查重字段（本次使用的字段）、重复记录数</li>
<li>馆藏重复：额外显示总复本数（全部重复书目馆藏复本数之和）</li>
<li>订单重复：额外显示总套数（全部重复订单行套数之和）</li>
</ul>
${prdSection('', '馆藏查重结果')}
<p>内容区顶部提供「<strong>书目</strong>」「<strong>MARC信息</strong>」两个页签，默认展示「书目」页签。</p>
<p><em>书目页签</em></p>
<ul>
<li>以<strong>书目卡片</strong>形式展示重复书目；卡片头部展示题名，以及书目记录号、ISBN、作者、出版社、出版年</li>
<li>卡片头部可点击展开/收起；展开后展示<strong>四层馆藏树</strong>：机构 → 馆区 → 分馆 → 馆藏地</li>
<li>馆藏地节点以蓝色圆角标签展示复本数，如「1本」「2本」</li>
<li>默认展开当前页第一条书目卡片</li>
<li>操作列「查看」：切换至「MARC信息」页签，展示<strong>当前书目</strong>的 MARC 详细信息（不跳转外部页面）</li>
</ul>
<p><em>MARC信息页签</em></p>
<ul>
<li>顶部显示书目记录号标签，如「书目记录号【BIB2024002001】」</li>
<li>下方表格展示 MARC 字段详情，列：字段名、指示符、字段内容（展示格式与书目查询页详细信息侧滑面板一致）</li>
<li>直接点击「MARC信息」页签：默认展示查重结果<strong>第一条书目</strong>的 MARC 信息</li>
<li>在书目页签点击某条「查看」：切换至本页签并展示该书目 MARC 信息</li>
</ul>
${prdSection('', '订单查重结果')}
<ul>
<li>以表格形式展示，字段：订单行号、馆址、正题名、资源标识、作者、套内册数、套数、行状态、发订时间</li>
<li>操作列暂隐藏（后续版本开放「查看」跳转订单行详情）</li>
</ul>
${prdSection('', '交互与分页')}
<ul>
<li>结果列表支持分页，默认 5 条/页，可选 5 / 10 / 20 / 50 条/页</li>
<li>分页控件：上一页、页码、下一页、每页条数选择</li>
<li>无重复记录时，内容区显示「暂无查重结果」</li>
<li>点击遮罩或关闭按钮关闭侧滑面板</li>
</ul>
</div>
<div id="rules">
${prdSection('', '交互逻辑')}
<ul>
<li>标识为「有」时方可点击打开结果面板；「无」或空白不响应点击</li>
<li>点击「有」链接，打开对应类型（馆藏/订单）的侧滑面板</li>
<li>馆藏结果中，卡片展开/收起独立控制；点击「查看」切换至 MARC 页签</li>
<li>MARC 页签默认展示第一条书目信息</li>
<li>分页切换时保持当前页签状态</li>
</ul>
${prdSection('', '业务规则')}
<ul>
<li><strong>订单查重</strong>比对范围：当前登录馆员<strong>关联订户</strong>下的全部订单行（不含当前行自身）</li>
<li><strong>馆藏查重</strong>比对范围：馆藏书目库</li>
<li>重复标识按本次查重配置的重复类型分别更新（选择「不限」时同时更新两列）</li>
<li>重复标识为「有」时方可打开结果面板</li>
</ul>
<blockquote>查重与查重结果均受订户数据隔离约束，仅比对当前用户所属订户可见范围内的订单行与馆藏数据。</blockquote>
${prdSection('', '前置/后置条件')}
<ul>
<li><strong>前置</strong>：已执行查重操作，列表标识列已更新</li>
<li><strong>后置</strong>：侧滑面板展示详细查重结果</li>
</ul>
</div>
<div id="exception">
${prdSection('', '异常处理')}
<ul>
<li>重复标识为「无」或未查重时，不响应「有」链接点击</li>
<li>结果为空时显示「暂无查重结果」，分页显示第 1/1 页</li>
<li>若点击「有」但后端数据异常（如重复记录已删除），提示「查重结果数据不存在」</li>
</ul>
</div>`);

const item5357 = prdBlock('5.3.5.7', '编辑订单行', `
<div id="overview">
${prdSection('', '功能描述')}
<p>操作列「编辑」打开宽屏弹窗，修改书目及订购信息字段。</p>
${prdSection('', '可编辑字段')}
<p>ISBN、正题名、出版社、定价、币种、正文语种、载体、商品条码、目录号、套数、套内册数、书目记录号、卷数、丛编、出版地、出版年、备注</p>
</div>
<div id="rules">
<ul>
<li>币种下拉：人民币/美元/欧元</li>
<li>正文语种：日文、德文、西文、法文、俄文、英文、中文等</li>
<li>保存后更新列表行（原型 alert 演示）</li>
</ul>
</div>`);

const item5358 = prdBlock('5.3.5.8', '撤订', `
<div id="overview">
<p>支持单行撤订、批量撤订（勾选后点工具栏「撤订」），流程同订单撤订原因弹窗。</p>
</div>
<div id="rules">
<ul>
<li>撤订后行状态 → 已撤订，备注写入撤订原因</li>
<li>未勾选批量撤订：alert「请先勾选要撤订的订单行」</li>
</ul>
</div>`);

const item5359 = prdBlock('5.3.5.9', '批量导出', `
<div id="overview">
<p>「导出订单行」下拉：导出配置 / 导出清单。导出配置字段含订单号、馆址、订单行号、正题名、ISBN、作者、出版社、行状态、验收状态、馆藏重复、订单重复等。</p>
</div>`);

export const orderManagePrdData = {
  title: '非连续出版物订单',
  tabs: {
    'order-list': {
      label: '订单列表',
      itemIds: ['5.2.5.1', '5.2.5.2', '5.2.5.3', '5.2.5.4', '5.2.5.5', '5.2.5.6', '5.2.5.7', '5.2.5.8']
    },
    'order-line': {
      label: '订单行列表',
      itemIds: ['5.3.5.1', '5.3.5.2', '5.3.5.3', '5.3.5.4', '5.3.5.5', '5.3.5.6', '5.3.5.7', '5.3.5.8', '5.3.5.9']
    }
  },
  items: [
    { id: '5.2.5.1', title: '筛选查询', tab: 'order-list', htmlContent: item5251 },
    { id: '5.2.5.2', title: '数据表格与行操作', tab: 'order-list', htmlContent: item5252 },
    { id: '5.2.5.3', title: '新建订单弹窗', tab: 'order-list', htmlContent: item5253 },
    { id: '5.2.5.4', title: '编辑订单弹窗', tab: 'order-list', htmlContent: item5254 },
    { id: '5.2.5.5', title: '发订', tab: 'order-list', htmlContent: item5255 },
    { id: '5.2.5.6', title: '导入订单', tab: 'order-list', htmlContent: item5256 },
    { id: '5.2.5.7', title: '撤订与删除', tab: 'order-list', htmlContent: item5257 },
    { id: '5.2.5.8', title: '批量导出', tab: 'order-list', htmlContent: item5258 },
    { id: '5.3.5.1', title: '筛选查询', tab: 'order-line', htmlContent: item5351 },
    { id: '5.3.5.2', title: '数据表格与行操作', tab: 'order-line', htmlContent: item5352 },
    { id: '5.3.5.3', title: '生成催缺单', tab: 'order-line', htmlContent: item5353 },
    { id: '5.3.5.4', title: '查重操作入口', tab: 'order-line', htmlContent: item5354 },
    { id: '5.3.5.5', title: '查重配置弹窗', tab: 'order-line', htmlContent: item5355 },
    { id: '5.3.5.6', title: '查重结果展示', tab: 'order-line', htmlContent: item5356 },
    { id: '5.3.5.7', title: '编辑订单行', tab: 'order-line', htmlContent: item5357 },
    { id: '5.3.5.8', title: '撤订', tab: 'order-line', htmlContent: item5358 },
    { id: '5.3.5.9', title: '批量导出', tab: 'order-line', htmlContent: item5359 }
  ]
};

export function registerOrderManagePrdData() {
  window.PRD_DATA_MAP = window.PRD_DATA_MAP || {};
  window.PRD_DATA_MAP['order-manage'] = orderManagePrdData;
}
