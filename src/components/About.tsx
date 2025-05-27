import { Instagram, Youtube, Facebook, Linkedin } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="flex items-center mb-6">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mr-4">
                About <span className="gradient-text">Us</span>
              </h2>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-[var(--primary-purple)] dark:hover:text-[var(--primary-turquoise)] transition-colors">
                  <Instagram size={28} />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-[var(--primary-purple)] dark:hover:text-[var(--primary-turquoise)] transition-colors">
                  <Youtube size={28} />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-[var(--primary-purple)] dark:hover:text-[var(--primary-turquoise)] transition-colors">
                  <Facebook size={28} />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-[var(--primary-purple)] dark:hover:text-[var(--primary-turquoise)] transition-colors">
                  <Linkedin size={28} />
                </a>
              </div>
            </div>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              At G4F, we're all about helping your business shine online. We know how important it is for everything to work together, and that's exactly what we do.
              We craft smart content strategies and create eye-catching videos to tell your story. We also use AI automation to make your work smoother and more efficient. 
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Our team expertly handles your ads management to ensure your message reaches the right people. And, for a strong online home, we build powerful full-stack websites from the ground up.
              Think of us as your go-to team, connecting all your digital efforts to help your brand move to the forefront.
            </p>
            <a 
              href="https://calendly.com/go4frontagency/30min" 
              target="_blank" 
              rel="noopener noreferrer"
              className="gradient-primary text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 inline-block"
            >
              Let's talk business
            </a>
          </div>
          <div className="animate-fade-in animation-delay-300">
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-[var(--primary-purple)]/10 to-[var(--primary-turquoise)]/10 rounded-2xl flex items-center justify-center">
                
                <div className="text-6xl">🚀</div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[var(--primary-purple)] rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[var(--primary-turquoise)] rounded-full opacity-20 animate-pulse animation-delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;