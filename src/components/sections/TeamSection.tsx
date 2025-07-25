import { MapPin, Languages, Award, Mail, Phone } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const TeamSection = () => {
  const team = [
    {
      name: "Me Jozef Pister",
      role: "Avocat Principal",
      specialties: ["Droit International", "Droit Commercial", "Arbitrage"],
      languages: ["Français", "Allemand", "Anglais", "Italien"],
      location: "Paris & Berlin",
      image: "/lovable-uploads/446f15db-e216-43d2-a71b-ceb15c99eee9.png",
      description: "Plus de 25 ans d'expérience en droit international. Spécialisé dans les transactions transfrontalières complexes.",
      qualifications: ["DAV Certifié", "Maître en Droit International", "Arbitre ICC"]
    }
  ];


  return (
    <section className="section-padding bg-gradient-professional relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-pattern opacity-20"></div>
      
      <div className="container mx-auto container-padding relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-6 animate-fade-in">
            Notre Équipe d'Excellence
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in delay-200">
            Une expertise multilingue et multiculturelle au service de vos projets internationaux
          </p>
        </div>

        {/* Principal Lawyer */}
        <div className="mb-20">
          {team.map((member, index) => (
            <Card key={index} className="card-luxury p-8 md:p-12 max-w-4xl mx-auto animate-scale-in">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Image */}
                <div className="relative">
                  <div className="relative overflow-hidden rounded-2xl shadow-elegant group">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-96 object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent"></div>
                  </div>
                  
                  {/* Premium Badge */}
                  <div className="absolute top-6 right-6 bg-accent text-accent-foreground rounded-xl px-4 py-2 shadow-card backdrop-blur-sm">
                    <div className="flex items-center space-x-2">
                      <Award className="h-4 w-4" />
                      <span className="font-bold text-sm">Fondateur</span>
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="space-y-6">
                  <div>
                    <h3 className="font-playfair text-3xl font-bold text-primary-foreground mb-2">
                      {member.name}
                    </h3>
                    <p className="text-xl text-accent font-semibold mb-4">{member.role}</p>
                    <p className="text-primary-foreground/80 leading-relaxed">
                      {member.description}
                    </p>
                  </div>

                  {/* Specialties */}
                  <div>
                    <h4 className="font-semibold text-primary-foreground mb-3">Spécialisations</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((specialty, i) => (
                        <span
                          key={i}
                          className="px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Languages */}
                  <div className="flex items-center space-x-3">
                    <Languages className="h-5 w-5 text-accent" />
                    <span className="text-primary-foreground/80">
                      {member.languages.join(', ')}
                    </span>
                  </div>

                  {/* Location */}
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-accent" />
                    <span className="text-primary-foreground/80">{member.location}</span>
                  </div>

                  {/* Qualifications */}
                  <div>
                    <h4 className="font-semibold text-primary-foreground mb-3">Qualifications</h4>
                    <div className="space-y-2">
                      {member.qualifications.map((qual, i) => (
                        <div key={i} className="flex items-center space-x-2">
                          <Award className="h-4 w-4 text-accent" />
                          <span className="text-primary-foreground/80 text-sm">{qual}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Contact Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Button className="btn-premium">
                      <Mail className="h-4 w-4 mr-2" />
                      Contacter
                    </Button>
                    <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                      <Phone className="h-4 w-4 mr-2" />
                      Appeler
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TeamSection;