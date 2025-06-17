
import type { NavLink, Skill, ExperienceItem, FooterLinkItem, SocialLink, AISuggestion, ServiceItem, ResumeStatusData } from './types';
import { Github, Linkedin, Twitter, Instagram, Code, Camera, Layers, WandSparkles, Bot, Film, Image as ImageIcon, Palette, MessageSquareText, Paintbrush, Briefcase, GraduationCap, Star, Award, Zap, Lightbulb } from 'lucide-react';

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

export const footerLinks = {
  explore: [
    { href: "#home", label: "Beranda" },
    { href: "#about", label: "Tentang Saya" },
    { href: "#services", label: "Layanan"},
    { href: "#photo-editor", label: "Editor Foto AI" },
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

export const resumeStatusData: ResumeStatusData = {
  userName: "Jason",
  userInitial: "J",
  updates: [
    {
      id: "exp1",
      category: "Pengalaman Profesional",
      icon: Briefcase,
      content: "Sebagai Pendiri Weply Studio (kini Zylo), saya mengarahkan pengembangan produk digital inovatif dan strategi pertumbuhan perusahaan. Fokus pada solusi web & AI.",
      timestamp: "2021 - Saat Ini",
    },
    {
      id: "skill1",
      category: "Keahlian Teknis Inti",
      icon: Code,
      content: "Full-Stack Web: Next.js, React, Vue.js, Node.js, PHP, Tailwind CSS, TypeScript. Berpengalaman membangun aplikasi yang skalabel dan performan.",
      timestamp: "Level: Mahir & Praktisi Aktif",
    },
    {
      id: "skill2",
      category: "Keahlian Kreatif & Desain",
      icon: Palette,
      content: "Desain UI/UX (Figma & Canva) dengan fokus pada pengalaman pengguna. Fotografi profesional & video editing (Adobe Lightroom & Capcut).",
      timestamp: "Portofolio Visual Tersedia",
    },
    {
      id: "skill3",
      category: "Inovasi & Pengembangan AI",
      icon: Bot,
      content: "Mengimplementasikan solusi AI dengan Genkit & Google AI. Tertarik pada Machine Learning, NLP, dan otomatisasi cerdas untuk bisnis.",
      timestamp: "Area Eksplorasi & Pertumbuhan",
    },
    {
      id: "edu1",
      category: "Pendidikan & Sertifikasi",
      icon: GraduationCap,
      content: "Pembelajar mandiri yang berdedikasi. Telah menyelesaikan berbagai kursus dan sertifikasi online di bidang Web Development, Desain Grafis, dan AI.",
      timestamp: "Komitmen Belajar Seumur Hidup",
    },
    {
      id: "achieve1",
      category: "Proyek Unggulan & Dampak",
      icon: Star, // Menggunakan Star untuk 'unggulan'
      content: "Berhasil meluncurkan 5+ proyek web skala menengah, membantu klien mencapai tujuan digital mereka. Membangun Weply Studio dari awal hingga bertransformasi.",
      timestamp: "Hasil & Kontribusi Nyata",
    },
     {
      id: "passion1",
      category: "Filosofi & Minat Pribadi",
      icon: Lightbulb, // Lightbulb untuk ide dan filosofi
      content: "Saya percaya pada kekuatan sinergi antara teknologi mutakhir, desain yang berpusat pada manusia, dan solusi AI untuk menciptakan pengalaman digital yang tidak hanya fungsional, tapi juga menginspirasi.",
      timestamp: "Inovasi dengan Tujuan",
    },
  ],
};
