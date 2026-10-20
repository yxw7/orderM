# 订购操作日志（统一模型 + 订单行订购日志页签）

**日期**：2026-10-20  
**状态**：已确认（头脑风暴定稿，待规格审阅）  
**模块**：订单 / 订单行详情（`#/orders/line/:lineNo`）；事件模型覆盖验收单、批量验收、退换货、结算、催缺  
**关联**：
- 图灵 P10 新增订购日志：`2026-10-14-turing-order-catalog-acceptance-flow-design.md`
- 订单行详情 Tab：`docs/prd.md` 5.4；前端 `OrderLineDetailView.vue`、`order-line-detail.js`
- 批量验收虚拟/实际单册：`2026-10-15-batch-acceptance-virtual-items-design.md`

---

## 1. 背景与目标

### 1.1 背景

订单从新建、发订、撤订、收货、退换货到结算缺少统一操作留痕。图灵对接已约定 P10「新增订购日志」，但订单侧尚无统一日志模型与订单行详情展示。馆员排查套数/状态争议时，只能散落在各业务列表推断。

### 1.2 目标

1. 定义**统一操作日志模型**，覆盖订单、订单行及验收单、批量验收、退换货单、结算单、催缺单等主体。  
2. 完整梳理并固化 **order / order_line** 及关联单据的必记操作清单。  
3. 本期在订单行详情增加 **「订购日志」** 页签：展示本行直接操作 + 触及本行的关联单据动作（摘要 + 关键字段前后值）。  
4. 支持本系统业务成功后自动记，以及图灵经 P10 写入。

### 1.3 非目标（本期）

- 各单据详情页的日志 Tab / 独立「操作日志」管理菜单。  
- 馆员手写备注类日志。  
- 真实后端持久化、告警队列、跨请求幂等框架（原型用 mock；P10 幂等键写入 `refNo`）。  
- 列展示配置、筛选、未提交弹窗等纯 UI 行为记日志。  
- 预验收**仅写草稿**未确认收货时的行级收货日志（真写回仍走逐条/批验/发货导入等通道）。

### 1.4 成功标准

- 订单行详情可按时间倒序看到本行全流程关键操作与关联单据号。  
- 事件清单可作为后续各业务落库写日志的对照表。  
- 展示以业务追溯为主；运维信息通过「来源 / 操作类型」可筛。

---

## 2. 方案

| 方案 | 说明 | 结论 |
|------|------|------|
| 1 | 统一操作日志：**头表 + 关联明细**；驼峰字段 `subjectNo` / `refNo` / `relNo` | **采用** |
| 2 | 行时间线投影 + 单据日志双写 | 否决（双写一致性成本高） |
| 3 | 字段级变更流水再拼操作 | 否决（噪声大、与业务语言不合） |

**本期交付**：统一模型定义 + mock + 订单行「订购日志」页签 + PRD/页签数据同步。单据主体事件仅定义，UI 后做。

---

## 3. 核心约定

1. **头表 + 明细**：一次操作尝试写 **1 条头**；本次直接关联的对方单据写 **0～N 条明细**（见 §4）。  
2. **操作结果**：头表 `operateResult`：`1` 成功、`0` 失败。成功时明细与 `afterJson` 按落库结果填写；失败时填 `errorMsg`，明细可空或仅记录已识别的关联单。纯 UI 取消（未提交）仍不记。  
3. **批量操作**：每个触及的 order / order_line **各写一条头**（必要时带多条明细），summary 可带批次信息；个体成功/失败各自 `operateResult`。  
4. **三号语义**（前端/契约驼峰命名）：  
   - **`subjectNo`（主体单号）**：本条日志归属的主业务单据，日志核心载体。  
   - **`relNo`（关联单号）**：本次操作**直接**关联/变更的对方单据，落在**明细表**（可多条）。  
   - **`refNo`（参考单号）**：间接溯源/上游/外部单号，**不是**本次动作对象；头表可空，至多一个。  
5. **订单行时间线查询**：`subjectType=order_line` 且 `subjectNo=本行号`。单据写回本行时再落一条行日志（`subjectNo=行号`，明细 `relNo=单据号`，需要时 `refNo=订单号` 作溯源）。  
6. **粒度**：摘要 + `beforeJson` / `afterJson` 关键字段快照（展示可拼成 from→to）；不强制整单全量。  
7. **来源**仅两类：`system`（本系统）、`turing`（图灵 P10）。  
8. **写入失败不回滚已成功业务**；原型可容错，实现期可告警/重试。  
9. **P10 幂等**：图灵外部流水写入头表 `refNo`；同一 `source=turing` + `refNo` 不双写。

