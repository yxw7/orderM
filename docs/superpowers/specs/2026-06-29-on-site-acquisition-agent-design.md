# 现采 Agent 交互 — 设计规格

**日期**：2026-06-29  
**状态**：待评审  
**模块**：现采 / Agent 对话 / 订单创建

---

## 1. 背景与目标

### 1.1 现采业务流程（现状）

| 步骤 | 环节 | 线上/线下 | 现状 |
|------|------|-----------|------|
| ① | 样板间选书后查重 | 线上 | 馆员携带 Aleph 客户端电脑 + 扫码枪扫描 ISBN 查重，据结果决定是否采购 |
| ② | 复本分配与分组 | 线下 | 按采购复本数量（1/3/5/7/9）分组；各馆址有参考分配规则（如 1 本→华威桥库本，3 本→华威桥 2 + 城图 1） |
| ③ | 书商采集导出 | 线下 | 书商按分组通过采集器采集，从订单后台导出 Excel |
| ④ | 馆址复本分配确认 | 线下 | 馆员在 Excel 中分配各馆址复本数，返回书商确认 |
| ⑤ | 主任审核 | 线下 | 馆员将确认书单提交主任线下审核 |
| ⑥ | 按馆址建单 | 线上 | 审核后馆员按馆址拆分 Excel，导入订单管理系统创建订单 |

### 1.2 业务痛点

- 查重依赖 Aleph 客户端与扫码枪，样板间现场设备负担重。
- 复本分配、馆址确认、分组大量依赖 Excel 线下往返，效率低、易出错。
- 选书与建单割裂，信息需多次搬运。

### 1.3 目标

通过 **Agent 对话**（移动端为主）支撑现采 **选书 → 查重 → 采购决策 → 复本分配 → 建单** 闭环：

- 馆员可 **拍照/扫描封面或版权页** 识别书目并查重。
- Agent 提供 **查重结果、采购建议、复本分配建议**；馆员逐本决策。
- 会话 **草稿可暂停续做**（Agent 持久化）。
- 全部书目确认后：**CONFIRM 确定订单**（OMS 返回明确订单号）→ **SUBMITTED 创建订单行**。
- 建单前/后 **导出书目清单** 供主任线下审核。
- 主任审核仍线下进行；**书商采集环节（步骤 ③）本期不做**。

### 1.4 非目标（本期不做）

- 书商采集器对接与 Excel 导出给书商（原步骤 ③）。
- 系统内主任审批工作流（审核仍线下）。
- Aleph 客户端替代（查重走订单管理系统查重服务，与订单行列表、书目查询对齐）。
- 桌面端独立 Agent 客户端（移动端优先；桌面可后续迭代查看草稿/导出）。

---

## 2. 方案选型

| 方案 | 说明 | 结论 |
|------|------|------|
| A. 纯对话 Agent | 全流程由 LLM + 工具链驱动，无固定阶段 | 移动端难展示进度；状态难持久；流程易跑偏，不采用 |
| B. 固定向导 | 分步表单，Agent 仅做提示 | 对话感弱；分配调整不自然，不采用 |
| **C. 引导式工作流 + 对话层** | 底层状态机保证阶段与草稿；对话负责扫书、解读查重、调整分配 | **采用** |

**推荐 C 的理由**：样板间现场需要可见进度（已扫几本、待决几本），同时馆员需自然语言调整（「这本改 3 本，城图 2 本」）。

---

## 3. 首期范围确认

| 原步骤 | 纳入 Agent | 说明 |
|--------|-----------|------|
| ① 查重 | ✅ | 拍照/OCR → 馆藏 + 订单查重 |
| ② 复本分组建议 | ✅ | AI 结合馆藏缺口与规则建议 |
| ③ 书商采集 | ❌ | 跳过 |
| ④ 馆址分配确认 | ✅ | 对话中确认/调整 |
| ⑤ 主任审核 | 部分 | 仍线下；Agent **导出书目清单** 供审核 |
| ⑥ 建单 | ✅ | INIT 确定 CREATE/JOIN；CONFIRM 预览并提交 |

**设备**：移动端为主（手机/平板在样板间现场拍照选书）。  
**会话**：草稿可暂停续做。  
**复本建议**：AI 根据馆藏情况智能推荐（规则 + 馆藏缺口等综合判断）。  
**批次元数据**：会话开始时录入书商、预算、资源类型、语种及 **建单策略（新建/加入）** 等，后续书目继承。

