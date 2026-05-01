import React from 'react';

interface StarIconProps {
  filled: boolean;
}

const StarIcon: React.FC<StarIconProps> = ({ filled }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`h-5 w-5 transition-colors ${filled ? 'text-white' : 'text-white/30'}`}
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path d="M10 2 L13 7 L18 10 L13 13 L10 18 L7 13 L2 10 L7 7 Z" />
  </svg>
);

interface RatingStarsProps {
  level: number;
}

export const RatingStars: React.FC<RatingStarsProps> = ({ level }) => {
  return (
    <div className="flex items-center space-x-1">
      {[...Array(5)].map((_, i) => (
        <StarIcon key={i} filled={i < level} />
      ))}
    </div>
  );
};
