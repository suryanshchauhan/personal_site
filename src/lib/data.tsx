import { Github, Linkedin, Instagram } from 'lucide-react';

import LogoJavascript from '/public/images/logos/icon-javascript.svg';
import LogoC from '/public/images/logos/icon-c.svg';
import LogoJava from '/public/images/logos/icon-java.svg';
import LogoR from '/public/images/logos/icon-r.svg';
import LogoErlang from '/public/images/logos/icon-erlang.svg';
import LogoAlleo from '/public/images/logos/logo-alleo.png';
import LogoTypescript from '/public/images/logos/icon-typescript.svg';
import LogoReact from '/public/images/logos/icon-react.svg';
import LogoNextjs from '/public/images/logos/icon-nextjs.svg';
import LogoNodejs from '/public/images/logos/icon-nodejs.svg';
import LogoExpress from '/public/images/logos/icon-express.svg';
import LogoExpressLight from '/public/images/logos/icon-express-light.svg';
import LogoPostgreSQL from '/public/images/logos/icon-postgresql.svg';
import LogoMongoDB from '/public/images/logos/icon-mongodb.svg';
import LogoTailwindcss from '/public/images/logos/icon-tailwindcss.svg';
import LogoPrisma from '/public/images/logos/icon-prisma.svg';
import LogoCypress from 'public/images/logos/icon-cypress.svg';
import LogoCypressLight from 'public/images/logos/icon-cypress-light.svg';
import LogoGit from '/public/images/logos/icon-git.svg';
import LogoPython from '/public/images/logos/icon-python.svg';
import LogoDocker from '/public/images/logos/icon-docker.svg';
import LogoFireBase from '/public/images/logos/icon-firebase.svg';
import LogoGithub from '/public/images/logos/icon-github.svg';
import LogoDataprophet from '/public/images/logos/logo-dataprophet.webp';
import LogoDataprophetLight from '/public/images/logos/logo-dataprophet-light.png';
import LogoTechpoint from '/public/images/logos/logo-techpoint.png';
import LogoTechpointLight from '/public/images/logos/logo-techpoint-light.png';

import LogoDepauw from '/public/images/logos/logo-depauw.png';
import LogoDepauwLight from '/public/images/logos/logo-depauw-light.png';
import LogoHrtc from '/public/images/logos/logo-hrtc.png';
import LogoAws from '/public/images/logos/icon-aws.svg';
import LogoKubernetes from '/public/images/logos/icon-kubernetes.svg';
import LogoPowerbi from '/public/images/logos/icon-powerbi.svg';
import LogoTableau from '/public/images/logos/icon-tableau.svg';
import LogoDjango from '/public/images/logos/icon-django.svg';
import LogoFigma from '/public/images/logos/icon-figma.svg';
import LogoSass from '/public/images/logos/icon-sass.svg';
import LogoRedux from '/public/images/logos/icon-redux.svg';
import LogoCss from '/public/images/logos/icon-css.svg';
import LogoGraphql from '/public/images/logos/icon-graphql.svg';
import LogoJenkins from '/public/images/logos/icon-jenkins.svg';
import LogoJest from '/public/images/logos/icon-jest.svg';

import { ExperienceDetails, ProjectDetails, TechDetails, TestimonialDetails } from '@/lib/types';

export const NAV_LINKS = [
  {
    label: 'Skills',
    href: '#skills',
  },
  {
    label: 'Experience',
    href: '#experience',
  },
  {
    label: 'Projects',
    href: '#projects',
  },
  {
    label: 'Contact',
    href: '#contact',
  },
];

export const SOCIAL_LINKS = [
  {
    icon: Linkedin,
    url: 'https://www.linkedin.com/in/suryanshchauhan2001/',
  },
  {
    icon: Github,
    url: 'https://github.com/suryanshchauhan',
  },
  {
    icon: Instagram,
    url: 'https://instagram.com/techwithsuri',
  },
];

