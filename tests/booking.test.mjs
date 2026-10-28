import test from 'node:test';
import assert from 'node:assert/strict';
import { bookingMessage, whatsappUrl } from '../src/booking.ts';
import { discountedPrice, mendozaDate, promotionForService, validatePromotions } from '../src/promotions.ts';

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
  assert.equal(promotionForService('lujan-maipu', '2027-08-31', offers), undefined);
  assert.equal(promotionForService('lujan-maipu', '2027-09-01', offers), stronger);
  assert.equal(promotionForService('lujan-maipu', '2027-09-30', offers), stronger);
  assert.equal(promotionForService('lujan-maipu', '2027-10-01', offers), undefined);
  assert.equal(promotionForService('airport', '2027-09-05', [offer]), undefined);
  assert.equal(promotionForService('airport', '2027-09-05', offers), stronger);
  assert.equal(promotionForService('lujan-maipu', '2027-09-05', [offer, { ...offer, id: 'tie' }]), offer);
  assert.equal(discountedPrice(113, 10), 101.7);
  assert.equal(discountedPrice(23, 15), 19.55);
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
  ]) assert.throws(() => validatePromotions([bad]));
  assert.throws(() => validatePromotions([offer, offer]));
});

test('booking details and offer survive WhatsApp URL encoding', () => {
  const message = bookingMessage('Hello!', [
    ['Name', ' Ana & João '], ['Dates', '12–15 March'], ['Guests', ''],
  ], {
    offer, locale: 'en', price: 113, suffix: '', offerLabel: 'Offer',
    priceLabel: 'Promotional price', untilLabel: 'Requests through', offLabel: 'off',
  });
  const url = new URL(whatsappUrl('5492612517146', message));
  assert.equal(url.origin + url.pathname, 'https://wa.me/5492612517146');
  assert.equal(url.searchParams.get('text'), message);
  assert.match(message, /Name: Ana & João/);
  assert.match(message, /Promotional price: USD 101\.70/);
  assert.doesNotMatch(message, /Guests:/);
});
