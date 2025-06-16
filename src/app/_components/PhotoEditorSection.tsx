
import { SectionWrapper } from './SectionWrapper';
import { PhotoEditor } from './PhotoEditor';
import { WandSparkles } from 'lucide-react';

export function PhotoEditorSection() {
  return (
    <SectionWrapper id="photo-editor" hasBackgroundPattern>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground font-headline flex items-center justify-center">
          <WandSparkles className="mr-3 h-8 w-8 text-primary" />
          Editor Foto AI
        </h2>
        <p className="text-lg text-muted-foreground mt-2 max-w-xl mx-auto">
          Unggah foto Anda, dapatkan saran pewarnaan berbasis AI, dan sesuaikan secara manual.
        </p>
      </div>
      <div className="max-w-4xl mx-auto">
        <PhotoEditor />
      </div>
    </SectionWrapper>
  );
}
