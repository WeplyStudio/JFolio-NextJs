import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MobileNav } from './MobileNav';
import { navLinks, siteConfig } from '@/lib/data';
import type { NavLink as NavLinkType } from '@/lib/types';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-4 md:px-6">
        <Link href="#home" className="mr-6 flex items-center space-x-2">
          <span className="text-2xl font-bold text-accent hover:opacity-80 transition-opacity">
            {siteConfig.name}
          </span>
        </Link>
        
        <nav className="hidden md:flex flex-1 items-center justify-center space-x-6 text-sm font-medium">
          {navLinks.map((link: NavLinkType) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-foreground/70 transition-colors hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-2">
          <Button asChild variant="outline" className="hidden md:inline-flex border-primary/50 text-primary hover:bg-primary/10">
            <Link href="#contact">Get in Touch</Link>
          </Button>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
