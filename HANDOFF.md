# HANDOFF — Taxi Wine site

> **Read this first.** This is a prototype handed to you from a previous chat session. It works, but it's a starting point. **You are not obligated to build on top of it.** If a different stack, structure, or aesthetic would serve the client better, throw this away and start over. The notes below are about the *client and the problem*, not about the code.

---

## 1. The client and the problem

**Who it's for:** Matías Licata (name unconfirmed — visible as a watermark on one of his Instagram photos; verify with the dev who hired you). He's a single licensed Mendoza city taxi driver who specializes in private wine tours and other tourism trips around the region. Operates as **"Taxi Wine"** (Instagram: `@taxi.wine`).

**What's important and easy to miss:** he's not a luxury transfer company pretending to be a taxi. He is *literally a taxi*. A registered, plate-OSB-IOJ, black-and-yellow Chevrolet Classic with the official Mendoza Gobierno decal, working as a city cab and using that license to do tourism. This is a real differentiator (legal, regulated, fair-priced) and the site should not hide it. Maximum capacity is 4, not 6 — sedan, not minivan.

**The dev's brief from the client was:** "make it like the others." He pointed at competitors like [malbectransfer.com](https://malbectransfer.com), [drivingmendozawinetours.com](https://drivingmendozawinetours.com), [discoverywinemendoza.com](https://www.discoverywinemendoza.com/en) as references. He's hands-off and not opinionated about design. The dev is doing this for him, not for himself.

**Existing WordPress site:** `https://boring-squirrel.linuseast1wp.hustly.live` — bare, generic, Spanish-only, built with Elementor. The plan was to replace it, not improve it.

**Audience:** International wine tourists, mostly USD-paying, mostly English-speaking. Locals don't book private wine drivers.

---

## 2. What's already done

- Astro 5 + Tailwind v4 single-page site, static build, designed for free Cloudflare Pages hosting.
- Editorial wine-cellar aesthetic: cream background, deep wine-red accents, Fraunces serif display + Instrument Sans body, subtle grain texture, asymmetric layouts, decorative italic accents.
- Sections: Hero → Services (4 cards: Luján/Maipú, Valle de Uco, hourly, airport) → **Routes** (Luján, Maipú, Valle de Uco planning guidance) → About → Why-choose pillars → **Experiences** (Aconcagua, horseback, Cacheuta, mixed days) → **Gallery band** (customer photos) → Process → Trust cards → FAQ → Contact (form + WhatsApp/email/IG) → Footer + sticky WhatsApp float.
- Real photos integrated from his Instagram (provided by the dev as a zip): the actual taxi, vineyard scenery, cellar tasting moments, Andes shots, customer photos at named wineries.
- English, Spanish, and Portuguese versions are live as static routes: `/`, `/es/`, `/pt/`.
- Content centralized in `src/site.config.ts` so non-technical edits are one-file, with copy under `content.en`, `content.es`, and `content.pt`.
- Theme tokens in `src/styles/global.css` under `@theme`.
- README with setup and deploy instructions.

## 3. What's a prototype / what's broken / what's a placeholder

**Genuinely placeholder, must be fixed before launch:**
- Reviews no longer use invented placeholder quotes. The section is currently trust cards based on checkable business facts. Replace with real TripAdvisor or Google reviews once those profile URLs exist.
- WhatsApp number, email, and domain in `site.config.ts` are dummy values. The real WhatsApp must be in international format, no `+`, no spaces (e.g. `5492611234567`).
- The driver bio in `About.astro` is now generic but presentable. It still needs Matías's real story before launch.

**Working but worth questioning:**
- Prices ($180 / $230 / $28 hr / $35 airport) are *educated guesses* — slightly below the multi-driver competitors to reflect the taxi-vs-tour-van angle. The client never confirmed his actual rates.
- The image strategy is "use what we have." His IG photos are 640×640 Instagram crops, fine for cards but limiting for a true hero treatment. If the next session wants a more dramatic hero, you'll need to either get higher-res originals from him or use complementary stock photography.
- The "experiences" section talks confidently about horseback / Aconcagua / Cacheuta day structures — those are inferred from his IG posts, not confirmed pricing or itineraries. Treat as scaffolding.
- The site is now trilingual. Translation is good enough for launch preview, but Matías should still review the Spanish/Portuguese wording before production.
- The "Mendoza Gobierno" / plate-number / licensed-taxi angle is leaned into in the About and FAQ. The dev's instruction was "incorporate the taxi element but keep polished" — this was the compromise. Could go further, could pull back.

**Image-quality caveats:**
- Source photos are 640×640 from Instagram. They look fine in cards, fine in the gallery, slightly soft when used at hero scale. If you build a hero that uses one full-bleed, get originals from him.
- One photo (`taxi-andes.webp`) had a date timestamp burned in; cropped out, but the bottom is now slightly tighter than ideal.
- Some customer photos have clearly-identifiable faces. **Get explicit consent before launch** — IG posting consent ≠ commercial-website consent.

---

## 4. Ideas worth exploring (in priority order)

These are pitches, not commitments. Pick what serves the client.

