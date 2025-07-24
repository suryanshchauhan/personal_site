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

      <div className="relative overflow-hidden">
        {/* Spotlight area in the middle */}
        <div className="absolute left-1/2 top-0 bottom-0 w-32 -translate-x-1/2 z-10 pointer-events-none">
          <div className="w-full h-full bg-gradient-to-r from-transparent via-blue-100/30 to-transparent dark:via-blue-900/20"></div>
        </div>
        
        {/* Scrolling container */}
        <div className="flex gap-8 md:gap-12 animate-scroll-full">
          {/* First set of technologies */}
          {TECHNOLOGIES.map((technology, index) => (
            <div key={`set1-${index}`} className="flex-shrink-0 transition-all duration-300 spotlight-item">
              <TechDetails {...technology} />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {TECHNOLOGIES.map((technology, index) => (
            <div key={`set2-${index}`} className="flex-shrink-0 transition-all duration-300 spotlight-item">
              <TechDetails {...technology} />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .spotlight-item {
          filter: grayscale(100%);
        }
        
        /* When item is in the spotlight area (middle 128px of container) */
        @keyframes spotlight-check {
          0%, 100% { 
            transform: translateX(0);
          }
        }
        
        /* Use CSS to detect when items are in the center spotlight */
        .spotlight-item:nth-child(n) {
          animation: spotlight-check 15s linear infinite;
        }
        
        /* Remove grayscale when in spotlight - this targets items at specific animation percentages */
        @keyframes remove-grayscale-1 { 0% { filter: grayscale(0%); } 100% { filter: grayscale(0%); } }
        @keyframes remove-grayscale-2 { 0% { filter: grayscale(0%); } 100% { filter: grayscale(0%); } }
        
        /* Apply different delays to each item so they get colored when passing through center */
        .spotlight-item:nth-child(1) { animation-delay: 0s; }
        .spotlight-item:nth-child(2) { animation-delay: -0.5s; }
        .spotlight-item:nth-child(3) { animation-delay: -1s; }
        .spotlight-item:nth-child(4) { animation-delay: -1.5s; }
        .spotlight-item:nth-child(5) { animation-delay: -2s; }
        .spotlight-item:nth-child(6) { animation-delay: -2.5s; }
        .spotlight-item:nth-child(7) { animation-delay: -3s; }
        .spotlight-item:nth-child(8) { animation-delay: -3.5s; }
        .spotlight-item:nth-child(9) { animation-delay: -4s; }
        .spotlight-item:nth-child(10) { animation-delay: -4.5s; }
        .spotlight-item:nth-child(11) { animation-delay: -5s; }
        .spotlight-item:nth-child(12) { animation-delay: -5.5s; }
        .spotlight-item:nth-child(13) { animation-delay: -6s; }
        .spotlight-item:nth-child(14) { animation-delay: -6.5s; }
        .spotlight-item:nth-child(15) { animation-delay: -7s; }
        .spotlight-item:nth-child(16) { animation-delay: -7.5s; }
        .spotlight-item:nth-child(17) { animation-delay: -8s; }
        .spotlight-item:nth-child(18) { animation-delay: -8.5s; }
        .spotlight-item:nth-child(19) { animation-delay: -9s; }
        .spotlight-item:nth-child(20) { animation-delay: -9.5s; }
        .spotlight-item:nth-child(21) { animation-delay: -10s; }
        .spotlight-item:nth-child(22) { animation-delay: -10.5s; }
        .spotlight-item:nth-child(23) { animation-delay: -11s; }
        .spotlight-item:nth-child(24) { animation-delay: -11.5s; }
        .spotlight-item:nth-child(25) { animation-delay: -12s; }
        .spotlight-item:nth-child(26) { animation-delay: -12.5s; }
        .spotlight-item:nth-child(27) { animation-delay: -13s; }
        .spotlight-item:nth-child(28) { animation-delay: -13.5s; }
        .spotlight-item:nth-child(29) { animation-delay: -14s; }
        .spotlight-item:nth-child(30) { animation-delay: -14.5s; }
      `}</style>
    </Container>
  );
};

export default SkillsSection;