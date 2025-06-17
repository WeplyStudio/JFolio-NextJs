
"use client";

import type { FC } from 'react';
import { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import type { ResumeStatusData, ResumeStatusUpdate } from '@/lib/types';
import { Progress } from '@/components/ui/progress'; // We'll use this for individual segment progress later if auto-advancing

interface ResumeStatusSectionProps {
  data: ResumeStatusData;
  isOpen: boolean;
  onClose: () => void;
  initialStatusIndex?: number;
}

export const ResumeStatusSection: FC<ResumeStatusSectionProps> = ({
  data,
  isOpen,
  onClose,
  initialStatusIndex = 0,
}) => {
  const [currentStatusIndex, setCurrentStatusIndex] = useState(initialStatusIndex);
  const [animateOut, setAnimateOut] = useState(false);

  const totalStatuses = data.updates.length;
  const currentUpdate = data.updates[currentStatusIndex];

  const handleClose = useCallback(() => {
    setAnimateOut(true);
    setTimeout(() => {
      onClose();
      setAnimateOut(false);
      setCurrentStatusIndex(0); // Reset for next open
    }, 300); // Match animation duration
  }, [onClose]);

  const goToNextStatus = useCallback(() => {
    if (currentStatusIndex < totalStatuses - 1) {
      setCurrentStatusIndex((prev) => prev + 1);
    } else {
      handleClose(); // Close when last status is finished
    }
  }, [currentStatusIndex, totalStatuses, handleClose]);

  const goToPreviousStatus = useCallback(() => {
    if (currentStatusIndex > 0) {
      setCurrentStatusIndex((prev) => prev - 1);
    }
  }, [currentStatusIndex]);

  useEffect(() => {
    if (!isOpen) return;
    setCurrentStatusIndex(initialStatusIndex); // Reset to initial when opened

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') {
        goToNextStatus();
      } else if (event.key === 'ArrowLeft') {
        goToPreviousStatus();
      } else if (event.key === 'Escape') {
        handleClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, initialStatusIndex, goToNextStatus, goToPreviousStatus, handleClose]);


  if (!isOpen && !animateOut) {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col bg-primary text-primary-foreground transition-opacity duration-300
                  ${isOpen && !animateOut ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-status-title"
    >
      {/* Progress Segments */}
      <div className="pt-3 px-3 w-full">
        <div className="flex w-full gap-1 mb-2">
          {data.updates.map((_, index) => (
            <div
              key={`progress-${index}`}
              className="h-1 flex-1 rounded-full bg-primary-foreground/30"
            >
              <div
                className={`h-full rounded-full bg-primary-foreground transition-all duration-200 ${
                  index < currentStatusIndex ? 'w-full' : index === currentStatusIndex ? 'w-1/2' : 'w-0' // Simple progress for current, full for past
                }`}
              />
            </div>
          ))}
        </div>

        {/* Header: User Info & Close Button */}
        <div className="flex justify-between items-center w-full mb-3">
          <div className="flex items-center gap-2">
            <Avatar className="h-8 w-8 border-2 border-primary-foreground/50">
              {/* <AvatarImage src={data.userImageUrl} alt={data.userName} /> */}
              <AvatarFallback className="text-sm bg-primary-foreground text-primary">
                {data.userInitial}
              </AvatarFallback>
            </Avatar>
            <span id="resume-status-title" className="font-semibold text-sm">{data.userName}</span>
            <span className="text-xs text-primary-foreground/70">{currentUpdate?.timestamp}</span>
          </div>
          <Button variant="ghost" size="icon" onClick={handleClose} className="text-primary-foreground hover:bg-primary-foreground/10 h-8 w-8">
            <X className="h-5 w-5" />
            <span className="sr-only">Tutup Status</span>
          </Button>
        </div>
      </div>

      {/* Content Area & Navigation */}
      <div className="flex-1 flex flex-col items-center justify-center text-center w-full relative overflow-hidden px-4">
        {/* Navigation Tappable Areas */}
        <div
          className="absolute inset-y-0 left-0 w-1/3 cursor-pointer"
          onClick={goToPreviousStatus}
          aria-label="Status Sebelumnya"
        />
        <div
          className="absolute inset-y-0 right-0 w-1/3 cursor-pointer"
          onClick={goToNextStatus}
          aria-label="Status Berikutnya"
        />

        {/* Status Content */}
        {currentUpdate && (
          <div className="animate-in fade-in-50 duration-500">
            {currentUpdate.icon && (
                <currentUpdate.icon className="h-12 w-12 text-primary-foreground/80 mx-auto mb-4" />
            )}
            <h3 className="text-2xl md:text-3xl font-bold mb-2 leading-tight">{currentUpdate.category}</h3>
            <p className="text-base md:text-lg text-primary-foreground/90 max-w-md mx-auto whitespace-pre-line">
              {currentUpdate.content}
            </p>
          </div>
        )}
      </div>
      
      {/* Navigation Hint (Optional) */}
      <div className="pb-4 px-4 text-center">
        <p className="text-xs text-primary-foreground/60">
          Ketuk sisi kiri/kanan untuk navigasi atau tekan Esc untuk menutup.
        </p>
      </div>
    </div>
  );
};
