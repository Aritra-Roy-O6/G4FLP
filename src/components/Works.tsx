import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const Works = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      image: "🛍️",
    },
    {
      title: "SaaS Dashboard",
      image: "📊",
    },
    {
      title: "Mobile Banking App",
      image: "🏦",
    },
    {
      title: "Real Estate Platform",
      image: "🏠",
    },
    {
      title: "Fitness Tracking App",
      image: "💪",
    },
    {
      title: "Content Management System",
      image: "📝",
    },
    {
      title: "AI Recommendation Engine",
      image: "🤖",
    },
    {
      title: "Educational Platform",
      image: "🎓",
    }
  ];

  return (
    <section id="works" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our <span className="gradient-text">Works</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Take a look at some of our recent projects
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent dark:from-gray-800 z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent dark:from-gray-800 z-10 pointer-events-none"></div>
          
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {projects.map((project, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-4/5 md:basis-3/5 lg:basis-2/5">
                  <div className="group bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700 aspect-square">
                    <div className="h-full bg-gradient-to-br from-[var(--primary-purple)]/10 to-[var(--primary-turquoise)]/10 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-300">
                      {project.image}
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 z-20" />
            <CarouselNext className="right-2 z-20" />
          </Carousel>
        </div>

        <div className="text-center mt-12 space-y-4">
          <Link 
            to="/works" 
            className="inline-flex items-center gap-2 text-[var(--primary-purple)] dark:text-[var(--primary-turquoise)] font-semibold hover:gap-4 transition-all duration-300"
            onClick={() => window.scrollTo(0, 0)}
          >
            See all
            <ArrowUpRight size={16} className="hover:rotate-45 transition-transform duration-300" />
          </Link>
          
        </div>
      </div>
    </section>
  );
};

export default Works;
