---
title: Create, version and troubleshoot workflows
---

# Create, version and troubleshoot workflows

## Start with an explicit flow

1. In workflow mode, select **New** and add a manual trigger.
2. Choose logic, tool or AI nodes from the node menu and connect the execution path.
3. Configure inputs and outputs for each node, save and execute manually.
4. Inspect execution records before adding a schedule or API trigger.

A [manual trigger](../trigger_start) is suited to debugging. Sync and async APIs have distinct call and response behavior and are not interchangeable.

## Let an agent create or modify a flow

1. Describe the goal, inputs, processing steps and expected output in a conversation.
2. If **Add workflow** is displayed, create the entry before asking the agent to generate a flow.
3. Inspect the workflow preview and result. Use **Open workflow** to enter the canvas when available.
4. For changes, inspect the **before/after diff** instead of relying on a textual “modified” response.
5. Save, then inspect the version and manual execution result.

A workflow tool calls an enabled API workflow; it is not the same as agent-assisted creation or editing.

## Debug and manage versions

- Run debugging from the agent conversation or canvas and inspect failed nodes, inputs and errors.
- Use the version entry to inspect changes and compare versions. Before rollback, check the target version and current unsaved work.
- Rolling back a version does not delete execution history or undo side effects in external systems.

## Execution records and AI diagnosis

1. Open the target workflow's execution records and select a failed run.
2. Inspect node status, errors, retries and associated traces.
3. When the failed execution offers AI diagnosis, use it to assist analysis; diagnosis is not automatic repair.
4. Return to the canvas, fix the flow and manually verify it again.

Logs and diagnosis context can contain credentials, prompts, business data and external endpoints. Redact before sharing. A visible diagnosis entry does not guarantee that a model is available.

## Execute safely

External requests, SSH, file and script nodes interact with real systems. Restrict destinations, directories and credentials; bind parameters and never concatenate user input into commands or SQL. Debug with no-side-effect data before enabling unattended triggers.
