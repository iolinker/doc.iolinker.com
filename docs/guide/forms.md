---
title: Forms and human collaboration
---

# Forms and human collaboration

Forms collect input; form tasks and approvals pause a workflow for human action. They work together but are different nodes.

## Design a form

1. On the **Forms** page, select **New** and add fields in the designer.
2. Configure labels, input types and required-field rules, then save.
3. Test fields, validation and submission with non-sensitive test data.

## Three ways to use forms

| Method | Behavior |
| --- | --- |
| [Form trigger](../trigger_form) | A submission starts the associated workflow |
| [Form task](../form_task) | The running flow creates tasks for members and continues when the configured conditions are met |
| [Approval](../approval) | The flow waits for a decision and follows the approved, rejected or timed-out path |

## Example: collect → process → review

This example uses only forms, a data table and a workflow; it does not require business-page publishing.

1. Create a **Requests** table with fields such as request content and status.
2. Create a **Request submission** form to collect content.
3. Create a workflow with a form trigger, select the form and configure allowed members as needed.
4. Add an [insert node](../data_table_insert), map the submitted content to the table and set the initial status to pending.
5. For additional information, add a form task with the form and members. For a decision, use an approval node instead.
6. Update status in the appropriate branch and configure an explicit output.
7. Save and submit a test form. Inspect its trigger data in execution records; process pending tasks under **User tasks** when applicable.
8. Check the final table record and workflow output.

Form tasks follow their configured any/all-sign behavior; see the node reference. A successful submission does not imply approval or full workflow completion.

## Access and privacy

Form-trigger members determine who can submit. Verify authentication and access boundaries before publishing a submission URL. Submitted content flows into execution records and subsequent tools, so inspect screenshots, logs and shared links for sensitive data.
