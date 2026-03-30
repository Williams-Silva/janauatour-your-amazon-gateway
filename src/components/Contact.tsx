/**
 * Componente Contact - Seção de contato com formulário e informações.
 * Inclui formulário de envio de mensagem, dados de WhatsApp,
 * e-mail e localização da empresa.
 */
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { t } = useLanguage();
  const { toast } = useToast();

  // Estado dos campos do formulário de contato
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Função de envio do formulário
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Exibe notificação de sucesso
    toast({
      title: 'Mensagem enviada!',
      description: 'Entraremos em contato em breve.',
    });
    // Limpa os campos do formulário
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Cabeçalho da seção */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-primary">
            {t('contact.title')}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Formulário de contato */}
          <Card className="p-8 gradient-card">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Campo de nome */}
              <div>
                <Input
                  placeholder={t('contact.name')}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-background"
                />
              </div>
              {/* Campo de e-mail */}
              <div>
                <Input
                  type="email"
                  placeholder={t('contact.email')}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-background"
                />
              </div>
              {/* Campo de mensagem */}
              <div>
                <Textarea
                  placeholder={t('contact.message')}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={6}
                  className="bg-background resize-none"
                />
              </div>
              {/* Botão de envio */}
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90" size="lg">
                {t('contact.send')}
              </Button>
            </form>
          </Card>

          {/* Informações de contato */}
          <address className="space-y-8 not-italic">
            {/* Card WhatsApp */}
            <Card className="p-6 gradient-card hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">WhatsApp</h3>
                  <p className="text-muted-foreground">+55 (92) 99999-9999</p>
                  <Button
                    variant="link"
                    className="px-0 text-primary"
                    onClick={() => window.open('https://wa.me/5592999999999', '_blank')}
                  >
                    {t('contact.whatsapp')}
                  </Button>
                </div>
              </div>
            </Card>

            {/* Card E-mail */}
            <Card className="p-6 gradient-card hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Email</h3>
                  <p className="text-muted-foreground">contato@janauatour.com</p>
                </div>
              </div>
            </Card>

            {/* Card Localização */}
            <Card className="p-6 gradient-card hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Localização</h3>
                  <p className="text-muted-foreground">Manaus, Amazonas - Brasil</p>
                </div>
              </div>
            </Card>
          </address>
        </div>
      </div>
    </section>
  );
};

export default Contact;
