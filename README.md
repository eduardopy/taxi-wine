# Taxi Wine

Marketing site for Taxi Wine — a single-driver private wine tour service in Mendoza, Argentina.

Built with **Astro 5** + **Tailwind CSS v4**. Static, fast, and hosted on Netlify at `https://taxiwine.com`.

---

## Quick start

You need [Node.js 24+](https://nodejs.org) installed.

```bash
npm install         # install dependencies
npm run dev         # start local dev server at http://localhost:4321
npm run build       # build for production into ./dist
npm run preview     # preview the production build
npm test            # check booking and promotion rules
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

### Booking requests

The booking form opens WhatsApp with the customer's details already filled in.
The customer must review and send that message in WhatsApp; the site does not
store requests or automatically confirm a booking. The destination is
`contact.whatsapp` in `src/site.config.ts` (country code and number, digits
only). Update `whatsappDisplay` there as well if the number changes. The form
works on both the Netlify site and the GitHub Pages preview.

### Scheduling promotions

Edit the `promotions` list in [`src/promotions.ts`](src/promotions.ts), then
commit the change to `main` to trigger a deployment. There is no separate
promotion dashboard. The current configuration offers 20% off January 2027
trips requested in November 2026. For example, this gives 10% off two services
for October trips requested in September 2027:

```ts
export const promotions: Promotion[] = [
  {
    id: 'spring-2027',
    name: { en: 'Spring offer', es: 'Oferta de primavera', pt: 'Oferta de primavera' },
    startDate: '2027-09-01',
    endDate: '2027-09-30',
    percentOff: 10,
    serviceIds: ['lujan-maipu', 'uco-valley'],
    travelStartDate: '2027-10-01',
    travelEndDate: '2027-10-31',
  },
];
```

- `startDate` and `endDate` are the request period in Mendoza time; the offer
  appears and disappears automatically without another deployment. Optional
  `travelStartDate` and `travelEndDate` restrict the trip dates. All dates are
  inclusive. Leave out both travel dates to cover trips on any date.
- Use `serviceIds: 'all'` for every service, or select from `lujan-maipu`,
  `uco-valley`, `hourly`, and `airport`. The percentage applies to the listed
  base price or hourly rate, not extra hours, tastings, or lunch.
- Give every promotion a unique ID and names in all three languages. The build
  rejects invalid dates, percentages, or service IDs. When offers overlap, the
  greatest percentage applies per service; offers are not combined. Equal
  percentages use the first listed offer.
- The site shows an offer banner and the discounted prices with their terms.
  The booking form checks the selected trip date before including an offer in
  the WhatsApp message. Requests still need confirmation by the driver. The
  display uses the visitor's device clock; check the received time and terms
  when confirming an offer.

Leave the list empty to run no promotions. Editing this file and deploying is
required to add or change an offer; scheduled start and end dates then take
effect automatically.

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

Netlify is the production host. Every push to `main` builds from `netlify.toml` and publishes `dist` to:

<https://taxiwine.com/>

GitHub Pages is also configured as a secondary preview. Its workflow passes `ASTRO_SITE=https://eduardopy.github.io` and `ASTRO_BASE=/taxi-wine` so links/assets work under the repository subpath:

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
- [ ] Keep `ASTRO_SITE` values in sync if the production or preview domains change

Once those are in, you're ready to deploy.

---

## File structure

```
taxi-wine/
├── astro.config.mjs        # Astro config + Tailwind plugin
├── netlify.toml            # Netlify production build config
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
