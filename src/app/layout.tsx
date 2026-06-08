import type { Metadata } from "next";
import { Cormorant_Garamond, Source_Sans_3 } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
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
    default: "I DJ Events | Tahoe's Premier Wedding DJ",
    template: "%s | I DJ Events",
  },
  description:
    "Lake Tahoe's premier wedding DJ. Professional DJ, MC, lighting, ceremony sound, officiant, and karaoke services for unforgettable celebrations.",
  metadataBase: new URL("https://idj.events"),
  openGraph: {
    title: "I DJ Events | Tahoe's Premier Wedding DJ",
    description:
      "Professional wedding DJ services in Lake Tahoe, Reno, and beyond. Packages from $1,500.",
    url: "https://idj.events",
    siteName: "I DJ Events",
    locale: "en_US",
    type: "website",
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
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}