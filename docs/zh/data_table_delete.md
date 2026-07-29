---
title: 数据表删除
description: 通过指定行 ID 从数据表中删除一行或多行数据，支持批量删除。
meta:
  - name: keywords
    content: 数据表, 删除, 移除行, DataTable Delete, 批量删除, 低代码, AI工作流, 流程引擎
---

## 数据表删除

通过指定行 ID 从数据表中删除一行或多行数据，支持单次操作批量删除多行数据。

## 入参

- **Table UID**（必填）：要删除数据的数据表唯一标识。

- **Row IDs**（必填）：要删除的行 ID 数组。

### Row IDs 示例

```json
[1, 2, 3]
```

> **注意：** 此操作不可逆，删除的数据行无法恢复。

## 出参

返回包含删除行数的对象：

```json
{
  "deletedCount": 3
}
```

- **deletedCount**：成功删除的行数。
