import { ArrowUpRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const Reviews = () => {
  const reviews = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      rating: 5,
      review: "Absolutely fantastic work! The team delivered beyond our expectations and the website looks amazing.",
      avatar: "👩‍💼"
    },
    {
      name: "Michael Chen",
      company: "Growth Labs",
      rating: 5,
      review: "Professional, creative, and delivered on time. Our conversion rates increased by 40% after the redesign.",
      avatar: "👨‍💻"
    },
    {
      name: "Emily Rodriguez",
      company: "Creative Agency",
      rating: 5,
      review: "The attention to detail and user experience design is outstanding. Highly recommend their services.",
      avatar: "👩‍🎨"
    },
    {
      name: "David Wilson",
      company: "E-commerce Solutions",
      rating: 5,
      review: "Exceptional work! Our online sales doubled after they redesigned our website. Amazing team to work with.",
      avatar: "👨‍💼"
    },
    {
      name: "Lisa Thompson",
      company: "Marketing Pro",
      rating: 5,
      review: "Their content creation strategy transformed our social media presence. Engagement rates are through the roof!",
      avatar: "👩‍💻"
    },
    {
      name: "Alex Rivera",
      company: "Digital Innovations",
      rating: 5,
      review: "Outstanding AI automation implementation! Our workflow efficiency increased by 60%. Highly professional team.",
      avatar: "👨‍🔬"
    },
    {
      name: "Jessica Park",
      company: "Startup Hub",
      rating: 5,
      review: "The web design exceeded all our expectations. Modern, fast, and perfectly aligned with our brand vision.",
      avatar: "👩‍💼"
    }
  ];

  return (
    <section id="reviews" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our <span className="gradient-text">Reviews</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            See what our clients say about working with us
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent dark:from-gray-900 z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent dark:from-gray-900 z-10 pointer-events-none"></div>
          
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {reviews.map((review, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-4/5 md:basis-3/5 lg:basis-2/5">
                  <div
                    className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 animate-fade-in border border-gray-200 dark:border-gray-700 h-full"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-center mb-4">
                      <div className="text-3xl mr-4">{review.avatar}</div>
                      <div>
                        <h3 className="font-bold text-gray-900 dark:text-white">{review.name}</h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">{review.company}</p>
                      </div>
                    </div>
                    
                    <div className="flex mb-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} size={20} className="text-yellow-400 fill-current" />
                      ))}
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      "{review.review}"
                    </p>
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
            to="/reviews" 
            className="inline-flex items-center gap-2 text-[var(--primary-purple)] dark:text-[var(--primary-turquoise)] font-semibold hover:gap-4 transition-all duration-300"
            onClick={() => window.scrollTo(0, 0)}
          >
            Read More Reviews
            <ArrowUpRight size={16} className="hover:rotate-45 transition-transform duration-300" />
          </Link>
          
        </div>
      </div>
    </section>
  );
};

export default Reviews;