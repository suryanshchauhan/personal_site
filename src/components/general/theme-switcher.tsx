'use client';

import { useState, useEffect } from 'react';
import { MoonStar, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import IconButton from '@/components/general/icon-button';

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    const darkmdTheme = window.matchMedia('(prefers-color-scheme: dark)');
    // Default to dark mode regardless of system preference
    setTheme('dark');
    setMounted(true);
  }, [setTheme]);

  // until the UI is mounted, display a dummy icon
  if (!mounted) {
    return (
      <IconButton>
        <Sun />
      </IconButton>
    );
  }
  console.log('theme', theme);
  return <IconButton onClick={toggleTheme}>{theme === 'dark' ? <Sun /> : <MoonStar />}</IconButton>;
};

export default ThemeSwitcher;

// Ref :: https://www.npmjs.com/package/next-themes#avoid-hydration-mismatch
