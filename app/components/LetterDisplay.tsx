// components/LetterDisplay.tsx
import React from 'react';


function getRandomSpeed() {
  // [0.8, 1.5) - lower = bigger drift
  return 0.8 + Math.random() * 0.7;
}
export function LetterDisplay({ word }: { word: string }) {
  return (
    <>
      {word.split('').map((char, i) => (
        <div
          key={i}
          className="letter text-6xl font-semibold xs:text-[90px] md:text-[120px]"
          data-speed={getRandomSpeed()}
        >
          {char}
        </div>
      ))}
    </>
  );
}