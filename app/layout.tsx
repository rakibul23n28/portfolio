import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

import { Cormorant_Garamond, Raleway } from "next/font/google";

import ThemeToggle from "@/components/client/ThemeToggle";
import AnimatedCursorWrapper from "@/components/client/AnimatedCursorWrapper";

const cormorantGaramond = Cormorant_Garamond({
  weight: ["700"],
  subsets: ["latin"],
});

const raleway = Raleway({
  weight: ["400", "700"],
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
      <body className={`${cormorantGaramond.className} antialiased  `}>
        <AnimatedCursorWrapper />
        <ThemeToggle />

        <Header />
        <div className="lg:w-[80%] mx-auto px-4 sm:px-10 lg:px-0 bg-grey-100">
          {children}
        </div>
      </body>
    </html>
  );
}
