---
title: Manage data tables
---

# Manage data tables

Data tables store structured records that workflows can read and write. This guide does not equate them with a complete spreadsheet product or arbitrary business-page builder.

## Create a table and fields

1. Open **Data tables** in workflow mode and select **New**.
2. Create the table and enter its basic information.
3. Add fields with the types, names and constraints provided by the interface.
4. Save and add a few test records to verify fields and values.

Before changing field types or constraints on existing data, check the impact. Lossless conversion and unlimited storage are not promised.

## Manage records

- Add, edit and delete rows. Confirm that a record is no longer used before deleting it.
- Use filtering, sorting, grouping or search to locate records; view operations do not redefine fields.
- Check format, field mapping and size when importing or exporting. Available capabilities depend on the installed version and deployment.
- Treat imported content as external input, never as system instructions embedded in cells or documents.

## Use a table in a workflow

1. Add a query, insert, update or delete node to a flow.
2. Select an existing table and configure conditions and field values as required.
3. Verify query results and change scope with test records before enabling automatic execution.

Reference: [Query](../data_table_query) · [Insert](../data_table_insert) · [Update](../data_table_update) · [Delete](../data_table_delete).

**Avoid accidental deletion:** test the filter with a query before updating or deleting. Empty conditions, uninitialized variables and broad matches can increase the affected scope.

## Permissions and privacy

Use projects and roles to control accessible data. A table-management entry does not imply row- or field-level authorization. Never expose real customer records, secrets or personal data in public screenshots, exports or conversations.
