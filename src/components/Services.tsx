
'use client';

import { motion } from 'framer-motion';
import { 
  Brain, Cloud, Globe, Smartphone, Code, 
  Shield, Database, Zap, Cpu, Layers,
  Terminal, Lock, Search, TrendingUp
} from 'lucide-react';

const services = [
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    description: 'Custom LLM fine-tuning, RAG systems, predictive analytics, and intelligent automation solutions.',
    gradient: 'from-purple-500 to-pink-500',
    features: ['LLM Fine-tuning & RAG', 'Predictive Analytics', 'Computer Vision', 'NLP Solutions']
  },
  {
    icon: Cloud,
    title: 'Cloud Infrastructure',
    description: 'Scalable, resilient cloud architecture on AWS, GCP, and Azure with Kubernetes orchestration.',
    gradient: 'from-cyan-500 to-blue-500',
    features: ['AWS/GCP/Azure', 'Kubernetes & Docker', 'Terraform & IaC', 'CI/CD Pipelines']
  },
  {
    icon: Globe,
    title: 'Web3 & Blockchain',
    description: 'Smart contract development, dApp building, and decentralized infrastructure solutions.',
    gradient: 'from-orange-500 to-yellow-500',
    features: ['Smart Contracts', 'DeFi Integration', 'NFT Platforms', 'dApp Development']
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'Native iOS/Android and cross-platform mobile apps with exceptional UX/UI.',
    gradient: 'from-green-500 to-emerald-500',
    features: ['React Native', 'Flutter', 'iOS Swift', 'Android Kotlin']
  },
  {
    icon: Code,
    title: 'Full-Stack Development',
    description: 'End-to-end web application development using modern frameworks and best practices.',
    gradient: 'from-blue-500 to-indigo-500',
    features: ['Next.js & React', 'Node.js & Express', 'TypeScript', 'GraphQL APIs']
  },
  {
    icon: Shield,
    title: 'Security & Compliance',
    description: 'SOC2, HIPAA, and GDPR compliance consulting with robust security architecture.',
    gradient: 'from-red-500 to-pink-500',
    features: ['SOC2 Compliance', 'Penetration Testing', 'Security Audits', 'GDPR/CCPA']
  },
];

export default function Services() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 mesh-bg" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Our</span>{' '}
            <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive technology solutions tailored for startups and enterprises
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-hover"
            >
              <div className="bento-card h-full service-glow">
                {/* Icon */}
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${service.gradient} mb-6`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:gradient-text transition-all">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-gray-500">
                      <Zap className="w-4 h-4 text-cyan-400" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Arrow indicator */}
                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="p-2 bg-white/5 rounded-lg">
                    <Zap className="w-5 h-5 text-cyan-400" />
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
          <p className="text-gray-400 mb-4">Need a custom solution?</p>
          <button className="btn-glow cursor-hover">
            Discuss Your Project
          </button>
        </motion.div>
      </div>
    </section>
  );
}

