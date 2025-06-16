"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button'; // Assuming Button component is still useful
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from '@/components/ui/sheet'; // For mobile nav
import { ShoppingBag, Menu as MenuIcon, X as XIcon } from 'lucide-react';
import { siteConfig, navLinks } from '@/lib/data';
import type { NavLink as NavLinkType } from '@/lib/types';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 transition-all duration-300 bg-white shadow-sm">
      <div className="container mx-auto"> {/* Ensure container is applied for consistent padding */}
        <div className="flex justify-between items-center h-14 md:h-18">
          <div className="flex-shrink-0">
            <Link href="/" className="text-gray-900 font-bold text-xl">
              {siteConfig.name.split(' ')[0]}.<span className="text-blue-600">{siteConfig.name.split(' ')[1]}</span>
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8 text-sm justify-center">
            {navLinks.map((link: NavLinkType) => (
              <Link
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : "_self"}
                rel={link.external ? "noopener noreferrer" : ""}
                className={`text-gray-600 hover:text-blue-600 transition-colors whitespace-nowrap ${link.external ? `link-${link.label.toLowerCase()}` : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            {/* The "Beli Sekarang" link in the example HTML goes to '#', which is unusual for a purchase button.
                I'll make it a button that could potentially open a modal or go to a specific product page.
                For now, linking to the 'Advance' product page as a primary CTA. */}
            <Button asChild className="hidden md:inline-flex bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium">
              <Link href="https://iklilzaki.myr.id/pl/template-skripsi-easykripsi-advance" target="_blank" rel="noopener noreferrer">
                <ShoppingBag className="h-4 w-4 mr-2" />
                Beli Sekarang
              </Link>
            </Button>
            
            <div className="md:hidden">
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-gray-600 hover:text-blue-600">
                    <MenuIcon className="h-6 w-6" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[300px] sm:w-[340px] bg-white p-0">
                  <SheetHeader className="p-6 border-b border-gray-200">
                    <SheetTitle>
                      <Link 
                        href="/" 
                        className="text-gray-900 font-bold text-xl"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {siteConfig.name.split(' ')[0]}.<span className="text-blue-600">{siteConfig.name.split(' ')[1]}</span>
                      </Link>
                    </SheetTitle>
                     <Button variant="ghost" size="icon" className="absolute right-4 top-4" onClick={() => setIsMobileMenuOpen(false)}>
                        <XIcon className="h-5 w-5 text-gray-500"/>
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
                        className={`block py-2 px-3 rounded-md font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors ${link.external ? `link-${link.label.toLowerCase()}` : ''}`}
                      >
                        {link.label}
                      </Link>
                    ))}
                     <Button asChild className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium">
                        <Link 
                          href="https://iklilzaki.myr.id/pl/template-skripsi-easykripsi-advance" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                            <ShoppingBag className="h-4 w-4 mr-2" />
                            Beli Sekarang
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
