import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm'; // Ensure this path matches your project structure
import { Mail, MessageCircle, MapPin, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact | CACHEBUGS',
  description: 'Get in touch with CACHEBUGS for your next project. We are ready to help you build something amazing.',
};

const contactInfo = [
  {
    icon: Mail,
    title: 'Email Us',
    value: 'contact@cachebugs.site',
    subtitle: 'We reply within 24 hours',
  },
  {
    icon: MessageCircle,
    title: 'Discord',
    value: 'Join our community',
    subtitle: 'Connect directly',
  },
  {
    icon: MapPin,
    title: 'Location',
    value: 'KANPUR, UTTAR PRADESH, INDIA',
    subtitle: 'Innovation District',
  },
  {
    icon: Clock,
    title: 'Response Time',
    value: '< 24 hours',
    subtitle: 'Business days',
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 mesh-bg" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-white">Get in</span>{' '}
              <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Have a project in mind? Lets talk. Fill out the form and well get back to you within 24 hours.
            </p>
          </div>

          {/* Contact Info Cards */}
          <div className="grid md:grid-cols-4 gap-4 mb-12">
            {contactInfo.map((info) => (
              <div
                key={info.title}
                className="bento-card text-center cursor-hover"
              >
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 mb-4">
                  <info.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-white font-semibold mb-1">{info.title}</h3>
                <p className="text-sm text-white mb-1">{info.value}</p>
                <p className="text-xs text-gray-500">{info.subtitle}</p>
              </div>
            ))}
          </div>

          {/* Contact Form - WE PASS THE URL HERE */}
          <ContactForm formEndpoint="https://formspree.io/f/mqepqlrg" />
        </div>
      </div>
    </div>
  );
}

