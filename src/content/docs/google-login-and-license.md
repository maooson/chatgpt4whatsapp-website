---
draft: false
title: "Google Login and License Binding"
description: "Understand how Google authentication, license binding, and paid feature access work together."
category: "Get Started"
order: 2
audience: ["new-users", "admins"]
updatedAt: "2026-03-28"
related:
  - "quick-start"
  - "troubleshooting"
---

## 🔑 Core Concepts

Agent for WhatsApp intentionally separates its architecture into two different concepts:

- 👤 **Google Login** (Your Identity)
- 💳 **License Binding** (Your Entitlement)

They work together seamlessly, but they serve two distinct purposes.

---

## 👤 Google Login

Google login is the **Identity Layer** that authenticates the actual human behind the extension.

It enables:
- Account-level cloud settings
- Future sync or ownership logic across devices
- A stable, encrypted identity for license binding

> [!TIP] **Seamless Access**
> You do not need a separate password. Use the Google account you are already logged into on your Chrome browser for minimal friction.

---

## 💳 License Binding

License binding connects your purchased **Agent for WhatsApp License Key** to your signed-in Google account.

**When binding succeeds:**
- 🟢 The extension instantly unlocks plan-based premium features
- 🟢 Entitlement checks authenticate both your license validity and active subscription state
- 🟢 Future logins on new devices will automatically recognize your linked license

### What happens if the purchase email is different?

This is a very common scenario. The simple rule is:
1. **Google Login** proves _who_ is using the extension right now.
2. The **License Key** validates the purchase record.

If your Google email and Purchase email do not match, **that is perfectly fine**. The system allows you to bind any valid license key to your active Google session.

---

## ⚠️ Subscription States

Paid features are governed by your subscription state, not just the static key. 

Typical dashboard outcomes:
- ✅ `active`: Full access to all premium features
- 🔄 `past_due` or `paused`: Grace period access (update your payment method soon)
- ❌ `expired` or `cancelled`: Paid features are blocked and downgrade to free functionality

---

## 💡 Best Practice

For the lowest-friction setup:
1. Log in with the Google account you intend to use **long term**
2. Bind the license immediately after your very first login
3. Avoid constantly switching between multiple Google identities on the same Chrome profile

> [!WARNING] **Troubleshooting**
> If you experience login or binding blocks, check the [Troubleshooting Guide](/docs/troubleshooting). Provide support with your visible error message and confirm whether your license is currently `active`.
