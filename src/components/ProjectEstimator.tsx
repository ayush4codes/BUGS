
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, Zap, Clock, DollarSign, CheckCircle } from 'lucide-react';

const projectTypes = [
  { id: 'web', label: 'Web Application', icon: '🌐', baseCost: 15000 },
  { id: 'mobile', label: 'Mobile App', icon: '📱', baseCost: 20000 },
  { id: 'ai', label: 'AI/ML Solution', icon: '🤖', baseCost: 25000 },
  { id: 'blockchain', label: 'Web3/Blockchain', icon: '⛓️', baseCost: 30000 },
  { id: 'api', label: 'API Development', icon: '🔌', baseCost: 10000 },
  { id: 'devops', label: 'DevOps/Cloud', icon: '☁️', baseCost: 12000 },
];

const complexityLevels = [
  { id: 'simple', label: 'Simple', multiplier: 1, description: 'Basic features, minimal complexity' },
  { id: 'moderate', label: 'Moderate', multiplier: 2, description: 'Standard features with some integrations' },
  { id: 'complex', label: 'Complex', multiplier: 3.5, description: 'Advanced features, multiple integrations' },
  { id: 'enterprise', label: 'Enterprise', multiplier: 5, description: 'Full enterprise-grade solution' },
];

const timelines = [
  { id: 'urgent', label: 'Urgent', multiplier: 1.5, description: '2-4 weeks', icon: '🚀' },
  { id: 'standard', label: 'Standard', multiplier: 1, description: '1-3 months', icon: '📅' },
  { id: 'flexible', label: 'Flexible', multiplier: 0.8, description: '3-6 months', icon: '🗓️' },
];

export default function ProjectEstimator() {
  const [projectType, setProjectType] = useState('');
  const [complexity, setComplexity] = useState('');
  const [timeline, setTimeline] = useState('');
  const [features, setFeatures] = useState<string[]>([]);

  const allFeatures = [
    'User Authentication',
    'Payment Integration',
    'Admin Dashboard',
    'Real-time Updates',
    'Analytics Dashboard',
    'Multi-language Support',
    'Push Notifications',
    'Third-party Integrations',
    'Custom Database Design',
    'Performance Optimization',
  ];

  const baseCost = projectType 
    ? projectTypes.find(t => t.id === projectType)?.baseCost || 0 
    : 0;
  
  const complexityMultiplier = complexity 
    ? complexityLevels.find(c => c.id === complexity)?.multiplier || 1 
    : 1;
  
  const timelineMultiplier = timeline 
    ? timelines.find(t => t.id === timeline)?.multiplier || 1 
    : 1;
  
  const featuresCost = features.length * 2000;
  
  const totalCost = Math.round((baseCost * complexityMultiplier + featuresCost) * timelineMultiplier);
  
  const estimatedWeeks = () => {
    if (!projectType || !complexity) return 0;
    const baseWeeks = projectType === 'web' ? 8 : projectType === 'mobile' ? 12 : projectType === 'ai' ? 10 : 6;
    const complexityMultiplier = complexity === 'simple' ? 0.7 : complexity === 'moderate' ? 1 : complexity === 'complex' ? 1.5 : 2;
    return Math.round(baseWeeks * complexityMultiplier);
  };

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 mesh-bg" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-radial from-cyan-500/5 to-transparent" />

      <div className="relative max-w-4xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 mb-6">
            <Calculator className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-gray-300">Free Estimation Tool</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Project</span>{' '}
            <span className="gradient-text">Estimator</span>
          </h2>
          <p className="text-xl text-gray-400">
            Get a rough estimate for your project based on typical requirements
          </p>
        </motion.div>

        {/* Calculator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bento-card"
        >
          {/* Project Type */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-white mb-4">What type of project do you need?</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {projectTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setProjectType(type.id)}
                  className={`p-4 rounded-xl border transition-all cursor-hover ${
                    projectType === type.id
                      ? 'bg-white/10 border-cyan-500/50'
                      : 'bg-white/5 border-white/10 hover:border-white/20'
                  }`}
                >
                  <span className="text-2xl mb-2 block">{type.icon}</span>
                  <span className="text-sm text-white">{type.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Complexity */}
          {projectType && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="mb-8"
            >
              <h3 className="text-lg font-semibold text-white mb-4">Project Complexity</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {complexityLevels.map((level) => (
                  <button
                    key={level.id}
                    onClick={() => setComplexity(level.id)}
                    className={`p-4 rounded-xl border transition-all cursor-hover text-left ${
                      complexity === level.id
                        ? 'bg-white/10 border-purple-500/50'
                        : 'bg-white/5 border-white/10 hover:border-white/20'
                    }`}
                  >
                    <span className="text-sm font-medium text-white block mb-1">{level.label}</span>
                    <span className="text-xs text-gray-500">{level.description}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Timeline */}
          {complexity && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="mb-8"
            >
              <h3 className="text-lg font-semibold text-white mb-4">Preferred Timeline</h3>
              <div className="grid sm:grid-cols-3 gap-3">
                {timelines.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setTimeline(t.id)}
                    className={`p-4 rounded-xl border transition-all cursor-hover text-left ${
                      timeline === t.id
                        ? 'bg-white/10 border-green-500/50'
                        : 'bg-white/5 border-white/10 hover:border-white/20'
                    }`}
                  >
                    <span className="text-xl mb-2 block">{t.icon}</span>
                    <span className="text-sm font-medium text-white block">{t.label}</span>
                    <span className="text-xs text-gray-500">{t.description}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Additional Features */}
          {timeline && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="mb-8"
            >
              <h3 className="text-lg font-semibold text-white mb-4">Additional Features</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {allFeatures.map((feature) => (
                  <button
                    key={feature}
                    onClick={() => {
                      if (features.includes(feature)) {
                        setFeatures(features.filter(f => f !== feature));
                      } else {
                        setFeatures([...features, feature]);
                      }
                    }}
                    className={`p-3 rounded-xl border transition-all cursor-hover text-left flex items-center gap-3 ${
                      features.includes(feature)
                        ? 'bg-white/10 border-cyan-500/50'
                        : 'bg-white/5 border-white/10 hover:border-white/20'
                    }`}
                  >
                    <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                      features.includes(feature) ? 'bg-cyan-500 border-cyan-500' : 'border-gray-500'
                    }`}>
                      {features.includes(feature) && (
                        <CheckCircle className="w-3 h-3 text-white" />
                      )}
                    </div>
                    <span className="text-sm text-white">{feature}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Estimate Result */}
          {projectType && complexity && timeline && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-8 p-6 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl border border-white/10"
            >
              <div className="text-center">
                <p className="text-gray-400 mb-2">Estimated Project Cost</p>
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                  ${totalCost.toLocaleString()}
                </div>
                <p className="text-sm text-gray-500 mb-4">Estimated timeline: {estimatedWeeks()} weeks</p>
                <button className="btn-glow cursor-hover">
                  Get Detailed Quote
                </button>
                <p className="text-xs text-gray-500 mt-4">
                  *This is a rough estimate. Final cost may vary based on detailed requirements.
                </p>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}

