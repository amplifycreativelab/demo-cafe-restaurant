# Development Tasks - Demo 1 (Cafe / Restaurant)

Source docs:

- `global prompt.md`
- Demo 1 cafe/restaurant brief (note: filename uses an em dash after "Demo 1")

How to use:

- Mark items complete by changing `- [ ]` to `- [x]`.
- Work top-to-bottom; sections later in the file may depend on earlier setup tasks.

## Phase 0 - Project Decisions

- [x] Confirm GitHub Pages repo name for Astro `base` (must be `"/<repo>/"`).
- [x] Choose styling approach: Tailwind OR CSS modules + tokens (pick one and stick to it).
- [x] Choose fonts (max 2): serif headings + sans body.
- [x] Confirm business placeholders (name, phone, address area in Perth WA, hours, cuisine).
- [x] Confirm booking flow (external booking link vs. on-site form UI vs. phone-first).

## Phase 1 - Astro Setup (Static + GitHub Pages)

- [x] Create a new Astro project (static output).
- [x] Configure `astro.config.mjs` with `site: "https://github.com/amplifycreativelab"` and `base: "/<repo>/"`.
- [x] Ensure all internal links and asset URLs work under the base path (no hard-coded absolute `/` paths).
- [x] Add/verify npm scripts: `dev`, `build`, `preview`.
- [x] Add `src/assets/images/` placeholder images (hero, highlights, gallery, menu items, OG image).

## Phase 2 - Design System (Hospitality-first)

- [x] Define color palette (warm cream background, espresso text, olive + terracotta accents).
- [x] Define spacing scale (4/8/12/16/24/32/48/64).
- [x] Define typography scale (H1/H2/body/labels) with strong hierarchy.
- [x] Implement focus-visible styles for links/buttons/inputs.
- [x] Implement reduced motion support (`prefers-reduced-motion`).

If using Tailwind:

- [ ] Install/configure Tailwind for Astro.
- [ ] Add Tailwind theme tokens (colors, font families, spacing, radii, shadows).

If using CSS modules + tokens:

- [x] Create `src/styles/tokens.css` (colors, font families, spacing, radii, shadows).
- [x] Create base/global styles (typography defaults, container widths, utilities).

## Phase 3 - Core Layout & Shared Components

- [x] Create `src/layouts/BaseLayout.astro` with:
  - [x] Skip link
  - [x] Header/nav
  - [x] Footer with NAP + hours
  - [x] Title/meta slots
  - [x] OG/Twitter meta placeholders
- [x] Build design-system components (reused across pages):
  - [x] `Button` (primary/secondary + focus states)
  - [x] `Card`
  - [x] `SectionHeader`
  - [x] `FormInput` / `Textarea` (label + error/help text pattern)
  - [x] `Badge` (dietary tags + "Chef's Special")
  - [x] `Testimonial` / `ReviewCard`
- [x] Build demo-specific components:
  - [x] `CTASection.astro`
  - [x] `HoursAndLocation.astro` (address, hours, map placeholder)
  - [x] `MenuCategoryNav.astro` (sticky on scroll; anchor links)
  - [x] `MenuItemCard.astro` (name, description, price, dietary tags, chef special)

## Phase 4 - Content & Data Layer

- [x] Create `src/data/menu.json` with:
  - [x] Categories: Breakfast, Lunch, Dinner, Drinks
  - [x] Items: `name`, `description`, `price`
  - [x] Dietary tags: `V`, `VG`, `GF`
  - [x] Flags: `featured: true`, `chefSpecial: true`
- [x] Add realistic sample menu items (enough to populate all sections).
- [x] Add sample reviews + rating (e.g., 4.7/5) used on Home/Booking.
- [x] Add NAP content used site-wide (footer + contact + schema).

## Phase 5 - Pages (Demo IA + Required Pages)

### Home (`src/pages/index.astro`)

- [x] Hero: name + 1-sentence value prop + primary "Book a table" CTA + secondary "View menu" CTA (above the fold).
- [x] Social proof: rating badge + 3 short review cards.
- [x] "Today's Highlights": render 3 featured items from `menu.json`.
- [x] Menu preview: Breakfast/Lunch/Drinks (2-3 items each) + CTA to full menu.
- [x] Location & hours: address + hours + map placeholder (+ optional open/closed indicator).
- [x] Areas we serve: Perth CBD, Subiaco, Leederville, Mount Lawley, Victoria Park, East Perth (natural language).
- [x] Footer: NAP + hours + social + minimal links.

