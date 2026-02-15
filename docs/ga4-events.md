# GA4 Event Naming Spec

This document defines analytics naming conventions for ChatGPT for WhatsApp website funnels.

## Scope

- Site pages
- CTA clicks
- Tool interactions
- Blog-to-pricing conversion paths

## Event Principles

- Use lower_snake_case for event names and params.
- Keep one semantic meaning per event.
- Include `cta_name` and `cta_location` for all CTA events.
- Add `page_type` for funnel analysis when applicable.

## Core Events

### 1) `cta_click`

Triggered when any element with `data-cta` is clicked.

Required params:
- `cta_name` (e.g. `hero_add_to_chrome`, `pricing_pro_click`)
- `cta_location` (e.g. `hero`, `pricing`, `tool_reply_generator`)
- `cta_href` (outbound URL or internal path)

### 2) `tool_generate`

Triggered when user generates output in free tool pages.

Required params:
- `tool_name` (e.g. `whatsapp_reply_generator`)
- `selected_tone`
- `selected_length`

### 3) `tool_copy`

Triggered when user copies generated output.

Required params:
- `tool_name`
- `selected_length`

## Recommended Dimensions

Register in GA4 custom definitions:
- `cta_name`
- `cta_location`
- `cta_href`
- `tool_name`
- `selected_tone`
- `selected_length`
- `page_type`

## Page Type Mapping

- Homepage: `landing`
- Pricing: `transaction`
- Blog detail: `informational`
- Tool page: `lead_magnet`

## Funnel Views

### Funnel A: Organic to Paid
1. Blog page view
2. `cta_click` to pricing
3. Pricing outbound click

### Funnel B: Tool to Paid
1. Tool page view
2. `tool_generate`
3. `tool_copy`
4. `cta_click` to pricing

## QA Checklist

- Validate events in GA4 DebugView before release.
- Confirm UTM params persist on outbound links.
- Confirm no duplicate events per click.
- Validate event coverage on desktop and mobile.
