export enum Services {
  Payroll = "Payroll",
  Treasury = "Treasury",
  Implementation = "Implementation",
  BankPayments = "Bank Payments",
}

export interface Company {
  name: string;
  logo: string;
  services: Services[];
  country: string;
}
