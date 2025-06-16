
import type { NavLink, Photo, Skill, ExperienceItem, FooterLinkItem, SocialLink, AISuggestion, ServiceItem } from './types';
import { Github, Linkedin, Twitter, Instagram, Code, Camera, Briefcase, GraduationCap, Lightbulb, Bot, BarChart2, PenTool, WandSparkles, Film, Image as ImageIcon, Palette, MessageSquareText, Layers, Smartphone, Server, Search, Paintbrush, Rocket } from 'lucide-react';

export const siteConfig = {
  name: "jasonn.zip",
  jobTitle: "Pengrajin Digital & Pikiran Kreatif",
  email: "jason@weplystudio.my.id",
  phone: "+62 858-6805-5463",
  location: "Tanjung Pinang, Kepulauan Riau",
  socials: [
    { name: "GitHub", url: "https://github.com/", icon: Github, handle: "@yourgithub" },
    { name: "LinkedIn", url: "https://linkedin.com/in/", icon: Linkedin, handle: "yourlinkedin" },
    { name: "Twitter", url: "https://twitter.com/", icon: Twitter, handle: "@yourtwitter" },
    { name: "Instagram", url: "https://instagram.com/", icon: Instagram, handle: "@yourinstagram" },
  ] as SocialLink[],
  keywords: ["portofolio", "developer", "fotografer", "desain web", "react", "nextjs", "editor foto ai", "layanan", "pengembangan web", "solusi ai"],
};

export const navLinks: NavLink[] = [
  { href: "#home", label: "Beranda" },
  { href: "#about", label: "Tentang Saya" },
  { href: "#services", label: "Layanan", icon: Layers },
  { href: "#photo-editor", label: "Editor Foto AI", icon: WandSparkles },
  { href: "#photography", label: "Fotografi" },
  { href: "#seo-tool", label: "Alat SEO" },
  { href: "#contact", label: "Kontak" },
];

export const aboutData = {
  bio: `Halo! Saya Jason, seorang ${siteConfig.jobTitle} yang bersemangat dari ${siteConfig.location}.
  Saya berkembang dengan menciptakan pengalaman digital yang indah, fungsional, dan berpusat pada pengguna.
  Perjalanan saya di bidang teknologi dimulai dengan rasa ingin tahu tentang cara kerja berbagai hal, yang kemudian berkembang menjadi karier di mana saya dapat membangun dan berinovasi.

  Ketika saya tidak sedang membuat kode atau mendesain, saya suka menjelajahi dunia melalui lensa kamera saya, mengabadikan momen dan cerita.
  Portofolio ini adalah sekilas tentang dunia saya – perpaduan antara teknologi dan seni. Mari ciptakan sesuatu yang luar biasa bersama!`,
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
      role: "Pendiri",
      company: "Weply Studio (sekarang menjadi Zylo)",
      duration: "2021 - Sekarang",
      description: "Memimpin visi, strategi, dan pengembangan produk di Weply Studio, yang kini telah bertransformasi menjadi Zylo. Berfokus pada solusi digital inovatif untuk klien dan pasar.",
    },
  ] as ExperienceItem[],
};

export const whatIDoData: ServiceItem[] = [
  {
    id: "web-dev",
    title: "Pengembangan Web",
    description: "Menciptakan situs web dan aplikasi web yang responsif dan berkinerja tinggi yang disesuaikan dengan kebutuhan Anda menggunakan teknologi modern.",
    icon: Code,
    tags: ["Next.js", "React", "Vue.js", "Node.js", "Tailwind CSS", "TypeScript"]
  },
  {
    id: "ai-solutions",
    title: "Integrasi AI",
    description: "Memanfaatkan kecerdasan buatan untuk membangun solusi cerdas, mengotomatiskan proses, dan menyediakan analisis data yang mendalam.",
    icon: Bot,
    tags: ["Genkit", "Machine Learning", "NLP", "Chatbots"]
  },
  {
    id: "photography",
    title: "Jasa Fotografi",
    description: "Mengabadikan momen dengan kreativitas dan presisi, menawarkan fotografi profesional untuk berbagai kebutuhan.",
    icon: Camera,
    tags: ["Potret", "Produk", "Acara", "Lanskap"]
  },
  {
    id: "ui-ux",
    title: "Desain UI/UX",
    description: "Merancang antarmuka pengguna yang intuitif dan menarik yang memberikan pengalaman pengguna yang optimal di semua perangkat.",
    icon: Paintbrush,
    tags: ["Figma", "Canva", "Riset Pengguna", "Prototyping"]
  },
];


export const photosData: Photo[] = [
  {
    id: "p1",
    title: "Matahari Terbit di Gunung",
    description: "Cahaya pagi hari menyinari puncak-puncak.",
    imageUrl: "https://placehold.co/400x533.png",
    imageHint: "mountain landscape sunrise",
    category: "Lanskap",
  },
  {
    id: "p2",
    title: "Refleksi Perkotaan",
    description: "Lampu kota terpantul setelah badai hujan.",
    imageUrl: "https://placehold.co/400x533.png",
    imageHint: "cityscape night rain",
    category: "Perkotaan",
  },
  {
    id: "p3",
    title: "Jalur Hutan",
    description: "Jalur tenang berkelok-kelok melalui hutan lebat.",
    imageUrl: "https://placehold.co/400x533.png",
    imageHint: "forest path nature",
    category: "Alam",
  },
  {
    id: "p4",
    title: "Ombak Pesisir",
    description: "Ombak kuat menghantam pantai.",
    imageUrl: "https://placehold.co/400x533.png",
    imageHint: "ocean waves coast",
    category: "Pemandangan Laut",
  },
];

export const footerLinks = {
  explore: [
    { href: "#home", label: "Beranda" },
    { href: "#about", label: "Tentang Saya" },
    { href: "#services", label: "Layanan"},
    { href: "#photo-editor", label: "Editor Foto AI" },
    { href: "#photography", label: "Galeri" },
    { href: "#seo-tool", label: "Alat SEO"},
  ],
  connect: [
    { href: "#contact", label: "Hubungi Saya" },
    ...siteConfig.socials.map(s => ({ href: s.url, label: s.name, external: true, className: `link-${s.name.toLowerCase()}` }))
  ],
  tools: [
    { href: "#seo-tool", label: "Alat Kata Kunci SEO" },
    { href: "#photo-editor", label: "Editor Foto AI" },
  ],
  legal: [
     { href: "#", label: "Kebijakan Privasi" },
     { href: "#", label: "Ketentuan Layanan" },
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
