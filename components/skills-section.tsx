'use client';

import { motion } from "framer-motion";
import { Code2, Palette, Zap, Brain } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

const skills = [
  {
    category: "Frontend & Backend",
    icon: Code2,
    items: ["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "C#"],
  },
  {
    category: "Bases de Datos",
    icon: Palette,
    items: ["SQL Server", "MySQL", "PostgreSQL", "Oracle", "Supabase"],
  },
  {
    category: "Cloud & DevOps",
    icon: Zap,
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
  
  return (
    <section id="skills" className="py-20 px-4 bg-card/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            {t.skills.title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t.skills.subtitle}
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, staggerChildren: 0.1 }}
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-6 border border-border rounded-xl hover:border-primary/50 transition-all duration-300 glass hover:glass-dark"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold">{skill.category}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <motion.span
                      key={item}
                      className="px-3 py-1 bg-primary/20 text-primary text-xs rounded-full hover:bg-primary/30 transition-colors cursor-default"
                      whileHover={{ scale: 1.05 }}
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
