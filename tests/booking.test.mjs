import test from 'node:test';
import assert from 'node:assert/strict';
import { bookingMessage, whatsappUrl } from '../src/booking.ts';
import { activePromotionsForService, discountedPrice, mendozaDate, promotionForService, promotions, validatePromotions } from '../src/promotions.ts';

const offer = {
  id: 'spring',
  name: { en: 'Spring offer', es: 'Oferta de primavera', pt: 'Oferta de primavera' },
  startDate: '2027-09-01',
  endDate: '2027-09-30',
  percentOff: 10,
  serviceIds: ['lujan-maipu'],
};

test('promotion dates are inclusive, scoped to the selected service, and do not stack', () => {
  const stronger = { ...offer, id: 'better', percentOff: 20, serviceIds: 'all' };
  const offers = [offer, stronger];
  assert.equal(promotionForService('lujan-maipu', '2027-08-31', '', offers), undefined);
  assert.equal(promotionForService('lujan-maipu', '2027-09-01', '', offers), stronger);
  assert.equal(promotionForService('lujan-maipu', '2027-09-30', '', offers), stronger);
  assert.equal(promotionForService('lujan-maipu', '2027-10-01', '', offers), undefined);
  assert.equal(promotionForService('airport', '2027-09-05', '', [offer]), undefined);
  assert.equal(promotionForService('airport', '2027-09-05', '', offers), stronger);
  assert.equal(promotionForService('lujan-maipu', '2027-09-05', '', [offer, { ...offer, id: 'tie' }]), offer);
  assert.equal(discountedPrice(113, 10), 101.7);
  assert.equal(discountedPrice(23, 15), 19.55);
});

test('January offer requires a November 2026 request and a January 2027 trip', () => {
  const january = promotions.find((item) => item.id === 'january-2027');
  assert.ok(january);
  assert.equal(january.percentOff, 20);
  assert.deepEqual(activePromotionsForService('airport', '2026-11-01', [january]), [january]);
  assert.equal(promotionForService('airport', '2026-10-31', '2027-01-01', [january]), undefined);
  assert.equal(promotionForService('airport', '2026-11-01', '2027-01-01', [january]), january);
  assert.equal(promotionForService('', '2026-11-01', '2027-01-01', [january]), january);
  assert.equal(promotionForService('airport', '2026-11-30', '2027-01-31', [january]), january);
  assert.equal(promotionForService('airport', '2026-12-01', '2027-01-31', [january]), undefined);
  for (const date of ['', '2026-12-31', '2027-02-01', '2027-01-99']) {
    assert.equal(promotionForService('airport', '2026-11-15', date, [january]), undefined);
  }
  const unrestricted = { ...offer, startDate: '2026-11-01', endDate: '2026-11-30', serviceIds: 'all' };
  assert.equal(promotionForService('airport', '2026-11-15', '2027-02-01', [january, unrestricted]), unrestricted);
  assert.equal(promotionForService('airport', '2026-11-15', '2027-01-15', [january, unrestricted]), january);
});

test('offer dates use Mendoza time even around midnight UTC', () => {
  assert.equal(mendozaDate(new Date('2027-09-01T02:59:59Z')), '2027-08-31');
  assert.equal(mendozaDate(new Date('2027-09-01T03:00:00Z')), '2027-09-01');
});

test('invalid offer configurations fail validation', () => {
  validatePromotions([offer]);
  for (const bad of [
    { ...offer, endDate: '2027-02-30' },
    { ...offer, startDate: '2027-10-01' },
    { ...offer, percentOff: 101 },
    { ...offer, serviceIds: ['unknown'] },
    { ...offer, name: { ...offer.name, pt: '' } },
    { ...offer, travelStartDate: '2027-01-01' },
    { ...offer, travelStartDate: '2027-01-31', travelEndDate: '2027-01-01' },
  ]) assert.throws(() => validatePromotions([bad]));
  assert.throws(() => validatePromotions([offer, offer]));
});

test('booking details and offer survive WhatsApp URL encoding', () => {
  const message = bookingMessage('Hello!', [
    ['Name', ' Ana & João '], ['Dates', '12–15 March'], ['Guests', ''],
  ], {
    offer, locale: 'en', price: 113, suffix: '', offerLabel: 'Offer',
    priceLabel: 'Promotional price', untilLabel: 'Requests through', offLabel: 'off', tripDatesLabel: 'Trip dates',
  });
  const url = new URL(whatsappUrl('5492612517146', message));
  assert.equal(url.origin + url.pathname, 'https://wa.me/5492612517146');
  assert.equal(url.searchParams.get('text'), message);
  assert.match(message, /Name: Ana & João/);
  assert.match(message, /Promotional price: USD 101\.70/);
  assert.doesNotMatch(message, /Guests:/);
  const withoutService = bookingMessage('Hello!', [], {
    offer: promotions[0], locale: 'en', suffix: '', offerLabel: 'Offer',
    priceLabel: 'Promotional price', untilLabel: 'Requests through', offLabel: 'off', tripDatesLabel: 'Trip dates',
  });
  assert.match(withoutService, /20% off/);
  assert.match(withoutService, /Jan 1, 2027/);
  assert.doesNotMatch(withoutService, /Promotional price/);
});
