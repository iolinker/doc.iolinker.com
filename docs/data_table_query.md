---
title: Data Table Query
description: Query rows from a data table with filtering, pagination support. Supports multiple filter operators for string, number, datetime, and boolean column types.
meta:
  - name: keywords
    content: Data Table, Query, Filter, Pagination, DataTable Query, Low-code, AI Workflow, Process Engine
---

## Data Table Query

Query rows from a data table with support for filtering conditions and pagination. This app allows you to retrieve data from a specific data table by applying various filter operators.

## Input

- **Table UID** (Required): The unique identifier of the data table to query.

- **Limit**: The maximum number of rows to return. Default is 20, maximum is 1000.

- **Offset**: The number of rows to skip for pagination. Default is 0.

- **Filters**: An array of filter conditions to apply. Each filter object contains:

  | Field    | Description                                                                                     |
  | -------- | ----------------------------------------------------------------------------------------------- |
  | column   | The column name to filter on                                                                    |
  | operator | The filter operator (see below)                                                                 |
  | value    | The value to compare against                                                                    |
  | value2   | The second value (required for `between` operator)                                              |

### Supported Filter Operators

Operators vary by column type:

**String columns:**

| Operator      | Description                    |
| ------------- | ------------------------------ |
| contains      | Contains the value (LIKE %v%)  |
| equals        | Equals the value               |
| not_equals    | Does not equal the value       |
| is_empty      | Value is empty                 |
| is_not_empty  | Value is not empty             |
| is_null       | Value is NULL                  |
| is_not_null   | Value is not NULL              |

**Number / Datetime columns:**

| Operator    | Description                          |
| ----------- | ------------------------------------ |
| equals      | Equals the value                     |
| not_equals  | Does not equal the value             |
| lt          | Less than the value                  |
| lte         | Less than or equal to the value      |
| gt          | Greater than the value               |
| gte         | Greater than or equal to the value   |
| between     | Between value and value2             |
| is_null     | Value is NULL                        |
| is_not_null | Value is not NULL                    |

**Boolean columns:**

| Operator    | Description         |
| ----------- | ------------------- |
| is_true     | Value is true       |
| is_false    | Value is false      |
| is_null     | Value is NULL       |
| is_not_null | Value is not NULL   |

### Example Filters

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

## Output

Returns an object containing the queried rows and total count:

```json
{
  "rows": [
    {"id": 1, "name": "test1", "age": 25, "created_at": "2025-01-01T00:00:00Z", "updated_at": "2025-01-01T00:00:00Z"},
    {"id": 2, "name": "test2", "age": 30, "created_at": "2025-01-02T00:00:00Z", "updated_at": "2025-01-02T00:00:00Z"}
  ],
  "total": 100
}
```

- **rows**: An array of row objects. Each row includes the `id`, `created_at`, `updated_at` fields along with the custom columns defined in the table.
- **total**: The total number of rows matching the filter conditions (ignoring limit/offset), useful for pagination.
