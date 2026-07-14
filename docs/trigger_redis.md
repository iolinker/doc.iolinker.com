---
title: Redis Trigger
description: Trigger workflow by listening to Redis list push operations (LPUSH/RPUSH). Supports real-time message-driven workflows.
meta:
  - name: keywords
    content: Redis, Trigger, LPUSH, RPUSH, List, Message Queue, Low-code, AI Workflow, Process Engine
---

## Redis Trigger

Trigger the workflow by listening for new items pushed to a Redis list. When data is pushed to the specified Redis list key via `LPUSH` or `RPUSH`, the workflow is automatically executed. This is useful for building message-driven workflows, task queues, and real-time event processing.

## Input

- **Credential** (Required): Select a Redis credential. You can create a Redis credential type in the **Credential** section with the following configuration:

  - **Host**: The Redis server address.
  - **Port**: The Redis server port (default: 6379).
  - **Auth**: The Redis authentication password (optional).

- **Method** (Required): The Redis list operation to listen for. Supported values:

  | Method  | Description                                      |
  | ------- | ------------------------------------------------ |
  | lpush   | Triggered when data is pushed to the left of the list  |
  | rpush   | Triggered when data is pushed to the right of the list |

- **Select** (Required): The Redis database index to use (0-based, must be ≥ 0).

- **Key** (Required): The Redis list key to monitor for new items.

## Output

Each time a new item is pushed to the specified Redis list, the workflow is triggered with the pushed value as output. The output is the parsed JSON content of the pushed data.

```json
{
  "data": "pushed-value"
}
```

> The actual output format depends on the data pushed to the Redis list.

## How It Works

1. When the workflow is enabled, IOLinker connects to the Redis server and monitors the specified list key.
2. When a new item is pushed to the list (via `LPUSH` or `RPUSH` depending on the configured method), the item is consumed and the workflow is triggered.
3. Each pushed item triggers a separate workflow execution, with the item data available as the trigger output.
4. Items are consumed from the list (popped), so they will not trigger the workflow more than once.
