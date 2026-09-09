import { prdBlock, prdSection, prdTable } from '@/prd/prd-html-builder';

const item5951 = prdBlock('5.9.5.1', '筛选查询', `
<div id="overview">
${prdSection('', '功能描述')}
<p>多条件检索订户列表，支持展开更多条件。</p>
${prdSection('', '页面要素')}
${prdTable(['字段', '控件', '说明'], [
  ['订户名称（name）', '文本', '模糊匹配'],
  ['所属机构（institutionName）', '文本', '模糊匹配订户所属机构展示名'],
  ['资源类型（resourceType）', '下拉', '全部 / 纸质书 / 视听资料'],
  ['预算名称（budget）', '文本', '模糊匹配订户已配预算'],
  ['订户状态（status）', '下拉（展开）', '全部 / 使用中 / 已停用'],
  ['创建日期（createDate）', '日期范围（展开）', '起止日期']
])}
<ul>
<li>「检索」「重置」；布局约 3 列</li>
</ul>
</div>
<div id="rules">
${prdSection('', '交互逻辑')}
<ul>
<li>点「检索」按当前条件过滤并回到第 1 页</li>
<li>点「重置」清空条件并恢复全量列表</li>
</ul>
${prdSection('', '业务规则')}
<ul>
<li>各已填条件为 AND 组合</li>
<li>资源类型、预算按订户已配置业务范围字段匹配；所属机构按展示名模糊匹配</li>
</ul>
${prdSection('', '前置/后置条件')}
<ul>
<li>前置：无</li>
<li>后置：表格展示过滤结果</li>
</ul>
</div>
<div id="exception">
${prdSection('', '异常处理')}
<ul>
<li>无匹配：表格空态「暂无数据」</li>
</ul>
</div>
`);

const item5952 = prdBlock('5.9.5.2', '数据表格与行操作', `
<div id="overview">
${prdSection('', '功能描述')}
<p>分页展示订户；提供新增、编辑、启停、删除及查看馆员入口。</p>
${prdSection('', '页面要素')}
<ul>
<li>工具栏：「新增订户」</li>
<li>表格列：序号、订户名称、所属机构、资源类型、预算名称、订户状态、馆员列表、创建日期、操作</li>
<li>订户名称：蓝色链接，点开查看详情</li>
<li>订户状态：<span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:#52c41a;margin-right:6px;"></span>使用中（绿色）/ <span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:#ff4d4f;margin-right:6px;"></span>已停用（红色）</li>
<li>馆员列表：有数据且可查看时蓝色「查看」；否则灰色「查看」不可点</li>
<li>操作列：编辑；使用中另有停用、删除；已停用另有启用、删除（无独立「权限配置」）</li>
<li>创建日期列头可切换升/降序（默认降序）</li>
<li>分页：默认 50 条/页，可选 10 / 20 / 50</li>
</ul>
</div>
<div id="interaction">
${prdSection('', '交互逻辑')}
<ul>
<li>点「新增订户」打开完整表单弹窗（新增模式）</li>
<li>点「编辑」打开完整表单弹窗（编辑模式）</li>
<li>点状态操作打开对应确认弹窗</li>
<li>点馆员「查看」打开馆员名单弹窗</li>
</ul>
${prdSection('', '业务规则')}
<ul>
<li>列表「所属机构 / 资源类型 / 预算名称」取自该订户编辑保存字段；所属机构未填时展示「—」</li>
<li>新增订户默认状态为使用中；基本信息与三页签字段在新增/编辑弹窗中一次维护</li>
</ul>
${prdSection('', '前置/后置条件')}
<ul>
<li>前置：无</li>
<li>后置：行操作结果即时反映到列表</li>
</ul>
</div>
<div id="exception">
${prdSection('', '异常处理')}
<ul>
<li>无数据：表格空态（前端 Mock）</li>
</ul>
</div>
`);

