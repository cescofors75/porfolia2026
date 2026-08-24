'use client';

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Palette, Check } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

const themes = [
  {
    id: 'indigo-blue',
    name: 'Corporate Indigo',
    colors: {
      primary: '239 84% 67%',
      secondary: '217 91% 60%',
      accent: '213 94% 68%',
    },
    preview: ['#818CF8', '#3B82F6', '#60A5FA'],
  },
  {
    id: 'violet-slate',
    name: 'Violet Slate',
    colors: {
      primary: '262 83% 58%',
      secondary: '270 50% 50%',
      accent: '292 84% 61%',
    },
    preview: ['#8B5CF6', '#7C3AED', '#C026D3'],
  },
  {
    id: 'ocean-cyan',
    name: 'Ocean Cyan',
    colors: {
      primary: '199 89% 48%',
      secondary: '217 91% 60%',
      accent: '192 91% 36%',
    },
    preview: ['#06B6D4', '#3B82F6', '#0891B2'],
  },
  {
    id: 'emerald-forest',
    name: 'Emerald Tech',
    colors: {
      primary: '160 84% 39%',
      secondary: '173 80% 40%',
      accent: '192 91% 36%',
    },
    preview: ['#10B981', '#14B8A6', '#0891B2'],
  },
  {
    id: 'amber-gold',
    name: 'Amber Gold',
    colors: {
      primary: '43 96% 56%',
      secondary: '32 95% 44%',
      accent: '24 95% 53%',
    },
    preview: ['#FBBF24', '#F59E0B', '#F97316'],
  },
  {
    id: 'rose-midnight',
    name: 'Rose Midnight',
    colors: {
      primary: '346 77% 50%',
      secondary: '0 72% 51%',
      accent: '316 73% 52%',
    },
    preview: ['#E11D48', '#DC2626', '#DB2777'],
  },
];

export function ThemeSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState('indigo-blue');
  const { t } = useLanguage();

  useEffect(() => {
    let savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme === 'emerald-teal') {
      localStorage.removeItem('portfolio-theme');
      savedTheme = null;
    }
    setStyle(savedTheme || 'indigo-blue');
    setCurrentTheme(savedTheme || 'indigo-blue');
  }, []);

  const setStyle = (themeId: string) => {
    const theme = themes.find(t => t.id === themeId);
    if (!theme) return;

    const root = document.documentElement;
    root.style.setProperty('--primary', theme.colors.primary);
    root.style.setProperty('--secondary', theme.colors.secondary);
    root.style.setProperty('--accent', theme.colors.accent);
  };

  const applyTheme = (themeId: string) => {
    setStyle(themeId);
    localStorage.setItem('portfolio-theme', themeId);
    setCurrentTheme(themeId);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Theme Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 rounded-full border border-border/60 bg-card/80 backdrop-blur-xl text-foreground shadow-lg hover:border-primary/30 hover:bg-card transition-all duration-300 flex items-center justify-center"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        aria-label={t.theme.title}
        aria-expanded={isOpen}
        aria-controls="theme-panel"
      >
        <Palette size={20} />
      </motion.button>

      {/* Theme Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="theme-panel"
            role="dialog"
            aria-labelledby="theme-title"
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.95 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute bottom-16 right-0 w-72 p-4 rounded-2xl border border-border/60 bg-card/95 backdrop-blur-xl shadow-2xl elevation-3"
          >
            <h3 id="theme-title" className="text-sm font-semibold uppercase tracking-wider mb-4">
              {t.theme.title}
            </h3>
            
            <div className="grid grid-cols-1 gap-2 max-h-80 overflow-y-auto">
              {themes.map((theme) => (
                <motion.button
                  key={theme.id}
                  onClick={() => {
                    applyTheme(theme.id);
                    setIsOpen(false);
                  }}
                  className={`p-3 rounded-xl border transition-all duration-300 flex items-center gap-3 ${
                    currentTheme === theme.id
                      ? 'border-primary bg-primary/10'
                      : 'border-border/50 hover:border-primary/30 hover:bg-card/60'
                  }`}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  aria-label={`${t.theme.select} ${theme.name}`}
                  aria-current={currentTheme === theme.id}
                >
                  <div className="flex gap-1 shrink-0">
                    {theme.preview.map((color, i) => (
                      <div
                        key={i}
                        className="w-5 h-8 rounded-md"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-medium text-left flex-grow">{theme.name}</span>
                  {currentTheme === theme.id && (
                    <Check size={16} className="text-primary shrink-0" />
                  )}
                </motion.button>
              ))}
            </div>

            <div className="mt-3 pt-3 border-t border-border/50">
              <p className="text-xs text-muted-foreground text-center">
                {t.theme.saved}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
