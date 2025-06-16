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
    <div className="border-b border-gray-300">
      <button
        className="w-full py-4 flex justify-between items-center text-left"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <h3 className="font-medium text-gray-900">{title}</h3>
        <ChevronDown className={`h-4 w-4 text-gray-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <ul className="pt-2 pb-4 space-y-2.5 pl-2">
          {links.map(link => (
            <li key={link.label}>
              <Link href={link.href} className={`text-gray-500 hover:text-gray-800 transition-colors ${link.className || ''}`}>
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

  return (
    <>
      {/* Copyright strip before main footer, as per HTML structure */}
      <div className="bg-gray-50 py-8 border-t border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} {siteConfig.name} — Developed by{' '}
            {siteConfig.developers.map((dev, index) => (
              <span key={dev.name} className="font-medium text-gray-600">
                {dev.handle}
                {index < siteConfig.developers.length - 1 && ' and '}
              </span>
            ))}
          </p>
        </div>
      </div>

      <footer className="bg-gray-100 pt-8 text-sm">
        <div className="container mx-auto px-4 md:px-6"> {/* main-container is just container */}
          {/* Mobile Accordion Footer */}
          <div className="md:hidden">
            <FooterAccordionItem title="Products" links={footerLinks.products} />
            <FooterAccordionItem title="Support" links={footerLinks.support} />
            <FooterAccordionItem title="Company" links={footerLinks.company} />
          </div>

          {/* Desktop Grid Footer */}
          <div className="hidden md:grid md:grid-cols-3 py-6 border-b border-gray-300">
            <div>
              <h3 className="font-medium text-gray-900 mb-4">Products</h3>
              <ul className="space-y-2.5">
                {footerLinks.products.map(link => (
                  <li key={link.label}>
                    <Link href={link.href} className={`text-gray-500 hover:text-gray-800 transition-colors ${link.className || ''}`}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-gray-900 mb-4">Support</h3>
              <ul className="space-y-2.5">
                {footerLinks.support.map(link => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-gray-500 hover:text-gray-800 transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-gray-900 mb-4">Company</h3>
              <ul className="space-y-2.5">
                {footerLinks.company.map(link => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-gray-500 hover:text-gray-800 transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Bottom Bar */}
          <div className="py-5 text-xs text-gray-500">
            <div className="flex flex-col md:flex-row md:justify-between border-t border-gray-300 pt-5">
              <p className="text-center md:text-left mb-4 md:mb-0">
                Copyright © {currentYear} {siteConfig.name}. All rights reserved.
                <br className="md:hidden" />
                <span className="md:ml-1">
                  Developed by {siteConfig.developers.map(dev => dev.handle).join(' and ')}
                </span>
              </p>
              <div className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-6">
                {footerLinks.legal.map(link => (
                   <Link key={link.label} href={link.href} className="hover:underline mobile-tap-area">
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
