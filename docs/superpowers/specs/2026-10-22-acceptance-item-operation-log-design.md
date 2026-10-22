# 验收单操作日志 + 单册操作日志（事件清单与详情 UI）

**日期**：2026-10-22  
**状态**：已确认（头脑风暴定稿，待规格审阅）  
**模块**：验收单详情（验收单管理 `#/acceptance/...`、批量验收详情）；按册单册抽屉  
**关联**：
- 统一操作日志模型：`2026-10-20-order-operation-log-design.md`
- 批量验收虚拟/实际单册：`2026-10-15-batch-acceptance-virtual-items-design.md`
- 图灵 P9/P10：`2026-10-14-turing-order-catalog-acceptance-flow-design.md`（联调非本期）
- PRD：`docs/prd.md` 5.6（验收单详情）、5.15（批量验收）

---

## 1. 背景与目标

### 1.1 背景

统一操作日志模型已覆盖订单行「订购日志」页签，验收单与单册侧仅有粗粒度事件定义，且明确「单据详情日志 Tab 后做」。馆员在验收单详情排查收货/撤销/批验生成方式时，缺少按验收单与按单册的留痕入口。

### 1.2 目标

1. 在统一头表 + 明细模型上，补全 **`acceptance` / `item`** 必记事件与双写规则。  
2. 验收单详情（**验收单管理 + 批量验收，同一规格**）在「按册」旁增加同级 **「操作日志」** 页签。  
3. 按册操作列增加 **「详情」** → 右侧抽屉：上半单册只读信息，下半该册操作日志。  
4. 查询规则与订购日志一致：只查头表主体，不按明细反查。

### 1.3 非目标（本期）

- 图灵 P9/P10 联调（模型可预留 `source=turing`、`item.turing_log` / `item.update`）。  
- 独立「操作日志」管理菜单；手写备注类日志。  
- 验收单管理与批量验收两套不同日志规则。  
- 日志筛选、字段变更列展示、改订单行订购日志查询规则。  
- 真实后端持久化与告警（原型 mock）。

### 1.4 成功标准

- 两边验收详情均可打开「操作日志」，按验收单主体看到事件。  
- 有单册时，操作列「详情」抽屉上半字段正确、下半为该册日志。  
- 无单册验收单仍有操作日志页签，按册无「详情」入口。

---

## 2. 方案

| 方案 | 说明 | 结论 |
|------|------|------|
| 1 | 复用统一模型；`acceptance` 统一挂验收单（含批验）；新增 `item`；批量触及多册时验收单 1 头 + 各单册各 1 头共用 `batchId`；独立规格 | **采用** |
| 2 | 整批只写验收单头；单册抽屉仅册级变更 | 否决（单册时间线不完整） |
| 3 | 续写进 10-20 并保留 `batch_acceptance` 与 `acceptance` 双 subjectType | 否决（UI 同一规格却查询分叉） |

---

## 3. 核心约定

1. **模型**：完全复用 `2026-10-20` 头表 + 明细；三号语义、`batchId`、`operateResult` / `errorMsg` / `ext`、来源 `system` \| `turing` 不变。  
2. **`subjectType=acceptance`**：验收单管理与批量验收**共用**；是否批验、`itemGenMode` 等写入头表 `ext`（如 `ext.itemGenMode`、`ext.entry=batch|manage`）。原 10-20 中的 `batch_acceptance` **合并进 `acceptance`**，不再作为查询主体类型。  
3. **`subjectType=item`（新增）**：订单侧单册；`subjectNo` = **稳定单册业务号**（非条码；条码可变）。原型可用按册行稳定 id / 单册号。  
4. **查询**：  
   - 验收单「操作日志」：`subjectType=acceptance` 且 `subjectNo=本验收单号`。  
   - 单册抽屉日志：`subjectType=item` 且 `subjectNo=本单册号`。  
   - **不按明细 `relNo` 反查**。触及但主体不在本对象上的事件，若需可见须另写/双写一头。  
