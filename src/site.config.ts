/**
 * SITE CONFIG — edit this file to update content across the whole site.
 *
 * Shared business facts live at the top. Language-specific copy lives in
 * `content.en`, `content.es`, and `content.pt`.
 */

export const site = {
  brand: 'Taxi Wine',
  domain: 'taxiwine.com',                   // TODO real domain
  driverName: 'Matías Licata',              // TODO confirm spelling/preferred form
  baseLocation: 'Mendoza, Argentina',
  languages: ['English', 'Spanish', 'Portuguese'],
  yearsDriving: 8,                          // TODO confirm real number
  vehicle: 'Chevrolet Onix — auto habilitado para turismo',
  vehiclePlate: 'AH 207 UI',
};

export const contact = {
  whatsapp: '5492612517146',                // WhatsApp number, no + or spaces
  whatsappDisplay: '+54 9 2612 51-7146',
  email: 'hello@taxiwine.com',              // TODO
  instagram: 'taxi.wine',
};

export const locales = ['pt', 'en', 'es'] as const;
export type Locale = typeof locales[number];
export const defaultLocale: Locale = 'pt';

const baseUrl = import.meta.env.BASE_URL ?? '/';
const normalizedBase = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;

export function withBase(path: string): string {
  if (!path.startsWith('/')) {
    return path;
  }

  return `${normalizedBase}${path}`;
}

export const localeMeta: Record<Locale, {
  label: string;
  name: string;
  htmlLang: string;
  path: string;
}> = {
  en: { label: 'EN', name: 'English', htmlLang: 'en', path: '/en/' },
  es: { label: 'ES', name: 'Español', htmlLang: 'es', path: '/es/' },
  pt: { label: 'PT', name: 'Português', htmlLang: 'pt-BR', path: '/' },
};

