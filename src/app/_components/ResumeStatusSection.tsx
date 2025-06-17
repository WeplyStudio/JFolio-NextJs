
"use client";

import type { FC } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { X, Briefcase, GraduationCap, Star, Code, Palette, Bot, Award, Zap } from 'lucide-react';
import type { ResumeStatusData, ResumeStatusUpdate } from '@/lib/types';
import { SectionWrapper } from './SectionWrapper';
import type { LucideIcon } from 'lucide-react';

interface ResumeStatusSectionProps {
  data: ResumeStatusData;
  isOpen: boolean;
  onClose: () => void;
}

const iconMap: { [key: string]: LucideIcon } = {
  Briefcase,
  GraduationCap,
  Star,
  Code,
  Palette,
  Bot,
  Award,
  Zap,
};

export const ResumeStatusSection: FC<ResumeStatusSectionProps> = ({ data, isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <SectionWrapper id="resume-status" className="py-12 md:py-16 bg-secondary/20">
      <Card className="max-w-2xl mx-auto shadow-2xl border-border/70 bg-card overflow-hidden relative animate-in fade-in-50 zoom-in-90 duration-300">
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-primary z-10"
          aria-label="Tutup status resume"
        >
          <X className="h-6 w-6" />
        </Button>
        
        <CardHeader className="border-b border-border/50 bg-muted/30 p-6">
          <div className="flex items-center space-x-4">
            <Avatar className="h-16 w-16 border-2 border-primary shadow-md">
              {/* <AvatarImage src={data.userImageUrl || `https://placehold.co/100x100.png`} alt={data.userName} /> */}
              <AvatarFallback className="text-2xl bg-primary text-primary-foreground">
                {data.userInitial}
              </AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-2xl font-bold text-primary font-headline">Status Resume: {data.userName}</CardTitle>
              <CardDescription className="text-muted-foreground">Sekilas tentang perjalanan profesional saya.</CardDescription>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="p-0 max-h-[60vh] overflow-y-auto">
          <ul className="divide-y divide-border/40">
            {data.updates.map((update) => {
              const IconComponent = update.icon;
              return (
                <li key={update.id} className="p-6 hover:bg-muted/20 transition-colors duration-150">
                  <div className="flex items-start space-x-4">
                    {IconComponent && (
                      <div className="p-3 bg-primary/10 rounded-full mt-1">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                    )}
                    <div className="flex-1">
                      <div className="flex justify-between items-baseline mb-1">
                        <h4 className="text-lg font-semibold text-foreground">{update.category}</h4>
                        <p className="text-xs text-muted-foreground">{update.timestamp}</p>
                      </div>
                      <p className="text-sm text-foreground/80 leading-relaxed">
                        {update.content}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </CardContent>
         <div className="p-6 border-t border-border/50 bg-muted/30 text-center">
            <Button onClick={onClose} variant="outline" className="w-full sm:w-auto">
                Tutup Status
            </Button>
        </div>
      </Card>
    </SectionWrapper>
  );
};
