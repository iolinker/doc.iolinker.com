---
title: WeCom AI Bot Trigger
description: How to use WeCom (Enterprise WeChat) intelligent bot trigger with WebSocket long connection, no public IP required.
meta:
  - name: keywords
    content: WeCom bot, Enterprise WeChat bot, WebSocket, AI workflow, low-code, chatbot development
---

## WeCom AI Bot Trigger

Trigger workflows via WeCom (Enterprise WeChat) intelligent bot messages. Based on WebSocket long connection protocol — no public IP required, no message encryption/decryption needed.

### Features

- **WebSocket Long Connection**: No public IP required, no message encryption
- **Auto Heartbeat**: 30-second interval keep-alive
- **Auto Reconnect**: Exponential backoff strategy, unlimited reconnection
- **Multiple Message Types**: Text, image, voice, file, video, mixed
- **Stream Reply**: Supports streaming output for LLM scenarios


## Input Parameters

### Create WeCom AI Bot Credential

Go to **Credential Management** → **Add Credential** → select **WeCom AI Bot** type.

Required fields:

| Field | Description |
|-------|-------------|
| Bot ID | Bot ID (obtained from WeCom admin console → Intelligent Bot page) |
| Secret | Long connection secret (obtained from WeCom admin console) |

#### How to Get Bot ID and Secret

1. Open the WeCom PC client
2. Click **Workbench** on the left sidebar
3. Under WeCom features, select **Intelligent Bot**
4. Click **Create Bot**
5. Scroll to the bottom and select **API Mode** to create
6. For connection method, select: **Use Long Connection**
7. After creation, you can find the Bot ID and Secret on the bot detail page

### Message Types

| Type | Description |
|------|-------------|
| text | Text message |
| image | Image message |
| voice | Voice message (auto speech-to-text) |
| file | File message |
| video | Video message |
| mixed | Rich text (mixed text and images) |

### Trigger Scope

- **Any Input**

  All user messages will trigger the workflow.

- **Command Input**

  Only specific commands trigger the workflow, e.g., `/help`, `/query -k test`. Command parameters are automatically parsed.

  Supported parameter types:
  - Boolean
  - Integer
  - Float
  - String

  Example input:
  ```
  /nmap -h 1.1.1.1 -p 22
  ```

  Output:
  ```json
  {
      "cmdParameters": {
          "h": "1.1.1.1",
          "p": 22
      },
      "command": "/nmap -h 1.1.1.1 -p 22",
      "from": {
          "chatType": "single",
          "id": "user001",
          "username": "user001"
      },
      "origin": ""
  }
  ```

### Debug Data

Debug data simulates the app's runtime output for workflow design testing.

Example:
```json
{
    "msgtype": "text",
    "chattype": "single",
    "chatid": "test_user_001",
    "from": {"userid": "test_user_001"},
    "text": {"content": "hello"}
}
```


## Output

```json
{
    "cmdParameters": {
        "h": "1.1.1.1",
        "p": 22
    },
    "command": "/test -h 1.1.1.1 -p 22",
    "message": {
        "text": "/test -h 1.1.1.1 -p 22",
        "type": "text"
    },
    "from": {
        "chatType": "single",
        "id": "user001",
        "username": "user001"
    },
    "origin": ""
}
```

- **cmdParameters**: Parsed command parameter key-value map
- **command**: Full user input text
- **message**
  - text: Message text content
  - type: Message type (text/image/voice/file/video/mixed)
- **from**
  - chatType: `single` for private chat, `group` for group chat
  - id: Sender's user ID
  - username: Sender's display name


## Notes

1. **Credential Security**: Bot ID and Secret are stored encrypted (AES) in credential management
2. **Single Connection**: Each bot can only maintain one active WebSocket connection at a time; new connections kick old ones
3. **Reply Timeout**: Welcome messages and template card updates must be sent within 5 seconds
4. **Stream Timeout**: Streaming messages must complete within 10 minutes from the first send
5. **Rate Limit**: Reply + proactive push share a quota of 30 messages/minute, 1000 messages/hour
