"use client";

import LegalDocumentPage from "@/components/LegalDocumentPage";
import { termsConditions } from "@/lib/data/legal-content";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export default function TermsPage() {
  const { locale } = useLanguage();

  return <LegalDocumentPage document={termsConditions[locale]} type="terms" />;
}
