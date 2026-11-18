---
title: Your first task
description: Start IOLinker safely, connect a model, complete a conversation and build a visual workflow.
---

# Your first task

This path does not depend on legacy robot triggers. Complete one small, inspectable task before adding schedules, remote access or business integrations.

## 1. Start and secure the installation

1. Download the package matching your operating system and CPU architecture from the [official download section](https://iolinker.com/#cta). Do not infer architecture from the term “NAS”.
2. Open the local web address reported by the program. Use its startup log for the actual port.
3. Complete the first login and immediately change the initial password from the account menu. This guide provides no fixed default credentials.
4. Do not expose the service publicly or share cookies, tokens or configuration files before completing account security.

See [Installation and deployment](deployment) for boundaries.

## 2. Connect a model

1. Open a conversation in the agent workspace. If no usable model exists, the page displays model setup guidance.
2. Use **Quick setup** or **Model settings** to select a provider and enter its required model name, endpoint and API key.
3. Save, return to the conversation and confirm that the model is available before selecting or creating an agent.
4. Keep only necessary tools. Do not authorize files, commands or remote channels for this first task.

Model providers are usually third parties. Prompts, conversations, retrieved snippets and tool data may be sent to them. Saving a configuration does not prove connectivity or available credit.

## 3. Complete a conversation

1. Open the new agent's conversation.
2. Give it a small, explicit task: `Summarize the capabilities you can call and tell me which actions require additional authorization.`
3. Wait for the streamed response and inspect tool cards, errors and task results.
4. Find the saved session in the conversation list and use the trace entry to distinguish the agent session from scheduled tasks.

**Success means:** a readable response appears without model authentication or tool permission errors. A sent request alone is not a completed task.

## 4. Build a workflow

1. Switch to workflow mode and use **New** to create an empty flow.
2. Keep the **manual trigger** and add an [LLM node](../llm). Select the model credential and configure its input as required by the interface.
3. Connect the result to [Output](../output), save the flow and execute it manually.
4. Open execution records and inspect node states, inputs, outputs and errors.

**Success means:** the flow has a clear completion state and the output matches the task. Fix model and node configuration before enabling unattended execution.

## 5. Extend gradually

- For agent-assisted creation and debugging, read [Workflows and troubleshooting](workflows).
- For recurring execution, distinguish [agent schedules](schedules) from workflow Crontab.
- For private reference material, check [knowledge and retrieval](knowledge) prerequisites.
- For human input and approval, read [Forms and collaboration](forms).

## Troubleshooting

- **No model available:** check model settings, project context and provider configuration. Models are not assumed to be preconfigured.
- **The task is waiting:** inspect tool authorization, model responses and task status rather than treating elapsed time as success.
- **A legacy robot menu is missing:** new entries for those triggers are hidden. See [legacy compatibility](legacy).
- **The package differs from this guide:** guides reflect current source; use the installed package's interface. Not every released package contains these capabilities.
