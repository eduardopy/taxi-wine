import { bookingMessage, formatOfferDate, offerDescription, whatsappUrl, type Language } from '../booking';
import { discountedPrice, formatPrice, mendozaDate, promotionForService, type Promotion } from '../promotions';

const section = document.querySelector<HTMLElement>('[data-promotions]');
const form = document.querySelector<HTMLFormElement>('[data-booking-form]');

function language(value: string | undefined): Language {
  return value === 'es' || value === 'pt' ? value : 'en';
}

function detailsFor(offer: Promotion, price: number, suffix: string, source: HTMLElement) {
  return {
    offer, price, suffix,
    locale: language(source.dataset.locale),
    offerLabel: source.dataset.promotionLabel ?? '',
    priceLabel: source.dataset.promotionPriceLabel ?? '',
    untilLabel: source.dataset.untilLabel ?? '',
    offLabel: source.dataset.offLabel ?? '',
  };
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
      const offer = promotionForService(id, today);
      const currentPrice = card.querySelector<HTMLElement>('[data-current-price]');
      const originalPrice = card.querySelector<HTMLElement>('[data-original-price]');
      const offerText = card.querySelector<HTMLElement>('[data-service-offer]');
      const link = card.querySelector<HTMLAnchorElement>('[data-service-whatsapp]');

      if (currentPrice) currentPrice.textContent = `$${formatPrice(offer ? discountedPrice(price, offer.percentOff) : price)}`;
      if (originalPrice) originalPrice.hidden = !offer;
      if (offerText) {
        offerText.hidden = !offer;
        offerText.textContent = offer
          ? `${offer.name[locale]} · ${offer.percentOff}% ${section.dataset.offLabel} · ${section.dataset.untilLabel} ${formatOfferDate(offer.endDate, locale)}`
          : '';
      }
      if (link) {
        const intro = `${section.dataset.whatsappInterest} ${title}.`;
        const message = bookingMessage(intro, [], offer ? detailsFor(offer, price, suffix, section) : undefined);
        link.href = whatsappUrl(section.dataset.whatsapp ?? '', message);
      }
      if (offer) {
        const group = active.get(offer.id) ?? { offer, services: [] };
        group.services.push(title);
        active.set(offer.id, group);
      }
    });

    if (banner && list) {
      list.replaceChildren();
      active.forEach(({ offer, services }) => {
        const item = document.createElement('li');
        item.textContent = `${offer.name[locale]} · ${offer.percentOff}% ${section.dataset.offLabel} · ${section.dataset.untilLabel} ${formatOfferDate(offer.endDate, locale)} — ${services.join(', ')}`;
        list.append(item);
      });
      banner.hidden = active.size === 0;
    }
  }

  if (form) {
    const select = form.elements.namedItem('service') as HTMLSelectElement | null;
    const option = select?.selectedOptions[0];
    const preview = form.querySelector<HTMLElement>('[data-booking-offer]');
    const offer = option?.value ? promotionForService(option.value, today) : undefined;
    if (preview) {
      preview.hidden = !offer;
      preview.textContent = offer && option
        ? offerDescription(detailsFor(offer, Number(option.dataset.price), option.dataset.suffix ?? '', form)).replaceAll('\n', ' · ')
        : '';
    }
  }
}

if (form) {
  form.addEventListener('change', updatePromotions);
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const values = new FormData(form);
    const value = (name: string) => String(values.get(name) ?? '');
    const select = form.elements.namedItem('service') as HTMLSelectElement;
    const option = select.selectedOptions[0];
    const offer = option?.value ? promotionForService(option.value, mendozaDate()) : undefined;
    const message = bookingMessage(form.dataset.intro ?? '', [
      [form.dataset.nameLabel ?? '', value('name')],
      [form.dataset.phoneLabel ?? '', value('phone')],
      [form.dataset.serviceLabel ?? '', option?.value ? option.text : ''],
      [form.dataset.datesLabel ?? '', value('dates')],
      [form.dataset.guestsLabel ?? '', value('guests')],
      [form.dataset.messageLabel ?? '', value('message')],
    ], offer && option ? detailsFor(offer, Number(option.dataset.price), option.dataset.suffix ?? '', form) : undefined);

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
