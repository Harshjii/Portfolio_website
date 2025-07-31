import React from 'react';
import { Code, Heart, MessageCircle } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Code className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold">Harsh Gupta</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Freelance web developer creating modern, mobile-friendly websites for businesses and creators.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="space-y-2">
              {[
                { name: 'About', id: 'about' },
                { name: 'Services', id: 'services' },
                { name: 'Projects', id: 'projects' },
                { name: 'Contact', id: 'contact' }
              ].map((link) => (
                <button
                  key={link.name}
                  onClick={() => {
                    const element = document.getElementById(link.id);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="block text-gray-400 hover:text-white transition-colors duration-300"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Get In Touch</h3>
            <div className="space-y-3">
              <a 
                href="https://wa.me/919027723883" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-400 hover:text-green-400 transition-colors duration-300"
              >
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp: 9027723883</span>
              </a>
              <a 
                href="mailto:hero3333gup@gmail.com"
                className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors duration-300"
              >
                <span>📧</span>
                <span>hero3333gup@gmail.com</span>
              </a>
              <a 
                href="https://instagram.com/a.x.lgameharsh8" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-400 hover:text-pink-400 transition-colors duration-300"
              >
                <span>📸</span>
                <span>@a.x.lgameharsh8</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Harsh Gupta. All rights reserved.
            </p>
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500 animate-pulse" />
              <span>for amazing clients</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;