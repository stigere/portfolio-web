'use client';

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface Demo {
  id: string;
  title: string;
  description: string;
  href: string;
  color: string;
}

const demos: Demo[] = [
  {
    id: 'setmore-plus',
    title: 'Setmore++',
    description: 'Smart availability, deposits, reminders, and admin flags for booking systems.',
    href: '/demos/setmore-plus',
    color: '#3B82F6'
  },
  {
    id: 'ops-autopilot',
    title: 'Ops Autopilot',
    description: 'Automated operational workflows that reduce manual tasks and improve efficiency.',
    href: '/demos/ops-autopilot',
    color: '#10B981'
  },
  {
    id: 'data-reliability',
    title: 'Data Reliability',
    description: 'Tools to ensure data quality, validation, and consistency across systems.',
    href: '/demos/data-reliability',
    color: '#F59E0B'
  }
];

export default function BalloonDemos() {
  const [hoveredDemo, setHoveredDemo] = useState<string | null>(null);

  return (
    <div className="relative w-full h-96 flex items-center justify-center">
      {/* 3D-looking spheres with always-visible text */}
      <div className="flex items-center justify-center space-x-8">
        {demos.map((demo, index) => (
          <div
            key={demo.id}
            className={`transition-all duration-300 ease-out cursor-pointer ${
              hoveredDemo === demo.id ? 'scale-110' : 'scale-100'
            }`}
            onMouseEnter={() => setHoveredDemo(demo.id)}
            onMouseLeave={() => setHoveredDemo(null)}
          >
            <a
              href={demo.href}
              className="w-64 h-64 bg-gradient-to-br from-white to-gray-100 backdrop-blur-sm rounded-full shadow-xl border-2 border-gray-300 flex flex-col items-center justify-center p-6 text-center hover:shadow-2xl transition-all duration-300 cursor-pointer block relative overflow-hidden"
              style={{
                background: hoveredDemo === demo.id 
                  ? `radial-gradient(circle at 30% 30%, rgba(251,146,60,0.9) 0%, rgba(249,115,22,0.8) 50%, rgba(245,101,41,0.7) 100%)`
                  : `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.9) 0%, rgba(240,240,240,0.8) 50%, rgba(220,220,220,0.7) 100%)`,
                boxShadow: '0 20px 40px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.8)'
              }}
            >
              {/* 3D highlight effect */}
              <div className="absolute top-2 left-2 w-8 h-8 bg-white/60 rounded-full blur-sm"></div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-tight relative z-10">{demo.title}</h3>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed px-2 relative z-10">{demo.description}</p>
              <span className="text-blue-600 hover:text-blue-500 font-medium text-sm inline-flex items-center relative z-10">
                View Demo →
              </span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
