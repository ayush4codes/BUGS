
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, ArrowRight, User, Mail, MessageSquare, Briefcase, Clock } from 'lucide-react';

const steps = [
  { id: 1, title: 'Project Details', icon: Briefcase },
  { id: 2, title: 'Your Contact', icon: User },
  { id: 3, title: 'Message', icon: MessageSquare },
];

const projectTypes = [
  'Web Development',
  'Mobile App',
  'AI/ML Solution',
  'Web3/Blockchain',
  'Cloud/DevOps',
  'API Development',
  'Other',
];

const budgets = [
  'Under $10K',
  '$10K - $25K',
  '$25K - $50K',
  '$50K - $100K',
  '$100K+',
];

const timelines = [
  'ASAP',
  '1-3 months',
  '3-6 months',
  '6+ months',
];

export default function ContactForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    projectType: '',
    budget: '',
    timeline: '',
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsSubmitted(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.projectType && formData.budget && formData.timeline;
      case 2:
        return formData.name && formData.email;
      case 3:
        return formData.message;
      default:
        return false;
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-16"
      >
        <div className="inline-flex p-4 rounded-full bg-green-500/10 border border-green-500/30 mb-6">
          <CheckCircle className="w-12 h-12 text-green-400" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-4">Message Sent!</h3>
        <p className="text-gray-400 mb-8">
          Thank you for reaching out. We will get back to you within 24 hours.
        </p>
        <button
          onClick={() => {
            setIsSubmitted(false);
            setCurrentStep(1);
            setFormData({
              projectType: '',
              budget: '',
              timeline: '',
              name: '',
              email: '',
              company: '',
              message: '',
            });
          }}
          className="btn-secondary cursor-hover"
        >
          Send Another Message
        </button>
      </motion.div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress Steps */}
      <div className="flex justify-between mb-12 relative">
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white/10 -z-10" />
        {steps.map((step) => (
          <motion.div
            key={step.id}
            className="flex flex-col items-center gap-2"
          >
            <div
              className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                currentStep >= step.id
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                  : 'bg-white/10 text-gray-500'
              }`}
            >
              <step.icon className="w-5 h-5" />
            </div>
            <span className={`text-sm ${
              currentStep >= step.id ? 'text-white' : 'text-gray-500'
            }`}>
              {step.title}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Form Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="bento-card"
        >
          {/* Step 1: Project Details */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white mb-6">Tell us about your project</h3>
              
              <div>
                <label className="block text-sm text-gray-400 mb-3">Project Type</label>
                <div className="grid grid-cols-2 gap-3">
                  {projectTypes.map((type) => (
                    <button
                      key={type}
                      onClick={() => setFormData({ ...formData, projectType: type })}
                      className={`p-3 rounded-lg border text-sm transition-all cursor-hover ${
                        formData.projectType === type
                          ? 'bg-white/10 border-cyan-500/50 text-white'
                          : 'bg-white/5 border-white/10 text-gray-400 hover:border-white/20'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-3">Budget Range</label>
                <div className="grid grid-cols-3 gap-3">
                  {budgets.map((budget) => (
                    <button
                      key={budget}
                      onClick={() => setFormData({ ...formData, budget })}
                      className={`p-3 rounded-lg border text-sm transition-all cursor-hover ${
                        formData.budget === budget
                          ? 'bg-white/10 border-cyan-500/50 text-white'
                          : 'bg-white/5 border-white/10 text-gray-400 hover:border-white/20'
                      }`}
                    >
                      {budget}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-3">Timeline</label>
                <div className="grid grid-cols-4 gap-3">
                  {timelines.map((timeline) => (
                    <button
                      key={timeline}
                      onClick={() => setFormData({ ...formData, timeline })}
                      className={`p-3 rounded-lg border text-sm transition-all cursor-hover ${
                        formData.timeline === timeline
                          ? 'bg-white/10 border-cyan-500/50 text-white'
                          : 'bg-white/5 border-white/10 text-gray-400 hover:border-white/20'
                      }`}
                    >
                      {timeline}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Contact Info */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white mb-6">How can we reach you?</h3>
              
              <div>
                <label className="block text-sm text-gray-400 mb-2">Your Name *</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">Email Address *</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@company.com"
                    className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">Company (Optional)</label>
                <div className="relative">
                  <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Company Name"
                    className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 transition-colors"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Message */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white mb-6">Tell us more about your project</h3>
              
              <div>
                <label className="block text-sm text-gray-400 mb-2">Your Message *</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your project requirements, goals, and any specific features you need..."
                  rows={6}
                  className="w-full p-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 transition-colors resize-none"
                />
              </div>

              <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                <h4 className="text-sm font-medium text-white mb-2">Project Summary</h4>
                <div className="space-y-1 text-sm text-gray-400">
                  <p><span className="text-gray-500">Type:</span> {formData.projectType}</p>
                  <p><span className="text-gray-500">Budget:</span> {formData.budget}</p>
                  <p><span className="text-gray-500">Timeline:</span> {formData.timeline}</p>
                  <p><span className="text-gray-500">Contact:</span> {formData.name} ({formData.email})</p>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8 pt-6 border-t border-white/10">
            <button
              onClick={handleBack}
              disabled={currentStep === 1}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                currentStep === 1
                  ? 'text-gray-600 cursor-not-allowed'
                  : 'text-white hover:bg-white/10 cursor-hover'
              }`}
            >
              Back
            </button>
            <button
              onClick={handleNext}
              disabled={!isStepValid()}
              className={`px-8 py-3 rounded-lg font-medium transition-all flex items-center gap-2 ${
                isStepValid()
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:shadow-lg hover:shadow-cyan-500/25 cursor-hover'
                  : 'bg-white/10 text-gray-500 cursor-not-allowed'
              }`}
            >
              {currentStep === 3 ? (
                <>
                  <Send className="w-4 h-4" />
                  Send Message
                </>
              ) : (
                <>
                  Next Step
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

