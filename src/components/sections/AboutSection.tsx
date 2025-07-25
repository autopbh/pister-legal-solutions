import { CheckCircle, Globe, Briefcase, Users, Quote, Star } from 'lucide-react';
import { useTranslations } from '@/hooks/useTranslations';

const AboutSection = () => {
  const { t } = useTranslations();

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
      title: t.about.personalService,
      description: "Individuelle Lösungen für jeden Mandanten",
      color: "primary"
    }
  ];

  return (
    <section id="about" className="py-16 bg-gradient-to-br from-muted/20 via-primary/5 to-accent/10 relative overflow-hidden">

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2">
                <Star className="h-4 w-4 text-accent" />
                <span className="text-sm font-medium text-primary">{t.about.aboutLawyer}</span>
              </div>

              <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-primary leading-tight">
                {t.about.title}
              </h2>
              <h3 className="text-xl text-accent font-medium">
                {t.about.subtitle}
              </h3>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              {t.about.description}
            </p>

            <div className="space-y-6">
              <h4 className="text-xl font-playfair font-semibold text-primary">{t.about.specialties}</h4>
              <div className="relative bg-background/70 backdrop-blur-sm p-6 rounded-lg border border-border/50 hover:bg-background/90 transition-all duration-300">
                <Quote className="h-6 w-6 text-accent mb-4" />
                <p className="text-muted-foreground leading-relaxed italic">
                  {t.about.philosophy}
                </p>
              </div>
            </div>

            {/* Simple achievements */}
            <div className="space-y-6">
              <h4 className="text-xl font-playfair font-semibold text-primary">{t.about.specialties}</h4>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div 
                    key={index} 
                    className="bg-background/70 backdrop-blur-sm p-4 rounded-lg border border-border/50 hover:shadow-card hover:bg-background/90 transition-all duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`w-10 h-10 ${achievement.color === 'primary' ? 'bg-primary' : 'bg-accent'} rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <achievement.icon className="h-5 w-5 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <h5 className="font-bold text-lg text-foreground">
                          {achievement.title}
                        </h5>
                        <p className="text-muted-foreground mt-1">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Simple credentials */}
            <div className="bg-primary text-primary-foreground p-6 rounded-lg">
              <h4 className="text-lg font-playfair font-bold mb-4 flex items-center">
                <CheckCircle className="h-5 w-5 mr-3 text-accent" />
                {t.about.qualifications}
              </h4>
              <div className="grid grid-cols-1 gap-3">
                {[
                  "Rechtsanwalt bei der Rechtsanwaltskammer Deutschland",
                  "Mitglied des Deutschen Anwaltvereins (DAV)",
                  "Spezialisierung Internationales Handelsrecht",
                  "Zertifiziert für EU-Rechtsfragen"
                ].map((credential, index) => (
                  <div 
                    key={index} 
                    className="flex items-center space-x-3"
                  >
                    <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                    <span className="text-sm">
                      {credential}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Clean Image Gallery */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/lovable-uploads/667e956a-56e7-495e-b04b-38be6b06087b.png"
                alt="Me Jozef Pister"
                className="w-full h-48 object-cover rounded-lg shadow-card"
              />
              <img
                src="/lovable-uploads/e7d076ba-e7f2-424f-b9f2-d2a9a7a1d7e2.png"
                alt="Me Jozef Pister"
                className="w-full h-48 object-cover rounded-lg shadow-card"
              />
              <img
                src="/lovable-uploads/382f4fa4-b492-445d-9c63-5c526b3ac0a3.png"
                alt="Me Jozef Pister"
                className="w-full h-48 object-cover rounded-lg shadow-card"
              />
              <img
                src="/lovable-uploads/d0ad3fdc-8334-4160-86ff-0b52de0a7bac.png"
                alt="Me Jozef Pister"
                className="w-full h-48 object-cover rounded-lg shadow-card"
              />
            </div>

            {/* Simple quote card */}
            <div className="bg-primary text-primary-foreground p-6 rounded-lg">
              <Quote className="h-8 w-8 text-accent mb-4" />
              <blockquote className="text-lg font-medium italic leading-relaxed mb-4">
                "{t.about.bridgeQuote}"
              </blockquote>
              <cite className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center">
                  <Star className="h-4 w-4 text-accent" />
                </div>
                <div>
                  <span className="font-bold text-accent">Me Jozef Pister</span>
                  <p className="text-sm opacity-80">{t.about.founderTitle}</p>
                </div>
              </cite>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;