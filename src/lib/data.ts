
import type { NavLink, Photo, Skill, ExperienceItem, FooterLinkItem, SocialLink, AISuggestion, Testimonial } from './types';
import { Github, Linkedin, Twitter, Instagram, Code, Camera, Briefcase, GraduationCap, Lightbulb, Bot, BarChart2, PenTool, WandSparkles, Film, Image as ImageIcon, Palette, MessageSquareText } from 'lucide-react';

export const siteConfig = {
  name: "jasonn.zip",
  jobTitle: "Digital Craftsman & Creative Mind",
  email: "jason@weplystudio.my.id",
  phone: "+62 858-6805-5463",
  location: "Tanjung Pinang, Kepulauan Riau",
  socials: [
    { name: "GitHub", url: "https://github.com/", icon: Github, handle: "@yourgithub" },
    { name: "LinkedIn", url: "https://linkedin.com/in/", icon: Linkedin, handle: "yourlinkedin" },
    { name: "Twitter", url: "https://twitter.com/", icon: Twitter, handle: "@yourtwitter" },
    { name: "Instagram", url: "https://instagram.com/", icon: Instagram, handle: "@yourinstagram" },
  ] as SocialLink[],
  keywords: ["portfolio", "developer", "photographer", "web design", "react", "nextjs", "ai photo editor"],
};

export const navLinks: NavLink[] = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#testimonials", label: "Testimonials", icon: MessageSquareText },
  { href: "#photo-editor", label: "AI Photo Editor", icon: WandSparkles },
  { href: "#photography", label: "Photography" },
  { href: "#seo-tool", label: "SEO Tool" },
  { href: "#contact", label: "Contact" },
];

export const aboutData = {
  bio: `Hello! I'm ${siteConfig.name.split('.')[0]}, a passionate ${siteConfig.jobTitle} based in ${siteConfig.location}.
  I thrive on creating beautiful, functional, and user-centered digital experiences.
  My journey in tech started with a curiosity for how things work, which blossomed into a career where I can build and innovate.

  When I'm not coding or designing, I love exploring the world through my camera lens, capturing moments and stories.
  This portfolio is a glimpse into my world – a blend of technology and artistry. Let's create something amazing together!`,
  skills: [
    { name: "JavaScript", icon: Code, level: 90 },
    { name: "React", icon: Code, level: 90 },
    { name: "Next.js", icon: Code, level: 85 },
    { name: "Nuxt.js", icon: Code, level: 80 },
    { name: "Vue.js", icon: Code, level: 80 },
    { name: "PHP", icon: Code, level: 75 },
    { name: "Tailwind CSS", icon: Code, level: 95 },
    { name: "Bootstrap", icon: Code, level: 80 },
    { name: "Capcut", icon: Film, level: 85 },
    { name: "Lightroom", icon: ImageIcon, level: 90 },
    { name: "Canva", icon: Palette, level: 85 },
  ] as Skill[],
  experience: [
    {
      role: "Founder",
      company: "Weply Studio (sekarang menjadi Zylo)",
      duration: "2021 - Sekarang",
      description: "Memimpin visi, strategi, dan pengembangan produk di Weply Studio, yang kini telah bertransformasi menjadi Zylo. Berfokus pada solusi digital inovatif untuk klien dan pasar.",
    },
  ] as ExperienceItem[],
};

export const testimonialsData: Testimonial[] = [
  {
    id: "testimonial-1",
    name: "Klien A",
    title: "CEO, Perusahaan X",
    quote: "Bekerja dengan Jason sangat luar biasa. Profesionalismenya dan perhatian terhadap detail menghasilkan produk yang melebihi ekspektasi kami.",
    avatarUrl: "https://placehold.co/100x100.png",
    avatarHint: "klien portrait",
  },
  {
    id: "testimonial-2",
    name: "Klien B",
    title: "Marketing Manager, Startup Y",
    quote: "Kemampuan Jason dalam menerjemahkan ide kompleks menjadi solusi yang elegan sangat mengesankan. Sangat direkomendasikan!",
    avatarUrl: "https://placehold.co/100x100.png",
    avatarHint: "manajer marketing",
  },
  {
    id: "testimonial-3",
    name: "Klien C",
    title: "Fotografer Profesional",
    quote: "Sebagai sesama kreator visual, saya mengapresiasi mata tajam Jason untuk desain dan fungsionalitas. Alat AI Photo Editornya sangat membantu!",
    avatarUrl: "https://placehold.co/100x100.png",
    avatarHint: "fotografer portrait",
  },
];

export const photosData: Photo[] = [
  {
    id: "p1",
    title: "Mountain Sunrise",
    description: "Early morning light hitting the peaks.",
    imageUrl: "https://placehold.co/400x533.png",
    imageHint: "mountain landscape sunrise",
    category: "Landscape",
  },
  {
    id: "p2",
    title: "Urban Reflections",
    description: "City lights reflected after a rainstorm.",
    imageUrl: "https://placehold.co/400x533.png",
    imageHint: "cityscape night rain",
    category: "Urban",
  },
  {
    id: "p3",
    title: "Forest Path",
    description: "A serene path winding through a lush forest.",
    imageUrl: "https://placehold.co/400x533.png",
    imageHint: "forest path nature",
    category: "Nature",
  },
  {
    id: "p4",
    title: "Coastal Waves",
    description: "Powerful waves crashing against the shore.",
    imageUrl: "https://placehold.co/400x533.png",
    imageHint: "ocean waves coast",
    category: "Seascape",
  },
];

export const footerLinks = {
  explore: [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About Me" },
    { href: "#testimonials", label: "Testimonials"},
    { href: "#photo-editor", label: "AI Photo Editor" },
    { href: "#photography", label: "Gallery" },
    { href: "#seo-tool", label: "SEO Tool"},
  ],
  connect: [
    { href: "#contact", label: "Contact Me" },
    ...siteConfig.socials.map(s => ({ href: s.url, label: s.name, external: true, className: `link-${s.name.toLowerCase()}` }))
  ],
  tools: [
    { href: "#seo-tool", label: "SEO Keyword Tool" },
    { href: "#photo-editor", label: "AI Photo Editor" },
  ],
  legal: [
     { href: "#", label: "Privacy Policy" },
     { href: "#", label: "Terms of Service" },
  ]
};

// Default CSS filter values
export const initialFilters: AISuggestion['filters'] = {
  brightness: 1,
  contrast: 1,
  saturate: 1,
  grayscale: 0,
  sepia: 0,
  hueRotate: 0,
  invert: 0,
  blur: 0,
};
