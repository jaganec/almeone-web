import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      company: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email Us',
      info: 'hello@almeone.com',
      description: 'Send us an email anytime'
    },
    {
      icon: '📞',
      title: 'Call Us',
      info: '+1 (555) 123-4567',
      description: 'Mon-Fri from 8am to 5pm'
    },
    {
      icon: '📍',
      title: 'Visit Us',
      info: '123 Business Ave, Suite 100',
      description: 'New York, NY 10001'
    },
    {
      icon: '💬',
      title: 'Live Chat',
      info: 'Available 24/7',
      description: 'Get instant support'
    }
  ];

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Ready to start your next project? Let's discuss how we can help bring your ideas to life.
        </p>

        <div className="contact-content">
          {/* Contact Information */}
          <div className="contact-info">
            <div className="contact-intro">
              <h3>Let's Start a Conversation</h3>
              <p>
                We'd love to hear about your project and discuss how our expertise 
                can help you achieve your goals. Reach out to us using any of the 
                methods below, and we'll get back to you within 24 hours.
              </p>
            </div>

            <div className="contact-methods">
              {contactInfo.map((method, index) => (
                <div key={index} className="contact-method">
                  <div className="method-icon">{method.icon}</div>
                  <div className="method-content">
                    <h4>{method.title}</h4>
                    <p className="method-info">{method.info}</p>
                    <p className="method-description">{method.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="social-links">
              <h4>Follow Us</h4>
              <div className="social-icons">
                <a href="#" className="social-link">LinkedIn</a>
                <a href="#" className="social-link">Twitter</a>
                <a href="#" className="social-link">GitHub</a>
                <a href="#" className="social-link">Dribbble</a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="company">Company</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your company name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="web-development">Web Development</option>
                  <option value="mobile-app">Mobile App Development</option>
                  <option value="cloud-services">Cloud Services</option>
                  <option value="ui-ux-design">UI/UX Design</option>
                  <option value="consulting">Consulting</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <button type="submit" className="btn-primary form-submit">
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* CTA Section */}
        <div className="contact-cta">
          <div className="cta-content">
            <h3>Ready to Transform Your Business?</h3>
            <p>Join hundreds of satisfied clients who have trusted us with their digital transformation journey.</p>
            <div className="cta-stats">
              <div className="cta-stat">
                <span>500+</span>
                <span>Projects Delivered</span>
              </div>
              <div className="cta-stat">
                <span>98%</span>
                <span>Client Satisfaction</span>
              </div>
              <div className="cta-stat">
                <span>24/7</span>
                <span>Support Available</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;