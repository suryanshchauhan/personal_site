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
        {/* Scrolling container */}
        <div className="flex gap-8 md:gap-12 animate-scroll-full">
          {/* First set of technologies */}
          {TECHNOLOGIES.map((technology, index) => (
            <div key={`set1-${index}`} className="flex-shrink-0">
              <TechDetails {...technology} />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {TECHNOLOGIES.map((technology, index) => (
            <div key={`set2-${index}`} className="flex-shrink-0">
              <TechDetails {...technology} />
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default SkillsSection;