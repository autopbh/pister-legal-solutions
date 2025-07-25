import React, { createContext, useContext, useState, ReactNode } from 'react';
import { translations } from '../data/translations';
import { Translations } from '../types/translations';

interface TranslationContextType {
  currentLanguage: string;
  setLanguage: (language: string) => void;
  t: Translations;
  availableLanguages: Array<{ code: string; name: string; flag: string }>;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

interface TranslationProviderProps {
  children: ReactNode;
}

export const TranslationProvider: React.FC<TranslationProviderProps> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState('fr');
  
  console.log('TranslationProvider - currentLanguage:', currentLanguage);
  console.log('TranslationProvider - available translations:', Object.keys(translations));
  
  const t = translations[currentLanguage] || translations.fr;
  
  const setLanguage = (language: string) => {
    console.log('TranslationProvider - setLanguage called with:', language);
    if (translations[language]) {
      console.log('TranslationProvider - language found, setting to:', language);
      setCurrentLanguage(language);
    } else {
      console.log('TranslationProvider - language not found:', language);
    }
  };

  const availableLanguages = [
    { code: 'it', name: 'Italiano', flag: '🇮🇹' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'pt', name: 'Português', flag: '🇵🇹' }
  ];

  const value = {
    currentLanguage,
    setLanguage,
    t,
    availableLanguages
  };

  return (
    <TranslationContext.Provider value={value}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslations = () => {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error('useTranslations must be used within a TranslationProvider');
  }
  return context;
};