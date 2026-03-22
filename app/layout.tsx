import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import { Cormorant_Garamond, Inter } from "next/font/google"; // Added Inter for cleaner body text
import Footer from "@/components/Footer";

// Best used for massive headings
const cormorantGaramond = Cormorant_Garamond({
  weight: ["700"],
  subsets: ["latin"],
  variable: "--font-heading",
});

// Best used for readable interface text (paragraphs, buttons)
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
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
        className={`${inter.variable} ${cormorantGaramond.variable} font-sans antialiased bg-slate-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col min-h-screen relative overflow-x-hidden`}
      >
        {/* ✨ Ultra-Modern Mesh Gradient Glow Backgrounds */}
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          {/* Top Left Rose Glow */}
          <div className="absolute top-[-100px] left-[-100px] h-[500px] w-[500px] rounded-full bg-rose-500/10 blur-[120px] dark:bg-rose-500/20" />

          {/* Top Right Orange Glow */}
          <div className="absolute top-0 right-0 h-[400px] w-[400px] rounded-full bg-orange-400/10 blur-[100px] dark:bg-orange-500/15" />

          {/* Mid Left Violet/Rose Glow */}
          <div className="absolute top-[40%] left-[-200px] h-[600px] w-[600px] rounded-full bg-rose-400/5 blur-[150px] dark:bg-rose-500/10" />

          {/* Bottom Right Rose Glow */}
          <div className="absolute bottom-[-100px] right-[-100px] h-[500px] w-[500px] rounded-full bg-rose-500/10 blur-[120px] dark:bg-rose-500/20" />
        </div>

        <Header />

        <main className="flex-grow lg:w-[80%] w-full mx-auto px-4 sm:px-10 lg:px-0 z-10">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
