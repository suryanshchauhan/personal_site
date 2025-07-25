'use client';

import { useState, createContext, useContext } from 'react';
import { ThemeProvider } from 'next-themes';

// Translation Context
export const TranslationContext = createContext<{
  isGerman: boolean;
  toggleLanguage: () => void;
}>({
  isGerman: false,
  toggleLanguage: () => {},
});

export const useTranslation = () => useContext(TranslationContext);

const TranslationProvider = ({ children }: { children: React.ReactNode }) => {
  const [isGerman, setIsGerman] = useState(false);

  const toggleLanguage = () => {
    setIsGerman(!isGerman);
  };

  return (
    <TranslationContext.Provider value={{ isGerman, toggleLanguage }}>
      {children}
    </TranslationContext.Provider>
  );
};

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class">
      <TranslationProvider>
        {children}
      </TranslationProvider>
    </ThemeProvider>
  );
}
