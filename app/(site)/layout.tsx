import '../globals.css';
import Navigation from '../components/Navigation';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://spencertigere.com'),
  title: {
    default: 'Spencer Tigere - Business Operations & Booking Systems',
    template: '%s | Spencer Tigere'
  },
  description: 'Building intelligent business operations and booking systems that scale. Explore demos of Setmore++, Ops Autopilot, Data Reliability, and more.',
  keywords: ['business operations', 'booking systems', 'automation', 'data reliability', 'AI', 'web development'],
  authors: [{ name: 'Spencer Tigere' }],
  creator: 'Spencer Tigere',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://spencertigere.com',
    title: 'Spencer Tigere - Business Operations & Booking Systems',
    description: 'Building intelligent business operations and booking systems that scale.',
    siteName: 'Spencer Tigere',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Spencer Tigere - Business Operations & Booking Systems',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Spencer Tigere - Business Operations & Booking Systems',
    description: 'Building intelligent business operations and booking systems that scale.',
    images: ['/og-image.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Plausible Analytics */}
        <script defer data-domain="spencertigere.com" src="https://plausible.io/js/script.js"></script>
      </head>
      <body>
        <div className="min-h-screen bg-white flex flex-col">
          <Navigation />
          <CTA />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
