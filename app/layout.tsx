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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${cormorantGaramond.className} antialiased bg-gradient-to-r from-green-100 to-rose-100  `}
      >
        {/* <LinknimatedCursorWrapper /> */}

        <Header />
        <div className="lg:w-[80%] mx-auto px-4 sm:px-10 lg:px-0 bg-grey-100">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
