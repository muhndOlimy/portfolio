export interface SocialLink {
  label: string;
  href: string;
  icon: string; // Material Symbols glyph name
}

export interface Stat {
  value: string;
  label: string;
  dark?: boolean;
}

export interface ExperienceItem {
  period: string;
  company: string;
  role: string;
  summary: string;
  highlights: string[];
  tags: string[];
}

export interface Project {
  name: string;
  year: string;
  description: string;
  tags: string[];
  live?: string;
  repo?: string;
}

export interface EducationItem {
  period: string;
  title: string;
  institution: string;
}

export interface SkillGroup {
  title: string;
  skills: string[];
}

export interface Profile {
  name: string;
  role: string;
  location: string;
  email: string;
  phone: string;
  availability: string;
  heroKicker: string;
  heroTitle: string;
  heroLead: string;
  aboutEyebrow: string;
  aboutHeadline: string;
  aboutBody: string[];
  socials: SocialLink[];
}
