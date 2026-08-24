import { HeroSection } from "@/components/hero-section";
import { MarqueeStrip } from "@/components/marquee-strip";
import { PortfolioGrid } from "@/components/portfolio-grid";
import { SkillsSection } from "@/components/skills-section";
import { TestimonialSection } from "@/components/testimonial-section";
import { CTASection } from "@/components/cta-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <MarqueeStrip />
      <PortfolioGrid />
      <SkillsSection />
      <TestimonialSection />
      <CTASection />
    </>
  );
}
