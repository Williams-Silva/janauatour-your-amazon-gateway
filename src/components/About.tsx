import { useLanguage } from '@/contexts/LanguageContext';
import { Award, Shield, Globe, Heart } from 'lucide-react';

const About = () => {
  const { t } = useLanguage();

  const values = [
    { icon: Award, text: 'Experiência' },
    { icon: Shield, text: 'Segurança' },
    { icon: Globe, text: 'Multilíngue' },
    { icon: Heart, text: 'Paixão' },
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8 text-primary">
            {t('about.title')}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-12">
            {t('about.text')}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-3 p-6 rounded-lg hover:bg-muted/50 transition-colors"
              >
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <p className="font-semibold text-foreground">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
