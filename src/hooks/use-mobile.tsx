/**
 * Hook useIsMobile - Detecta se o dispositivo é mobile.
 * Retorna true quando a largura da tela é menor que 768px (breakpoint mobile).
 * Atualiza automaticamente ao redimensionar a janela.
 */
import * as React from "react";

// Ponto de corte para considerar o dispositivo como mobile (em pixels)
const MOBILE_BREAKPOINT = 768;

export function useIsMobile() {
  // Estado que armazena se o dispositivo é mobile
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined);

  React.useEffect(() => {
    // Cria uma media query para monitorar o tamanho da tela
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);

    // Função chamada quando o tamanho da tela muda
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };

    // Adiciona o listener e define o valor inicial
    mql.addEventListener("change", onChange);
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);

    // Remove o listener ao desmontar o componente
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return !!isMobile;
}
