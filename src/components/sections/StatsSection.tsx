import { TrendingUp, Users, Globe, Award, Scale, Clock } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from 'react';

const StatsSection = () => {
  const { t } = useLanguage();
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: 'center',
    skipSnaps: false,
    dragFree: false,
    containScroll: 'trimSnaps'
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const stats = [
    {
      icon: Scale,
      number: "25+",
      label: t.stats.experience,
      suffix: "",
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
      number: "6",
      label: t.stats.languages,
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
      label: t.stats.successRate,
      suffix: "",
      color: "from-primary-light to-primary"
    },
    {
      icon: Clock,
      number: "24h",
      label: t.stats.response,
      suffix: "",
      color: "from-accent to-primary"
    }
  ];

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onInit = useCallback((emblaApi: any) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: any) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on('reInit', onInit);
    emblaApi.on('select', onSelect);

    // Auto-play
    const autoplay = setInterval(() => {
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      } else {
        emblaApi.scrollTo(0);
      }
    }, 4000);

    return () => {
      clearInterval(autoplay);
      emblaApi.off('reInit', onInit);
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onInit, onSelect]);

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
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in delay-200">
            {t.stats.subtitle}
          </p>
        </div>

        {/* Carrousel Statistiques */}
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-8 lg:gap-12">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="flex-none w-full sm:w-1/2 lg:w-1/3 text-center group animate-scale-in hover-lift"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`relative w-24 h-24 lg:w-28 lg:h-28 bg-gradient-to-br ${stat.color} rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-elegant group-hover:shadow-glow transition-all duration-500 group-hover:scale-110`}>
                    <stat.icon className="h-12 w-12 lg:h-14 lg:w-14 text-white" />
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-3xl"></div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="font-bold text-4xl lg:text-5xl text-primary group-hover:text-accent transition-colors duration-300">
                      {stat.number}
                    </div>
                    <div className="text-base lg:text-lg text-muted-foreground font-medium px-4">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-3 mt-12">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === selectedIndex
                    ? 'bg-accent shadow-glow scale-125'
                    : 'bg-primary/30 hover:bg-primary/50'
                }`}
                onClick={() => scrollTo(index)}
              />
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-20 flex flex-wrap justify-center items-center gap-12 opacity-60">
          <div className="flex items-center space-x-3">
            <Award className="h-8 w-8 text-accent" />
            <span className="font-semibold text-primary">{t.stats.certifications.dav}</span>
          </div>
          <div className="flex items-center space-x-3">
            <Scale className="h-8 w-8 text-accent" />
            <span className="font-semibold text-primary">{t.stats.certifications.iso}</span>
          </div>
          <div className="flex items-center space-x-3">
            <Globe className="h-8 w-8 text-accent" />
            <span className="font-semibold text-primary">{t.stats.certifications.international}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;