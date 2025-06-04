// components/Footer.jsx
import { Facebook, Twitter, Linkedin, Github, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-cyan-900 text-gray-200 ">
      <div className="max-w-screen-xl mx-auto p-3 flex md:flex-row flex-col justify-between items-center gap-8">
        {/* Brand/Logo */}
        <div>
          <h2 className="text-xl font-bold text-gray-200">Rakibul Hasan</h2>
        </div>

        {/* Socials */}
        <div>
          <div className="flex space-x-4 ">
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
        <div className="text-center text-sm text-gray-300">
          &copy; 2025 rakibul h. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
