import React from 'react';
import { Link } from 'react-router-dom';
import HeroCarousel from '../components/HeroCarousel';
import SEO from '../components/SEO';

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <SEO 
        title="AlmeOne - From Vision to Execution — One Partner, One AlmeOne"
        description="AlmeOne is a trusted technology and innovation partner based in Qatar, with global reach. We specialize in AI-driven solutions, digital transformation and warehouse automation."
        keywords="AI solutions, digital transformation, warehouse automation, Qatar technology partner, smart automation, AI consulting, container inspection"
        schema={{
          '@type': 'WebPage',
          name: 'AlmeOne - Unified Intelligence for Digital World',
          description: 'Transforming Operations with Smart AI and Automation. Tech that speaks one language: Excellence.',
          provider: {
            '@type': 'Organization',
            name: 'AlmeOne',
            address: {
              '@type': 'PostalAddress',
              addressCountry: 'Qatar'
            }
          },
          offers: {
            '@type': 'AggregateOffer',
            offerCount: '4',
            itemListElement: [
              {
                '@type': 'Offer',
                name: 'AI-Driven Innovation',
                description: 'Tailored AI strategies from process automation to predictive analytics'
              },
              {
                '@type': 'Offer',
                name: 'Industry-Specific Intelligence',
                description: 'Specialized expertise across technology, warehousing and logistics domains'
              },
              {
                '@type': 'Offer',
                name: 'End-to-End Digital Transformation',
                description: 'Complete digital infrastructure and strategic IT services'
              },
              {
                '@type': 'Offer',
                name: '24/7 Managed Support',
                description: 'Continuous support and monitoring for optimal performance'
              }
            ]
          }
        }}
      />
      <HeroCarousel />
      
      {/* Company Introduction Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 text-black leading-tight">
              From Vision to Execution — One Partner, One <span className="text-gold">AlmeOne</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-6 sm:mb-8 px-4 sm:px-0">
              AlmeOne is a trusted technology and innovation partner based in Qatar, with a global reach spanning the US, 
              Canada, and India. From digital infrastructure to strategic IT services, we specialize in AI-driven solutions, 
              digital transformation and warehouse automation helping businesses scale smarter, faster and more securely.
            </p>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
              Built on the principle of unity, AlmeOne delivers precision-engineered outcomes that empower organizations to 
              adapt, evolve, and lead. Whether you're launching platforms, optimizing operations, or transforming legacy systems, 
              we bring clarity, capability and cultural fluency to every solution.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {/* AI-Driven Innovation */}
            <div className="text-center p-6 sm:p-8 bg-gradient-to-br from-gold/5 to-gold/10 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-black">AI-Driven Innovation</h3>
              <p className="text-gray-600 text-sm">
                Tailored AI strategies from process automation to predictive analytics designed to create measurable impact.
              </p>
            </div>

            {/* Industry-Specific Intelligence */}
            <div className="text-center p-8 bg-gradient-to-br from-gold/5 to-gold/10 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-black">Industry-Specific Intelligence</h3>
              <p className="text-gray-600 text-sm">
                Specialized expertise across technology, warehousing and logistics domains with deep operational understanding.
              </p>
            </div>

            {/* End-to-End Digital Transformation */}
            <div className="text-center p-8 bg-gradient-to-br from-gold/5 to-gold/10 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-black">End-to-End Digital Transformation</h3>
              <p className="text-gray-600 text-sm">
                Complete digital infrastructure and strategic IT services from legacy modernization to cloud migration.
              </p>
            </div>

            {/* 24/7 Managed Support */}
            <div className="text-center p-8 bg-gradient-to-br from-gold/5 to-gold/10 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 000 19.5 9.75 9.75 0 000-19.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-black">24/7 Managed Support</h3>
              <p className="text-gray-600 text-sm">
                Continuous monitoring, support and optimization ensuring your systems perform at peak efficiency.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-black via-gray-900 to-black p-12 rounded-2xl">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Scale Smarter and Faster?</h3>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Join organizations across Qatar, US, Canada, and India that trust AlmeOne for their digital transformation journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/services" 
                className="inline-block bg-gold text-black px-8 py-4 rounded-lg text-lg font-bold hover:bg-gold-dark transition-all duration-300 transform hover:-translate-y-1"
              >
                Explore Our Solutions
              </Link>
              <Link 
                to="/contact" 
                className="inline-block border-2 border-gold text-gold hover:bg-gold hover:text-black px-8 py-4 rounded-lg text-lg font-bold transition-all duration-300"
              >
                Talk to an Expert
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;