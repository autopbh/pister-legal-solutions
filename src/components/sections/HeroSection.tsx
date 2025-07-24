import { ArrowRight, Scale, Users, Award, Sparkles, Globe2, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/useLanguage';

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative min-h-[80vh] flex items-center overflow-hidden bg-gradient-to-br from-background to-secondary">
      {/* Subtle decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-accent/5 rounded-full blur-2xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-gradient-primary/3 rounded-full blur-2xl"></div>
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Content */}
          <div className="space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-gradient-primary/10 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2 animate-scale-in">
              <Sparkles className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-primary">Seit 1999 • Internationale Rechtspraxis</span>
            </div>

            <div className="space-y-4">
              <h1 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-primary leading-tight">
                {t.hero.title}
              </h1>
              <h2 className="font-playfair text-lg md:text-xl lg:text-2xl text-accent font-medium">
                {t.hero.subtitle}
              </h2>
            </div>
            
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              {t.hero.description}
            </p>

            {/* Simplified Stats */}
            <div className="grid grid-cols-3 gap-6 py-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Scale className="h-6 w-6 text-primary-foreground" />
                </div>
                <div className="font-bold text-2xl text-primary">25+</div>
                <div className="text-sm text-muted-foreground">{t.about.experience}</div>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Users className="h-6 w-6 text-accent-foreground" />
                </div>
                <div className="font-bold text-2xl text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Erfolgreiche Fälle</div>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Globe2 className="h-6 w-6 text-primary-foreground" />
                </div>
                <div className="font-bold text-2xl text-primary">6</div>
                <div className="text-sm text-muted-foreground">Sprachen</div>
              </div>
            </div>

            {/* Clean CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary-light text-primary-foreground px-8 py-3"
              >
                {t.hero.cta}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3"
              >
                Kanzlei entdecken
              </Button>
            </div>

            {/* Simple trust indicators */}
            <div className="flex items-center space-x-6 pt-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Award className="h-4 w-4 text-accent" />
                <span>DAV Mitglied</span>
              </div>
              <div className="flex items-center space-x-2">
                <Scale className="h-4 w-4 text-accent" />
                <span>Zertifiziert</span>
              </div>
            </div>
          </div>

          {/* Clean Image Section */}
          <div className="relative">
            <div className="relative">
              {/* Professional image */}
              <div className="relative overflow-hidden rounded-xl shadow-card">
                <img
                  src="/lovable-uploads/446f15db-e216-43d2-a71b-ceb15c99eee9.png"
                  alt="Me Jozef Pister - Rechtsanwalt"
                  className="w-full h-[400px] md:h-[500px] object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent"></div>
              </div>

              {/* Simple credential badge */}
              <div className="absolute top-4 right-4 bg-accent text-accent-foreground rounded-lg px-4 py-2 shadow-card">
                <span className="font-bold text-sm">Top Anwalt 2024</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;