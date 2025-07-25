import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { mergeClasses } from '@/lib/utils';
import { useTranslation } from '@/components/layout/header';

// Translation dictionary
const translations: { [key: string]: string } = {
  // Hero Section
  "Hi, I'm Suryansh": "Hallo, ich bin Suryansh",
  "Currently": "Derzeit",
  "Software Engineer at": "Software-Ingenieur bei",
  "Making pretty software ✨ using cutting-edge fullstack and front-end technologies for agentic AI platforms.": "Erstelle schöne Software ✨ mit modernsten Fullstack- und Frontend-Technologien für agentische KI-Plattformen.",
  "United States of America": "Vereinigte Staaten von Amerika",
  "indianapolis": "indianapolis",
  
  // Skills Section
  "Skills": "Fähigkeiten",
  "The skills, tools and technologies I am really good at:": "Die Fähigkeiten, Tools und Technologien, in denen ich wirklich gut bin:",
  
  // Experience Section
  "Experience": "Erfahrung",
  "Here are the places where I've worked:": "Hier sind die Orte, an denen ich gearbeitet habe:",
  "Current": "Aktuell",
  
  // Projects Section
  "Projects": "Projekte",
  "Some of the noteworthy projects I have built:": "Einige der bemerkenswerten Projekte, die ich erstellt habe:",
  
  // Contact Section
  "Get in touch": "Kontakt aufnehmen",
  "I'm always on the lookout for new opportunities and my inbox is open for all. If you're considering my contribution, have a question, or just want to say hi, you can count on hearing back from me!": "Ich bin immer auf der Suche nach neuen Möglichkeiten und mein Posteingang ist für alle offen. Wenn Sie meinen Beitrag in Betracht ziehen, eine Frage haben oder einfach nur Hallo sagen möchten, können Sie darauf zählen, von mir zu hören!",
  "You may also find me on these platforms!": "Sie können mich auch auf diesen Plattformen finden!",
  "Copied!": "Kopiert!",
  
  // Footer
  "suryansh.wiki": "suryansh.wiki",
  
  // Job Positions
  "QA Business Analyst Intern": "QA Business Analyst Praktikant",
  "UI/UX Intern": "UI/UX Praktikant",
  "Data Science Intern": "Data Science Praktikant",
  "STEM Liaison": "STEM-Verbindungsbeauftragte",
  "Software Engineer Intern": "Software-Ingenieur Praktikant",
};

const translateText = (text: string, isGerman: boolean): string => {
  if (!isGerman) return text;
  return translations[text] || text;
};

const typographyVariants = cva('text-gray-600 text-normal', {
  variants: {
    variant: {
      h1: 'text-4xl font-semibold md:font-bold md:text-5xl md:tracking-[-0.02em] lg:text-6xl lg:leading-[72px] text-gray-900',
      h2: 'text-lg md:text-4xl font-semibold tracking-[-0.02em] text-gray-900',
      h3: 'text-2xl md:text-3xl font-semibold tracking-[-0.02em] text-gray-900',
      subtitle: 'text-lg md:text-xl',
      body1: 'text-base md:text-lg',
      body2: 'text-base',
      body3: 'text-sm',
    },
  },
  defaultVariants: {
    variant: 'body2',
  },
});

interface TypographyProps
  extends React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLHeadingElement>,
      HTMLHeadingElement
    >,
    VariantProps<typeof typographyVariants> {
  component?: React.ElementType;
  noTranslate?: boolean;
}

let elementMapping = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  subtitle: 'p',
  body1: 'p',
  body2: 'p',
  body3: 'p',
};

type ComponentElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';

const Typography = React.forwardRef<
  HTMLHeadingElement | HTMLParagraphElement,
  TypographyProps
>(
  (
    { component, className = '', variant, children, noTranslate = false, ...props }: TypographyProps,
    ref
  ) => {
    const { isGerman } = useTranslation();
    const Comp = (
      component ? component : variant ? elementMapping[variant] : 'p'
    ) as ComponentElement;

    const translatedChildren = React.useMemo(() => {
      if (noTranslate || !children) return children;
      
      if (typeof children === 'string') {
        return translateText(children, isGerman);
      }
      
      return children;
    }, [children, isGerman, noTranslate]);
    return (
      <Comp
        className={mergeClasses(typographyVariants({ variant }), className)}
        ref={ref}
        {...props}
      >
        {translatedChildren}
      </Comp>
    );
  }
);

Typography.displayName = 'Typography';

export default Typography;
