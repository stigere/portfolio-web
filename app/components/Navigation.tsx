'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              {/* <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">ST</span>
              </div> */}
              <div 
                className="relative overflow-hidden w-48"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div className="flex transition-transform duration-1000 ease-in-out" style={{ transform: `translateX(${isHovered ? '-100%' : '0%'})` }}>
                  <span className={`font-semibold whitespace-nowrap flex-shrink-0 w-48 transition-colors duration-1000 ${isHovered ? 'text-orange-500' : 'text-gray-900'}`}>Spencer Tigere</span>
                  <span className={`font-semibold whitespace-nowrap flex-shrink-0 w-48 transition-colors duration-1000 ${isHovered ? 'text-orange-500' : 'text-gray-900'}`}>(software developer)</span>
                </div>
              </div>
            </Link>
          </div>
          
          <div className="flex items-center space-x-8">
            <Link href="/demos" className="text-gray-600 hover:text-orange-500 transition-colors">
              Demos
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-orange-500 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
