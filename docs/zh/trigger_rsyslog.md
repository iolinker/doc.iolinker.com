---
title: Rsyslog 触发器
description: 通过 TCP 或 UDP 接收 syslog 消息来触发工作流。支持按 facility、severity 和正则表达式进行过滤。
meta:
  - name: keywords
    content: Rsyslog, Syslog, 触发器, TCP, UDP, 日志监控, Facility, Severity, 正则过滤, 低代码, AI工作流, 流程引擎
---

## Rsyslog 触发器

通过 TCP 或 UDP 协议监听 syslog 消息来触发工作流。当收到匹配的 syslog 消息时，工作流会自动执行。适用于实时日志监控、告警和自动化事件响应场景。

支持按 **facility**（设施）、**severity**（严重级别）和**正则表达式**对消息进行过滤，确保只有相关的日志事件才会触发工作流。

## 入参

- **Protocol**（必填）：监听的网络协议，支持 `tcp` 和 `udp`。

- **Listen Port**（必填）：监听端口号（1–65535）。

- **Listen Host**：绑定的 IP 地址，默认为 `127.0.0.1`（仅本地）。设置为 `0.0.0.0` 可监听所有网络接口。

- **Facility Filter**：逗号分隔的 facility 名称列表，仅接受匹配的消息。为空则接受所有 facility。可用值：

  | 编码 | 名称          | 编码 | 名称           |
  | ---- | ------------- | ---- | -------------- |
  | 0    | kern          | 12   | ntp            |
  | 1    | user          | 13   | log-audit      |
  | 2    | mail          | 14   | log-alert      |
  | 3    | daemon        | 15   | clock-daemon   |
  | 4    | auth          | 16   | local0         |
  | 5    | syslog        | 17   | local1         |
  | 6    | lpr           | 18   | local2         |
  | 7    | news          | 19   | local3         |
  | 8    | uucp          | 20   | local4         |
  | 9    | cron          | 21   | local5         |
  | 10   | authpriv      | 22   | local6         |
  | 11   | ftp           | 23   | local7         |

  示例：`kern,daemon,local0`

- **Severity Filter**：逗号分隔的 severity 名称列表，仅接受匹配的消息。为空则接受所有 severity。可用值（从最严重到最轻微）：

  | 编码 | 名称    | 说明     |
  | ---- | ------- | -------- |
  | 0    | emerg   | 紧急     |
  | 1    | alert   | 警报     |
  | 2    | crit    | 严重     |
  | 3    | err     | 错误     |
  | 4    | warning | 警告     |
  | 5    | notice  | 通知     |
  | 6    | info    | 信息     |
  | 7    | debug   | 调试     |

  示例：`emerg,alert,crit,err`

- **Pattern Filter**：正则表达式过滤条件。仅当消息的 `message` 或 `raw_message` 字段匹配该正则时才会触发工作流。为空则不做正则过滤。

  示例：`error|failed|timeout`

## 出参

每次收到匹配的 syslog 消息时，工作流将被触发，输出数据如下：

```json
{
  "facility": "daemon",
  "severity": "err",
  "timestamp": "Jan 14 10:30:00",
  "hostname": "web-server-01",
  "program": "sshd",
  "message": "Failed password for root from 192.168.1.100 port 22 ssh2",
  "raw_message": "<27>Jan 14 10:30:00 web-server-01 sshd[1234]: Failed password for root from 192.168.1.100 port 22 ssh2",
  "source_ip": "192.168.1.50:514"
}
```

| 字段        | 说明                                   |
| ----------- | -------------------------------------- |
| facility    | syslog 设施名称（如 kern、daemon）     |
| severity    | syslog 严重级别（如 err、warning）     |
| timestamp   | syslog 消息中的时间戳                  |
| hostname    | 发送消息的主机名                       |
| program     | 产生消息的程序名                       |
| message     | 解析后的日志消息内容                   |
| raw_message | 原始 syslog 消息                       |
| source_ip   | 发送方的 IP 地址和端口                 |

## 工作原理

1. 当工作流启用时，IOLinker 会在配置的地址和端口上启动 TCP 或 UDP 监听器。
2. 配置您的 rsyslog（或其他兼容 syslog 的服务）将日志转发到此监听地址。
3. 收到的 syslog 消息会被自动解析（支持 RFC 3164 BSD 格式和 RFC 5424 格式）。
4. 根据配置的 facility、severity 和正则过滤条件对消息进行过滤。
5. 匹配的消息将触发工作流执行，解析后的 syslog 数据作为工作流输入。

### rsyslog 配置示例

在 `/etc/rsyslog.conf` 或 `/etc/rsyslog.d/` 目录下的配置文件中添加：

**UDP 转发：**
```
*.* @127.0.0.1:514
```

**TCP 转发：**
```
*.* @@127.0.0.1:514
```
