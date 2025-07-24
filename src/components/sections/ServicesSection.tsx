import { Globe, Building, Scale, FileText, Gavel } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/hooks/useLanguage';

const ServicesSection = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Globe,
      title: t.services.international.title,
      description: t.services.international.description,
      color: "text-blue-600"
    },
    {
      icon: Building,
      title: t.services.commercial.title,
      description: t.services.commercial.description,
      color: "text-emerald-600"
    },
    {
      icon: Scale,
      title: t.services.european.title,
      description: t.services.european.description,
      color: "text-purple-600"
    },
    {
      icon: FileText,
      title: t.services.contracts.title,
      description: t.services.contracts.description,
      color: "text-orange-600"
    },
    {
      icon: Gavel,
      title: t.services.arbitration.title,
      description: t.services.arbitration.description,
      color: "text-red-600"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-primary">
            {t.services.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Umfassende juristische Beratung in allen Bereichen des internationalen und kommerziellen Rechts
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-border/50"
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl font-playfair text-primary group-hover:text-accent transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional info */}
        <div className="mt-16 bg-muted/30 rounded-2xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-playfair text-3xl font-bold text-primary mb-4">
                Warum Kanzlei Pister?
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span>Internationale Expertise mit lokaler Kompetenz</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span>Mehrsprachige Beratung in 6 Sprachen</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span>25+ Jahre Erfahrung im internationalen Recht</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span>Persönliche und diskrete Mandantenbetreuung</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-card rounded-xl p-6 shadow-card">
              <h4 className="text-xl font-semibold text-primary mb-4">Erste Beratung kostenlos</h4>
              <p className="text-muted-foreground mb-4">
                Nutzen Sie unsere kostenlose Erstberatung für eine erste Einschätzung Ihres rechtlichen Anliegens.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Beratungsgespräch:</span>
                  <span className="font-semibold">30 Minuten kostenfrei</span>
                </div>
                <div className="flex justify-between">
                  <span>Antwort binnen:</span>
                  <span className="font-semibold">24 Stunden</span>
                </div>
                <div className="flex justify-between">
                  <span>Verfügbarkeit:</span>
                  <span className="font-semibold">Mo-Fr 9:00-18:00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;