import type { NavLink } from './types';
// Removed unused types: Project, Photo, Skill, ExperienceItem

export const siteConfig = {
  name: "Easy Kripsi", // Updated site name
  jobTitle: "Template Penulisan Skripsi", // Optional: A subtitle or tagline
  email: "dukungan@easykripsi.com", // Example email
  // Socials can be added if needed for the new design
  socials: [
    // { name: "Instagram", url: "#", icon: InstagramIcon }, // Example
  ],
  developers: [ // As mentioned in the HTML
    { name: "Iklilzaki", handle: "@Iklilzaki" },
    { name: "Bangdeniuss", handle: "@Bangdeniuss" },
  ]
};

// Updated navigation links based on the new HTML structure
export const navLinks: NavLink[] = [
  { href: "#features", label: "Fitur" },
  { href: "#product", label: "Produk" }, // This might map to the comparison/pricing section
  { href: "https://iklilzaki.myr.id/pl/template-skripsi-easykripsi-basic", label: "Basic", external: true },
  { href: "https://iklilzaki.myr.id/pl/template-skripsi-easykripsi-advance", label: "Advance", external: true },
];

// Data for rotating text in Hero section
export const heroRotatingTexts = [
  "Nomor Halaman",
  "Daftar Isi",
  "Daftar Gambar",
  "Heading Bab",
  "Heading Sub Bab",
];

// Placeholder data for feature comparison table
export const featureComparison = [
  { 
    feature: "Template Skripsi (Word)", 
    basic: true, 
    advance: true,
    description: "Template siap pakai format .dotx/.docx"
  },
  { 
    feature: "Update Template Gratis", 
    basic: true, 
    advance: true,
    description: "Dapatkan pembaruan template tanpa biaya tambahan"
  },
  { 
    feature: "Grup Support (WhatsApp)", 
    basic: true, 
    advance: true,
    description: "Akses ke grup dukungan untuk bantuan dan diskusi"
  },
  { 
    feature: "Tutorial Penggunaan (Video & PDF)", 
    basic: true, 
    advance: true,
    description: "Panduan lengkap dalam format video dan PDF"
  },
  { 
    feature: "Pintasan Keyboard (Styling)", 
    basic: false, 
    advance: true,
    description: "Format cepat dengan kombinasi tombol keyboard"
  },
  { 
    feature: "Pintasan Keyboard (Daftar Isi, Gambar, Tabel)", 
    basic: false, 
    advance: true,
    description: "Buat daftar isi, gambar, dan tabel otomatis"
  },
  { 
    feature: "Konsultasi Penggunaan", 
    basic: false, 
    advance: true,
    description: "Sesi konsultasi personal untuk penggunaan template"
  },
];

// Pricing plan features (derived from table and HTML)
export const basicPlanFeatures = [
  "Template Skripsi (Word)",
  "Update Template Gratis",
  "Grup Support (WhatsApp)",
  "Tutorial Penggunaan (Video & PDF)",
];

export const advancePlanFeatures = [
  ...basicPlanFeatures,
  "Pintasan Keyboard (Styling)",
  "Pintasan Keyboard (Daftar Isi, Gambar, Tabel)",
  "Konsultasi Penggunaan",
  "Semua fitur Basic",
];


// Keunggulan / Advantages data
export const advantages = [
  {
    title: "Format Sekejap",
    description: "Ubah skripsi Anda menjadi dokumen profesional hanya dengan beberapa klik.",
    iconName: "Zap",
  },
  {
    title: "Hemat Waktu",
    description: "Kurangi waktu format skripsi dari berjam-jam menjadi hanya beberapa menit.",
    iconName: "Clock",
  },
  {
    title: "Sesuai Standar",
    description: "Format otomatis sesuai standar universitas untuk hasil yang profesional.",
    iconName: "ThumbsUp",
  },
];

// Testimonials data (placeholders)
export const testimonials = [
  {
    quote: "Easy.kripsi sangat membantu mempercepat pengerjaan skripsi saya. Fitur pintasan keyboardnya luar biasa!",
    name: "Mahasiswa A",
    university: "Universitas XYZ",
    avatarInitial: "MA",
    avatarBg: "bg-blue-500",
  },
  {
    quote: "Dengan template Advance, saya tidak perlu pusing lagi soal format. Tinggal fokus ke konten. Recommended!",
    name: "Peneliti B",
    university: "Institut Teknologi ABC",
    avatarInitial: "PB",
    avatarBg: "bg-green-500",
  },
  {
    quote: "Support groupnya responsif dan sangat membantu. Template Basic saja sudah sangat cukup untuk kebutuhan awal.",
    name: "Mahasiswi C",
    university: "Universitas QRS",
    avatarInitial: "MC",
    avatarBg: "bg-purple-500",
  },
   {
    quote: "Awalnya ragu, tapi setelah coba paket Advance, beneran hemat waktu banget. Nggak nyesel!",
    name: "Mahasiswa D",
    university: "Universitas Negeri JKL",
    avatarInitial: "MD",
    avatarBg: "bg-red-500",
  }
];


// Footer links
export const footerLinks = {
  products: [
    { href: "#", label: "Basic", className: "link-basic" },
    { href: "#", label: "Advance", className: "link-advance" },
    { href: "#", label: "University Templates" },
  ],
  support: [
    { href: "#", label: "Installation Guide" },
    { href: "#", label: "Documentation" },
    { href: "#", label: "FAQ" },
    { href: "#", label: "Keyboard Shortcuts" },
    { href: "#", label: "Contact Support" },
  ],
  company: [
    { href: "#", label: "About Us" },
    { href: "#", label: "Contact Us" },
  ],
  legal: [
     { href: "#", label: "Privacy Policy" },
     { href: "#", label: "Terms of Use" },
     { href: "#", label: "Contact" },
  ]
};
