# HEPHEX — Brand Style Guide

**Version:** 1.0  
**Date:** 2026-02-28  
**Domain:** hephex.com

---

## 1. Brand Identity

### Name
**HEPHEX** — derived from Hephaestus (Greek god of the forge, fire, and craftsmanship) + Execution.

Pronunciation: **HEF-ex**

### Tagline
Primary: **"Software that adapts to you."**  
Secondary: **"Built for you."**  
Tertiary: **"Stop adapting to your software."**

### Brand Positioning
Premium custom software and AI consulting for mid-market companies ($10M–$500M). We build bespoke tools — not templates. Every engagement produces a working prototype, not a PowerPoint.

### Brand Personality
- **Confident** — we know what we're doing
- **Direct** — no fluff, no jargon
- **Crafted** — everything we make is intentional
- **Warm** — approachable, not corporate
- **Precise** — measured words, measured code

### Voice & Tone
- Active voice. Short sentences.
- Lead with the benefit, not the feature.
- Never say: "innovative," "cutting-edge," "robust," "synergy," "leverage" (as a verb), "utilize"
- Say instead: "built," "designed," "crafted," "works," "fits," "solves"
- We talk like builders, not consultants.

---

## 2. Logo

### Primary Logo: Wordmark
**HEPHEX** in all caps, custom-tracked Inter Bold.

```text
H E P H E X
```

Letter-spacing: +4% (slightly opened for breathing room)

### Logo Mark (Icon)
Abstract anvil spark — a minimal geometric mark suggesting a hammer strike with a single spark arc. Used for favicon, social avatars, app icons.

**Construction:**
- Single continuous stroke forming an angular anvil profile
- One accent-colored spark arc rising from the strike point
- Contained within a square container for social/favicon use

### Logo Usage Rules
- Minimum clear space: height of the "H" on all sides
- Never stretch, rotate, or add effects
- On dark backgrounds: white wordmark + Forge Gold spark
- On light backgrounds: Obsidian wordmark + Forge Gold spark
- Never place on busy/patterned backgrounds

### Logo Variants

| Variant | Use |
|---------|-----|
| Full wordmark + mark | Primary, website header, documents |
| Wordmark only | Email signatures, inline text |
| Mark only | Favicon, social avatar, app icon |

---

## 3. Color Palette

### Primary Colors

| Color | Name | Hex | RGB | Use |
|-------|------|-----|-----|-----|
| ███ | **Obsidian** | `#0D0D0D` | 13, 13, 13 | Primary background, text on light |
| ███ | **Forge Gold** | `#D4881C` | 212, 136, 28 | Accent, CTAs, highlights, logo spark |
| ███ | **White** | `#FAFAFA` | 250, 250, 250 | Primary text on dark, light backgrounds |

### Secondary Colors

| Color | Name | Hex | RGB | Use |
|-------|------|-----|-----|-----|
| ███ | **Graphite** | `#1A1A1A` | 26, 26, 26 | Card backgrounds, elevated surfaces |
| ███ | **Steel** | `#2A2A2A` | 42, 42, 42 | Borders, dividers, subtle backgrounds |
| ███ | **Ash** | `#8A8A8A` | 138, 138, 138 | Secondary text, captions, metadata |
| ███ | **Ember** | `#E8A838` | 232, 168, 56 | Hover state for Forge Gold, warm highlights |
| ███ | **Molten** | `#F5C563` | 245, 197, 99 | Sparingly — emphasis, badges, alerts |

### Color Ratios
- **80%** Obsidian/Graphite (dark foundation)
- **15%** White/Ash (text and contrast)
- **5%** Forge Gold/Ember (accent and energy)

### Accessibility
- White (`#FAFAFA`) on Obsidian (`#0D0D0D`): contrast ratio 19.3:1 ✅ WCAG AAA
- Forge Gold (`#D4881C`) on Obsidian (`#0D0D0D`): contrast ratio 6.8:1 ✅ WCAG AA
- Never use Forge Gold for body text — accent and CTAs only

---

## 4. Typography

