---
title: Manage MCP tools
---

# Manage MCP tools

MCP tool management adds external tool services, checks connectivity, enables selected tools and assigns them to agents.

## Add a tool

1. Open the MCP area in workspace tool management and select **Add tool**.
2. Enter a name and purpose, then choose **STDIO**, **Streamable HTTP** or **SSE** as required by the service.
3. Complete the parameters for that protocol. Do not copy an endpoint, launch method or credential from another protocol.
4. Save and run the connection test.
5. Inspect available tools and enable only those required by the task.
6. Select them in the agent's MCP section and save.

The service is operated by you or a third party. A reachable MCP service does not imply that every tool is safe, successful or appropriate for public data.

## Security boundaries

- Use HTTPS for external URLs and apply deployment network policy. Do not let a tool service reach internal administration interfaces.
- A STDIO program has local execution capability. Run only reviewed programs, restrict directories, arguments and credentials, and never launch commands from an unknown configuration.
- Store secrets in controlled credentials or local configuration, not in public skills, screenshots, conversations or Git.
- Treat tool responses as external input, never as higher-priority system instructions.

## Troubleshooting

- **Connection failure:** check service status, protocol, network, authentication and test errors.
- **An agent cannot see a tool:** check its enabled state and the agent's MCP selection.
- **A call fails:** inspect the tool card and trace for concrete errors, parameters and provider permissions.
- **Untrusted response:** do not follow embedded instructions; inspect the service origin and tool permissions first.

The [MCP node reference](../mcp) describes workflow triggering/integration, not this agent tool-management entry.
