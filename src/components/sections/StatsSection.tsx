import { TrendingUp, Users, Globe, Award, Scale, Clock } from 'lucide-react';
import { useTranslations } from '@/hooks/useTranslations';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const StatsSection = () => {
  const { t } = useTranslations();

  const stats = [
    {
      icon: Scale,
      number: "25+",
      label: t.stats.experience,
      suffix: "ans",
      color: "from-primary to-primary-light"
    },
    {
      icon: Users,
      number: "500+",
      label: t.stats.clients,
      suffix: "",
      color: "from-accent to-accent-gold"
    },
    {
      icon: Globe,
      number: "12+",
      label: t.stats.domains,
      suffix: "",
      color: "from-primary to-accent"
    },
    {
      icon: Award,
      number: "15+",
      label: t.stats.awards,
      suffix: "",
      color: "from-accent-gold to-accent"
    },
    {
      icon: TrendingUp,
      number: "98%",
      label: "Taux de réussite",
      suffix: "",
      color: "from-primary-light to-primary"
    },
    {
      icon: Clock,
      number: "24h",
      label: "Réponse garantie",
      suffix: "",
      color: "from-accent to-primary"
    }
  ];

  return (
    <section className="section-padding bg-gradient-professional relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern opacity-30"></div>
      <div className="absolute inset-0 bg-noise"></div>
      
      <div className="container mx-auto container-padding relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-6 animate-fade-in">
            {t.stats.title}
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto animate-fade-in delay-200">
            {t.stats.subtitle}
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid grid-cols-6 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group animate-scale-in hover-lift"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`relative w-20 h-20 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-elegant group-hover:shadow-glow transition-all duration-500 group-hover:scale-110`}>
                <stat.icon className="h-10 w-10 text-white" />
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl"></div>
              </div>
              
              <div className="space-y-2">
                <div className="font-bold text-3xl lg:text-4xl text-primary group-hover:text-accent transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="text-sm lg:text-base text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="lg:hidden">
          <Carousel className="w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto">
            <CarouselContent>
              {stats.map((stat, index) => (
                <CarouselItem key={index} className="basis-full">
                  <div className="text-center group animate-scale-in hover-lift p-4">
                    <div className={`relative w-24 h-24 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-elegant group-hover:shadow-glow transition-all duration-500 group-hover:scale-110`}>
                      <stat.icon className="h-12 w-12 text-white" />
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl"></div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="font-bold text-4xl text-primary group-hover:text-accent transition-colors duration-300">
                        {stat.number}
                      </div>
                      <div className="text-base text-muted-foreground font-medium">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        {/* Trust Indicators */}
        <div className="mt-20 flex flex-wrap justify-center items-center gap-12 opacity-60">
          <div className="flex items-center space-x-3">
            <Award className="h-8 w-8 text-accent" />
            <span className="font-semibold text-primary">DAV Certifié</span>
          </div>
          <div className="flex items-center space-x-3">
            <Scale className="h-8 w-8 text-accent" />
            <span className="font-semibold text-primary">ISO 9001</span>
          </div>
          <div className="flex items-center space-x-3">
            <Globe className="h-8 w-8 text-accent" />
            <span className="font-semibold text-primary">International Bar</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;