'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, Github, Twitter, Linkedin, MessageCircle,
  Search, ChevronRight, Zap, Users, Code,
  Brain, Cloud, Lock, Smartphone
} from 'lucide-react';
import Link from 'next/link';

const navItems = [
  { name: 'Services', href: '/services', icon: Zap },
  { name: 'Case Studies', href: '/case-studies', icon: Code },
  { name: 'Open Source', href: '/open-source', icon: Github },
  { name: 'Founders Portal', href: '/founders', icon: Users },
];

const socialLinks = [
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: MessageCircle, href: '#', label: 'Discord' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [isHoveringHeader, setIsHoveringHeader] = useState(false);
  const [mounted, setMounted] = useState(false);
  const lastScrollY = useRef(0);
  const scrollThreshold = useRef(0);
  const hideTimeout = useRef<NodeJS.Timeout | null>(null);
  const headerRef = useRef<HTMLElement>(null);

  // Handle scroll - hide header on scroll down, show on scroll up
  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    setIsScrolled(currentScrollY > 50);

    // Show header when scrolling up
    if (currentScrollY < lastScrollY.current || currentScrollY < 100) {
      setIsHeaderVisible(true);
    }

    // Hide header when scrolling down (after a small threshold)
    if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
      if (!isHoveringHeader) {
        setIsHeaderVisible(false);
      }
    }

    lastScrollY.current = currentScrollY;
  }, [isHoveringHeader]);

  useEffect(() => {
    setMounted(true);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Handle mouse entering header area
  const handleMouseEnter = useCallback(() => {
    setIsHoveringHeader(true);
    setIsHeaderVisible(true);
    // Clear any pending hide timeout
    if (hideTimeout.current) {
      clearTimeout(hideTimeout.current);
      hideTimeout.current = null;
    }
  }, []);

  // Handle mouse leaving header area
  const handleMouseLeave = useCallback(() => {
    setIsHoveringHeader(false);
    // Delay hiding to allow user to interact with header
    hideTimeout.current = setTimeout(() => {
      // Only hide if we're scrolled down
      if (window.scrollY > 150) {
        setIsHeaderVisible(false);
      }
    }, 500);
  }, []);

  const handleKeyDown = (e: KeyboardEvent) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      setIsSearchOpen(true);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {/* Invisible trigger area at top that shows header on hover */}
      <div 
        className="fixed top-0 left-0 right-0 h-24 z-40"
        onMouseEnter={() => setIsHeaderVisible(true)}
      />

      <motion.nav
        ref={headerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        initial={{ y: 0 }}
        animate={{ 
          y: isHeaderVisible ? 0 : -150,
        }}
        transition={{ 
          type: 'spring',
          stiffness: 300,
          damping: 30,
          mass: 0.8
        }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-dark-950/80 backdrop-blur-xl border-b border-white/5 py-4' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group cursor-hover">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                <Code className="w-5 h-5 text-white" />
              </div>
              <div className="absolute -inset-1 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl blur opacity-30 group-hover:opacity-60 transition-opacity duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold gradient-text">CACHEBUGS</span>
              <span className="text-xs text-gray-500 -mt-1">By CACHEBUGIANS </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors cursor-hover group"
              >
                <item.icon className="w-4 h-4 group-hover:text-cyan-400 transition-colors" />
                <span className="relative">
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:w-full transition-all duration-300" />
                </span>
              </Link>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            {/* Search Button */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="hidden md:flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg border border-white/10 hover:border-cyan-500/50 transition-all cursor-hover group"
            >
              <Search className="w-4 h-4 text-gray-400 group-hover:text-cyan-400" />
              <span className="text-sm text-gray-400 group-hover:text-white">Search...</span>
              <kbd className="px-2 py-0.5 bg-white/10 rounded text-xs text-gray-500">⌘K</kbd>
            </button>

            {/* Social Links */}
            <div className="hidden lg:flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all cursor-hover"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <Link
              href="/contact"
              className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-cyan-500/25 transition-all cursor-hover group"
            >
              <span>Start Project</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 text-white cursor-hover"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-50 lg:hidden"
          >
            <div className="absolute inset-0 bg-dark-950/95 backdrop-blur-xl" />
            <div className="relative h-full flex flex-col p-6">
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between mb-8">
                <Link href="/" className="flex items-center gap-3" onClick={() => setIsMobileMenuOpen(false)}>
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <Code className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xl font-bold gradient-text">CACHEBUGS</span>
                </Link>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-gray-400 hover:text-white cursor-hover"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Mobile Nav Items */}
              <div className="flex flex-col gap-4">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center gap-4 p-4 text-gray-400 hover:text-white hover:bg-white/5 rounded-xl transition-all cursor-hover group"
                    >
                      <item.icon className="w-5 h-5 group-hover:text-cyan-400" />
                      <span className="text-lg font-medium">{item.name}</span>
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Mobile CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-auto"
              >
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl font-semibold text-white cursor-hover"
                >
                  <Zap className="w-5 h-5" />
                  Start Your Project
                </Link>
              </motion.div>

              {/* Mobile Social Links */}
              <div className="flex justify-center gap-4 mt-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="p-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-xl transition-all cursor-hover"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Search Modal */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-start justify-center pt-20"
          >
            <div
              className="absolute inset-0 bg-dark-950/90 backdrop-blur-sm"
              onClick={() => setIsSearchOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              className="relative w-full max-w-2xl mx-4"
            >
              <div className="bg-dark-900 border border-white/10 rounded-2xl overflow-hidden">
                {/* Search Input */}
                <div className="flex items-center gap-4 p-4 border-b border-white/10">
                  <Search className="w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search services, case studies, or anything..."
                    className="flex-1 bg-transparent text-white placeholder-gray-500 outline-none text-lg"
                    autoFocus
                  />
                  <kbd className="px-2 py-1 bg-white/10 rounded text-xs text-gray-400">ESC</kbd>
                </div>

                {/* Quick Links */}
                <div className="p-4">
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-3">Quick Links</p>
                  <div className="space-y-2">
                    {[
                      { icon: Brain, label: 'AI & Machine Learning', category: 'Services' },
                      { icon: Cloud, label: 'Cloud Infrastructure', category: 'Services' },
                      { icon: Lock, label: 'Security & Compliance', category: 'Services' },
                      { icon: Smartphone, label: 'Mobile Development', category: 'Services' },
                    ].map((item) => (
                      <button
                        key={item.label}
                        className="w-full flex items-center gap-4 p-3 text-left text-gray-400 hover:text-white hover:bg-white/5 rounded-xl transition-all cursor-hover group"
                      >
                        <item.icon className="w-5 h-5 group-hover:text-cyan-400" />
                        <div className="flex-1">
                          <p className="font-medium">{item.label}</p>
                          <p className="text-xs text-gray-500">{item.category}</p>
                        </div>
                        <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

