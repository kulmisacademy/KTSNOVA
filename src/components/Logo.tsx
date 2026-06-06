import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  priority?: boolean;
  /** sm = navbar, md = footer, lg = hero/marketing */
  size?: "sm" | "md" | "lg";
  /** onDark = white/navy wordmark for navy headers; onLight = dark text for light sections */
  variant?: "onDark" | "onLight";
}

const sizeClasses = {
  sm: "h-8 max-h-10 w-auto min-w-[120px] sm:h-10 sm:min-w-[140px]",
  md: "h-9 w-auto min-w-[130px] sm:h-10 sm:min-w-[150px]",
  lg: "h-10 w-auto min-w-[140px] sm:h-12 sm:min-w-[170px] md:h-14 md:min-w-[200px]",
};

const sources = {
  onDark: "/images/logo-on-dark.png",
  onLight: "/images/logo-on-light.png",
} as const;

export default function Logo({
  className,
  priority = false,
  size = "sm",
  variant = "onDark",
}: LogoProps) {
  return (
    <span className={cn("inline-flex shrink-0 items-center", className)}>
      <Image
        src={sources[variant]}
        alt="KTS NOVA — Knowledge Technology Systems"
        width={400}
        height={128}
        priority={priority}
        sizes="(max-width: 640px) 140px, 200px"
        className={cn(
          "object-contain object-start select-none",
          "max-w-[min(100%,220px)]",
          sizeClasses[size]
        )}
      />
    </span>
  );
}
