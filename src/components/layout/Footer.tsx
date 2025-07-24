import { Mail, Phone, MapPin, Linkedin, Scale, Star, Globe, Award, Clock, Shield, AlertTriangle } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import SecurityBadge from '@/components/security/SecurityBadge';
import ProtectedContact from '@/components/security/ProtectedContact';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gradient-hero text-primary-foreground relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-accent/5 rounded-full blur-3xl"></div>

      {/* Main footer content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Enhanced Logo and description */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 bg-gradient-accent rounded-2xl flex items-center justify-center shadow-glow">
                <Scale className="h-7 w-7 text-accent-foreground" />
              </div>
              <div>
                <h3 className="font-playfair font-bold text-2xl text-accent-gold">Me Jozef Pister</h3>
                <p className="text-sm opacity-90 font-medium">Rechtsanwalt • International Law</p>
              </div>
            </div>
            <p className="text-sm opacity-90 leading-relaxed">
              Ihr Spezialist für Internationales Recht und Handelsrecht mit über 25 Jahren Erfahrung in grenzüberschreitender juristischer Beratung.
            </p>
            
            {/* Trust badges */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Award className="h-4 w-4 text-accent-gold" />
                <span className="text-xs opacity-80">DAV Mitglied</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="h-4 w-4 text-accent-gold" />
                <span className="text-xs opacity-80">Top Anwalt 2024</span>
              </div>
            </div>

            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-primary-light/30 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-accent-gold hover:text-accent-foreground transition-all duration-300 group"
              >
                <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-6">
            <h4 className="font-playfair font-bold text-xl text-accent-gold">Navigation</h4>
            <ul className="space-y-3 text-sm">
              {[
                { label: "Startseite", href: "#home" },
                { label: "Über die Kanzlei", href: "#about" },
                { label: "Rechtsgebiete", href: "#services" },
                { label: "Kontakt", href: "#contact" }
              ].map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.href} 
                    className="opacity-90 hover:opacity-100 hover:text-accent-gold transition-all duration-300 flex items-center group"
                  >
                    <div className="w-1 h-1 bg-accent-gold rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="font-playfair font-bold text-xl text-accent-gold">Rechtsgebiete</h4>
            <ul className="space-y-3 text-sm">
              {[
                "Internationales Recht",
                "Handelsrecht", 
                "EU-Wirtschaftsrecht",
                "Vertragsrecht",
                "Schiedsgerichtsbarkeit"
              ].map((service, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="opacity-90 hover:opacity-100 hover:text-accent-gold transition-all duration-300 flex items-center group"
                  >
                    <div className="w-1 h-1 bg-accent-gold rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Enhanced Contact Info */}
          <div className="space-y-6">
            <h4 className="font-playfair font-bold text-xl text-accent-gold">Kontakt</h4>
            <div className="space-y-4 text-sm">
              <div className="flex items-start space-x-3 group">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0 opacity-75 group-hover:text-accent-gold transition-colors duration-300" />
                <div>
                  <p className="font-medium">Musterstraße 123</p>
                  <p>10115 Berlin, Deutschland</p>
                </div>
              </div>
              <div className="group hover:text-accent-gold transition-colors duration-300">
                <Phone className="h-5 w-5 opacity-75 mb-2" />
                <ProtectedContact type="phone" variant="split" />
              </div>
              <div className="group hover:text-accent-gold transition-colors duration-300">
                <Mail className="h-5 w-5 opacity-75 mb-2" />
                <ProtectedContact type="email" variant="split" />
              </div>
            </div>

            <div className="bg-primary-light/20 backdrop-blur-sm rounded-2xl p-6 border border-primary-light/20">
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="h-5 w-5 text-accent-gold" />
                <h5 className="font-bold text-sm text-accent-gold">Öffnungszeiten</h5>
              </div>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span>Mo-Fr:</span>
                  <span className="font-medium">09:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Samstag:</span>
                  <span className="font-medium">10:00 - 14:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sonntag:</span>
                  <span className="font-medium">Nach Vereinbarung</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Security and Legal Section */}
        <div className="mt-16 grid lg:grid-cols-2 gap-8">
          <SecurityBadge variant="compact" />
          
          <div className="bg-destructive/10 border border-destructive/20 rounded-3xl p-6">
            <div className="flex items-center space-x-3 mb-4">
              <AlertTriangle className="h-6 w-6 text-destructive" />
              <h4 className="font-playfair font-bold text-lg text-destructive">Mentions Légales Importantes</h4>
            </div>
            <p className="text-sm text-destructive-foreground leading-relaxed">
              ⚠️ <strong>Tous les contenus de ce site sont protégés.</strong> La reproduction, la copie ou l'extraction non autorisée d'informations juridiques ou de coordonnées professionnelles est strictement interdite selon le droit allemand (TMG & DSGVO).
            </p>
            <div className="mt-4 flex items-center space-x-4 text-xs text-destructive">
              <span>🔒 Site protégé SSL</span>
              <span>🛡️ Données sécurisées</span>
              <span>✅ Conformité RGPD</span>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Bottom bar */}
      <div className="border-t border-primary-light/20 bg-primary/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm opacity-90 flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Star className="h-4 w-4 text-accent-gold" />
                <span>{t.footer.copyright}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-4 w-4 text-accent animate-pulse" />
                <span>Surveillance technique active</span>
              </div>
            </div>
            <div className="flex space-x-8 text-sm">
              {[
                { label: t.footer.impressum, href: "#" },
                { label: t.footer.privacy, href: "#" },
                { label: t.footer.disclaimer, href: "#" }
              ].map((item, index) => (
                <a 
                  key={index}
                  href={item.href} 
                  className="opacity-90 hover:opacity-100 hover:text-accent-gold transition-all duration-300"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
          
          {/* Security status bar */}
          <div className="mt-6 pt-6 border-t border-primary-light/10">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
              <div className="flex items-center space-x-4 text-xs text-accent-gold">
                <span>✅ Dernière vérification de sécurité : juillet 2025</span>
                <span>🔐 Certificat SSL 256-bit</span>
                <span>🛡️ Fichiers protégés</span>
              </div>
              <div className="text-xs opacity-75">
                Ce site est conforme aux obligations légales allemandes (TMG & DSGVO)
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;