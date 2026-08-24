'use client';

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
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

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50]);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="py-24 lg:py-32 px-4 relative overflow-hidden"
    >
      {/* Parallax background elements */}
      <motion.div
        className="absolute top-20 left-10 w-[300px] h-[300px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, hsl(var(--primary) / 0.08) 0%, transparent 70%)",
          filter: "blur(60px)",
          y: y1,
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, hsl(var(--secondary) / 0.08) 0%, transparent 70%)",
          filter: "blur(80px)",
          y: y2,
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
            Expertise
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            {t.skills.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            {t.skills.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 40, rotateX: -10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true, margin: "-50px" }}
                className={`group relative p-8 rounded-3xl border border-border/50 bg-card/30 backdrop-blur-sm transition-all duration-700 hover:border-primary/30 hover:bg-card/60 hover:-translate-y-2 elevation-1 hover:elevation-2 ${
                  isEven ? "lg:translate-y-0" : "lg:translate-y-8"
                }`}
              >
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/0 via-secondary/0 to-accent/0 group-hover:from-primary/5 group-hover:via-secondary/5 group-hover:to-accent/5 transition-all duration-700" />

                <div className="relative">
                  <div className="flex items-start gap-5 mb-8">
                    <motion.div
                      className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary/20 group-hover:border-primary/40 transition-all duration-500"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="w-6 h-6 text-primary" />
                    </motion.div>
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
                    {skill.items.map((item, itemIndex) => (
                      <motion.span
                        key={item}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.4,
                          delay: 0.3 + index * 0.1 + itemIndex * 0.03,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        viewport={{ once: true }}
                        className="px-4 py-2 rounded-xl border border-border/60 bg-background/50 text-sm text-foreground hover:border-primary/30 hover:bg-primary/5 hover:scale-105 transition-all duration-300 cursor-default"
                        whileHover={{ scale: 1.05 }}
                      >
                        {item}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
