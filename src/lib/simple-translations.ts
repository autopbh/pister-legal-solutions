export interface Translation {
  nav: {
    home: string;
    about: string;
    services: string;
    practice: string;
    contact: string;
  };
  
  hero: {
    title: string;
    subtitle: string;
    cta: string;
    secondaryCta: string;
    description: string;
  };

  stats: {
    title: string;
    subtitle: string;
    experience: string;
    clients: string;
    languages: string;
    awards: string;
    successRate: string;
    response: string;
    certifications: {
      dav: string;
      iso: string;
      international: string;
    };
  };
  
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

  process: {
    title: string;
    subtitle: string;
    consultation: {
      title: string;
      description: string;
      duration: string;
      features: string[];
    };
    study: {
      title: string;
      description: string;
      duration: string;
      features: string[];
    };
    action: {
      title: string;
      description: string;
      duration: string;
      features: string[];
    };
    resolution: {
      title: string;
      description: string;
      duration: string;
      features: string[];
    };
    cta: {
      title: string;
      description: string;
      button: string;
    };
  };

  team: {
    title: string;
    subtitle: string;
    founder: {
      name: string;
      role: string;
      description: string;
      specialties: string[];
      languages: string[];
      location: string;
      qualifications: string[];
    };
    associates: {
      title: string;
      members: Array<{
        name: string;
        role: string;
        specialties: string[];
        languages: string[];
        location: string;
      }>;
    };
  };

  testimonials: {
    title: string;
    subtitle: string;
    clients: Array<{
      name: string;
      role: string;
      company: string;
      content: string;
    }>;
    trustBadge: string;
  };

  faq: {
    title: string;
    subtitle: string;
    items: Array<{
      question: string;
      answer: string;
    }>;
    contact: {
      title: string;
      description: string;
      button: string;
    };
  };
  
  about: {
    title: string;
    subtitle: string;
    description: string;
    experience: string;
    philosophy: string;
  };
  
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
  
  footer: {
    copyright: string;
    impressum: string;
    privacy: string;
    disclaimer: string;
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
    stats: {
      title: "Exzellenz in Zahlen gemessen",
      subtitle: "Über zwei Jahrzehnte internationaler Rechtserfahrung mit außergewöhnlichen Ergebnissen",
      experience: "Jahre Erfahrung",
      clients: "Zufriedene Mandanten",
      languages: "Sprachen gesprochen",
      awards: "Juristische Auszeichnungen",
      successRate: "Erfolgsquote",
      response: "Antwortgarantie",
      certifications: {
        dav: "DAV Zertifiziert",
        iso: "ISO 9001",
        international: "International Bar"
      }
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
    process: {
      title: "Unser Prozess der Exzellenz",
      subtitle: "Eine bewährte Methodik für optimale Ergebnisse in jeder Phase",
      consultation: {
        title: "Erstberatung",
        description: "Kostenlose Analyse Ihrer Rechtssituation und Definition der optimalen Strategie.",
        duration: "30 Min",
        features: ["Kostenlose Bewertung", "Absolute Vertraulichkeit", "Strategische Beratung"]
      },
      study: {
        title: "Tiefgehende Analyse",
        description: "Detaillierte Analyse der rechtlichen Aspekte mit umfassender Dokumentenrecherche.",
        duration: "2-5 Tage",
        features: ["Rechtliche Recherche", "Risikoanalyse", "Detaillierter Bericht"]
      },
      action: {
        title: "Rechtliche Handlung",
        description: "Umsetzung der Strategie mit Verhandlung und professioneller Vertretung.",
        duration: "Variabel",
        features: ["Expertenverhandlung", "Vertretung", "Persönliche Betreuung"]
      },
      resolution: {
        title: "Lösung",
        description: "Abschluss des Falls mit vollständiger Dokumentation und Nachbetreuung.",
        duration: "Abgeschlossen",
        features: ["Dokumentation", "Kostenlose Nachbetreuung", "Garantien"]
      },
      cta: {
        title: "Bereit anzufangen?",
        description: "Kontaktieren Sie uns noch heute für Ihre kostenlose Beratung und erfahren Sie, wie wir Ihnen helfen können.",
        button: "Kostenlose Beratung"
      }
    },
    team: {
      title: "Unser Exzellenz-Team",
      subtitle: "Mehrsprachige und multikulturelle Expertise im Dienst Ihrer internationalen Projekte",
      founder: {
        name: "Me Jozef Pister",
        role: "Hauptanwalt",
        description: "Über 25 Jahre Erfahrung im internationalen Recht. Spezialisiert auf komplexe grenzüberschreitende Transaktionen.",
        specialties: ["Internationales Recht", "Handelsrecht", "Schiedsgerichtsbarkeit"],
        languages: ["Französisch", "Deutsch", "Englisch", "Italienisch"],
        location: "Paris & Berlin",
        qualifications: ["DAV Zertifiziert", "Master im Internationalen Recht", "ICC Schiedsrichter"]
      },
      associates: {
        title: "Internationales Netzwerk von Partnern",
        members: [
          {
            name: "Dr. Elena Rodriguez",
            role: "Partnerin",
            specialties: ["Europäisches Recht", "Compliance"],
            languages: ["Spanisch", "Französisch", "Englisch"],
            location: "Madrid"
          },
          {
            name: "Marco Bernini",
            role: "Senior Anwalt",
            specialties: ["Unternehmensrecht", "M&A"],
            languages: ["Italienisch", "Französisch", "Englisch"],
            location: "Mailand"
          }
        ]
      }
    },
    testimonials: {
      title: "Was unsere Mandanten sagen",
      subtitle: "Das Vertrauen unserer Mandanten ist unsere größte Belohnung",
      clients: [
        {
          name: "Dr. Michael Weber",
          role: "CEO",
          company: "Weber Industries",
          content: "Me Pister hat unsere internationale Expansion mit bemerkenswerter Expertise geleitet."
        },
        {
          name: "Sarah Chen",
          role: "Rechtsabteilungsleiterin",
          company: "TechStart GmbH",
          content: "Me Pisters Expertise im internationalen Handelsrecht ist außergewöhnlich."
        }
      ],
      trustBadge: "Über 500 Mandanten vertrauen uns"
    },
    faq: {
      title: "Häufig gestellte Fragen",
      subtitle: "Finden Sie schnell Antworten auf Ihre häufigsten Fragen",
      items: [
        {
          question: "Was sind Ihre Fachgebiete?",
          answer: "Wir spezialisieren uns auf internationales Recht, Handelsrecht und Schiedsgerichtsbarkeit."
        },
        {
          question: "Was kostet eine Beratung?",
          answer: "Die erste 30-minütige Beratung ist völlig kostenlos."
        }
      ],
      contact: {
        title: "Sie finden nicht die Antwort?",
        description: "Unser Team steht Ihnen zur Verfügung.",
        button: "Kontaktieren Sie uns direkt"
      }
    },
    about: {
      title: "Me Jozef Pister",
      subtitle: "Ihr Spezialist für Internationales Recht",
      description: "Mit über 25 Jahren Erfahrung im internationalen Recht biete ich maßgeschneiderte juristische Lösungen.",
      experience: "25+ Jahre Erfahrung",
      philosophy: "Vertrauen, Kompetenz und diskrete Beratung stehen im Mittelpunkt."
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
        privacy: "Ich stimme der Verarbeitung zu"
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
      secondaryCta: "Discover the Firm",
      description: "Specialized in International Law and Commercial Law with over 25 years of experience in cross-border legal advice."
    },
    stats: {
      title: "Excellence Measured in Numbers",
      subtitle: "Over two decades of international legal expertise with exceptional results",
      experience: "Years Experience",
      clients: "Satisfied Clients",
      languages: "Languages Spoken",
      awards: "Legal Awards",
      successRate: "Success Rate",
      response: "Response Guarantee",
      certifications: {
        dav: "DAV Certified",
        iso: "ISO 9001",
        international: "International Bar"
      }
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
        title: "European Economic Law",
        description: "Expertise in European economic law and EU-wide business activities."
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
    process: {
      title: "Our Process of Excellence",
      subtitle: "A proven methodology for optimal results at every stage",
      consultation: {
        title: "Initial Consultation",
        description: "Free analysis of your legal situation and definition of optimal strategy.",
        duration: "30 Min",
        features: ["Free Assessment", "Absolute Confidentiality", "Strategic Advice"]
      },
      study: {
        title: "In-depth Analysis",
        description: "Detailed analysis of legal aspects with comprehensive document research.",
        duration: "2-5 Days",
        features: ["Legal Research", "Risk Analysis", "Detailed Report"]
      },
      action: {
        title: "Legal Action",
        description: "Implementation of strategy with negotiation and professional representation.",
        duration: "Variable",
        features: ["Expert Negotiation", "Representation", "Personal Support"]
      },
      resolution: {
        title: "Resolution",
        description: "Case completion with full documentation and post-resolution follow-up.",
        duration: "Completed",
        features: ["Documentation", "Free Follow-up", "Guarantees"]
      },
      cta: {
        title: "Ready to Start?",
        description: "Contact us today for your free consultation and discover how we can help you.",
        button: "Free Consultation"
      }
    },
    team: {
      title: "Our Excellence Team",
      subtitle: "Multilingual and multicultural expertise serving your international projects",
      founder: {
        name: "Me Jozef Pister",
        role: "Principal Lawyer",
        description: "Over 25 years of experience in international law. Specialized in complex cross-border transactions.",
        specialties: ["International Law", "Commercial Law", "Arbitration"],
        languages: ["French", "German", "English", "Italian"],
        location: "Paris & Berlin",
        qualifications: ["DAV Certified", "Master in International Law", "ICC Arbitrator"]
      },
      associates: {
        title: "International Network of Partners",
        members: [
          {
            name: "Dr. Elena Rodriguez",
            role: "Partner",
            specialties: ["European Law", "Compliance"],
            languages: ["Spanish", "French", "English"],
            location: "Madrid"
          },
          {
            name: "Marco Bernini",
            role: "Senior Lawyer",
            specialties: ["Corporate Law", "M&A"],
            languages: ["Italian", "French", "English"],
            location: "Milan"
          }
        ]
      }
    },
    testimonials: {
      title: "What Our Clients Say",
      subtitle: "Our clients' trust is our greatest reward",
      clients: [
        {
          name: "Dr. Michael Weber",
          role: "CEO",
          company: "Weber Industries",
          content: "Me Pister guided our international expansion with remarkable expertise."
        },
        {
          name: "Sarah Chen",
          role: "Legal Department Head",
          company: "TechStart GmbH",
          content: "Me Pister's expertise in international commercial law is exceptional."
        }
      ],
      trustBadge: "Over 500 clients trust us"
    },
    faq: {
      title: "Frequently Asked Questions",
      subtitle: "Find quick answers to your most common questions",
      items: [
        {
          question: "What are your areas of expertise?",
          answer: "We specialize in international law, commercial law, and arbitration."
        },
        {
          question: "How much does a consultation cost?",
          answer: "The first 30-minute consultation is completely free."
        }
      ],
      contact: {
        title: "Can't find the answer?",
        description: "Our team is available to answer all your specific questions.",
        button: "Contact us directly"
      }
    },
    about: {
      title: "Me Jozef Pister",
      subtitle: "Your International Law Specialist",
      description: "With over 25 years of experience in international law, I provide tailored legal solutions.",
      experience: "25+ Years Experience",
      philosophy: "Trust, competence and discreet advice are at the center of my client service."
    },
    contact: {
      title: "Get in Touch",
      subtitle: "I am happy to provide you with personal consultation",
      form: {
        name: "Full Name",
        email: "Email Address",
        subject: "Subject",
        message: "Your Message",
        submit: "Send Message",
        privacy: "I agree to data processing"
      },
      info: {
        address: "Address",
        phone: "Phone",
        email: "Email",
        hours: "Hours"
      }
    },
    footer: {
      copyright: "© 2024 Pister Law Firm. All rights reserved.",
      impressum: "Imprint",
      privacy: "Privacy",
      disclaimer: "Disclaimer"
    }
  }
};