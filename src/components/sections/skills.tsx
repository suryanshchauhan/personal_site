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
        {/* Fixed spotlight area in the center */}
        <div className="absolute left-1/2 top-0 bottom-0 w-40 -translate-x-1/2 z-10 pointer-events-none">
          <div className="w-full h-full bg-gradient-to-r from-transparent via-blue-100/50 to-transparent dark:via-blue-900/40 rounded-lg"></div>
          <div className="absolute inset-0 border-2 border-blue-200/30 dark:border-blue-700/30 rounded-lg"></div>
        </div>
        
        {/* Scrolling container */}
        <div className="flex gap-8 md:gap-12 animate-scroll-full">
          {/* First set of technologies */}
          {TECHNOLOGIES.map((technology, index) => (
            <div key={`set1-${index}`} className="flex-shrink-0 tech-logo">
              <TechDetails {...technology} />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {TECHNOLOGIES.map((technology, index) => (
            <div key={`set2-${index}`} className="flex-shrink-0 tech-logo">
              <TechDetails {...technology} />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .tech-logo {
          filter: grayscale(100%) opacity(0.4);
          transition: all 0.4s ease-in-out;
          transform: scale(0.9);
        }
        
        /* Create spotlight effect using CSS clip-path and positioning */
        .tech-logo {
          position: relative;
        }
        
        /* When a logo is in the center area (calculated based on animation progress) */
        @keyframes spotlight-reveal {
          0% { 
            filter: grayscale(100%) opacity(0.4);
            transform: scale(0.9);
          }
          47% { 
            filter: grayscale(100%) opacity(0.4);
            transform: scale(0.9);
          }
          50% { 
            filter: grayscale(0%) opacity(1);
            transform: scale(1.1);
          }
          53% { 
            filter: grayscale(100%) opacity(0.4);
            transform: scale(0.9);
          }
          100% { 
            filter: grayscale(100%) opacity(0.4);
            transform: scale(0.9);
          }
        }
        
        /* Apply the spotlight animation to each logo with proper delay */
        ${TECHNOLOGIES.map((_, index) => {
          const delay = -(index * (15 / TECHNOLOGIES.length));
          return `
            .tech-logo:nth-child(${index + 1}) {
              animation: spotlight-reveal 15s linear infinite ${delay}s;
            }
          `;
        }).join('')}
        
        /* Second set with offset delay */
        ${TECHNOLOGIES.map((_, index) => {
          const delay = -((index + TECHNOLOGIES.length) * (15 / TECHNOLOGIES.length));
          return `
            .tech-logo:nth-child(${index + 1 + TECHNOLOGIES.length}) {
              animation: spotlight-reveal 15s linear infinite ${delay}s;
            }
          `;
        }).join('')}
      `}</style>
    </Container>
  );
};

export default SkillsSection;