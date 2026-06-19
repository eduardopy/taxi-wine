# Taxi Wine

Marketing site for Taxi Wine — a single-driver private wine tour service in Mendoza, Argentina.

Built with **Astro 5** + **Tailwind CSS v4**. Static, fast, and deployed to GitHub Pages from `main` via GitHub Actions.

---

## Quick start

You need [Node.js 24+](https://nodejs.org) installed.

```bash
npm install         # install dependencies
npm run dev         # start local dev server at http://localhost:4321
npm run build       # build for production into ./dist
npm run preview     # preview the production build
```

---

## Where to edit content

**99% of content lives in one file:** [`src/site.config.ts`](src/site.config.ts).

Open it and edit:

- `site` — brand name, driver name, domain, languages
- `contact` — WhatsApp number, email, Instagram handle
- `localeMeta` — URL paths and labels for English, Spanish, Portuguese
- `content.en`, `content.es`, `content.pt` — all translated page copy, services, routes, FAQs, trust cards

After saving, the dev server reloads automatically.

### Languages

The site builds three static language routes:

- `/` — Portuguese
- `/en/` — English
- `/es/` — Spanish

Each route has localized title/description metadata, `hreflang` alternate links, and localized JSON-LD service/route descriptions.

### Photos

Put your photos in `/public/` and reference them like `/your-photo.jpg`. Current image assets live in `/public/img/`, including the Chevrolet Onix photos and vineyard/customer images used across the page.

Recommended sizes: portrait 800×1000px, hero 1600×900px. Compress with [Squoosh](https://squoosh.app) before uploading.

---

## Theme / colors

All colors live as CSS variables in [`src/styles/global.css`](src/styles/global.css) under `@theme`. Change once, applies everywhere.

Defaults:

| Token | Color | Use |
|---|---|---|
| `--color-cream` | `#f6efe2` | page background |
| `--color-wine` | `#5e1a2c` | primary buttons, accents |
| `--color-terracotta` | `#c25a3a` | secondary accent |
| `--color-ink` | `#1a1612` | body text |
| `--color-mute` | `#6b5e4f` | muted/secondary text |

Fonts (loaded from Google Fonts):

- Display: **Fraunces** (serif, with italic optical-size axis)
- Body: **Instrument Sans**

To swap fonts, edit the `@import` URL at the top of `global.css` and the `--font-display` / `--font-body` variables.

---

## Deploying

GitHub Pages is configured for workflow deployment. Every push to `main` runs `.github/workflows/deploy.yml`, builds the Astro site, and publishes `dist` to:

<https://eduardopy.github.io/taxi-wine/>

---

## What still needs your attention

Before launching, confirm the remaining business details:

- [ ] Confirm driver name spelling (`site.driverName` in `site.config.ts`)
- [ ] Confirm WhatsApp number (`contact.whatsapp` is currently `5492612517146`)
- [ ] Real email
- [ ] Confirm Instagram handle (or remove the line)
- [ ] Confirm prices (`$113`, `$146`, `$18/hr`, `$23`, extra hour `USD 14`)
- [ ] Real TripAdvisor / Google reviews, then replace the current trust cards
- [ ] Personalize the bio paragraphs in all three `content.*.about` entries
- [ ] Your real domain in `astro.config.mjs` (the `site:` value, used for SEO)

Once those are in, you're ready to deploy.

---

## File structure

```
taxi-wine/
├── astro.config.mjs        # Astro config + Tailwind plugin
├── package.json
├── tsconfig.json
├── public/
│   ├── favicon.svg
│   └── img/               # site photos
└── src/
    ├── site.config.ts      # ← edit this for most content
    ├── styles/
    │   └── global.css      # design tokens (colors, fonts)
    ├── layouts/
    │   └── BaseLayout.astro
    ├── components/
    │   ├── Header.astro
    │   ├── HomePage.astro
    │   ├── Hero.astro
    │   ├── Services.astro
    │   ├── Routes.astro
    │   ├── About.astro
    │   ├── WhyChoose.astro
    │   ├── Process.astro
    │   ├── Reviews.astro
    │   ├── FAQ.astro
    │   ├── Contact.astro
    │   ├── Footer.astro
    │   └── WhatsAppFloat.astro
    └── pages/
        ├── index.astro     # Portuguese homepage
        ├── en/index.astro  # English homepage
        ├── es/index.astro  # Spanish homepage
```
