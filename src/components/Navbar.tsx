"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Logo from "@/components/Logo";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { locales } from "@/lib/i18n/translations";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", key: "home" as const },
  { href: "/about", key: "about" as const },
  { href: "/services", key: "services" as const },
  { href: "/portfolio", key: "portfolio" as const },
  { href: "/contact", key: "contact" as const },
];

export default function Navbar() {
  const { t, locale, dir, setLocale } = useLanguage();
  const [open, setOpen] = useState(false);
  const isRtl = dir === "rtl";

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-nova-navy" data-dark-section>
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" data-cursor="link" className="relative z-10 shrink-0">
          <Logo priority size="sm" />
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} data-cursor="link" className="nav-link">
              {t.nav[link.key]}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <div className="flex rounded-full border border-white/20 p-0.5">
            {locales.map((lang) => (
              <button
                key={lang.code}
                onClick={() => setLocale(lang.code)}
                data-cursor="link"
                className={cn(
                  "rounded-full px-2.5 py-1.5 text-xs font-medium transition-colors whitespace-nowrap",
                  locale === lang.code
                    ? "bg-nova-teal text-white"
                    : "text-white/70 hover:text-white"
                )}
                aria-label={lang.label}
              >
                <span aria-hidden>{lang.flag}</span>{" "}
                <span className="hidden xl:inline">{lang.label}</span>
                <span className="xl:hidden">{lang.code.toUpperCase()}</span>
              </button>
            ))}
          </div>
          <Link href="/contact" data-cursor="cta" className="btn-primary !py-2.5 !text-xs whitespace-nowrap">
            {t.nav.cta}
          </Link>
        </div>

        <button
          className="rounded-lg p-2 text-white lg:hidden min-h-[48px] min-w-[48px]"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div
          className={cn(
            "fixed inset-y-0 top-[64px] z-40 w-full max-w-sm bg-nova-navy shadow-2xl lg:hidden",
            isRtl ? "left-0" : "right-0"
          )}
          data-dark-section
        >
          <div className="flex h-full flex-col gap-1 overflow-y-auto px-4 py-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-4 py-3 text-lg font-medium text-white hover:bg-white/10 min-h-[48px]"
              >
                {t.nav[link.key]}
              </Link>
            ))}
            <div className="mt-4 flex flex-col gap-2 px-4">
              {locales.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLocale(lang.code)}
                  className={cn(
                    "w-full rounded-full py-3 text-sm font-medium min-h-[48px]",
                    locale === lang.code
                      ? "bg-nova-teal text-white"
                      : "border border-white/20 text-white"
                  )}
                >
                  {lang.flag} {lang.label}
                </button>
              ))}
            </div>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="btn-primary mx-4 mt-4 text-center"
            >
              {t.nav.cta}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
