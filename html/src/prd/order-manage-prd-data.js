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
<p>复选框列（始终固定列首最左）、序号、订户、馆址、订单号、采选方式、资源类型、语种、供应商、订单时间、发订人、发订时间、发订册数、发订种数、预算名称、码洋、折扣、实洋、发订备注、订单状态、结算状态、操作</p>
<p><strong>默认固定</strong>：列首 — 序号、订户、馆址、订单号；列尾 — 操作。列展示自定义规则见 <strong>5.2.5.9</strong>。</p>
${prdSection('', '交互逻辑')}
<ul>
<li>订单号列：蓝色文字链，点击切换至「订单行列表」页签并带入订单号筛选</li>
<li>发订备注：有内容时显示蓝色「查看」（悬浮 title 展示全文）；无内容时灰色「查看」</li>
<li>列较多时表格可横向滚动；纵向滚动时表头吸顶；固定列横向滚动时不透出底层字段</li>
<li>工具栏右侧齿轮按钮打开「列展示」配置（见 5.2.5.9）</li>
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

const item5259 = prdBlock('5.2.5.9', '列展示配置', `
<div id="overview">
${prdSection('', '功能描述')}
<p>工具栏右侧齿轮按钮打开「列展示」面板，支持列显隐、分区内拖拽排序、固定在列首或列尾；配置即时生效并持久化至浏览器本地。</p>
${prdSection('', '页面要素')}
<ul>
<li><strong>入口</strong>：工具栏最右侧齿轮图标，悬浮提示「列展示」</li>
<li><strong>面板顶栏</strong>：「列展示」全选复选框 + 「重置」按钮</li>
<li><strong>三区列表</strong>（自上而下）：固定在列首 → 不固定 → 固定在列尾</li>
<li><strong>列项行</strong>：拖拽手柄、显隐复选框、列名；悬停显示固定操作图标</li>
</ul>
</div>
<div id="interaction">
${prdSection('', '交互逻辑')}
<ul>
<li>点击齿轮：打开/关闭面板；点击面板外区域关闭</li>
<li>顶栏复选框：全选/取消全部业务列；部分选中时为半选态</li>
<li>拖拽排序：仅在同一分区内调整顺序，不可跨区拖动</li>
<li><strong>固定操作</strong>（悬停列项时，随当前状态变化）：
<ul>
<li>不固定 → 可「固定在列首」或「固定在列尾」</li>
<li>列首固定 → 可「固定在列尾」或「不固定」</li>
<li>列尾固定 → 可「固定在列首」或「不固定」</li>
</ul></li>
<li>「重置」：恢复默认列顺序、固定位置及全部列可见</li>
</ul>
</div>
<div id="rules">
${prdSection('', '默认固定位置')}
${prdTable(['固定位置', '默认列'], [
  ['列首固定', '序号、订户、馆址、订单号'],
  ['列尾固定', '操作']
])}
${prdSection('', '业务规则')}
<ul>
<li>复选框列<strong>不参与</strong>列展示配置，始终显示且始终固定于列首最左侧</li>
<li>横向滚动时列首/列尾固定列保持可见，表头与表体同步固定，背景不透明</li>
<li>纵向滚动时表头吸顶</li>
<li>本地存储异常时自动回退默认配置</li>
</ul>
</div>`);

