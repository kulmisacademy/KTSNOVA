"use client";

import {
  Code2,
  Globe,
  Smartphone,
  ShoppingCart,
  Bot,
  Cloud,
  type LucideIcon,
} from "lucide-react";
import type { ServiceKey } from "./services";

export const SERVICE_ICONS: Record<ServiceKey, LucideIcon> = {
  software: Code2,
  web: Globe,
  mobile: Smartphone,
  ecommerce: ShoppingCart,
  ai: Bot,
  cloud: Cloud,
};
