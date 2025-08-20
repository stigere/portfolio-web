// components/LetterDisplay.tsx
import React from 'react';

// Deterministic random number generator for consistent server/client values
function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

function getRandomSpeed(index: number) {
  // Use the character index as seed for consistent values
  const seed = index * 123.456; // Arbitrary multiplier for variety
  return 0.8 + seededRandom(seed) * 0.7;
}

export function LetterDisplay({ word }: { word: string }) {
  return (
    <>
      {word.split('').map((char, i) => (
        <div
          key={i}
          className="letter text-6xl font-semibold xs:text-[90px] md:text-[120px] text-gray-900 hover:text-orange-500 transition-colors duration-300 cursor-pointer"
          data-speed={getRandomSpeed(i)}
        >
          {char}
        </div>
      ))}
    </>
  );
}