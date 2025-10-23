import React from 'react';
import Services from '../components/Services';

const ServicesPage: React.FC = () => {
  return (
    <div className="services-page">
      
      {/* Page Header */}
      <section className="bg-gradient-to-br from-black via-gray-900 to-gold/20 py-20 text-white">
        <div className="max-w-6xl mx-auto px-5 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            Our <span className="text-gold">Services</span>
          </h1>
          <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
            Comprehensive business solutions designed to accelerate your growth and drive sustainable success.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="bg-gold/20 text-gold px-4 py-2 rounded-full">Technology Solutions</span>
            <span className="bg-gold/20 text-gold px-4 py-2 rounded-full">Business Consulting</span>
            <span className="bg-gold/20 text-gold px-4 py-2 rounded-full">Digital Transformation</span>
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
              Our <span className="text-gold">Process</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We follow a proven methodology to ensure your project success from concept to delivery.
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
              <h3 className="text-xl font-bold mb-3 text-black">Discovery</h3>
              <p className="text-gray-600">
                We analyze your business needs, challenges, and objectives to create a tailored strategy.
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
              <h3 className="text-xl font-bold mb-3 text-black">Planning</h3>
              <p className="text-gray-600">
                Detailed project planning with timelines, milestones, and resource allocation for success.
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
              <h3 className="text-xl font-bold mb-3 text-black">Execution</h3>
              <p className="text-gray-600">
                Professional implementation with regular updates and quality assurance at every step.
              </p>
            </div>

            {/* Step 4 */}
            <div className="text-center">
              <div className="mb-6">
                <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-black">4</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-black">Success</h3>
              <p className="text-gray-600">
                Delivery, training, and ongoing support to ensure long-term success and growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-black">
              Industries We <span className="text-gold">Serve</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our expertise spans across multiple industries, delivering specialized solutions for diverse business needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Technology & Software', icon: '💻', description: 'Innovative tech solutions for digital transformation' },
              { name: 'Healthcare & Medical', icon: '🏥', description: 'Secure and compliant healthcare technology systems' },
              { name: 'Finance & Banking', icon: '🏦', description: 'Robust financial solutions with enhanced security' },
              { name: 'Retail & E-commerce', icon: '🛒', description: 'Scalable platforms for modern retail operations' },
              { name: 'Manufacturing', icon: '🏭', description: 'Process optimization and automation solutions' },
              { name: 'Education', icon: '🎓', description: 'Digital learning and management platforms' }
            ].map((industry, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-4xl mb-4">{industry.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-black">{industry.name}</h3>
                <p className="text-gray-600">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;