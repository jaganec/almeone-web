import React from 'react';
import Services from '../components/Services';
import SEO from '../components/SEO';

const ServicesPage: React.FC = () => {
  return (
    <div className="services-page">
      <SEO 
        title="Services - AlmeOne | AI-Driven Solutions & Warehouse Automation"
        description="AlmeOne delivers AI consultation, warehouse automation, next-gen development, and managed IT support. Qatar-based expertise with global reach across technology and logistics domains."
        keywords="AI consultation, warehouse automation, container damage inspection, next-gen development, managed IT support, digital transformation, Qatar technology services, warehouse solutions"
        schema={{
          '@type': 'ItemList',
          '@context': 'https://schema.org',
          itemListElement: [
            {
              '@type': 'Service',
              position: 1,
              name: 'AI Consultation & Strategy',
              description: 'Tailored AI strategies from process automation to predictive analytics',
              provider: {
                '@type': 'Organization',
                name: 'AlmeOne',
                address: {
                  '@type': 'PostalAddress',
                  addressCountry: 'QA'
                }
              }
            },
            {
              '@type': 'Service',
              position: 2,
              name: 'Warehouse Solutions & Automation',
              description: 'Container damage inspection, automated data capture, and dimensioning systems',
              provider: {
                '@type': 'Organization',
                name: 'AlmeOne',
                address: {
                  '@type': 'PostalAddress',
                  addressCountry: 'QA'
                }
              }
            },
            {
              '@type': 'Service',
              position: 3,
              name: 'Next-Gen Development',
              description: 'Modern web applications, mobile solutions, and cloud-native architectures',
              provider: {
                '@type': 'Organization',
                name: 'AlmeOne',
                address: {
                  '@type': 'PostalAddress',
                  addressCountry: 'QA'
                }
              }
            }
          ]
        }}
      />
      {/* Page Header */}
      <section className="bg-gradient-to-br from-black via-gray-900 to-gold/20 py-20 text-white">
        <div className="max-w-6xl mx-auto px-5 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-gold">AlmeOne</span> Services
          </h1>
          <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
            AI-driven solutions and warehouse automation expertise. From intelligent consultation to operational transformation, we deliver right-fit, ready-to-scale solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="bg-gold/20 text-gold px-4 py-2 rounded-full">AI Solutions</span>
            <span className="bg-gold/20 text-gold px-4 py-2 rounded-full">Warehouse Automation</span>
            <span className="bg-gold/20 text-gold px-4 py-2 rounded-full">Next-Gen Development</span>
            <span className="bg-gold/20 text-gold px-4 py-2 rounded-full">24/7 Support</span>
          </div>
        </div>
      </section>

      {/* Services Component */}
      <Services />

      {/* Service Process Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-black">
              Our <span className="text-gold">Approach</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A proven methodology focused on understanding your operational challenges and delivering right-fit, ready-to-scale solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-black">1</span>
                </div>
                <div className="absolute top-10 left-1/2 transform translate-x-8 hidden lg:block">
                  <svg className="w-16 h-8 text-gold" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-black">Deep Analysis</h3>
              <p className="text-gray-600">
                We understand your operational challenges deeply through comprehensive analysis and stakeholder engagement.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-black">2</span>
                </div>
                <div className="absolute top-10 left-1/2 transform translate-x-8 hidden lg:block">
                  <svg className="w-16 h-8 text-gold" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-black">Right-Fit Design</h3>
              <p className="text-gray-600">
                Custom solution design tailored to your specific needs, ensuring optimal fit and maximum impact.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-black">3</span>
                </div>
                <div className="absolute top-10 left-1/2 transform translate-x-8 hidden lg:block">
                  <svg className="w-16 h-8 text-gold" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-black">Scale-Ready Implementation</h3>
              <p className="text-gray-600">
                Professional deployment with built-in scalability, ensuring your solution grows with your business.
              </p>
            </div>

            {/* Step 4 */}
            <div className="text-center">
              <div className="mb-6">
                <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-black">4</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-black">Continuous Excellence</h3>
              <p className="text-gray-600">
                24/7 managed support, continuous optimization, and evolution to ensure sustained operational excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Specializations Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-black">
              Our <span className="text-gold">Specializations</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Focused expertise in AI solutions and warehouse automation with deep operational understanding across key industries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Warehouse & Logistics', icon: '�', description: 'Container damage inspection, automated data capture, and dimensioning systems' },
              { name: 'AI & Machine Learning', icon: '🤖', description: 'Custom AI models, predictive analytics, and intelligent automation solutions' },
              { name: 'Supply Chain Management', icon: '🚛', description: 'End-to-end supply chain optimization with real-time tracking and analytics' },
              { name: 'Manufacturing Operations', icon: '🏭', description: 'Process automation, quality control systems, and operational intelligence' },
              { name: 'Technology Integration', icon: '⚡', description: 'Legacy system modernization and seamless technology integration' },
              { name: 'Data Analytics', icon: '📊', description: 'Business intelligence, data visualization, and predictive insights' }
            ].map((specialization, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-4xl mb-4">{specialization.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-black">{specialization.name}</h3>
                <p className="text-gray-600">{specialization.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;