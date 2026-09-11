import React from 'react';

/**
 * ShinyText Component from reactbits.dev
 * Adds a smooth, shimmering light glare that pans across the text.
 */
export default function ShinyText({
  text,
  disabled = false,
  speed = 4,
  className = '',
}) {
  const animationDuration = `${speed}s`;

  return (
    <span
      className={`inline-block ${
        disabled
          ? ''
          : 'bg-clip-text text-transparent bg-[linear-gradient(120deg,rgba(255,255,255,0.4)_0%,rgba(255,255,255,1)_50%,rgba(255,255,255,0.4)_100%)] bg-[length:200%_100%] animate-shine'
      } ${className}`}
      style={{
        animationDuration: disabled ? '0s' : animationDuration,
      }}
    >
      {text}
    </span>
  );
}
