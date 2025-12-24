# Demo 1 - Cafe / Restaurant (Menu-first)

**"Menu Pro"** - Hospitality Website Demo (Astro)

> PROMPT: Append this after the Base Astro Demo Prompt (`global prompt.md`).

## Demo Purpose & Business Goal

Build a high-converting hospitality website demo for a modern Perth cafe / casual restaurant.

### Primary conversion goals

- Table bookings
- Menu views (especially on mobile)

### Secondary goals

- Showcase food quality
- Build trust via reviews
- Strong local SEO & GEO signals for Perth

This demo should feel realistic, production-ready, and suitable for:

- Cafes
- Brunch venues
- Casual dining
- Wine bars
- Small restaurants

## Target Audience

- Perth locals searching on mobile
- Tourists searching "best cafe near me"
- Users who want to see the menu fast
- Users deciding where to book right now

Mobile UX is critical.

## Visual & Brand Direction

### Overall vibe

"Warm, organic, premium - but approachable"

### Design principles

- Clean, uncluttered layouts
- Generous white space
- Food imagery as the hero
- Fast load times (no heavy JS animations)

### Color palette

- Base: warm cream / off-white
- Primary: olive green / espresso brown
- Accent: terracotta / burnt orange (used sparingly for CTAs & badges)

### Typography

- Headings: elegant serif (restaurant/editorial feel)
- Body: modern sans-serif (high readability)
- Menu prices slightly de-emphasised visually

### Motion

- Minimal and optional
- Subtle fade / slide on scroll
- No blocking animations
- Respect `prefers-reduced-motion`

## Information Architecture

### Pages to build

- `/` - Home
- `/menu/` - Menu (core page, most important)
- `/book/` - Booking CTA page (simple, focused)
- `/gallery/` - Food & venue imagery
- `/contact/` - Contact, map, hours

## Home Page Structure (Top -> Bottom)

1. **Hero section**
   - Restaurant name
   - Short value proposition (1 sentence)
   - Primary CTA: "Book a table"
   - Secondary CTA: "View menu"
   - Background: food image or subtle texture overlay
2. **Social proof**
   - Google rating badge (e.g. 4.7 / 5)
   - 3 short review cards
   - Emphasise trust + popularity
3. **"Today's Highlights"**
   - 3 signature dishes
   - Card layout with image, name, short description
   - Pull data from menu JSON (`featured: true`)
4. **Menu preview**
   - Quick tabs (static tabs are fine): Breakfast, Lunch, Drinks
   - Show 2-3 items per category
   - CTA: "View full menu"
5. **Location & hours**
   - Address
   - Opening hours
   - Embedded map placeholder
   - Clear "Open now / Closed" logic (optional bonus)
6. **Areas we serve (Local SEO)**
   - Text block listing suburbs: Perth CBD, Subiaco, Leederville, Mount Lawley, Victoria Park, East Perth
   - Use natural language (not keyword stuffing)
7. **Footer**
   - Name, Address, Phone (NAP)
   - Opening hours
   - Social icons
   - Copyright
   - Minimal links

## Menu Page Requirements (Core Page)

### Menu UX

- Sticky category navigation at top: Breakfast, Lunch, Dinner, Drinks
- Smooth anchor scrolling
- Works well on mobile

### Menu item layout

Each item must include:

- Name
- Short description
- Price
- Dietary tags:
  - `V` (Vegetarian)
  - `VG` (Vegan)
  - `GF` (Gluten-free)

### Special logic

- "Chef's Special" badge
- Data-driven from JSON (`chefSpecial: true`)
- Visually distinct but tasteful

### Print support

- Printable-friendly layout
- Use `@media print`
- Hide navigation, buttons, backgrounds
- Clean black-on-white menu output

## Components to Build (Astro)

Create reusable, well-scoped components:

- `MenuCategoryNav.astro`
- `MenuItemCard.astro`
- `ReviewCard.astro`
- `HoursAndLocation.astro`
- `CTASection.astro`

Components should be:

- Accessible
- Data-driven
- Reusable across pages

## Data Model

Use a structured data file: `src/data/menu.json`

Include:

- Categories
- Items
- Price
- Description
- Dietary tags
- `featured: true`
- `chefSpecial: true`

Design the schema to be easily editable by non-developers.

## SEO & GEO Requirements

### Schema / structured data

