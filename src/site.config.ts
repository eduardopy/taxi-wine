/**
 * SITE CONFIG — edit this file to update content across the whole site.
 *
 * After editing, run `npm run dev` to preview.
 */

export const site = {
  brand: 'Taxi Wine',
  tagline: 'Wine country, your way',
  domain: 'taxiwine.com',                   // TODO real domain
  driverName: 'Matías Licata',              // TODO confirm spelling/preferred form
  baseLocation: 'Mendoza, Argentina',
  languages: ['English', 'Spanish'],
  yearsDriving: 8,                          // TODO confirm real number
  vehicle: 'Chevrolet Classic — Mendoza city taxi',
  vehiclePlate: 'OSB-IOJ',                  // for trust / "you can verify me" angle
};

export const contact = {
  whatsapp: '5492611234567',                // TODO real number, no + or spaces
  whatsappDisplay: '+54 9 261 123 4567',
  email: 'hello@taxiwine.com',              // TODO
  instagram: 'taxi.wine',
};

/**
 * Services — vehicle holds up to 4 passengers (sedan, not minivan).
 * Prices in USD.
 */
export const services = [
  {
    id: 'lujan-maipu',
    eyebrow: 'Full day',
    title: 'Luján & Maipú',
    duration: 'Up to 8 hours',
    price: 180,
    seats: '1–4 guests',
    blurb:
      'Three classic wineries within a 40-minute drive of the city. Best for a first-time Mendoza day.',
    image: '/img/scene-vineyard-andes.webp',
    includes: [
      'Licensed Mendoza taxi and driver for 8 hours',
      'Pickup and drop-off at your hotel',
      'Bottled water, A/C, fluent English',
      'Help booking wineries and lunch',
    ],
    excludes: [
      'Winery tasting fees and lunch',
      'Each extra hour: USD 22',
    ],
  },
  {
    id: 'uco-valley',
    eyebrow: 'Full day',
    title: 'Valle de Uco',
    duration: 'Up to 10 hours',
    price: 230,
    seats: '1–4 guests',
    blurb:
      'The high-altitude valley everyone comes for — about 1.5h each way, world-class wineries, panoramic views.',
    image: '/img/scene-vineyard-winter.webp',
    includes: [
      'Licensed Mendoza taxi and driver for 10 hours',
      'Pickup and drop-off at your hotel',
      'Bottled water, A/C, fluent English',
      'Help booking wineries and lunch',
    ],
    excludes: [
      'Winery tasting fees and lunch',
      'Each extra hour: USD 22',
    ],
  },
  {
    id: 'hourly',
    eyebrow: 'Flexible',
    title: 'By the hour',
    duration: 'Minimum 2 hours',
    price: 28,
    priceSuffix: '/hr',
    seats: '1–4 guests',
    blurb:
      'For shorter outings — a single winery, dinner, sightseeing, errands. Pay only for the time you use.',
    image: '/img/place-tasting-room.webp',
    includes: [
      'Licensed taxi and driver',
      'Bottled water and A/C',
      'Local recommendations on request',
    ],
    excludes: ['Outside Mendoza City: individual quote'],
  },
  {
    id: 'airport',
    eyebrow: 'Transfer',
    title: 'Airport transfer (MDZ)',
    duration: 'Direct',
    price: 35,
    seats: '1–4 guests',
    blurb:
      'Meet & greet at arrivals, luggage help, direct to your accommodation. Flat rate, day or night.',
    image: '/img/taxi-parked.webp',
    includes: [
      'One-way private transfer',
      'Luggage assistance',
      'Flight tracking — no charge if your flight is late',
    ],
    excludes: ['Departures outside Mendoza City: quote on request'],
  },
];

/**
 * Beyond-wine experiences. Photo grid in Experiences section.
 */
export const experiences = [
  {
    id: 'mountain-aconcagua',
    title: 'Aconcagua & High Andes',
    blurb:
      'Full-day Andes drive: Puente del Inca, Aconcagua viewpoint, Uspallata Valley. Pure scenery, no wine required.',
    image: '/img/exp-aconcagua.webp',
    duration: '~10 hours',
  },
  {
    id: 'horseback',
    title: 'Horseback in the foothills',
    blurb:
      'I drop you off at a working estancia, you ride into the Andes for two hours. I pick you up for lunch.',
    image: '/img/scene-horseback-andes.webp',
    duration: '~6 hours',
  },
  {
    id: 'termas',
    title: 'Termas Cacheuta hot springs',
    blurb:
      'A relaxed half-day at the thermal pools 40 minutes from the city. Perfect after a heavy wine day.',
    image: '/img/place-puente-inca.webp',
    duration: '~5 hours',
  },
  {
    id: 'mixed-day',
    title: 'A custom mixed day',
    blurb:
      'One winery, one mountain stop, one long lunch. Most travelers find this is the day they remember.',
    image: '/img/exp-winery-architecture.webp',
    duration: 'Full day',
  },
];

/**
 * Customer-moments gallery — small images interleaved on the page.
 */
export const gallery = [
  { src: '/img/guests-cellar.webp',     alt: 'Guests tasting from the barrel at a Mendoza winery' },
  { src: '/img/guests-trapiche.webp',   alt: 'Couple at Bodega Trapiche' },
  { src: '/img/guests-tupungato.webp',  alt: 'Couple at the Tupungato sign with the Andes behind' },
  { src: '/img/guests-horseback.webp',  alt: 'Group horseback riding toward the Andes' },
  { src: '/img/guests-chachingo.webp',  alt: 'Couple at Bodega Chachingo' },
  { src: '/img/guests-carmine.webp',    alt: 'Couple at Bodega Carmine Granata' },
];

