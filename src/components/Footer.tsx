import React, { useState } from 'react';

interface FooterLink {
  name: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [subscribeStatus, setSubscribeStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setSubscribeStatus('loading');
    
    try {
      // Simulate newsletter subscription - replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubscribeStatus('success');
      setEmail('');
      
      // Reset status after 3 seconds
      setTimeout(() => setSubscribeStatus('idle'), 3000);
      
      console.log('Newsletter subscription for:', email);
    } catch (error) {
      setSubscribeStatus('error');
      setTimeout(() => setSubscribeStatus('idle'), 3000);
    }
  };

  const footerSections: FooterSection[] = [
    {
      title: 'Services',
      links: [
        { name: 'Web Development', href: '#services' },
        { name: 'Mobile Apps', href: '#services' },
        { name: 'Cloud Solutions', href: '#services' },
        { name: 'UI/UX Design', href: '#services' },
        { name: 'Consulting', href: '#services' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '#about' },
        { name: 'Our Team', href: '#about' },
        { name: 'Careers', href: '#contact' },
        { name: 'Blog', href: '#' },
        { name: 'Case Studies', href: '#' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Documentation', href: '#' },
        { name: 'Support Center', href: '#contact' },
        { name: 'Privacy Policy', href: '#' },
        { name: 'Terms of Service', href: '#' },
        { name: 'FAQ', href: '#' }
      ]
    }
  ];

  return (
    <footer className="bg-black text-white pt-12 sm:pt-16 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 pb-8 sm:pb-12 border-b border-white/10">
          {/* Company Info Section */}
          <div className="sm:col-span-2 lg:col-span-1 max-w-md">
            <div className="mb-6">
              {/* Enhanced Footer Logo - Vibrant & Glowing */}
              <div className="relative inline-block p-3 sm:p-4 rounded-2xl bg-gradient-to-br from-gold/25 via-gold/15 to-gold/5 border-2 border-gold/40 shadow-2xl shadow-gold/25 hover:shadow-gold/40 hover:shadow-2xl transition-all duration-500 hover:scale-105">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gold/10 to-transparent animate-pulse"></div>
                <img 
                  src="/logos/logo-vertical-gold-white.png" 
                  alt="AlmeOne - علمة" 
                  className="relative h-16 sm:h-20 w-auto filter brightness-125 contrast-110 saturate-125 drop-shadow-2xl"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const fallback = e.currentTarget.parentElement?.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'block';
                  }}
                />
              </div>
              <h3 className="text-gold text-2xl sm:text-3xl font-bold tracking-wide hidden">ALMEONE</h3>
            </div>
            <p className="text-white/80 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
              Transforming businesses through innovative technology solutions. 
              We help companies achieve their digital transformation goals with 
              cutting-edge development and strategic consulting.
            </p>
            <div className="space-y-2 sm:space-y-3">
              {[
                { icon: '📧', text: 'info@almeone.com' },
                { icon: '📞', text: '+974 33920094' },
                { icon: '📍', text: 'Doha, Qatar' }
              ].map((contact, index) => (
                <div key={index} className="flex items-center gap-2 sm:gap-3 text-white/80">
                  <span className="text-lg sm:text-xl flex-shrink-0">{contact.icon}</span>
                  <span className="text-sm sm:text-base break-all sm:break-normal">{contact.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Links - Mobile Responsive */}
          {footerSections.map((section, index) => (
            <div key={index} className="min-w-0">
              <h4 className="text-gold text-lg sm:text-xl font-bold mb-4 sm:mb-6">{section.title}</h4>
              <ul className="space-y-2 sm:space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-white/70 hover:text-gold transition-colors duration-300 text-xs sm:text-sm block py-1"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section - Mobile Responsive */}
        <div className="py-8 sm:py-12 border-b border-white/10">
          <div className="bg-white/5 p-6 sm:p-8 lg:p-10 rounded-2xl flex flex-col gap-6 sm:gap-8">
            <div className="text-center md:text-left">
              <h4 className="text-gold text-xl sm:text-2xl font-bold mb-2">Stay Updated</h4>
              <p className="text-white/80 text-sm sm:text-base">Subscribe to our newsletter for the latest updates, insights, and industry trends.</p>
            </div>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                disabled={subscribeStatus === 'loading'}
                className="flex-1 px-3 sm:px-4 py-2 sm:py-3 border border-white/20 rounded-lg bg-white/10 text-white placeholder-white/50 focus:outline-none focus:border-gold focus:bg-white/15 transition-all duration-300 text-sm sm:text-base disabled:opacity-50"
              />
              <button 
                type="submit"
                disabled={subscribeStatus === 'loading' || !email}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-bold transition-all duration-300 transform hover:-translate-y-0.5 whitespace-nowrap text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed ${
                  subscribeStatus === 'success' ? 'bg-green-500 text-white' :
                  subscribeStatus === 'error' ? 'bg-red-500 text-white' :
                  'bg-gold text-black hover:bg-gold-dark'
                }`}
              >
                {subscribeStatus === 'loading' ? 'Subscribing...' :
                 subscribeStatus === 'success' ? 'Subscribed!' :
                 subscribeStatus === 'error' ? 'Try Again' :
                 'Subscribe'}
              </button>
            </form>
            {subscribeStatus === 'success' && (
              <p className="text-green-400 text-sm text-center">Thank you for subscribing to our newsletter!</p>
            )}
            {subscribeStatus === 'error' && (
              <p className="text-red-400 text-sm text-center">Failed to subscribe. Please try again.</p>
            )}
          </div>
        </div>

        {/* Social Links - Mobile Responsive */}
        <div className="py-8 sm:py-12 border-b border-white/10">
          <div className="flex justify-center">
            <div className="grid grid-cols-2 sm:flex gap-3 sm:gap-4 lg:gap-6 max-w-md sm:max-w-none">
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
                  className="flex items-center justify-center px-3 sm:px-4 lg:px-6 py-2 sm:py-3 bg-white/10 text-white/80 rounded-lg border border-white/20 hover:bg-gold hover:text-black hover:border-gold transition-all duration-300 transform hover:-translate-y-1 text-xs sm:text-sm font-medium text-center"
                  aria-label={social.name}
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom - Mobile Responsive */}
        <div className="py-6 sm:py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-white/60 text-xs sm:text-sm">
            <p className="text-center sm:text-left">&copy; {currentYear} Almeone. All rights reserved.</p>
            <div className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6 lg:gap-8">
              {[
                { name: 'Privacy Policy', url: '/privacy' },
                { name: 'Terms of Service', url: '/terms' },
                { name: 'Cookies', url: '/cookies' }
              ].map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className="hover:text-gold transition-colors duration-300 whitespace-nowrap"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;