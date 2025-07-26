import Tag from '@/components/data-display/tag';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';

const EducationSection = () => {
  return (
    <Container id='education'>
      <div className='flex flex-col items-center gap-4'>
        <div className='self-center'>
          <Tag label='Education' />
        </div>
        <Typography
          variant='subtitle'
          className='max-w-xl text-center'
        >
          My educational foundation:
        </Typography>
      </div>

      <div className='flex flex-col items-center gap-4 max-w-2xl mx-auto'>
        <Typography variant='body1' className='text-center'>
          My educational background is now displayed in the hero section above.
        </Typography>
      </div>
    </Container>
  );
};

export default EducationSection;