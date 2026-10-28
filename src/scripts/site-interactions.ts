import { bookingMessage, formatOfferDate, offerDescription, offerTripDates, whatsappUrl, type Language } from '../booking';
import { activePromotionsForService, discountedPrice, formatPrice, mendozaDate, promotionForService, type Promotion } from '../promotions';

const section = document.querySelector<HTMLElement>('[data-promotions]');
const form = document.querySelector<HTMLFormElement>('[data-booking-form]');

function language(value: string | undefined): Language {
  return value === 'es' || value === 'pt' ? value : 'en';
}

function detailsFor(offer: Promotion, price: number | undefined, suffix: string, source: HTMLElement) {
  return {
    offer, price, suffix,
    locale: language(source.dataset.locale),
    offerLabel: source.dataset.promotionLabel ?? '',
    priceLabel: source.dataset.promotionPriceLabel ?? '',
    untilLabel: source.dataset.untilLabel ?? '',
    offLabel: source.dataset.offLabel ?? '',
    tripDatesLabel: source.dataset.tripDatesLabel ?? '',
  };
}

function offerSummary(offer: Promotion, locale: Language, source: HTMLElement): string {
  return [
    `${offer.name[locale]} · ${offer.percentOff}% ${source.dataset.offLabel}`,
    offerTripDates(offer, locale, source.dataset.tripDatesLabel ?? ''),
    `${source.dataset.untilLabel} ${formatOfferDate(offer.endDate, locale)}`,
  ].filter(Boolean).join(' · ');
}

function updatePromotions() {
  const today = mendozaDate();

  if (section) {
    const locale = language(section.dataset.locale);
    const banner = section.querySelector<HTMLElement>('[data-promotion-banner]');
    const list = section.querySelector<HTMLElement>('[data-promotion-list]');
    const active = new Map<string, { offer: Promotion; services: string[] }>();

    section.querySelectorAll<HTMLElement>('[data-service-card]').forEach((card) => {
      const id = card.dataset.serviceId ?? '';
      const title = card.dataset.serviceName ?? '';
      const price = Number(card.dataset.servicePrice);
      const suffix = card.dataset.serviceSuffix ?? '';
      const availableOffers = activePromotionsForService(id, today);
      const featuredOffer = availableOffers.reduce<Promotion | undefined>(
        (best, current) => !best || current.percentOff > best.percentOff ? current : best, undefined,
      );
      const currentPrice = card.querySelector<HTMLElement>('[data-current-price]');
      const originalPrice = card.querySelector<HTMLElement>('[data-original-price]');
      const conditionalPrice = card.querySelector<HTMLElement>('[data-conditional-price]');
      const offerText = card.querySelector<HTMLElement>('[data-service-offer]');
      const link = card.querySelector<HTMLAnchorElement>('[data-service-whatsapp]');

      if (currentPrice) currentPrice.textContent = `$${formatPrice(featuredOffer ? discountedPrice(price, featuredOffer.percentOff) : price)}`;
      if (originalPrice) originalPrice.hidden = !featuredOffer;
      if (conditionalPrice) {
        conditionalPrice.hidden = !featuredOffer?.travelStartDate;
      }
      if (offerText) {
        offerText.hidden = availableOffers.length === 0;
        offerText.textContent = availableOffers.map((item) => offerSummary(item, locale, section)).join(' | ');
      }
      if (link) {
        const intro = `${section.dataset.whatsappInterest} ${title}.`;
        const message = bookingMessage(intro, [], featuredOffer ? detailsFor(featuredOffer, price, suffix, section) : undefined);
        link.href = whatsappUrl(section.dataset.whatsapp ?? '', message);
      }
      availableOffers.forEach((item) => {
        const group = active.get(item.id) ?? { offer: item, services: [] };
        group.services.push(title);
        active.set(item.id, group);
      });
    });

    if (banner && list) {
      list.replaceChildren();
      active.forEach(({ offer, services }) => {
        const item = document.createElement('li');
        item.textContent = `${offerSummary(offer, locale, section)} — ${services.join(', ')}`;
        list.append(item);
      });
      banner.hidden = active.size === 0;
    }
  }

  if (form) {
    const select = form.elements.namedItem('service') as HTMLSelectElement | null;
    const option = select?.selectedOptions[0];
    const date = (form.elements.namedItem('dates') as HTMLInputElement | null)?.value ?? '';
    const preview = form.querySelector<HTMLElement>('[data-booking-offer]');
    const serviceId = option?.value ?? '';
    const availableOffers = activePromotionsForService(serviceId, today);
    const offer = promotionForService(serviceId, today, date);
    if (preview) {
      const restrictedOffer = availableOffers.some((item) => item.travelStartDate);
      const hint = restrictedOffer ? (date ? form.dataset.notEligible : form.dataset.chooseDate) : '';
      preview.hidden = !offer && !hint;
      preview.textContent = offer
        ? offerDescription(detailsFor(offer, serviceId ? Number(option?.dataset.price) : undefined, option?.dataset.suffix ?? '', form)).replaceAll('\n', ' · ')
        : hint ?? '';
    }
  }
}

if (form) {
  form.addEventListener('change', updatePromotions);
  form.querySelector('[name="dates"]')?.addEventListener('input', updatePromotions);
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const values = new FormData(form);
    const value = (name: string) => String(values.get(name) ?? '');
    const select = form.elements.namedItem('service') as HTMLSelectElement;
    const option = select.selectedOptions[0];
    const tripDate = value('dates');
    const offer = promotionForService(option?.value ?? '', mendozaDate(), tripDate);
    const message = bookingMessage(form.dataset.intro ?? '', [
      [form.dataset.nameLabel ?? '', value('name')],
      [form.dataset.phoneLabel ?? '', value('phone')],
      [form.dataset.serviceLabel ?? '', option?.value ? option.text : ''],
      [form.dataset.datesLabel ?? '', tripDate ? formatOfferDate(tripDate, language(form.dataset.locale)) : ''],
      [form.dataset.guestsLabel ?? '', value('guests')],
      [form.dataset.messageLabel ?? '', value('message')],
    ], offer ? detailsFor(offer, option?.value ? Number(option.dataset.price) : undefined, option?.dataset.suffix ?? '', form) : undefined);

    window.location.assign(whatsappUrl(form.dataset.whatsapp ?? '', message));
  });
  const submit = form.querySelector<HTMLButtonElement>('button[type="submit"]');
  if (submit) submit.disabled = false;
}

updatePromotions();
window.addEventListener('pageshow', updatePromotions);
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'visible') updatePromotions();
});
window.setInterval(updatePromotions, 60_000);
