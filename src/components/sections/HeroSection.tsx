import { ArrowRight, Scale, Users, Award, Sparkles, Globe2, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/useLanguage';

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent-light/5"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-accent/10 rounded-full blur-3xl animate-pulse-glow"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-primary/5 rounded-full blur-3xl animate-float"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-10 animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-gradient-primary/10 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2 animate-scale-in">
              <Sparkles className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-primary">Seit 1999 • Internationale Rechtspraxis</span>
            </div>

            <div className="space-y-6">
              <h1 className="font-playfair text-6xl lg:text-7xl font-bold text-primary leading-tight">
                <span className="gradient-text">{t.hero.title}</span>
              </h1>
              <h2 className="font-playfair text-4xl lg:text-5xl text-primary/80 font-medium">
                {t.hero.subtitle}
              </h2>
            </div>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
              {t.hero.description}
            </p>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-3 gap-8 py-6">
              <div className="text-center group cursor-default">
                <div className="relative mb-3">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto shadow-card group-hover:shadow-glow transition-all duration-500 group-hover:scale-110">
                    <Scale className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-accent rounded-full flex items-center justify-center">
                    <Star className="h-3 w-3 text-accent-foreground" />
                  </div>
                </div>
                <div className="font-bold text-3xl text-primary group-hover:text-primary-glow transition-smooth">25+</div>
                <div className="text-sm text-muted-foreground font-medium">{t.about.experience}</div>
              </div>
              
              <div className="text-center group cursor-default">
                <div className="relative mb-3">
                  <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center mx-auto shadow-card group-hover:shadow-glow transition-all duration-500 group-hover:scale-110">
                    <Users className="h-8 w-8 text-accent-foreground" />
                  </div>
                </div>
                <div className="font-bold text-3xl text-primary group-hover:text-accent transition-smooth">500+</div>
                <div className="text-sm text-muted-foreground font-medium">Erfolgreiche Fälle</div>
              </div>

              <div className="text-center group cursor-default">
                <div className="relative mb-3">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto shadow-card group-hover:shadow-glow transition-all duration-500 group-hover:scale-110">
                    <Globe2 className="h-8 w-8 text-primary-foreground" />
                  </div>
                </div>
                <div className="font-bold text-3xl text-primary group-hover:text-primary-glow transition-smooth">6</div>
                <div className="text-sm text-muted-foreground font-medium">Sprachen</div>
              </div>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <Button 
                size="xl" 
                className="btn-premium text-lg px-10 py-4 group"
              >
                <span className="relative z-10 flex items-center">
                  {t.hero.cta}
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Button>
              
              <Button 
                size="xl" 
                variant="outline" 
                className="border-2 border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-500 text-lg px-10 py-4 backdrop-blur-sm"
              >
                Kanzlei entdecken
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center space-x-6 pt-6 opacity-70">
              <div className="flex items-center space-x-2">
                <Award className="h-5 w-5 text-accent" />
                <span className="text-sm font-medium">DAV Mitglied</span>
              </div>
              <div className="flex items-center space-x-2">
                <Scale className="h-5 w-5 text-accent" />
                <span className="text-sm font-medium">Zertifiziert</span>
              </div>
              <div className="flex items-center space-x-2">
                <Sparkles className="h-5 w-5 text-accent" />
                <span className="text-sm font-medium">Premium Service</span>
              </div>
            </div>
          </div>

          {/* Enhanced Image Section */}
          <div className="relative animate-slide-in-right">
            <div className="relative group">
              {/* Main image with sophisticated styling */}
              <div className="relative overflow-hidden rounded-3xl shadow-elegant group-hover:shadow-glow transition-all duration-700">
                <img
                  src="/lovable-uploads/446f15db-e216-43d2-a71b-ceb15c99eee9.png"
                  alt="Me Jozef Pister - Rechtsanwalt"
                  className="w-full h-[700px] object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Sophisticated overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent opacity-60"></div>
                <div className="absolute inset-0 bg-gradient-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Floating credentials card - enhanced */}
              <div className="absolute -bottom-8 -left-8 card-premium bg-gradient-card backdrop-blur-xl border border-border/50 rounded-2xl p-8 max-w-sm shadow-elegant">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center">
                      <Award className="h-6 w-6 text-accent-foreground" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-primary">Zertifiziert & Anerkannt</h3>
                      <p className="text-sm text-muted-foreground">Höchste Standards</p>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-muted-foreground">Rechtsanwaltskammer Deutschland</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-muted-foreground">Deutscher Anwaltverein (DAV)</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-muted-foreground">Internationale Spezialisierung</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-gradient-accent text-accent-foreground rounded-full px-6 py-3 shadow-glow animate-pulse-glow">
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