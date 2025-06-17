
import type { NavLink, Skill, ExperienceItem, FooterLinkItem, SocialLink, AISuggestion, ServiceItem, ResumeStatusData } from './types';
import { Github, Linkedin, Twitter, Instagram, Code, Camera, Layers, WandSparkles, Bot, Film, Image as ImageIcon, Palette, MessageSquareText, Paintbrush, Briefcase, GraduationCap, Star, Award, Zap, Lightbulb, Flame } from 'lucide-react';

export const siteConfig = {
  name: "jasonn.zip",
  jobTitle: "Pengrajin Digital & Pikiran Kreatif",
  email: "jason@weplystudio.my.id",
  phone: "+62 858-6805-5463",
  location: "Tanjung Pinang, Kepulauan Riau",
  socials: [
    { name: "GitHub", url: "https://github.com/", icon: Github, handle: "@github" },
    { name: "LinkedIn", url: "https://linkedin.com/in/", icon: Linkedin, handle: "yourlinkedin" },
    { name: "Twitter", url: "https://twitter.com/", icon: Twitter, handle: "@yourtwitter" },
    { name: "Instagram", url: "https://instagram.com/", icon: Instagram, handle: "@jasonn.zip" },
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
  bio: `Halo! 👋, Saya jason!, seseorang yang suka dalam dunia teknologi terutama di dunia pemrograman, bagi saya pemrograman adalah salah satu cara untuk mengekspresikan kreativitas dan imajinasi dalam bentuk digital.`,
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
      id: "start",
      category: "Perkenalan",
      icon: Flame,
      content: "Halo! 👋, Perkenalkan saya jason! seseorang yang sangat menyukai tentang dunia teknologi terutama pemrograman!.",
      timestamp: "",
    },
    {
      id: "exp1",
      category: "Pengalaman Profesional",
      icon: Briefcase,
      content: "Pada 2021 saya memulai karir saya sebagai pendiri dari Weply Studio yang saat ini berganti nama menjadi Zylo yaitu suatu bisnis yang berjalan di bidang web hosting dan lainnya.",
      timestamp: "2021 - Saat Ini",
    },
    {
      id: "skill1",
      category: "Keahlian Teknis Utama",
      icon: Code,
      content: "Saya Mahir dalam Full-Stack Web Development: Next.js, React, Vue.js, Node.js, dan PHP. Menguasai Tailwind CSS & TypeScript untuk membangun aplikasi modern yang skalabel dan responsif.",
      timestamp: "Praktisi Aktif & Berpengalaman",
    },
    {
      id: "skill2",
      category: "Keahlian Desain & Kreatif",
      icon: Palette,
      content: "Desain UI/UX yang berpusat pada pengguna menggunakan Figma & Canva. Terampil dalam fotografi profesional dan video editing dengan Adobe Lightroom & Capcut untuk konten visual yang menarik.",
      timestamp: "Portofolio Visual Tersedia",
    },
    {
      id: "skill3",
      category: "Pengembangan & Integrasi AI",
      icon: Bot,
      content: "Berpengalaman mengimplementasikan solusi AI menggunakan Genkit dan Google AI. Tertarik pada aplikasi Machine Learning, NLP, dan otomatisasi cerdas untuk meningkatkan efisiensi.",
      timestamp: "Eksplorasi & Implementasi Proyek",
    },
    {
      id: "edu1",
      category: "Pendidikan & Pembelajaran Mandiri",
      icon: GraduationCap,
      content: "Seorang pembelajar mandiri yang berdedikasi dengan komitmen kuat pada pengembangan diri berkelanjutan. Aktif mengikuti kursus dan sertifikasi online di bidang Web Dev, Desain, dan AI.",
      timestamp: "Komitmen Belajar Seumur Hidup",
    },
    {
      id: "achieve1",
      category: "Proyek Unggulan & Pencapaian",
      icon: Star,
      content: "Saya telah berhasil membuat dan mempublikasikam 5+ proyek web skala menengah dan besar, untuk membantu klien mencapai tujuan bisnis dan digital mereka. Serta membangun Weply Studio dari nol hingga transformasi menjadi Zylo.",
      timestamp: "Hasil Nyata & Kontribusi Positif",
    },
     {
      id: "passion1",
      category: "Filosofi & Pendekatan Kerja",
      icon: Lightbulb,
      content: "Saya percaya pada kekuatan sinergi antara teknologi mutakhir, desain yang intuitif, dan solusi AI yang cerdas. Tujuannya adalah menciptakan pengalaman digital yang tidak hanya fungsional, tetapi juga menginspirasi dan memberikan nilai.",
      timestamp: "Inovasi dengan Dampak",
    },
  ],
};
