import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const location = useLocation();

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActiveRoute = (path: string): boolean => {
    return location.pathname === path;
  };

  return (
    <header className="bg-white shadow-lg fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="flex justify-between items-center py-3 sm:py-4">
          <Link to="/" className="flex items-center">
            {/* AlmeOne Logo - Original Pixel Dimensions */}
            <img 
              src="/logos/logo-horizontal-gold-black.png" 
              alt="AlmeOne - علمة" 
              className="w-auto h-auto"
              style={{ 
                height: 'auto', 
                width: 'auto',
                maxHeight: '80px',
                minHeight: '60px'
              }}
              onError={(e) => {
                // Fallback to text if logo fails to load
                e.currentTarget.style.display = 'none';
                const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                if (fallback) fallback.classList.remove('hidden');
              }}
            />
            
            <span className="text-gold text-xl sm:text-2xl md:text-3xl font-bold tracking-wide hidden ml-4">
              ALMEONE
            </span>
          </Link>
          
          <nav className={`${isMenuOpen 
            ? 'absolute top-full left-0 right-0 bg-white shadow-lg transform translate-y-0 opacity-100 visible' 
            : 'hidden md:flex absolute md:static top-full left-0 right-0 bg-white md:bg-transparent shadow-lg md:shadow-none transform -translate-y-full md:translate-y-0 opacity-0 md:opacity-100 invisible md:visible'
            } transition-all duration-300`}>
            <ul className="flex flex-col md:flex-row gap-0 md:gap-8 p-4 md:p-0">
              <li>
                <Link 
                  to="/" 
                  onClick={() => setIsMenuOpen(false)}
                  className={`block py-2 md:py-0 font-medium hover:text-gold transition-colors duration-300 relative hover:after:absolute hover:after:bottom-[-5px] hover:after:left-0 hover:after:right-0 hover:after:h-0.5 hover:after:bg-gold border-b border-gray-200 md:border-b-0 ${
                    isActiveRoute('/') ? 'text-gold after:absolute after:bottom-[-5px] after:left-0 after:right-0 after:h-0.5 after:bg-gold' : 'text-black'
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/services" 
                  onClick={() => setIsMenuOpen(false)}
                  className={`block py-2 md:py-0 font-medium hover:text-gold transition-colors duration-300 relative hover:after:absolute hover:after:bottom-[-5px] hover:after:left-0 hover:after:right-0 hover:after:h-0.5 hover:after:bg-gold border-b border-gray-200 md:border-b-0 ${
                    isActiveRoute('/services') ? 'text-gold after:absolute after:bottom-[-5px] after:left-0 after:right-0 after:h-0.5 after:bg-gold' : 'text-black'
                  }`}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link 
                  to="/warehouse" 
                  onClick={() => setIsMenuOpen(false)}
                  className={`block py-2 md:py-0 font-medium hover:text-gold transition-colors duration-300 relative hover:after:absolute hover:after:bottom-[-5px] hover:after:left-0 hover:after:right-0 hover:after:h-0.5 hover:after:bg-gold border-b border-gray-200 md:border-b-0 ${
                    isActiveRoute('/warehouse') ? 'text-gold after:absolute after:bottom-[-5px] after:left-0 after:right-0 after:h-0.5 after:bg-gold' : 'text-black'
                  }`}
                >
                  Warehouse
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  onClick={() => setIsMenuOpen(false)}
                  className={`block py-2 md:py-0 font-medium hover:text-gold transition-colors duration-300 relative hover:after:absolute hover:after:bottom-[-5px] hover:after:left-0 hover:after:right-0 hover:after:h-0.5 hover:after:bg-gold border-b border-gray-200 md:border-b-0 ${
                    isActiveRoute('/about') ? 'text-gold after:absolute after:bottom-[-5px] after:left-0 after:right-0 after:h-0.5 after:bg-gold' : 'text-black'
                  }`}
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  onClick={() => setIsMenuOpen(false)}
                  className={`block py-2 md:py-0 font-medium hover:text-gold transition-colors duration-300 relative hover:after:absolute hover:after:bottom-[-5px] hover:after:left-0 hover:after:right-0 hover:after:h-0.5 hover:after:bg-gold border-b border-gray-200 md:border-b-0 ${
                    isActiveRoute('/contact') ? 'text-gold after:absolute after:bottom-[-5px] after:left-0 after:right-0 after:h-0.5 after:bg-gold' : 'text-black'
                  }`}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-3 sm:gap-4">
            <Link 
              to="/contact" 
              className="hidden sm:inline-block bg-gold text-black px-4 sm:px-6 py-2 sm:py-3 rounded-md font-bold hover:bg-gold-dark transition-all duration-300 transform hover:-translate-y-0.5 text-sm sm:text-base"
            >
              Get Quote
            </Link>
            <button 
              className="flex md:hidden flex-col p-2 cursor-pointer rounded-md hover:bg-gray-100 transition-colors duration-200 active:bg-gray-200"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <span className={`w-6 h-0.5 bg-black mb-1.5 transition-transform duration-300 rounded ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-black mb-1.5 transition-opacity duration-300 rounded ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-black transition-transform duration-300 rounded ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;