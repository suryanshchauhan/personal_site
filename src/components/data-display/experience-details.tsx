'use client';

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
    <Card className="mx-auto w-full overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="flex items-center gap-6 md:gap-8 p-6 md:p-8">
        <div className="flex-shrink-0">
          <ImageWrapper
            src={logo}
            srcForDarkMode={darkModeLogo}
            alt={logoAlt}
            className="max-w-[60px] md:max-w-[80px]"
          />
        </div>
        <div className="flex flex-col gap-2 md:gap-3">
          <Typography variant="subtitle" className="font-semibold text-gray-900">
            {position}
          </Typography>
          <div className="flex flex-col gap-1">
            <Typography variant="body2" className="text-gray-600">
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
              <div className="flex items-center gap-1">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
                </span>
                <Typography variant="body2" className="text-green-600 font-semibold">
                  Current
                </Typography>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Content - Always visible */}
    </Card>
  );
};

export default ExperienceDetails;