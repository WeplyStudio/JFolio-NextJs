import type { Project, Photo, NavLink, Skill, ExperienceItem } from './types';
import { Code, Camera, Linkedin, Github, Mail, BarChart, Layers, Target, Zap } from 'lucide-react';

export const siteConfig = {
  name: "Kripsy Folio",
  jobTitle: "Developer & Photographer",
  email: "contact@kripsyfolio.com",
  socials: [
    { name: "GitHub", url: "https://github.com", icon: Github },
    { name: "LinkedIn", url: "https://linkedin.com", icon: Linkedin },
  ]
};

export const navLinks: NavLink[] = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#photography", label: "Photography" },
  { href: "#seo-tool", label: "SEO Tool" },
  { href: "#contact", label: "Contact" },
];

export const projectsData: Project[] = [
  {
    id: "proj1",
    title: "E-commerce Platform",
    description: "A full-featured e-commerce platform with Next.js, Stripe, and Tailwind CSS.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "online shopping",
    tags: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS", "PostgreSQL"],
    projectUrl: "#",
    repoUrl: "#",
  },
  {
    id: "proj2",
    title: "Task Management App",
    description: "A collaborative task management application using React and Firebase.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "productivity tool",
    tags: ["React", "Firebase", "Material UI", "Node.js"],
    projectUrl: "#",
  },
  {
    id: "proj3",
    title: "Portfolio CMS",
    description: "A custom CMS for managing portfolio content, built with Express and MongoDB.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "content management",
    tags: ["Node.js", "Express", "MongoDB", "React"],
    repoUrl: "#",
  },
];

export const photosData: Photo[] = [
  {
    id: "photo1",
    title: "Mountain Majesty",
    imageUrl: "https://placehold.co/600x800.png",
    imageHint: "landscape mountain",
    description: "A stunning view of a mountain range at sunset.",
  },
  {
    id: "photo2",
    title: "Urban Exploration",
    imageUrl: "https://placehold.co/800x600.png",
    imageHint: "city street",
    description: "Capturing the vibrant life of city streets at night.",
  },
  {
    id: "photo3",
    title: "Serene Waters",
    imageUrl: "https://placehold.co/600x800.png",
    imageHint: "lake reflection",
    description: "Calm lake reflecting the clear blue sky.",
  },
  {
    id: "photo4",
    title: "Forest Trail",
    imageUrl: "https://placehold.co/800x600.png",
    imageHint: "nature path",
    description: "A peaceful walk through a sunlit forest trail.",
  },
];

export const aboutData = {
  bio: `Hello! I'm ${siteConfig.name}, a passionate ${siteConfig.jobTitle} based in [Your City/Region]. I thrive on creating elegant and efficient solutions to complex problems in the digital realm, and capturing fleeting moments through the lens of my camera. My journey in development is driven by a love for learning and building, while my photography is an exploration of beauty in the world around us.`,
  skills: [
    { name: "React", icon: Code },
    { name: "Next.js", icon: Layers },
    { name: "TypeScript", icon: Code },
    { name: "Node.js", icon: BarChart },
    { name: "SQL & NoSQL", icon: Target },
    { name: "Adobe Lightroom", icon: Camera },
    { name: "Photoshop", icon: Camera },
    { name: "REST APIs", icon: Zap },
  ] as Skill[],
  experience: [
    {
      role: "Senior Software Developer",
      company: "Innovatech Ltd.",
      duration: "2020 - Present",
      description: "Leading development of client-facing web applications, mentoring junior developers, and architecting scalable solutions."
    },
    {
      role: "Freelance Photographer",
      company: "Self-Employed",
      duration: "2018 - Present",
      description: "Providing professional photography services for events, portraits, and commercial projects, with a focus on creative storytelling."
    },
    {
      role: "Junior Developer",
      company: "Startup Hub",
      duration: "2018 - 2020",
      description: "Contributed to various projects, gaining foundational experience in full-stack development and agile methodologies."
    }
  ] as ExperienceItem[],
};
