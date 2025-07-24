import { ArrowRight, Scale, Users, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/useLanguage';

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-background via-background to-accent-light/20">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="font-playfair text-5xl lg:text-6xl font-bold text-primary leading-tight">
                {t.hero.title}
              </h1>
              <h2 className="font-playfair text-3xl lg:text-4xl text-accent font-medium">
                {t.hero.subtitle}
              </h2>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              {t.hero.description}
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-8">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Scale className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="font-bold text-2xl text-primary">25+</div>
                  <div className="text-sm text-muted-foreground">{t.about.experience}</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <div className="font-bold text-2xl text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Successful Cases</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="font-bold text-2xl text-primary">6</div>
                  <div className="text-sm text-muted-foreground">Languages</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:opacity-90 transition-smooth text-lg px-8 py-6"
              >
                {t.hero.cta}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth text-lg px-8 py-6"
              >
                Mehr erfahren
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-slide-up">
            <div className="relative">
              {/* Main image with professional styling */}
              <div className="relative overflow-hidden rounded-2xl shadow-elegant">
                <img
                  src="/lovable-uploads/446f15db-e216-43d2-a71b-ceb15c99eee9.png"
                  alt="Me Jozef Pister - Rechtsanwalt"
                  className="w-full h-[600px] object-cover object-center"
                />
                
                {/* Overlay gradient for professional effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent"></div>
              </div>

              {/* Floating credentials card */}
              <div className="absolute -bottom-6 -left-6 bg-card border shadow-card rounded-xl p-6 max-w-xs">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Award className="h-5 w-5 text-accent" />
                    <span className="font-semibold text-sm">Zertifiziert</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Rechtsanwalt bei der Rechtsanwaltskammer Deutschland
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Mitglied des Deutschen Anwaltvereins (DAV)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;