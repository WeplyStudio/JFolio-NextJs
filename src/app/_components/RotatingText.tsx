
"use client";

import { useState, useEffect, useRef } from 'react'; // Added useRef
import { SwitchTransition, CSSTransition } from 'react-transition-group';

interface RotatingTextProps {
  items: string[];
  interval?: number;
  className?: string;
  textClassName?: string;
  underlineClassName?: string;
}

export function RotatingText({
  items,
  interval = 3000, // 3 seconds
  className = "",
  textClassName = "text-lg md:text-xl font-bold text-gray-900 mb-1 text-center",
  underlineClassName = "w-12 h-1 bg-blue-600 mx-auto rounded-full"
}: RotatingTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const nodeRef = useRef<HTMLDivElement>(null); // Create a ref for the transitioning div

  useEffect(() => {
    if (items.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, interval);

    return () => clearInterval(timer);
  }, [items, interval]);

  if (!items || items.length === 0) {
    return null;
  }

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <SwitchTransition mode="out-in">
        <CSSTransition
          key={items[currentIndex]} // Key is important for SwitchTransition to re-trigger animation
          nodeRef={nodeRef} // Pass the ref to CSSTransition
          addEndListener={(node, done) => {
            if (node) { // Ensure node exists before adding event listener
                node.addEventListener("transitionend", done, false);
            }
          }}
          classNames="rotating-text"
          timeout={300}
        >
          <div ref={nodeRef}> {/* Attach the ref to the direct child div */}
            <h3 className={textClassName}>
              {items[currentIndex]}
            </h3>
            <div className={underlineClassName}></div>
          </div>
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
}
