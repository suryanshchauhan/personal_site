'use client';

import { TECHNOLOGIES } from '@/lib/data';
import Tag from '@/components/data-display/tag';
import TechDetails from '@/components/data-display/tech-details';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';

const SkillsSection = () => {
  // Create enough duplicates to ensure smooth infinite scroll
  const duplicatedTechnologies = [
    ...TECHNOLOGIES,
    ...TECHNOLOGIES,
    ...TECHNOLOGIES
  ];

  return (
    <Container id='skills'>
      <div className="flex flex-col items-center gap-4">
        <div className="self-center">
          <Tag label="Skills" />
        </div>
        <Typography variant="subtitle" className="max-w-xl text-center">
          The skills, tools and technologies I am really good at:
        </Typography>
      </div>

      <div className="relative overflow-hidden py-8">
        {/* Gradient masks for smooth entry/exit */}
        <div className="absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-gray to-transparent pointer-events-none"></div>
        <div className="absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-gray to-transparent pointer-events-none"></div>
        
        {/* Scrolling container */}
        <div className="flex gap-12 md:gap-16 animate-infinite-scroll">
          {duplicatedTechnologies.map((technology, index) => (
            <div key={index} className="flex-shrink-0 w-20 md:w-24 flex justify-center">
              <TechDetails {...technology} />
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default SkillsSection;