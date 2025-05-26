import { useState } from 'react';
import { ArrowUpRight, ArrowLeft, Star, Plus, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import CustomCursor from '../components/CustomCursor';

const Reviews = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(5);
  
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
      rating: 4,
      review: "Great team to work with. They understood our requirements perfectly and delivered a solution that exceeded our expectations.",
      avatar: "👨‍💼"
    },
    {
      name: "Sophia Martinez",
      company: "Digital Marketing Co.",
      rating: 5,
      review: "The website they built for us has significantly improved our lead generation. Very professional service.",
      avatar: "👩‍💼"
    },
    {
      name: "James Thompson",
      company: "Financial Services Ltd.",
      rating: 5,
      review: "Outstanding work on our company's website redesign. The new site has boosted our engagement metrics considerably.",
      avatar: "👨‍💼"
    },
    {
      name: "Olivia Brown",
      company: "Healthcare Solutions",
      rating: 4,
      review: "The team was very responsive to our needs and made sure the final product met all our requirements.",
      avatar: "👩‍⚕️"
    },
    {
      name: "Daniel Kim",
      company: "Tech Innovations",
      rating: 5,
      review: "Exceptional work from start to finish. They took the time to understand our vision and brought it to life perfectly.",
      avatar: "👨‍🔬"
    },
    {
      name: "Ava Garcia",
      company: "Education Platform",
      rating: 5,
      review: "The user experience design for our learning platform is incredible. Students love using it!",
      avatar: "👩‍🏫"
    }
  ];
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, would submit to backend
    // For now, just close the modal
    setIsModalOpen(false);
    
    // Reset form
    setName('');
    setCompany('');
    setReview('');
    setRating(5);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-slate-800 transition-all duration-500">
      <CustomCursor />
      
      <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </Link>
          <div className="font-bold text-2xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            G4F
          </div>
        </div>
      </header>

      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Client <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Reviews</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it - hear what our clients have to say
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 animate-fade-in border border-gray-200 dark:border-gray-700"
                style={{ animationDelay: `${index * 50}ms` }}
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
                  {[...Array(5 - review.rating)].map((_, i) => (
                    <Star key={i + review.rating} size={20} className="text-gray-300 dark:text-gray-600" />
                  ))}
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  "{review.review}"
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16 space-y-8">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-white dark:bg-gray-800 border-2 border-blue-500 dark:border-blue-400 text-blue-600 dark:text-blue-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-50 dark:hover:bg-gray-700 transition-all duration-300 flex items-center gap-2 mx-auto"
            >
              <Plus size={20} />
              Leave a Review
            </button>
            
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300 block mx-auto">
              Book a Call to Discuss Your Project
            </button>
          </div>
        </div>
      </main>

      {/* Review Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl w-full max-w-lg animate-scale-in p-6 relative">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <X size={24} />
            </button>
            
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Leave a Review</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Rating
                </label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      className="focus:outline-none"
                    >
                      <Star 
                        size={24} 
                        className={`${
                          rating >= star 
                            ? 'text-yellow-400 fill-current' 
                            : 'text-gray-300 dark:text-gray-600'
                        } hover:scale-110 transition-transform`} 
                      />
                    </button>
                  ))}
                </div>
              </div>
              
              <div>
                <label htmlFor="review" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Your Review
                </label>
                <textarea
                  id="review"
                  rows={4}
                  value={review}
                  onChange={(e) => setReview(e.target.value)}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Submit Review
                <ArrowUpRight size={16} />
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};

export default Reviews;