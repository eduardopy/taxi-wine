/**
 * Request dates use Mendoza time. Both request and optional trip dates are inclusive.
 *
 * Example:
 * {
 *   id: 'spring-2027',
 *   name: { en: 'Spring offer', es: 'Oferta de primavera', pt: 'Oferta de primavera' },
 *   startDate: '2027-09-01',
 *   endDate: '2027-09-30',
 *   percentOff: 10,
 *   serviceIds: ['lujan-maipu', 'uco-valley'], // or 'all'
 *   travelStartDate: '2027-10-01', // omit both travel dates for any trip date
 *   travelEndDate: '2027-10-31',
 * },
 */

export type ServiceId = 'lujan-maipu' | 'uco-valley' | 'hourly' | 'airport';
export type Promotion = {
  id: string;
  name: { en: string; es: string; pt: string };
  startDate: string;
  endDate: string;
  percentOff: number;
  serviceIds: ServiceId[] | 'all';
  travelStartDate?: string;
  travelEndDate?: string;
};

export const promotions: Promotion[] = [
  {
    id: 'january-2027',
    name: { en: 'January trips', es: 'Viajes de enero', pt: 'Viagens de janeiro' },
    startDate: '2026-11-01',
    endDate: '2026-11-30',
    percentOff: 20,
    serviceIds: 'all',
    travelStartDate: '2027-01-01',
    travelEndDate: '2027-01-31',
  },
];

const serviceIds: ServiceId[] = ['lujan-maipu', 'uco-valley', 'hourly', 'airport'];

function isValidDate(value: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const date = new Date(`${value}T00:00:00Z`);
  return !Number.isNaN(date.getTime()) && date.toISOString().slice(0, 10) === value;
}

/** Fail the build for a typo instead of advertising an unintended offer. */
export function validatePromotions(offers: Promotion[]): void {
  const seen = new Set<string>();
  for (const offer of offers) {
    if (!offer.id.trim() || seen.has(offer.id)) throw new Error('Promotion IDs must be non-empty and unique.');
    seen.add(offer.id);
    if (!offer.name.en?.trim() || !offer.name.es?.trim() || !offer.name.pt?.trim()) {
      throw new Error(`Promotion ${offer.id} needs a name in all three languages.`);
    }
    if (!isValidDate(offer.startDate) || !isValidDate(offer.endDate) || offer.startDate > offer.endDate) {
      throw new Error(`Promotion ${offer.id} needs valid start and end dates in YYYY-MM-DD order.`);
    }
    if ((offer.travelStartDate !== undefined || offer.travelEndDate !== undefined) &&
      (!offer.travelStartDate || !offer.travelEndDate || !isValidDate(offer.travelStartDate) ||
        !isValidDate(offer.travelEndDate) || offer.travelStartDate > offer.travelEndDate)) {
      throw new Error(`Promotion ${offer.id} needs both valid trip dates in YYYY-MM-DD order.`);
    }
    if (!Number.isFinite(offer.percentOff) || offer.percentOff <= 0 || offer.percentOff > 100) {
      throw new Error(`Promotion ${offer.id} needs a percentage greater than 0 and no more than 100.`);
    }
    if (offer.serviceIds !== 'all' && (!Array.isArray(offer.serviceIds) || offer.serviceIds.length === 0 || offer.serviceIds.some((id) => !serviceIds.includes(id)))) {
      throw new Error(`Promotion ${offer.id} needs 'all' or a non-empty list of valid service IDs.`);
    }
  }
}

export function mendozaDate(now = new Date()): string {
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'America/Argentina/Mendoza', year: 'numeric', month: '2-digit', day: '2-digit',
  }).formatToParts(now);
  const part = (type: string) => parts.find((item) => item.type === type)?.value;
  return `${part('year')}-${part('month')}-${part('day')}`;
}

export function activePromotionsForService(serviceId: string, requestDate: string, offers = promotions): Promotion[] {
  return offers.filter((offer) => offer.startDate <= requestDate && requestDate <= offer.endDate &&
    (offer.serviceIds === 'all' || offer.serviceIds.includes(serviceId as ServiceId)));
}

/** Pick the largest eligible offer; equal discounts keep the first listed offer. */
export function promotionForService(serviceId: string, requestDate: string, travelDate = '', offers = promotions): Promotion | undefined {
  return activePromotionsForService(serviceId, requestDate, offers).reduce<Promotion | undefined>((best, offer) => {
    const eligibleTrip = !offer.travelStartDate || (isValidDate(travelDate) &&
      travelDate >= offer.travelStartDate && travelDate <= offer.travelEndDate!);
    return eligibleTrip && (!best || offer.percentOff > best.percentOff) ? offer : best;
  }, undefined);
}

export function discountedPrice(price: number, percentOff: number): number {
  return Math.round(Math.round(price * 100) * (100 - percentOff) / 100) / 100;
}

export function formatPrice(price: number): string {
  return Number.isInteger(price) ? String(price) : price.toFixed(2);
}
