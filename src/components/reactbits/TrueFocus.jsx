import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function TrueFocus({
  sentence = 'True Focus Acupressure Healing',
  manualMode = false,
  blurAmount = 4,
  borderColor = '#C5A869',
  glowColor = 'rgba(197, 168, 105, 0.35)',
  animationDuration = 0.5,
  pauseBetweenAnimations = 2.5,
  className = '',
}) {
  const words = sentence.split(' ');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lastActiveIndex, setLastActiveIndex] = useState(null);
  const containerRef = useRef(null);
  const wordRefs = useRef([]);
  const [focusRect, setFocusRect] = useState({ x: 0, y: 0, width: 0, height: 0 });

  useEffect(() => {
    if (!manualMode) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % words.length);
      }, (animationDuration + pauseBetweenAnimations) * 1000);

      return () => clearInterval(interval);
    }
  }, [manualMode, animationDuration, pauseBetweenAnimations, words.length]);

  useEffect(() => {
    if (currentIndex === null || currentIndex === -1) return;
    if (!wordRefs.current[currentIndex] || !containerRef.current) return;

    const parentRect = containerRef.current.getBoundingClientRect();
    const activeRect = wordRefs.current[currentIndex].getBoundingClientRect();

    setFocusRect({
      x: activeRect.left - parentRect.left,
      y: activeRect.top - parentRect.top,
      width: activeRect.width,
      height: activeRect.height,
    });
  }, [currentIndex, words.length]);

  const handleMouseEnter = (index) => {
    if (manualMode) {
      setLastActiveIndex(index);
      setCurrentIndex(index);
    }
  };

  const handleMouseLeave = () => {
    if (manualMode) {
      setCurrentIndex(lastActiveIndex);
    }
  };

  return (
    <div
      ref={containerRef}
      className={`relative inline-flex flex-wrap items-center gap-x-2 gap-y-1 ${className}`}
    >
      {words.map((word, index) => {
        const isActive = index === currentIndex;
        return (
          <span
            key={index}
            ref={(el) => (wordRefs.current[index] = el)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            style={{
              filter:
                manualMode
                  ? isActive
                    ? 'blur(0px)'
                    : `blur(${blurAmount}px)`
                  : isActive
                  ? 'blur(0px)'
                  : 'blur(0px)',
              transition: `filter ${animationDuration}s ease`,
            }}
            className="relative cursor-pointer select-none font-inherit"
          >
            {word}
          </span>
        );
      })}

      {/* The Animated Reticle / Focus Frame with Corner Marks */}
      <motion.div
        animate={{
          x: focusRect.x - 6,
          y: focusRect.y - 4,
          width: focusRect.width + 12,
          height: focusRect.height + 8,
          opacity: focusRect.width > 0 ? 1 : 0,
        }}
        transition={{
          duration: animationDuration,
          ease: [0.16, 1, 0.3, 1],
        }}
        style={{
          boxShadow: `0 0 16px ${glowColor}`,
          pointerEvents: 'none',
        }}
        className="absolute top-0 left-0 border border-amber-600/30 dark:border-amber-400/40 rounded-lg pointer-events-none z-10"
      >
        {/* Top-Left Corner */}
        <span
          style={{ borderColor }}
          className="absolute -top-[1.5px] -left-[1.5px] w-2.5 h-2.5 border-t-2 border-l-2 rounded-tl-xs"
        />
        {/* Top-Right Corner */}
        <span
          style={{ borderColor }}
          className="absolute -top-[1.5px] -right-[1.5px] w-2.5 h-2.5 border-t-2 border-r-2 rounded-tr-xs"
        />
        {/* Bottom-Left Corner */}
        <span
          style={{ borderColor }}
          className="absolute -bottom-[1.5px] -left-[1.5px] w-2.5 h-2.5 border-b-2 border-l-2 rounded-bl-xs"
        />
        {/* Bottom-Right Corner */}
        <span
          style={{ borderColor }}
          className="absolute -bottom-[1.5px] -right-[1.5px] w-2.5 h-2.5 border-b-2 border-r-2 rounded-br-xs"
        />
      </motion.div>
    </div>
  );
}
