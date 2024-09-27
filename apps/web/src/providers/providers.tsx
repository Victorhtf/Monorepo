import React from "react";
import { getMessages } from "next-intl/server";
import { NextUIProvider } from "@nextui-org/react";

import { NextIntlClientProvider } from "next-intl";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export default async function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  const messages = await getMessages();
  return (
    <NextIntlClientProvider messages={messages}>
      <NextThemesProvider attribute="class" defaultTheme="light">
        <NextUIProvider>{children}</NextUIProvider>
      </NextThemesProvider>
    </NextIntlClientProvider>
  );
}
