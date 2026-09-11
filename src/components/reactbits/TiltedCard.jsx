import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function TiltedCard({
  children,
  imageSrc,
  altText = 'Tilted card image',
  captionText = '',
  containerHeight = '100%',
  containerWidth = '100%',
  imageHeight = '100%',
  imageWidth = '100%',
  scaleOnHover = 1.03,
  rotateAmplitude = 12,
  showMobileWarning = false,
  showTooltip = false,
  overlayContent = null,
  displayOverlayContent = false,
  className = '',
}) {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { damping: 25, stiffness: 200 });
  const mouseYSpring = useSpring(y, { damping: 25, stiffness: 200 });

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = (mouseX / rect.width) - 0.5;
    const yPct = (mouseY / rect.height) - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        width: containerWidth,
        height: containerHeight,
        perspective: 1000,
      }}
      className={`relative inline-block ${className}`}
    >
      <motion.div
        style={{
          width: '100%',
          height: '100%',
          rotateY: useSpring(useMotionValue(0), { damping: 25, stiffness: 200 }),
          transformStyle: 'preserve-3d',
        }}
        animate={{
          rotateX: isHovered ? -mouseYSpring.get() * rotateAmplitude : 0,
          rotateY: isHovered ? mouseXSpring.get() * rotateAmplitude : 0,
          scale: isHovered ? scaleOnHover : 1,
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="w-full h-full relative rounded-inherit"
      >
        {children ? (
          children
        ) : (
          <div className="relative w-full h-full overflow-hidden rounded-inherit">
            {imageSrc && (
              <img
                src={imageSrc}
                alt={altText}
                style={{ width: imageWidth, height: imageHeight }}
                className="w-full h-full object-cover"
              />
            )}
            {captionText && (
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-black/60 backdrop-blur-sm text-white text-xs">
                {captionText}
              </div>
            )}
          </div>
        )}

        {/* Dynamic Sheen / Glare Highlight */}
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300"
          style={{
            opacity: isHovered ? 0.35 : 0,
            background: `radial-gradient(circle at ${
              (mouseXSpring.get() + 0.5) * 100
            }% ${(mouseYSpring.get() + 0.5) * 100}%, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 60%)`,
          }}
        />

        {displayOverlayContent && overlayContent && (
          <div className="absolute inset-0 pointer-events-none z-10">
            {overlayContent}
          </div>
        )}
      </motion.div>
    </div>
  );
}
