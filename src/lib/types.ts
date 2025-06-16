export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  projectUrl?: string;
  repoUrl?: string;
  imageHint?: string;
}

export interface Photo {
  id: string;
  title: string;
  imageUrl: string;
  description?: string;
  imageHint?: string;
}

export interface NavLink {
  href: string;
  label: string;
}

export interface Skill {
  name: string;
  icon?: React.ComponentType<{ className?: string }>;
}

export interface ExperienceItem {
  role: string;
  company: string;
  duration: string;
  description: string;
}
