'use client';

import Typography from '@/components/general/typography';
import ImageWrapper from '@/components/data-display/image-wrapper';
import Card from '@/components/layout/card';
import Link from '@/components/navigation/link';
import { EducationDetails as EducationDetailsProps } from '@/lib/types';

const dateFormatOptions: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: 'short',
};

const EducationDetails = ({
  logo,
  darkModeLogo,
  logoAlt,
  school,
  degree,
  field,
  startDate,
  endDate,
  location,
}: EducationDetailsProps) => {

  // Map school names to URLs
  const getSchoolUrl = (logoAlt: string) => {
    const urlMap: { [key: string]: string } = {
      'DePauw University': 'https://www.depauw.edu/',
    };
    return urlMap[logoAlt];
  };

  const schoolUrl = getSchoolUrl(logoAlt);

  return (
    <Card className="mx-auto w-full overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="flex flex-col md:flex-row gap-6 p-6 md:p-8">
        <div className="flex-shrink-0 flex justify-center md:justify-start">
          {schoolUrl ? (
            <Link
              href={schoolUrl}
              externalLink
              noCustomization
              className="block transition-transform duration-200 hover:scale-110"
            >
              <ImageWrapper
                src={logo}
                srcForDarkMode={darkModeLogo}
                alt={logoAlt}
                className="max-w-[80px] md:max-w-[100px]"
              />
            </Link>
          ) : (
            <ImageWrapper
              src={logo}
              srcForDarkMode={darkModeLogo}
              alt={logoAlt}
              className="max-w-[80px] md:max-w-[100px]"
            />
          )}
        </div>
        
        <div className="flex flex-col gap-3 flex-grow">
          <div className="flex flex-col gap-2">
            <Typography variant="body2" className="text-gray-600">
              <span>{location} 🇺🇸</span>
            </Typography>
            <Typography variant="h3" className="font-semibold text-gray-900">
              {school}
            </Typography>
            <Typography variant="subtitle" className="text-gray-700">
              <span>{degree}</span> in <span>{field}</span>
            </Typography>
          </div>
          
          <div className="flex flex-col gap-2">
            <Typography variant="body2" className="text-gray-600">
              {new Intl.DateTimeFormat('en-US', dateFormatOptions).format(startDate)} -{' '}
              {new Intl.DateTimeFormat('en-US', dateFormatOptions).format(endDate)}
            </Typography>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default EducationDetails;