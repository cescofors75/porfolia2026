import { HeroSection } from "@/components/hero-section";
import { PortfolioGrid } from "@/components/portfolio-grid";
import { SkillsSection } from "@/components/skills-section";
import { TestimonialSection } from "@/components/testimonial-section";
import { CTASection } from "@/components/cta-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <PortfolioGrid />
      <SkillsSection />
      <TestimonialSection />
      <CTASection />
    </>
  );
}