---

## 4. 数据模型

前端 / 接口契约使用**驼峰**；库表可用下划线，下列为契约字段。对应关系示例：`subjectNo` ↔ `main_order_no`，`refNo` ↔ `ref_order_no`，`relNo` ↔ `rel_order_no`。

### 4.1 头表（日志头）

| 字段 | 类型 | 说明 |
|------|------|------|
| `logId` | string / number | 日志主键 |
| `tenantId` | string / number | 租户 ID |
| `subjectNo` | string | **主体单号**：操作归属主单据 |
| `subjectType` | enum | 主体类型：`order` \| `order_line` \| `acceptance` \| `batch_acceptance` \| `return` \| `exchange` \| `settlement` \| `shortage` |
| `refNo` | string \| null | **参考单号**：上游溯源/外部流水等，非本次操作对象；可空。图灵 P10 外部流水亦写入此字段并作幂等键 |
| `refType` | string \| null | 参考单类型（可空，便于跳转） |
| `source` | enum | `system` \| `turing` |
| `action` | string | 操作类型，见 §5（对齐 `operate_type` 字典/码表） |
| `summary` | string | 操作文字摘要 |
| `operatorId` | string / number | 操作人 ID |
| `operatorName` | string | 操作人姓名 |
| `operateTime` | datetime | 操作时间 |
| `operateResult` | `0` \| `1` | **操作结果**：`1` 成功，`0` 失败 |
| `errorMsg` | string \| null | **失败错误信息**；成功时为空。库字段可对 `error_msg` |
| `ext` | object \| null | **扩展字段**：操作参数、客户端信息等（JSON）；可与 `clientIp` 并存或逐步收拢至 `ext` |
| `clientIp` | string \| null | 客户端 IP，可空 |
| `beforeJson` | object \| null | 操作前关键字段快照 |
| `afterJson` | object \| null | 操作后关键字段快照 |
| `createTime` / `updateTime` | datetime | 入库 / 更新时间 |

建议索引：`(subjectType, subjectNo, operateTime)`、`refNo`。

### 4.2 明细表（关联单号，0～N）

| 字段 | 类型 | 说明 |
|------|------|------|
| `itemId` | string / number | 明细主键 |
| `logId` | string / number | 头表 ID |
| `tenantId` | string / number | 租户 ID（与头表一致） |
| `relNo` | string | **关联单号**：本次直接关联/变更的对方单据 |
| `relType` | string \| null | 关联单据类型（订单/验收单/结算单等） |
| `relAction` | string / number | 对该关联单的动作（绑定/解绑/写回/冲销等） |
| `relDesc` | string \| null | **关联说明**：对该关联单本次关系的文字说明，可空 |
| `ext` | object \| null | **关联扩展**：该明细侧扩展 JSON（关联参数、上下文等），可空 |
| `createTime` | datetime | 入库时间 |

建议索引：`(logId, relNo)`、`relNo`。

### 4.3 填表示例

| 场景 | subjectNo | refNo | 明细 relNo |
|------|-----------|-------|------------|
| 新建批验 A 绑订单 B | A | — | B |
| 订单行 L 经 YS 收货 | L | 所属订单号 O | YS |
| 订单行发订 | L | — | 订单号 O |
| 仅编辑订单头 | 订单号 | — | （无明细） |
| 图灵 P10 写行 | L | 外部/发货溯源号 | （若有）批次/任务号 |

### 4.4 展示

- 来源：`system`→系统，`turing`→图灵。  
- 关键变更：由 `beforeJson` / `afterJson` 差分展示为 `label from→to`。  
- 关联单号列：拼接本头下各明细 `relNo`（可点，依 `relType` 跳转）。

---

## 5. 事件清单

### 5.1 order
| action | 触发场景 | 典型 changes / 备注 |
|--------|----------|---------------------|
| `order.create` | 订单列表新建空单；书目查询新建订单；更换供应商新建订单 | 订单状态、供应商、预算等；来源入口写入 summary |
| `order.edit` | 编辑订单（预算/供应商/发订备注等） | 对应字段 |
| `order.issue` | 发订（单笔/批量） | 订单状态、发订人、发订时间、发订备注；**同时**对各成功行写 `order_line` 状态变化（见 5.2） |
| `order.cancel` | 撤订（单笔/批量） | 订单状态、撤订原因；同步行撤订见 5.2 |
| `order.delete` | 删除订单 | 删除标记或状态 |
| `order.import` | 导入订单（含重新导入/继续入库） | 订单状态（如待导入→待发订）；行创建见 5.2 |
| `order.export` | 导出订单（单笔/批量） | changes 可空；summary 含导出条数/范围 |
| `order.status_auto` | 关联单据导致订单状态自动变化（如→处理中、→已完成/已关闭） | 订单状态 from→to |


