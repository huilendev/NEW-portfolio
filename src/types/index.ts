// src/types/index.ts
export interface NavItem {
  name: string;
  href: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  period: string;
  description: string[];
  technologies: string[];
  url?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  github?: string;
  external?: string;
  featured?: boolean;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface Content {
  nav: NavItem[];
  hero: {
    greeting: string;
    name: string;
    tagline: string;
    description: string;
    cta: string;
  };
  about: {
    description: string[];
    technologies: string[];
  };
  experiences: Experience[];
  projects: Project[];
  contact: {
    title: string;
    description: string;
    email: string;
  };
  socials: SocialLink[];
}
