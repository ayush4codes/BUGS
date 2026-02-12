import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import Script from 'next/script'; // Import the Script component

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CACHEBUGS | Elite Tech Community',
  description: 'A elite collective of developers, engineers, and innovators building the future of technology. We deliver AI, Cloud, Web3, and Full-Stack solutions for ambitious startups.',
  keywords: 'tech community, software development, AI, machine learning, cloud infrastructure, blockchain, web3, devops, full-stack development, startup',
  openGraph: {
    title: 'CACHEBUGS | Elite Tech Community',
    description: 'A elite collective of developers building the future of technology.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-dark-950 text-white antialiased`}>
        <CustomCursor />
        <Navigation />
        <main>{children}</main>
        <Footer />

        {/* Tidio Integration */}
        <Script 
          src="//code.tidio.co/imzxuuo6jogluvwl7tn32lkcvzo4qyrb.js" 
          strategy="lazyOnload" 
        />
      </body>
    </html>
  );
}
