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
- 会话 **草稿可暂停续做**（现场扫一部分，回馆继续）。
- 全部书目确认后，按馆址 **预览建单**；**加入已有订单或新建订单由馆员逐项确认**（系统仅推荐，不自动执行）。
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
| ⑥ 建单 | ✅ | 按馆址匹配待发订订单；馆员确认 JOIN/CREATE |

**设备**：移动端为主（手机/平板在样板间现场拍照选书）。  
**会话**：草稿可暂停续做。  
**复本建议**：AI 根据馆藏情况智能推荐（规则 + 馆藏缺口等综合判断）。  
**批次元数据**：会话开始时录入书商、预算、资源类型、语种等，后续书目继承。

---

## 4. 整体架构

```
┌─ 移动端 Agent UI ─────────────────────────────┐
│  对话区 | 阶段进度条 | 采选书单卡片 | 拍照入口   │
└───────────────────────┬───────────────────────┘
                        │
┌─ Agent 编排层 ────────┴───────────────────────┐
│  会话编排器 → LLM 意图理解 → Tool Calling        │
└───────────────────────┬───────────────────────┘
                        │
┌─ 订单管理系统 API ────┴───────────────────────┐
│  现采草稿 | OCR | 查重 | 书目检索 | 分配建议     │
│  待发订订单匹配 | 订单/订单行 | 清单导出          │
└───────────────────────────────────────────────┘
```

**原则**

- **状态机管流程，LLM 管理解**：阶段转换由编排器控制。
- **草稿即真相**：书目、分配、决策、建单计划均持久化在现采草稿。
- **复用现有能力**：查重、书目查询、加入订单/新建订单规则对齐 `01_01_18_书目查询.html` 与订单行查重 PRD。

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
| `INIT` | 批次初始化 | 录入/确认批次信息 | 创建草稿 |
| `SCANNING` | 逐本采选 | 拍照、查重、采购/跳过 | OCR、查重、建议、写入草稿 |
| `REVIEW` | 书单复审 | 查看清单、修改、删除 | 汇总册数、金额、馆址分布 |
| `ALLOCATING` | 馆址分配确认 | 确认或对话调整各馆址复本 | 按复本总数分组展示 |
| `CONFIRM` | 建单确认 | **逐项确认** JOIN/CREATE；导出清单 | 匹配待发订订单、预览、提交 |
| `SUBMITTED` | 已提交 | 查看订单号、导出记录 | 批量 JOIN + CREATE |

---

## 6. 分阶段交互设计

### 6.1 `INIT` — 批次初始化

馆员新建现采会话，录入批次级信息（后续书目继承）：

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

确认后进入 `SCANNING`。

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
- 提供 **「导出审核清单」** 入口（见 §6.6）；此阶段导出为草稿版，不含订单号。
- 确认后进入 `ALLOCATING`。

### 6.4 `ALLOCATING` — 馆址分配确认

- 对 `ACCEPT` / `CUSTOM` 书目做最终馆址分配确认。
- 默认带入 `SCANNING` 阶段建议；支持对话调整（「华威桥减 1 本」）。
- 按复本总数分组展示（1/3/5/7/9），便于馆员与书商线下沟通参考。
- 确认后进入 `CONFIRM`。

### 6.5 `CONFIRM` — 建单确认

#### 6.5.1 原则

| 角色 | 职责 |
|------|------|
| **系统** | 按馆址汇总书目，检索匹配待发订订单，给出 JOIN/CREATE **推荐**及理由 |
| **馆员** | **逐项确认或修改**每个馆址的处理方式；全部确认后才可提交 |

系统 **不会** 在馆员未确认时自动加入或新建订单。

#### 6.5.2 待发订订单匹配条件

对齐书目查询「加入订单」过滤规则：

- 同订户、同资源类型、同语种、同供应商、同馆址
- 订单状态 = 待发订

#### 6.5.3 推荐规则

| 匹配结果 | 系统推荐 | 说明 |
|---------|---------|------|
| 找到 1 条 | `JOIN` | 推荐该订单 |
| 找到多条 | `JOIN` | **默认推荐最近创建的一条**；`joinCandidates` 按创建时间倒序，首条 `isRecommended: true` |
| 未找到 | `CREATE` | 建议新建订单 |

#### 6.5.4 馆员可执行操作（每个馆址）

| 操作 | 说明 |
|------|------|
| 采纳推荐 | 一键确认系统推荐的 JOIN 或 CREATE |
| 改选其他待发订订单 | 从同馆址待发订列表另选 |
| 强制新建 | 即使有匹配订单，也新建（如预算/批次需隔离） |
| 强制加入 | 系统建议新建时，仍可指定已有订单 |

**单馆址确认 UI 示意**