export const TECHNOLOGIES: TechDetails[] = [
  {
    label: 'Python',
    logo: LogoPython,
    url: 'https://www.python.org/',
  },
  {
    label: 'Java',
    logo: LogoJava,
    url: 'https://www.java.com/',
  },
  {
    label: 'C++',
    logo: LogoC,
    url: 'https://isocpp.org/',
  },
  {
    label: 'R',
    logo: LogoR,
    url: 'https://www.r-project.org/',
  },
  {
    label: 'Erlang',
    logo: LogoErlang,
    url: 'https://www.erlang.org/',
  },
  {
    label: 'CSS',
    logo: LogoCss,
    url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
  },
  {
    label: 'SASS',
    logo: LogoSass,
    url: 'https://sass-lang.com/',
  },
  {
    label: 'Tailwindcss',
    logo: LogoTailwindcss,
    url: 'https://tailwindcss.com/',
  },
  {
    label: 'Javascript',
    logo: LogoJavascript,
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    label: 'Typescript',
    logo: LogoTypescript,
    url: 'https://www.typescriptlang.org/',
  },
  {
    label: 'React',
    logo: LogoReact,
    url: 'https://react.dev/',
  },
  {
    label: 'Next.js',
    logo: LogoNextjs,
    url: 'https://nextjs.org/',
  },
  {
    label: 'Node.js',
    logo: LogoNodejs,
    url: 'https://nodejs.org/en',
  },
  {
    label: 'Express.js',
    logo: LogoExpress,
    darkModeLogo: LogoExpressLight,
    url: 'https://expressjs.com/',
  },
  {
    label: 'Django',
    logo: LogoDjango,
    url: 'https://www.djangoproject.com/',
  },
  {
    label: 'PostgreSQL',
    logo: LogoPostgreSQL,
    url: 'https://www.postgresql.org/',
  },
  {
    label: 'MongoDB',
    logo: LogoMongoDB,
    url: 'https://www.mongodb.com/',
  },

  {
    label: 'Prisma',
    logo: LogoPrisma,
    url: 'https://www.prisma.io/',
  },
  {
    label: 'Git',
    logo: LogoGit,
    url: 'https://git-scm.com/',
  },
  {
    label: 'GitHub',
    logo: LogoGithub,
    url: 'https://github.com',
  },
  {
    label: 'Docker',
    logo: LogoDocker,
    url: 'https://www.docker.com/',
  },
  {
    label: 'Kubernetes',
    logo: LogoKubernetes,
    url: 'https://kubernetes.io/',
  },
  {
    label: 'AWS',
    logo: LogoAws,
    url: 'https://aws.amazon.com/',
  },
  {
    label: 'Firebase',
    logo: LogoFireBase,
    url: 'https://firebase.google.com/',
  },
  {
    label: 'Cypress',
    logo: LogoCypress,
    darkModeLogo: LogoCypressLight,
    url: 'https://www.cypress.io/',
  },
  {
    label: 'Jenkins',
    logo: LogoJenkins,
    url: 'https://www.jenkins.io/',
  },
  {
    label: 'Jest',  
    logo: LogoJest,
    url: 'https://jestjs.io/',
  },
  {
    label: 'Tableau',
    logo: LogoTableau,
    url: 'https://www.tableau.com/',
  },
  {
    label: 'PowerBI',
    logo: LogoPowerbi,
    url: 'https://www.microsoft.com/en-us/power-platform/products/power-bi',
  },
  {
    label: 'GraphQL',
    logo: LogoGraphql,
    url: 'https://graphql.org/',
  },
  {
    label: 'Redux',
    logo: LogoRedux,
    url: 'https://redux.js.org/',
  },
  {
    label: 'Figma',
    logo: LogoFigma,
    url: 'https://www.figma.com/',
  },
];

export const PROJECTS: ProjectDetails[] = [
  {
    name: 'DTrack',
    description:
      'Streamline your job search with this web app. Log & organize applications and get insights into your job hunt. User-friendly interface with a dashboard and detailed views. Save time, reduce stress, and land your dream job.',
    technologies: [
      'MERN',
      'REST API',
      'CRUD'
    ],
    url: 'https://github.com/suryanshchauhan/DTrack/',
  },
  {
    name: 'Today I Learned',
    description:
      '"TIL" is a web app for users to share and upvote/downvote interesting facts. It features category-based filtering for efficient fact browsing.',
    technologies: ['FULLSTACK', 'REACT', 'SUPABASE'],
    url: 'https://github.com/suryanshchauhan/today-i-learned/',
  },
  {
    name: 'iBudget',
    description:
      'A full-stack budget management application with user authentication, account creation, budget tracking, and secure data management using Supabase.',
    url: 'https://github.com/AndreiBalan-dev/iBudgets/',
    technologies: [
      'REACT.JS',
      'JAVASCRIPT',
      'SUPABASE' 
    ],
  },
  {
    name: 'COVID Stats',
    description:
      'COVID stats (visual) for every country - Total Cases Per Million, New Cases Per Million, Total Deaths Per Million, Total Tests Per Million using RShiny with an option of date range. You can hover over countries, zoom in/zoom out etc.',
    url: 'https://github.com/suryanshchauhan/COVID_Stats/',
    technologies: [
      'R',
      'SHINY',
    ],
  },
  {
    name: 'Premier League Predictions',
    description:
      'Comprehensive analysis of the 2023-24 Premier League season using data-driven insights and predictive models to forecast team standings and player performances, enhancing understanding and enjoyment of the league.',
    url: 'https://github.com/suryanshchauhan/PremierLeaguePredictions/',
    technologies: ['R', 'LINEAR REGRESSION', 'PREDICTIVE ANALYSIS', 'DATA VISUALIZATION'],
  },
  {
    name: 'TSP Solver',
    description:
      'Comprehensive analysis of the 2023-24 Premier League season using data-driven insights and predictive models to forecast team standings and player performances, enhancing understanding and enjoyment of the league.',
    url: 'https://github.com/suryanshchauhan/TSPsolver/',
    technologies: ['PYTHON', 'GENETIC ALGORITHM', 'AI'],
  },
  {
    name: 'NIM Game Python',
    description:
      'Comprehensive analysis of the 2023-24 Premier League season using data-driven insights and predictive models to forecast team standings and player performances, enhancing understanding and enjoyment of the league.',
    url: 'https://github.com/suryanshchauhan/NIMGamePython/',
    technologies: ['PYTHON', 'AI'],
  },
  {
    name: 'Sudoku AI',
    description:
      'Comprehensive analysis of the 2023-24 Premier League season using data-driven insights and predictive models to forecast team standings and player performances, enhancing understanding and enjoyment of the league.',
    url: 'https://github.com/suryanshchauhan/SudokuPython/',
    technologies: ['PYTHON', 'AI', 'LOGIC'],
  },
];

