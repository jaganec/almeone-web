import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const PartnersPage: React.FC = () => {
  return (
    <div className="partners-page">
      <SEO 
        title="Strategic Partners - AlmeOne & Sradha Technologies"
        description="Discover the powerful partnership between AlmeOne and Sradha Technologies - combining boutique agility with cutting-edge AI innovation to deliver transformative solutions across the Middle East and globally."
        keywords="strategic partnership, AlmeOne partners, Sradha Technologies, AI innovation, digital transformation partnership, technology alliance, Middle East tech partners"
        schema={{
          '@type': 'WebPage',
          name: 'Strategic Partners - AlmeOne & Sradha Technologies',
          description: 'A unified ecosystem for transformation and growth through strategic partnership',
          provider: {
            '@type': 'Organization',
            name: 'AlmeOne',
            address: {
              '@type': 'PostalAddress',
              addressCountry: 'Qatar'
            }
          }
        }}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-black via-gray-900 to-black text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-gold/20 via-transparent to-gold/20"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Strategic <span className="text-gold">Partnership</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              A Unified Ecosystem for Transformation and Growth
            </p>
          </div>

          {/* Partnership Logo Display */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12 bg-white/5 backdrop-blur-sm p-12 rounded-2xl border border-gold/20">
            <div className="text-center">
              <img 
                src="/logos/logo-vertical-gold-white.png" 
                alt="AlmeOne" 
                className="h-32 w-auto mx-auto mb-4"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              {/*<h3 className="text-2xl font-bold text-gold">AlmeOne</h3>*/}
              {/*<p className="text-sm text-gray-400 mt-2">Boutique Agility & Multi-Domain Insight</p>*/}
            
            </div>
            
            <div className="text-6xl text-gold font-light">×</div>
            
            <div className="text-center">
              <img 
                src="/logos/sradha-technologies.png" 
                alt="Sradha Technologies" 
                className="h-20 w-auto mx-auto mb-4"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              {/*<h3 className="text-2xl font-bold text-white">Sradha Technologies</h3>*/}
              {/*<p className="text-sm text-gray-400 mt-2">Next-Gen Digital Solutions & AI Innovation</p>*/}
              <a 
                href="https://sradhatech.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block mt-3 text-gold hover:text-gold/80 text-sm font-semibold transition-colors"
              >
                Visit Website →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Overview */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-black">
              Our <span className="text-gold">Strategic Alliance</span>
            </h2>
            
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                AlmeOne operates as a <span className="text-gold font-semibold">strategic partner entity</span> to 
                Sradha Technologies, a globally recognized leader in AI-driven applications, cloud-native solutions 
                and data analytics. While Sradha focuses on building future-ready digital platforms, AlmeOne 
                complements this vision by delivering precision-fit, scalable services across technology, logistics, 
                and managed operations.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Together, we share a <span className="text-gold font-semibold">unified mission</span>: to empower 
                organizations with intelligent solutions, deep domain expertise and a commitment to operational 
                excellence. AlmeOne brings boutique agility and multi-domain insight, while Sradha provides the 
                backbone of cutting-edge innovation — thus creating a powerful ecosystem for transformation and growth.
              </p>
            </div>

            {/* Partnership Benefits Grid */}
            <div className="grid sm:grid-cols-2 gap-8 mb-16">
              <div className="bg-gradient-to-br from-gold/10 to-gold/5 p-8 rounded-2xl border-2 border-gold/20 hover:border-gold/40 transition-all duration-300">
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-black">Complementary Strengths</h3>
                <p className="text-gray-700">
                  AlmeOne's regional expertise and operational agility combined with Sradha's global innovation 
                  and AI capabilities creates unmatched value for our clients.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gold/10 to-gold/5 p-8 rounded-2xl border-2 border-gold/20 hover:border-gold/40 transition-all duration-300">
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-black">Global Reach</h3>
                <p className="text-gray-700">
                  With presence across Qatar, US, Canada, and India, our partnership delivers world-class 
                  solutions with deep understanding of regional markets and cultural contexts.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gold/10 to-gold/5 p-8 rounded-2xl border-2 border-gold/20 hover:border-gold/40 transition-all duration-300">
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-black">Proven Excellence</h3>
                <p className="text-gray-700">
                  Both organizations bring decades of combined experience in delivering mission-critical 
                  solutions that drive measurable business outcomes and sustainable growth.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gold/10 to-gold/5 p-8 rounded-2xl border-2 border-gold/20 hover:border-gold/40 transition-all duration-300">
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-black">Innovation at Scale</h3>
                <p className="text-gray-700">
                  Access to cutting-edge AI research, cloud-native architectures, and emerging technologies 
                  combined with practical implementation expertise across diverse industries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Focus Areas */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-black">
            Joint <span className="text-gold">Capabilities</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Sradha Technologies Focus */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-black">
              <h3 className="text-2xl font-bold mb-6 text-black">Sradha Technologies</h3>
              <p className="text-sm text-gray-600 mb-6 italic">Based in McKinney, TX, USA with 5+ years of experience</p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-gold text-xl mt-1">✓</span>
                  <span className="text-gray-700">AI-Driven Applications & Machine Learning</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold text-xl mt-1">✓</span>
                  <span className="text-gray-700">Cloud-Native Solutions & Architecture (AWS, Azure)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold text-xl mt-1">✓</span>
                  <span className="text-gray-700">Advanced Data Analytics & Intelligence</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold text-xl mt-1">✓</span>
                  <span className="text-gray-700">Next-Gen Web & Mobile App Development</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold text-xl mt-1">✓</span>
                  <span className="text-gray-700">Enterprise Cybersecurity Solutions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold text-xl mt-1">✓</span>
                  <span className="text-gray-700">Digital Innovation & Consulting</span>
                </li>
              </ul>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm font-semibold text-black mb-2">Track Record:</p>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <span className="text-2xl font-bold text-gold">100+</span>
                    <p className="text-gray-600">Projects</p>
                  </div>
                  <div>
                    <span className="text-2xl font-bold text-gold">50+</span>
                    <p className="text-gray-600">Clients</p>
                  </div>
                </div>
              </div>
            </div>

            {/* AlmeOne Focus */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-gold">
              <h3 className="text-2xl font-bold mb-6 text-gold">AlmeOne</h3>
              <p className="text-sm text-gray-600 mb-6 italic">Based in Qatar with global reach across Middle East, North America & India</p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-gold text-xl mt-1">✓</span>
                  <span className="text-gray-700">Technology Implementation & Integration</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold text-xl mt-1">✓</span>
                  <span className="text-gray-700">Smart Logistics & Warehouse Automation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold text-xl mt-1">✓</span>
                  <span className="text-gray-700">Managed IT Operations & 24/7 Support</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold text-xl mt-1">✓</span>
                  <span className="text-gray-700">Digital Transformation Consulting</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold text-xl mt-1">✓</span>
                  <span className="text-gray-700">Regional Market Expertise & Cultural Fluency</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold text-xl mt-1">✓</span>
                  <span className="text-gray-700">Container Inspection & Quality Assurance</span>
                </li>
              </ul>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm font-semibold text-black mb-2">Specialized In:</p>
                <p className="text-sm text-gray-600">Middle East market dynamics, bilingual support (Arabic/English), and culturally-aware solution delivery</p>
              </div>
            </div>

            {/* Combined Value */}
            <div className="bg-gradient-to-br from-gold/10 to-gold/20 p-8 rounded-2xl shadow-xl border-t-4 border-gold">
              <h3 className="text-2xl font-bold mb-6 text-black">Together We Deliver</h3>
              <p className="text-sm text-gray-600 mb-6 italic">A powerful ecosystem spanning 3 continents</p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-gold text-xl mt-1">★</span>
                  <span className="text-gray-700">End-to-End AI Solutions with Local Implementation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold text-xl mt-1">★</span>
                  <span className="text-gray-700">Seamless Cloud Migration & Modernization</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold text-xl mt-1">★</span>
                  <span className="text-gray-700">Industry-Specific Smart Automation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold text-xl mt-1">★</span>
                  <span className="text-gray-700">24/7 Enterprise Support & Monitoring</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold text-xl mt-1">★</span>
                  <span className="text-gray-700">Global Delivery with Local Presence</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold text-xl mt-1">★</span>
                  <span className="text-gray-700">Culturally-Aware Digital Transformation</span>
                </li>
              </ul>
              <div className="mt-6 pt-6 border-t border-black/20">
                <p className="text-sm font-semibold text-black">Partnership Advantage:</p>
                <p className="text-sm text-gray-700 mt-2">Best-in-class technology innovation powered by deep regional expertise and operational excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack Showcase */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center text-black">
            Our Combined <span className="text-gold">Technology Stack</span>
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Leveraging the latest technologies and frameworks to deliver robust, scalable solutions
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: 'React', category: 'Frontend', icon: '⚛️' },
              { name: 'Node.js', category: 'Backend', icon: '🟢' },
              { name: 'Python', category: 'AI/ML', icon: '🐍' },
              { name: 'AWS', category: 'Cloud', icon: '☁️' },
              { name: 'Azure', category: 'Cloud', icon: '🔷' },
              { name: 'Docker', category: 'DevOps', icon: '🐳' },
              { name: 'MongoDB', category: 'Database', icon: '🍃' },
              { name: 'TensorFlow', category: 'AI/ML', icon: '🧠' },
              { name: 'Kubernetes', category: 'Orchestration', icon: '☸️' },
              { name: 'TypeScript', category: 'Development', icon: '📘' },
              { name: 'GraphQL', category: 'API', icon: '◆' },
              { name: 'Redis', category: 'Caching', icon: '⚡' }
            ].map((tech, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-200 hover:border-gold hover:shadow-lg transition-all duration-300 text-center">
                <div className="text-3xl mb-2">{tech.icon}</div>
                <h4 className="font-bold text-black mb-1">{tech.name}</h4>
                <p className="text-xs text-gray-500">{tech.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-black via-gray-900 to-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Experience Our <span className="text-gold">Partnership Advantage</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Leverage the combined expertise of AlmeOne and Sradha Technologies to accelerate your 
            digital transformation journey with confidence and precision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-block bg-gold text-black px-8 py-4 rounded-lg text-lg font-bold hover:bg-gold/90 transition-all duration-300 transform hover:-translate-y-1"
            >
              Start Your Transformation
            </Link>
            <Link 
              to="/services" 
              className="inline-block border-2 border-gold text-gold hover:bg-gold hover:text-black px-8 py-4 rounded-lg text-lg font-bold transition-all duration-300"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartnersPage;
