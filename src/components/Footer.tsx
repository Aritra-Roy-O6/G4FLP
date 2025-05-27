import { ArrowUpRight, Instagram, Youtube, Facebook, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-950 dark:bg-black text-white py-16 transition-colors duration-500 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[var(--primary-purple)]/10 via-[var(--primary-teal)]/5 to-[var(--primary-turquoise)]/10"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            
            <div className="font-bold text-3xl gradient-text mb-4">
              <img src="/logo.png" alt="Go4Front Logo" className="w-12 h-12 mr-2"/>
            </div>
            <p className="text-black-300 mb-6 max-w-md leading-relaxed">
              Transforming businesses through innovative digital solutions. Let's create something amazing together.
            </p>
            <a 
              href="https://calendly.com/go4frontagency/30min" 
              target="_blank" 
              rel="noopener noreferrer"
              className="gradient-primary text-white px-4 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center gap-2 inline-block"
            >
              Book a Call
              <ArrowUpRight size={16} />
            </a>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-[var(--primary-turquoise)] transition-colors">Web Development</a></li>
              <li><a href="#" className="hover:text-[var(--primary-turquoise)] transition-colors">Mobile Apps</a></li>
              <li><a href="#" className="hover:text-[var(--primary-turquoise)] transition-colors">UI/UX Design</a></li>
              <li><a href="#" className="hover:text-[var(--primary-turquoise)] transition-colors">Digital Marketing</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="https://www.gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary-turquoise)] transition-colors">support@go4front.com</a></li>
              <li>+91 94771 30260</li>
              <li>Calcutta, West Bengal</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[var(--primary-purple)] dark:hover:text-[var(--primary-turquoise)] transition-colors">
                <Instagram size={24} />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[var(--primary-purple)] dark:hover:text-[var(--primary-turquoise)] transition-colors">
                <Youtube size={24} />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[var(--primary-purple)] dark:hover:text-[var(--primary-turquoise)] transition-colors">
                <Facebook size={24} />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[var(--primary-purple)] dark:hover:text-[var(--primary-turquoise)] transition-colors">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Agency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;