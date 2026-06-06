const WHATSAPP_MESSAGE = "Hello! I would like to get in touch with KTS NOVA.";
const WHATSAPP_NUMBER = "252613609678";
const EMAIL = "info@ktsnova.com";

export const CONTACT = {
  email: EMAIL,
  phone: {
    display: "+252 61 393 9659",
    tel: "tel:+252613939659",
  },
  whatsapp: {
    display: "+252 61 360 9678",
    number: WHATSAPP_NUMBER,
    url: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`,
  },
} as const;

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export interface ContactFormPayload {
  name: string;
  email: string;
  phone: string;
  need: string;
  message: string;
  projectName?: string;
}

export function buildContactWhatsAppMessage(
  payload: ContactFormPayload,
  labels: {
    requestTitle: string;
    name: string;
    email: string;
    phone: string;
    need: string;
    message: string;
    project: string;
  }
): string {
  const lines = [
    `*${labels.requestTitle}*`,
    "",
    `${labels.name}: ${payload.name}`,
    `${labels.email}: ${payload.email}`,
  ];

  if (payload.phone.trim()) {
    lines.push(`${labels.phone}: ${payload.phone}`);
  }

  lines.push(`${labels.need}: ${payload.need}`);

  if (payload.projectName?.trim()) {
    lines.push(`${labels.project}: ${payload.projectName}`);
  }

  lines.push("", `${labels.message}:`, payload.message);

  return lines.join("\n");
}

export function buildContactMailtoUrl(
  payload: ContactFormPayload,
  subject: string
): string {
  const body = [
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    payload.phone.trim() ? `Phone: ${payload.phone}` : "",
    `Need: ${payload.need}`,
    payload.projectName?.trim() ? `Project: ${payload.projectName}` : "",
    "",
    payload.message,
  ]
    .filter(Boolean)
    .join("\n");

  return `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