---

## 4. 整体架构

```
┌─ 移动端 Agent UI ─────────────────────────────┐
│  对话区 | 阶段进度条 | 采选书单卡片 | 拍照入口   │
└───────────────────────┬───────────────────────┘
                        │
┌─ Agent 服务 ──────────┴───────────────────────┐
│  会话编排 | LLM | Tool Calling                 │
│  ★ 现采草稿（AcquisitionDraft）持久化           │
│  OCR | 分配建议 | 清单导出                      │
└───────────────────────┬───────────────────────┘
                        │ 按需调用
┌─ 订单管理系统 API ────┴───────────────────────┐
│  查重 | 书目检索 | 待发订订单查询               │
│  生成订单 / 加入订单（返回订单号）| 订单行       │
└───────────────────────────────────────────────┘
```

**原则**

- **草稿只在 Agent 存**：现采会话、书目、决策、建单计划、对话历史 **均持久化在 Agent 服务**；订单管理系统 **不提供、不存储** 现采草稿。
- **状态机管流程，LLM 管理解**：阶段转换由 Agent 编排器控制。
- **两步入 OMS**：① `CONFIRM` 确定生成/加入订单 → OMS **返回明确订单号**；② `SUBMITTED` → OMS **创建订单行**。
- **复用现有能力**：查重、书目查询、新建/加入订单规则对齐现有订单模块与 PRD。

### 4.1 数据边界：Agent 存草稿，OMS 管订单

| 概念 | 发生阶段 | 存储位置 | 说明 |
|------|---------|---------|------|
| **是否生成订单** | `INIT` | **Agent 草稿** | `orderStrategy`：`CREATE` / `JOIN`；OMS 无数据 |
| 书目 / 查重 / 分配 | `SCANNING`～`ALLOCATING` | **Agent 草稿** | 查重调用 OMS 只读接口 |
| 建单预览 | `CONFIRM`（前半） | **Agent 草稿** | 本地汇总，无 OMS 订单号（CREATE 模式） |
| **确定订单（获订单号）** | `CONFIRM`（提交订单） | **OMS 订单** + Agent 记录 `boundOrders` | CREATE→OMS 新建订单返回 `orderId`；JOIN→OMS 校验目标订单，**订单号已明确** |
| **创建订单行** | `SUBMITTED` | **OMS 订单行** | 按 `boundOrders` 中的订单号批量写入行 |

| 阶段 | Agent 草稿 | 订单管理系统 |
|------|-----------|-------------|
| `INIT`～`ALLOCATING` | 批次、书目、分配 | ❌ 无现采数据 |
| `CONFIRM` 预览 | `orderPlans`（可无订单号） | ❌ |
| `CONFIRM` **确定订单** | `boundOrders: [{ site, orderId }]` | ✅ 已有**明确订单号**（CREATE 新建头 / JOIN 已有单） |
| `SUBMITTED` | `status=SUBMITTED` | ✅ **创建订单行**（订单号不变） |

```
Agent 草稿                         OMS
─────────                         ───
INIT: orderStrategy
SCANNING～ALLOCATING: items
CONFIRM: 预览（Agent 内）
       ↓ 馆员确认，确定订单
       boundOrders ←──────────── CREATE → 返回 orderId
                    ←──────────── JOIN   → 确认 orderId（已有）
SUBMITTED: ────────────────────→ 按 orderId 创建订单行
```

> **订单号规则**：不存在「拟订单号」写入 OMS。`CREATE` 模式在 CONFIRM 确定订单后 OMS 才分配真实 `orderId`；`JOIN` 模式订单号来自 INIT/CONFIRM 选定的待发订订单，确定后即明确。清单导出在 **有 `boundOrders` 之后** 才可填真实订单号列。

---

## 5. 会话状态机

```
[*] → INIT → SCANNING ⇄ (暂停/恢复)
              ↓ 完成选书
           REVIEW ⇄ 返回 SCANNING
              ↓
          ALLOCATING ⇄ 返回 SCANNING
              ↓
           CONFIRM → SUBMITTED → [*]
```

