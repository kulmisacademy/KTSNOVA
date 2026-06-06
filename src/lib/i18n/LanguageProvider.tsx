"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  defaultLocale,
  getLocaleConfig,
  getNextLocale,
  isLocale,
  type Locale,
  type TextDirection,
} from "./locale-config";
import { getTranslations, type Translations } from "./translations";

interface LanguageContextValue {
  locale: Locale;
  dir: TextDirection;
  htmlLang: string;
  t: Translations;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

function readInitialLocale(): Locale {
  if (typeof window === "undefined") return defaultLocale;

  const params = new URLSearchParams(window.location.search);
  const urlLang = params.get("lang");
  if (isLocale(urlLang)) return urlLang;

  const stored = localStorage.getItem("ktsnova-lang");
  if (isLocale(stored)) return stored;

  return defaultLocale;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setLocaleState(readInitialLocale());
    setMounted(true);
  }, []);

  const activeLocale = mounted ? locale : defaultLocale;
  const config = getLocaleConfig(activeLocale);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    localStorage.setItem("ktsnova-lang", next);

    const url = new URL(window.location.href);
    if (next === defaultLocale) {
      url.searchParams.delete("lang");
    } else {
      url.searchParams.set("lang", next);
    }
    window.history.replaceState({}, "", url.toString());
  }, []);

  const toggleLocale = useCallback(() => {
    setLocale(getNextLocale(activeLocale));
  }, [activeLocale, setLocale]);

  const t = useMemo(() => getTranslations(activeLocale), [activeLocale]);

  const value = useMemo(
    () => ({
      locale: activeLocale,
      dir: config.dir,
      htmlLang: config.htmlLang,
      t,
      setLocale,
      toggleLocale,
    }),
    [activeLocale, config.dir, config.htmlLang, t, setLocale, toggleLocale]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
