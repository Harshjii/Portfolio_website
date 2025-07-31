import React, { useState } from 'react';
import { MessageCircle, Mail, Instagram, Phone, Send, MapPin } from 'lucide-react';

const Contact = () => {
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null);

  const socialLinks = [
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      value: '9027723883',
      href: 'https://wa.me/919027723883',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50 hover:bg-green-100'
    },
    {
      name: 'Email',
      icon: Mail,
      value: 'hero3333gup@gmail.com',
      href: 'mailto:hero3333gup@gmail.com',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50 hover:bg-blue-100'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      value: '@a.x.lgameharsh8',
      href: 'https://instagram.com/a.x.lgameharsh8',
      color: 'from-pink-500 to-purple-600',
      bgColor: 'bg-pink-50 hover:bg-pink-100'
    }
  ];

  const handleCopyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Phone className="h-4 w-4" />
            <span>Contact Me</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Let's Work
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent"> Together</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to bring your vision to life? Get in touch and let's discuss your project
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Have a project in mind? I'd love to hear about it. Send me a message and I'll respond within 24 hours.
              </p>
              
              <div className="space-y-6">
                {socialLinks.map((social) => (
                  <div 
                    key={social.name}
                    className={`group ${social.bgColor} rounded-xl p-4 transition-all duration-300 hover:scale-105 cursor-pointer`}
                    onMouseEnter={() => setHoveredSocial(social.name)}
                    onMouseLeave={() => setHoveredSocial(null)}
                    onClick={() => handleCopyToClipboard(social.value)}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${social.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <social.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">{social.name}</h4>
                        <p className="text-gray-600">{social.value}</p>
                      </div>
                      <a 
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-gray-600 transition-colors duration-300"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Send className="h-5 w-5" />
                      </a>
                    </div>
                    {hoveredSocial === social.name && (
                      <div className="mt-2 text-xs text-gray-500 animate-pulse">
                        Click to copy
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Why Choose Me?</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">2</div>
                  <div className="text-sm text-gray-600">Days Delivery</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
                  <div className="text-sm text-gray-600">Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
                  <div className="text-sm text-gray-600">Support</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">50+</div>
                  <div className="text-sm text-gray-600">Projects</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="Enter your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="Enter your email"
                />
              </div>
              
              <div>
                <label htmlFor="project" className="block text-sm font-medium text-gray-700 mb-2">
                  Project Type
                </label>
                <select
                  id="project"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                >
                  <option>Portfolio Website</option>
                  <option>E-commerce Website</option>
                  <option>Custom Website</option>
                  <option>Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Project Details
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25 flex items-center justify-center space-x-2"
              >
                <span>Send Message</span>
                <Send className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <div className="flex items-center justify-center mb-4">
              <MapPin className="h-6 w-6 mr-2" />
              <span className="text-lg font-medium">Based in India, Available Worldwide</span>
            </div>
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Let's turn your ideas into reality. Contact me today for a free consultation and quote.
            </p>
            <a 
              href="https://wa.me/919027723883" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105"
            >
              <MessageCircle className="h-5 w-5" />
              <span>Let's Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;