| 阶段 | 名称 | 馆员操作 | 系统行为 |
|------|------|---------|---------|
| `INIT` | 批次初始化 | 录入批次信息；**确定是否生成订单**（`CREATE` / `JOIN`） | 仅存草稿意向；JOIN 时预选目标订单 |
| `SCANNING` | 逐本采选 | 拍照、查重、采购/跳过 | OCR、查重、建议、写入草稿 |
| `REVIEW` | 书单复审 | 查看清单、修改、删除 | 汇总册数、金额、馆址分布 |
| `ALLOCATING` | 馆址分配确认 | 确认或对话调整各馆址复本 | 按复本总数分组展示 |
| `CONFIRM` | 建单确认 | 预览；逐馆址确认；**确定订单（获订单号）** | Agent 预览；调 OMS 生成/加入订单 |
| `SUBMITTED` | 已提交 | 查看订单号、导出清单 | OMS **创建订单行**（订单号已存在） |

---

## 6. 分阶段交互设计

### 6.1 `INIT` — 批次初始化

馆员新建现采会话，录入批次级信息（后续书目继承），并在本阶段 **确定是否生成订单**。

#### 6.1.1 批次基础信息

| 字段 | 必填 | 规则 |
|------|------|------|
| 订户 | ✅ | 当前用户关联订户；仅一个时默认选中 |
| 资源类型 | ✅ | 纸质书 / 视听资料 |
| 采选方式 | ✅ | 固定「现采」 |
| 预算名称 | ✅ | 订户关联预算列表 |
| 语种 | ✅ | 中文 / 外文 |
| 供应商 | ✅ | 现采书商（代理商，类型=书商，状态=使用中） |
| 折扣 | 否 | 随供应商带出，只读 |
| 会话名称 | 否 | 默认「现采 YYYY-MM-DD」 |

#### 6.1.2 是否生成订单（`orderStrategy`，INIT 确定）

| 字段 | 必填 | 规则 |
|------|------|------|
| **是否生成订单** `orderStrategy` | ✅ | 见下表 |

本字段写入 **Agent 草稿**，OMS 不产生数据；订单行仅在 `SUBMITTED` 写入 OMS。

| 值 | 含义 | CONFIRM 确定订单时 OMS | SUBMITTED 时 OMS |
|----|------|----------------------|------------------|
| `CREATE` | 生成订单 | **新建订单头**，返回明确 `orderId` | 向该 `orderId` **创建订单行** |
| `JOIN` | 不生成订单 | **校验**目标待发订订单，**订单号已明确** | 向该 `orderId` **创建订单行** |

馆员在选书开始前即明确「本批次要不要新建订单」；`CONFIRM` 不再切换该策略，仅预览与确认落单细节。

**`CREATE` — 生成订单**

- INIT：选择「生成订单」。
- CONFIRM ②：OMS 新建订单头，返回 `orderId`。
- SUBMITTED：向各 `orderId` 创建订单行。

**`JOIN` — 不生成订单，加入已有**

- INIT：选择「不生成，加入已有」；按馆址预选目标订单号（`orderBindings`，存 Agent 草稿）。
- CONFIRM 确定订单：OMS 校验目标订单仍待发订，**订单号即为选定 `orderId`**。
- SUBMITTED：向各 `orderId` 创建订单行。
- 候选订单过滤条件（与书目查询「加入订单」一致）：同订户、同资源类型、同语种、同供应商、同馆址，状态=待发订。
- 默认选中：每个馆址**最近创建的一条**待发订订单（`isRecommended: true`）；馆员可改选同馆址其他候选。
- 某馆址无匹配订单时：该馆址行标红提示「无可用待发订订单」，馆员须改选其他馆址订单（不适用）或**将建单策略改回 `CREATE`**，或先去订单系统创建待发订订单后再绑定。

**INIT — 是否生成订单 UI 示意**

```
┌─ 是否生成订单 ──────────────────────────────────┐
│ ● 生成订单（按馆址新建）  ○ 不生成，加入已有订单   │
├─ 目标订单（不生成时展示）────────────────────────┤
│ 华威桥馆  [PG001B20250617001 ▼]  ★默认最近创建   │
│ 城市图书馆 [PG001B20250612003 ▼]                 │
│ 大兴机场馆  ⚠ 无匹配待发订订单                    │
│ [改选] [切换为新建订单]                           │
└──────────────────────────────────────────────────┘
```

#### 6.1.3 策略变更规则

