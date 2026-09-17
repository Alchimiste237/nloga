---
name: Electric Neo-Blueprint
colors:
  surface: '#101415'
  surface-dim: '#101415'
  surface-bright: '#363a3b'
  surface-container-lowest: '#0b0f10'
  surface-container-low: '#191c1e'
  surface-container: '#1d2022'
  surface-container-high: '#272a2c'
  surface-container-highest: '#323537'
  on-surface: '#e0e3e5'
  on-surface-variant: '#c4c5d7'
  inverse-surface: '#e0e3e5'
  inverse-on-surface: '#2d3133'
  outline: '#8e90a0'
  outline-variant: '#434655'
  surface-tint: '#b7c4ff'
  primary: '#b7c4ff'
  on-primary: '#002682'
  primary-container: '#1d4ed8'
  on-primary-container: '#cad3ff'
  inverse-primary: '#2151da'
  secondary: '#c2c5da'
  on-secondary: '#2c303f'
  secondary-container: '#424657'
  on-secondary-container: '#b1b4c8'
  tertiary: '#adc6ff'
  on-tertiary: '#002e6a'
  tertiary-container: '#0058be'
  on-tertiary-container: '#c4d5ff'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#dce1ff'
  primary-fixed-dim: '#b7c4ff'
  on-primary-fixed: '#001551'
  on-primary-fixed-variant: '#0039b5'
  secondary-fixed: '#dfe1f6'
  secondary-fixed-dim: '#c2c5da'
  on-secondary-fixed: '#171b2a'
  on-secondary-fixed-variant: '#424657'
  tertiary-fixed: '#d8e2ff'
  tertiary-fixed-dim: '#adc6ff'
  on-tertiary-fixed: '#001a42'
  on-tertiary-fixed-variant: '#004395'
  background: '#101415'
  on-background: '#e0e3e5'
  surface-variant: '#323537'
typography:
  display-hero:
    fontFamily: Plus Jakarta Sans
    fontSize: 84px
    fontWeight: '800'
    lineHeight: 92px
    letterSpacing: -0.04em
  display-hero-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 44px
    fontWeight: '800'
    lineHeight: 48px
    letterSpacing: -0.03em
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 56px
    fontWeight: '800'
    lineHeight: 62px
    letterSpacing: -0.03em
  headline-xl-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '800'
    lineHeight: 38px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 42px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 30px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Space Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Space Grotesk
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: Space Grotesk
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.15em
  code-badge:
    fontFamily: Space Grotesk
    fontSize: 13px
    fontWeight: '600'
    lineHeight: 18px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 4rem
  margin-mobile: 1.25rem
  space-xs: 0.375rem
  space-sm: 0.75rem
  space-md: 1.25rem
  space-lg: 2rem
  space-xl: 3.5rem
---

## Brand & Style

This design system establishes a powerhouse visual identity at the intersection of high-precision engineering, world-class product design, and creative empowerment. It targets founders, tech innovators, and ambitious product teams seeking end-to-end digital mastery. 

The aesthetic synthesizes high-contrast neo-grotesque brutalism with luminous glassmorphism and technical blueprint elements:
- **Kinetic Precision:** Electric royal cobalt accents sweep across rich obsidian slate and pristine white backdrops via organic bezier vector paths and technical drafting grids.
- **Architectural Typography:** Monolithic, bold geometric titles mix filled lettering with stark linear-outline typography (inspired by architectural lettering and blueprint masks).
- **Tactile Modernism:** Sleek frosted glass tiles, rounded floating badges, micro-interactions, and radiant neon edge glows reinforce credibility, craft, and forward motion.

## Colors

The palette draws directly from the brand’s vibrant dual-tone identity:

- **Primary (`#1D4ED8`):** The signature electric royal cobalt blue. Used for high-priority actions, key kinetic ribbon vectors, focal badges, and luminous interactive highlights.
- **Secondary (`#070B19`):** Deep obsidian slate navy. Serves as the primary surface foundation, delivering deep infinite contrast that makes the cobalt and stark whites radiate.
- **Tertiary (`#3B82F6`):** Vibrant hyper-blue for neon glows, active stroke outlines, hover states, and gradient terminations.
- **Neutral (`#F8FAFC`):** Crisp stark paper white. Used for punchy typographic contrast, badge icons, and dual-tone split canvases.

### Extended Palette & Accents
- **Blueprint Line Token:** `rgba(59, 130, 246, 0.12)` for subtle geometric grid backgrounds.
- **Card Glass Base:** `rgba(10, 15, 36, 0.72)` with layered `rgba(255, 255, 255, 0.08)` borders.
- **Surface Elevation High:** `#0F172A` with cobalt radial ambient backlights.

## Typography

Typography delivers heavy structural punch balanced by technical precision:

