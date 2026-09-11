import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

/**
 * DecryptedText Component from reactbits.dev
 * Characters scramble and rapidly resolve into the target text when scrolled into view or hovered.
 */
export default function DecryptedText({
  text,
  speed = 35,
  maxIterations = 10,
  characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()',
  className = '',
  parentClassName = '',
  animateOn = 'view', // 'view' or 'hover'
}) {
  const [displayText, setDisplayText] = useState(text);
  const [isHovering, setIsHovering] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const containerRef = useRef(null);
  const inView = useInView(containerRef, { once: true, amount: 0.2 });

  useEffect(() => {
    let interval;
    let iteration = 0;

    const shouldAnimate =
      (animateOn === 'view' && inView && !hasAnimated) ||
      (animateOn === 'hover' && isHovering);

    if (shouldAnimate) {
      interval = setInterval(() => {
        setDisplayText(
          text
            .split('')
            .map((char, index) => {
              if (char === ' ') return ' ';
              if (index < iteration / (maxIterations / text.length)) {
                return text[index];
              }
              return characters[Math.floor(Math.random() * characters.length)];
            })
            .join('')
        );

        iteration += 1;

        if (iteration >= maxIterations) {
          clearInterval(interval);
          setDisplayText(text);
          if (animateOn === 'view') setHasAnimated(true);
        }
      }, speed);
    } else if (!isHovering && animateOn === 'hover') {
      setDisplayText(text);
    }

    return () => clearInterval(interval);
  }, [inView, isHovering, hasAnimated, text, speed, maxIterations, characters, animateOn]);

  return (
    <span
      ref={containerRef}
      onMouseEnter={() => animateOn === 'hover' && setIsHovering(true)}
      onMouseLeave={() => animateOn === 'hover' && setIsHovering(false)}
      className={`inline-block font-mono ${parentClassName}`}
    >
      <span className={className}>{displayText}</span>
    </span>
  );
}
