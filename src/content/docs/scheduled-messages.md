---
draft: false
title: "Scheduled Messages"
description: "Plan follow-ups ahead of time, reuse templates, and personalize messages with supported variables."
category: "Core Workflows"
order: 3
audience: ["sales", "operators"]
updatedAt: "2026-03-28"
related:
  - "message-templates"
  - "batch-sender"
  - "troubleshooting"
---

## ⏳ What this feature does

**Scheduled Messages** let you queue a WhatsApp message to be sent later at a precise time. 

This is especially useful for:
- 🗓️ **Quote follow-ups**: "Hi, did you get a chance to review the pricing?"
- 🌎 **Time-zone aware outreach**: Reaching clients when they are awake
- ⏰ **Delayed reminders**: Gentle nudges for meetings or payments
- 🌱 **Staged customer nurture**: Drip-feeding information over days

---

## 🔗 Shared Template Ecosystem

Scheduled messages can use the exact same shared **Message Templates** as Batch Sender. 

This creates **one reusable template system** instead of multiple disconnected template sources. You edit a template once, and it updates everywhere.

![Select Template](/img/screenshot-4.jpg)

---

## 🧬 Dynamic Variables

Just like templates, Scheduled message content deeply supports variable replacement:

- `{{name}}`: The contact's name
- `{{number}}`: The contact's phone number

The system dynamically resolves these values at the exact **send time** using the latest stored contact context.

---

## 🛠 Troubleshooting Scheduled Messages

What to check if a scheduled message fails or feels wrong:

1. **Contact Sync**: Does the contact actually exist in the local customer store?
2. **Variable Validity**: Does the selected template use supported variables?
3. **Queue Status**: Check if the task status in the pending list shows success or failure.

> [!WARNING] **Device Connectivity**
> WhatsApp Web relies on a stable connection to your phone. If your phone is completely disconnected from the internet at the scheduled time, the message may be delayed until the connection restores.

---

## 💡 Best Practice

Use scheduled messages for clear **next-step actions**, not for complex branching sequences.

If a workflow depends on multiple decision paths (e.g., "If they reply A, do B; if they reply C, do D"), keep only the **first** message scheduled and let the subsequent steps depend on the user's actual reply. It is not an auto-responder!
