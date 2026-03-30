/**
 * Componente Services - Seção de serviços oferecidos pela Janauatour.
 * Exibe cards com ícones representando cada tipo de serviço:
 * pacotes, passeios, hospedagem, veículos, translados e experiências.
 */
import { Package, Map, Hotel, Car, Bus, Compass } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

const Services = () => {
  const { t } = useLanguage();

  // Lista de serviços com ícone, título e descrição traduzíveis
  const services = [
    {
      icon: Package,
      title: t('services.packages'),
      description: t('services.packages.desc'),
    },
    {
      icon: Map,
      title: t('services.tours'),
      description: t('services.tours.desc'),
    },
    {
      icon: Hotel,
      title: t('services.accommodation'),
      description: t('services.accommodation.desc'),
    },
    {
      icon: Car,
      title: t('services.vehicles'),
      description: t('services.vehicles.desc'),
    },
    {
      icon: Bus,
      title: t('services.transfer'),
      description: t('services.transfer.desc'),
    },
    {
      icon: Compass,
      title: t('services.experiences'),
      description: t('services.experiences.desc'),
    },
  ];

  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Cabeçalho da seção */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-primary">
            {t('services.title')}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Grid de cards de serviços */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <article key={index}>
              <Card
                className="p-8 gradient-card hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border/50 h-full"
              >
                {/* Ícone do serviço */}
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                {/* Título do serviço */}
                <h3 className="text-xl font-heading font-semibold mb-3 text-foreground">
                  {service.title}
                </h3>
                {/* Descrição do serviço */}
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </Card>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
