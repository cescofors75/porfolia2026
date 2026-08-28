import Image from "next/image";
import Link from "next/link";
import { TiltCard } from "@/components/tilt-card";
import { ExternalLink, BookOpen, Lock, Sparkles, ArrowUpRight, Github, Braces, ChartNoAxesCombined, ChefHat, CloudSun, Wine, FlaskConical } from "lucide-react";
import { translations, type Language } from "@/lib/translations";

type Tier = "featured" | "development" | "portfolio";

const projectsData = [
  {
    id: 1,
    tier: "featured" as Tier,
    category: "Rust · WebAssembly · Audio DSP",
    color: "from-violet-500 to-fuchsia-500",
    accent: "violet",
    image: "/imgRaydrone/raydrone-wasm.webp",
    link: "/proyectos/raydrone",
    demoUrl: "https://wasm-neon.vercel.app/",
    githubLink: "https://github.com/cescofors75/RayDrone",
  },
  {
    id: 4,
    tier: "featured" as Tier,
    category: "IoT & R+D",
    color: "from-cyan-500 to-blue-500",
    accent: "cyan",
    image: "/gallery/024E21CF-B281-45F2-B984-8882B79763D3.webp",
    link: "/proyectos/red808",
    githubLink: "https://github.com/cescofors75/RedMaster-ESP32S3",
  },
  {
    id: 2,
    tier: "featured" as Tier,
    category: "ESP32-P4 · Embedded Audio",
    color: "from-cyan-500 to-blue-500",
    accent: "cyan",
    image: "/imgRaydrone/imagen_proyecto_Final_IA.webp",
    link: "/proyectos/aura",
    githubLink: "https://github.com/cescofors75/RayDrone",
  },
  {
    id: 3,
    tier: "development" as Tier,
    category: "FPGA · Parallel FX",
    color: "from-fuchsia-500 to-pink-500",
    accent: "fuchsia",
    noLink: true,
  },
  {
    id: 12,
    tier: "development" as Tier,
    category: "Local AI · Audio",
    color: "from-emerald-500 to-cyan-500",
    accent: "emerald",
    link: "/proyectos/openstems",
    videoId: "_5ZUFD1iu-g",
  },
  {
    id: 13,
    tier: "development" as Tier,
    category: "AI Agents · Editorial",
    color: "from-red-600 to-amber-500",
    accent: "red",
    image: "/newschyper/95f87a09-118e-41a0-ad25-1517376d5eea.webp",
    link: "/proyectos/newschyper",
  },
  {
    id: 5,
    tier: "portfolio" as Tier,
    category: "Data Analytics",
    color: "from-cyan-500 to-blue-500",
    accent: "cyan",
    link: "https://www.npmjs.com/package/@cescofors/toonjs",
    docLink: "http://toonjs.dev",
  },
  {
    id: 6,
    tier: "portfolio" as Tier,
    category: "IA & SaaS",
    color: "from-purple-500 to-pink-500",
    accent: "purple",
    link: "https://baco.cat",
  },
  {
    id: 7,
    tier: "portfolio" as Tier,
    category: "Web Development",
    color: "from-blue-500 to-cyan-500",
    accent: "blue",
    link: "https://ineditrestaurant.com",
  },
  {
    id: 8,
    tier: "portfolio" as Tier,
    category: "Web Development",
    color: "from-green-500 to-emerald-500",
    accent: "green",
    link: "https://tempspervi.com",
  },
  {
    id: 11,
    tier: "portfolio" as Tier,
    category: "Data Analytics",
    color: "from-teal-500 to-blue-500",
    accent: "teal",
  },
];

const accentColors: Record<string, string> = {
  cyan: "#06b6d4",
  blue: "#3b82f6",
  purple: "#a855f7",
  green: "#10b981",
  emerald: "#10b981",
  orange: "#f97316",
  red: "#ef4444",
  indigo: "#6366f1",
  teal: "#14b8a6",
  rose: "#f43f5e",
  violet: "#8b5cf6",
  fuchsia: "#d946ef",
  pink: "#ec4899",
};

