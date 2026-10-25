import { homeSEO, languageAlternates, languageUrl, ogLocale } from "@/lib/seo";
import { PluginCard } from "@/components/plugins";
import { HeroSection } from "@/components/hero-section";
import { MarqueeStrip } from "@/components/marquee-strip";
import { PortfolioGrid } from "@/components/portfolio-grid";
import { SkillsSection } from "@/components/skills-section";
import { TestimonialSection } from "@/components/testimonial-section";
import { CTASection } from "@/components/cta-section";
import { DaisyPartnerSection } from "@/components/daisy-partner-section";
import { OnOffFestivalSection } from "@/components/onoff-festival-section";
import { getLanguage } from "@/lib/language-server";
import { ProjectUpdates } from "@/components/project-updates";

export async function generateMetadata() {
  const language = await getLanguage();
  const [title, description] = homeSEO[language];
  const images = [{ url: "/imgRaydrone/raydrone-wasm.webp", alt: "RayDrone · Rust / WebAssembly" }];
  return { title, description, alternates: languageAlternates("/", language),
    openGraph: { title, description, url: languageUrl("/", language), locale: ogLocale[language], images },
    twitter: { card: "summary_large_image" as const, title, description, images } };
}

export default async function Home() {
  const language = await getLanguage();

  return (
    <>
      <HeroSection language={language} />
      <MarqueeStrip />
      <div className="max-w-7xl mx-auto px-4"><ProjectUpdates language={language} /></div>
      <div className="max-w-7xl mx-auto px-4"><PluginCard language={language} /></div>
      <PortfolioGrid language={language} />
      <DaisyPartnerSection language={language} />
      <OnOffFestivalSection language={language} />
      <SkillsSection language={language} />
      <TestimonialSection language={language} />
      <CTASection language={language} />
    </>
  );
}
