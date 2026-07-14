---
title: Data Table Insert
description: Insert one or more rows into a data table. Supports batch insertion of multiple rows at once.
meta:
  - name: keywords
    content: Data Table, Insert, Add Row, DataTable Insert, Batch Insert, Low-code, AI Workflow, Process Engine
---

## Data Table Insert

Insert one or more rows into a data table. Supports batch insertion of multiple rows in a single operation.

## Input

- **Table UID** (Required): The unique identifier of the data table to insert data into.

- **Rows** (Required): An array of row objects to insert. Each object contains key-value pairs where the keys correspond to column names in the table.

### Example Rows

```json
[
  {"name": "Alice", "age": 25, "active": true},
  {"name": "Bob", "age": 30, "active": false}
]
```

> **Note:** If a column in the table has a **unique** constraint, inserting a row with a value that already exists in that column will result in an error.

## Output

Returns an object containing the inserted row IDs and count:

```json
{
  "insertedIds": [1, 2],
  "count": 2
}
```

- **insertedIds**: An array of auto-incremented IDs assigned to the newly inserted rows.
- **count**: The number of rows successfully inserted.
