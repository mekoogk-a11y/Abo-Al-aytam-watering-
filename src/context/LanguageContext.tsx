import React, { createContext, useContext, useState, useEffect } from 'react';
import { SupportedLanguage, LanguageOption } from '../types';
import { LANGUAGES, translations, TranslationData } from '../i18n/translations';

interface LanguageContextType {
  currentLanguage: SupportedLanguage;
  currentOption: LanguageOption;
  t: TranslationData;
  direction: 'rtl' | 'ltr';
  setLanguage: (lang: SupportedLanguage) => void;
  availableLanguages: LanguageOption[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<SupportedLanguage>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('site_language') as SupportedLanguage;
      if (saved && ['ar', 'en', 'fr', 'tr', 'zh'].includes(saved)) {
        return saved;
      }
    }
    // Default is Arabic as requested: "بحيث تكون اللغة العربية هي لغة الموقع"
    return 'ar';
  });

  const currentOption = LANGUAGES.find((l) => l.code === currentLanguage) || LANGUAGES[0];
  const direction = currentOption.direction;
  const t = translations[currentLanguage];

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.dir = direction;
      document.documentElement.lang = currentLanguage;
      // Also update font family or class if appropriate
      if (currentLanguage === 'ar') {
        document.body.style.fontFamily = "'Cairo', 'Tajawal', -apple-system, BlinkMacSystemFont, sans-serif";
      } else {
        document.body.style.fontFamily = "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif";
      }
    }
  }, [currentLanguage, direction]);

  const handleSetLanguage = (lang: SupportedLanguage) => {
    setCurrentLanguage(lang);
    try {
      localStorage.setItem('site_language', lang);
    } catch (e) {
      console.warn('Could not save language to localStorage', e);
    }
  };

  return (
    <LanguageContext.Provider
      value={{
        currentLanguage,
        currentOption,
        t,
        direction,
        setLanguage: handleSetLanguage,
        availableLanguages: LANGUAGES,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
