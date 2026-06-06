# 🌐 KTS NOVA — Qorshaha Horumarinta Websiteka
### Product Requirements Document (PRD) · Version 1.0
**Taariikhda:** May 2026 | **Shirkadda:** KTS NOVA – Knowledge Technology Systems | **Heerka:** Draft → Review

---

## 📋 Dulmarinta Guud / Executive Summary

> **Afsomali:** KTS NOVA waxay u baahan tahay website casri ah, qurux badan, oo si toos ah ugu hadlaysa macaamiisha Soomaalida iyo Afrika — website kaas oo muujinaya awooda teknoolojiyada, abuurista kalsoonida, iyo soo jiidashada macaamiil cusub.
>
> **English:** KTS NOVA requires a modern, visually powerful website that speaks directly to Somali and African markets — one that projects technological authority, builds trust, and converts visitors into clients.

---

## 1. 🎯 Yoolalka Mashruuca / Project Goals

| # | Afsomali | English |
|---|----------|---------|
| 1 | Muji xirfadda iyo heerka teknoolojiyada KTS NOVA | Showcase KTS NOVA's expertise and technological credibility |
| 2 | Soo jiido ganacsatada Soomaalida iyo Afrika | Attract Somali and African businesses as clients |
| 3 | Tus adeegyada iyo demo projectyada si cad | Present services and demo projects with clarity |
| 4 | Sahlida xidhiidha macaamiisha / lead generation | Facilitate client contact and lead generation |
| 5 | Naqshad furan oo degdeg ku shaqaysa moobiilka | Deliver a fast, mobile-first experience |

---

## 2. 👥 Isticmaalayaasha Bartilmaameedka / Target Audience

### 2.1 Kooxaha Isticmaaleyaasha / User Groups

```
PRIMARY USERS (Ugu Muhiimsan)
├── 🏢 Ganacsatada Soomaalida iyo Afrika
│   ├── Boqolkiisba: 45%
│   ├── Baahida: Xalal teknoolojiyeed oo la isku halayn karo
│   └── Goal: Hesho software ama website shaqo gelinaysa
│
├── 🏫 Hay'adaha Waxbarashada iyo Caafimaadka
│   ├── Boqolkiisba: 25%
│   ├── Baahida: Systems maamul ah (SMS, HMS)
│   └── Goal: Digitize hawlaha
│
├── 🚀 Startupyada iyo Girbaanada Yar
│   ├── Boqolkiisba: 20%
│   ├── Baahida: MVP xawli iyo qiimo jaban
│   └── Goal: Launch digital product
│
└── 🌍 NGOyada iyo Hay'adaha Dowladda
    ├── Boqolkiisba: 10%
    ├── Baahida: Websites xirfadeed
    └── Goal: Online presence
```

### 2.2 Persona — Isticmaale Muhiim

**"Maxamed A." — Ganacsi-yahan Mogadishu**
- Da'da: 32 sano | Ganacsi: Suuq-baad iyo xawaala
- Dhibaatada: Inventory manual ah, cashuurta gacanta
- Rabitaanka: POS + Inventory system oo bilaash tababar leh
- Browser: Mobile-first (Samsung Android)
- Luuqad: Afsomali + Arabic

---

## 3. 🎨 Naqshadda iyo Muuqaalka / Design & Visual Identity

### 3.1 Brand Colors (Midabada Rasmiga)

| Magaca | Hex Code | Isticmaalka |
|--------|----------|-------------|
| **Nova Teal** (Cagaar-buluug) | `#00C896` | Primary / CTA buttons / Logo |
| **Deep Navy** (Buluug-madow) | `#1A2744` | Backgrounds / Text / Headers |
| **Pure White** | `#FFFFFF` | Cards / Clean sections |
| **Light Ash** | `#F5F7FA` | Section backgrounds |
| **Accent Gold** | `#FFB347` | Badges / Highlights (optional) |

### 3.2 Typography (Xarfaha)

