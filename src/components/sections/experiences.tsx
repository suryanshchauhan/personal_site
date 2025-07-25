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

      {/* Company logos row */}
      <div className='flex flex-col items-center justify-center gap-4 py-8 max-w-xs mx-auto'>
        {EXPERIENCES?.map((experience, index) => (
          <button
            key={index}
            onClick={() => setSelectedExperience(index)}
            className={`flex items-center justify-center p-4 rounded-xl transition-all duration-200 hover:bg-white hover:shadow-md w-full h-20 ${
              selectedExperience === index 
                ? 'bg-white shadow-lg ring-2 ring-gray-900/10' 
                : 'bg-gray-100 hover:bg-white'
            }`}
          >
            <ImageWrapper
              src={experience.logo}
              srcForDarkMode={experience.darkModeLogo}
              alt={experience.logoAlt}
              className='max-w-[100px] max-h-[50px] object-contain transition-transform duration-200 hover:scale-105'
            />
          </button>
        ))}
      </div>

      {/* Selected experience details */}
      <div className='max-w-4xl mx-auto'>
        <ExperienceDetails
          {...EXPERIENCES[selectedExperience]}
          key={selectedExperience}
        />
      </div>
    </Container>
  );
};

export default ExperienceSection;