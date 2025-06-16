
import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
  hasBackgroundPattern?: boolean;
}

export function SectionWrapper({ children, className, id, hasBackgroundPattern = false }: SectionWrapperProps) {
  return (
    <section 
      id={id} 
      className={cn(
        'py-16 md:py-24 relative', 
        // Use secondary/10 for a very subtle pattern background, or secondary/30 for more pronounced like EasyKripsi
        hasBackgroundPattern ? 'bg-secondary/30' : 'bg-background', 
        className
      )}
    >
      {hasBackgroundPattern && (
        <div className="absolute inset-0 opacity-[0.03] overflow-hidden pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="subtleGrid" width="30" height="30" patternUnits="userSpaceOnUse">
                <path d="M 30 0 L 0 0 0 30" fill="none" stroke="hsl(var(--foreground))" strokeWidth="0.3"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#subtleGrid)" />
          </svg>
        </div>
      )}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {children}
      </div>
    </section>
  );
}
