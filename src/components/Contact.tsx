import React, { useState, FormEvent, ChangeEvent } from 'react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { ButtonLoader, useLoading } from './LoadingSpinner';

interface FormData {
  name: string;
  email: string;
  company: string;
  subject: string;
  message: string;
}

interface ContactMethodProps {
  icon: string;
  title: string;
  info: string;
  description: string;
}

const ContactMethod: React.FC<ContactMethodProps> = ({ icon, title, info, description }) => (
  <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:translate-x-2 border-l-4 border-gold">
    <div className="flex items-center justify-center w-15 h-15 bg-gradient-to-br from-gold to-gold-dark rounded-full text-2xl flex-shrink-0">
      {icon}
    </div>
    <div>
      <h4 className="text-xl font-bold text-black mb-2">{title}</h4>
      <p className="text-gold font-bold mb-1">{info}</p>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  </div>
);

const Contact: React.FC = () => {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });
  
  const { isLoading, startLoading, stopLoading } = useLoading();
  const [submitMessage, setSubmitMessage] = useState<string>('');
  const [submitType, setSubmitType] = useState<'success' | 'error' | ''>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>): void => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    
    // Start loading
    startLoading();
    setSubmitMessage('');
    setSubmitType('');

    try {
      // Get reCAPTCHA token if available
      let recaptchaToken = '';
      if (executeRecaptcha) {
        try {
          recaptchaToken = await executeRecaptcha('contact_form');
        } catch (recaptchaError) {
          console.warn('reCAPTCHA failed, proceeding without token:', recaptchaError);
        }
      }

      // Submit to API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          subject: formData.subject,
          message: formData.message,
          recaptchaToken
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitType('success');
        setSubmitMessage(result.message);
        setFormData({
          name: '',
          email: '',
          company: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      setSubmitType('error');
      if (error instanceof Error) {
        setSubmitMessage(error.message);
      } else {
        setSubmitMessage('Network error. Please check your connection and try again.');
      }
    } finally {
      stopLoading();
    }
  };

  const contactInfo: ContactMethodProps[] = [
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
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-white relative">
      <div className="max-w-6xl mx-auto px-5">
        <h2 className="text-center text-4xl lg:text-5xl font-bold mb-5 text-black">Get In Touch</h2>
        <p className="text-center text-lg text-gray-600 mb-16 max-w-2xl mx-auto">
          Ready to start your next project? Let's discuss how we can help bring your ideas to life.
        </p>

        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          {/* Contact Information */}
          <div className="space-y-10">
            <div>
              <h3 className="text-3xl font-bold text-black mb-4">Let's Start a Conversation</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                We'd love to hear about your project and discuss how our expertise 
                can help you achieve your goals. Reach out to us using any of the 
                methods below, and we'll get back to you within 24 hours.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((method, index) => (
                <ContactMethod key={index} {...method} />
              ))}
            </div>

            <div>
              <h4 className="text-xl font-bold text-black mb-4">Follow Us</h4>
              <div className="flex flex-wrap gap-4">
                {[
                  { name: 'LinkedIn', url: 'https://linkedin.com/company/almeone' },
                  { name: 'Twitter', url: 'https://twitter.com/almeone' },
                  { name: 'GitHub', url: 'https://github.com/jaganec/almeone-web' },
                  { name: 'Dribbble', url: 'https://dribbble.com/almeone' }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-white text-black border-2 border-gold rounded-lg font-medium hover:bg-gold hover:text-black transition-all duration-300 transform hover:-translate-y-1"
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-12 rounded-3xl shadow-xl border-2 border-gold">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-black font-bold text-sm mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                  className="w-full p-4 border-2 border-gray-200 rounded-lg text-base transition-all duration-300 focus:outline-none focus:border-gold focus:ring-4 focus:ring-gold/10"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-black font-bold text-sm mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                  className="w-full p-4 border-2 border-gray-200 rounded-lg text-base transition-all duration-300 focus:outline-none focus:border-gold focus:ring-4 focus:ring-gold/10"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-black font-bold text-sm mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your company name"
                  className="w-full p-4 border-2 border-gray-200 rounded-lg text-base transition-all duration-300 focus:outline-none focus:border-gold focus:ring-4 focus:ring-gold/10"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-black font-bold text-sm mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full p-4 border-2 border-gray-200 rounded-lg text-base transition-all duration-300 focus:outline-none focus:border-gold focus:ring-4 focus:ring-gold/10"
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

              <div>
                <label htmlFor="message" className="block text-black font-bold text-sm mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell us about your project..."
                  className="w-full p-4 border-2 border-gray-200 rounded-lg text-base transition-all duration-300 focus:outline-none focus:border-gold focus:ring-4 focus:ring-gold/10 resize-vertical min-h-[120px]"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className={`w-full px-8 py-4 rounded-lg text-lg font-bold transition-all duration-300 transform ${
                  isLoading 
                    ? 'bg-gray-400 text-gray-600 cursor-not-allowed' 
                    : 'bg-gold text-black hover:bg-gold-dark hover:-translate-y-1'
                }`}
              >
                {isLoading ? (
                  <span className="flex items-center justify-center gap-3">
                    <ButtonLoader size="small" />
                    Sending...
                  </span>
                ) : (
                  'Send Message'
                )}
              </button>
              
              {/* Submit feedback message */}
              {submitMessage && (
                <div className={`mt-4 p-4 rounded-lg ${
                  submitType === 'success' 
                    ? 'bg-green-50 border border-green-200 text-green-800' 
                    : 'bg-red-50 border border-red-200 text-red-800'
                }`}>
                  {submitMessage}
                </div>
              )}
            </form>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-black p-16 rounded-3xl text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent"></div>
          <div className="relative z-10">
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-lg mb-12 opacity-90 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who have trusted us with their digital transformation journey.
            </p>
            <div className="grid md:grid-cols-3 gap-8 max-w-2xl mx-auto">
              {[
                { number: '500+', label: 'Projects Delivered' },
                { number: '98%', label: 'Client Satisfaction' },
                { number: '24/7', label: 'Support Available' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <span className="block text-3xl lg:text-4xl font-bold text-gold mb-2">{stat.number}</span>
                  <span className="text-white opacity-90 text-sm">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;