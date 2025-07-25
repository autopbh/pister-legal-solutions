import { Star, Quote } from 'lucide-react';
import { Card } from '@/components/ui/card';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Dr. Michael Weber",
      role: "CEO, Weber Industries",
      company: "Entreprise multinationale",
      content: "Me Pister a géré notre expansion internationale avec une expertise remarquable. Son approche stratégique nous a fait économiser des milliers d'euros en évitant les pièges juridiques.",
      rating: 5,
      image: "/lovable-uploads/382f4fa4-b492-445d-9c63-5c526b3ac0a3.png"
    },
    {
      name: "Sarah Chen",
      role: "Directrice Juridique",
      company: "TechStart GmbH",
      content: "L'expertise en droit commercial international de Me Pister est exceptionnelle. Il a négocié nos contrats avec une précision chirurgicale.",
      rating: 5,
      image: "/lovable-uploads/667e956a-56e7-495e-b04b-38be6b06087b.png"
    },
    {
      name: "Jean-Pierre Dubois",
      role: "Entrepreneur",
      company: "Export Solutions",
      content: "Grâce à Me Pister, nous avons évité un litige coûteux. Sa maîtrise du droit international nous a permis de trouver une solution élégante.",
      rating: 5,
      image: "/lovable-uploads/d0ad3fdc-8334-4160-86ff-0b52de0a7bac.png"
    }
  ];

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto container-padding relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-6 animate-fade-in">
            Ce Que Disent Nos Clients
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in delay-200">
            La confiance de nos clients est notre plus grande récompense
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="card-premium p-8 relative overflow-hidden animate-slide-up hover-lift"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                <Quote className="h-6 w-6 text-accent" />
              </div>

              {/* Stars */}
              <div className="flex space-x-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-accent fill-current" />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-muted-foreground text-lg leading-relaxed mb-8 italic">
                "{testimonial.content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center font-bold text-white text-lg">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="font-semibold text-primary">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  <div className="text-xs text-accent font-medium">{testimonial.company}</div>
                </div>
              </div>

              {/* Decorative Gradient */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-accent"></div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-3 bg-accent/10 backdrop-blur-sm border border-accent/20 rounded-full px-8 py-4 shadow-card">
            <Star className="h-5 w-5 text-accent" />
            <span className="font-semibold text-primary">Plus de 500 clients nous font confiance</span>
            <Star className="h-5 w-5 text-accent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;