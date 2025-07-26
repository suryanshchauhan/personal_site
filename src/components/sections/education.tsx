import { EDUCATION } from '@/lib/data';
import EducationDetails from '@/components/data-display/education-details';
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
          My academic background and achievements:
        </Typography>
      </div>

      <div className='flex flex-col gap-6 max-w-4xl mx-auto'>
        {EDUCATION?.map((education, index) => (
          <EducationDetails
            key={index}
            {...education}
          />
        ))}
      </div>
    </Container>
  );
};

export default EducationSection;