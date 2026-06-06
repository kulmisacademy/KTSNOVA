import type { Locale } from "@/lib/i18n/locale-config";

export interface LegalSection {
  title: string;
  intro?: string;
  items?: string[];
  closing?: string;
}

export interface LegalDocument {
  title: string;
  subtitle: string;
  brandLine: string;
  intro: string;
  sections: LegalSection[];
}

export const privacyPolicy: Record<Locale, LegalDocument> = {
  en: {
    title: "Privacy Policy",
    subtitle: "How KTS NOVA collects, uses, and protects your information",
    brandLine: "A Brand of Kulmis Tech Solution",
    intro:
      "At KTS NOVA, we respect and protect the privacy of our users, clients, and visitors. This Privacy Policy explains how we collect, use, and protect your information when using our website, systems, applications, and digital services.",
    sections: [
      {
        title: "Information We Collect",
        intro: "We may collect:",
        items: [
          "Name and contact information",
          "Email address and phone number",
          "Business information",
          "Payment and transaction details",
          "Technical and system usage data",
        ],
      },
      {
        title: "How We Use Information",
        intro: "Your information may be used to:",
        items: [
          "Provide and improve our services",
          "Process payments and transactions",
          "Send notifications and updates",
          "Improve security and system performance",
          "Provide customer support",
        ],
      },
      {
        title: "Data Security",
        closing:
          "We use secure technologies and modern security practices to protect user information from unauthorized access or misuse.",
      },
      {
        title: "Third-Party Services",
        closing:
          "Our services may integrate trusted third-party providers such as payment gateways, SMS services, hosting providers, and analytics tools.",
      },
      {
        title: "User Privacy",
        closing:
          "KTS NOVA does not sell or misuse user information. All data is handled securely and responsibly.",
      },
      {
        title: "Updates",
        closing:
          "We may update this Privacy Policy from time to time. Continued use of our services means acceptance of any updates.",
      },
    ],
  },
  so: {
    title: "Siyaasadda Asturnaanta",
    subtitle: "Sida KTS NOVA u ururiso, u isticmaasho, uguna ilaaliso macluumaadkaaga",
    brandLine: "Summad ka tirsan Kulmis Tech Solution",
    intro:
      "KTS NOVA waxay ixtiraamtaa oo ilaalisaa asturnaanta isticmaalayaasheeda, macaamiisheeda, iyo booqdayaasha. Siyaasaddan waxay sharaxaysaa sida aan u ururino, u isticmaalno, uguna ilaalino macluumaadkaaga markaad isticmaaleyso website-keena, nidaamyada, app-yada, iyo adeegyada dijitaalka ah.",
    sections: [
      {
        title: "Macluumaadka aan Ururino",
        intro: "Waxaan ururin karnaa:",
        items: [
          "Magaca iyo macluumaadka xiriirka",
          "Cinwaanka emailka iyo lambarka telefoonka",
          "Macluumaadka ganacsiga",
          "Faahfaahinta lacag bixinta iyo macaamilka",
          "Xogta farsamada iyo isticmaalka nidaamka",
        ],
      },
      {
        title: "Sida aan u Isticmaalno Macluumaadka",
        intro: "Macluumaadkaaga waxaa loo isticmaali karaa:",
        items: [
          "Bixinta iyo hagaajinta adeegyadeena",
          "Habaynta lacag bixinta iyo macaamilka",
          "Dirida ogeysiisyada iyo wararka",
          "Hagaajinta amniga iyo waxqabadka nidaamka",
          "Bixinta taageerada macaamiisha",
        ],
      },
      {
        title: "Amniga Xogta",
        closing:
          "Waxaan isticmaalnaa teknoolojiyad ammaan ah iyo habab casri ah si aan uga ilaalino macluumaadka isticmaalaha gelitaanka aan la oggolayn ama xadgudubka.",
      },
      {
        title: "Adeegyada Dhinac Saddexaad",
        closing:
          "Adeegyadeenu waxay ku dari karaan bixiyeyaal la isku halayn karo sida payment gateways, SMS, hosting, iyo qalabka falanqaynta.",
      },
      {
        title: "Asturnaanta Isticmaalaha",
        closing:
          "KTS NOVA ma iibiso mana xadgudubto macluumaadka isticmaalaha. Dhammaan xogta si ammaan ah oo mas'uuliyad leh ayaa loo maareeyaa.",
      },
      {
        title: "Cusbooneysiinta",
        closing:
          "Waxaan cusbooneysiin karnaa Siyaasaddan waqti ka waqti. Isticmaalka joogtada ah ee adeegyadeena waxay ka dhigan tahay aqbalaadda wixii cusub.",
      },
    ],
  },
  ar: {
    title: "سياسة الخصوصية",
    subtitle: "كيف تجمع KTS NOVA معلوماتك وتستخدمها وتحميها",
    brandLine: "علامة تجارية تابعة لـ Kulmis Tech Solution",
    intro:
      "في KTS NOVA، نحترم خصوصية مستخدمينا وعملائنا وزوارنا ونحميها. توضح سياسة الخصوصية هذه كيفية جمع معلوماتك واستخدامها وحمايتها عند استخدام موقعنا وأنظمتنا وتطبيقاتنا وخدماتنا الرقمية.",
    sections: [
      {
        title: "المعلومات التي نجمعها",
        intro: "قد نجمع:",
        items: [
          "الاسم ومعلومات الاتصال",
          "البريد الإلكتروني ورقم الهاتف",
          "معلومات العمل",
          "تفاصيل الدفع والمعاملات",
          "البيانات التقنية وبيانات استخدام النظام",
        ],
      },
      {
        title: "كيف نستخدم المعلومات",
        intro: "قد تُستخدم معلوماتك من أجل:",
        items: [
          "تقديم خدماتنا وتحسينها",
          "معالجة المدفوعات والمعاملات",
          "إرسال الإشعارات والتحديثات",
          "تحسين الأمان وأداء النظام",
          "تقديم دعم العملاء",
        ],
      },
      {
        title: "أمن البيانات",
        closing:
          "نستخدم تقنيات آمنة وممارسات حديثة لحماية معلومات المستخدم من الوصول غير المصرح به أو إساءة الاستخدام.",
      },
      {
        title: "خدمات الطرف الثالث",
        closing:
          "قد تتكامل خدماتنا مع مزودين موثوقين مثل بوابات الدفع وخدمات الرسائل القصيرة والاستضافة وأدوات التحليل.",
      },
      {
        title: "خصوصية المستخدم",
        closing:
          "لا تبيع KTS NOVA معلومات المستخدم ولا تسيء استخدامها. تتم معالجة جميع البيانات بشكل آمن ومسؤول.",
      },
      {
        title: "التحديثات",
        closing:
          "قد نقوم بتحديث سياسة الخصوصية من وقت لآخر. يعني الاستمرار في استخدام خدماتنا قبول أي تحديثات.",
      },
    ],
  },
};

