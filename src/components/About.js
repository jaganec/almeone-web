import React from 'react';
import './About.css';

const About = () => {
  const stats = [
    { number: '5+', label: 'Years Experience' },
    { number: '500+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '24/7', label: 'Support Available' }
  ];

  const values = [
    {
      icon: '🎯',
      title: 'Mission Driven',
      description: 'We are committed to delivering innovative solutions that exceed expectations and drive real business results.'
    },
    {
      icon: '💡',
      title: 'Innovation First',
      description: 'Staying ahead of technology trends to provide cutting-edge solutions that give you a competitive advantage.'
    },
    {
      icon: '🤝',
      title: 'Client Partnership',
      description: 'Building long-term relationships through transparency, communication, and dedicated support.'
    },
    {
      icon: '⚡',
      title: 'Quality & Speed',
      description: 'Delivering high-quality solutions efficiently without compromising on excellence or attention to detail.'
    }
  ];

  return (
    <section id="about" className="about section">
      <div className="container">
        {/* Main About Content */}
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">About Almeone</h2>
            <div className="about-description">
              <p>
                At Almeone, we believe in the power of technology to transform businesses 
                and create meaningful impact. Founded with a vision to bridge the gap between 
                innovative technology and practical business solutions, we have grown into a 
                trusted partner for companies worldwide.
              </p>
              <p>
                Our team of experienced developers, designers, and strategists work 
                collaboratively to deliver solutions that not only meet today's needs but 
                also prepare your business for tomorrow's challenges.
              </p>
              <p>
                From startups to enterprise-level organizations, we've helped businesses 
                across various industries achieve their digital transformation goals through 
                custom software development, innovative design, and strategic consulting.
              </p>
            </div>
            <div className="about-highlights">
              <div className="highlight">
                <h4>Our Expertise</h4>
                <p>Specialized in modern web technologies, mobile development, cloud solutions, and digital transformation strategies.</p>
              </div>
              <div className="highlight">
                <h4>Our Approach</h4>
                <p>Agile methodology, collaborative process, and continuous communication ensure successful project delivery every time.</p>
              </div>
            </div>
          </div>
          
          <div className="about-visual">
            <div className="stats-container">
              {stats.map((stat, index) => (
                <div key={index} className="stat-card">
                  <span className="stat-number">{stat.number}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="values-section">
          <h3 className="values-title">Why Choose Almeone?</h3>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h4 className="value-title">{value.title}</h4>
                <p className="value-description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="team-section">
          <h3 className="team-title">Our Commitment</h3>
          <div className="commitment-content">
            <div className="commitment-text">
              <p>
                We are dedicated to excellence in every project we undertake. Our commitment 
                goes beyond just delivering code – we deliver solutions that make a difference. 
                Every line of code, every design element, and every strategic decision is made 
                with your success in mind.
              </p>
              <div className="commitment-points">
                <div className="point">
                  <span className="point-icon">🔒</span>
                  <span>Security & Privacy First</span>
                </div>
                <div className="point">
                  <span className="point-icon">⚙️</span>
                  <span>Scalable & Maintainable Code</span>
                </div>
                <div className="point">
                  <span className="point-icon">📞</span>
                  <span>24/7 Support & Maintenance</span>
                </div>
                <div className="point">
                  <span className="point-icon">🚀</span>
                  <span>Future-Ready Solutions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;