export const content = {
  en: {
    tagline: 'Wine country, your way',
    meta: {
      title: 'Taxi Wine — Wine country, your way',
      description:
        'Private wine tours in Mendoza with a single trusted driver. Fixed USD pricing, fluent English, real local knowledge. Luján, Maipú, and Valle de Uco.',
    },
    nav: {
      services: 'Services',
      routes: 'Routes',
      experiences: 'Experiences',
      about: 'About',
      faq: 'FAQ',
      book: 'Book a ride',
    },
    licensePlate: {
      prefix: 'Mendoza · Turismo',
      aria: 'Authorized Mendoza tourism driver',
    },
    hero: {
      titleTop: 'Your private driver in Mendoza.',
      titleAccent: 'Wine country, your way.',
      descriptionBefore:
        'A comfortable car authorized for tourism in Mendoza — regulated and insured. One driver, fixed dollar prices, no luxury-tour markup — just ',
      descriptionEmphasis: 'the day you actually wanted',
      descriptionAfter: ', driven by someone who lives here.',
      ctaPrimary: 'See services & prices',
      ctaSecondary: 'Plan my day',
      stats: [
        { eyebrow: 'Pricing', value: 'Fixed USD' },
        { eyebrow: 'Capacity', value: 'Up to 4' },
        { eyebrow: 'Languages', value: 'EN · ES · PT' },
        { eyebrow: 'Reply time', value: 'Same day' },
      ],
      mainImageAlt: 'Vineyard rows with the snow-capped Andes behind',
      taxiImageAlt: 'The Taxi Wine Chevrolet Onix with the Andes behind',
    },
    servicesSection: {
      eyebrow: 'What I offer',
      heading: 'Four ways to',
      headingAccent: 'work together.',
      intro:
        'Every price is for the whole vehicle, not per person — so a couple pays the same as a group of four. Tasting fees and lunches are paid directly at each winery. Traveling as a larger group? Just ask — I can arrange transport for more than four.',
      details: 'Details',
      included: 'Included',
      notIncluded: 'Not included',
      book: 'Book',
      whatsappInterest: "Hi! I'm interested in:",
    },
    services: [
      {
        id: 'lujan-maipu',
        eyebrow: 'Full day',
        title: 'Luján & Maipú',
        duration: 'Up to 8 hours',
        price: 113,
        seats: '1-4 guests',
        blurb:
          'Three classic wineries within a 40-minute drive of the city. Best for a first-time Mendoza day.',
        image: '/img/scene-vineyard-andes.webp',
        includes: [
          'Authorized tourism car and driver for 8 hours',
          'Pickup and drop-off at your hotel',
          'Bottled water, A/C, fluent English',
          'Help booking wineries and lunch',
        ],
        excludes: [
          'Winery tasting fees and lunch',
          'Each extra hour: USD 14',
        ],
      },
      {
        id: 'uco-valley',
        eyebrow: 'Full day',
        title: 'Valle de Uco',
        duration: 'Up to 10 hours',
        price: 146,
        seats: '1-4 guests',
        blurb:
          'The high-altitude valley everyone comes for — about 1.5h each way, world-class wineries, panoramic views.',
        image: '/img/scene-vineyard-winter.webp',
        includes: [
          'Authorized tourism car and driver for 10 hours',
          'Pickup and drop-off at your hotel',
          'Bottled water, A/C, fluent English',
          'Help booking wineries and lunch',
        ],
        excludes: [
          'Winery tasting fees and lunch',
          'Each extra hour: USD 14',
        ],
      },
      {
        id: 'hourly',
        eyebrow: 'Flexible',
        title: 'By the hour',
        duration: 'Minimum 2 hours',
        price: 18,
        priceSuffix: '/hr',
        seats: '1-4 guests',
        blurb:
          'For shorter outings — a single winery, dinner, sightseeing, errands. Pay only for the time you use.',
        image: '/img/place-tasting-room.webp',
        includes: [
          'Authorized car and driver',
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
        price: 23,
        seats: '1-4 guests',
        blurb:
          'Meet & greet at arrivals, luggage help, direct to your accommodation. Flat rate, day or night.',
        image: '/img/car-rear.jpg',
        includes: [
          'One-way private transfer',
          'Luggage assistance',
          'Flight tracking — no charge if your flight is late',
        ],
        excludes: ['Departures outside Mendoza City: quote on request'],
      },
    ],
    routesSection: {
      eyebrow: 'Wine routes',
      heading: 'Mendoza is easier when',
      headingAccent: 'the day has a shape.',
      intro:
        'Most travelers are choosing between three regions. I help you pick the one that fits your timing, lunch plans, and appetite for driving.',
      rhythmLabel: 'Typical rhythm',
      ask: 'Ask about',
      imageAltSuffix: 'wine route in Mendoza',
      whatsappInterest: 'Hi! I am interested in a wine day in',
    },
    routes: [
      {
        id: 'lujan-de-cuyo',
        eyebrow: 'Closest classic',
        title: 'Luján de Cuyo',
        drive: '25-40 min from Mendoza City',
        bestFor:
          'First-time Mendoza visitors who want serious Malbec, historic wineries, and a relaxed lunch without a long highway day.',
        image: '/img/place-lunch-table.webp',
        rhythm: [
          'Morning pickup at your hotel or apartment',
          'Two winery visits with time between reservations',
          'Long lunch in Chacras, Vistalba, Agrelo, or nearby',
          'Optional wine shop stop before returning to the city',
        ],
      },
      {
        id: 'maipu',
        eyebrow: 'Old vines',
        title: 'Maipú',
        drive: '25-45 min from Mendoza City',
        bestFor:
          'A warmer, more traditional wine day: older vineyards, olive oil stops, family-run cellars, and less time in the car.',
        image: '/img/guests-trapiche.webp',
        rhythm: [
          'Easy city pickup with a later start if you prefer',
          'Classic winery visit and tasting',
          'Olive oil or small-producer stop if it fits the day',
          'Lunch, then one final tasting or return',
        ],
      },
      {
        id: 'valle-de-uco',
        eyebrow: 'High altitude',
        title: 'Valle de Uco',
        drive: 'About 1.5 hr each way',
        bestFor:
          'Travelers who want mountain views, modern winery architecture, high-altitude wines, and a full-day pace.',
        image: '/img/scene-vineyard-winter.webp',
        rhythm: [
          'Early pickup so the drive stays calm',
          'First tasting with Andes views',
          'Winery lunch with enough time to enjoy it',
          'Afternoon visit, wine shop stop, and return to Mendoza',
        ],
      },
    ],
    about: {
      eyebrow: 'About',
      headingBefore: "Hi, I'm",
      headingAfter: 'The whole company.',
      paragraphs: [
        'I was born in Mendoza, and I spend my days driving visitors between the city, the vineyards, and the mountains. The job is part logistics, part local advice: which routes make sense, where to leave enough time for lunch, and when a long drive is actually worth it.',
        "I drive a comfortable car that's officially authorized for tourism in Mendoza — properly registered, insured, and fairly priced. No grey-market tour van, no luxury-tour markup. You get the care and attention of a private driver, with paperwork that's fully in order.",
        "Most days I drive a couple, occasionally a small group, sometimes a single traveler who doesn't want to be on a bus. There's no fleet, no dispatcher, no handing you off — when you book Taxi Wine, I'm the person who shows up.",
      ],
      facts: [
        { label: 'Languages', value: 'EN · ES · PT' },
        { label: 'Vehicle', value: 'Chevrolet Onix' },
        { label: 'Capacity', value: '4 + luggage' },
      ],
      imageAlt: 'Matías with guests tasting wine in a Mendoza cellar',
      taxiImageAlt: 'The Taxi Wine vehicle parked at a Mendoza winery',
    },
    whyChoose: {
      eyebrow: 'Why Taxi Wine',
      headingBefore: 'What you get that',
      headingAccent: 'a tour bus',
      headingAfter: "can't give you.",
    },
    pillars: [
      {
        title: 'Just one driver — me.',
        body: 'You book the person who shows up. No call centers, no rotating fleet, no hand-offs.',
      },
      {
        title: 'An authorized tourism car.',
        body: 'A comfortable car authorized for tourism (plate AH 207 UI), insured and regulated. No grey-market van — and no luxury-tour markup.',
      },
      {
        title: 'Fluent English.',
        body: 'Comfortable conversation, real answers about wine, food, and the region.',
      },
      {
        title: 'Fixed prices in USD.',
        body: 'What you see is what you pay. No surge, no fuel surcharge, no hidden tasting markups.',
      },
    ],
    experiencesSection: {
      eyebrow: 'Beyond wine',
      headingBefore: 'When the day calls for',
      headingAccent: 'mountains, not Malbec.',
      intro:
        "Many travelers do one wine day and one of these. The car goes everywhere the city does — and most places it doesn't.",
    },
    experiences: [
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
    ],
    gallerySection: {
      eyebrow: 'Recent days out',
      headingBefore: 'A few',
      headingAccent: 'guests',
      headingAfter: ', a few corners of Mendoza.',
    },
    gallery: [
      { src: '/img/guests-cellar.webp', alt: 'Guests tasting from the barrel at a Mendoza winery' },
      { src: '/img/guests-trapiche.webp', alt: 'Couple at Bodega Trapiche' },
      { src: '/img/guests-tupungato.webp', alt: 'Couple at the Tupungato sign with the Andes behind' },
      { src: '/img/guests-horseback.webp', alt: 'Group horseback riding toward the Andes' },
      { src: '/img/guests-chachingo.webp', alt: 'Couple at Bodega Chachingo' },
      { src: '/img/guests-carmine.webp', alt: 'Couple at Bodega Carmine Granata' },
    ],
    processSection: {
      eyebrow: 'How it works',
      headingBefore: 'From',
      headingAccent: 'first message',
      headingAfter: 'to last winery.',
    },
    process: [
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
    ],
    trustSection: {
      eyebrow: 'Trust first',
      headingBefore: 'Clear facts before',
      headingAccent: 'you book.',
      intro:
        'The best tour companies in Mendoza make logistics feel invisible. Taxi Wine keeps the same promise, with one visible difference: a regulated, authorized car is the service.',
    },
    trustPoints: [
      {
        eyebrow: 'Authorized vehicle',
        title: 'Plate AH 207 UI',
        body:
          'The car is officially authorized for tourism in Mendoza: regulated, insured, and easy to identify when it arrives.',
      },
      {
        eyebrow: 'Private by default',
        title: 'Only your group',
        body:
          'No mixed bus, no strangers, no fixed microphone tour. The route is built around your timing and taste.',
      },
      {
        eyebrow: 'Clear planning',
        title: 'Wineries before wheels',
        body:
          'The day is confirmed before pickup: region, reservations, lunch plan, price, and realistic drive times.',
      },
    ],
    faqSection: {
      eyebrow: 'Questions',
      headingBefore: 'Asked &',
      headingAccent: 'answered.',
      intro: 'Anything else? WhatsApp is the fastest way to reach me.',
    },
    faqs: [
      {
        q: 'How does booking work?',
        a: "Send me a WhatsApp or email with your dates and what you're thinking. I'll reply the same day with availability, a suggested route, and a final price.",
      },
      {
        q: 'Is the car licensed and insured?',
        a: "Yes. I drive a car that's officially authorized for tourism in Mendoza (plate AH 207 UI) — properly registered, insured, and regulated. The benefit for you: legitimate paperwork, fair pricing, and none of the markup that grey-market tour vans charge.",
      },
      {
        q: 'How many people fit?',
        a: 'Up to 4 passengers comfortably in the car, plus normal day-trip luggage. Traveling as a larger group? Just ask — I can arrange transport for more than four.',
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
        q: "I don't know which wineries to choose.",
        a: "That's the most common situation. After a short conversation about what you usually drink, your budget, and the kind of day you want (relaxed lunch vs. four tastings), I send you a shortlist with a clear plan.",
      },
      {
        q: 'Do you do mountain trips, not just wine?',
        a: 'Yes. Aconcagua, Puente del Inca, Termas Cacheuta, horseback rides — see the Experiences section. Many travelers do one wine day and one mountain day.',
      },
      {
        q: 'Do you speak English?',
        a: 'Yes, fluently. I also speak Spanish (native) and some Portuguese.',
      },
    ],
    contactSection: {
      eyebrow: 'Plan your day',
      headingBefore: 'Tell me your',
      headingAccent: 'dates.',
      intro:
        "A few sentences are enough — when you're arriving, how many of you, what kind of day you want. I reply the same day with a plan and a price.",
      whatsapp: 'WhatsApp',
      email: 'Email',
      instagram: 'Instagram',
      bookingRequest: 'Booking request',
      nameLabel: 'Your name',
      phoneLabel: 'WhatsApp / phone',
      datesLabel: 'Travel dates',
      datesPlaceholder: 'e.g. March 12-15',
      guestsLabel: 'Guests',
      guestsHelp: 'The car seats up to 4 guests — ask me about larger groups.',
      messageLabel: 'What kind of day are you imagining?',
      messagePlaceholder: 'Big lunch with views, biodynamic wines, our first time in Mendoza, etc.',
      submit: 'Send request',
      formNote: 'This form opens your email app. For an instant reply, use WhatsApp.',
      whatsappMessage: "Hi! I'd like to plan a wine day in Mendoza.",
      emailSubject: 'Mendoza wine day inquiry',
    },
    footer: {
      siteLabel: 'Site',
      contactLabel: 'Contact',
      made: 'Made with care, in Mendoza',
      languages: 'Languages',
      howItWorks: 'How it works',
    },
    whatsappFloat: {
      label: 'Open WhatsApp chat',
      text: 'Chat on WhatsApp',
      message: "Hi! I'd like to plan a wine day in Mendoza.",
    },
  },

  es: {
    tagline: 'El vino, a tu manera',
    meta: {
      title: 'Taxi Wine — El vino, a tu manera',
      description:
        'Tours privados de vino en Mendoza con un chofer de confianza. Precios fijos en USD, inglés fluido y conocimiento local real. Luján, Maipú y Valle de Uco.',
    },
    nav: {
      services: 'Servicios',
      routes: 'Rutas',
      experiences: 'Experiencias',
      about: 'Sobre mí',
      faq: 'FAQ',
      book: 'Reservar',
    },
    licensePlate: {
      prefix: 'Mendoza · Turismo',
      aria: 'Auto habilitado para turismo en Mendoza',
    },
    hero: {
      titleTop: 'Tu chofer privado en Mendoza.',
      titleAccent: 'El vino, a tu manera.',
      descriptionBefore:
        'Un auto cómodo habilitado para turismo en Mendoza — regulado y asegurado. Un chofer, precios fijos en dólares, sin sobreprecio de tour de lujo — solo ',
      descriptionEmphasis: 'el día que realmente querías',
      descriptionAfter: ', manejado por alguien que vive acá.',
      ctaPrimary: 'Ver servicios y precios',
      ctaSecondary: 'Planear mi día',
      stats: [
        { eyebrow: 'Precio', value: 'USD fijo' },
        { eyebrow: 'Capacidad', value: 'Hasta 4' },
        { eyebrow: 'Idiomas', value: 'EN · ES · PT' },
        { eyebrow: 'Respuesta', value: 'Mismo día' },
      ],
      mainImageAlt: 'Filas de viñedos con la Cordillera de los Andes nevada al fondo',
      taxiImageAlt: 'El Chevrolet Onix de Taxi Wine con los Andes al fondo',
    },
    servicesSection: {
      eyebrow: 'Qué ofrezco',
      heading: 'Cuatro formas de',
      headingAccent: 'viajar conmigo.',
      intro:
        'Cada precio es por el vehículo completo, no por persona: una pareja paga lo mismo que un grupo de cuatro. Las degustaciones y los almuerzos se pagan directamente en cada bodega. ¿Viajan en grupo grande? Consultame — puedo organizar traslados para más de cuatro personas.',
      details: 'Detalles',
      included: 'Incluido',
      notIncluded: 'No incluido',
      book: 'Reservar',
      whatsappInterest: 'Hola, me interesa:',
    },
    services: [
      {
        id: 'lujan-maipu',
        eyebrow: 'Día completo',
        title: 'Luján y Maipú',
        duration: 'Hasta 8 horas',
        price: 113,
        seats: '1-4 pasajeros',
        blurb:
          'Tres bodegas clásicas a menos de 40 minutos de la ciudad. Ideal para un primer día en Mendoza.',
        image: '/img/scene-vineyard-andes.webp',
        includes: [
          'Auto habilitado para turismo y chofer por 8 horas',
          'Búsqueda y regreso a tu hotel',
          'Agua, aire acondicionado, inglés fluido',
          'Ayuda para reservar bodegas y almuerzo',
        ],
        excludes: [
          'Degustaciones y almuerzo',
          'Cada hora extra: USD 14',
        ],
      },
      {
        id: 'uco-valley',
        eyebrow: 'Día completo',
        title: 'Valle de Uco',
        duration: 'Hasta 10 horas',
        price: 146,
        seats: '1-4 pasajeros',
        blurb:
          'El valle de altura que todos quieren conocer: cerca de 1,5 h por tramo, bodegas de nivel mundial y vistas panorámicas.',
        image: '/img/scene-vineyard-winter.webp',
        includes: [
          'Auto habilitado para turismo y chofer por 10 horas',
          'Búsqueda y regreso a tu hotel',
          'Agua, aire acondicionado, inglés fluido',
          'Ayuda para reservar bodegas y almuerzo',
        ],
        excludes: [
          'Degustaciones y almuerzo',
          'Cada hora extra: USD 14',
        ],
      },
      {
        id: 'hourly',
        eyebrow: 'Flexible',
        title: 'Por hora',
        duration: 'Mínimo 2 horas',
        price: 18,
        priceSuffix: '/hora',
        seats: '1-4 pasajeros',
        blurb:
          'Para salidas cortas: una bodega, cena, paseo, compras o trámites. Pagás solo el tiempo que usás.',
        image: '/img/place-tasting-room.webp',
        includes: [
          'Auto habilitado y chofer',
          'Agua y aire acondicionado',
          'Recomendaciones locales si las querés',
        ],
        excludes: ['Fuera de Ciudad de Mendoza: cotización individual'],
      },
      {
        id: 'airport',
        eyebrow: 'Traslado',
        title: 'Traslado aeropuerto (MDZ)',
        duration: 'Directo',
        price: 23,
        seats: '1-4 pasajeros',
        blurb:
          'Recepción en arribos, ayuda con equipaje y traslado directo a tu alojamiento. Tarifa fija, de día o de noche.',
        image: '/img/car-rear.jpg',
        includes: [
          'Traslado privado de ida',
          'Ayuda con el equipaje',
          'Seguimiento del vuelo: sin cargo si se demora',
        ],
        excludes: ['Destinos fuera de Ciudad de Mendoza: consultar'],
      },
    ],
    routesSection: {
      eyebrow: 'Rutas del vino',
      heading: 'Mendoza es más fácil cuando',
      headingAccent: 'el día tiene forma.',
      intro:
        'La mayoría de los viajeros elige entre tres regiones. Te ayudo a elegir la que mejor encaje con tus horarios, el almuerzo y las ganas de manejar.',
      rhythmLabel: 'Ritmo típico',
      ask: 'Consultar por',
      imageAltSuffix: 'ruta de vino en Mendoza',
      whatsappInterest: 'Hola, me interesa un día de vino en',
    },
    routes: [
      {
        id: 'lujan-de-cuyo',
        eyebrow: 'Clásico cercano',
        title: 'Luján de Cuyo',
        drive: '25-40 min desde Ciudad de Mendoza',
        bestFor:
          'Para quienes visitan Mendoza por primera vez y quieren Malbec serio, bodegas históricas y un almuerzo relajado sin pasar el día en la ruta.',
        image: '/img/place-lunch-table.webp',
        rhythm: [
          'Búsqueda por la mañana en tu hotel o departamento',
          'Dos visitas a bodegas con tiempo entre reservas',
          'Almuerzo largo en Chacras, Vistalba, Agrelo o cerca',
          'Parada opcional en vinoteca antes de volver a la ciudad',
        ],
      },
      {
        id: 'maipu',
        eyebrow: 'Viñas antiguas',
        title: 'Maipú',
        drive: '25-45 min desde Ciudad de Mendoza',
        bestFor:
          'Un día más tradicional y cálido: viñedos antiguos, olivares, bodegas familiares y menos tiempo arriba del auto.',
        image: '/img/guests-trapiche.webp',
        rhythm: [
          'Búsqueda tranquila, incluso con salida más tarde',
          'Visita y degustación en una bodega clásica',
          'Parada de aceite de oliva o pequeño productor si encaja',
          'Almuerzo y una última degustación, o regreso',
        ],
      },
      {
        id: 'valle-de-uco',
        eyebrow: 'Alta montaña',
        title: 'Valle de Uco',
        drive: 'Aprox. 1,5 h por tramo',
        bestFor:
          'Para viajeros que quieren vistas a la montaña, arquitectura moderna, vinos de altura y un ritmo de día completo.',
        image: '/img/scene-vineyard-winter.webp',
        rhythm: [
          'Salida temprano para que el viaje sea tranquilo',
          'Primera degustación con vista a los Andes',
          'Almuerzo en bodega con tiempo para disfrutarlo',
          'Visita por la tarde, parada en vinoteca y regreso a Mendoza',
        ],
      },
    ],
    about: {
      eyebrow: 'Sobre mí',
      headingBefore: 'Hola, soy',
      headingAfter: 'Toda la empresa.',
      paragraphs: [
        'Nací en Mendoza y paso mis días llevando visitantes entre la ciudad, los viñedos y la montaña. El trabajo es parte logística, parte consejo local: qué rutas convienen, dónde dejar tiempo para almorzar y cuándo un viaje largo realmente vale la pena.',
        'Manejo un auto cómodo habilitado para turismo en Mendoza — registrado oficialmente, asegurado y con precios justos. Sin van turística informal ni sobreprecio de tour de lujo. Tenés el cuidado y la atención de un chofer privado, con todos los papeles en regla.',
        'La mayoría de los días manejo una pareja, a veces un grupo chico, a veces una persona sola que no quiere subirse a un bus. No hay flota, ni central, ni cambio de chofer: cuando reservás Taxi Wine, soy yo quien llega.',
      ],
      facts: [
        { label: 'Idiomas', value: 'EN · ES · PT' },
        { label: 'Vehículo', value: 'Chevrolet Onix' },
        { label: 'Capacidad', value: '4 + equipaje' },
      ],
      imageAlt: 'Matías con pasajeros degustando vino en una cava de Mendoza',
      taxiImageAlt: 'El vehículo de Taxi Wine estacionado en una bodega mendocina',
    },
    whyChoose: {
      eyebrow: 'Por qué Taxi Wine',
      headingBefore: 'Lo que tenés con',
      headingAccent: 'un chofer privado',
      headingAfter: 'y no con un bus.',
    },
    pillars: [
      {
        title: 'Un solo chofer: yo.',
        body: 'Reservás a la misma persona que aparece. Sin call center, sin flota rotativa, sin pases de mano.',
      },
      {
        title: 'Un auto habilitado para turismo.',
        body: 'Auto cómodo habilitado para turismo (patente AH 207 UI), asegurado y regulado. Sin van informal ni sobreprecio de tour de lujo.',
      },
      {
        title: 'Inglés fluido.',
        body: 'Conversación cómoda y respuestas reales sobre vino, comida y la región.',
      },
      {
        title: 'Precios fijos en USD.',
        body: 'Lo que ves es lo que pagás. Sin tarifa dinámica, recargo por combustible ni comisión escondida en degustaciones.',
      },
    ],
    experiencesSection: {
      eyebrow: 'Más allá del vino',
      headingBefore: 'Cuando el día pide',
      headingAccent: 'montaña, no Malbec.',
      intro:
        'Muchos viajeros hacen un día de vino y otro de estos. El auto llega a todas partes de la ciudad — y a muchos lugares más.',
    },
    experiences: [
      {
        id: 'mountain-aconcagua',
        title: 'Aconcagua y Alta Montaña',
        blurb:
          'Día completo por la cordillera: Puente del Inca, mirador del Aconcagua y Valle de Uspallata. Paisaje puro, sin necesidad de vino.',
        image: '/img/exp-aconcagua.webp',
        duration: '~10 horas',
      },
      {
        id: 'horseback',
        title: 'Cabalgata en precordillera',
        blurb:
          'Te dejo en una estancia, cabalgás dos horas hacia los Andes y te busco para seguir con almuerzo.',
        image: '/img/scene-horseback-andes.webp',
        duration: '~6 horas',
      },
      {
        id: 'termas',
        title: 'Termas de Cacheuta',
        blurb:
          'Media jornada relajada en las piscinas termales a 40 minutos de la ciudad. Perfecto después de un día intenso de vino.',
        image: '/img/place-puente-inca.webp',
        duration: '~5 horas',
      },
      {
        id: 'mixed-day',
        title: 'Un día a medida',
        blurb:
          'Una bodega, una parada de montaña y un almuerzo largo. Para muchos viajeros, ese es el día que más recuerdan.',
        image: '/img/exp-winery-architecture.webp',
        duration: 'Día completo',
      },
    ],
    gallerySection: {
      eyebrow: 'Días recientes',
      headingBefore: 'Algunos',
      headingAccent: 'pasajeros',
      headingAfter: ', algunos rincones de Mendoza.',
    },
    gallery: [
      { src: '/img/guests-cellar.webp', alt: 'Pasajeros degustando vino desde una barrica en una bodega de Mendoza' },
      { src: '/img/guests-trapiche.webp', alt: 'Pareja en Bodega Trapiche' },
      { src: '/img/guests-tupungato.webp', alt: 'Pareja en el cartel de Tupungato con los Andes al fondo' },
      { src: '/img/guests-horseback.webp', alt: 'Grupo cabalgando hacia los Andes' },
      { src: '/img/guests-chachingo.webp', alt: 'Pareja en Bodega Chachingo' },
      { src: '/img/guests-carmine.webp', alt: 'Pareja en Bodega Carmine Granata' },
    ],
    processSection: {
      eyebrow: 'Cómo funciona',
      headingBefore: 'Del',
      headingAccent: 'primer mensaje',
      headingAfter: 'a la última bodega.',
    },
    process: [
      {
        n: '01',
        title: 'Contame tus fechas',
        body: 'Un WhatsApp o email corto alcanza. Respondo el mismo día, normalmente dentro de una hora.',
      },
      {
        n: '02',
        title: 'Diseñamos el día',
        body: 'Te mando opciones según tus gustos: tintos potentes, biodinámicos, arquitectura, grandes almuerzos, y reservo todo.',
      },
      {
        n: '03',
        title: 'Yo manejo, vos degustás',
        body: 'Búsqueda puerta a puerta, ritmo cómodo y sin grupo de desconocidos. Podés pagar en efectivo el día del viaje o con tarjeta antes.',
      },
    ],
    trustSection: {
      eyebrow: 'Confianza primero',
      headingBefore: 'Datos claros antes de',
      headingAccent: 'reservar.',
      intro:
        'Las mejores empresas de tours en Mendoza hacen que la logística se sienta invisible. Taxi Wine mantiene esa promesa, con una diferencia visible: un auto habilitado y regulado es el servicio.',
    },
    trustPoints: [
      {
        eyebrow: 'Auto habilitado',
        title: 'Patente AH 207 UI',
        body:
          'El auto está habilitado para turismo en Mendoza: regulado, asegurado y fácil de identificar cuando llega.',
      },
      {
        eyebrow: 'Privado por defecto',
        title: 'Solo tu grupo',
        body:
          'Sin bus compartido, sin desconocidos y sin tour fijo con micrófono. La ruta se arma alrededor de tus tiempos y gustos.',
      },
      {
        eyebrow: 'Plan claro',
        title: 'Bodegas antes que ruedas',
        body:
          'El día queda confirmado antes de salir: región, reservas, almuerzo, precio y tiempos reales de manejo.',
      },
    ],
    faqSection: {
      eyebrow: 'Preguntas',
      headingBefore: 'Preguntas y',
      headingAccent: 'respuestas.',
      intro: '¿Algo más? WhatsApp es la forma más rápida de contactarme.',
    },
    faqs: [
      {
        q: '¿Cómo funciona la reserva?',
        a: 'Mandame un WhatsApp o email con tus fechas y la idea que tenés. Respondo el mismo día con disponibilidad, una ruta sugerida y precio final.',
      },
      {
        q: '¿El auto está habilitado y asegurado?',
        a: 'Sí. Manejo un auto habilitado para turismo en Mendoza (patente AH 207 UI): registrado oficialmente, asegurado y regulado. Para vos significa papeles en regla, precio justo y sin el sobreprecio de las vans turísticas informales.',
      },
      {
        q: '¿Cuántas personas entran?',
        a: 'Hasta 4 pasajeros cómodos en el auto, más equipaje normal de una salida de día. ¿Son un grupo más grande? Consultame — puedo organizar traslados para más de cuatro personas.',
      },
      {
        q: '¿Tengo que pagar por adelantado?',
        a: 'No para la mayoría de los servicios. Podés pagar en efectivo el día del viaje (USD o pesos al cambio acordado). Si preferís, también puedo enviar un link de pago con tarjeta antes.',
      },
      {
        q: '¿Qué medios de pago aceptás?',
        a: 'Efectivo (USD o ARS), transferencia y tarjeta mediante link seguro. Las propinas se agradecen pero no son obligatorias.',
      },
      {
        q: '¿Podés reservar las bodegas por mí?',
        a: 'Sí, y lo recomiendo. La mayoría de las buenas bodegas pide reserva y los mejores horarios se ocupan con semanas de anticipación.',
      },
      {
        q: 'No sé qué bodegas elegir.',
        a: 'Es lo más común. Después de una conversación corta sobre lo que tomás, tu presupuesto y el tipo de día que querés, te mando una lista clara con un plan.',
      },
      {
        q: '¿Hacés paseos de montaña, no solo vino?',
        a: 'Sí. Aconcagua, Puente del Inca, Termas de Cacheuta, cabalgatas. Muchos viajeros hacen un día de vino y un día de montaña.',
      },
      {
        q: '¿Hablás inglés?',
        a: 'Sí, fluido. También hablo español nativo y algo de portugués.',
      },
    ],
    contactSection: {
      eyebrow: 'Planeá tu día',
      headingBefore: 'Contame tus',
      headingAccent: 'fechas.',
      intro:
        'Con unas pocas líneas alcanza: cuándo llegás, cuántos son y qué tipo de día quieren. Respondo el mismo día con un plan y precio.',
      whatsapp: 'WhatsApp',
      email: 'Email',
      instagram: 'Instagram',
      bookingRequest: 'Solicitud de reserva',
      nameLabel: 'Tu nombre',
      phoneLabel: 'WhatsApp / teléfono',
      datesLabel: 'Fechas de viaje',
      datesPlaceholder: 'ej. 12-15 de marzo',
      guestsLabel: 'Pasajeros',
      guestsHelp: 'El auto lleva hasta 4 pasajeros — consultá por grupos más grandes.',
      messageLabel: '¿Qué tipo de día imaginás?',
      messagePlaceholder: 'Almuerzo con vistas, vinos biodinámicos, primera vez en Mendoza, etc.',
      submit: 'Enviar solicitud',
      formNote: 'Este formulario abre tu app de email. Para respuesta rápida, usá WhatsApp.',
      whatsappMessage: 'Hola, quiero planear un día de vino en Mendoza.',
      emailSubject: 'Consulta por día de vino en Mendoza',
    },
    footer: {
      siteLabel: 'Sitio',
      contactLabel: 'Contacto',
      made: 'Hecho con cuidado, en Mendoza',
      languages: 'Idiomas',
      howItWorks: 'Cómo funciona',
    },
    whatsappFloat: {
      label: 'Abrir chat de WhatsApp',
      text: 'WhatsApp',
      message: 'Hola, quiero planear un día de vino en Mendoza.',
    },
  },

  pt: {
    tagline: 'O vinho, do seu jeito',
    meta: {
      title: 'Taxi Wine — O vinho, do seu jeito',
      description:
        'Passeios privados de vinho em Mendoza com um motorista de confiança. Preços fixos em USD, inglês fluente e conhecimento local real. Luján, Maipú e Valle de Uco.',
    },
    nav: {
      services: 'Serviços',
      routes: 'Rotas',
      experiences: 'Experiências',
      about: 'Sobre',
      faq: 'FAQ',
      book: 'Reservar',
    },
    licensePlate: {
      prefix: 'Mendoza · Turismo',
      aria: 'Carro habilitado para turismo em Mendoza',
    },
    hero: {
      titleTop: 'Seu motorista particular em Mendoza.',
      titleAccent: 'O vinho, do seu jeito.',
      descriptionBefore:
        'Um carro confortável habilitado para turismo em Mendoza — regulado e segurado. Um motorista, preços fixos em dólares, sem taxa de tour de luxo — só ',
      descriptionEmphasis: 'o dia que você realmente queria',
      descriptionAfter: ', guiado por alguém que mora aqui.',
      ctaPrimary: 'Ver serviços e preços',
      ctaSecondary: 'Planejar meu dia',
      stats: [
        { eyebrow: 'Preço', value: 'USD fixo' },
        { eyebrow: 'Capacidade', value: 'Até 4' },
        { eyebrow: 'Idiomas', value: 'EN · ES · PT' },
        { eyebrow: 'Resposta', value: 'Mesmo dia' },
      ],
      mainImageAlt: 'Fileiras de vinhedos com os Andes nevados ao fundo',
      taxiImageAlt: 'O Chevrolet Onix da Taxi Wine com os Andes ao fundo',
    },
    servicesSection: {
      eyebrow: 'O que ofereço',
      heading: 'Quatro formas de',
      headingAccent: 'viajar comigo.',
      intro:
        'Cada preço é pelo carro inteiro, não por pessoa: um casal paga o mesmo que um grupo de quatro. Degustações e almoços são pagos diretamente em cada vinícola. Vão em grupo maior? É só pedir — posso organizar transporte para mais de quatro pessoas.',
      details: 'Detalhes',
      included: 'Incluído',
      notIncluded: 'Não incluído',
      book: 'Reservar',
      whatsappInterest: 'Olá, tenho interesse em:',
    },
    services: [
      {
        id: 'lujan-maipu',
        eyebrow: 'Dia inteiro',
        title: 'Luján e Maipú',
        duration: 'Até 8 horas',
        price: 113,
        seats: '1-4 passageiros',
        blurb:
          'Três vinícolas clássicas a menos de 40 minutos da cidade. Ideal para um primeiro dia em Mendoza.',
        image: '/img/scene-vineyard-andes.webp',
        includes: [
          'Carro habilitado para turismo e motorista por 8 horas',
          'Busca e retorno no seu hotel',
          'Água, ar-condicionado, inglês fluente',
          'Ajuda para reservar vinícolas e almoço',
        ],
        excludes: [
          'Degustações e almoço',
          'Cada hora extra: USD 14',
        ],
      },
      {
        id: 'uco-valley',
        eyebrow: 'Dia inteiro',
        title: 'Valle de Uco',
        duration: 'Até 10 horas',
        price: 146,
        seats: '1-4 passageiros',
        blurb:
          'O vale de altitude que todo mundo quer conhecer: cerca de 1,5 h por trecho, vinícolas de nível mundial e vistas panorâmicas.',
        image: '/img/scene-vineyard-winter.webp',
        includes: [
          'Carro habilitado para turismo e motorista por 10 horas',
          'Busca e retorno no seu hotel',
          'Água, ar-condicionado, inglês fluente',
          'Ajuda para reservar vinícolas e almoço',
        ],
        excludes: [
          'Degustações e almoço',
          'Cada hora extra: USD 14',
        ],
      },
      {
        id: 'hourly',
        eyebrow: 'Flexível',
        title: 'Por hora',
        duration: 'Mínimo 2 horas',
        price: 18,
        priceSuffix: '/h',
        seats: '1-4 passageiros',
        blurb:
          'Para saídas curtas: uma vinícola, jantar, passeio, compras ou compromissos. Você paga apenas pelo tempo usado.',
        image: '/img/place-tasting-room.webp',
        includes: [
          'Carro habilitado e motorista',
          'Água e ar-condicionado',
          'Recomendações locais, se quiser',
        ],
        excludes: ['Fora da Cidade de Mendoza: orçamento individual'],
      },
      {
        id: 'airport',
        eyebrow: 'Transfer',
        title: 'Transfer aeroporto (MDZ)',
        duration: 'Direto',
        price: 23,
        seats: '1-4 passageiros',
        blurb:
          'Recepção na chegada, ajuda com bagagem e traslado direto até sua hospedagem. Tarifa fixa, de dia ou de noite.',
        image: '/img/car-rear.jpg',
        includes: [
          'Transfer privado de ida',
          'Ajuda com bagagem',
          'Acompanhamento do voo: sem cobrança se atrasar',
        ],
        excludes: ['Destinos fora da Cidade de Mendoza: consultar'],
      },
    ],
    routesSection: {
      eyebrow: 'Rotas do vinho',
      heading: 'Mendoza fica mais fácil quando',
      headingAccent: 'o dia tem forma.',
      intro:
        'A maioria dos viajantes escolhe entre três regiões. Eu ajudo você a escolher a que combina com seu horário, almoço e vontade de estrada.',
      rhythmLabel: 'Ritmo típico',
      ask: 'Perguntar sobre',
      imageAltSuffix: 'rota de vinho em Mendoza',
      whatsappInterest: 'Olá, tenho interesse em um dia de vinho em',
    },
    routes: [
      {
        id: 'lujan-de-cuyo',
        eyebrow: 'Clássico perto',
        title: 'Luján de Cuyo',
        drive: '25-40 min da Cidade de Mendoza',
        bestFor:
          'Para quem visita Mendoza pela primeira vez e quer Malbec sério, vinícolas históricas e um almoço tranquilo sem passar o dia inteiro na estrada.',
        image: '/img/place-lunch-table.webp',
        rhythm: [
          'Busca pela manhã no hotel ou apartamento',
          'Duas visitas a vinícolas com tempo entre reservas',
          'Almoço longo em Chacras, Vistalba, Agrelo ou perto',
          'Parada opcional em loja de vinhos antes de voltar à cidade',
        ],
      },
      {
        id: 'maipu',
        eyebrow: 'Vinhas antigas',
        title: 'Maipú',
        drive: '25-45 min da Cidade de Mendoza',
        bestFor:
          'Um dia mais tradicional e acolhedor: vinhedos antigos, azeites, vinícolas familiares e menos tempo dentro do carro.',
        image: '/img/guests-trapiche.webp',
        rhythm: [
          'Busca tranquila, com saída mais tarde se preferir',
          'Visita e degustação em uma vinícola clássica',
          'Parada de azeite ou pequeno produtor se fizer sentido',
          'Almoço e uma última degustação, ou retorno',
        ],
      },
      {
        id: 'valle-de-uco',
        eyebrow: 'Alta altitude',
        title: 'Valle de Uco',
        drive: 'Cerca de 1,5 h por trecho',
        bestFor:
          'Para viajantes que querem vista de montanha, arquitetura moderna, vinhos de altitude e um ritmo de dia inteiro.',
        image: '/img/scene-vineyard-winter.webp',
        rhythm: [
          'Saída cedo para uma viagem tranquila',
          'Primeira degustação com vista para os Andes',
          'Almoço em vinícola com tempo para aproveitar',
          'Visita à tarde, parada em loja de vinhos e retorno a Mendoza',
        ],
      },
    ],
    about: {
      eyebrow: 'Sobre',
      headingBefore: 'Oi, eu sou',
      headingAfter: 'A empresa inteira.',
      paragraphs: [
        'Nasci em Mendoza e passo meus dias levando visitantes entre a cidade, os vinhedos e a montanha. O trabalho é parte logística, parte conselho local: quais rotas fazem sentido, onde deixar tempo para almoçar e quando uma viagem longa realmente vale a pena.',
        'Dirijo um carro confortável habilitado para turismo em Mendoza — registrado oficialmente, segurado e com preço justo. Sem van turística informal e sem preço de tour de luxo. Você tem o cuidado e a atenção de um motorista particular, com toda a papelada em ordem.',
        'Na maioria dos dias levo um casal, às vezes um grupo pequeno, às vezes uma pessoa sozinha que não quer entrar em um ônibus. Não há frota, central ou troca de motorista: quando você reserva a Taxi Wine, sou eu que apareço.',
      ],
      facts: [
        { label: 'Idiomas', value: 'EN · ES · PT' },
        { label: 'Veículo', value: 'Chevrolet Onix' },
        { label: 'Capacidade', value: '4 + bagagem' },
      ],
      imageAlt: 'Matías com visitantes degustando vinho em uma cave de Mendoza',
      taxiImageAlt: 'O veículo da Taxi Wine estacionado em uma vinícola de Mendoza',
    },
    whyChoose: {
      eyebrow: 'Por que Taxi Wine',
      headingBefore: 'O que você tem com',
      headingAccent: 'um motorista privado',
      headingAfter: 'e não com um ônibus.',
    },
    pillars: [
      {
        title: 'Um só motorista: eu.',
        body: 'Você reserva a pessoa que aparece. Sem call center, sem frota rotativa, sem troca no meio do caminho.',
      },
      {
        title: 'Um carro habilitado para turismo.',
        body: 'Carro confortável habilitado para turismo (placa AH 207 UI), segurado e regulado. Sem van informal e sem preço de tour de luxo.',
      },
      {
        title: 'Inglês fluente.',
        body: 'Conversa confortável e respostas reais sobre vinho, comida e a região.',
      },
      {
        title: 'Preços fixos em USD.',
        body: 'O que você vê é o que paga. Sem tarifa dinâmica, taxa de combustível ou comissão escondida nas degustações.',
      },
    ],
    experiencesSection: {
      eyebrow: 'Além do vinho',
      headingBefore: 'Quando o dia pede',
      headingAccent: 'montanha, não Malbec.',
      intro:
        'Muitos viajantes fazem um dia de vinho e outro desses. O carro vai a todos os lugares da cidade — e a muitos além dela.',
    },
    experiences: [
      {
        id: 'mountain-aconcagua',
        title: 'Aconcágua e Alta Montanha',
        blurb:
          'Dia inteiro pelos Andes: Puente del Inca, mirante do Aconcágua e Vale de Uspallata. Paisagem pura, sem precisar de vinho.',
        image: '/img/exp-aconcagua.webp',
        duration: '~10 horas',
      },
      {
        id: 'horseback',
        title: 'Cavalgada nos contrafortes',
        blurb:
          'Eu deixo você em uma estância, você cavalga duas horas rumo aos Andes e depois busco para o almoço.',
        image: '/img/scene-horseback-andes.webp',
        duration: '~6 horas',
      },
      {
        id: 'termas',
        title: 'Termas de Cacheuta',
        blurb:
          'Meio dia relaxado nas piscinas termais a 40 minutos da cidade. Perfeito depois de um dia intenso de vinho.',
        image: '/img/place-puente-inca.webp',
        duration: '~5 horas',
      },
      {
        id: 'mixed-day',
        title: 'Um dia sob medida',
        blurb:
          'Uma vinícola, uma parada de montanha e um almoço longo. Para muitos viajantes, esse é o dia mais lembrado.',
        image: '/img/exp-winery-architecture.webp',
        duration: 'Dia inteiro',
      },
    ],
    gallerySection: {
      eyebrow: 'Dias recentes',
      headingBefore: 'Alguns',
      headingAccent: 'visitantes',
      headingAfter: ', alguns cantos de Mendoza.',
    },
    gallery: [
      { src: '/img/guests-cellar.webp', alt: 'Visitantes degustando vinho direto de uma barrica em uma vinícola de Mendoza' },
      { src: '/img/guests-trapiche.webp', alt: 'Casal na Bodega Trapiche' },
      { src: '/img/guests-tupungato.webp', alt: 'Casal no letreiro de Tupungato com os Andes ao fundo' },
      { src: '/img/guests-horseback.webp', alt: 'Grupo cavalgando em direção aos Andes' },
      { src: '/img/guests-chachingo.webp', alt: 'Casal na Bodega Chachingo' },
      { src: '/img/guests-carmine.webp', alt: 'Casal na Bodega Carmine Granata' },
    ],
    processSection: {
      eyebrow: 'Como funciona',
      headingBefore: 'Da',
      headingAccent: 'primeira mensagem',
      headingAfter: 'à última vinícola.',
    },
    process: [
      {
        n: '01',
        title: 'Conte suas datas',
        body: 'Um WhatsApp ou email curto basta. Respondo no mesmo dia, normalmente dentro de uma hora.',
      },
      {
        n: '02',
        title: 'Desenhamos o dia',
        body: 'Envio opções de vinícolas de acordo com seu gosto: tintos intensos, biodinâmicos, arquitetura, grandes almoços, e reservo tudo.',
      },
      {
        n: '03',
        title: 'Eu dirijo, você degusta',
        body: 'Busca porta a porta, ritmo confortável e sem grupo de desconhecidos. Pague em dinheiro no dia, ou com cartão antes.',
      },
    ],
    trustSection: {
      eyebrow: 'Confiança primeiro',
      headingBefore: 'Fatos claros antes de',
      headingAccent: 'reservar.',
      intro:
        'As melhores empresas de tours em Mendoza fazem a logística parecer invisível. A Taxi Wine mantém essa promessa, com uma diferença visível: um carro habilitado e regulado é o serviço.',
    },
    trustPoints: [
      {
        eyebrow: 'Carro habilitado',
        title: 'Placa AH 207 UI',
        body:
          'O carro é habilitado para turismo em Mendoza: regulado, segurado e fácil de identificar quando chega.',
      },
      {
        eyebrow: 'Privado por padrão',
        title: 'Só o seu grupo',
        body:
          'Sem ônibus compartilhado, sem desconhecidos e sem roteiro fixo com microfone. A rota é construída em torno do seu tempo e gosto.',
      },
      {
        eyebrow: 'Planejamento claro',
        title: 'Vinícolas antes das rodas',
        body:
          'O dia fica confirmado antes da saída: região, reservas, almoço, preço e tempos reais de deslocamento.',
      },
    ],
    faqSection: {
      eyebrow: 'Perguntas',
      headingBefore: 'Perguntas e',
      headingAccent: 'respostas.',
      intro: 'Algo mais? WhatsApp é a forma mais rápida de falar comigo.',
    },
    faqs: [
      {
        q: 'Como funciona a reserva?',
        a: 'Envie um WhatsApp ou email com suas datas e o que você imagina. Respondo no mesmo dia com disponibilidade, uma rota sugerida e preço final.',
      },
      {
        q: 'O carro é habilitado e segurado?',
        a: 'Sim. Dirijo um carro habilitado para turismo em Mendoza (placa AH 207 UI): registrado oficialmente, segurado e regulado. Para você, significa papelada em ordem, preço justo e sem o acréscimo das vans turísticas informais.',
      },
      {
        q: 'Quantas pessoas cabem?',
        a: 'Até 4 passageiros confortavelmente no carro, mais bagagem normal de passeio. Vão em grupo maior? É só pedir — posso organizar transporte para mais de quatro pessoas.',
      },
      {
        q: 'Preciso pagar antecipado?',
        a: 'Não para a maioria dos serviços. Você pode pagar em dinheiro no dia (USD ou pesos na cotação combinada). Se preferir, também posso enviar um link de cartão antes.',
      },
      {
        q: 'Quais formas de pagamento você aceita?',
        a: 'Dinheiro (USD ou ARS), transferência e cartão por link seguro. Gorjetas são bem-vindas, mas nunca obrigatórias.',
      },
      {
        q: 'Você pode reservar as vinícolas para mim?',
        a: 'Sim, e recomendo. A maioria das boas vinícolas exige reserva e os melhores horários lotam com semanas de antecedência.',
      },
      {
        q: 'Não sei quais vinícolas escolher.',
        a: 'Isso é o mais comum. Depois de uma conversa rápida sobre o que você bebe, orçamento e o tipo de dia que quer, envio uma lista curta com um plano claro.',
      },
      {
        q: 'Você faz passeios de montanha, não só vinho?',
        a: 'Sim. Aconcágua, Puente del Inca, Termas de Cacheuta, cavalgadas. Muitos viajantes fazem um dia de vinho e um dia de montanha.',
      },
      {
        q: 'Você fala português?',
        a: 'Falo espanhol nativo, inglês fluente e um pouco de português. Também consigo organizar tudo por mensagem com calma.',
      },
    ],
    contactSection: {
      eyebrow: 'Planeje seu dia',
      headingBefore: 'Conte suas',
      headingAccent: 'datas.',
      intro:
        'Poucas linhas bastam: quando você chega, quantas pessoas são e que tipo de dia querem. Respondo no mesmo dia com plano e preço.',
      whatsapp: 'WhatsApp',
      email: 'Email',
      instagram: 'Instagram',
      bookingRequest: 'Pedido de reserva',
      nameLabel: 'Seu nome',
      phoneLabel: 'WhatsApp / telefone',
      datesLabel: 'Datas da viagem',
      datesPlaceholder: 'ex. 12-15 de março',
      guestsLabel: 'Passageiros',
      guestsHelp: 'O carro leva até 4 passageiros — pergunte sobre grupos maiores.',
      messageLabel: 'Que tipo de dia você imagina?',
      messagePlaceholder: 'Almoço com vista, vinhos biodinâmicos, primeira vez em Mendoza, etc.',
      submit: 'Enviar pedido',
      formNote: 'Este formulário abre seu app de email. Para resposta rápida, use WhatsApp.',
      whatsappMessage: 'Olá, quero planejar um dia de vinho em Mendoza.',
      emailSubject: 'Consulta sobre dia de vinho em Mendoza',
    },
    footer: {
      siteLabel: 'Site',
      contactLabel: 'Contato',
      made: 'Feito com cuidado, em Mendoza',
      languages: 'Idiomas',
      howItWorks: 'Como funciona',
    },
    whatsappFloat: {
      label: 'Abrir conversa no WhatsApp',
      text: 'WhatsApp',
      message: 'Olá, quero planejar um dia de vinho em Mendoza.',
    },
  },
} as const;

export function getContent(locale: Locale = defaultLocale) {
  return content[locale] ?? content[defaultLocale];
}