const item5351 = prdBlock('5.3.5.1', '筛选查询', `
<div id="overview">
${prdSection('', '功能描述')}
<p>支持基础条件 + 组合条件检索订单行，默认显示订单号、订单行号、行状态。</p>
${prdSection('', '页面要素')}
<ul>
<li><strong>默认行（收起可见）</strong>：订单号、订单行号、行状态（全部/待发订/已发订/处理中/已关闭）</li>
<li><strong>展开后</strong>：组合条件（资源标识/正题名/作者/出版社 + 且/或逻辑链）、载体、验收状态、结算状态、是否催缺、书目记录号、<strong>馆藏重复</strong>、<strong>订单重复</strong>（位于书目记录号之后）</li>
<li><strong>馆藏重复 / 订单重复</strong>：下拉选框，选项 <strong>全部 / 有 / 无</strong>，默认 <strong>全部</strong></li>
<li>从订单列表点击订单号跳转时，自动带入订单号筛选</li>
</ul>
</div>
<div id="rules">
${prdSection('', '业务规则')}
<ul>
<li>组合条件：同一链条内按 logicAfter（且/或）串联；字段值为空则跳过该条件</li>
<li>文本匹配为包含关系（includes）</li>
<li>验收状态「待验收」匹配行 acceptanceStatus 为「待验收」</li>
<li><strong>馆藏重复 / 订单重复</strong>：选「有」仅显示标识为有的行；选「无」仅显示标识为无的行；未查重（空白）不匹配「有」或「无」；两条件可同时使用（AND）</li>
</ul>
</div>
<div id="exception">
${prdSection('', '异常处理')}
<p>无匹配数据时展示空表格。</p>
</div>`);

const item5352 = prdBlock('5.3.5.2', '数据表格与行操作', `
<div id="overview">
${prdSection('', '功能描述')}
<p>展示订单行明细，含序号列、馆藏/订单查重标识列及行级操作入口。</p>
${prdSection('', '主要列')}
<p>复选框列、序号、订单号、馆址、订单行号、书目记录号、正题名、资源标识、载体、作者、出版社、出版时间、分卷号、分卷名、定价、币种、套内册数、套数、行状态、验收状态、结算状态、是否催缺、发/收/换/退/撤订、发订时间、馆藏重复、订单重复、备注、操作</p>
<p><strong>默认固定</strong>：列首 — 序号、订单号、馆址、订单行号；列尾 — 操作。列展示规则见 <strong>5.3.5.11</strong>。</p>
${prdSection('', '书目记录号列')}
<ul>
<li>展示<strong>书目记录号</strong>（<code>bibRecordNo</code>）</li>
<li>若<strong>实际关联书目记录号</strong>（<code>actualBibRecordNos</code>，可多值）非空，且其中至少有一条与书目记录号不一致，则在旁显示「<strong>实</strong>」浅蓝徽章；规则详见 <strong>5.3.5.10</strong></li>
<li>悬停「实」：浮层逐条列出全部非空实际关联书目记录号，每条为可点击链接</li>
<li>若实际关联书目记录号为空，或全部与书目记录号相同，则不显示「实」标记</li>
</ul>
${prdSection('', '交互')}
<ul>
<li>订单行号：链接跳转订单行详情页 #/orders/line/{orderLineNo}</li>
<li>备注：有备注显示蓝色「查看」，否则「—」</li>
<li>列较多时可横向滚动；表头纵向吸顶；固定列不透底</li>
<li>工具栏右侧齿轮按钮打开「列展示」配置（见 5.3.5.11）</li>
<li>操作列：查重（条件显示）、编辑、撤订（<strong>不含详情按钮</strong>；详情通过订单行号列跳转）</li>
</ul>
</div>
<div id="rules">
${prdSection('', '分页')}
<p>默认 <strong>50</strong> 条/页，可选 <strong>50 / 100 / 200</strong> 条/页；底部显示总条数与页码切换；检索后分页重置为第 1 页。</p>
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
<li>位置：订单行列表工具栏（与「生成催缺单」「撤订」「导出订单行」相邻），文案「查重」</li>
<li>默认状态：置灰不可用</li>
<li>启用条件：同时满足以下条件时按钮高亮可点击：
<ol>
<li>至少勾选一条订单行</li>
<li>所勾选订单行数量<strong>不超过 50 条</strong></li>
<li>所勾选订单行均为<strong>待发订</strong>（若所属订单状态为待发订，则其下订单行均视为待发订）</li>
<li>所勾选订单行属于<strong>相同资源类型</strong>（取自所属订单：纸质书 / 视听资料）</li>
<li>所勾选订单行属于<strong>相同语种分类</strong>（取自所属订单：中文 / 外文）</li>
</ol></li>
<li>点击后：打开查重配置弹窗</li>
</ul>
${prdSection('', '单个查重文字链')}
<ul>
<li>位置：订单行列表操作列</li>
<li>显示条件：仅当该行可查重时显示（行状态为待发订，或所属订单状态为待发订）</li>
<li>非待发订行：不显示查重文字链</li>
<li>点击后：以当前行为查重对象，打开查重配置弹窗（不受批量条数上限约束）</li>
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
  ['不可用（置灰）', '未勾选行，或勾选超过 50 条，或不满足待发订 / 同资源类型 / 同语种条件'],
  ['可用（高亮）', '勾选行均满足批量查重全部启用条件']
])}
${prdSection('', '业务规则')}
<ul>
<li>若订单行行状态不为待发订，且所属订单状态亦不为待发订，则不可查重</li>
<li>若所属订单状态为待发订，则其下订单行均视为可查重</li>
<li>若批量勾选数量大于 50 条，则批量「查重」按钮置灰，不可打开查重配置</li>
<li>若批量勾选行的资源类型或语种分类不一致，则批量「查重」按钮置灰</li>
<li>单行查重不受批量勾选数量与「同资源类型 / 同语种」限制，但目标行须满足可查重条件</li>
</ul>
${prdSection('', '前置/后置条件')}
<ul>
<li><strong>前置</strong>：用户已登录，且具备订单行列表查看权限</li>
<li><strong>后置</strong>：查重配置弹窗打开</li>
</ul>
</div>
<div id="exception">
${prdSection('', '异常处理')}
<ul>
<li>若勾选超过 50 条仍触发批量查重，则提示「批量查重最多支持 50 条订单行」，不打开配置弹窗</li>
<li>若勾选含非待发订行仍触发批量查重，则提示「仅支持行状态为待发订的订单行进行查重」</li>
<li>若勾选不同资源类型或不同语种（中文/外文）混合仍触发批量查重，则提示「请勾选相同资源类型和语种（中文/外文）的待发订订单行进行查重」</li>
</ul>
</div>`);

