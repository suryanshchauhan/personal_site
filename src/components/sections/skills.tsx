import Container from '@/components/layout/container';
import Tag from '@/components/data-display/tag';
import Typography from '@/components/general/typography';
import TechDetails from '@/components/data-display/tech-details';
import { TECHNOLOGIES } from '@/lib/data';

const SkillsSection = () => {
  return (
    <Container id='skills' className='pb-6 md:pb-8 2xl:pb-10'>
      <div className="flex flex-col items-center gap-4">
        <div className="self-center">
          <Tag label="Skills" />
        </div>
        <Typography variant="subtitle" className="max-w-xl text-center">
          The skills, tools and technologies I am really good at:
        </Typography>
      </div>

      <div className="relative overflow-hidden py-8 pb-16">
        {/* Gradient masks */}
        <div className="absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-gray to-transparent pointer-events-none"></div>
        <div className="absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-gray to-transparent pointer-events-none"></div>
        
        {/* Continuous scrolling strip */}
        <div className="flex gap-8 md:gap-12 animate-scroll-seamless" style={{ width: 'max-content' }}>
          {/* Repeat technologies multiple times for continuous effect */}
          {Array.from({ length: 6 }).map((_, setIndex) => 
            TECHNOLOGIES.map((technology, techIndex) => (
              <div key={`${setIndex}-${techIndex}`} className="flex-shrink-0 w-24 md:w-28 flex justify-center">
                <TechDetails {...technology} />
              </div>
            ))
          )}
        </div>
      </div>
    </Container>
  );
};

export default SkillsSection;