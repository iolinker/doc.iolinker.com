---
title: Create and configure agents
---

# Create and configure agents

## Create a standalone agent

1. Select **Create Agent** in the agent list.
2. Enter a name, description and system instructions covering scope, output format and prohibited actions.
3. Set a working directory only when needed. Do not point tools at unrelated system or sensitive-data directories.
4. Select only the required built-in tools, MCP tools, knowledge bases and workflows.
5. Save and test with a small task that has no side effects.

## Capability prerequisites

| Capability | Purpose | Prerequisite |
| --- | --- | --- |
| Built-in tools | Provided file, search and other capabilities | Check tool permissions, directory scope and service requirements |
| Skills | Task methods and operating conventions | Prepare shared or agent-specific skills |
| MCP tools | Connect external tool services | The tool is enabled with a valid protocol and endpoint |
| Knowledge | Retrieve reference material | A text or vector knowledge base and model dependencies are ready |
| Workflow tools | Invoke deterministic processes as tools | The workflow is enabled and uses a sync or async API trigger |

Only enabled workflows with supported API triggers appear as workflow tools. A normal manual workflow cannot simply be selected as one. [Sub-workflows](../sub_workflow) are a separate orchestration mechanism.

## Built-in agents

Use the parent agent card's action menu to add a built-in agent. It belongs to the parent card and is managed in its built-in section. Its ownership, import/export and deletion behavior differ from standalone agents. Use the provided upgrade action to change ownership instead of copying configuration manually.

See [Compose sub-agents](sub-agents).

## Import and export

Inspect instructions, tools, working directories and external endpoints before importing an external configuration. Configuration is not inherently trusted. Never include API keys, secrets or personal information in public configuration files.

## Verification and troubleshooting

- **A tool is missing:** check that it exists and is enabled in the current project and role.
- **The model is unavailable:** follow the model setup guidance in the conversation. Tool selection does not replace model configuration.
- **An unexpected action occurred:** disable the related channel or schedule, narrow instructions and tool selection, and inspect execution records.
