'use client';

import { useEffect, useState, useRef } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const velocityRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number>();

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const animate = () => {
      // Spring physics parameters
      const springStrength = 0.05; // How tight the "string" is
      const damping = 0.8; // How much the movement is dampened
      
      // Calculate the force (difference between target and current position)
      const forceX = (position.x - 12) - cursorPosition.x;
      const forceY = (position.y - 12) - cursorPosition.y;
      
      // Apply spring force to velocity
      velocityRef.current.x += forceX * springStrength;
      velocityRef.current.y += forceY * springStrength;
      
      // Apply damping
      velocityRef.current.x *= damping;
      velocityRef.current.y *= damping;
      
      // Update position based on velocity
      setCursorPosition(prev => ({
        x: prev.x + velocityRef.current.x,
        y: prev.y + velocityRef.current.y
      }));
      
      animationRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', updateCursorPosition);
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [position, cursorPosition]);

  return (
    <div
      className="fixed pointer-events-none z-[9999]"
      style={{
        left: 0,
        top: 0,
        transform: `translate3d(${cursorPosition.x}px, ${cursorPosition.y}px, 0)`,
      }}
    >
      <div className="w-6 h-6 bg-orange-500 rounded-full opacity-100 shadow-lg"></div>
    </div>
  );
}
