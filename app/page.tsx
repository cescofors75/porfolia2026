import { HeroSection } from "@/components/hero-section";
import { MarqueeStrip } from "@/components/marquee-strip";
import { PortfolioGrid } from "@/components/portfolio-grid";
import { SkillsSection } from "@/components/skills-section";
import { TestimonialSection } from "@/components/testimonial-section";
import { CTASection } from "@/components/cta-section";
import { DaisyPartnerSection } from "@/components/daisy-partner-section";
import { RayDroneSound } from "@/components/raydrone-sound";
import { OnOffFestivalSection } from "@/components/onoff-festival-section";
import { getLanguage } from "@/lib/language-server";

export default async function Home() {
  const language = await getLanguage();

  return (
    <>
      <HeroSection language={language} />
      <MarqueeStrip />
      <PortfolioGrid language={language} />
      <DaisyPartnerSection language={language} />
      <OnOffFestivalSection language={language} />
      <SkillsSection language={language} />
      <TestimonialSection language={language} />
      <CTASection language={language} />
      <RayDroneSound language={language} />
    </>
  );
}
