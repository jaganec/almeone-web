import React from 'react';

interface ServiceProps {
  icon: string;
  title: string;
  description: string;
  features: string[];
}

const ServiceCard: React.FC<ServiceProps> = ({ icon, title, description, features }) => (
  <div className="bg-white rounded-2xl p-10 text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 relative overflow-hidden border-t-4 border-gold group">
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
    
    <div className="text-5xl mb-6 flex justify-center items-center w-20 h-20 bg-gradient-to-br from-gold to-gold-dark rounded-full mx-auto shadow-lg shadow-gold/30">
      {icon}
    </div>
    
    <h3 className="text-2xl font-bold text-black mb-4">{title}</h3>
    <p className="text-gray-600 leading-relaxed mb-6">{description}</p>
    
    <ul className="space-y-3 mb-6">
      {features.map((feature, index) => (
        <li key={index} className="text-gray-600 relative pl-6">
          <span className="absolute left-0 text-gold font-bold">✓</span>
          {feature}
        </li>
      ))}
    </ul>
    
    <div className="mt-auto">
      <a 
        href={title === 'Warehouse Solutions' ? '/warehouse' : '#contact'}
        className="text-gold font-bold relative hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-gold transition-all duration-300"
      >
        {title === 'Warehouse Solutions' ? 'Explore Solutions' : 'Learn More'}
      </a>
    </div>
  </div>
);

const Services: React.FC = () => {
  const services: ServiceProps[] = [
    {
      icon: '🤖',
      title: 'AI Consultation & Strategy',
      description: 'Tailored AI strategies from process automation to predictive analytics designed to create measurable impact.',
      features: ['Process Automation Design', 'Predictive Analytics Implementation', 'AI Readiness Assessment', 'Custom AI Model Development']
    },
    {
      icon: '�',
      title: 'AI Integration Services',
      description: 'Seamless integration of AI capabilities into existing systems and workflows for enhanced efficiency.',
      features: ['Legacy System AI Integration', 'API-First AI Solutions', 'Workflow Automation', 'Data Pipeline Optimization']
    },
    {
      icon: '🏭',
      title: 'Warehouse Solutions',
      description: 'Advanced warehouse automation including container damage inspection and automated data capture systems.',
      features: ['Container Damage Inspection System', 'Automated Data Capture', 'Dimensioning & Warehouse Automation', 'Real-time Inventory Tracking']
    },
    {
      icon: '⚡',
      title: 'Next-Gen Development',
      description: 'Modern web applications, mobile solutions, and cloud-native architectures built with cutting-edge technologies.',
      features: ['React/Node.js Development', 'Cloud-Native Architecture', 'Mobile App Development', 'API-First Design']
    },
    {
      icon: '�️',
      title: 'Managed IT Support',
      description: '24/7 managed support ensuring your systems perform at peak efficiency with continuous monitoring.',
      features: ['24/7 System Monitoring', 'Proactive Maintenance', 'Security Management', 'Performance Optimization']
    },
    {
      icon: '🚀',
      title: 'Digital Transformation',
      description: 'Complete digital infrastructure and strategic IT services from legacy modernization to cloud migration.',
      features: ['Legacy System Modernization', 'Cloud Migration Strategy', 'Process Digitization', 'Technology Roadmap Planning']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50 relative">
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white to-transparent"></div>
      
      <div className="max-w-6xl mx-auto px-5">
        <h2 className="text-center text-4xl lg:text-5xl font-bold mb-5 text-black">
          <span className="text-gold">AlmeOne</span> Solutions
        </h2>
        <p className="text-center text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
          AI-driven solutions and warehouse automation expertise from Qatar's leading technology innovators
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
        
        <div className="text-center bg-white p-12 rounded-2xl shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent"></div>
          <div className="relative z-10">
            <h3 className="text-3xl font-bold text-black mb-4">Ready to Get Started?</h3>
            <p className="text-gray-600 text-lg mb-8 max-w-lg mx-auto">
              Let's discuss your project and find the perfect solution for your needs.
            </p>
            <a 
              href="#contact" 
              className="inline-block bg-gold text-black px-8 py-4 rounded-md text-lg font-bold hover:bg-gold-dark transition-all duration-300 transform hover:-translate-y-1"
            >
              Get Free Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;