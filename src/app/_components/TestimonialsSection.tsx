
import { SectionWrapper } from './SectionWrapper';
import { TestimonialCard } from './TestimonialCard';
import { testimonialsData } from '@/lib/data';
import { MessageSquareText } from 'lucide-react';

export function TestimonialsSection() {
  return (
    <SectionWrapper id="testimonials" hasBackgroundPattern>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground font-headline flex items-center justify-center">
           <MessageSquareText className="mr-3 h-8 w-8 text-primary" />
           What Clients Say
        </h2>
        <p className="text-lg text-muted-foreground mt-2 max-w-xl mx-auto">
          Kind words from people I&apos;ve had the pleasure to work with.
        </p>
      </div>
      {testimonialsData && testimonialsData.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      ) : (
        <p className="text-center text-muted-foreground">No testimonials available yet.</p>
      )}
    </SectionWrapper>
  );
}