```css
/* Headings — Afka Soomaaliga iyo English */
font-family: 'Plus Jakarta Sans', 'Tajawal', sans-serif;
/* Body Text */
font-family: 'DM Sans', 'Noto Sans Arabic', sans-serif;
/* Code / Tech Elements */
font-family: 'JetBrains Mono', monospace;
```

> ⚠️ **Xusuus-qor:** Dhammaan qoraalada waa in ay ku jiraan labada afood — **Afsomaliga horeba** (bidix), **Ingiriisiga** xigta.

### 3.3 Cursor Custom (Muuqaalka Jiirka)

Ku salaysan shaqada logoha ee KTS NOVA:
- **Default state:** Cursor caadi ah + **da'ira yar oo cagaar** (Nova Teal) ku wareegaysa
- **Hover / Link:** Cursor wuxuu noqdaa **xaashi yar oo rogrogaysa** (puzzle piece icon) — naqshada logo-ga
- **CTA Button Hover:** Cursor wuxuu ballaadhaa, baraf (glow) cagaar ah
- **Dark sections:** Cursor white + green outline

```css
/* Implementation hint */
cursor: none; /* Hide default */
/* Custom cursor div: 20px circle, border: 2px solid #00C896 */
/* Magnetic effect on buttons using JS mousemove */
```

### 3.4 Animation & Motion

| Element | Animation |
|---------|-----------|
| Hero tagline | Typewriter effect (Afsom → English) |
| Service cards | Slide-up fade on scroll (staggered 100ms) |
| Stats counter | Count-up animation when visible |
| Logo puzzle | Pieces assemble on page load (CSS transforms) |
| Nav links | Underline draw left-to-right |
| CTA button | Pulse glow loop |

---

## 4. 📐 Qaab-dhismeedka Bogagga / Site Architecture

```
ktsnova.com
│
├── 🏠 Home / Hoyga
├── 📖 About / Nagu Saabsan
├── 🛠️ Services / Adeegyada
│   ├── Software Development
│   ├── Website Development
│   ├── Mobile Apps
│   ├── Ecommerce Solutions
│   ├── AI & Automation
│   └── Cloud & Hosting
├── 💼 Portfolio / Shaqadeenna
│   ├── School Management System
│   ├── POS & Inventory
│   ├── Hospital Management
│   ├── Ecommerce Platform
│   └── AI Chatbot
├── 💰 Pricing / Qiimaha (optional)
├── 📝 Blog / Maqaallada
└── 📞 Contact / Xiriir
```

---

## 5. 📄 Bogagga Koowaad — Page Specifications

### 5.1 🏠 Home Page / Bogga Hoyga

#### SECTION 1: Hero / Furitaanka

**Afsomaliga:**
> "Teknoolojiya Casri ah · Mustaqbalka Dhisi"

**English:**
> "Powering Digital Innovation"

**Naqshadda:**
- Background: Dark Navy gradient + subtle geometric grid pattern (puzzle pieces faded 5% opacity)
- Animated particle system (cagaar yaryar oo fogeynaya)
- Hero image: 3D isometric illustration of software dashboard
- Laba baadhan (CTA): **"Adeegyada Arji"** + **"Demo Arag"**
- Scroll indicator: animated arrow

**Xusuus-qorka Naqshadda:**
```
Layout:    60% text left | 40% illustration right
Mobile:    Stack vertical, illustration below
Animation: Text types in (Somali first → fade → English)
```

---

#### SECTION 2: Stats / Tirooyin

| Tiro | Magaca |
|------|--------|
| 50+ | Mashruuc dhammaystiray |
| 100+ | Macaamiil ku faraxsan |
| 5+ | Sano khibrad |
| 24/7 | Taageero joogto ah |

*Counter animation on viewport entry*

---

#### SECTION 3: Adeegyada / Services Overview

6-card grid layout:

