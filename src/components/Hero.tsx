import React from 'react';

interface StatProps {
  number: string;
  label: string;
}

const Stat: React.FC<StatProps> = ({ number, label }) => (
  <div className="text-center">
    <span className="block text-3xl lg:text-4xl font-bold text-gold mb-2">{number}</span>
    <span className="block text-sm text-gray-600">{label}</span>
  </div>
);

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative bg-gradient-to-br from-white to-gray-50 pt-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-gold/10 via-transparent to-gold/5 pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/5 w-64 h-64 bg-gold/5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
          <div className="animate-[fadeInUp_1s_ease-out]">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-black">
              Innovation Meets <span className="text-gold">Excellence</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-lg">
              Delivering cutting-edge technology solutions that transform businesses 
              and drive success in the digital age.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#services" 
                className="inline-block bg-gold text-black px-8 py-4 rounded-md text-lg font-bold hover:bg-gold-dark transition-all duration-300 transform hover:-translate-y-1 text-center"
              >
                Our Services
              </a>
              <a 
                href="#about" 
                className="inline-block bg-transparent text-gold px-8 py-4 border-2 border-gold rounded-md text-lg font-bold hover:bg-gold hover:text-black transition-all duration-300 text-center"
              >
                Learn More
              </a>
            </div>
          </div>
          
          <div className="flex justify-center items-center animate-[fadeInUp_1s_ease-out_0.3s_both]">
            <div className="bg-white rounded-3xl p-10 shadow-[0_20px_40px_rgba(0,0,0,0.1),0_10px_20px_rgba(0,0,0,0.05)] border-4 border-gold relative transform perspective-1000 -rotate-y-1 hover:rotate-y-0 transition-transform duration-300 max-w-md w-full">
              <div className="absolute inset-0 bg-gradient-to-br from-gold to-gold-dark rounded-3xl -z-10 transform translate-x-1 translate-y-1"></div>
              
              <div className="text-center">
                <h3 className="text-2xl font-bold text-black mb-4">Premium Solutions</h3>
                <p className="text-gray-600 mb-8">Trusted by leading companies worldwide</p>
                
                <div className="grid grid-cols-2 gap-6">
                  <Stat number="500+" label="Projects" />
                  <Stat number="50+" label="Clients" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
        <div className="flex flex-col items-center text-gray-600 text-sm">
          <span className="mb-3">Scroll Down</span>
          <div className="w-5 h-5 border-r-2 border-b-2 border-gold transform rotate-45"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;