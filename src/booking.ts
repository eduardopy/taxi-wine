import { discountedPrice, formatPrice, type Promotion } from './promotions.ts';

export type Language = 'en' | 'es' | 'pt';
type OfferDetails = {
  offer: Promotion;
  locale: Language;
  price?: number;
  suffix: string;
  offerLabel: string;
  priceLabel: string;
  untilLabel: string;
  offLabel: string;
  tripDatesLabel: string;
};

export function formatOfferDate(date: string, locale: Language): string {
  const language = { en: 'en-US', es: 'es-AR', pt: 'pt-BR' }[locale];
  return new Intl.DateTimeFormat(language, {
    timeZone: 'UTC', year: 'numeric', month: 'short', day: 'numeric',
  }).format(new Date(`${date}T12:00:00Z`));
}

export function offerDescription(details: OfferDetails): string {
  const { offer, locale, price, suffix, offerLabel, priceLabel, untilLabel, offLabel, tripDatesLabel } = details;
  return [
    `${offerLabel}: ${offer.name[locale]} — ${offer.percentOff}% ${offLabel}`,
    price === undefined ? '' : `${priceLabel}: USD ${formatPrice(discountedPrice(price, offer.percentOff))}${suffix}`,
    offerTripDates(offer, locale, tripDatesLabel),
    `${untilLabel}: ${formatOfferDate(offer.endDate, locale)}`,
  ].filter(Boolean).join('\n');
}

export function offerTripDates(offer: Promotion, locale: Language, label: string): string {
  return offer.travelStartDate && offer.travelEndDate
    ? `${label}: ${formatOfferDate(offer.travelStartDate, locale)} – ${formatOfferDate(offer.travelEndDate, locale)}`
    : '';
}

export function bookingMessage(intro: string, fields: Array<[string, string]>, offer?: OfferDetails): string {
  const lines = fields.filter(([, value]) => value.trim()).map(([label, value]) => `${label}: ${value.trim()}`);
  return [intro, lines.join('\n'), offer ? offerDescription(offer) : ''].filter(Boolean).join('\n\n');
}

export function whatsappUrl(phone: string, message: string): string {
  const url = new URL(`https://wa.me/${phone}`);
  url.searchParams.set('text', message);
  return url.toString();
}
