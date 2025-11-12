'use client';

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Palette, Check } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

const themes = [
  {
    id: 'blue-purple',
    name: 'Blue Professional',
    colors: {
      primary: '217 91% 60%',
      secondary: '262 83% 58%',
      accent: '199 89% 48%',
    },
    preview: ['#4A9EFF', '#A855F7', '#06B6D4'],
  },
  {
    id: 'emerald-teal',
    name: 'Emerald Tech',
    colors: {
      primary: '160 84% 39%',
      secondary: '173 80% 40%',
      accent: '192 91% 36%',
    },
    preview: ['#10B981', '#14B8A6', '#0891B2'],
  },
  {
    id: 'orange-red',
    name: 'Energy Burst',
    colors: {
      primary: '24 95% 53%',
      secondary: '0 84% 60%',
      accent: '43 96% 56%',
    },
    preview: ['#F97316', '#EF4444', '#FBBF24'],
  },
  {
    id: 'violet-pink',
    name: 'Creative Purple',
    colors: {
      primary: '262 83% 58%',
      secondary: '292 84% 61%',
      accent: '316 73% 52%',
    },
    preview: ['#A855F7', '#C026D3', '#DB2777'],
  },
  {
    id: 'cyan-blue',
    name: 'Ocean Deep',
    colors: {
      primary: '199 89% 48%',
      secondary: '217 91% 60%',
      accent: '192 91% 36%',
    },
    preview: ['#06B6D4', '#3B82F6', '#0891B2'],
  },
  {
    id: 'lime-green',
    name: 'Fresh Nature',
    colors: {
      primary: '84 81% 44%',
      secondary: '142 71% 45%',
      accent: '160 84% 39%',
    },
    preview: ['#84CC16', '#10B981', '#059669'],
  },
  {
    id: 'rose-red',
    name: 'Bold Passion',
    colors: {
      primary: '346 77% 50%',
      secondary: '0 72% 51%',
      accent: '316 73% 52%',
    },
    preview: ['#E11D48', '#DC2626', '#DB2777'],
  },
  {
    id: 'amber-yellow',
    name: 'Golden Sun',
    colors: {
      primary: '43 96% 56%',
      secondary: '32 95% 44%',
      accent: '24 95% 53%',
    },
    preview: ['#FBBF24', '#F59E0B', '#F97316'],
  },
  {
    id: 'indigo-blue',
    name: 'Corporate Blue',
    colors: {
      primary: '239 84% 67%',
      secondary: '217 91% 60%',
      accent: '213 94% 68%',
    },
    preview: ['#818CF8', '#3B82F6', '#60A5FA'],
  },
  {
    id: 'slate-gray',
    name: 'Modern Minimal',
    colors: {
      primary: '215 20% 65%',
      secondary: '215 16% 47%',
      accent: '217 19% 27%',
    },
    preview: ['#94A3B8', '#64748B', '#334155'],
  },
];

export function ThemeSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState('emerald-teal');
  const { t } = useLanguage();

  useEffect(() => {
    // Cargar tema guardado o aplicar tema por defecto
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme) {
      setCurrentTheme(savedTheme);
      applyTheme(savedTheme);
    } else {
      // Aplicar tema por defecto: Emerald Tech
      applyTheme('emerald-teal');
    }
  }, []);

  const applyTheme = (themeId: string) => {
    const theme = themes.find(t => t.id === themeId);
    if (!theme) return;

    const root = document.documentElement;
    root.style.setProperty('--primary', theme.colors.primary);
    root.style.setProperty('--secondary', theme.colors.secondary);
    root.style.setProperty('--accent', theme.colors.accent);

    localStorage.setItem('portfolio-theme', themeId);
    setCurrentTheme(themeId);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Theme Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg hover:opacity-90 transition-opacity flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label={t.theme.title}
        aria-expanded={isOpen}
        aria-controls="theme-panel"
      >
        <Palette size={24} />
      </motion.button>

      {/* Theme Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="theme-panel"
            role="dialog"
            aria-labelledby="theme-title"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-20 right-0 w-80 p-4 rounded-xl glass-dark border border-border shadow-2xl"
          >
            <h3 id="theme-title" className="text-lg font-bold mb-4">{t.theme.title}</h3>
            
            <div className="grid grid-cols-2 gap-3 max-h-96 overflow-y-auto">
              {themes.map((theme) => (
                <motion.button
                  key={theme.id}
                  onClick={() => {
                    applyTheme(theme.id);
                    setIsOpen(false);
                  }}
                  className={`p-3 rounded-lg border-2 transition-all ${
                    currentTheme === theme.id
                      ? 'border-primary bg-primary/20'
                      : 'border-border hover:border-primary/50'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={`${t.theme.select} ${theme.name}`}
                  aria-current={currentTheme === theme.id}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-left">{theme.name}</span>
                    {currentTheme === theme.id && (
                      <Check size={16} className="text-primary" />
                    )}
                  </div>
                  
                  <div className="flex gap-1">
                    {theme.preview.map((color, i) => (
                      <div
                        key={i}
                        className="h-6 flex-1 rounded"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </motion.button>
              ))}
            </div>

            <div className="mt-3 pt-3 border-t border-border">
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
