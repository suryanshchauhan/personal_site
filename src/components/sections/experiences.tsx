'use client';

import { EXPERIENCES } from '@/lib/data';
import ExperienceDetails from '@/components/data-display/experience-details';
import Tag from '@/components/data-display/tag';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';

const ExperienceSection = () => {

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
          Here are the places where I've worked:
        </Typography>
      </div>

      {/* All experiences displayed in a grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto'>
        {EXPERIENCES?.map((experience, index) => (
          <ExperienceDetails
            key={index}
            {...experience}
          />
        ))}
      </div>
    </Container>
  );
};

export default ExperienceSection;