5. **双写 / `batchId`**：一批收货等同时影响验收单与多册时 → 验收单 1 头 + **每册** 1 头，共用同一 `batchId`；明细互挂。订单行订购日志若要看见，仍按 10-20 另写 `order_line.*` 头（本期不改行页签规则）。  
6. **不记**：切换预验收（仅筛选）、列配置/筛选变更、未提交弹窗、只读查看、导出配置未执行导出。

---

## 4. 事件清单

### 4.1 acceptance

| action | 触发场景 | 备注 |
|--------|----------|------|
| `acceptance.create` | 新建验收单 / 批验新建（含 `itemGenMode`） | `virtual` 时明细可挂预生成 `item` / `acceptance_line` / `order_line` |
| `acceptance.edit` | 编辑头信息 | — |
| `acceptance.pre_accept` | 预验收草稿入库 | 无行套数写回则明细可不含行写回 |
| `acceptance.receive` | 逐条收货确认；批验收货窗确认 | 多册时见 §5 双写 |
| `acceptance.exchange` | 挂本单的换货写回 | — |
| `acceptance.return` | 挂本单的退货写回 | — |
| `acceptance.revoke` | 撤销收货/换货/退货 | — |
| `acceptance.finish` | 结束验收 | — |
| `acceptance.settle_apply` | 申请结算 | — |
| `acceptance.export` | 导出清单（已执行） | — |
| `acceptance.restart` | 批验列表「重启」等状态回退（若产品保留） | 无则实现期可不上线该 action |

### 4.2 item

| action | 触发场景 | 备注 |
|--------|----------|------|
| `item.create` | 虚拟单册预生成；收货后生成实际单册 | `beforeJson` 可空；`afterJson` 含阶段/条码等 |
| `item.promote` | `itemPhase`：`pre→actual`（含清空虚拟条码） | 批验收货确认、图灵实际验收落库对齐 |
| `item.update` | 改条码、馆藏地等单册字段 | 含图灵 P9 落库后；`source` 可为 `turing` |
| `item.void` / `item.delete` | 作废或删除（若业务有） | 无该能力则不上线 |
| `item.turing_log` | P10 明确写到单册侧 | 预留；联调非本期；`refNo` 幂等 |

### 4.3 与订单行对照（不改行查询）

收货/换退/撤销等若需出现在订单行「订购日志」，继续按 10-20 写 `order_line.receive` 等主体为订单行的头；验收单/单册页签**不**依赖这些头。

---

## 5. 业务场景写入对照（摘要）

约定：主表 = 头表一行；关联表 = 明细 0～N。默认成功路径。

| 业务场景 | 头表（可多头） | batchId | 关联表示意 |
|----------|----------------|---------|------------|
| 新建验收单（none） | `acceptance.create` → acceptance/新单号 | — | order（若绑定） |
| 批验新建 virtual | `acceptance.create` + 各 `item.create` | 共用（多头时） | order；order_line；item |
| 批验新建 actual/none（只建头） | `acceptance.create` | — | order |
| 预验收草稿入库 | `acceptance.pre_accept` | — | 可选 order_line |
| 逐条收货（有单册生成） | `acceptance.receive` + 各 `item.create` | 共用 | order_line；order；item |
| 批验 none 收货（无单册） | `acceptance.receive` | — | order_line；order |
| 批验 actual 收货 | `acceptance.receive` + 各 `item.create` | 共用 | 同上 |
| 批验 virtual 确认收货 | `acceptance.receive` + 各 `item.promote` | 共用 | 同上 |
| 撤销收/换/退 | `acceptance.revoke`；若回滚/作废单册则各 `item.*` | 共用（多头时） | order_line；item |
| 结束验收 / 申请结算 / 导出 | 对应 `acceptance.*` 一头 | — | 按需 |
| P9 改单册条码等 | `item.update`（source=turing 可） | — | acceptance；order_line |
| P10 单册侧日志 | `item.turing_log` | — | `refNo` 外部流水 |

`itemGenMode=none`：不写 `item.*`；按册无「详情」。

---

## 6. UI

### 6.1 验收单「操作日志」页签