const item5953 = prdBlock('5.9.5.3', '新增/编辑订户', `
<div id="overview">
${prdSection('', '功能描述')}
<p>新增与编辑共用同一弹窗：上半基本信息（订户名称、备注）；备注下方三个横向页签——<strong>业务范围</strong>、<strong>查重显示</strong>、<strong>所属组织</strong>。一次提交保存全部字段。本版无独立「权限配置」入口、无「添加操作许可」、无数据归属。</p>
${prdSection('', '页面要素')}
<ul>
<li>标题：新增订户 / 编辑订户；内容区可纵向滚动；底栏取消 / 提交（新增）或 取消 / 保存（编辑）</li>
<li>上半：订户名称、备注</li>
<li>下半页签（默认「业务范围」）：业务范围 / 查重显示 / 所属组织</li>
</ul>
${prdTable(['页签', '字段', '必填', '控件', '说明'], [
  ['业务范围', '资源类型（types）', '是', '可搜索多选', '至少 1 项'],
  ['业务范围', '预算管理（budgets）', '是', '可搜索多选', '至少 1 项；界面标签为「预算管理」'],
  ['业务范围', '条码号类型（barcodeTypes）', '是', '可搜索多选', '至少 1 项'],
  ['查重显示', '所属分馆（displayBranchCodes）', '否', '可搜索多选', '空表示未限定'],
  ['查重显示', '所属馆藏地（displayCollectionCodes）', '否', '可搜索多选', '已选分馆 → 仅下级并集；未选分馆 → 全部；变更分馆后剔除不合法项'],
  ['所属组织', '所属机构（institutionId）', '是', '可搜索单选', '展示编码 | 名称'],
  ['所属组织', '所属馆（branchId）', '否', '可搜索单选', '依赖已选机构；未选机构时禁用；变更机构清空'],
  ['所属组织', '所属馆藏地（collectionId）', '否', '可搜索单选', '依赖已选所属馆；未选所属馆时禁用；变更所属馆清空']
])}
${prdTable(['基本字段', '必填', '控件', '说明'], [
  ['订户名称（name）', '是', '文本', '去首尾空格；最长 50；不可与其他订户重名'],
  ['备注（remark）', '否', '多行文本', '最长 500']
])}
</div>
<div id="rules">
${prdSection('', '交互逻辑')}
<ul>
<li>打开时带入当前订户已存数据（编辑）或空表（新增）；默认选中「业务范围」页签</li>
<li>变更所属机构 → 清空所属馆、所属馆藏地；变更所属馆 → 清空所属馆藏地</li>
<li>变更查重显示「所属分馆」后，剔除不再属于所选分馆下级的「所属馆藏地」选项</li>
<li>校验失败时字段下展示错误文案，不关闭弹窗，并自动切到首个失败字段所在页签</li>
<li>提交成功后关闭弹窗并刷新列表</li>
</ul>
${prdSection('', '业务规则')}
<ul>
<li>所属组织：所属机构必填；所属馆、所属馆藏地可空</li>
<li>查重显示两字段均可空</li>
<li>停用节点：编辑时已选项仍可展示</li>
<li><strong>馆员多订户合并（供馆藏查重提交）</strong>：按馆员关联订户先后顺序，合并各订户「所属组织」解析出的分馆编码（首次出现保留）；见 5.3.5.5</li>
<li>订单查重不使用本范围</li>
</ul>
${prdSection('', '前置/后置条件')}
<ul>
<li>前置：编辑时已选中目标订户</li>
<li>后置：新增行插入列表顶部；编辑更新全部表单字段</li>
</ul>
${prdSection('', '异常处理')}
${prdTable(['场景', '提示'], [
  ['名称为空', '请输入'],
  ['名称超长', '已超字符限制'],
  ['名称重复', '已存在'],
  ['备注超长', '已超字符限制'],
  ['资源类型/预算管理/条码类型/所属机构未选', '请选择']
])}
</div>
`);

const item5954 = `
<details>
<summary style="cursor:pointer;color:#8c8c8c;">【5.9.5.4 配置弹窗（已废弃）】</summary>
<div style="padding:8px 0 4px 12px;border-left:3px solid #d9d9d9;margin:8px 0;color:#595959;">
<p>原独立「配置」弹窗已合并至 <strong>5.9.5.3 新增/编辑订户</strong>；列表不再提供「配置」入口。业务范围、查重显示、所属组织在新增/编辑弹窗页签内一次维护。</p>
</div>
</details>
`;

