import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import { getTranslations } from "next-intl/server";

const inter = Inter({ subsets: ["latin"] });

interface Params {
  params: {
    locale: string;
  };
}

export async function generateMetadata({
  params: { locale },
}: Params): Promise<Metadata> {
  const t = await getTranslations("Metadata");

  return {
    title: t("title"),
    description: t("description"),
  };
}

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<RootLayoutProps>) {
  return (
    <html lang={locale}>
      <head>
        <link rel="icon" href="/edanco-logo.ico" />{" "}
        {/* Cambia el nombre y la extensión si es necesario */}
        {/* O si estás usando un .png
        <link rel="icon" href="/favicon.png" type="image/png" />
        */}
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
