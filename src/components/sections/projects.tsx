import { PROJECTS } from '@/lib/data';
import ProjectDetails from '@/components/data-display/project-details';
import Tag from '@/components/data-display/tag';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';

const ProjectSection = () => {
  return (
    <Container id='projects'>
      <div className='flex flex-col items-center gap-4'>
        <div className='self-center'>
          <Tag label='Projects' />
        </div>
        <Typography
          variant='subtitle'
          className='max-w-xl text-center'
        >
          Some of the noteworthy projects I have built:
        </Typography>
      </div>

      <ProjectDetails projects={PROJECTS} />
    </Container>
  );
};

export default ProjectSection;