# PharmaEvolution — Website Rebuild

Rebuild the client's site as a modern, fast React app. The reference site (abdouertani.github.io/pharmaevolution) provides the structure and content; your three screenshots (home, products, contact) are the final visual design: clean white/teal medical aesthetic, teal hero banners, rounded cards.

## Pages (7 routes, matching the reference site)

| Route | Content (from reference) |
|---|---|
| `/` | Hero "Innovating Health Across Africa and the Middle East" with image slider, core services (4 cards), process steps, trusted partnerships |
| `/about` | Company story, mission, team/values |
| `/services` | 6 services (Medical Promotion, Regulatory Affairs, Training, Market Research, Tenders, Partnerships) + 4-step process |
| `/products` | Teal hero banner; Dermal fillers (Hyabell®, Varioderm®, Variofill®) as product cards with pastel image backgrounds and checkmark feature lists; DermaCare skincare; Technical Highlights icon row (Made in Germany, CE certified, 33 mg/ml HA, Non-animal HA, 36-month shelf life, IMCAS validated) |
| `/partners` | Adoderm GmbH flagship partnership + regulatory/institutional partners (ANMAPS, ARP, AIRP, DPM, AMMPS) |
| `/training` | Training & events: IMCAS Training Village, FACE Anatomy Master Course, symposiums, webinars |
| `/contact` | Teal hero banner with team photo; "Get in touch" info card (address: 64 Avenue Azzouz Boukhris, 4054 Sahloul 3 — Sousse, Tunisia; phones +216 24 610 004 / +216 73 369 975; email firas.b.khalifa@pharmaevolution.net; hours Mon–Fri 9:00–17:00 GMT+1); validated message form (name, company, email, phone, subject, message) |

## Design (from your screenshots)

- White background, deep navy headings, teal/cyan accent, light teal highlight behind key words
- Sticky top nav: logo left, links center, "English" language switcher pill right
- Home hero: left text + CTAs ("Explore our products" dark pill, "Contact sales" teal pill), right rounded image card with slider dots and product overlay chip
- Inner pages (products, contact, etc.): full-width teal rounded hero banner with white heading, small label chip, CTA pill, and a photo on the right
- Service cards: white cards, thin border, teal line icons, generous spacing
- Product cards: pastel-tinted image panel on top, name + description + green-check feature list below
- Process: 4 numbered steps with pastel-colored number chips connected by dotted line
- Contact form: white card, labeled inputs with red validation messages, dark "Send" pill button
- Typography: bold geometric sans for headings, clean sans for body
- All colors defined as design tokens in `src/styles.css` (no hardcoded colors in components)

## Build steps

1. Set up the design system (teal/navy palette, fonts, radii) in `src/styles.css`
2. Generate imagery: home hero slide, inner-page hero photos, product pack shots (Hyabell, Varioderm, Variofill, DermaCare) on pastel backgrounds
3. Build shared layout: header nav + footer in the root route
4. Build the home page exactly per the home screenshot
5. Build the 6 remaining pages per the products/contact screenshots and the reference site's text content
6. Contact form: front-end validation only for now (can wire to email/backend later if you want)
7. Per-page SEO titles/descriptions

## Notes

- No database or login needed — it's a pure marketing site.
- The language switcher will be visual only unless you want real FR/EN translations (tell me if so).
- I'll pull the real text from the reference site; anything missing (phone, address) I'll mark for you to confirm.
