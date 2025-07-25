'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
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
    <Card className="mx-auto w-full h-full overflow-hidden transition-all duration-300 hover:shadow-lg flex flex-col">
      {/* Header */}
      <div className="flex items-center gap-6 md:gap-8 p-6 md:p-8 border-b border-gray-100">
        <div className="flex-shrink-0">
          <ImageWrapper
            src={logo}
            srcForDarkMode={darkModeLogo}
            alt={logoAlt}
            className="max-w-[80px] md:max-w-[100px]"
          />
        </div>
        <div className="flex flex-col gap-2">
          <Typography variant="subtitle" className="font-semibold text-gray-900">
            {position}
          </Typography>
          <div className="flex flex-col gap-1">
            <Typography className="text-gray-700 font-medium">
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
        </div>
      </div>

      {/* Content - Always visible */}
      <div className="px-6 pb-6 md:px-8 md:pb-8 flex-1 flex flex-col justify-center">
        <div className="pt-4">
          <ul className="flex list-disc flex-col gap-2 pl-4">
            {summary?.map((sentence, index) => (
              <Typography 
                component="li" 
                key={index} 
                variant="body2" 
                className="text-gray-600 leading-relaxed"
              >
                {sentence}
              </Typography>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  );
};

export default ExperienceDetails;