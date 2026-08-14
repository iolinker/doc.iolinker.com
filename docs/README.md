---
home: true
heroText: Production-Grade Agentic Workflow Tool for Individuals
tagline: Build automated workflows through natural language conversation—portable, zero-install, cross-platform, runs on a single machine. AI autonomously calls tools, runs commands, reads & writes files, searches the web—everything driven by conversation.
actionText: Quick Start →
actionLink: /how-to-run-iolinker

meta:
  - name: description
    content: "IOLinker is a production-grade Agentic workflow tool built for individuals. Single file deployment, <100MB package, <100MB memory. Supports AI Workspace, dual execution engines, low-code forms, and multi-platform Bot deployment."
  - name: keywords
    content: "AI workflow, Agentic workflow, AI workspace, dual execution engine, self-hosted, Telegram bot, MCP server, RAG"

features:
  - title: Ultra Lightweight
    details: <100MB package, <100MB memory. Single file deployment, no Docker or database required.
  - title: AI Workspace
    details: "Built-in web AI assistant with streaming chat, tool calls, MCP extensions, knowledge retrieval, skill matching & scheduled tasks. ReAct reasoning for autonomous decisions."
  - title: Dual Execution Engines
    details: "Fast engine: in-memory millisecond response (QPS 100+, avg RT ~10ms); Standard engine: persistence for history tracking & checkpoint recovery."
  - title: Low-Code Forms
    details: "Visually design forms with drag-and-drop. Supports text, number, date, file and more field types. Publish as API or embed into business processes, seamlessly bridging AI workflows and human collaboration."
  - title: Multi-Platform Bot
    details: One-click integration with Telegram, Feishu, DingTalk, WeCom and more.
  - title: Data Management
    details: "Built-in data tables, code snippets, local files and knowledge base management. Upload documents to build your own knowledge base for domain expertise; data tables and code snippets can be read/written directly by workflows for data-driven automation."
---

## Download

- [Mac Apple Silicon](https://iolinker.oss-cn-shenzhen.aliyuncs.com/iolinker-standalone-darwin-arm64-v2.1.2.tar.gz)
- [Mac Intel](https://iolinker.oss-cn-shenzhen.aliyuncs.com/iolinker-standalone-darwin-amd64-v2.1.2.tar.gz)
- [Linux AMD64](https://iolinker.oss-cn-shenzhen.aliyuncs.com/iolinker-standalone-linux-amd64-v2.1.2.tar.gz)
- [Linux ARM64](https://iolinker.oss-cn-shenzhen.aliyuncs.com/iolinker-standalone-linux-arm64-v2.1.2.tar.gz)
- [Windows](https://iolinker.oss-cn-shenzhen.aliyuncs.com/iolinker-standalone-windows-amd64-v2.1.2.tar.gz)
- [Raspberry PI](https://iolinker.oss-cn-shenzhen.aliyuncs.com/iolinker-standalone-linux-armv7-v2.1.2.tar.gz)

### Docker

```bash
docker run --name iolinker -p 80:80 -e Domain=localhost iolinker/iolinker:latest
```

::::: slot footer
Copyright © 2026 [IOLinker](mailto:iolinker@outlook.com)
:::::
