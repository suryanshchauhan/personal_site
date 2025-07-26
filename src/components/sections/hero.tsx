'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Navigation } from 'lucide-react';

import SuryanshPhoto from '/public/images/suryansh-photo.jpg';
import SocialIcons from '@/components/data-display/social-icons';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';
import useScroll from '@/hooks/use-scroll';

const HeroSection = () => {
  const [currentTime, setCurrentTime] = useState('');
  const scrolled = useScroll(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const updateTime = () => {
      const time = new Date().toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZone: 'America/Indiana/Indianapolis',
        timeZoneName: 'short'
      });
      setCurrentTime(time);
    };

    // Update immediately
    updateTime();

    // Update every second
    const interval = setInterval(updateTime, 1000);

    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Container id='hero'>
      <div className='flex flex-col gap-12 md:flex-row'>
        {/* Image */}
        <div className='flex items-center justify-center md:order-last md:flex-grow md:justify-end'>
          <div className='relative h-[300px] w-[280px] md:h-[360px] md:w-[320px]'>
            <Image
              src={SuryanshPhoto}
              alt='Headshot of Suryansh'
              className='absolute z-10 h-[280px] w-[240px] border-8 border-gray max-md:left-5 md:left-0 md:top-0 md:h-[320px] md:w-[280px]'
              style={{ objectFit: 'cover' }}
            ></Image>
            <div className='absolute h-[280px] w-[280px] border-8 border-transparent bg-gray-200 max-md:top-5 md:bottom-0 md:right-0 md:h-[320px] md:w-[280px]'></div>
          </div>
        </div>

        {/* Content */}
        <div className='flex max-w-3xl flex-grow flex-col justify-center gap-8 md:order-first md:items-start md:justify-center 2xl:gap-12'>
          <div className='flex flex-col gap-2'>
            <div className='text-3xl sm:text-4xl md:text-4xl lg:text-6xl font-semibold md:font-bold md:tracking-[-0.02em] lg:leading-[72px] text-gray-900'>
              <Typography 
                variant='h1' 
                component='span' 
                className='text-3xl sm:text-4xl md:text-4xl lg:text-6xl font-semibold md:font-bold md:tracking-[-0.02em] lg:leading-[72px] text-gray-900 [&:lang(de)]:text-2xl [&:lang(de)]:sm:text-3xl [&:lang(de)]:md:text-3xl [&:lang(de)]:lg:text-5xl'
              >
                Hi, I&apos;m Suryansh
              </Typography>
              {' '}
              <span className='inline-block animate-waving-hand'>👋</span>
            </div>
          </div>
          <div className='flex flex-col gap-4'>
            {/* Currently Status Card */}
            <div className='rounded-xl bg-gray-100 p-4 md:p-6 dark:bg-gray-100'>
              <Typography variant='h3' className='text-gray-900 dark:text-gray-900 mb-4'>
                Currently
              </Typography>
            <div className='flex flex-row items-center gap-2 sm:gap-3 mb-4'>
                <Typography className='text-gray-900 dark:text-gray-900 font-medium flex-shrink-0'>
                  Software Engineer at
                </Typography>
                <div className='rounded-md bg-gray-200 px-3 py-1 dark:bg-gray-200 transition-all duration-300 hover:scale-110 hover:bg-gray-300 dark:hover:bg-gray-800 cursor-pointer'>
                  <Typography className='text-gray-900 dark:text-gray-900 text-xs sm:text-sm font-medium hover:text-gray-900 dark:hover:text-black'>
                    Eknoor Trans ↗
                  </Typography>
                </div>
              </div>
              <Typography className='text-gray-600 dark:text-gray-600 text-xs sm:text-sm leading-relaxed'>
                Developing web tools that keep trucks rolling, glitches rare, and the team always smiling.
              </Typography>
            </div>

            {/* Location Card */}
            <div className='rounded-xl bg-gray-100 p-4 md:p-6 dark:bg-gray-100'>
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-2 sm:gap-3'>
                  <Navigation 
                    className='w-8 h-8 sm:w-10 sm:h-10 text-gray-700 transition-all duration-500 ease-out drop-shadow-lg hover:text-gray-600 hover:scale-110' 
                    style={{ 
                      transform: `rotate(${scrollY * 0.8}deg) scale(${1 + Math.sin(scrollY * 0.01) * 0.1})`,
                      filter: `drop-shadow(0 0 8px rgba(55, 65, 81, 0.3))`
                    }}
                  />
                  <div className='ml-1 sm:ml-2'>
                    <Typography className='text-gray-600 dark:text-gray-700 text-xs sm:text-sm md:text-xs lg:text-sm'>
                      🇺🇸 United States of America
                    </Typography>
                    <Typography variant='h3' className='text-gray-900 dark:text-gray-900 text-3xl'>
                      indianapolis
                    </Typography>
                    
                    <Typography className='text-gray-900 dark:text-gray-900 text-base font-semibold'>
                      {currentTime}
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default HeroSection;