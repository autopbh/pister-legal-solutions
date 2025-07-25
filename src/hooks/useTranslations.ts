import { useState } from 'react';
import { translations } from '../data/translations';
import { Translations } from '../types/translations';

export const useTranslations = () => {
  const [currentLanguage, setCurrentLanguage] = useState('fr');
  
  const t = translations[currentLanguage] || translations.fr;
  
  const setLanguage = (language: string) => {
    if (translations[language]) {
      setCurrentLanguage(language);
    }
  };

  const availableLanguages = [
    { code: 'it', name: 'Italiano', flag: '🇮🇹' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'pt', name: 'Português', flag: '🇵🇹' }
  ];

  return {
    t,
    currentLanguage,
    setLanguage,
    availableLanguages
  };
};