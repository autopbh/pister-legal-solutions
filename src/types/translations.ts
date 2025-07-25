export interface Translations {
  nav: {
    home: string;
    about: string;
    services: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
    secondaryCta: string;
    description: string;
    badge: string;
    davMember: string;
    certified: string;
    topLawyer: string;
    quote: string;
  };
  about: {
    title: string;
    subtitle: string;
    description: string;
    experience: string;
    philosophy: string;
    aboutLawyer: string;
    qualifications: string;
    specialties: string;
    founderTitle: string;
    personalService: string;
    bridgeQuote: string;
  };
  services: {
    title: string;
    subtitle: string;
    international: { title: string; description: string; };
    commercial: { title: string; description: string; };
    european: { title: string; description: string; };
    contracts: { title: string; description: string; };
    arbitration: { title: string; description: string; };
    whyUs: string;
    benefits: {
      expertise: { title: string; description: string; };
      multilingual: { title: string; description: string; };
      experience: { title: string; description: string; };
      personal: { title: string; description: string; };
    };
    consultation: {
      title: string;
      subtitle: string;
      description: string;
      duration: string;
      response: string;
      cta: string;
      hours: string;
    };
  };
  contact: {
    title: string;
    subtitle: string;
    form: {
      name: string;
      email: string;
      subject: string;
      message: string;
      messagePlaceholder: string;
      submit: string;
      privacy: string;
      sending: string;
    };
    info: {
      address: string;
      phone: string;
      email: string;
      hours: string;
      emergency: string;
      available: string;
      description: string;
    };
  };
  stats: {
    experience: string;
    clients: string;
    domains: string;
    awards: string;
  };
  footer: {
    copyright: string;
    impressum: string;
    privacy: string;
    disclaimer: string;
  };
}