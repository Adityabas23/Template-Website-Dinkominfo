// app/i18n/LanguageContext.tsx
'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { messages, Lang, MessageKey } from './messages';

// Nilai yang disimpan di context
type LangContextValue = {
  lang: Lang;
  toggleLang: () => void;
  t: (key: MessageKey) => string;
};

// Context-nya
const LanguageContext = createContext<LangContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('id');

  const toggleLang = () => {
    setLang((prev) => (prev === 'id' ? 'en' : 'id'));
  };

  // fungsi translate
  const t = (key: MessageKey): string => {
    const dict = messages[lang];
    // kalau key belum ada di kamus, balikin saja key-nya biar tidak error
    return dict[key] ?? key;
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

// Hook untuk dipakai di komponen (Header, HeroBanner, dll)
export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLang must be used inside <LanguageProvider>');
  }
  return ctx;
}