```
┌─────────────┐  ┌─────────────┐  ┌─────────────┐
│  💻          │  │  🌐          │  │  📱          │
│  Software   │  │  Web Dev    │  │  Mobile     │
│  Dev        │  │             │  │  Apps       │
└─────────────┘  └─────────────┘  └─────────────┘
┌─────────────┐  ┌─────────────┐  ┌─────────────┐
│  🛒          │  │  🤖          │  │  ☁️          │
│  Ecommerce  │  │  AI &       │  │  Cloud &    │
│             │  │  Automation │  │  Hosting    │
└─────────────┘  └─────────────┘  └─────────────┘
```

**Card Hover Effect:** 
- Border cagaar ah soo muuqata
- Icon ballaadhaa (scale 1.2)
- Background gradient yar

---

#### SECTION 4: Demo Projects / Tusaale Mashaariic

Horizontal scroll cards (swipeable on mobile):

```
[School SMS] → [POS System] → [Ecommerce] → [Hospital HMS] → [AI Chatbot]
```

Kasta card:
- Screenshot / mockup image
- 3 features (icons)
- "Demo Eeg" button

---

#### SECTION 5: Sababta KTS NOVA / Why Choose Us

Split layout: Left icon list | Right large illustration

```
✅ Koox Xirfad leh
✅ Xalal Casri ah
✅ Nidaam Balaadhsan
✅ Amaan & Xifaalo
✅ Dhakhso Delivery
✅ Taageero Macaamiil
```

---

#### SECTION 6: CTA Section

Dark navy background + teal glow:
```
"Mashruucaaga Bilow Maanta"
"Start Your Project Today"
[Nala Xiriir / Contact Us →]
```

---

#### SECTION 7: Footer

```
┌────────────────────────────────────────────────┐
│  [LOGO]     Adeegyada    Shirkadda   Xiriir    │
│             - Software   - About    - Email    │
│             - Web Dev    - Blog     - Phone    │
│             - Mobile     - Career   - Address  │
│                                                │
│  📧 info@ktsnova.com  📞 +252 XXX XXX XXX     │
│  🌐 www.ktsnova.com                           │
│  © 2026 KTS NOVA. All rights reserved.        │
└────────────────────────────────────────────────┘
```

---

### 5.2 🛠️ Services Page / Bogga Adeegyada

**Layout:** Sidebar nav (left) + content area (right)

Cada adeeg:
- Hero image/icon (animated)
- Sharaxaad afka labada (Somali + English)
- Features list
- Process steps (numbered)
- Relevant demo projects
- CTA: "Adeeggan Codsado"

---

### 5.3 💼 Portfolio Page / Bogga Shaqadeenna

**Layout:** Masonry grid with filter tabs

**Filters:** 
`Dhammaan | Software | Web | Mobile | AI | Design`

**Project Card:**
```
┌──────────────────────┐
│   [Screenshot]       │
│   ████████████       │
├──────────────────────┤
│ School Mgmt System   │
│ ⭐ Features: 12+     │
│ 🏷️ Software · SMS    │
│ [Case Study Eeg →]   │
└──────────────────────┘
```

---

### 5.4 📞 Contact Page / Bogga Xiriirka

**Two-column layout:**

**Left — Form:**
```
Magacaaga / Your Name    [____________]
Emailkaaga / Email       [____________]
Telefoonka / Phone       [____________]
Baahidaada / Need        [▼ Dooro   ]
Farriin / Message        [____________]
                         [____________]
                    [Soo Dir / Send →]
```

**Right — Info:**
```
📍 Mogadishu, Somalia
📧 info@ktsnova.com  
📞 +252 XXX XXX XXX
🕐 Saacadaha: Isn-Jimce 8:00–17:00

[Map embed — Google Maps]
```

---

## 6. 📱 Mobile-First Requirements

### Breakpoints

| Xaaladda | Ballaca | Naqshadda |
|----------|---------|-----------|
| Mobile S | 320px | Single column, large touch targets |
| Mobile L | 390px | Primary target device |
| Tablet | 768px | 2-column grid |
| Desktop | 1280px+ | Full layout |

### Mobile UX Rules

