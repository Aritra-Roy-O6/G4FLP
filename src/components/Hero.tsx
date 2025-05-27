'use client';

import { ArrowUpRight } from 'lucide-react';
import AnimatedText from './AnimatedText';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover dark:hidden"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/light bg.mp4" type="video/mp4" />
        </video>
        <video
          className="w-full h-full object-cover hidden dark:block"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/dark bg.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-br from-purple-600/10 via-teal-600/10 to-turquoise-600/10 dark:from-purple-900/20 dark:via-teal-900/20 dark:to-turquoise-900/20" />

      {/* Foreground Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-gray-900 dark:text-white">Your one stop solution for</span>
            <br />
            <AnimatedText />
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            We create stunning digital experiences that captivate your audience and drive meaningful results for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://calendly.com/go4frontagency/30min" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group gradient-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 flex items-center gap-2"
            >
              Book a Call
              <ArrowUpRight className="group-hover:rotate-45 transition-transform duration-300" size={20} />
            </a>
            <button 
              onClick={() => scrollToSection('works')}
              className="px-8 py-4 rounded-full text-lg font-semibold border-2 border-[var(--primary-purple)] text-[var(--primary-purple)] dark:border-[var(--primary-turquoise)] dark:text-[var(--primary-turquoise)] hover:bg-[var(--primary-purple)] hover:text-white dark:hover:bg-[var(--primary-turquoise)] dark:hover:text-gray-900 transition-all duration-300"
            >
              View Our Work
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
