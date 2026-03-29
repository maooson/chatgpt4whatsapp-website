---
draft: false
title: "连接 AI 模型"
description: "接入 OpenAI、OpenRouter、Groq 或本地模型，让 AI 分级、结构化线索和辅助回复正常工作。"
category: "Get Started"
order: 3
audience: ["new-users"]
updatedAt: "2026-03-29"
related:
  - "quick-start"
  - "lead-intelligence"
  - "troubleshooting"
---

## 为什么必须先接入模型

消息模板、定时消息这类基础功能在没有模型的情况下也能使用。  
但以下能力都依赖一个可用的 AI Connector：

- AI 询盘分级
- 结构化线索提取
- 辅助回复
- 自动化工作流中的 AI 节点

如果 Connector 配置有问题，这些功能都会表现为：

- 没有结果返回
- 结果超时
- 提示 API Key 无效或模型不可用

## 支持哪些 Provider

当前常见选项：

- `OpenAI`：最稳，适合多数团队
- `OpenRouter`：模型选择更多
- `Groq`：速度快，适合轻任务
- `Local`：适合自托管或隐私优先场景

## 推荐配置流程

<div class="docs-flow">
  <div class="docs-flow-item">
    <strong>1. 选择 Provider</strong>
    先决定你要优先用稳定性、速度还是模型多样性。
  </div>
  <div class="docs-flow-item">
    <strong>2. 填入 API Key</strong>
    在 Connector 页面保存凭证，并确认模型名称填写正确。
  </div>
  <div class="docs-flow-item">
    <strong>3. 用真实工作流验证</strong>
    不要只做抽象测试，直接去客户页点击一次 AI 分析。
  </div>
</div>

## 最小验证方式

最推荐的验证方式不是随便发一句 prompt，而是直接在真实工作流里测试：

1. 打开一个 WhatsApp 对话
2. 进入线索详情
3. 点击 `刷新分级` 或 `刷新字段`
4. 等待结果返回

只要这一步能跑通，说明你的 Connector 在生产使用里基本可用。

## 连接失败时优先检查

- API Key 是否有效
- 账户是否有余额或配额
- 模型名称是否写对
- 当前套餐是否允许使用该 Connector
- 公司网络是否拦截了外部 API 请求

## 配置建议

如果你是第一次使用，建议：

- 先只配置一个主 Provider
- 先用默认推荐模型，不要一开始做复杂的模型切换
- 等 AI 分级和结构化线索跑通后，再考虑优化成本和速度

> [!TIP]
> 如果你的目标是先验证产品价值，稳定性通常比“最便宜”更重要。先跑通，再做成本优化。