const vectorArtwork = {
  3: { Icon: Braces, code: "FPGA / PARALLEL FX FIELD" },
  5: { Icon: Braces, code: "DATA / TOON" },
  6: { Icon: Wine, code: "AI / TASTE" },
  7: { Icon: ChefHat, code: "MENU / EXPERIENCE" },
  8: { Icon: CloudSun, code: "LOCAL / FORECAST" },
  11: { Icon: ChartNoAxesCombined, code: "SIGNAL / INSIGHT" },
} as const;

function CelestialFieldMark() {
  return (
    <svg viewBox="0 0 180 88" className="w-40 max-w-[72%] overflow-visible" fill="none" role="img" aria-label="Celestial Field parallel FX mark">
      <defs>
        <linearGradient id="celestial-flow" x1="8" y1="44" x2="172" y2="44" gradientUnits="userSpaceOnUse">
          <stop stopColor="currentColor" stopOpacity=".25" />
          <stop offset=".5" stopColor="currentColor" />
          <stop offset="1" stopColor="currentColor" stopOpacity=".5" />
        </linearGradient>
      </defs>
      {[16, 30, 44, 58, 72].map((y, index) => (
        <g key={y}>
          <path d={`M8 ${y} C30 ${y - 10 + index * 2} 42 ${y + 10 - index * 2} 64 ${y} S98 ${y - 10 + index * 2} 120 ${y} S145 44 164 44`} stroke="url(#celestial-flow)" strokeWidth={index === 2 ? 2.4 : 1.35} />
          <circle cx="65" cy={y} r="2.5" fill="currentColor" opacity={0.45 + index * 0.1} />
          <circle cx="119" cy={y} r="2.5" fill="currentColor" opacity={0.8 - index * 0.08} />
        </g>
      ))}
      <circle cx="164" cy="44" r="9" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="164" cy="44" r="3" fill="currentColor" />
      <path d="M164 26V20M164 68V62M146 44H140M188 44H182M151 31L147 27M177 57L181 61M177 31L181 27M151 57L147 61" stroke="currentColor" strokeWidth="1.2" opacity=".7" />
    </svg>
  );
}

function VectorProjectArtwork({ project }: { project: (typeof projectsData)[number] }) {
  const artwork = vectorArtwork[project.id as keyof typeof vectorArtwork];
  if (!artwork) return null;
  const { Icon, code } = artwork;
  const accent = accentColors[project.accent] || "#6366f1";

  return (
    <div
      className="relative aspect-video rounded-xl overflow-hidden border border-border/50 bg-background/80 mb-5"
      aria-hidden="true"
      style={{ color: accent }}
    >
      <div className="absolute inset-0 opacity-30" style={{ backgroundImage: `linear-gradient(${accent}22 1px, transparent 1px), linear-gradient(90deg, ${accent}22 1px, transparent 1px)`, backgroundSize: "24px 24px" }} />
      <div className="absolute -right-12 -top-12 size-40 rounded-full border opacity-25" style={{ borderColor: accent }} />
      <div className="absolute -right-5 -top-5 size-24 rounded-full border opacity-40" style={{ borderColor: accent }} />
      <div className="absolute left-5 top-5 font-mono text-[10px] tracking-[.2em] opacity-75">{code}</div>
      <div className="absolute inset-0 flex items-center justify-center">
        {project.id === 3 ? (
          <div className="transition-transform duration-700 group-hover:scale-110"><CelestialFieldMark /></div>
        ) : (
          <div className="relative flex size-20 items-center justify-center rounded-2xl border bg-background/75 backdrop-blur-sm transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3" style={{ borderColor: `${accent}66`, boxShadow: `0 0 50px ${accent}25` }}>
            <Icon size={38} strokeWidth={1.35} />
            <span className="absolute -left-8 top-1/2 h-px w-8 opacity-60" style={{ background: accent }} />
            <span className="absolute -right-8 top-1/2 h-px w-8 opacity-60" style={{ background: accent }} />
          </div>
        )}
      </div>
      <div className="absolute bottom-4 left-5 right-5 flex items-center gap-2">
        {[0.35, 0.8, 0.5, 1, 0.65].map((opacity, index) => <span key={index} className="h-1 flex-1 rounded-full" style={{ background: accent, opacity }} />)}
      </div>
    </div>
  );
}

type ProjectWithCopy = (typeof projectsData)[number] & { title: string; description: string };

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-6 flex items-center gap-2 reveal-scroll">
      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
      <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{children}</span>
    </div>
  );
}

