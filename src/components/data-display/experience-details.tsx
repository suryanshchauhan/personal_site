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
      <div className="flex items-center gap-8 md:gap-12 p-8 md:p-12 border-b border-gray-100 flex-shrink-0">
        <div className="flex-shrink-0">
          <ImageWrapper
            src={logo}
            srcForDarkMode={darkModeLogo}
            alt={logoAlt}
            className="max-w-[90px] md:max-w-[126px] lg:max-w-[144px]"
          />
        </div>
        <div className="flex flex-col gap-3 md:gap-4">
          <Typography variant="h3" className="font-bold text-gray-900">
            {position}
          </Typography>
          <div className="flex flex-col gap-2">
            <Typography variant="subtitle" className="text-gray-700 font-semibold">
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
      <div className="px-6 pb-6 md:px-8 md:pb-8 flex-grow flex items-center">
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