import { defaultLocale, localeConfigs, type Locale } from "./locale-config";

export { defaultLocale, type Locale };
export const locales = localeConfigs;

export interface Translations {
  nav: {
    home: string;
    about: string;
    services: string;
    portfolio: string;
    contact: string;
    cta: string;
  };
  hero: {
    headline: string;
    sub: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  stats: {
    projects: string;
    clients: string;
    experience: string;
    support: string;
  };
  services: {
    title: string;
    subtitle: string;
    items: {
      software: { title: string; desc: string };
      web: { title: string; desc: string };
      mobile: { title: string; desc: string };
      ecommerce: { title: string; desc: string };
      ai: { title: string; desc: string };
      cloud: { title: string; desc: string };
    };
    viewAll: string;
  };
  projects: {
    title: string;
    subtitle: string;
    demo: string;
    items: {
      sms: { title: string; features: string[] };
      pos: { title: string; features: string[] };
      ecommerce: { title: string; features: string[] };
      hms: { title: string; features: string[] };
      chatbot: { title: string; features: string[] };
    };
  };
  whyUs: {
    title: string;
    subtitle: string;
    items: string[];
  };
  cta: {
    headline: string;
    sub: string;
    button: string;
  };
  footer: {
    services: string;
    company: string;
    contact: string;
    about: string;
    blog: string;
    career: string;
    rights: string;
    brandTag: string;
    brandName: string;
  };
  about: {
    title: string;
    subtitle: string;
    mission: string;
    vision: string;
    values: string[];
  };
  servicesPage: {
    title: string;
    subtitle: string;
    process: string;
    processSteps: string[];
    request: string;
  };
  portfolioPage: {
    title: string;
    subtitle: string;
    filters: Record<string, string>;
    caseStudy: string;
    features: string;
    projectModal: {
      close: string;
      modules: string;
      includes: string;
      customize: string;
      customizeDesc: string;
      technologies: string;
      featuresLabel: string;
      demoNote: string;
      requestQuote: string;
    };
    categoryExtras: Record<
      "software" | "web" | "mobile" | "ai" | "design",
      { includes: string[]; customization: string[]; tech: string[] }
    >;
  };
  contactPage: {
    title: string;
    subtitle: string;
    form: {
      name: string;
      email: string;
      phone: string;
      need: string;
      message: string;
      send: string;
      thankYou: string;
      projectIntro: string;
      needs: Record<string, string>;
    };
    info: {
      location: string;
      hours: string;
    };
  };
}

export const translations: Record<Locale, Translations> = {
  so: {
    nav: {
      home: "Hoyga",
      about: "Nagu Saabsan",
      services: "Adeegyada",
      portfolio: "Shaqadeenna",
      contact: "Xiriir",
      cta: "Nala Xiriir",
    },
    hero: {
      headline: "Teknoolojiya Casri ah · Mustaqbalka Dhisi",
      sub: "KTS NOVA waxay dhisaysaa xalal dijitaal oo casri ah oo loogu talagalay ganacsatada Soomaalida iyo Afrika",
      ctaPrimary: "Adeegyada Eeg",
      ctaSecondary: "Nala Xiriir",
    },
    stats: {
      projects: "Mashruuc dhammaystiray",
      clients: "Macaamiil ku faraxsan",
      experience: "Sano khibrad",
      support: "Taageero joogto ah",
    },
    services: {
      title: "Adeegyadeenna",
      subtitle: "Xalal teknoolojiyeed oo dhammaystiran oo ganacsigaaga kor u qaada",
      items: {
        software: {
          title: "Software Development",
          desc: "Nidaamyo maamul iyo ganacsi oo la isku halayn karo",
        },
        web: {
          title: "Website Development",
          desc: "Websites casri ah oo mobile-friendly ah",
        },
        mobile: {
          title: "Mobile Apps",
          desc: "App-yo Android iyo iOS ah oo degdeg ah",
        },
        ecommerce: {
          title: "Ecommerce Solutions",
          desc: "Dukaamo online ah oo lacag bixin fudud leh",
        },
        ai: {
          title: "AI & Automation",
          desc: "Chatbot-yo iyo nidaamyo otomaatig ah",
        },
        cloud: {
          title: "Cloud & Hosting",
          desc: "Kaydinta xogta iyo hosting ammaan ah",
        },
      },
      viewAll: "Dhammaan Adeegyada →",
    },
    projects: {
      title: "Tusaale Mashaariic",
      subtitle: "Eeg waxa aan u dhisnay macaamiilkeenna",
      demo: "Demo Eeg",
      items: {
        sms: {
          title: "School Management System",
          features: ["Maamul arday", "Imtixaan online", "Warbixin waalid"],
        },
        pos: {
          title: "POS & Inventory",
          features: ["Iibka degdeg ah", "Kaydinta tooska ah", "Warbixin maaliyadeed"],
        },
        ecommerce: {
          title: "Ecommerce Platform",
          features: ["Dukaan online", "Lacag bixin mobile", "Maamul alaab"],
        },
        hms: {
          title: "Hospital Management",
          features: ["Diiwaanka bukaanka", "Ballan qaadis", "Farmashiyaha"],
        },
        chatbot: {
          title: "AI Chatbot",
          features: ["Jawaab 24/7", "Afsomali + English", "Isku xir CRM"],
        },
      },
    },
    whyUs: {
      title: "Sababta KTS NOVA",
      subtitle: "Waa maxay sababta macaamiilku nagu doortaan",
      items: [
        "Koox Xirfad leh",
        "Xalal Casri ah",
        "Nidaam Balaadhsan",
        "Amaan & Xifaalo",
        "Dhakhso Delivery",
        "Taageero Macaamiil",
      ],
    },
    cta: {
      headline: "Mashruucaaga Bilow Maanta",
      sub: "Nala hadal si aan kuu caawino inaad gaarto yoolkaaga dijitaal",
      button: "Nala Xiriir →",
    },
    footer: {
      services: "Adeegyada",
      company: "Shirkadda",
      contact: "Xiriir",
      about: "Nagu Saabsan",
      blog: "Maqaallada",
      career: "Shaqo",
      rights: "© 2026 KTS NOVA — Dhammaan Xuquuqda Way Xafidan Yihiin",
      brandTag: "Summad ka tirsan",
      brandName: "Kulmis Tech Solution",
    },
    about: {
      title: "Nagu Saabsan",
      subtitle: "Knowledge Technology Systems — Horumarinta Teknoolojiyada Afrika",
      mission:
        "KTS NOVA waxay u taagan tahay in ay Soomaalida iyo Afrika u keento xalal teknoolojiyeed oo casri ah, la isku halayn karo, oo qiimo jaban.",
      vision:
        "Inaan noqono shirkadda ugu horreysa ee teknoolojiyada ee Bariga Afrika — mid ay Soomaalidu ku faanaan karaan adduunka.",
      values: [
        "Hal-abuur (Innovation)",
        "Kalsoonida (Trust)",
        "Tayada (Quality)",
        "Adeegga Macaamiilka (Service)",
      ],
    },
    servicesPage: {
      title: "Adeegyadeenna",
      subtitle: "Xalal teknoolojiyeed oo dhammaystiran",
      process: "Habka Shaqada",
      processSteps: [
        "Baahida la falanqeeyo",
        "Naqshad la sameeyo",
        "Horumarinta",
        "Tijaabinta",
        "Delivery & Taageero",
      ],
      request: "Adeeggan Codsado",
    },
    portfolioPage: {
      title: "Shaqadeenna",
      subtitle: "Mashaariic aan ku faano",
      filters: {
        all: "Dhammaan",
        software: "Software",
        web: "Web",
        mobile: "Mobile",
        ai: "AI",
        design: "Design",
      },
      caseStudy: "Case Study Eeg →",
      features: "Features",
      projectModal: {
        close: "Xir",
        modules: "Modules-ka Aasaasiga ah",
        includes: "Waxa ku jira",
        customize: "U habee baahida macmiilka",
        customizeDesc:
          "Mashruuc kasta waa la habeyn karaa — workflow-gaaga, branding-kaaga, iyo integrations-kaaga.",
        technologies: "Teknoolojiyada",
        featuresLabel: "features",
        demoNote:
          "Tani waa demo template — waxaan u habeynaa si ay ugu habboonaato ganacsigaaga iyo habka shaqadaada.",
        requestQuote: "Codso Qiimo Gaar ah",
      },
      categoryExtras: {
        software: {
          includes: [
            "Admin dashboard",
            "Role-based access",
            "Reports & analytics",
            "Auto backup",
            "Training & support",
          ],
          customization: [
            "Custom workflows & fields",
            "Extra modules on request",
            "Payment & SMS integrations",
            "Your logo & branding",
            "Multi-branch / multi-user",
          ],
          tech: ["React", "Node.js", "PostgreSQL", "REST API"],
        },
        web: {
          includes: [
            "Responsive design",
            "CMS content management",
            "SEO optimization",
            "SSL security",
            "Contact & lead forms",
          ],
          customization: [
            "Custom pages & layouts",
            "E-commerce add-on",
            "Somali / English / Arabic",
            "Booking & appointments",
            "Member login portal",
          ],
          tech: ["Next.js", "Tailwind CSS", "Vercel", "Sanity CMS"],
        },
        mobile: {
          includes: [
            "Android & iOS apps",
            "Push notifications",
            "Offline mode",
            "App Store deployment",
            "Analytics dashboard",
          ],
          customization: [
            "Custom UI & branding",
            "Mobile money payments",
            "GPS & maps integration",
            "Biometric login",
            "White-label for your brand",
          ],
          tech: ["React Native", "Firebase", "REST API", "Expo"],
        },
        ai: {
          includes: [
            "AI chatbot engine",
            "Admin training panel",
            "Analytics & logs",
            "API integrations",
            "24/7 automated responses",
          ],
          customization: [
            "Custom bot personality",
            "Somali & Arabic NLP",
            "CRM & WhatsApp hookup",
            "Voice bot option",
            "Industry-specific training",
          ],
          tech: ["OpenAI", "Python", "Webhooks", "Vector DB"],
        },
        design: {
          includes: [
            "UI/UX design files",
            "Brand style guide",
            "Interactive prototype",
            "Mobile & desktop views",
            "Source files (Figma)",
          ],
          customization: [
            "Logo refresh & variants",
            "Social media kit",
            "Print & marketing materials",
            "Motion & animation",
            "Full design system",
          ],
          tech: ["Figma", "Adobe CC", "Prototyping", "Design tokens"],
        },
      },
    },
    contactPage: {
      title: "Nala Xiriir",
      subtitle: "Waxaan diyaar u nahay inaan kaaga caawino mashruucaaga",
      form: {
        name: "Magacaaga",
        email: "Emailkaaga",
        phone: "Telefoonka",
        need: "Baahidaada",
        message: "Farriin",
        send: "Soo Dir →",
        thankYou: "Mahadsanid! Waan kula soo xiriiri doonaa.",
        projectIntro: "Waxaan xiiseynayaa inaan habeeyo:",
        needs: {
          software: "Software Development",
          web: "Website Development",
          mobile: "Mobile App",
          ecommerce: "Ecommerce",
          ai: "AI & Automation",
          other: "Kale",
        },
      },
      info: {
        location: "Mogadishu, Somalia",
        hours: "Saacadaha: Isn-Jimce 8:00–17:00",
      },
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      portfolio: "Portfolio",
      contact: "Contact",
      cta: "Contact Us",
    },
    hero: {
      headline: "Powering Digital Innovation",
      sub: "KTS NOVA builds modern digital solutions for Africa and beyond",
      ctaPrimary: "View Services",
      ctaSecondary: "Contact Us",
    },
    stats: {
      projects: "Projects Completed",
      clients: "Happy Clients",
      experience: "Years Experience",
      support: "Support Available",
    },
    services: {
      title: "Our Services",
      subtitle: "Complete technology solutions to grow your business",
      items: {
        software: {
          title: "Software Development",
          desc: "Reliable management and business systems",
        },
        web: {
          title: "Website Development",
          desc: "Modern, mobile-friendly websites",
        },
        mobile: {
          title: "Mobile Apps",
          desc: "Fast Android and iOS applications",
        },
        ecommerce: {
          title: "Ecommerce Solutions",
          desc: "Online stores with easy payments",
        },
        ai: {
          title: "AI & Automation",
          desc: "Chatbots and automated systems",
        },
        cloud: {
          title: "Cloud & Hosting",
          desc: "Secure data storage and hosting",
        },
      },
      viewAll: "All Services →",
    },
    projects: {
      title: "Demo Projects",
      subtitle: "See what we've built for our clients",
      demo: "View Demo",
      items: {
        sms: {
          title: "School Management System",
          features: ["Student management", "Online exams", "Parent reports"],
        },
        pos: {
          title: "POS & Inventory",
          features: ["Fast checkout", "Real-time stock", "Financial reports"],
        },
        ecommerce: {
          title: "Ecommerce Platform",
          features: ["Online store", "Mobile payments", "Product management"],
        },
        hms: {
          title: "Hospital Management",
          features: ["Patient records", "Appointments", "Pharmacy"],
        },
        chatbot: {
          title: "AI Chatbot",
          features: ["24/7 responses", "Somali + English", "CRM integration"],
        },
      },
    },
    whyUs: {
      title: "Why Choose KTS NOVA",
      subtitle: "Why clients trust us with their digital future",
      items: [
        "Professional Technology Team",
        "Modern & Innovative Solutions",
        "Scalable Systems",
        "Secure Platforms",
        "Fast Delivery",
        "Client-Focused Support",
      ],
    },
    cta: {
      headline: "Start Your Project Today",
      sub: "Let's talk about how we can help you achieve your digital goals",
      button: "Contact Us →",
    },
    footer: {
      services: "Services",
      company: "Company",
      contact: "Contact",
      about: "About",
      blog: "Blog",
      career: "Careers",
      rights: "© 2026 KTS NOVA — All Rights Reserved",
      brandTag: "A Brand of",
      brandName: "Kulmis Tech Solution",
    },
    about: {
      title: "About Us",
      subtitle: "Knowledge Technology Systems — Advancing African Technology",
      mission:
        "KTS NOVA is committed to bringing modern, reliable, and affordable technology solutions to Somalia and Africa.",
      vision:
        "To become the leading technology company in East Africa — one Somalis can proudly share with the world.",
      values: [
        "Innovation",
        "Trust",
        "Quality",
        "Client Service",
      ],
    },
    servicesPage: {
      title: "Our Services",
      subtitle: "Complete technology solutions",
      process: "Our Process",
      processSteps: [
        "Requirements analysis",
        "Design",
        "Development",
        "Testing",
        "Delivery & Support",
      ],
      request: "Request This Service",
    },
    portfolioPage: {
      title: "Our Work",
      subtitle: "Projects we're proud of",
      filters: {
        all: "All",
        software: "Software",
        web: "Web",
        mobile: "Mobile",
        ai: "AI",
        design: "Design",
      },
      caseStudy: "View Case Study →",
      features: "Features",
      projectModal: {
        close: "Close",
        modules: "Core Modules",
        includes: "What's Included",
        customize: "Customize for Your Needs",
        customizeDesc:
          "Every project can be tailored to your business — your workflow, branding, and integrations.",
        technologies: "Technologies",
        featuresLabel: "features",
        demoNote:
          "This is a demo template — we customize it to match your business and daily workflow.",
        requestQuote: "Request Custom Quote",
      },
      categoryExtras: {
        software: {
          includes: [
            "Admin dashboard",
            "Role-based access control",
            "Reports & analytics",
            "Automatic data backup",
            "Training & ongoing support",
          ],
          customization: [
            "Custom workflows & fields",
            "Additional modules on request",
            "Payment & SMS integrations",
            "Your logo & brand colors",
            "Multi-branch / multi-user setup",
          ],
          tech: ["React", "Node.js", "PostgreSQL", "REST API"],
        },
        web: {
          includes: [
            "Fully responsive design",
            "CMS content management",
            "SEO optimization",
            "SSL security certificate",
            "Contact & lead capture forms",
          ],
          customization: [
            "Custom pages & layouts",
            "E-commerce add-on",
            "Somali / English / Arabic",
            "Booking & appointment system",
            "Member login portal",
          ],
          tech: ["Next.js", "Tailwind CSS", "Vercel", "Sanity CMS"],
        },
        mobile: {
          includes: [
            "Android & iOS applications",
            "Push notifications",
            "Offline mode support",
            "App Store & Play Store deploy",
            "Usage analytics dashboard",
          ],
          customization: [
            "Custom UI & branding",
            "Mobile money payment gateway",
            "GPS & maps integration",
            "Biometric login",
            "White-label for your brand",
          ],
          tech: ["React Native", "Firebase", "REST API", "Expo"],
        },
        ai: {
          includes: [
            "AI chatbot engine",
            "Admin training panel",
            "Conversation analytics",
            "Third-party API integrations",
            "24/7 automated responses",
          ],
          customization: [
            "Custom bot personality & tone",
            "Somali & Arabic language NLP",
            "CRM & WhatsApp integration",
            "Voice bot option",
            "Industry-specific training data",
          ],
          tech: ["OpenAI", "Python", "Webhooks", "Vector DB"],
        },
        design: {
          includes: [
            "Complete UI/UX design files",
            "Brand style guide",
            "Interactive clickable prototype",
            "Mobile & desktop screen designs",
            "Editable source files (Figma)",
          ],
          customization: [
            "Logo refresh & color variants",
            "Social media design kit",
            "Print & marketing materials",
            "Motion graphics & animation",
            "Full design system library",
          ],
          tech: ["Figma", "Adobe CC", "Prototyping", "Design tokens"],
        },
      },
    },
    contactPage: {
      title: "Contact Us",
      subtitle: "We're ready to help with your project",
      form: {
        name: "Your Name",
        email: "Your Email",
        phone: "Phone Number",
        need: "Your Need",
        message: "Message",
        send: "Send →",
        thankYou: "Thank you! We'll be in touch soon.",
        projectIntro: "I'm interested in customizing:",
        needs: {
          software: "Software Development",
          web: "Website Development",
          mobile: "Mobile App",
          ecommerce: "Ecommerce",
          ai: "AI & Automation",
          other: "Other",
        },
      },
      info: {
        location: "Mogadishu, Somalia",
        hours: "Hours: Mon–Fri 8:00 AM–5:00 PM",
      },
    },
  },
  ar: {
    nav: {
      home: "الرئيسية",
      about: "من نحن",
      services: "الخدمات",
      portfolio: "أعمالنا",
      contact: "تواصل",
      cta: "تواصل معنا",
    },
    hero: {
      headline: "نبني مستقبلاً رقمياً",
      sub: "KTS NOVA تقدم حلولاً تقنية متطورة للشركات والمؤسسات",
      ctaPrimary: "عرض الخدمات",
      ctaSecondary: "تواصل معنا",
    },
    stats: {
      projects: "مشروع مكتمل",
      clients: "عميل راضٍ",
      experience: "سنوات خبرة",
      support: "دعم متواصل",
    },
    services: {
      title: "خدماتنا",
      subtitle: "حلول تقنية متكاملة لتنمية أعمالك",
      items: {
        software: {
          title: "تطوير البرمجيات",
          desc: "أنظمة إدارية وتجارية موثوقة",
        },
        web: {
          title: "تطوير المواقع",
          desc: "مواقع حديثة متوافقة مع الجوال",
        },
        mobile: {
          title: "تطبيقات الجوال",
          desc: "تطبيقات Android و iOS سريعة",
        },
        ecommerce: {
          title: "حلول التجارة الإلكترونية",
          desc: "متاجر إلكترونية مع دفع سهل",
        },
        ai: {
          title: "الذكاء الاصطناعي والأتمتة",
          desc: "روبوتات محادثة وأنظمة آلية",
        },
        cloud: {
          title: "السحابة والاستضافة",
          desc: "تخزين آمن واستضافة موثوقة",
        },
      },
      viewAll: "جميع الخدمات ←",
    },
    projects: {
      title: "مشاريع تجريبية",
      subtitle: "اطلع على ما أنجزناه لعملائنا",
      demo: "عرض تجريبي",
      items: {
        sms: {
          title: "نظام إدارة المدارس",
          features: ["إدارة الطلاب", "امتحانات إلكترونية", "تقارير أولياء الأمور"],
        },
        pos: {
          title: "نقاط البيع والمخزون",
          features: ["بيع سريع", "مخزون فوري", "تقارير مالية"],
        },
        ecommerce: {
          title: "منصة تجارة إلكترونية",
          features: ["متجر إلكتروني", "دفع عبر الجوال", "إدارة المنتجات"],
        },
        hms: {
          title: "إدارة المستشفيات",
          features: ["سجلات المرضى", "المواعيد", "الصيدلية"],
        },
        chatbot: {
          title: "روبوت محادثة ذكي",
          features: ["ردود 24/7", "عربي + صومالي + إنجليزي", "تكامل CRM"],
        },
      },
    },
    whyUs: {
      title: "لماذا KTS NOVA؟",
      subtitle: "لماذا يثق بنا العملاء في مستقبلهم الرقمي",
      items: [
        "فريق تقني محترف",
        "حلول حديثة ومبتكرة",
        "أنظمة قابلة للتوسع",
        "منصات آمنة",
        "تسليم سريع",
        "دعم يركز على العميل",
      ],
    },
    cta: {
      headline: "ابدأ مشروعك اليوم",
      sub: "تحدث معنا لنساعدك في تحقيق أهدافك الرقمية",
      button: "تواصل معنا ←",
    },
    footer: {
      services: "الخدمات",
      company: "الشركة",
      contact: "التواصل",
      about: "من نحن",
      blog: "المدونة",
      career: "الوظائف",
      rights: "© 2026 KTS NOVA — جميع الحقوق محفوظة",
      brandTag: "علامة تجارية تابعة لـ",
      brandName: "Kulmis Tech Solution",
    },
    about: {
      title: "من نحن",
      subtitle: "Knowledge Technology Systems — تطوير التكنولوجيا في أفريقيا",
      mission:
        "تلتزم KTS NOVA بتقديم حلول تقنية حديثة وموثوقة وبأسعار مناسبة للصومال وأفريقيا والمجتمعات الناطقة بالعربية.",
      vision:
        "أن نكون الشركة التقنية الرائدة في شرق أفريقيا — شركة يفخر بها الصوماليون والعرب أمام العالم.",
      values: ["الابتكار", "الثقة", "الجودة", "خدمة العملاء"],
    },
    servicesPage: {
      title: "خدماتنا",
      subtitle: "حلول تقنية متكاملة",
      process: "خطوات العمل",
      processSteps: [
        "تحليل المتطلبات",
        "التصميم",
        "التطوير",
        "الاختبار",
        "التسليم والدعم",
      ],
      request: "اطلب هذه الخدمة",
    },
    portfolioPage: {
      title: "أعمالنا",
      subtitle: "مشاريع نفخر بها",
      filters: {
        all: "الكل",
        software: "برمجيات",
        web: "مواقع",
        mobile: "جوال",
        ai: "ذكاء اصطناعي",
        design: "تصميم",
      },
      caseStudy: "عرض دراسة الحالة ←",
      features: "الميزات",
      projectModal: {
        close: "إغلاق",
        modules: "الوحدات الأساسية",
        includes: "ما يتضمنه المشروع",
        customize: "تخصيص حسب احتياجاتك",
        customizeDesc:
          "يمكن تخصيص كل مشروع ليناسب عملك — سير العمل والعلامة التجارية والتكاملات.",
        technologies: "التقنيات",
        featuresLabel: "ميزة",
        demoNote:
          "هذا قالب تجريبي — نخصصه ليتوافق مع عملك وطريقة عملك اليومية.",
        requestQuote: "اطلب عرض سعر مخصص",
      },
      categoryExtras: {
        software: {
          includes: [
            "لوحة تحكم إدارية",
            "صلاحيات حسب الدور",
            "تقارير وتحليلات",
            "نسخ احتياطي تلقائي",
            "تدريب ودعم مستمر",
          ],
          customization: [
            "سير عمل وحقول مخصصة",
            "وحدات إضافية عند الطلب",
            "تكامل الدفع والرسائل",
            "شعارك وألوان علامتك",
            "فروع متعددة / مستخدمين",
          ],
          tech: ["React", "Node.js", "PostgreSQL", "REST API"],
        },
        web: {
          includes: [
            "تصميم متجاوب بالكامل",
            "إدارة محتوى CMS",
            "تحسين SEO",
            "شهادة SSL",
            "نماذج تواصل وجذب العملاء",
          ],
          customization: [
            "صفحات وتخطيطات مخصصة",
            "إضافة تجارة إلكترونية",
            "صومالي / إنجليزي / عربي",
            "نظام حجز ومواعيد",
            "بوابة تسجيل الأعضاء",
          ],
          tech: ["Next.js", "Tailwind CSS", "Vercel", "Sanity CMS"],
        },
        mobile: {
          includes: [
            "تطبيقات Android و iOS",
            "إشعارات push",
            "وضع offline",
            "نشر App Store و Play Store",
            "لوحة تحليلات الاستخدام",
          ],
          customization: [
            "واجهة وعلامة تجارية مخصصة",
            "بوابة دفع عبر الجوال",
            "تكامل GPS والخرائط",
            "تسجيل دخول بيومتري",
            "White-label لعلامتك",
          ],
          tech: ["React Native", "Firebase", "REST API", "Expo"],
        },
        ai: {
          includes: [
            "محرك روبوت محادثة AI",
            "لوحة تدريب إدارية",
            "تحليلات المحادثات",
            "تكامل API خارجي",
            "ردود آلية 24/7",
          ],
          customization: [
            "شخصية ونبرة الروبوت",
            "NLP بالصومالي والعربي",
            "تكامل CRM وWhatsApp",
            "خيار روبوت صوتي",
            "بيانات تدريب حسب الصناعة",
          ],
          tech: ["OpenAI", "Python", "Webhooks", "Vector DB"],
        },
        design: {
          includes: [
            "ملفات UI/UX كاملة",
            "دليل الهوية البصرية",
            "نموذج تفاعلي قابل للنقر",
            "تصاميم جوال وسطح مكتب",
            "ملفات مصدرية (Figma)",
          ],
          customization: [
            "تحديث الشعار والألوان",
            "حزمة تصاميم السوشيال",
            "مواد طباعية وتسويقية",
            "رسوم متحركة",
            "مكتبة design system كاملة",
          ],
          tech: ["Figma", "Adobe CC", "Prototyping", "Design tokens"],
        },
      },
    },
    contactPage: {
      title: "تواصل معنا",
      subtitle: "نحن جاهزون لمساعدتك في مشروعك",
      form: {
        name: "الاسم الكامل",
        email: "البريد الإلكتروني",
        phone: "رقم الهاتف",
        need: "الخدمة المطلوبة",
        message: "الرسالة",
        send: "إرسال ←",
        thankYou: "شكراً لك! سنتواصل معك قريباً.",
        projectIntro: "أنا مهتم بتخصيص:",
        needs: {
          software: "تطوير البرمجيات",
          web: "تطوير المواقع",
          mobile: "تطبيق جوال",
          ecommerce: "تجارة إلكترونية",
          ai: "ذكاء اصطناعي وأتمتة",
          other: "أخرى",
        },
      },
      info: {
        location: "مقديشو، الصومال",
        hours: "الأحد–الخميس: 8:00 ص – 5:00 م",
      },
    },
  },
};

export function getTranslations(locale: Locale): Translations {
  return translations[locale] ?? translations[defaultLocale];
}
