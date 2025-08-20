import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Demo Hub',
  description: 'Explore interactive demonstrations of business operations and booking systems. View demos of Setmore++, Ops Autopilot, Data Reliability, Private AI, Revenue Radar, and Perf Kit.',
};

const demos = [
  {
    id: 'setmore-plus',
    title: 'Setmore++',
    description: 'Smart availability, deposits, reminders, admin flags',
    color: 'blue',
    icon: 'S',
    href: '/demos/setmore-plus'
  },
  {
    id: 'ops-autopilot',
    title: 'Ops Autopilot',
    description: 'Automated operational workflows and task management',
    color: 'green',
    icon: 'A',
    href: '/demos/ops-autopilot'
  },
  {
    id: 'data-reliability',
    title: 'Data Reliability',
    description: 'Data quality, validation, and consistency tools',
    color: 'purple',
    icon: 'D',
    href: '/demos/data-reliability'
  },
  {
    id: 'private-ai',
    title: 'Private AI',
    description: 'AI/ML solutions with privacy and security focus',
    color: 'indigo',
    icon: 'P',
    href: '/demos/private-ai'
  },
  {
    id: 'revenue-radar',
    title: 'Revenue Radar',
    description: 'Revenue tracking, analytics, and insights',
    color: 'emerald',
    icon: 'R',
    href: '/demos/revenue-radar'
  },
  {
    id: 'perf-kit',
    title: 'Perf Kit',
    description: 'Performance optimization and monitoring tools',
    color: 'orange',
    icon: 'P',
    href: '/demos/perf-kit'
  }
];

const colorClasses = {
  blue: 'bg-blue-600',
  green: 'bg-green-600',
  purple: 'bg-purple-600',
  indigo: 'bg-indigo-600',
  emerald: 'bg-emerald-600',
  orange: 'bg-orange-600'
};

export default function Page() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Demo Hub</h1>
      </div>

      {/* Demo Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {demos.map((demo) => (
          <div key={demo.id} className="bg-white rounded-lg border border-gray-200 p-8 hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
            {/* Icon */}
            <div className={`h-12 w-12 rounded-lg ${colorClasses[demo.color as keyof typeof colorClasses]} flex items-center justify-center mb-6`}>
              <span className="text-white font-bold text-lg">{demo.icon}</span>
            </div>
            
            {/* Content */}
            <h3 className="text-xl font-semibold text-gray-900 mb-3">{demo.title}</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">{demo.description}</p>
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href={demo.href}
                className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-amber-600 transition-colors"
              >
                View Demo
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-semibold text-blue-600 shadow-sm ring-1 ring-inset ring-blue-600 hover:bg-blue-50 transition-colors"
              >
                Book 15 min
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="text-center mt-16 p-8 bg-gray-50 rounded-lg">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Build Something Together?</h2>
        <p className="text-gray-600 mb-6">
          Let's discuss how these solutions can be adapted for your business needs.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center rounded-md bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-amber-600 transition-colors"
        >
          Schedule a Consultation
        </Link>
      </div>
    </div>
  );
}