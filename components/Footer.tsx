import { Facebook, Twitter, Linkedin, Github, Instagram } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-[var(--line)] bg-[var(--nav-glass)] py-8 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-6 px-4 sm:px-6 lg:px-8 md:flex-row">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[color-mix(in_srgb,var(--accent)_35%,transparent)] bg-[color-mix(in_srgb,var(--accent)_10%,var(--surface))] text-[var(--accent)] text-sm font-semibold">
            RH
          </div>
          <h2 className="text-xl font-semibold tracking-[-0.05em] text-[var(--text)]">Rakibul Hasan</h2>
        </div>

        <div className="order-3 text-sm text-[var(--muted)] md:order-2">
          &copy; {currentYear} Rakibul Hasan. All rights reserved.
        </div>

        <div className="order-2 md:order-3">
          <div className="flex items-center gap-3">
            {[
              { href: "https://github.com/rakibul23n28", icon: Github, label: "GitHub" },
              { href: "https://linkedin.com/in/rakibul-hasan-2111b529a", icon: Linkedin, label: "LinkedIn" },
              { href: "https://twitter.com/rakibul23n28", icon: Twitter, label: "Twitter" },
              { href: "https://facebook.com/hasa23n28/", icon: Facebook, label: "Facebook" },
              { href: "https://www.instagram.com/hasa23n28/", icon: Instagram, label: "Instagram" },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="group flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--surface)] text-[var(--muted)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--accent)] hover:bg-[color-mix(in_srgb,var(--accent)_8%,var(--surface))] hover:text-[var(--accent)]"
              >
                <social.icon className="h-4 w-4 transition-transform duration-200 group-hover:scale-110" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
