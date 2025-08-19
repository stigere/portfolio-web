/*
'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { LetterCollision } from './LetterCollision';

interface NewLandingPageProps {
  onComplete?: () => void;
}

export default function NewLandingPage({ onComplete }: NewLandingPageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [showButton, setShowButton] = useState(false);
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const letters = container.querySelectorAll('.letter');

    // Set initial state - letters off-screen
    gsap.set(letters, {
      y: 100,
      opacity: 0,
      rotation: 180
    });

    // Animate letters in with stagger
    const tl = gsap.timeline({
      onComplete: () => {
        // After animation, show the enter button
        setTimeout(() => {
          setShowButton(true);
        }, 1000);
      }
    });

    tl.to(letters, {
      duration: 1.2,
      y: 0,
      opacity: 1,
      rotation: 0,
      ease: 'back.out(1.7)',
      stagger: 0.08
    });

    // Add some floating animation after letters are in
    tl.to(letters, {
      duration: 2,
      y: -10,
      ease: 'power2.inOut',
      stagger: 0.02,
      yoyo: true,
      repeat: -1
    }, '-=1');

  }, []);

  const handleEnterSite = () => {
    if (containerRef.current) {
      const letters = containerRef.current.querySelectorAll('.letter');
      
      // Create explosion effect
      letters.forEach((letter, index) => {
        const randomX = (Math.random() - 0.5) * 1000;
        const randomY = (Math.random() - 0.5) * 800;
        const randomRotation = (Math.random() - 0.5) * 720;

        gsap.to(letter, {
          duration: 1.5,
          x: randomX,
          y: randomY,
          rotation: randomRotation,
          opacity: 0,
          ease: 'power2.out',
          delay: index * 0.02
        });
      });

      // Fade out container
      setTimeout(() => {
        gsap.to(containerRef.current, {
          duration: 1,
          opacity: 0,
          scale: 0.8,
          ease: 'power2.inOut',
          onComplete: () => {
            setIsAnimationComplete(true);
            onComplete?.();
          }
        });
      }, 2000);
    }
  };

  useEffect(() => {
    if (isAnimationComplete && onComplete) {
      onComplete();
    }
  }, [isAnimationComplete, onComplete]);

  if (isAnimationComplete) {
    return null;
  }

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center z-50 overflow-hidden"
    >
      {/* Floating particles *//*}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
        {/* Use your LetterCollision component *//*}
        <div className="text-white">
          <LetterCollision />
        </div>
        
        {showButton && (
          <div className="mt-12 animate-fade-in absolute bottom-20">
            <button
              onClick={handleEnterSite}
              className="px-8 py-4 bg-white bg-opacity-20 backdrop-blur-sm border border-white border-opacity-30 rounded-lg text-white font-semibold text-lg hover:bg-opacity-30 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Enter Site
            </button>
          </div>
        )}
      </div>
      
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
*/

// app/page.tsx
'use client';
import React from 'react';
import { LetterCollision } from './LetterCollision';


export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <LetterCollision />
      {/* …your hero, images, etc. */}
    </div>
  );
}