export const pillars = [
  {
    title: 'Just one driver — me.',
    body: 'You book the person who shows up. No call centers, no rotating fleet, no hand-offs.',
  },
  {
    title: 'A licensed Mendoza taxi.',
    body: 'Officially registered (plate OSB-IOJ), insured, and regulated. No grey-market van — and no luxury-tour markup.',
  },
  {
    title: 'Fluent English.',
    body: 'Comfortable conversation, real answers about wine, food, and the region.',
  },
  {
    title: 'Fixed prices in USD.',
    body: 'What you see is what you pay. No surge, no fuel surcharge, no hidden tasting markups.',
  },
];

/**
 * Honest comparison: when a licensed taxi is the right call, when it isn't.
 * Sits between About and WhyChoose. Earns trust by NOT trashing the alternative.
 */
export const fitSelector = {
  yes: {
    label: 'A licensed Mendoza taxi',
    sub: 'Plate OSB-IOJ — the registered city cab',
    points: [
      'You are 1–4 people, often a couple.',
      'You want the same driver who replied to your WhatsApp to be the one at your hotel door.',
      'You want a fixed price in dollars, not a meter, not a markup.',
      'You like that the car is officially regulated — license, insurance, accountability.',
      'You\'d rather pay in cash on the day than wire a deposit to a tour company.',
    ],
  },
  no: {
    label: 'A multi-driver tour van',
    sub: 'When a taxi isn\'t the right tool',
    points: [
      'You are a group of 6+ — a sedan won\'t fit you.',
      'You want a fixed group itinerary with strangers and a guide on a microphone.',
      'You\'re booking through your hotel concierge and don\'t want to message a person directly.',
      'You need a guaranteed fleet vehicle as a backup — taxis are individual.',
    ],
  },
  closer:
    'If you\'re unsure, message me anyway. I\'ll tell you honestly whether I\'m the right fit, or recommend the colleague who is.',
} as const;

export const process = [
  {
    n: '01',
    title: 'Tell me your dates',
    body: 'A short WhatsApp or email is enough. I reply the same day, usually within an hour.',
  },
  {
    n: '02',
    title: 'We design the day',
    body: 'I send winery options based on your taste — bold reds, biodynamic, architecture, big lunches — and book everything for you.',
  },
  {
    n: '03',
    title: 'I drive, you taste',
    body: 'Door-to-door pickup, comfortable pace, no group of strangers. Pay in cash on the day, or by card in advance.',
  },
];

export const reviews = [
  {
    quote:
      'Picked us up on time, gave us a list of wineries we’d never have found, and made the whole day feel effortless. By far the best part of our trip to Argentina.',
    name: 'Placeholder Name',
    origin: 'Toronto, Canada',
    source: 'TripAdvisor',
  },
  {
    quote:
      'Knew exactly when to talk and when to let us enjoy the views. Spoke perfect English and helped us order lunch like locals. Already recommended him to two friends going next year.',
    name: 'Placeholder Name',
    origin: 'New York, USA',
    source: 'TripAdvisor',
  },
  {
    quote:
      'I was nervous about hiring a private driver online and he made it stress-free from the first WhatsApp. Punctual, friendly, and the car was spotless.',
    name: 'Placeholder Name',
    origin: 'London, UK',
    source: 'Google',
  },
];

export const faqs = [
  {
    q: 'How does booking work?',
    a: 'Send me a WhatsApp or email with your dates and what you’re thinking. I’ll reply the same day with availability, a suggested route, and a final price.',
  },
  {
    q: 'Wait — it’s an actual taxi?',
    a: 'Yes. I’m a licensed Mendoza city taxi driver who specializes in wine-country days. The car is officially registered (plate OSB-IOJ), insured, and regulated by the city. The benefit for you: legitimate paperwork, fair regulated rates, and none of the markup that grey-market tour vans charge.',
  },
  {
    q: 'How many people fit?',
    a: 'Up to 4 passengers comfortably, plus normal day-trip luggage. For larger groups I can recommend a colleague with a minivan.',
  },
  {
    q: 'Do I need to pay in advance?',
    a: 'Not for most services. You can pay in cash on the day (USD or pesos at the official rate). If you prefer, I can also send a card link before the trip.',
  },
  {
    q: 'Which payment methods do you accept?',
    a: 'Cash (USD or ARS), bank transfer, and card via a secure link. Tips are appreciated but never expected.',
  },
  {
    q: 'Can you book the wineries for me?',
    a: 'Yes — and I recommend it. Most good wineries require reservations and the best slots fill up weeks ahead. Tell me your taste and I handle the rest.',
  },
  {
    q: 'I don’t know which wineries to choose.',
    a: 'That’s the most common situation. After a short conversation about what you usually drink, your budget, and the kind of day you want (relaxed lunch vs. four tastings), I send you a shortlist with a clear plan.',
  },
  {
    q: 'Do you do mountain trips, not just wine?',
    a: 'Yes. Aconcagua, Puente del Inca, Termas Cacheuta, horseback rides — see the Experiences section. Many travelers do one wine day and one mountain day.',
  },
  {
    q: 'Do you speak English?',
    a: 'Yes, fluently. I also speak Spanish (native) and some Portuguese.',
  },
];
