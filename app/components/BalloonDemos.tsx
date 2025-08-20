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
      {/* Static demo circles */}
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
              className="w-64 h-64 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border-2 border-gray-300 flex flex-col items-center justify-center p-6 text-center hover:bg-orange-400 hover:shadow-xl transition-colors duration-100 cursor-pointer block"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-tight">{demo.title}</h3>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed px-2">{demo.description}</p>
              <span className="text-blue-600 hover:text-blue-500 font-medium text-sm inline-flex items-center">
                View Demo →
              </span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