- **范围**：验收单管理详情、批量验收详情（同一组件/规则）。  
- **页签顺序**：按种 → 按册 → **操作日志**。  
- 「切换预验收」仍在页签行右侧，**仅**影响按种/按册过滤，**不影响**操作日志列表。  
- 文案：`操作日志`，**不加（N）**。  
- 列（与订购日志一致）：操作时间、操作人、操作类型、操作说明、关联单号（可跳转；多项 `;` 分隔）。  
- 无筛选；时间倒序；分页 10/20/50。  
- 空态：`暂无操作日志`；只读。  
- 无单册时：**仍显示**本页签。

### 6.2 按册「详情」→ 右侧抽屉

- 操作列增加 **「详情」**（当前行存在单册时显示）。  
- 点击打开右侧抽屉。

**上半 · 单册只读信息**（随资源类型展示按册已有字段，不提供编辑）：

| 字段 | 说明 |
|------|------|
| 单册号 | 主体号 `subjectNo` |
| 条码号 | 空则 `—` |
| 单册阶段 | 预验收 / 实际（`itemPhase`） |
| 订单行号 | 可跳转 |
| ISBN/ISRC、题名、作者 | — |
| 定价 / 实洋 / 单价、币种 | — |
| 套内册数或套内件数 | 纸质 / 视听 |
| 验收人、验收时间 | — |
| 验收单号 | 可跳转 |
| 视听扩展 | 载体、商品条码、目录号（有则显示） |

展示该行真实 `itemPhase`，不因「切换预验收」勾选改写字段含义。

**下半 · 操作日志表**：与 §6.1 同一五列；查询 `item` + 本单册号；空态 `暂无操作日志`。

- 打开抽屉时加载详情 + 日志第 1 页；关闭不重置按册列表筛选。  
- 单册已不存在：提示「单册不存在或已删除」，关闭抽屉。  
- 关联跳转失败：提示「单据不存在或已删除」，抽屉不关。

---

## 7. 错误处理

| 场景 | 行为 |
|------|------|
| 业务失败（已提交） | 可记日志，`operateResult=0` + `errorMsg` |
| 用户取消未提交 | 不写日志 |
| 业务成功、日志失败 | 不回滚业务；原型可降级 |
| P10 重复 `refNo`（同 source=turing） | 幂等返回 |
| 关联单据跳转失效 | 提示后停留当前页/抽屉 |

---

## 8. 前端改造要点（实现期）

| 项 | 说明 |
|----|------|
| 验收详情视图 | 页签增加 `operationLog`；批验与管理详情共用 |
| 按册操作列 | 「详情」打开抽屉 |
| 单册抽屉组件 | 上半字段区 + 下半 DataTable |
| 日志 mock | 扩展统一 `order-operation-log`（或并列 acceptance/item 查询封装），按 subject 过滤 |
| PRD | 同步 5.6 / 5.15：操作日志页签、按册详情抽屉 |
| 10-20 | 交叉引用本文；`batch_acceptance` 合并说明 |

---

## 9. 决策记录

| 项 | 结论 |
|----|------|
| 范围 | 事件清单 + 验收单页签 UI + 单册抽屉（详情+日志） |
| 覆盖页面 | 验收单管理详情 + 批量验收详情，同一规格 |
| 架构 | 方案 1：统一模型 + `acceptance` / `item` + 独立规格 |
| 查询 | 只查头表主体；双写保证可见性 |
| 批验 subjectType | 并入 `acceptance`，不用 `batch_acceptance` 查页签 |
| 单册入口 | 操作列「详情」→ 右侧抽屉（上详情下日志），非独立路由页、非仅 Modal 日志 |
| 列 | 与订购日志五列完全一致 |
| 图灵 | 模型预留；联调非本期 |

---

## 10. 后续工作

1. 编写 implementation plan（mock 页签/抽屉优先，再挂业务写点）。  
2. 业务成功路径分期 `append`（新建/收货/撤销/promote 等）。  
3. P10 单册侧字段级契约与联调另开。  
4. 实现期将 10-20 §5.3 / §5.5.5 中 `batch_acceptance` 表述与本文对齐。  
