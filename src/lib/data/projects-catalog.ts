import type { ProjectCategory, ProjectId } from "./projects";

export interface ProjectCatalogEntry {
  id: ProjectId;
  category: ProjectCategory;
  color: string;
  featureCount: number;
  tags: string[];
}

const colors = [
  "from-blue-500/30 to-blue-600/10",
  "from-nova-teal/30 to-nova-teal/10",
  "from-nova-gold/30 to-nova-gold/10",
  "from-rose-500/30 to-rose-600/10",
  "from-violet-500/30 to-violet-600/10",
  "from-cyan-500/30 to-cyan-600/10",
  "from-indigo-500/30 to-indigo-600/10",
  "from-emerald-500/30 to-emerald-600/10",
  "from-orange-500/30 to-orange-600/10",
  "from-fuchsia-500/30 to-fuchsia-600/10",
];

/** All 34 KTS NOVA portfolio projects */
export const PROJECT_CATALOG: ProjectCatalogEntry[] = [
  { id: "sms", category: "software", color: colors[0], featureCount: 12, tags: ["Software", "Education"] },
  { id: "pos", category: "software", color: colors[1], featureCount: 15, tags: ["Software", "Retail"] },
  { id: "hms", category: "software", color: colors[3], featureCount: 18, tags: ["Software", "Healthcare"] },
  { id: "pharmacy", category: "software", color: colors[7], featureCount: 14, tags: ["Software", "Pharmacy"] },
  { id: "clinic", category: "software", color: colors[3], featureCount: 11, tags: ["Software", "Clinic"] },
  { id: "payroll", category: "software", color: colors[4], featureCount: 13, tags: ["Software", "HR"] },
  { id: "warehouse", category: "software", color: colors[8], featureCount: 16, tags: ["Software", "Logistics"] },
  { id: "crm", category: "software", color: colors[5], featureCount: 10, tags: ["Software", "CRM"] },
  { id: "lms", category: "software", color: colors[0], featureCount: 14, tags: ["Software", "LMS"] },
  { id: "university", category: "software", color: colors[0], featureCount: 20, tags: ["Software", "University"] },
  { id: "restaurant", category: "software", color: colors[8], featureCount: 12, tags: ["Software", "Restaurant"] },
  { id: "hotel", category: "software", color: colors[2], featureCount: 17, tags: ["Software", "Hospitality"] },
  { id: "inventory", category: "software", color: colors[1], featureCount: 11, tags: ["Software", "Inventory"] },
  { id: "logistics", category: "software", color: colors[5], featureCount: 15, tags: ["Software", "Fleet"] },
  { id: "ecommerce", category: "web", color: colors[2], featureCount: 10, tags: ["Web", "Ecommerce"] },
  { id: "marketplace", category: "web", color: colors[2], featureCount: 14, tags: ["Web", "Marketplace"] },
  { id: "realestate", category: "web", color: colors[6], featureCount: 9, tags: ["Web", "Real Estate"] },
  { id: "ngo", category: "web", color: colors[7], featureCount: 8, tags: ["Web", "NGO"] },
  { id: "govportal", category: "web", color: colors[6], featureCount: 16, tags: ["Web", "Government"] },
  { id: "cms", category: "web", color: colors[4], featureCount: 7, tags: ["Web", "CMS"] },
  { id: "event", category: "web", color: colors[9], featureCount: 9, tags: ["Web", "Events"] },
  { id: "corporate", category: "design", color: colors[6], featureCount: 6, tags: ["Design", "Corporate"] },
  { id: "portfolio-web", category: "design", color: colors[9], featureCount: 5, tags: ["Design", "Portfolio"] },
  { id: "delivery", category: "mobile", color: colors[5], featureCount: 11, tags: ["Mobile", "Delivery"] },
  { id: "banking", category: "mobile", color: colors[1], featureCount: 13, tags: ["Mobile", "Fintech"] },
  { id: "taxi", category: "mobile", color: colors[8], featureCount: 12, tags: ["Mobile", "Transport"] },
  { id: "mosque", category: "mobile", color: colors[7], featureCount: 8, tags: ["Mobile", "Community"] },
  { id: "fitness", category: "mobile", color: colors[3], featureCount: 9, tags: ["Mobile", "Fitness"] },
  { id: "salon", category: "mobile", color: colors[9], featureCount: 7, tags: ["Mobile", "Booking"] },
  { id: "foodorder", category: "mobile", color: colors[8], featureCount: 10, tags: ["Mobile", "Food"] },
  { id: "remittance", category: "mobile", color: colors[1], featureCount: 11, tags: ["Mobile", "Remittance"] },
  { id: "chatbot", category: "ai", color: colors[4], featureCount: 8, tags: ["AI", "Chatbot"] },
  { id: "analytics", category: "ai", color: colors[5], featureCount: 12, tags: ["AI", "Analytics"] },
  { id: "automation", category: "ai", color: colors[4], featureCount: 9, tags: ["AI", "Automation"] },
];

export const FEATURED_PROJECT_COUNT = 8;
