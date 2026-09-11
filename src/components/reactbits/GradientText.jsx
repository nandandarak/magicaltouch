import React from 'react';

export default function GradientText({
  children,
  colors = ['#C5A869', '#E6C687', '#997B38', '#E6C687', '#C5A869'],
  animationSpeed = 6,
  showBorder = false,
  className = '',
}) {
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${colors.join(', ')})`,
    backgroundSize: '300% 100%',
    animation: `gradientMove ${animationSpeed}s linear infinite`,
  };

  return (
    <span
      className={`relative inline-block font-inherit ${
        showBorder ? 'border border-amber-500/20 px-3 py-1 rounded-full' : ''
      } ${className}`}
    >
      <span
        style={gradientStyle}
        className="bg-clip-text text-transparent font-inherit"
      >
        {children}
      </span>
      <style>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </span>
  );
}
