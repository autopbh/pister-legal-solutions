import { Mail, Phone, MapPin, Linkedin, Scale } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main footer content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="lg:col-span-1 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                <Scale className="h-5 w-5 text-accent-foreground" />
              </div>
              <div>
                <h3 className="font-playfair font-bold text-xl">Me Jozef Pister</h3>
                <p className="text-sm opacity-90">Rechtsanwalt</p>
              </div>
            </div>
            <p className="text-sm opacity-90 leading-relaxed">
              Ihr Spezialist für Internationales Recht und Handelsrecht mit über 25 Jahren Erfahrung in grenzüberschreitender juristischer Beratung.
            </p>
            <div className="flex space-x-3">
              <a 
                href="#" 
                className="w-8 h-8 bg-primary-light rounded-full flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="opacity-90 hover:opacity-100 hover:text-accent transition-colors">Startseite</a></li>
              <li><a href="#about" className="opacity-90 hover:opacity-100 hover:text-accent transition-colors">Über die Kanzlei</a></li>
              <li><a href="#services" className="opacity-90 hover:opacity-100 hover:text-accent transition-colors">Rechtsgebiete</a></li>
              <li><a href="#practice" className="opacity-90 hover:opacity-100 hover:text-accent transition-colors">Mandantenservice</a></li>
              <li><a href="#contact" className="opacity-90 hover:opacity-100 hover:text-accent transition-colors">Kontakt</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Rechtsgebiete</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="opacity-90 hover:opacity-100 hover:text-accent transition-colors">Internationales Recht</a></li>
              <li><a href="#" className="opacity-90 hover:opacity-100 hover:text-accent transition-colors">Handelsrecht</a></li>
              <li><a href="#" className="opacity-90 hover:opacity-100 hover:text-accent transition-colors">EU-Wirtschaftsrecht</a></li>
              <li><a href="#" className="opacity-90 hover:opacity-100 hover:text-accent transition-colors">Vertragsrecht</a></li>
              <li><a href="#" className="opacity-90 hover:opacity-100 hover:text-accent transition-colors">Schiedsgerichtsbarkeit</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Kontakt</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 opacity-75" />
                <div>
                  <p>Musterstraße 123</p>
                  <p>10115 Berlin, Deutschland</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 opacity-75" />
                <p>+49 (0) 30 123 456 789</p>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 opacity-75" />
                <p>kontakt@pister-law.de</p>
              </div>
            </div>

            <div className="bg-primary-light rounded-lg p-4 mt-6">
              <h5 className="font-semibold text-sm mb-2">Öffnungszeiten</h5>
              <div className="space-y-1 text-xs">
                <div className="flex justify-between">
                  <span>Mo-Fr:</span>
                  <span>09:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Samstag:</span>
                  <span>10:00 - 14:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sonntag:</span>
                  <span>Nach Vereinbarung</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-light">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm opacity-90">
              {t.footer.copyright}
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="opacity-90 hover:opacity-100 hover:text-accent transition-colors">
                {t.footer.impressum}
              </a>
              <a href="#" className="opacity-90 hover:opacity-100 hover:text-accent transition-colors">
                {t.footer.privacy}
              </a>
              <a href="#" className="opacity-90 hover:opacity-100 hover:text-accent transition-colors">
                {t.footer.disclaimer}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;