| 时机 | 是否可改 `orderStrategy` |
|------|-------------------------|
| `INIT` | ✅ |
| `SCANNING` / `REVIEW` / `ALLOCATING` | ⚠️ 可改，但须重新校验 `orderBindings`；已选书目不自动清空 |
| `CONFIRM` 及之后 | ❌ 不可改；仅可调整 JOIN 模式下的目标订单 |

确认批次信息与是否生成订单后进入 `SCANNING`。

### 6.2 `SCANNING` — 逐本采选

**输入方式**：拍照（封面/版权页）、手动输入 ISBN。

**单本处理流程**

1. OCR 识别 ISBN、题名、作者、定价（含置信度）。
2. 低置信度字段允许馆员修正或重拍。
3. 执行馆藏查重 + 订单查重（对齐 PRD：重复类型「不限」，字段至少含 ISBN）。
4. 调用分配建议服务，生成采购建议与馆址分配。
5. 展示结果卡片；馆员决策后写入草稿。

**单本结果卡片结构**

```
┌─ 识别结果 ─────────────────────┐
│ 题名 / 作者 / ISBN / 定价       │
│ [修正] [重新拍照]               │
├─ 查重结果 ─────────────────────┤
│ 馆藏重复 / 订单重复 + 详情       │
├─ 采购建议 ─────────────────────┤
│ 是否采购、理由、总复本、馆址分配  │
├─ 操作 ─────────────────────────┤
│ [采纳建议] [跳过] [自定义]      │
└────────────────────────────────┘
```

**馆员决策**

| 决策 | 说明 |
|------|------|
| `ACCEPT` | 采纳建议（含复本数与馆址分配） |
| `SKIP` | 不采购；可填跳过原因 |
| `CUSTOM` | 自定义总复本数 + 馆址分配 |
| `PENDING` | 暂存待决，回馆再处理 |

**采购建议逻辑（AI + 规则）**

| 信号 | 权重 | 说明 |
|------|------|------|
| 馆藏查重结果 | 高 | 各馆址现有复本数 |
| 订单查重 | 高 | 已在途订单则建议跳过或减量 |
| 馆藏地缺口 | 中 | 按学科/馆藏政策（可配置） |
| 历史采购规律 | 低 | 同类书平均复本数 |
| 定价/预算余量 | 中 | 批次预算使用情况 |

### 6.3 `REVIEW` — 书单复审

- 展示全部书目：已采纳 / 待决 / 已跳过。
- 支持单本退回修改、批量删除。
- 汇总：总种数、总册数、预估金额、各馆址分布。
- 提供 **「导出审核清单」** 入口（见 §6.7）；此阶段导出为草稿版，不含订单号。
- 确认后进入 `ALLOCATING`。

### 6.4 `ALLOCATING` — 馆址分配确认

- 对 `ACCEPT` / `CUSTOM` 书目做最终馆址分配确认。
- 默认带入 `SCANNING` 阶段建议；支持对话调整（「华威桥减 1 本」）。
- 按复本总数分组展示（1/3/5/7/9），便于馆员与书商线下沟通参考。
- 确认后进入 `CONFIRM`。

### 6.5 `CONFIRM` — 建单确认

建单策略（`CREATE` / `JOIN`）已在 **INIT 阶段确定**；本阶段不再选择「新建还是加入」，仅根据策略生成预览，由馆员复核后提交。

#### 6.5.1 原则

`CONFIRM` 分 **两步**，均发生在进入 `SUBMITTED` 之前：

| 步骤 | 馆员操作 | Agent | OMS |
|------|---------|-------|-----|
| **① 预览确认** | 复核书目汇总；JOIN 可改选目标订单 | 本地生成 `orderPlans` | ❌ |
| **② 确定订单** | 点击「确定订单」 | 写入 `boundOrders` | ✅ CREATE 返回 `orderId`；JOIN 确认 `orderId` |

| 角色 | 职责 |
|------|------|
| **Agent** | 草稿存储；预览；调用 OMS 确定订单 / 创建订单行 |
| **馆员** | 预览确认 → **确定订单**（获订单号）→ **提交订单行** |
| **OMS** | 确定订单后即有**明确订单号**；`SUBMITTED` 时写入订单行 |

**写单时机（硬约束）**

