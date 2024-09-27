import type { Config } from "tailwindcss";
import { nextui } from '@nextui-org/react';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/globals.css',
    '../../packages/**/*.{js,ts,jsx,tsx,mdx}',
    "../../node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
      screens: {
        '3xl': '1920px',
        '4xl': '2560px',
        '5xl': '3840px',
        '6xl': '4096px',
        '7xl': '5120px',
      },
      maxWidth: {
        '3xl': '1920px',
        '4xl': '2560px',
        '5xl': '3840px',
        '6xl': '4096px',
        '7xl': '5120px',
      },
    },
  },
  darkMode: 'class',
  plugins: [
    nextui()
  ],
  safelist: [
    'col-span-1',
    'col-span-2',
  ],
};

export default config;
