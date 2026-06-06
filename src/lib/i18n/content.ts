import type { Locale } from "./locale-config";
import type { ProjectId } from "@/lib/data/projects";
import type { ServiceKey } from "@/lib/data/services";

export interface ProjectContent {
  title: string;
  desc: string;
  features: string[];
}

export interface ServiceContent {
  title: string;
  desc: string;
  longDesc: string;
  features: string[];
}

import projectsJson from "./projects.json";

export const projectsContent = projectsJson as Record<
  Locale,
  Record<ProjectId, ProjectContent>
>;
export const servicesContent: Record<Locale, Record<ServiceKey, ServiceContent>> = {
  so: {
    software: {
      title: "Software Development",
      desc: "Nidaamyo maamul iyo ganacsi oo la isku halayn karo",
      longDesc: "Waxaan dhisnaa software gaar ah oo ku habboon baahida ganacsigaaga — laga bilaabo ERP ilaa nidaamyo maamul oo waaweyn.",
      features: ["Custom ERP & CRM", "Database design", "API integrations", "Legacy migration", "Training & support"],
    },
    web: {
      title: "Website Development",
      desc: "Websites casri ah oo mobile-friendly ah",
      longDesc: "Websites degdeg ah, ammaan ah, oo SEO-friendly ah oo ka dhigaya ganacsigaaga mid online jooga.",
      features: ["Responsive design", "SEO optimization", "CMS integration", "Performance tuning", "SSL & security"],
    },
    mobile: {
      title: "Mobile Apps",
      desc: "App-yo Android iyo iOS ah oo degdeg ah",
      longDesc: "App-yo native iyo cross-platform ah oo loogu talagalay suuqa Afrika iyo Bariga Dhexe.",
      features: ["Android & iOS", "Offline support", "Push notifications", "App Store deploy", "Analytics"],
    },
    ecommerce: {
      title: "Ecommerce Solutions",
      desc: "Dukaamo online ah oo lacag bixin fudud leh",
      longDesc: "Dukaamo online oo leh lacag bixin mobile money, maamul alaab, iyo analytics iibka.",
      features: ["Online storefront", "Mobile money", "Inventory sync", "Order tracking", "Admin dashboard"],
    },
    ai: {
      title: "AI & Automation",
      desc: "Chatbot-yo iyo nidaamyo otomaatig ah",
      longDesc: "Chatbot-yo caqliga leh, automation workflows, iyo AI integrations oo kordhinaya waxtarka.",
      features: ["AI chatbots", "Workflow automation", "NLP (Somali/Arabic)", "CRM bots", "Custom AI tools"],
    },
    cloud: {
      title: "Cloud & Hosting",
      desc: "Kaydinta xogta iyo hosting ammaan ah",
      longDesc: "Cloud hosting, backup, monitoring, iyo DevOps si nidaamkaagu u shaqeeyo 24/7.",
      features: ["Cloud hosting", "Auto backups", "SSL certificates", "Uptime monitoring", "DevOps setup"],
    },
  },
  en: {
    software: {
      title: "Software Development",
      desc: "Reliable management and business systems",
      longDesc: "We build custom software tailored to your business — from ERP systems to large-scale management platforms.",
      features: ["Custom ERP & CRM", "Database design", "API integrations", "Legacy migration", "Training & support"],
    },
    web: {
      title: "Website Development",
      desc: "Modern, mobile-friendly websites",
      longDesc: "Fast, secure, SEO-friendly websites that establish your professional online presence.",
      features: ["Responsive design", "SEO optimization", "CMS integration", "Performance tuning", "SSL & security"],
    },
    mobile: {
      title: "Mobile Apps",
      desc: "Fast Android and iOS applications",
      longDesc: "Native and cross-platform apps designed for African and Middle Eastern markets.",
      features: ["Android & iOS", "Offline support", "Push notifications", "App Store deploy", "Analytics"],
    },
    ecommerce: {
      title: "Ecommerce Solutions",
      desc: "Online stores with easy payments",
      longDesc: "Complete online stores with mobile money payments, inventory, and sales analytics.",
      features: ["Online storefront", "Mobile money", "Inventory sync", "Order tracking", "Admin dashboard"],
    },
    ai: {
      title: "AI & Automation",
      desc: "Chatbots and automated systems",
      longDesc: "Smart chatbots, automation workflows, and AI integrations to boost efficiency.",
      features: ["AI chatbots", "Workflow automation", "NLP (Somali/Arabic)", "CRM bots", "Custom AI tools"],
    },
    cloud: {
      title: "Cloud & Hosting",
      desc: "Secure data storage and hosting",
      longDesc: "Cloud hosting, backups, monitoring, and DevOps so your systems run 24/7.",
      features: ["Cloud hosting", "Auto backups", "SSL certificates", "Uptime monitoring", "DevOps setup"],
    },
  },
  ar: {
    software: {
      title: "تطوير البرمجيات",
      desc: "أنظمة إدارية وتجارية موثوقة",
      longDesc: "نبني برمجيات مخصصة تناسب عملك — من أنظمة ERP إلى منصات إدارة واسعة النطاق.",
      features: ["ERP و CRM مخصص", "تصميم قواعد البيانات", "تكامل API", "ترحيل الأنظمة", "تدريب ودعم"],
    },
    web: {
      title: "تطوير المواقع",
      desc: "مواقع حديثة متوافقة مع الجوال",
      longDesc: "مواقع سريعة وآمنة ومحسّنة لمحركات البحث لتعزيز حضورك الرقمي.",
      features: ["تصميم متجاوب", "تحسين SEO", "تكامل CMS", "تحسين الأداء", "SSL وأمان"],
    },
    mobile: {
      title: "تطبيقات الجوال",
      desc: "تطبيقات Android و iOS سريعة",
      longDesc: "تطبيقات native و cross-platform مصممة لأسواق أفريقيا والشرق الأوسط.",
      features: ["Android و iOS", "دعم offline", "إشعارات push", "نشر App Store", "تحليلات"],
    },
    ecommerce: {
      title: "حلول التجارة الإلكترونية",
      desc: "متاجر إلكترونية مع دفع سهل",
      longDesc: "متاجر إلكترونية كاملة مع دفع عبر الجوال ومخزون وتحليلات مبيعات.",
      features: ["متجر إلكتروني", "دفع عبر الجوال", "مزامنة المخزون", "تتبع الطلبات", "لوحة إدارة"],
    },
    ai: {
      title: "الذكاء الاصطناعي والأتمتة",
      desc: "روبوتات محادثة وأنظمة آلية",
      longDesc: "روبوتات ذكية وسير عمل آلي وتكامل AI لزيادة الكفاءة.",
      features: ["روبوتات AI", "أتمتة سير العمل", "NLP (صومالي/عربي)", "روبوتات CRM", "أدوات AI مخصصة"],
    },
    cloud: {
      title: "السحابة والاستضافة",
      desc: "تخزين آمن واستضافة موثوقة",
      longDesc: "استضافة سحابية ونسخ احتياطي ومراقبة وDevOps لتشغيل أنظمتك 24/7.",
      features: ["استضافة سحابية", "نسخ احتياطي", "شهادات SSL", "مراقبة التشغيل", "إعداد DevOps"],
    },
  },
};