### 5.2 order_line

| action | 触发场景 | 典型 changes / 备注 |
|--------|----------|---------------------|
| `order_line.create` | 导入创建行；书目查询新建订单落行；书目查询加入订单；更换供应商新建行；更换供应商加入已有订单追加行 | 行状态、套数、供应商、馆址；summary 标明入口 |
| `order_line.edit` | 编辑订单行 | 可编辑字段前后值 |
| `order_line.cancel` | 撤订订单行（含批量撤订、更换供应商迁出撤订段、催缺撤订） | 行状态、flowStats 撤订段、原因 |
| `order_line.delete` | 删除订单行 | — |
| `order_line.export` | 导出订单行（含批量） | changes 可空 |
| `order_line.dedup` | 查重完成写回 | 馆藏/订单重复标识、本馆/全市件数；自动写 `bibRecordNo` 时记入 changes |
| `order_line.bib_link` | 查重结果关联 / 取消关联书目 | `bibRecordNo` / `actualBibRecordNos` 等 |
| `order_line.receive` | 逐条收货写回；批量验收收货写回；发货单导入收货写回 | 已收套数、验收状态等 |
| `order_line.receive_offset_exchange` | 优先对换货记录收货冲销 | 已收↑、已换↓；可与同次普通收货分条或同条 summary 标明拆分 |
| `order_line.exchange` | 换货写回（逐条/导入/批验等） | 已换、相关套数 |
| `order_line.exchange_arrive` | 换货管理到货冲销 | 已换/已收等 |
| `order_line.return` | 退货写回 | 已退、相关套数 |
| `order_line.revoke_disposition` | 验收单撤销收货/换货/退货 | 套数与验收状态回滚 |
| `order_line.shortage` | 生成催缺单触及本行 | 是否催缺、催缺套数等 |
| `order_line.settle_apply` | 验收单申请结算等触及行结算状态 | 结算状态 |
| `order_line.settle` | 生成结算单 / 确认结算等 | 结算状态、结算单号 |
| `order_line.settle_fail` | 结算失败/驳回等 | 结算状态 |
| `order_line.status_auto` | 行状态自动推进（如→处理中、→已关闭） | 行状态 from→to |
| `order_line.turing_log` | 图灵 P10 写入（馆藏分配后、分拣交接等） | 由调用方提供 summary / before·after；外部流水写入 `refNo`（幂等） |

发订成功时：除 `order.issue` 外，每个变为已发订的行记一条（可用 `order_line.status_auto` 或专用 `order_line.issue`——**采用 `order_line.issue`**，与订单头发订对应，便于筛选）。

| action | 说明 |
|--------|------|
| `order_line.issue` | 随订单发订同步：行状态待发订→已发订，发订人/时间等 |

### 5.3 单据主体（本期定义事件，UI 后做）

单据日志：头表 `subjectNo` = 该单据号，`subjectType` = 单据类型；绑定订单等直接对方写入明细 `relNo`；溯源号用 `refNo`。若操作同时改写订单行，再为每个触及行写一条 `order_line.*`（`subjectNo` = 行号，明细 `relNo` = **本单据号**，`refNo` = 订单号可选）。

| subjectType | 必记动作 |
|-------------|----------|
| `acceptance` | 新建/编辑、预验收入库（草稿）、结束验收、申请结算、导出 |
| `batch_acceptance` | 新建（含单册生成方式 none/virtual/actual）、列表收货写回、虚拟→实际（若有） |
| `return` / `exchange` | 创建、到货冲销、状态变更 |
| `settlement` | 生成、确认、失败/驳回 |
| `shortage` | 生成；（若产品后续有取消/关闭则一并记） |

单据侧 `action` 命名采用 `acceptance.create`、`settlement.confirm` 等形式，实现计划中与前端枚举表一并列出；**行页签只查 `order_line` 主体记录**。

### 5.4 明确不记

- 列展示配置、筛选条件变更  
- 仅打开未提交的弹窗  
- 只读查看 MARC/单件浮窗、导出配置面板未执行导出  
- 预验收仅草稿、未发生订单行套数/状态写回

---

## 6. 订单行「订购日志」页签

### 6.1 入口与位置

- 页面：订单行详情 `OrderLineDetailView`  
- Tab 文案：`订购日志`  
- 插入位置：**结算记录** 与 **单件** 之间  

### 6.2 布局（方案 A）

