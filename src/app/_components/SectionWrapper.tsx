import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
  hasBackgroundPattern?: boolean; // Optional prop for decorative elements
}

export function SectionWrapper({ children, className, id, hasBackgroundPattern = false }: SectionWrapperProps) {
  return (
    <section 
      id={id} 
      className={cn(
        'py-16 md:py-24 relative', 
        hasBackgroundPattern ? 'bg-secondary/30' : '',
        className
      )}
    >
      {hasBackgroundPattern && (
        <div className="absolute inset-0 opacity-5 overflow-hidden">
          {/* Example of a subtle background pattern, can be customized */}
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="hsl(var(--foreground))" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#smallGrid)" />
          </svg>
        </div>
      )}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {children}
      </div>
    </section>
  );
}