- **Display & Headlines (`Plus Jakarta Sans`):** Rendered in extra-bold weights with tight negative tracking. Supports dual rendering:
  - **Solid Fill:** Crisp stark white or intense electric cobalt.
  - **Architectural Outline Style:** Text rendered transparent with `-webkit-text-stroke: 2px #1D4ED8` or `2px #FFFFFF`, evoking the signature brand posts ("ONE COMPANY", "WE BUILD").
- **Body & Technical Copy (`Space Grotesk`):** Provides a clean, modern aesthetic with subtle technical nuance that complements blueprint grid graphics.
- **Section Eyebrows & Tags (`label-caps`):** Rendered uppercase with generous tracking (`0.15em`) to ground technical sections like "WE DESIGN", "WE BUILD", and "WE EMPOWER".

## Layout & Spacing

The layout is built around a structured 12-column responsive fluid grid structured over an ambient blueprint canvas.

### Layout Philosophy
- **Split Canvas Sections:** Contrast sections by combining pure white canvas modules with obsidian deep space layers, spliced dynamically by curved blue ribbons.
- **Blueprint Grid Matrix:** A recurring subtle background grid (32px x 32px repeating line grid at 10% opacity) grounds showcase galleries, code cards, and service verticals.
- **Responsive Adaptations:**
  - **Desktop (1200px+):** 12 columns, 64px section margins, generous 24px gutters, dynamic offset card stacks.
  - **Tablet (768px - 1199px):** 8 columns, 32px margins, 16px gutters, auto-collapsing showcase banners.
  - **Mobile (<768px):** 4 columns, 20px margins, horizontal snapping carousels for brand pillars (`CreativePics Art`, `Forgeware`, `Now Just Create`).

## Elevation & Depth

Visual hierarchy uses frosted glassmorphism anchored by cobalt radiant back-glows:

- **Surface Glass (Level 1):** `background: rgba(10, 15, 36, 0.65); backdrop-filter: blur(16px); border: 1px solid rgba(255, 255, 255, 0.08);`
- **Elevated Interactive Card (Level 2):** Elevated with a dual shadow system:
  - Subtle drop shadow: `0 20px 40px -15px rgba(0, 0, 0, 0.7)`
  - Electric Blue Edge Corona: `0 0 24px -4px rgba(29, 78, 216, 0.35)`
- **Luminous Spotlight (Level 3):** Underpins focal elements with an intense radial gradient: `radial-gradient(circle at top right, rgba(37, 99, 235, 0.25), transparent 70%)`.
- **Vector Ribbons:** Flowing smooth blue curves woven over and behind glass cards create tactile z-axis separation.

## Shapes

The design system employs a refined geometric curve aesthetic (`roundedness: 2` / 16px radius for standard containers):

- **Feature Cards & Modals:** Standardized with `1.5rem` (`rounded-xl`) soft corners to contrast sharply against blueprint gridlines.
- **Service Pills & Badges:** Squircular pills (`rounded-full`) for status indicators, division tags (`Forgeware`, `CreativePicsArt`), and iconography backdrops.
- **Interactive Buttons:** `0.75rem` (`rounded-lg`) delivering a sturdy, tactile click surface.

## Components

### Buttons
- **Primary Action:** Solid electric royal cobalt (`#1D4ED8`) background, crisp white typography, micro-glow hover state (`box-shadow: 0 0 20px rgba(29, 78, 216, 0.6)`), and subtle scale bump (`transform: translateY(-1px)`).
- **Secondary Outline:** Transparent fill with `1.5px solid rgba(255, 255, 255, 0.24)`, hover transitions to full `#0F52BA` border with backdrop blur.
- **Icon Utility Button:** Rounded circular glyph holder in tinted cobalt slate (`rgba(29, 78, 216, 0.15)`) with stark white central icons.

### Cards & Showcase Tiles
- **Glass Showcase Cards:** Frosted slate body, micro-border outline, and integrated brand division pills at the top corner. Designed for portfolio screenshots, mockups, and engineering metrics.
- **Split Typography Card:** Asymmetric dual-tone blocks containing vertical stacked phrases (e.g., solid `WE` stacked over outlined `BUILD`).

### Interactive Carousels
- Multi-card track featuring snap physics and progress indicator bars. Cards off-center exhibit subtle depth scaling (`scale(0.96)`) and dimming opacity (`0.6`).
- Navigation anchored with circular neon-ringed direction arrows.

### Chips & Division Badges
- Soft pill capsules sporting 1px cobalt borders, an embedded icon symbol (e.g., pen tool for Design, terminal tag for Engineering, graduation cap for Empower), and Space Grotesk caps labels.

### Input Fields & Controls
- Deep obsidian input fields with inset shadows, `1.5px` border shifting from subdued steel (`#334155`) to focused electric cobalt (`#3B82F6`) with an ambient outer glow ring.

### Logo Pulse Loader
- Central geometric monogram anchored in cobalt that performs a rhythmic scale-and-glow loop (`ease-in-out` scale between `1.0` and `1.08` with fluctuating box-shadow opacity) while a fine-line circular blueprint ring rotates around it.