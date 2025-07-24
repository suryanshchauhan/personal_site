'use client';

import { useEffect, useRef } from 'react';
import { TECHNOLOGIES } from '@/lib/data';
import Tag from '@/components/data-display/tag';
import TechDetails from '@/components/data-display/tech-details';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';

const SkillsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateSpotlight = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const containerRect = container.getBoundingClientRect();
      const centerX = containerRect.left + containerRect.width / 2;
      const spotlightWidth = 160; // 40 * 4 (since we use w-40)

      // Get all tech logos
      const logos = container.querySelectorAll('.tech-logo');
      
      logos.forEach((logo) => {
        const logoRect = logo.getBoundingClientRect();
        const logoCenter = logoRect.left + logoRect.width / 2;
        
        // Check if logo center is within spotlight area
        const isInSpotlight = Math.abs(logoCenter - centerX) < spotlightWidth / 2;
        
        if (isInSpotlight) {
          logo.classList.add('in-spotlight');
        } else {
          logo.classList.remove('in-spotlight');
        }
      });
    };

    // Update spotlight position frequently
    const interval = setInterval(updateSpotlight, 50);
    
    // Also update on scroll/resize
    window.addEventListener('resize', updateSpotlight);
    
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', updateSpotlight);
    };
  }, []);

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

      <div className="relative overflow-hidden py-8" ref={containerRef}>
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
          transform: scale(0.9);
          transition: all 0.3s ease-in-out;
        }
        
        .tech-logo.in-spotlight {
          filter: grayscale(0%) opacity(1);
          transform: scale(1.1);
        }
      `}</style>
    </Container>
  );
};

export default SkillsSection;