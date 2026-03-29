import type { Locale } from "@lib/i18n";

export const siteCopy = {
  en: {
    brand: "Agent for WhatsApp",
    nav: {
      product: "Product",
      whatsapp: "WhatsApp",
      wechat: "Wechat",
      pricing: "Pricing",
      docs: "Docs",
      contact: "Contact",
      language: "中文",
    },
    hero: {
      eyebrow: "WhatsApp Growth Workspace",
      installTitle: "Automate WhatsApp. Convert more leads.",
      conversionTitle: "The smarter way to manage WhatsApp conversations",
      installDesc:
        "AI-powered replies, lead management, and campaign workflows — all inside a Chrome extension. Set up in 5 minutes.",
      conversionDesc:
        "Templates, lead context, scheduled follow-ups, and AI guidance in one lightweight workspace.",
      primaryCta: "Add to Chrome",
      secondaryCta: "View Plans",
      footnote: "No credit card required · Works with WhatsApp Web",
    },
    proof: {
      statsTitle: "The numbers speak for themselves",
      stats: [
        { value: "500+", label: "Active Users" },
        { value: "50K+", label: "Messages Automated" },
        { value: "5 min", label: "Setup Time" },
        { value: "99.9%", label: "Uptime" },
      ],
    },
    features: {
      eyebrow: "Everything you need",
      title: "Turn conversations into revenue",
      desc:
        "A complete toolkit for WhatsApp-first teams to engage, qualify, and convert — all from one extension.",
      cards: [
        {
          title: "AI Smart Reply",
          desc: "Automate responses with AI that understands context. Connect OpenAI, Groq, Gemini, or run local models.",
          items: ["Context-aware auto replies", "Custom persona & tone control", "Multi-provider flexibility"],
        },
        {
          title: "Lead Management",
          desc: "Capture, qualify, and track leads directly from WhatsApp conversations. No heavy CRM needed.",
          items: ["AI inquiry qualification", "Structured lead context", "Priority scoring"],
        },
        {
          title: "Campaign Workflows",
          desc: "Send batch messages, schedule follow-ups, and reuse templates to move prospects through your funnel.",
          items: ["Message templates", "Batch sender", "Scheduled reminders"],
        },
      ],
    },
    how: {
      eyebrow: "How It Works",
      title: "Go live in minutes",
      desc: "No complex setup or onboarding. Get started with three simple steps.",
      stepLabel: "Step",
      cta: "Add to Chrome",
      steps: [
        {
          num: "01",
          title: "Install the Chrome extension",
          text: "Add Agent for WhatsApp from the Chrome Web Store. It works alongside WhatsApp Web — no separate app needed.",
        },
        {
          num: "02",
          title: "Connect your AI provider",
          text: "Set up OpenAI, OpenRouter, Groq, Gemini, or your local model. Switch providers anytime based on cost or speed.",
        },
        {
          num: "03",
          title: "Start automating",
          text: "Enable smart replies, set up message templates, and qualify your first lead. Expand as the workflow proves itself.",
        },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Common questions",
      learnMore: "Learn more →",
      items: [
        {
          question: "How long does setup usually take?",
          answer:
            "Most users finish setup in about 5 minutes: install the extension, connect an AI provider, test the connection, and start with templates or manual assist.",
          link: "/docs/quick-start",
        },
        {
          question: "Which AI models and providers are supported?",
          answer:
            "You can connect OpenAI, OpenRouter, Groq, Gemini, and local models such as Ollama or LM Studio. You can switch providers at any time.",
          link: "/docs/connect-ai-connector",
        },
        {
          question: "What can I automate beyond simple auto-replies?",
          answer:
            "Agent for WhatsApp also includes message templates, batch sending, scheduled follow-ups, and lightweight lead management for real sales and support workflows.",
          link: "/docs/use-cases-sales-workflows",
        },
        {
          question: "Can I control when and how replies are sent?",
          answer:
            "Yes. You can configure persona rules, trigger modes, reply scope, quiet hours, and other safeguards so automation stays predictable.",
          link: "/pricing",
        },
        {
          question: "What is the difference between Free, Pro, and Max?",
          answer:
            "Free is for evaluation and light use. Pro and Max unlock more automation capacity, stronger controls, and more advanced workflow features.",
          link: "/pricing",
        },
        {
          question: "How do I know if it is working well for my team?",
          answer:
            "The dashboard helps you monitor connection status, bot activity, and usage trends so you can quickly see whether the workflow is stable and being used.",
          link: "/pricing",
        },
      ],
    },
    cta: {
      eyebrow: "Ready to get started?",
      installTitle: "See Agent for WhatsApp in action",
      conversionTitle: "Choose the right plan for your growth",
      installDesc: "Start free, prove the workflow, then scale when volume grows.",
      conversionDesc: "Start free. Scale as your campaigns grow. No lock-in.",
      installPrimary: "Add to Chrome",
      conversionPrimary: "View Plans",
      secondary: "Explore Docs",
    },
    footer: {
      groups: [
        {
          title: "Product",
          links: [
            { label: "Features", href: "/#features" },
            { label: "Pricing", href: "/pricing" },
            { label: "Chrome Extension", href: "https://chromewebstore.google.com/detail/agent-for-whatsapp/kjeodciaphncjcogidpafdeeckmpdcpn" },
          ],
        },
        {
          title: "Resources",
          links: [
            { label: "Documentation", href: "/docs" },
            { label: "Quick Start", href: "/docs/quick-start" },
            { label: "Use Cases", href: "/docs/use-cases-sales-workflows" },
          ],
        },
        {
          title: "Company",
          links: [
            { label: "About", href: "/about" },
            { label: "Contact", href: "/contact" },
          ],
        },
        {
          title: "Community",
          links: [
            { label: "WhatsApp Group", href: "https://chat.whatsapp.com/EfstaVv9xWt5DbMLTJushi" },
            { label: "Telegram", href: "https://t.me/chatgpt4telegram" },
            { label: "X (Twitter)", href: "https://twitter.com/ottimogo" },
          ],
        },
      ],
      copyright: "All rights reserved.",
      madeBy: "Made by",
    },
    pricing: {
      title: "Simple, Transparent Pricing",
      desc: "Start free. Upgrade when you need more power.",
      mostPopular: "Most Popular",
      limitedDiscount: "Limited-time discount",
      starterFeatures: [
        "Dashboard overview",
        "1 AI connector (OpenAI)",
        "Basic persona settings",
        "Manual reply assist",
        "Usage analytics",
        "Community support",
      ],
      proFeatures: [
        "Everything in Starter, and",
        "All AI connectors (OpenRouter, Groq, Local)",
        "Advanced persona & tone control",
        "Auto-reply & trigger rules",
        "Toolbox: lead management",
        "Message workflows",
        "Priority support",
      ],
      maxFeatures: [
        "Everything in Pro, and",
        "Unlimited automation rules",
        "Team-level controls & safety",
        "Advanced usage analytics",
        "Custom proxy server",
        "Dedicated support",
      ],
      getStarted: "Get Started",
      free: "Free",
      perMonth: "/mo",
      billedMonthly: "Billed monthly · Cancel anytime",
      noCard: "No credit card required",
    },
    contact: {
      title: "Contact",
      desc: "We are here to help.",
      heading: "Contact Agent for WhatsApp",
      body: "Have something to say? We are here to help. Fill out the form or reach us via email or WhatsApp.",
      whatsappGroup: "WhatsApp Group",
      website: "Website",
    },
    contactForm: {
      name: "Full Name",
      nameError: "Please provide your full name.",
      email: "Email Address",
      emailError: "Please provide your email address.",
      emailInvalid: "Please provide a valid email address.",
      message: "Your Message",
      messageError: "Please enter your message.",
      submit: "Send Message",
      sending: "Sending...",
      fallbackError: "Something went wrong!",
    },
    about: {
      title: "About",
      desc: "We are a small passionate team.",
      heading: "A focused team building better WhatsApp workflows.",
      body:
        "We build practical tools for teams that rely on WhatsApp every day. Our goal is simple: make AI, follow-ups, and lead operations easier to use without adding CRM complexity.",
    },
    docs: {
      title: "Everything You Need to Master Agent for WhatsApp",
      desc: "Explore our step-by-step guides, core workflows, and troubleshooting tips to get the most out of your workspace.",
      eyebrow: "Help Center",
      back: "← Back to Docs",
      updated: "Updated",
      related: "Related Docs",
      categoryDescriptions: {
        "Get Started": "Get installed, connect your account, and reach first value quickly.",
        "Core Workflows": "Learn the product paths customers use every day.",
        "Use Cases": "Map product capabilities to sales and support outcomes.",
        "Troubleshooting": "Resolve common setup, license, and workflow issues.",
        "Admin & Ops": "Support, release, and backend operations for your team.",
      },
    },
  },
  zh: {
    brand: "Agent for WhatsApp",
    nav: {
      product: "产品",
      whatsapp: "WhatsApp",
      wechat: "微信",
      pricing: "定价",
      docs: "文档",
      contact: "联系",
      language: "EN",
    },
    hero: {
      eyebrow: "WhatsApp 增长工作台",
      installTitle: "自动化 WhatsApp，拿下更多商机。",
      conversionTitle: "更聪明地管理 WhatsApp 对话",
      installDesc: "AI 回复、线索管理和消息工作流，都集成在一个 Chrome 插件里。5 分钟即可开始使用。",
      conversionDesc: "模板、客户上下文、定时跟进和 AI 指导，集中在一个轻量工作台里。",
      primaryCta: "添加到 Chrome",
      secondaryCta: "查看套餐",
      footnote: "无需信用卡 · 兼容 WhatsApp Web",
    },
    proof: {
      statsTitle: "用结果说明产品价值",
      stats: [
        { value: "500+", label: "活跃用户" },
        { value: "50K+", label: "已自动化消息" },
        { value: "5 分钟", label: "平均配置时间" },
        { value: "99.9%", label: "在线可用率" },
      ],
    },
    features: {
      eyebrow: "核心能力",
      title: "把聊天转成成交机会",
      desc: "为以 WhatsApp 为主阵地的团队提供完整工具，帮助触达、识别和转化客户。",
      cards: [
        {
          title: "AI 智能回复",
          desc: "用理解上下文的 AI 自动回复。可接入 OpenAI、Groq、Gemini，也支持本地模型。",
          items: ["上下文感知回复", "人设与语气可控", "多模型供应商切换"],
        },
        {
          title: "线索管理",
          desc: "直接从 WhatsApp 对话里捕获、分级和跟进客户，不需要上来就引入重型 CRM。",
          items: ["AI 询盘分级", "结构化线索信息", "优先级评分"],
        },
        {
          title: "营销工作流",
          desc: "批量发送、定时跟进和模板复用，帮助你持续推进客户转化。",
          items: ["消息模板", "批量发送", "定时提醒"],
        },
      ],
    },
    how: {
      eyebrow: "使用方式",
      title: "几分钟即可上线",
      desc: "无需复杂实施或培训，三步即可开始。",
      stepLabel: "步骤",
      cta: "添加到 Chrome",
      steps: [
        {
          num: "01",
          title: "安装 Chrome 插件",
          text: "从 Chrome Web Store 安装 Agent for WhatsApp。它直接运行在 WhatsApp Web 内，无需额外应用。",
        },
        {
          num: "02",
          title: "连接 AI 模型",
          text: "配置 OpenAI、OpenRouter、Groq、Gemini 或本地模型。你可以按成本和速度随时切换。",
        },
        {
          num: "03",
          title: "开始自动化",
          text: "启用智能回复、使用消息模板，并完成第一条线索分级。后续再逐步扩展工作流。",
        },
      ],
    },
    faq: {
      eyebrow: "常见问题",
      title: "常见问题",
      learnMore: "查看详情 →",
      items: [
        {
          question: "一般多久可以配置完成？",
          answer: "大多数用户大约 5 分钟就能完成：安装插件、连接 AI 模型、测试连接，然后从模板或手动辅助开始使用。",
          link: "/docs/quick-start",
        },
        {
          question: "支持哪些 AI 模型和提供商？",
          answer: "支持 OpenAI、OpenRouter、Groq、Gemini，以及本地模型（如 Ollama / LM Studio），并且可以随时切换。",
          link: "/docs/connect-ai-connector",
        },
        {
          question: "除了自动回复，还能做哪些事情？",
          answer: "除了智能回复，产品还支持消息模板、批量发送、定时跟进和轻量线索管理，适合销售和客户沟通场景。",
          link: "/docs/use-cases-sales-workflows",
        },
        {
          question: "回复行为和安全策略可控吗？",
          answer: "可以。你可以配置人设规则、触发方式、回复范围、静默时段等，确保自动化按你的预期运行。",
          link: "/pricing",
        },
        {
          question: "Free、Pro、Max 有什么区别？",
          answer: "Free 适合试用和轻度使用；Pro 和 Max 提供更高的自动化能力、更强的控制项以及更完整的工作流功能。",
          link: "/pricing",
        },
        {
          question: "怎么判断这套流程是否真的跑起来了？",
          answer: "你可以在 Dashboard 里查看连接状态、机器人运行状态和使用趋势，快速判断当前流程是否稳定可用。",
          link: "/pricing",
        },
      ],
    },
    cta: {
      eyebrow: "准备开始了吗？",
      installTitle: "看看 Agent for WhatsApp 如何工作",
      conversionTitle: "选择适合你业务增长的套餐",
      installDesc: "先免费试用，跑通流程，再按业务量升级。",
      conversionDesc: "从免费开始，业务增长后再升级，无锁定。",
      installPrimary: "添加到 Chrome",
      conversionPrimary: "查看套餐",
      secondary: "查看文档",
    },
    footer: {
      groups: [
        {
          title: "产品",
          links: [
            { label: "功能", href: "/#features" },
            { label: "定价", href: "/pricing" },
            { label: "Chrome 插件", href: "https://chromewebstore.google.com/detail/agent-for-whatsapp/kjeodciaphncjcogidpafdeeckmpdcpn" },
          ],
        },
        {
          title: "资源",
          links: [
            { label: "文档中心", href: "/docs" },
            { label: "快速开始", href: "/docs/quick-start" },
            { label: "使用场景", href: "/docs/use-cases-sales-workflows" },
          ],
        },
        {
          title: "公司",
          links: [
            { label: "关于我们", href: "/about" },
            { label: "联系我们", href: "/contact" },
          ],
        },
        {
          title: "社区",
          links: [
            { label: "WhatsApp 群组", href: "https://chat.whatsapp.com/EfstaVv9xWt5DbMLTJushi" },
            { label: "Telegram", href: "https://t.me/chatgpt4telegram" },
            { label: "X（Twitter）", href: "https://twitter.com/ottimogo" },
          ],
        },
      ],
      copyright: "保留所有权利。",
      madeBy: "由",
    },
    pricing: {
      title: "简单透明的定价",
      desc: "先免费试用，需要更多能力时再升级。",
      mostPopular: "最受欢迎",
      limitedDiscount: "限时优惠",
      starterFeatures: [
        "Dashboard 总览",
        "1 个 AI 连接器（OpenAI）",
        "基础人设设置",
        "手动回复辅助",
        "使用分析",
        "社区支持",
      ],
      proFeatures: [
        "包含 Starter 全部能力，另外提供",
        "全部 AI 连接器（OpenRouter、Groq、本地模型）",
        "高级人设与语气控制",
        "自动回复与触发规则",
        "Toolbox：线索管理",
        "消息工作流",
        "优先支持",
      ],
      maxFeatures: [
        "包含 Pro 全部能力，另外提供",
        "无限自动化规则",
        "团队级控制与安全策略",
        "高级使用分析",
        "自定义代理服务",
        "专属支持",
      ],
      getStarted: "立即开始",
      free: "免费",
      perMonth: "/月",
      billedMonthly: "按月计费 · 随时取消",
      noCard: "无需信用卡",
    },
    contact: {
      title: "联系我们",
      desc: "我们随时为你提供帮助。",
      heading: "联系 Agent for WhatsApp 团队",
      body: "如果你有任何问题、反馈或合作需求，欢迎填写表单，或通过邮件与 WhatsApp 联系我们。",
      whatsappGroup: "WhatsApp 群组",
      website: "官网",
    },
    contactForm: {
      name: "姓名",
      nameError: "请填写你的姓名。",
      email: "邮箱地址",
      emailError: "请填写你的邮箱地址。",
      emailInvalid: "请输入有效的邮箱地址。",
      message: "你的留言",
      messageError: "请输入留言内容。",
      submit: "发送消息",
      sending: "发送中...",
      fallbackError: "发生了一些问题，请稍后再试。",
    },
    about: {
      title: "关于我们",
      desc: "我们是一支专注的小团队。",
      heading: "专注打造更好用的 WhatsApp 工作流工具。",
      body: "我们为每天依赖 WhatsApp 处理客户沟通的团队打造实用工具。目标很明确：让 AI、跟进和线索运营更容易落地，而不是增加 CRM 复杂度。",
    },
    docs: {
      title: "掌握 Agent for WhatsApp 所需的一切",
      desc: "通过分步骤指南、核心工作流说明和故障排查文档，更快用好你的工作台。",
      eyebrow: "帮助中心",
      back: "← 返回文档中心",
      updated: "更新于",
      related: "相关文档",
      categoryDescriptions: {
        "Get Started": "完成安装、账号连接，并快速跑通第一条流程。",
        "Core Workflows": "了解用户日常最常使用的核心路径。",
        "Use Cases": "把产品能力映射到销售和支持场景中。",
        "Troubleshooting": "排查常见的安装、授权和工作流问题。",
        "Admin & Ops": "为你的团队提供支持、发布和后端运维说明。",
      },
    },
  },
} satisfies Record<Locale, any>;

export function getSiteCopy(locale: Locale) {
  return siteCopy[locale];
}