- `INIT`～`ALLOCATING`：仅 **Agent 草稿**，OMS 无现采数据。
- `CONFIRM` 预览：Agent 内汇总，**无 OMS 订单号**（CREATE 模式）。
- `CONFIRM` **确定订单**：OMS 生成/加入订单 → **明确 `orderId`** → Agent 存 `boundOrders`。
- `SUBMITTED`：**唯一**创建订单行；使用 `boundOrders` 中的订单号，**不再变更订单号**。

#### 6.5.2 按策略的预览行为

| `orderStrategy` | 预览内容 | 馆员确认项 |
|----------------|---------|-----------|
| `CREATE` | 各馆址将新建订单（尚无订单号） | 确认书目与馆址方案 |
| `JOIN` | 各馆址将加入预选订单（**已有订单号**） | 确认或改选 `orderId` |

#### 6.5.3 `CREATE` 模式确认

**单馆址预览 UI 示意**

```
┌─ 华威桥馆（3 种书，共 8 套）─────────────────────┐
│ 建单方式：新建订单（批次策略）                     │
│ 将创建新订单，继承本批次书商/预算/语种等信息        │
│ [确认本馆址]                                     │
└──────────────────────────────────────────────────┘
```

Agent 话术：「本批次策略为新建订单。华威桥馆 3 种书共 8 套，将新建一笔待发订订单。确认吗？」

#### 6.5.4 `JOIN` 模式确认

预选目标订单来自 INIT 的 `orderBindings`；若 INIT 后该订单已非待发订，预览时标红并要求改选。

**单馆址预览 UI 示意**

```
┌─ 华威桥馆（3 种书，共 8 套）─────────────────────┐
│ 建单方式：加入已有订单（批次策略）                 │
│ 目标订单：PG001B20250617001  ★INIT 已选          │
│   订户 ceshi | 湖北三新 | 待发订 | 2025-06-17     │
│ [改选其他订单…]  （同馆址待发订列表，最近创建优先） │
│ [确认本馆址]                                     │
└──────────────────────────────────────────────────┘
```

馆员可执行操作（每个馆址，仅 JOIN 模式）：

| 操作 | 说明 |
|------|------|
| 确认预选订单 | 采纳 INIT 阶段绑定的目标订单 |
| 改选其他待发订订单 | 从同馆址候选列表另选；默认仍推荐最近创建的一条 |

Agent 话术：「华威桥馆 3 种书共 8 套，将加入订单 PG001B20250617001（INIT 已选）。确认还是换一个？」

#### 6.5.5 建单流程

```
【CONFIRM ① 预览】Agent 内按馆址汇总书目 → 馆员逐馆址确认
【CONFIRM ② 确定订单】馆员点击「确定订单」
    → CREATE：OMS POST /orders 按馆址新建 → 返回 orderId
    → JOIN：OMS 校验目标 orderId 仍待发订
    → Agent 写入 boundOrders [{ site, orderId }]
    → 展示明确订单号列表
【SUBMITTED】馆员点击「提交订单行」
    → OMS POST /order-lines/batch（按 boundOrders.orderId）
    → Agent status → SUBMITTED
```

确定订单后、提交订单行前，OMS **已有订单号、尚无订单行**（与线下先建空单再导行一致）。

### 6.6 `SUBMITTED` — 订单行已生成

- Agent 草稿 `status=SUBMITTED`；`boundOrders` 中订单号不变。
- OMS：**订单行已创建**；订单头在 CONFIRM 确定订单阶段已存在。
- 可导出含**真实订单号及订单行**的正式清单（见 §6.7）。
- 后续发订、撤订等走 OMS 常规流程。

### 6.7 审核清单导出

主任审核仍线下进行；系统提供书目清单导出，供馆员打印或发送审核。

#### 6.7.1 导出时机

| 时机 | 阶段 | 订单号 | 订单行 |
|------|------|--------|--------|
| 复审导出 | `REVIEW` / `ALLOCATING` | 无 | 无 |
| 建单预览导出 | `CONFIRM` 预览后 | 无（CREATE）/ 预选号（JOIN，仅 Agent） | 无 |
| 确定订单后导出 | `CONFIRM` ② 后、`SUBMITTED` 前 | **OMS 明确订单号** | 无 |
| 正式导出 | `SUBMITTED` 后 | 明确订单号 | 已生成 |

#### 6.7.2 导出格式

| 格式 | 本期 | 说明 |
|------|------|------|
| **Excel (.xlsx)** | ✅ | 主格式，便于主任批注、存档 |
| PDF | 可选 | 若工期紧可二期；Excel 优先 |

