---
title: Data Table Delete
description: Delete one or more rows from a data table by specifying row IDs. Supports batch deletion of multiple rows at once.
meta:
  - name: keywords
    content: Data Table, Delete, Remove Row, DataTable Delete, Batch Delete, Low-code, AI Workflow, Process Engine
---

## Data Table Delete

Delete one or more rows from a data table by specifying their row IDs. Supports batch deletion of multiple rows in a single operation.

## Input

- **Table UID** (Required): The unique identifier of the data table to delete rows from.

- **Row IDs** (Required): An array of row IDs to delete.

### Example Row IDs

```json
[1, 2, 3]
```

> **Note:** This operation is irreversible. Deleted rows cannot be recovered.

## Output

Returns an object containing the number of rows deleted:

```json
{
  "deletedCount": 3
}
```

- **deletedCount**: The number of rows that were successfully deleted.
