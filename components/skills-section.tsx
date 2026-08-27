'use client';

import { useRef } from "react";
import { Code2, Database, Cloud, Brain, Sparkles } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

const skills = [
  {
    category: "Frontend & Backend",
    icon: Code2,
    items: ["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "C#"],
  },
  {
    category: "Bases de Datos",
    icon: Database,
    items: ["SQL Server", "MySQL", "PostgreSQL", "Oracle", "Supabase"],
  },
  {
    category: "Cloud & DevOps",
    icon: Cloud,
    items: ["Azure", "Azure DevOps", "CI/CD", "Docker", "Power BI"],
  },
  {
    category: "IA & APIs",
    icon: Brain,
    items: ["OpenAI", "Anthropic", "Mistral", "Cohere", "Stability.ai", "RAG"],
  },
];

export function SkillsSection() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="py-24 lg:py-32 px-4 relative overflow-hidden"
    >
      {/* Parallax background elements */}
      <div
        className="absolute top-20 left-10 w-[300px] h-[300px] rounded-full pointer-events-none animate-hero-blob-1"
        style={{
          background: "radial-gradient(circle, hsl(var(--primary) / 0.08) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute bottom-20 right-10 w-[400px] h-[400px] rounded-full pointer-events-none animate-hero-blob-2"
        style={{
          background: "radial-gradient(circle, hsl(var(--secondary) / 0.08) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="max-w-7xl mx-auto relative">
        <div className="mb-16 md:mb-20 reveal-scroll">
          <span className="inline-flex items-center gap-2 text-xs font-semibold text-primary uppercase tracking-widest mb-4">
            <Sparkles size={14} />
            Expertise
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            {t.skills.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            {t.skills.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            const isEven = index % 2 === 0;
            return (
              <div
                key={skill.category}
                className={`group relative p-8 rounded-3xl border border-border/50 bg-card/30 backdrop-blur-sm transition-all duration-700 hover:border-primary/30 hover:bg-card/60 hover:-translate-y-2 elevation-1 hover:elevation-2 reveal-scroll ${
                  isEven ? "lg:translate-y-0" : "lg:translate-y-8"
                }`}
              >
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/0 via-secondary/0 to-accent/0 group-hover:from-primary/5 group-hover:via-secondary/5 group-hover:to-accent/5 transition-all duration-700" />

                <div className="relative">
                  <div className="flex items-start gap-5 mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary/20 group-hover:border-primary/40 group-hover:rotate-[360deg] transition-all duration-700">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-display font-bold mb-2">
                        {skill.category}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {index === 0 && t.skills.categories.frontend}
                        {index === 1 && t.skills.categories.database}
                        {index === 2 && t.skills.categories.cloud}
                        {index === 3 && t.skills.categories.ai}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2.5">
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className="px-4 py-2 rounded-xl border border-border/60 bg-background/50 text-sm text-foreground hover:border-primary/30 hover:bg-primary/5 hover:scale-105 transition-all duration-300 cursor-default"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
