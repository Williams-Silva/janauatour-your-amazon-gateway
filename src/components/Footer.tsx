/**
 * Componente Footer - Rodapé do site.
 * Exibe informações da marca, links rápidos de serviços,
 * ícones de redes sociais e direitos autorais.
 */
import { useLanguage } from '@/contexts/LanguageContext';
import { Facebook, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Marca e descrição */}
          <div>
            <h3 className="text-2xl font-heading font-bold mb-3">Janauatour</h3>
            <p className="text-primary-foreground/80 mb-4">{t('footer.description')}</p>
          </div>

          {/* Links rápidos de serviços */}
          <nav aria-label="Serviços">
            <h4 className="font-semibold mb-3">{t('footer.services')}</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Pacotes Turísticos</li>
              <li>Passeios Guiados</li>
              <li>Hospedagem</li>
              <li>Translados</li>
            </ul>
          </nav>

          {/* Redes sociais e contato */}
          <div>
            <h4 className="font-semibold mb-3">{t('footer.social')}</h4>
            <div className="flex gap-4 mb-4">
              {/* Link Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-full flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              {/* Link Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-full flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              {/* Link E-mail */}
              <a
                href="mailto:contato@janauatour.com"
                className="w-10 h-10 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-full flex items-center justify-center transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Direitos autorais */}
        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/70">
          <p>© 2024 Janauatour. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
