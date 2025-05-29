// components/Footer.jsx
import { Facebook, Twitter, Linkedin, Github, Instagram } from "lucide-react";
import Link from "next/link";
import { fa } from "zod/v4/locales";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10 mt-10">
      <div className="max-w-screen-xl mx-auto p-4 justify-between items-center grid grid-cols-1 md:divide-x-2 divide-rose-500 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Brand/Logo */}
        <div>
          <h2 className="text-2xl font-bold text-white">Rakibul Hasan</h2>
          <p className="text-sm mt-2 text-gray-400">
            It&apos;s my digital signature for this real world.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-2 underline">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <Link
                href="/projects"
                prefetch={false}
                className="hover:text-white"
              >
                Project Gallery
              </Link>
            </li>
            <li>
              <Link href="/about" prefetch={false} className="hover:text-white">
                Skills
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                prefetch={false}
                className="hover:text-white"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Connect</h3>
          <div className="flex space-x-4 mt-2">
            <a
              href="https://github.com/rakibul23n28"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-5 h-5 hover:text-white" />
            </a>
            <a
              href="https://linkedin.com/in/rakibul-hasan-2111b529a"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-5 h-5 hover:text-white" />
            </a>
            <a
              href="https://twitter.com/rakibul23n28"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="w-5 h-5 hover:text-white" />
            </a>
            <a
              href="https://facebook.com/hasa23n28/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook className="w-5 h-5 hover:text-white" />
            </a>
            <a
              href="https://www.instagram.com/hasa23n28/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="w-5 h-5 hover:text-white" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} YourName. All rights reserved.
      </div>
    </footer>
  );
}
