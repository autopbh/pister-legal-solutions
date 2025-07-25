import { useState } from 'react';
import { Plus, Minus, MessageCircle, Clock, Globe, Scale } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { useTranslations } from '@/hooks/useTranslations';

const FAQSection = () => {
  const { t } = useTranslations();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: t.faq.questions.q1.question,
      answer: t.faq.questions.q1.answer,
      icon: Scale
    },
    {
      question: t.faq.questions.q2.question,
      answer: t.faq.questions.q2.answer,
      icon: MessageCircle
    },
    {
      question: t.faq.questions.q3.question,
      answer: t.faq.questions.q3.answer,
      icon: Globe
    },
    {
      question: t.faq.questions.q4.question,
      answer: t.faq.questions.q4.answer,
      icon: Clock
    },
    {
      question: t.faq.questions.q5.question,
      answer: t.faq.questions.q5.answer,
      icon: MessageCircle
    },
    {
      question: t.faq.questions.q6.question,
      answer: t.faq.questions.q6.answer,
      icon: Clock
    }
  ];

  return (
    <section className="section-padding bg-gradient-professional relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-pattern opacity-20"></div>
      <div className="absolute top-20 right-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto container-padding relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-6 animate-fade-in">
            {t.faq.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in delay-200">
            {t.faq.subtitle}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card
                key={index}
                className="card-premium overflow-hidden transition-all duration-300 hover:shadow-float animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <button
                  className="w-full p-8 text-left transition-all duration-300 hover:bg-accent/5"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center flex-shrink-0 shadow-card">
                      <faq.icon className="h-6 w-6 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="font-playfair text-xl font-semibold text-primary mb-2">
                        {faq.question}
                      </h3>
                    </div>
                    
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center transition-transform duration-300"
                         style={{ transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                      {openIndex === index ? (
                        <Minus className="h-4 w-4 text-primary" />
                      ) : (
                        <Plus className="h-4 w-4 text-primary" />
                      )}
                    </div>
                  </div>
                </button>
                
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-8 pb-8 pt-0">
                    <div className="pl-16">
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Contact CTA */}
          <Card className="card-luxury mt-12 p-8 text-center">
            <h3 className="font-playfair text-2xl font-bold text-primary-foreground mb-4">
              {t.faq.contact.title}
            </h3>
            <p className="text-primary-foreground/80 mb-6">
              {t.faq.contact.subtitle}
            </p>
            <button className="btn-premium">
              <MessageCircle className="h-5 w-5 mr-2" />
              {t.faq.contact.button}
            </button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;