---
title: Agent scheduled tasks
---

# Agent scheduled tasks

An agent schedule submits a task prompt to a chosen agent on a plan. It is not a workflow Crontab trigger.

## Create a task

1. Open **Scheduled tasks** in the agent workspace and select **Create task**.
2. Choose an agent, then enter a name, optional group/description and an explicit task prompt.
3. Choose once, fixed interval, daily, weekly or monthly.
4. Complete the displayed time, interval or weekday/date fields and check the next execution time.
5. Save and verify that the task is enabled.

The interface and runtime determine exact time, timezone and execution-window behavior. Do not assume missed work runs after a shutdown.

## Run now and inspect records

- **Run now** verifies the task; it does not prove that its recurring schedule works.
- **Enable / pause** controls future runs. A finished task has different behavior from an ordinary enabled one.
- **Run records** show status, time and errors. Open the latest associated session when the task provides it.
- Groups, search and status filters affect only the management view.

## Agent schedules versus Crontab

| Method | Execution target | Results |
| --- | --- | --- |
| Agent schedule | Dynamic model reasoning with authorized tools | Schedule runs and associated agent sessions |
| [Workflow Crontab](../trigger_crontab) | An arranged node-based process | Workflow execution records |

## Before unattended execution

Run manually and verify the result first. Grant only necessary tools, restrict directories and external services, and define clear task boundaries. Scheduled tasks can incur model charges or modify data. Pause the task before investigating unexpected behavior.
