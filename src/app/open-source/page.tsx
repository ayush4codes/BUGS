
import type { Metadata } from 'next';
import { Github, Star, GitBranch, Download, ExternalLink } from 'lucide-react';

const npmPackages = [
  { name: '@cachebugs/ui', version: '2.1.0', downloads: '250K/wk', description: 'A comprehensive React component library with 50+ accessible, customizable UI components.', color: 'from-cyan-500 to-blue-500' },
  { name: '@cachebugs/logger', version: '2.0.0', downloads: '150K/wk', description: 'Structured logging with multiple transports and real-time streaming.', color: 'from-purple-500 to-pink-500' },
  { name: '@cachebugs/validation', version: '1.5.0', downloads: '80K/wk', description: 'Schema validation made simple with TypeScript support.', color: 'from-orange-500 to-yellow-500' },
  { name: '@cachebugs/cache', version: '3.0.0', downloads: '60K/wk', description: 'Multi-layer caching solution for high-performance apps.', color: 'from-green-500 to-emerald-500' },
  { name: '@cachebugs/queue', version: '2.2.0', downloads: '45K/wk', description: 'Reliable job queue with automatic retries and scheduling.', color: 'from-red-500 to-pink-500' },
  { name: '@cachebugs/auth', version: '4.1.0', downloads: '90K/wk', description: 'Authentication & authorization with OAuth2 and OIDC.', color: 'from-indigo-500 to-purple-500' },
];

const openSourceRepos = [
  { name: 'cachebugs-core', stars: 1250, forks: 234, description: 'Core utilities and helpers used across all our projects.', language: 'TypeScript' },
  { name: 'cachebugs-api', stars: 890, forks: 156, description: 'RESTful API starter kit with authentication and rate limiting.', language: 'Node.js' },
  { name: 'cachebugs-ui-kit', stars: 2100, forks: 312, description: 'Open source UI component library.', language: 'React' },
  { name: 'cachebots-sdk', stars: 567, forks: 89, description: 'SDK for building AI-powered applications.', language: 'Python' },
];

export const metadata: Metadata = {
  title: 'Open Source | CACHEBUGS',
  description: 'Explore our open source contributions, NPM packages, and tools we have built for the community.',
};

export default function OpenSourcePage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 mesh-bg" />
        <div className="relative max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 mb-6">
              <Github className="w-4 h-4 text-white" />
              <span className="text-sm text-gray-300">Open Source</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-white">Built by</span>{' '}
              <span className="gradient-text">CACHEBUGS</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We love giving back to the community. Check out our open source tools, libraries, and packages.
            </p>
          </div>

          {/* NPM Packages */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <Download className="w-6 h-6 text-cyan-400" />
              NPM Packages
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {npmPackages.map((pkg) => (
                <div key={pkg.name} className="bento-card cursor-hover group">
                  <div className={`inline-flex px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${pkg.color} text-white mb-4`}>
                    {pkg.name}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{pkg.description}</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <Download className="w-4 h-4" />
                      {pkg.downloads}
                    </span>
                    <span>v{pkg.version}</span>
                  </div>
                  <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
                    <code className="text-sm text-cyan-400">npm i {pkg.name}</code>
                    <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* GitHub Repos */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <Github className="w-6 h-6 text-purple-400" />
              GitHub Repositories
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {openSourceRepos.map((repo) => (
                <a
                  key={repo.name}
                  href="#"
                  className="bento-card cursor-hover group block"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <Github className="w-5 h-5 text-white" />
                      <h3 className="text-lg font-semibold text-white group-hover:gradient-text transition-all">
                        {repo.name}
                      </h3>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400" />
                        {repo.stars}
                      </span>
                      <span className="flex items-center gap-1">
                        <GitBranch className="w-4 h-4" />
                        {repo.forks}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-400 mb-4">{repo.description}</p>
                  <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full ${
                      repo.language === 'TypeScript' ? 'bg-blue-400' :
                      repo.language === 'React' ? 'bg-cyan-400' :
                      repo.language === 'Node.js' ? 'bg-green-400' :
                      'bg-yellow-400'
                    }`} />
                    <span className="text-sm text-gray-500">{repo.language}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

