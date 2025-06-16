// Removed Project, Photo, Skill, ExperienceItem as they are not used in the new design

export interface NavLink {
  href: string;
  label: string;
  external?: boolean; // To handle external links in nav
}

// Add any new types specific to "Easy Kripsi" if needed
// For example, for features, testimonials, etc.

export interface FeatureComparisonItem {
  feature: string;
  basic: boolean | string; // boolean for check, string for text
  advance: boolean | string;
  description?: string;
}

export interface AdvantageItem {
  title: string;
  description: string;
  iconName: "Zap" | "Clock" | "ThumbsUp"; // Or a more generic string if icons vary widely
}

export interface TestimonialItem {
  quote: string;
  name: string;
  university: string;
  avatarInitial: string;
  avatarBg: string; // e.g. "bg-blue-500"
}

export interface FooterLinkItem {
  href: string;
  label: string;
  className?: string;
}

export interface FooterSection {
  title: string;
  links: FooterLinkItem[];
}
