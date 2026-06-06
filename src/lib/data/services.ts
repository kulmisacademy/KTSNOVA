import type { ProjectId } from "./projects";

export type ServiceKey =
  | "software"
  | "web"
  | "mobile"
  | "ecommerce"
  | "ai"
  | "cloud";

export interface ServiceMeta {
  key: ServiceKey;
  relatedProjects: ProjectId[];
}

export const SERVICES: ServiceMeta[] = [
  {
    key: "software",
    relatedProjects: ["sms", "pos", "hms", "payroll", "crm", "inventory"],
  },
  {
    key: "web",
    relatedProjects: ["ecommerce", "corporate", "marketplace", "ngo", "govportal"],
  },
  {
    key: "mobile",
    relatedProjects: ["delivery", "banking", "taxi", "foodorder", "remittance"],
  },
  {
    key: "ecommerce",
    relatedProjects: ["ecommerce", "marketplace", "pos", "foodorder"],
  },
  {
    key: "ai",
    relatedProjects: ["chatbot", "analytics", "automation"],
  },
  {
    key: "cloud",
    relatedProjects: ["sms", "hms", "university", "logistics"],
  },
];

export const SERVICE_KEYS = SERVICES.map((s) => s.key);
