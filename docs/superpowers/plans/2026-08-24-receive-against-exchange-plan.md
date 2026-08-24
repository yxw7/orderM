# 逐条收货 — 优先对换货记录收货 Implementation Plan

> **For agentic workers:** Execute task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 在逐条收货处置弹窗支持「优先对换货记录收货」，按勾选拆分普通/换货冲销并写回订单行与换货记录。

**Architecture:** Modal 暴露 `againstExchange`；`splitReceiveAgainstExchange` 拆分量；收货路径先普通再冲销（或反之按勾选）；冲销同时改按种明细与 `exchangeRows` FIFO。

**Tech Stack:** Vue 3、现有 acceptance mock 数据层

**设计规格：** [`2026-08-24-receive-against-exchange-design.md`](../specs/2026-08-24-receive-against-exchange-design.md)

**状态：** 已实现（2026-08-24）

---

## 文件映射

| 文件 | 职责 |
|------|------|
| `receive-by-item.js` | 拆分公式；行上冲销已换；样例行含已换 |
| `exchange-manage.js` | FIFO 更新换货记录；关联订单行样例 |
| `acceptance-detail.js` | 按种收货时可扣减已换 |
| `ReceiveDispositionModal.vue` | 复选框 UI + payload |
| `ReceiveByItemView.vue` | 收货确认拆分写库 |

---

### Task 1: 拆分与换货记录写回

- [x] 实现 `splitReceiveAgainstExchange`
- [x] 实现 `applyExchangeOffsetToRecords`
- [x] 行/按种支持收货同时 `exchangedSets -= offset`

### Task 2: 弹窗 UI

- [x] 已换 > 0 时在收货备注后显示「优先对换货记录收货」
- [x] confirm payload 带 `againstExchange`

### Task 3: 提交接线 + mock 样例

- [x] `onDispositionConfirm` 按拆分写库
- [x] 样例行 `st00120250921005-3` 已换 3 + 两条未到货换货记录

### Task 4: 构建验证

- [x] `npm run build` 通过
- [x] PRD §5.8.5.4 已同步（v2.82）
