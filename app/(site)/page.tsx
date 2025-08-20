'use client';

import Link from 'next/link';
import { LetterCollision } from '../components/LetterCollision';
import ScrollIndicator from '../components/ScrollIndicator';
import BalloonDemos from '../components/BalloonDemos';

export default function Page() {
    return (
    <div>
      {/* Animated Text Section */}
      <section className="h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-gray-900">
          <LetterCollision />
        </div>
      </section>

      {/* Scroll Indicator */}
      <ScrollIndicator />

      {/* Spacing */}
      <div className="h-screen"></div>

      {/* Main Content */}
      <div className="space-y-16">
        {/* About Section */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              As a software developer, I create websites and systems that showcase your brand and improve how your business operates.
              By understanding your processes first, I design solutions that save time, strengthen customer engagement, and streamline day-to-day work.
            </p>
            <div className="mt-8">
                          <Link
              href="/contact"
              className="inline-flex items-center rounded-md bg-gray-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-orange-600 transition-colors"
            >
              Contact Me
            </Link>
            </div>
          </div>
            <div className="flex justify-center lg:justify-end">
            <img 
              src="/IMG_5920.JPG" 
              alt="Spencer Tigere" 
              className="rounded-full shadow-lg max-w-full h-auto object-cover"
              style={{ maxHeight: '400px', width: '400px', height: '400px' }}
            />
          </div>
        </div>
      </section>
      {/* Hero Section */}
      <section className="mx-auto max-w-4xl px-6 py-16 text-center">
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl">
          Intelligent Business Operations
        </h1>
        <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
          Building scalable booking systems and operational tools that transform how businesses manage their workflows, data, and customer interactions.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/demos"
            className="inline-flex items-center rounded-md bg-gray-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-orange-600 transition-colors"
          >
            View Demos
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-md bg-white px-6 py-3 text-base font-semibold text-blue-600 shadow-sm ring-1 ring-inset ring-blue-600 hover:bg-orange-600 hover:text-white hover:ring-orange-600 transition-colors"
          >
            Contact Me
          </Link>
        </div>
      </section>

      {/* Featured Demos */}
      <section className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Featured Projects</h2>
          <p className="mt-4 text-lg text-gray-600">
            Explore the tools I've built to solve real business challenges.
          </p>
        </div>
        
        <div className="mb-12">
          <BalloonDemos />
        </div>

        <div className="text-center">
          <Link
            href="/demos"
            className="inline-flex items-center rounded-md bg-gray-900 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-orange-600 transition-colors"
          >
            View All Demos
          </Link>
        </div>
      </section>
        </div>
      </div>
    );
}