"use client";

import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import ServicesSection from "@/components/home/ServicesSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import WhyUsSection from "@/components/home/WhyUsSection";
import CtaSection from "@/components/CtaSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <ProjectsSection />
      <WhyUsSection />
      <CtaSection />
    </>
  );
}
