'use client';

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Languages, Check } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { Language } from "@/lib/translations";

const languages = [
  { code: 'ca' as Language, name: 'Català', flag: '🇪🇸' },
  { code: 'es' as Language, name: 'Español', flag: '🇪🇸' },
  { code: 'en' as Language, name: 'English', flag: '🇬🇧' },
  { code: 'fr' as Language, name: 'Français', flag: '🇫🇷' },
];

export function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  return (
    <div className="fixed bottom-6 right-24 z-50">
      {/* Language Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-secondary text-secondary-foreground shadow-lg hover:opacity-90 transition-opacity flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label={t.language.title}
        aria-expanded={isOpen}
        aria-controls="language-panel"
      >
        <Languages size={24} />
      </motion.button>

      {/* Language Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="language-panel"
            role="dialog"
            aria-labelledby="language-title"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-20 right-0 w-64 p-4 rounded-xl glass-dark border border-border shadow-2xl"
          >
            <h3 id="language-title" className="text-lg font-bold mb-4">{t.language.title}</h3>
            
            <div className="space-y-2">
              {languages.map((lang) => (
                <motion.button
                  key={lang.code}
                  onClick={() => {
                    setLanguage(lang.code);
                    setIsOpen(false);
                  }}
                  className={`w-full p-3 rounded-lg border-2 transition-all flex items-center justify-between ${
                    language === lang.code
                      ? 'border-secondary bg-secondary/10'
                      : 'border-border hover:border-secondary/50'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  aria-label={`${t.language.select} ${lang.name}`}
                  aria-current={language === lang.code}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{lang.flag}</span>
                    <span className="font-medium">{lang.name}</span>
                  </div>
                  {language === lang.code && (
                    <Check size={20} className="text-secondary" />
                  )}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
