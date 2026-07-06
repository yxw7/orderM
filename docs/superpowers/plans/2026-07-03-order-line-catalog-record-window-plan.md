# 订单行列表 — 书目详情浮动弹窗 — 实现计划

**日期**：2026-07-03  
**设计规格**：[`2026-07-03-order-line-catalog-record-window-design.md`](../specs/2026-07-03-order-line-catalog-record-window-design.md)

## 任务清单

| # | 任务 | 文件 | 状态 |
|---|------|------|------|
| 1 | 导出 `getCatalogItemsByBibRecordNo` | `order-line-detail.js` | 完成 |
| 2 | 新增 composable 管理弹窗栈 | `useCatalogRecordWindows.js` | 完成 |
| 3 | 单个可拖拽浮动弹窗 | `CatalogRecordFloatingWindow.vue` | 完成 |
| 4 | Teleport 弹窗栈容器 | `CatalogRecordWindowStack.vue` | 完成 |
| 5 | 入口：可点链接、移除复制 | `ActualBibRecordNoMarker.vue` | 完成 |
| 6 | 列表页挂载与接线 | `OrderLineListPanel.vue` | 完成 |
| 7 | 构建验证 | `npm run build` | 完成 |

## 实现顺序

1. **数据层** — 单记录号查单件，供 Tab 计数与表格共用。
2. **Composable** — open / close / focus / 上限 / 卸载清理。
3. **浮动窗组件** — 拖拽、MARC 默认 Tab、`单件（N）` 标签。
4. **入口改造** — Marker emit → ListPanel 调用 composable。
5. **构建** — 确认无 lint/编译错误。

## 关键约束

- 最多 3 窗；`recordNo` 去重聚焦。
- Tab 顺序：MARC → 单件（N）；默认 MARC。
- 无遮罩；仅列表页挂载；路由离开清空栈。
