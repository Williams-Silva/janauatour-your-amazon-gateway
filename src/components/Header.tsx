import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import logoJanauatour from '@/assets/logo-janauatour.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const languages = [
    { code: 'pt', label: 'PT' },
    { code: 'en', label: 'EN' },
    { code: 'es', label: 'ES' },
    { code: 'fr', label: 'FR' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/95 backdrop-blur-md shadow-md' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection('hero')}
            className="hover:opacity-90 transition-opacity"
          >
            <img 
              src={logoJanauatour} 
              alt="Janauatour - Viagens e Turismo" 
              className="h-12 md:h-14 w-auto drop-shadow-md"
            />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('services')} className={`transition-colors ${isScrolled ? 'text-foreground hover:text-primary' : 'text-white hover:text-accent drop-shadow-sm'}`}>
              {t('nav.services')}
            </button>
            <button onClick={() => scrollToSection('packages')} className={`transition-colors ${isScrolled ? 'text-foreground hover:text-primary' : 'text-white hover:text-accent drop-shadow-sm'}`}>
              {t('nav.packages')}
            </button>
            <button onClick={() => scrollToSection('about')} className={`transition-colors ${isScrolled ? 'text-foreground hover:text-primary' : 'text-white hover:text-accent drop-shadow-sm'}`}>
              {t('nav.about')}
            </button>
            <button onClick={() => scrollToSection('contact')} className={`transition-colors ${isScrolled ? 'text-foreground hover:text-primary' : 'text-white hover:text-accent drop-shadow-sm'}`}>
              {t('nav.contact')}
            </button>
          </div>

          {/* Language Switcher & Mobile Menu */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code as any)}
                  className={`px-2 py-1 text-sm font-medium rounded transition-colors ${
                    language === lang.code
                      ? 'bg-accent text-accent-foreground'
                      : isScrolled ? 'text-foreground/80 hover:text-foreground' : 'text-white/80 hover:text-white drop-shadow-sm'
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className={`md:hidden ${isScrolled ? 'text-foreground' : 'text-white drop-shadow-sm'}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4 animate-fade-in bg-black/50 backdrop-blur-md rounded-lg p-4">
            <button onClick={() => scrollToSection('services')} className="text-left text-white hover:text-accent transition-colors">
              {t('nav.services')}
            </button>
            <button onClick={() => scrollToSection('packages')} className="text-left text-white hover:text-accent transition-colors">
              {t('nav.packages')}
            </button>
            <button onClick={() => scrollToSection('about')} className="text-left text-white hover:text-accent transition-colors">
              {t('nav.about')}
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-left text-white hover:text-accent transition-colors">
              {t('nav.contact')}
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
