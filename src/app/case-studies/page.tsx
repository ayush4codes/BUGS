
import type { Metadata } from 'next';
import CaseStudies from '@/components/CaseStudies';

export const metadata: Metadata = {
  title: 'Case Studies | CACHEBUGS',
  description: 'Real results from real projects. See how we help startups succeed with AI, Web3, Cloud, and Full-Stack solutions.',
};

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950" />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-white">Case</span>{' '}
            <span className="gradient-text">Studies</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Real results from real projects. See how we help startups succeed.
          </p>
        </div>
      </div>
      <CaseStudies />
    </div>
  );
}

