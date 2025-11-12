'use client';

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

export function HeroSection() {
  const { t } = useLanguage();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      {/* Animated Background - Decorative only, hidden from screen readers */}
            {/* Fondo decorativo con orbs animados */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary opacity-10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-secondary opacity-10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-700" />
      </div>

      <motion.div
        className="text-center max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-block px-4 py-2 bg-primary/20 border border-primary/30 rounded-full text-sm font-medium text-primary">
            {t.hero.badge}
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold mb-6 gradient-text"
        >
          {t.hero.title}
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
        >
          {t.hero.description}
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <motion.a
            href="#portfolio"
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity text-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t.hero.btnProjects}
          </motion.a>
          <motion.a
            href="mailto:cescofors75@gmail.com"
            className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/20 transition-colors text-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t.hero.btnContact}
          </motion.a>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-8 text-center"
        >
          <div>
            <div className="text-3xl font-bold gradient-text">25+</div>
            <div className="text-sm text-muted-foreground">{t.hero.stat1}</div>
          </div>
          <div>
            <div className="text-3xl font-bold gradient-text">100+</div>
            <div className="text-sm text-muted-foreground">{t.hero.stat2}</div>
          </div>
          <div>
            <div className="text-3xl font-bold gradient-text">IA</div>
            <div className="text-sm text-muted-foreground">{t.hero.stat3}</div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="text-muted-foreground" size={24} />
      </motion.div>
    </section>
  );
}
