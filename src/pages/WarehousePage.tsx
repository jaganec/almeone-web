import React from 'react';
import SEO from '../components/SEO';

const WarehousePage: React.FC = () => {
  return (
    <div className="warehouse-page">
      <SEO 
        title="Warehouse Solutions - AlmeOne | Container Damage Inspection & Automation"
        description="AlmeOne's warehouse automation solutions including Container Damage Inspection System, Automated Data Capture, and Dimensioning systems. AI-powered warehouse intelligence from Qatar."
        keywords="container damage inspection, warehouse automation, automated data capture, dimensioning system, warehouse intelligence, AI warehouse solutions, Qatar logistics technology"
        schema={{
          '@type': 'Service',
          '@context': 'https://schema.org',
          name: 'Warehouse Solutions & Automation',
          description: 'AI-powered warehouse automation including container damage inspection and automated data capture systems',
          provider: {
            '@type': 'Organization',
            name: 'AlmeOne',
            address: {
              '@type': 'PostalAddress',
              addressCountry: 'QA'
            }
          },
          areaServed: ['QA', 'AE', 'SA', 'KW', 'BH', 'OM'],
          serviceType: 'Warehouse Automation',
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Warehouse Solutions',
            itemListElement: [
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Container Damage Inspection System',
                  description: 'AI-powered automated container damage detection and documentation'
                }
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Automated Data Capture',
                  description: 'Real-time data capture and processing for warehouse operations'
                }
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Dimensioning & Warehouse Automation',
                  description: 'Automated dimensioning and warehouse process optimization'
                }
              }
            ]
          }
        }}
      />

      {/* Page Header */}
      <section className="bg-gradient-to-br from-black via-gray-900 to-gold/20 py-20 text-white">
        <div className="max-w-6xl mx-auto px-5 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-gold">Warehouse</span> Intelligence
          </h1>
          <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
            AI-powered warehouse automation solutions that transform operations with intelligent damage inspection, 
            automated data capture, and comprehensive dimensioning systems.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="bg-gold/20 text-gold px-4 py-2 rounded-full">3x Faster Inspections</span>
            <span className="bg-gold/20 text-gold px-4 py-2 rounded-full">99% Accuracy</span>
            <span className="bg-gold/20 text-gold px-4 py-2 rounded-full">Real-time Processing</span>
            <span className="bg-gold/20 text-gold px-4 py-2 rounded-full">Zero Downtime</span>
          </div>
        </div>
      </section>

      {/* Container Damage Inspection System */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-black">
                Container <span className="text-gold">Damage Inspection</span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Revolutionary AI-powered system that automatically detects, categorizes, and documents container damage 
                with unprecedented speed and accuracy. Eliminate manual inspections and reduce processing time by up to 70%.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-black font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-black mb-2">Automated Visual Inspection</h3>
                    <p className="text-gray-600">Computer vision algorithms detect dents, scratches, rust, and structural damage instantly</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-black font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-black mb-2">Intelligent Documentation</h3>
                    <p className="text-gray-600">Automatic report generation with photos, damage severity scoring, and repair recommendations</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-black font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-black mb-2">Real-time Integration</h3>
                    <p className="text-gray-600">Seamless integration with existing warehouse management and logistics systems</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-gold/5 to-gold/15 p-8 rounded-2xl">
              <div className="space-y-6">
                <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                  <div className="text-3xl font-bold text-gold mb-2">3x</div>
                  <div className="text-sm text-gray-600">Faster Inspection Speed</div>
                </div>
                <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                  <div className="text-3xl font-bold text-gold mb-2">99.7%</div>
                  <div className="text-sm text-gray-600">Detection Accuracy</div>
                </div>
                <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                  <div className="text-3xl font-bold text-gold mb-2">24/7</div>
                  <div className="text-sm text-gray-600">Continuous Operation</div>
                </div>
                <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                  <div className="text-3xl font-bold text-gold mb-2">70%</div>
                  <div className="text-sm text-gray-600">Cost Reduction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Automated Data Capture */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-black">OCR & Scanning</h3>
                  <p className="text-gray-600 text-sm mt-2">Automatic text extraction from documents and labels</p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-black">Data Processing</h3>
                  <p className="text-gray-600 text-sm mt-2">Real-time data validation and processing</p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-black">Fast Integration</h3>
                  <p className="text-gray-600 text-sm mt-2">Seamless API integration with existing systems</p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-black">Analytics</h3>
                  <p className="text-gray-600 text-sm mt-2">Real-time insights and performance metrics</p>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-black">
                Automated <span className="text-gold">Data Capture</span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Transform your warehouse data collection with intelligent automation. Our system captures, processes, 
                and validates data in real-time, eliminating manual entry errors and accelerating operations.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <span className="text-gold font-bold">•</span>
                  <span className="text-gray-700">Barcode, QR code, and RFID scanning</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-gold font-bold">•</span>
                  <span className="text-gray-700">Optical Character Recognition (OCR) for documents</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-gold font-bold">•</span>
                  <span className="text-gray-700">Weight, dimension, and environmental sensor integration</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-gold font-bold">•</span>
                  <span className="text-gray-700">Real-time data validation and error detection</span>
                </div>
              </div>
              
              <a 
                href="#contact" 
                className="inline-block bg-gold text-black px-8 py-4 rounded-md text-lg font-bold hover:bg-gold-dark transition-all duration-300 transform hover:-translate-y-1"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Dimensioning & Warehouse Automation */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-black">
              Dimensioning & <span className="text-gold">Warehouse Automation</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Complete warehouse automation ecosystem with intelligent dimensioning, inventory tracking, 
              and process optimization powered by AI and advanced sensor technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4a1 1 0 011-1h4m0 0V1m0 2h2M9 3v2m0 0v2m0-2h2m-2 0H7m2 0v2m0 0H7m2 0h2m-2 0v2m0-2h2m-2 0v2" />
                  </svg>
                ),
                title: "Automated Dimensioning",
                description: "High-precision 3D scanning and measurement systems for accurate package dimensioning and volume calculation.",
                features: ["± 1mm accuracy", "Sub-second processing", "Any package size", "Multiple scan angles"]
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                ),
                title: "Smart Inventory Management",
                description: "Real-time inventory tracking with predictive analytics for optimal stock levels and automated reordering.",
                features: ["Real-time tracking", "Predictive analytics", "Automated alerts", "Stock optimization"]
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: "Process Optimization",
                description: "AI-driven workflow optimization that identifies bottlenecks and automates repetitive tasks for maximum efficiency.",
                features: ["Workflow analysis", "Bottleneck detection", "Process automation", "Performance metrics"]
              }
            ].map((solution, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-6 text-black">
                  {solution.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-black text-center">{solution.title}</h3>
                <p className="text-gray-600 mb-6 text-center">{solution.description}</p>
                <ul className="space-y-2">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-600 text-sm flex items-center">
                      <span className="w-2 h-2 bg-gold rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* ROI Benefits */}
          <div className="bg-gradient-to-br from-gold/5 to-gold/15 p-12 rounded-2xl">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-black mb-4">Measurable Impact</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our warehouse automation solutions deliver tangible results with rapid ROI and operational excellence.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-gold mb-2">85%</div>
                <div className="text-sm text-gray-600">Error Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gold mb-2">60%</div>
                <div className="text-sm text-gray-600">Processing Speed Increase</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gold mb-2">40%</div>
                <div className="text-sm text-gray-600">Labor Cost Savings</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gold mb-2">12mo</div>
                <div className="text-sm text-gray-600">Average ROI Period</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-gold/20 text-white">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Transform Your <span className="text-gold">Warehouse?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Experience the power of AI-driven warehouse automation. Let's discuss how our solutions can 
            revolutionize your operations and deliver measurable results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact" 
              className="bg-gold text-black px-8 py-4 rounded-md text-lg font-bold hover:bg-gold-dark transition-all duration-300 transform hover:-translate-y-1"
            >
              Schedule Consultation
            </a>
            <a 
              href="/services" 
              className="border-2 border-gold text-gold px-8 py-4 rounded-md text-lg font-bold hover:bg-gold hover:text-black transition-all duration-300"
            >
              View All Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WarehousePage;