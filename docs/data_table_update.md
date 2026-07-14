---
title: Data Table Update
description: Update one or more rows in a data table. Each row must include an id field to identify which row to update.
meta:
  - name: keywords
    content: Data Table, Update, Edit Row, DataTable Update, Batch Update, Low-code, AI Workflow, Process Engine
---

## Data Table Update

Update one or more rows in a data table. Each row must include an `id` field to identify the row to update. Supports batch updates of multiple rows in a single operation.

## Input

- **Table UID** (Required): The unique identifier of the data table to update data in.

- **Rows** (Required): An array of row objects to update. Each object **must** contain an `id` field to identify the row, along with the fields to update.

### Example Rows

```json
[
  {"id": 1, "name": "Alice Updated", "age": 26},
  {"id": 2, "name": "Bob Updated", "age": 31}
]
```

> **Note:**
> - The `id` field is required in each row object. Rows without an `id` field will cause an error.
> - Only the fields included in the row object (besides `id`) will be updated. Omitted fields will remain unchanged.
> - If a column in the table has a **unique** constraint, updating a row with a value that already exists in that column will result in an error.

## Output

Returns an object containing the updated row IDs and count:

```json
{
  "updatedIds": [1, 2],
  "count": 2
}
```

- **updatedIds**: An array of IDs of the rows that were successfully updated.
- **count**: The number of rows successfully updated.
