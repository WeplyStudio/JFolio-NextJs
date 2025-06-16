
import { SectionWrapper } from './SectionWrapper';
import { SeoKeywordGeneratorForm } from './SeoKeywordGeneratorForm';

export function SeoToolSection() {
  return (
    <SectionWrapper id="seo-tool">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground font-headline">Alat SEO Berbasis AI</h2>
        <p className="text-lg text-muted-foreground mt-2 max-w-xl mx-auto">
          Optimalkan visibilitas portofolio Anda. Masukkan konten Anda dan biarkan AI menyarankan kata kunci yang relevan.
        </p>
      </div>
      <div className="max-w-2xl mx-auto">
        <SeoKeywordGeneratorForm />
      </div>
    </SectionWrapper>
  );
}
