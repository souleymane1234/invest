import {
  ServiceAirTimeInterface,
  ServiceMobileMoneyInterface,
} from '@/interfaces/ServiceInterface';

export const servicesMobileMoney: ServiceMobileMoneyInterface[] = [
  {
    name: 'moovci',
    label: 'Moov Money',
    flag: '/assets/payments/moov.png',
    type: 'mobile money',
    length: 10,
    startWith: '01',
    country: 'CI',
  },
  {
    name: 'waveci',
    label: 'Wave',
    flag: '/assets/payments/wave.png',
    type: 'mobile money',
    length: 10,
    startWith: '',
    country: 'CI',
  },

  {
    name: 'orangeci',
    label: 'Orange Money',
    flag: '/assets/payments/orange.png',
    type: 'mobile money',
    length: 10,
    startWith: '07',
    country: 'CI',
  },
  {
    name: 'mtnci',
    label: 'MTN Mobile Money',
    flag: '/assets/payments/mtn.png',
    type: 'mobile money',
    length: 10,
    startWith: '05',
    country: 'CI',
  },
  {
    name: 'visa',
    flag: 'https://logoeps.com/wp-content/uploads/2025/02/Visa-logo-.png',
    type: 'credit card',
  },
  {
    name: 'master card',
    flag: 'https://www.mastercard.com/content/dam/public/mastercardcom/fr/fr/logos/mastercard-og-image.png',
    type: 'credit card',
  },
];

export const servicesAirTimeMoney: ServiceAirTimeInterface[] = [
  {
    name: 'Crédit de communication MOOV AFRICA CI',
    flag: 'https://yt3.googleusercontent.com/So4zVrbYgRhy9UskS8_Fduc5rq6uO6dq6uZec4PwMRhKEJEcJ6gEGysdzyt3jxfC36B-mZ4P=s900-c-k-c0x00ffffff-no-rj',
    value: 'moovci',
    length: 10,
    startWith: '01',
    country: 'CI',
  },
  {
    value: 'orangeci',
    flag: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c8/Orange_logo.svg/3840px-Orange_logo.svg.png',
    name: 'Crédit de communication ORANGE CI',
    length: 10,
    startWith: '07',
    country: 'CI',
  },
  {
    value: 'mtnci',
    flag: 'https://www.mtn.ci/wp-content/uploads/2023/05/MTN-CI.jpg',
    name: 'Crédit de communication MTN CI',
    length: 10,
    startWith: '05',
    country: 'CI',
  },
];

const SERVICE_ALIASES: Record<string, string> = {
  wave: 'waveci',
  waveci: 'waveci',
  orange: 'orangeci',
  orangeci: 'orangeci',
  orangemoney: 'orangeci',
  mtn: 'mtnci',
  mtnci: 'mtnci',
  moov: 'moovci',
  moovci: 'moovci',
};

export const normalizePaymentService = (name: string): string =>
  SERVICE_ALIASES[name.toLowerCase().replace(/[\s_-]/g, '')] ?? name;

export const paymentServiceLabel = (name: string): string => {
  const normalized = normalizePaymentService(name);
  return (
    servicesMobileMoney.find(
      (service) => service.name === normalized || service.name === name,
    )?.label ?? name
  );
};
