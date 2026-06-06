"use client";

import { MessageCircle } from "lucide-react";
import { CONTACT } from "@/lib/data/contact";

export default function WhatsAppButton() {
  return (
    <a
      href={CONTACT.whatsapp.url}
      target="_blank"
      rel="noopener noreferrer"
      data-cursor="cta"
      className="fixed bottom-6 end-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110"
      aria-label="WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
}
