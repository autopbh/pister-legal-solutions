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
    (set) => ({
      currentLanguage: 'de',
      t: translations.de,
      setLanguage: (language: string) => 
        set({ 
          currentLanguage: language, 
          t: translations[language] || translations.de 
        }),
      availableLanguages: [
        { code: 'de', name: 'Deutsch', flag: 'DE' },
        { code: 'en', name: 'English', flag: 'EN' },
        { code: 'fr', name: 'Français', flag: 'FR' },
        { code: 'es', name: 'Español', flag: 'ES' },
        { code: 'it', name: 'Italiano', flag: 'IT' },
        { code: 'pt', name: 'Português', flag: 'PT' }
      ]
    }),
    {
      name: 'language-storage',
    }
  )
);