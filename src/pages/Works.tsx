import { useState } from 'react';
import { ArrowUpRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import CustomCursor from '../components/CustomCursor';

const Works = () => {
  const projects = [
    {
      title: "Brand Identity Design",
      description: "Complete brand identity and visual communication design",
      image: "🎨",
      tags: ["Logo Design", "Brand Guidelines", "Visual Identity"],
      category: "Design"
    },
    {
      title: "Social Media Content",
      description: "Engaging content for social media platforms",
      image: "📱",
      tags: ["Instagram", "TikTok", "Content Strategy"],
      category: "Editing"
    },
    {
      title: "E-commerce Platform",
      description: "Modern e-commerce solution with advanced features",
      image: "🛍️",
      tags: ["React", "Node.js", "MongoDB"],
      category: "Websites"
    },
    {
      title: "Video Advertisement",
      description: "High-impact video content for marketing campaigns",
      image: "🎬",
      tags: ["Video Editing", "Motion Graphics", "Storytelling"],
      category: "Editing"
    },
    {
      title: "Corporate Website",
      description: "Professional website for enterprise clients",
      image: "🏢",
      tags: ["Next.js", "TypeScript", "CMS"],
      category: "Websites"
    },
    {
      title: "Product Photography",
      description: "Professional product photography and editing",
      image: "📸",
      tags: ["Photography", "Retouching", "Product Styling"],
      category: "Editing"
    },
    {
      title: "UI/UX Design System",
      description: "Comprehensive design system for digital products",
      image: "📐",
      tags: ["Figma", "Design System", "Component Library"],
      category: "Design"
    },
    {
      title: "Portfolio Website",
      description: "Creative portfolio website for artists and designers",
      image: "🎭",
      tags: ["React", "Three.js", "Animation"],
      category: "Websites"
    },
    {
      title: "Packaging Design",
      description: "Eye-catching packaging design for consumer products",
      image: "📦",
      tags: ["Package Design", "Print Design", "3D Visualization"],
      category: "Design"
    },
    {
      title: "Documentary Editing",
      description: "Professional editing for documentary projects",
      image: "🎞️",
      tags: ["Video Editing", "Color Grading", "Sound Design"],
      category: "Editing"
    }
  ];

  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Editing', 'Design', 'Websites'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-slate-800 transition-all duration-500">
      <CustomCursor />
      
      <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-[var(--primary-purple)] dark:hover:text-[var(--primary-turquoise)] transition-colors"
            onClick={() => window.scrollTo(0, 0)}
          >
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </Link>
          <div className="font-bold text-2xl gradient-text">
            G4F
          </div>
        </div>
      </header>

      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Our <span className="gradient-text">Portfolio</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Explore our complete collection of projects and success stories
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-5 py-2 rounded-full transition-all duration-300 ${
                  filter === category
                    ? 'gradient-primary text-white'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 animate-fade-in overflow-hidden border border-gray-200 dark:border-gray-700"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="h-48 bg-gradient-to-br from-[var(--primary-purple)]/10 to-[var(--primary-turquoise)]/10 flex items-center justify-center text-6xl">
                  {project.image}
                </div>
                <div className="p-8">
                  <div className="mb-3">
                    <span className="px-3 py-1 bg-[var(--primary-purple)]/10 dark:bg-[var(--primary-turquoise)]/10 text-[var(--primary-purple)] dark:text-[var(--primary-turquoise)] rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-[var(--primary-purple)] dark:group-hover:text-[var(--primary-turquoise)] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button className="flex items-center gap-2 text-[var(--primary-purple)] dark:text-[var(--primary-turquoise)] font-semibold group-hover:gap-4 transition-all duration-300">
                    View Project
                    <ArrowUpRight size={16} className="group-hover:rotate-45 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <button className="gradient-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Book a Call to Discuss Your Project
            </button>
          </div>
        </div>
      </main>

    </div>
  );
};

export default Works;