```
┌─ 华威桥馆（3 种书，共 8 套）─────────────────────┐
│ 系统推荐：加入已有订单                            │
│ ○ 加入订单  PG001B20250617001  ★推荐              │
│   订户 ceshi | 湖北三新 | 待发订 | 2025-06-17     │
│ ○ 加入其他订单  [选择…]  （按创建时间倒序列表）      │
│ ○ 新建订单                                       │
│ [确认本馆址]                                     │
└──────────────────────────────────────────────────┘
```

Agent 对话示例：

> 「华威桥馆 3 种书共 8 套，系统建议加入最近创建的订单 PG001B20250617001。要加入这笔订单，还是新建？」

#### 6.5.5 建单流程

```
按馆址汇总 → 检索匹配待发订订单 → 生成每馆址推荐
    → 馆员逐项确认 → 全部确认后展示总预览 → 馆员最终提交
    → 批量 JOIN + CREATE → 订单状态「待导入」
```

提交成功后草稿状态变为 `SUBMITTED`，展示各订单号及订单行数量。

### 6.6 审核清单导出

主任审核仍线下进行；系统需提供书目清单导出，供馆员打印或发送审核。

#### 6.6.1 导出时机

| 时机 | 阶段 | 内容差异 |
|------|------|---------|
| 复审导出 | `REVIEW` / `ALLOCATING` | 草稿版：无订单号，标注「待审核」 |
| 建单后导出 | `CONFIRM`（提交前或 `SUBMITTED` 后） | 正式版：含拟建单/已建单订单号、馆址分配 |

#### 6.6.2 导出格式

| 格式 | 本期 | 说明 |
|------|------|------|
| **Excel (.xlsx)** | ✅ | 主格式，便于主任批注、存档 |
| PDF | 可选 | 若工期紧可二期；Excel 优先 |

#### 6.6.3 Excel 列（建议）

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
| 拟加入订单号 | 建单预览后填充；草稿版为空 |
| 馆址（订单） | 对应馆址 |

列中馆址名以系统馆址管理已启用馆址为准；上表为示例三馆址。

#### 6.6.4 API

| 方法 | 路径 | 说明 |
|------|------|------|
| `GET` | `/api/acquisition/drafts/{draftId}/export` | 查询参数 `format=xlsx`，`stage=review|confirm` |

响应：`Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`，文件名如 `现采清单_{会话名称}_{YYYYMMDD}.xlsx`。

---

