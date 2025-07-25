import { Globe, Building, Scale, FileText, Gavel, ArrowRight, Star, Shield, Zap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useTranslations } from '@/hooks/useTranslations';

const ServicesSection = () => {
  const { t } = useTranslations();

  const services = [
    {
      icon: Globe,
      title: t.services.international.title,
      description: t.services.international.description,
      features: ["Grenzüberschreitende Verträge", "Internationale Streitigkeiten", "Rechtssystem-Beratung"],
      color: "primary"
    },
    {
      icon: Building,
      title: t.services.commercial.title,
      description: t.services.commercial.description,
      features: ["Unternehmensrecht", "Handelsverträge", "Commercial Due Diligence"],
      color: "accent"
    },
    {
      icon: Scale,
      title: t.services.european.title,
      description: t.services.european.description,
      features: ["EU-Compliance", "Binnenmarkt-Recht", "Kartellrecht"],
      color: "primary"
    },
    {
      icon: FileText,
      title: t.services.contracts.title,
      description: t.services.contracts.description,
      features: ["Vertragsentwurf", "Legal Review", "Risikobewertung"],
      color: "accent"
    },
    {
      icon: Gavel,
      title: t.services.arbitration.title,
      description: t.services.arbitration.description,
      features: ["Schiedsverfahren", "Mediation", "Enforcement"],
      color: "primary"
    }
  ];

  return (
    <section id="services" className="py-16 bg-gradient-to-br from-primary/5 via-accent/5 to-muted/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Clean Header */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-6 py-3">
            <Shield className="h-5 w-5 text-accent" />
            <span className="font-medium text-primary">Rechtsgebiete & Expertise</span>
          </div>

          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-primary leading-tight">
            {t.services.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t.services.subtitle}
          </p>
        </div>

        {/* Clean Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-background/70 backdrop-blur-sm border border-border/50 hover:shadow-card hover:bg-background/90 transition-all duration-300"
            >
              <CardHeader className="text-center pb-4">
                <div className="mb-4">
                  <div className={`w-12 h-12 ${service.color === 'primary' ? 'bg-primary' : 'bg-accent'} rounded-lg flex items-center justify-center mx-auto`}>
                    <service.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                </div>
                <CardTitle className="text-lg font-playfair text-primary">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-muted-foreground leading-relaxed mb-4">
                  {service.description}
                </CardDescription>
                
                {/* Service features */}
                <div className="space-y-2 mb-4">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                      <span className="text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <Button 
                  type="button"
                  variant="ghost" 
                  className="w-full text-primary hover:bg-primary/10"
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Mehr erfahren
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Clean Additional Info Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="font-playfair text-3xl font-bold text-primary">
                {t.services.whyUs}
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Als spezialisierte Kanzlei für internationales Recht bieten wir Ihnen einzigartige Vorteile und erstklassige Beratung.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  icon: Globe,
                  title: t.services.benefits.expertise.title,
                  description: t.services.benefits.expertise.description
                },
                {
                  icon: Zap,
                  title: t.services.benefits.multilingual.title,
                  description: t.services.benefits.multilingual.description
                },
                {
                  icon: Star,
                  title: t.services.benefits.experience.title,
                  description: t.services.benefits.experience.description
                },
                {
                  icon: Shield,
                  title: t.services.benefits.personal.title,
                  description: t.services.benefits.personal.description
                }
              ].map((benefit, index) => (
                <div 
                  key={index} 
                  className="flex items-start space-x-3"
                >
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">
                      {benefit.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="space-y-6">
            {/* Simple consultation card */}
            <div className="bg-primary text-primary-foreground p-8 rounded-lg">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                    <Star className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-xl font-playfair font-bold">{t.services.consultation.title}</h4>
                    <p className="text-accent font-medium">{t.services.consultation.subtitle}</p>
                  </div>
                </div>
                
                <p className="leading-relaxed opacity-90">
                  {t.services.consultation.description}
                </p>
                
                <div className="grid grid-cols-2 gap-4 py-4">
                  <div className="text-center">
                    <div className="text-lg font-bold text-accent">{t.services.consultation.duration}</div>
                    <div className="text-xs opacity-80">Kostenfrei</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-accent">{t.services.consultation.response}</div>
                    <div className="text-xs opacity-80">Antwortzeit</div>
                  </div>
                </div>

                <Button 
                  type="button"
                  size="lg"
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  {t.services.consultation.cta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>

                <div className="text-center text-xs opacity-75 pt-2">
                  {t.services.consultation.hours}
                </div>
              </div>
            </div>

            {/* Simple trust indicators */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-background/70 backdrop-blur-sm border border-border p-4 rounded-lg text-center hover:bg-background/90 transition-all duration-300">
                <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Shield className="h-4 w-4 text-accent-foreground" />
                </div>
                <div className="font-bold text-primary">100%</div>
                <div className="text-xs text-muted-foreground">Vertraulichkeit</div>
              </div>
              <div className="bg-background/70 backdrop-blur-sm border border-border p-4 rounded-lg text-center hover:bg-background/90 transition-all duration-300">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Star className="h-4 w-4 text-primary-foreground" />
                </div>
                <div className="font-bold text-primary">98%</div>
                <div className="text-xs text-muted-foreground">Erfolgsquote</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;