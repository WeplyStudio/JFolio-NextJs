import { Header } from './_components/Header';
import { Footer } from './_components/Footer';
import { HeroSection } from './_components/HeroSection';
import { AboutSection } from './_components/AboutSection';
import { ProjectsSection } from './_components/ProjectsSection';
import { PhotographySection } from './_components/PhotographySection';
import { SeoToolSection } from './_components/SeoToolSection';
import { ContactSection } from './_components/ContactSection';

export default function PortfolioPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <PhotographySection />
        <SeoToolSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
