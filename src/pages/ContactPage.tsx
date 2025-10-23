import React from 'react';
import Contact from '../components/Contact';
import SEO from '../components/SEO';

const ContactPage: React.FC = () => {
  return (
    <div className="contact-page">
      <SEO 
        title="Contact Almeone - Get in Touch With Our Team"
        description="Connect with Almeone's expert team for innovative business solutions. Find our global office locations and start your transformation journey today."
        keywords="contact almeone, business consultation, global offices, project inquiry, business transformation, customer support"
        schema={{
          '@type': 'ContactPage',
          '@context': 'https://schema.org',
          mainEntity: {
            '@type': 'Organization',
            name: 'Almeone',
            location: [
              {
                '@type': 'Place',
                name: 'New York Office',
                address: {
                  '@type': 'PostalAddress',
                  streetAddress: '123 Business Ave, Suite 500',
                  addressLocality: 'New York',
                  addressRegion: 'NY',
                  postalCode: '10001',
                  addressCountry: 'US'
                },
                telephone: '+1 (555) 123-4567',
                email: 'ny@almeone.com'
              },
              {
                '@type': 'Place',
                name: 'London Office',
                address: {
                  '@type': 'PostalAddress',
                  streetAddress: '45 Corporate Street',
                  addressLocality: 'London',
                  postalCode: 'EC2M 4NS',
                  addressCountry: 'GB'
                },
                telephone: '+44 20 1234 5678',
                email: 'london@almeone.com'
              },
              {
                '@type': 'Place',
                name: 'Dubai Office',
                address: {
                  '@type': 'PostalAddress',
                  streetAddress: 'Business Bay Tower, Level 25',
                  addressLocality: 'Dubai',
                  addressCountry: 'AE'
                },
                telephone: '+971 4 123 4567',
                email: 'dubai@almeone.com'
              }
            ]
          }
        }}
      />
      {/* Page Header */}
      <section className="bg-gradient-to-br from-black via-gray-900 to-gold/20 py-20 text-white">
        <div className="max-w-6xl mx-auto px-5 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            Contact <span className="text-gold">Us</span>
          </h1>
          <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto">
            Ready to transform your business? Let's start the conversation and explore how we can help you achieve your goals.
          </p>
        </div>
      </section>

      {/* Contact Component */}
      <Contact />

      {/* Office Locations */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-black">
              Our <span className="text-gold">Locations</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              With offices around the globe, we provide local expertise with international standards of excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                city: 'New York',
                country: 'United States',
                address: '123 Business Ave, Suite 500',
                postal: 'New York, NY 10001',
                phone: '+1 (555) 123-4567',
                email: 'ny@almeone.com',
                flag: '🇺🇸'
              },
              {
                city: 'London',
                country: 'United Kingdom',
                address: '45 Corporate Street',
                postal: 'London EC2M 4NS',
                phone: '+44 20 1234 5678',
                email: 'london@almeone.com',
                flag: '🇬🇧'
              },
              {
                city: 'Dubai',
                country: 'United Arab Emirates',
                address: 'Business Bay Tower, Level 25',
                postal: 'Dubai, UAE',
                phone: '+971 4 123 4567',
                email: 'dubai@almeone.com',
                flag: '🇦🇪'
              }
            ].map((office, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">{office.flag}</span>
                  <div>
                    <h3 className="text-2xl font-bold text-black">{office.city}</h3>
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
                question: 'How long does a typical project take?',
                answer: 'Project timelines vary based on scope and complexity. Most projects range from 4-12 weeks. We provide detailed timelines during our initial consultation.'
              },
              {
                question: 'Do you provide ongoing support after project completion?',
                answer: 'Yes, we offer comprehensive support packages including maintenance, updates, and technical assistance to ensure your continued success.'
              },
              {
                question: 'What industries do you specialize in?',
                answer: 'We work across multiple industries including technology, healthcare, finance, retail, manufacturing, and education, adapting our solutions to each sector\'s specific needs.'
              },
              {
                question: 'How do you ensure project quality?',
                answer: 'We follow rigorous quality assurance processes, including regular reviews, testing phases, and client feedback sessions throughout the project lifecycle.'
              },
              {
                question: 'Can you work with our existing systems?',
                answer: 'Absolutely. We specialize in integrating new solutions with existing infrastructure, ensuring minimal disruption to your current operations.'
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
            Ready to Get <span className="text-gold">Started</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Take the first step towards transforming your business. Our team is ready to discuss your project and provide a customized solution.
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
              Start Your Project
            </a>
            <a 
              href="tel:+1-555-123-4567" 
              className="inline-block border-2 border-gold text-gold hover:bg-gold hover:text-black px-8 py-4 rounded-lg text-lg font-bold transition-all duration-300"
            >
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;