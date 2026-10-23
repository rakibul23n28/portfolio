import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import { Bricolage_Grotesque, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import Footer from "@/components/Footer";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  weight: ["400", "500", "600", "700", "800"],
});

const instrument = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument",
  weight: ["400"],
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Rakibul Hasan",
  description: "Portfolio of Rakibul Hasan",
  openGraph: {
    title: "Rakibul Hasan",
    description: "Portfolio of Rakibul Hasan",
    url: "https://portfolio-blush-theta-43.vercel.app/",
    siteName: "Rakibul Hasan Portfolio",
    images: [
      {
        url: "https://portfolio-blush-theta-43.vercel.app/projects/portfolio1.png",
        width: 1200,
        height: 630,
        alt: "Rakibul Hasan Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rakibul Hasan",
    description: "Portfolio of Rakibul Hasan",
    images: [
      "https://portfolio-blush-theta-43.vercel.app/projects/portfolio1.png",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth h-full">
      <body
        className={`${bricolage.variable} ${instrument.variable} ${jetbrains.variable} font-sans antialiased bg-[var(--bg)] text-[var(--text)] flex min-h-screen flex-col overflow-x-hidden`}
      >
        <Header />
        <main className="relative z-10 mx-auto flex w-full max-w-[1280px] flex-1 flex-col px-4 pb-10 sm:px-6 lg:px-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
