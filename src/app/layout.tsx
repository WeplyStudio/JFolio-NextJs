
import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"; // Re-added for portfolio contact form

export const metadata: Metadata = {
  title: 'Portofolio Saya | Developer & Kreator', // Updated for portfolio
  description: 'Selamat datang di portofolio pribadi saya. Temukan proyek, fotografi, dan keahlian saya.', // Updated for portfolio
  keywords: "portofolio, developer, fotografer, desain web, react, nextjs, editor foto ai, layanan, pengembangan web, solusi ai",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased bg-background text-foreground">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
