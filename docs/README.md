---
home: true
heroText: Lightweight AI Workflow Tool for Developers
tagline: More than chat—AI autonomously calls tools, runs commands, reads & writes files, searches the web, builds workflows. Natural language drives everything.
actionText: Quick Start →
actionLink: /how-to-run-iolinker

meta:
  - name: description
    content: "IOLinker is a lightweight AI workflow tool for developers. Single file deployment, <100MB package, <100MB memory. Supports AI Workspace, dual execution engines, multi-model access, and multi-platform Bot deployment."
  - name: keywords
    content: "AI workflow, AI workspace, dual execution engine, lightweight, self-hosted, Telegram bot, MCP server, RAG"

features:
  - title: Ultra Lightweight
    details: <100MB package, <100MB memory. Single file deployment, no Docker or database required.
  - title: AI Workspace
    details: "Built-in web AI assistant with streaming chat, tool calls, MCP extensions, knowledge retrieval, skill matching & scheduled tasks. ReAct reasoning for autonomous decisions."
  - title: Dual Execution Engines
    details: "Fast engine: in-memory millisecond response (QPS 100+, avg RT ~10ms); Standard engine: persistence for history tracking & checkpoint recovery."
  - title: Multi-Model Support
    details: "Compatible with OpenAI, Claude, GLM, DeepSeek, Qwen and other mainstream model services. Also supports local models."
  - title: Multi-Platform Bot
    details: One-click integration with Telegram, Feishu, DingTalk and more.
  - title: Knowledge Base RAG
    details: Built-in vector retrieval-augmented generation engine. Upload documents to instantly build your own knowledge base.
---

## Download

- [Mac Apple Silicon](https://github.com/iolinker/iolinker.com/releases/download/v2.1.1/iolinker-standalone-darwin-arm64-v2.1.1.tar.gz)
- [Mac Intel](https://github.com/iolinker/iolinker.com/releases/download/v2.1.1/iolinker-standalone-darwin-amd64-v2.1.1.tar.gz)
- [Linux AMD64](https://github.com/iolinker/iolinker.com/releases/download/v2.1.1/iolinker-standalone-linux-amd64-v2.1.1.tar.gz)
- [Linux ARM64](https://github.com/iolinker/iolinker.com/releases/download/v2.1.1/iolinker-standalone-linux-arm64-v2.1.1.tar.gz)
- [Windows](https://github.com/iolinker/iolinker.com/releases/download/v2.1.1/iolinker-standalone-windows-amd64-v2.1.1.tar.gz)
- [Raspberry PI](https://github.com/iolinker/iolinker.com/releases/download/v2.1.1/iolinker-standalone-linux-armv7-v2.1.1.tar.gz)

### Docker

```bash
docker run --name iolinker -p 80:80 -e Domain=localhost iolinker/iolinker:latest
```

::::: slot footer
Copyright © 2026 [IOLinker](mailto:iolinker@outlook.com)
:::::