### Menu (`src/pages/menu/index.astro` or `src/pages/menu.astro`)

- [x] Sticky category nav (Breakfast/Lunch/Dinner/Drinks) with smooth anchor scrolling.
- [x] Render full menu from `menu.json` by category.
- [x] Dietary tags displayed as labels (with accessible text).
- [x] "Chef's Special" badge for `chefSpecial: true` items.
- [x] Print stylesheet for the menu:
  - [x] Hide nav/buttons/backgrounds/images
  - [x] Black text on white
  - [x] Clean spacing between categories/items

### Booking (`src/pages/book/index.astro`)

- [x] Simple, focused booking CTA page.
- [x] Booking method implemented (external link and/or form UI).
- [x] Reinforce trust (rating/reviews) and link back to Menu.

### Gallery (`src/pages/gallery/index.astro`)

- [x] Responsive gallery grid with optimized images.
- [x] Mix of food + venue + detail shots.
- [x] Alt text and keyboard-friendly interaction.

### Contact (`src/pages/contact/index.astro`)

- [x] Contact details (address, hours, phone/email links).
- [x] Map placeholder section.
- [x] Contact form UI (non-functional is fine) with accessible labels.

### Required pages from base prompt

- [x] About (`src/pages/about.astro`) - cafe story, ethos, sourcing.
- [x] Services (`src/pages/services.astro` or equivalent) - catering, functions, group bookings.
- [x] Privacy (`src/pages/privacy.astro`) - simple legal page.
- [x] Local SEO/GEO page (choose one):
  - [x] Create a dedicated page (e.g., `src/pages/areas-we-serve.astro`), OR
  - [x] Ensure Home includes robust Perth-targeted content beyond a suburb list

## Phase 6 - SEO (Global + Perth GEO)

- [x] Page titles follow a consistent template (per-page + brand).
- [x] Meta description per page (unique, conversion-focused).
- [x] Canonical URLs set correctly (respecting `site` + `base`).
- [x] OpenGraph: title/description + placeholder OG image.
- [x] Twitter card meta.
- [x] Add JSON-LD (Restaurant / LocalBusiness) including:
  - [x] `addressLocality: "Perth"`, `addressRegion: "WA"`, `addressCountry: "AU"`
  - [x] `hasMenu`, `servesCuisine`, opening hours, telephone, URL
- [x] Add `robots.txt`.
- [x] Add sitemap (if straightforward) and verify it works with the configured `site`.
- [x] Internal linking: Home -> Menu -> Booking (and back) with clear CTAs.

## Phase 7 - Accessibility & UX Checks

- [x] One H1 per page; heading order is logical.
- [x] Skip link works and is visible on focus.
- [x] Keyboard navigation works across header, CTAs, tabs/anchors, and forms.
- [x] Touch targets are large enough for mobile.
- [x] Contrast is sufficient for all text and CTAs.
- [x] Menu is accessible within 1 tap from Home on mobile.
- [x] Sticky elements do not obscure content (especially the menu nav).

## Phase 8 - Performance

- [x] Use `astro:assets` for images where possible; responsive sizes + lazy loading.
- [x] Avoid heavy JS (no large animation libraries).
- [x] Any motion enhancements are subtle and disabled/reduced for `prefers-reduced-motion`.

## Phase 9 - Deployment & Handoff

- [x] Add build/run instructions (README or `/docs/`):
  - [x] `npm install`
  - [x] `npm run dev`
  - [x] `npm run build`
  - [x] `npm run preview`
- [x] Verify the built site works under the GitHub Pages base path (no broken links/assets).
- [x] Quick QA pass:
  - [x] Mobile nav + CTAs
  - [x] Menu anchors + sticky nav
  - [x] Print preview of menu
  - [x] Basic SEO meta presence (view-source)

## Optional / Bonus

- [ ] "Open now / Closed" indicator based on hours.
- [ ] Sticky mobile booking CTA button.
- [ ] FAQ accordion (only if it supports conversion; keep JS minimal).

