---
title: Compose sub-agents
---

# Compose sub-agents

A sub-agent delegates a bounded task to another agent configuration. It does not provide unlimited nesting and is not a sub-workflow.

## Create a built-in agent

1. Open the parent agent card's action menu and add a built-in agent.
2. Open its configuration in the parent card's built-in section.
3. Define its task boundary and select only the tools it needs.
4. In the parent agent's sub-agent section, select this built-in agent.
5. Save, send the parent a small verifiable task and inspect the sub-agent call in the trace.

The current entry exposes direct sub-agent selection on a parent. It does not promise arbitrary nesting or recursion. Prefer [workflows](workflows) or the [sub-workflow node](../sub_workflow) for strict ordering and failure branches.

## Boundaries

- Built-in agents belong to their parent card; do not duplicate them as standalone agents.
- Parent delegation, child instructions and tool permissions jointly affect the result.
- Check references before deleting or changing an agent used by others.
- Before upgrading a built-in agent to standalone, confirm the intended ownership and migration behavior.

## Troubleshooting

If no sub-agent is called, check parent selection, model behavior and task wording. If a call fails, inspect the child's tools, model and permissions instead of simply adding loops or retries.
