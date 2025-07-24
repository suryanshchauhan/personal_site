import Typography from '@/components/general/typography';
import ImageWrapper from '@/components/data-display/image-wrapper';
import Card from '@/components/layout/card';
import { ExperienceDetails as ExperienceDetailsProps } from '@/lib/types';

const dateFormatOptions: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: 'short',
};

const ExperienceDetails = ({
  logo,
  darkModeLogo,
  logoAlt,
  position,
  currentlyWorkHere,
  startDate,
  endDate,
  summary,
}: ExperienceDetailsProps) => {
  return (
    <Card className="mx-auto flex w-full max-w-5xl flex-col justify-between gap-6 p-6 md:flex-row md:gap-8 md:p-8 hover:shadow-lg transition-shadow duration-300">
      <div className="max-md:order-1 md:w-1/4">
        <ImageWrapper
          src={logo}
          srcForDarkMode={darkModeLogo}
          alt={logoAlt}
          className="max-w-[100px] md:max-w-[120px]"
        />
      </div>
      <div className="flex flex-col gap-3 max-md:order-3 md:w-2/4">
        <Typography variant="subtitle" className="font-semibold text-gray-900">
          {position}
        </Typography>
        <ul className="flex list-disc flex-col gap-1.5 pl-4">
          {summary?.map((sentence, index) => (
            <Typography component="li" key={index} variant="body2" className="text-gray-600">
              {sentence}
            </Typography>
          ))}
        </ul>
      </div>
      <div className="max-md:order-2 md:w-1/4 flex flex-col gap-1">
        <Typography className="text-gray-700 md:text-right font-medium">
          {new Intl.DateTimeFormat('en-US', dateFormatOptions).format(
            startDate
          )}{' '}
          -{' '}
          {currentlyWorkHere
            ? 'Present'
            : endDate
            ? new Intl.DateTimeFormat('en-US', dateFormatOptions).format(
                endDate
              )
            : 'NA'}
        </Typography>
        {currentlyWorkHere && (
          <div className="flex items-center gap-1 md:justify-end">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
            </span>
            <Typography variant="body3" className="text-green-600 font-medium">
              Current
            </Typography>
          </div>
        )}
      </div>
    </Card>
  );
};

export default ExperienceDetails;
