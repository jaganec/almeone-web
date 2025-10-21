import React, { useState, FormEvent, ChangeEvent } from 'react';

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
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) newErrors.name = 'Full name is required.';
    if (!emailRegex.test(formData.email)) newErrors.email = 'Please enter a valid email address.';
    if (!formData.subject) newErrors.subject = 'Please select a subject.';
    if (!formData.message.trim()) newErrors.message = 'Message cannot be empty.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
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
    { icon: '📧', title: 'Email Us', info: 'hello@almeone.com', description: 'Send us an email anytime' },
    { icon: '📞', title: 'Call Us', info: '+1 (555) 123-4567', description: 'Mon-Fri from 8am to 5pm' },
    { icon: '📍', title: 'Visit Us', info: '123 Business Ave, Suite 100', description: 'New York, NY 10001' },
    { icon: '💬', title: 'Live Chat', info: 'Available 24/7', description: 'Get instant support' }
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
                {['LinkedIn', 'Twitter', 'GitHub', 'Dribbble'].map((social, index) => (
                  <a
                    key={index}
                    href="#"
                    className="px-6 py-3 bg-white text-black border-2 border-gold rounded-lg font-medium hover:bg-gold hover:text-black transition-all duration-300 transform hover:-translate-y-1"
                  >
                    {social}
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
                className="w-full bg-gold text-black px-8 py-4 rounded-lg text-lg font-bold hover:bg-gold-dark transition-all duration-300 transform hover:-translate-y-1"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
