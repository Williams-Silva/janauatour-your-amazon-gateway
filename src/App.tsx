/**
 * Componente principal da aplicação Janauatour.
 * Configura os provedores globais (React Query, Tooltip, Toasters)
 * e define as rotas da aplicação.
 */
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Instância do cliente React Query para gerenciamento de estado assíncrono
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      {/* Componentes de notificação (toast) */}
      <Toaster />
      <Sonner />
      {/* Roteador da aplicação */}
      <BrowserRouter>
        <Routes>
          {/* Página principal */}
          <Route path="/" element={<Index />} />
          {/* ADICIONE TODAS AS ROTAS PERSONALIZADAS ACIMA DA ROTA CURINGA "*" */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
