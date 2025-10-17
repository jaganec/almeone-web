import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: '💻',
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies and best practices for optimal performance.',
      features: ['React/Vue/Angular', 'Node.js Backend', 'Database Design', 'API Development']
    },
    {
      icon: '📱',
      title: 'Mobile Solutions',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.',
      features: ['iOS & Android', 'React Native', 'Flutter', 'App Store Optimization']
    },
    {
      icon: '☁️',
      title: 'Cloud Services',
      description: 'Scalable cloud infrastructure and deployment solutions for modern businesses.',
      features: ['AWS/Azure/GCP', 'DevOps', 'Microservices', 'Container Orchestration']
    },
    {
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'Beautiful and intuitive designs that enhance user engagement and satisfaction.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems']
    },
    {
      icon: '🔧',
      title: 'System Integration',
      description: 'Seamless integration of existing systems with new technologies and platforms.',
      features: ['API Integration', 'Data Migration', 'Legacy Modernization', 'Third-party Services']
    },
    {
      icon: '🚀',
      title: 'Digital Transformation',
      description: 'Complete digital transformation strategies to modernize your business operations.',
      features: ['Process Automation', 'Digital Strategy', 'Technology Consulting', 'Change Management']
    }
  ];

  return (
    <section id="services" className="services section">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">
          Comprehensive technology solutions designed to drive your business forward
        </p>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="service-icon">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
              <div className="service-action">
                <a href="#contact" className="service-link">Learn More</a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="services-cta">
          <h3>Ready to Get Started?</h3>
          <p>Let's discuss your project and find the perfect solution for your needs.</p>
          <a href="#contact" className="btn-primary">Get Free Consultation</a>
        </div>
      </div>
    </section>
  );
};

export default Services;