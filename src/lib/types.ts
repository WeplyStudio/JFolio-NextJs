import type { LucideIcon } from 'lucide-react';

export interface NavLink {
  href: string;
  label: string;
  external?: boolean;
  icon?: LucideIcon; // Optional icon for nav links
}

export interface SocialLink {
  name: string;
  url: string;
  icon: LucideIcon;
  handle?: string; // e.g. @username
}

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageHint?: string;
  tags: string[];
  projectUrl?: string;
  repoUrl?: string;
}

export interface Photo {
  id: string;
  title: string;
  description?: string;
  imageUrl: string;
  imageHint?: string;
  category?: string;
}

export interface Skill {
  name: string;
  icon?: LucideIcon; // Or React.ComponentType if using custom SVGs
  level?: number; // Optional skill level 0-100
}

export interface ExperienceItem {
  role: string;
  company: string;
  duration: string;
  description: string;
}

export interface AboutData {
  bio: string;
  skills: Skill[];
  experience: ExperienceItem[];
}

export interface FooterLinkItem {
  href: string;
  label: string;
  external?: boolean;
  className?: string;
}

export interface FooterSection {
  title: string;
  links: FooterLinkItem[];
}

// Types for SEO Keyword Generator
export interface SeoKeywordGeneratorInput {
  portfolioContent: string;
}

export interface SeoKeywordGeneratorOutput {
  keywords: string; // Comma-separated
}