- ✅ Hamburger menu → slide-in drawer (right)
- ✅ Touch targets minimum 48x48px
- ✅ Swipeable carousels for demos
- ✅ WhatsApp contact button (floating, bottom-right)
- ✅ Click-to-call phone number
- ✅ Forms auto-zoom off (`font-size: 16px` on inputs)
- ❌ Hover-only interactions (accessibility)
- ❌ Heavy images ka horeysa 3G optimization

---

## 7. ⚡ Xawliga iyo Fulinta / Performance Requirements

| Cabbirka | Heerka | Sababta |
|---------|--------|---------|
| Page Load (3G) | < 3 saniyad | Suuqa Soomaaliya |
| Lighthouse Score | > 85 | SEO + UX |
| Image Format | WebP + fallback | Cabbirka yar |
| Core Web Vitals LCP | < 2.5s | Google ranking |
| First Contentful Paint | < 1.5s | Dareemidda degdegga |
| Bundle Size (JS) | < 200KB gzip | Moobiilka |

### Optimization Strategies
- Lazy loading dhammaan sawirrada
- Critical CSS inline
- Font preloading (waxaa loo doorbidaa: subset Somali characters)
- CDN Cloudflare
- Service Worker (offline capability)

---

## 8. 🌍 Luuqadda / Bilingual Implementation

### Strategy: Somali-First

```javascript
// Language toggle component
const languages = {
  so: { label: "Af Soomaali", flag: "🇸🇴", dir: "ltr" },
  en: { label: "English",     flag: "🇬🇧", dir: "ltr" }
};

// Default: Somali (so)
// Stored in: localStorage + URL param (?lang=en)
// Toggle: Visible button, top-right navbar
```

### Content Structure

```json
{
  "hero": {
    "so": {
      "headline": "Teknoolojiya Casri ah · Mustaqbalka Dhisi",
      "sub": "KTS NOVA waxay dhisaysaa xalal dijitaal oo casri ah",
      "cta_primary": "Adeegyada Eeg",
      "cta_secondary": "Nala Xiriir"
    },
    "en": {
      "headline": "Powering Digital Innovation",
      "sub": "KTS NOVA builds modern digital solutions for Africa",
      "cta_primary": "View Services",
      "cta_secondary": "Contact Us"
    }
  }
}
```

### Typography Rules (Afsomaliga)
- Font size: `+2px` boost (readability)
- Line height: `1.8` (spacing wider)
- Bold keywords in Somali for scannability

---

## 9. 🔍 SEO Requirements

### Keywords Muhiimka / Priority Keywords

**Afsomaliga:**
- "software company Soomaaliya"
- "website development Mogadishu"
- "nidaamka maamulka dugsiga"
- "app development Somalia"

**English:**
- "software company Somalia"
- "web development Mogadishu"
- "school management system Somalia"
- "IT company East Africa"

### Technical SEO
- `hreflang="so"` + `hreflang="en"` tags
- Schema.org: Organization, Service, LocalBusiness
- Sitemap XML auto-generated
- Meta descriptions labada af
- Open Graph cards (social sharing)

---

## 10. 🛡️ Xifaalada & Amniga / Security Requirements

| Baahi | Xalka |
|-------|-------|
| SSL/HTTPS | Let's Encrypt auto-renew |
| Form protection | reCAPTCHA v3 (invisible) |
| CORS policy | Strict origin |
| Input sanitization | Server-side validation |
| Rate limiting | Contact form: 5/hour per IP |
| Content Security Policy | Strict CSP headers |

---

## 11. 🏗️ Tech Stack Talaabadaha / Recommended Stack

### Frontend
```
Framework:   Next.js 14 (App Router)
Styling:     Tailwind CSS + custom CSS variables
Animation:   Framer Motion (cursor, transitions)
Language:    TypeScript
i18n:        next-i18next (Somali + English)
Icons:       Lucide React + custom SVGs
```

### Backend / Infrastructure
```
CMS:         Sanity.io (bilingual content)
Email:       Resend API (contact form)
Hosting:     Vercel (Edge Network — closest: Nairobi)
CDN:         Cloudflare
Analytics:   Plausible (privacy-first)
```

