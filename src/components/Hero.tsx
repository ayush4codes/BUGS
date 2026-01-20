
'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  ArrowRight, Code, Zap, Brain, Cloud, Lock, 
  ChevronRight, Terminal, Database, Shield, Smartphone
} from 'lucide-react';
import Link from 'next/link';

const floatingIcons = [
  { icon: Code, x: 10, y: 20, delay: 0 },
  { icon: Brain, x: 80, y: 15, delay: 0.5 },
  { icon: Cloud, x: 15, y: 70, delay: 1 },
  { icon: Lock, x: 75, y: 75, delay: 1.5 },
  { icon: Terminal, x: 85, y: 45, delay: 0.3 },
  { icon: Database, x: 25, y: 35, delay: 0.8 },
];

const services = [
  { icon: Brain, label: 'AI & ML', color: 'from-purple-500 to-pink-500' },
  { icon: Cloud, label: 'Cloud DevOps', color: 'from-cyan-500 to-blue-500' },
  { icon: Shield, label: 'Web3 & Blockchain', color: 'from-orange-500 to-yellow-500' },
  { icon: Smartphone, label: 'Mobile Apps', color: 'from-green-500 to-emerald-500' },
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 mesh-bg" />
      
      {/* Gradient Orbs */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 overflow-hidden pointer-events-none"
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px] animate-pulse delay-1000" />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-pink-500/10 rounded-full blur-[100px] animate-pulse delay-500" />
      </motion.div>

      {/* Floating Icons */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          className="absolute pointer-events-none"
          style={{
            left: `${item.x}%`,
            top: `${item.y}%`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            y: [0, -20, 0],
          }}
          transition={{
            duration: 4,
            delay: item.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <div className="p-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
            <item.icon className="w-5 h-5 text-cyan-400" />
          </div>
        </motion.div>
      ))}

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 mb-8 cursor-hover group"
        >
          <Zap className="w-4 h-4 text-yellow-400" />
          <span className="text-sm text-gray-300">Elite Developer Collective</span>
          <ChevronRight className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors" />
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
        >
          <span className="text-white">We Build </span>
          <span className="gradient-text">Digital</span>
          <br />
          <span className="text-white">Masterpieces</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          An elite collective of engineers, developers, and innovators building 
          next-generation solutions for ambitious startups and enterprises.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <Link
            href="/contact"
            className="btn-glow flex items-center gap-2 cursor-hover group"
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/case-studies"
            className="btn-secondary flex items-center gap-2 cursor-hover group"
          >
            <span>View Our Work</span>
            <ChevronRight className="w-5 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
        >
          {[
            { value: '500+', label: 'Projects Delivered' },
            { value: '99.9%', label: 'Uptime Guaranteed' },
            { value: '150+', label: 'Happy Clients' },
            { value: '24/7', label: 'Support Available' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              className="bento-card text-center cursor-hover"
            >
              <div className="text-2xl md:text-3xl font-bold gradient-text mb-1">{stat.value}</div>
              <div className="text-xs text-gray-500">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Services Preview */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-20"
        >
          <p className="text-sm text-gray-500 mb-8">TECHNOLOGY EXPERTISE</p>
          <div className="flex flex-wrap justify-center gap-4">
            {services.map((service, index) => (
              <motion.div
                key={service.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                className="group cursor-hover"
              >
                <div className="flex items-center gap-3 px-6 py-3 bg-white/5 rounded-full border border-white/10 hover:border-white/20 transition-all group-hover:bg-white/10">
                  <div className={`p-2 rounded-lg bg-gradient-to-br ${service.color}`}>
                    <service.icon className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                    {service.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2"
        >
          <div className="w-1.5 h-1.5 bg-white/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}

