import React, { useState } from 'react';
import { ExternalLink, Heart, UtensilsCrossed, Eye, Code } from 'lucide-react';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: 'Personalized Gift Website',
      description: 'Custom gift solutions, product catalog, seamless ordering',
      image: 'https://images.pexels.com/photos/264985/pexels-photo-264985.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: Heart,
      features: ['Product Customization', 'Gift Categories', 'Order Management', 'Mobile Responsive'],
      demoLink: 'https://heartjunction.in',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Food Delivery Website',
      description: 'Restaurant listings, online ordering, delivery tracking',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: UtensilsCrossed,
      features: ['Menu Management', 'Order Tracking', 'Payment Integration', 'Delivery System'],
      demoLink: 'https://preview--delicious-order-now-ui.lovable.app',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-900/50 text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Code className="h-4 w-4" />
            <span>Sample Projects</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Featured
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Work</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Take a look at some of my recent projects and see what I can create for you
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="group relative bg-gray-800 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
                
                {/* Overlay Icons */}
                <div className={`absolute top-4 right-4 w-12 h-12 bg-gradient-to-br ${project.color} rounded-xl flex items-center justify-center transition-all duration-300 ${
                  hoveredProject === index ? 'scale-110 rotate-6' : ''
                }`}>
                  <project.icon className="h-6 w-6 text-white" />
                </div>

                {/* Demo Button */}
                <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
                  hoveredProject === index ? 'opacity-100' : 'opacity-0'
                }`}>
                  <a 
                    href={project.demoLink}
                   target="_blank"
                   rel="noopener noreferrer"
                    className={`bg-gradient-to-r ${project.color} text-white px-6 py-3 rounded-full font-semibold flex items-center space-x-2 hover:scale-105 transition-transform duration-300 shadow-lg pointer-events-auto`}
                  >
                    <Eye className="h-5 w-5" />
                    <span>View Demo</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 relative z-10">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {project.features.map((feature, featureIndex) => (
                    <div 
                      key={feature}
                      className="flex items-center space-x-3 opacity-0 animate-fade-in-left"
                      style={{ animationDelay: `${featureIndex * 0.1}s`, animationFillMode: 'forwards' }}
                    >
                      <div className={`w-2 h-2 bg-gradient-to-r ${project.color} rounded-full`}></div>
                      <span className="text-gray-400 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Action Button */}
                <a 
                  href={project.demoLink}
                 target="_blank"
                 rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-blue-400 hover:text-white font-medium transition-colors duration-300 group"
                >
                  <span>View Project</span>
                  <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>

              {/* Animated Border */}
              <div className={`absolute inset-0 border-2 border-transparent bg-gradient-to-r ${project.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} 
                   style={{ mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', maskComposite: 'subtract' }}></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Start Your Project?</h3>
            <p className="text-gray-300 mb-6">Let's discuss your vision and bring it to life</p>
            <a 
              href="https://wa.me/919027723883" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25"
            >
              <span>Start Your Project</span>
              <ExternalLink className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-left {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-fade-in-left {
          animation: fade-in-left 0.6s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Projects;