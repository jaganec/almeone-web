import React from 'react';
import SEO from '../components/SEO';

const AboutPage: React.FC = () => {
  return (
    <div className="about-page">
      <SEO 
        title="About AlmeOne - One Intelligent Way Forward"
        description="Almeone blends the Arabic word ععععععع (ʿAlmah), meaning knowledge and wisdom, with One to reflect singularity and leadership. Learn about our unified vision and expertise."
        keywords="about almeone, arabic wisdom, knowledge, technology partner, qatar, ai solutions, warehouse automation, digital transformation"
        schema={{
          '@type': 'AboutPage',
          '@context': 'https://schema.org',
          mainEntity: {
            '@type': 'Organization',
            name: 'AlmeOne',
            description: 'A trusted technology and innovation partner based in Qatar, with global reach. Specializing in AI-driven solutions, digital transformation and warehouse automation.',
            foundingLocation: {
              '@type': 'Place',
              name: 'Qatar'
            },
            areaServed: [
              {
                '@type': 'Place',
                name: 'Qatar'
              },
              {
                '@type': 'Place', 
                name: 'United States'
              },
              {
                '@type': 'Place',
                name: 'Canada'
              },
              {
                '@type': 'Place',
                name: 'India'
              }
            ],
            speciality: [
              'AI-Driven Innovation',
              'Industry-Specific Intelligence', 
              'End-to-End Digital Transformation',
              '24/7 Managed Support',
              'Warehouse Automation',
              'Container Damage Inspection',
              'Digital Infrastructure'
            ]
          }
        }}
      />
      {/* Page Header */}
      <section className="bg-gradient-to-br from-black via-gray-900 to-gold/20 py-20 text-white">
        <div className="max-w-6xl mx-auto px-5 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-gold">AlmeOne</span> — One Intelligent Way Forward
          </h1>
          <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto">
            A name rooted in meaning and ambition. AlmeOne blends the Arabic word "علمة" (ʿAlmah), 
            meaning knowledge and wisdom, with "One" to reflect singularity and leadership.
          </p>
        </div>
      </section>

      {/* About Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-black">
                Our <span className="text-gold">Story</span>
              </h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Almeone is a name rooted in meaning and ambition. Almeone blends the Arabic word "علمة" (ʿAlmah), 
                  meaning knowledge and wisdom, with the suffix "-One" to reflect singularity and leadership - 
                  showcasing Almeone as a symbol of unified intelligence and innovation.
                </p>
                <p>
                  We at AlmeOne are committed to intelligence, innovation, and specialized expertise. Whether in 
                  technology, services, or strategic ventures, Almeone represents a unified vision: to lead with 
                  clarity, deliver with precision, and evolve with purpose.
                </p>
                <p>
                  Founded by experts in technology, warehousing and logistics domains, AlmeOne was ideated with a 
                  clear mission to understand your operational challenges deeply and deliver right-fit, 
                  ready-to-scale solutions that actually solve them.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-gold/5 to-gold/15 p-8 rounded-2xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold mb-2">4+</div>
                  <div className="text-sm text-gray-600">Countries Served</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold mb-2">24/7</div>
                  <div className="text-sm text-gray-600">Support Available</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold mb-2">100%</div>
                  <div className="text-sm text-gray-600">AI-Driven Solutions</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold mb-2">3x</div>
                  <div className="text-sm text-gray-600">Faster Inspections</div>
                </div>
              </div>
            </div>
          </div>

          {/* Highlights Section */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                ),
                title: "AI-Driven Innovation",
                description: "Tailored AI strategies from process automation to predictive analytics designed to create measurable impact."
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                ),
                title: "Industry-Specific Intelligence",
                description: "Specialized expertise across technology, warehousing and logistics domains with deep operational understanding."
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                ),
                title: "End-to-End Digital Transformation",
                description: "Complete digital infrastructure and strategic IT services from legacy modernization to cloud migration."
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 000 19.5 9.75 9.75 0 000-19.5z" />
                  </svg>
                ),
                title: "24/7 Managed Support",
                description: "Continuous monitoring, support and optimization ensuring your systems perform at peak efficiency."
              }
            ].map((highlight, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-6 text-black">
                  {highlight.icon}
                </div>
                <h3 className="text-lg font-bold mb-3 text-black">{highlight.title}</h3>
                <p className="text-gray-600 text-sm">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-black">
              Our <span className="text-gold">Leadership</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Meet the experienced professionals who drive our vision and deliver exceptional results for our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'John Smith',
                role: 'Chief Executive Officer',
                description: '15+ years leading digital transformation initiatives across Fortune 500 companies.',
                image: '👤'
              },
              {
                name: 'Sarah Johnson',
                role: 'Chief Technology Officer',
                description: 'Technology visionary with expertise in AI, cloud computing, and enterprise architecture.',
                image: '👤'
              },
              {
                name: 'Michael Chen',
                role: 'Head of Operations',
                description: 'Operations excellence specialist focused on process optimization and quality delivery.',
                image: '👤'
              }
            ].map((member, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-gold to-gold-dark rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl text-black">{member.image}</span>
                </div>
                <h3 className="text-2xl font-bold mb-2 text-black">{member.name}</h3>
                <h4 className="text-gold font-semibold mb-4">{member.role}</h4>
                <p className="text-gray-600">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-black">
                Our <span className="text-gold">Culture</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                At Almeone, we foster an environment of innovation, collaboration, and continuous learning. 
                Our team is passionate about delivering excellence and building lasting partnerships with our clients.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-black mb-2">Innovation First</h3>
                    <p className="text-gray-600">We embrace new technologies and creative approaches to solve complex business challenges.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-black mb-2">Client Success</h3>
                    <p className="text-gray-600">Your success is our success. We're committed to delivering results that exceed expectations.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-black mb-2">Continuous Growth</h3>
                    <p className="text-gray-600">We invest in our team's development and stay ahead of industry trends and best practices.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-gold/10 to-gold/5 p-6 rounded-xl">
                <div className="text-3xl font-bold text-black mb-2">15+</div>
                <div className="text-gray-600">Years of Excellence</div>
              </div>
              <div className="bg-gradient-to-br from-gold/10 to-gold/5 p-6 rounded-xl">
                <div className="text-3xl font-bold text-black mb-2">50+</div>
                <div className="text-gray-600">Team Members</div>
              </div>
              <div className="bg-gradient-to-br from-gold/10 to-gold/5 p-6 rounded-xl">
                <div className="text-3xl font-bold text-black mb-2">25+</div>
                <div className="text-gray-600">Countries Served</div>
              </div>
              <div className="bg-gradient-to-br from-gold/10 to-gold/5 p-6 rounded-xl">
                <div className="text-3xl font-bold text-black mb-2">98%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Awards */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-black">
              Certifications & <span className="text-gold">Awards</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our commitment to excellence is recognized through industry certifications and prestigious awards.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'ISO 9001:2015', type: 'Quality Management' },
              { name: 'ISO 27001', type: 'Information Security' },
              { name: 'AWS Partner', type: 'Cloud Solutions' },
              { name: 'Microsoft Gold', type: 'Technology Partner' }
            ].map((cert, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-black mb-2">{cert.name}</h3>
                <p className="text-gray-600">{cert.type}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;