---
title: Conversations and sessions
---

# Conversations and sessions

Use the agent workspace for tasks requiring model reasoning and tool collaboration. Use workflow mode for explicit, repeatable execution. Switching modes does not change existing data.

## Start a conversation

1. Select an existing agent or follow [Create an agent](agents).
2. Select **Start conversation**, then provide the goal, inputs and expected output.
3. Let the response finish, inspect tool cards and results, then send a follow-up.

If no model is configured, the conversation page displays setup guidance. Complete it before expecting the agent to run.

## Manage sessions

The session list offers search, pin, archive and delete actions as available to the current role and interface.

- A **session** retains task context and can be continued from the agent or trace entry.
- **Archive** hides inactive sessions; it is not deletion.
- **Delete** affects local conversation records. Check that the context is no longer needed.
- **Clearing or editing messages** changes subsequent context. Check inputs and authorization before rerunning.

## Inspect execution traces

Open a trace from its session to inspect tasks, subtasks, tool calls and related nodes. Scheduled tasks have separate run records, with access to the latest conversation from the task row.

Requests and responses may contain business data. Redact them before exporting or sharing. A log entry alone does not prove that an external operation succeeded; inspect the actual tool result.

## Check for success

- The response matches the requested goal, inputs and output.
- Tool cards contain no unresolved authentication, network or permission errors.
- Independently verify file changes, external calls and workflow results.
- Add constraints for ambiguous tasks; model descriptions are not proof of execution.

Next: [Skills and MCP](skills) · [Scheduled tasks](schedules)
