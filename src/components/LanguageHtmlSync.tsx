"use client";

import { useEffect } from "react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { getLocaleBodyClass } from "@/lib/i18n/locale-config";

/** Syncs `html` lang/dir and body locale typography class with active language */
export default function LanguageHtmlSync() {
  const { locale, dir, htmlLang } = useLanguage();

  useEffect(() => {
    document.documentElement.lang = htmlLang;
    document.documentElement.dir = dir;

    document.body.classList.remove("locale-so", "locale-en", "locale-ar");
    document.body.classList.add(getLocaleBodyClass(locale));
  }, [locale, dir, htmlLang]);

  return null;
}
