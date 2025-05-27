import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const Pricing = () => {
  const [activeTab, setActiveTab] = useState('packages');

  const packages = [
    {
      name: "Starter",
      features: [
        "Fully responsive modern website (simple backend)",
        "Upto 6 trendy edited Reels",
        "Strategic content based on trends",
        "Custom brand based designed posts"
      ],
      popular: false
    },
    {
      name: "Dominance.",
      features: [
        "All features of Growth",
        "Further enhanced 3D content",
        "...and website (advanced backend too!)",
        "Personalized AI automations, agents and chatbots.",
        "I mean you need nothing more."

      ],
      popular: true
    },
    {
      name: "Growth",
      features: [
        "Complete website (custom 3D animations!, simple backend)",
        "Upto 12 trendy brand based edited Reels",
        "Strategic content based on brand",
        "IG/FB Ads management",
        "Priority support and future discounts",
      ],
      popular: false
    }
  ];

  const individualServices = [
    {
      name: "Web Design & Development",
      description: "Custom website design and development, support after deployment, responsive in all devices, simple backend. 3D websites, advance backend features can be added.",
      icon: "💻"
    },
    {
      name: "Content Creation",
      description: "Engaging content for all platforms, trend-brand based strategic content to increase viral potential. 3D edits, high end motion graphics, cinematic videos can be added",
      icon: "📝"
    },
    {
      name: "Ads Management",
      description: "Strategic advertising campaigns in social medias to ensure your business reaches the right audience.",
      icon: "📈"
    },
    {
      name: "AI Automation",
      description: "Smart automation solutions, the X factor of successful business. Let AI do the repeatitive heavy lifting so that you can focus on what matters. Custom AI agents, chatbots and AI powered solutions for your brand needs.",
      icon: "🤖"
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our <span className="gradient-text">Plans</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Choose the perfect plan for your business needs.<br/> PS: You can also ask for customized packages according to your needs.
          </p>
          
          {/* Toggle Buttons */}
          <div className="flex justify-center mb-12">
            <div className="bg-gray-100 dark:bg-gray-800 p-1 rounded-full">
              <button
                onClick={() => setActiveTab('packages')}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === 'packages'
                    ? 'gradient-primary text-white'
                    : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                Packages
              </button>
              <button
                onClick={() => setActiveTab('individual')}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === 'individual'
                    ? 'gradient-primary text-white'
                    : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                Individual
              </button>
            </div>
          </div>
        </div>

        {activeTab === 'packages' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 animate-fade-in border-2 ${
                  plan.popular 
                    ? 'border-[var(--primary-purple)] dark:border-[var(--primary-turquoise)] gradient-card' 
                    : 'border-gray-200/50 dark:border-gray-700/50'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="gradient-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                      AI Automations
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {plan.name}
                  </h3>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600 dark:text-gray-300">
                      <div className="w-5 h-5 bg-[var(--primary-turquoise)] rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'individual' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {individualServices.map((service, index) => (
              <div
                key={index}
                className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 animate-fade-in border-2 border-[var(--primary-purple)] dark:border-[var(--primary-turquoise)] gradient-card"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Add single Book a Call button below the plans */}
        <div className="text-center mt-12">
          <a 
            href="https://calendly.com/go4frontagency/30min" 
            target="_blank" 
            rel="noopener noreferrer"
            className="gradient-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-block"
          >
            Choose & Call
          </a>
        </div>

      </div>
    </section>
  );
};

export default Pricing;