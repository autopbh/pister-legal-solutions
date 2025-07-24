import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/hooks/useLanguage';

const ContactSection = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    privacy: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
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
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-primary">
            {t.contact.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Kanzlei Kontakt</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Anschrift</p>
                    <p className="text-muted-foreground">
                      Musterstraße 123<br />
                      10115 Berlin<br />
                      Deutschland
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Telefon</p>
                    <p className="text-muted-foreground">+49 (0) 30 123 456 789</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">E-Mail</p>
                    <p className="text-muted-foreground">kontakt@pister-law.de</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Bürozeiten</p>
                    <p className="text-muted-foreground">
                      Mo-Fr: 09:00 - 18:00<br />
                      Sa: 10:00 - 14:00<br />
                      So: Nach Vereinbarung
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="space-y-4">
              <Card className="bg-primary text-primary-foreground shadow-card">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">Notfall-Hotline</h3>
                  <p className="text-sm opacity-90 mb-4">
                    Bei dringenden rechtlichen Angelegenheiten erreichen Sie uns auch außerhalb der Geschäftszeiten.
                  </p>
                  <Button 
                    variant="secondary" 
                    className="w-full bg-primary-foreground text-primary hover:bg-accent-light"
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    +49 (0) 30 123 456 700
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-accent text-accent-foreground shadow-card">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">Terminvereinbarung</h3>
                  <p className="text-sm opacity-90 mb-4">
                    Vereinbaren Sie online einen Termin für Ihre kostenlose Erstberatung.
                  </p>
                  <Button 
                    variant="secondary" 
                    className="w-full bg-accent-foreground text-accent hover:bg-background"
                  >
                    Online Termin buchen
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-xl text-primary">Nachricht senden</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {t.contact.form.name} *
                    </label>
                    <Input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      required
                      className="border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {t.contact.form.email} *
                    </label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                      className="border-border focus:border-primary"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t.contact.form.subject} *
                  </label>
                  <Input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => handleInputChange('subject', e.target.value)}
                    required
                    className="border-border focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t.contact.form.message} *
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    required
                    rows={6}
                    className="border-border focus:border-primary resize-none"
                    placeholder="Beschreiben Sie bitte Ihr rechtliches Anliegen..."
                  />
                </div>

                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="privacy"
                    checked={formData.privacy}
                    onCheckedChange={(checked) => handleInputChange('privacy', checked as boolean)}
                    required
                  />
                  <label htmlFor="privacy" className="text-sm text-muted-foreground leading-5">
                    {t.contact.form.privacy} <a href="#" className="text-primary hover:underline">Datenschutzerklärung</a>
                  </label>
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting || !formData.privacy}
                  className="w-full bg-gradient-primary hover:opacity-90 transition-smooth"
                >
                  {isSubmitting ? (
                    "Wird gesendet..."
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      {t.contact.form.submit}
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Map placeholder */}
        <div className="mt-16">
          <Card className="shadow-card overflow-hidden">
            <div className="h-64 bg-muted flex items-center justify-center">
              <div className="text-center space-y-2">
                <MapPin className="h-8 w-8 text-accent mx-auto" />
                <p className="text-muted-foreground">Interaktive Karte</p>
                <p className="text-sm text-muted-foreground">Musterstraße 123, 10115 Berlin</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;