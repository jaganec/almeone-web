import React from 'react';
import { Link } from 'react-router-dom';
import HeroCarousel from '../components/HeroCarousel';

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <HeroCarousel />
      
      {/* Quick Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-black">
              Why Choose <span className="text-gold">Almeone</span>?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We deliver innovative business solutions that drive growth, efficiency, and success for companies across industries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Excellence */}
            <div className="text-center p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-black">Excellence</h3>
              <p className="text-gray-600">
                Committed to delivering the highest quality solutions with attention to every detail.
              </p>
            </div>

            {/* Innovation */}
            <div className="text-center p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-black">Innovation</h3>
              <p className="text-gray-600">
                Leveraging cutting-edge technology and creative approaches to solve complex challenges.
              </p>
            </div>

            {/* Partnership */}
            <div className="text-center p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-black">Partnership</h3>
              <p className="text-gray-600">
                Building lasting relationships through trust, transparency, and collaborative success.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-black via-gray-900 to-black p-12 rounded-2xl">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h3>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Join hundreds of successful companies that trust Almeone for their business transformation journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/services" 
                className="inline-block bg-gold text-black px-8 py-4 rounded-lg text-lg font-bold hover:bg-gold-dark transition-all duration-300 transform hover:-translate-y-1"
              >
                Explore Services
              </Link>
              <Link 
                to="/contact" 
                className="inline-block border-2 border-gold text-gold hover:bg-gold hover:text-black px-8 py-4 rounded-lg text-lg font-bold transition-all duration-300"
              >
                Get Started Today
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;