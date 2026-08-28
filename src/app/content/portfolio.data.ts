import type {
  Profile,
  Stat,
  ExperienceItem,
  Project,
  EducationItem,
  SkillGroup,
} from './portfolio.types';

export const profile: Profile = {
  name: 'Mohanad Olimy',
  role: 'Senior Software Engineer',
  location: 'Egypt',
  email: 'muhnd.olimy@gmail.com',
  phone: '+20 122 519 1819',
  availability: 'Available for senior & lead roles',
  heroKicker: "Hi, I'm Mohanad —",
  heroTitle: 'I build products that scale, and teams that ship them.',
  heroLead:
    'Senior Software Engineer with 5+ years across Angular, React, and Node — turning complex requirements into fast, maintainable systems, leading the architecture, and mentoring the engineers who build alongside me.',
  aboutEyebrow: 'About me',
  aboutHeadline:
    'Five years of turning product requirements into clean, maintainable systems teams can build on.',
  aboutBody: [
    "I'm a Senior Software Engineer proficient across the frontend stack — Angular, React, React Native, and TypeScript — as well as server-side development with Node.js and NestJS. I lead architecture decisions, run code reviews, and mentor engineers toward clean, maintainable code.",
    'I actively integrate AI-powered development tools — including large language model APIs, MCP servers, and agents — to accelerate delivery, improve code quality, and prototype intelligent features. Outside of shipping, I teach frontend development at the ITI to cohorts of 20+ students.',
  ],
  socials: [
    { label: 'GitHub', href: 'https://github.com/muhndOlimy', icon: 'code' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/muhndolimy', icon: 'work' },
    { label: 'WhatsApp', href: 'https://api.whatsapp.com/send/?phone=201225191819', icon: 'chat' },
  ],
};

export const stats: Stat[] = [
  { value: '5+ yrs', label: 'Building for the web', dark: true },
  { value: '7', label: 'Companies & teams shipped with' },
  { value: '50+', label: 'Students mentored per cohort at ITI' },
];

export const experience: ExperienceItem[] = [
  {
    period: 'Feb 2025 — Present',
    company: 'Qeema',
    role: 'Senior Software Engineer',
    summary:
      'Architect and deliver high-quality, maintainable frontend solutions optimized for performance and scalability across enterprise applications.',
    highlights: [
      'Lead thorough code reviews, establishing coding standards and engineering best practices across the team.',
      'Mentor junior and mid-level developers through pair programming, 1:1 sessions, and technical workshops.',
      'Drive Agile ceremonies — sprint planning, stand-ups, and retrospectives — to ensure continuous, predictable delivery.',
      'Collaborate with product managers and UI/UX designers to translate requirements into robust, user-centric features.',
    ],
    tags: ['Angular', 'TypeScript', 'Architecture', 'Mentoring'],
  },
  {
    period: 'Jul 2023 — Present',
    company: 'Information Technology Institute (ITI)',
    role: 'External Teaching Instructor',
    summary:
      'Deliver the frontend development curriculum covering Angular, TypeScript, and modern JavaScript frameworks to cohorts of 20+ students.',
    highlights: [
      'Design hands-on, project-based modules that simulate real-world Agile software engineering workflows.',
      'Continuously update course materials to reflect current industry trends, tooling, and best practices.',
    ],
    tags: ['Teaching', 'Angular', 'Ionic','TypeScript', 'Curriculum'],
  },
  {
    period: 'Nov 2023 — Jan 2025',
    company: 'Azentio Software',
    role: 'Senior Software Developer',
    summary:
      'Collaborated with cross-functional teams to architect scalable frontend solutions for banking and fintech platforms.',
    highlights: [
      'Developed responsive, high-performance SPAs using Angular and React, focused on accessibility and mobile-first design.',
      'Spearheaded performance audits using lazy loading, code splitting, and bundle analysis to improve Lighthouse scores.',
    ],
    tags: ['Angular', 'Ionic','Fintech', 'Performance', 'Accessibility'],
  },
  {
    period: 'Jun 2022 — Oct 2023',
    company: 'Kortobaa for Integrated Solutions',
    role: 'Frontend Developer',
    summary:
      'Led end-to-end development of scalable SPA and SSR projects using Angular and Next.js for diverse industry clients.',
    highlights: [
      'Engineered a shared reusable component library adopted across multiple projects, significantly accelerating feature delivery.',
      'Implemented lazy loading, tree shaking, and Webpack bundle optimization strategies to improve load performance.',
      'Mentored junior developers through structured code reviews, pair programming, and technical guidance sessions.',
    ],
    tags: ['Angular', 'Next.js', 'Component library', 'Performance'],
  },
  {
    period: 'Dec 2021 — Jun 2022',
    company: 'Sphinx for Publishing',
    role: 'Frontend Developer',
    summary:
      'Translated Figma and Adobe XD mockups into pixel-perfect, responsive web interfaces with cross-browser compatibility.',
    highlights: [
      'Collaborated with stakeholders during requirement gathering, delivering tailored web solutions aligned with business goals.',
    ],
    tags: ['HTML/CSS', 'Figma', 'Adobe XD', 'Responsive'],
  },
  {
    period: 'Apr 2021 — Nov 2021',
    company: 'Era Solutions',
    role: 'Frontend Developer',
    summary:
      'Developed and integrated custom WordPress templates and plugins using JavaScript, PHP, HTML5, and CSS3.',
    highlights: [
      'Built WooCommerce extensions and configured e-commerce workflows for small-to-medium business clients.',
    ],
    tags: ['WordPress', 'PHP', 'JavaScript', 'WooCommerce'],
  },
];


export const education: EducationItem[] = [
  {
    period: 'Sep 2023 — Present',
    title: 'Computer Science Diploma',
    institution: 'Arab Academy for Science, Technology & Maritime Transport',
  },
  {
    period: 'Oct 2021 — Dec 2021',
    title: 'Intensive Program — Frontend Development',
    institution: 'Information Technology Institute (ITI)',
  },
  {
    period: 'Sep 2014 — Jul 2019',
    title: 'BSc — Science',
    institution: 'Faculty of Science, Alexandria University',
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: 'Frameworks',
    skills: ['Angular', 'React.js', 'Vue.js', 'React Native', 'Ionic', 'NestJS', 'Express.js'],
  },
  {
    title: 'Languages & UI',
    skills: ['TypeScript', 'JavaScript (ES6+)', 'HTML5', 'SCSS', 'Tailwind CSS', 'Angular Material'],
  },
  {
    title: 'Data & tooling',
    skills: ['PostgreSQL', 'MongoDB', 'Firebase', 'Docker', 'Git', 'Vite / Webpack'],
  },
  {
    title: 'AI & ways of working',
    skills: ['Claude API', 'MCP Servers', 'AI Agents', 'Code review', 'Mentoring', 'Agile / Scrum'],
  },
];
