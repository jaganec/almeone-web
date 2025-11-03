import React from 'react';
import Contact from '../components/Contact';
import SEO from '../components/SEO';

const ContactPage: React.FC = () => {
  return (
    <div className="contact-page">
      <SEO 
        title="Contact AlmeOne - Qatar-Based AI & Warehouse Solutions"
        description="Connect with AlmeOne's expert team for AI-driven solutions and warehouse automation. Qatar headquarters with global reach across GCC and international markets."
        keywords="contact almeone, qatar ai solutions, warehouse automation consultation, doha technology services, GCC AI solutions, international project inquiry"
        schema={{
          '@type': 'ContactPage',
          '@context': 'https://schema.org',
          mainEntity: {
            '@type': 'Organization',
            name: 'AlmeOne',
            description: 'AI-driven solutions and warehouse automation expertise from Qatar with global reach',
            address: {
              '@type': 'PostalAddress',
              addressCountry: 'QA'
            },
            location: [
              {
                '@type': 'Place',
                name: 'Doha Headquarters',
                address: {
                  '@type': 'PostalAddress',
                  streetAddress: 'West Bay Business District',
                  addressLocality: 'Doha',
                  addressCountry: 'QA'
                },
                telephone: '+974 33920094',
                email: 'info@almeone.com'
              },
              {
                '@type': 'Place',
                name: 'Regional Operations',
                address: {
                  '@type': 'PostalAddress',
                  addressCountry: 'AE'
                },
                telephone: '+974 33920094',
                email: 'info@almeone.com'
              }
            ],
            areaServed: ['QA', 'AE', 'SA', 'KW', 'BH', 'OM', 'US', 'GB', 'DE'],
            serviceArea: {
              '@type': 'GeoCircle',
              geoMidpoint: {
                '@type': 'GeoCoordinates',
                latitude: 25.2854,
                longitude: 51.5310
              },
              geoRadius: 'Global'
            }
          }
        }}
      />
      {/* Page Header */}
      <section className="bg-gradient-to-br from-black via-gray-900 to-gold/20 py-20 text-white">
        <div className="max-w-6xl mx-auto px-5 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            Connect with <span className="text-gold">AlmeOne</span>
          </h1>
          <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
            Ready to transform your operations with AI-driven solutions? Our Qatar-based team delivers global expertise 
            in warehouse automation and intelligent technology solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="bg-gold/20 text-gold px-4 py-2 rounded-full">🇶🇦 Qatar Headquarters</span>
            <span className="bg-gold/20 text-gold px-4 py-2 rounded-full">🌍 Global Delivery</span>
            <span className="bg-gold/20 text-gold px-4 py-2 rounded-full">24/7 Support</span>
          </div>
        </div>
      </section>

      {/* Contact Component */}
      <Contact />

      {/* Office Locations */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-black">
              Our <span className="text-gold">Global Presence</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Headquartered in Qatar with global reach. We deliver local expertise with international standards 
              across GCC, MENA, and worldwide markets.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                city: 'Doha',
                country: 'Qatar (Headquarters)',
                address: 'West Bay Business District',
                postal: 'Doha, Qatar',
                phone: '+974 33920094',
                email: 'info@almeone.com',
                flag: '�',
                flagAlt: 'QAT',
                isHQ: true
              },
              {
                city: 'Dubai',
                country: 'UAE (Regional Hub)',
                address: 'Business Bay Technology Center',
                postal: 'Dubai, UAE',
                phone: '+974 33920094',
                email: 'info@almeone.com',
                flag: '�',
                flagAlt: 'UAE',
                isHQ: false
              },
              {
                city: 'Global',
                country: 'International Projects',
                address: 'Remote Delivery Worldwide',
                postal: 'USA, Europe, Asia-Pacific',
                phone: '+974 33920094',
                email: 'info@almeone.com',
                flag: '🌍',
                flagAlt: 'GLOBAL',
                isHQ: false
              }
            ].map((office, index) => (
              <div key={index} className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ${office.isHQ ? 'ring-2 ring-gold ring-opacity-50' : ''}`}>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-4xl" style={{fontFamily: 'Apple Color Emoji, Segoe UI Emoji, Noto Color Emoji, sans-serif'}}>
                    {office.city === 'Doha' ? '🇶🇦' : office.city === 'Dubai' ? '🇦🇪' : '🌍'}
                  </span>
                  <div>
                    <h3 className="text-2xl font-bold text-black flex items-center gap-2">
                      {office.city}
                      {office.isHQ && <span className="text-gold text-sm font-normal px-2 py-1 bg-gold/10 rounded-full">HQ</span>}
                    </h3>
                    <p className="text-gray-600">{office.country}</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                    </svg>
                    <div>
                      <p className="text-gray-800">{office.address}</p>
                      <p className="text-gray-600">{office.postal}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                    </svg>
                    <a href={`tel:${office.phone}`} className="text-gray-800 hover:text-gold transition-colors">
                      {office.phone}
                    </a>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                    </svg>
                    <a href={`mailto:${office.email}`} className="text-gray-800 hover:text-gold transition-colors">
                      {office.email}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-5">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-black">
              Frequently Asked <span className="text-gold">Questions</span>
            </h2>
            <p className="text-lg text-gray-600">
              Quick answers to common questions about our services and processes.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: 'How quickly can AlmeOne implement warehouse automation solutions?',
                answer: 'Implementation timelines vary by complexity, but our Container Damage Inspection System can be deployed in 2-4 weeks, while comprehensive warehouse automation typically takes 6-12 weeks with our proven methodology.'
              },
              {
                question: 'Do you provide 24/7 support for AI and warehouse systems?',
                answer: 'Yes, we offer comprehensive 24/7 managed support including system monitoring, proactive maintenance, performance optimization, and immediate technical assistance to ensure zero downtime.'
              },
              {
                question: 'What industries benefit most from AlmeOne solutions?',
                answer: 'We specialize in warehouse & logistics, supply chain management, manufacturing operations, and any industry requiring AI-driven process automation and intelligent data capture systems.'
              },
              {
                question: 'How accurate is your Container Damage Inspection System?',
                answer: 'Our AI-powered system achieves 99.7% detection accuracy with 3x faster inspection speed compared to manual processes, including automatic documentation and severity scoring.'
              },
              {
                question: 'Can AlmeOne integrate with our existing warehouse management systems?',
                answer: 'Absolutely. Our solutions are designed for seamless integration with existing WMS, ERP, and logistics systems through API-first architecture, ensuring minimal disruption to current operations.'
              },
              {
                question: 'What is the ROI for AlmeOne warehouse automation solutions?',
                answer: 'Clients typically see 85% error reduction, 60% processing speed increase, and 40% labor cost savings with an average ROI period of 12 months for comprehensive automation implementations.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-black mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-black via-gray-900 to-black">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your <span className="text-gold">Operations</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Connect with AlmeOne's Qatar-based experts for AI-driven solutions and warehouse automation. 
            Let's discuss how our intelligent technology can revolutionize your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact" 
              className="inline-block bg-gold text-black px-8 py-4 rounded-lg text-lg font-bold hover:bg-gold-dark transition-all duration-300 transform hover:-translate-y-1"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Schedule Consultation
            </a>
            <a 
              href="tel:+974-33920094" 
              className="inline-block border-2 border-gold text-gold hover:bg-gold hover:text-black px-8 py-4 rounded-lg text-lg font-bold transition-all duration-300"
            >
              Call Qatar Office
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;