'use client';

import { TECHNOLOGIES } from '@/lib/data';
import Tag from '@/components/data-display/tag';
import TechDetails from '@/components/data-display/tech-details';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';

const SkillsSection = () => {
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
        <div className="absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-gray to-transparent pointer-events-none"></div>
        <div className="absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-gray to-transparent pointer-events-none"></div>
        
        {/* Scrolling container */}
        <div className="flex gap-8 md:gap-12 animate-scroll-full" style={{ width: '200%' }}>
          {/* First set of technologies */}
          {TECHNOLOGIES.map((technology, index) => (
            <div key={`set1-${index}`} className="flex-shrink-0 w-24 md:w-28 flex justify-center">
              <TechDetails {...technology} />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {TECHNOLOGIES.map((technology, index) => (
            <div key={`set2-${index}`} className="flex-shrink-0 w-24 md:w-28 flex justify-center">
              <TechDetails {...technology} />
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default SkillsSection;