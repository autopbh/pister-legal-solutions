import { CheckCircle, Globe, Briefcase, Users } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

const AboutSection = () => {
  const { t } = useLanguage();

  const achievements = [
    {
      icon: Globe,
      title: "Internationales Recht",
      description: "Spezialisiert auf grenzüberschreitende Rechtsfragen"
    },
    {
      icon: Briefcase,
      title: "Handelsrecht",
      description: "Umfassende Expertise im Unternehmens- und Handelsrecht"
    },
    {
      icon: Users,
      title: "Persönliche Betreuung",
      description: "Individuelle Lösungen für jeden Mandanten"
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-primary">
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
              <h4 className="text-xl font-semibold text-primary">Meine Philosophie</h4>
              <p className="text-muted-foreground leading-relaxed">
                {t.about.philosophy}
              </p>
            </div>

            {/* Key achievements */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-primary">Schwerpunkte</h4>
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <achievement.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-foreground">{achievement.title}</h5>
                      <p className="text-sm text-muted-foreground">{achievement.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Credentials */}
            <div className="bg-card rounded-xl p-6 shadow-card">
              <h4 className="text-lg font-semibold text-primary mb-4">Qualifikationen</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-accent" />
                  <span className="text-sm">Rechtsanwalt bei der Rechtsanwaltskammer Deutschland</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-accent" />
                  <span className="text-sm">Mitglied des Deutschen Anwaltvereins (DAV)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-accent" />
                  <span className="text-sm">Spezialisierung Internationales Handelsrecht</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-accent" />
                  <span className="text-sm">Zertifiziert für EU-Rechtsfragen</span>
                </div>
              </div>
            </div>
          </div>

          {/* Image Gallery */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="/lovable-uploads/667e956a-56e7-495e-b04b-38be6b06087b.png"
                  alt="Me Jozef Pister"
                  className="w-full h-48 object-cover rounded-xl shadow-card"
                />
                <img
                  src="/lovable-uploads/e7d076ba-e7f2-424f-b9f2-d2a9a7a1d7e2.png"
                  alt="Me Jozef Pister"
                  className="w-full h-32 object-cover rounded-xl shadow-card"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img
                  src="/lovable-uploads/382f4fa4-b492-445d-9c63-5c526b3ac0a3.png"
                  alt="Me Jozef Pister"
                  className="w-full h-32 object-cover rounded-xl shadow-card"
                />
                <img
                  src="/lovable-uploads/d0ad3fdc-8334-4160-86ff-0b52de0a7bac.png"
                  alt="Me Jozef Pister"
                  className="w-full h-48 object-cover rounded-xl shadow-card"
                />
              </div>
            </div>

            {/* Quote card */}
            <div className="bg-gradient-primary text-primary-foreground rounded-xl p-6 shadow-elegant">
              <blockquote className="text-lg font-medium italic text-center">
                "Das Recht verbindet Nationen. Meine Aufgabe ist es, Brücken zu bauen, wo andere Hindernisse sehen."
              </blockquote>
              <cite className="block text-center mt-4 text-sm opacity-90">— Me Jozef Pister</cite>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;