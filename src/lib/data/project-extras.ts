import type { Locale } from "@/lib/i18n/locale-config";
import type { ProjectCategory } from "./projects";
import { getTranslations } from "@/lib/i18n/translations";

export interface CategoryExtras {
  includes: string[];
  customization: string[];
  tech: string[];
}

export function getCategoryExtras(locale: Locale, category: ProjectCategory): CategoryExtras {
  return getTranslations(locale).portfolioPage.categoryExtras[category];
}
