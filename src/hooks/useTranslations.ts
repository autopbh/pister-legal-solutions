import { useState } from 'react';
import { translations } from '../data/translations';
import { Translations } from '../types/translations';

export const useTranslations = () => {
  const [currentLanguage, setCurrentLanguage] = useState('de');
  
  const t = translations[currentLanguage] || translations.de;
  
  const setLanguage = (language: string) => {
    if (translations[language]) {
      setCurrentLanguage(language);
    }
  };

  const availableLanguages = [
    { code: 'de', name: 'Deutsch', flag: 'DE' },
    { code: 'en', name: 'English', flag: 'EN' },
    { code: 'fr', name: 'Français', flag: 'FR' }
  ];

  return {
    t,
    currentLanguage,
    setLanguage,
    availableLanguages
  };
};