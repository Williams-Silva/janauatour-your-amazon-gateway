import { Card } from '@/components/ui/card';
import { Star } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Testimonials = () => {
  const { t } = useLanguage();

  const testimonials = [
    {
      text: t('testimonials.1'),
      author: 'John M.',
      country: 'USA',
      flag: '🇺🇸',
    },
    {
      text: t('testimonials.2'),
      author: 'Marta R.',
      country: 'Brasil',
      flag: '🇧🇷',
    },
    {
      text: t('testimonials.3'),
      author: 'Claire D.',
      country: 'France',
      flag: '🇫🇷',
    },
    {
      text: t('testimonials.4'),
      author: 'Javier P.',
      country: 'España',
      flag: '🇪🇸',
    },
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-primary">
            {t('testimonials.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <article key={index}>
            <Card
              className="p-6 gradient-card hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <blockquote className="text-foreground mb-4 leading-relaxed italic">
                <p>"{testimonial.text}"</p>
              </blockquote>
              <div className="flex items-center gap-2">
                <span className="text-2xl">{testimonial.flag}</span>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.country}</p>
                </div>
              </div>
            </Card>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
