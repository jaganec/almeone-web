import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-bg"></div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Innovation Meets <span className="text-gold">Excellence</span>
            </h1>
            <p className="hero-subtitle">
              Delivering cutting-edge technology solutions that transform businesses 
              and drive success in the digital age.
            </p>
            <div className="hero-actions">
              <a href="#services" className="btn-primary">Our Services</a>
              <a href="#about" className="btn-secondary">Learn More</a>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-card">
              <div className="card-content">
                <h3>Premium Solutions</h3>
                <p>Trusted by leading companies worldwide</p>
                <div className="stats">
                  <div className="stat">
                    <span className="stat-number">500+</span>
                    <span className="stat-label">Projects</span>
                  </div>
                  <div className="stat">
                    <span className="stat-number">50+</span>
                    <span className="stat-label">Clients</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-scroll">
        <div className="scroll-indicator">
          <span>Scroll Down</span>
          <div className="scroll-arrow"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;