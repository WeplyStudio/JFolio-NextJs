import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { SectionWrapper } from './SectionWrapper';
import { siteConfig } from '@/lib/data';
import { ArrowDown, Camera, Code } from 'lucide-react';
import Link from 'next/link';

export function HeroSection() {
  return (
    <SectionWrapper id="home" className="min-h-[calc(100vh-4rem)] flex items-center bg-gradient-to-br from-background to-secondary/20">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground font-headline">
            Hi, I&apos;m <span className="text-accent">{siteConfig.name}</span>
          </h1>
          <p className="text-xl lg:text-2xl text-muted-foreground flex items-center justify-center md:justify-start space-x-4">
            <span className="flex items-center"><Code className="h-6 w-6 mr-2 text-primary" /> Developer</span>
            <span className="text-foreground/50">&</span>
            <span className="flex items-center"><Camera className="h-6 w-6 mr-2 text-primary" /> Photographer</span>
          </p>
          <p className="text-lg text-foreground/80">
            Crafting digital experiences and capturing life&apos;s moments. Welcome to my creative space where technology meets artistry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
            <Button size="lg" asChild className="bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg">
              <Link href="#projects">View My Work</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-primary text-primary hover:bg-primary/10 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md">
              <Link href="#contact">Let&apos;s Connect</Link>
            </Button>
          </div>
        </div>
        <div className="relative aspect-square max-w-md mx-auto md:max-w-none">
          <Image
            src="https://placehold.co/600x600.png"
            alt={`${siteConfig.name} - Developer and Photographer`}
            width={600}
            height={600}
            priority
            className="rounded-xl shadow-2xl object-cover border-4 border-card"
            data-ai-hint="professional portrait"
          />
           <div className="absolute -bottom-4 -right-4 bg-card p-3 rounded-lg shadow-xl border">
            <p className="text-sm font-medium text-primary">Digital Creator</p>
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
