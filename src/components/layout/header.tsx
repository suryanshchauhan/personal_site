'use client';

import { useEffect, useState, createContext, useContext } from 'react';
import { Languages } from 'lucide-react';

import { mergeClasses } from '@/lib/utils';
import useScroll from '@/hooks/use-scroll';
import Link from '@/components/navigation/link';
import ThemeSwitcher from '@/components/general/theme-switcher';
import Typography from '@/components/general/typography';
import Button from '@/components/general/button';

// Translation Context
export const TranslationContext = createContext<{
  isGerman: boolean;
  toggleLanguage: () => void;
}>({
  isGerman: false,
  toggleLanguage: () => {},
});

export const useTranslation = () => useContext(TranslationContext);

const Logo = () => (
  <Typography
    variant='h3'
    className='font-bold'
  >
    {'<Suryansh />'}
  </Typography>
);

const Header = () => {
  const scrolled = useScroll(40);
  const [isGerman, setIsGerman] = useState(false);

  const toggleLanguage = () => {
    setIsGerman(!isGerman);
  };

  return (
    <TranslationContext.Provider value={{ isGerman, toggleLanguage }}>
      <header
        className={mergeClasses(
          'sticky top-0 z-30 w-full border-b border-transparent bg-gray max-md:border-gray-100',
          scrolled ? 'bg-gray/50 backdrop-blur-xl md:border-gray-100' : ''
        )}
      >
        <div className='mx-auto flex w-full max-w-7xl items-center justify-between p-4 md:px-8'>
          <Link
            href='/'
            noCustomization
          >
            <Logo />
          </Link>
          <div className='flex items-center gap-4'>
            <Button
              onClick={toggleLanguage}
              className='flex items-center gap-2 px-4 py-2'
            >
              <Languages className='h-4 w-4' />
              <span className='text-sm font-medium'>
                {isGerman ? 'English' : 'Deutsch'}
              </span>
            </Button>
            <div className='h-6 w-0.5 bg-gray-100'></div>
            <ThemeSwitcher />
          </div>
        </div>
      </header>
    </TranslationContext.Provider>
  );
};

// Higher-order component to provide translation context to the entire app
export const TranslationProvider = ({ children }: { children: React.ReactNode }) => {
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

export default Header;