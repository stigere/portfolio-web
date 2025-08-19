'use client';

import Link from 'next/link';
import { LetterCollision } from '../components/LetterCollision';

export default function Page() {
    return (
    <div>
      {/* Animated Text Section */}
      <section className="h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-gray-900">
          <LetterCollision />
        </div>
      </section>

      {/* Main Content */}
      <div className="space-y-16">
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
            className="inline-flex items-center rounded-md bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-amber-600 transition-colors"
          >
            View Demos
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-md bg-white px-6 py-3 text-base font-semibold text-blue-600 shadow-sm ring-1 ring-inset ring-blue-600 hover:bg-blue-50 transition-colors"
          >
            Book Consultation
          </Link>
        </div>
      </section>

      {/* Featured Demos */}
      <section className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Featured Solutions</h2>
          <p className="mt-4 text-lg text-gray-600">
            Explore the tools and systems I've built to solve real business challenges
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Setmore++ */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
            <div className="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center mb-4">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Setmore++</h3>
            <p className="text-gray-600 mb-4">
              Smart availability, deposits, reminders, and admin flags for booking systems.
            </p>
            <Link
              href="/demos/setmore-plus"
              className="text-blue-600 hover:text-blue-500 font-medium text-sm"
            >
              View Demo →
            </Link>
          </div>

          {/* Ops Autopilot */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
            <div className="h-8 w-8 rounded-lg bg-green-600 flex items-center justify-center mb-4">
              <span className="text-white font-bold text-sm">A</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Ops Autopilot</h3>
            <p className="text-gray-600 mb-4">
              Automated operational workflows that reduce manual tasks and improve efficiency.
            </p>
            <Link
              href="/demos/ops-autopilot"
              className="text-blue-600 hover:text-blue-500 font-medium text-sm"
            >
              View Demo →
            </Link>
          </div>

          {/* Data Reliability */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
            <div className="h-8 w-8 rounded-lg bg-purple-600 flex items-center justify-center mb-4">
              <span className="text-white font-bold text-sm">D</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Data Reliability</h3>
            <p className="text-gray-600 mb-4">
              Tools to ensure data quality, validation, and consistency across systems.
            </p>
            <Link
              href="/demos/data-reliability"
              className="text-blue-600 hover:text-blue-500 font-medium text-sm"
            >
              View Demo →
            </Link>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            href="/demos"
            className="inline-flex items-center rounded-md bg-gray-900 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-gray-800 transition-colors"
          >
            View All Demos
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About Spencer Tigere</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
             I’m a dynamic software developer who builds simple, reliable systems that streamline bookings and day-to-day operations—so you save time, serve customers better, and increase revenue.
            </p>
            <div className="mt-8">
                          <Link
              href="/contact"
              className="inline-flex items-center rounded-md bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-amber-600 transition-colors"
            >
              Let's Work Together
            </Link>
            </div>
          </div>
          <div className="flex justify-center lg:justify-start">
            <img 
              src="/op-image.jpeg" 
              alt="Spencer Tigere" 
              className="rounded-lg shadow-lg max-w-full h-auto"
              style={{ maxHeight: '300px' }}
            />
          </div>
        </div>
      </section>
        </div>
      </div>
    );
}