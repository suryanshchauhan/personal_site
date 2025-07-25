'use client';

import { useEffect, useState, createContext, useContext } from 'react';
import { Menu, X, Languages } from 'lucide-react';

import { mergeClasses } from '@/lib/utils';
import useWindowSize from '@/hooks/use-window-size';
import useScroll from '@/hooks/use-scroll';
import Link from '@/components/navigation/link';
import ThemeSwitcher from '@/components/general/theme-switcher';
import IconButton from '@/components/general/icon-button';
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
  const size = useWindowSize();

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
        >
          <Logo />
        </Link>
        <div className='hidden items-center gap-6 md:flex'>
          <ul className='flex list-none items-center gap-6'>
            {NAV_LINKS.map((link, index) => (
              <li key={index}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
          <div className='h-6 w-0.5 bg-gray-100'></div>
          <div className='flex items-center gap-4'>
            <ThemeSwitcher />
          </div>
        </div>

        <Drawer
          open={isOpen}
          onOpenChange={setIsOpen}
        >
          <DrawerTrigger
            asChild
            className='flex md:hidden'
          >
            <IconButton>
              <Menu />
            </IconButton>
          </DrawerTrigger>
          <DrawerContent>
            <div className='flex items-center justify-between border-b border-gray-100 p-4'>
              <Logo />
              <DrawerClose asChild>
                <IconButton>
                  <X />
                </IconButton>
              </DrawerClose>
            </div>
            <div className='border-b border-gray-100 p-4'>
              <ul className='flex list-none flex-col gap-4'>
                {NAV_LINKS.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      onClick={() => {
                        const timeoutId = setTimeout(() => {
                          setIsOpen(false);
                          clearTimeout(timeoutId);
                        }, 500);
                      }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className='flex flex-col gap-4 p-4'>
              <div className='flex items-center justify-between'>
                <Typography>Switch Theme</Typography>
                <ThemeSwitcher />
              </div>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </header>
  );
};

export default Header;
