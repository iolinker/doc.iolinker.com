---
title: 发送Telegram消息
description: 通过Telegram机器人发送文本、Markdown、图片、文件、Gif等消息。
meta:
  - name: keywords
    content: Telegram机器人消息推送,  Telegram开发, Telegram机器人通知, Telegram机器人webhook, Telegram机器人API, Telegram机器人开发, Golang Telegram机器人, Python Telegram机器人, 低代码, AI工作流, 流程引擎
---

## 发送Telegram消息

通过Telegram机器人发送文本、Markdown、图片、文件、Gif等消息。

> 历史界面图片在复核并重拍前不展示，请按当前界面核对操作。

## 入参

> 历史界面图片在复核并重拍前不展示，请按当前界面核对操作。

### 凭据

需要先在【应用开发】>【凭据管理】创建。


### ChatId

消息接收人，这里是Telegram ID。如果想查询自己的ChatID，可以通过下面的一个Telegram BOT实现。

地址：[@userinfobot](https://telegram.me/userinfobot)

> 历史界面图片在复核并重拍前不展示，请按当前界面核对操作。


### 消息类型

目前支持如下几种类型：

- Text
- Image
- File
- Video
- Audio
- Gif

选择不同的消息类型，需要输入的内容也不一样，例如Text类型就会关联文本输入框。


### Parse Mode

消息的输出格式，目前支持两种：

- Html
- Markdown


### 等待回复

发送完消息后，等待用户回复后才继续执行

- 超时

  设置等待回复超时的时间

- 超时回复

  设置等待回复超时时给用户发送的消息

## 出参

如果发送成功，result会显示ok。

```json
{
    "isTimeout": true,
    "reply": "",
    "result": "ok"
}
```
