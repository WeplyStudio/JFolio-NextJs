"use client";

import Link from 'next/link';
import { Check } from 'lucide-react';
import { siteConfig, heroRotatingTexts } from '@/lib/data';
import { RotatingText } from './RotatingText'; // Import the new component

export function HeroEasyKripsi() {
  return (
    <section className="relative bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-10"> {/* Increased py for more space */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"> {/* Increased gap */}
          {/* Text Content - Left Column */}
          <div className="order-2 lg:order-1">
            {/* Mobile Rotating Text Card */}
            <div className="lg:hidden mb-6">
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-md border border-blue-100 w-full overflow-hidden flex items-center justify-center min-h-[100px] py-4">
                <RotatingText 
                  items={heroRotatingTexts} 
                  className="h-16 w-full"
                  textClassName="text-lg md:text-xl font-bold text-gray-900 mb-1 text-center"
                  underlineClassName="w-12 h-1 bg-blue-600 mx-auto rounded-full"
                />
              </div>
            </div>

            <div className="text-sm font-medium text-blue-600 mb-2 mt-1">
              {siteConfig.name} – {siteConfig.jobTitle}
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900 leading-tight">
              Otomatisasi format skripsi/tesis Anda dalam sekejap
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-6">
              Hemat waktu penulisan skripsi dengan pintasan keyboard dan alat cerdas untuk Word
            </p>
            
            <div className="flex flex-wrap items-center gap-2 mb-6 text-gray-500 text-sm">
              <span className="flex items-center bg-gray-100 rounded-full px-3 py-1">
                <Check className="h-4 w-4 text-blue-600 mr-1" />
                1600+ pengguna sejak 2022
              </span>
              <span className="flex items-center bg-gray-100 rounded-full px-3 py-1">
                <Check className="h-4 w-4 text-blue-600 mr-1" />
                Format pintasan keyboard
              </span>
              <span className="flex items-center bg-gray-100 rounded-full px-3 py-1">
                <Check className="h-4 w-4 text-blue-600 mr-1" />
                Support selamanya
              </span>
            </div>

            <div className="flex flex-wrap gap-4 mb-8">
              <Link
                href="https://iklilzaki.myr.id/pl/template-skripsi-easykripsi-basic"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-blue-100 hover:bg-blue-200 text-blue-700 font-medium py-3 px-6 rounded-lg transition-colors link-basic"
              >
                Beli Basic (Rp 50.000)
              </Link>
              <Link
                href="https://iklilzaki.myr.id/pl/template-skripsi-easykripsi-advance"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors link-advance"
              >
                Beli Advance (Rp 100.000)
              </Link>
            </div>

            <div className="flex items-center text-sm text-gray-500">
              <div className="flex -space-x-2 mr-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center text-xs font-medium text-white border-2 border-white">
                  IZ {/* Initials for Iklil Zaki */}
                </div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center text-xs font-medium text-white border-2 border-white">
                  BD {/* Initials for Bang Deniuss */}
                </div>
                {/* <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center text-xs font-medium text-white border-2 border-white">
                  +
                </div> */}
              </div>
              <div>
                Dikembangkan oleh{' '}
                {siteConfig.developers.map((dev, index) => (
                  <span key={dev.name} className="font-medium text-gray-700">
                    {dev.handle}
                    {index < siteConfig.developers.length - 1 && ' dan '}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Image/Interactive Content - Right Column */}
          <div className="order-1 lg:order-2 flex flex-col justify-center items-center">
            <div className="hidden lg:block relative w-full">
              <div className="flex items-center justify-center">
                <div className="relative w-4/5 mx-auto flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-xl border border-blue-100 py-8 px-6">
                  <div className="absolute -top-4 right-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-4 py-1.5 rounded-full text-xs font-semibold shadow-md tracking-wide">
                    FITUR ADVANCE
                  </div>
                  
                  <div className="h-56 flex items-center justify-center w-full">
                    <RotatingText 
                      items={heroRotatingTexts} 
                      className="w-full"
                      textClassName="text-3xl md:text-4xl font-bold text-gray-900 mb-3 text-center"
                      underlineClassName="w-20 h-1.5 bg-blue-600 mx-auto rounded-full" // Slightly thicker underline
                    />
                  </div>

                  <div className="w-full overflow-hidden my-4 pb-2 relative">
                    <p className="text-sm text-blue-700 font-medium mb-2 text-center">
                      Fitur Otomatis Easy.kripsi
                    </p>
                    {/* Placeholder for Marquee - Original HTML uses jquery.marquee */}
                    <div className="social-proof-marquee whitespace-nowrap text-center text-xs text-gray-500">
                      <span>✨ Daftar Tabel Otomatis</span> • <span>✨ Sitasi Cepat</span> • <span>✨ Format Referensi Instan</span>
                    </div>
                  </div>

                  <div className="mt-4 w-full max-w-sm">
                    <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                      <p className="text-gray-700 font-medium text-center mb-3 text-sm">
                        Format skripsi lebih cepat dengan pintasan keyboard:
                      </p>
                      <div className="space-y-2 text-xs">
                        <div className="flex items-center justify-between">
                          <span className="px-2.5 py-1 bg-blue-100 text-blue-700 rounded-md font-medium">Alt+1</span>
                          <span className="text-gray-400 mx-1">→</span>
                          <span className="px-2.5 py-1 bg-blue-600 text-white rounded-md font-medium">Format Heading 1</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="px-2.5 py-1 bg-blue-100 text-blue-700 rounded-md font-medium">Alt+D</span>
                          <span className="text-gray-400 mx-1">→</span>
                          <span className="px-2.5 py-1 bg-blue-600 text-white rounded-md font-medium">Daftar Isi Otomatis</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="px-2.5 py-1 bg-blue-100 text-blue-700 rounded-md font-medium">Alt+G</span>
                          <span className="text-gray-400 mx-1">→</span>
                          <span className="px-2.5 py-1 bg-blue-600 text-white rounded-md font-medium">Caption Gambar</span>
                        </div>
                        <div className="flex items-center justify-between mt-4">
                          <Link
                            href="https://iklilzaki.myr.id/pl/template-skripsi-easykripsi-advance"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full py-2.5 px-3 text-sm font-medium bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors flex items-center justify-center link-advance shadow-md"
                          >
                            <span>Dapatkan Paket Advance</span>
                            <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