#### 6.7.3 Excel 列（建议）

**汇总页（Sheet1：批次摘要）**

| 列 | 说明 |
|----|------|
| 会话名称 | |
| 订户 / 书商 / 预算 / 资源类型 / 语种 | 批次元数据 |
| 导出时间 / 导出人 | |
| 总种数 / 总册数 / 预估金额 | |
| 审核状态 | 待审核 / 已建单待审核 |

**书目明细页（Sheet2：采选清单）**

| 列 | 说明 |
|----|------|
| 序号 | |
| ISBN | |
| 正题名 | |
| 作者 | |
| 定价 | |
| 币种 | |
| 采购决策 | 采购 / 跳过 |
| 总复本（套数） | |
| 华威桥馆 | 该馆址套数 |
| 城市图书馆 | 该馆址套数 |
| 大兴机场馆 | 该馆址套数 |
| 馆藏重复 | 是/否 + 简要说明 |
| 订单重复 | 是/否 |
| 采购建议摘要 | Agent 建议理由 |
| 备注 | 馆员跳过原因等 |
| 拟加入订单号 | CONFIRM ② 后填 **OMS 返回的真实 orderId**；此前为空 |
| 馆址（订单） | 对应馆址 |

列中馆址名以系统馆址管理已启用馆址为准；上表为示例三馆址。

#### 6.7.4 API（Agent 服务）

| 方法 | 路径 | 说明 |
|------|------|------|
| `GET` | `/agent/api/drafts/{draftId}/export` | `format=xlsx`，`stage=review\|bound\|submitted` |

响应：`Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`，文件名如 `现采清单_{会话名称}_{YYYYMMDD}.xlsx`。

---

## 7. 数据模型（Agent 服务）

> 以下模型 **仅持久化在 Agent**；OMS 仅存储订单头与订单行。

### 7.1 `AcquisitionDraft`

```typescript
interface AcquisitionDraft {
  draftId: string;
  status: 'INIT' | 'SCANNING' | 'REVIEW' | 'ALLOCATING' | 'CONFIRM' | 'SUBMITTED';
  batchMeta: {
    subscriber: string;
    resourceType: '纸质书' | '视听资料';
    method: '现采';
    budget: string;
    language: '中文' | '外文';
    supplier: string;
    discount?: string;
    sessionName?: string;
    orderStrategy: 'CREATE' | 'JOIN';   // INIT 确定
    orderBindings?: {                   // JOIN 时必填，按馆址预选目标订单
      site: string;
      orderId: string;
    }[];
  };
  items: AcquisitionItem[];
  orderPlans: SiteOrderPlan[];       // CONFIRM ① 预览
  boundOrders?: {                    // CONFIRM ② 确定订单后，OMS 明确订单号
    site: string;
    orderId: string;
    action: 'CREATE' | 'JOIN';
  }[];
  createdAt: string;
  updatedAt: string;
  createdBy: string;
}
```

### 7.2 `AcquisitionItem`

```typescript
interface AcquisitionItem {
  itemId: string;
  status: 'PENDING' | 'ACCEPT' | 'SKIP' | 'CUSTOM';
  ocrResult: {
    isbn?: string;
    title?: string;
    author?: string;
    price?: number;
    currency?: string;
    confidence: Record<string, number>;
    imageUrl?: string;
  };
  dedupResult: {
    holdingDuplicate: boolean;
    orderDuplicate: boolean;
    holdingDetails?: object[];
    orderDetails?: object[];
  };
  suggestion: {
    recommendPurchase: boolean;
    reason: string;
    totalCopies: number;
    siteAllocation: { site: string; sets: number }[];
  };
  decision: {
    totalCopies: number;
    siteAllocation: { site: string; sets: number }[];
    skipReason?: string;
  };
  bibRecordNo?: string;
  marcData?: object;
}
```

### 7.3 `SiteOrderPlan`

```typescript
interface SiteOrderPlan {
  site: string;
  orderStrategy: 'CREATE' | 'JOIN';      // 继承 batchMeta，只读
  confirmedAction: 'CREATE' | 'JOIN' | null;
  confirmedOrderId?: string;           // JOIN 时必填
  joinCandidates?: {                      // JOIN 模式 CONFIRM 改选时用
    orderId: string;
    subscriber: string;
    supplier: string;
    createdAt: string;
    isRecommended: boolean;
  }[];
  createDraft?: object;                  // CREATE 时订单头字段
  itemCount: number;
  totalSets: number;
  lines: { itemId: string; title: string; sets: number; price: number }[];
}
```

