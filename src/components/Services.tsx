import React, { useState } from 'react';
import { Globe, ShoppingCart, Zap, CheckCircle, Clock, Shield } from 'lucide-react';

const Services = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services = [
    {
      icon: Globe,
      title: 'Portfolio Websites',
      price: '₹1,999',
      originalPrice: '₹2,999',
      description: 'Professional portfolio websites that showcase your work beautifully',
      features: [
        'Responsive Design',
        'Contact Forms',
        'Gallery Integration',
        'SEO Optimized',
        'Fast Loading'
      ],
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-50 to-cyan-50'
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce Websites',
      price: '₹2,499',
      originalPrice: '₹3,999',
      description: 'Complete online stores with payment integration and inventory management',
      features: [
        'Payment Gateway',
        'Product Management',
        'Shopping Cart',
        'Order Tracking',
        'Mobile Friendly'
      ],
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-50 to-pink-50',
      popular: true
    }
  ];

  const commonFeatures = [
    { icon: Clock, text: 'Delivered in 2 days' },
    { icon: CheckCircle, text: 'WhatsApp + Payment buttons included' },
    { icon: Shield, text: 'SEO-ready' }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Zap className="h-4 w-4" />
            <span>My Services</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            What I
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"> Offer</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional web development services tailored to your needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className={`relative group rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 ${
                hoveredCard === index ? 'shadow-2xl' : 'shadow-xl hover:shadow-2xl'
              }`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Most Popular
                  </div>
                </div>
              )}

              <div className={`bg-gradient-to-br ${service.bgGradient} p-8 h-full`}>
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-gray-900">{service.price}</span>
                      <span className="text-lg text-gray-500 line-through">{service.originalPrice}</span>
                    </div>
                    <div className="text-sm text-green-600 font-medium">Save {parseInt(service.originalPrice.slice(1)) - parseInt(service.price.slice(1))}</div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">{service.description}</p>

                <div className="space-y-3 mb-8">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className={`w-full bg-gradient-to-r ${service.gradient} hover:shadow-lg text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 hover:scale-105 group`}>
                  <span className="flex items-center justify-center space-x-2">
                    <span>Get Started</span>
                    <Zap className="h-5 w-5 group-hover:animate-pulse" />
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Common Features */}
        <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Included with Every Project</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {commonFeatures.map((feature, index) => (
              <div key={feature.text} className="flex items-center space-x-4 group">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <span className="text-gray-700 font-medium">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;