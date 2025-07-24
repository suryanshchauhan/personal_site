import * as React from 'react';

import { mergeClasses } from '@/lib/utils';

interface ContainerProps extends React.HTMLAttributes<HTMLElement> {}

const Container = React.forwardRef<HTMLElement, ContainerProps>(
  ({ className, children, ...props }: ContainerProps, ref) => {
    return (
      <section
        className={mergeClasses(
          'w-full bg-gray py-2 md:py-3 2xl:py-4',
          className
        )}
        ref={ref}
        {...props}
      >
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 md:gap-12 md:px-8">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-4 md:gap-6 md:px-8">
        </div>
      </section>
    );
  }
);

Container.displayName = 'Container';

export default Container;

    )
  }
)