export const aboutContent: Record<
  Locale,
  {
    missionTitle: string;
    visionTitle: string;
    valuesTitle: string;
    storyTitle: string;
    story: string;
    teamTitle: string;
    teamDesc: string;
  }
> = {
  so: {
    missionTitle: "Ujeedada",
    visionTitle: "Aragtida",
    valuesTitle: "Qiimaha",
    storyTitle: "Sheekadeenna",
    story:
      "KTS NOVA waxaa la aasaasay Mogadishu si loo xaliyo baahida teknoolojiyeed ee ganacsatada Soomaalida. Maanta waxaan u adeegnaa macaamiil ka kala yimid dugsiyada, isbitaalada, dukaamada, iyo hay'adaha dowladda.",
    teamTitle: "Kooxdeenna",
    teamDesc: "Horumariyeyaal, naqshadeeyayaal, iyo maamulayaal khibrad leh oo ka shaqeeya xalalka Afrika.",
  },
  en: {
    missionTitle: "Our Mission",
    visionTitle: "Our Vision",
    valuesTitle: "Our Values",
    storyTitle: "Our Story",
    story:
      "KTS NOVA was founded in Mogadishu to solve the technology needs of Somali businesses. Today we serve clients across schools, hospitals, retail stores, and government agencies.",
    teamTitle: "Our Team",
    teamDesc: "Experienced developers, designers, and project managers building solutions for Africa.",
  },
  ar: {
    missionTitle: "مهمتنا",
    visionTitle: "رؤيتنا",
    valuesTitle: "قيمنا",
    storyTitle: "قصتنا",
    story:
      "تأسست KTS NOVA في مقديشو لحل احتياجات التكنولوجيا للشركات الصومالية. اليوم نخدم عملاء في المدارس والمستشفيات والمتاجر والجهات الحكومية.",
    teamTitle: "فريقنا",
    teamDesc: "مطورون ومصممون ومديرو مشاريع ذوو خبرة يبنون حلولاً لأفريقيا.",
  },
};

export function getProjectContent(locale: Locale, id: ProjectId): ProjectContent {
  return projectsContent[locale][id] ?? projectsContent.so[id];
}

export function getServiceContent(locale: Locale, key: ServiceKey): ServiceContent {
  return servicesContent[locale][key] ?? servicesContent.so[key];
}
