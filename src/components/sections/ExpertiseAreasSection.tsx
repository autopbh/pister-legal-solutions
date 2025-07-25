import { Globe, Building, Users, Briefcase, FileText, Scale, Clock, CheckCircle, ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useTranslations } from '@/hooks/useTranslations';

const ExpertiseAreasSection = () => {
  const { t } = useTranslations();

  const handleLearnMore = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const expertiseCards = [
    {
      icon: Globe,
      title: t.expertiseAreas.international.title,
      description: t.expertiseAreas.international.description,
      details: t.expertiseAreas.international.details,
      color: "bg-gradient-to-br from-blue-600 to-blue-700"
    },
    {
      icon: Building,
      title: t.expertiseAreas.commercial.title,
      description: t.expertiseAreas.commercial.description,
      details: t.expertiseAreas.commercial.details,
      color: "bg-gradient-to-br from-amber-600 to-amber-700"
    },
    {
      icon: Users,
      title: t.expertiseAreas.personalizedService.title,
      description: t.expertiseAreas.personalizedService.description,
      details: t.expertiseAreas.personalizedService.details,
      color: "bg-gradient-to-br from-emerald-600 to-emerald-700"
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-background via-accent/5 to-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-pattern opacity-10"></div>
      <div className="absolute top-20 right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto container-padding relative z-10">
        {/* Unique Advantages Statement */}
        <div className="text-center mb-16">
          <p className="text-xl md:text-2xl text-foreground/90 max-w-5xl mx-auto leading-relaxed font-medium">
            {t.uniqueAdvantages.title}
          </p>
        </div>

        {/* Main Expertise Areas */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {expertiseCards.map((card, index) => (
            <Card
              key={index}
              className="card-premium overflow-hidden group hover:shadow-float transition-all duration-300"
            >
              <div className="p-8">
                <div className={`w-16 h-16 ${card.color} rounded-2xl flex items-center justify-center mb-6 shadow-card group-hover:scale-110 transition-transform duration-300`}>
                  <card.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="font-playfair text-2xl font-bold text-primary mb-4">
                  {card.title}
                </h3>
                
                <p className="text-foreground/80 mb-6 leading-relaxed">
                  {card.description}
                </p>

                <div className="space-y-2 mb-6">
                  {card.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                      <span className="text-foreground/75">{detail}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  variant="outline" 
                  onClick={handleLearnMore}
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                >
                  Mehr erfahren
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="card-premium p-8">
            <h4 className="font-playfair text-xl font-bold text-primary mb-6 flex items-center">
              <FileText className="h-6 w-6 mr-3 text-accent" />
              {t.expertiseAreas.additional.title}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {t.expertiseAreas.additional.details.slice(0, 3).map((detail, idx) => (
                <div key={idx} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                  <span className="text-foreground/80 text-sm">{detail}</span>
                </div>
              ))}
            </div>
            <Button 
              variant="outline" 
              onClick={handleLearnMore}
              className="w-full mt-6"
            >
              Mehr erfahren
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </Card>

          <Card className="card-premium p-8">
            <h4 className="font-playfair text-xl font-bold text-primary mb-6 flex items-center">
              <Scale className="h-6 w-6 mr-3 text-accent" />
              Alternative Streitbeilegung
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {t.expertiseAreas.additional.details.slice(3, 6).map((detail, idx) => (
                <div key={idx} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                  <span className="text-foreground/80 text-sm">{detail}</span>
                </div>
              ))}
            </div>
            <Button 
              variant="outline" 
              onClick={handleLearnMore}
              className="w-full mt-6"
            >
              Mehr erfahren
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </Card>
        </div>

        {/* Qualifications Section */}
        <Card className="card-premium mt-12 p-8 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="flex items-center mb-6">
            <CheckCircle className="h-8 w-8 text-accent mr-4" />
            <h3 className="font-playfair text-2xl font-bold text-primary">
              {t.qualificationsAndCertifications.title}
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {t.qualificationsAndCertifications.items.map((qualification, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-foreground/85 leading-relaxed">{qualification}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ExpertiseAreasSection;