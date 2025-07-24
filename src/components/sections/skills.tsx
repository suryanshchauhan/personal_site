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

      items.forEach((item) => {
        const itemRect = item.getBoundingClientRect();
        const itemCenterX = itemRect.left + itemRect.width / 2;
        const distance = Math.abs(centerX - itemCenterX);
        
        // Remove color from all items first
        item.classList.add('grayscale');
        
        // Add color to the item closest to center (within threshold)
        if (distance < 100) {
          item.classList.remove('grayscale');
        }
      });
    };

    // Run initially and on animation frame
    const animationFrame = () => {
      handleScroll();
      requestAnimationFrame(animationFrame);
    };
    
    requestAnimationFrame(animationFrame);
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
        <div className="flex animate-scroll-fast gap-8 md:gap-12">
          {/* First set of technologies */}
          {TECHNOLOGIES.map((technology, index) => (
            <div key={index} className="tech-item flex-shrink-0 grayscale transition-all duration-300">
              <TechDetails {...technology} />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {TECHNOLOGIES.map((technology, index) => (
            <div key={`duplicate-${index}`} className="tech-item flex-shrink-0 grayscale transition-all duration-300">
              <TechDetails {...technology} />
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default SkillsSection;
