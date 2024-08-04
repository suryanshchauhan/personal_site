import Image from 'next/image';
import { ExternalLink, Github } from 'lucide-react';

import { ProjectDetails as ProjectDetailsType } from '@/lib/types';
import { mergeClasses } from '@/lib/utils';
import Typography from '@/components/general/typography';
import Link from '@/components/navigation/link';
import Tag from '@/components/data-display/tag';
import Card from '@/components/layout/card';

type ProjectDetailsProps = {
  projects: ProjectDetailsType[];
};

const ProjectDetails = ({ projects }: ProjectDetailsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto max-w-6xl">
      {projects.map((project, index) => (
        <Card key={index} className="flex flex-col">
          {/* Content */}
          <div className="flex flex-col gap-6 p-8 lg:p-12">
            <Typography variant="subtitle" className="font-semibold text-gray-900">
              {project.name}
            </Typography>
            <Typography>{project.description}</Typography>
            <div className="flex flex-wrap gap-2">
              {project.technologies?.map((technology, techIndex) => (
                <Tag key={techIndex} label={technology} />
              ))}
            </div>
            <Link
              href={project.url}
              noCustomization
              className="self-start rounded-lg p-1.5 hover:bg-gray-50 [&_svg]:stroke-gray-500"
              externalLink
            >
              <ExternalLink />
            </Link>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default ProjectDetails;
