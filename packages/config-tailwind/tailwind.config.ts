import type { Config } from "tailwindcss";

const config: Omit<Config, "content"> = {
  theme: {
    extend: {
      colors: {
        "primary-color": "#1d4ed8", // Cor principal (usada nos anéis de foco e botões)
        "hover-color": "#e5e7eb", // Cor de hover leve
        "background-color": "#f9fafb", // Cor de fundo clara
        "text-color": "#374151", // Cor do texto principal (tom de cinza suave)
        "border-color": "#d1d5db", // Cor de borda neutra
        "error-color": "#f87171", // Cor para erros ou notificações
        "success-color": "#34d399", // Cor para sucesso
        "warning-color": "#fbbf24", // Cor para alertas
        "info-color": "#60a5fa", // Cor para informações ou destaques
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      fontWeight: {
        medium: 500,
        bold: 700,
      },
    },
  },
};

export default config;
