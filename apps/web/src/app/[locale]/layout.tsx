import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import Header from "../../components/Layout/Header";
import Background from "../../components/Layout/Background";
import "../../../styles/globals.css";
import Providers from "../../providers/providers";

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <Providers>
          <div className="flex flex-col h-screen">
            <Header />
            <main className="flex-1 w-full flex items-center justify-center">
              {/* <Background> */}
              {children}

              {/* </Background> */}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
