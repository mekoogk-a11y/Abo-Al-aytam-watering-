export type SupportedLanguage = 'ar' | 'en' | 'fr' | 'tr' | 'zh';

export interface LanguageOption {
  code: SupportedLanguage;
  name: string;
  nativeName: string;
  flag: string;
  direction: 'rtl' | 'ltr';
}

export interface WaterProject {
  id: string;
  title: string;
  subtitle: string;
  estimatedCostUSD: number;
  image: string;
  badge: string;
  features: string[];
  solarIncluded: boolean;
  notes?: string;
}

export interface BankAccount {
  id: string;
  bankName: string;
  accountNumber: string;
  currency: string;
  holderName: string;
  logoColor: string;
  branch?: string;
}

export interface ContactInfo {
  whatsapp: string;
  whatsappLink: string;
  mobile: string;
  addressTitle: string;
  addressDetails: string[];
}
