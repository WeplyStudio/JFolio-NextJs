
"use client";

import Link from 'next/link';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { siteConfig, footerLinks } from '@/lib/data';
import type { FooterLinkItem } from '@/lib/types';

interface AccordionItemProps {
  title: string;
  links: FooterLinkItem[];
}

function FooterAccordionItem({ title, links }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-border/70">
      <button
        className="w-full py-4 flex justify-between items-center text-left"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <h3 className="font-medium text-foreground">{title}</h3>
        <ChevronDown className={`h-4 w-4 text-muted-foreground transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <ul className="pt-2 pb-4 space-y-2.5 pl-2">
          {links.map(link => (
            <li key={link.label}>
              <Link 
                href={link.href} 
                className={`text-muted-foreground hover:text-primary transition-colors ${link.className || ''}`}
                target={link.external ? "_blank" : "_self"}
                rel={link.external ? "noopener noreferrer" : ""}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();
  const nameParts = siteConfig.name.split('.');
  const mainName = nameParts[0];
  const extension = nameParts.length > 1 ? `.${nameParts.slice(1).join('.')}` : '';
  const styledName = <>{mainName}{extension && <span className="text-primary">{extension}</span>}</>;


  return (
    <>
      <footer className="bg-card border-t border-border/60 pt-8 text-sm text-muted-foreground">
        <div className="container mx-auto px-4 md:px-6">
          <div className="md:hidden">
            <FooterAccordionItem title="Jelajahi" links={footerLinks.explore} />
            <FooterAccordionItem title="Terhubung" links={footerLinks.connect} />
            {footerLinks.tools && footerLinks.tools.length > 0 && (
                <FooterAccordionItem title="Alat & Sumber Daya" links={footerLinks.tools} />
            )}
          </div>

          <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-4 gap-8 py-6 border-b border-border/70">
            <div className="lg:col-span-1">
                <Link href="#home" className="text-xl font-bold text-foreground hover:opacity-80 transition-opacity mb-4 inline-block">
                    {styledName}
                </Link>
                <p className="text-xs max-w-xs">
                    {siteConfig.jobTitle}. Menciptakan pengalaman digital dari {siteConfig.location}.
                </p>
                 <div className="flex space-x-3 mt-4">
                    {siteConfig.socials.map((social) => (
                      <Link
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors p-1.5 rounded-full hover:bg-muted"
                        aria-label={social.name}
                      >
                        <social.icon className="h-5 w-5" />
                      </Link>
                    ))}
                  </div>
            </div>
            <div>
              <h3 className="font-medium text-foreground mb-4">Jelajahi</h3>
              <ul className="space-y-2.5">
                {footerLinks.explore.map(link => (
                  <li key={link.label}>
                    <Link href={link.href} className={`text-muted-foreground hover:text-primary transition-colors ${link.className || ''}`}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-foreground mb-4">Terhubung</h3>
              <ul className="space-y-2.5">
                {footerLinks.connect.map(link => (
                  <li key={link.label}>
                    <Link 
                        href={link.href} 
                        className="text-muted-foreground hover:text-primary transition-colors"
                        target={link.external ? "_blank" : "_self"}
                        rel={link.external ? "noopener noreferrer" : ""}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
             {footerLinks.tools && footerLinks.tools.length > 0 && (
                <div>
                    <h3 className="font-medium text-foreground mb-4">Alat & Sumber Daya</h3>
                    <ul className="space-y-2.5">
                        {footerLinks.tools.map(link => (
                        <li key={link.label}>
                            <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                            {link.label}
                            </Link>
                        </li>
                        ))}
                    </ul>
                </div>
            )}
          </div>
          
          <div className="py-6 text-xs">
            <div className="flex flex-col md:flex-row md:justify-between items-center border-t border-border/70 pt-6">
              <p className="text-center md:text-left mb-4 md:mb-0">
                © {currentYear} {siteConfig.name}. Hak cipta dilindungi.
              </p>
              <div className="flex flex-wrap justify-center md:justify-end gap-x-4 gap-y-2">
                {footerLinks.legal.map(link => (
                   <Link key={link.label} href={link.href} className="hover:text-primary hover:underline">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
