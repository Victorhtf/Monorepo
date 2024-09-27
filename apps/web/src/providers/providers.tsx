import React from "react";
import { NextUIProvider } from "@nextui-org/react";
import { NextIntlClientProvider } from "next-intl";
import { ThemeProvider } from "next-themes";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextIntlClientProvider>
      <NextUIProvider>
        {/* <ThemeProvider> */}
        {children}

        {/* </ThemeProvider> */}
      </NextUIProvider>
    </NextIntlClientProvider>
  );
}
