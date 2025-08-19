// components/LetterCollision.tsx
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { LetterDisplay } from './LetterDisplay';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);


const lines = [
  'passion ',
  'for ',
  'creating ',
  'systems ',
  'that ',
  'enable ',
  'business ',
  'growth. '
];
function getRandomRotation() {
    return Math.random() * 60 - 30;
  }
  function animateLettersOnScroll(ref: React.RefObject<HTMLDivElement>) {
    const nodes = ref.current?.querySelectorAll<HTMLElement>('.letter') || [];
    nodes.forEach(letter => {
      const speed = parseFloat(letter.dataset.speed || '1');
      gsap.to(letter, {
        y: (1 - speed) * ScrollTrigger.maxScroll(window),
        rotation: getRandomRotation(),
        ease: 'power2.out',
        duration: 0.8,
        scrollTrigger: {
          trigger: document.documentElement,
          start: 0,
          end: window.innerHeight,
          scrub: 0.5,
          invalidateOnRefresh: true
        }
      });
    });
  }
  export function LetterCollision() {
    const ref = useRef<HTMLDivElement>(null);
      useEffect(() => {
    if (!ref.current) return;
    animateLettersOnScroll(ref);
  }, []);
    return (
      <div ref={ref} className="ml-8 scroll-smooth">
        <div className="-mt-28 mb-36 flex h-screen flex-col justify-end lg:mb-24">
          <div className="flex flex-wrap">
            <LetterDisplay word={lines[0]} />
            <div className="w-4 sm:w-10" />
            <LetterDisplay word={lines[1]} />
          </div>
          <div className="flex flex-wrap">
            <LetterDisplay word={lines[2]} />
            <div className="w-4 sm:w-10" />
            <LetterDisplay word={lines[3]} />
          </div>
          <div className="flex flex-wrap">
            <LetterDisplay word={lines[4]} />
            <div className="w-4 sm:w-10" />
            <LetterDisplay word={lines[5]} />
          </div>
          <div className="flex flex-wrap">
            <LetterDisplay word={lines[6]} />
            <div className="w-4 sm:w-10" />
            <LetterDisplay word={lines[7]} />
          </div>
        </div>
      </div>
    );
  }