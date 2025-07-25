export interface Translation {
  // Navigation
  nav: {
    home: string;
    about: string;
    services: string;
    practice: string;
    contact: string;
  };
  
  // Hero Section
  hero: {
    title: string;
    subtitle: string;
    cta: string;
    secondaryCta: string;
    description: string;
  };
  
  // Services
  services: {
    title: string;
    international: {
      title: string;
      description: string;
    };
    commercial: {
      title: string;
      description: string;
    };
    european: {
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
  };
  
  // About
  about: {
    title: string;
    subtitle: string;
    description: string;
    experience: string;
    philosophy: string;
  };
  
  // Contact
  contact: {
    title: string;
    subtitle: string;
    form: {
      name: string;
      email: string;
      subject: string;
      message: string;
      submit: string;
      privacy: string;
    };
    info: {
      address: string;
      phone: string;
      email: string;
      hours: string;
    };
  };
  
  // Footer
  footer: {
    copyright: string;
    impressum: string;
    privacy: string;
    disclaimer: string;
  };

  // Hero additional elements
  heroElements: {
    establishedBadge: string;
    davMember: string;
    certified: string;
    topLawyer: string;
    excellenceQuote: string;
  };

  // About additional elements
  aboutElements: {
    aboutLawyer: string;
    qualifications: string;
    philosophy: string;
    specialties: string;
    founderTitle: string;
    personalService: string;
    bridgeQuote: string;
  };
}

export const translations: Record<string, Translation> = {
  de: {
    nav: {
      home: "Startseite",
      about: "Über die Kanzlei",
      services: "Rechtsgebiete",
      practice: "Mandantenservice",
      contact: "Kontakt"
    },
    hero: {
      title: "Grenzüberschreitende Lösungen.",
      subtitle: "Juristische Exzellenz.",
      cta: "Kostenlose Erstberatung anfragen",
      secondaryCta: "Kanzlei entdecken",
      description: "Spezialisiert auf Internationales Recht und Handelsrecht mit über 25 Jahren Erfahrung in grenzüberschreitender juristischer Beratung."
    },
    services: {
      title: "Unsere Rechtsgebiete",
      international: {
        title: "Internationales Recht",
        description: "Umfassende Beratung bei grenzüberschreitenden Rechtsfragen und internationalen Verträgen."
      },
      commercial: {
        title: "Handelsrecht",
        description: "Rechtliche Unterstützung für Unternehmen bei Handelsgeschäften und Unternehmensrecht."
      },
      european: {
        title: "EU-Wirtschaftsrecht",
        description: "Expertise im europäischen Wirtschaftsrecht und EU-weiten Geschäftstätigkeiten."
      },
      contracts: {
        title: "Grenzüberschreitendes Vertragsrecht",
        description: "Gestaltung und Prüfung internationaler Verträge mit verschiedenen Rechtssystemen."
      },
      arbitration: {
        title: "Internationale Schiedsgerichtsbarkeit",
        description: "Vertretung in internationalen Schiedsverfahren und alternativen Streitbeilegungsverfahren."
      }
    },
    about: {
      title: "Me Jozef Pister",
      subtitle: "Ihr Spezialist für Internationales Recht",
      description: "Mit über 25 Jahren Erfahrung im internationalen Recht biete ich maßgeschneiderte juristische Lösungen für komplexe grenzüberschreitende Rechtsfragen.",
      experience: "25+ Jahre Erfahrung",
      philosophy: "Vertrauen, Kompetenz und diskrete Beratung stehen im Mittelpunkt meiner Mandantenbetreuung."
    },
    contact: {
      title: "Kontakt aufnehmen",
      subtitle: "Ich stehe Ihnen gerne für eine persönliche Beratung zur Verfügung",
      form: {
        name: "Vollständiger Name",
        email: "E-Mail-Adresse",
        subject: "Betreff",
        message: "Ihre Nachricht",
        submit: "Nachricht senden",
        privacy: "Ich stimme der Verarbeitung meiner Daten gemäß Datenschutzerklärung zu"
      },
      info: {
        address: "Adresse",
        phone: "Telefon",
        email: "E-Mail",
        hours: "Öffnungszeiten"
      }
    },
    footer: {
      copyright: "© 2024 Kanzlei Pister. Alle Rechte vorbehalten.",
      impressum: "Impressum",
      privacy: "Datenschutz",
      disclaimer: "Haftungsausschluss"
    },
    heroElements: {
      establishedBadge: "Seit 1999 • Internationale Rechtspraxis",
      davMember: "DAV Mitglied",
      certified: "Zertifiziert",
      topLawyer: "Top Anwalt 2024",
      excellenceQuote: "Excellence en droit, service personnalisé"
    },
    aboutElements: {
      aboutLawyer: "Über den Anwalt",
      qualifications: "Qualifikationen & Zertifizierungen",
      philosophy: "Meine Philosophie",
      specialties: "Schwerpunkte",
      founderTitle: "Gründer & Hauptanwalt",
      personalService: "Persönliche Betreuung",
      bridgeQuote: "Das Recht verbindet Nationen. Meine Aufgabe ist es, Brücken zu bauen, wo andere Hindernisse sehen."
    }
  },
  
  fr: {
    nav: {
      home: "Accueil",
      about: "À propos",
      services: "Domaines",
      practice: "Services",
      contact: "Contact"
    },
    hero: {
      title: "Solutions transfrontalières.",
      subtitle: "Excellence juridique.",
      cta: "Demander une consultation gratuite",
      secondaryCta: "Découvrir le cabinet",
      description: "Spécialisé en droit international et commercial avec plus de 25 ans d'expérience en conseil juridique transfrontalier."
    },
    services: {
      title: "Nos domaines d'expertise",
      international: {
        title: "Droit international",
        description: "Conseil complet sur les questions juridiques transfrontalières et les contrats internationaux."
      },
      commercial: {
        title: "Droit commercial",
        description: "Support juridique pour les entreprises dans les transactions commerciales et le droit des sociétés."
      },
      european: {
        title: "Droit économique européen",
        description: "Expertise en droit économique européen et activités commerciales à l'échelle de l'UE."
      },
      contracts: {
        title: "Droit contractuel transfrontalier",
        description: "Rédaction et révision de contrats internationaux avec différents systèmes juridiques."
      },
      arbitration: {
        title: "Arbitrage international",
        description: "Représentation dans les procédures d'arbitrage international et les modes alternatifs de résolution des conflits."
      }
    },
    about: {
      title: "Me Jozef Pister",
      subtitle: "Votre spécialiste en droit international",
      description: "Avec plus de 25 ans d'expérience en droit international, j'offre des solutions juridiques sur mesure pour les questions juridiques transfrontalières complexes.",
      experience: "25+ ans d'expérience",
      philosophy: "La confiance, la compétence et le conseil discret sont au cœur de ma relation client."
    },
    contact: {
      title: "Nous contacter",
      subtitle: "Je suis à votre disposition pour un conseil personnalisé",
      form: {
        name: "Nom complet",
        email: "Adresse e-mail",
        subject: "Objet",
        message: "Votre message",
        submit: "Envoyer le message",
        privacy: "J'accepte le traitement de mes données selon la politique de confidentialité"
      },
      info: {
        address: "Adresse",
        phone: "Téléphone",
        email: "E-mail",
        hours: "Heures d'ouverture"
      }
    },
    footer: {
      copyright: "© 2024 Cabinet Pister. Tous droits réservés.",
      impressum: "Mentions légales",
      privacy: "Confidentialité",
      disclaimer: "Avertissement"
    },
    heroElements: {
      establishedBadge: "Depuis 1999 • Pratique juridique internationale",
      davMember: "Membre DAV",
      certified: "Certifié",
      topLawyer: "Top Avocat 2024",
      excellenceQuote: "Excellence en droit, service personnalisé"
    },
    aboutElements: {
      aboutLawyer: "À propos de l'avocat",
      qualifications: "Qualifications & Certifications",
      philosophy: "Ma philosophie",
      specialties: "Spécialités",
      founderTitle: "Fondateur & Avocat principal",
      personalService: "Service personnalisé",
      bridgeQuote: "Le droit unit les nations. Ma mission est de construire des ponts là où d'autres voient des obstacles."
    }
  },
  
  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      practice: "Practice",
      contact: "Contact"
    },
    hero: {
      title: "Cross-border Solutions.",
      subtitle: "Legal Excellence.",
      cta: "Request Free Consultation",
      secondaryCta: "Discover Firm",
      description: "Specialized in International and Commercial Law with over 25 years of experience in cross-border legal advice."
    },
    services: {
      title: "Our Practice Areas",
      international: {
        title: "International Law",
        description: "Comprehensive advice on cross-border legal issues and international contracts."
      },
      commercial: {
        title: "Commercial Law",
        description: "Legal support for businesses in commercial transactions and corporate law."
      },
      european: {
        title: "European Business Law",
        description: "Expertise in European business law and EU-wide business activities."
      },
      contracts: {
        title: "Cross-border Contract Law",
        description: "Drafting and reviewing international contracts with different legal systems."
      },
      arbitration: {
        title: "International Arbitration",
        description: "Representation in international arbitration proceedings and alternative dispute resolution."
      }
    },
    about: {
      title: "Mr. Jozef Pister",
      subtitle: "Your International Law Specialist",
      description: "With over 25 years of experience in international law, I provide tailored legal solutions for complex cross-border legal issues.",
      experience: "25+ years experience",
      philosophy: "Trust, competence, and discrete counsel are at the heart of my client relationship."
    },
    contact: {
      title: "Get in Touch",
      subtitle: "I am available for personal consultation",
      form: {
        name: "Full Name",
        email: "Email Address",
        subject: "Subject",
        message: "Your Message",
        submit: "Send Message",
        privacy: "I agree to the processing of my data according to the privacy policy"
      },
      info: {
        address: "Address",
        phone: "Phone",
        email: "Email",
        hours: "Office Hours"
      }
    },
    footer: {
      copyright: "© 2024 Pister Law Firm. All rights reserved.",
      impressum: "Legal Notice",
      privacy: "Privacy",
      disclaimer: "Disclaimer"
    },
    heroElements: {
      establishedBadge: "Since 1999 • International Legal Practice",
      davMember: "DAV Member",
      certified: "Certified",
      topLawyer: "Top Lawyer 2024",
      excellenceQuote: "Excellence in law, personalized service"
    },
    aboutElements: {
      aboutLawyer: "About the Lawyer",
      qualifications: "Qualifications & Certifications",
      philosophy: "My Philosophy",
      specialties: "Specialties",
      founderTitle: "Founder & Principal Lawyer",
      personalService: "Personal Service",
      bridgeQuote: "Law connects nations. My task is to build bridges where others see obstacles."
    }
  },
  
  es: {
    nav: {
      home: "Inicio",
      about: "Acerca de",
      services: "Servicios",
      practice: "Práctica",
      contact: "Contacto"
    },
    hero: {
      title: "Soluciones transfronterizas.",
      subtitle: "Excelencia jurídica.",
      cta: "Solicitar consulta gratuita",
      secondaryCta: "Descubrir despacho",
      description: "Especializado en Derecho Internacional y Comercial con más de 25 años de experiencia en asesoramiento jurídico transfronterizo."
    },
    services: {
      title: "Nuestras áreas de práctica",
      international: {
        title: "Derecho Internacional",
        description: "Asesoramiento integral sobre cuestiones jurídicas transfronterizas y contratos internacionales."
      },
      commercial: {
        title: "Derecho Comercial",
        description: "Apoyo jurídico para empresas en transacciones comerciales y derecho corporativo."
      },
      european: {
        title: "Derecho Empresarial Europeo",
        description: "Experiencia en derecho empresarial europeo y actividades comerciales en toda la UE."
      },
      contracts: {
        title: "Derecho Contractual Transfronterizo",
        description: "Redacción y revisión de contratos internacionales con diferentes sistemas jurídicos."
      },
      arbitration: {
        title: "Arbitraje Internacional",
        description: "Representación en procedimientos de arbitraje internacional y resolución alternativa de disputas."
      }
    },
    about: {
      title: "Sr. Jozef Pister",
      subtitle: "Su especialista en Derecho Internacional",
      description: "Con más de 25 años de experiencia en derecho internacional, proporciono soluciones jurídicas a medida para cuestiones jurídicas transfronterizas complejas.",
      experience: "25+ años de experiencia",
      philosophy: "La confianza, la competencia y el asesoramiento discreto están en el corazón de mi relación con el cliente."
    },
    contact: {
      title: "Póngase en contacto",
      subtitle: "Estoy disponible para consulta personal",
      form: {
        name: "Nombre completo",
        email: "Dirección de correo electrónico",
        subject: "Asunto",
        message: "Su mensaje",
        submit: "Enviar mensaje",
        privacy: "Acepto el procesamiento de mis datos según la política de privacidad"
      },
      info: {
        address: "Dirección",
        phone: "Teléfono",
        email: "Correo electrónico",
        hours: "Horario de oficina"
      }
    },
    footer: {
      copyright: "© 2024 Bufete Pister. Todos los derechos reservados.",
      impressum: "Aviso legal",
      privacy: "Privacidad",
      disclaimer: "Descargo de responsabilidad"
    },
    heroElements: {
      establishedBadge: "Desde 1999 • Práctica jurídica internacional",
      davMember: "Miembro DAV",
      certified: "Certificado",
      topLawyer: "Top Abogado 2024",
      excellenceQuote: "Excelencia en derecho, servicio personalizado"
    },
    aboutElements: {
      aboutLawyer: "Sobre el abogado",
      qualifications: "Calificaciones y Certificaciones",
      philosophy: "Mi filosofía",
      specialties: "Especialidades",
      founderTitle: "Fundador y Abogado principal",
      personalService: "Servicio personal",
      bridgeQuote: "El derecho conecta naciones. Mi tarea es construir puentes donde otros ven obstáculos."
    }
  },
  
  it: {
    nav: {
      home: "Home",
      about: "Chi siamo",
      services: "Servizi",
      practice: "Pratica",
      contact: "Contatto"
    },
    hero: {
      title: "Soluzioni transfrontaliere.",
      subtitle: "Eccellenza legale.",
      cta: "Richiedi consultazione gratuita",
      secondaryCta: "Scopri studio",
      description: "Specializzato in Diritto Internazionale e Commerciale con oltre 25 anni di esperienza nella consulenza legale transfrontaliera."
    },
    services: {
      title: "Le nostre aree di pratica",
      international: {
        title: "Diritto Internazionale",
        description: "Consulenza completa su questioni legali transfrontaliere e contratti internazionali."
      },
      commercial: {
        title: "Diritto Commerciale",
        description: "Supporto legale per aziende in transazioni commerciali e diritto societario."
      },
      european: {
        title: "Diritto Commerciale Europeo",
        description: "Competenza nel diritto commerciale europeo e attività commerciali a livello UE."
      },
      contracts: {
        title: "Diritto Contrattuale Transfrontaliero",
        description: "Redazione e revisione di contratti internazionali con diversi sistemi legali."
      },
      arbitration: {
        title: "Arbitrato Internazionale",
        description: "Rappresentanza in procedimenti di arbitrato internazionale e risoluzione alternativa delle controversie."
      }
    },
    about: {
      title: "Sig. Jozef Pister",
      subtitle: "Il vostro specialista in Diritto Internazionale",
      description: "Con oltre 25 anni di esperienza nel diritto internazionale, fornisco soluzioni legali su misura per questioni legali transfrontaliere complesse.",
      experience: "25+ anni di esperienza",
      philosophy: "Fiducia, competenza e consulenza discreta sono al centro del mio rapporto con il cliente."
    },
    contact: {
      title: "Mettersi in contatto",
      subtitle: "Sono disponibile per consultazione personale",
      form: {
        name: "Nome completo",
        email: "Indirizzo email",
        subject: "Oggetto",
        message: "Il tuo messaggio",
        submit: "Invia messaggio",
        privacy: "Accetto il trattamento dei miei dati secondo la politica sulla privacy"
      },
      info: {
        address: "Indirizzo",
        phone: "Telefono",
        email: "Email",
        hours: "Orari di ufficio"
      }
    },
    footer: {
      copyright: "© 2024 Studio Legale Pister. Tutti i diritti riservati.",
      impressum: "Note legali",
      privacy: "Privacy",
      disclaimer: "Disclaimer"
    },
    heroElements: {
      establishedBadge: "Dal 1999 • Pratica legale internazionale",
      davMember: "Membro DAV",
      certified: "Certificato",
      topLawyer: "Top Avvocato 2024",
      excellenceQuote: "Eccellenza nel diritto, servizio personalizzato"
    },
    aboutElements: {
      aboutLawyer: "Riguardo l'avvocato",
      qualifications: "Qualifiche e Certificazioni",
      philosophy: "La mia filosofia",
      specialties: "Specialità",
      founderTitle: "Fondatore e Avvocato principale",
      personalService: "Servizio personale",
      bridgeQuote: "Il diritto unisce le nazioni. Il mio compito è costruire ponti dove altri vedono ostacoli."
    }
  },
  
  pt: {
    nav: {
      home: "Início",
      about: "Sobre",
      services: "Serviços",
      practice: "Prática",
      contact: "Contato"
    },
    hero: {
      title: "Soluções transfronteiriças.",
      subtitle: "Excelência jurídica.",
      cta: "Solicitar consulta gratuita",
      secondaryCta: "Descobrir escritório",
      description: "Especializado em Direito Internacional e Comercial com mais de 25 anos de experiência em consultoria jurídica transfronteiriça."
    },
    services: {
      title: "Nossas áreas de prática",
      international: {
        title: "Direito Internacional",
        description: "Consultoria abrangente sobre questões jurídicas transfronteiriças e contratos internacionais."
      },
      commercial: {
        title: "Direito Comercial",
        description: "Suporte jurídico para empresas em transações comerciais e direito societário."
      },
      european: {
        title: "Direito Empresarial Europeu",
        description: "Expertise em direito empresarial europeu e atividades comerciais em toda a UE."
      },
      contracts: {
        title: "Direito Contratual Transfronteiriço",
        description: "Redação e revisão de contratos internacionais com diferentes sistemas jurídicos."
      },
      arbitration: {
        title: "Arbitragem Internacional",
        description: "Representação em procedimentos de arbitragem internacional e resolução alternativa de disputas."
      }
    },
    about: {
      title: "Sr. Jozef Pister",
      subtitle: "Seu especialista em Direito Internacional",
      description: "Com mais de 25 anos de experiência em direito internacional, forneço soluções jurídicas sob medida para questões jurídicas transfronteiriças complexas.",
      experience: "25+ anos de experiência",
      philosophy: "Confiança, competência e aconselhamento discreto estão no centro do meu relacionamento com o cliente."
    },
    contact: {
      title: "Entre em contato",
      subtitle: "Estou disponível para consulta pessoal",
      form: {
        name: "Nome completo",
        email: "Endereço de email",
        subject: "Assunto",
        message: "Sua mensagem",
        submit: "Enviar mensagem",
        privacy: "Concordo com o processamento dos meus dados de acordo com a política de privacidade"
      },
      info: {
        address: "Endereço",
        phone: "Telefone",
        email: "Email",
        hours: "Horário de funcionamento"
      }
    },
    footer: {
      copyright: "© 2024 Escritório Pister. Todos os direitos reservados.",
      impressum: "Aviso legal",
      privacy: "Privacidade",
      disclaimer: "Isenção de responsabilidade"
    },
    heroElements: {
      establishedBadge: "Desde 1999 • Prática jurídica internacional",
      davMember: "Membro DAV",
      certified: "Certificado",
      topLawyer: "Top Advogado 2024",
      excellenceQuote: "Excelência em direito, serviço personalizado"
    },
    aboutElements: {
      aboutLawyer: "Sobre o advogado",
      qualifications: "Qualificações e Certificações",
      philosophy: "Minha filosofia",
      specialties: "Especialidades",
      founderTitle: "Fundador e Advogado principal",
      personalService: "Serviço pessoal",
      bridgeQuote: "O direito conecta nações. Minha tarefa é construir pontes onde outros veem obstáculos."
    }
  }
};