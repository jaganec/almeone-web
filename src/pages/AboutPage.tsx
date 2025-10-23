import React from 'react';
import About from '../components/About';

const AboutPage: React.FC = () => {
  return (
    <div className="about-page">
      
      {/* Page Header */}
      <section className="bg-gradient-to-br from-black via-gray-900 to-gold/20 py-20 text-white">
        <div className="max-w-6xl mx-auto px-5 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            About <span className="text-gold">Almeone</span>
          </h1>
          <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto">
            Driving business excellence through innovative solutions, strategic partnerships, and unwavering commitment to success.
          </p>
        </div>
      </section>

      {/* About Component */}
      <About />

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