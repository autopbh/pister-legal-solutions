import { Star, Quote } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { useTranslations } from '@/hooks/useTranslations';

const TestimonialsSection = () => {
  const { t } = useTranslations();
  
  const testimonials = [
    {
      name: t.testimonials.testimonial1.name,
      role: t.testimonials.testimonial1.role,
      company: t.testimonials.testimonial1.company,
      content: t.testimonials.testimonial1.content,
      rating: 5,
      image: "/lovable-uploads/382f4fa4-b492-445d-9c63-5c526b3ac0a3.png"
    },
    {
      name: t.testimonials.testimonial2.name,
      role: t.testimonials.testimonial2.role,
      company: t.testimonials.testimonial2.company,
      content: t.testimonials.testimonial2.content,
      rating: 5,
      image: "/lovable-uploads/667e956a-56e7-495e-b04b-38be6b06087b.png"
    },
    {
      name: t.testimonials.testimonial3.name,
      role: t.testimonials.testimonial3.role,
      company: t.testimonials.testimonial3.company,
      content: t.testimonials.testimonial3.content,
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
            {t.testimonials.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in delay-200">
            {t.testimonials.subtitle}
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
            <span className="font-semibold text-primary">{t.testimonials.cta}</span>
            <Star className="h-5 w-5 text-accent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;