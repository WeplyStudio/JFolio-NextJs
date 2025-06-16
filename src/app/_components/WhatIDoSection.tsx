
import { SectionWrapper } from './SectionWrapper';
import { ServiceCard } from './ServiceCard';
import { whatIDoData } from '@/lib/data';
import { Layers } from 'lucide-react'; // Using Layers icon for the section

export function WhatIDoSection() {
  return (
    <SectionWrapper id="services" hasBackgroundPattern={false}> {/* Updated id to "services" */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground font-headline flex items-center justify-center">
          <Layers className="mr-3 h-8 w-8 text-primary" /> {/* Changed icon */}
          What I Do
        </h2>
        <p className="text-lg text-muted-foreground mt-2 max-w-xl mx-auto">
          Offering a range of digital services to bring your ideas to life.
        </p>
      </div>
      {whatIDoData && whatIDoData.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"> {/* Adjusted grid for potentially more items */}
          {whatIDoData.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      ) : (
        <p className="text-center text-muted-foreground">No services to display at the moment. Check back soon!</p>
      )}
    </SectionWrapper>
  );
}
