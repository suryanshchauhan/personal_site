import Image from 'next/image';
import { MapPin } from 'lucide-react';

import SuryanshPhoto from '/public/images/suryansh-photo.jpg';
import SocialIcons from '@/components/data-display/social-icons';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';

const HeroSection = () => {
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
            <Typography variant='h1'>
              Hi, I&apos;m Suryansh <span className='inline-block animate-waving-hand'>👋</span>
            </Typography>
            <Typography>
            Hi there! I&apos;m Suryansh Chauhan, a recent Computer Science graduate from DePauw University in Indiana. 
            I&apos;m passionate about creating innovative web and software solutions that make a difference. 
            While my main focus is on development, I also have a keen interest in data analytics and technology consulting. 
            Check out my projects, and feel free to connect—I&apos;m excited to explore new opportunities and collaborate on impactful tech ventures! 🚀
            </Typography>
          </div>
          <div className='flex flex-col gap-4'>
            {/* Currently Status Card */}
            <div className='rounded-xl bg-gray-900 p-6 text-white dark:bg-gray-800'>
              <Typography variant='h3' className='text-white mb-4'>
                Currently
              </Typography>
              <div className='flex items-center gap-3 mb-4'>
                <Typography className='text-white font-medium'>
                  Full Stack Engineer at
                </Typography>
                <div className='rounded-md bg-gray-700 px-3 py-1 dark:bg-gray-600'>
                  <Typography className='text-white text-sm font-medium'>
                    Levangie Laboratories ↗
                  </Typography>
                </div>
              </div>
              <Typography className='text-gray-300 text-sm leading-relaxed'>
                Making pretty software ✨ using cutting-edge fullstack and front-end technologies for agentic AI platforms.
              </Typography>
            </div>

            {/* Location Card */}
            <div className='rounded-xl bg-gray-900 p-6 text-white dark:bg-gray-800'>
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-3'>
                  <div className='text-2xl'>📍</div>
                  <div>
                    <Typography className='text-gray-400 text-sm'>
                      🇺🇸 United States of America
                    </Typography>
                    <Typography variant='h3' className='text-white'>
                      east coast
                    </Typography>
                  </div>
                </div>
                <div className='text-right'>
                  <Typography className='text-gray-400 text-sm'>
                    {new Date().toLocaleTimeString('en-US', {
                      hour: '2-digit',
                      minute: '2-digit',
                      second: '2-digit',
                      timeZone: 'America/New_York',
                      timeZoneName: 'short'
                    })}
                  </Typography>
                </div>
              </div>
            </div>
          </div>
          <SocialIcons />
        </div>
      </div>
    </Container>
  );
};

export default HeroSection;
