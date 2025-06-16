import { Header } from './_components/Header';
import { Footer } from './_components/Footer';
import { HeroEasyKripsi } from './_components/HeroEasyKripsi';
import { CompareFeaturesSection } from './_components/CompareFeaturesSection';
import { AdvantagesSection } from './_components/AdvantagesSection';
import { TestimonialsSectionEasyKripsi } from './_components/TestimonialsSectionEasyKripsi';

// The HTML structure suggests these sections are part of the main content flow.
// IDs like #features, #product, #packages are present in the HTML.
// #features -> AdvantagesSection
// #product / #compare -> CompareFeaturesSection (includes pricing cards)
// #packages -> Could also be CompareFeaturesSection or a separate section if it existed.

export default function EasyKripsiPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <HeroEasyKripsi />
        {/* The section with id="compare" contains both the table and pricing cards */}
        <CompareFeaturesSection /> 
        <AdvantagesSection />
        <TestimonialsSectionEasyKripsi />
        {/* The div with id="packages" in the HTML is empty, possibly a scroll anchor. 
            The pricing packages are included within CompareFeaturesSection. */}
        <div id="packages" className="scroll-mt-20"></div> {/* Added for anchor, content is in CompareFeaturesSection */}
      </main>
      <Footer />
    </div>
  );
}