筛选条 + DataTable（风格对齐相关订单行/验收/结算 Tab）：

| 列 | 说明 |
|----|------|
| 操作时间 | `operateTime` |
| 操作人 | `operatorName` |
| 来源 | 系统 / 图灵 |
| 操作类型 | `action` 中文标签 |
| 结果 | `operateResult`：成功 / 失败；失败可悬停或展开见 `errorMsg` |
| 摘要 | `summary` |
| 关键变更 | `beforeJson`/`afterJson` 差分；多条用 ` · ` 拼接，过长可展开 |
| 关联单号 | 明细 `relNo` 列表；可点跳转；无则 — |
| 参考单号 | `refNo`；可点；无则 — |

- 筛选项：来源（全部 / 系统 / 图灵）、操作类型（全部 + 枚举）、结果（全部 / 成功 / 失败）  
- 默认时间倒序；分页 10/20/50  
- 空态：`暂无订购日志`  
- 只读：无新增、无删除日志  

### 6.3 查询

按 §3 第 5 条：`subjectType=order_line` 且 `subjectNo=当前行号`。筛选在客户端或查询参数中作用于结果集；切换筛选后分页重置为第 1 页。

### 6.4 关联跳转

按单据类型路由到现有详情/列表；单据不存在或已删除时提示「单据不存在或已删除」，不阻挡日志列表。

---

## 7. 写入与 P10

### 7.1 本系统

业务提交结束后追加日志（成功 `operateResult=1`，失败 `operateResult=0` + `errorMsg`）。mock：`appendOrderLog(...)`。实现期：业务已成功时日志写入失败不回滚业务。可选参数、客户端上下文写入 `ext`。

### 7.2 图灵 P10

- 接口语义：新增订购/单册相关日志 → 落为本模型一条（通常 `subjectType=order_line`，`source=turing`，`action=order_line.turing_log` 或调用方指定更细 action）。  
- 请求须带参考单号写入 `refNo`（外部流水/溯源号）；同一 `source=turing` + `refNo` 重复提交返回已有记录。  
- 出现阶段对齐现有设计：预验收馆藏分配后、上机分拣交接后等。

### 7.3 错误处理

| 场景 | 行为 |
|------|------|
| 业务失败（已提交） | 记日志，`operateResult=0`，填 `errorMsg`；`ext` 可留操作参数 |
| 用户取消未提交 | 不写日志 |
| 业务成功、日志失败 | 不回滚业务；告警/重试（原型可降级） |
| P10 重复 `refNo`（同 source=turing） | 幂等返回，不新增 |
| 关联单据跳转失效 | 提示后停留当前页 |

---

## 8. 前端改造要点（实现期）

| 项 | 说明 |
|----|------|
| `order-line-detail.js` | `getOrderLineTabs` 增加 `orderLog`；mock 日志数据与按行查询 |
| `OrderLineDetailView.vue` | 新 Tab：筛选 + DataTable |
| PRD | `docs/prd.md` 5.4 与 `order-line-detail-prd-data.js` 同步 |
| 业务写点 | 发订/撤订/收换退等成功路径预留 append（可分期接入，mock 先灌样例） |

---

## 9. 决策记录

| 项 | 结论 |
|----|------|
| 范围 | 全量事件定义；本期 UI 仅订单行订购日志页签 |
| 时间线范围 | 本行操作 + 关联单据触及本行 |
| 粒度 | 摘要 + beforeJson/afterJson 关键快照 |
| 来源 | 仅 `system` / `turing`；无手写备注 |
| 用途侧重 | 业务追溯为主，来源/类型可筛兼顾运维 |
| 架构 | 头表 + 关联明细（方案 1） |
| 三号命名 | 驼峰：`subjectNo` 主体、`relNo` 关联（明细 0～N）、`refNo` 参考（头表可空） |
| 结果/扩展 | `operateResult`（1成功/0失败）、`errorMsg`、`ext`（操作参数/客户端等） |
| 页签布局 | 筛选条 + 表格（方案 A） |
| 增补操作 | 列表新建订单、发货导入写回、换货到货、查重写回与书目关联、结算后续、申请结算、状态自动推进、发货冲销等全部纳入（头脑风暴缺口表 1–10） |
| 不记 | 列配置/筛选/未提交弹窗/只读查看/预验收纯草稿 |

---

## 10. 后续工作

1. 编写 implementation plan（mock 页签优先，再挂业务写点）。  
2. 单据详情日志 Tab 另开设计。  
3. P10 接口字段级契约与联调。  
4. 实现期将 `order_line.issue` 与发订、批量部分成功提示对齐。  
