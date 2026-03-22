// components/Footer.jsx
import { Facebook, Twitter, Linkedin, Github, Instagram } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-auto border-t border-gray-100 bg-white/80 py-8 text-gray-600 backdrop-blur-md dark:border-gray-800 dark:bg-gray-900/80 dark:text-gray-400">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 sm:px-6 md:flex-row">
        {/* Brand/Logo */}
        <div>
          <h2 className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-xl font-bold tracking-tight text-transparent dark:from-white dark:to-gray-300">
            Rakibul Hasan
          </h2>
        </div>

        {/* Dynamic Timestamp & Copyright */}
        <div className="order-3 text-sm text-gray-500 dark:text-gray-500 md:order-2">
          &copy; {currentYear} Rakibul Hasan. All rights reserved.
        </div>

        {/* Hover-animated Socials */}
        <div className="order-2 md:order-3">
          <div className="flex items-center space-x-3">
            {[
              {
                href: "https://github.com/rakibul23n28",
                icon: Github,
                label: "GitHub",
              },
              {
                href: "https://linkedin.com/in/rakibul-hasan-2111b529a",
                icon: Linkedin,
                label: "LinkedIn",
              },
              {
                href: "https://twitter.com/rakibul23n28",
                icon: Twitter,
                label: "Twitter",
              },
              {
                href: "https://facebook.com/hasa23n28/",
                icon: Facebook,
                label: "Facebook",
              },
              {
                href: "https://www.instagram.com/hasa23n28/",
                icon: Instagram,
                label: "Instagram",
              },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="group flex h-10 w-10 items-center justify-center rounded-xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-rose-500 hover:text-rose-500 hover:shadow-md dark:border-gray-800 dark:bg-gray-800 dark:hover:border-rose-500 dark:hover:text-rose-500"
              >
                <social.icon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
