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

  // Stats Section
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

  // Process Section
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

  // Team Section
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

  // Testimonials Section
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

  // FAQ Section
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
          },
          {
            name: "Dr. Ana Silva",
            role: "Rechtsberaterin",
            specialties: ["Steuerrecht", "Internationale Strukturen"],
            languages: ["Portugiesisch", "Französisch", "Englisch"],
            location: "Lissabon"
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
          content: "Me Pister hat unsere internationale Expansion mit bemerkenswerter Expertise geleitet. Sein strategischer Ansatz hat uns Tausende von Euro gespart, indem er rechtliche Fallstricke vermieden hat."
        },
        {
          name: "Sarah Chen",
          role: "Rechtsabteilungsleiterin",
          company: "TechStart GmbH",
          content: "Me Pisters Expertise im internationalen Handelsrecht ist außergewöhnlich. Er hat unsere Verträge mit chirurgischer Präzision verhandelt."
        },
        {
          name: "Jean-Pierre Dubois",
          role: "Unternehmer",
          company: "Export Solutions",
          content: "Dank Me Pister haben wir einen kostspieligen Rechtsstreit vermieden. Seine Beherrschung des internationalen Rechts ermöglichte es uns, eine elegante Lösung zu finden."
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
          answer: "Wir spezialisieren uns auf internationales Recht, Handelsrecht, internationale Vertragsrecht, Handelsschiedsgerichtsbarkeit und rechtliche Begleitung für Unternehmen bei internationaler Expansion. Unsere Expertise umfasst insbesondere grenzüberschreitende Transaktionen und internationale Rechtskonformität."
        },
        {
          question: "Was kostet eine Beratung?",
          answer: "Die erste 30-minütige Beratung ist völlig kostenlos. Dies ermöglicht es uns, Ihre Situation zu bewerten und Ihnen eine angepasste Strategie vorzuschlagen. Für nachfolgende Dienstleistungen bieten wir transparente Tarife an, die der Komplexität Ihres Falls angepasst sind, mit der Möglichkeit von Pauschalpreisen für Langzeitprojekte."
        },
        {
          question: "In welchen Ländern sind Sie tätig?",
          answer: "Dank unserem internationalen Partnernetzwerk sind wir hauptsächlich in Europa (Frankreich, Deutschland, Spanien, Italien, Portugal) tätig, aber auch in anderen Rechtssystemen je nach Bedarf. Wir sprechen 6 Sprachen und haben die notwendige Expertise, um in verschiedenen Rechtssystemen zu navigieren."
        },
        {
          question: "Wie sind Ihre Bearbeitungszeiten?",
          answer: "Wir verpflichten uns, innerhalb von 24 Stunden auf jede dringende Anfrage zu antworten. Für Standardberatungen kann ein Termin innerhalb von 48-72 Stunden vereinbart werden. Die Bearbeitungszeiten hängen von der Komplexität des Falls ab, aber wir stellen immer einen präzisen Zeitplan ab der Beauftragung zur Verfügung."
        },
        {
          question: "Wie läuft die Betreuung meines Falls ab?",
          answer: "Sie erhalten eine persönliche Betreuung mit regelmäßigen Updates zum Fortschritt. Wir nutzen moderne Kommunikationstools, um Sie in Echtzeit informiert zu halten. Jeder wichtige Schritt wird detailliert dokumentiert."
        },
        {
          question: "Bieten Sie Notfalldienste an?",
          answer: "Ja, wir haben einen Notfalldienst für kritische Situationen, die schnelle Intervention erfordern. Unsere Teams sind verfügbar, um dringende Fälle zu bearbeiten, mit einer Reaktionsgeschwindigkeit, die den Herausforderungen Ihrer Situation angepasst ist."
        }
      ],
      contact: {
        title: "Sie finden nicht die Antwort?",
        description: "Unser Team steht Ihnen zur Verfügung, um alle Ihre spezifischen Fragen zu beantworten.",
        button: "Kontaktieren Sie uns direkt"
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
    stats: {
      title: "Excellence mesurée en chiffres",
      subtitle: "Plus de deux décennies d'expertise juridique internationale avec des résultats exceptionnels",
      experience: "ans d'expérience",
      clients: "Clients satisfaits",
      languages: "Langues parlées",
      awards: "Récompenses juridiques",
      successRate: "Taux de réussite",
      response: "Réponse garantie",
      certifications: {
        dav: "DAV Certifié",
        iso: "ISO 9001",
        international: "International Bar"
      }
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
    process: {
      title: "Notre processus d'excellence",
      subtitle: "Une méthodologie éprouvée pour des résultats optimaux à chaque étape",
      consultation: {
        title: "Consultation initiale",
        description: "Analyse gratuite de votre situation juridique et définition de la stratégie optimale.",
        duration: "30 min",
        features: ["Évaluation gratuite", "Confidentialité absolue", "Conseil stratégique"]
      },
      study: {
        title: "Étude approfondie",
        description: "Analyse détaillée des aspects juridiques avec recherche documentaire complète.",
        duration: "2-5 jours",
        features: ["Recherche juridique", "Analyse des risques", "Rapport détaillé"]
      },
      action: {
        title: "Action juridique",
        description: "Mise en œuvre de la stratégie avec négociation et représentation professionnelle.",
        duration: "Variable",
        features: ["Négociation experte", "Représentation", "Suivi personnalisé"]
      },
      resolution: {
        title: "Résolution",
        description: "Finalisation du dossier avec documentation complète et suivi post-résolution.",
        duration: "Finalisé",
        features: ["Documentation", "Suivi gratuit", "Garanties"]
      },
      cta: {
        title: "Prêt à commencer ?",
        description: "Contactez-nous dès aujourd'hui pour votre consultation gratuite et découvrez comment nous pouvons vous aider.",
        button: "Consultation gratuite"
      }
    },
    team: {
      title: "Notre équipe d'excellence",
      subtitle: "Une expertise multilingue et multiculturelle au service de vos projets internationaux",
      founder: {
        name: "Me Jozef Pister",
        role: "Avocat principal",
        description: "Plus de 25 ans d'expérience en droit international. Spécialisé dans les transactions transfrontalières complexes.",
        specialties: ["Droit International", "Droit Commercial", "Arbitrage"],
        languages: ["Français", "Allemand", "Anglais", "Italien"],
        location: "Paris & Berlin",
        qualifications: ["DAV Certifié", "Maître en Droit International", "Arbitre ICC"]
      },
      associates: {
        title: "Réseau international d'associés",
        members: [
          {
            name: "Dr. Elena Rodriguez",
            role: "Avocate associée",
            specialties: ["Droit Européen", "Compliance"],
            languages: ["Espagnol", "Français", "Anglais"],
            location: "Madrid"
          },
          {
            name: "Marco Bernini",
            role: "Avocat senior",
            specialties: ["Droit Corporate", "M&A"],
            languages: ["Italien", "Français", "Anglais"],
            location: "Milan"
          },
          {
            name: "Dr. Ana Silva",
            role: "Consultante juridique",
            specialties: ["Droit Fiscal", "Structures Internationales"],
            languages: ["Portugais", "Français", "Anglais"],
            location: "Lisbonne"
          }
        ]
      }
    },
    testimonials: {
      title: "Ce que disent nos clients",
      subtitle: "La confiance de nos clients est notre plus grande récompense",
      clients: [
        {
          name: "Dr. Michael Weber",
          role: "CEO",
          company: "Weber Industries",
          content: "Me Pister a géré notre expansion internationale avec une expertise remarquable. Son approche stratégique nous a fait économiser des milliers d'euros en évitant les pièges juridiques."
        },
        {
          name: "Sarah Chen",
          role: "Directrice Juridique",
          company: "TechStart GmbH",
          content: "L'expertise en droit commercial international de Me Pister est exceptionnelle. Il a négocié nos contrats avec une précision chirurgicale."
        },
        {
          name: "Jean-Pierre Dubois",
          role: "Entrepreneur",
          company: "Export Solutions",
          content: "Grâce à Me Pister, nous avons évité un litige coûteux. Sa maîtrise du droit international nous a permis de trouver une solution élégante."
        }
      ],
      trustBadge: "Plus de 500 clients nous font confiance"
    },
    faq: {
      title: "Questions fréquentes",
      subtitle: "Trouvez rapidement les réponses à vos questions les plus courantes",
      items: [
        {
          question: "Quels sont vos domaines de spécialisation ?",
          answer: "Nous nous spécialisons en droit international, droit commercial, droit des contrats internationaux, arbitrage commercial, et accompagnement juridique pour les entreprises en expansion internationale. Notre expertise couvre particulièrement les transactions transfrontalières et la conformité réglementaire internationale."
        },
        {
          question: "Combien coûte une consultation ?",
          answer: "La première consultation de 30 minutes est entièrement gratuite. Cela nous permet d'évaluer votre situation et de vous proposer une stratégie adaptée. Pour les services suivants, nous proposons des tarifs transparents adaptés à la complexité de votre dossier, avec possibilité de forfaits pour les projets long terme."
        },
        {
          question: "Dans quels pays intervenez-vous ?",
          answer: "Grâce à notre réseau international d'associés, nous intervenons principalement en Europe (France, Allemagne, Espagne, Italie, Portugal), mais également dans d'autres juridictions selon les besoins. Nous parlons 6 langues et avons l'expertise nécessaire pour naviguer dans différents systèmes juridiques."
        },
        {
          question: "Quels sont vos délais d'intervention ?",
          answer: "Nous nous engageons à répondre dans les 24h pour toute demande urgente. Pour les consultations standard, un rendez-vous peut être fixé sous 48-72h. Les délais de traitement dépendent de la complexité du dossier, mais nous fournissons toujours un calendrier précis dès l'engagement."
        },
        {
          question: "Comment se déroule le suivi de mon dossier ?",
          answer: "Vous bénéficiez d'un suivi personnalisé avec des points réguliers sur l'avancement. Nous utilisons des outils de communication modernes pour vous tenir informé en temps réel. Chaque étape importante fait l'objet d'un compte-rendu détaillé."
        },
        {
          question: "Proposez-vous des services en urgence ?",
          answer: "Oui, nous avons un service d'urgence pour les situations critiques nécessitant une intervention rapide. Nos équipes sont disponibles pour traiter les dossiers urgents, avec une réactivité adaptée aux enjeux de votre situation."
        }
      ],
      contact: {
        title: "Vous ne trouvez pas la réponse ?",
        description: "Notre équipe est à votre disposition pour répondre à toutes vos questions spécifiques.",
        button: "Contactez-nous directement"
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
    stats: {
      title: "Excellence Measured in Numbers",
      subtitle: "Over two decades of international legal expertise with exceptional results",
      experience: "years experience",
      clients: "Satisfied clients",
      languages: "Languages spoken",
      awards: "Legal awards",
      successRate: "Success rate",
      response: "Response guarantee",
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
    process: {
      title: "Our Process of Excellence",
      subtitle: "A proven methodology for optimal results at every stage",
      consultation: {
        title: "Initial Consultation",
        description: "Free analysis of your legal situation and definition of optimal strategy.",
        duration: "30 min",
        features: ["Free evaluation", "Absolute confidentiality", "Strategic advice"]
      },
      study: {
        title: "In-depth Study",
        description: "Detailed analysis of legal aspects with comprehensive documentary research.",
        duration: "2-5 days",
        features: ["Legal research", "Risk analysis", "Detailed report"]
      },
      action: {
        title: "Legal Action",
        description: "Implementation of strategy with negotiation and professional representation.",
        duration: "Variable",
        features: ["Expert negotiation", "Representation", "Personal follow-up"]
      },
      resolution: {
        title: "Resolution",
        description: "Case finalization with complete documentation and post-resolution follow-up.",
        duration: "Finalized",
        features: ["Documentation", "Free follow-up", "Guarantees"]
      },
      cta: {
        title: "Ready to Start?",
        description: "Contact us today for your free consultation and discover how we can help you.",
        button: "Free Consultation"
      }
    },
    team: {
      title: "Our Team of Excellence",
      subtitle: "Multilingual and multicultural expertise serving your international projects",
      founder: {
        name: "Mr. Jozef Pister",
        role: "Principal Lawyer",
        description: "Over 25 years of experience in international law. Specialized in complex cross-border transactions.",
        specialties: ["International Law", "Commercial Law", "Arbitration"],
        languages: ["French", "German", "English", "Italian"],
        location: "Paris & Berlin",
        qualifications: ["DAV Certified", "Master in International Law", "ICC Arbitrator"]
      },
      associates: {
        title: "International Network of Associates",
        members: [
          {
            name: "Dr. Elena Rodriguez",
            role: "Associate Lawyer",
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
          },
          {
            name: "Dr. Ana Silva",
            role: "Legal Consultant",
            specialties: ["Tax Law", "International Structures"],
            languages: ["Portuguese", "French", "English"],
            location: "Lisbon"
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
          content: "Mr. Pister managed our international expansion with remarkable expertise. His strategic approach saved us thousands of euros by avoiding legal pitfalls."
        },
        {
          name: "Sarah Chen",
          role: "Legal Director",
          company: "TechStart GmbH",
          content: "Mr. Pister's expertise in international commercial law is exceptional. He negotiated our contracts with surgical precision."
        },
        {
          name: "Jean-Pierre Dubois",
          role: "Entrepreneur",
          company: "Export Solutions",
          content: "Thanks to Mr. Pister, we avoided a costly litigation. His mastery of international law allowed us to find an elegant solution."
        }
      ],
      trustBadge: "Over 500 clients trust us"
    },
    faq: {
      title: "Frequently Asked Questions",
      subtitle: "Quickly find answers to your most common questions",
      items: [
        {
          question: "What are your areas of specialization?",
          answer: "We specialize in international law, commercial law, international contract law, commercial arbitration, and legal support for companies in international expansion. Our expertise particularly covers cross-border transactions and international regulatory compliance."
        },
        {
          question: "How much does a consultation cost?",
          answer: "The first 30-minute consultation is completely free. This allows us to evaluate your situation and propose an adapted strategy. For subsequent services, we offer transparent rates adapted to the complexity of your case, with the possibility of flat rates for long-term projects."
        },
        {
          question: "In which countries do you operate?",
          answer: "Thanks to our international network of associates, we operate mainly in Europe (France, Germany, Spain, Italy, Portugal), but also in other jurisdictions as needed. We speak 6 languages and have the necessary expertise to navigate different legal systems."
        },
        {
          question: "What are your intervention times?",
          answer: "We commit to responding within 24 hours for any urgent request. For standard consultations, an appointment can be scheduled within 48-72 hours. Processing times depend on the complexity of the case, but we always provide a precise schedule from engagement."
        },
        {
          question: "How is my case followed up?",
          answer: "You benefit from personalized follow-up with regular updates on progress. We use modern communication tools to keep you informed in real time. Each important step is subject to a detailed report."
        },
        {
          question: "Do you offer emergency services?",
          answer: "Yes, we have an emergency service for critical situations requiring rapid intervention. Our teams are available to handle urgent cases, with responsiveness adapted to the stakes of your situation."
        }
      ],
      contact: {
        title: "Can't find the answer?",
        description: "Our team is at your disposal to answer all your specific questions.",
        button: "Contact us directly"
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
    stats: {
      title: "Excelencia medida en números",
      subtitle: "Más de dos décadas de experiencia jurídica internacional con resultados excepcionales",
      experience: "años de experiencia",
      clients: "Clientes satisfechos",
      languages: "Idiomas hablados",
      awards: "Premios jurídicos",
      successRate: "Tasa de éxito",
      response: "Garantía de respuesta",
      certifications: {
        dav: "DAV Certificado",
        iso: "ISO 9001",
        international: "International Bar"
      }
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
    process: {
      title: "Nuestro proceso de excelencia",
      subtitle: "Una metodología probada para resultados óptimos en cada etapa",
      consultation: {
        title: "Consulta inicial",
        description: "Análisis gratuito de su situación jurídica y definición de la estrategia óptima.",
        duration: "30 min",
        features: ["Evaluación gratuita", "Confidencialidad absoluta", "Consejo estratégico"]
      },
      study: {
        title: "Estudio en profundidad",
        description: "Análisis detallado de aspectos jurídicos con investigación documental completa.",
        duration: "2-5 días",
        features: ["Investigación jurídica", "Análisis de riesgos", "Informe detallado"]
      },
      action: {
        title: "Acción jurídica",
        description: "Implementación de la estrategia con negociación y representación profesional.",
        duration: "Variable",
        features: ["Negociación experta", "Representación", "Seguimiento personalizado"]
      },
      resolution: {
        title: "Resolución",
        description: "Finalización del caso con documentación completa y seguimiento post-resolución.",
        duration: "Finalizado",
        features: ["Documentación", "Seguimiento gratuito", "Garantías"]
      },
      cta: {
        title: "¿Listo para empezar?",
        description: "Contáctenos hoy para su consulta gratuita y descubra cómo podemos ayudarle.",
        button: "Consulta gratuita"
      }
    },
    team: {
      title: "Nuestro equipo de excelencia",
      subtitle: "Experiencia multilingüe y multicultural al servicio de sus proyectos internacionales",
      founder: {
        name: "Sr. Jozef Pister",
        role: "Abogado principal",
        description: "Más de 25 años de experiencia en derecho internacional. Especializado en transacciones transfronterizas complejas.",
        specialties: ["Derecho Internacional", "Derecho Comercial", "Arbitraje"],
        languages: ["Francés", "Alemán", "Inglés", "Italiano"],
        location: "París y Berlín",
        qualifications: ["DAV Certificado", "Máster en Derecho Internacional", "Árbitro ICC"]
      },
      associates: {
        title: "Red internacional de asociados",
        members: [
          {
            name: "Dr. Elena Rodriguez",
            role: "Abogada asociada",
            specialties: ["Derecho Europeo", "Cumplimiento"],
            languages: ["Español", "Francés", "Inglés"],
            location: "Madrid"
          },
          {
            name: "Marco Bernini",
            role: "Abogado senior",
            specialties: ["Derecho Corporativo", "M&A"],
            languages: ["Italiano", "Francés", "Inglés"],
            location: "Milán"
          },
          {
            name: "Dr. Ana Silva",
            role: "Consultora jurídica",
            specialties: ["Derecho Fiscal", "Estructuras Internacionales"],
            languages: ["Portugués", "Francés", "Inglés"],
            location: "Lisboa"
          }
        ]
      }
    },
    testimonials: {
      title: "Lo que dicen nuestros clientes",
      subtitle: "La confianza de nuestros clientes es nuestra mayor recompensa",
      clients: [
        {
          name: "Dr. Michael Weber",
          role: "CEO",
          company: "Weber Industries",
          content: "El Sr. Pister gestionó nuestra expansión internacional con una experiencia notable. Su enfoque estratégico nos ahorró miles de euros evitando trampas legales."
        },
        {
          name: "Sarah Chen",
          role: "Directora Jurídica",
          company: "TechStart GmbH",
          content: "La experiencia del Sr. Pister en derecho comercial internacional es excepcional. Negoció nuestros contratos con precisión quirúrgica."
        },
        {
          name: "Jean-Pierre Dubois",
          role: "Empresario",
          company: "Export Solutions",
          content: "Gracias al Sr. Pister, evitamos un litigio costoso. Su dominio del derecho internacional nos permitió encontrar una solución elegante."
        }
      ],
      trustBadge: "Más de 500 clientes confían en nosotros"
    },
    faq: {
      title: "Preguntas frecuentes",
      subtitle: "Encuentre rápidamente respuestas a sus preguntas más comunes",
      items: [
        {
          question: "¿Cuáles son sus áreas de especialización?",
          answer: "Nos especializamos en derecho internacional, derecho comercial, derecho de contratos internacionales, arbitraje comercial, y acompañamiento jurídico para empresas en expansión internacional. Nuestra experiencia cubre particularmente transacciones transfronterizas y cumplimiento regulatorio internacional."
        },
        {
          question: "¿Cuánto cuesta una consulta?",
          answer: "La primera consulta de 30 minutos es completamente gratuita. Esto nos permite evaluar su situación y proponerle una estrategia adaptada. Para servicios posteriores, ofrecemos tarifas transparentes adaptadas a la complejidad de su caso, con posibilidad de tarifas fijas para proyectos a largo plazo."
        },
        {
          question: "¿En qué países operan?",
          answer: "Gracias a nuestra red internacional de asociados, operamos principalmente en Europa (Francia, Alemania, España, Italia, Portugal), pero también en otras jurisdicciones según las necesidades. Hablamos 6 idiomas y tenemos la experiencia necesaria para navegar en diferentes sistemas jurídicos."
        },
        {
          question: "¿Cuáles son sus tiempos de intervención?",
          answer: "Nos comprometemos a responder dentro de las 24 horas para cualquier solicitud urgente. Para consultas estándar, se puede programar una cita dentro de 48-72 horas. Los tiempos de procesamiento dependen de la complejidad del caso, pero siempre proporcionamos un horario preciso desde el compromiso."
        },
        {
          question: "¿Cómo se realiza el seguimiento de mi caso?",
          answer: "Se beneficia de un seguimiento personalizado con actualizaciones regulares sobre el progreso. Utilizamos herramientas de comunicación modernas para mantenerle informado en tiempo real. Cada paso importante está sujeto a un informe detallado."
        },
        {
          question: "¿Ofrecen servicios de emergencia?",
          answer: "Sí, tenemos un servicio de emergencia para situaciones críticas que requieren intervención rápida. Nuestros equipos están disponibles para manejar casos urgentes, con capacidad de respuesta adaptada a las necesidades de su situación."
        }
      ],
      contact: {
        title: "¿No encuentra la respuesta?",
        description: "Nuestro equipo está a su disposición para responder a todas sus preguntas específicas.",
        button: "Contáctenos directamente"
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
    stats: {
      title: "Eccellenza misurata in numeri",
      subtitle: "Oltre due decenni di esperienza legale internazionale con risultati eccezionali",
      experience: "anni di esperienza",
      clients: "Clienti soddisfatti",
      languages: "Lingue parlate",
      awards: "Premi legali",
      successRate: "Tasso di successo",
      response: "Garanzia di risposta",
      certifications: {
        dav: "DAV Certificato",
        iso: "ISO 9001",
        international: "International Bar"
      }
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
    process: {
      title: "Il nostro processo di eccellenza",
      subtitle: "Una metodologia comprovata per risultati ottimali in ogni fase",
      consultation: {
        title: "Consultazione iniziale",
        description: "Analisi gratuita della sua situazione legale e definizione della strategia ottimale.",
        duration: "30 min",
        features: ["Valutazione gratuita", "Riservatezza assoluta", "Consiglio strategico"]
      },
      study: {
        title: "Studio approfondito",
        description: "Analisi dettagliata degli aspetti legali con ricerca documentale completa.",
        duration: "2-5 giorni",
        features: ["Ricerca legale", "Analisi dei rischi", "Rapporto dettagliato"]
      },
      action: {
        title: "Azione legale",
        description: "Implementazione della strategia con negoziazione e rappresentanza professionale.",
        duration: "Variabile",
        features: ["Negoziazione esperta", "Rappresentanza", "Follow-up personalizzato"]
      },
      resolution: {
        title: "Risoluzione",
        description: "Finalizzazione del caso con documentazione completa e follow-up post-risoluzione.",
        duration: "Finalizzato",
        features: ["Documentazione", "Follow-up gratuito", "Garanzie"]
      },
      cta: {
        title: "Pronto per iniziare?",
        description: "Contattaci oggi per la tua consultazione gratuita e scopri come possiamo aiutarti.",
        button: "Consultazione gratuita"
      }
    },
    team: {
      title: "Il nostro team di eccellenza",
      subtitle: "Competenza multilingue e multiculturale al servizio dei vostri progetti internazionali",
      founder: {
        name: "Sig. Jozef Pister",
        role: "Avvocato principale",
        description: "Oltre 25 anni di esperienza nel diritto internazionale. Specializzato in transazioni transfrontaliere complesse.",
        specialties: ["Diritto Internazionale", "Diritto Commerciale", "Arbitrato"],
        languages: ["Francese", "Tedesco", "Inglese", "Italiano"],
        location: "Parigi e Berlino",
        qualifications: ["DAV Certificato", "Master in Diritto Internazionale", "Arbitro ICC"]
      },
      associates: {
        title: "Rete internazionale di associati",
        members: [
          {
            name: "Dr. Elena Rodriguez",
            role: "Avvocato associato",
            specialties: ["Diritto Europeo", "Compliance"],
            languages: ["Spagnolo", "Francese", "Inglese"],
            location: "Madrid"
          },
          {
            name: "Marco Bernini",
            role: "Avvocato senior",
            specialties: ["Diritto Societario", "M&A"],
            languages: ["Italiano", "Francese", "Inglese"],
            location: "Milano"
          },
          {
            name: "Dr. Ana Silva",
            role: "Consulente legale",
            specialties: ["Diritto Fiscale", "Strutture Internazionali"],
            languages: ["Portoghese", "Francese", "Inglese"],
            location: "Lisbona"
          }
        ]
      }
    },
    testimonials: {
      title: "Cosa dicono i nostri clienti",
      subtitle: "La fiducia dei nostri clienti è la nostra più grande ricompensa",
      clients: [
        {
          name: "Dr. Michael Weber",
          role: "CEO",
          company: "Weber Industries",
          content: "Il Sig. Pister ha gestito la nostra espansione internazionale con competenza notevole. Il suo approccio strategico ci ha fatto risparmiare migliaia di euro evitando trabocchetti legali."
        },
        {
          name: "Sarah Chen",
          role: "Direttore Legale",
          company: "TechStart GmbH",
          content: "L'esperienza del Sig. Pister nel diritto commerciale internazionale è eccezionale. Ha negoziato i nostri contratti con precisione chirurgica."
        },
        {
          name: "Jean-Pierre Dubois",
          role: "Imprenditore",
          company: "Export Solutions",
          content: "Grazie al Sig. Pister, abbiamo evitato un contenzioso costoso. La sua padronanza del diritto internazionale ci ha permesso di trovare una soluzione elegante."
        }
      ],
      trustBadge: "Oltre 500 clienti si fidano di noi"
    },
    faq: {
      title: "Domande frequenti",
      subtitle: "Trova rapidamente le risposte alle tue domande più comuni",
      items: [
        {
          question: "Quali sono le vostre aree di specializzazione?",
          answer: "Ci specializziamo in diritto internazionale, diritto commerciale, diritto contrattuale internazionale, arbitrato commerciale, e accompagnamento legale per aziende in espansione internazionale. La nostra competenza copre particolarmente transazioni transfrontaliere e conformità normativa internazionale."
        },
        {
          question: "Quanto costa una consultazione?",
          answer: "La prima consultazione di 30 minuti è completamente gratuita. Questo ci permette di valutare la vostra situazione e proporvi una strategia adattata. Per i servizi successivi, offriamo tariffe trasparenti adattate alla complessità del vostro caso, con possibilità di tariffe fisse per progetti a lungo termine."
        },
        {
          question: "In quali paesi operate?",
          answer: "Grazie alla nostra rete internazionale di associati, operiamo principalmente in Europa (Francia, Germania, Spagna, Italia, Portogallo), ma anche in altre giurisdizioni secondo le necessità. Parliamo 6 lingue e abbiamo l'expertise necessaria per navigare in diversi sistemi legali."
        },
        {
          question: "Quali sono i vostri tempi di intervento?",
          answer: "Ci impegniamo a rispondere entro 24 ore per qualsiasi richiesta urgente. Per consultazioni standard, un appuntamento può essere fissato entro 48-72 ore. I tempi di elaborazione dipendono dalla complessità del caso, ma forniamo sempre un calendario preciso dall'impegno."
        },
        {
          question: "Come si svolge il follow-up del mio caso?",
          answer: "Beneficiate di un follow-up personalizzato con aggiornamenti regolari sui progressi. Utilizziamo strumenti di comunicazione moderni per tenervi informati in tempo reale. Ogni passo importante è oggetto di un rapporto dettagliato."
        },
        {
          question: "Offrite servizi di emergenza?",
          answer: "Sì, abbiamo un servizio di emergenza per situazioni critiche che richiedono intervento rapido. I nostri team sono disponibili per trattare casi urgenti, con reattività adattata alle necessità della vostra situazione."
        }
      ],
      contact: {
        title: "Non trovate la risposta?",
        description: "Il nostro team è a vostra disposizione per rispondere a tutte le vostre domande specifiche.",
        button: "Contattateci direttamente"
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
    stats: {
      title: "Excelência medida em números",
      subtitle: "Mais de duas décadas de experiência jurídica internacional com resultados excepcionais",
      experience: "anos de experiência",
      clients: "Clientes satisfeitos",
      languages: "Idiomas falados",
      awards: "Prêmios jurídicos",
      successRate: "Taxa de sucesso",
      response: "Garantia de resposta",
      certifications: {
        dav: "DAV Certificado",
        iso: "ISO 9001",
        international: "International Bar"
      }
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
    process: {
      title: "Nosso processo de excelência",
      subtitle: "Uma metodologia comprovada para resultados ótimos em cada etapa",
      consultation: {
        title: "Consulta inicial",
        description: "Análise gratuita da sua situação jurídica e definição da estratégia ótima.",
        duration: "30 min",
        features: ["Avaliação gratuita", "Confidencialidade absoluta", "Conselho estratégico"]
      },
      study: {
        title: "Estudo aprofundado",
        description: "Análise detalhada dos aspectos jurídicos com pesquisa documental completa.",
        duration: "2-5 dias",
        features: ["Pesquisa jurídica", "Análise de riscos", "Relatório detalhado"]
      },
      action: {
        title: "Ação jurídica",
        description: "Implementação da estratégia com negociação e representação profissional.",
        duration: "Variável",
        features: ["Negociação especializada", "Representação", "Acompanhamento personalizado"]
      },
      resolution: {
        title: "Resolução",
        description: "Finalização do caso com documentação completa e acompanhamento pós-resolução.",
        duration: "Finalizado",
        features: ["Documentação", "Acompanhamento gratuito", "Garantias"]
      },
      cta: {
        title: "Pronto para começar?",
        description: "Entre em contato conosco hoje para sua consulta gratuita e descubra como podemos ajudá-lo.",
        button: "Consulta gratuita"
      }
    },
    team: {
      title: "Nossa equipe de excelência",
      subtitle: "Expertise multilíngue e multicultural a serviço dos seus projetos internacionais",
      founder: {
        name: "Sr. Jozef Pister",
        role: "Advogado principal",
        description: "Mais de 25 anos de experiência em direito internacional. Especializado em transações transfronteiriças complexas.",
        specialties: ["Direito Internacional", "Direito Comercial", "Arbitragem"],
        languages: ["Francês", "Alemão", "Inglês", "Italiano"],
        location: "Paris e Berlim",
        qualifications: ["DAV Certificado", "Mestre em Direito Internacional", "Árbitro ICC"]
      },
      associates: {
        title: "Rede internacional de associados",
        members: [
          {
            name: "Dr. Elena Rodriguez",
            role: "Advogada associada",
            specialties: ["Direito Europeu", "Compliance"],
            languages: ["Espanhol", "Francês", "Inglês"],
            location: "Madrid"
          },
          {
            name: "Marco Bernini",
            role: "Advogado sênior",
            specialties: ["Direito Corporativo", "M&A"],
            languages: ["Italiano", "Francês", "Inglês"],
            location: "Milão"
          },
          {
            name: "Dr. Ana Silva",
            role: "Consultora jurídica",
            specialties: ["Direito Fiscal", "Estruturas Internacionais"],
            languages: ["Português", "Francês", "Inglês"],
            location: "Lisboa"
          }
        ]
      }
    },
    testimonials: {
      title: "O que dizem nossos clientes",
      subtitle: "A confiança dos nossos clientes é nossa maior recompensa",
      clients: [
        {
          name: "Dr. Michael Weber",
          role: "CEO",
          company: "Weber Industries",
          content: "O Sr. Pister gerenciou nossa expansão internacional com expertise notável. Sua abordagem estratégica nos economizou milhares de euros evitando armadilhas jurídicas."
        },
        {
          name: "Sarah Chen",
          role: "Diretora Jurídica",
          company: "TechStart GmbH",
          content: "A expertise do Sr. Pister em direito comercial internacional é excepcional. Ele negociou nossos contratos com precisão cirúrgica."
        },
        {
          name: "Jean-Pierre Dubois",
          role: "Empresário",
          company: "Export Solutions",
          content: "Graças ao Sr. Pister, evitamos um litígio custoso. Seu domínio do direito internacional nos permitiu encontrar uma solução elegante."
        }
      ],
      trustBadge: "Mais de 500 clientes confiam em nós"
    },
    faq: {
      title: "Perguntas frequentes",
      subtitle: "Encontre rapidamente respostas para suas perguntas mais comuns",
      items: [
        {
          question: "Quais são suas áreas de especialização?",
          answer: "Especializamo-nos em direito internacional, direito comercial, direito de contratos internacionais, arbitragem comercial, e acompanhamento jurídico para empresas em expansão internacional. Nossa expertise cobre particularmente transações transfronteiriças e conformidade regulatória internacional."
        },
        {
          question: "Quanto custa uma consulta?",
          answer: "A primeira consulta de 30 minutos é completamente gratuita. Isso nos permite avaliar sua situação e propor uma estratégia adaptada. Para serviços subsequentes, oferecemos tarifas transparentes adaptadas à complexidade do seu caso, com possibilidade de valores fixos para projetos de longo prazo."
        },
        {
          question: "Em quais países vocês operam?",
          answer: "Graças à nossa rede internacional de associados, operamos principalmente na Europa (França, Alemanha, Espanha, Itália, Portugal), mas também em outras jurisdições conforme necessário. Falamos 6 idiomas e temos a expertise necessária para navegar em diferentes sistemas jurídicos."
        },
        {
          question: "Quais são seus tempos de intervenção?",
          answer: "Comprometemo-nos a responder dentro de 24 horas para qualquer solicitação urgente. Para consultas padrão, uma consulta pode ser agendada dentro de 48-72 horas. Os tempos de processamento dependem da complexidade do caso, mas sempre fornecemos um cronograma preciso desde o compromisso."
        },
        {
          question: "Como é o acompanhamento do meu caso?",
          answer: "Você se beneficia de um acompanhamento personalizado com atualizações regulares sobre o progresso. Usamos ferramentas de comunicação modernas para mantê-lo informado em tempo real. Cada etapa importante é objeto de um relatório detalhado."
        },
        {
          question: "Vocês oferecem serviços de emergência?",
          answer: "Sim, temos um serviço de emergência para situações críticas que requerem intervenção rápida. Nossas equipes estão disponíveis para tratar casos urgentes, com responsividade adaptada às necessidades da sua situação."
        }
      ],
      contact: {
        title: "Não encontra a resposta?",
        description: "Nossa equipe está à sua disposição para responder todas as suas perguntas específicas.",
        button: "Entre em contato diretamente"
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
    }
  }
};