import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-lg fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-5">
        <div className="flex justify-between items-center py-4">
          <div className="text-gold text-3xl font-bold tracking-wide">
            <h2>ALMEONE</h2>
          </div>
          
          <nav className={`${isMenuOpen 
            ? 'absolute top-full left-0 right-0 bg-white shadow-lg transform translate-y-0 opacity-100 visible' 
            : 'hidden md:flex absolute md:static top-full left-0 right-0 bg-white md:bg-transparent shadow-lg md:shadow-none transform -translate-y-full md:translate-y-0 opacity-0 md:opacity-100 invisible md:visible'
            } transition-all duration-300`}>
            <ul className="flex flex-col md:flex-row gap-0 md:gap-8 p-4 md:p-0">
              <li>
                <a 
                  href="#home" 
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-2 md:py-0 text-black font-medium hover:text-gold transition-colors duration-300 relative hover:after:absolute hover:after:bottom-[-5px] hover:after:left-0 hover:after:right-0 hover:after:h-0.5 hover:after:bg-gold border-b border-gray-200 md:border-b-0"
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-2 md:py-0 text-black font-medium hover:text-gold transition-colors duration-300 relative hover:after:absolute hover:after:bottom-[-5px] hover:after:left-0 hover:after:right-0 hover:after:h-0.5 hover:after:bg-gold border-b border-gray-200 md:border-b-0"
                >
                  Services
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-2 md:py-0 text-black font-medium hover:text-gold transition-colors duration-300 relative hover:after:absolute hover:after:bottom-[-5px] hover:after:left-0 hover:after:right-0 hover:after:h-0.5 hover:after:bg-gold border-b border-gray-200 md:border-b-0"
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-2 md:py-0 text-black font-medium hover:text-gold transition-colors duration-300 relative hover:after:absolute hover:after:bottom-[-5px] hover:after:left-0 hover:after:right-0 hover:after:h-0.5 hover:after:bg-gold border-b border-gray-200 md:border-b-0"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <a 
              href="#contact" 
              className="hidden md:inline-block bg-gold text-black px-6 py-3 rounded-md font-bold hover:bg-gold-dark transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Get Quote
            </a>
            <button 
              className="flex md:hidden flex-col p-1 cursor-pointer"
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