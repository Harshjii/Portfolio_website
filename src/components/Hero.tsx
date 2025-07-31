import React, { useState, useEffect } from 'react';
import { ChevronDown, Sparkles, Code, Palette } from 'lucide-react';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "Hi! I'm Harsh Gupta";

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);

    return () => {
      clearInterval(timer);
      clearInterval(cursorTimer);
    };
  }, []);

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-float">
          <Code className="h-8 w-8 text-blue-300/30" />
        </div>
        <div className="absolute top-40 right-20 animate-float-delayed">
          <Palette className="h-6 w-6 text-purple-300/30" />
        </div>
        <div className="absolute bottom-40 left-20 animate-float">
          <Sparkles className="h-10 w-10 text-indigo-300/30" />
        </div>
        
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/20 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="mb-8 animate-fade-in-up">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
            <span className="inline-block">
              {typedText}
              <span className={`inline-block w-1 h-12 sm:h-16 lg:h-20 bg-blue-400 ml-2 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}></span>
            </span>
          </h1>
          
          <div className="text-xl sm:text-2xl text-blue-200 mb-8 animate-fade-in-up delay-1000">
            <span className="bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent font-semibold">
              Freelance Web Developer
            </span>
          </div>
          
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-10 animate-fade-in-up delay-1500">
            I create modern and mobile-friendly websites for businesses and creators — 
            <span className="text-white font-semibold"> fast, affordable, and fully customized.</span>
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in-up delay-2000">
          <button 
            onClick={scrollToAbout}
            className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
          >
            <span className="flex items-center space-x-2">
              <span>View My Work</span>
              <Sparkles className="h-5 w-5 group-hover:animate-spin" />
            </span>
          </button>
          
          <a 
            href="https://wa.me/919027723883" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group border-2 border-white/30 hover:border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105"
          >
            Get In Touch
          </a>
        </div>

        <button 
          onClick={scrollToAbout}
          className="animate-bounce text-white/70 hover:text-white transition-colors duration-300"
        >
          <ChevronDown className="h-8 w-8 mx-auto" />
        </button>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(5deg); }
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
          opacity: 0;
        }
        .delay-1000 {
          animation-delay: 1s;
        }
        .delay-1500 {
          animation-delay: 1.5s;
        }
        .delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default Hero;