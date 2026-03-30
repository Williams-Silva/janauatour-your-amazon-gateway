/**
 * Arquivo principal de inicialização da aplicação.
 * Renderiza o componente raiz (App) no elemento HTML com id "root".
 */
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Cria a raiz do React e renderiza a aplicação
createRoot(document.getElementById("root")!).render(<App />);
