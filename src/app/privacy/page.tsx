"use client";

import LegalDocumentPage from "@/components/LegalDocumentPage";
import { privacyPolicy } from "@/lib/data/legal-content";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export default function PrivacyPage() {
  const { locale } = useLanguage();

  return <LegalDocumentPage document={privacyPolicy[locale]} type="privacy" />;
}