export const EXPERIENCES: ExperienceDetails[] = [
  {
    logo: LogoAlleo,
    logoAlt: 'Alleo',
    position: 'QA Business Analyst Intern',
    startDate: new Date('2022-05-01'),
    endDate: new Date('2022-08-31'),
    summary: [
      'Spearheaded the tracking and resolution of over 150 issues, logging concerns and ensuring updates were communicated to the product team within 24 hours.',
      'Conducted competitive analysis which involved creating 65+ organizational charts and market maps to directly influence three strategic decisions.',
      'Formulated 120+ detailed test cases that matched specific business requirements, enhancing the coverage of business and system functionalities by 40%.',
    ],
  },
  {
    logo: LogoTechpoint,
    logoAlt: 'TechPoint',
    darkModeLogo: LogoTechpointLight,
    position: 'UI/UX Intern',
    startDate: new Date('2022-05-01'),
    endDate: new Date('2022-08-31'),
    summary: [
      "Collaborated with a team of 10 in 'The Pitch' competition, devising strategies that aimed to increase tech job openings in Indiana by 25%.",
      "Led the UI design for the competition's solution, developing and refining 7 prototypes based on feedback from stakeholders.",
      "Secured first place in the 'Tech Jobs in Indiana' category, recognized for outstanding strategy and execution that potentially impacts regional employment.'"
    ],
  },
  {
    logo: LogoDataprophet,
    logoAlt: 'DataProphet',
    darkModeLogo: LogoDataprophetLight,
    position: 'Data Science Intern',
    startDate: new Date('2021-06-01'),
    endDate: new Date('2022-08-31'),
    summary: [
      'Developed a 3D model using Blender to establish a benchmark in quality assessment for metal ball manufacturing.',
      'Created and implemented a damage recognition system, increasing detection accuracy of deviations by 30%.',
      'Utilized object detection and TensorFlow in developing ML models that automated 98% of quality control tasks, reducing manual inspection by 95%.',
    ],
  },
  {
    logo: LogoDepauw,
    logoAlt: 'DePauw University',
    darkModeLogo: LogoDepauwLight,
    position: 'STEM Liaison',
    startDate: new Date('2021-11-01'),
    endDate: new Date('2022-12-31'),
    summary: [
      'Developed a social media action plan that increased engagement by 200% and highlighted five grant opportunities.',
      'Utilized HTML5, ReactJS, CSS3, jQuery, and Bootstrap 4 to develop a comprehensive website that showcased program resources, events, and activities, enhancing visitor interaction by 80%.',
      'Supported the manager in strategic initiatives, contributing to a 35% increase in program participation.',
      'Designed and distributed a weekly newsletter via MailChimp to 1,000+ subscribers, featuring important updates and relevant stories that boosted open rates by 20%.',
    ],
  },
  {
    logo: LogoHrtc,
    logoAlt: 'Himachal Road Transport Corporation (HRTC)',
    position: 'Software Engineer Intern',
    startDate: new Date('2021-11-01'),
    endDate: new Date('2022-12-31'),
    summary: [
      'Led the development of a full-stack online bus ticket reservation system using React.js and Redux, enhancing the booking process, which resulted in a 30% reduction in ticket purchase time and a 25% increase in customer satisfaction.',
      'Developed robust backend applications with Node.js and Express, coupled with MongoDB for database management, which improved system efficiency and operational continuity by 35%.',
      'Integrated APIs for real-time seat availability and payment processing, effectively streamlining transactions and boosting booking volume by 20%.',
    ],
  },
  
];
export const TESTIMONIALS: TestimonialDetails[] = [];