### Why This Stack?
- ✅ Fast Edge rendering → Somalia 3G friendly
- ✅ Bilingual i18n native support
- ✅ Easy content updates (no developer needed)
- ✅ Scalable iyo qiimo jaban

---

## 12. 📅 Jadwalka Howlaha / Development Timeline

```
MARXALAD 1: Naqshadda (Asbuuc 1–2)
├── Wireframes dhammaan bogagga
├── Design system (colors, fonts, components)
├── Logo integration + custom cursor
└── Client review + approval

MARXALAD 2: Horumarinta (Asbuuc 3–5)
├── Next.js setup + routing
├── Bilingual content system
├── Homepage + animations
├── Services + Portfolio pages
└── Contact form

MARXALAD 3: Tijaabinta (Asbuuc 6)
├── Mobile testing (real devices)
├── Performance optimization
├── SEO audit
├── Cross-browser testing
└── Content review (Somali text)

MARXALAD 4: Dhamaystirka (Asbuuc 7)
├── DNS + hosting setup
├── SSL certificate
├── Analytics integration
├── Final client review
└── 🚀 LAUNCH
```

---

## 13. ✅ Shuruudaha Guusha / Success Criteria

| KPI | Bartilmaameedka | Waa sida loo cabbiraa |
|-----|-----------------|----------------------|
| Page Load Speed | < 3s on 3G | GTmetrix |
| Mobile Usability | 100/100 | Google Search Console |
| Lighthouse Score | > 85 | Chrome DevTools |
| Lead Form Submissions | > 10/month | Analytics |
| Bounce Rate | < 55% | Plausible |
| Bilingual Coverage | 100% content | Manual audit |

---

## 14. 🖼️ Naqshadda Muhiimka / Key Design Decisions

### Custom Cursor Concept

```
🎯 Motive: Brand differentiation + tech identity

Default:     ○ Circle (20px) Nova Teal border
Hover link:  ◉ Filled circle with "→" icon  
Hover CTA:   ◎ Expanded (40px) + glow pulse
Dark bg:     ○ White border version
Click:       ◎ Squish animation (scale 0.8 → 1)

Mobile:      Custom cursor DISABLED (touch device)
```

### Color Psychology (Midabada Macnaha)

| Midabka | Macnaha Afsomaliga | Xiriirka Brand |
|---------|-------------------|----------------|
| Teal #00C896 | Horumar, Nabad, Kalsoon | Innovation |
| Navy #1A2744 | Xirfad, Amniga, Xoogsanaanta | Trust |
| White #FFFFFF | Nadiifnimada, Furanaan | Clarity |

---

## 15. 📎 Xiriirka Agabka / Asset References

| Nooca | Fayl | Isticmaalka |
|-------|------|-------------|
| Logo (PNG) | `web_header-01.png` | Header, favicon, OG image |
| Brand Colors | See Section 3.1 | CSS variables |
| Company Info | KTS NOVA Profile doc | Content source |
| Contact | info@ktsnova.com | Footer + contact page |
| Domain | www.ktsnova.com | Production URL |

---

## 16. 📝 Xusuus-qorrada Dhamaadka / Final Notes

> **Afsomaliga:** Websiteka KTS NOVA waa in uu noqdaa mid ay ku faanaan karaan Soomaalida — naqshad ay aduunka ku tusi karaan, oo muujinaysa in teknoolojiyada Afrika ay soo baxayso. Luuqadda Afsomaliga ee horta imaanaysa waa xog muhiim ah oo tilmaamaysa xiriirka dhab ah ee macaamiisha.

> **English:** The KTS NOVA website should be something Somalis can proudly share globally — a statement that African tech is rising. Somali-first language is a key signal of authentic connection to the client base.

---

*Diyaariyay: Claude (Anthropic) · Codsaday: KTS NOVA Team · PRD Version 1.0 · May 2026*

---

**"Powering Digital Innovation" 🚀**
