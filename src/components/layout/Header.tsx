import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/useLanguage';
import LanguageSelector from '../LanguageSelector';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 50);

      // Update active section based on scroll position
      const sections = ['home', 'about', 'services', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 100;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Top contact bar */}
      <div className="bg-gradient-primary text-primary-foreground py-3 px-4 border-b border-primary-light/20">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 hover:text-accent-gold transition-smooth">
              <Phone className="h-4 w-4" />
              <span className="font-medium">+49 (0) 30 123 456 789</span>
            </div>
            <div className="flex items-center space-x-2 hover:text-accent-gold transition-smooth">
              <Mail className="h-4 w-4" />
              <span className="font-medium">kontakt@pister-law.de</span>
            </div>
          </div>
          <LanguageSelector />
        </div>
      </div>

      {/* Main header */}
      <header 
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled 
            ? 'bg-background/95 backdrop-blur-xl shadow-elegant border-b border-border/50' 
            : 'bg-background border-b border-transparent'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div 
              className="flex items-center space-x-4 cursor-pointer group"
              onClick={() => scrollToSection('home')}
            >
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-card group-hover:shadow-glow transition-all duration-500 group-hover:scale-110">
                  <span className="text-primary-foreground font-playfair font-bold text-xl">JP</span>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-accent rounded-full animate-pulse-glow"></div>
              </div>
              <div className="group-hover:transform group-hover:scale-105 transition-spring">
                <h1 className="font-playfair font-bold text-2xl text-primary group-hover:text-primary-glow transition-smooth">
                  Me Jozef Pister
                </h1>
                <p className="text-sm text-muted-foreground font-medium">
                  Rechtsanwalt • International Law
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {[
                { id: 'home', label: t.nav.home },
                { id: 'about', label: t.nav.about },
                { id: 'services', label: t.nav.services },
                { id: 'contact', label: t.nav.contact }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`nav-link font-medium py-2 px-1 transition-all duration-300 ${
                    activeSection === item.id 
                      ? 'text-primary active' 
                      : 'text-foreground hover:text-primary'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button 
                onClick={() => scrollToSection('contact')}
                className="btn-premium px-6 py-3 font-semibold relative overflow-hidden group"
              >
                <span className="relative z-10">{t.hero.cta}</span>
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-3 rounded-xl text-foreground hover:text-primary hover:bg-muted/50 transition-all duration-300"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden py-6 border-t border-border/50 animate-fade-in">
              <nav className="flex flex-col space-y-4">
                {[
                  { id: 'home', label: t.nav.home },
                  { id: 'about', label: t.nav.about },
                  { id: 'services', label: t.nav.services },
                  { id: 'contact', label: t.nav.contact }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`text-left font-medium py-3 px-4 rounded-xl transition-all duration-300 ${
                      activeSection === item.id 
                        ? 'text-primary bg-primary/10' 
                        : 'text-foreground hover:text-primary hover:bg-muted/50'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                <Button 
                  onClick={() => scrollToSection('contact')}
                  className="btn-premium mt-4 w-full py-3 font-semibold"
                >
                  {t.hero.cta}
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;