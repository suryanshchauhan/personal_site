import HeroSection from '@/components/sections/hero';
import ContactSection from '@/components/sections/contact';
import SkillsSection from '@/components/sections/skills';
import ExperienceSection from '@/components/sections/experiences';
import TestimonialsSection from '@/components/sections/testimonials';
import ProjectSection from '@/components/sections/projects';

export default function Home() {
  return (
    <>
      <HeroSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectSection />
      {/* <TestimonialsSection /> */}
      <ContactSection />
    </>
  );
}