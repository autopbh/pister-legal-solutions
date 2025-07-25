import { TrendingUp, Users, Globe, Award, Scale, Clock, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { useState, useEffect } from 'react';

const StatsSection = () => {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

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

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === stats.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? stats.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Handle responsive design safely
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth < 1024 && window.innerWidth >= 768);
    };

    // Initial check
    handleResize();
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying]);

  // Get visible stats for responsive design
  const getVisibleStats = () => {    
    if (isMobile) {
      return [stats[currentIndex]];
    } else if (isTablet) {
      return [
        stats[currentIndex],
        stats[(currentIndex + 1) % stats.length]
      ];
    } else {
      return [
        stats[currentIndex],
        stats[(currentIndex + 1) % stats.length],
        stats[(currentIndex + 2) % stats.length]
      ];
    }
  };

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
        <div 
          className="relative max-w-6xl mx-auto"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110 shadow-elegant"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110 shadow-elegant"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Carousel Content */}
          <div className="overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-8 lg:p-12">
            <div className="flex justify-center items-center gap-8 lg:gap-16 transition-all duration-500 ease-in-out">
              {getVisibleStats().map((stat, index) => (
                <div
                  key={`${currentIndex}-${index}`}
                  className="text-center group animate-scale-in hover-lift flex-1 max-w-xs"
                >
                  <div className={`relative w-24 h-24 lg:w-32 lg:h-32 bg-gradient-to-br ${stat.color} rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-elegant group-hover:shadow-glow transition-all duration-500 group-hover:scale-110`}>
                    <stat.icon className="h-12 w-12 lg:h-16 lg:w-16 text-white" />
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-3xl"></div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="font-bold text-4xl lg:text-6xl text-primary group-hover:text-accent transition-colors duration-300">
                      {stat.number}
                    </div>
                    <div className="text-base lg:text-xl text-muted-foreground font-medium">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-3 mt-8">
            {stats.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-accent shadow-glow scale-125'
                    : 'bg-primary/30 hover:bg-primary/50'
                }`}
                onClick={() => goToSlide(index)}
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