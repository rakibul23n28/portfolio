import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

import { Cormorant_Garamond } from "next/font/google";

import Footer from "@/components/Footer";

const cormorantGaramond = Cormorant_Garamond({
  weight: ["700"],
  subsets: ["latin"],
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
        className={`${cormorantGaramond.className} antialiased bg-gradient-to-r from-green-100 to-rose-100 flex flex-col min-h-screen`}
      >
        <Header />

        <main className="flex-grow lg:w-[80%] w-full mx-auto px-4 sm:px-10 lg:px-0">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
