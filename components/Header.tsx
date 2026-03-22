"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Unified Navigation Component
  const NavLinks = ({ mobile = false }: { mobile?: boolean }) => (
    <ul
      className={`flex font-medium tracking-tight ${
        mobile ? "flex-col space-y-2 p-6" : "flex-row items-center space-x-1"
      }`}
    >
      {[
        { name: "Profile", href: "/" },
        { name: "Skills", href: "#about" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
      ].map((link) => (
        <li key={link.name}>
          <a
            href={link.href}
            onClick={() => setIsOpen(false)} // Auto-closes mobile drawer on click
            className={`block px-4 py-2 text-sm font-semibold rounded-xl transition-all duration-300 ${
              mobile
                ? "text-gray-800 dark:text-gray-200 hover:bg-rose-50 dark:hover:bg-rose-500/10 hover:text-rose-600"
                : "text-gray-600 dark:text-gray-300 hover:text-rose-500 dark:hover:text-rose-500 hover:bg-gray-100/50 dark:hover:bg-gray-800/50"
            }`}
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <header className="sticky top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 z-[9999]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex justify-between items-center">
        {/* 🚀 Brand & Logo */}
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="relative h-9 w-9 rounded-xl bg-rose-500/10 dark:bg-rose-500/20 flex items-center justify-center border border-rose-500/20 group-hover:scale-105 transition-transform duration-300">
            <Image
              src="https://lh3.googleusercontent.com/a/ACg8ocLeD7xn5GPacjLH7ShtWA3WcFnSfVkXywJZRUvrjKDKeViKu8bo=s192-c-rg-br100"
              className="rounded-lg object-cover"
              alt="Logo"
              width={28}
              height={28}
              loading="lazy"
            />
          </div>
          <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            Rakibul H.
          </span>
        </Link>

        {/* 🖥️ Desktop Navigation Links */}
        <div className="hidden md:block">
          <NavLinks />
        </div>

        {/* 📱 Mobile Toggle Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            className="p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-rose-500 hover:text-white dark:hover:bg-rose-500 dark:hover:text-white transition-all duration-300"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* 📱 Mobile Menu Dropdown Panel */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg border-b border-gray-100 dark:border-gray-800 shadow-lg md:hidden z-50 animate-fadeIn">
          <NavLinks mobile />
        </div>
      )}
    </header>
  );
}
