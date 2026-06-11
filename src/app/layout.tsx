import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Cormorant_Garamond, Source_Sans_3 } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { getStructuredDataGraph } from "@/lib/structured-data";
import { brandAssets, ogImageMeta, seo, siteConfig } from "@/lib/site-data";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: seo.defaultTitle,
    template: seo.titleTemplate,
  },
  description: seo.defaultDescription,
  metadataBase: new URL(siteConfig.siteUrl),
  openGraph: {
    title: seo.defaultTitle,
    description: seo.defaultDescription,
    url: siteConfig.siteUrl,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
    images: [ogImageMeta],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.defaultTitle,
    description: seo.defaultDescription,
    images: [ogImageMeta.url],
  },
  icons: {
    icon: [
      { url: brandAssets.favicon, sizes: "128x128", type: "image/png" },
      { url: brandAssets.mark256, sizes: "256x256", type: "image/png" },
    ],
    apple: brandAssets.appleTouchIcon,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${sourceSans.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <JsonLd data={getStructuredDataGraph()} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}