### Font Family
**Inter** — free, open-source, optimized for screens.
- Available: Google Fonts, self-hosted
- Fallback stack: `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`

### Type Scale

| Element | Weight | Size | Line Height | Tracking | Use |
|---------|--------|------|-------------|----------|-----|
| H1 | Bold (700) | 48px / 3rem | 1.1 | -0.02em | Page titles |
| H2 | Bold (700) | 32px / 2rem | 1.2 | -0.01em | Section headers |
| H3 | SemiBold (600) | 24px / 1.5rem | 1.3 | 0 | Subsections |
| H4 | SemiBold (600) | 18px / 1.125rem | 1.4 | 0 | Card titles |
| Body | Regular (400) | 16px / 1rem | 1.6 | 0 | Body text |
| Small | Regular (400) | 14px / 0.875rem | 1.5 | 0.01em | Captions, metadata |
| Micro | Medium (500) | 12px / 0.75rem | 1.4 | 0.04em | Labels, tags, badges |

### Type Rules
- **Headings:** Always Inter Bold or SemiBold. White (`#FAFAFA`) on dark, Obsidian (`#0D0D0D`) on light.
- **Body:** Inter Regular. White on dark with 90% opacity for comfortable reading.
- **Accent text:** Forge Gold for key stats, CTAs, or emphasis words within headings.
- **No italics** in headings. Minimal italics in body (quotes only).
- **No underlines** except links.
- Maximum line length: 680px (for readability).

---

## 5. Iconography & Graphics

### Icon Style
- Line icons, 1.5px stroke weight
- Rounded caps and joins
- Monochrome (White or Ash), Forge Gold for active/selected state
- Consistent 24×24px grid
- Source: Lucide Icons (open source, consistent with Inter)

### Graphics Style
- **No stock photography**
- Abstract geometric patterns: angular, faceted, suggesting forged metal surfaces
- Subtle grid/mesh backgrounds at very low opacity (5-8%)
- Code snippets or terminal output as visual elements (shows technical credibility)
- Diagrams: clean lines, minimal labels, Forge Gold for highlights

### Photography (Team Only)
- Real photos of team members only
- Black and white with slight warm tone
- Consistent crop: shoulders up, slight off-center
- Dark neutral background
- No corporate headshot feel — natural, confident

---

## 6. Spacing & Layout

### Grid
- 12-column grid, 1200px max width
- Column gap: 24px
- Section padding: 120px vertical (desktop), 64px (mobile)
- Card padding: 32px internal

### Spacing Scale (8px base)

| Token | Value | Use |
|-------|-------|-----|
| xs | 4px | Tight inline spacing |
| sm | 8px | Between related elements |
| md | 16px | Between components |
| lg | 24px | Between sections within a card |
| xl | 48px | Between content blocks |
| 2xl | 96px | Between major sections |

### Border Radius
- Cards: 12px
- Buttons: 8px
- Inputs: 8px
- Tags/badges: 4px
- No fully rounded (pill) shapes — angular is on-brand

---

## 7. Buttons & CTAs

### Primary Button
- Background: Forge Gold (`#D4881C`)
- Text: Obsidian (`#0D0D0D`), Inter SemiBold 16px
- Padding: 12px 24px
- Radius: 8px
- Hover: Ember (`#E8A838`)
- Active: darken 10%

### Secondary Button
- Background: transparent
- Border: 1px Steel (`#2A2A2A`)
- Text: White (`#FAFAFA`), Inter SemiBold 16px
- Padding: 12px 24px
- Radius: 8px
- Hover: border → Forge Gold, text → Forge Gold

### Text Link
- Color: Forge Gold (`#D4881C`)
- Hover: Ember (`#E8A838`)
- No underline by default, underline on hover

---

## 8. Email Signature

```text
——
[First Name] [Last Name]
[Role] · HEPHEX
hello@hephex.com · hephex.com
```

- Font: system default (for email compatibility)
- No images in signature (deliverability)
- "HEPHEX" in caps, not stylized
- One link: hephex.com
- No phone number in default signature (add per-person if needed)

---

## 9. Document Templates

