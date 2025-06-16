
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import type { Testimonial } from '@/lib/types';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const fallbackName = testimonial.name.split(' ').map(n => n[0]).join('').toUpperCase();

  return (
    <Card className="flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl border-border/60 bg-card">
      <CardContent className="p-6 flex-grow flex flex-col items-center text-center">
        <Quote className="h-8 w-8 text-primary/50 mb-4 transform scale-x-[-1]" />
        <p className="text-muted-foreground italic mb-6 flex-grow">&quot;{testimonial.quote}&quot;</p>
        <div className="flex flex-col items-center mt-auto">
          {testimonial.avatarUrl && (
            <Avatar className="w-16 h-16 mb-3 border-2 border-primary/30 shadow-md">
              <AvatarImage src={testimonial.avatarUrl} alt={testimonial.name} data-ai-hint={testimonial.avatarHint || 'person portrait'} />
              <AvatarFallback className="text-lg bg-muted text-muted-foreground">{fallbackName}</AvatarFallback>
            </Avatar>
          )}
          <h3 className="font-semibold text-foreground text-lg">{testimonial.name}</h3>
          <p className="text-sm text-primary">{testimonial.title}</p>
        </div>
      </CardContent>
    </Card>
  );
}
