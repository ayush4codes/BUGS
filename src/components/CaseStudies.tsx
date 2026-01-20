
'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight, Zap, TrendingUp, Clock } from 'lucide-react';

const caseStudies = [
  {
    title: 'AI-Powered Analytics Platform',
    client: 'Tech Startup',
    category: 'AI & Machine Learning',
    description: 'Built a real-time analytics platform with custom ML models for predictive insights.',
    problem: 'Client needed to process millions of data points daily and provide actionable insights.',
    solution: 'Implemented a scalable architecture using Python, PyTorch, and custom LLM fine-tuning.',
    impact: 'Reduced analysis time by 85% and improved prediction accuracy by 40%.',
    tech: ['Python', 'PyTorch', 'React', 'AWS', 'PostgreSQL'],
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    title: 'DeFi Trading Platform',
    client: 'FinTech Company',
    category: 'Web3 & Blockchain',
    description: 'Developed a decentralized exchange with smart contracts and real-time trading.',
    problem: 'Client required a secure, low-latency DEX with multi-chain support.',
    solution: 'Built smart contracts in Solidity and a high-performance trading frontend.',
    impact: 'Processed $50M+ in trading volume within the first month with zero security incidents.',
    tech: ['Solidity', 'Next.js', 'Web3.js', 'Ethereum', 'Redis'],
    gradient: 'from-orange-500 to-yellow-500',
  },
  {
    title: 'Healthcare Mobile App',
    client: 'Medical Startup',
    category: 'Mobile Development',
    description: 'Created a HIPAA-compliant mobile app for patient management and telemedicine.',
    problem: 'Needed a secure, HIPAA-compliant platform for remote patient consultations.',
    solution: 'Built a cross-platform mobile app with end-to-end encryption and secure data storage.',
    impact: 'Enabled 10,000+ consultations in the first quarter with 98% patient satisfaction.',
    tech: ['React Native', 'Node.js', 'PostgreSQL', 'AWS', 'Twilio'],
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Cloud Migration & DevOps',
    client: 'Enterprise Client',
    category: 'Cloud Infrastructure',
    description: 'Migrated legacy monolith to microservices on Kubernetes with full CI/CD.',
    problem: 'Client struggled with slow deployments and frequent downtime.',
    solution: 'Refactored into microservices, implemented Kubernetes orchestration and automated pipelines.',
    impact: 'Reduced deployment time from hours to minutes and improved uptime to 99.9%.',
    tech: ['Kubernetes', 'Docker', 'Terraform', 'AWS', 'Jenkins'],
    gradient: 'from-cyan-500 to-blue-500',
  },
];

export default function CaseStudies() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950" />
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-purple-500/5 rounded-full blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Case</span>{' '}
            <span className="gradient-text">Studies</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Real results from real projects. See how we help startups succeed.
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bento-card cursor-hover group"
            >
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Left - Main Info */}
                <div className="lg:col-span-2">
                  {/* Category Badge */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${study.gradient} text-white`}>
                      {study.category}
                    </span>
                    <span className="text-gray-500 text-sm">{study.client}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:gradient-text transition-all">
                    {study.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {study.description}
                  </p>

                  {/* Problem/Solution/Impact */}
                  <div className="grid sm:grid-cols-3 gap-4 mb-6">
                    <div className="p-4 bg-white/5 rounded-xl">
                      <div className="flex items-center gap-2 mb-2">
                        <Zap className="w-4 h-4 text-yellow-400" />
                        <span className="text-sm font-medium text-white">Problem</span>
                      </div>
                      <p className="text-sm text-gray-400">{study.problem}</p>
                    </div>
                    <div className="p-4 bg-white/5 rounded-xl">
                      <div className="flex items-center gap-2 mb-2">
                        <ArrowRight className="w-4 h-4 text-cyan-400" />
                        <span className="text-sm font-medium text-white">Solution</span>
                      </div>
                      <p className="text-sm text-gray-400">{study.solution}</p>
                    </div>
                    <div className="p-4 bg-white/5 rounded-xl">
                      <div className="flex items-center gap-2 mb-2">
                        <TrendingUp className="w-4 h-4 text-green-400" />
                        <span className="text-sm font-medium text-white">Impact</span>
                      </div>
                      <p className="text-sm text-gray-400">{study.impact}</p>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {study.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white/5 rounded-full text-sm text-gray-400 border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right - Visual */}
                <div className="lg:col-span-1">
                  <div className={`h-full min-h-[200px] rounded-xl bg-gradient-to-br ${study.gradient} opacity-10 group-hover:opacity-20 transition-opacity flex items-center justify-center`}>
                    <div className="text-center">
                      <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${study.gradient} mb-4`}>
                        <Zap className="w-8 h-8 text-white" />
                      </div>
                      <p className="text-white font-medium">{study.category}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button className="btn-glow cursor-hover">
            View All Case Studies
          </button>
        </motion.div>
      </div>
    </section>
  );
}

