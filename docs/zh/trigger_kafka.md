---
title: Kafka 触发器
description: 通过消费 Apache Kafka 主题消息来触发工作流，支持消费者组模式。
meta:
  - name: keywords
    content: Kafka, 触发器, 消息队列, 消费者组, Topic, 低代码, AI工作流, 流程引擎
---

## Kafka 触发器

通过消费 Apache Kafka 主题中的消息来触发工作流。当指定主题收到新消息时，工作流会自动执行。适用于事件驱动架构、实时数据处理和基于消息的集成场景。

## 入参

- **凭据**（必填）：选择一个 Kafka 凭据。可在【凭据管理】中创建 Kafka 凭据类型，需配置以下选项：

  - **Brokers**：Kafka Broker 地址，多个用逗号分隔（如 `kafka1:9092,kafka2:9092`）。
  - **Username**：SASL 认证用户名（可选）。
  - **Password**：SASL 认证密码（可选）。

- **Topic**（必填）：要消费消息的 Kafka 主题名称。

- **Group ID**（必填）：消费者组 ID。同一消费者组内的消费者会分担消息，确保每条消息在同一组内仅被消费一次。

## 出参

每次从 Kafka 主题消费到消息时，工作流将被触发，消息内容作为输出。输出为 Kafka 消息解析后的 JSON 内容。

```json
{
  "key": "message-key",
  "value": "message-content",
  "topic": "my-topic",
  "partition": 0,
  "offset": 123
}
```

> 实际输出格式取决于发布到 Kafka 主题的消息内容。

## 工作原理

1. 当工作流启用时，IOLinker 加入指定的消费者组并订阅配置的 Kafka 主题。
2. 当消息发布到该主题时，IOLinker 消费消息并触发工作流执行。
3. 每条消息触发一次独立的工作流执行，消息数据作为触发器输出。
4. 消费者组的偏移量管理确保在正常操作下消息不会丢失或被重复处理。
