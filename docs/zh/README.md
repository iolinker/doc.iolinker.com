---
home: true
heroText: 开发者的轻量级 AI 工作流工具
tagline: Dify 的工作流编排 + OpenClaw 的 Agent 开发，合二为一。在你自己的机器上，编排 AI 的一切。
actionText: 快速开始 →
actionLink: /zh/how-to-run-iolinker

meta:
  - name: description
    content: "IOLinker 是面向开发者的轻量级 AI 工作流工具。单文件部署，安装包<100MB，运行内存<100MB，支持可视化 Agent 工作流编排、多模型接入、多平台 Bot 部署。"
  - name: keywords
    content: "AI工作流, Agent工作流, 轻量级, 私有化部署, Telegram机器人, MCP服务器, RAG"

features:
  - title: 极致轻量
    details: 安装包<100MB，运行内存<100MB。单文件部署，无需 Docker 和数据库。
  - title: 智能体工作流
    details: 可视化编排 Agent 推理链路，融合工作流确定性与 AI 动态决策能力。
  - title: 多平台 Bot
    details: 一键接入 Telegram、飞书、钉钉等平台，快速搭建 AI Bot。
---

## 下载

- [Mac Apple Silicon](https://github.com/iolinker/iolinker.com/releases/download/v1.2.6/iolinker-standalone-darwin-arm64-v1.2.6.tar.gz)
- [Mac Intel](https://github.com/iolinker/iolinker.com/releases/download/v1.2.6/iolinker-standalone-darwin-amd64-v1.2.6.tar.gz)
- [Linux AMD64](https://github.com/iolinker/iolinker.com/releases/download/v1.2.6/iolinker-standalone-linux-amd64-v1.2.6.tar.gz)
- [Linux ARM64](https://github.com/iolinker/iolinker.com/releases/download/v1.2.6/iolinker-standalone-linux-amd64-v1.2.6.tar.gz)
- [Windows](https://github.com/iolinker/iolinker.com/releases/download/v1.2.6/iolinker-standalone-windows-amd64-v1.2.6.tar.gz)
- [Raspberry PI](https://github.com/iolinker/iolinker.com/releases/download/v1.2.6/iolinker-standalone-linux-armv7-v1.2.6.tar.gz)

### Docker

```bash
docker run --name iolinker -p 80:80 -e Domain=localhost iolinker/iolinker:latest
```

:::: slot footer
Copyright © 2024 [IOLinker](mailto:iolinker@outlook.com)
::::
