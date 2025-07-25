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
          <div className='flex flex-col gap-2'>
            <div className='flex gap-2'>
              <MapPin className='stroke-gray-600' />
              <Typography>Indianapolis, IN</Typography>
            </div>
          </div>
          <SocialIcons />
        </div>
      </div>
    </Container>
  );
};

export default HeroSection;
