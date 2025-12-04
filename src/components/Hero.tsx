import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import encontroAguas from '@/assets/encontro-das-aguas.jpg';
import teatroAmazonas from '@/assets/teatro-amazonas.jpg';
import botos from '@/assets/botos.jpg';

const heroImages = [encontroAguas, teatroAmazonas, botos];

const Hero = () => {
  const { t } = useLanguage();
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images Carousel */}
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImage ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={image}
            alt={`Amazon rainforest ${index + 1}`}
            className={`w-full h-full object-cover ${index === 2 ? 'object-left-top' : ''}`}
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      ))}

      {/* Carousel Indicators */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImage 
                ? 'bg-white scale-110' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 animate-fade-in">
          {t('hero.title')}
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-95 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          {t('hero.subtitle')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <Button
            size="lg"
            onClick={() => scrollToSection('contact')}
            className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-lg px-8"
          >
            {t('hero.cta1')}
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection('packages')}
            className="bg-white/10 text-white border-white hover:bg-white hover:text-primary backdrop-blur-sm font-semibold text-lg px-8"
          >
            {t('hero.cta2')}
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