const item5955 = prdBlock('5.9.5.5', '查看订户详情', `
<div id="overview">
${prdSection('', '功能描述')}
<p>只读展示订户基本信息与权限范围（含业务、查重显示、所属组织相关字段）。</p>
${prdSection('', '页面要素')}
<ul>
<li>标题：查看订户；页签：基本信息 / 权限范围</li>
<li>基本信息：订户名称、订户状态、创建日期、备注</li>
<li>权限范围：资源类型、预算管理、条码号类型、查重·分馆、查重·馆藏地、所属机构、所属馆、所属馆藏地（空则「—」）</li>
<li>底部：关闭</li>
</ul>
</div>
<div id="interaction">
${prdSection('', '交互逻辑')}
<ul>
<li>点订户名称打开；默认基本信息页签；关闭不修改数据</li>
</ul>
${prdSection('', '业务规则')}
<ul>
<li>只读；与列表当前行数据一致</li>
</ul>
${prdSection('', '前置/后置条件')}
<ul>
<li>前置：列表存在目标订户</li>
<li>后置：无</li>
</ul>
</div>
<div id="exception">
${prdSection('', '异常处理')}
<ul>
<li>无</li>
</ul>
</div>
`);

const item5956 = prdBlock('5.9.5.6', '停用 / 启用 / 删除', `
<div id="overview">
${prdSection('', '功能描述')}
<p>对订户执行停用、启用或删除；弹窗标题随操作为「停用订户 / 启用订户 / 删除订户」。</p>
${prdSection('', '页面要素')}
<ul>
<li>展示当前订户名称、编码（序号）及备注输入（原型字段；确认即执行状态变更或删除）</li>
</ul>
</div>
<div id="rules">
${prdSection('', '交互逻辑')}
<ul>
<li>确认后：停用 → 状态已停用；启用 → 使用中；删除 → 从列表移除</li>
<li>取消或关闭不变更</li>
</ul>
${prdSection('', '业务规则')}
<ul>
<li>使用中可停用/删除；已停用可启用/删除</li>
<li>删除为物理移除列表行（原型）；正式环境是否软删由后端约定</li>
</ul>
${prdSection('', '前置/后置条件')}
<ul>
<li>前置：已选中目标订户</li>
<li>后置：列表刷新</li>
</ul>
</div>
<div id="exception">
${prdSection('', '异常处理')}
<ul>
<li>无（前端 Mock）</li>
</ul>
</div>
`);

const item5957 = prdBlock('5.9.5.7', '馆员列表查看', `
<div id="overview">
${prdSection('', '功能描述')}
<p>查看已关联到该订户的馆员姓名列表。</p>
${prdSection('', '页面要素')}
<ul>
<li>弹窗表格列：序号、馆员姓名；支持关键字检索与重置；底部关闭</li>
</ul>
</div>
<div id="rules">
${prdSection('', '交互逻辑')}
<ul>
<li>仅当订户已关联馆员且当前用户具备查看权限时，「查看」可点</li>
</ul>
${prdSection('', '业务规则')}
<ul>
<li>关联关系来自馆员-订户关联维护（馆员列表模块）；本弹窗只读</li>
</ul>
${prdSection('', '前置/后置条件')}
<ul>
<li>前置：订户存在关联馆员且可查看</li>
<li>后置：无</li>
</ul>
</div>
<div id="exception">
${prdSection('', '异常处理')}
<ul>
<li>无关联或无权限：列表展示灰色不可点「查看」</li>
</ul>
</div>
`);

export const subscriberManagePrdData = {
  title: '订户管理-订户列表',
  items: [
    { id: '5.9.5.1', title: '筛选查询', htmlContent: item5951 },
    { id: '5.9.5.2', title: '数据表格与行操作', htmlContent: item5952 },
    { id: '5.9.5.3', title: '新增/编辑订户', htmlContent: item5953 },
    { id: '5.9.5.4', title: '配置弹窗（已废弃）', htmlContent: item5954 },
    { id: '5.9.5.5', title: '查看订户详情', htmlContent: item5955 },
    { id: '5.9.5.6', title: '停用 / 启用 / 删除', htmlContent: item5956 },
    { id: '5.9.5.7', title: '馆员列表查看', htmlContent: item5957 }
  ]
};

export function registerSubscriberManagePrdData() {
  window.PRD_DATA_MAP = window.PRD_DATA_MAP || {};
  window.PRD_DATA_MAP['subscriber-manage'] = subscriberManagePrdData;
}
