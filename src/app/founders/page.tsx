import type { Metadata } from 'next';
import { motion } from 'framer-motion';
import { Crown } from 'lucide-react';
import Founders from '@/components/Founders';

export const metadata: Metadata = {
  title: 'Founders | CACHEBUGS',
  description: 'Meet the founders of CACHEBUGS - Nikhil Yadav (Founder), Ayush Bajpai (Co-Founder), and Ayush Mishra (Co-Founder). Elite developers building the future.',
};

export default function FoundersPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Header */}
      <div className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 mesh-bg" />
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 mb-6">
              <Crown className="w-4 h-4 text-yellow-400" />
              <span className="text-sm text-gray-300">Founded by Developers</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-white">Meet the</span>{' '}
              <span className="gradient-text">Founders</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Three passionate developers who came together to build something amazing. 
              CACHEBUGS was born from a shared vision of delivering elite software solutions.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Founders Section */}
      <Founders />
    </div>
  );
}

