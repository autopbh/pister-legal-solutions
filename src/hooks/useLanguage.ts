import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { translations, Translation } from '../lib/translations';

interface LanguageState {
  currentLanguage: string;
  t: Translation;
  setLanguage: (language: string) => void;
  availableLanguages: { code: string; name: string; flag: string }[];
}

export const useLanguage = create<LanguageState>()(
  persist(
    (set) => {
      console.log('useLanguage store initializing...');
      const currentLanguage = 'de';
      const t = translations[currentLanguage] || translations.de;
      console.log('Initial language:', currentLanguage, 'translations loaded:', !!t);
      
      return {
        currentLanguage,
        t,
        setLanguage: (language: string) => {
          console.log('Setting language to:', language);
          const newTranslations = translations[language] || translations.de;
          console.log('New translations loaded:', !!newTranslations);
          set({ 
            currentLanguage: language, 
            t: newTranslations 
          });
        },
        availableLanguages: [
          { code: 'de', name: 'Deutsch', flag: 'DE' },
          { code: 'en', name: 'English', flag: 'EN' },
          { code: 'fr', name: 'Français', flag: 'FR' },
          { code: 'es', name: 'Español', flag: 'ES' },
          { code: 'it', name: 'Italiano', flag: 'IT' },
          { code: 'pt', name: 'Português', flag: 'PT' }
        ]
      };
    },
    {
      name: 'language-storage',
    }
  )
);