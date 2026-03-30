/**
 * Página principal (Index) da Janauatour.
 * Reúne todas as seções do site: Hero, Serviços, Pacotes,
 * Depoimentos, Sobre, Contato, Rodapé e botão do WhatsApp.
 * Também configura o título e meta descrição da página para SEO.
 */
import { useEffect } from 'react';
import { LanguageProvider } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Packages from '@/components/Packages';
import Testimonials from '@/components/Testimonials';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  useEffect(() => {
    // Atualiza o título da página para SEO
    document.title = 'Janauatour – Turismo em Manaus e Amazônia | Pacotes, Passeios e Traslados';
    
    // Atualiza a meta descrição para SEO
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Descubra a Amazônia com a Janauatour. Passeios no Encontro das Águas, City Tour Manaus, nado com botos, pacotes completos, hospedagem e atendimento multilíngue. Reserva rápida e segura.'
      );
    }
  }, []);

  return (
    <LanguageProvider>
      <div className="min-h-screen">
        {/* Cabeçalho fixo com navegação */}
        <Header />
        <main>
          {/* Seção principal com carrossel de imagens */}
          <Hero />
          {/* Seção de serviços oferecidos */}
          <Services />
          {/* Seção de pacotes turísticos em destaque */}
          <Packages />
          {/* Seção de depoimentos dos clientes */}
          <Testimonials />
          {/* Seção sobre a empresa */}
          <About />
          {/* Seção de contato com formulário */}
          <Contact />
        </main>
        {/* Rodapé com informações e redes sociais */}
        <Footer />
        {/* Botão flutuante do WhatsApp */}
        <WhatsAppButton />
      </div>
    </LanguageProvider>
  );
};

export default Index;
