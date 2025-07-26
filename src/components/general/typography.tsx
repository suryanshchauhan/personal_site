'use client';

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { mergeClasses } from '@/lib/utils';
import { useTranslation } from '@/lib/providers';

// Translation dictionary
const translations: { [key: string]: string } = {
  // Hero Section
  "Hi, I'm Suryansh": "Hallo, ich bin Suryansh",
  "Currently": "Derzeit",
  "Software Engineer at": "Software-Ingenieur bei",
  "Making pretty software ✨ using cutting-edge fullstack and front-end technologies for agentic AI platforms.": "Erstelle schöne Software ✨ mit modernsten Fullstack- und Frontend-Technologien für agentische KI-Plattformen.",
  "Developing web tools that keep trucks rolling, glitches rare, and the ops team smiling.": "Entwickle Web-Tools, die LKWs am Laufen halten, Fehler selten machen und das Ops-Team zum Lächeln bringen.",
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
  
  // Education Section
  "Education": "Bildung",
  "My educational foundation:": "Meine Bildungsgrundlage:",
  "Bachelor of Arts": "Bachelor of Arts",
  "Computer Science": "Informatik",
  "DePauw University": "DePauw University",
  
  // Footer
  "suryansh.wiki": "suryansh.wiki",
  
  // Job Positions
  "QA Business Analyst Intern": "QA Business Analyst Praktikant",
  "UI/UX Intern": "UI/UX Praktikant",
  "Data Science Intern": "Data Science Praktikant",
  "STEM Liaison": "STEM-Verbindungsbeauftragte",
  "Software Engineer Intern": "Software-Ingenieur Praktikant",
  
  // Project Descriptions
  "Streamline your job search with this web app. Log & organize applications and get insights into your job hunt. User-friendly interface with a dashboard and detailed views. Save time, reduce stress, and land your dream job.": "Optimieren Sie Ihre Jobsuche mit dieser Web-App. Protokollieren und organisieren Sie Bewerbungen und erhalten Sie Einblicke in Ihre Jobsuche. Benutzerfreundliche Oberfläche mit Dashboard und detaillierten Ansichten. Sparen Sie Zeit, reduzieren Sie Stress und landen Sie Ihren Traumjob.",
  "\"TIL\" is a web app for users to share and upvote/downvote interesting facts. It features category-based filtering for efficient fact browsing.": "\"TIL\" ist eine Web-App für Benutzer, um interessante Fakten zu teilen und zu bewerten. Sie bietet kategoriebasierte Filterung für effizientes Durchsuchen von Fakten.",
  "A full-stack budget management application with user authentication, account creation, budget tracking, and secure data management using Supabase.": "Eine Full-Stack-Budgetverwaltungsanwendung mit Benutzerauthentifizierung, Kontoerstellung, Budgetverfolgung und sicherer Datenverwaltung mit Supabase.",
  "COVID stats (visual) for every country - Total Cases Per Million, New Cases Per Million, Total Deaths Per Million, Total Tests Per Million using RShiny with an option of date range. You can hover over countries, zoom in/zoom out etc.": "COVID-Statistiken (visuell) für jedes Land - Gesamtfälle pro Million, neue Fälle pro Million, Gesamttodesfälle pro Million, Gesamttests pro Million mit RShiny mit einer Option für Datumsbereich. Sie können über Länder schweben, hinein-/herauszoomen usw.",
  "Comprehensive analysis of the 2023-24 Premier League season using data-driven insights and predictive models to forecast team standings and player performances, enhancing understanding and enjoyment of the league.": "Umfassende Analyse der Premier League-Saison 2023-24 mit datengesteuerten Erkenntnissen und Vorhersagemodellen zur Prognose von Teamplatzierungen und Spielerleistungen, um das Verständnis und den Genuss der Liga zu verbessern.",
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

    // Add lang attribute for German text to enable CSS targeting
    const langProps = isGerman && typeof children === 'string' && translations[children] 
      ? { lang: 'de' } 
      : {};

    return (
      <Comp
        className={mergeClasses(typographyVariants({ variant }), className)}
        ref={ref}
        {...langProps}
        {...props}
      >
        {translatedChildren}
      </Comp>
    );
  }
);

Typography.displayName = 'Typography';

export default Typography;
