export type Locale = "so" | "en" | "ar";

export const defaultLocale: Locale = "so";

export type TextDirection = "ltr" | "rtl";

export interface LocaleConfig {
  code: Locale;
  label: string;
  flag: string;
  dir: TextDirection;
  htmlLang: string;
}

export const localeConfigs: LocaleConfig[] = [
  { code: "so", label: "Af Soomaali", flag: "🇸🇴", dir: "ltr", htmlLang: "so" },
  { code: "en", label: "English", flag: "🇬🇧", dir: "ltr", htmlLang: "en" },
  { code: "ar", label: "العربية", flag: "🇸🇦", dir: "rtl", htmlLang: "ar" },
];

export const locales = localeConfigs;

export function isLocale(value: string | null | undefined): value is Locale {
  return value === "so" || value === "en" || value === "ar";
}

export function getLocaleConfig(locale: Locale): LocaleConfig {
  return localeConfigs.find((l) => l.code === locale) ?? localeConfigs[0];
}

export function getNextLocale(locale: Locale): Locale {
  const index = localeConfigs.findIndex((l) => l.code === locale);
  return localeConfigs[(index + 1) % localeConfigs.length].code;
}

export function getLocaleBodyClass(locale: Locale): string {
  if (locale === "so") return "locale-so";
  if (locale === "ar") return "locale-ar";
  return "locale-en";
}