### Proposals & Deliverables
- Dark header band (Obsidian) with HEPHEX wordmark in white + Forge Gold spark
- Body on white (`#FAFAFA`) background
- Section headers in Obsidian, accents in Forge Gold
- Footer: "HEPHEX · Confidential" in Ash

### Slide Decks
- Dark backgrounds (Obsidian or Graphite)
- White text, Forge Gold accents
- One idea per slide
- Page numbers: bottom right, Ash color, Micro size
- Last slide: single CTA + contact

---

## 10. Social Media

### Profile Image
- Logo mark (anvil spark) on Obsidian background
- 400×400px minimum

### Cover/Banner
- Wordmark centered on Obsidian
- Tagline below in Ash
- 1500×500px (Twitter/X), 1128×191px (LinkedIn)

### Post Style
- Dark card backgrounds
- White text, Forge Gold highlights
- Minimal — one stat or one insight per post
- No emoji in professional posts

---

## 11. What This Brand Is NOT

- ❌ Not corporate blue (we're not IBM or Accenture)
- ❌ Not neon/gradient startup (we're not a seed-stage app)
- ❌ Not minimalist white (we have warmth — the forge fire)
- ❌ Not cluttered or busy (every element earns its place)
- ❌ Not playful (we're serious about the work)

**HEPHEX looks like:** a master craftsman's workshop — dark, warm, precise, everything in its place, fire at the center.

---

## File Inventory

| Asset | Format | Location |
|-------|--------|----------|
| Style Guide | This document | `Hephex_Brand/STYLE_GUIDE.md` |
| Color Palette | CSS variables | `Hephex_Brand/tokens.css` |
| Logo specs | In this guide (Sev to produce SVGs) | — |

*Logo SVG files, favicon, and social assets to be produced by design/Sev based on this guide.*

---

## Appendix A: Design Tokens (CSS)

```css
/* HEPHEX Design Tokens — v1.0 */
/* Generated: 2026-02-28 */
/* Usage: Import into any web project for brand consistency */

:root {
  /* === Primary Colors === */
  --hx-obsidian: #0D0D0D;
  --hx-forge-gold: #D4881C;
  --hx-white: #FAFAFA;

  /* === Secondary Colors === */
  --hx-graphite: #1A1A1A;
  --hx-steel: #2A2A2A;
  --hx-ash: #8A8A8A;
  --hx-ember: #E8A838;
  --hx-molten: #F5C563;

  /* === Typography === */
  --hx-font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --hx-font-weight-regular: 400;
  --hx-font-weight-medium: 500;
  --hx-font-weight-semibold: 600;
  --hx-font-weight-bold: 700;

  /* === Type Scale === */
  --hx-text-h1: 3rem;        /* 48px */
  --hx-text-h2: 2rem;        /* 32px */
  --hx-text-h3: 1.5rem;      /* 24px */
  --hx-text-h4: 1.125rem;    /* 18px */
  --hx-text-body: 1rem;      /* 16px */
  --hx-text-small: 0.875rem; /* 14px */
  --hx-text-micro: 0.75rem;  /* 12px */

  /* === Line Heights === */
  --hx-leading-h1: 1.1;
  --hx-leading-h2: 1.2;
  --hx-leading-h3: 1.3;
  --hx-leading-h4: 1.4;
  --hx-leading-body: 1.6;
  --hx-leading-small: 1.5;

  /* === Spacing (8px base) === */
  --hx-space-xs: 4px;
  --hx-space-sm: 8px;
  --hx-space-md: 16px;
  --hx-space-lg: 24px;
  --hx-space-xl: 48px;
  --hx-space-2xl: 96px;

  /* === Layout === */
  --hx-max-width: 1200px;
  --hx-column-gap: 24px;
  --hx-section-padding: 120px;
  --hx-section-padding-mobile: 64px;
  --hx-card-padding: 32px;
  --hx-max-line-length: 680px;

  /* === Border Radius === */
  --hx-radius-card: 12px;
  --hx-radius-button: 8px;
  --hx-radius-input: 8px;
  --hx-radius-tag: 4px;

  /* === Shadows === */
  --hx-shadow-card: 0 1px 3px rgba(0, 0, 0, 0.3), 0 4px 12px rgba(0, 0, 0, 0.2);
  --hx-shadow-elevated: 0 4px 16px rgba(0, 0, 0, 0.4), 0 8px 32px rgba(0, 0, 0, 0.3);

  /* === Transitions === */
  --hx-transition-fast: 150ms ease;
  --hx-transition-base: 250ms ease;
  --hx-transition-slow: 400ms ease;
}

/* === Button Styles === */
.hx-btn-primary {
  background-color: var(--hx-forge-gold);
  color: var(--hx-obsidian);
  font-family: var(--hx-font-family);
  font-weight: var(--hx-font-weight-semibold);
  font-size: var(--hx-text-body);
  padding: 12px 24px;
  border-radius: var(--hx-radius-button);
  border: none;
  cursor: pointer;
  transition: background-color var(--hx-transition-fast);
}

.hx-btn-primary:hover {
  background-color: var(--hx-ember);
}

.hx-btn-secondary {
  background-color: transparent;
  color: var(--hx-white);
  font-family: var(--hx-font-family);
  font-weight: var(--hx-font-weight-semibold);
  font-size: var(--hx-text-body);
  padding: 12px 24px;
  border-radius: var(--hx-radius-button);
  border: 1px solid var(--hx-steel);
  cursor: pointer;
  transition: border-color var(--hx-transition-fast), color var(--hx-transition-fast);
}

.hx-btn-secondary:hover {
  border-color: var(--hx-forge-gold);
  color: var(--hx-forge-gold);
}

/* === Dark Mode Base === */
body.hx-dark {
  background-color: var(--hx-obsidian);
  color: var(--hx-white);
  font-family: var(--hx-font-family);
  font-size: var(--hx-text-body);
  line-height: var(--hx-leading-body);
}
```

---

## Appendix B: HEPHEX Website Brief — For Sev

**Date:** 2026-02-28

### Overview
5-page marketing site for Hephex custom software & AI consulting.  
Domain: hephex.com (registered, Namecheap)

### Brand Assets
- `STYLE_GUIDE.md` - full brand guide (colors, type, spacing, voice, do/don't)
- `tokens.css` - CSS design tokens ready to import

### Pages

#### 1. Home
- Hero: "Software that adapts to you."
- Problem stat: "$600B spent on enterprise software annually. Most of it doesn't fit."
- Three proof points: "55,000 companies analyzed. 89% automation. 3× pipeline velocity."
- CTA: "Book a Discovery Call" → Calendly

#### 2. How We Work
- Four phases: Discover → Design → Build → Evolve
- Differentiator table: Traditional vs. Hephex
- "Every engagement starts with a prototype and ROI model — not a PowerPoint."

#### 3. Team
- Scott: Managing Partner. Business strategy and engagement delivery.
- Sev: Partner, Technology. Full-stack architecture, AI/ML, cloud infrastructure.
- Vince: Partner. [Role TBD — confirm]
- Mark: Partner, Delivery. Program management, client-facing from day one.
- "European engineering team. Vienna & Cyprus. Senior engineers only."
- Photos: B&W with warm tone, dark background

#### 4. Work (Case Studies)
- Anonymized. Industry + scale + results only.
- Three cases from the Forge deck (details TBD — need Sev/Mike input)

#### 5. Contact
- Calendly embed (30-min Discovery call)
- hello@hephex.com
- No phone, no address on public site

### What NOT to Include
- No pricing (keep for sales conversations)
- No blog at launch
- No government/federal/SBA references
- No client names without permission
- No LinkedIn link for Scott
- No physical address

### Tech Recommendation
- Framer or Webflow (fastest, no codebase to maintain)
- Calendly integration
- Google Workspace for email

### Design Direction
- Dark mode default (Obsidian background)
- Forge Gold accent (sparingly — CTAs, hovers, highlights)
- Inter font family
- Reference vibes: linear.app, vercel.com, raycast.com
- See `STYLE_GUIDE.md` for full specs
