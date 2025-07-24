import { Inter } from 'next/font/google';
import { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

import './globals.css';
import Header from '@/components/layout/header';
import { Providers } from '@/lib/providers';
import Footer from '@/components/layout/footer';

const inter = Inter({ subsets: ['latin'] });

const title = 'Suryansh Chauhan | Developer';
const description =
  'Recent DePauw University Graduate | Software & Web Developer | Data Analytics | Consulting';
const url = 'https://suryansh.wiki';

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title,
  description,
  keywords: ['Software Developer', 'Software Engineer', 'Frontend Developer', 'Full Stack Developer', 'Javascript Developer', 'React Developer', 
  'Next.js Developer','Backend Developer','Backend Engineer', 'Data Scientist', 'Data Anayst', 'Software Consultant'],
  creator: 'Suryansh Chauhan',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],

  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang='en'
      className='!scroll-smooth'
      suppressHydrationWarning
    >
      <body className={`${inter.className} bg-gray text-gray-600 antialiased`}>
        <Providers>
          <Header />
          <main className='flex min-h-screen w-full flex-col'>
            {children}
            <Analytics />
            <SpeedInsights />
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
