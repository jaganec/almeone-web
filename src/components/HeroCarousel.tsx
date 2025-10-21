import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// TypeScript interfaces
interface Slide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  primaryCTA: {
    text: string;
    action: string;
  };
  secondaryCTA: {
    text: string;
    action: string;
  };
  backgroundClass: string;
}

interface HeroCarouselProps {
  autoPlayInterval?: number;
}

const HeroCarousel: React.FC<HeroCarouselProps> = ({ autoPlayInterval = 5000 }) => {
  const navigate = useNavigate();
  
  // Slide data
  const slides: Slide[] = [
    {
      id: 1,
      title: "Welcome to Almeone",
      subtitle: "Your Trusted Business Partner",
      description: "Empowering businesses with innovative solutions and exceptional service quality that drives sustainable growth.",
      primaryCTA: {
        text: "Get Started",
        action: "/contact"
      },
      secondaryCTA: {
        text: "Learn More",
        action: "/about"
      },
      backgroundClass: "bg-gradient-to-br from-black via-gray-900 to-gold/20"
    },
    {
      id: 2,
      title: "Premium Business Solutions",
      subtitle: "Driving Growth & Innovation",
      description: "Comprehensive services designed to optimize your operations and accelerate your business transformation journey.",
      primaryCTA: {
        text: "View Services",
        action: "/services"
      },
      secondaryCTA: {
        text: "Get Quote",
        action: "/contact"
      },
      backgroundClass: "bg-gradient-to-br from-gold/10 via-black to-gray-900"
    },
    {
      id: 3,
      title: "Proven Track Record",
      subtitle: "500+ Successful Projects",
      description: "Join hundreds of satisfied clients who have transformed their businesses with our expertise and dedication.",
      primaryCTA: {
        text: "Case Studies",
        action: "/about"
      },
      secondaryCTA: {
        text: "Contact Us",
        action: "/contact"
      },
      backgroundClass: "bg-gradient-to-br from-gray-900 via-black to-gold/15"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [isAutoPlaying, autoPlayInterval, slides.length]);

  // Navigation functions
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handleCTAClick = (action: string) => {
    navigate(action);
  };

  return (
    <div 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Background for current slide */}
      <div className={`absolute inset-0 transition-all duration-1000 ${slides[currentSlide].backgroundClass}`} />
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Main content */}
      <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
        {/* Slide content with animation */}
        <div className="transition-all duration-700 ease-in-out transform">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-in">
            <span className="bg-gradient-to-r from-gold via-yellow-400 to-gold bg-clip-text text-transparent">
              {slides[currentSlide].title}
            </span>
          </h1>
          
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-6 text-gray-200 animate-fade-in-delay-1">
            {slides[currentSlide].subtitle}
          </h2>
          
          <p className="text-lg md:text-xl lg:text-2xl mb-8 text-gray-300 max-w-4xl mx-auto leading-relaxed animate-fade-in-delay-2">
            {slides[currentSlide].description}
          </p>
          
          {/* Call-to-action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-3">
            <button
              onClick={() => handleCTAClick(slides[currentSlide].primaryCTA.action)}
              className="bg-gold hover:bg-gold-dark text-black font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-lg"
            >
              {slides[currentSlide].primaryCTA.text}
            </button>
            
            <button
              onClick={() => handleCTAClick(slides[currentSlide].secondaryCTA.action)}
              className="border-2 border-gold text-gold hover:bg-gold hover:text-black font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 text-lg"
            >
              {slides[currentSlide].secondaryCTA.text}
            </button>
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in-delay-4">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gold mb-2">500+</div>
            <div className="text-gray-300">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gold mb-2">1000+</div>
            <div className="text-gray-300">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gold mb-2">15+</div>
            <div className="text-gray-300">Years Experience</div>
          </div>
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-gold scale-125' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slide counter */}
      <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm z-20">
        {currentSlide + 1} / {slides.length}
      </div>
    </div>
  );
};

export default HeroCarousel;