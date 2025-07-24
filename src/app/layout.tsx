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
          <script dangerouslySetInnerHTML={{
            __html: `
              // Add spotlight effect that highlights the center item
              document.addEventListener('DOMContentLoaded', function() {
                const container = document.querySelector('.spotlight-container');
                const items = document.querySelectorAll('.spotlight-item');
                
                if (!container || !items.length) return;
                
                function updateSpotlight() {
                  const containerRect = container.getBoundingClientRect();
                  const containerCenter = containerRect.left + containerRect.width / 2;
                  
                  let closestItem = null;
                  let closestDistance = Infinity;
                  
                  items.forEach(item => {
                    const itemRect = item.getBoundingClientRect();
                    const itemCenter = itemRect.left + itemRect.width / 2;
                    const distance = Math.abs(itemCenter - containerCenter);
                    
                    if (distance < closestDistance) {
                      closestDistance = distance;
                      closestItem = item;
                    }
                  });
                  
                  // Remove spotlight from all items
                  items.forEach(item => {
                    const icon = item.querySelector('.tech-icon');
                    if (icon) {
                      icon.style.filter = 'grayscale(100%) opacity(0.4)';
                    }
                  });
                  
                  // Add spotlight to closest item
                  if (closestItem) {
                    const icon = closestItem.querySelector('.tech-icon');
                    if (icon) {
                      icon.style.filter = 'grayscale(0%) opacity(1)';
                    }
                  }
                }
                
                // Update spotlight periodically
                setInterval(updateSpotlight, 100);
                updateSpotlight();
              });
            `
          }} />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
