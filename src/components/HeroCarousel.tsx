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
      title: "From Vision to Execution",
      subtitle: "One Partner, One AlmeOne",
      description: "AlmeOne is a trusted technology and innovation partner based in Qatar, with global reach spanning the US, Canada, and India. We specialize in AI-driven solutions and digital transformation.",
      primaryCTA: {
        text: "Explore Our Solutions",
        action: "/services"
      },
      secondaryCTA: {
        text: "Talk to an Expert",
        action: "/contact"
      },
      backgroundClass: "bg-gradient-to-br from-black via-gray-900 to-gold/20"
    },
    {
      id: 2,
      title: "Unified Intelligence",
      subtitle: "for a Digital World",
      description: "Built on the principle of unity, AlmeOne delivers precision-engineered outcomes that empower organizations to adapt, evolve, and lead with AI-powered automation.",
      primaryCTA: {
        text: "AI Solutions",
        action: "/services"
      },
      secondaryCTA: {
        text: "Learn More",
        action: "/about"
      },
      backgroundClass: "bg-gradient-to-br from-gold/10 via-black to-gray-900"
    },
    {
      id: 3,
      title: "Transforming Operations",
      subtitle: "with Smart AI and Automation",
      description: "From warehouse automation to container damage inspection, we bring clarity, capability and cultural fluency to every solution that drives measurable business impact.",
      primaryCTA: {
        text: "Warehouse Solutions",
        action: "/services"
      },
      secondaryCTA: {
        text: "Get Started",
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
    <>
      {/* CSS for Floating Logos */}
      <style>{`
        @keyframes gentleFloat {
          0% { 
            transform: translateY(0px) translateX(0px) scale(1);
            opacity: 0.6;
          }
          50% { 
            transform: translateY(-20px) translateX(10px) scale(1.05);
            opacity: 0.8;
          }
          100% { 
            transform: translateY(-40px) translateX(-5px) scale(0.95);
            opacity: 0.4;
          }
        }
        
        @keyframes mediumFloat {
          0% { 
            transform: translateY(0px) translateX(0px) rotate(0deg) scale(1);
            opacity: 0.7;
          }
          33% { 
            transform: translateY(-15px) translateX(8px) rotate(2deg) scale(1.08);
            opacity: 0.9;
          }
          66% { 
            transform: translateY(-30px) translateX(-3px) rotate(-1deg) scale(1.03);
            opacity: 1;
          }
          100% { 
            transform: translateY(-25px) translateX(5px) rotate(1deg) scale(0.98);
            opacity: 0.8;
          }
        }
        
        @keyframes activeFloat {
          0% { 
            transform: translateY(0px) translateX(0px) rotate(0deg) scale(1);
            opacity: 0.8;
            filter: brightness(1.2);
          }
          25% { 
            transform: translateY(-8px) translateX(4px) rotate(1deg) scale(1.1);
            opacity: 1;
            filter: brightness(1.4);
          }
          50% { 
            transform: translateY(-15px) translateX(-2px) rotate(-0.5deg) scale(1.05);
            opacity: 0.95;
            filter: brightness(1.6);
          }
          75% { 
            transform: translateY(-12px) translateX(6px) rotate(0.8deg) scale(1.08);
            opacity: 0.9;
            filter: brightness(1.5);
          }
          100% { 
            transform: translateY(-10px) translateX(2px) rotate(0deg) scale(1.02);
            opacity: 0.85;
            filter: brightness(1.3);
          }
        }
        
        @keyframes centralFloat {
          0% { 
            transform: translateY(0px) scale(1);
            filter: brightness(1.6) contrast(1.3) drop-shadow(0 0 50px rgba(236, 175, 38, 0.6));
          }
          50% { 
            transform: translateY(-8px) scale(1.03);
            filter: brightness(1.8) contrast(1.4) drop-shadow(0 0 70px rgba(236, 175, 38, 0.8));
          }
          100% { 
            transform: translateY(-5px) scale(1.01);
            filter: brightness(1.7) contrast(1.35) drop-shadow(0 0 60px rgba(236, 175, 38, 0.7));
          }
        }
        
        @keyframes gentlePulse {
          0% { 
            opacity: 0.5;
            transform: translate(-50%, -50%) scale(0.9);
          }
          50% { 
            opacity: 0.8;
            transform: translate(-50%, -50%) scale(1.1);
          }
          100% { 
            opacity: 0.5;
            transform: translate(-50%, -50%) scale(0.9);
          }
        }
        
        @keyframes ambientFloat {
          0% { 
            transform: translateY(0px) translateX(0px) scale(0.8);
            opacity: 0.3;
          }
          25% { 
            opacity: 0.6;
            transform: translateY(-15px) translateX(8px) scale(1.2);
          }
          50% { 
            opacity: 0.8;
            transform: translateY(-30px) translateX(-5px) scale(1);
          }
          75% { 
            opacity: 0.5;
            transform: translateY(-45px) translateX(12px) scale(0.9);
          }
          100% { 
            transform: translateY(-60px) translateX(3px) scale(0.6);
            opacity: 0.2;
          }
        }
        
        @keyframes slideTransition {
          0% { 
            transform: translateX(0px);
          }
          100% { 
            transform: translateX(-20px);
          }
        }
        
        /* Hover effects for enhanced interactivity */
        .floating-logo:hover {
          transform: scale(1.1) !important;
          opacity: 1 !important;
          filter: brightness(1.8) !important;
          transition: all 0.3s ease-out;
        }
      `}</style>
      
      <div 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
      {/* Background for current slide */}
      <div className={`absolute inset-0 transition-all duration-1000 ${slides[currentSlide].backgroundClass}`} />
      
      {/* Floating Logo Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Background Layer - Subtle floating logos */}
        <div className="absolute inset-0">
          <img 
            src="/logos/logo-horizontal-gold-white.png" 
            alt="" 
            className="absolute w-24 h-24 opacity-15 object-contain"
            style={{
              top: '10%',
              left: '5%',
              filter: 'blur(2px) brightness(0.6)',
              animation: 'gentleFloat 12s ease-in-out infinite alternate'
            }}
          />
          <img 
            src="/logos/logo-vertical-gold-white.png" 
            alt="" 
            className="absolute w-20 h-20 opacity-20 object-contain"
            style={{
              top: '20%',
              right: '10%',
              filter: 'blur(2px) brightness(0.7)',
              animation: 'gentleFloat 14s ease-in-out infinite alternate',
              animationDelay: '2s'
            }}
          />
          <img 
            src="/logos/logo-horizontal-gold-white.png" 
            alt="" 
            className="absolute w-16 h-16 opacity-12 object-contain"
            style={{
              bottom: '15%',
              left: '8%',
              filter: 'blur(3px) brightness(0.5)',
              animation: 'gentleFloat 16s ease-in-out infinite alternate',
              animationDelay: '4s'
            }}
          />
          <img 
            src="/logos/logo-vertical-gold-white.png" 
            alt="" 
            className="absolute w-18 h-18 opacity-18 object-contain"
            style={{
              bottom: '25%',
              right: '15%',
              filter: 'blur(2px) brightness(0.8)',
              animation: 'gentleFloat 10s ease-in-out infinite alternate',
              animationDelay: '6s'
            }}
          />
        </div>

        {/* Mid Layer - Medium floating logos */}
        <div className="absolute inset-0">
          <img 
            src="/logos/logo-vertical-gold-white.png" 
            alt="" 
            className="absolute w-14 h-14 opacity-25 object-contain"
            style={{
              top: '35%',
              left: '15%',
              filter: 'blur(1px) brightness(0.9)',
              animation: 'mediumFloat 8s ease-in-out infinite alternate'
            }}
          />
          <img 
            src="/logos/logo-horizontal-gold-white.png" 
            alt="" 
            className="absolute w-16 h-16 opacity-30 object-contain"
            style={{
              top: '60%',
              left: '75%',
              filter: 'blur(1px) brightness(1.0)',
              animation: 'mediumFloat 9s ease-in-out infinite alternate',
              animationDelay: '1.5s'
            }}
          />
          <img 
            src="/logos/logo-vertical-gold-white.png" 
            alt="" 
            className="absolute w-12 h-12 opacity-22 object-contain"
            style={{
              top: '75%',
              left: '20%',
              filter: 'blur(1px) brightness(0.8)',
              animation: 'mediumFloat 11s ease-in-out infinite alternate',
              animationDelay: '3s'
            }}
          />
          <img 
            src="/logos/logo-horizontal-gold-white.png" 
            alt="" 
            className="absolute w-10 h-10 opacity-28 object-contain"
            style={{
              top: '45%',
              right: '25%',
              filter: 'blur(1px) brightness(1.1)',
              animation: 'mediumFloat 7s ease-in-out infinite alternate',
              animationDelay: '4.5s'
            }}
          />
          <img 
            src="/logos/logo-vertical-gold-white.png" 
            alt="" 
            className="absolute w-8 h-8 opacity-35 object-contain"
            style={{
              top: '15%',
              left: '70%',
              filter: 'brightness(1.2)',
              animation: 'mediumFloat 6s ease-in-out infinite alternate',
              animationDelay: '6s'
            }}
          />
        </div>

        {/* Foreground Layer - Active floating logos */}
        <div className="absolute inset-0">
          <img 
            src="/logos/logo-horizontal-gold-white.png" 
            alt="" 
            className="absolute w-10 h-10 opacity-40 object-contain"
            style={{
              top: '25%',
              left: '40%',
              filter: 'brightness(1.3)',
              animation: 'activeFloat 5s ease-in-out infinite alternate'
            }}
          />
          <img 
            src="/logos/logo-vertical-gold-white.png" 
            alt="" 
            className="absolute w-12 h-12 opacity-45 object-contain"
            style={{
              top: '65%',
              right: '40%',
              filter: 'brightness(1.4)',
              animation: 'activeFloat 4s ease-in-out infinite alternate',
              animationDelay: '1s'
            }}
          />
          <img 
            src="/logos/logo-horizontal-gold-white.png" 
            alt="" 
            className="absolute w-8 h-8 opacity-50 object-contain"
            style={{
              top: '80%',
              left: '60%',
              filter: 'brightness(1.5)',
              animation: 'activeFloat 6s ease-in-out infinite alternate',
              animationDelay: '2s'
            }}
          />
          <img 
            src="/logos/logo-vertical-gold-white.png" 
            alt="" 
            className="absolute w-6 h-6 opacity-55 object-contain"
            style={{
              top: '40%',
              left: '85%',
              filter: 'brightness(1.6)',
              animation: 'activeFloat 3s ease-in-out infinite alternate',
              animationDelay: '3s'
            }}
          />
        </div>

        {/* Central Hero Logo */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            {/* Gentle pulsing glow */}
            <div 
              className="absolute w-48 h-48 rounded-full pointer-events-none"
              style={{
                background: 'radial-gradient(circle, rgba(236, 175, 38, 0.25) 0%, rgba(236, 175, 38, 0.08) 60%, transparent 90%)',
                animation: 'gentlePulse 6s ease-in-out infinite',
                transform: 'translate(-50%, -50%)',
                left: '50%',
                top: '50%'
              }}
            />
            
            {/* Main Central Logo */}
            <img 
              src="/logos/logo-vertical-gold-white.png" 
              alt="AlmeOne" 
              className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 opacity-70 object-contain relative z-10"
              style={{ 
                filter: 'brightness(1.6) contrast(1.3) drop-shadow(0 0 50px rgba(236, 175, 38, 0.6))',
                animation: 'centralFloat 8s ease-in-out infinite alternate'
              }}
            />
          </div>
        </div>

        {/* Ambient Floating Particles */}
        <div className="absolute inset-0 pointer-events-none">
          <div 
            className="absolute w-2 h-2 bg-yellow-400/30 rounded-full"
            style={{
              top: '20%',
              left: '10%',
              animation: 'ambientFloat 15s ease-in-out infinite',
              animationDelay: '0s'
            }}
          />
          <div 
            className="absolute w-3 h-3 bg-yellow-400/20 rounded-full"
            style={{
              top: '70%',
              right: '20%',
              animation: 'ambientFloat 18s ease-in-out infinite',
              animationDelay: '3s'
            }}
          />
          <div 
            className="absolute w-1.5 h-1.5 bg-yellow-400/40 rounded-full"
            style={{
              bottom: '30%',
              left: '80%',
              animation: 'ambientFloat 12s ease-in-out infinite',
              animationDelay: '6s'
            }}
          />
          <div 
            className="absolute w-2.5 h-2.5 bg-yellow-400/25 rounded-full"
            style={{
              top: '50%',
              right: '5%',
              animation: 'ambientFloat 20s ease-in-out infinite',
              animationDelay: '9s'
            }}
          />
          <div 
            className="absolute w-1 h-1 bg-yellow-400/50 rounded-full"
            style={{
              top: '85%',
              left: '25%',
              animation: 'ambientFloat 14s ease-in-out infinite',
              animationDelay: '12s'
            }}
          />
        </div>
      </div>
      
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
    </>
  );
};

export default HeroCarousel;