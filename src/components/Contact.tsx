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

// Mock submit function
const submitForm = async (data: FormData): Promise<void> => {
  console.log('Form submitted:', data);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  // You can replace this with your actual API call
};

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

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
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

 const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  if (!validateForm()) return; // stop if validation fails

  try {
    // Simulate API call or replace with actual API request
    await submitForm(formData);

    // Show alert after successful submission
    alert('Thank you for your message! We will get back to you soon.');

    // Reset form fields
    setFormData({ name: '', email: '', company: '', subject: '', message: '' });
    setErrors({});
  } catch (error) {
    console.error('Form submission error:', error);
    alert('Something went wrong. Please try again later.');
  }
};
  const contactInfo: ContactMethodProps[] = [
    {
      icon: '📧',
      title: 'Email Us',
      info: 'hello@almeone.com',
      description: 'Get AI solutions consultation anytime'
    },
    {
      icon: '📞',
      title: 'Call Qatar HQ',
      info: '+974 4000 1234',
      description: 'Sun-Thu from 8am to 6pm GST'
    },
    {
      icon: '📍',
      title: 'Visit Qatar Office',
      info: 'West Bay Business District',
      description: 'Doha, Qatar - Headquarters'
    },
    {
      icon: '🤖',
      title: 'AI Solutions',
      info: 'Warehouse Automation',
      description: '24/7 intelligent support systems'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-white relative">
      <div className="max-w-6xl mx-auto px-5">
        <h2 className="text-center text-4xl lg:text-5xl font-bold mb-5 text-black">
          Connect with <span className="text-gold">AlmeOne</span>
        </h2>
        <p className="text-center text-lg text-gray-600 mb-16 max-w-3xl mx-auto">
          Ready to transform your warehouse operations with AI-driven solutions? Let's discuss how our Qatar-based expertise 
          can deliver intelligent automation and measurable results for your business.
        </p>

        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          {/* Contact Information */}
          <div className="space-y-10">
            <div>
              <h3 className="text-3xl font-bold text-black mb-4">Let's Transform Your Operations</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Ready to experience AlmeOne's AI-driven warehouse solutions? Our Qatar-based experts understand 
                your operational challenges and deliver right-fit, ready-to-scale solutions. Contact us using 
                any method below, and we'll respond within 24 hours with intelligent insights.
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
                <label htmlFor="name" className="block text-black font-bold text-sm mb-2">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="w-full p-4 border-2 border-gray-200 rounded-lg text-base transition-all duration-300 focus:outline-none focus:border-gold focus:ring-4 focus:ring-gold/10"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-black font-bold text-sm mb-2">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className="w-full p-4 border-2 border-gray-200 rounded-lg text-base transition-all duration-300 focus:outline-none focus:border-gold focus:ring-4 focus:ring-gold/10"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="company" className="block text-black font-bold text-sm mb-2">Company</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your company name"
                  className="w-full p-4 border-2 border-gray-200 rounded-lg text-base transition-all duration-300 focus:outline-none focus:border-gold focus:ring-4 focus:ring-gold/10"
                />
                {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
              </div>

              <div>
                <label htmlFor="subject" className="block text-black font-bold text-sm mb-2">Subject *</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
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
                {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-black font-bold text-sm mb-2">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell us about your project..."
                  className="w-full p-4 border-2 border-gray-200 rounded-lg text-base transition-all duration-300 focus:outline-none focus:border-gold focus:ring-4 focus:ring-gold/10 resize-vertical min-h-[120px]"
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
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
      </div>
    </section>
  );
};

export default Contact;
