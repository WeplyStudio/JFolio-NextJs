
import { SectionWrapper } from './SectionWrapper';
import { PhotoCard } from './PhotoCard';
import { photosData } from '@/lib/data';

export function PhotographySection() {
  return (
    <SectionWrapper id="photography" hasBackgroundPattern>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground font-headline">Photography Gallery</h2>
        <p className="text-lg text-muted-foreground mt-2 max-w-xl mx-auto">
          Moments captured through my lens. A visual journey.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {photosData.map((photo) => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}
      </div>
    </SectionWrapper>
  );
}
