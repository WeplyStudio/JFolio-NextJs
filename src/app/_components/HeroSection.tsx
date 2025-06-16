
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { SectionWrapper } from './SectionWrapper';
import { siteConfig } from '@/lib/data';
import { ArrowDown, Code, Camera, Download } from 'lucide-react';
import Link from 'next/link';

export function HeroSection() {
  const nameParts = siteConfig.name.split('.');
  const mainName = nameParts[0];
  const extension = nameParts.length > 1 ? `.${nameParts.slice(1).join('.')}` : '';

  return (
    <SectionWrapper id="home" className="min-h-[calc(100vh-4rem)] flex items-center bg-gradient-to-br from-background to-secondary/20">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground font-headline">
            Hi, I&apos;m {mainName}{extension && <span className="text-primary">{extension}</span>}
          </h1>
          <p className="text-xl lg:text-2xl text-muted-foreground flex items-center justify-center md:justify-start space-x-2">
            <span className="flex items-center"><Code className="h-6 w-6 mr-1.5 text-primary" /> Developer</span>
            <span className="text-foreground/50">&amp;</span>
            <span className="flex items-center"><Camera className="h-6 w-6 mr-1.5 text-primary" /> Photographer</span>
          </p>
          <p className="text-lg text-foreground/80 max-w-lg mx-auto md:mx-0">
            {siteConfig.jobTitle}. Crafting digital experiences and capturing life&apos;s moments. Welcome to my creative space where technology meets artistry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
            <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg">
              <Link href="#services">View My Services</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-primary text-primary hover:bg-primary/10 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md hover:border-primary/70">
              {/* Link to a resume file, or a contact section for resume request */}
              <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-5 w-5" />
                My Resume
              </Link>
            </Button>
          </div>
        </div>
        <div className="relative aspect-square max-w-sm mx-auto md:max-w-md">
          <Image
            src="https://cdn.dribbble.com/userupload/22354020/file/original-b5ef6e0ccc07d15ab4353db156ecf6c4.gif"
            alt={`${siteConfig.name} - Animated Hero GIF`}
            width={600}
            height={600}
            priority
            unoptimized={true} // GIFs are often better unoptimized by next/image
            className="rounded-xl shadow-2xl object-cover border-4 border-card"
          />
           <div className="absolute bottom-4 right-4 bg-card p-3 rounded-lg shadow-xl border border-border/80">
            <p className="text-sm font-semibold text-primary">Digital Creator</p>
            <p className="text-xs text-muted-foreground">Innovate & Inspire</p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block">
        <ArrowDown className="h-8 w-8 text-primary/50 animate-bounce" />
      </div>
    </SectionWrapper>
  );
}
