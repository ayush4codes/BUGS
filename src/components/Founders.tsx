'use client';

import { motion } from 'framer-motion';
import { Mail, ArrowRight, Code, Users, Target, Zap } from 'lucide-react';
import Link from 'next/link';

const founders = [
  {
    name: 'Nikhil Yadav',
    role: 'Founder & CEO',
    initials: 'NY',
    gradient: 'from-cyan-500 to-blue-600',
    bio: 'Visionary leader driving innovation and strategic growth at CACHEBUGS. Passionate about transforming ambitious ideas into production-ready solutions.',
  },
  {
    name: 'Ayush Bajpai',
    role: 'Co-Founder & CTO',
    initials: 'AB',
    gradient: 'from-purple-500 to-pink-600',
    bio: 'Technical mastermind overseeing architecture and engineering excellence. Expert in scalable systems and cutting-edge technologies.',
  },
  {
    name: 'Ayush Mishra',
    role: 'Co-Founder & Lead Engineer',
    initials: 'AM',
    gradient: 'from-orange-500 to-red-600',
    bio: 'Lead engineer dedicated to building robust and performant applications. Specialized in full-stack development and code quality.',
  },
];

const values = [
  {
    icon: Code,
    title: 'Technical Excellence',
    description: 'We deliver production-ready code that scales. Our team consists of senior engineers who understand the full software lifecycle.',
  },
  {
    icon: Users,
    title: 'Client Partnership',
    description: 'We dont just build software, we become your technology partner. Transparent communication and aligned incentives are our foundation.',
  },
  {
    icon: Target,
    title: 'Results Driven',
    description: 'We measure success by your success. Every line of code we write is aimed at achieving your business objectives.',
  },
];

export default function Founders() {
  return (
    <section className="relative bg-dark-950 py-24 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-cyan-500/5 to-transparent rounded-full" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-purple-500/3 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-400 mb-6">
            <Users className="w-4 h-4 text-cyan-400" />
            Meet Our Team
          </span>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Founded by Visionaries
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            CACHEBUGS was founded by a team of passionate engineers who believe in the power of technology to transform businesses. Our founders bring decades of combined experience in building scalable solutions.
          </p>
        </motion.div>

        {/* Founders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {founders.map((founder, index) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-cyan-500/30 transition-all cursor-hover group"
            >
              {/* Avatar */}
              <div className="flex justify-center mb-6">
                <div className={`relative w-24 h-24 rounded-2xl bg-gradient-to-br ${founder.gradient} flex items-center justify-center text-white font-bold text-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                  {founder.initials}
                  <div className={`absolute -inset-1 bg-gradient-to-br ${founder.gradient} rounded-2xl blur-lg opacity-30 group-hover:opacity-60 transition-opacity`} />
                </div>
              </div>

              {/* Name & Role */}
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold text-white mb-1">{founder.name}</h3>
                <p className="text-cyan-400 font-medium">{founder.role}</p>
              </div>

              {/* Bio */}
              <p className="text-gray-400 text-sm text-center leading-relaxed">
                {founder.bio}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12"
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold gradient-text mb-2">Our Values</h3>
            <p className="text-gray-400">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-14 h-14 mx-auto mb-4 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl flex items-center justify-center">
                  <value.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <h4 className="text-white font-semibold mb-2">{value.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 mb-6">Ready to work with our founding team?</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl font-semibold text-white hover:shadow-lg hover:shadow-cyan-500/25 transition-all cursor-hover group"
          >
            <span>Get in Touch</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

