
import type { LucideIcon } from 'lucide-react';

export interface NavLink {
  href: string;
  label: string;
  external?: boolean;
  icon?: LucideIcon; 
}

export interface SocialLink {
  name: string;
  url: string;
  icon: LucideIcon;
  handle?: string; 
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
  icon?: LucideIcon; 
  level?: number; 
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

export interface SeoKeywordGeneratorInput {
  portfolioContent: string;
}

export interface SeoKeywordGeneratorOutput {
  keywords: string; 
}

// Types for AI Photo Editor
export interface PhotoEditorFilters {
  brightness: number; // 0 to 2 (default 1)
  contrast: number;   // 0 to 2 (default 1)
  saturate: number;   // 0 to 2 (default 1)
  grayscale: number;  // 0 to 1 (default 0)
  sepia: number;      // 0 to 1 (default 0)
  hueRotate: number;  // 0 to 359 (degrees, default 0)
  invert: number;     // 0 to 1 (default 0)
  blur: number;       // 0 to 10 (px, default 0)
}

export interface AISuggestion {
  name: string;
  description: string;
  filters: Partial<PhotoEditorFilters>; // Using Partial as AI might not suggest all filters
}

export interface ColorGradingSuggesterInput {
  imageDataUri: string;
}

export interface ColorGradingSuggesterOutput {
  suggestions: AISuggestion[];
}
