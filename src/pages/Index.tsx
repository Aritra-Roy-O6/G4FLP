import { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Pricing from '../components/Pricing';
import Works from '../components/Works';
import Reviews from '../components/Reviews';
import Footer from '../components/Footer';
import CustomCursor from '../components/CustomCursor';

const Index = () => {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50/30 to-teal-50/30 dark:from-gray-900 dark:via-purple-900/20 dark:to-teal-900/20 transition-all duration-500">
      <CustomCursor />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200/20 dark:border-gray-700/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img src="/logo.png" alt="Go4Front Logo" className="w-8 h-8 mr-2"/>
              <div className="font-bold text-2xl gradient-text">
                Go4Front
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('about')} className="text-gray-700 dark:text-gray-300 hover:text-[var(--primary-purple)] dark:hover:text-[var(--primary-turquoise)] transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 dark:text-gray-300 hover:text-[var(--primary-purple)] dark:hover:text-[var(--primary-turquoise)] transition-colors">
                Services
              </button>
              <button onClick={() => scrollToSection('pricing')} className="text-gray-700 dark:text-gray-300 hover:text-[var(--primary-purple)] dark:hover:text-[var(--primary-turquoise)] transition-colors">
                Plans
              </button>
              <button onClick={() => scrollToSection('works')} className="text-gray-700 dark:text-gray-300 hover:text-[var(--primary-purple)] dark:hover:text-[var(--primary-turquoise)] transition-colors">
                Works
              </button>
              <button onClick={() => scrollToSection('reviews')} className="text-gray-700 dark:text-gray-300 hover:text-[var(--primary-purple)] dark:hover:text-[var(--primary-turquoise)] transition-colors">
                Reviews
              </button>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button className="gradient-primary text-white px-6 py-2 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300 font-semibold">
                Book a Call
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-4">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
            <div className="px-4 py-6 space-y-4">
              <button onClick={() => scrollToSection('about')} className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-[var(--primary-purple)] dark:hover:text-[var(--primary-turquoise)] transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection('services')} className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-[var(--primary-purple)] dark:hover:text-[var(--primary-turquoise)] transition-colors">
                Services
              </button>
              <button onClick={() => scrollToSection('pricing')} className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-[var(--primary-purple)] dark:hover:text-[var(--primary-turquoise)] transition-colors">
                Plans
              </button>
              <button onClick={() => scrollToSection('works')} className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-[var(--primary-purple)] dark:hover:text-[var(--primary-turquoise)] transition-colors">
                Works
              </button>
              <button onClick={() => scrollToSection('reviews')} className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-[var(--primary-purple)] dark:hover:text-[var(--primary-turquoise)] transition-colors">
                Reviews
              </button>
              <button className="w-full gradient-primary text-white px-6 py-2 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300 font-semibold">
                Book a Call
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        <Hero />
        <Services />
        <Pricing />
        <About />
        <Works />
        <Reviews />
      </main>

      <Footer />
    </div>
  );
};

export default Index;