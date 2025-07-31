import React from 'react';
import { User, Heart, Zap, Target } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Heart,
      title: 'Passionate',
      description: 'I love creating beautiful, functional websites that make a difference.'
    },
    {
      icon: Zap,
      title: 'Fast Delivery',
      description: 'Quick turnaround times without compromising on quality.'
    },
    {
      icon: Target,
      title: 'Goal-Oriented',
      description: 'Focused on achieving your business objectives through web solutions.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <User className="h-4 w-4" />
            <span>About Me</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Building Digital
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Experiences</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                "Hi! I'm <span className="font-semibold text-blue-600">Harsh Gupta</span>, a freelance web developer. 
                I create modern and mobile-friendly websites for businesses and creators — 
                <span className="font-semibold text-gray-900"> fast, affordable, and fully customized.</span>"
              </p>
              
              <div className="flex flex-wrap gap-3 mb-6">
                {['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'MongoDB', 'Next.js'].map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-sm font-medium hover:scale-105 transition-transform duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" style={{ animationDelay: `${i * 0.1}s` }}></div>
                  ))}
                </div>
                <span className="text-sm text-gray-600">Committed to Excellence</span>
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;