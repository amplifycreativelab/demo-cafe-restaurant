# The Olive Branch - Cafe/Restaurant Demo

A production-quality static website demo built with Astro, designed for deployment to GitHub Pages.

## Features

- **Static Site Generation**: Fast, SEO-friendly HTML output
- **Menu-First Design**: Easy access to menu with sticky navigation
- **Responsive Design**: Mobile-first approach with breakpoint enhancements
- **Accessibility**: Semantic HTML, skip links, focus states, keyboard navigation
- **SEO Optimized**: JSON-LD schema, OpenGraph, Twitter cards, proper meta tags
- **Local SEO**: Perth, WA focused content and structured data
- **Performance**: Minimal JavaScript, optimized CSS, no heavy frameworks

## Project Structure

```
cafe-restaurant-demo/
├── public/              # Static assets (favicon, robots.txt)
├── src/
│   ├── components/      # Reusable Astro components
│   ├── data/           # JSON data files (menu, site info, reviews)
│   ├── layouts/        # Page layouts
│   ├── pages/           # Route pages (file-based routing)
│   └── styles/         # Global CSS and design tokens
├── astro.config.mjs    # Astro configuration
├── package.json
└── tsconfig.json
```

## Design System

### Colors
- **Background**: Warm cream (`#FBF8F3`)
- **Primary Text**: Espresso brown (`#2A1E17`)
- **Accent (Olive)**: Green for CTAs and links (`#5C7A5C`)
- **Accent (Terracotta)**: Orange for badges and highlights (`#C96B4A`)

### Typography
- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)

### Spacing Scale
4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px, 80px, 96px

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or pnpm

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev

# The site will be available at http://localhost:4321/
```

### Build

```bash
# Build for production
npm run build

# Output will be in the dist/ directory
```

### Preview

```bash
# Preview the production build locally
npm run preview

# Preview the built site at http://localhost:4321/
```

## Deployment to GitHub Pages

This project deploys via GitHub Actions to GitHub Pages.

1. Push your code to a GitHub repository (default branch `main`)
2. In GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**
3. Push to `main` (or run the workflow from the **Actions** tab)

The published URL will be `https://<username>.github.io/<repo>/` (or `https://<username>.github.io/` for a `<username>.github.io` repo).

## Pages

- **Home** (`/`) - Hero, social proof, highlights, menu preview, location
- **Menu** (`/menu/`) - Full menu with sticky category navigation
- **Book** (`/book/`) - Booking CTA page with external booking link
- **Gallery** (`/gallery/`) - Food and venue image gallery
- **Contact** (`/contact/`) - Contact form, hours, location
- **About** (`/about/`) - Story, values, team
- **Services** (`/services/`) - Catering, functions, group bookings
- **Privacy** (`/privacy/`) - Privacy policy

## Data Files

- `src/data/menu.json` - Menu categories and items
- `src/data/site.json` - Business information (NAP, hours, booking)
- `src/data/reviews.json` - Customer testimonials

## Components

### Design System Components
- `Button.astro` - Primary/secondary buttons with size variants
- `Card.astro` - Base card component
- `SectionHeader.astro` - Section titles and subtitles
- `Badge.astro` - Dietary tags and chef special badges
- `TestimonialCard.astro` - Review cards with ratings

### Demo-Specific Components
- `Header.astro` - Site navigation with mobile menu
- `Footer.astro` - Site footer with NAP and links
- `MenuCategoryNav.astro` - Sticky menu category navigation
- `MenuItemCard.astro` - Menu item display with dietary tags
- `HoursAndLocation.astro` - Opening hours and address section
- `CTASection.astro` - Call-to-action banner

## SEO Features

- JSON-LD Restaurant schema with:
  - Business name and description
  - Address (Perth, WA, AU)
  - Phone and email
  - Opening hours
  - Cuisine type
  - Aggregate rating
- OpenGraph meta tags
- Twitter card meta tags
- Canonical URLs
- robots.txt

## Accessibility

- Semantic HTML5 structure
- Skip link for keyboard users
- Focus-visible styles
- ARIA labels and roles
- Proper heading hierarchy
- Keyboard navigation support
- Screen reader text for icons

## Performance

- Static HTML output (no client-side framework runtime)
- Minimal JavaScript (only for mobile menu and scroll effects)
- CSS modules for scoped styling
- No heavy animation libraries
- `prefers-reduced-motion` support

## Customization

### Updating Business Information
Edit `src/data/site.json` to change:
- Restaurant name and tagline
- Address and contact details
- Opening hours
- Social media links
- Booking URL

### Updating Menu
Edit `src/data/menu.json` to:
- Add/remove categories
- Add/remove menu items
- Update prices and descriptions
- Set dietary tags and chef specials

### Updating Reviews
Edit `src/data/reviews.json` to:
- Add/remove testimonials
- Update ratings and dates

### Styling
- Modify design tokens in `src/styles/tokens.css`
- Update global styles in `src/styles/global.css`
- Component styles are scoped within each `.astro` file

## License

This is a demo project for educational purposes.
