'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations, Language } from '@/lib/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations[Language];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function detectBrowserLanguage(): Language | null {
  if (typeof navigator === 'undefined') return null;

  const browserLang = navigator.language.toLowerCase();
  const normalized = browserLang.split('-')[0];

  if (normalized === 'ca') return 'ca';
  if (normalized === 'es') return 'es';
  if (normalized === 'en') return 'en';
  if (normalized === 'de') return 'de';
  if (normalized === 'fr') return 'fr';

  return null;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('es');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('portfolio-language') as Language;
    if (savedLanguage && translations[savedLanguage]) {
      setLanguageState(savedLanguage);
      return;
    }

    const detectedLanguage = detectBrowserLanguage();
    if (detectedLanguage) {
      setLanguageState(detectedLanguage);
      localStorage.setItem('portfolio-language', detectedLanguage);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('portfolio-language', lang);
  };

  const value = {
    language,
    setLanguage,
    t: translations[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
