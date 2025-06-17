
"use client";

import type { FC } from 'react';
import { useState, useEffect, useCallback, useRef } from 'react';
import { X } from 'lucide-react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import type { ResumeStatusData } from '@/lib/types';

const AUTO_ADVANCE_DURATION = 4000; // 4 seconds

export const ResumeStatusSection: FC<ResumeStatusData & {
  isOpen: boolean;
  onClose: () => void;
  initialStatusIndex?: number;
}> = ({
  userName,
  userInitial,
  updates,
  isOpen,
  onClose,
  initialStatusIndex = 0,
}) => {
  const [currentStatusIndex, setCurrentStatusIndex] = useState(initialStatusIndex);
  const [segmentProgress, setSegmentProgress] = useState(0); // Progress for the current segment (0-100)
  const [animateOut, setAnimateOut] = useState(false);

  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const segmentAnimationRef = useRef<number | null>(null);
  const segmentStartTimeRef = useRef<number>(0);

  const totalStatuses = updates.length;
  const currentUpdate = updates[currentStatusIndex];

  const clearTimers = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    if (segmentAnimationRef.current) {
      cancelAnimationFrame(segmentAnimationRef.current);
      segmentAnimationRef.current = null;
    }
  }, []);

  const handleClose = useCallback(() => {
    clearTimers();
    setAnimateOut(true);
    setTimeout(() => {
      onClose();
      setAnimateOut(false);
      setCurrentStatusIndex(0); // Reset for next open
      setSegmentProgress(0);
    }, 300); // Match animation duration
  }, [onClose, clearTimers]);

  const goToNextStatus = useCallback((isAutoAdvance: boolean = false) => {
    clearTimers();
    if (currentStatusIndex < totalStatuses - 1) {
      setCurrentStatusIndex((prev) => prev + 1);
      setSegmentProgress(0); // Reset progress for new segment
    } else {
      handleClose();
    }
  }, [currentStatusIndex, totalStatuses, handleClose, clearTimers]);

  const goToPreviousStatus = useCallback(() => {
    clearTimers();
    if (currentStatusIndex > 0) {
      setCurrentStatusIndex((prev) => prev - 1);
      setSegmentProgress(0); // Reset progress for new segment
    }
  }, [currentStatusIndex, clearTimers]);

  useEffect(() => {
    if (isOpen) {
      setCurrentStatusIndex(initialStatusIndex);
      setSegmentProgress(0);
    } else {
      clearTimers();
    }
  }, [isOpen, initialStatusIndex, clearTimers]);


  useEffect(() => {
    if (!isOpen) return;

    const animateSegment = (timestamp: number) => {
      if (!segmentStartTimeRef.current) {
        segmentStartTimeRef.current = timestamp;
      }
      const elapsed = timestamp - segmentStartTimeRef.current;
      const progress = Math.min(100, (elapsed / AUTO_ADVANCE_DURATION) * 100);
      setSegmentProgress(progress);

      if (progress < 100) {
        segmentAnimationRef.current = requestAnimationFrame(animateSegment);
      }
    };

    clearTimers(); // Clear any existing timers before starting new ones
    segmentStartTimeRef.current = 0; // Reset start time for the animation frame
    
    // Start segment fill animation
    segmentAnimationRef.current = requestAnimationFrame(animateSegment);

    // Set timer for auto-advancing to the next status
    if (currentStatusIndex < totalStatuses) { // Check if there are statuses to advance to
        timerRef.current = setTimeout(() => {
        goToNextStatus(true);
        }, AUTO_ADVANCE_DURATION);
    }


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
      clearTimers();
    };
  }, [isOpen, currentStatusIndex, totalStatuses, goToNextStatus, goToPreviousStatus, handleClose, clearTimers]);


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
          {updates.map((_, index) => (
            <div
              key={`progress-${index}`}
              className="h-1 flex-1 rounded-full bg-primary-foreground/30 overflow-hidden"
            >
              <div
                className={`h-full rounded-full bg-primary-foreground`}
                style={
                  index < currentStatusIndex ? { width: '100%' } :
                  index === currentStatusIndex ? { width: `${segmentProgress}%` } :
                  { width: '0%' }
                }
              />
            </div>
          ))}
        </div>

        {/* Header: User Info & Close Button */}
        <div className="flex justify-between items-center w-full mb-3">
          <div className="flex items-center gap-2">
            <Avatar className="h-8 w-8 border-2 border-primary-foreground/50">
              <AvatarFallback className="text-sm bg-primary-foreground text-primary">
                {userInitial}
              </AvatarFallback>
            </Avatar>
            <span id="resume-status-title" className="font-semibold text-sm">{userName}</span>
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
          onClick={() => goToPreviousStatus()}
          aria-label="Status Sebelumnya"
        />
        <div
          className="absolute inset-y-0 right-0 w-1/3 cursor-pointer"
          onClick={() => goToNextStatus()}
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
