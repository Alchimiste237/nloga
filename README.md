# NLOGA — Digital Ecosystem Platform

One-page site for **NLOGA Venture Studio** (Douala & Yaoundé, Cameroon) and its
three pillars: **Forgeware** (software), **CreativePics Art** (brand &
creative), **Now Just Create** (training).

![NLOGA preview](screen.png)

> `screen.png` is a placeholder capture — retake it after your next visual
> update so the repo preview stays accurate.

## Stack

No build step, no dependencies. Plain HTML + CSS + vanilla JS, fonts and icons
loaded from Google Fonts CDN:

```
index.html                  Structure & content (EN source of truth)
css/styles.css              Electric Neo-Blueprint design system
js/script.js                Interactions (theme, modal, lightbox, forms…)
js/i18n.js                  EN→FR dictionary + translation engine
NLOGA_VISUAL_IDENTITY/      Brand & case-study imagery
manifest.webmanifest, sw.js PWA shell (installable, offline-first)
```

## Features

- **Light / dark theme** — white default, toggle in header + mobile drawer,
  persisted in `localStorage`, pre-paint script avoids any flash.
- **EN / FR translation** — full-site dictionary (`js/i18n.js`), persisted,
  applied pre-paint. Brand names, icon ligatures, emails and codes are never
  translated; context-sensitive words (e.g. *Build*, *Launch*) use
  location-aware overrides.
- **Case studies & articles** — `data-modal` buttons clone hidden
  `.modal-src` sources into an accessible dialog (ESC/backdrop close, focus
  restore, in-modal `#contact` links close-then-jump).
- **Lightbox gallery** — work, ecosystem and about imagery opens fullscreen
  with prev/next, keyboard arrows, touch swipe and click-to-zoom.
- **Contact that works** — validated form opens WhatsApp with a prefilled
  enquiry; optional Formspree email backend; floating WhatsApp bubble.
- **Scroll choreography** — directional/zoom reveals per section, eased
  parallax on the blueprint layer, progress hairline, back-to-top.
- **Animated counters, testimonials, FAQ accordion, legal modals.**

## Configuration (before going live)

1. **WhatsApp number** — `js/script.js`, `CONTACT.whatsapp`
   (country code + number, no `+`; currently a placeholder). It drives the
   form, the Contact button and the floating bubble. Same number appears in
   two `TODO` hrefs in `index.html`.
2. **Form email (optional)** — `js/script.js`, `CONTACT.formspree`: paste a
   [Formspree](https://formspree.io) endpoint ID to also receive enquiries
   by email.
3. **Domain** — replace `https://nloga.com` in `sitemap.xml`, `robots.txt`,
   and make `og:image` / `twitter:image` absolute once deployed.
4. **Testimonials** — marked `TODO` in `index.html`; swap in real client
   quotes (EN + FR in `js/i18n.js`).

## Run & deploy

```powershell
# preview locally (SW only registers over http, not file://)
npx serve .
```

Any static host works (GitHub Pages, Netlify, Vercel). No server code, no
secrets in the repo. After deploy: check `sw.js` updates propagate
(cache name `nloga-v2` — bump it when shipping shell changes).

## Translations

Add the English string to `index.html`, then its French twin to `FR_RAW`
in `js/i18n.js`. Keys match on normalized text (case/whitespace/punctuation
insensitive); hidden modal sources are translated too. Brand names, Material
Symbols ligatures, emails, numbers and codes are skipped by convention.
