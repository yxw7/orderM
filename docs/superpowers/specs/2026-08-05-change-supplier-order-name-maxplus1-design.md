# 更换供应商 — 订单名称数字后缀（max+1）设计

**日期**：2026-08-05  
**状态**：已实现  
**模块**：非连续出版物订单 / 订单行更换供应商（行内 + 工具栏批量）  
**关联**：
- 行内：`2026-08-03-order-line-partial-change-supplier-design.md`
- 批量：`2026-08-03-order-line-batch-change-supplier-import-design.md`
- 前序时间戳方案已由本规格 supersede

---

## 1. 目标

打开更换供应商弹窗时，默认订单名称为 `{原订单名称}-{n}`，其中 `n` 为扫描全部已有订单中匹配 `原名-数字` 的最大序号 + 1；用户可改；**提交时不校验名称是否重复**。

---

## 2. 规则

| 项 | 约定 |
|----|------|
| 原名 | 关联订单 `orderName`；空则用「新订单」 |
| 匹配 | 精确匹配 `^原名-(\\d+)$`（对原名做正则转义） |
| 序号 | 无匹配时 `n = 1`；否则 `n = max + 1`（不回填空洞） |
| 长度 | 最终 ≤ 50；先定后缀再截断原名 |
| 范围 | 行内 + 工具栏批量共用 `suggestChangeSupplierOrderName(name, orders)` |
| 提交 | 不做订单名称唯一性校验 |

示例：已有「专题采购-1」「专题采购-3」→ 建议「专题采购-4」。

---

## 3. 实现

| 单元 | 变更 |
|------|------|
| `order-line-change-supplier.js` | `suggestChangeSupplierOrderName` 实现 max+1 |
| `OrderLineChangeSupplierModal.vue` / `BatchChangeSupplierModal.vue` | 打开时传入 `orderStore.orders` |
