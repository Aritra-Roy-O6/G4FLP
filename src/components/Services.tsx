import { ArrowUpRight } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const Services = () => {
  const services = [
    {
      title: "Web Design",
      description: "Beautiful and responsive websites that convert visitors into customers",
      icon: "💻",
      image: "/WebDesign.PNG"
    },
    {
      title: "Content Creation",
      description: "Engaging content that tells your brand story and connects with your audience",
      icon: "📝",
      image: "/ContentCreation.PNG"
    },
    {
      title: "Ads Management",
      description: "Strategic advertising campaigns that maximize your ROI across all platforms",
      icon: "📈",
      image: "/AdManage.PNG"
    },
    {
      title: "AI Automation",
      description: "Smart automation solutions to streamline your business processes",
      icon: "🤖",
      image: "/AIAuto.PNG"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 via-purple-50/20 to-teal-50/20 dark:from-gray-800 dark:via-purple-900/10 dark:to-teal-900/10 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We offer comprehensive digital solutions to help your business thrive.
          </p>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            More to come, Stay Tuned!
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 via-purple-50/20 to-transparent dark:from-gray-800 dark:via-purple-900/10 z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 via-purple-50/20 to-transparent dark:from-gray-800 dark:via-purple-900/10 z-10 pointer-events-none"></div>
          
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {services.map((service, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <div
                    className="group relative p-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 animate-fade-in border border-gray-200/50 dark:border-gray-700/50 h-80 overflow-hidden cursor-pointer flex flex-col justify-center items-center"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {/* Background Image with Blur */}
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-all duration-300 group-hover:filter-none group-hover:scale-110 filter blur-sm"
                      style={{ backgroundImage: `url(${service.image})` }}
                    ></div>

                    {/* Text Content */}
                    <div className="relative z-10 text-white transition-opacity duration-300 group-hover:opacity-0 text-center">
                      <h3 className="text-xl font-bold mb-4">
                        {service.title}
                      </h3>
                      <p className="mb-6 leading-relaxed text-sm">
                        {service.description}
                      </p>
                      {/*<button className="flex items-center gap-2 text-[var(--primary-purple)] dark:text-[var(--primary-turquoise)] font-semibold group-hover:gap-4 transition-all duration-300 mt-auto">
                        Learn More
                        <ArrowUpRight size={16} className="group-hover:rotate-45 transition-transform duration-300" />
                      </button>*/}
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 z-20" />
            <CarouselNext className="right-2 z-20" />
          </Carousel>
        </div>

        <div className="text-center mt-12">
          <button className="gradient-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            Discuss Your Project with Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
