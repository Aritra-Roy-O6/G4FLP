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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-teal-600/10 to-turquoise-600/10 dark:from-purple-900/20 dark:via-teal-900/20 dark:to-turquoise-900/20"></div>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-[var(--primary-purple)]/20 dark:bg-[var(--primary-purple)]/30 rounded-full mix-blend-multiply filter blur-2xl opacity-75 animate-blob animation-delay-0"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-[var(--primary-teal)]/20 dark:bg-[var(--primary-teal)]/30 rounded-full mix-blend-multiply filter blur-2xl opacity-75 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-40 w-72 h-72 bg-[var(--primary-turquoise)]/20 dark:bg-[var(--primary-turquoise)]/30 rounded-full mix-blend-multiply filter blur-2xl opacity-75 animate-blob animation-delay-4000"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--primary-purple)]/15 dark:bg-[var(--primary-purple)]/25 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob animation-delay-1000"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[var(--primary-teal)]/15 dark:bg-[var(--primary-teal)]/25 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob animation-delay-3000"></div>
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-[var(--primary-turquoise)]/15 dark:bg-[var(--primary-turquoise)]/25 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob animation-delay-5000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
            <button className="group gradient-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2">
              Book a Call
              <ArrowUpRight className="group-hover:rotate-45 transition-transform duration-300" size={20} />
            </button>
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