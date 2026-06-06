const WHATSAPP_MESSAGE = "Hello! I would like to get in touch with KTS NOVA.";

export const CONTACT = {
  phone: {
    display: "+252 61 393 9659",
    tel: "tel:+252613939659",
  },
  whatsapp: {
    display: "+252 61 360 9678",
    url: `https://wa.me/252613609678?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`,
  },
} as const;
