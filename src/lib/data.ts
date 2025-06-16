import type { NavLink, Project, Photo, Skill, ExperienceItem, FooterLinkItem, SocialLink } from './types';
import { Github, Linkedin, Twitter, Instagram, Code, Camera, Briefcase, GraduationCap, Lightbulb, Bot, BarChart2, PenTool } from 'lucide-react'; // Added more icons

export const siteConfig = {
  name: "Your Name", // Placeholder, update with your name
  jobTitle: "Digital Craftsman & Creative Mind", // Placeholder
  email: "your.email@example.com", // Placeholder
  phone: "(123) 456-7890", // Placeholder
  location: "City, Country", // Placeholder
  socials: [
    { name: "GitHub", url: "https://github.com/", icon: Github, handle: "@yourgithub" },
    { name: "LinkedIn", url: "https://linkedin.com/in/", icon: Linkedin, handle: "yourlinkedin" },
    { name: "Twitter", url: "https://twitter.com/", icon: Twitter, handle: "@yourtwitter" },
    { name: "Instagram", url: "https://instagram.com/", icon: Instagram, handle: "@yourinstagram" },
  ] as SocialLink[],
  keywords: ["portfolio", "developer", "photographer", "web design", "react", "nextjs"],
};

export const navLinks: NavLink[] = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#photography", label: "Photography" },
  { href: "#seo-tool", label: "SEO Tool" },
  { href: "#contact", label: "Contact" },
];

export const aboutData = {
  bio: `Hello! I'm ${siteConfig.name}, a passionate ${siteConfig.jobTitle} based in ${siteConfig.location}. 
  I thrive on creating beautiful, functional, and user-centered digital experiences.
  My journey in tech started with a curiosity for how things work, which blossomed into a career where I can build and innovate.
  
  When I'm not coding or designing, I love exploring the world through my camera lens, capturing moments and stories. 
  This portfolio is a glimpse into my world – a blend of technology and artistry. Let's create something amazing together!`,
  skills: [
    { name: "React", icon: Code, level: 90 },
    { name: "Next.js", icon: Code, level: 85 },
    { name: "TypeScript", icon: Code, level: 90 },
    { name: "Node.js", icon: Code, level: 75 },
    { name: "UI/UX Design", icon: PenTool, level: 80 },
    { name: "Photography", icon: Camera, level: 95 },
    { name: "Genkit AI", icon: Bot, level: 70 },
    { name: "Tailwind CSS", icon: Code, level: 95 },
  ] as Skill[],
  experience: [
    {
      role: "Senior Developer",
      company: "Tech Solutions Inc.",
      duration: "Jan 2021 - Present",
      description: "Leading development of innovative web applications, mentoring junior developers, and driving a culture of quality and performance.",
    },
    {
      role: "Freelance Photographer",
      company: "Self-Employed",
      duration: "Jun 2018 - Present",
      description: "Capturing portraits, events, and landscapes, delivering high-quality images to clients.",
    },
    {
      role: "Web Developer",
      company: "Creative Agency LLC",
      duration: "Aug 2018 - Dec 2020",
      description: "Developed and maintained client websites, focusing on responsive design and user experience.",
    },
  ] as ExperienceItem[],
};

export const projectsData: Project[] = [
  {
    id: "1",
    title: "E-commerce Platform",
    description: "A full-featured e-commerce solution with Next.js, Stripe, and Tailwind CSS. Includes product listings, cart, and checkout.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "e-commerce online store",
    tags: ["Next.js", "Stripe", "Tailwind CSS", "TypeScript"],
    projectUrl: "#", // Replace with actual URL
    repoUrl: "#",    // Replace with actual URL
  },
  {
    id: "2",
    title: "AI Powered Content Generator",
    description: "A web app using Genkit and Gemini to generate creative content like blog posts and social media updates.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "ai content writing",
    tags: ["Genkit", "Gemini", "React", "Node.js"],
    projectUrl: "#",
  },
  {
    id: "3",
    title: "Photography Portfolio CMS",
    description: "A custom CMS for photographers to manage and showcase their work, built with React and Firebase.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "photography gallery website",
    tags: ["React", "Firebase", "Material UI"],
    repoUrl: "#",
  },
];

export const photosData: Photo[] = [
  {
    id: "p1",
    title: "Mountain Sunrise",
    description: "Early morning light hitting the peaks.",
    imageUrl: "https://placehold.co/400x533.png", // Portrait-like aspect ratio
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

// Footer links adapted for portfolio, keeping EasyKripsi structure
export const footerLinks = {
  explore: [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About Me" },
    { href: "#projects", label: "Projects" },
    { href: "#photography", label: "Gallery" },
  ],
  connect: [
    { href: "#contact", label: "Contact Me" },
    ...siteConfig.socials.map(s => ({ href: s.url, label: s.name, external: true, className: `link-${s.name.toLowerCase()}` }))
  ],
  tools: [
    { href: "#seo-tool", label: "SEO Keyword Tool" },
    // Add other tools or resources if any
  ],
  legal: [
     { href: "#", label: "Privacy Policy" }, // Placeholder
     { href: "#", label: "Terms of Service" }, // Placeholder
  ]
};
