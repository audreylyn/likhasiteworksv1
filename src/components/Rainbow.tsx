import React from 'react';

interface RainbowProps {
  width?: number;
  height?: number;
  className?: string;
}

const Rainbow: React.FC<RainbowProps> = ({
  width = 24,
  height = 24,
  className = ""
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Rainbow arc 1 - Red (outermost) */}
      <path
        d="M15 85 A35 35 0 0 1 85 85"
        stroke="#FF6B6B"
        strokeWidth="8"
        strokeLinecap="round"
        fill="none"
      />

      {/* Rainbow arc 2 - Orange */}
      <path
        d="M20 80 A30 30 0 0 1 80 80"
        stroke="#FF8E53"
        strokeWidth="8"
        strokeLinecap="round"
        fill="none"
      />

      {/* Rainbow arc 3 - Yellow */}
      <path
        d="M25 75 A25 25 0 0 1 75 75"
        stroke="#FFD93D"
        strokeWidth="8"
        strokeLinecap="round"
        fill="none"
      />

      {/* Rainbow arc 4 - Green */}
      <path
        d="M30 70 A20 20 0 0 1 70 70"
        stroke="#6BCF7F"
        strokeWidth="8"
        strokeLinecap="round"
        fill="none"
      />

      {/* Rainbow arc 5 - Blue */}
      <path
        d="M35 65 A15 15 0 0 1 65 65"
        stroke="#4ECDC4"
        strokeWidth="8"
        strokeLinecap="round"
        fill="none"
      />

      {/* Rainbow arc 6 - Indigo */}
      <path
        d="M40 60 A10 10 0 0 1 60 60"
        stroke="#45B7D1"
        strokeWidth="8"
        strokeLinecap="round"
        fill="none"
      />

      {/* Rainbow arc 7 - Violet (innermost) */}
      <path
        d="M45 55 A5 5 0 0 1 55 55"
        stroke="#96CEB4"
        strokeWidth="8"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
};

export default Rainbow;
