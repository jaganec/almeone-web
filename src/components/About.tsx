import React from 'react';

interface StatCardProps {
  number: string;
  label: string;
}

interface ValueProps {
  icon: string;
  title: string;
  description: string;
}

const StatCard: React.FC<StatCardProps> = ({ number, label }) => (
  <div className="bg-white p-8 rounded-2xl text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-gold">
    <span className="block text-3xl lg:text-4xl font-bold text-gold mb-2">{number}</span>
    <span className="block text-gray-600 text-sm font-medium">{label}</span>
  </div>
);

const ValueCard: React.FC<ValueProps> = ({ icon, title, description }) => (
  <div className="bg-gray-50 p-10 rounded-2xl text-center transition-all duration-300 hover:bg-white hover:border-gold hover:shadow-xl transform hover:-translate-y-2 border-2 border-transparent">
    <div className="text-5xl mb-6">{icon}</div>
    <h4 className="text-xl font-bold text-black mb-4">{title}</h4>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

const About: React.FC = () => {
  const stats: StatCardProps[] = [
    { number: '5+', label: 'Years Experience' },
    { number: '500+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '24/7', label: 'Support Available' }
  ];

  const values: ValueProps[] = [
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
    <section id="about" className="py-20 bg-white relative">
      <div className="max-w-6xl mx-auto px-5">
        {/* Main About Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-black">About Almeone</h2>
            <div className="space-y-6 mb-10">
              <p className="text-gray-600 text-lg leading-relaxed">
                At Almeone, we believe in the power of technology to transform businesses 
                and create meaningful impact. Founded with a vision to bridge the gap between 
                innovative technology and practical business solutions, we have grown into a 
                trusted partner for companies worldwide.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our team of experienced developers, designers, and strategists work 
                collaboratively to deliver solutions that not only meet today's needs but 
                also prepare your business for tomorrow's challenges.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                From startups to enterprise-level organizations, we've helped businesses 
                across various industries achieve their digital transformation goals through 
                custom software development, innovative design, and strategic consulting.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="p-6 bg-gray-50 rounded-xl border-l-4 border-gold">
                <h4 className="text-xl font-bold text-black mb-2">Our Expertise</h4>
                <p className="text-gray-600 leading-relaxed">Specialized in modern web technologies, mobile development, cloud solutions, and digital transformation strategies.</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-xl border-l-4 border-gold">
                <h4 className="text-xl font-bold text-black mb-2">Our Approach</h4>
                <p className="text-gray-600 leading-relaxed">Agile methodology, collaborative process, and continuous communication ensure successful project delivery every time.</p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center items-center">
            <div className="grid grid-cols-2 gap-6 w-full max-w-md">
              {stats.map((stat, index) => (
                <StatCard key={index} {...stat} />
              ))}
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h3 className="text-center text-3xl lg:text-4xl font-bold text-black mb-12">Why Choose Almeone?</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <ValueCard key={index} {...value} />
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-gray-50 p-16 rounded-3xl">
          <h3 className="text-center text-3xl lg:text-4xl font-bold text-black mb-8">Our Commitment</h3>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-600 text-lg leading-relaxed mb-12">
              We are dedicated to excellence in every project we undertake. Our commitment 
              goes beyond just delivering code – we deliver solutions that make a difference. 
              Every line of code, every design element, and every strategic decision is made 
              with your success in mind.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: '🔒', text: 'Security & Privacy First' },
                { icon: '⚙️', text: 'Scalable & Maintainable Code' },
                { icon: '📞', text: '24/7 Support & Maintenance' },
                { icon: '🚀', text: 'Future-Ready Solutions' }
              ].map((point, index) => (
                <div key={index} className="flex flex-col items-center p-6 bg-white rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <span className="text-3xl mb-2">{point.icon}</span>
                  <span className="text-gray-600 font-medium text-center">{point.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;