---

## 8. API 接口

### 8.1 Agent 服务 — 草稿与会话（仅 Agent 存储）

| 方法 | 路径 | 说明 |
|------|------|------|
| `POST` | `/agent/api/drafts` | 新建草稿 |
| `GET` | `/agent/api/drafts` | 当前用户未提交草稿列表 |
| `GET` | `/agent/api/drafts/{draftId}` | 草稿详情 |
| `PATCH` | `/agent/api/drafts/{draftId}` | 更新批次 / 策略 / `status` |
| `DELETE` | `/agent/api/drafts/{draftId}` | 删除草稿 |
| `POST` | `/agent/api/drafts/{draftId}/items` | 添加书目 |
| `PATCH` | `/agent/api/drafts/{draftId}/items/{itemId}` | 更新馆员决策 |
| `POST` | `/agent/api/drafts/{draftId}/preview-orders` | CONFIRM ① 本地建单预览 |
| `PATCH` | `/agent/api/drafts/{draftId}/order-plans/{site}` | CONFIRM ① 确认单馆址 |
| `POST` | `/agent/api/drafts/{draftId}/bind-orders` | CONFIRM ② **确定订单**（调 OMS，写 `boundOrders`） |
| `POST` | `/agent/api/drafts/{draftId}/submit-lines` | **SUBMITTED**：调 OMS 创建订单行 |
| `POST` | `/agent/api/ocr` | 书目识别 |
| `POST` | `/agent/api/suggest` | 采购与分配建议 |
| `POST` | `/agent/api/chat` | Agent 对话 |
| `GET` | `/agent/api/drafts/{draftId}/export` | 清单导出 |

### 8.2 订单管理系统 — 只读与落单

| 方法 | 路径 | 说明 | 调用时机 |
|------|------|------|---------|
| `GET` | `/api/bib/search` | 书目检索 | SCANNING |
| `POST` | `/api/order-lines/dedup` | 馆藏 + 订单查重 | SCANNING |
| `GET` | `/api/orders/pending` | 待发订订单候选 | INIT / CONFIRM |
| `POST` | `/api/orders` | **新建订单头**，返回明确 `orderId` | CONFIRM ② `CREATE` |
| `POST` | `/api/orders/{orderId}/validate` | 校验待发订（JOIN） | CONFIRM ② `JOIN` |
| `POST` | `/api/order-lines/batch` | **批量创建订单行** | SUBMITTED |

### 8.3 CONFIRM ② `bind-orders`（确定订单）

Agent 在馆员确认预览后调用，写入 Agent 草稿 `boundOrders`。

**`CREATE` 模式**：逐馆址调用 OMS `POST /api/orders`，响应含 **明确 `orderId`**：

```json
{
  "boundOrders": [
    { "site": "华威桥馆", "orderId": "PG001B20250629001", "action": "CREATE" },
    { "site": "城市图书馆", "orderId": "PG001B20250629002", "action": "CREATE" }
  ]
}
```

**`JOIN` 模式**：OMS 校验 `orderBindings` 中 `orderId` 仍待发订，**订单号不变**：

```json
{
  "boundOrders": [
    { "site": "华威桥馆", "orderId": "PG001B20250617001", "action": "JOIN" }
  ]
}
```

此时尚 **未创建订单行**；馆员已可见明确订单号，可导出 `stage=bound` 清单。

### 8.4 SUBMITTED `submit-lines`（创建订单行）

**前置**：`boundOrders` 已存在；Agent `status=CONFIRM`。

```json
{
  "lines": [
    { "orderId": "PG001B20250629001", "itemId": "...", "sets": 3, "price": 68, "currency": "CNY" }
  ]
}
```

Agent 调用 OMS `POST /api/order-lines/batch`；成功后 Agent `status=SUBMITTED`。

**失败处理**：订单行写入事务回滚；`boundOrders` 与 OMS 订单头保留，馆员可重试 `submit-lines`。

**订单行字段**：对齐书目查询加入订单——币种、定价、套内册数、套数、备注；中文默认 CNY。

