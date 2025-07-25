/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          DEFAULT: 'rgb(var(--app-gray-default) / <alpha-value>)',
          50: 'rgb(var(--app-gray-50) / <alpha-value>)',
          100: 'rgb(var(--app-gray-100) / <alpha-value>)',
          200: 'rgb(var(--app-gray-200) / <alpha-value>)',
          300: 'rgb(var(--app-gray-300) / <alpha-value>)',
          400: 'rgb(var(--app-gray-400) / <alpha-value>)',
          500: 'rgb(var(--app-gray-500) / <alpha-value>)',
          600: 'rgb(var(--app-gray-600) / <alpha-value>)',
          700: 'rgb(var(--app-gray-700) / <alpha-value>)',
          800: 'rgb(var(--app-gray-800) / <alpha-value>)',
          900: 'rgb(var(--app-gray-900) / <alpha-value>)',
          950: 'rgb(var(--app-gray-950) / <alpha-value>)',
        },
      },
      keyframes: {
        open: {
          '0%': {
            opacity: 1,
            transform: 'translateX(100%)',
          },
        },
        close: {
          to: {
            opacity: 0,
            transform: 'translateX(100%)',
          },
        },
        waving: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10.0deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'scroll-complete': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-24px * 33 - 2rem * 33))' },
        },
        'scroll-exact': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'scroll-simple': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'infinite-scroll': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-100% / 3))' },
        },
        'scroll-continuous': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-100% / 3))' },
        },
        'scroll-seamless': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'drawer-open': 'open 0.3s ease-in-out',
        'drawer-close': 'close 0.3s ease-in-out',
        'waving-hand': 'waving 2s linear 3',
        'scroll': 'scroll 17s linear infinite',
        'scroll-complete': 'scroll-complete 17s linear infinite',
        'scroll-simple': 'scroll-simple 17s linear infinite',
        'infinite-scroll': 'infinite-scroll 50s linear infinite',
        'scroll-continuous': 'scroll-continuous 66s linear infinite',
        'scroll-seamless': 'scroll-seamless 78.125s linear infinite',
      },
    },
  },
  plugins: [],
};

// Ref :: https://twitter.com/steventey/status/1677339375645126659
// Ref :: https://tailwindcss.com/docs/customizing-colors#using-css-variables
