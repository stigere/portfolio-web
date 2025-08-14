'use client';

import { useState } from 'react';
import Script from 'next/script';

export default function Page() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', company: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Ready to optimize your business operations? Let's discuss how we can work together 
          to build scalable solutions for your needs.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Send a Message</h2>
            <p className="text-gray-600 mb-6">
              Have a project in mind? Let me know the details and I'll get back to you within 24 hours.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-600 focus:border-amber-600"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-600 focus:border-amber-600"
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-600 focus:border-amber-600"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-600 focus:border-amber-600"
                placeholder="Tell me about your project, challenges, or how I can help..."
              />
            </div>

            {submitStatus === 'success' && (
              <div className="p-4 bg-green-50 border border-green-200 rounded-md">
                <p className="text-green-800">Thank you! Your message has been sent successfully.</p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-md">
                <p className="text-red-800">Sorry, there was an error sending your message. Please try again.</p>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-md font-semibold hover:bg-amber-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>

        {/* Calendly Embed */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Schedule a Call</h2>
            <p className="text-gray-600 mb-6">
              Prefer to chat? Book a 15-minute consultation to discuss your project and see how we can work together.
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <div 
              className="calendly-inline-widget" 
              data-url="https://calendly.com/your-calendly-link/15min"
              style={{ minWidth: '320px', height: '700px' }}
            />
            <Script
              src="https://assets.calendly.com/assets/external/widget.js"
              async
            />
          </div>
        </div>
      </div>

      {/* Additional Info */}
      <div className="mt-16 text-center">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Other Ways to Connect</h3>
        <div className="flex justify-center space-x-6">
          <a
            href="mailto:hello@spencertigere.com"
            className="text-blue-600 hover:text-blue-500 font-medium"
          >
            hello@spencertigere.com
          </a>
          <a
            href="https://linkedin.com/in/spencertigere"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-500 font-medium"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/spencertigere"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-500 font-medium"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}