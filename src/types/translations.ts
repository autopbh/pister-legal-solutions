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
  stats: {
    title: string;
    subtitle: string;
    experience: string;
    clients: string;
    domains: string;
    awards: string;
    successRate: string;
    responseTime: string;
  };
  compliance: {
    title: string;
  };
  expertiseAreas: {
    international: {
      title: string;
      description: string;
      details: string[];
    };
    commercial: {
      title: string;
      description: string;
      details: string[];
    };
    personalizedService: {
      title: string;
      description: string;
      details: string[];
    };
    additional: {
      title: string;
      details: string[];
    };
  };
  uniqueAdvantages: {
    title: string;
  };
  qualificationsAndCertifications: {
    title: string;
    items: string[];
  };
  header: {
    profession: string;
    phone: string;
  };
  process: {
    title: string;
    subtitle: string;
    step1: { title: string; description: string; duration: string; features: string[]; };
    step2: { title: string; description: string; duration: string; features: string[]; };
    step3: { title: string; description: string; duration: string; features: string[]; };
    step4: { title: string; description: string; duration: string; features: string[]; };
    cta: {
      title: string;
      subtitle: string;
      button: string;
    };
  };
  team: {
    title: string;
    subtitle: string;
    lawyer: {
      name: string;
      role: string;
      description: string;
      specialties: string[];
      languages: string[];
      location: string;
      qualifications: string[];
    };
    labels: {
      founder: string;
      specializations: string;
      qualifications: string;
      contact: string;
      call: string;
    };
  };
  testimonials: {
    title: string;
    subtitle: string;
    testimonial1: {
      name: string;
      role: string;
      company: string;
      content: string;
    };
    testimonial2: {
      name: string;
      role: string;
      company: string;
      content: string;
    };
    testimonial3: {
      name: string;
      role: string;
      company: string;
      content: string;
    };
    cta: string;
  };
  faq: {
    title: string;
    subtitle: string;
    questions: {
      q1: { question: string; answer: string; };
      q2: { question: string; answer: string; };
      q3: { question: string; answer: string; };
      q4: { question: string; answer: string; };
      q5: { question: string; answer: string; };
      q6: { question: string; answer: string; };
    };
    contact: {
      title: string;
      subtitle: string;
      button: string;
    };
  };
  contact: {
    badge: string;
    title: string;
    subtitle: string;
    office: {
      title: string;
      address: {
        label: string;
        value: string;
      };
      phone: {
        label: string;
      };
      email: {
        label: string;
      };
      hours: {
        label: string;
        value: string;
      };
    };
    emergency: {
      title: string;
      subtitle: string;
      description: string;
      phone: string;
    };
    form: {
      title: string;
      security: string;
      name: string;
      email: string;
      subject: string;
      message: string;
      messagePlaceholder: string;
      privacy: string;
      privacyLink: string;
      submit: string;
      sending: string;
      success: {
        title: string;
        description: string;
      };
    };
  };
  footer: {
    description: string;
    badges: {
      member: string;
      top: string;
    };
    navigation: {
      title: string;
      home: string;
      about: string;
      services: string;
      contact: string;
    };
    services: {
      title: string;
      list: string[];
    };
    contact: {
      title: string;
      address: string;
      hours: {
        title: string;
        weekdays: string;
        saturday: string;
        sunday: string;
      };
    };
    legal: {
      title: string;
      description: string;
      features: string[];
      bottom: {
        rights: string;
        security: string;
        links: string[];
        securityStatus: string;
        compliance: string;
      };
    };
  };
  security: {
    minimal: string;
    compact: {
      title: string;
      subtitle: string;
      ssl: string;
      verified: string;
    };
    full: {
      title: string;
      subtitle: string;
      features: {
        ssl: { label: string; status: string; };
        monitoring: { label: string; status: string; };
        gdpr: { label: string; status: string; };
        legal: { label: string; status: string; };
      };
      status: {
        title: string;
        lastCheck: string;
        info: string;
      };
      notice: {
        title: string;
        description: string;
      };
    };
  };
  protectedContact: {
    protected: string;
    emailProtected: string;
    phoneProtected: string;
    show: string;
    hide: string;
    protectedTitle: string;
    protectedDescription: string;
    toast: {
      title: string;
      description: string;
    };
  };
}