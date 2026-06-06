"use client";

import Link from "next/link";
import { Mail, Phone, Globe, MessageCircle } from "lucide-react";
import Logo from "@/components/Logo";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { cn } from "@/lib/utils";
import { CONTACT } from "@/lib/data/contact";

export default function Footer() {
  const { t, locale } = useLanguage();

  return (
    <footer className="bg-nova-navy text-white" data-dark-section>
      <div className="mx-auto max-w-7xl section-padding">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo size="md" className="mb-4" />
            <p className="text-sm text-white/60">Knowledge Technology Systems</p>
          </div>

          <div>
            <h4 className="mb-4 font-heading font-semibold text-nova-teal">{t.footer.services}</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link href="/services" data-cursor="link" className="hover:text-nova-teal">
                  {t.services.items.software.title}
                </Link>
              </li>
              <li>
                <Link href="/services" data-cursor="link" className="hover:text-nova-teal">
                  {t.services.items.web.title}
                </Link>
              </li>
              <li>
                <Link href="/services" data-cursor="link" className="hover:text-nova-teal">
                  {t.services.items.mobile.title}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-heading font-semibold text-nova-teal">{t.footer.company}</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link href="/about" data-cursor="link" className="hover:text-nova-teal">
                  {t.footer.about}
                </Link>
              </li>
              <li>
                <Link href="/portfolio" data-cursor="link" className="hover:text-nova-teal">
                  {t.nav.portfolio}
                </Link>
              </li>
              <li>
                <span className="text-white/50">{t.footer.blog}</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-heading font-semibold text-nova-teal">{t.footer.contact}</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-center gap-2">
                <Mail size={16} className="shrink-0 text-nova-teal" />
                <a href="mailto:info@ktsnova.com" data-cursor="link" className="hover:text-nova-teal">
                  info@ktsnova.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="shrink-0 text-nova-teal" />
                <a href={CONTACT.phone.tel} data-cursor="link" className="hover:text-nova-teal">
                  {CONTACT.phone.display}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle size={16} className="shrink-0 text-nova-teal" />
                <a
                  href={CONTACT.whatsapp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="link"
                  className="hover:text-nova-teal"
                >
                  {CONTACT.whatsapp.display}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Globe size={16} className="shrink-0 text-nova-teal" />
                <span>www.ktsnova.com</span>
              </li>
            </ul>
          </div>
        </div>

      </div>

      <div className="relative mt-12 overflow-hidden border-t border-white/[0.06] bg-gradient-to-b from-[#141f36] to-[#0c1220]">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-nova-teal/70 to-transparent"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-nova-teal/[0.04] to-transparent"
          aria-hidden
        />

        <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row sm:px-6 lg:px-8">
          <p className="text-center font-heading text-sm tracking-wide sm:text-start">
            <span className="text-white/90">{t.footer.rights}</span>
          </p>

          <div className="flex items-center gap-3">
            <span className="hidden h-px w-8 bg-gradient-to-r from-transparent to-nova-gold/40 sm:block" aria-hidden />
            <p
              className={cn(
                "text-center text-xs font-medium text-white/45 sm:text-end",
                locale !== "ar" && "uppercase tracking-[0.18em]"
              )}
            >
              <span className="text-white/35">{t.footer.brandTag} </span>
              <span className="bg-gradient-to-r from-nova-gold/90 to-nova-teal/80 bg-clip-text text-transparent">
                {t.footer.brandName}
              </span>
            </p>
            <span className="hidden h-px w-8 bg-gradient-to-l from-transparent to-nova-gold/40 sm:block" aria-hidden />
          </div>
        </div>
      </div>
    </footer>
  );
}
