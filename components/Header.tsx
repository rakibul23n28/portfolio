"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, Moon, Sun, X } from "lucide-react";

const navItems = [
  { name: "Profile", href: "/" },
  { name: "Skills", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("/");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  const activeIndex = useMemo(
    () => Math.max(0, navItems.findIndex((link) => link.href === active)),
    [active],
  );

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme");
    if (savedTheme === "light" || savedTheme === "dark") {
      setTheme(savedTheme);
      document.documentElement.dataset.theme = savedTheme;
    }

    const updateScrollState = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const value = max > 0 ? (window.scrollY / max) * 100 : 0;
      setScrollProgress(Math.min(100, Math.max(0, value)));

      const sections = navItems
        .filter((item) => item.href.startsWith("#"))
        .map((item) => ({
          href: item.href,
          element: document.getElementById(item.href.slice(1)),
        }))
        .filter(
          (item): item is { href: string; element: HTMLElement } =>
            item.element !== null,
        );
      const currentSection = sections
        .filter(({ element }) => element.getBoundingClientRect().top <= 180)
        .at(-1);
      setActive(currentSection?.href ?? "/");
    };

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);
    return () => {
      window.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("theme", nextTheme);
  };

  const handleNavigation = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    setIsOpen(false);

    if (href.startsWith("#")) {
      const target = document.getElementById(href.slice(1));
      if (target) {
        event.preventDefault();
        window.history.pushState(null, "", href);
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      return;
    }

    if (href === "/" && window.location.pathname === "/") {
      event.preventDefault();
      window.history.pushState(null, "", "/");
      window.scrollTo({ top: 0, behavior: "smooth" });
      setActive("/");
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      const onKeyDown = (event: KeyboardEvent) => {
        if (event.key === "Escape") setIsOpen(false);
      };
      window.addEventListener("keydown", onKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", onKeyDown);
      };
    }

    document.body.style.overflow = "";
    return () => document.body.style.overflow = "";
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-[80] w-full pt-4">
      <div className="pointer-events-none fixed inset-x-0 top-0 z-[90] h-1.5 bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-[var(--accent)] via-[#FF8A7A] to-[var(--violet)] shadow-[0_0_18px_rgba(255,45,85,0.9)] transition-[width] duration-300 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between rounded-full border border-[var(--line)] bg-[var(--nav-glass)] px-3 py-2.5 shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_24px_90px_rgba(0,0,0,0.18)] backdrop-blur-xl">
          <Link href="/" className="flex items-center gap-3" aria-label="Rakibul Hasan home">
            <div className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-[var(--line)] bg-[var(--surface-hi)]">
              <Image
                src="/portfolio/profile.jpeg"
                alt="Rakibul Hasan avatar"
                width={36}
                height={36}
                className="object-cover"
              />
            </div>
            <span className="text-lg font-semibold tracking-[-0.04em] text-[var(--text)]">Rakibul H.</span>
          </Link>

          <nav className="hidden items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--surface)] px-1 py-1 md:flex">
            <div className="relative flex items-center gap-1.5">
              <span
                className="absolute left-0 top-1 bottom-1 rounded-full bg-[linear-gradient(135deg,rgba(255,45,85,0.9),rgba(255,134,109,0.75))] shadow-[0_0_18px_rgba(255,45,85,0.4)] transition-[transform,width] duration-300 ease-out"
                style={{
                  width: "calc(25% - 0.375rem)",
                  transform: `translateX(${activeIndex * 100}%)`,
                }}
              />
              {navItems.map((link) => {
                const isActive = active === link.href || (link.href === "/" && active === "/");
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={(event) => handleNavigation(event, link.href)}
                    className={`relative z-10 rounded-full px-4 py-2 text-[11px] font-medium tracking-[0.14em] uppercase transition-colors duration-200 ${
                      isActive ? "text-[#08080C]" : "text-[var(--muted)] hover:text-[var(--text)]"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--surface)] text-[var(--text)] transition-colors hover:border-[var(--accent)]"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <Link
              href="/#contact"
              onClick={(event) => handleNavigation(event, "/#contact")}
              className="inline-flex items-center justify-center rounded-full border border-[rgba(255,45,85,0.3)] bg-[linear-gradient(135deg,var(--accent),#ff7a59)] px-4 py-2 text-[11px] font-semibold tracking-[0.14em] text-[#08080C] uppercase shadow-[0_0_24px_rgba(255,45,85,0.35)] transition-transform duration-200 hover:-translate-y-0.5"
            >
              Hire me
            </Link>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--surface)] text-[var(--text)]"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <button
              type="button"
              aria-label={isOpen ? "Close navigation" : "Open navigation"}
              onClick={() => setIsOpen((state) => !state)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--surface)]"
            >
              {isOpen ? <X className="h-5 w-5 text-[var(--text)]" /> : <Menu className="h-5 w-5 text-[var(--text)]" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-[70] bg-[var(--menu-overlay)] backdrop-blur-md md:hidden">
          <div className="flex h-full flex-col px-5 pt-24">
            <div className="mb-8 flex items-center justify-between">
              <span className="text-xs font-medium uppercase tracking-[0.24em] text-[var(--muted)]">Menu</span>
              <button type="button" onClick={() => setIsOpen(false)} className="rounded-full border border-[var(--line)] p-2">
                <X className="h-5 w-5 text-[var(--text)]" />
              </button>
            </div>
            <nav className="flex flex-1 flex-col gap-3">
              {navItems.map((link, index) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={(event) => handleNavigation(event, link.href)}
                  className="group flex items-center justify-between rounded-2xl border border-[var(--line)] bg-[var(--surface)] px-4 py-4 text-left text-2xl font-medium text-[var(--text)] opacity-0 animate-[fadeUp_0.45s_cubic-bezier(0.22,1,0.36,1)_forwards]"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <span>{link.name}</span>
                  <span className="text-[var(--muted)] transition-transform duration-200 group-hover:translate-x-1">→</span>
                </Link>
              ))}
            </nav>
            <Link
              href="/#contact"
              onClick={(event) => {
                setIsOpen(false);
                handleNavigation(event, "/#contact");
              }}
              className="mb-10 inline-flex items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--accent),#ff7a59)] px-6 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-[#08080C]"
            >
              Hire me
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
