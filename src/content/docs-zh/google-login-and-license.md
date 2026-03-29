---
draft: false
title: "Google 登录与 License 绑定"
description: "理解账号身份、激活码绑定和付费权限之间的关系，避免登录成功却无法使用高级功能。"
category: "Get Started"
order: 2
audience: ["new-users", "admins"]
updatedAt: "2026-03-29"
related:
  - "quick-start"
  - "troubleshooting"
---

## 先理解两个概念

在 Agent for WhatsApp 里，**Google 登录** 和 **License 绑定** 是两条独立链路：

<div class="docs-grid-2">
  <div class="docs-card">
    <h4>Google 登录</h4>
    <p>用来确认当前使用扩展的人是谁，是账号、设置和后续同步的身份层。</p>
  </div>
  <div class="docs-card">
    <h4>License 绑定</h4>
    <p>用来确认你购买了哪个套餐，以及当前账号是否应该获得对应的付费功能。</p>
  </div>
</div>

只完成其中一个都不够。  
**你需要先登录，再完成绑定，才能稳定解锁付费能力。**

## 标准操作顺序

建议按下面的顺序完成：

1. 使用长期会用的 Google 账号登录
2. 进入账号页，输入 License Key
3. 绑定成功后，等待功能配置刷新
4. 再去使用消息模板、批量发送、AI 分析等功能

## Google 登录的作用

Google 登录主要负责这几件事：

- 保存你的云端设置
- 作为 License 绑定的账号主体
- 在新设备上帮助系统识别你是谁

建议尽量避免在同一个浏览器 Profile 里频繁切换多个 Google 身份，否则会增加权限识别和绑定排查成本。

## License 绑定后会发生什么

绑定成功后，系统会立即做两层校验：

1. 这个激活码是否属于 Agent for WhatsApp
2. 当前订阅状态是否允许开启对应功能

如果两层都通过，你会看到：

- 套餐状态更新
- 付费功能解锁
- 后续登录时能自动识别已绑定的 License

## 如果购买邮箱和 Google 邮箱不同怎么办

这是允许的，也是很常见的情况。

规则很简单：

- Google 登录：确认当前是谁在用扩展
- License Key：确认购买记录本身是否有效

所以只要 License 本身有效、未过期、未超出设备上限，就可以绑定到你当前登录的 Google 账号上。

## 订阅状态会如何影响功能

付费功能不仅取决于激活码本身，还取决于订阅状态。

常见状态包括：

- `active`：正常可用
- `past_due` / `paused`：部分能力会进入宽限状态
- `expired` / `cancelled`：高级功能会被锁定，回退到免费能力

## 出现问题时先看什么

如果你遇到“已登录但功能没开”这类问题，优先检查：

- Google 登录是否成功
- License 是否已绑定
- 当前套餐状态是否为 `active`
- 激活码是否过期

如果问题仍未解决，继续查看 [故障排查](/zh/docs/troubleshooting)。
