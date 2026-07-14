---
home: true
heroText: 开发者的轻量级 AI 工作流工具
tagline: 不只是对话——AI 自主调用工具、执行命令、读写文件、联网搜索、构建工作流，用自然语言驱动一切。
actionText: 快速开始 →
actionLink: /zh/how-to-run-iolinker

meta:
  - name: description
    content: "IOLinker 是面向开发者的轻量级 AI 工作流工具。单文件部署，安装包<100MB，运行内存<100MB，支持 AI 工作台、双执行引擎、多模型接入、多平台 Bot 部署。"
  - name: keywords
    content: "AI工作流, AI工作台, 双执行引擎, 轻量级, 私有化部署, Telegram机器人, MCP服务器, RAG"

features:
  - title: 极致轻量
    details: 安装包<100MB，运行内存<100MB。单文件部署，无需 Docker 和数据库。
  - title: AI 工作台
    details: "内置网页 AI 助手，支持流式对话、工具调用、MCP 扩展、知识库检索、技能匹配与定时任务，ReAct 推理链路自主决策。"
  - title: 双执行引擎
    details: "快速引擎纯内存执行毫秒级响应（QPS 100+、平均 RT 约 10ms）；标准引擎持久化存储，支持历史回溯与断点续跑。"
  - title: 多模型接入
    details: "兼容 OpenAI、Claude、GLM、DeepSeek、Qwen 等主流模型服务，也支持接入本地模型。"
  - title: 多平台 Bot
    details: 一键接入 Telegram、飞书、钉钉等平台，快速搭建 AI Bot。
  - title: 知识库 RAG
    details: 内置向量检索增强生成引擎，上传文档即刻构建专属知识库，让 AI 拥有你的领域知识。
---

## 下载

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
