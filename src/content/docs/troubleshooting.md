---
draft: false
title: "Troubleshooting"
description: "Resolve the most common issues with login, license binding, connectors, scheduled messages, and paid feature access."
category: "Troubleshooting"
order: 1
audience: ["new-users", "operators", "admins"]
updatedAt: "2026-03-28"
related:
  - "google-login-and-license"
  - "scheduled-messages"
  - "license-and-webhook-ops"
---

## 🛑 Google login fails

First, verify that Google authentication completed successfully. 

**Checklist:**
- [ ] Did the browser automatically block third-party cookies or pop-ups?
- [ ] Is your browser session stale? (Try hard-refreshing Chrome)
- [ ] Are you attempting to authorize a different Google profile than the one actively signed into the browser?

---

## 🔑 License binding fails

If the license key is rejected during binding:

**Checklist:**
- [ ] Is the license key valid and copied without leading/trailing spaces?
- [ ] Does the bound customer email perfectly match the original purchase record?
- [ ] Has the license expired?
- [ ] Has the activation device limit been exhausted on other computers?

> [!TIP] **Device Limits**
> You can manage and revoke active devices directly from your customer portal.

---

## 🔒 Paid features are suddenly locked

Paid features are controlled dynamically by the backend.

**Checklist:**
- [ ] **Expiry**: Did the license pass its expiration date?
- [ ] **Subscription State**: Did your latest recurring payment fail? (Check your bank / Lemon Squeezy portal)
- [ ] **Status**: Check if your backend entitlement is returning a `past_due` or `paused` status.

---

## 🔌 Connector errors

If AI assistance, text generation, or lead analysis fails:

**Checklist:**
- [ ] **API Key**: Is the key valid and funded? (Check your OpenAI/Groq dashboard)
- [ ] **Model Name**: Did the provider deprecate or rename the model you selected?
- [ ] **Network**: Is a proxy or strict corporate firewall blocking external API requests?
- [ ] **Gating**: Does your Agent for WhatsApp plan allow this specific connector type?

---

## 🛠 What to collect before contacting support

Our support team can help you _much_ faster if you provide the following details upfront:

1. **The exact visible error message** (Copy the red text)
2. **Screenshots** or short screen recordings of the failing workflow
3. **Scope**: Does this affect one user or everyone on your team?
4. **Category**: Specify if it is a Login issue, Entitlement issue, or Workflow issue.
