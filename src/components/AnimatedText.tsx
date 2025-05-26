import { useState, useEffect } from 'react';

const AnimatedText = () => {
  const words = ['Content Creation.', 'Web Design.', 'AI Automation.', 'Ads Management.'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        setIsVisible(true);
      }, 200);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <span 
      className={`gradient-text transition-opacity duration-200 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {words[currentWordIndex]}
    </span>
  );
};

export default AnimatedText;