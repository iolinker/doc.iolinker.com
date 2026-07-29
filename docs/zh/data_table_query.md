---
title: 数据表查询
description: 从数据表中查询数据行，支持筛选条件和分页。支持字符串、数字、日期时间和布尔列类型的多种筛选操作符。
meta:
  - name: keywords
    content: 数据表, 查询, 筛选, 分页, DataTable Query, 低代码, AI工作流, 流程引擎
---

## 数据表查询

从数据表中查询数据行，支持筛选条件和分页功能。可以通过设置不同的筛选操作符来精确检索所需数据。

## 入参

- **Table UID**（必填）：要查询的数据表的唯一标识。

- **Limit**：返回的最大行数，默认为 20，最大为 1000。

- **Offset**：分页偏移量，即跳过的行数，默认为 0。

- **Filters**：筛选条件数组，每个筛选对象包含：

  | 字段     | 说明                                     |
  | -------- | ---------------------------------------- |
  | column   | 要筛选的列名                             |
  | operator | 筛选操作符（见下文）                     |
  | value    | 比较值                                   |
  | value2   | 第二个比较值（`between` 操作符时需要）   |

### 支持的筛选操作符

操作符因列类型而异：

**字符串列（string）：**

| 操作符       | 说明                       |
| ------------ | -------------------------- |
| contains     | 包含该值（LIKE %v%）       |
| equals       | 等于该值                   |
| not_equals   | 不等于该值                 |
| is_empty     | 值为空                     |
| is_not_empty | 值不为空                   |
| is_null      | 值为 NULL                  |
| is_not_null  | 值不为 NULL                |

**数字 / 日期时间列（number / datetime）：**

| 操作符     | 说明                         |
| ---------- | ---------------------------- |
| equals     | 等于该值                     |
| not_equals | 不等于该值                   |
| lt         | 小于该值                     |
| lte        | 小于或等于该值               |
| gt         | 大于该值                     |
| gte        | 大于或等于该值               |
| between    | 在 value 和 value2 之间      |
| is_null    | 值为 NULL                    |
| is_not_null| 值不为 NULL                  |

**布尔列（boolean）：**

| 操作符     | 说明         |
| ---------- | ------------ |
| is_true    | 值为 true    |
| is_false   | 值为 false   |
| is_null    | 值为 NULL    |
| is_not_null| 值不为 NULL  |

### 筛选条件示例

```json
[
  {
    "column": "name",
    "operator": "contains",
    "value": "test"
  },
  {
    "column": "age",
    "operator": "gte",
    "value": "18"
  }
]
```

## 出参

返回包含查询结果行和总数的对象：

```json
{
  "rows": [
    {"id": 1, "name": "test1", "age": 25, "created_at": "2025-01-01T00:00:00Z", "updated_at": "2025-01-01T00:00:00Z"},
    {"id": 2, "name": "test2", "age": 30, "created_at": "2025-01-02T00:00:00Z", "updated_at": "2025-01-02T00:00:00Z"}
  ],
  "total": 100
}
```

- **rows**：数据行数组。每行包含 `id`、`created_at`、`updated_at` 字段以及表中定义的自定义列。
- **total**：符合筛选条件的总行数（不受 limit/offset 影响），可用于分页计算。
