---
title: Rsyslog Trigger
description: Trigger workflow by receiving syslog messages via TCP or UDP. Supports filtering by facility, severity, and regex pattern matching.
meta:
  - name: keywords
    content: Rsyslog, Syslog, Trigger, TCP, UDP, Log Monitoring, Facility, Severity, Pattern Filter, Low-code, AI Workflow, Process Engine
---

## Rsyslog Trigger

Trigger the workflow by listening for syslog messages over TCP or UDP. When a matching syslog message is received, the workflow is automatically executed. This is useful for real-time log monitoring, alerting, and automated incident response.

Supports filtering incoming messages by **facility**, **severity**, and **regex pattern** to ensure only relevant log events trigger the workflow.

## Input

- **Protocol** (Required): The network protocol to listen on. Supported values: `tcp`, `udp`.

- **Listen Port** (Required): The port number to listen on (1–65535).

- **Listen Host**: The IP address to bind to. Default is `127.0.0.1` (localhost only). Set to `0.0.0.0` to listen on all interfaces.

- **Facility Filter**: Comma-separated list of facility names to accept. If empty, all facilities are accepted. Available facility names:

  | Code | Name          | Code | Name           |
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

  Example: `kern,daemon,local0`

- **Severity Filter**: Comma-separated list of severity names to accept. If empty, all severities are accepted. Available severity names (from most to least severe):

  | Code | Name    | Description       |
  | ---- | ------- | ----------------- |
  | 0    | emerg   | Emergency         |
  | 1    | alert   | Alert             |
  | 2    | crit    | Critical          |
  | 3    | err     | Error             |
  | 4    | warning | Warning           |
  | 5    | notice  | Notice            |
  | 6    | info    | Informational     |
  | 7    | debug   | Debug             |

  Example: `emerg,alert,crit,err`

- **Pattern Filter**: A regular expression pattern. Only messages whose `message` or `raw_message` field matches the pattern will trigger the workflow. If empty, no pattern filtering is applied.

  Example: `error|failed|timeout`

## Output

Each time a matching syslog message is received, the workflow is triggered with the following output:

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

| Field       | Description                                          |
| ----------- | ---------------------------------------------------- |
| facility    | The syslog facility name (e.g., kern, daemon)        |
| severity    | The syslog severity level (e.g., err, warning)       |
| timestamp   | The timestamp from the syslog message                |
| hostname    | The hostname that originated the message             |
| program     | The program name that generated the message          |
| message     | The parsed log message content                       |
| raw_message | The original raw syslog message                      |
| source_ip   | The IP address and port of the sender                |

## How It Works

1. When the workflow is enabled, IOLinker starts a TCP or UDP listener on the configured host and port.
2. Configure your rsyslog (or any syslog-compatible service) to forward logs to this listener address.
3. Incoming syslog messages are parsed (supports both RFC 3164 BSD format and RFC 5424 format).
4. Messages are filtered based on the configured facility, severity, and pattern filters.
5. Matching messages trigger the workflow execution with the parsed syslog data as input.

### Example rsyslog Configuration

Add the following to your `/etc/rsyslog.conf` or a file in `/etc/rsyslog.d/`:

**UDP forwarding:**
```
*.* @127.0.0.1:514
```

**TCP forwarding:**
```
*.* @@127.0.0.1:514
```
