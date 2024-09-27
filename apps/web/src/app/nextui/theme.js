// packages/config/nextui-theme.ts
import { createTheme } from "@nextui-org/react";

export const myNextUITheme = createTheme({
  type: "light", // Pode ser "dark" também, dependendo do seu projeto
  theme: {
    colors: {
      primary: "#1d4ed8", // Cor primária
      background: "#f9fafb", // Cor de fundo
      text: "#374151", // Cor de texto
      border: "#d1d5db", // Cor de borda
      error: "#f87171", // Cor para erros
      success: "#34d399", // Cor para sucesso
      warning: "#fbbf24", // Cor para alertas
      hover: "#e5e7eb", // Cor de hover
      inputBorder: "#d1d5db", // Cor da borda do Input
    },
    fonts: {
      sans: "Inter, sans-serif", // Fonte principal
    },
    space: {
      xs: "4px",
      sm: "8px",
      md: "16px",
      lg: "24px",
      xl: "32px",
    },
    fontWeights: {
      medium: 500,
      bold: 700,
    },
    borderWidths: {
      normal: "1px",
      thick: "2px",
    },
    radii: {
      sm: "4px",
      md: "8px",
      lg: "12px",
    },
    shadows: {
      md: "0 4px 6px rgba(0, 0, 0, 0.1)", // Sombra para cards
    },
    transitions: {
      default: "all 0.2s ease-in-out",
    },
  },
});
