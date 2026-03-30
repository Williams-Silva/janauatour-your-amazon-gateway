/**
 * Componente WhatsAppButton - Botão flutuante do WhatsApp.
 * Fica fixo no canto inferior direito da tela e abre
 * uma conversa no WhatsApp ao ser clicado.
 */
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const WhatsAppButton = () => {
  // Abre o WhatsApp em uma nova aba com o número da empresa
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5592999999999', '_blank');
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      size="lg"
      className="fixed bottom-6 right-6 z-50 rounded-full w-16 h-16 bg-[#25D366] hover:bg-[#20BA59] shadow-2xl animate-bounce hover:animate-none transition-all"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <MessageCircle className="w-8 h-8 text-white" />
    </Button>
  );
};

export default WhatsAppButton;
