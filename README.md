# Taxi Wine

Marketing site for Taxi Wine — a single-driver private wine tour service in Mendoza, Argentina.

Built with **Astro 5** + **Tailwind CSS v4**. Static, fast, and free to host on Cloudflare Pages or Netlify.

---

## Quick start

You need [Node.js 20+](https://nodejs.org) installed.

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

- `/` — English
- `/es/` — Spanish
- `/pt/` — Portuguese

Each route has localized title/description metadata, `hreflang` alternate links, and localized JSON-LD service/route descriptions.

### Photos

Put your photos in `/public/` and reference them like `/your-photo.jpg`. The placeholders to replace:

- **`/public/driver.jpg`** — your portrait, used in the About section. Currently a colored placeholder. Open `src/components/About.astro` and replace the placeholder div with `<img src="/driver.jpg" alt="..." class="w-full h-full object-cover" />`.

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

## Deploying (free)

### Cloudflare Pages (recommended)

1. Push this folder to a GitHub repo.
2. Go to <https://pages.cloudflare.com>, log in, click **Create a project → Connect to Git**.
3. Select your repo. Build settings:
   - Framework preset: **Astro**
   - Build command: `npm run build`
   - Build output: `dist`
4. Click **Save and Deploy**.
5. Add your custom domain under **Custom domains** when ready.

Cost: **free** for sites this size, forever. You only pay for the domain (~$12/year).

### Netlify (alternative)

Same flow at <https://app.netlify.com> — auto-detects Astro.

---

## What still needs your attention

Before launching, replace the placeholders:

- [ ] Real driver name (`site.driverName` in `site.config.ts`)
- [ ] Real WhatsApp number (`contact.whatsapp` — no `+`, no spaces, e.g. `5492611234567`)
- [ ] Real email
- [ ] Real Instagram handle (or remove the line)
- [ ] Real prices (currently match Malbec Transfer's ballpark — adjust for your market)
- [ ] Driver portrait at `/public/driver.jpg`
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
│   └── favicon.svg
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
        ├── index.astro     # English homepage
        ├── es/index.astro  # Spanish homepage
        └── pt/index.astro  # Portuguese homepage
```
