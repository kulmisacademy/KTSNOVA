import type { Metadata } from "next";
import {
  Plus_Jakarta_Sans,
  DM_Sans,
  JetBrains_Mono,
  Tajawal,
  Noto_Sans_Arabic,
} from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n/LanguageProvider";
import LanguageHtmlSync from "@/components/LanguageHtmlSync";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClientExtras from "@/components/ClientExtras";
import { ProjectModalProvider } from "@/lib/i18n/ProjectModalProvider";

const heading = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const body = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  preload: false,
});

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-arabic-display",
  display: "swap",
  preload: false,
});

const notoArabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  variable: "--font-arabic",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ktsnova.com"),
  title: "KTS NOVA — Teknoolojiya Casri ah · Powering Digital Innovation",
  description:
    "KTS NOVA waxay dhisaysaa xalal dijitaal oo casri ah. Software, websites, mobile apps, AI & automation for Somalia, Africa, and Arabic-speaking markets.",
  keywords: [
    "software company Somalia",
    "website development Mogadishu",
    "KTS NOVA",
    "software company Soomaaliya",
    "شركة برمجيات الصومال",
    "تطوير مواقع مقديشو",
  ],
  alternates: {
    languages: {
      so: "https://www.ktsnova.com",
      en: "https://www.ktsnova.com?lang=en",
      ar: "https://www.ktsnova.com?lang=ar",
    },
  },
  openGraph: {
    title: "KTS NOVA — Powering Digital Innovation",
    description: "Modern digital solutions for Somali, African, and Arabic-speaking businesses",
    url: "https://www.ktsnova.com",
    siteName: "KTS NOVA",
    images: [{ url: "/images/logo-on-light.png", width: 1024, height: 328 }],
    locale: "so_SO",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/icon.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="so"
      dir="ltr"
      suppressHydrationWarning
      className={`${heading.variable} ${body.variable} ${mono.variable} ${tajawal.variable} ${notoArabic.variable}`}
    >
      <body>
        <LanguageProvider>
          <ProjectModalProvider>
            <LanguageHtmlSync />
            <Navbar />
            <main>{children}</main>
            <Footer />
            <ClientExtras />
          </ProjectModalProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
