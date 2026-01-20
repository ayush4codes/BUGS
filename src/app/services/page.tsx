
import type { Metadata } from 'next';
import Services from '@/components/Services';
import ProjectEstimator from '@/components/ProjectEstimator';

export const metadata: Metadata = {
  title: 'Services | CACHEBUGS',
  description: 'Comprehensive technology solutions including AI/ML, Cloud Infrastructure, Web3, Mobile Development, and Full-Stack development services.',
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 mesh-bg" />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-white">Our</span>{' '}
            <span className="gradient-text">Services</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive technology solutions tailored for startups and enterprises
          </p>
        </div>
      </div>
      <Services />
      <ProjectEstimator />
    </div>
  );
}