export const termsConditions: Record<Locale, LegalDocument> = {
  en: {
    title: "Terms & Conditions",
    subtitle: "Rules and responsibilities for using KTS NOVA services",
    brandLine: "A Brand of Kulmis Tech Solution",
    intro:
      "By accessing or using KTS NOVA services, websites, systems, or applications, you agree to comply with the following Terms & Conditions.",
    sections: [
      {
        title: "Services",
        intro: "KTS NOVA provides technology and digital services including:",
        items: [
          "Software Development",
          "Website Development",
          "Ecommerce Solutions",
          "Mobile Applications",
          "Systems Development",
          "API Integration",
          "Digital Services",
        ],
      },
      {
        title: "User Responsibilities",
        intro: "Users agree to:",
        items: [
          "Provide accurate information",
          "Use services legally and responsibly",
          "Avoid misuse, hacking, or unauthorized access",
          "Respect intellectual property rights",
        ],
      },
      {
        title: "Payments",
        closing:
          "All payments for services, subscriptions, or digital products must be completed according to agreed terms.",
      },
      {
        title: "Intellectual Property",
        closing:
          "All content, software, branding, logos, systems, and digital materials developed by KTS NOVA remain the property of the company unless otherwise agreed in writing.",
      },
      {
        title: "Limitation of Liability",
        intro: "KTS NOVA is not responsible for losses caused by:",
        items: [
          "Internet interruptions",
          "Third-party service failures",
          "Unauthorized user actions",
          "External cyberattacks",
        ],
      },
      {
        title: "Service Changes",
        closing:
          "We reserve the right to update, modify, or discontinue services at any time without prior notice.",
      },
      {
        title: "Privacy",
        closing: "User information is handled according to our Privacy Policy.",
      },
      {
        title: "Acceptance",
        closing: "Using our services means you agree to these Terms & Conditions.",
      },
    ],
  },
  so: {
    title: "Shuruudaha & Xaaladaha",
    subtitle: "Xeerarka iyo mas'uuliyadaha isticmaalka adeegyada KTS NOVA",
    brandLine: "Summad ka tirsan Kulmis Tech Solution",
    intro:
      "Markaad gasho ama isticmaasho adeegyada, website-yada, nidaamyada, ama app-yada KTS NOVA, waxaad ogolaatay inaad raacdo Shuruudahan & Xaaladahan.",
    sections: [
      {
        title: "Adeegyada",
        intro: "KTS NOVA waxay bixisaa adeegyo teknoolojiyadeed iyo dijitaal ah oo ay ka mid yihiin:",
        items: [
          "Software Development",
          "Website Development",
          "Ecommerce Solutions",
          "Mobile Applications",
          "Systems Development",
          "API Integration",
          "Digital Services",
        ],
      },
      {
        title: "Mas'uuliyadaha Isticmaalaha",
        intro: "Isticmaalayaashu waxay ogolaadaan:",
        items: [
          "Inay bixiyaan macluumaad sax ah",
          "Inay adeegyada si sharci ah oo mas'uuliyad leh u isticmaalaan",
          "Inay ka fogaadaan xadgudubka, jabsiga, ama gelitaanka aan la oggolayn",
          "Inay ixtiraamaan xuquuqda hantida garaadka",
        ],
      },
      {
        title: "Lacag Bixinta",
        closing:
          "Dhammaan lacag bixinta adeegyada, isdiiwaangelinta, ama alaabta dijitaalka ah waa in lagu dhammeeyaa sida shuruudaha la isku afgartay.",
      },
      {
        title: "Hantida Garaadka",
        closing:
          "Dhammaan content-ka, software-ka, summadaha, logo-yada, nidaamyada, iyo agabka dijitaalka ah ee KTS NOVA ay sameyso waxay ahaanayaan hantida shirkadda haddii aan qoraal ahaan loo heshiin wax kale.",
      },
      {
        title: "Xaddidaadda Mas'uuliyadda",
        intro: "KTS NOVA mas'uul kama aha khasaaraha ay keenaan:",
        items: [
          "Go'doominta internetka",
          "Guuldarada adeegyada dhinac saddexaad",
          "Ficillada isticmaalaha aan la oggolayn",
          "Weerarada dibadda ee internetka",
        ],
      },
      {
        title: "Isbeddelka Adeegyada",
        closing:
          "Waxaan xaq u leenahay inaan cusbooneysiino, wax ka beddelno, ama joojino adeegyada wakhti kasta iyada oo aan horay loo ogeysiin.",
      },
      {
        title: "Asturnaanta",
        closing: "Macluumaadka isticmaalaha waxaa lagu maareeyaa sida Siyaasadda Asturnaanta.",
      },
      {
        title: "Aqbalaadda",
        closing: "Isticmaalka adeegyadeenu waxay ka dhigan tahay inaad ogolaatay Shuruudahan & Xaaladahan.",
      },
    ],
  },
  ar: {
    title: "الشروط والأحكام",
    subtitle: "قواعد ومسؤوليات استخدام خدمات KTS NOVA",
    brandLine: "علامة تجارية تابعة لـ Kulmis Tech Solution",
    intro:
      "من خلال الوصول إلى خدمات KTS NOVA أو مواقعها أو أنظمتها أو تطبيقاتها أو استخدامها، فإنك توافق على الالتزام بالشروط والأحكام التالية.",
    sections: [
      {
        title: "الخدمات",
        intro: "توفر KTS NOVA خدمات تقنية ورقمية تشمل:",
        items: [
          "تطوير البرمجيات",
          "تطوير المواقع",
          "حلول التجارة الإلكترونية",
          "تطبيقات الجوال",
          "تطوير الأنظمة",
          "تكامل API",
          "الخدمات الرقمية",
        ],
      },
      {
        title: "مسؤوليات المستخدم",
        intro: "يوافق المستخدمون على:",
        items: [
          "تقديم معلومات دقيقة",
          "استخدام الخدمات بشكل قانوني ومسؤول",
          "تجنب إساءة الاستخدام أو الاختراق أو الوصول غير المصرح به",
          "احترام حقوق الملكية الفكرية",
        ],
      },
      {
        title: "المدفوعات",
        closing:
          "يجب إتمام جميع المدفوعات للخدمات أو الاشتراكات أو المنتجات الرقمية وفقاً للشروط المتفق عليها.",
      },
      {
        title: "الملكية الفكرية",
        closing:
          "يبقى جميع المحتوى والبرمجيات والعلامات التجارية والشعارات والأنظمة والمواد الرقمية التي تطورها KTS NOVA ملكاً للشركة ما لم يُتفق على خلاف ذلك كتابياً.",
      },
      {
        title: "حدود المسؤولية",
        intro: "لا تتحمل KTS NOVA المسؤولية عن الخسائر الناتجة عن:",
        items: [
          "انقطاع الإنترنت",
          "أعطال خدمات الطرف الثالث",
          "إجراءات المستخدم غير المصرح بها",
          "الهجمات الإلكترونية الخارجية",
        ],
      },
      {
        title: "تغييرات الخدمة",
        closing:
          "نحتفظ بالحق في تحديث الخدمات أو تعديلها أو إيقافها في أي وقت دون إشعار مسبق.",
      },
      {
        title: "الخصوصية",
        closing: "تتم معالجة معلومات المستخدم وفقاً لسياسة الخصوصية الخاصة بنا.",
      },
      {
        title: "القبول",
        closing: "يعني استخدام خدماتنا موافقتك على هذه الشروط والأحكام.",
      },
    ],
  },
};
