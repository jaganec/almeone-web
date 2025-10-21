import React from 'react';

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
    <footer className="bg-black text-white pt-16 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent"></div>
      
      <div className="max-w-6xl mx-auto px-5">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 pb-12 border-b border-white/10">
          {/* Company Info Section */}
          <div className="lg:col-span-1 max-w-md">
            <div className="mb-6">
              <h3 className="text-gold text-3xl font-bold tracking-wide">ALMEONE</h3>
            </div>
            <p className="text-white/80 leading-relaxed mb-8">
              Transforming businesses through innovative technology solutions. 
              We help companies achieve their digital transformation goals with 
              cutting-edge development and strategic consulting.
            </p>
            <div className="space-y-3">
              {[
                { icon: '📧', text: 'hello@almeone.com' },
                { icon: '📞', text: '+1 (555) 123-4567' },
                { icon: '📍', text: 'New York, NY 10001' }
              ].map((contact, index) => (
                <div key={index} className="flex items-center gap-3 text-white/80">
                  <span className="text-xl">{contact.icon}</span>
                  <span>{contact.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="text-gold text-xl font-bold mb-6">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-white/70 hover:text-gold transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="py-12 border-b border-white/10">
          <div className="bg-white/5 p-10 rounded-2xl flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <h4 className="text-gold text-2xl font-bold mb-2">Stay Updated</h4>
              <p className="text-white/80">Subscribe to our newsletter for the latest updates, insights, and industry trends.</p>
            </div>
            <div className="flex gap-4 w-full md:w-auto min-w-80">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-white/20 rounded-lg bg-white/10 text-white placeholder-white/50 focus:outline-none focus:border-gold focus:bg-white/15 transition-all duration-300"
              />
              <button className="bg-gold text-black px-6 py-3 rounded-lg font-bold hover:bg-gold-dark transition-all duration-300 transform hover:-translate-y-0.5 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="py-12 border-b border-white/10">
          <div className="flex justify-center">
            <div className="flex gap-6">
              {['LinkedIn', 'Twitter', 'GitHub', 'Dribbble'].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className="flex items-center justify-center px-6 py-3 bg-white/10 text-white/80 rounded-lg border border-white/20 hover:bg-gold hover:text-black hover:border-gold transition-all duration-300 transform hover:-translate-y-1 text-sm font-medium"
                  aria-label={social}
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-white/60 text-sm">
            <p>&copy; {currentYear} Almeone. All rights reserved.</p>
            <div className="flex gap-8">
              {['Privacy Policy', 'Terms of Service', 'Cookies'].map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="hover:text-gold transition-colors duration-300"
                >
                  {link}
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