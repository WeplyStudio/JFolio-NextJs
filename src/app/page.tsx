
import { Header } from './_components/Header';
import { Footer } from './_components/Footer';
import { HeroSection } from './_components/HeroSection';
import { AboutSection } from './_components/AboutSection';
import { WhatIDoSection } from './_components/WhatIDoSection';
import { SeoToolSection } from './_components/SeoToolSection';
import { ContactSection } from './_components/ContactSection';
import { PhotoEditorSection } from './_components/PhotoEditorSection';

export default function PortfolioPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <WhatIDoSection />
        <PhotoEditorSection />
        <SeoToolSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
