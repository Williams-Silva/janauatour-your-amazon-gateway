import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Calendar, Users, MapPin } from 'lucide-react';

const Packages = () => {
  const { t } = useLanguage();

  const packages = [
    {
      title: t('packages.amazon3d'),
      description: t('packages.amazon3d.desc'),
      price: 'R$ 1.200',
      icon: Calendar,
      features: ['3 dias / 2 noites', 'Guia incluso', 'Refeições'],
    },
    {
      title: t('packages.meeting'),
      description: t('packages.meeting.desc'),
      price: 'R$ 350',
      icon: MapPin,
      features: ['Dia completo', 'Guia bilíngue', 'Transporte'],
    },
    {
      title: t('packages.dolphins'),
      description: t('packages.dolphins.desc'),
      price: 'R$ 280',
      icon: Users,
      features: ['Meio dia', 'Seguro incluído', 'Fotos'],
    },
    {
      title: t('packages.citytour'),
      description: t('packages.citytour.desc'),
      price: 'R$ 180',
      icon: MapPin,
      features: ['Dia completo', 'Entradas inclusas', 'Guia'],
    },
  ];

  return (
    <section id="packages" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-primary">
            {t('packages.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {packages.map((pkg, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-border/50"
            >
              <div className="bg-gradient-to-br from-primary to-secondary p-6 text-white">
                <pkg.icon className="w-12 h-12 mb-4" />
                <h3 className="text-2xl font-heading font-bold mb-2">{pkg.title}</h3>
                <p className="text-sm opacity-95">{pkg.description}</p>
              </div>

              <div className="p-6">
                <div className="mb-6">
                  <p className="text-sm text-muted-foreground mb-1">{t('packages.from')}</p>
                  <p className="text-3xl font-bold text-primary">{pkg.price}</p>
                </div>

                <ul className="space-y-2 mb-6">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button className="w-full bg-primary hover:bg-primary/90">
                  {t('packages.button')}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;
