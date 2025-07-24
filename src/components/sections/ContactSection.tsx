import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, Star, Shield, Zap, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/hooks/useLanguage';
import SecurityBadge from '@/components/security/SecurityBadge';
import ProtectedContact from '@/components/security/ProtectedContact';

const ContactSection = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '', email: '', subject: '', message: '', privacy: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      toast({
        title: "Nachricht gesendet",
        description: "Vielen Dank für Ihre Nachricht. Wir melden uns binnen 24 Stunden bei Ihnen.",
      });
      setFormData({ name: '', email: '', subject: '', message: '', privacy: false });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-16 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/10 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-primary/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center space-x-2 bg-background/80 backdrop-blur-sm border border-primary/20 rounded-full px-6 py-3">
            <Star className="h-5 w-5 text-accent" />
            <span className="font-medium text-primary">Kontakt & Beratung</span>
          </div>
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-primary leading-tight">
            {t.contact.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-up">
            <Card className="card-premium shadow-elegant border-0">
              <CardHeader>
                <CardTitle className="text-2xl font-playfair text-primary flex items-center">
                  <MapPin className="h-6 w-6 mr-3 text-accent" />
                  Kanzlei Kontakt
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                 <div className="flex items-start space-x-4 group">
                   <div className="w-12 h-12 bg-gradient-primary rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-card">
                     <MapPin className="h-6 w-6 text-primary-foreground" />
                   </div>
                   <div>
                     <p className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">Anschrift</p>
                     <p className="text-muted-foreground whitespace-pre-line">Musterstraße 123<br/>10115 Berlin<br/>Deutschland</p>
                   </div>
                 </div>

                 <div className="flex items-start space-x-4 group">
                   <div className="w-12 h-12 bg-gradient-primary rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-card">
                     <Phone className="h-6 w-6 text-primary-foreground" />
                   </div>
                   <div className="flex-1">
                     <p className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">Telefon</p>
                     <ProtectedContact type="phone" variant="protected" className="mt-2" />
                   </div>
                 </div>

                 <div className="flex items-start space-x-4 group">
                   <div className="w-12 h-12 bg-gradient-primary rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-card">
                     <Mail className="h-6 w-6 text-primary-foreground" />
                   </div>
                   <div className="flex-1">
                     <p className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">E-Mail</p>
                     <ProtectedContact type="email" variant="reveal" className="mt-2" />
                   </div>
                 </div>

                 <div className="flex items-start space-x-4 group">
                   <div className="w-12 h-12 bg-gradient-primary rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-card">
                     <Clock className="h-6 w-6 text-primary-foreground" />
                   </div>
                   <div>
                     <p className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">Bürozeiten</p>
                     <p className="text-muted-foreground whitespace-pre-line">Mo-Fr: 09:00 - 18:00<br/>Sa: 10:00 - 14:00<br/>So: Nach Vereinbarung</p>
                   </div>
                 </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="grid gap-6">
              <Card className="card-premium bg-gradient-primary text-primary-foreground shadow-elegant border-0">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <Zap className="h-8 w-8 text-accent-gold" />
                    <div>
                      <h3 className="text-xl font-playfair font-bold">Notfall-Hotline</h3>
                      <p className="text-accent-gold">24/7 Erreichbarkeit</p>
                    </div>
                  </div>
                  <p className="text-sm opacity-90 mb-6">
                    Bei dringenden rechtlichen Angelegenheiten erreichen Sie uns auch außerhalb der Geschäftszeiten.
                  </p>
                  <Button className="w-full bg-accent-gold text-accent-foreground hover:bg-accent-gold/90 font-bold">
                    <Phone className="h-4 w-4 mr-2" />
                    +49 (0) 30 123 456 700
                  </Button>
                </CardContent>
               </Card>

               {/* Security Badge */}
               <SecurityBadge variant="compact" className="mt-6" />
             </div>
           </div>

           {/* Enhanced Contact Form */}
          <Card className="card-premium shadow-elegant border-0 animate-slide-in-right">
             <CardHeader>
               <CardTitle className="text-2xl font-playfair text-primary flex items-center">
                 <Send className="h-6 w-6 mr-3 text-accent" />
                 Nachricht senden
               </CardTitle>
               <div className="flex items-center space-x-2 mt-2">
                 <Lock className="h-4 w-4 text-accent animate-pulse" />
                 <span className="text-sm text-muted-foreground">Formulaire sécurisé et chiffré</span>
               </div>
             </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-foreground mb-3">
                      {t.contact.form.name} *
                    </label>
                    <Input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      required
                      className="border-2 border-border/50 focus:border-primary transition-all duration-300 rounded-xl"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-foreground mb-3">
                      {t.contact.form.email} *
                    </label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                      className="border-2 border-border/50 focus:border-primary transition-all duration-300 rounded-xl"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-foreground mb-3">
                    {t.contact.form.subject} *
                  </label>
                  <Input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => handleInputChange('subject', e.target.value)}
                    required
                    className="border-2 border-border/50 focus:border-primary transition-all duration-300 rounded-xl"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-foreground mb-3">
                    {t.contact.form.message} *
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    required
                    rows={6}
                    className="border-2 border-border/50 focus:border-primary transition-all duration-300 rounded-xl resize-none"
                    placeholder="Beschreiben Sie bitte Ihr rechtliches Anliegen..."
                  />
                </div>

                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="privacy"
                    checked={formData.privacy}
                    onCheckedChange={(checked) => handleInputChange('privacy', checked as boolean)}
                    required
                    className="mt-1"
                  />
                  <label htmlFor="privacy" className="text-sm text-muted-foreground leading-6">
                    {t.contact.form.privacy} <a href="#" className="text-primary hover:underline font-medium">Datenschutzerklärung</a>
                  </label>
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting || !formData.privacy}
                  className="w-full btn-premium py-4 text-lg font-bold"
                >
                  {isSubmitting ? "Wird gesendet..." : (
                    <>
                      <Send className="h-5 w-5 mr-2" />
                      {t.contact.form.submit}
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;