## 7. 数据模型

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
  };
  items: AcquisitionItem[];
  orderPlans: SiteOrderPlan[];  // CONFIRM 阶段填充
  submittedOrders?: { site: string; orderId: string; action: 'JOIN' | 'CREATE' }[];
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
  recommendedAction: 'JOIN' | 'CREATE';
  recommendReason: string;
  confirmedAction: 'JOIN' | 'CREATE' | null;
  confirmedOrderId?: string;       // JOIN 时必填
  joinCandidates: {
    orderId: string;
    subscriber: string;
    supplier: string;
    createdAt: string;
    isRecommended: boolean;        // 多条时仅最近创建一条为 true
  }[];
  createDraft?: object;            // CREATE 时订单头字段（继承 batchMeta + site）
  itemCount: number;
  totalSets: number;
  lines: { itemId: string; title: string; sets: number; price: number }[];
}
```

---

## 8. API 接口

### 8.1 草稿会话

| 方法 | 路径 | 说明 |
|------|------|------|
| `POST` | `/api/acquisition/drafts` | 新建草稿 |
| `GET` | `/api/acquisition/drafts` | 当前用户未提交草稿列表 |
| `GET` | `/api/acquisition/drafts/{draftId}` | 草稿详情 |
| `PATCH` | `/api/acquisition/drafts/{draftId}` | 更新批次信息 / 切换 `status` |
| `DELETE` | `/api/acquisition/drafts/{draftId}` | 删除草稿 |

### 8.2 书目识别与查重

| 方法 | 路径 | 说明 |
|------|------|------|
| `POST` | `/api/acquisition/ocr` | 上传图片 → 结构化书目 |
| `POST` | `/api/acquisition/drafts/{draftId}/items` | 添加书目 |
| `POST` | `/api/acquisition/drafts/{draftId}/items/{itemId}/dedup` | 馆藏 + 订单查重 |
| `GET` | `/api/bib/search` | 书目库检索（`isbn` 等） |
| `POST` | `/api/order-lines/dedup` | 查重服务（复用订单行查重） |

### 8.3 采购与分配

| 方法 | 路径 | 说明 |
|------|------|------|
| `POST` | `/api/acquisition/suggest` | 查重结果 → 采购与馆址分配建议 |
| `PATCH` | `/api/acquisition/drafts/{draftId}/items/{itemId}` | 更新馆员决策 |
| `POST` | `/api/acquisition/drafts/{draftId}/items/batch-decide` | 批量决策 |

### 8.4 建单

| 方法 | 路径 | 说明 |
|------|------|------|
| `POST` | `/api/acquisition/drafts/{draftId}/preview-orders` | 生成各馆址 JOIN/CREATE 推荐 |
| `PATCH` | `/api/acquisition/drafts/{draftId}/order-plans/{site}` | 馆员确认单馆址方案 |
| `POST` | `/api/acquisition/drafts/{draftId}/submit` | 全部馆址确认后提交建单 |
| `GET` | `/api/orders/pending` | 待发订订单列表（匹配用） |
| `POST` | `/api/orders` | 新建订单 |
| `POST` | `/api/order-lines/batch` | 批量创建订单行 |

**`preview-orders` 响应示例**

```json
{
  "plans": [
    {
      "site": "华威桥馆",
      "recommendedAction": "JOIN",
      "recommendReason": "存在同书商、同馆址待发订订单，推荐最近创建的一条",
      "confirmedAction": null,
      "joinCandidates": [
        {
          "orderId": "PG001B20250617001",
          "subscriber": "ceshi",
          "supplier": "湖北三新",
          "createdAt": "2025-06-17T10:00:00",
          "isRecommended": true
        },
        {
          "orderId": "PG001B20250601002",
          "createdAt": "2025-06-01T09:00:00",
          "isRecommended": false
        }
      ],
      "itemCount": 3,
      "totalSets": 8
    }
  ],
  "allConfirmed": false
}
```

**`PATCH order-plans/{site}` 请求**

```json
{ "action": "JOIN", "orderId": "PG001B20250617001" }
```

或

```json
{ "action": "CREATE" }
```

**`submit` 前置校验**：所有馆址 `confirmedAction` 非空；否则 `400`，返回未确认馆址列表。

**订单行字段**（加入/新建订单行）：对齐书目查询加入订单——币种、定价、套内册数、套数、备注；中文默认 CNY。

### 8.5 清单导出

| 方法 | 路径 | 说明 |
|------|------|------|
| `GET` | `/api/acquisition/drafts/{draftId}/export` | `format=xlsx`，`stage=review|confirm` |

### 8.6 Agent 对话

| 方法 | 路径 | 说明 |
|------|------|------|
| `POST` | `/api/acquisition/agent/chat` | 消息（含 draftId、stage、message、attachments） |
| `GET` | `/api/acquisition/agent/chat/{draftId}/history` | 对话历史 |

**Agent Tool 清单**

| Tool | 映射 API | 场景 |
|------|---------|------|
| `recognize_book` | `POST /ocr` | 用户发图 |
| `dedup_check` | `POST .../dedup` | 查重 |
| `suggest_allocation` | `POST /suggest` | 生成建议 |
| `save_decision` | `PATCH .../items/{id}` | 确认采购 |
| `list_draft_items` | `GET draft` | 查看书单 |
| `update_allocation` | `PATCH item` | 调整复本 |
| `preview_orders` | `POST preview-orders` | 建单预览 |
| `confirm_site_plan` | `PATCH order-plans/{site}` | 确认单馆址 |
| `export_list` | `GET export` | 导出审核清单 |
| `submit_orders` | `POST submit` | 提交建单 |

---

## 9. 异常与边界

| 场景 | 处理 |
|------|------|
| OCR 失败 | 提示重拍版权页；支持手动输入 ISBN |
| 多 ISBN（套装） | 展示候选，馆员选择 |
| 查重无书目记录 | 标记「新书」，建议采购；建单需 MARC（Z3950 或新建书目） |
| 馆藏高度重复 | 默认建议跳过；馆员可强制采购并备注 |
| 网络中断 | 草稿服务端持久化；客户端可缓存最近识别结果，恢复后同步 |
| 批次信息变更 | `SCANNING` 阶段可改供应商/预算；已选书目不自动清空，仅警告 |
| 多笔匹配订单 | 默认推荐 **最近创建** 的一条；馆员可改选 |
| 未确认完所有馆址即提交 | 拒绝提交，提示未确认馆址 |
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
| **P2** | `CONFIRM` 建单预览、馆址逐项确认、批量提交 |
| **P3** | Agent Tool 编排优化、离线缓存、PDF 导出（可选） |

---

## 12. 验收要点

- [ ] 移动端可创建现采草稿，录入批次信息后拍照识别并查重。
- [ ] 查重结果含馆藏重复与订单重复，与订单行查重规则一致。
- [ ] Agent 给出采购建议与馆址分配，馆员可采纳/跳过/自定义。
- [ ] 草稿可暂停后在列表中恢复继续。
- [ ] `REVIEW` 阶段可导出 Excel 审核清单（草稿版）。
- [ ] `CONFIRM` 阶段按馆址展示 JOIN/CREATE 推荐；**多条匹配时默认推荐最近创建订单**。
- [ ] 馆员须逐项确认各馆址方案后才能提交。
- [ ] 提交后按确认方案 JOIN/CREATE，订单状态为待发订；可导出含订单号的正式清单。
- [ ] 主任审核流程仍在线下，系统不提供审批流。
