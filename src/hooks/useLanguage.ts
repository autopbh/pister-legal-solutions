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
        { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
        { code: 'en', name: 'English', flag: '🇬🇧' },
        { code: 'fr', name: 'Français', flag: '🇫🇷' },
        { code: 'es', name: 'Español', flag: '🇪🇸' },
        { code: 'it', name: 'Italiano', flag: '🇮🇹' },
        { code: 'pt', name: 'Português', flag: '🇵🇹' }
      ]
    }),
    {
      name: 'language-storage',
    }
  )
);