"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { navLinks, siteConfig } from '@/lib/data';
import type { NavLink as NavLinkType } from '@/lib/types';

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden text-foreground hover:text-accent">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Open menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[340px] bg-card text-card-foreground p-0">
        <SheetHeader className="p-6 border-b">
          <SheetTitle>
            <Link href="#home" className="text-2xl font-bold text-accent hover:opacity-80 transition-opacity" onClick={() => setIsOpen(false)}>
              {siteConfig.name}
            </Link>
          </SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col space-y-2 p-6">
          {navLinks.map((link: NavLinkType) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg py-2 px-3 rounded-md font-medium text-foreground hover:bg-muted hover:text-accent-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
