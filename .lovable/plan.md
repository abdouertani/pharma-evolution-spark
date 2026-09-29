# PharmaEvolution — Website Rebuild

Rebuild the client's site as a modern, fast React app. The reference site (abdouertani.github.io/pharmaevolution) provides the structure and content; your three screenshots (home, products, contact) are the final visual design: clean white/teal medical aesthetic, teal hero banners, rounded cards.

## Pages (7 routes, matching the reference site)

| Route | Content (from reference) |
|---|---|
| `/` | Hero "Innovating Health Across Africa and the Middle East" with image slider, core services (4 cards), process steps, trusted partnerships |
| `/about` | Company story, mission, team/values |
| `/services` | 6 services (Medical Promotion, Regulatory Affairs, Training, Market Research, Tenders, Partnerships) + 4-step process |
| `/products` | Dermal fillers (Hyabell®, Varioderm®, Variofill®), DermaCare skincare, technical highlights |
| `/partners` | Adoderm GmbH flagship partnership + regulatory/institutional partners (ANMAPS, ARP, AIRP, DPM, AMMPS) |
| `/training` | Training & events: IMCAS Training Village, FACE Anatomy Master Course, symposiums, webinars |
| `/contact` | Contact info, message form, office/visit section |

## Design (from your screenshot)

- White background, deep navy headings, teal/cyan accent, light teal highlight behind key words
- Sticky top nav: logo left, links center, language switcher right
- Hero: left text + CTAs ("Explore our products" dark pill, "Contact sales" teal pill), right rounded image card with slider dots and product overlay chip
- Service cards: white cards, thin border, teal line icons, generous spacing
- Process: 4 numbered steps with pastel-colored number chips connected by dotted line
- Typography: bold geometric sans for headings, clean sans for body
- All colors defined as design tokens in `src/styles.css` (no hardcoded colors in components)

## Build steps

1. Set up the design system (teal/navy palette, fonts, radii) in `src/styles.css`
2. Generate hero and product imagery (dermal filler / aesthetic medicine theme)
3. Build shared layout: header nav + footer in the root route
4. Build the home page exactly per the screenshot
5. Build the 6 remaining pages using the reference site's text content
6. Contact form: front-end only for now (can wire to email/backend later if you want)
7. Per-page SEO titles/descriptions

## Notes

- No database or login needed — it's a pure marketing site.
- The language switcher will be visual only unless you want real FR/EN translations (tell me if so).
- I'll pull the real text from the reference site; anything missing (phone, address) I'll mark for you to confirm.
