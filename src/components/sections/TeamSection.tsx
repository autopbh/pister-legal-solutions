import { MapPin, Languages, Award, Mail, Phone } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useTranslations } from '@/hooks/useTranslations';

const TeamSection = () => {
  const { t } = useTranslations();
  
  const team = [
    {
      name: t.team.lawyer.name,
      role: t.team.lawyer.role,
      specialties: t.team.lawyer.specialties,
      languages: t.team.lawyer.languages,
      location: t.team.lawyer.location,
      image: "/lovable-uploads/446f15db-e216-43d2-a71b-ceb15c99eee9.png",
      description: t.team.lawyer.description,
      qualifications: t.team.lawyer.qualifications
    }
  ];


  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-pattern opacity-20"></div>
      
      <div className="container mx-auto container-padding relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-6 animate-fade-in">
            {t.team.title}
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto animate-fade-in delay-200">
            {t.team.subtitle}
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
                      <span className="font-bold text-sm">{t.team.labels.founder}</span>
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="space-y-6">
                  <div>
                    <h3 className="font-playfair text-3xl font-bold text-foreground mb-2">
                      {member.name}
                    </h3>
                    <p className="text-xl text-accent font-semibold mb-4">{member.role}</p>
                    <p className="text-foreground/85 leading-relaxed">
                      {member.description}
                    </p>
                  </div>

                  {/* Specialties */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">{t.team.labels.specializations}</h4>
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
                    <span className="text-foreground/85">
                      {member.languages.join(', ')}
                    </span>
                  </div>

                  {/* Location */}
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-accent" />
                    <span className="text-foreground/85">{member.location}</span>
                  </div>

                  {/* Qualifications */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">{t.team.labels.qualifications}</h4>
                    <div className="space-y-2">
                      {member.qualifications.map((qual, i) => (
                        <div key={i} className="flex items-center space-x-2">
                          <Award className="h-4 w-4 text-accent" />
                          <span className="text-foreground/85 text-sm">{qual}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Contact Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Button className="btn-premium">
                      <Mail className="h-4 w-4 mr-2" />
                      {t.team.labels.contact}
                    </Button>
                    <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                      <Phone className="h-4 w-4 mr-2" />
                      {t.team.labels.call}
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