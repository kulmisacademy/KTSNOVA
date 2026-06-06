"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Shield, FileText } from "lucide-react";
import PageHero from "@/components/PageHero";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import type { LegalDocument } from "@/lib/data/legal-content";
import { fadeUp, stagger } from "@/lib/motion";

interface LegalDocumentPageProps {
  document: LegalDocument;
  type: "privacy" | "terms";
}

export default function LegalDocumentPage({ document, type }: LegalDocumentPageProps) {
  const { t } = useLanguage();
  const Icon = type === "privacy" ? Shield : FileText;

  return (
    <div className="pt-20">
      <PageHero label="KTS NOVA" title={document.title} subtitle={document.subtitle} />

      <section className="section-padding bg-nova-ash">
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            custom={0}
            className="mb-8 rounded-2xl border border-nova-teal/20 bg-white p-6 shadow-sm sm:p-8"
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-nova-teal/10">
                <Icon size={22} className="text-nova-teal" />
              </div>
              <div>
                <p className="font-heading text-lg font-bold text-nova-navy">KTS NOVA</p>
                <p className="text-sm text-nova-navy/55">{document.brandLine}</p>
              </div>
            </div>
            <p className="text-base leading-relaxed text-nova-navy/75">{document.intro}</p>
          </motion.div>

          <div className="space-y-5">
            {document.sections.map((section, index) => (
              <motion.article
                key={section.title}
                initial="hidden"
                animate="show"
                variants={fadeUp}
                custom={0.05 + index * stagger}
                className="rounded-2xl border border-nova-navy/8 bg-white p-6 shadow-sm sm:p-7"
              >
                <h2 className="mb-3 font-heading text-xl font-bold text-nova-navy">
                  {section.title}
                </h2>
                {section.intro && (
                  <p className="mb-3 text-sm leading-relaxed text-nova-navy/70">{section.intro}</p>
                )}
                {section.items && (
                  <ul className="space-y-2">
                    {section.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm leading-relaxed text-nova-navy/75"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-nova-teal" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
                {section.closing && (
                  <p className="text-sm leading-relaxed text-nova-navy/75">{section.closing}</p>
                )}
              </motion.article>
            ))}
          </div>

          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            custom={0.4}
            className="mt-8 flex flex-wrap justify-center gap-4 text-sm"
          >
            {type === "privacy" ? (
              <Link href="/terms" data-cursor="link" className="font-medium text-nova-teal hover:underline">
                {t.footer.terms}
              </Link>
            ) : (
              <Link
                href="/privacy"
                data-cursor="link"
                className="font-medium text-nova-teal hover:underline"
              >
                {t.footer.privacy}
              </Link>
            )}
            <Link href="/contact" data-cursor="link" className="font-medium text-nova-navy/60 hover:text-nova-teal">
              {t.nav.contact}
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