- JSON-LD
- `Restaurant` subtype of `LocalBusiness`
- Include:
  - `hasMenu`
  - `servesCuisine` (e.g. Italian / Australian fusion)
  - Address (Perth, WA)
  - Opening hours

### On-page SEO

- Proper H1 hierarchy
- Descriptive meta titles & descriptions
- Clean URLs
- Internal linking between Home -> Menu -> Booking

### Social sharing

- OpenGraph image placeholder
- OG title & description
- Twitter/X card support

## Technical Constraints

- Astro-first approach
- No heavy frameworks
- Optimised images (Astro `<Image />`)
- Fast Lighthouse scores
- Production-ready folder structure

## Demo Evaluation Criteria

This demo should:

- Feel like a real Perth cafe website
- Load fast on mobile
- Make the menu instantly accessible
- Clearly guide users to book or visit
- Be easy to adapt for real clients

## Style & Design System (Mandatory)

### Design intent

The website must visually communicate:

"This place serves high-quality food, feels warm and welcoming, and is worth booking right now."

Avoid:

- Corporate SaaS styling
- Tech-startup aesthetics
- Flat, cold, overly minimal layouts

This is hospitality-first design, not a software product.

### Layout & composition rules

**Overall layout**

- Max content width: 1100-1200px
- Use generous vertical spacing between sections
- Sections should "breathe" (avoid stacking dense content)
- Mobile-first spacing, then enhance on desktop

**Grid**

- Desktop: 12-column grid
- Mobile: single column, no side gutters
- Menu items stack cleanly on mobile

### Color system

**Core palette**

- Background: warm cream / off-white (example tone: `#FBF8F3`)
- Primary text: espresso / near-black (example: `#2A1E17`)
- Secondary text: muted olive / warm grey (example: `#6E6A5F`)

**Accent colors**

Use sparingly and intentionally:

- Primary accent: olive green (CTAs, active menu tabs, links)
- Secondary accent: terracotta / burnt orange (badges, highlights, "Chef's special")

Never use accent colors for long text blocks.

### Typography system

**Heading typeface (serif)**

- Purpose: emotional warmth; editorial / restaurant menu feel
- Usage: H1 restaurant name; H2 section headings; menu category titles
- Style notes: slightly tighter letter spacing; strong contrast with body font

**Body typeface (sans-serif)**

- Purpose: readability; modern clarity
- Usage: descriptions; menu items; buttons; metadata (hours, prices)
- Style notes: comfortable line height; neutral weight; avoid ultra-thin fonts

**Typographic hierarchy**

- Clear visual distinction between: dish name, description, price, dietary tags
- Prices should be visible but not dominant

### Menu design language

**Menu items**

- Clean card or list layout
- Dish name visually stronger than description
- Price aligned consistently (right or inline)
- Dietary tags as small, rounded labels

**"Chef's Special"**

- Small terracotta badge
- Optional icon (star or chef hat)
- Must feel special, not loud

### Imagery & photography direction

**Image style**

- Natural light
- Warm tones
- Realistic food textures
- Slight shadows (not flat)

Avoid:

- Over-saturated food photos
- Stock-photo vibes
- Pure white backgrounds

**Usage rules**

- Hero: single strong food image
- Highlights: cropped close-ups
- Gallery: mix of food + venue + details

Images should feel like:

"Shot in a real Perth cafe on a good day."

### Motion & interaction

**Motion principles**

- Motion should support content, not distract
- Keep animations subtle and fast

Allowed:

- Fade-in on scroll
- Gentle slide-up
- Menu category underline transitions

Avoid:

- Parallax
- Heavy easing
- Delays over 200ms

### UX details (very important)

- Primary CTA color must contrast strongly
- "Book a table" always visible above the fold
- Menu must be accessible within 1 tap
- Sticky menu nav should not obscure content
- Touch targets must be large and comfortable

### Print design (menu page)

When printed:

- White background
- Black text only
- No images
- Clean typography
- Proper spacing between categories

Printed menu should look intentional, not broken.

### Design benchmark (conceptual)

This design should feel like a blend of:

- Boutique cafe branding
- Editorial food magazines
- Modern European hospitality websites

Not like:

- SaaS landing pages
- Generic restaurant templates
- ThemeForest demos

### Design consistency rules

- Same spacing rhythm across pages
- Same button styles everywhere
- Same heading sizes across sections
- No random font size changes
- No unnecessary visual noise

Consistency > decoration.
