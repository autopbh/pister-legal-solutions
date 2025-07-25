import { MessageCircle, FileText, Scale, CheckCircle, ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { useTranslations } from '@/hooks/useTranslations';

const ProcessSection = () => {
  const { t } = useTranslations();
  
  const steps = [
    {
      icon: MessageCircle,
      title: t.process.step1.title,
      description: t.process.step1.description,
      duration: t.process.step1.duration,
      features: t.process.step1.features
    },
    {
      icon: FileText,
      title: t.process.step2.title,
      description: t.process.step2.description,
      duration: t.process.step2.duration,
      features: t.process.step2.features
    },
    {
      icon: Scale,
      title: t.process.step3.title,
      description: t.process.step3.description,
      duration: t.process.step3.duration,
      features: t.process.step3.features
    },
    {
      icon: CheckCircle,
      title: t.process.step4.title,
      description: t.process.step4.description,
      duration: t.process.step4.duration,
      features: t.process.step4.features
    }
  ];

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern opacity-30"></div>
      
      <div className="container mx-auto container-padding relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-6 animate-fade-in">
            {t.process.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in delay-200">
            {t.process.subtitle}
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-accent transform -translate-y-1/2 z-0"></div>
          
          <div className="grid lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="card-premium p-8 text-center hover-lift animate-scale-in group"
                     style={{ animationDelay: `${index * 200}ms` }}>
                  
                  {/* Step Number */}
                  <div className="absolute -top-4 -right-4 w-10 h-10 bg-gradient-accent rounded-full flex items-center justify-center font-bold text-white text-lg shadow-elegant z-20">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-elegant group-hover:shadow-glow transition-all duration-500 group-hover:scale-110">
                    <step.icon className="h-10 w-10 text-white" />
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="font-playfair text-2xl font-bold text-primary group-hover:text-accent transition-colors duration-300">
                      {step.title}
                    </h3>
                    
                    <div className="px-4 py-2 bg-accent/10 rounded-full inline-block">
                      <span className="text-accent font-semibold text-sm">{step.duration}</span>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2 pt-4">
                      {step.features.map((feature, i) => (
                        <div key={i} className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Decorative Gradient */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Card>

                {/* Arrow (Desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-30">
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center shadow-elegant">
                      <ArrowRight className="h-4 w-4 text-white" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="max-w-2xl mx-auto">
            <h3 className="font-playfair text-3xl font-bold text-primary mb-6">
              {t.process.cta.title}
            </h3>
            <p className="text-muted-foreground mb-8">
              {t.process.cta.subtitle}
            </p>
            <button className="btn-luxury inline-flex items-center space-x-3">
              <MessageCircle className="h-5 w-5" />
              <span>{t.process.cta.button}</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;