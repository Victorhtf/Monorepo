import type { Config } from "tailwindcss";
import sharedConfig from "@repo/tailwind-config";

const config: Config = {
  presets: [sharedConfig],
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
};

export default config;
