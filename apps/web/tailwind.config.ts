import type { Config } from "tailwindcss";
import sharedConfig from "@repo/tailwind-config"; // Importa o preset compartilhado

const config: Config = {
  presets: [sharedConfig],
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "../../packages/ui/src/**/*.{js,ts,jsx,tsx}", // Inclui o conteúdo do @repo/ui
  ],
};

export default config;
