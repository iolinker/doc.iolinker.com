---
title: 数据表插入
description: 向数据表中插入一行或多行数据，支持批量插入。
meta:
  - name: keywords
    content: 数据表, 插入, 新增行, DataTable Insert, 批量插入, 低代码, AI工作流, 流程引擎
---

## 数据表插入

向数据表中插入一行或多行数据，支持单次操作批量插入多行数据。

## 入参

- **Table UID**（必填）：要插入数据的数据表唯一标识。

- **Rows**（必填）：要插入的行对象数组，每个对象的键值对中，键对应表中的列名。

### Rows 示例

```json
[
  {"name": "Alice", "age": 25, "active": true},
  {"name": "Bob", "age": 30, "active": false}
]
```

> **注意：** 如果表中的列设置了**唯一约束（unique）**，插入与该列已有数据相同的值将会报错。

## 出参

返回包含插入行 ID 和数量的对象：

```json
{
  "insertedIds": [1, 2],
  "count": 2
}
```

- **insertedIds**：新插入行的自增 ID 数组。
- **count**：成功插入的行数。