const item5355 = prdBlock('5.3.5.5', '查重配置弹窗', `
<div id="overview">
${prdSection('', '功能描述')}
<p>点击查重入口后弹出查重配置弹窗，用户选择重复类型与查重字段后执行查重。</p>
${prdSection('', '页面要素')}
<ul>
<li><strong>显示样式</strong>：居中模态弹窗，标题「查重」；底部按钮：「取消」「确定」；点击遮罩或右上角 × 关闭弹窗</li>
<li><strong>重复类型</strong>：单选，默认「<strong>不限</strong>」
<ul>
<li><strong>不限</strong>：同时执行馆藏查重与订单查重</li>
<li><strong>订单查重</strong>：仅检查与其他订单行的重复</li>
<li><strong>馆藏查重</strong>：仅检查与馆藏书目的重复</li>
</ul></li>
<li><strong>查重字段</strong>：按待查重订单行所属订单的<strong>资源类型</strong>展示可选字段（同资源类型下中文/外文可选字段相同，默认选中随语种分类变化）。顶部「<strong>全部</strong>」复选框联动全选/全不选；任一字段变更时同步「全部」勾选状态。</li>
</ul>
${prdTable(['资源类型', '语种分类', '可选查重字段', '默认选中'], [
  ['纸质书', '中文', '全部、题名、资源标识、作者、出版社、出版年、语种', '资源标识'],
  ['纸质书', '外文', '全部、题名、资源标识、作者、出版社、出版年、语种', '资源标识'],
  ['视听资料', '中文', '全部、题名、资源标识、载体、商品条码、目录号、限量编号、出版社', '题名、载体'],
  ['视听资料', '外文', '全部、题名、资源标识、载体、商品条码、目录号、限量编号、出版社', '商品条码、目录号']
])}
</div>
<div id="rules">
${prdSection('', '交互逻辑')}
<ul>
<li>选择重复类型后立即生效，无额外动作</li>
<li>若勾选「全部」，则选中全部字段；若取消「全部」，则全部取消；若字段勾选状态变化，则同步「全部」勾选状态</li>
<li>若未选择任何查重字段，则点击「确定」阻止提交，并提示「请至少选择一个查重字段」</li>
<li>点击「确定」：按钮进入<strong>加载中</strong>（「查重中...」+ 加载图标）；<strong>加载期间防抖</strong>，禁止重复点击，同时禁用取消、关闭及表单选项</li>
<li>查重完成后<strong>自动关闭弹窗</strong>，刷新列表馆藏重复（holdingDuplicate）、订单重复（orderDuplicate）标识列；若本轮含馆藏查重，则按自动关联规则同步更新书目记录号（bibRecordNo）（见 5.3.5.6）</li>
<li>点击「取消」或关闭：不执行查重（加载中不可关闭）</li>
</ul>
${prdSection('', '业务规则')}
<ul>
<li>所选字段采用 <strong>AND（且）</strong> 逻辑：若全部已选字段的值均非空且相等，则判定为重复</li>
<li>若比对字段为资源标识，则忽略大小写及连字符（<code>-</code>）</li>
<li>其他字段比对时忽略大小写</li>
</ul>
${prdSection('', '前置/后置条件')}
<ul>
<li><strong>前置</strong>：用户已通过查重操作入口进入弹窗</li>
<li><strong>后置</strong>：执行查重并更新列表标识（及可能的书目记录号），或取消关闭弹窗</li>
</ul>
</div>
<div id="exception">
${prdSection('', '异常处理')}
<ul>
<li>未选择任何查重字段：阻止提交，提示「请至少选择一个查重字段」</li>
<li>查重请求失败：提示「查重失败，请稍后重试」，弹窗保持打开，恢复可编辑与可关闭状态</li>
</ul>
</div>`);

