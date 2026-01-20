import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import CaseStudies from '@/components/CaseStudies';
import ProjectEstimator from '@/components/ProjectEstimator';
import Founders from '@/components/Founders';

export const metadata: Metadata = {
  title: 'CACHEBUGS | Elite Tech Community',
  description: 'A elite collective of developers, engineers, and innovators building the future of technology.',
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <CaseStudies />
      <Founders />
      <ProjectEstimator />
    </div>
  );
}