1. **Per-service landing pages with SEO targeting.** "Private driver Luján de Cuyo," "Private driver Valle de Uco," "Private taxi Mendoza airport," "Aconcagua day trip private driver" — each as its own page with schema.org `TouristTrip` + `LocalBusiness` JSON-LD. The single-page approach we have wins on UX but loses on SEO discoverability. For a tourism business that depends on Google search, dedicated landing pages probably matter more than a polished home.

2. **Language QA.** English, Spanish, and Portuguese pages exist. Before production, have a native speaker/client review the Spanish and Portuguese copy, especially prices, payment language, and the driver bio.

3. **Drop a real form backend.** The contact form is currently `mailto:`, which works but is clunky on mobile. Web3Forms or Formspree are 5-minute drop-ins. Cloudflare Pages Forms is also free if you're hosting there anyway.

4. **A small Google Sheet "CRM" via the form action.** Submissions into a Sheet, push to his email + WhatsApp. Lightweight booking-management for someone who won't install software.

5. **Schema.org structured data.** `LocalBusiness` with the plate number, license, hours; `TouristTrip` for each service. Worth real Google ranking points in a category that's heavy on aggregators.

6. **A "verify my license" callout.** The plate number and Mendoza city decal are visible in his photos. A small badge linking to the city's taxi registry (if such a public lookup exists) would be a unique trust signal that no other operator can match. Worth a research session.

7. **A real CMS layer if the client ever wants to self-edit.** TinaCMS or Decap (git-based, no separate DB) over `site.config.ts`. Skip if the dev is happy to keep editing for him — for 4 services and quarterly price updates, a CMS is overkill.

8. **Reconsider the aesthetic entirely.** I committed to an editorial/wine-cellar direction (Fraunces serif, cream + wine-red, italic accents). This is one valid choice; the category is full of identical white-and-blue Tilda templates so anything distinctive helps. But the next session might see this and think "too magazine-y for a working taxi driver" — and that's a defensible read. Brutalist, full-color photo-driven, even retro Argentine-poster-art are all viable directions.

9. **Reviews integration via TripAdvisor or Google API.** Pulling live reviews instead of static quotes. Real ones update themselves; static ones go stale.

10. **Mobile-first booking flow.** A short multi-step "dates → guests → vibe → contact" wizard might convert better than the open form. Worth A/B testing if there's analytics in place.

---

## 5. Files of note

```
src/
  site.config.ts          ← all content, edit here first
  styles/global.css       ← @theme tokens, fonts, base
  layouts/BaseLayout.astro
  pages/index.astro       ← English homepage
  pages/es/index.astro    ← Spanish homepage
  pages/pt/index.astro    ← Portuguese homepage
  components/
    HomePage.astro        ← composes the section components
    Header.astro
    Hero.astro            ← photo collage with vineyard + taxi inset
    Services.astro        ← 4 cards, each with image + collapsible details
    Routes.astro          ← region-choice cards inspired by competitor route pages
    About.astro           ← collage (cellar photo + taxi inset), generic bio to personalize
    WhyChoose.astro       ← 4 pillars
    Experiences.astro     ← NEW — beyond-wine grid (4 items, asymmetric)
    Gallery.astro         ← NEW — customer-moments band
    Process.astro         ← dark slab, 3 steps
    Reviews.astro         ← trust cards until real reviews are sourced
    FAQ.astro             ← accordion
    Contact.astro         ← form (mailto:) + WhatsApp/email/IG buttons
    Footer.astro
    WhatsAppFloat.astro   ← sticky floating button
public/
  img/                    ← 17 webp images, optimized
  favicon.svg
```

## 6. Things the dev should ask the client

To finish this site (or replace it), the dev needs from Matías:

- [ ] Real WhatsApp number for international travelers (the one he uses for client comms)
- [ ] Real email address
- [ ] Confirmation of his actual prices for all four services
- [ ] Confirmation of his name spelling and how he wants to be addressed
- [ ] A short paragraph (or voice note) about why he started doing this — his actual story
- [ ] Years of experience (real number)
- [ ] His actual Instagram handle (`@taxi.wine` was reported but not search-confirmed; verify)
- [ ] TripAdvisor / Google profile URLs so we can lift real reviews
- [ ] Consent on which customer photos can appear on the site
- [ ] Whether the Spanish or Portuguese version should be the primary/default language
- [ ] Whether he ever wants online payment, or "pay on the day" stays the model

Without these, the launch is dishonest. With them, the site is real.

---

## 7. Honest read on the prototype

It's a competent v1. The editorial aesthetic works for the category. The structure mirrors the Malbec Transfer pattern that the client pointed at. The taxi-as-differentiator is integrated without being kitsch. The image rhythm (hero collage → service cards → about collage → experiences grid → gallery band → reviews → FAQ → contact) gives the page real cadence.

**What it doesn't do:** it doesn't have a memorable single moment. There's no one element a visitor will remember and tell a friend about. If you (next Claude) want to take a swing, that's the place — find the unforgettable detail. Maybe it's the taxi roof sign as a navigation anchor. Maybe it's a hand-drawn map of a typical day. Maybe it's the license plate displayed proudly as a trust signal in a way no other operator can. Maybe it's something I haven't thought of.

Also: the multilingual structure is now in place. For a business that lives or dies by Google rankings on tourist queries, the next SEO step is not more languages but focused landing pages for the highest-intent routes.

Good luck.
