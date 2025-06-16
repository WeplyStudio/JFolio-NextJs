
"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Menu as MenuIcon, X as XIcon, MessageSquare } from 'lucide-react'; 
import { siteConfig, navLinks } from '@/lib/data';
import type { NavLink as NavLinkType } from '@/lib/types';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const nameParts = siteConfig.name.split(' ');
  const firstName = nameParts[0];
  const lastName = nameParts.slice(1).join(' ');

  return (
    <header className="sticky top-0 z-50 transition-all duration-300 bg-background shadow-sm border-b border-border/60">
      <div className="container mx-auto">
        <div className="flex justify-between items-center h-16 md:h-18">
          <div className="flex-shrink-0">
            <Link href="#home" className="text-foreground font-bold text-xl hover:opacity-80 transition-opacity">
              {firstName}{lastName && <span className="text-primary">.{lastName}</span>}
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-6 text-sm justify-center items-center"> {/* Reduced space-x-8 to space-x-6 */}
            {navLinks.map((link: NavLinkType) => (
              <Link
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : "_self"}
                rel={link.external ? "noopener noreferrer" : ""}
                className="text-muted-foreground hover:text-primary transition-colors whitespace-nowrap flex items-center"
              >
                {link.icon && <link.icon className="mr-1.5 h-4 w-4 text-primary/80" />}
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <Button asChild className="hidden md:inline-flex bg-primary hover:bg-primary/90 text-primary-foreground text-sm font-medium">
              <Link href="#contact">
                <MessageSquare className="h-4 w-4 mr-2" />
                Contact Me
              </Link>
            </Button>
            
            <div className="md:hidden">
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                    <MenuIcon className="h-6 w-6" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[300px] sm:w-[340px] bg-card p-0">
                  <SheetHeader className="p-6 border-b border-border">
                    <SheetTitle>
                      <Link 
                        href="#home" 
                        className="text-foreground font-bold text-xl hover:opacity-80 transition-opacity"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {firstName}{lastName && <span className="text-primary">.{lastName}</span>}
                      </Link>
                    </SheetTitle>
                     <Button variant="ghost" size="icon" className="absolute right-4 top-4 text-muted-foreground hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>
                        <XIcon className="h-5 w-5"/>
                        <span className="sr-only">Close menu</span>
                    </Button>
                  </SheetHeader>
                  <nav className="flex flex-col space-y-2 p-6">
                    {navLinks.map((link: NavLinkType) => (
                      <Link
                        key={link.label}
                        href={link.href}
                        target={link.external ? "_blank" : "_self"}
                        rel={link.external ? "noopener noreferrer" : ""}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-center py-2 px-3 rounded-md font-medium text-foreground hover:bg-muted hover:text-primary transition-colors"
                      >
                         {link.icon && <link.icon className="mr-2 h-4 w-4 text-primary/80" />}
                        {link.label}
                      </Link>
                    ))}
                     <Button asChild className="w-full mt-4 bg-primary hover:bg-primary/90 text-primary-foreground text-sm font-medium">
                        <Link 
                          href="#contact"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                            <MessageSquare className="h-4 w-4 mr-2" />
                            Contact Me
                        </Link>
                    </Button>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