const item5356 = prdBlock('5.3.5.6', '查重结果展示', `
<div id="overview">
${prdSection('', '功能描述')}
<p>查重完成后，在订单行列表展示重复标识；用户可点击「有」查看详细查重结果。</p>
${prdSection('', '列表重复标识列')}
<p>列表包含两列：<strong>馆藏重复</strong>（holdingDuplicate）、<strong>订单重复</strong>（orderDuplicate）。</p>
${prdTable(['状态', '显示'], [
  ['未查重', '空白'],
  ['无重复', '「无」'],
  ['有重复', '蓝色文字链「有」，点击打开查重结果面板']
])}
${prdSection('', '查重结果面板（顶部下拉）')}
<ul>
<li>从页面<strong>顶部向下滑出</strong>，全宽展示，高度为视口高度的 <strong>60%</strong></li>
<li>面板结构：标题栏 → 摘要信息区 → 页签栏（仅馆藏查重）→ 结果内容区（可滚动）→ 分页栏</li>
<li>标题：馆藏查重显示「<strong>馆藏查重结果</strong>」；订单查重显示「<strong>订单查重结果</strong>」</li>
<li>摘要区<strong>一行横向展示</strong>：订单行号（orderLineNo）、查重字段、重复记录数；查重字段过长时截断，悬浮查看完整内容</li>
<li>切换馆藏查重页签时面板高度保持不变；MARC 页签隐藏分页栏时底栏仍占位</li>
<li>点击遮罩或右上角 × 关闭面板</li>
</ul>
${prdSection('', '馆藏查重：有单件与无单件')}
<blockquote>馆藏查重比对馆藏书目库。若匹配到书目记录，则列表馆藏重复（holdingDuplicate）显示「有」，<strong>与单件数量是否为 0 无关</strong>。馆员既需确认书目著录是否已存在，也需通过「单件数量」判断是否有实体馆藏。</blockquote>
${prdTable(['维度', '有单件（单件数量 &gt; 0）', '无单件（单件数量 = 0）'], [
  ['列表「馆藏重复」', '有', '有（书目著录已存在）'],
  ['查重结果书目列表', '展示', '展示'],
  ['单件数量列', '蓝色徽章「N本」', '灰色徽章「0本」'],
  ['展开馆藏分布', '四层馆藏树 + 未关联馆藏（如有）', '「暂无馆藏分布」'],
  ['MARC / 关联', '可用', '可用']
])}
<p><strong>单件数量</strong> = 已分配馆藏地单件数 + 未关联馆藏单件数。未分配馆藏地的单件归入馆藏树「<strong>未关联馆藏</strong>」节点，徽章样式与馆藏地一致。</p>
${prdSection('', '馆藏查重结果 · 书目页签')}
<ul>
<li>表格列顺序：<strong>展开/收起</strong> → <strong>单件数量</strong> → 书目字段 → <strong>操作</strong></li>
<li>书目字段随查重订单行的<strong>资源类型 + 语种</strong>动态切换（见下表）</li>
<li>单件数量列：圆角徽章「N本」；&gt; 0 蓝色，= 0 灰色</li>
<li>若有单件，则展开展示馆藏树；若无单件，则展开展示「暂无馆藏分布」</li>
<li>默认展开当前页第一条书目行</li>
<li>操作：「查看」切换 MARC；「关联」/「取消关联」写入或清空订单行书目记录号（bibRecordNo）</li>
</ul>
${prdTable(['资源类型', '语种', '展示字段'], [
  ['纸质书', '中文', '书目记录号、正题名、ISBN、作者、出版社、出版年、版本'],
  ['纸质书', '外文', '书目记录号、题名、ISBN、责任者、出版社、出版日期、语种'],
  ['视听资料', '中文', '书目记录号、题名、载体、ISBN/ISRC、出版社、版本/格式、著者'],
  ['视听资料', '外文', '书目记录号、ISRC、题名、载体、商品条码、目录号、出版方']
])}
<p><em>馆藏树</em>：机构 → 馆区 → 分馆 → 馆藏地；分支可展开/收起；叶子节点及「未关联馆藏」以蓝色徽章「N本」展示单件数。</p>
${prdSection('', '馆藏查重结果 · MARC信息页签')}
<ul>
<li>表格列：字段名、指示符（表头不换行）、字段内容</li>
<li>展示字段随查重订单行<strong>语种</strong>动态过滤（见下表）</li>
<li>过滤后无可用字段时展示「暂无MARC信息」</li>
<li><strong>MARC 信息页签不显示底部分页栏</strong></li>
<li>直接点击页签：默认展示第一条书目 MARC 信息</li>
<li>书目页签点击「查看」：切换至本页签并展示对应书目 MARC 信息</li>
</ul>
${prdTable(['语种', '展示 MARC 字段'], [
  ['中文', '010、2XX、3XX、6XX、7XX'],
  ['外文', '020、1XX、2XX、3XX、093']
])}
<p><em>说明</em>：2XX 等表示该百位段内全部三位数 tag（如 2XX = 200–299）。</p>
${prdSection('', '订单查重结果')}
<ul>
<li>表格字段：订单行号（orderLineNo）、馆址（site）、正题名（title）、作者（author）、出版社（publisher）、出版时间（publishTime）、定价（price）、币种（currency）、套内册数（copiesInSet）、套数（sets）、行状态（lineStatus）、发订时间（issueTime）</li>
<li>列较多时横向滚动；纵向滚动时表头吸顶</li>
<li>暂无操作列</li>
</ul>
${prdSection('', '交互与分页')}
<ul>
<li>分页控件：上一页、第 X/Y 页、下一页、每页条数；底部显示「共 N 条记录」</li>
<li><strong>馆藏查重 · 书目页签</strong>：默认 <strong>5</strong> 条/页，可选 5 / 10 / 20 / 50 条/页</li>
<li><strong>订单查重结果</strong>：默认 <strong>50</strong> 条/页，可选 50 / 100 / 200 条/页</li>
<li>馆藏查重 <strong>MARC 信息页签</strong>不展示分页栏</li>
<li>打开面板时按查重类型重置第 1 页及对应默认每页条数</li>
<li>无重复记录时，内容区显示「暂无查重结果」</li>
</ul>
</div>
<div id="rules">
${prdSection('', '交互逻辑')}
<ul>
<li>若标识为「有」，则可点击打开对应类型结果面板；若为「无」或空白，则不响应</li>
<li>馆藏书目行与馆藏树节点均可独立展开/收起</li>
<li>若点击「查看」，则切换至 MARC 页签并滚回顶部</li>
<li>若点击「关联」，则写入书目记录号（bibRecordNo）；若点击「取消关联」，则清空书目记录号（bibRecordNo）；列表同步更新</li>
<li>分页切换时保持当前页签；打开面板时重置第 1 页、书目页签，默认展开第一条书目行（馆藏每页条数重置为 5，订单查重置为 50）</li>
<li>打开结果面板时<strong>不再</strong>执行自动关联（自动关联仅在查重返回落库时处理）</li>
</ul>
${prdSection('', '业务规则')}
<ul>
<li><strong>订单查重</strong>比对范围：当前登录馆员<strong>关联订户</strong>下全部订单行（不含当前行）</li>
<li><strong>馆藏查重</strong>比对范围：馆藏书目库</li>
<li>若匹配到馆藏书目记录，则馆藏重复（holdingDuplicate）为「有」，与单件数量是否为 0 无关</li>
<li>单件数量 = 已分配馆藏地 + 未关联馆藏；若为 0，则展示灰色「0本」，展开区「暂无馆藏分布」</li>
<li>若单件数量 &gt; 0，则展示馆藏树；若为 0，则书目仍列在结果中，可查看 MARC 与关联</li>
<li><strong>自动关联书目</strong>：若本轮执行馆藏查重，且订单行书目记录号（bibRecordNo）为空，且本行馆藏结果非空且第一条书目记录号有效，则静默写入结果第一条；若书目记录号已有值则不覆盖；批量逐行独立处理；仅订单查重或结果为空时不执行；打开结果面板不再重复自动关联；取消关联后再查重且有结果时将再次自动关联</li>
<li>重复标识按本次查重配置的重复类型分别更新（若选择「不限」，则同时更新两列）</li>
<li>馆藏书目表格字段与 MARC 展示字段均取自查重订单行所属订单的资源类型 / 语种</li>
</ul>
<blockquote>查重与查重结果均受订户数据隔离约束，仅比对当前用户所属订户可见范围内的订单行与馆藏数据。</blockquote>
${prdSection('', '前置/后置条件')}
<ul>
<li><strong>前置</strong>：已执行查重操作，列表标识列已更新</li>
<li><strong>后置</strong>：查重结果面板展示详细查重结果；列表书目记录号（bibRecordNo）已按自动关联规则刷新（若适用）</li>
</ul>
</div>
<div id="exception">
${prdSection('', '异常处理')}
<ul>
<li>重复标识为「无」或未查重时，不响应「有」链接点击</li>
<li>结果为空时显示「暂无查重结果」，分页显示第 1/1 页</li>
<li>若点击「有」但后端数据异常，则提示「查重结果数据不存在」</li>
<li>书目展开后无馆藏单件（单件数量为 0）：展示「暂无馆藏分布」</li>
<li>MARC 页签无可用书目或过滤后无字段：展示「暂无MARC信息」</li>
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

const item53510 = prdBlock('5.3.5.10', '实际关联书目记录号与书目详情浮动弹窗', `
<div id="overview">
${prdSection('', '功能描述')}
<p>当订单行的<strong>实际关联书目记录号</strong>（<code>actualBibRecordNos</code>）与<strong>书目记录号</strong>（<code>bibRecordNo</code>）存在差异时，在「书目记录号」列通过「<strong>实</strong>」标记提供快捷入口：悬停浮层内点击某条记录号，以<strong>无遮罩可拖拽浮动弹窗</strong>展示该记录号的 MARC 与单件，支持多窗并排对比。</p>
</div>
<div id="ui">
${prdSection('', '「实」标记（书目记录号列旁）')}
${prdTable(['要素', '规则'], [
  ['展示位置', '订单行列表「书目记录号」列，书目记录号（bibRecordNo）旁'],
  ['显示条件', '同时满足：① 实际关联书目记录号（actualBibRecordNos）去空后至少有一条；② 其中至少有一条与书目记录号（bibRecordNo）不一致'],
  ['不显示', '实际关联书目记录号为空或均为空字符串；或全部条目均与书目记录号相同（例如仅含一条且等于书目记录号）'],
  ['样式', '浅蓝色小徽章「实」']
])}
${prdSection('', '「实」标记悬停浮层')}
<ul>
<li><strong>显示前提</strong>：已满足「实」标记显示条件（见上表）</li>
<li><strong>标题</strong>：「实际关联书目记录号」</li>
<li><strong>记录号</strong>：逐条列出全部非空实际关联书目记录号；每条为蓝色可点击链接；<strong>不提供「复制全部」</strong></li>
<li><strong>收起</strong>：鼠标离开约 0.12 秒后收起；点击记录号后不立即关闭，便于连续打开多个弹窗</li>
</ul>
${prdSection('', '书目详情浮动弹窗')}
${prdTable(['要素', '规则'], [
  ['默认尺寸', '宽 1024px × 高 520px'],
  ['最小尺寸', '宽 480px × 高 320px'],
  ['遮罩', '无；列表背景仍可操作'],
  ['标题栏', '书目记录号、订单行号（orderLineNo）、正题名（title）；可拖拽；× 关闭'],
  ['Tab 顺序', '<strong>MARC信息</strong>（默认）→ <strong>单件（N）</strong>'],
  ['单件 Tab', 'N = 当前记录号在编目系统中的单件行数；无数据时为 单件（0）'],
  ['调整尺寸', '四边及四角共 8 个拖拽热区，可调整宽度与高度']
])}
</div>
<div id="interaction">
${prdSection('', '交互逻辑')}
<ol>
<li>悬停「实」→ 点击某条实际关联书目记录号 → 打开浮动弹窗，默认 MARC 页签</li>
<li>重复点击同一记录号：将已有弹窗置于最前并短暂高亮，不新建</li>
<li>同时最多 <strong>3</strong> 个不同记录号弹窗；第 4 个提示「最多同时打开 3 个书目详情弹窗，请先关闭部分弹窗」</li>
<li>每新开一窗，在上一窗基础上向右、向下各错开 32 像素</li>
<li>离开订单行列表页签时清空全部弹窗</li>
</ol>
</div>
<div id="rules">
${prdSection('', '业务规则')}
<ul>
<li><strong>弹窗粒度</strong>：一次只展示用户所点的那一条实际关联书目记录号，不与同订单行其他记录号合并</li>
<li><strong>MARC 数据</strong>：按所点记录号，结合来源订单行书目信息，向编目系统查询 MARC 字段；展示规则同订单行详情「MARC信息」页签</li>
<li><strong>单件数据</strong>：按所点记录号向编目系统查询全部馆藏单件；表格列同订单行详情「单件（N）」页签</li>
<li><strong>单件 Tab 计数</strong>：N 为当前记录号查得的单件行数；无单件时显示「单件（0）」</li>
<li><strong>「实」标记显示</strong>：若实际关联书目记录号为空，或全部与书目记录号相同，则不展示「实」标记</li>
<li><strong>使用范围</strong>：仅订单行列表；不满足「实」标记显示条件时不提供本入口</li>
</ul>
</div>
<div id="exception">
${prdSection('', '异常处理')}
<ul>
<li>编目无 MARC：MARC 页签展示「暂无 MARC 信息」</li>
<li>编目无单件：单件页签表格为空，Tab 为「单件（0）」</li>
<li>已有 3 个弹窗时再开新记录号：提示后拒绝新建</li>
</ul>
</div>`);

const item53511 = prdBlock('5.3.5.11', '列展示配置', `
<div id="overview">
${prdSection('', '功能描述')}
<p>订单行列表工具栏右侧提供「列展示」配置，交互与订单列表一致（详见 <strong>5.2.5.9</strong>），默认固定列不同。</p>
</div>
<div id="rules">
${prdSection('', '默认固定位置')}
${prdTable(['固定位置', '默认列'], [
  ['列首固定', '序号、订单号、馆址、订单行号'],
  ['列尾固定', '操作']
])}
${prdSection('', '业务规则')}
<ul>
<li>复选框列不参与列展示，始终固定列首最左</li>
<li>序号（no）为当前页内连续序号，随分页变化</li>
<li>重置后恢复上表默认顺序与固定位置</li>
<li>其余显隐、拖拽、固定、滚动遮挡规则同 5.2.5.9</li>
</ul>
</div>`);

export const orderManagePrdData = {
  title: '非连续出版物订单',
  tabs: {
    'order-list': {
      label: '订单列表',
      itemIds: ['5.2.5.1', '5.2.5.2', '5.2.5.3', '5.2.5.4', '5.2.5.5', '5.2.5.6', '5.2.5.7', '5.2.5.8', '5.2.5.9']
    },
    'order-line': {
      label: '订单行列表',
      itemIds: ['5.3.5.1', '5.3.5.2', '5.3.5.3', '5.3.5.4', '5.3.5.5', '5.3.5.6', '5.3.5.7', '5.3.5.8', '5.3.5.9', '5.3.5.10', '5.3.5.11']
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
    { id: '5.2.5.9', title: '列展示配置', tab: 'order-list', htmlContent: item5259 },
    { id: '5.3.5.1', title: '筛选查询', tab: 'order-line', htmlContent: item5351 },
    { id: '5.3.5.2', title: '数据表格与行操作', tab: 'order-line', htmlContent: item5352 },
    { id: '5.3.5.3', title: '生成催缺单', tab: 'order-line', htmlContent: item5353 },
    { id: '5.3.5.4', title: '查重操作入口', tab: 'order-line', htmlContent: item5354 },
    { id: '5.3.5.5', title: '查重配置弹窗', tab: 'order-line', htmlContent: item5355 },
    { id: '5.3.5.6', title: '查重结果展示', tab: 'order-line', htmlContent: item5356 },
    { id: '5.3.5.7', title: '编辑订单行', tab: 'order-line', htmlContent: item5357 },
    { id: '5.3.5.8', title: '撤订', tab: 'order-line', htmlContent: item5358 },
    { id: '5.3.5.9', title: '批量导出', tab: 'order-line', htmlContent: item5359 },
    { id: '5.3.5.10', title: '实际关联书目记录号与书目详情浮动弹窗', tab: 'order-line', htmlContent: item53510 },
    { id: '5.3.5.11', title: '列展示配置', tab: 'order-line', htmlContent: item53511 }
  ]
};

export function registerOrderManagePrdData() {
  window.PRD_DATA_MAP = window.PRD_DATA_MAP || {};
  window.PRD_DATA_MAP['order-manage'] = orderManagePrdData;
}