### 8.5 Agent Tool 清单

| Tool | 映射 | 场景 |
|------|------|------|
| `set_order_strategy` | Agent `PATCH draft` + OMS `GET pending` | INIT |
| `recognize_book` | Agent `POST /ocr` | 发图 |
| `dedup_check` | OMS `POST /order-lines/dedup` | 查重 |
| `suggest_allocation` | Agent `POST /suggest` | 建议 |
| `save_decision` | Agent `PATCH item` | 采购决策 |
| `preview_orders` | Agent 本地预览 | CONFIRM ① |
| `confirm_site_plan` | Agent `PATCH order-plans` | CONFIRM ① |
| `bind_orders` | Agent `POST bind-orders` → OMS 订单 | CONFIRM ② **获订单号** |
| `submit_lines` | Agent `POST submit-lines` → OMS 订单行 | **SUBMITTED** |
| `export_list` | Agent `GET export` | 导出 |

---

## 9. 异常与边界

| 场景 | 处理 |
|------|------|
| OCR 失败 | 提示重拍版权页；支持手动输入 ISBN |
| 多 ISBN（套装） | 展示候选，馆员选择 |
| 查重无书目记录 | 标记「新书」，建议采购；建单需 MARC（Z3950 或新建书目） |
| 馆藏高度重复 | 默认建议跳过；馆员可强制采购并备注 |
| 网络中断 | Agent 草稿持久化；恢复后续做 |
| 确定订单后想改策略 | 须作废 `boundOrders`（OMS 已建空单需人工处理）或新建 Agent 草稿 |
| `submit-lines` 失败 | 订单行回滚；`boundOrders` 与 OMS 订单头保留，可重试 |
| 馆员误点「提交订单行」 | 成功前可重试；成功后须走 OMS 撤订/删行 |
| JOIN 策略但某馆址无待发订订单 | INIT 标红；改 CREATE 或先在 OMS 建待发订单 |
| JOIN 预选订单已非待发订 | CONFIRM 预览标红，改选 |
| JOIN 多笔候选 | 默认 **最近创建** 的一条 |
| CONFIRM 后修改 orderStrategy | 不允许；须新建 Agent 草稿 |
| 未 `bind-orders` 即 `submit-lines` | 拒绝；须先确定订单获订单号 |
| 导出时无采购书目 | 仅导出摘要页或提示「无已采纳书目」 |

---

## 10. 与现有模块对齐

| 能力 | 现有参考 |
|------|---------|
| 馆藏/订单查重 | `docs/prd.md` 订单行查重 |
| 加入订单过滤 | `docs/superpowers/specs/2026-06-17-bib-query-join-order-list-design.md` |
| 新建订单字段 | `01_01_18_书目查询.html` 新建/加入订单弹窗 |
| 现采供应商 | PRD：采选方式=现采 → 代理商书商 |
| 馆址列表 | 馆址管理已启用馆址 |

---

## 11. 分期建议（实现顺序）

| 期次 | 内容 |
|------|------|
| **P0** | 草稿 CRUD、OCR、查重、单本决策、`SCANNING` 对话 |
| **P1** | `REVIEW` / `ALLOCATING`、分配建议服务、审核清单导出 |
| **P2** | `CONFIRM` 预览、`bind-orders` 获订单号、`submit-lines` |
| **P3** | Agent Tool 编排优化、离线缓存、PDF 导出（可选） |

---

## 12. 验收要点

- [ ] **现采草稿仅存储在 Agent**，OMS 无 `/acquisition/drafts` 类接口。
- [ ] **INIT**：确定是否生成订单；数据仅存 Agent。
- [ ] `JOIN` 模式 INIT 预选订单号（Agent）；默认最近创建的一条。
- [ ] `CONFIRM` ② `bind-orders` 后 OMS 有**明确订单号**（CREATE 新建 / JOIN 已有）。
- [ ] `bind-orders` 后、 `submit-lines` 前：OMS 有订单号、**无订单行**。
- [ ] **`SUBMITTED`**（`submit-lines` 成功）后 OMS **才创建订单行**。
- [ ] `submit-lines` 失败时订单行回滚；`boundOrders` 保留可重试。
- [ ] `bound` 阶段可导出含真实订单号清单；`SUBMITTED` 后导出含订单行。
- [ ] 主任审核仍在线下，系统不提供审批流。
