export interface ServiceMobileMoneyInterface {
  name: string;
  label?: string;
  flag: string;
  type: string;
  country?: string;
  length?: number;
  startWith?: string;
}

export interface ServiceAirTimeInterface {
  name: string;
  flag: string;
  value: string;
  country?: string;
  length?: number;
  startWith?: string;
}
