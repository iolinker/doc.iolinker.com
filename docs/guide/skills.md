---
title: Shared and agent skills
---

# Shared and agent skills

Skills provide methods and conventions for a class of tasks. They are not MCP tools and do not replace model configuration.

## Shared skills

A shared skill can be reused by multiple agents.

1. From the workspace skill market or management entry, select **New skill**.
2. Enter its name and purpose, then upload a `SKILL.md` or add content through the current interface.
3. Select the shared skill in the agent's skills section.
4. Save the agent and verify with a task matching the skill's purpose.

Changing a shared skill can affect multiple agents. Review its scope and never put project secrets, accounts or personal data in shared content.

## Agent-specific skills

Create and manage these in the target agent's **Agent skills** section. Each has a name, description, instructions, resources and tool bindings, including built-in and workflow tools.

- **Instructions** describe the method this agent should follow.
- **Resources** provide supporting material; check size, content and sensitive data.
- **Tool bindings** define executable capabilities. Instructions alone do not grant permissions.

An agent-specific version takes precedence over a same-named shared skill. Do not use same-name overrides to bypass review of shared content.

## Skill or tool?

- To tell an agent **how to work**, use a skill.
- To let an agent **call an external system**, use [MCP tools](mcp-tools).
- To enforce **fixed steps**, use [workflows](workflows).
- To **retrieve internal documents**, use [knowledge](knowledge).

Check references before deleting a skill. After changing one, test a clear success criterion instead of checking only that its name was saved.
