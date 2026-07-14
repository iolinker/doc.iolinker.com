---
title: Kafka Trigger
description: Trigger workflow by consuming messages from an Apache Kafka topic. Supports consumer group based message consumption.
meta:
  - name: keywords
    content: Kafka, Trigger, Message Queue, Consumer Group, Topic, Low-code, AI Workflow, Process Engine
---

## Kafka Trigger

Trigger the workflow by consuming messages from an Apache Kafka topic. When a new message arrives in the specified topic, the workflow is automatically executed. This is useful for event-driven architectures, real-time data processing, and message-based integrations.

## Input

- **Credential** (Required): Select a Kafka credential. You can create a Kafka credential type in the **Credential** section with the following configuration:

  - **Brokers**: The Kafka broker addresses, comma-separated (e.g., `kafka1:9092,kafka2:9092`).
  - **Username**: SASL authentication username (optional).
  - **Password**: SASL authentication password (optional).

- **Topic** (Required): The Kafka topic to consume messages from.

- **Group ID** (Required): The consumer group ID for message consumption. Messages are distributed among consumers in the same group, ensuring each message is processed only once per group.

## Output

Each time a message is consumed from the Kafka topic, the workflow is triggered with the message content as output. The output is the parsed JSON content of the Kafka message.

```json
{
  "key": "message-key",
  "value": "message-content",
  "topic": "my-topic",
  "partition": 0,
  "offset": 123
}
```

> The actual output format depends on the message content published to the Kafka topic.

## How It Works

1. When the workflow is enabled, IOLinker joins the specified consumer group and subscribes to the configured Kafka topic.
2. As messages are published to the topic, IOLinker consumes them and triggers the workflow execution.
3. Each message triggers a separate workflow execution, with the message data available as the trigger output.
4. Consumer group offset management ensures messages are not missed or processed twice under normal operation.
