'use client';

import { useState } from "react";
import { Languages, Check } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { Language } from "@/lib/translations";

const languages = [
  { code: 'ca' as Language, name: 'Català', flag: '🇪🇸' },
  { code: 'es' as Language, name: 'Español', flag: '🇪🇸' },
  { code: 'en' as Language, name: 'English', flag: '🇬🇧' },
  { code: 'de' as Language, name: 'Deutsch', flag: '🇩🇪' },
  { code: 'fr' as Language, name: 'Français', flag: '🇫🇷' },
];

export function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  return (
    <div className="fixed bottom-6 right-24 z-50">
      {/* Language Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 rounded-full border border-border/60 bg-card/80 backdrop-blur-xl text-foreground shadow-lg hover:border-secondary/30 hover:bg-card hover:scale-[1.08] active:scale-95 transition-all duration-300 flex items-center justify-center"
        aria-label={t.language.title}
        aria-expanded={isOpen}
        aria-controls="language-panel"
      >
        <Languages size={20} />
      </button>

      {/* Panel de idioma: montado siempre y alternado por clase (ver theme-selector). */}
        <div
          id="language-panel"
          role="dialog"
          aria-labelledby="language-title"
          aria-hidden={!isOpen}
          className={`absolute bottom-16 right-0 w-64 p-4 rounded-2xl border border-border/60 bg-card/95 backdrop-blur-xl shadow-2xl elevation-3 floating-panel${
            isOpen ? " is-open" : ""
          }`}
        >
            <h3 id="language-title" className="text-sm font-semibold uppercase tracking-wider mb-4">
              {t.language.title}
            </h3>
            
            <div className="space-y-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setLanguage(lang.code);
                    setIsOpen(false);
                  }}
                  className={`w-full p-3 rounded-xl border transition-all duration-300 flex items-center justify-between ${
                    language === lang.code
                      ? 'border-secondary bg-secondary/10'
                      : 'border-border/50 hover:border-secondary/30 hover:bg-card/60'
                  }`}
                  aria-label={`${t.language.select} ${lang.name}`}
                  aria-current={language === lang.code}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{lang.flag}</span>
                    <span className="font-medium text-sm">{lang.name}</span>
                  </div>
                  {language === lang.code && (
                    <Check size={18} className="text-secondary shrink-0" />
                  )}
                </button>
              ))}
            </div>
        </div>
    </div>
  );
}
