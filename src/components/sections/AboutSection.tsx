import { CheckCircle, Globe, Briefcase, Users, Quote, Star } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

const AboutSection = () => {
  const { t } = useLanguage();

  const achievements = [
    {
      icon: Globe,
      title: "Internationales Recht",
      description: "Spezialisiert auf grenzüberschreitende Rechtsfragen",
      color: "primary"
    },
    {
      icon: Briefcase,
      title: "Handelsrecht", 
      description: "Umfassende Expertise im Unternehmens- und Handelsrecht",
      color: "accent"
    },
    {
      icon: Users,
      title: "Persönliche Betreuung",
      description: "Individuelle Lösungen für jeden Mandanten",
      color: "primary"
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-muted/20 via-background to-accent-light/10 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-accent/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2">
                <Star className="h-4 w-4 text-accent" />
                <span className="text-sm font-medium text-primary">Über den Anwalt</span>
              </div>

              <h2 className="font-playfair text-5xl lg:text-6xl font-bold text-primary leading-tight">
                {t.about.title}
              </h2>
              <h3 className="text-2xl text-accent font-medium gradient-text">
                {t.about.subtitle}
              </h3>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              {t.about.description}
            </p>

            <div className="space-y-6">
              <h4 className="text-2xl font-playfair font-semibold text-primary">Meine Philosophie</h4>
              <div className="relative">
                <Quote className="absolute -top-2 -left-2 h-8 w-8 text-accent/30" />
                <p className="text-muted-foreground leading-relaxed pl-8 italic text-lg">
                  {t.about.philosophy}
                </p>
              </div>
            </div>

            {/* Enhanced achievements */}
            <div className="space-y-6">
              <h4 className="text-2xl font-playfair font-semibold text-primary">Schwerpunkte</h4>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div 
                    key={index} 
                    className="card-premium p-6 group cursor-default"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`w-14 h-14 bg-gradient-${achievement.color} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-card`}>
                        <achievement.icon className="h-7 w-7 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <h5 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                          {achievement.title}
                        </h5>
                        <p className="text-muted-foreground leading-relaxed mt-1">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Enhanced credentials */}
            <div className="card-premium bg-gradient-primary text-primary-foreground p-8 shadow-elegant">
              <h4 className="text-xl font-playfair font-bold mb-6 flex items-center">
                <CheckCircle className="h-6 w-6 mr-3 text-accent-gold" />
                Qualifikationen & Zertifizierungen
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Rechtsanwalt bei der Rechtsanwaltskammer Deutschland",
                  "Mitglied des Deutschen Anwaltvereins (DAV)",
                  "Spezialisierung Internationales Handelsrecht",
                  "Zertifiziert für EU-Rechtsfragen"
                ].map((credential, index) => (
                  <div 
                    key={index} 
                    className="flex items-center space-x-3 group"
                  >
                    <div className="w-2 h-2 bg-accent-gold rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                    <span className="text-sm group-hover:text-accent-gold transition-colors">
                      {credential}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced Image Gallery */}
          <div className="space-y-6 animate-slide-in-right">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="group relative overflow-hidden rounded-2xl shadow-card hover:shadow-float transition-all duration-500">
                  <img
                    src="/lovable-uploads/667e956a-56e7-495e-b04b-38be6b06087b.png"
                    alt="Me Jozef Pister"
                    className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="group relative overflow-hidden rounded-2xl shadow-card hover:shadow-float transition-all duration-500">
                  <img
                    src="/lovable-uploads/e7d076ba-e7f2-424f-b9f2-d2a9a7a1d7e2.png"
                    alt="Me Jozef Pister"
                    className="w-full h-40 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
              <div className="space-y-6 pt-8">
                <div className="group relative overflow-hidden rounded-2xl shadow-card hover:shadow-float transition-all duration-500">
                  <img
                    src="/lovable-uploads/382f4fa4-b492-445d-9c63-5c526b3ac0a3.png"
                    alt="Me Jozef Pister"
                    className="w-full h-40 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="group relative overflow-hidden rounded-2xl shadow-card hover:shadow-float transition-all duration-500">
                  <img
                    src="/lovable-uploads/d0ad3fdc-8334-4160-86ff-0b52de0a7bac.png"
                    alt="Me Jozef Pister"
                    className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            </div>

            {/* Enhanced quote card */}
            <div className="relative">
              <div className="card-premium bg-gradient-hero text-primary-foreground p-8 shadow-elegant relative overflow-hidden">
                {/* Decorative pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                  <div className="absolute inset-0 bg-gradient-accent rounded-full blur-2xl"></div>
                </div>
                
                <Quote className="h-12 w-12 text-accent-gold mb-4 opacity-80" />
                <blockquote className="text-xl font-medium italic leading-relaxed mb-6">
                  "Das Recht verbindet Nationen. Meine Aufgabe ist es, Brücken zu bauen, wo andere Hindernisse sehen."
                </blockquote>
                <cite className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-accent-gold/20 rounded-full flex items-center justify-center">
                    <Star className="h-6 w-6 text-accent-gold" />
                  </div>
                  <div>
                    <span className="font-bold text-accent-gold">Me Jozef Pister</span>
                    <p className="text-sm opacity-80">Gründer & Hauptanwalt</p>
                  </div>
                </cite>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;