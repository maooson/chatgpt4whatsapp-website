# Landing A/B Test Setup

## Variants
- Install-first: `/lp-install` (`exp_id=lp_ab`, `exp_variant=install_v1`)
- Conversion-first: `/lp-conversion` (`exp_id=lp_ab`, `exp_variant=conversion_v1`)

## Event Schema (GA via gtag)
- `lp_view`
  - `exp_id`
  - `exp_variant`
  - `page_path`
- `cta_click`
  - `cta_name`
  - `cta_location`
  - `cta_href`
  - `exp_id`
  - `exp_variant`

## Primary KPIs
- Install CTR: `hero_install_free` / `lp_view`
- Pricing Intent CTR: `hero_compare_plans` + `final_open_pricing` / `lp_view`
- Final Install CTR: `final_install` + `final_install_after_pricing` / `lp_view`

## Recommendation
- Send 50/50 paid traffic split to both variants for at least 7 days.
- Keep one traffic source per experiment batch to avoid source mix bias.
