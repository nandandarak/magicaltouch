import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

/**
 * Magnet Component from reactbits.dev
 * Interactive magnetic pull effect that smoothly draws interactive elements towards the mouse.
 */
export default function Magnet({
  children,
  padding = 10,
  disabled = false,
  magnetStrength = 0.06, // 💡 Lowered significantly to reduce travel distance
  activeTransition = "transform 0.3s cubic-bezier(0.25, 1, 0.5, 1)", // 💡 Restored smooth "rubber-band" easing
  inactiveTransition = "transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)", // 💡 Restored smooth return easing
  wrapperClassName = "",
  innerClassName = "",
  ...props
}) {
  const [isActive, setIsActive] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const magnetRef = useRef(null);

  const handleMouseMove = (e) => {
    if (disabled || !magnetRef.current) return;

    const { left, top, width, height } =
      magnetRef.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const distX = e.clientX - centerX;
    const distY = e.clientY - centerY;

    if (
      Math.abs(distX) < width / 2 + padding &&
      Math.abs(distY) < height / 2 + padding
    ) {
      setIsActive(true);
      setPosition({ x: distX * magnetStrength, y: distY * magnetStrength });
    } else {
      setIsActive(false);
      setPosition({ x: 0, y: 0 });
    }
  };

  const handleMouseLeave = () => {
    setIsActive(false);
    setPosition({ x: 0, y: 0 });
  };

  const transition = isActive ? activeTransition : inactiveTransition;

  return (
    <div
      ref={magnetRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`inline-block ${wrapperClassName}`}
      {...props}
    >
      <div
        className={innerClassName}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
          transition,
          willChange: "transform",
        }}
      >
        {children}
      </div>
    </div>
  );
}
