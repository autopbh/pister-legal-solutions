// Importing JSON translation files
import deTranslations from './locales/de.json';
import frTranslations from './locales/fr.json';
import enTranslations from './locales/en.json';
import esTranslations from './locales/es.json';
import itTranslations from './locales/it.json';
import ptTranslations from './locales/pt.json';

// Translation interface based on the JSON structure
export interface Translation {
  menu: {
    home: string;
    about: string;
    services: string;
    contact: string;
    language: string;
  };
  hero: {
    title: string;
    subtitle: string;
    description: string;
    cta: string;
    contact: string;
  };
  about: {
    title: string;
    subtitle: string;
    description: string;
    experience: string;
    specialization: string;
    languages: string;
  };
  services: {
    title: string;
    subtitle: string;
    internationalLaw: {
      title: string;
      description: string;
    };
    commercialLaw: {
      title: string;
      description: string;
    };
    euLaw: {
      title: string;
      description: string;
    };
    contracts: {
      title: string;
      description: string;
    };
    arbitration: {
      title: string;
      description: string;
    };
    corporateLaw: {
      title: string;
      description: string;
    };
  };
  process: {
    title: string;
    subtitle: string;
    step1: {
      title: string;
      description: string;
    };
    step2: {
      title: string;
      description: string;
    };
    step3: {
      title: string;
      description: string;
    };
    step4: {
      title: string;
      description: string;
    };
  };
  team: {
    title: string;
    subtitle: string;
  };
  testimonials: {
    title: string;
    subtitle: string;
  };
  faq: {
    title: string;
    subtitle: string;
  };
  contact: {
    title: string;
    subtitle: string;
    address: string;
    phone: string;
    email: string;
    hours: string;
    form: {
      name: string;
      email: string;
      subject: string;
      message: string;
      privacy: string;
      submit: string;
      success: string;
    };
    quickActions: string;
    emergency: string;
  };
  legal: {
    impressum: string;
    privacy: string;
    cookies: string;
    terms: string;
  };
  footer: {
    description: string;
    quickLinks: string;
    contact: string;
    legal: string;
    rights: string;
  };
  stats: {
    experience: string;
    cases: string;
    expertise: string;
    satisfaction: string;
  };
}

// Translations object with JSON imports
export const translations: Record<string, Translation> = {
  de: deTranslations as Translation,
  fr: frTranslations as Translation,
  en: enTranslations as Translation,
  es: esTranslations as Translation,
  it: itTranslations as Translation,
  pt: ptTranslations as Translation,
};