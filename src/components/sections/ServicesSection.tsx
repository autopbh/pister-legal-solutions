import { Globe, Building, Scale, FileText, Gavel, ArrowRight, Star, Shield, Zap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/useLanguage';

const ServicesSection = () => {
  const { t } = useLanguage();

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
      features: ["Unternehmensrecht", "M&A Transaktionen", "Compliance"],
      color: "accent"
    },
    {
      icon: Scale,
      title: t.services.european.title,
      description: t.services.european.description,
      features: ["EU-Regulierung", "Binnenmarktrecht", "Wettbewerbsrecht"],
      color: "primary"
    },
    {
      icon: FileText,
      title: t.services.contracts.title,
      description: t.services.contracts.description,
      features: ["Vertragsgestaltung", "Rechtswahl", "Streitklauseln"],
      color: "accent"
    },
    {
      icon: Gavel,
      title: t.services.arbitration.title,
      description: t.services.arbitration.description,
      features: ["ICC Schiedsverfahren", "UNCITRAL", "Mediation"],
      color: "primary"
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-background via-muted/10 to-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-accent/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-primary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center space-y-6 mb-20 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full px-6 py-3">
            <Shield className="h-5 w-5 text-accent" />
            <span className="font-medium text-primary">Rechtsgebiete & Expertise</span>
          </div>

          <h2 className="font-playfair text-5xl lg:text-6xl font-bold text-primary leading-tight">
            {t.services.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Umfassende juristische Beratung in allen Bereichen des internationalen und kommerziellen Rechts mit höchster Expertise und persönlicher Betreuung
          </p>
        </div>

        {/* Enhanced Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group card-premium border-0 hover:shadow-elegant transition-all duration-500 hover:-translate-y-3 animate-scale-in relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Decorative gradient overlay */}
              <div className="absolute inset-0 bg-gradient-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <CardHeader className="text-center pb-6 relative z-10">
                <div className="relative mb-6">
                  <div className={`w-20 h-20 bg-gradient-${service.color} rounded-3xl flex items-center justify-center mx-auto shadow-card group-hover:shadow-glow group-hover:scale-110 transition-all duration-500`}>
                    <service.icon className="h-10 w-10 text-primary-foreground" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-accent rounded-full flex items-center justify-center animate-pulse-glow">
                    <Star className="h-3 w-3 text-accent-foreground" />
                  </div>
                </div>
                <CardTitle className="text-xl font-playfair text-primary group-hover:text-primary-glow transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <CardDescription className="text-center text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </CardDescription>
                
                {/* Service features */}
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3 group/feature">
                      <div className="w-2 h-2 bg-accent rounded-full group-hover/feature:scale-150 transition-transform duration-300"></div>
                      <span className="text-sm text-muted-foreground group-hover/feature:text-foreground transition-colors">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <Button 
                  variant="ghost" 
                  className="w-full group-hover:bg-primary/10 group-hover:text-primary transition-all duration-300"
                >
                  Mehr erfahren
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enhanced Additional Info Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-6">
              <h3 className="font-playfair text-4xl font-bold text-primary">
                Warum Kanzlei Pister?
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Als spezialisierte Kanzlei für internationales Recht bieten wir Ihnen einzigartige Vorteile und erstklassige Beratung.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: Globe,
                  title: "Internationale Expertise",
                  description: "Lokale Kompetenz mit globalem Verständnis"
                },
                {
                  icon: Zap,
                  title: "Mehrsprachige Beratung",
                  description: "Fließende Kommunikation in 6 Sprachen"
                },
                {
                  icon: Star,
                  title: "25+ Jahre Erfahrung",
                  description: "Bewährte Expertise im internationalen Recht"
                },
                {
                  icon: Shield,
                  title: "Persönliche Betreuung",
                  description: "Diskrete und maßgeschneiderte Lösungen"
                }
              ].map((benefit, index) => (
                <div 
                  key={index} 
                  className="flex items-start space-x-4 group cursor-default"
                >
                  <div className="w-12 h-12 bg-gradient-primary rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-card">
                    <benefit.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                      {benefit.title}
                    </h4>
                    <p className="text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="space-y-8 animate-slide-in-right">
            {/* Premium consultation card */}
            <div className="card-premium bg-gradient-hero text-primary-foreground p-10 shadow-elegant relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-accent/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-accent/10 rounded-full blur-2xl"></div>
              
              <div className="relative z-10 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-accent-gold/20 rounded-2xl flex items-center justify-center">
                    <Star className="h-8 w-8 text-accent-gold" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-playfair font-bold">Erste Beratung kostenfrei</h4>
                    <p className="text-accent-gold font-medium">Unverbindlich & professionell</p>
                  </div>
                </div>
                
                <p className="text-lg leading-relaxed opacity-90">
                  Nutzen Sie unsere kostenlose Erstberatung für eine erste Einschätzung Ihres rechtlichen Anliegens.
                </p>
                
                <div className="grid grid-cols-2 gap-6 py-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent-gold">30min</div>
                    <div className="text-sm opacity-80">Kostenfrei</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent-gold">24h</div>
                    <div className="text-sm opacity-80">Antwortzeit</div>
                  </div>
                </div>

                <Button 
                  size="lg"
                  className="w-full bg-accent-gold text-accent-foreground hover:bg-accent-gold/90 transition-all duration-300 font-bold"
                >
                  Jetzt Termin vereinbaren
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>

                <div className="text-center text-sm opacity-75 pt-2">
                  📞 Mo-Fr 9:00-18:00 • Sa 10:00-14:00
                </div>
              </div>
            </div>

            {/* Trust indicators */}
            <div className="grid grid-cols-2 gap-4">
              <div className="card-premium p-6 text-center group">
                <div className="w-12 h-12 bg-gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="h-6 w-6 text-accent-foreground" />
                </div>
                <div className="font-bold text-lg text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Vertraulichkeit</div>
              </div>
              <div className="card-premium p-6 text-center group">
                <div className="w-12 h-12 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  <Star className="h-6 w-6 text-primary-foreground" />
                </div>
                <div className="font-bold text-lg text-primary">98%</div>
                <div className="text-sm text-muted-foreground">Erfolgsquote</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;