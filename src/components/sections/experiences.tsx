'use client';

import { useState } from 'react';
import { EXPERIENCES } from '@/lib/data';
import ExperienceDetails from '@/components/data-display/experience-details';
import Tag from '@/components/data-display/tag';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';
import ImageWrapper from '@/components/data-display/image-wrapper';

const ExperienceSection = () => {
  const [selectedExperience, setSelectedExperience] = useState(0);

  return (
    <Container id='experience' className='bg-gray-50'>
      <div className='flex flex-col items-center gap-4'>
        <div className='self-center'>
          <Tag label='Experience' />
        </div>
        <Typography
          variant='subtitle'
          className='max-w-xl text-center'
        >
          Here is a quick summary of my most recent experiences:
        </Typography>
      </div>

      {/* Experience layout with logos on the right */}
      <div className='flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto'>
        {/* Company logos column - moved to left */}
        <div className='flex flex-row lg:flex-col items-center justify-center gap-4 lg:max-w-xs order-2 lg:order-1'>
          {EXPERIENCES?.map((experience, index) => (
            <button
              key={index}
              onClick={() => setSelectedExperience(index)}
              className={`flex items-center justify-center p-4 rounded-xl transition-all duration-200 hover:bg-white hover:shadow-md w-20 h-20 lg:w-full lg:h-20 ${
                selectedExperience === index 
                  ? 'bg-white shadow-lg ring-2 ring-gray-900/10' 
                  : 'bg-gray-100 hover:bg-white'
              }`}
            >
              <ImageWrapper
                src={experience.logo}
                srcForDarkMode={experience.darkModeLogo}
                alt={experience.logoAlt}
                className='max-w-[60px] max-h-[40px] lg:max-w-[100px] lg:max-h-[50px] object-contain transition-transform duration-200 hover:scale-105'
              />
            </button>
          ))}
        </div>
        
        {/* Selected experience details */}
        <div className='flex-1 order-1 lg:order-2'>
          <ExperienceDetails
            {...EXPERIENCES[selectedExperience]}
            key={selectedExperience}
          />
        </div>
      </div>
    </Container>
  );
};

export default ExperienceSection;