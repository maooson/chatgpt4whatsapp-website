---
draft: false
title: "Connect an AI Provider"
description: "Set up OpenAI, OpenRouter, Groq, or local connectors so AI features work reliably."
category: "Get Started"
order: 3
audience: ["new-users"]
updatedAt: "2026-03-28"
related:
  - "quick-start"
  - "lead-intelligence"
  - "troubleshooting"
---

## 🔌 Why Connectors Matter

The AI features in Agent for WhatsApp absolutely depend on a working Connector. 

Without one, you can still use local or manual workflows (like Message Templates or Scheduled Messages), but **AI analysis, automated replies, and Lead Intelligence will not function**.

---

## 🌐 Supported Provider Paths

Depending on your plan and technical preference, the product seamlessly integrates with:

- 🟢 **OpenAI** (Recommended for stability and GPT-4o)
- 🟣 **OpenRouter** (Best for accessing a wide variety of models)
- 🟠 **Groq** (Incredible speed for simple tasks)
- 🔌 **Local Models** (For privacy-first self-hosted inference like Ollama)

---

## ✅ Setup Checklist

Before expecting AI workflows to run perfectly, verify the following inside your Connector Settings:

- [ ] **API Key Validity**: The key is active and has billing credits
- [ ] **Model Availability**: The model name you typed exactly matches the provider's API
- [ ] **Plan Entitlement**: Your current account plan supports the specific connector you chose
- [ ] **Network Access**: Requests are not being silently blocked by your corporate proxy or strict firewall

> [!TIP] **Where to find API keys**
> For OpenAI, visit `platform.openai.com/api-keys`. For OpenRouter, visit `openrouter.ai/keys`.

---

## 🧪 How to test quickly

Do not test with abstract prompts. Validate your connector directly inside the actual product workflow:

1. Open a WhatsApp chat
2. Refresh the **AI inquiry qualification** for that lead
3. Generate a message from a template
4. Trigger a structured lead extraction run

**If the result fails or times out, your connector setup is incomplete.**

> [!IMPORTANT] **Best Practice**
> Test the connector inside the *exact* workflow you care about. This is the only way to determine whether your setup is fast, cheap, and stable enough for daily production use.