function GridProjectCard({
  project,
  number,
  viewProjectLabel,
  viewDocsLabel,
  confidentialLabel,
  compact,
  spanTwo,
}: {
  project: ProjectWithCopy;
  number: number;
  viewProjectLabel: string;
  viewDocsLabel: string;
  confidentialLabel: string;
  compact?: boolean;
  spanTwo?: boolean;
}) {
  return (
    <div className={`group relative reveal-scroll ${spanTwo ? "lg:col-span-2" : ""}`}>
      <div
        className={`relative h-full ${compact ? "p-6" : "p-6 md:p-8"} rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:border-border hover:bg-card/60 hover:-translate-y-1 elevation-1 hover:elevation-2`}
        style={{ boxShadow: `inset 0 1px 0 0 rgba(255,255,255,0.03)` }}
      >
        <div
          className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-700`}
        />

        <div className="relative h-full flex flex-col">
          <div className="flex items-start justify-between gap-4 mb-5">
            <span className="inline-flex px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-medium">
              {project.category}
            </span>
            <span className="text-xs text-muted-foreground font-mono">
              {String(number).padStart(2, "0")}
            </span>
          </div>

          <h3 className={`${compact ? "text-lg md:text-xl" : "text-xl md:text-2xl"} font-display font-bold mb-3 group-hover:text-primary transition-colors duration-300`}>
            {project.title}
          </h3>

          {!compact && "image" in project && project.image && (
            <div className="relative aspect-video rounded-xl overflow-hidden border border-border/50 bg-black mb-5">
              <Image
                src={project.image as string}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          )}

          {!compact && !("image" in project) && !("videoId" in project) && (
            <VectorProjectArtwork project={project} />
          )}

          {!compact && "videoId" in project && project.videoId && (
            <div className="relative aspect-video rounded-xl overflow-hidden border border-border/50 bg-black mb-5">
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube-nocookie.com/embed/${project.videoId}?rel=0&modestbranding=1`}
                title={`${project.title} demo`}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          )}

          <p className={`text-muted-foreground text-sm leading-relaxed mb-6 flex-grow ${compact ? "line-clamp-3" : ""}`}>
            {project.description}
          </p>

          <div className={`flex flex-wrap items-center gap-4 ${"noLink" in project && project.noLink && !project.link ? "" : "pt-4 border-t border-border/30"}`}>
            {"noLink" in project && project.noLink && !project.link ? null : project.link ? (
              <>
                {project.link.startsWith("/") ? (
                  <Link
                    href={project.link}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all duration-300"
                    style={{ color: accentColors[project.accent] || undefined }}
                  >
                    {viewProjectLabel}
                    <ArrowUpRight size={14} />
                  </Link>
                ) : (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all duration-300"
                    style={{ color: accentColors[project.accent] || undefined }}
                  >
                    {viewProjectLabel}
                    <ExternalLink size={14} />
                  </a>
                )}
                {"docLink" in project && project.docLink && (
                  <a
                    href={project.docLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <BookOpen size={14} />
                    {viewDocsLabel}
                  </a>
                )}
              </>
            ) : (
              <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                <Lock size={14} />
                {confidentialLabel}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export function PortfolioGrid({ language }: { language: Language }) {
  const t = translations[language];
  const liveDemoLabel = { es: "Demo pública", ca: "Demo pública", en: "Public demo", de: "Öffentliche Demo", fr: "Démo publique" }[language];

  const projects: ProjectWithCopy[] = projectsData.map((project, index) => ({
    ...project,
    title: t.portfolio.projects[index].title,
    description: t.portfolio.projects[index].description,
  }));

  const featuredProjects = projects.filter((p) => p.tier === "featured");
  const developmentProjects = projects.filter((p) => p.tier === "development");
  const portfolioProjects = projects.filter((p) => p.tier === "portfolio");

  return (
    <section id="portfolio" className="py-24 lg:py-32 px-4 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-7xl mx-auto relative">
        <div className="mb-16 md:mb-20 reveal-scroll">
          <span className="inline-flex items-center gap-2 text-xs font-semibold text-primary uppercase tracking-widest mb-4">
            <Sparkles size={14} />
            Portfolio
          </span>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            {t.portfolio.title}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            {t.portfolio.subtitle}
          </p>
        </div>

        {/* Tier 1 — Principales: RayDrone, RED808, Aura */}
        <SectionLabel>{t.portfolio.labelFeatured}</SectionLabel>
        <div className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {featuredProjects.map((project, index) => (
              <div key={project.id} className={`reveal-scroll ${index === 2 ? "lg:col-span-2" : ""}`}>
                <TiltCard glowColor={accentColors[project.accent]}>
                  <div className="group relative h-full rounded-3xl border border-border/50 bg-card/30 backdrop-blur-sm overflow-hidden transition-colors duration-500 hover:border-border/80 elevation-2">
                    {/* Gradient orb */}
                    <div
                      className={`absolute -bottom-32 -right-32 w-96 h-96 bg-gradient-to-br ${project.color} opacity-10 group-hover:opacity-25 blur-3xl transition-opacity duration-700 rounded-full pointer-events-none`}
                    />

                    {/* Image banner */}
                    <Link
                      href={project.link as string}
                      className="relative block aspect-[16/9] overflow-hidden border-b border-border/30"
                    >
                      <Image
                        src={project.image as string}
                        alt={project.title}
                        fill
                        priority={index === 0}
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
                      <span className="absolute top-4 left-4 inline-flex px-4 py-2 rounded-full border border-primary/20 bg-background/70 backdrop-blur-sm text-primary text-xs font-semibold tracking-widest uppercase">
                        {project.category}
                      </span>
                      <span className="absolute top-4 right-4 font-display text-4xl font-bold text-foreground/50 select-none">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </Link>

                    {/* Content */}
                    <div className="relative p-8">
                      <h3 className="text-3xl md:text-4xl font-display font-bold mb-4 text-foreground tracking-tight">
                        {project.title}
                      </h3>

                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap items-center gap-5">
                        <Link
                          href={project.link as string}
                          className="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all duration-300"
                          style={{ color: accentColors[project.accent] || undefined }}
                        >
                          {t.portfolio.viewProject}
                          <ArrowUpRight size={16} />
                        </Link>
                        <a
                          href={project.githubLink as string}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <Github size={15} />
                          GitHub
                        </a>
                        {"demoUrl" in project && project.demoUrl && (
                          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary transition-colors">
                            <ExternalLink size={15} /> {liveDemoLabel}
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </div>
            ))}
          </div>
        </div>

        {/* Lab notebook — proof of technical depth */}
        <Link
          href="/blog"
          className="group mb-16 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm px-6 py-5 transition-all duration-300 hover:border-primary/40 hover:bg-card/50 reveal-scroll"
        >
          <div className="flex items-center gap-4">
            <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/5 text-primary">
              <FlaskConical size={18} />
            </span>
            <div>
              <p className="font-display font-bold text-foreground">{t.portfolio.labTitle}</p>
              <p className="text-sm text-muted-foreground">{t.portfolio.labSubtitle}</p>
            </div>
          </div>
          <span className="inline-flex items-center gap-2 whitespace-nowrap text-sm font-semibold text-primary transition-all duration-300 group-hover:gap-3">
            {t.portfolio.labLink}
            <ArrowUpRight size={16} />
          </span>
        </Link>

        {/* Tier 2 — En desarrollo */}
        <SectionLabel>{t.portfolio.labelDevelopment}</SectionLabel>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {developmentProjects.map((project, index) => (
            <GridProjectCard
              key={project.id}
              project={project}
              number={index + featuredProjects.length + 1}
              viewProjectLabel={t.portfolio.viewProject}
              viewDocsLabel={t.portfolio.viewDocs}
              confidentialLabel={t.portfolio.confidential}
            />
          ))}
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-16" />

        {/* Tier 3 — Portfolio profesional */}
        <SectionLabel>{t.portfolio.labelPortfolio}</SectionLabel>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {portfolioProjects.map((project, index) => (
            <GridProjectCard
              key={project.id}
              project={project}
              number={index + featuredProjects.length + developmentProjects.length + 1}
              viewProjectLabel={t.portfolio.viewProject}
              viewDocsLabel={t.portfolio.viewDocs}
              confidentialLabel={t.portfolio.confidential}
              compact
            />
          ))}
        </div>
      </div>
    </section>
  );
}
