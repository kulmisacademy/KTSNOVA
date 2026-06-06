export type ProjectCategory = "software" | "web" | "mobile" | "ai" | "design";

export type ProjectId =
  | "sms"
  | "pos"
  | "hms"
  | "pharmacy"
  | "clinic"
  | "payroll"
  | "warehouse"
  | "crm"
  | "lms"
  | "university"
  | "restaurant"
  | "hotel"
  | "inventory"
  | "logistics"
  | "ecommerce"
  | "marketplace"
  | "realestate"
  | "ngo"
  | "govportal"
  | "cms"
  | "event"
  | "corporate"
  | "portfolio-web"
  | "delivery"
  | "banking"
  | "taxi"
  | "mosque"
  | "fitness"
  | "salon"
  | "foodorder"
  | "remittance"
  | "chatbot"
  | "analytics"
  | "automation";

export interface ProjectMeta {
  id: ProjectId;
  category: ProjectCategory;
  color: string;
  featureCount: number;
  tags: string[];
}

export type FilterKey = "all" | ProjectCategory;

export const FILTER_KEYS: FilterKey[] = [
  "all",
  "software",
  "web",
  "mobile",
  "ai",
  "design",
];

export { PROJECT_CATALOG as PROJECTS, FEATURED_PROJECT_COUNT } from "./projects-catalog";

import { PROJECT_CATALOG } from "./projects-catalog";

export const PROJECT_IDS = PROJECT_CATALOG.map((p) => p.id);

export function getProjectsByCategory(category: FilterKey): ProjectMeta[] {
  if (category === "all") return PROJECT_CATALOG;
  return PROJECT_CATALOG.filter((p) => p.category === category);
}

export function getFeaturedProjects(count = 8): ProjectMeta[] {
  return PROJECT_CATALOG.slice(0, count);
}
