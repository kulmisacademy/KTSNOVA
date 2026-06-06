"use client";

import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type BrandIconVariant = "hero" | "card" | "service" | "inline";

interface BrandIconProps {
  icon: LucideIcon;
  variant?: BrandIconVariant;
  className?: string;
}

const config: Record<
  BrandIconVariant,
  { shell: string; icon: number; glow?: string; dot: string }
> = {
  hero: {
    shell: "h-[88px] w-[88px] rounded-[22px]",
    icon: 40,
    glow: "h-[104px] w-[104px]",
    dot: "h-3.5 w-3.5 -top-1.5 -end-1.5",
  },
  card: {
    shell: "h-[72px] w-[72px] rounded-[18px]",
    icon: 34,
    glow: "h-[86px] w-[86px]",
    dot: "h-3 w-3 -top-1 -end-1",
  },
  service: {
    shell: "h-14 w-14 rounded-2xl",
    icon: 26,
    glow: "h-[68px] w-[68px]",
    dot: "h-2.5 w-2.5 -top-0.5 -end-0.5",
  },
  inline: {
    shell: "h-9 w-9 rounded-xl",
    icon: 17,
    dot: "h-2 w-2 -top-0.5 -end-0.5",
  },
};

/** KTS NOVA branded icon — teal gradient shell, white glyph, gold accent dot */
export default function BrandIcon({ icon: Icon, variant = "card", className }: BrandIconProps) {
  const { shell, icon, glow, dot } = config[variant];

  return (
    <div className={cn("relative inline-flex shrink-0 items-center justify-center", className)}>
      {glow && (
        <div
          className={cn(
            "absolute rounded-[28%] bg-nova-teal/20 blur-md",
            glow
          )}
          aria-hidden
        />
      )}

      <div
        className={cn(
          "relative flex items-center justify-center",
          "bg-gradient-to-br from-nova-teal via-[#00a67e] to-nova-navy",
          "shadow-lg shadow-nova-teal/30 ring-1 ring-white/30",
          shell
        )}
      >
        <div
          className="absolute inset-0 rounded-[inherit] bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.35),transparent_55%)]"
          aria-hidden
        />
        <div
          className="absolute inset-[3px] rounded-[inherit] border border-white/15 bg-white/5"
          aria-hidden
        />

        <Icon
          size={icon}
          strokeWidth={2}
          className="relative z-10 text-white drop-shadow-[0_1px_2px_rgba(26,39,68,0.35)]"
        />

        <span
          className={cn(
            "absolute z-20 rounded-full bg-nova-gold shadow-sm ring-2 ring-white/90",
            dot
          )}
          aria-hidden
        />
      </div>
    </div>
  );
}
