"use client";

import { Suspense, useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  Send,
  CheckCircle2,
  MessageCircle,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import CtaSection from "@/components/CtaSection";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { fadeUp } from "@/lib/motion";
import {
  CONTACT,
  buildContactMailtoUrl,
  buildContactWhatsAppMessage,
  buildWhatsAppUrl,
} from "@/lib/data/contact";
import { cn } from "@/lib/utils";

type ContactMethod = "whatsapp" | "email";

const contactItems = [
  { icon: MapPin, key: "location" as const, href: null, external: false },
  {
    icon: Mail,
    key: "email" as const,
    href: `mailto:${CONTACT.email}`,
    value: CONTACT.email,
    external: false,
  },
  {
    icon: Phone,
    key: "phone" as const,
    href: CONTACT.phone.tel,
    value: CONTACT.phone.display,
    external: false,
  },
  {
    icon: MessageCircle,
    key: "whatsapp" as const,
    href: CONTACT.whatsapp.url,
    value: CONTACT.whatsapp.display,
    external: true,
  },
  { icon: Clock, key: "hours" as const, href: null, external: false },
];

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="min-h-screen pt-20" />}>
      <ContactPageContent />
    </Suspense>
  );
}

function ContactPageContent() {
  const { t } = useLanguage();
  const searchParams = useSearchParams();
  const projectName = searchParams.get("project") ?? "";
  const needParam = searchParams.get("need") ?? "";
  const viaParam = searchParams.get("via") ?? "";
  const [submitted, setSubmitted] = useState(false);
  const [sentViaWhatsApp, setSentViaWhatsApp] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const [method, setMethod] = useState<ContactMethod>(
    viaParam === "email" ? "email" : "whatsapp"
  );

  const needKeys = ["software", "web", "mobile", "ecommerce", "ai", "other"] as const;
  const defaultNeed = needKeys.includes(needParam as (typeof needKeys)[number])
    ? needParam
    : "software";
  const defaultMessage = projectName ? `${t.contactPage.form.projectIntro} ${projectName}\n\n` : "";
  const isQuoteRequest = Boolean(projectName);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const needKey = String(fd.get("need") ?? defaultNeed);
    const needLabel =
      t.contactPage.form.needs[needKey as (typeof needKeys)[number]] ?? needKey;

    const payload = {
      name: String(fd.get("name") ?? "").trim(),
      email: String(fd.get("email") ?? "").trim(),
      phone: String(fd.get("phone") ?? "").trim(),
      need: needLabel,
      message: String(fd.get("message") ?? "").trim(),
      projectName,
    };

    if (method === "whatsapp") {
      const text = buildContactWhatsAppMessage(payload, t.contactPage.form.labels);
      window.open(buildWhatsAppUrl(text), "_blank", "noopener,noreferrer");
      setSentViaWhatsApp(true);
    } else {
      window.location.href = buildContactMailtoUrl(payload, t.contactPage.form.mailSubject);
    }

    setSubmitted(true);
  }

  const formTitle = isQuoteRequest
    ? t.contactPage.form.quoteTitle
    : t.contactPage.form.send.replace(" →", "").replace(" ←", "");

  return (
    <div className="pt-20">
      <PageHero
        label={t.nav.contact}
        title={isQuoteRequest ? t.contactPage.form.quoteTitle : t.contactPage.title}
        subtitle={t.contactPage.subtitle}
      />

      <section className="section-padding bg-nova-ash">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-5 lg:gap-10">
          <motion.form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-nova-navy/10 bg-white p-6 shadow-sm sm:p-8 lg:col-span-3"
            initial="hidden"
            animate="show"
            variants={fadeUp}
            custom={0}
          >
            {submitted ? (
              <div className="flex flex-col items-center py-16 text-center">
                <CheckCircle2 className="mb-4 text-nova-teal" size={48} />
                <p className="text-lg font-semibold text-nova-navy">
                  {sentViaWhatsApp
                    ? t.contactPage.form.whatsappThankYou
                    : t.contactPage.form.thankYou}
                </p>
              </div>
            ) : (
              <>
                <h2 className="mb-6 font-heading text-xl font-bold text-nova-navy">{formTitle}</h2>

                <div className="mb-5">
                  <p className="mb-2 text-sm font-medium text-nova-navy">
                    {t.contactPage.form.contactMethod}
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setMethod("whatsapp")}
                      data-cursor="link"
                      className={cn(
                        "flex items-center justify-center gap-2 rounded-xl border px-4 py-3 text-sm font-semibold transition-all min-h-[48px]",
                        method === "whatsapp"
                          ? "border-[#25D366] bg-[#25D366]/10 text-[#128C7E] shadow-sm"
                          : "border-nova-navy/10 bg-nova-ash/30 text-nova-navy/70 hover:border-[#25D366]/40"
                      )}
                    >
                      <MessageCircle size={18} />
                      {t.contactPage.form.viaWhatsApp}
                    </button>
                    <button
                      type="button"
                      onClick={() => setMethod("email")}
                      data-cursor="link"
                      className={cn(
                        "flex items-center justify-center gap-2 rounded-xl border px-4 py-3 text-sm font-semibold transition-all min-h-[48px]",
                        method === "email"
                          ? "border-nova-teal bg-nova-teal/10 text-nova-teal shadow-sm"
                          : "border-nova-navy/10 bg-nova-ash/30 text-nova-navy/70 hover:border-nova-teal/40"
                      )}
                    >
                      <Mail size={18} />
                      {t.contactPage.form.viaEmail}
                    </button>
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <label className="mb-1.5 block text-sm font-medium text-nova-navy">
                      {t.contactPage.form.name}
                    </label>
                    <input
                      name="name"
                      type="text"
                      required
                      className="w-full rounded-xl border border-nova-navy/10 bg-nova-ash/30 px-4 py-3 text-base outline-none transition-colors focus:border-nova-teal focus:ring-2 focus:ring-nova-teal/20"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-nova-navy">
                      {t.contactPage.form.email}
                    </label>
                    <input
                      name="email"
                      type="email"
                      required
                      className="w-full rounded-xl border border-nova-navy/10 bg-nova-ash/30 px-4 py-3 text-base outline-none transition-colors focus:border-nova-teal focus:ring-2 focus:ring-nova-teal/20"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-nova-navy">
                      {t.contactPage.form.phone}
                    </label>
                    <input
                      name="phone"
                      type="tel"
                      className="w-full rounded-xl border border-nova-navy/10 bg-nova-ash/30 px-4 py-3 text-base outline-none transition-colors focus:border-nova-teal focus:ring-2 focus:ring-nova-teal/20"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="mb-1.5 block text-sm font-medium text-nova-navy">
                      {t.contactPage.form.need}
                    </label>
                    <select
                      name="need"
                      defaultValue={defaultNeed}
                      className="w-full rounded-xl border border-nova-navy/10 bg-nova-ash/30 px-4 py-3 text-base outline-none transition-colors focus:border-nova-teal focus:ring-2 focus:ring-nova-teal/20"
                    >
                      {needKeys.map((key) => (
                        <option key={key} value={key}>
                          {t.contactPage.form.needs[key]}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="mb-1.5 block text-sm font-medium text-nova-navy">
                      {t.contactPage.form.message}
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      defaultValue={defaultMessage}
                      className="w-full rounded-xl border border-nova-navy/10 bg-nova-ash/30 px-4 py-3 text-base outline-none transition-colors focus:border-nova-teal focus:ring-2 focus:ring-nova-teal/20"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  data-cursor="cta"
                  className={cn(
                    "mt-6 inline-flex w-full items-center justify-center gap-2 sm:w-auto",
                    method === "whatsapp"
                      ? "rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#25D366]/30 min-h-[48px]"
                      : "btn-primary"
                  )}
                >
                  {method === "whatsapp" ? (
                    <MessageCircle size={18} />
                  ) : (
                    <Send size={18} />
                  )}
                  {method === "whatsapp"
                    ? t.contactPage.form.sendWhatsApp
                    : t.contactPage.form.sendEmail}
                </button>
              </>
            )}
          </motion.form>

          <motion.div
            className="space-y-6 lg:col-span-2"
            initial="hidden"
            animate="show"
            variants={fadeUp}
            custom={0.1}
          >
            <div className="rounded-2xl border border-nova-navy/10 bg-white p-6 shadow-sm">
              <h3 className="mb-5 font-heading text-lg font-bold text-nova-navy">
                {t.footer.contact}
              </h3>
              <div className="space-y-4">
                {contactItems.map(({ icon: Icon, key, href, value, external }) => (
                  <div key={key} className="flex items-start gap-3">
                    <div className="rounded-lg bg-nova-teal/10 p-2">
                      <Icon size={18} className="text-nova-teal" />
                    </div>
                    <div>
                      {href ? (
                        <a
                          href={href}
                          data-cursor="link"
                          className="font-medium text-nova-navy hover:text-nova-teal"
                          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        >
                          {value}
                        </a>
                      ) : key === "location" ? (
                        <p className="font-medium text-nova-navy">{t.contactPage.info.location}</p>
                      ) : (
                        <p className="text-sm text-nova-navy/70">{t.contactPage.info.hours}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-nova-navy/10 shadow-sm">
              {showMap ? (
                <iframe
                  title="KTS NOVA Location"
                  src="https://maps.google.com/maps?q=Mogadishu,Somalia&z=13&output=embed"
                  className="h-56 w-full border-0 sm:h-64"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              ) : (
                <button
                  type="button"
                  onClick={() => setShowMap(true)}
                  data-cursor="link"
                  className="flex h-56 w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-nova-ash to-white text-nova-navy/70 transition-colors hover:text-nova-teal sm:h-64"
                >
                  <MapPin size={28} className="text-nova-teal" />
                  <span className="text-sm font-medium">{t.contactPage.info.location}</span>
                  <span className="text-xs text-nova-navy/50">Tap to load map</span>
                </button>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      <CtaSection />
    </div>
  );
}
