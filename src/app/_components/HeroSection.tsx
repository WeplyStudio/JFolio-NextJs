
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { SectionWrapper } from './SectionWrapper';
import { siteConfig } from '@/lib/data';
import { ArrowDown, Code, Camera, Eye } from 'lucide-react'; // Changed Download to Eye
import type { FC } from 'react';

interface HeroSectionProps {
  onToggleResumeStatus: () => void;
}

export const HeroSection: FC<HeroSectionProps> = ({ onToggleResumeStatus }) => {
  return (
    <SectionWrapper id="home" className="min-h-[calc(100vh-4rem)] flex items-center bg-gradient-to-br from-background to-secondary/20">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground font-headline">
            Hai, Saya Jason
          </h1>
          <p className="text-xl lg:text-2xl text-muted-foreground flex items-center justify-center md:justify-start space-x-2">
            <span className="flex items-center"><Code className="h-6 w-6 mr-1.5 text-primary" /> Developer</span>
            <span className="text-foreground/50">&amp;</span>
            <span className="flex items-center"><Camera className="h-6 w-6 mr-1.5 text-primary" /> Fotografer</span>
          </p>
          <p className="text-lg text-foreground/80 max-w-lg mx-auto md:mx-0">
            {siteConfig.jobTitle}. Menciptakan pengalaman digital dan mengabadikan momen kehidupan. Selamat datang di ruang kreatif saya tempat teknologi bertemu seni.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
            <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg">
              <a href="#services">Lihat Layanan Saya</a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={onToggleResumeStatus}
              className="border-primary text-primary hover:bg-primary/10 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md hover:border-primary/70"
            >
              <Eye className="mr-2 h-5 w-5" />
              Status Resume Saya
            </Button>
          </div>
        </div>
        <div className="relative aspect-square max-w-sm mx-auto md:max-w-md rounded-xl shadow-2xl border-4 border-card overflow-hidden">
          <Image
            src="https://cdn.dribbble.com/userupload/22354020/file/original-b5ef6e0ccc07d15ab4353db156ecf6c4.gif"
            alt={`${siteConfig.name} - GIF Hero Animasi`}
            width={600}
            height={600}
            priority
            unoptimized={true}
            className="object-cover w-full h-full"
          />
           <div className="absolute bottom-4 right-4 bg-card p-3 rounded-lg shadow-xl border border-border/80 z-10">
            <p className="text-sm font-semibold text-primary">Kreator Digital</p>
            <p className="text-xs text-muted-foreground">Inovasi & Inspirasi</p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block">
        <ArrowDown className="h-8 w-8 text-primary/50 animate-bounce" />
      </div>
    </SectionWrapper>
  );
}
