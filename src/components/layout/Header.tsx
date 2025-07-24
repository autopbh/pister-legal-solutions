import { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/useLanguage';
import LanguageSelector from '../LanguageSelector';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      {/* Top contact bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone className="h-3 w-3" />
              <span>+49 (0) 123 456 789</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail className="h-3 w-3" />
              <span>kontakt@pister-law.de</span>
            </div>
          </div>
          <LanguageSelector />
        </div>
      </div>

      {/* Main header */}
      <header className="bg-background border-b shadow-card sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-playfair font-bold text-xl">JP</span>
              </div>
              <div>
                <h1 className="font-playfair font-bold text-xl text-primary">Me Jozef Pister</h1>
                <p className="text-sm text-muted-foreground">Rechtsanwalt</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-foreground hover:text-primary transition-smooth font-medium">
                {t.nav.home}
              </a>
              <a href="#about" className="text-foreground hover:text-primary transition-smooth font-medium">
                {t.nav.about}
              </a>
              <a href="#services" className="text-foreground hover:text-primary transition-smooth font-medium">
                {t.nav.services}
              </a>
              <a href="#practice" className="text-foreground hover:text-primary transition-smooth font-medium">
                {t.nav.practice}
              </a>
              <a href="#contact" className="text-foreground hover:text-primary transition-smooth font-medium">
                {t.nav.contact}
              </a>
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button variant="default" className="bg-gradient-primary hover:opacity-90 transition-smooth">
                {t.hero.cta}
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-md text-foreground hover:text-primary transition-smooth"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t animate-fade-in">
              <nav className="flex flex-col space-y-4">
                <a 
                  href="#home" 
                  className="text-foreground hover:text-primary transition-smooth font-medium py-2"
                  onClick={toggleMenu}
                >
                  {t.nav.home}
                </a>
                <a 
                  href="#about" 
                  className="text-foreground hover:text-primary transition-smooth font-medium py-2"
                  onClick={toggleMenu}
                >
                  {t.nav.about}
                </a>
                <a 
                  href="#services" 
                  className="text-foreground hover:text-primary transition-smooth font-medium py-2"
                  onClick={toggleMenu}
                >
                  {t.nav.services}
                </a>
                <a 
                  href="#practice" 
                  className="text-foreground hover:text-primary transition-smooth font-medium py-2"
                  onClick={toggleMenu}
                >
                  {t.nav.practice}
                </a>
                <a 
                  href="#contact" 
                  className="text-foreground hover:text-primary transition-smooth font-medium py-2"
                  onClick={toggleMenu}
                >
                  {t.nav.contact}
                </a>
                <Button 
                  variant="default" 
                  className="bg-gradient-primary hover:opacity-90 transition-smooth mt-4"
                  onClick={toggleMenu}
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