'use client';

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from "framer-motion";
import { ExternalLink, BookOpen, Lock, Sparkles, ArrowUpRight, Github } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

const projectsData = [
  {
    id: 1,
    category: "IoT & R+D",
    color: "from-rose-500 to-orange-500",
    accent: "rose",
    featured: true,
    image: "/imgRed808/IMG_7425.jpeg",
    link: "/proyectos/red808",
    githubLink: "https://github.com/cescofors75/RedMaster-ESP32S3",
  },
  {
    id: 2,
    category: "Audio DSP & IoT",
    color: "from-violet-500 to-fuchsia-500",
    accent: "violet",
    featured: true,
    image: "/imgRaydrone/metafora_de_La_idea_una_camaraReflex_plato.jpeg",
    link: "/proyectos/raydrone",
    githubLink: "https://github.com/cescofors75/RayDrone",
  },
  {
    id: 3,
    category: "IA & Audio",
    color: "from-fuchsia-500 to-pink-500",
    accent: "fuchsia",
    noLink: true,
  },
  {
    id: 4,
    category: "IA Generativa",
    color: "from-cyan-500 to-blue-500",
    accent: "cyan",
    noLink: true,
  },
  {
    id: 5,
    category: "Data Analytics",
    color: "from-cyan-500 to-blue-500",
    accent: "cyan",
    link: "https://www.npmjs.com/package/@cescofors/toonjs",
    docLink: "http://toonjs.dev",
  },
  {
    id: 6,
    category: "IA & SaaS",
    color: "from-purple-500 to-pink-500",
    accent: "purple",
    link: "https://baco.cat",
  },
  {
    id: 7,
    category: "Web Development",
    color: "from-blue-500 to-cyan-500",
    accent: "blue",
    link: "https://ineditrestaurant.com",
  },
  {
    id: 8,
    category: "Web Development",
    color: "from-green-500 to-emerald-500",
    accent: "green",
    link: "https://tempspervi.com",
  },
  {
    id: 9,
    category: "Full Stack & DevOps",
    color: "from-orange-500 to-red-500",
    accent: "orange",
    link: "https://visittoo.com",
  },
  {
    id: 10,
    category: "IoT & R+D",
    color: "from-indigo-500 to-purple-500",
    accent: "indigo",
  },
  {
    id: 11,
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

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

function TiltCard({ children, className = "", glowColor = "#6366f1" }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 200, mass: 0.5 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), springConfig);

  const spotX = useTransform(x, [-0.5, 0.5], [0, 100]);
  const spotY = useTransform(y, [-0.5, 0.5], [0, 100]);
  const spotlight = useMotionTemplate`radial-gradient(500px circle at ${spotX}% ${spotY}%, ${glowColor}26, transparent 60%)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) / rect.width);
    y.set((e.clientY - centerY) / rect.height);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={`relative ${className}`}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="absolute inset-0 rounded-3xl pointer-events-none z-0"
        style={{ background: spotlight }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </motion.div>
  );
}

export function PortfolioGrid() {
  const { t } = useLanguage();

  const projects = projectsData.map((project, index) => ({
    ...project,
    title: t.portfolio.projects[index].title,
    description: t.portfolio.projects[index].description,
  }));

  const featuredProjects = projects.filter((p) => p.featured);
  const gridProjects = projects.filter((p) => !p.featured);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section id="portfolio" className="py-24 lg:py-32 px-4 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          className="mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
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
        </motion.div>

        {/* Featured Projects: RED808 & RayDrone */}
        <div className="mb-16">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {featuredProjects.map((project, index) => (
              <motion.div key={project.id} variants={itemVariants}>
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
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-16" />

        {/* Other Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {gridProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className={`group relative ${
                index === 0 ? "lg:col-span-2" : ""
              }`}
            >
              <div
                className="relative h-full p-6 md:p-8 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:border-border hover:bg-card/60 hover:-translate-y-1 elevation-1 hover:elevation-2"
                style={{
                  boxShadow: `inset 0 1px 0 0 rgba(255,255,255,0.03)`,
                }}
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
                      {String(index + featuredProjects.length + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-display font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                    {project.description}
                  </p>

                  <div className={`flex flex-wrap items-center gap-4 ${"noLink" in project && project.noLink && !project.link ? "" : "pt-4 border-t border-border/30"}`}>
                    {"noLink" in project && project.noLink && !project.link ? null : project.link ? (
                      <>
                        {project.link.startsWith("/") ? (
                          <Link
                            href={project.link}
                            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all duration-300"
                            style={{
                              color: accentColors[project.accent] || undefined,
                            }}
                          >
                            {t.portfolio.viewProject}
                            <ArrowUpRight size={14} />
                          </Link>
                        ) : (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all duration-300"
                            style={{
                              color: accentColors[project.accent] || undefined,
                            }}
                          >
                            {t.portfolio.viewProject}
                            <ExternalLink size={14} />
                          </a>
                        )}
                        {project.docLink && (
                          <a
                            href={project.docLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                          >
                            <BookOpen size={14} />
                            {t.portfolio.viewDocs}
                          </a>
                        )}
                      </>
                    ) : (
                      <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                        <Lock size={14} />
                        {t.portfolio.confidential}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
