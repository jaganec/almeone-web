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

      {/* AI Use Cases & Reference Projects */}
      <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black text-white">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              AI-Powered <span className="text-gold">Use Cases</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-4">
              Real-world applications powered by Sradha Technologies' AI innovation and AlmeOne's implementation expertise
            </p>
            <p className="text-sm text-gray-400 max-w-3xl mx-auto">
              Leveraging cutting-edge machine learning, computer vision, and predictive analytics to solve complex business challenges
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Container Damage Detection */}
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-gold/20 hover:border-gold/40 transition-all duration-300">
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gold">Container Damage Inspection</h3>
              <p className="text-gray-300 mb-4">
                AI-powered computer vision system for automated detection of container damage, dents, and structural issues
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-gold">✓</span>
                  <span>99.2% accuracy in damage detection</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold">✓</span>
                  <span>Real-time processing under 3 seconds</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold">✓</span>
                  <span>Automated reporting and documentation</span>
                </li>
              </ul>
            </div>

            {/* Predictive Maintenance */}
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-gold/20 hover:border-gold/40 transition-all duration-300">
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gold">Predictive Maintenance</h3>
              <p className="text-gray-300 mb-4">
                Machine learning models that predict equipment failures before they occur, reducing downtime by up to 70%
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-gold">✓</span>
                  <span>IoT sensor data integration</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold">✓</span>
                  <span>Anomaly detection algorithms</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold">✓</span>
                  <span>Maintenance scheduling optimization</span>
                </li>
              </ul>
            </div>

            {/* Inventory Optimization */}
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-gold/20 hover:border-gold/40 transition-all duration-300">
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gold">Smart Inventory Management</h3>
              <p className="text-gray-300 mb-4">
                AI-driven demand forecasting and inventory optimization reducing holding costs and preventing stockouts
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-gold">✓</span>
                  <span>Demand forecasting with 95% accuracy</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold">✓</span>
                  <span>Dynamic reorder point calculation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold">✓</span>
                  <span>Multi-location inventory balancing</span>
                </li>
              </ul>
            </div>

            {/* Document Processing */}
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-gold/20 hover:border-gold/40 transition-all duration-300">
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gold">Intelligent Document Processing</h3>
              <p className="text-gray-300 mb-4">
                NLP-powered automation for extracting, validating, and processing documents with human-like accuracy
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-gold">✓</span>
                  <span>OCR with multilingual support (Arabic/English)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold">✓</span>
                  <span>Automated data validation and extraction</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold">✓</span>
                  <span>Workflow integration and routing</span>
                </li>
              </ul>
            </div>

            {/* Quality Control */}
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-gold/20 hover:border-gold/40 transition-all duration-300">
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gold">Automated Quality Control</h3>
              <p className="text-gray-300 mb-4">
                Vision AI for real-time defect detection in manufacturing and logistics, ensuring consistent quality standards
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-gold">✓</span>
                  <span>Real-time defect classification</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold">✓</span>
                  <span>Statistical process control</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold">✓</span>
                  <span>Automated quality reporting</span>
                </li>
              </ul>
            </div>

            {/* Supply Chain Analytics */}
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-gold/20 hover:border-gold/40 transition-all duration-300">
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gold">Supply Chain Intelligence</h3>
              <p className="text-gray-300 mb-4">
                Advanced analytics and AI for end-to-end supply chain visibility, optimization, and risk management
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-gold">✓</span>
                  <span>Real-time shipment tracking and ETA prediction</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold">✓</span>
                  <span>Route optimization and cost reduction</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold">✓</span>
                  <span>Risk assessment and mitigation strategies</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Technology Partnership Highlight */}
          <div className="bg-gradient-to-r from-gold/10 to-gold/20 p-8 rounded-2xl border-2 border-gold/30 text-center">
            <p className="text-lg text-white mb-4">
              <span className="font-bold text-gold">Powered by Partnership:</span> These AI solutions combine 
              Sradha Technologies' cutting-edge AI research and development with AlmeOne's deep domain expertise 
              and implementation capabilities across the Middle East region.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-white/10 px-4 py-2 rounded-full">TensorFlow</span>
              <span className="bg-white/10 px-4 py-2 rounded-full">PyTorch</span>
              <span className="bg-white/10 px-4 py-2 rounded-full">Computer Vision</span>
              <span className="bg-white/10 px-4 py-2 rounded-full">NLP</span>
              <span className="bg-white/10 px-4 py-2 rounded-full">Deep Learning</span>
              <span className="bg-white/10 px-4 py-2 rounded-full">Cloud AI Services</span>
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