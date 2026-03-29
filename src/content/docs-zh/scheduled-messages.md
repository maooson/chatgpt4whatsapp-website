---
draft: false
title: "定时消息"
description: "提前安排 WhatsApp 跟进消息，在正确时间自动发送，并支持模板与变量替换。"
category: "Core Workflows"
order: 3
audience: ["sales", "operators"]
updatedAt: "2026-03-29"
related:
  - "message-templates"
  - "batch-sender"
  - "troubleshooting"
---

## 这项功能适合哪些任务

定时消息最适合“你已经知道下一步要发什么，但不想现在立刻发送”的场景：

- 报价后隔一天提醒
- 按客户时区安排消息
- 会议前提醒
- 样品寄出后补跟进

## 推荐工作流

<div class="docs-flow">
  <div class="docs-flow-item">
    <strong>1. 选择联系人</strong>
    明确这条消息是发给谁，而不是先写一段没有对象的文案。
  </div>
  <div class="docs-flow-item">
    <strong>2. 选择模板或直接输入</strong>
    可复用模板，也可以编辑当前消息。
  </div>
  <div class="docs-flow-item">
    <strong>3. 设定发送时间</strong>
    结合时区、跟进节奏和业务场景安排发送。
  </div>
</div>

![定时消息模板选择](/img/screenshot-4.jpg)
<div class="docs-shot-caption">定时消息与消息模板共用同一套模板库。</div>

## 变量替换

定时消息支持的变量与消息模板一致：

- `{{name}}`
- `{{number}}`

变量会在**真正发送时**根据当前联系人信息替换，而不是在创建任务时写死。

## 什么时候适合用定时消息

特别适合下面两类：

<div class="docs-grid-2">
  <div class="docs-card">
    <h4>固定时间点跟进</h4>
    <p>例如报价发出后 24 小时提醒、样品寄出后 3 天回访。</p>
  </div>
  <div class="docs-card">
    <h4>时区敏感场景</h4>
    <p>客户在海外，避免你本地白天直接打扰到对方半夜。</p>
  </div>
</div>

## 失败时优先检查什么

- 联系人是否已同步
- 模板变量是否正确
- 任务列表中的状态是成功还是失败
- 手机和 WhatsApp Web 在发送时是否保持连接

> [!WARNING]
> 定时消息不是自动对话引擎。它适合发“第一条下一步动作”，后续是否继续推进，应该根据客户真实回复决定。
