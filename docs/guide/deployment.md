---
title: Installation and deployment
---

# Installation and deployment

## Choose a package

Select the operating system and architecture from the [official download section](https://iolinker.com/#cta). The website's `version.json` is the only maintained source of versions and package addresses; documentation does not maintain a second download list.

Guides reflect current source and do not imply that every package in the version file contains all capabilities. External package availability requires separate pre-release verification.

## Start and secure

1. Extract and start the program in a controlled environment. Read its actual startup log and local address.
2. Use the installed version's actual port, data directory, HTTPS and listen-address configuration; do not copy parameters from an old tutorial.
3. Change the initial password immediately after the first login and complete account security.
4. Do not expose the service publicly or to untrusted networks before authentication, access control and backups are configured.

Old startup articles are historical references. This guide supplies no fixed default password, and a running process is not automatically safe for public exposure.

## External dependencies

A local deployment does not mean every dependency is local:

- Models, embeddings, search, MCP and other external services may need network access, credentials and separate accounts.
- Prompts, retrieved snippets, tool parameters and business data may be sent to external services according to your configuration.
- Verify Python, Lua and third-party command runtimes in the target environment. A script node does not imply that every runtime is installed.
- Model or network failures can cause waiting tasks, failures or unavailable diagnosis.

## Tools and remote access

- Restrict file and command tools to an explicit working directory and use a least-privilege operating-system account.
- Use controlled targets and parameter binding for external HTTP, database and SSH operations; never concatenate user input into commands or SQL.
- Run only reviewed MCP STDIO programs. Prefer HTTPS for external services and restrict access to internal addresses through deployment policy.
- Configure a user allowlist for WeCom remote control and rotate exposed Secrets at the provider.
- Remove tokens, personal data and real business information before sharing configuration, screenshots, execution records or traces.

## Capability boundaries

No micro-system/general business-page builder, unlimited sub-agent nesting, one-click deployment across every channel, row/field-level authorization or unconditional performance metric is promised. Use the visible agent, workflow, data-table, form and tool capabilities according to their documented prerequisites.
