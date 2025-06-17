
"use client"; // Required for useState and event handlers

import { useState } from 'react';
import { Header } from './_components/Header';
import { Footer } from './_components/Footer';
import { HeroSection } from './_components/HeroSection';
import { AboutSection } from './_components/AboutSection';
import { WhatIDoSection } from './_components/WhatIDoSection';
import { SeoToolSection } from './_components/SeoToolSection';
import { ContactSection } from './_components/ContactSection';
import { PhotoEditorSection } from './_components/PhotoEditorSection';
import { ResumeStatusSection } from './_components/ResumeStatusSection';
import { resumeStatusData } from '@/lib/data';


export default function PortfolioPage() {
  const [showResumeStatus, setShowResumeStatus] = useState(false);

  const toggleResumeStatusHandler = () => {
    setShowResumeStatus(prev => !prev);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow">
        <HeroSection onToggleResumeStatus={toggleResumeStatusHandler} />
        <AboutSection />
        <WhatIDoSection />
        <PhotoEditorSection />
        <SeoToolSection />
        <ContactSection />
      </main>
      <Footer />
      
      {/* ResumeStatusSection now takes data directly */}
      <ResumeStatusSection 
        isOpen={showResumeStatus} 
        onClose={toggleResumeStatusHandler} 
        {...resumeStatusData} // Spread resumeStatusData
      />
    </div>
  );
}
