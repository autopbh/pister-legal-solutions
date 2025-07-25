import { ArrowRight, Scale, Users, Award, Sparkles, Globe2, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/useLanguage';

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-primary">
      {/* Dynamic background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-light/30 via-transparent to-accent/20"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-primary opacity-80"></div>
      
      {/* Animated orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary-glow/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary-light/20 rounded-full blur-2xl"></div>
      
      {/* Geometric patterns */}
      <div className="absolute top-10 right-10 w-32 h-32 border border-primary-foreground/20 rounded-lg rotate-45 animate-pulse"></div>
      <div className="absolute bottom-32 left-10 w-24 h-24 border border-accent/30 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Premium Badge */}
            <div className="inline-flex items-center space-x-3 bg-primary-foreground/10 backdrop-blur-md border border-primary-foreground/20 rounded-full px-6 py-3 shadow-card animate-scale-in">
              <Sparkles className="h-5 w-5 text-accent animate-pulse" />
              <span className="text-sm font-semibold text-primary-foreground tracking-wide">Seit 1999 • Internationale Rechtspraxis</span>
              <Star className="h-4 w-4 text-accent" />
            </div>

            <div className="space-y-6">
              <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight animate-fade-in">
                {t.hero.title}
              </h1>
              <h2 className="font-playfair text-xl md:text-2xl lg:text-3xl text-accent font-medium leading-relaxed animate-fade-in" style={{animationDelay: '0.2s'}}>
                {t.hero.subtitle}
              </h2>
            </div>
            
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed max-w-2xl animate-fade-in" style={{animationDelay: '0.4s'}}>
              {t.hero.description}
            </p>


            {/* BOUTONS CORRIGÉS AVEC CONTENU VISIBLE */}
            <div className="flex flex-col sm:flex-row gap-6 pt-6 animate-fade-in" style={{animationDelay: '0.8s'}}>
              <Button 
                size="lg" 
                type="button"
                className="bg-accent text-accent-foreground hover:bg-accent/90 px-10 py-4 text-lg font-semibold rounded-xl shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3"
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                <span>{t.hero.cta}</span>
                <ArrowRight className="h-5 w-5" />
              </Button>
              
              <Button 
                size="lg" 
                type="button"
                variant="outline" 
                className="border-2 border-primary-foreground text-primary-foreground bg-primary-foreground/10 hover:bg-primary-foreground hover:text-primary px-10 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105"
                onClick={() => {
                  const aboutSection = document.getElementById('about');
                  if (aboutSection) {
                    aboutSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                {t.hero.secondaryCta}
              </Button>
            </div>

            {/* Premium trust indicators */}
            <div className="flex items-center space-x-8 pt-8 text-primary-foreground/70 animate-fade-in" style={{animationDelay: '1s'}}>
              <div className="flex items-center space-x-3 group">
                <div className="w-10 h-10 bg-gradient-to-br from-accent/20 to-accent/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Award className="h-5 w-5 text-accent" />
                </div>
                <span className="font-medium">DAV Mitglied</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Scale className="h-5 w-5 text-primary" />
                </div>
                <span className="font-medium">Zertifiziert</span>
              </div>
            </div>
          </div>

          {/* Enhanced Image Section */}
          <div className="relative animate-fade-in" style={{animationDelay: '0.3s'}}>
            <div className="relative">
              {/* Dramatic backdrop */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 via-accent/20 to-primary/30 rounded-2xl blur-2xl opacity-60"></div>
              
              {/* Professional image with enhanced styling */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
                <img
                  src="/lovable-uploads/446f15db-e216-43d2-a71b-ceb15c99eee9.png"
                  alt="Me Jozef Pister - Rechtsanwalt"
                  className="w-full h-[500px] md:h-[600px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-light/10 via-transparent to-accent/10"></div>
                
                {/* Floating elements */}
                <div className="absolute top-6 left-6 w-20 h-20 bg-primary-foreground/20 rounded-full backdrop-blur-sm border border-primary-foreground/20 flex items-center justify-center">
                  <Scale className="h-8 w-8 text-primary-foreground" />
                </div>
              </div>

              {/* Premium credential badge */}
              <div className="absolute top-8 right-8 bg-gradient-accent text-accent-foreground rounded-xl px-6 py-3 shadow-card backdrop-blur-sm border border-accent/20">
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5" />
                  <span className="font-bold">Top Anwalt 2024</span>
                </div>
              </div>
              
              {/* Floating quote */}
              <div className="absolute bottom-8 left-8 right-8 bg-primary-foreground/10 backdrop-blur-md rounded-xl p-6 border border-primary-foreground/20 shadow-card">
                <p className="text-primary-foreground text-sm italic mb-2">"Excellence en droit, service personnalisé"</p>
                <p className="text-primary-foreground/80 text-xs font-medium">- Me Jozef Pister</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-primary-foreground/30 rounded-full flex justify-center backdrop-blur-sm bg-primary-foreground/5">
          <div className="w-1.5 h-4 bg-accent rounded-full mt-3 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;