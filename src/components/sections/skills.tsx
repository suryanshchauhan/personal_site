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
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const items = container.querySelectorAll('.tech-item');
      const containerRect = container.getBoundingClientRect();
      const centerX = containerRect.left + containerRect.width / 2;
      let closestItem = null;
      let closestDistance = Infinity;

      // Find the item closest to center
      items.forEach((item) => {
        const itemRect = item.getBoundingClientRect();
        const itemCenterX = itemRect.left + itemRect.width / 2;
        const distance = Math.abs(centerX - itemCenterX);
        
        if (distance < closestDistance) {
          closestDistance = distance;
          closestItem = item;
        }
      });

      // Apply grayscale to all items first
      items.forEach((item) => {
        item.classList.add('grayscale');
      });

      // Remove grayscale from the closest item only
      if (closestItem) {
        closestItem.classList.remove('grayscale');
      }
    };

    // Set up interval to check color changes
    const interval = setInterval(handleScroll, 100);
    handleScroll(); // Run initially

    return () => clearInterval(interval);
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

      <div ref={containerRef} className="relative overflow-hidden">
        <div 
          className="flex gap-8 md:gap-12 animate-scroll-full"
        >
          {/* First set of technologies */}
          {TECHNOLOGIES.map((technology, index) => (
            <div key={`set1-${index}`} className="tech-item flex-shrink-0 grayscale transition-all duration-300">
              <TechDetails {...technology} />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {TECHNOLOGIES.map((technology, index) => (
            <div key={`set2-${index}`} className="tech-item flex-shrink-0 grayscale transition-all duration-300">
              <TechDetails {...technology} />
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default SkillsSection;