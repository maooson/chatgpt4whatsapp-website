---
draft: false
title: "消息模板"
description: "统一维护常用话术，在批量发送、定时消息和日常回复中重复复用。"
category: "Core Workflows"
order: 1
audience: ["new-users", "sales"]
updatedAt: "2026-03-29"
related:
  - "batch-sender"
  - "scheduled-messages"
  - "use-cases-sales-workflows"
---

## 这项功能解决什么问题

消息模板的目标很直接：  
**不要再重复写同一类 WhatsApp 话术。**

它适合用在这些高频场景：

- 首次触达
- 报价后跟进
- 样品确认
- 付款提醒
- 沉默客户激活
- 售后回访

## 一套模板，多处复用

消息模板不是孤立功能，而是被多个核心模块共用：

<div class="docs-flow">
  <div class="docs-flow-item">
    <strong>消息模板库</strong>
    统一创建、编辑、管理可复用话术。
  </div>
  <div class="docs-flow-item">
    <strong>批量发送</strong>
    直接选择模板，对特定客户分组发起触达。
  </div>
  <div class="docs-flow-item">
    <strong>定时消息</strong>
    选择模板并安排稍后发送，实现跟进自动化。
  </div>
</div>

![消息模板管理界面](/img/screenshot-1.png)
<div class="docs-shot-caption">模板库是统一入口，后续在批量发送和定时消息中都会直接复用。</div>

## 变量支持

模板支持动态变量：

- `{{name}}`：联系人名称
- `{{number}}`：联系人手机号

这些变量会在真正发送时根据当前联系人上下文自动替换，不需要手动修改每条消息。

## 推荐写法

高质量模板通常只做一件事：

1. 打开对话
2. 请求某个关键信息
3. 推动下一步动作

比起写一大段完整销售稿，更建议保持：

- 句子短
- 目的单一
- 像真人在 WhatsApp 里说话

## 模板库怎么用得更高效

建议按场景管理模板，而不是按语言堆很多版本。

例如：

- 首次欢迎
- 报价后跟进
- 样品推进
- 沉默客户唤醒

然后再在模板正文里根据需要调整语气和变量。

> [!WARNING]
> 不要把所有 objections 都塞进一条模板里。WhatsApp 上长篇大论的效果通常很差，短消息更容易获得回复。
